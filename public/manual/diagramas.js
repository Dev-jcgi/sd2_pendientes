function L0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s && Object.defineProperty(e, i, s.get ? s : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Q(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qg = { exports: {} }, Co = {}, Yg = { exports: {} }, F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $i = Symbol.for("react.element"), $0 = Symbol.for("react.portal"), N0 = Symbol.for("react.fragment"), R0 = Symbol.for("react.strict_mode"), I0 = Symbol.for("react.profiler"), F0 = Symbol.for("react.provider"), D0 = Symbol.for("react.context"), j0 = Symbol.for("react.forward_ref"), z0 = Symbol.for("react.suspense"), U0 = Symbol.for("react.memo"), B0 = Symbol.for("react.lazy"), vd = Symbol.iterator;
function W0(e) {
  return e === null || typeof e != "object" ? null : (e = vd && e[vd] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Vg = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Xg = Object.assign, Kg = {};
function vr(e, t, n) {
  this.props = e, this.context = t, this.refs = Kg, this.updater = n || Vg;
}
vr.prototype.isReactComponent = {};
vr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
vr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Qg() {
}
Qg.prototype = vr.prototype;
function bc(e, t, n) {
  this.props = e, this.context = t, this.refs = Kg, this.updater = n || Vg;
}
var Lc = bc.prototype = new Qg();
Lc.constructor = bc;
Xg(Lc, vr.prototype);
Lc.isPureReactComponent = !0;
var md = Array.isArray, Zg = Object.prototype.hasOwnProperty, $c = { current: null }, Jg = { key: !0, ref: !0, __self: !0, __source: !0 };
function ev(e, t, n) {
  var r, i = {}, s = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Zg.call(t, r) && !Jg.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: $i, type: e, key: s, ref: o, props: i, _owner: $c.current };
}
function G0(e, t) {
  return { $$typeof: $i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Nc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $i;
}
function H0(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var yd = /\/+/g;
function Oa(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? H0("" + e.key) : t.toString(36);
}
function Ps(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (s) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case $i:
        case $0:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + Oa(o, 0) : r, md(i) ? (n = "", e != null && (n = e.replace(yd, "$&/") + "/"), Ps(i, t, n, "", function(u) {
    return u;
  })) : i != null && (Nc(i) && (i = G0(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(yd, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", md(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + Oa(s, a);
    o += Ps(s, t, n, l, i);
  }
  else if (l = W0(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + Oa(s, a++), o += Ps(s, t, n, l, i);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Zi(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Ps(e, r, "", "", function(s) {
    return t.call(n, s, i++);
  }), r;
}
function q0(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ne = { current: null }, Es = { transition: null }, Y0 = { ReactCurrentDispatcher: Ne, ReactCurrentBatchConfig: Es, ReactCurrentOwner: $c };
function tv() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = { map: Zi, forEach: function(e, t, n) {
  Zi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Zi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Zi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Nc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
F.Component = vr;
F.Fragment = N0;
F.Profiler = I0;
F.PureComponent = bc;
F.StrictMode = R0;
F.Suspense = z0;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y0;
F.act = tv;
F.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Xg({}, e.props), i = e.key, s = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, o = $c.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Zg.call(t, l) && !Jg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: $i, type: e.type, key: i, ref: s, props: r, _owner: o };
};
F.createContext = function(e) {
  return e = { $$typeof: D0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: F0, _context: e }, e.Consumer = e;
};
F.createElement = ev;
F.createFactory = function(e) {
  var t = ev.bind(null, e);
  return t.type = e, t;
};
F.createRef = function() {
  return { current: null };
};
F.forwardRef = function(e) {
  return { $$typeof: j0, render: e };
};
F.isValidElement = Nc;
F.lazy = function(e) {
  return { $$typeof: B0, _payload: { _status: -1, _result: e }, _init: q0 };
};
F.memo = function(e, t) {
  return { $$typeof: U0, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function(e) {
  var t = Es.transition;
  Es.transition = {};
  try {
    e();
  } finally {
    Es.transition = t;
  }
};
F.unstable_act = tv;
F.useCallback = function(e, t) {
  return Ne.current.useCallback(e, t);
};
F.useContext = function(e) {
  return Ne.current.useContext(e);
};
F.useDebugValue = function() {
};
F.useDeferredValue = function(e) {
  return Ne.current.useDeferredValue(e);
};
F.useEffect = function(e, t) {
  return Ne.current.useEffect(e, t);
};
F.useId = function() {
  return Ne.current.useId();
};
F.useImperativeHandle = function(e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function(e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function(e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
F.useMemo = function(e, t) {
  return Ne.current.useMemo(e, t);
};
F.useReducer = function(e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
F.useRef = function(e) {
  return Ne.current.useRef(e);
};
F.useState = function(e) {
  return Ne.current.useState(e);
};
F.useSyncExternalStore = function(e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function() {
  return Ne.current.useTransition();
};
F.version = "18.3.1";
Yg.exports = F;
var C = Yg.exports;
const V0 = /* @__PURE__ */ Q(C), wd = /* @__PURE__ */ L0({
  __proto__: null,
  default: V0
}, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X0 = C, K0 = Symbol.for("react.element"), Q0 = Symbol.for("react.fragment"), Z0 = Object.prototype.hasOwnProperty, J0 = X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ew = { key: !0, ref: !0, __self: !0, __source: !0 };
function nv(e, t, n) {
  var r, i = {}, s = null, o = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Z0.call(t, r) && !ew.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: K0, type: e, key: s, ref: o, props: i, _owner: J0.current };
}
Co.Fragment = Q0;
Co.jsx = nv;
Co.jsxs = nv;
qg.exports = Co;
var H = qg.exports, rv = { exports: {} }, Ve = {}, iv = { exports: {} }, sv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(A, N) {
    var I = A.length;
    A.push(N);
    e: for (; 0 < I; ) {
      var se = I - 1 >>> 1, ve = A[se];
      if (0 < i(ve, N)) A[se] = N, A[I] = ve, I = se;
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var N = A[0], I = A.pop();
    if (I !== N) {
      A[0] = I;
      e: for (var se = 0, ve = A.length, Ki = ve >>> 1; se < Ki; ) {
        var pn = 2 * (se + 1) - 1, xa = A[pn], gn = pn + 1, Qi = A[gn];
        if (0 > i(xa, I)) gn < ve && 0 > i(Qi, xa) ? (A[se] = Qi, A[gn] = I, se = gn) : (A[se] = xa, A[pn] = I, se = pn);
        else if (gn < ve && 0 > i(Qi, I)) A[se] = Qi, A[gn] = I, se = gn;
        else break e;
      }
    }
    return N;
  }
  function i(A, N) {
    var I = A.sortIndex - N.sortIndex;
    return I !== 0 ? I : A.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var o = Date, a = o.now();
    e.unstable_now = function() {
      return o.now() - a;
    };
  }
  var l = [], u = [], c = 1, f = null, d = 3, g = !1, m = !1, v = !1, w = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(A) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= A) r(u), N.sortIndex = N.expirationTime, t(l, N);
      else break;
      N = n(u);
    }
  }
  function _(A) {
    if (v = !1, y(A), !m) if (n(l) !== null) m = !0, Ea(S);
    else {
      var N = n(u);
      N !== null && Ca(_, N.startTime - A);
    }
  }
  function S(A, N) {
    m = !1, v && (v = !1, h(E), E = -1), g = !0;
    var I = d;
    try {
      for (y(N), f = n(l); f !== null && (!(f.expirationTime > N) || A && !b()); ) {
        var se = f.callback;
        if (typeof se == "function") {
          f.callback = null, d = f.priorityLevel;
          var ve = se(f.expirationTime <= N);
          N = e.unstable_now(), typeof ve == "function" ? f.callback = ve : f === n(l) && r(l), y(N);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Ki = !0;
      else {
        var pn = n(u);
        pn !== null && Ca(_, pn.startTime - N), Ki = !1;
      }
      return Ki;
    } finally {
      f = null, d = I, g = !1;
    }
  }
  var k = !1, P = null, E = -1, T = 5, O = -1;
  function b() {
    return !(e.unstable_now() - O < T);
  }
  function L() {
    if (P !== null) {
      var A = e.unstable_now();
      O = A;
      var N = !0;
      try {
        N = P(!0, A);
      } finally {
        N ? le() : (k = !1, P = null);
      }
    } else k = !1;
  }
  var le;
  if (typeof p == "function") le = function() {
    p(L);
  };
  else if (typeof MessageChannel < "u") {
    var Ee = new MessageChannel(), b0 = Ee.port2;
    Ee.port1.onmessage = L, le = function() {
      b0.postMessage(null);
    };
  } else le = function() {
    w(L, 0);
  };
  function Ea(A) {
    P = A, k || (k = !0, le());
  }
  function Ca(A, N) {
    E = w(function() {
      A(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
    A.callback = null;
  }, e.unstable_continueExecution = function() {
    m || g || (m = !0, Ea(S));
  }, e.unstable_forceFrameRate = function(A) {
    0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < A ? Math.floor(1e3 / A) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(A) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = d;
    }
    var I = d;
    d = N;
    try {
      return A();
    } finally {
      d = I;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(A, N) {
    switch (A) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        A = 3;
    }
    var I = d;
    d = A;
    try {
      return N();
    } finally {
      d = I;
    }
  }, e.unstable_scheduleCallback = function(A, N, I) {
    var se = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? se + I : se) : I = se, A) {
      case 1:
        var ve = -1;
        break;
      case 2:
        ve = 250;
        break;
      case 5:
        ve = 1073741823;
        break;
      case 4:
        ve = 1e4;
        break;
      default:
        ve = 5e3;
    }
    return ve = I + ve, A = { id: c++, callback: N, priorityLevel: A, startTime: I, expirationTime: ve, sortIndex: -1 }, I > se ? (A.sortIndex = I, t(u, A), n(l) === null && A === n(u) && (v ? (h(E), E = -1) : v = !0, Ca(_, I - se))) : (A.sortIndex = ve, t(l, A), m || g || (m = !0, Ea(S))), A;
  }, e.unstable_shouldYield = b, e.unstable_wrapCallback = function(A) {
    var N = d;
    return function() {
      var I = d;
      d = N;
      try {
        return A.apply(this, arguments);
      } finally {
        d = I;
      }
    };
  };
})(sv);
iv.exports = sv;
var tw = iv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nw = C, Ye = tw;
function x(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ov = /* @__PURE__ */ new Set(), fi = {};
function Mn(e, t) {
  nr(e, t), nr(e + "Capture", t);
}
function nr(e, t) {
  for (fi[e] = t, e = 0; e < t.length; e++) ov.add(t[e]);
}
var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vu = Object.prototype.hasOwnProperty, rw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _d = {}, Sd = {};
function iw(e) {
  return vu.call(Sd, e) ? !0 : vu.call(_d, e) ? !1 : rw.test(e) ? Sd[e] = !0 : (_d[e] = !0, !1);
}
function sw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ow(e, t, n, r) {
  if (t === null || typeof t > "u" || sw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Re(e, t, n, r, i, s, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o;
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Pe[e] = new Re(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Pe[t] = new Re(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Pe[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Pe[e] = new Re(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Pe[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Pe[e] = new Re(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Pe[e] = new Re(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Pe[e] = new Re(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Pe[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rc = /[\-:]([a-z])/g;
function Ic(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Rc,
    Ic
  );
  Pe[t] = new Re(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Rc, Ic);
  Pe[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Rc, Ic);
  Pe[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Pe[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new Re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Pe[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Fc(e, t, n, r) {
  var i = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ow(t, n, i, r) && (n = null), r || i === null ? iw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Wt = nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ji = Symbol.for("react.element"), In = Symbol.for("react.portal"), Fn = Symbol.for("react.fragment"), Dc = Symbol.for("react.strict_mode"), mu = Symbol.for("react.profiler"), av = Symbol.for("react.provider"), lv = Symbol.for("react.context"), jc = Symbol.for("react.forward_ref"), yu = Symbol.for("react.suspense"), wu = Symbol.for("react.suspense_list"), zc = Symbol.for("react.memo"), Yt = Symbol.for("react.lazy"), uv = Symbol.for("react.offscreen"), kd = Symbol.iterator;
function Fr(e) {
  return e === null || typeof e != "object" ? null : (e = kd && e[kd] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ne = Object.assign, Ta;
function Vr(e) {
  if (Ta === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ta = t && t[1] || "";
  }
  return `
` + Ta + e;
}
var Ma = !1;
function Aa(e, t) {
  if (!e || Ma) return "";
  Ma = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a]; ) a--;
      for (; 1 <= o && 0 <= a; o--, a--) if (i[o] !== s[a]) {
        if (o !== 1 || a !== 1)
          do
            if (o--, a--, 0 > a || i[o] !== s[a]) {
              var l = `
` + i[o].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= o && 0 <= a);
        break;
      }
    }
  } finally {
    Ma = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Vr(e) : "";
}
function aw(e) {
  switch (e.tag) {
    case 5:
      return Vr(e.type);
    case 16:
      return Vr("Lazy");
    case 13:
      return Vr("Suspense");
    case 19:
      return Vr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Aa(e.type, !1), e;
    case 11:
      return e = Aa(e.type.render, !1), e;
    case 1:
      return e = Aa(e.type, !0), e;
    default:
      return "";
  }
}
function _u(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case In:
      return "Portal";
    case mu:
      return "Profiler";
    case Dc:
      return "StrictMode";
    case yu:
      return "Suspense";
    case wu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case lv:
      return (e.displayName || "Context") + ".Consumer";
    case av:
      return (e._context.displayName || "Context") + ".Provider";
    case jc:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case zc:
      return t = e.displayName || null, t !== null ? t : _u(e.type) || "Memo";
    case Yt:
      t = e._payload, e = e._init;
      try {
        return _u(e(t));
      } catch {
      }
  }
  return null;
}
function lw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return _u(t);
    case 8:
      return t === Dc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function cv(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function uw(e) {
  var t = cv(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(o) {
      r = "" + o, s.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function es(e) {
  e._valueTracker || (e._valueTracker = uw(e));
}
function fv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = cv(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function js(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Su(e, t) {
  var n = t.checked;
  return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Pd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = un(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function dv(e, t) {
  t = t.checked, t != null && Fc(e, "checked", t, !1);
}
function ku(e, t) {
  dv(e, t);
  var n = un(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Pu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Pu(e, t.type, un(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ed(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Pu(e, t, n) {
  (t !== "number" || js(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xr = Array.isArray;
function Vn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + un(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Eu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Cd(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(x(92));
      if (Xr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: un(n) };
}
function hv(e, t) {
  var n = un(t.value), r = un(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function xd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function pv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Cu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? pv(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ts, gv = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ts = ts || document.createElement("div"), ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ts.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function di(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ti = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, cw = ["Webkit", "ms", "Moz", "O"];
Object.keys(ti).forEach(function(e) {
  cw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ti[t] = ti[e];
  });
});
function vv(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ti.hasOwnProperty(e) && ti[e] ? ("" + t).trim() : t + "px";
}
function mv(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = vv(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var fw = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function xu(e, t) {
  if (t) {
    if (fw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function Ou(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Tu = null;
function Uc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Mu = null, Xn = null, Kn = null;
function Od(e) {
  if (e = Ii(e)) {
    if (typeof Mu != "function") throw Error(x(280));
    var t = e.stateNode;
    t && (t = Ao(t), Mu(e.stateNode, e.type, t));
  }
}
function yv(e) {
  Xn ? Kn ? Kn.push(e) : Kn = [e] : Xn = e;
}
function wv() {
  if (Xn) {
    var e = Xn, t = Kn;
    if (Kn = Xn = null, Od(e), t) for (e = 0; e < t.length; e++) Od(t[e]);
  }
}
function _v(e, t) {
  return e(t);
}
function Sv() {
}
var ba = !1;
function kv(e, t, n) {
  if (ba) return e(t, n);
  ba = !0;
  try {
    return _v(e, t, n);
  } finally {
    ba = !1, (Xn !== null || Kn !== null) && (Sv(), wv());
  }
}
function hi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ao(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var Au = !1;
if (Ft) try {
  var Dr = {};
  Object.defineProperty(Dr, "passive", { get: function() {
    Au = !0;
  } }), window.addEventListener("test", Dr, Dr), window.removeEventListener("test", Dr, Dr);
} catch {
  Au = !1;
}
function dw(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ni = !1, zs = null, Us = !1, bu = null, hw = { onError: function(e) {
  ni = !0, zs = e;
} };
function pw(e, t, n, r, i, s, o, a, l) {
  ni = !1, zs = null, dw.apply(hw, arguments);
}
function gw(e, t, n, r, i, s, o, a, l) {
  if (pw.apply(this, arguments), ni) {
    if (ni) {
      var u = zs;
      ni = !1, zs = null;
    } else throw Error(x(198));
    Us || (Us = !0, bu = u);
  }
}
function An(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Pv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Td(e) {
  if (An(e) !== e) throw Error(x(188));
}
function vw(e) {
  var t = e.alternate;
  if (!t) {
    if (t = An(e), t === null) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Td(i), e;
        if (s === r) return Td(i), t;
        s = s.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) n = i, r = s;
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          o = !0, n = i, r = s;
          break;
        }
        if (a === r) {
          o = !0, r = i, n = s;
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            o = !0, n = s, r = i;
            break;
          }
          if (a === r) {
            o = !0, r = s, n = i;
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Ev(e) {
  return e = vw(e), e !== null ? Cv(e) : null;
}
function Cv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var xv = Ye.unstable_scheduleCallback, Md = Ye.unstable_cancelCallback, mw = Ye.unstable_shouldYield, yw = Ye.unstable_requestPaint, oe = Ye.unstable_now, ww = Ye.unstable_getCurrentPriorityLevel, Bc = Ye.unstable_ImmediatePriority, Ov = Ye.unstable_UserBlockingPriority, Bs = Ye.unstable_NormalPriority, _w = Ye.unstable_LowPriority, Tv = Ye.unstable_IdlePriority, xo = null, Et = null;
function Sw(e) {
  if (Et && typeof Et.onCommitFiberRoot == "function") try {
    Et.onCommitFiberRoot(xo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var dt = Math.clz32 ? Math.clz32 : Ew, kw = Math.log, Pw = Math.LN2;
function Ew(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (kw(e) / Pw | 0) | 0;
}
var ns = 64, rs = 4194304;
function Kr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ws(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, s = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? r = Kr(a) : (s &= o, s !== 0 && (r = Kr(s)));
  } else o = n & ~i, o !== 0 ? r = Kr(o) : s !== 0 && (r = Kr(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - dt(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Cw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xw(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var o = 31 - dt(s), a = 1 << o, l = i[o];
    l === -1 ? (!(a & n) || a & r) && (i[o] = Cw(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function Lu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Mv() {
  var e = ns;
  return ns <<= 1, !(ns & 4194240) && (ns = 64), e;
}
function La(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ni(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - dt(t), e[t] = n;
}
function Ow(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - dt(n), s = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
  }
}
function Wc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var W = 0;
function Av(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var bv, Gc, Lv, $v, Nv, $u = !1, is = [], en = null, tn = null, nn = null, pi = /* @__PURE__ */ new Map(), gi = /* @__PURE__ */ new Map(), Kt = [], Tw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ad(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      pi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gi.delete(t.pointerId);
  }
}
function jr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = Ii(t), t !== null && Gc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Mw(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return en = jr(en, e, t, n, r, i), !0;
    case "dragenter":
      return tn = jr(tn, e, t, n, r, i), !0;
    case "mouseover":
      return nn = jr(nn, e, t, n, r, i), !0;
    case "pointerover":
      var s = i.pointerId;
      return pi.set(s, jr(pi.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return s = i.pointerId, gi.set(s, jr(gi.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Rv(e) {
  var t = wn(e.target);
  if (t !== null) {
    var n = An(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Pv(n), t !== null) {
          e.blockedOn = t, Nv(e.priority, function() {
            Lv(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Cs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Nu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Tu = r, n.target.dispatchEvent(r), Tu = null;
    } else return t = Ii(n), t !== null && Gc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function bd(e, t, n) {
  Cs(e) && n.delete(t);
}
function Aw() {
  $u = !1, en !== null && Cs(en) && (en = null), tn !== null && Cs(tn) && (tn = null), nn !== null && Cs(nn) && (nn = null), pi.forEach(bd), gi.forEach(bd);
}
function zr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, $u || ($u = !0, Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, Aw)));
}
function vi(e) {
  function t(i) {
    return zr(i, e);
  }
  if (0 < is.length) {
    zr(is[0], e);
    for (var n = 1; n < is.length; n++) {
      var r = is[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (en !== null && zr(en, e), tn !== null && zr(tn, e), nn !== null && zr(nn, e), pi.forEach(t), gi.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) Rv(n), n.blockedOn === null && Kt.shift();
}
var Qn = Wt.ReactCurrentBatchConfig, Gs = !0;
function bw(e, t, n, r) {
  var i = W, s = Qn.transition;
  Qn.transition = null;
  try {
    W = 1, Hc(e, t, n, r);
  } finally {
    W = i, Qn.transition = s;
  }
}
function Lw(e, t, n, r) {
  var i = W, s = Qn.transition;
  Qn.transition = null;
  try {
    W = 4, Hc(e, t, n, r);
  } finally {
    W = i, Qn.transition = s;
  }
}
function Hc(e, t, n, r) {
  if (Gs) {
    var i = Nu(e, t, n, r);
    if (i === null) Ba(e, t, r, Hs, n), Ad(e, r);
    else if (Mw(i, e, t, n, r)) r.stopPropagation();
    else if (Ad(e, r), t & 4 && -1 < Tw.indexOf(e)) {
      for (; i !== null; ) {
        var s = Ii(i);
        if (s !== null && bv(s), s = Nu(e, t, n, r), s === null && Ba(e, t, r, Hs, n), s === i) break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Ba(e, t, r, null, n);
  }
}
var Hs = null;
function Nu(e, t, n, r) {
  if (Hs = null, e = Uc(r), e = wn(e), e !== null) if (t = An(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Pv(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Hs = e, null;
}
function Iv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ww()) {
        case Bc:
          return 1;
        case Ov:
          return 4;
        case Bs:
        case _w:
          return 16;
        case Tv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zt = null, qc = null, xs = null;
function Fv() {
  if (xs) return xs;
  var e, t = qc, n = t.length, r, i = "value" in Zt ? Zt.value : Zt.textContent, s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++) ;
  return xs = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Os(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ss() {
  return !0;
}
function Ld() {
  return !1;
}
function Xe(e) {
  function t(n, r, i, s, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ss : Ld, this.isPropagationStopped = Ld, this;
  }
  return ne(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ss);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ss);
  }, persist: function() {
  }, isPersistent: ss }), t;
}
var mr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Yc = Xe(mr), Ri = ne({}, mr, { view: 0, detail: 0 }), $w = Xe(Ri), $a, Na, Ur, Oo = ne({}, Ri, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ur && (Ur && e.type === "mousemove" ? ($a = e.screenX - Ur.screenX, Na = e.screenY - Ur.screenY) : Na = $a = 0, Ur = e), $a);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Na;
} }), $d = Xe(Oo), Nw = ne({}, Oo, { dataTransfer: 0 }), Rw = Xe(Nw), Iw = ne({}, Ri, { relatedTarget: 0 }), Ra = Xe(Iw), Fw = ne({}, mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Dw = Xe(Fw), jw = ne({}, mr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), zw = Xe(jw), Uw = ne({}, mr, { data: 0 }), Nd = Xe(Uw), Bw = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Ww = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Gw = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Hw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gw[e]) ? !!t[e] : !1;
}
function Vc() {
  return Hw;
}
var qw = ne({}, Ri, { key: function(e) {
  if (e.key) {
    var t = Bw[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Os(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ww[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vc, charCode: function(e) {
  return e.type === "keypress" ? Os(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Os(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Yw = Xe(qw), Vw = ne({}, Oo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rd = Xe(Vw), Xw = ne({}, Ri, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vc }), Kw = Xe(Xw), Qw = ne({}, mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zw = Xe(Qw), Jw = ne({}, Oo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), e_ = Xe(Jw), t_ = [9, 13, 27, 32], Xc = Ft && "CompositionEvent" in window, ri = null;
Ft && "documentMode" in document && (ri = document.documentMode);
var n_ = Ft && "TextEvent" in window && !ri, Dv = Ft && (!Xc || ri && 8 < ri && 11 >= ri), Id = " ", Fd = !1;
function jv(e, t) {
  switch (e) {
    case "keyup":
      return t_.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function zv(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function r_(e, t) {
  switch (e) {
    case "compositionend":
      return zv(t);
    case "keypress":
      return t.which !== 32 ? null : (Fd = !0, Id);
    case "textInput":
      return e = t.data, e === Id && Fd ? null : e;
    default:
      return null;
  }
}
function i_(e, t) {
  if (Dn) return e === "compositionend" || !Xc && jv(e, t) ? (e = Fv(), xs = qc = Zt = null, Dn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Dv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var s_ = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Dd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!s_[e.type] : t === "textarea";
}
function Uv(e, t, n, r) {
  yv(r), t = qs(t, "onChange"), 0 < t.length && (n = new Yc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ii = null, mi = null;
function o_(e) {
  Zv(e, 0);
}
function To(e) {
  var t = Un(e);
  if (fv(t)) return e;
}
function a_(e, t) {
  if (e === "change") return t;
}
var Bv = !1;
if (Ft) {
  var Ia;
  if (Ft) {
    var Fa = "oninput" in document;
    if (!Fa) {
      var jd = document.createElement("div");
      jd.setAttribute("oninput", "return;"), Fa = typeof jd.oninput == "function";
    }
    Ia = Fa;
  } else Ia = !1;
  Bv = Ia && (!document.documentMode || 9 < document.documentMode);
}
function zd() {
  ii && (ii.detachEvent("onpropertychange", Wv), mi = ii = null);
}
function Wv(e) {
  if (e.propertyName === "value" && To(mi)) {
    var t = [];
    Uv(t, mi, e, Uc(e)), kv(o_, t);
  }
}
function l_(e, t, n) {
  e === "focusin" ? (zd(), ii = t, mi = n, ii.attachEvent("onpropertychange", Wv)) : e === "focusout" && zd();
}
function u_(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return To(mi);
}
function c_(e, t) {
  if (e === "click") return To(t);
}
function f_(e, t) {
  if (e === "input" || e === "change") return To(t);
}
function d_(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var gt = typeof Object.is == "function" ? Object.is : d_;
function yi(e, t) {
  if (gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!vu.call(t, i) || !gt(e[i], t[i])) return !1;
  }
  return !0;
}
function Ud(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bd(e, t) {
  var n = Ud(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ud(n);
  }
}
function Gv(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Hv() {
  for (var e = window, t = js(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = js(e.document);
  }
  return t;
}
function Kc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function h_(e) {
  var t = Hv(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Gv(n.ownerDocument.documentElement, n)) {
    if (r !== null && Kc(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, s = Math.min(r.start, i);
        r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Bd(n, s);
        var o = Bd(
          n,
          r
        );
        i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var p_ = Ft && "documentMode" in document && 11 >= document.documentMode, jn = null, Ru = null, si = null, Iu = !1;
function Wd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Iu || jn == null || jn !== js(r) || (r = jn, "selectionStart" in r && Kc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), si && yi(si, r) || (si = r, r = qs(Ru, "onSelect"), 0 < r.length && (t = new Yc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = jn)));
}
function os(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var zn = { animationend: os("Animation", "AnimationEnd"), animationiteration: os("Animation", "AnimationIteration"), animationstart: os("Animation", "AnimationStart"), transitionend: os("Transition", "TransitionEnd") }, Da = {}, qv = {};
Ft && (qv = document.createElement("div").style, "AnimationEvent" in window || (delete zn.animationend.animation, delete zn.animationiteration.animation, delete zn.animationstart.animation), "TransitionEvent" in window || delete zn.transitionend.transition);
function Mo(e) {
  if (Da[e]) return Da[e];
  if (!zn[e]) return e;
  var t = zn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in qv) return Da[e] = t[n];
  return e;
}
var Yv = Mo("animationend"), Vv = Mo("animationiteration"), Xv = Mo("animationstart"), Kv = Mo("transitionend"), Qv = /* @__PURE__ */ new Map(), Gd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fn(e, t) {
  Qv.set(e, t), Mn(t, [e]);
}
for (var ja = 0; ja < Gd.length; ja++) {
  var za = Gd[ja], g_ = za.toLowerCase(), v_ = za[0].toUpperCase() + za.slice(1);
  fn(g_, "on" + v_);
}
fn(Yv, "onAnimationEnd");
fn(Vv, "onAnimationIteration");
fn(Xv, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(Kv, "onTransitionEnd");
nr("onMouseEnter", ["mouseout", "mouseover"]);
nr("onMouseLeave", ["mouseout", "mouseover"]);
nr("onPointerEnter", ["pointerout", "pointerover"]);
nr("onPointerLeave", ["pointerout", "pointerover"]);
Mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Qr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), m_ = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));
function Hd(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, gw(r, t, void 0, e), e.currentTarget = null;
}
function Zv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var a = r[o], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== s && i.isPropagationStopped()) break e;
        Hd(i, a, u), s = l;
      }
      else for (o = 0; o < r.length; o++) {
        if (a = r[o], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && i.isPropagationStopped()) break e;
        Hd(i, a, u), s = l;
      }
    }
  }
  if (Us) throw e = bu, Us = !1, bu = null, e;
}
function V(e, t) {
  var n = t[Uu];
  n === void 0 && (n = t[Uu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Jv(t, e, 2, !1), n.add(r));
}
function Ua(e, t, n) {
  var r = 0;
  t && (r |= 4), Jv(n, e, r, t);
}
var as = "_reactListening" + Math.random().toString(36).slice(2);
function wi(e) {
  if (!e[as]) {
    e[as] = !0, ov.forEach(function(n) {
      n !== "selectionchange" && (m_.has(n) || Ua(n, !1, e), Ua(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[as] || (t[as] = !0, Ua("selectionchange", !1, t));
  }
}
function Jv(e, t, n, r) {
  switch (Iv(t)) {
    case 1:
      var i = bw;
      break;
    case 4:
      i = Lw;
      break;
    default:
      i = Hc;
  }
  n = i.bind(null, t, n, e), i = void 0, !Au || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Ba(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var a = r.stateNode.containerInfo;
      if (a === i || a.nodeType === 8 && a.parentNode === i) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var l = o.tag;
        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        o = o.return;
      }
      for (; a !== null; ) {
        if (o = wn(a), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          r = s = o;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  kv(function() {
    var u = s, c = Uc(n), f = [];
    e: {
      var d = Qv.get(e);
      if (d !== void 0) {
        var g = Yc, m = e;
        switch (e) {
          case "keypress":
            if (Os(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Yw;
            break;
          case "focusin":
            m = "focus", g = Ra;
            break;
          case "focusout":
            m = "blur", g = Ra;
            break;
          case "beforeblur":
          case "afterblur":
            g = Ra;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = $d;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Rw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Kw;
            break;
          case Yv:
          case Vv:
          case Xv:
            g = Dw;
            break;
          case Kv:
            g = Zw;
            break;
          case "scroll":
            g = $w;
            break;
          case "wheel":
            g = e_;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = zw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Rd;
        }
        var v = (t & 4) !== 0, w = !v && e === "scroll", h = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var p = u, y; p !== null; ) {
          y = p;
          var _ = y.stateNode;
          if (y.tag === 5 && _ !== null && (y = _, h !== null && (_ = hi(p, h), _ != null && v.push(_i(p, _, y)))), w) break;
          p = p.return;
        }
        0 < v.length && (d = new g(d, m, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Tu && (m = n.relatedTarget || n.fromElement) && (wn(m) || m[Dt])) break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (m = n.relatedTarget || n.toElement, g = u, m = m ? wn(m) : null, m !== null && (w = An(m), m !== w || m.tag !== 5 && m.tag !== 6) && (m = null)) : (g = null, m = u), g !== m)) {
          if (v = $d, _ = "onMouseLeave", h = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = Rd, _ = "onPointerLeave", h = "onPointerEnter", p = "pointer"), w = g == null ? d : Un(g), y = m == null ? d : Un(m), d = new v(_, p + "leave", g, n, c), d.target = w, d.relatedTarget = y, _ = null, wn(c) === u && (v = new v(h, p + "enter", m, n, c), v.target = y, v.relatedTarget = w, _ = v), w = _, g && m) t: {
            for (v = g, h = m, p = 0, y = v; y; y = Rn(y)) p++;
            for (y = 0, _ = h; _; _ = Rn(_)) y++;
            for (; 0 < p - y; ) v = Rn(v), p--;
            for (; 0 < y - p; ) h = Rn(h), y--;
            for (; p--; ) {
              if (v === h || h !== null && v === h.alternate) break t;
              v = Rn(v), h = Rn(h);
            }
            v = null;
          }
          else v = null;
          g !== null && qd(f, d, g, v, !1), m !== null && w !== null && qd(f, w, m, v, !0);
        }
      }
      e: {
        if (d = u ? Un(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var S = a_;
        else if (Dd(d)) if (Bv) S = f_;
        else {
          S = u_;
          var k = l_;
        }
        else (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = c_);
        if (S && (S = S(e, u))) {
          Uv(f, S, n, c);
          break e;
        }
        k && k(e, d, u), e === "focusout" && (k = d._wrapperState) && k.controlled && d.type === "number" && Pu(d, "number", d.value);
      }
      switch (k = u ? Un(u) : window, e) {
        case "focusin":
          (Dd(k) || k.contentEditable === "true") && (jn = k, Ru = u, si = null);
          break;
        case "focusout":
          si = Ru = jn = null;
          break;
        case "mousedown":
          Iu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Iu = !1, Wd(f, n, c);
          break;
        case "selectionchange":
          if (p_) break;
        case "keydown":
        case "keyup":
          Wd(f, n, c);
      }
      var P;
      if (Xc) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else Dn ? jv(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Dv && n.locale !== "ko" && (Dn || E !== "onCompositionStart" ? E === "onCompositionEnd" && Dn && (P = Fv()) : (Zt = c, qc = "value" in Zt ? Zt.value : Zt.textContent, Dn = !0)), k = qs(u, E), 0 < k.length && (E = new Nd(E, e, null, n, c), f.push({ event: E, listeners: k }), P ? E.data = P : (P = zv(n), P !== null && (E.data = P)))), (P = n_ ? r_(e, n) : i_(e, n)) && (u = qs(u, "onBeforeInput"), 0 < u.length && (c = new Nd("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = P));
    }
    Zv(f, t);
  });
}
function _i(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = hi(e, n), s != null && r.unshift(_i(e, s, i)), s = hi(e, t), s != null && r.push(_i(e, s, i))), e = e.return;
  }
  return r;
}
function Rn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qd(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, i ? (l = hi(n, s), l != null && o.unshift(_i(n, l, a))) : i || (l = hi(n, s), l != null && o.push(_i(n, l, a)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var y_ = /\r\n?/g, w_ = /\u0000|\uFFFD/g;
function Yd(e) {
  return (typeof e == "string" ? e : "" + e).replace(y_, `
`).replace(w_, "");
}
function ls(e, t, n) {
  if (t = Yd(t), Yd(e) !== t && n) throw Error(x(425));
}
function Ys() {
}
var Fu = null, Du = null;
function ju(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var zu = typeof setTimeout == "function" ? setTimeout : void 0, __ = typeof clearTimeout == "function" ? clearTimeout : void 0, Vd = typeof Promise == "function" ? Promise : void 0, S_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vd < "u" ? function(e) {
  return Vd.resolve(null).then(e).catch(k_);
} : zu;
function k_(e) {
  setTimeout(function() {
    throw e;
  });
}
function Wa(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), vi(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  vi(t);
}
function rn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Xd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yr = Math.random().toString(36).slice(2), kt = "__reactFiber$" + yr, Si = "__reactProps$" + yr, Dt = "__reactContainer$" + yr, Uu = "__reactEvents$" + yr, P_ = "__reactListeners$" + yr, E_ = "__reactHandles$" + yr;
function wn(e) {
  var t = e[kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Dt] || n[kt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Xd(e); e !== null; ) {
        if (n = e[kt]) return n;
        e = Xd(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ii(e) {
  return e = e[kt] || e[Dt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Ao(e) {
  return e[Si] || null;
}
var Bu = [], Bn = -1;
function dn(e) {
  return { current: e };
}
function K(e) {
  0 > Bn || (e.current = Bu[Bn], Bu[Bn] = null, Bn--);
}
function Y(e, t) {
  Bn++, Bu[Bn] = e.current, e.current = t;
}
var cn = {}, be = dn(cn), De = dn(!1), En = cn;
function rr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in n) i[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function je(e) {
  return e = e.childContextTypes, e != null;
}
function Vs() {
  K(De), K(be);
}
function Kd(e, t, n) {
  if (be.current !== cn) throw Error(x(168));
  Y(be, t), Y(De, n);
}
function em(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(x(108, lw(e) || "Unknown", i));
  return ne({}, n, r);
}
function Xs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn, En = be.current, Y(be, e), Y(De, De.current), !0;
}
function Qd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n ? (e = em(e, t, En), r.__reactInternalMemoizedMergedChildContext = e, K(De), K(be), Y(be, e)) : K(De), Y(De, n);
}
var At = null, bo = !1, Ga = !1;
function tm(e) {
  At === null ? At = [e] : At.push(e);
}
function C_(e) {
  bo = !0, tm(e);
}
function hn() {
  if (!Ga && At !== null) {
    Ga = !0;
    var e = 0, t = W;
    try {
      var n = At;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      At = null, bo = !1;
    } catch (i) {
      throw At !== null && (At = At.slice(e + 1)), xv(Bc, hn), i;
    } finally {
      W = t, Ga = !1;
    }
  }
  return null;
}
var Wn = [], Gn = 0, Ks = null, Qs = 0, Je = [], et = 0, Cn = null, bt = 1, Lt = "";
function vn(e, t) {
  Wn[Gn++] = Qs, Wn[Gn++] = Ks, Ks = e, Qs = t;
}
function nm(e, t, n) {
  Je[et++] = bt, Je[et++] = Lt, Je[et++] = Cn, Cn = e;
  var r = bt;
  e = Lt;
  var i = 32 - dt(r) - 1;
  r &= ~(1 << i), n += 1;
  var s = 32 - dt(t) + i;
  if (30 < s) {
    var o = i - i % 5;
    s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, bt = 1 << 32 - dt(t) + i | n << i | r, Lt = s + e;
  } else bt = 1 << s | n << i | r, Lt = e;
}
function Qc(e) {
  e.return !== null && (vn(e, 1), nm(e, 1, 0));
}
function Zc(e) {
  for (; e === Ks; ) Ks = Wn[--Gn], Wn[Gn] = null, Qs = Wn[--Gn], Wn[Gn] = null;
  for (; e === Cn; ) Cn = Je[--et], Je[et] = null, Lt = Je[--et], Je[et] = null, bt = Je[--et], Je[et] = null;
}
var He = null, Ge = null, J = !1, ft = null;
function rm(e, t) {
  var n = tt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Zd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, He = e, Ge = rn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, He = e, Ge = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Cn !== null ? { id: bt, overflow: Lt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = tt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, He = e, Ge = null, !0) : !1;
    default:
      return !1;
  }
}
function Wu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gu(e) {
  if (J) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!Zd(e, t)) {
        if (Wu(e)) throw Error(x(418));
        t = rn(n.nextSibling);
        var r = He;
        t && Zd(e, t) ? rm(r, n) : (e.flags = e.flags & -4097 | 2, J = !1, He = e);
      }
    } else {
      if (Wu(e)) throw Error(x(418));
      e.flags = e.flags & -4097 | 2, J = !1, He = e;
    }
  }
}
function Jd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  He = e;
}
function us(e) {
  if (e !== He) return !1;
  if (!J) return Jd(e), J = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ju(e.type, e.memoizedProps)), t && (t = Ge)) {
    if (Wu(e)) throw im(), Error(x(418));
    for (; t; ) rm(e, t), t = rn(t.nextSibling);
  }
  if (Jd(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = rn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else Ge = He ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function im() {
  for (var e = Ge; e; ) e = rn(e.nextSibling);
}
function ir() {
  Ge = He = null, J = !1;
}
function Jc(e) {
  ft === null ? ft = [e] : ft.push(e);
}
var x_ = Wt.ReactCurrentBatchConfig;
function Br(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var i = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
        var a = i.refs;
        o === null ? delete a[s] : a[s] = o;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function cs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function eh(e) {
  var t = e._init;
  return t(e._payload);
}
function sm(e) {
  function t(h, p) {
    if (e) {
      var y = h.deletions;
      y === null ? (h.deletions = [p], h.flags |= 16) : y.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), p = p.sibling;
    return null;
  }
  function r(h, p) {
    for (h = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? h.set(p.key, p) : h.set(p.index, p), p = p.sibling;
    return h;
  }
  function i(h, p) {
    return h = ln(h, p), h.index = 0, h.sibling = null, h;
  }
  function s(h, p, y) {
    return h.index = y, e ? (y = h.alternate, y !== null ? (y = y.index, y < p ? (h.flags |= 2, p) : y) : (h.flags |= 2, p)) : (h.flags |= 1048576, p);
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, p, y, _) {
    return p === null || p.tag !== 6 ? (p = Qa(y, h.mode, _), p.return = h, p) : (p = i(p, y), p.return = h, p);
  }
  function l(h, p, y, _) {
    var S = y.type;
    return S === Fn ? c(h, p, y.props.children, _, y.key) : p !== null && (p.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Yt && eh(S) === p.type) ? (_ = i(p, y.props), _.ref = Br(h, p, y), _.return = h, _) : (_ = Ns(y.type, y.key, y.props, null, h.mode, _), _.ref = Br(h, p, y), _.return = h, _);
  }
  function u(h, p, y, _) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation ? (p = Za(y, h.mode, _), p.return = h, p) : (p = i(p, y.children || []), p.return = h, p);
  }
  function c(h, p, y, _, S) {
    return p === null || p.tag !== 7 ? (p = Pn(y, h.mode, _, S), p.return = h, p) : (p = i(p, y), p.return = h, p);
  }
  function f(h, p, y) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = Qa("" + p, h.mode, y), p.return = h, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ji:
          return y = Ns(p.type, p.key, p.props, null, h.mode, y), y.ref = Br(h, null, p), y.return = h, y;
        case In:
          return p = Za(p, h.mode, y), p.return = h, p;
        case Yt:
          var _ = p._init;
          return f(h, _(p._payload), y);
      }
      if (Xr(p) || Fr(p)) return p = Pn(p, h.mode, y, null), p.return = h, p;
      cs(h, p);
    }
    return null;
  }
  function d(h, p, y, _) {
    var S = p !== null ? p.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return S !== null ? null : a(h, p, "" + y, _);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ji:
          return y.key === S ? l(h, p, y, _) : null;
        case In:
          return y.key === S ? u(h, p, y, _) : null;
        case Yt:
          return S = y._init, d(
            h,
            p,
            S(y._payload),
            _
          );
      }
      if (Xr(y) || Fr(y)) return S !== null ? null : c(h, p, y, _, null);
      cs(h, y);
    }
    return null;
  }
  function g(h, p, y, _, S) {
    if (typeof _ == "string" && _ !== "" || typeof _ == "number") return h = h.get(y) || null, a(p, h, "" + _, S);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Ji:
          return h = h.get(_.key === null ? y : _.key) || null, l(p, h, _, S);
        case In:
          return h = h.get(_.key === null ? y : _.key) || null, u(p, h, _, S);
        case Yt:
          var k = _._init;
          return g(h, p, y, k(_._payload), S);
      }
      if (Xr(_) || Fr(_)) return h = h.get(y) || null, c(p, h, _, S, null);
      cs(p, _);
    }
    return null;
  }
  function m(h, p, y, _) {
    for (var S = null, k = null, P = p, E = p = 0, T = null; P !== null && E < y.length; E++) {
      P.index > E ? (T = P, P = null) : T = P.sibling;
      var O = d(h, P, y[E], _);
      if (O === null) {
        P === null && (P = T);
        break;
      }
      e && P && O.alternate === null && t(h, P), p = s(O, p, E), k === null ? S = O : k.sibling = O, k = O, P = T;
    }
    if (E === y.length) return n(h, P), J && vn(h, E), S;
    if (P === null) {
      for (; E < y.length; E++) P = f(h, y[E], _), P !== null && (p = s(P, p, E), k === null ? S = P : k.sibling = P, k = P);
      return J && vn(h, E), S;
    }
    for (P = r(h, P); E < y.length; E++) T = g(P, h, E, y[E], _), T !== null && (e && T.alternate !== null && P.delete(T.key === null ? E : T.key), p = s(T, p, E), k === null ? S = T : k.sibling = T, k = T);
    return e && P.forEach(function(b) {
      return t(h, b);
    }), J && vn(h, E), S;
  }
  function v(h, p, y, _) {
    var S = Fr(y);
    if (typeof S != "function") throw Error(x(150));
    if (y = S.call(y), y == null) throw Error(x(151));
    for (var k = S = null, P = p, E = p = 0, T = null, O = y.next(); P !== null && !O.done; E++, O = y.next()) {
      P.index > E ? (T = P, P = null) : T = P.sibling;
      var b = d(h, P, O.value, _);
      if (b === null) {
        P === null && (P = T);
        break;
      }
      e && P && b.alternate === null && t(h, P), p = s(b, p, E), k === null ? S = b : k.sibling = b, k = b, P = T;
    }
    if (O.done) return n(
      h,
      P
    ), J && vn(h, E), S;
    if (P === null) {
      for (; !O.done; E++, O = y.next()) O = f(h, O.value, _), O !== null && (p = s(O, p, E), k === null ? S = O : k.sibling = O, k = O);
      return J && vn(h, E), S;
    }
    for (P = r(h, P); !O.done; E++, O = y.next()) O = g(P, h, E, O.value, _), O !== null && (e && O.alternate !== null && P.delete(O.key === null ? E : O.key), p = s(O, p, E), k === null ? S = O : k.sibling = O, k = O);
    return e && P.forEach(function(L) {
      return t(h, L);
    }), J && vn(h, E), S;
  }
  function w(h, p, y, _) {
    if (typeof y == "object" && y !== null && y.type === Fn && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ji:
          e: {
            for (var S = y.key, k = p; k !== null; ) {
              if (k.key === S) {
                if (S = y.type, S === Fn) {
                  if (k.tag === 7) {
                    n(h, k.sibling), p = i(k, y.props.children), p.return = h, h = p;
                    break e;
                  }
                } else if (k.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Yt && eh(S) === k.type) {
                  n(h, k.sibling), p = i(k, y.props), p.ref = Br(h, k, y), p.return = h, h = p;
                  break e;
                }
                n(h, k);
                break;
              } else t(h, k);
              k = k.sibling;
            }
            y.type === Fn ? (p = Pn(y.props.children, h.mode, _, y.key), p.return = h, h = p) : (_ = Ns(y.type, y.key, y.props, null, h.mode, _), _.ref = Br(h, p, y), _.return = h, h = _);
          }
          return o(h);
        case In:
          e: {
            for (k = y.key; p !== null; ) {
              if (p.key === k) if (p.tag === 4 && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                n(h, p.sibling), p = i(p, y.children || []), p.return = h, h = p;
                break e;
              } else {
                n(h, p);
                break;
              }
              else t(h, p);
              p = p.sibling;
            }
            p = Za(y, h.mode, _), p.return = h, h = p;
          }
          return o(h);
        case Yt:
          return k = y._init, w(h, p, k(y._payload), _);
      }
      if (Xr(y)) return m(h, p, y, _);
      if (Fr(y)) return v(h, p, y, _);
      cs(h, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, p !== null && p.tag === 6 ? (n(h, p.sibling), p = i(p, y), p.return = h, h = p) : (n(h, p), p = Qa(y, h.mode, _), p.return = h, h = p), o(h)) : n(h, p);
  }
  return w;
}
var sr = sm(!0), om = sm(!1), Zs = dn(null), Js = null, Hn = null, ef = null;
function tf() {
  ef = Hn = Js = null;
}
function nf(e) {
  var t = Zs.current;
  K(Zs), e._currentValue = t;
}
function Hu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Zn(e, t) {
  Js = e, ef = Hn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
}
function rt(e) {
  var t = e._currentValue;
  if (ef !== e) if (e = { context: e, memoizedValue: t, next: null }, Hn === null) {
    if (Js === null) throw Error(x(308));
    Hn = e, Js.dependencies = { lanes: 0, firstContext: e };
  } else Hn = Hn.next = e;
  return t;
}
var _n = null;
function rf(e) {
  _n === null ? _n = [e] : _n.push(e);
}
function am(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, rf(t)) : (n.next = i.next, i.next = n), t.interleaved = n, jt(e, r);
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function sf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lm(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Nt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, D & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, jt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, rf(r)) : (t.next = i.next, i.next = t), r.interleaved = t, jt(e, n);
}
function Ts(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Wc(e, n);
  }
}
function th(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        s === null ? i = s = o : s = s.next = o, n = n.next;
      } while (n !== null);
      s === null ? i = s = t : s = s.next = t;
    } else i = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function eo(e, t, n, r) {
  var i = e.updateQueue;
  Vt = !1;
  var s = i.firstBaseUpdate, o = i.lastBaseUpdate, a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, o === null ? s = u : o.next = u, o = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
  }
  if (s !== null) {
    var f = i.baseState;
    o = 0, c = u = l = null, a = s;
    do {
      var d = a.lane, g = a.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: g,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var m = e, v = a;
          switch (d = t, g = n, v.tag) {
            case 1:
              if (m = v.payload, typeof m == "function") {
                f = m.call(g, f, d);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = m.flags & -65537 | 128;
            case 0:
              if (m = v.payload, d = typeof m == "function" ? m.call(g, f, d) : m, d == null) break e;
              f = ne({}, f, d);
              break e;
            case 2:
              Vt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a));
      } else g = { eventTime: g, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = g, l = f) : c = c.next = g, o |= d;
      if (a = a.next, a === null) {
        if (a = i.shared.pending, a === null) break;
        d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    On |= o, e.lanes = o, e.memoizedState = f;
  }
}
function nh(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(x(191, i));
      i.call(r);
    }
  }
}
var Fi = {}, Ct = dn(Fi), ki = dn(Fi), Pi = dn(Fi);
function Sn(e) {
  if (e === Fi) throw Error(x(174));
  return e;
}
function of(e, t) {
  switch (Y(Pi, t), Y(ki, e), Y(Ct, Fi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Cu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Cu(t, e);
  }
  K(Ct), Y(Ct, t);
}
function or() {
  K(Ct), K(ki), K(Pi);
}
function um(e) {
  Sn(Pi.current);
  var t = Sn(Ct.current), n = Cu(t, e.type);
  t !== n && (Y(ki, e), Y(Ct, n));
}
function af(e) {
  ki.current === e && (K(Ct), K(ki));
}
var ee = dn(0);
function to(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Ha = [];
function lf() {
  for (var e = 0; e < Ha.length; e++) Ha[e]._workInProgressVersionPrimary = null;
  Ha.length = 0;
}
var Ms = Wt.ReactCurrentDispatcher, qa = Wt.ReactCurrentBatchConfig, xn = 0, te = null, de = null, me = null, no = !1, oi = !1, Ei = 0, O_ = 0;
function Ce() {
  throw Error(x(321));
}
function uf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return !1;
  return !0;
}
function cf(e, t, n, r, i, s) {
  if (xn = s, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ms.current = e === null || e.memoizedState === null ? b_ : L_, e = n(r, i), oi) {
    s = 0;
    do {
      if (oi = !1, Ei = 0, 25 <= s) throw Error(x(301));
      s += 1, me = de = null, t.updateQueue = null, Ms.current = $_, e = n(r, i);
    } while (oi);
  }
  if (Ms.current = ro, t = de !== null && de.next !== null, xn = 0, me = de = te = null, no = !1, t) throw Error(x(300));
  return e;
}
function ff() {
  var e = Ei !== 0;
  return Ei = 0, e;
}
function yt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? te.memoizedState = me = e : me = me.next = e, me;
}
function it() {
  if (de === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = me === null ? te.memoizedState : me.next;
  if (t !== null) me = t, de = e;
  else {
    if (e === null) throw Error(x(310));
    de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, me === null ? te.memoizedState = me = e : me = me.next = e;
  }
  return me;
}
function Ci(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ya(e) {
  var t = it(), n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = de, i = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = s.next, s.next = o;
    }
    r.baseQueue = i = s, n.pending = null;
  }
  if (i !== null) {
    s = i.next, r = r.baseState;
    var a = o = null, l = null, u = s;
    do {
      var c = u.lane;
      if ((xn & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = f, o = r) : l = l.next = f, te.lanes |= c, On |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? o = r : l.next = a, gt(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      s = i.lane, te.lanes |= s, On |= s, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Va(e) {
  var t = it(), n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      s = e(s, o.action), o = o.next;
    while (o !== i);
    gt(s, t.memoizedState) || (Fe = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function cm() {
}
function fm(e, t) {
  var n = te, r = it(), i = t(), s = !gt(r.memoizedState, i);
  if (s && (r.memoizedState = i, Fe = !0), r = r.queue, df(pm.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || me !== null && me.memoizedState.tag & 1) {
    if (n.flags |= 2048, xi(9, hm.bind(null, n, r, i, t), void 0, null), ye === null) throw Error(x(349));
    xn & 30 || dm(n, t, i);
  }
  return i;
}
function dm(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function hm(e, t, n, r) {
  t.value = n, t.getSnapshot = r, gm(t) && vm(e);
}
function pm(e, t, n) {
  return n(function() {
    gm(t) && vm(e);
  });
}
function gm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gt(e, n);
  } catch {
    return !0;
  }
}
function vm(e) {
  var t = jt(e, 1);
  t !== null && ht(t, e, 1, -1);
}
function rh(e) {
  var t = yt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ci, lastRenderedState: e }, t.queue = e, e = e.dispatch = A_.bind(null, te, e), [t.memoizedState, e];
}
function xi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function mm() {
  return it().memoizedState;
}
function As(e, t, n, r) {
  var i = yt();
  te.flags |= e, i.memoizedState = xi(1 | t, n, void 0, r === void 0 ? null : r);
}
function Lo(e, t, n, r) {
  var i = it();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (de !== null) {
    var o = de.memoizedState;
    if (s = o.destroy, r !== null && uf(r, o.deps)) {
      i.memoizedState = xi(t, n, s, r);
      return;
    }
  }
  te.flags |= e, i.memoizedState = xi(1 | t, n, s, r);
}
function ih(e, t) {
  return As(8390656, 8, e, t);
}
function df(e, t) {
  return Lo(2048, 8, e, t);
}
function ym(e, t) {
  return Lo(4, 2, e, t);
}
function wm(e, t) {
  return Lo(4, 4, e, t);
}
function _m(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Sm(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Lo(4, 4, _m.bind(null, t, e), n);
}
function hf() {
}
function km(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && uf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pm(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && uf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Em(e, t, n) {
  return xn & 21 ? (gt(n, t) || (n = Mv(), te.lanes |= n, On |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
}
function T_(e, t) {
  var n = W;
  W = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = qa.transition;
  qa.transition = {};
  try {
    e(!1), t();
  } finally {
    W = n, qa.transition = r;
  }
}
function Cm() {
  return it().memoizedState;
}
function M_(e, t, n) {
  var r = an(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, xm(e)) Om(t, n);
  else if (n = am(e, t, n, r), n !== null) {
    var i = $e();
    ht(n, e, r, i), Tm(n, t, r);
  }
}
function A_(e, t, n) {
  var r = an(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xm(e)) Om(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var o = t.lastRenderedState, a = s(o, n);
      if (i.hasEagerState = !0, i.eagerState = a, gt(a, o)) {
        var l = t.interleaved;
        l === null ? (i.next = i, rf(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = am(e, t, i, r), n !== null && (i = $e(), ht(n, e, r, i), Tm(n, t, r));
  }
}
function xm(e) {
  var t = e.alternate;
  return e === te || t !== null && t === te;
}
function Om(e, t) {
  oi = no = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Tm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Wc(e, n);
  }
}
var ro = { readContext: rt, useCallback: Ce, useContext: Ce, useEffect: Ce, useImperativeHandle: Ce, useInsertionEffect: Ce, useLayoutEffect: Ce, useMemo: Ce, useReducer: Ce, useRef: Ce, useState: Ce, useDebugValue: Ce, useDeferredValue: Ce, useTransition: Ce, useMutableSource: Ce, useSyncExternalStore: Ce, useId: Ce, unstable_isNewReconciler: !1 }, b_ = { readContext: rt, useCallback: function(e, t) {
  return yt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: rt, useEffect: ih, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, As(
    4194308,
    4,
    _m.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return As(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return As(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = yt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = yt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = M_.bind(null, te, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = yt();
  return e = { current: e }, t.memoizedState = e;
}, useState: rh, useDebugValue: hf, useDeferredValue: function(e) {
  return yt().memoizedState = e;
}, useTransition: function() {
  var e = rh(!1), t = e[0];
  return e = T_.bind(null, e[1]), yt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = te, i = yt();
  if (J) {
    if (n === void 0) throw Error(x(407));
    n = n();
  } else {
    if (n = t(), ye === null) throw Error(x(349));
    xn & 30 || dm(r, t, n);
  }
  i.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return i.queue = s, ih(pm.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, xi(9, hm.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = yt(), t = ye.identifierPrefix;
  if (J) {
    var n = Lt, r = bt;
    n = (r & ~(1 << 32 - dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ei++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = O_++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, L_ = {
  readContext: rt,
  useCallback: km,
  useContext: rt,
  useEffect: df,
  useImperativeHandle: Sm,
  useInsertionEffect: ym,
  useLayoutEffect: wm,
  useMemo: Pm,
  useReducer: Ya,
  useRef: mm,
  useState: function() {
    return Ya(Ci);
  },
  useDebugValue: hf,
  useDeferredValue: function(e) {
    var t = it();
    return Em(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = Ya(Ci)[0], t = it().memoizedState;
    return [e, t];
  },
  useMutableSource: cm,
  useSyncExternalStore: fm,
  useId: Cm,
  unstable_isNewReconciler: !1
}, $_ = { readContext: rt, useCallback: km, useContext: rt, useEffect: df, useImperativeHandle: Sm, useInsertionEffect: ym, useLayoutEffect: wm, useMemo: Pm, useReducer: Va, useRef: mm, useState: function() {
  return Va(Ci);
}, useDebugValue: hf, useDeferredValue: function(e) {
  var t = it();
  return de === null ? t.memoizedState = e : Em(t, de.memoizedState, e);
}, useTransition: function() {
  var e = Va(Ci)[0], t = it().memoizedState;
  return [e, t];
}, useMutableSource: cm, useSyncExternalStore: fm, useId: Cm, unstable_isNewReconciler: !1 };
function ut(e, t) {
  if (e && e.defaultProps) {
    t = ne({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function qu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $o = { isMounted: function(e) {
  return (e = e._reactInternals) ? An(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), i = an(e), s = Nt(r, i);
  s.payload = t, n != null && (s.callback = n), t = sn(e, s, i), t !== null && (ht(t, e, i, r), Ts(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), i = an(e), s = Nt(r, i);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = sn(e, s, i), t !== null && (ht(t, e, i, r), Ts(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = $e(), r = an(e), i = Nt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = sn(e, i, r), t !== null && (ht(t, e, r, n), Ts(t, e, r));
} };
function sh(e, t, n, r, i, s, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !yi(n, r) || !yi(i, s) : !0;
}
function Mm(e, t, n) {
  var r = !1, i = cn, s = t.contextType;
  return typeof s == "object" && s !== null ? s = rt(s) : (i = je(t) ? En : be.current, r = t.contextTypes, s = (r = r != null) ? rr(e, i) : cn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = $o, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function oh(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && $o.enqueueReplaceState(t, t.state, null);
}
function Yu(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, sf(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? i.context = rt(s) : (s = je(t) ? En : be.current, i.context = rr(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (qu(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && $o.enqueueReplaceState(i, i.state, null), eo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ar(e, t) {
  try {
    var n = "", r = t;
    do
      n += aw(r), r = r.return;
    while (r);
    var i = n;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Xa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var N_ = typeof WeakMap == "function" ? WeakMap : Map;
function Am(e, t, n) {
  n = Nt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    so || (so = !0, ic = r), Vu(e, t);
  }, n;
}
function bm(e, t, n) {
  n = Nt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Vu(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    Vu(e, t), typeof r != "function" && (on === null ? on = /* @__PURE__ */ new Set([this]) : on.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function ah(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new N_();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = V_.bind(null, e, t, n), t.then(e, e));
}
function lh(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function uh(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, sn(n, t, 1))), n.lanes |= 1), e);
}
var R_ = Wt.ReactCurrentOwner, Fe = !1;
function Le(e, t, n, r) {
  t.child = e === null ? om(t, null, n, r) : sr(t, e.child, n, r);
}
function ch(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return Zn(t, i), r = cf(e, t, n, r, s, i), n = ff(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, zt(e, t, i)) : (J && n && Qc(t), t.flags |= 1, Le(e, t, r, i), t.child);
}
function fh(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !Sf(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Lm(e, t, s, r, i)) : (e = Ns(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & i)) {
    var o = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : yi, n(o, r) && e.ref === t.ref) return zt(e, t, i);
  }
  return t.flags |= 1, e = ln(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Lm(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (yi(s, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (Fe = !0);
    else return t.lanes = e.lanes, zt(e, t, i);
  }
  return Xu(e, t, n, r, i);
}
function $m(e, t, n) {
  var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Y(Yn, We), We |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Y(Yn, We), We |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, Y(Yn, We), We |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, Y(Yn, We), We |= r;
  return Le(e, t, i, n), t.child;
}
function Nm(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Xu(e, t, n, r, i) {
  var s = je(n) ? En : be.current;
  return s = rr(t, s), Zn(t, i), n = cf(e, t, n, r, s, i), r = ff(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, zt(e, t, i)) : (J && r && Qc(t), t.flags |= 1, Le(e, t, n, i), t.child);
}
function dh(e, t, n, r, i) {
  if (je(n)) {
    var s = !0;
    Xs(t);
  } else s = !1;
  if (Zn(t, i), t.stateNode === null) bs(e, t), Mm(t, n, r), Yu(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, a = t.memoizedProps;
    o.props = a;
    var l = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = rt(u) : (u = je(n) ? En : be.current, u = rr(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && oh(t, o, r, u), Vt = !1;
    var d = t.memoizedState;
    o.state = d, eo(t, r, o, i), l = t.memoizedState, a !== r || d !== l || De.current || Vt ? (typeof c == "function" && (qu(t, n, c, r), l = t.memoizedState), (a = Vt || sh(t, n, a, r, d, l, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, lm(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : ut(t.type, a), o.props = u, f = t.pendingProps, d = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = rt(l) : (l = je(n) ? En : be.current, l = rr(t, l));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || d !== l) && oh(t, o, r, l), Vt = !1, d = t.memoizedState, o.state = d, eo(t, r, o, i);
    var m = t.memoizedState;
    a !== f || d !== m || De.current || Vt ? (typeof g == "function" && (qu(t, n, g, r), m = t.memoizedState), (u = Vt || sh(t, n, u, r, d, m, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, m, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ku(e, t, n, r, s, i);
}
function Ku(e, t, n, r, i, s) {
  Nm(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Qd(t, n, !1), zt(e, t, s);
  r = t.stateNode, R_.current = t;
  var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = sr(t, e.child, null, s), t.child = sr(t, null, a, s)) : Le(e, t, a, s), t.memoizedState = r.state, i && Qd(t, n, !0), t.child;
}
function Rm(e) {
  var t = e.stateNode;
  t.pendingContext ? Kd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Kd(e, t.context, !1), of(e, t.containerInfo);
}
function hh(e, t, n, r, i) {
  return ir(), Jc(i), t.flags |= 256, Le(e, t, n, r), t.child;
}
var Qu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Im(e, t, n) {
  var r = t.pendingProps, i = ee.current, s = !1, o = (t.flags & 128) !== 0, a;
  if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Y(ee, i & 1), e === null)
    return Gu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = { mode: "hidden", children: o }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Io(o, r, 0, null), e = Pn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Zu(n), t.memoizedState = Qu, e) : pf(t, o));
  if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return I_(e, t, o, r, a, i, n);
  if (s) {
    s = r.fallback, o = t.mode, i = e.child, a = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = ln(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? s = ln(a, s) : (s = Pn(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? Zu(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = Qu, r;
  }
  return s = e.child, e = s.sibling, r = ln(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function pf(e, t) {
  return t = Io({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function fs(e, t, n, r) {
  return r !== null && Jc(r), sr(t, e.child, null, n), e = pf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function I_(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Xa(Error(x(422))), fs(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Io({ mode: "visible", children: r.children }, i, 0, null), s = Pn(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && sr(t, e.child, null, o), t.child.memoizedState = Zu(o), t.memoizedState = Qu, s);
  if (!(t.mode & 1)) return fs(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(x(419)), r = Xa(s, r, void 0), fs(e, t, o, r);
  }
  if (a = (o & e.childLanes) !== 0, Fe || a) {
    if (r = ye, r !== null) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, jt(e, i), ht(r, e, i, -1));
    }
    return _f(), r = Xa(Error(x(421))), fs(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = X_.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Ge = rn(i.nextSibling), He = t, J = !0, ft = null, e !== null && (Je[et++] = bt, Je[et++] = Lt, Je[et++] = Cn, bt = e.id, Lt = e.overflow, Cn = t), t = pf(t, r.children), t.flags |= 4096, t);
}
function ph(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Hu(e.return, t, n);
}
function Ka(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
}
function Fm(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, s = r.tail;
  if (Le(e, t, r.children, n), r = ee.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ph(e, n, t);
      else if (e.tag === 19) ph(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (Y(ee, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && to(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ka(t, !1, i, n, s);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && to(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Ka(t, !0, n, null, s);
      break;
    case "together":
      Ka(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function bs(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function zt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), On |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function F_(e, t, n) {
  switch (t.tag) {
    case 3:
      Rm(t), ir();
      break;
    case 5:
      um(t);
      break;
    case 1:
      je(t.type) && Xs(t);
      break;
    case 4:
      of(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      Y(Zs, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Y(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Im(e, t, n) : (Y(ee, ee.current & 1), e = zt(e, t, n), e !== null ? e.sibling : null);
      Y(ee, ee.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Fm(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Y(ee, ee.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, $m(e, t, n);
  }
  return zt(e, t, n);
}
var Dm, Ju, jm, zm;
Dm = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Ju = function() {
};
jm = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Sn(Ct.current);
    var s = null;
    switch (n) {
      case "input":
        i = Su(e, i), r = Su(e, r), s = [];
        break;
      case "select":
        i = ne({}, i, { value: void 0 }), r = ne({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = Eu(e, i), r = Eu(e, r), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ys);
    }
    xu(n, r);
    var o;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var a = i[u];
      for (o in a) a.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (fi.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (o in a) !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), n[o] = l[o]);
      } else n || (s || (s = []), s.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (fi.hasOwnProperty(u) ? (l != null && u === "onScroll" && V("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
zm = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wr(e, t) {
  if (!J) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function D_(e, t, n) {
  var r = t.pendingProps;
  switch (Zc(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return xe(t), null;
    case 1:
      return je(t.type) && Vs(), xe(t), null;
    case 3:
      return r = t.stateNode, or(), K(De), K(be), lf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (us(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (ac(ft), ft = null))), Ju(e, t), xe(t), null;
    case 5:
      af(t);
      var i = Sn(Pi.current);
      if (n = t.type, e !== null && t.stateNode != null) jm(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return xe(t), null;
        }
        if (e = Sn(Ct.current), us(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[kt] = t, r[Si] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Qr.length; i++) V(Qr[i], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V(
                "error",
                r
              ), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              Pd(r, s), V("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, V("invalid", r);
              break;
            case "textarea":
              Cd(r, s), V("invalid", r);
          }
          xu(n, s), i = null;
          for (var o in s) if (s.hasOwnProperty(o)) {
            var a = s[o];
            o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && ls(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && ls(
              r.textContent,
              a,
              e
            ), i = ["children", "" + a]) : fi.hasOwnProperty(o) && a != null && o === "onScroll" && V("scroll", r);
          }
          switch (n) {
            case "input":
              es(r), Ed(r, s, !0);
              break;
            case "textarea":
              es(r), xd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Ys);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = pv(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[kt] = t, e[Si] = r, Dm(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Ou(n, r), n) {
              case "dialog":
                V("cancel", e), V("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Qr.length; i++) V(Qr[i], e);
                i = r;
                break;
              case "source":
                V("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                V(
                  "error",
                  e
                ), V("load", e), i = r;
                break;
              case "details":
                V("toggle", e), i = r;
                break;
              case "input":
                Pd(e, r), i = Su(e, r), V("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = ne({}, r, { value: void 0 }), V("invalid", e);
                break;
              case "textarea":
                Cd(e, r), i = Eu(e, r), V("invalid", e);
                break;
              default:
                i = r;
            }
            xu(n, i), a = i;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? mv(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && gv(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && di(e, l) : typeof l == "number" && di(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (fi.hasOwnProperty(s) ? l != null && s === "onScroll" && V("scroll", e) : l != null && Fc(e, s, l, o));
            }
            switch (n) {
              case "input":
                es(e), Ed(e, r, !1);
                break;
              case "textarea":
                es(e), xd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + un(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Vn(e, !!r.multiple, s, !1) : r.defaultValue != null && Vn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ys);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) zm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (n = Sn(Pi.current), Sn(Ct.current), us(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[kt] = t, (s = r.nodeValue !== n) && (e = He, e !== null)) switch (e.tag) {
            case 3:
              ls(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ls(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kt] = t, t.stateNode = r;
      }
      return xe(t), null;
    case 13:
      if (K(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (J && Ge !== null && t.mode & 1 && !(t.flags & 128)) im(), ir(), t.flags |= 98560, s = !1;
        else if (s = us(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(x(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(x(317));
            s[kt] = t;
          } else ir(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), s = !1;
        } else ft !== null && (ac(ft), ft = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? ge === 0 && (ge = 3) : _f())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return or(), Ju(e, t), e === null && wi(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return nf(t.type._context), xe(t), null;
    case 17:
      return je(t.type) && Vs(), xe(t), null;
    case 19:
      if (K(ee), s = t.memoizedState, s === null) return xe(t), null;
      if (r = (t.flags & 128) !== 0, o = s.rendering, o === null) if (r) Wr(s, !1);
      else {
        if (ge !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = to(e), o !== null) {
            for (t.flags |= 128, Wr(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Y(ee, ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && oe() > lr && (t.flags |= 128, r = !0, Wr(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = to(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Wr(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !J) return xe(t), null;
        } else 2 * oe() - s.renderingStartTime > lr && n !== 1073741824 && (t.flags |= 128, r = !0, Wr(s, !1), t.lanes = 4194304);
        s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = oe(), t.sibling = null, n = ee.current, Y(ee, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return wf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function j_(e, t) {
  switch (Zc(t), t.tag) {
    case 1:
      return je(t.type) && Vs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return or(), K(De), K(be), lf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return af(t), null;
    case 13:
      if (K(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(x(340));
        ir();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return K(ee), null;
    case 4:
      return or(), null;
    case 10:
      return nf(t.type._context), null;
    case 22:
    case 23:
      return wf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ds = !1, Me = !1, z_ = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function qn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    re(e, t, r);
  }
  else n.current = null;
}
function ec(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var gh = !1;
function U_(e, t) {
  if (Fu = Gs, e = Hv(), Kc(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, s = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, s.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, a = -1, l = -1, u = 0, c = 0, f = e, d = null;
        t: for (; ; ) {
          for (var g; f !== n || i !== 0 && f.nodeType !== 3 || (a = o + i), f !== s || r !== 0 && f.nodeType !== 3 || (l = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (g = f.firstChild) !== null; )
            d = f, f = g;
          for (; ; ) {
            if (f === e) break t;
            if (d === n && ++u === i && (a = o), d === s && ++c === r && (l = o), (g = f.nextSibling) !== null) break;
            f = d, d = f.parentNode;
          }
          f = g;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Du = { focusedElem: e, selectionRange: n }, Gs = !1, M = t; M !== null; ) if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
  else for (; M !== null; ) {
    t = M;
    try {
      var m = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (m !== null) {
            var v = m.memoizedProps, w = m.memoizedState, h = t.stateNode, p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ut(t.type, v), w);
            h.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        case 3:
          var y = t.stateNode.containerInfo;
          y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(x(163));
      }
    } catch (_) {
      re(t, t.return, _);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, M = e;
      break;
    }
    M = t.return;
  }
  return m = gh, gh = !1, m;
}
function ai(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && ec(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function No(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function tc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Um(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Um(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kt], delete t[Si], delete t[Uu], delete t[P_], delete t[E_])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Bm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vh(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bm(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function nc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ys));
  else if (r !== 4 && (e = e.child, e !== null)) for (nc(e, t, n), e = e.sibling; e !== null; ) nc(e, t, n), e = e.sibling;
}
function rc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (rc(e, t, n), e = e.sibling; e !== null; ) rc(e, t, n), e = e.sibling;
}
var _e = null, ct = !1;
function qt(e, t, n) {
  for (n = n.child; n !== null; ) Wm(e, t, n), n = n.sibling;
}
function Wm(e, t, n) {
  if (Et && typeof Et.onCommitFiberUnmount == "function") try {
    Et.onCommitFiberUnmount(xo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Me || qn(n, t);
    case 6:
      var r = _e, i = ct;
      _e = null, qt(e, t, n), _e = r, ct = i, _e !== null && (ct ? (e = _e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null && (ct ? (e = _e, n = n.stateNode, e.nodeType === 8 ? Wa(e.parentNode, n) : e.nodeType === 1 && Wa(e, n), vi(e)) : Wa(_e, n.stateNode));
      break;
    case 4:
      r = _e, i = ct, _e = n.stateNode.containerInfo, ct = !0, qt(e, t, n), _e = r, ct = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var s = i, o = s.destroy;
          s = s.tag, o !== void 0 && (s & 2 || s & 4) && ec(n, t, o), i = i.next;
        } while (i !== r);
      }
      qt(e, t, n);
      break;
    case 1:
      if (!Me && (qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        re(n, t, a);
      }
      qt(e, t, n);
      break;
    case 21:
      qt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Me = (r = Me) || n.memoizedState !== null, qt(e, t, n), Me = r) : qt(e, t, n);
      break;
    default:
      qt(e, t, n);
  }
}
function mh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new z_()), t.forEach(function(r) {
      var i = K_.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function lt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var s = e, o = t, a = o;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            _e = a.stateNode, ct = !1;
            break e;
          case 3:
            _e = a.stateNode.containerInfo, ct = !0;
            break e;
          case 4:
            _e = a.stateNode.containerInfo, ct = !0;
            break e;
        }
        a = a.return;
      }
      if (_e === null) throw Error(x(160));
      Wm(s, o, i), _e = null, ct = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      re(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Gm(t, e), t = t.sibling;
}
function Gm(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (lt(t, e), mt(e), r & 4) {
        try {
          ai(3, e, e.return), No(3, e);
        } catch (v) {
          re(e, e.return, v);
        }
        try {
          ai(5, e, e.return);
        } catch (v) {
          re(e, e.return, v);
        }
      }
      break;
    case 1:
      lt(t, e), mt(e), r & 512 && n !== null && qn(n, n.return);
      break;
    case 5:
      if (lt(t, e), mt(e), r & 512 && n !== null && qn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          di(i, "");
        } catch (v) {
          re(e, e.return, v);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var s = e.memoizedProps, o = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && dv(i, s), Ou(a, o);
          var u = Ou(a, s);
          for (o = 0; o < l.length; o += 2) {
            var c = l[o], f = l[o + 1];
            c === "style" ? mv(i, f) : c === "dangerouslySetInnerHTML" ? gv(i, f) : c === "children" ? di(i, f) : Fc(i, c, f, u);
          }
          switch (a) {
            case "input":
              ku(i, s);
              break;
            case "textarea":
              hv(i, s);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? Vn(i, !!s.multiple, g, !1) : d !== !!s.multiple && (s.defaultValue != null ? Vn(
                i,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Vn(i, !!s.multiple, s.multiple ? [] : "", !1));
          }
          i[Si] = s;
        } catch (v) {
          re(e, e.return, v);
        }
      }
      break;
    case 6:
      if (lt(t, e), mt(e), r & 4) {
        if (e.stateNode === null) throw Error(x(162));
        i = e.stateNode, s = e.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (v) {
          re(e, e.return, v);
        }
      }
      break;
    case 3:
      if (lt(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        vi(t.containerInfo);
      } catch (v) {
        re(e, e.return, v);
      }
      break;
    case 4:
      lt(t, e), mt(e);
      break;
    case 13:
      lt(t, e), mt(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (mf = oe())), r & 4 && mh(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Me = (u = Me) || c, lt(t, e), Me = u) : lt(t, e), mt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (M = e, c = e.child; c !== null; ) {
          for (f = M = c; M !== null; ) {
            switch (d = M, g = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ai(4, d, d.return);
                break;
              case 1:
                qn(d, d.return);
                var m = d.stateNode;
                if (typeof m.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                  } catch (v) {
                    re(r, n, v);
                  }
                }
                break;
              case 5:
                qn(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  wh(f);
                  continue;
                }
            }
            g !== null ? (g.return = d, M = g) : wh(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                i = f.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = vv("display", o));
              } catch (v) {
                re(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (v) {
              re(e, e.return, v);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      lt(t, e), mt(e), r & 4 && mh(e);
      break;
    case 21:
      break;
    default:
      lt(
        t,
        e
      ), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (di(i, ""), r.flags &= -33);
          var s = vh(e);
          rc(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, a = vh(e);
          nc(e, a, o);
          break;
        default:
          throw Error(x(161));
      }
    } catch (l) {
      re(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function B_(e, t, n) {
  M = e, Hm(e);
}
function Hm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M, s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ds;
      if (!o) {
        var a = i.alternate, l = a !== null && a.memoizedState !== null || Me;
        a = ds;
        var u = Me;
        if (ds = o, (Me = l) && !u) for (M = i; M !== null; ) o = M, l = o.child, o.tag === 22 && o.memoizedState !== null ? _h(i) : l !== null ? (l.return = o, M = l) : _h(i);
        for (; s !== null; ) M = s, Hm(s), s = s.sibling;
        M = i, ds = a, Me = u;
      }
      yh(e);
    } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, M = s) : yh(e);
  }
}
function yh(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Me || No(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Me) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && nh(t, s, r);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              nh(t, o, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var f = c.dehydrated;
                  f !== null && vi(f);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(x(163));
        }
        Me || t.flags & 512 && tc(t);
      } catch (d) {
        re(t, t.return, d);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function wh(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function _h(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            No(4, t);
          } catch (l) {
            re(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              re(t, i, l);
            }
          }
          var s = t.return;
          try {
            tc(t);
          } catch (l) {
            re(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            tc(t);
          } catch (l) {
            re(t, o, l);
          }
      }
    } catch (l) {
      re(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, M = a;
      break;
    }
    M = t.return;
  }
}
var W_ = Math.ceil, io = Wt.ReactCurrentDispatcher, gf = Wt.ReactCurrentOwner, nt = Wt.ReactCurrentBatchConfig, D = 0, ye = null, ce = null, ke = 0, We = 0, Yn = dn(0), ge = 0, Oi = null, On = 0, Ro = 0, vf = 0, li = null, Ie = null, mf = 0, lr = 1 / 0, Mt = null, so = !1, ic = null, on = null, hs = !1, Jt = null, oo = 0, ui = 0, sc = null, Ls = -1, $s = 0;
function $e() {
  return D & 6 ? oe() : Ls !== -1 ? Ls : Ls = oe();
}
function an(e) {
  return e.mode & 1 ? D & 2 && ke !== 0 ? ke & -ke : x_.transition !== null ? ($s === 0 && ($s = Mv()), $s) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Iv(e.type)), e) : 1;
}
function ht(e, t, n, r) {
  if (50 < ui) throw ui = 0, sc = null, Error(x(185));
  Ni(e, n, r), (!(D & 2) || e !== ye) && (e === ye && (!(D & 2) && (Ro |= n), ge === 4 && Qt(e, ke)), ze(e, r), n === 1 && D === 0 && !(t.mode & 1) && (lr = oe() + 500, bo && hn()));
}
function ze(e, t) {
  var n = e.callbackNode;
  xw(e, t);
  var r = Ws(e, e === ye ? ke : 0);
  if (r === 0) n !== null && Md(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Md(n), t === 1) e.tag === 0 ? C_(Sh.bind(null, e)) : tm(Sh.bind(null, e)), S_(function() {
      !(D & 6) && hn();
    }), n = null;
    else {
      switch (Av(r)) {
        case 1:
          n = Bc;
          break;
        case 4:
          n = Ov;
          break;
        case 16:
          n = Bs;
          break;
        case 536870912:
          n = Tv;
          break;
        default:
          n = Bs;
      }
      n = Jm(n, qm.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function qm(e, t) {
  if (Ls = -1, $s = 0, D & 6) throw Error(x(327));
  var n = e.callbackNode;
  if (Jn() && e.callbackNode !== n) return null;
  var r = Ws(e, e === ye ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ao(e, r);
  else {
    t = r;
    var i = D;
    D |= 2;
    var s = Vm();
    (ye !== e || ke !== t) && (Mt = null, lr = oe() + 500, kn(e, t));
    do
      try {
        q_();
        break;
      } catch (a) {
        Ym(e, a);
      }
    while (!0);
    tf(), io.current = s, D = i, ce !== null ? t = 0 : (ye = null, ke = 0, t = ge);
  }
  if (t !== 0) {
    if (t === 2 && (i = Lu(e), i !== 0 && (r = i, t = oc(e, i))), t === 1) throw n = Oi, kn(e, 0), Qt(e, r), ze(e, oe()), n;
    if (t === 6) Qt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !G_(i) && (t = ao(e, r), t === 2 && (s = Lu(e), s !== 0 && (r = s, t = oc(e, s))), t === 1)) throw n = Oi, kn(e, 0), Qt(e, r), ze(e, oe()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          mn(e, Ie, Mt);
          break;
        case 3:
          if (Qt(e, r), (r & 130023424) === r && (t = mf + 500 - oe(), 10 < t)) {
            if (Ws(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              $e(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = zu(mn.bind(null, e, Ie, Mt), t);
            break;
          }
          mn(e, Ie, Mt);
          break;
        case 4:
          if (Qt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - dt(r);
            s = 1 << o, o = t[o], o > i && (i = o), r &= ~s;
          }
          if (r = i, r = oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * W_(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = zu(mn.bind(null, e, Ie, Mt), r);
            break;
          }
          mn(e, Ie, Mt);
          break;
        case 5:
          mn(e, Ie, Mt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return ze(e, oe()), e.callbackNode === n ? qm.bind(null, e) : null;
}
function oc(e, t) {
  var n = li;
  return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256), e = ao(e, t), e !== 2 && (t = Ie, Ie = n, t !== null && ac(t)), e;
}
function ac(e) {
  Ie === null ? Ie = e : Ie.push.apply(Ie, e);
}
function G_(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], s = i.getSnapshot;
        i = i.value;
        try {
          if (!gt(s(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Qt(e, t) {
  for (t &= ~vf, t &= ~Ro, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - dt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Sh(e) {
  if (D & 6) throw Error(x(327));
  Jn();
  var t = Ws(e, 0);
  if (!(t & 1)) return ze(e, oe()), null;
  var n = ao(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Lu(e);
    r !== 0 && (t = r, n = oc(e, r));
  }
  if (n === 1) throw n = Oi, kn(e, 0), Qt(e, t), ze(e, oe()), n;
  if (n === 6) throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, mn(e, Ie, Mt), ze(e, oe()), null;
}
function yf(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    D = n, D === 0 && (lr = oe() + 500, bo && hn());
  }
}
function Tn(e) {
  Jt !== null && Jt.tag === 0 && !(D & 6) && Jn();
  var t = D;
  D |= 1;
  var n = nt.transition, r = W;
  try {
    if (nt.transition = null, W = 1, e) return e();
  } finally {
    W = r, nt.transition = n, D = t, !(D & 6) && hn();
  }
}
function wf() {
  We = Yn.current, K(Yn);
}
function kn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, __(n)), ce !== null) for (n = ce.return; n !== null; ) {
    var r = n;
    switch (Zc(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Vs();
        break;
      case 3:
        or(), K(De), K(be), lf();
        break;
      case 5:
        af(r);
        break;
      case 4:
        or();
        break;
      case 13:
        K(ee);
        break;
      case 19:
        K(ee);
        break;
      case 10:
        nf(r.type._context);
        break;
      case 22:
      case 23:
        wf();
    }
    n = n.return;
  }
  if (ye = e, ce = e = ln(e.current, null), ke = We = t, ge = 0, Oi = null, vf = Ro = On = 0, Ie = li = null, _n !== null) {
    for (t = 0; t < _n.length; t++) if (n = _n[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, s = n.pending;
      if (s !== null) {
        var o = s.next;
        s.next = i, r.next = o;
      }
      n.pending = r;
    }
    _n = null;
  }
  return e;
}
function Ym(e, t) {
  do {
    var n = ce;
    try {
      if (tf(), Ms.current = ro, no) {
        for (var r = te.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        no = !1;
      }
      if (xn = 0, me = de = te = null, oi = !1, Ei = 0, gf.current = null, n === null || n.return === null) {
        ge = 1, Oi = t, ce = null;
        break;
      }
      e: {
        var s = e, o = n.return, a = n, l = t;
        if (t = ke, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = lh(o);
          if (g !== null) {
            g.flags &= -257, uh(g, o, a, s, t), g.mode & 1 && ah(s, u, t), t = g, l = u;
            var m = t.updateQueue;
            if (m === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              ah(s, u, t), _f();
              break e;
            }
            l = Error(x(426));
          }
        } else if (J && a.mode & 1) {
          var w = lh(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), uh(w, o, a, s, t), Jc(ar(l, a));
            break e;
          }
        }
        s = l = ar(l, a), ge !== 4 && (ge = 2), li === null ? li = [s] : li.push(s), s = o;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var h = Am(s, l, t);
              th(s, h);
              break e;
            case 1:
              a = l;
              var p = s.type, y = s.stateNode;
              if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (on === null || !on.has(y)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var _ = bm(s, a, t);
                th(s, _);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Km(n);
    } catch (S) {
      t = S, ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Vm() {
  var e = io.current;
  return io.current = ro, e === null ? ro : e;
}
function _f() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4), ye === null || !(On & 268435455) && !(Ro & 268435455) || Qt(ye, ke);
}
function ao(e, t) {
  var n = D;
  D |= 2;
  var r = Vm();
  (ye !== e || ke !== t) && (Mt = null, kn(e, t));
  do
    try {
      H_();
      break;
    } catch (i) {
      Ym(e, i);
    }
  while (!0);
  if (tf(), D = n, io.current = r, ce !== null) throw Error(x(261));
  return ye = null, ke = 0, ge;
}
function H_() {
  for (; ce !== null; ) Xm(ce);
}
function q_() {
  for (; ce !== null && !mw(); ) Xm(ce);
}
function Xm(e) {
  var t = Zm(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? Km(e) : ce = t, gf.current = null;
}
function Km(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = j_(n, t), n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ge = 6, ce = null;
        return;
      }
    } else if (n = D_(n, t, We), n !== null) {
      ce = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function mn(e, t, n) {
  var r = W, i = nt.transition;
  try {
    nt.transition = null, W = 1, Y_(e, t, n, r);
  } finally {
    nt.transition = i, W = r;
  }
  return null;
}
function Y_(e, t, n, r) {
  do
    Jn();
  while (Jt !== null);
  if (D & 6) throw Error(x(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (Ow(e, s), e === ye && (ce = ye = null, ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || hs || (hs = !0, Jm(Bs, function() {
    return Jn(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = nt.transition, nt.transition = null;
    var o = W;
    W = 1;
    var a = D;
    D |= 4, gf.current = null, U_(e, n), Gm(n, e), h_(Du), Gs = !!Fu, Du = Fu = null, e.current = n, B_(n), yw(), D = a, W = o, nt.transition = s;
  } else e.current = n;
  if (hs && (hs = !1, Jt = e, oo = i), s = e.pendingLanes, s === 0 && (on = null), Sw(n.stateNode), ze(e, oe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (so) throw so = !1, e = ic, ic = null, e;
  return oo & 1 && e.tag !== 0 && Jn(), s = e.pendingLanes, s & 1 ? e === sc ? ui++ : (ui = 0, sc = e) : ui = 0, hn(), null;
}
function Jn() {
  if (Jt !== null) {
    var e = Av(oo), t = nt.transition, n = W;
    try {
      if (nt.transition = null, W = 16 > e ? 16 : e, Jt === null) var r = !1;
      else {
        if (e = Jt, Jt = null, oo = 0, D & 6) throw Error(x(331));
        var i = D;
        for (D |= 4, M = e.current; M !== null; ) {
          var s = M, o = s.child;
          if (M.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ai(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, M = f;
                  else for (; M !== null; ) {
                    c = M;
                    var d = c.sibling, g = c.return;
                    if (Um(c), c === u) {
                      M = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = g, M = d;
                      break;
                    }
                    M = g;
                  }
                }
              }
              var m = s.alternate;
              if (m !== null) {
                var v = m.child;
                if (v !== null) {
                  m.child = null;
                  do {
                    var w = v.sibling;
                    v.sibling = null, v = w;
                  } while (v !== null);
                }
              }
              M = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) o.return = s, M = o;
          else e: for (; M !== null; ) {
            if (s = M, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                ai(9, s, s.return);
            }
            var h = s.sibling;
            if (h !== null) {
              h.return = s.return, M = h;
              break e;
            }
            M = s.return;
          }
        }
        var p = e.current;
        for (M = p; M !== null; ) {
          o = M;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) y.return = o, M = y;
          else e: for (o = p; M !== null; ) {
            if (a = M, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  No(9, a);
              }
            } catch (S) {
              re(a, a.return, S);
            }
            if (a === o) {
              M = null;
              break e;
            }
            var _ = a.sibling;
            if (_ !== null) {
              _.return = a.return, M = _;
              break e;
            }
            M = a.return;
          }
        }
        if (D = i, hn(), Et && typeof Et.onPostCommitFiberRoot == "function") try {
          Et.onPostCommitFiberRoot(xo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      W = n, nt.transition = t;
    }
  }
  return !1;
}
function kh(e, t, n) {
  t = ar(n, t), t = Am(e, t, 1), e = sn(e, t, 1), t = $e(), e !== null && (Ni(e, 1, t), ze(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) kh(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      kh(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
        e = ar(n, e), e = bm(t, e, 1), t = sn(t, e, 1), e = $e(), t !== null && (Ni(t, 1, e), ze(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function V_(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, ye === e && (ke & n) === n && (ge === 4 || ge === 3 && (ke & 130023424) === ke && 500 > oe() - mf ? kn(e, 0) : vf |= n), ze(e, t);
}
function Qm(e, t) {
  t === 0 && (e.mode & 1 ? (t = rs, rs <<= 1, !(rs & 130023424) && (rs = 4194304)) : t = 1);
  var n = $e();
  e = jt(e, t), e !== null && (Ni(e, t, n), ze(e, n));
}
function X_(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Qm(e, n);
}
function K_(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Qm(e, n);
}
var Zm;
Zm = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || De.current) Fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, F_(e, t, n);
    Fe = !!(e.flags & 131072);
  }
  else Fe = !1, J && t.flags & 1048576 && nm(t, Qs, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      bs(e, t), e = t.pendingProps;
      var i = rr(t, be.current);
      Zn(t, n), i = cf(null, t, r, e, i, n);
      var s = ff();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, je(r) ? (s = !0, Xs(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, sf(t), i.updater = $o, t.stateNode = i, i._reactInternals = t, Yu(t, r, e, n), t = Ku(null, t, r, !0, s, n)) : (t.tag = 0, J && s && Qc(t), Le(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (bs(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Z_(r), e = ut(r, e), i) {
          case 0:
            t = Xu(null, t, r, e, n);
            break e;
          case 1:
            t = dh(null, t, r, e, n);
            break e;
          case 11:
            t = ch(null, t, r, e, n);
            break e;
          case 14:
            t = fh(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(x(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ut(r, i), Xu(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ut(r, i), dh(e, t, r, i, n);
    case 3:
      e: {
        if (Rm(t), e === null) throw Error(x(387));
        r = t.pendingProps, s = t.memoizedState, i = s.element, lm(e, t), eo(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          i = ar(Error(x(423)), t), t = hh(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = ar(Error(x(424)), t), t = hh(e, t, r, n, i);
          break e;
        } else for (Ge = rn(t.stateNode.containerInfo.firstChild), He = t, J = !0, ft = null, n = om(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ir(), r === i) {
            t = zt(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return um(t), e === null && Gu(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, ju(r, i) ? o = null : s !== null && ju(r, s) && (t.flags |= 32), Nm(e, t), Le(e, t, o, n), t.child;
    case 6:
      return e === null && Gu(t), null;
    case 13:
      return Im(e, t, n);
    case 4:
      return of(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = sr(t, null, r, n) : Le(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ut(r, i), ch(e, t, r, i, n);
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, Y(Zs, r._currentValue), r._currentValue = o, s !== null) if (gt(s.value, o)) {
          if (s.children === i.children && !De.current) {
            t = zt(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            o = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (s.tag === 1) {
                  l = Nt(-1, n & -n), l.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Hu(
                  s.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
          else if (s.tag === 18) {
            if (o = s.return, o === null) throw Error(x(341));
            o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Hu(o, n, t), o = s.sibling;
          } else o = s.child;
          if (o !== null) o.return = s;
          else for (o = s; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (s = o.sibling, s !== null) {
              s.return = o.return, o = s;
              break;
            }
            o = o.return;
          }
          s = o;
        }
        Le(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Zn(t, n), i = rt(i), r = r(i), t.flags |= 1, Le(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = ut(r, t.pendingProps), i = ut(r.type, i), fh(e, t, r, i, n);
    case 15:
      return Lm(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ut(r, i), bs(e, t), t.tag = 1, je(r) ? (e = !0, Xs(t)) : e = !1, Zn(t, n), Mm(t, r, i), Yu(t, r, i, n), Ku(null, t, r, !0, e, n);
    case 19:
      return Fm(e, t, n);
    case 22:
      return $m(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Jm(e, t) {
  return xv(e, t);
}
function Q_(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function tt(e, t, n, r) {
  return new Q_(e, t, n, r);
}
function Sf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Z_(e) {
  if (typeof e == "function") return Sf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === jc) return 11;
    if (e === zc) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return n === null ? (n = tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ns(e, t, n, r, i, s) {
  var o = 2;
  if (r = e, typeof e == "function") Sf(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Fn:
      return Pn(n.children, i, s, t);
    case Dc:
      o = 8, i |= 8;
      break;
    case mu:
      return e = tt(12, n, t, i | 2), e.elementType = mu, e.lanes = s, e;
    case yu:
      return e = tt(13, n, t, i), e.elementType = yu, e.lanes = s, e;
    case wu:
      return e = tt(19, n, t, i), e.elementType = wu, e.lanes = s, e;
    case uv:
      return Io(n, i, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case av:
          o = 10;
          break e;
        case lv:
          o = 9;
          break e;
        case jc:
          o = 11;
          break e;
        case zc:
          o = 14;
          break e;
        case Yt:
          o = 16, r = null;
          break e;
      }
      throw Error(x(130, e == null ? e : typeof e, ""));
  }
  return t = tt(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
}
function Pn(e, t, n, r) {
  return e = tt(7, e, r, t), e.lanes = n, e;
}
function Io(e, t, n, r) {
  return e = tt(22, e, r, t), e.elementType = uv, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Qa(e, t, n) {
  return e = tt(6, e, null, t), e.lanes = n, e;
}
function Za(e, t, n) {
  return t = tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function J_(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = La(0), this.expirationTimes = La(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = La(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function kf(e, t, n, r, i, s, o, a, l) {
  return e = new J_(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = tt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, sf(s), e;
}
function eS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: In, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ey(e) {
  if (!e) return cn;
  e = e._reactInternals;
  e: {
    if (An(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (je(n)) return em(e, n, t);
  }
  return t;
}
function ty(e, t, n, r, i, s, o, a, l) {
  return e = kf(n, r, !0, e, i, s, o, a, l), e.context = ey(null), n = e.current, r = $e(), i = an(n), s = Nt(r, i), s.callback = t ?? null, sn(n, s, i), e.current.lanes = i, Ni(e, i, r), ze(e, r), e;
}
function Fo(e, t, n, r) {
  var i = t.current, s = $e(), o = an(i);
  return n = ey(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(s, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = sn(i, t, o), e !== null && (ht(e, i, o, s), Ts(e, i, o)), o;
}
function lo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ph(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Pf(e, t) {
  Ph(e, t), (e = e.alternate) && Ph(e, t);
}
function tS() {
  return null;
}
var ny = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ef(e) {
  this._internalRoot = e;
}
Do.prototype.render = Ef.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Fo(e, t, null, null);
};
Do.prototype.unmount = Ef.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function() {
      Fo(null, e, null, null);
    }), t[Dt] = null;
  }
};
function Do(e) {
  this._internalRoot = e;
}
Do.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = $v();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && Rv(e);
  }
};
function Cf(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function jo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Eh() {
}
function nS(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = lo(o);
        s.call(u);
      };
    }
    var o = ty(t, r, e, 0, null, !1, !1, "", Eh);
    return e._reactRootContainer = o, e[Dt] = o.current, wi(e.nodeType === 8 ? e.parentNode : e), Tn(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = lo(l);
      a.call(u);
    };
  }
  var l = kf(e, 0, !1, null, null, !1, !1, "", Eh);
  return e._reactRootContainer = l, e[Dt] = l.current, wi(e.nodeType === 8 ? e.parentNode : e), Tn(function() {
    Fo(t, l, n, r);
  }), l;
}
function zo(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var l = lo(o);
        a.call(l);
      };
    }
    Fo(t, o, e, i);
  } else o = nS(n, t, e, i, r);
  return lo(o);
}
bv = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Kr(t.pendingLanes);
        n !== 0 && (Wc(t, n | 1), ze(t, oe()), !(D & 6) && (lr = oe() + 500, hn()));
      }
      break;
    case 13:
      Tn(function() {
        var r = jt(e, 1);
        if (r !== null) {
          var i = $e();
          ht(r, e, 1, i);
        }
      }), Pf(e, 1);
  }
};
Gc = function(e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = $e();
      ht(t, e, 134217728, n);
    }
    Pf(e, 134217728);
  }
};
Lv = function(e) {
  if (e.tag === 13) {
    var t = an(e), n = jt(e, t);
    if (n !== null) {
      var r = $e();
      ht(n, e, t, r);
    }
    Pf(e, t);
  }
};
$v = function() {
  return W;
};
Nv = function(e, t) {
  var n = W;
  try {
    return W = e, t();
  } finally {
    W = n;
  }
};
Mu = function(e, t, n) {
  switch (t) {
    case "input":
      if (ku(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ao(r);
            if (!i) throw Error(x(90));
            fv(r), ku(r, i);
          }
        }
      }
      break;
    case "textarea":
      hv(e, n);
      break;
    case "select":
      t = n.value, t != null && Vn(e, !!n.multiple, t, !1);
  }
};
_v = yf;
Sv = Tn;
var rS = { usingClientEntryPoint: !1, Events: [Ii, Un, Ao, yv, wv, yf] }, Gr = { findFiberByHostInstance: wn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, iS = { bundleType: Gr.bundleType, version: Gr.version, rendererPackageName: Gr.rendererPackageName, rendererConfig: Gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Wt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ev(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Gr.findFiberByHostInstance || tS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ps.isDisabled && ps.supportsFiber) try {
    xo = ps.inject(iS), Et = ps;
  } catch {
  }
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rS;
Ve.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Cf(t)) throw Error(x(200));
  return eS(e, t, null, n);
};
Ve.createRoot = function(e, t) {
  if (!Cf(e)) throw Error(x(299));
  var n = !1, r = "", i = ny;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = kf(e, 1, !1, null, null, n, !1, r, i), e[Dt] = t.current, wi(e.nodeType === 8 ? e.parentNode : e), new Ef(t);
};
Ve.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = Ev(t), e = e === null ? null : e.stateNode, e;
};
Ve.flushSync = function(e) {
  return Tn(e);
};
Ve.hydrate = function(e, t, n) {
  if (!jo(t)) throw Error(x(200));
  return zo(null, e, t, !0, n);
};
Ve.hydrateRoot = function(e, t, n) {
  if (!Cf(e)) throw Error(x(405));
  var r = n != null && n.hydratedSources || null, i = !1, s = "", o = ny;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = ty(t, null, e, 1, n ?? null, i, !1, s, o), e[Dt] = t.current, wi(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new Do(t);
};
Ve.render = function(e, t, n) {
  if (!jo(t)) throw Error(x(200));
  return zo(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function(e) {
  if (!jo(e)) throw Error(x(40));
  return e._reactRootContainer ? (Tn(function() {
    zo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Dt] = null;
    });
  }), !0) : !1;
};
Ve.unstable_batchedUpdates = yf;
Ve.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!jo(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return zo(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function ry() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ry);
    } catch (e) {
      console.error(e);
    }
}
ry(), rv.exports = Ve;
var sS = rv.exports, iy, Ch = sS;
iy = Ch.createRoot, Ch.hydrateRoot;
function oS(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, s = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (s[i++] = o);
  }
  return s;
}
var sy = oS;
function aS(e) {
  return function(t, n, r) {
    for (var i = -1, s = Object(t), o = r(t), a = o.length; a--; ) {
      var l = o[e ? a : ++i];
      if (n(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var lS = aS, uS = lS, cS = uS(), xf = cS;
function fS(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var dS = fS, hS = typeof Yr == "object" && Yr && Yr.Object === Object && Yr, oy = hS, pS = oy, gS = typeof self == "object" && self && self.Object === Object && self, vS = pS || gS || Function("return this")(), st = vS, mS = st, yS = mS.Symbol, wr = yS, xh = wr, ay = Object.prototype, wS = ay.hasOwnProperty, _S = ay.toString, Hr = xh ? xh.toStringTag : void 0;
function SS(e) {
  var t = wS.call(e, Hr), n = e[Hr];
  try {
    e[Hr] = void 0;
    var r = !0;
  } catch {
  }
  var i = _S.call(e);
  return r && (t ? e[Hr] = n : delete e[Hr]), i;
}
var kS = SS, PS = Object.prototype, ES = PS.toString;
function CS(e) {
  return ES.call(e);
}
var xS = CS, Oh = wr, OS = kS, TS = xS, MS = "[object Null]", AS = "[object Undefined]", Th = Oh ? Oh.toStringTag : void 0;
function bS(e) {
  return e == null ? e === void 0 ? AS : MS : Th && Th in Object(e) ? OS(e) : TS(e);
}
var bn = bS;
function LS(e) {
  return e != null && typeof e == "object";
}
var Ot = LS, $S = bn, NS = Ot, RS = "[object Arguments]";
function IS(e) {
  return NS(e) && $S(e) == RS;
}
var FS = IS, Mh = FS, DS = Ot, ly = Object.prototype, jS = ly.hasOwnProperty, zS = ly.propertyIsEnumerable, US = Mh(/* @__PURE__ */ function() {
  return arguments;
}()) ? Mh : function(e) {
  return DS(e) && jS.call(e, "callee") && !zS.call(e, "callee");
}, Di = US, BS = Array.isArray, ie = BS, uo = { exports: {} };
function WS() {
  return !1;
}
var GS = WS;
uo.exports;
(function(e, t) {
  var n = st, r = GS, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, o = s && s.exports === i, a = o ? n.Buffer : void 0, l = a ? a.isBuffer : void 0, u = l || r;
  e.exports = u;
})(uo, uo.exports);
var _r = uo.exports, HS = 9007199254740991, qS = /^(?:0|[1-9]\d*)$/;
function YS(e, t) {
  var n = typeof e;
  return t = t ?? HS, !!t && (n == "number" || n != "symbol" && qS.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Uo = YS, VS = 9007199254740991;
function XS(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= VS;
}
var Of = XS, KS = bn, QS = Of, ZS = Ot, JS = "[object Arguments]", ek = "[object Array]", tk = "[object Boolean]", nk = "[object Date]", rk = "[object Error]", ik = "[object Function]", sk = "[object Map]", ok = "[object Number]", ak = "[object Object]", lk = "[object RegExp]", uk = "[object Set]", ck = "[object String]", fk = "[object WeakMap]", dk = "[object ArrayBuffer]", hk = "[object DataView]", pk = "[object Float32Array]", gk = "[object Float64Array]", vk = "[object Int8Array]", mk = "[object Int16Array]", yk = "[object Int32Array]", wk = "[object Uint8Array]", _k = "[object Uint8ClampedArray]", Sk = "[object Uint16Array]", kk = "[object Uint32Array]", X = {};
X[pk] = X[gk] = X[vk] = X[mk] = X[yk] = X[wk] = X[_k] = X[Sk] = X[kk] = !0;
X[JS] = X[ek] = X[dk] = X[tk] = X[hk] = X[nk] = X[rk] = X[ik] = X[sk] = X[ok] = X[ak] = X[lk] = X[uk] = X[ck] = X[fk] = !1;
function Pk(e) {
  return ZS(e) && QS(e.length) && !!X[KS(e)];
}
var Ek = Pk;
function Ck(e) {
  return function(t) {
    return e(t);
  };
}
var ji = Ck, co = { exports: {} };
co.exports;
(function(e, t) {
  var n = oy, r = t && !t.nodeType && t, i = r && !0 && e && !e.nodeType && e, s = i && i.exports === r, o = s && n.process, a = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = a;
})(co, co.exports);
var Tf = co.exports, xk = Ek, Ok = ji, Ah = Tf, bh = Ah && Ah.isTypedArray, Tk = bh ? Ok(bh) : xk, zi = Tk, Mk = dS, Ak = Di, bk = ie, Lk = _r, $k = Uo, Nk = zi, Rk = Object.prototype, Ik = Rk.hasOwnProperty;
function Fk(e, t) {
  var n = bk(e), r = !n && Ak(e), i = !n && !r && Lk(e), s = !n && !r && !i && Nk(e), o = n || r || i || s, a = o ? Mk(e.length, String) : [], l = a.length;
  for (var u in e)
    (t || Ik.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    $k(u, l))) && a.push(u);
  return a;
}
var uy = Fk, Dk = Object.prototype;
function jk(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Dk;
  return e === n;
}
var Bo = jk;
function zk(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var cy = zk, Uk = cy, Bk = Uk(Object.keys, Object), Wk = Bk, Gk = Bo, Hk = Wk, qk = Object.prototype, Yk = qk.hasOwnProperty;
function Vk(e) {
  if (!Gk(e))
    return Hk(e);
  var t = [];
  for (var n in Object(e))
    Yk.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var Mf = Vk;
function Xk(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ke = Xk, Kk = bn, Qk = Ke, Zk = "[object AsyncFunction]", Jk = "[object Function]", eP = "[object GeneratorFunction]", tP = "[object Proxy]";
function nP(e) {
  if (!Qk(e))
    return !1;
  var t = Kk(e);
  return t == Jk || t == eP || t == Zk || t == tP;
}
var Ui = nP, rP = Ui, iP = Of;
function sP(e) {
  return e != null && iP(e.length) && !rP(e);
}
var Gt = sP, oP = uy, aP = Mf, lP = Gt;
function uP(e) {
  return lP(e) ? oP(e) : aP(e);
}
var Ht = uP;
const fy = /* @__PURE__ */ Q(Ht);
var cP = xf, fP = Ht;
function dP(e, t) {
  return e && cP(e, t, fP);
}
var Af = dP, hP = Gt;
function pP(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!hP(n))
      return e(n, r);
    for (var i = n.length, s = t ? i : -1, o = Object(n); (t ? s-- : ++s < i) && r(o[s], s, o) !== !1; )
      ;
    return n;
  };
}
var gP = pP, vP = Af, mP = gP, yP = mP(vP), Bi = yP, wP = Bi;
function _P(e, t) {
  var n = [];
  return wP(e, function(r, i, s) {
    t(r, i, s) && n.push(r);
  }), n;
}
var SP = _P;
function kP() {
  this.__data__ = [], this.size = 0;
}
var PP = kP;
function EP(e, t) {
  return e === t || e !== e && t !== t;
}
var Sr = EP, CP = Sr;
function xP(e, t) {
  for (var n = e.length; n--; )
    if (CP(e[n][0], t))
      return n;
  return -1;
}
var Wo = xP, OP = Wo, TP = Array.prototype, MP = TP.splice;
function AP(e) {
  var t = this.__data__, n = OP(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : MP.call(t, n, 1), --this.size, !0;
}
var bP = AP, LP = Wo;
function $P(e) {
  var t = this.__data__, n = LP(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var NP = $P, RP = Wo;
function IP(e) {
  return RP(this.__data__, e) > -1;
}
var FP = IP, DP = Wo;
function jP(e, t) {
  var n = this.__data__, r = DP(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var zP = jP, UP = PP, BP = bP, WP = NP, GP = FP, HP = zP;
function kr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
kr.prototype.clear = UP;
kr.prototype.delete = BP;
kr.prototype.get = WP;
kr.prototype.has = GP;
kr.prototype.set = HP;
var Go = kr, qP = Go;
function YP() {
  this.__data__ = new qP(), this.size = 0;
}
var VP = YP;
function XP(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var KP = XP;
function QP(e) {
  return this.__data__.get(e);
}
var ZP = QP;
function JP(e) {
  return this.__data__.has(e);
}
var eE = JP, tE = st, nE = tE["__core-js_shared__"], rE = nE, Ja = rE, Lh = function() {
  var e = /[^.]+$/.exec(Ja && Ja.keys && Ja.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function iE(e) {
  return !!Lh && Lh in e;
}
var sE = iE, oE = Function.prototype, aE = oE.toString;
function lE(e) {
  if (e != null) {
    try {
      return aE.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var dy = lE, uE = Ui, cE = sE, fE = Ke, dE = dy, hE = /[\\^$.*+?()[\]{}|]/g, pE = /^\[object .+?Constructor\]$/, gE = Function.prototype, vE = Object.prototype, mE = gE.toString, yE = vE.hasOwnProperty, wE = RegExp(
  "^" + mE.call(yE).replace(hE, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _E(e) {
  if (!fE(e) || cE(e))
    return !1;
  var t = uE(e) ? wE : pE;
  return t.test(dE(e));
}
var SE = _E;
function kE(e, t) {
  return e == null ? void 0 : e[t];
}
var PE = kE, EE = SE, CE = PE;
function xE(e, t) {
  var n = CE(e, t);
  return EE(n) ? n : void 0;
}
var Ln = xE, OE = Ln, TE = st, ME = OE(TE, "Map"), bf = ME, AE = Ln, bE = AE(Object, "create"), Ho = bE, $h = Ho;
function LE() {
  this.__data__ = $h ? $h(null) : {}, this.size = 0;
}
var $E = LE;
function NE(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var RE = NE, IE = Ho, FE = "__lodash_hash_undefined__", DE = Object.prototype, jE = DE.hasOwnProperty;
function zE(e) {
  var t = this.__data__;
  if (IE) {
    var n = t[e];
    return n === FE ? void 0 : n;
  }
  return jE.call(t, e) ? t[e] : void 0;
}
var UE = zE, BE = Ho, WE = Object.prototype, GE = WE.hasOwnProperty;
function HE(e) {
  var t = this.__data__;
  return BE ? t[e] !== void 0 : GE.call(t, e);
}
var qE = HE, YE = Ho, VE = "__lodash_hash_undefined__";
function XE(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = YE && t === void 0 ? VE : t, this;
}
var KE = XE, QE = $E, ZE = RE, JE = UE, eC = qE, tC = KE;
function Pr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Pr.prototype.clear = QE;
Pr.prototype.delete = ZE;
Pr.prototype.get = JE;
Pr.prototype.has = eC;
Pr.prototype.set = tC;
var nC = Pr, Nh = nC, rC = Go, iC = bf;
function sC() {
  this.size = 0, this.__data__ = {
    hash: new Nh(),
    map: new (iC || rC)(),
    string: new Nh()
  };
}
var oC = sC;
function aC(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var lC = aC, uC = lC;
function cC(e, t) {
  var n = e.__data__;
  return uC(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var qo = cC, fC = qo;
function dC(e) {
  var t = fC(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var hC = dC, pC = qo;
function gC(e) {
  return pC(this, e).get(e);
}
var vC = gC, mC = qo;
function yC(e) {
  return mC(this, e).has(e);
}
var wC = yC, _C = qo;
function SC(e, t) {
  var n = _C(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var kC = SC, PC = oC, EC = hC, CC = vC, xC = wC, OC = kC;
function Er(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Er.prototype.clear = PC;
Er.prototype.delete = EC;
Er.prototype.get = CC;
Er.prototype.has = xC;
Er.prototype.set = OC;
var Lf = Er, TC = Go, MC = bf, AC = Lf, bC = 200;
function LC(e, t) {
  var n = this.__data__;
  if (n instanceof TC) {
    var r = n.__data__;
    if (!MC || r.length < bC - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new AC(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var $C = LC, NC = Go, RC = VP, IC = KP, FC = ZP, DC = eE, jC = $C;
function Cr(e) {
  var t = this.__data__ = new NC(e);
  this.size = t.size;
}
Cr.prototype.clear = RC;
Cr.prototype.delete = IC;
Cr.prototype.get = FC;
Cr.prototype.has = DC;
Cr.prototype.set = jC;
var Yo = Cr, zC = "__lodash_hash_undefined__";
function UC(e) {
  return this.__data__.set(e, zC), this;
}
var BC = UC;
function WC(e) {
  return this.__data__.has(e);
}
var GC = WC, HC = Lf, qC = BC, YC = GC;
function fo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new HC(); ++t < n; )
    this.add(e[t]);
}
fo.prototype.add = fo.prototype.push = qC;
fo.prototype.has = YC;
var $f = fo;
function VC(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var hy = VC;
function XC(e, t) {
  return e.has(t);
}
var Nf = XC, KC = $f, QC = hy, ZC = Nf, JC = 1, ex = 2;
function tx(e, t, n, r, i, s) {
  var o = n & JC, a = e.length, l = t.length;
  if (a != l && !(o && l > a))
    return !1;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, d = !0, g = n & ex ? new KC() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < a; ) {
    var m = e[f], v = t[f];
    if (r)
      var w = o ? r(v, m, f, t, e, s) : r(m, v, f, e, t, s);
    if (w !== void 0) {
      if (w)
        continue;
      d = !1;
      break;
    }
    if (g) {
      if (!QC(t, function(h, p) {
        if (!ZC(g, p) && (m === h || i(m, h, n, r, s)))
          return g.push(p);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === v || i(m, v, n, r, s))) {
      d = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), d;
}
var py = tx, nx = st, rx = nx.Uint8Array, gy = rx;
function ix(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, i) {
    n[++t] = [i, r];
  }), n;
}
var sx = ix;
function ox(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Rf = ox, Rh = wr, Ih = gy, ax = Sr, lx = py, ux = sx, cx = Rf, fx = 1, dx = 2, hx = "[object Boolean]", px = "[object Date]", gx = "[object Error]", vx = "[object Map]", mx = "[object Number]", yx = "[object RegExp]", wx = "[object Set]", _x = "[object String]", Sx = "[object Symbol]", kx = "[object ArrayBuffer]", Px = "[object DataView]", Fh = Rh ? Rh.prototype : void 0, el = Fh ? Fh.valueOf : void 0;
function Ex(e, t, n, r, i, s, o) {
  switch (n) {
    case Px:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case kx:
      return !(e.byteLength != t.byteLength || !s(new Ih(e), new Ih(t)));
    case hx:
    case px:
    case mx:
      return ax(+e, +t);
    case gx:
      return e.name == t.name && e.message == t.message;
    case yx:
    case _x:
      return e == t + "";
    case vx:
      var a = ux;
    case wx:
      var l = r & fx;
      if (a || (a = cx), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      r |= dx, o.set(e, t);
      var c = lx(a(e), a(t), r, i, s, o);
      return o.delete(e), c;
    case Sx:
      if (el)
        return el.call(e) == el.call(t);
  }
  return !1;
}
var Cx = Ex;
function xx(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; )
    e[i + n] = t[n];
  return e;
}
var Vo = xx, Ox = Vo, Tx = ie;
function Mx(e, t, n) {
  var r = t(e);
  return Tx(e) ? r : Ox(r, n(e));
}
var vy = Mx;
function Ax() {
  return [];
}
var my = Ax, bx = sy, Lx = my, $x = Object.prototype, Nx = $x.propertyIsEnumerable, Dh = Object.getOwnPropertySymbols, Rx = Dh ? function(e) {
  return e == null ? [] : (e = Object(e), bx(Dh(e), function(t) {
    return Nx.call(e, t);
  }));
} : Lx, If = Rx, Ix = vy, Fx = If, Dx = Ht;
function jx(e) {
  return Ix(e, Dx, Fx);
}
var yy = jx, jh = yy, zx = 1, Ux = Object.prototype, Bx = Ux.hasOwnProperty;
function Wx(e, t, n, r, i, s) {
  var o = n & zx, a = jh(e), l = a.length, u = jh(t), c = u.length;
  if (l != c && !o)
    return !1;
  for (var f = l; f--; ) {
    var d = a[f];
    if (!(o ? d in t : Bx.call(t, d)))
      return !1;
  }
  var g = s.get(e), m = s.get(t);
  if (g && m)
    return g == t && m == e;
  var v = !0;
  s.set(e, t), s.set(t, e);
  for (var w = o; ++f < l; ) {
    d = a[f];
    var h = e[d], p = t[d];
    if (r)
      var y = o ? r(p, h, d, t, e, s) : r(h, p, d, e, t, s);
    if (!(y === void 0 ? h === p || i(h, p, n, r, s) : y)) {
      v = !1;
      break;
    }
    w || (w = d == "constructor");
  }
  if (v && !w) {
    var _ = e.constructor, S = t.constructor;
    _ != S && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof S == "function" && S instanceof S) && (v = !1);
  }
  return s.delete(e), s.delete(t), v;
}
var Gx = Wx, Hx = Ln, qx = st, Yx = Hx(qx, "DataView"), Vx = Yx, Xx = Ln, Kx = st, Qx = Xx(Kx, "Promise"), Zx = Qx, Jx = Ln, eO = st, tO = Jx(eO, "Set"), wy = tO, nO = Ln, rO = st, iO = nO(rO, "WeakMap"), sO = iO, lc = Vx, uc = bf, cc = Zx, fc = wy, dc = sO, _y = bn, xr = dy, zh = "[object Map]", oO = "[object Object]", Uh = "[object Promise]", Bh = "[object Set]", Wh = "[object WeakMap]", Gh = "[object DataView]", aO = xr(lc), lO = xr(uc), uO = xr(cc), cO = xr(fc), fO = xr(dc), yn = _y;
(lc && yn(new lc(new ArrayBuffer(1))) != Gh || uc && yn(new uc()) != zh || cc && yn(cc.resolve()) != Uh || fc && yn(new fc()) != Bh || dc && yn(new dc()) != Wh) && (yn = function(e) {
  var t = _y(e), n = t == oO ? e.constructor : void 0, r = n ? xr(n) : "";
  if (r)
    switch (r) {
      case aO:
        return Gh;
      case lO:
        return zh;
      case uO:
        return Uh;
      case cO:
        return Bh;
      case fO:
        return Wh;
    }
  return t;
});
var Or = yn, tl = Yo, dO = py, hO = Cx, pO = Gx, Hh = Or, qh = ie, Yh = _r, gO = zi, vO = 1, Vh = "[object Arguments]", Xh = "[object Array]", gs = "[object Object]", mO = Object.prototype, Kh = mO.hasOwnProperty;
function yO(e, t, n, r, i, s) {
  var o = qh(e), a = qh(t), l = o ? Xh : Hh(e), u = a ? Xh : Hh(t);
  l = l == Vh ? gs : l, u = u == Vh ? gs : u;
  var c = l == gs, f = u == gs, d = l == u;
  if (d && Yh(e)) {
    if (!Yh(t))
      return !1;
    o = !0, c = !1;
  }
  if (d && !c)
    return s || (s = new tl()), o || gO(e) ? dO(e, t, n, r, i, s) : hO(e, t, l, n, r, i, s);
  if (!(n & vO)) {
    var g = c && Kh.call(e, "__wrapped__"), m = f && Kh.call(t, "__wrapped__");
    if (g || m) {
      var v = g ? e.value() : e, w = m ? t.value() : t;
      return s || (s = new tl()), i(v, w, n, r, s);
    }
  }
  return d ? (s || (s = new tl()), pO(e, t, n, r, i, s)) : !1;
}
var wO = yO, _O = wO, Qh = Ot;
function Sy(e, t, n, r, i) {
  return e === t ? !0 : e == null || t == null || !Qh(e) && !Qh(t) ? e !== e && t !== t : _O(e, t, n, r, Sy, i);
}
var Ff = Sy, SO = Yo, kO = Ff, PO = 1, EO = 2;
function CO(e, t, n, r) {
  var i = n.length, s = i, o = !r;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var a = n[i];
    if (o && a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++i < s; ) {
    a = n[i];
    var l = a[0], u = e[l], c = a[1];
    if (o && a[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var f = new SO();
      if (r)
        var d = r(u, c, l, e, t, f);
      if (!(d === void 0 ? kO(c, u, PO | EO, r, f) : d))
        return !1;
    }
  }
  return !0;
}
var xO = CO, OO = Ke;
function TO(e) {
  return e === e && !OO(e);
}
var ky = TO, MO = ky, AO = Ht;
function bO(e) {
  for (var t = AO(e), n = t.length; n--; ) {
    var r = t[n], i = e[r];
    t[n] = [r, i, MO(i)];
  }
  return t;
}
var LO = bO;
function $O(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Py = $O, NO = xO, RO = LO, IO = Py;
function FO(e) {
  var t = RO(e);
  return t.length == 1 && t[0][2] ? IO(t[0][0], t[0][1]) : function(n) {
    return n === e || NO(n, e, t);
  };
}
var DO = FO, jO = bn, zO = Ot, UO = "[object Symbol]";
function BO(e) {
  return typeof e == "symbol" || zO(e) && jO(e) == UO;
}
var Tr = BO, WO = ie, GO = Tr, HO = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, qO = /^\w*$/;
function YO(e, t) {
  if (WO(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || GO(e) ? !0 : qO.test(e) || !HO.test(e) || t != null && e in Object(t);
}
var Df = YO, Ey = Lf, VO = "Expected a function";
function jf(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(VO);
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(i))
      return s.get(i);
    var o = e.apply(this, r);
    return n.cache = s.set(i, o) || s, o;
  };
  return n.cache = new (jf.Cache || Ey)(), n;
}
jf.Cache = Ey;
var XO = jf, KO = XO, QO = 500;
function ZO(e) {
  var t = KO(e, function(r) {
    return n.size === QO && n.clear(), r;
  }), n = t.cache;
  return t;
}
var JO = ZO, eT = JO, tT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nT = /\\(\\)?/g, rT = eT(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(tT, function(n, r, i, s) {
    t.push(i ? s.replace(nT, "$1") : r || n);
  }), t;
}), iT = rT;
function sT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var Mr = sT, Zh = wr, oT = Mr, aT = ie, lT = Tr, Jh = Zh ? Zh.prototype : void 0, ep = Jh ? Jh.toString : void 0;
function Cy(e) {
  if (typeof e == "string")
    return e;
  if (aT(e))
    return oT(e, Cy) + "";
  if (lT(e))
    return ep ? ep.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var uT = Cy, cT = uT;
function fT(e) {
  return e == null ? "" : cT(e);
}
var xy = fT, dT = ie, hT = Df, pT = iT, gT = xy;
function vT(e, t) {
  return dT(e) ? e : hT(e, t) ? [e] : pT(gT(e));
}
var Xo = vT, mT = Tr;
function yT(e) {
  if (typeof e == "string" || mT(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Wi = yT, wT = Xo, _T = Wi;
function ST(e, t) {
  t = wT(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[_T(t[n++])];
  return n && n == r ? e : void 0;
}
var Ko = ST, kT = Ko;
function PT(e, t, n) {
  var r = e == null ? void 0 : kT(e, t);
  return r === void 0 ? n : r;
}
var Oy = PT;
const nl = /* @__PURE__ */ Q(Oy);
function ET(e, t) {
  return e != null && t in Object(e);
}
var CT = ET, xT = Xo, OT = Di, TT = ie, MT = Uo, AT = Of, bT = Wi;
function LT(e, t, n) {
  t = xT(t, e);
  for (var r = -1, i = t.length, s = !1; ++r < i; ) {
    var o = bT(t[r]);
    if (!(s = e != null && n(e, o)))
      break;
    e = e[o];
  }
  return s || ++r != i ? s : (i = e == null ? 0 : e.length, !!i && AT(i) && MT(o, i) && (TT(e) || OT(e)));
}
var Ty = LT, $T = CT, NT = Ty;
function RT(e, t) {
  return e != null && NT(e, t, $T);
}
var My = RT, IT = Ff, FT = Oy, DT = My, jT = Df, zT = ky, UT = Py, BT = Wi, WT = 1, GT = 2;
function HT(e, t) {
  return jT(e) && zT(t) ? UT(BT(e), t) : function(n) {
    var r = FT(n, e);
    return r === void 0 && r === t ? DT(n, e) : IT(t, r, WT | GT);
  };
}
var qT = HT;
function YT(e) {
  return e;
}
var $n = YT;
function VT(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var Ay = VT, XT = Ko;
function KT(e) {
  return function(t) {
    return XT(t, e);
  };
}
var QT = KT, ZT = Ay, JT = QT, eM = Df, tM = Wi;
function nM(e) {
  return eM(e) ? ZT(tM(e)) : JT(e);
}
var rM = nM, iM = DO, sM = qT, oM = $n, aM = ie, lM = rM;
function uM(e) {
  return typeof e == "function" ? e : e == null ? oM : typeof e == "object" ? aM(e) ? sM(e[0], e[1]) : iM(e) : lM(e);
}
var vt = uM, cM = sy, fM = SP, dM = vt, hM = ie;
function pM(e, t) {
  var n = hM(e) ? cM : fM;
  return n(e, dM(t));
}
var zf = pM;
const ho = /* @__PURE__ */ Q(zf);
var tp = wr, gM = Di, vM = ie, np = tp ? tp.isConcatSpreadable : void 0;
function mM(e) {
  return vM(e) || gM(e) || !!(np && e && e[np]);
}
var yM = mM, wM = Vo, _M = yM;
function by(e, t, n, r, i) {
  var s = -1, o = e.length;
  for (n || (n = _M), i || (i = []); ++s < o; ) {
    var a = e[s];
    t > 0 && n(a) ? t > 1 ? by(a, t - 1, n, r, i) : wM(i, a) : r || (i[i.length] = a);
  }
  return i;
}
var Gi = by, SM = Bi, kM = Gt;
function PM(e, t) {
  var n = -1, r = kM(e) ? Array(e.length) : [];
  return SM(e, function(i, s, o) {
    r[++n] = t(i, s, o);
  }), r;
}
var Ly = PM, EM = Mr, CM = vt, xM = Ly, OM = ie;
function TM(e, t) {
  var n = OM(e) ? EM : xM;
  return n(e, CM(t));
}
var Qo = TM;
const fe = /* @__PURE__ */ Q(Qo);
var MM = Gi, AM = Qo;
function bM(e, t) {
  return MM(AM(e, t), 1);
}
var LM = bM;
const Rt = /* @__PURE__ */ Q(LM);
function $M(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Uf = $M, NM = $n;
function RM(e) {
  return typeof e == "function" ? e : NM;
}
var $y = RM, IM = Uf, FM = Bi, DM = $y, jM = ie;
function zM(e, t) {
  var n = jM(e) ? IM : FM;
  return n(e, DM(t));
}
var Bf = zM;
const pe = /* @__PURE__ */ Q(Bf);
var UM = Bi;
function BM(e, t) {
  var n;
  return UM(e, function(r, i, s) {
    return n = t(r, i, s), !n;
  }), !!n;
}
var WM = BM, GM = Sr, HM = Gt, qM = Uo, YM = Ke;
function VM(e, t, n) {
  if (!YM(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? HM(n) && qM(t, n.length) : r == "string" && t in n) ? GM(n[t], e) : !1;
}
var Ar = VM, XM = hy, KM = vt, QM = WM, ZM = ie, JM = Ar;
function e2(e, t, n) {
  var r = ZM(e) ? XM : QM;
  return n && JM(e, t, n) && (t = void 0), r(e, KM(t));
}
var t2 = e2;
const rp = /* @__PURE__ */ Q(t2);
var n2 = Mr;
function r2(e, t) {
  return n2(t, function(n) {
    return e[n];
  });
}
var i2 = r2, s2 = i2, o2 = Ht;
function a2(e) {
  return e == null ? [] : s2(e, o2(e));
}
var Wf = a2;
const Pt = /* @__PURE__ */ Q(Wf);
var l2 = st, u2 = function() {
  return l2.Date.now();
}, Ny = u2, c2 = /\s/;
function f2(e) {
  for (var t = e.length; t-- && c2.test(e.charAt(t)); )
    ;
  return t;
}
var d2 = f2, h2 = d2, p2 = /^\s+/;
function g2(e) {
  return e && e.slice(0, h2(e) + 1).replace(p2, "");
}
var v2 = g2, m2 = v2, ip = Ke, y2 = Tr, sp = NaN, w2 = /^[-+]0x[0-9a-f]+$/i, _2 = /^0b[01]+$/i, S2 = /^0o[0-7]+$/i, k2 = parseInt;
function P2(e) {
  if (typeof e == "number")
    return e;
  if (y2(e))
    return sp;
  if (ip(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ip(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = m2(e);
  var n = _2.test(e);
  return n || S2.test(e) ? k2(e.slice(2), n ? 2 : 8) : w2.test(e) ? sp : +e;
}
var Ry = P2, E2 = Ke, rl = Ny, op = Ry, C2 = "Expected a function", x2 = Math.max, O2 = Math.min;
function T2(e, t, n) {
  var r, i, s, o, a, l, u = 0, c = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(C2);
  t = op(t) || 0, E2(n) && (c = !!n.leading, f = "maxWait" in n, s = f ? x2(op(n.maxWait) || 0, t) : s, d = "trailing" in n ? !!n.trailing : d);
  function g(k) {
    var P = r, E = i;
    return r = i = void 0, u = k, o = e.apply(E, P), o;
  }
  function m(k) {
    return u = k, a = setTimeout(h, t), c ? g(k) : o;
  }
  function v(k) {
    var P = k - l, E = k - u, T = t - P;
    return f ? O2(T, s - E) : T;
  }
  function w(k) {
    var P = k - l, E = k - u;
    return l === void 0 || P >= t || P < 0 || f && E >= s;
  }
  function h() {
    var k = rl();
    if (w(k))
      return p(k);
    a = setTimeout(h, v(k));
  }
  function p(k) {
    return a = void 0, d && r ? g(k) : (r = i = void 0, o);
  }
  function y() {
    a !== void 0 && clearTimeout(a), u = 0, r = l = i = a = void 0;
  }
  function _() {
    return a === void 0 ? o : p(rl());
  }
  function S() {
    var k = rl(), P = w(k);
    if (r = arguments, i = this, l = k, P) {
      if (a === void 0)
        return m(l);
      if (f)
        return clearTimeout(a), a = setTimeout(h, t), g(l);
    }
    return a === void 0 && (a = setTimeout(h, t)), o;
  }
  return S.cancel = y, S.flush = _, S;
}
var M2 = T2;
const A2 = /* @__PURE__ */ Q(M2);
class Ae {
  /**
   * Generats a unique ID (thanks Stack overflow :3)
   * @returns {String}
   */
  static UID() {
    return Ae.TESTING ? (Ae.TESTING_UID++, `${Ae.TESTING_UID}`) : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
      const n = Math.random() * 16 | 0;
      return (t === "x" ? n : n & 3 | 8).toString(16);
    });
  }
  static closest(t, n) {
    return Element.prototype.closest || (Element.prototype.closest = function(r) {
      var i = this;
      do {
        if (Element.prototype.matches.call(i, r))
          return i;
        i = i.parentElement || i.parentNode;
      } while (i !== null && i.nodeType === 1);
      return null;
    }), t.closest(n);
  }
}
Ae.TESTING = !1;
Ae.TESTING_UID = 0;
class Zo {
  constructor() {
    this.listeners = {};
  }
  fireEventInternal(t, n, r) {
    this.iterateListeners((i) => {
      if (!t && !r.firing)
        return !1;
      i[n] && i[n](r);
    });
  }
  fireEvent(t, n) {
    t = Object.assign({ firing: !0, stopPropagation: () => {
      t.firing = !1;
    } }, t), this.fireEventInternal(!0, "eventWillFire", Object.assign(Object.assign({}, t), { function: n })), this.fireEventInternal(!1, n, t), this.fireEventInternal(!0, "eventDidFire", Object.assign(Object.assign({}, t), { function: n }));
  }
  iterateListeners(t) {
    for (let n in this.listeners)
      if (t(this.listeners[n]) === !1)
        return;
  }
  getListenerHandle(t) {
    for (let n in this.listeners)
      if (this.listeners[n] === t)
        return {
          id: n,
          listener: t,
          deregister: () => {
            delete this.listeners[n];
          }
        };
  }
  registerListener(t) {
    const n = Ae.UID();
    return this.listeners[n] = t, {
      id: n,
      listener: t,
      deregister: () => {
        delete this.listeners[n];
      }
    };
  }
  deregisterListener(t) {
    if (typeof t == "object")
      return t.deregister(), !0;
    const n = this.getListenerHandle(t);
    return n ? (n.deregister(), !0) : !1;
  }
}
class Zr extends Zo {
  constructor() {
    super(), this.factories = {};
  }
  getFactories() {
    return Pt(this.factories);
  }
  clearFactories() {
    for (let t in this.factories)
      this.deregisterFactory(t);
  }
  getFactory(t) {
    if (!this.factories[t])
      throw new Error(`Cannot find factory with type [${t}]`);
    return this.factories[t];
  }
  registerFactory(t) {
    t.setFactoryBank(this), this.factories[t.getType()] = t, this.fireEvent({ factory: t }, "factoryAdded");
  }
  deregisterFactory(t) {
    const n = this.factories[t];
    n.setFactoryBank(null), delete this.factories[t], this.fireEvent({ factory: n }, "factoryRemoved");
  }
}
class Be {
  constructor(t) {
    this.matrix = t;
  }
  mmul(t) {
    return this.matrix = this.matrix.map((n, r) => t.asArray()[0].map((i, s) => n.reduce((o, a, l) => o + this.matrix[r][l] * t.asArray()[l][s], 0))), this;
  }
  asArray() {
    return this.matrix;
  }
  get(t, n) {
    return this.asArray()[t][n];
  }
  static multiply(...t) {
    let n = t[0];
    for (let r = 1; r < t.length; r++)
      n = n.mmul(t[r]);
    return n;
  }
  static scaleMatrix(t, n) {
    return new Be([
      [t, 0, 0],
      [0, n, 0],
      [0, 0, 1]
    ]);
  }
  static translateMatrix(t, n) {
    return new Be([
      [1, 0, t],
      [0, 1, n],
      [0, 0, 1]
    ]);
  }
  static rotateMatrix(t) {
    return new Be([
      [Math.cos(t), -1 * Math.sin(t), 0],
      [Math.sin(t), Math.cos(t), 0],
      [0, 0, 1]
    ]);
  }
  static createScaleMatrix(t, n, r) {
    return this.multiply(Be.translateMatrix(r.x, r.y), Be.scaleMatrix(t, n), Be.translateMatrix(-r.x, -r.y));
  }
  static createRotateMatrix(t, n) {
    return this.multiply(Be.translateMatrix(n.x, n.y), Be.rotateMatrix(t), Be.translateMatrix(-n.x, -n.y));
  }
}
class R {
  constructor(t = 0, n = 0) {
    this.x = t, this.y = n;
  }
  translate(t, n) {
    this.x += t, this.y += n;
  }
  clone() {
    return new R(this.x, this.y);
  }
  toSVG() {
    return this.x + " " + this.y;
  }
  asMatrix() {
    return new Be([[this.x], [this.y], [1]]);
  }
  transform(t) {
    let n = t.mmul(this.asMatrix());
    this.x = n.get(0, 0), this.y = n.get(1, 0);
  }
  static middlePoint(t, n) {
    return new R((n.x + t.x) / 2, (n.y + t.y) / 2);
  }
}
var Z;
(function(e) {
  e.TOP_LEFT = "TL", e.TOP_RIGHT = "TR", e.BOTTOM_RIGHT = "BR", e.BOTTOM_LEFT = "BL";
})(Z || (Z = {}));
const il = (e, t, n, r) => ({
  [Z.TOP_LEFT]: new R(e, t),
  [Z.TOP_RIGHT]: new R(e + n, t),
  [Z.BOTTOM_RIGHT]: new R(e + n, t + r),
  [Z.BOTTOM_LEFT]: new R(e, t + r)
}), Iy = () => ({
  [Z.TOP_LEFT]: new R(),
  [Z.TOP_RIGHT]: new R(),
  [Z.BOTTOM_RIGHT]: new R(),
  [Z.BOTTOM_LEFT]: new R()
}), po = (e) => {
  if (e.length === 0)
    return Iy();
  let t = e[0].x, n = e[0].x, r = e[0].y, i = e[0].y;
  for (let s = 1; s < e.length; s++)
    e[s].x < t && (t = e[s].x), e[s].x > n && (n = e[s].x), e[s].y < r && (r = e[s].y), e[s].y > i && (i = e[s].y);
  return {
    [Z.TOP_LEFT]: new R(t, r),
    [Z.TOP_RIGHT]: new R(n, r),
    [Z.BOTTOM_RIGHT]: new R(n, i),
    [Z.BOTTOM_LEFT]: new R(t, i)
  };
}, b2 = (e) => po(Rt(e, (t) => t.getPoints()));
class Fy {
  constructor(t = []) {
    this.points = t;
  }
  serialize() {
    return fe(this.points, (t) => [t.x, t.y]);
  }
  deserialize(t) {
    this.points = fe(t, (n) => new R(n[0], n[1]));
  }
  scale(t, n, r) {
    let i = Be.createScaleMatrix(t, n, r);
    pe(this.points, (s) => {
      s.transform(i);
    });
  }
  transform(t) {
    pe(this.points, (n) => {
      n.transform(t);
    });
  }
  setPoints(t) {
    this.points = t;
  }
  getPoints() {
    return this.points;
  }
  rotate(t) {
    this.transform(Be.createRotateMatrix(t / (180 / Math.PI), this.getOrigin()));
  }
  translate(t, n) {
    pe(this.points, (r) => {
      r.translate(t, n);
    });
  }
  doClone(t) {
    this.points = fe(t.points, (n) => n.clone());
  }
  clone() {
    let t = Object.create(this);
    return t.doClone(this), t;
  }
  getOrigin() {
    if (this.points.length === 0)
      return null;
    let t = po(this.points);
    return R.middlePoint(t[Z.TOP_LEFT], t[Z.BOTTOM_RIGHT]);
  }
  getBoundingBox() {
    return po(this.points);
  }
}
class pt extends Fy {
  static fromPositionAndSize(t, n, r, i) {
    return new pt(il(t, n, r, i));
  }
  static fromPointAndSize(t, n, r) {
    return new pt(il(t.x, t.y, n, r));
  }
  constructor(t) {
    t || (t = Iy()), super([
      t[Z.TOP_LEFT],
      t[Z.TOP_RIGHT],
      t[Z.BOTTOM_RIGHT],
      t[Z.BOTTOM_LEFT]
    ]);
  }
  updateDimensions(t, n, r, i) {
    const s = il(t, n, r, i);
    this.setPoints([
      s[Z.TOP_LEFT],
      s[Z.TOP_RIGHT],
      s[Z.BOTTOM_RIGHT],
      s[Z.BOTTOM_LEFT]
    ]);
  }
  setPoints(t) {
    if (t.length !== 4)
      throw "Rectangles must always have 4 points";
    super.setPoints(t);
  }
  containsPoint(t) {
    const n = this.getTopLeft(), r = this.getBottomRight();
    return t.x >= n.x && t.x <= r.x && t.y >= n.y && t.y <= r.y;
  }
  getWidth() {
    return Math.sqrt(Math.pow(this.getTopLeft().x - this.getTopRight().x, 2) + Math.pow(this.getTopLeft().y - this.getTopRight().y, 2));
  }
  getHeight() {
    return Math.sqrt(Math.pow(this.getBottomLeft().x - this.getTopLeft().x, 2) + Math.pow(this.getBottomLeft().y - this.getTopLeft().y, 2));
  }
  getTopMiddle() {
    return R.middlePoint(this.getTopLeft(), this.getTopRight());
  }
  getBottomMiddle() {
    return R.middlePoint(this.getBottomLeft(), this.getBottomRight());
  }
  getLeftMiddle() {
    return R.middlePoint(this.getBottomLeft(), this.getTopLeft());
  }
  getRightMiddle() {
    return R.middlePoint(this.getBottomRight(), this.getTopRight());
  }
  getTopLeft() {
    return this.points[0];
  }
  getTopRight() {
    return this.points[1];
  }
  getBottomRight() {
    return this.points[2];
  }
  getBottomLeft() {
    return this.points[3];
  }
}
var wt;
(function(e) {
  e[e.SOURCE = 0] = "SOURCE", e[e.SOURCE_CONTROL = 1] = "SOURCE_CONTROL", e[e.TARGET_CONTROL = 2] = "TARGET_CONTROL", e[e.TARGET = 3] = "TARGET";
})(wt || (wt = {}));
class L2 extends Fy {
  constructor() {
    super([new R(0, 0), new R(0, 0), new R(0, 0), new R(0, 0)]);
  }
  getSVGCurve() {
    return `M${this.getSource().toSVG()} C${this.getSourceControl().toSVG()}, ${this.getTargetControl().toSVG()}, ${this.getTarget().toSVG()}`;
  }
  setPoints(t) {
    if (t.length !== 4)
      throw new Error("BezierCurve must have extactly 4 points");
    super.setPoints(t);
  }
  getSource() {
    return this.points[wt.SOURCE];
  }
  getSourceControl() {
    return this.points[wt.SOURCE_CONTROL];
  }
  getTargetControl() {
    return this.points[wt.TARGET_CONTROL];
  }
  getTarget() {
    return this.points[wt.TARGET];
  }
  setSource(t) {
    this.points[wt.SOURCE] = t;
  }
  setSourceControl(t) {
    this.points[wt.SOURCE_CONTROL] = t;
  }
  setTargetControl(t) {
    this.points[wt.TARGET_CONTROL] = t;
  }
  setTarget(t) {
    this.points[wt.TARGET] = t;
  }
}
var B;
(function(e) {
  e.MOUSE_DOWN = "mouse-down", e.MOUSE_UP = "mouse-up", e.MOUSE_MOVE = "mouse-move", e.MOUSE_WHEEL = "mouse-wheel", e.KEY_DOWN = "key-down", e.KEY_UP = "key-up", e.TOUCH_START = "touch-start", e.TOUCH_END = "touch-end", e.TOUCH_MOVE = "touch-move";
})(B || (B = {}));
class he {
  constructor(t) {
    this.options = t, this.id = Ae.UID();
  }
  setEngine(t) {
    this.engine = t;
  }
}
class $2 {
  constructor(t) {
    this.actions = {}, this.engine = t, this.keys = {};
  }
  getKeys() {
    return fy(this.keys);
  }
  registerAction(t) {
    return t.setEngine(this.engine), this.actions[t.id] = t, () => {
      this.deregisterAction(t);
    };
  }
  deregisterAction(t) {
    t.setEngine(null), delete this.actions[t.id];
  }
  getActionsForType(t) {
    return ho(this.actions, (n) => n.options.type === t);
  }
  getModelForEvent(t) {
    return t.model ? t.model : this.engine.getMouseElement(t.event);
  }
  getActionsForEvent(t) {
    const { event: n } = t;
    return n.type === "mousedown" ? this.getActionsForType(B.MOUSE_DOWN) : n.type === "mouseup" ? this.getActionsForType(B.MOUSE_UP) : n.type === "keydown" ? (this.keys[n.key.toLowerCase()] = !0, this.getActionsForType(B.KEY_DOWN)) : n.type === "keyup" ? (delete this.keys[n.key.toLowerCase()], this.getActionsForType(B.KEY_UP)) : n.type === "mousemove" ? this.getActionsForType(B.MOUSE_MOVE) : n.type === "wheel" ? this.getActionsForType(B.MOUSE_WHEEL) : n.type === "touchstart" ? this.getActionsForType(B.TOUCH_START) : n.type === "touchend" ? this.getActionsForType(B.TOUCH_END) : n.type === "touchmove" ? this.getActionsForType(B.TOUCH_MOVE) : [];
  }
  fireAction(t) {
    const n = this.getActionsForEvent(t);
    for (let r of n)
      r.options.fire(t);
  }
}
class N2 extends he {
  constructor(t = {}) {
    super({
      type: B.MOUSE_WHEEL,
      fire: (n) => {
        const { event: r } = n;
        for (let s of this.engine.getModel().getLayers())
          s.allowRepaint(!1);
        const i = this.engine.getModel();
        if (r.stopPropagation(), r.ctrlKey) {
          const s = this.engine.getModel().getZoomLevel() / 100;
          let o = t.inverseZoom ? r.deltaY : -r.deltaY;
          o /= 3, i.getZoomLevel() + o > 10 && i.setZoomLevel(i.getZoomLevel() + o);
          const a = i.getZoomLevel() / 100, l = r.currentTarget.getBoundingClientRect(), u = l.width, c = l.height, f = u * a - u * s, d = c * a - c * s, g = r.clientX - l.left, m = r.clientY - l.top, v = (g - i.getOffsetX()) / s / u, w = (m - i.getOffsetY()) / s / c;
          i.setOffset(i.getOffsetX() - f * v, i.getOffsetY() - d * w);
        } else {
          let s = t.inverseZoom ? -r.deltaY : r.deltaY, o = t.inverseZoom ? -r.deltaX : r.deltaX;
          i.setOffset(i.getOffsetX() - o, i.getOffsetY() - s);
        }
        this.engine.repaintCanvas();
        for (let s of this.engine.getModel().getLayers())
          s.allowRepaint(!0);
      }
    });
  }
}
class R2 extends he {
  constructor(t = {}) {
    super({
      type: B.MOUSE_WHEEL,
      fire: (n) => {
        const { event: r } = n;
        for (let h of this.engine.getModel().getLayers())
          h.allowRepaint(!1);
        const i = this.engine.getModel();
        r.stopPropagation();
        const s = this.engine.getModel().getZoomLevel() / 100;
        let o = t.inverseZoom ? -r.deltaY : r.deltaY;
        r.ctrlKey && o % 1 !== 0 ? o /= 3 : o /= 60, i.getZoomLevel() + o > 10 && i.setZoomLevel(i.getZoomLevel() + o);
        const a = i.getZoomLevel() / 100, l = r.currentTarget.getBoundingClientRect(), u = l.width, c = l.height, f = u * a - u * s, d = c * a - c * s, g = r.clientX - l.left, m = r.clientY - l.top, v = (g - i.getOffsetX()) / s / u, w = (m - i.getOffsetY()) / s / c;
        i.setOffset(i.getOffsetX() - f * v, i.getOffsetY() - d * w), this.engine.repaintCanvas();
        for (let h of this.engine.getModel().getLayers())
          h.allowRepaint(!0);
      }
    });
  }
}
var I2 = Ff;
function F2(e, t) {
  return I2(e, t);
}
var D2 = F2;
const Dy = /* @__PURE__ */ Q(D2);
class j2 extends he {
  constructor(t = {}) {
    const n = t.keyCodes || [46, 8], r = Object.assign({ ctrlKey: !1, shiftKey: !1, altKey: !1, metaKey: !1 }, t.modifiers);
    super({
      type: B.KEY_DOWN,
      fire: (i) => {
        const { keyCode: s, ctrlKey: o, shiftKey: a, altKey: l, metaKey: u } = i.event;
        n.indexOf(s) !== -1 && Dy({ ctrlKey: o, shiftKey: a, altKey: l, metaKey: u }, r) && (pe(this.engine.getModel().getSelectedEntities(), (c) => {
          c.isLocked() || c.remove();
        }), this.engine.repaintCanvas());
      }
    });
  }
}
function z2(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var jy = z2;
const zy = /* @__PURE__ */ Q(jy);
class U2 extends Zo {
  constructor(t) {
    super(), this.engine = t, this.stateStack = [];
  }
  getCurrentState() {
    return this.currentState;
  }
  pushState(t) {
    this.stateStack.push(t), this.setState(t);
  }
  popState() {
    this.stateStack.pop(), this.setState(zy(this.stateStack));
  }
  setState(t) {
    t.setEngine(this.engine), this.currentState && this.currentState.deactivated(t);
    const n = this.currentState;
    this.currentState = t, this.currentState && (this.currentState.activated(n), this.fireEvent({
      newState: t
    }, "stateChanged"));
  }
}
class B2 extends Zo {
  constructor(t = {}) {
    super(), this.model = null, this.eventBus = new $2(this), this.stateMachine = new U2(this), this.layerFactories = new Zr(), this.registerFactoryBank(this.layerFactories), this.options = Object.assign({ registerDefaultDeleteItemsAction: !0, registerDefaultZoomCanvasAction: !0, repaintDebounceMs: 0 }, t), this.options.registerDefaultZoomCanvasAction === !0 ? this.eventBus.registerAction(new R2()) : this.options.registerDefaultPanAndZoomCanvasAction === !0 && this.eventBus.registerAction(new N2()), this.options.registerDefaultDeleteItemsAction === !0 && this.eventBus.registerAction(new j2());
  }
  getStateMachine() {
    return this.stateMachine;
  }
  getRelativeMousePoint(t) {
    const n = this.getRelativePoint(t.clientX, t.clientY);
    return new R((n.x - this.model.getOffsetX()) / (this.model.getZoomLevel() / 100), (n.y - this.model.getOffsetY()) / (this.model.getZoomLevel() / 100));
  }
  getRelativePoint(t, n) {
    const r = this.canvas.getBoundingClientRect();
    return new R(t - r.left, n - r.top);
  }
  registerFactoryBank(t) {
    t.registerListener({
      factoryAdded: (n) => {
        n.factory.setDiagramEngine(this);
      },
      factoryRemoved: (n) => {
        n.factory.setDiagramEngine(null);
      }
    });
  }
  getActionEventBus() {
    return this.eventBus;
  }
  getLayerFactories() {
    return this.layerFactories;
  }
  getFactoryForLayer(t) {
    return typeof t == "string" ? this.layerFactories.getFactory(t) : this.layerFactories.getFactory(t.getType());
  }
  setModel(t) {
    this.model = t, this.canvas && requestAnimationFrame(() => {
      this.repaintCanvas();
    });
  }
  getModel() {
    return this.model;
  }
  repaintCanvas(t) {
    const { repaintDebounceMs: n } = this.options, r = () => {
      this.iterateListeners((s) => {
        s.repaintCanvas && s.repaintCanvas();
      });
    };
    let i = r;
    if (n > 0 && (i = A2(r, n)), t)
      return new Promise((s) => {
        const o = this.registerListener({
          rendered: () => {
            s(), o.deregister();
          }
        });
        i();
      });
    i();
  }
  setCanvas(t) {
    this.canvas !== t && (this.canvas = t, t && this.fireEvent({}, "canvasReady"));
  }
  getCanvas() {
    return this.canvas;
  }
  getMouseElement(t) {
    return null;
  }
  zoomToFit() {
    const t = this.canvas.clientWidth / this.canvas.scrollWidth, n = this.canvas.clientHeight / this.canvas.scrollHeight, r = t < n ? t : n;
    this.model.setZoomLevel(this.model.getZoomLevel() * r), this.model.setOffset(0, 0), this.repaintCanvas();
  }
}
var W2 = Ln, G2 = function() {
  try {
    var e = W2(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Uy = G2, ap = Uy;
function H2(e, t, n) {
  t == "__proto__" && ap ? ap(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Jo = H2, q2 = Jo, Y2 = Sr, V2 = Object.prototype, X2 = V2.hasOwnProperty;
function K2(e, t, n) {
  var r = e[t];
  (!(X2.call(e, t) && Y2(r, n)) || n === void 0 && !(t in e)) && q2(e, t, n);
}
var ea = K2, Q2 = ea, Z2 = Jo;
function J2(e, t, n, r) {
  var i = !n;
  n || (n = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var a = t[s], l = r ? r(n[a], e[a], a, n, e) : void 0;
    l === void 0 && (l = e[a]), i ? Z2(n, a, l) : Q2(n, a, l);
  }
  return n;
}
var Hi = J2, eA = Hi, tA = Ht;
function nA(e, t) {
  return e && eA(t, tA(t), e);
}
var rA = nA;
function iA(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var sA = iA, oA = Ke, aA = Bo, lA = sA, uA = Object.prototype, cA = uA.hasOwnProperty;
function fA(e) {
  if (!oA(e))
    return lA(e);
  var t = aA(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !cA.call(e, r)) || n.push(r);
  return n;
}
var dA = fA, hA = uy, pA = dA, gA = Gt;
function vA(e) {
  return gA(e) ? hA(e, !0) : pA(e);
}
var Nn = vA, mA = Hi, yA = Nn;
function wA(e, t) {
  return e && mA(t, yA(t), e);
}
var _A = wA, go = { exports: {} };
go.exports;
(function(e, t) {
  var n = st, r = t && !t.nodeType && t, i = r && !0 && e && !e.nodeType && e, s = i && i.exports === r, o = s ? n.Buffer : void 0, a = o ? o.allocUnsafe : void 0;
  function l(u, c) {
    if (c)
      return u.slice();
    var f = u.length, d = a ? a(f) : new u.constructor(f);
    return u.copy(d), d;
  }
  e.exports = l;
})(go, go.exports);
var By = go.exports;
function SA(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Gf = SA, kA = Hi, PA = If;
function EA(e, t) {
  return kA(e, PA(e), t);
}
var CA = EA, xA = cy, OA = xA(Object.getPrototypeOf, Object), ta = OA, TA = Vo, MA = ta, AA = If, bA = my, LA = Object.getOwnPropertySymbols, $A = LA ? function(e) {
  for (var t = []; e; )
    TA(t, AA(e)), e = MA(e);
  return t;
} : bA, Wy = $A, NA = Hi, RA = Wy;
function IA(e, t) {
  return NA(e, RA(e), t);
}
var FA = IA, DA = vy, jA = Wy, zA = Nn;
function UA(e) {
  return DA(e, zA, jA);
}
var BA = UA, WA = Object.prototype, GA = WA.hasOwnProperty;
function HA(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && GA.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var qA = HA, lp = gy;
function YA(e) {
  var t = new e.constructor(e.byteLength);
  return new lp(t).set(new lp(e)), t;
}
var Hf = YA, VA = Hf;
function XA(e, t) {
  var n = t ? VA(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var KA = XA, QA = /\w*$/;
function ZA(e) {
  var t = new e.constructor(e.source, QA.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var JA = ZA, up = wr, cp = up ? up.prototype : void 0, fp = cp ? cp.valueOf : void 0;
function eb(e) {
  return fp ? Object(fp.call(e)) : {};
}
var tb = eb, nb = Hf;
function rb(e, t) {
  var n = t ? nb(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Gy = rb, ib = Hf, sb = KA, ob = JA, ab = tb, lb = Gy, ub = "[object Boolean]", cb = "[object Date]", fb = "[object Map]", db = "[object Number]", hb = "[object RegExp]", pb = "[object Set]", gb = "[object String]", vb = "[object Symbol]", mb = "[object ArrayBuffer]", yb = "[object DataView]", wb = "[object Float32Array]", _b = "[object Float64Array]", Sb = "[object Int8Array]", kb = "[object Int16Array]", Pb = "[object Int32Array]", Eb = "[object Uint8Array]", Cb = "[object Uint8ClampedArray]", xb = "[object Uint16Array]", Ob = "[object Uint32Array]";
function Tb(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case mb:
      return ib(e);
    case ub:
    case cb:
      return new r(+e);
    case yb:
      return sb(e, n);
    case wb:
    case _b:
    case Sb:
    case kb:
    case Pb:
    case Eb:
    case Cb:
    case xb:
    case Ob:
      return lb(e, n);
    case fb:
      return new r();
    case db:
    case gb:
      return new r(e);
    case hb:
      return ob(e);
    case pb:
      return new r();
    case vb:
      return ab(e);
  }
}
var Mb = Tb, Ab = Ke, dp = Object.create, bb = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Ab(t))
      return {};
    if (dp)
      return dp(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), Hy = bb, Lb = Hy, $b = ta, Nb = Bo;
function Rb(e) {
  return typeof e.constructor == "function" && !Nb(e) ? Lb($b(e)) : {};
}
var qy = Rb, Ib = Or, Fb = Ot, Db = "[object Map]";
function jb(e) {
  return Fb(e) && Ib(e) == Db;
}
var zb = jb, Ub = zb, Bb = ji, hp = Tf, pp = hp && hp.isMap, Wb = pp ? Bb(pp) : Ub, Gb = Wb, Hb = Or, qb = Ot, Yb = "[object Set]";
function Vb(e) {
  return qb(e) && Hb(e) == Yb;
}
var Xb = Vb, Kb = Xb, Qb = ji, gp = Tf, vp = gp && gp.isSet, Zb = vp ? Qb(vp) : Kb, Jb = Zb, eL = Yo, tL = Uf, nL = ea, rL = rA, iL = _A, sL = By, oL = Gf, aL = CA, lL = FA, uL = yy, cL = BA, fL = Or, dL = qA, hL = Mb, pL = qy, gL = ie, vL = _r, mL = Gb, yL = Ke, wL = Jb, _L = Ht, SL = Nn, kL = 1, PL = 2, EL = 4, Yy = "[object Arguments]", CL = "[object Array]", xL = "[object Boolean]", OL = "[object Date]", TL = "[object Error]", Vy = "[object Function]", ML = "[object GeneratorFunction]", AL = "[object Map]", bL = "[object Number]", Xy = "[object Object]", LL = "[object RegExp]", $L = "[object Set]", NL = "[object String]", RL = "[object Symbol]", IL = "[object WeakMap]", FL = "[object ArrayBuffer]", DL = "[object DataView]", jL = "[object Float32Array]", zL = "[object Float64Array]", UL = "[object Int8Array]", BL = "[object Int16Array]", WL = "[object Int32Array]", GL = "[object Uint8Array]", HL = "[object Uint8ClampedArray]", qL = "[object Uint16Array]", YL = "[object Uint32Array]", q = {};
q[Yy] = q[CL] = q[FL] = q[DL] = q[xL] = q[OL] = q[jL] = q[zL] = q[UL] = q[BL] = q[WL] = q[AL] = q[bL] = q[Xy] = q[LL] = q[$L] = q[NL] = q[RL] = q[GL] = q[HL] = q[qL] = q[YL] = !0;
q[TL] = q[Vy] = q[IL] = !1;
function Rs(e, t, n, r, i, s) {
  var o, a = t & kL, l = t & PL, u = t & EL;
  if (n && (o = i ? n(e, r, i, s) : n(e)), o !== void 0)
    return o;
  if (!yL(e))
    return e;
  var c = gL(e);
  if (c) {
    if (o = dL(e), !a)
      return oL(e, o);
  } else {
    var f = fL(e), d = f == Vy || f == ML;
    if (vL(e))
      return sL(e, a);
    if (f == Xy || f == Yy || d && !i) {
      if (o = l || d ? {} : pL(e), !a)
        return l ? lL(e, iL(o, e)) : aL(e, rL(o, e));
    } else {
      if (!q[f])
        return i ? e : {};
      o = hL(e, f, a);
    }
  }
  s || (s = new eL());
  var g = s.get(e);
  if (g)
    return g;
  s.set(e, o), wL(e) ? e.forEach(function(w) {
    o.add(Rs(w, t, n, w, e, s));
  }) : mL(e) && e.forEach(function(w, h) {
    o.set(h, Rs(w, t, n, h, e, s));
  });
  var m = u ? l ? cL : uL : l ? SL : _L, v = c ? void 0 : m(e);
  return tL(v || e, function(w, h) {
    v && (h = w, w = e[h]), nL(o, h, Rs(w, t, n, h, e, s));
  }), o;
}
var Ky = Rs, VL = Ky, XL = 1, KL = 4;
function QL(e) {
  return VL(e, XL | KL);
}
var Qy = QL;
const Zy = /* @__PURE__ */ Q(Qy);
class Jy extends Zo {
  constructor(t = {}) {
    super(), this.options = Object.assign({ id: Ae.UID() }, t);
  }
  getOptions() {
    return this.options;
  }
  getID() {
    return this.options.id;
  }
  doClone(t = {}, n) {
  }
  clone(t = {}) {
    if (t[this.options.id])
      return t[this.options.id];
    let n = Zy(this);
    return n.options = Object.assign(Object.assign({}, this.options), { id: Ae.UID() }), n.clearListeners(), t[this.options.id] = n, this.doClone(t, n), n;
  }
  clearListeners() {
    this.listeners = {};
  }
  deserialize(t) {
    this.options.id = t.data.id, this.options.locked = t.data.locked;
  }
  serialize() {
    return {
      id: this.options.id,
      locked: this.options.locked
    };
  }
  fireEvent(t, n) {
    super.fireEvent(Object.assign({ entity: this }, t), n);
  }
  isLocked() {
    return this.options.locked;
  }
  setLocked(t = !0) {
    this.options.locked = t, this.fireEvent({
      locked: t
    }, "lockChanged");
  }
}
class e1 extends Jy {
  constructor(t = {}) {
    super(Object.assign({ zoom: 100, gridSize: 0, offsetX: 0, offsetY: 0 }, t)), this.layers = [];
  }
  getSelectionEntities() {
    return Rt(this.layers, (t) => t.getSelectionEntities());
  }
  getSelectedEntities() {
    return ho(this.getSelectionEntities(), (t) => t.isSelected());
  }
  clearSelection() {
    pe(this.getSelectedEntities(), (t) => {
      t.setSelected(!1);
    });
  }
  getModels() {
    return Rt(this.layers, (t) => Pt(t.getModels()));
  }
  addLayer(t) {
    t.setParent(this), t.registerListener({
      entityRemoved: (n) => {
      }
    }), this.layers.push(t);
  }
  removeLayer(t) {
    const n = this.layers.indexOf(t);
    return n !== -1 ? (this.layers.splice(n, 1), !0) : !1;
  }
  getLayers() {
    return this.layers;
  }
  setGridSize(t = 0) {
    this.options.gridSize = t, this.fireEvent({ size: t }, "gridUpdated");
  }
  getGridPosition(t) {
    return this.options.gridSize === 0 ? t : this.options.gridSize * Math.floor((t + this.options.gridSize / 2) / this.options.gridSize);
  }
  deserializeModel(t, n) {
    const r = {}, i = {}, s = {}, o = {
      data: t,
      engine: n,
      registerModel: (a) => {
        r[a.getID()] = a, s[a.getID()] && s[a.getID()](a);
      },
      getModel(a) {
        return r[a] ? Promise.resolve(r[a]) : (i[a] || (i[a] = new Promise((l) => {
          s[a] = l;
        })), i[a]);
      }
    };
    this.deserialize(o);
  }
  deserialize(t) {
    super.deserialize(t), this.options.offsetX = t.data.offsetX, this.options.offsetY = t.data.offsetY, this.options.zoom = t.data.zoom, this.options.gridSize = t.data.gridSize, pe(t.data.layers, (n) => {
      const r = t.engine.getFactoryForLayer(n.type).generateModel({
        initialConfig: n
      });
      r.deserialize(Object.assign(Object.assign({}, t), { data: n })), this.addLayer(r);
    });
  }
  serialize() {
    return Object.assign(Object.assign({}, super.serialize()), { offsetX: this.options.offsetX, offsetY: this.options.offsetY, zoom: this.options.zoom, gridSize: this.options.gridSize, layers: fe(this.layers, (t) => t.serialize()) });
  }
  setZoomLevel(t) {
    this.options.zoom = t, this.fireEvent({ zoom: t }, "zoomUpdated");
  }
  setOffset(t, n) {
    this.options.offsetX = t, this.options.offsetY = n, this.fireEvent({ offsetX: t, offsetY: n }, "offsetUpdated");
  }
  setOffsetX(t) {
    this.setOffset(t, this.options.offsetY);
  }
  setOffsetY(t) {
    this.setOffset(this.options.offsetX, t);
  }
  getOffsetY() {
    return this.options.offsetY;
  }
  getOffsetX() {
    return this.options.offsetX;
  }
  getZoomLevel() {
    return this.options.zoom;
  }
}
class ZL {
  constructor(t) {
    this.type = t;
  }
  setDiagramEngine(t) {
    this.engine = t;
  }
  setFactoryBank(t) {
    this.bank = t;
  }
  getType() {
    return this.type;
  }
}
class t1 extends ZL {
}
class br extends t1 {
}
class Lr extends Jy {
  constructor(t) {
    super(t);
  }
  performanceTune() {
    return !0;
  }
  getParentCanvasModel() {
    return this.parent ? this.parent instanceof e1 ? this.parent : this.parent instanceof Lr ? this.parent.getParentCanvasModel() : null : null;
  }
  getParent() {
    return this.parent;
  }
  setParent(t) {
    this.parent = t;
  }
  getSelectionEntities() {
    return [this];
  }
  serialize() {
    return Object.assign(Object.assign({}, super.serialize()), { type: this.options.type, selected: this.options.selected, extras: this.options.extras });
  }
  deserialize(t) {
    super.deserialize(t), this.options.extras = t.data.extras, this.options.selected = t.data.selected;
  }
  getType() {
    return this.options.type;
  }
  isSelected() {
    return this.options.selected;
  }
  isLocked() {
    return super.isLocked() ? !0 : this.parent ? this.parent.isLocked() : !1;
  }
  setSelected(t = !0) {
    this.options.selected !== t && (this.options.selected = t, this.fireEvent({
      isSelected: t
    }, "selectionChanged"));
  }
  remove() {
    this.fireEvent({}, "entityRemoved");
  }
}
class na extends Lr {
  constructor(t) {
    super(t), this.position = t.position || new R(0, 0);
  }
  setPosition(t, n) {
    t instanceof R ? this.position = t : this.position = new R(t, n), this.fireEvent({}, "positionChanged");
  }
  getBoundingBox() {
    return pt.fromPointAndSize(this.position, 0, 0);
  }
  deserialize(t) {
    super.deserialize(t), this.position = new R(t.data.x, t.data.y);
  }
  serialize() {
    return Object.assign(Object.assign({}, super.serialize()), { x: this.position.x, y: this.position.y });
  }
  getPosition() {
    return this.position;
  }
  getX() {
    return this.position.x;
  }
  getY() {
    return this.position.y;
  }
}
function hc() {
  return hc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hc.apply(null, arguments);
}
function n1(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var JL = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, e$ = /* @__PURE__ */ n1(
  function(e) {
    return JL.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function t$(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function n$(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var r$ = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, s), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(n$(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = t$(i);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var i;
      return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Te = "-ms-", vo = "-moz-", j = "-webkit-", r1 = "comm", qf = "rule", Yf = "decl", i$ = "@import", i1 = "@keyframes", s$ = "@layer", o$ = Math.abs, ra = String.fromCharCode, a$ = Object.assign;
function l$(e, t) {
  return Se(e, 0) ^ 45 ? (((t << 2 ^ Se(e, 0)) << 2 ^ Se(e, 1)) << 2 ^ Se(e, 2)) << 2 ^ Se(e, 3) : 0;
}
function s1(e) {
  return e.trim();
}
function u$(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function z(e, t, n) {
  return e.replace(t, n);
}
function pc(e, t) {
  return e.indexOf(t);
}
function Se(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ti(e, t, n) {
  return e.slice(t, n);
}
function _t(e) {
  return e.length;
}
function Vf(e) {
  return e.length;
}
function vs(e, t) {
  return t.push(e), e;
}
function c$(e, t) {
  return e.map(t).join("");
}
var ia = 1, ur = 1, o1 = 0, Ue = 0, ue = 0, $r = "";
function sa(e, t, n, r, i, s, o) {
  return { value: e, root: t, parent: n, type: r, props: i, children: s, line: ia, column: ur, length: o, return: "" };
}
function qr(e, t) {
  return a$(sa("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function f$() {
  return ue;
}
function d$() {
  return ue = Ue > 0 ? Se($r, --Ue) : 0, ur--, ue === 10 && (ur = 1, ia--), ue;
}
function qe() {
  return ue = Ue < o1 ? Se($r, Ue++) : 0, ur++, ue === 10 && (ur = 1, ia++), ue;
}
function xt() {
  return Se($r, Ue);
}
function Is() {
  return Ue;
}
function qi(e, t) {
  return Ti($r, e, t);
}
function Mi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function a1(e) {
  return ia = ur = 1, o1 = _t($r = e), Ue = 0, [];
}
function l1(e) {
  return $r = "", e;
}
function Fs(e) {
  return s1(qi(Ue - 1, gc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function h$(e) {
  for (; (ue = xt()) && ue < 33; )
    qe();
  return Mi(e) > 2 || Mi(ue) > 3 ? "" : " ";
}
function p$(e, t) {
  for (; --t && qe() && !(ue < 48 || ue > 102 || ue > 57 && ue < 65 || ue > 70 && ue < 97); )
    ;
  return qi(e, Is() + (t < 6 && xt() == 32 && qe() == 32));
}
function gc(e) {
  for (; qe(); )
    switch (ue) {
      case e:
        return Ue;
      case 34:
      case 39:
        e !== 34 && e !== 39 && gc(ue);
        break;
      case 40:
        e === 41 && gc(e);
        break;
      case 92:
        qe();
        break;
    }
  return Ue;
}
function g$(e, t) {
  for (; qe() && e + ue !== 57; )
    if (e + ue === 84 && xt() === 47)
      break;
  return "/*" + qi(t, Ue - 1) + "*" + ra(e === 47 ? e : qe());
}
function v$(e) {
  for (; !Mi(xt()); )
    qe();
  return qi(e, Ue);
}
function m$(e) {
  return l1(Ds("", null, null, null, [""], e = a1(e), 0, [0], e));
}
function Ds(e, t, n, r, i, s, o, a, l) {
  for (var u = 0, c = 0, f = o, d = 0, g = 0, m = 0, v = 1, w = 1, h = 1, p = 0, y = "", _ = i, S = s, k = r, P = y; w; )
    switch (m = p, p = qe()) {
      case 40:
        if (m != 108 && Se(P, f - 1) == 58) {
          pc(P += z(Fs(p), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += Fs(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += h$(m);
        break;
      case 92:
        P += p$(Is() - 1, 7);
        continue;
      case 47:
        switch (xt()) {
          case 42:
          case 47:
            vs(y$(g$(qe(), Is()), t, n), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * v:
        a[u++] = _t(P) * h;
      case 125 * v:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            h == -1 && (P = z(P, /\f/g, "")), g > 0 && _t(P) - f && vs(g > 32 ? yp(P + ";", r, n, f - 1) : yp(z(P, " ", "") + ";", r, n, f - 2), l);
            break;
          case 59:
            P += ";";
          default:
            if (vs(k = mp(P, t, n, u, c, i, a, y, _ = [], S = [], f), s), p === 123)
              if (c === 0)
                Ds(P, t, k, k, _, s, f, a, S);
              else
                switch (d === 99 && Se(P, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ds(e, k, k, r && vs(mp(e, k, k, 0, 0, i, a, y, i, _ = [], f), S), i, S, f, a, r ? _ : S);
                    break;
                  default:
                    Ds(P, k, k, k, [""], S, 0, a, S);
                }
        }
        u = c = g = 0, v = h = 1, y = P = "", f = o;
        break;
      case 58:
        f = 1 + _t(P), g = m;
      default:
        if (v < 1) {
          if (p == 123)
            --v;
          else if (p == 125 && v++ == 0 && d$() == 125)
            continue;
        }
        switch (P += ra(p), p * v) {
          case 38:
            h = c > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            a[u++] = (_t(P) - 1) * h, h = 1;
            break;
          case 64:
            xt() === 45 && (P += Fs(qe())), d = xt(), c = f = _t(y = P += v$(Is())), p++;
            break;
          case 45:
            m === 45 && _t(P) == 2 && (v = 0);
        }
    }
  return s;
}
function mp(e, t, n, r, i, s, o, a, l, u, c) {
  for (var f = i - 1, d = i === 0 ? s : [""], g = Vf(d), m = 0, v = 0, w = 0; m < r; ++m)
    for (var h = 0, p = Ti(e, f + 1, f = o$(v = o[m])), y = e; h < g; ++h)
      (y = s1(v > 0 ? d[h] + " " + p : z(p, /&\f/g, d[h]))) && (l[w++] = y);
  return sa(e, t, n, i === 0 ? qf : a, l, u, c);
}
function y$(e, t, n) {
  return sa(e, t, n, r1, ra(f$()), Ti(e, 2, -2), 0);
}
function yp(e, t, n, r) {
  return sa(e, t, n, Yf, Ti(e, 0, r), Ti(e, r + 1, -1), r);
}
function er(e, t) {
  for (var n = "", r = Vf(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function w$(e, t, n, r) {
  switch (e.type) {
    case s$:
      if (e.children.length) break;
    case i$:
    case Yf:
      return e.return = e.return || e.value;
    case r1:
      return "";
    case i1:
      return e.return = e.value + "{" + er(e.children, r) + "}";
    case qf:
      e.value = e.props.join(",");
  }
  return _t(n = er(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function _$(e) {
  var t = Vf(e);
  return function(n, r, i, s) {
    for (var o = "", a = 0; a < t; a++)
      o += e[a](n, r, i, s) || "";
    return o;
  };
}
function S$(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var k$ = function(t, n, r) {
  for (var i = 0, s = 0; i = s, s = xt(), i === 38 && s === 12 && (n[r] = 1), !Mi(s); )
    qe();
  return qi(t, Ue);
}, P$ = function(t, n) {
  var r = -1, i = 44;
  do
    switch (Mi(i)) {
      case 0:
        i === 38 && xt() === 12 && (n[r] = 1), t[r] += k$(Ue - 1, n, r);
        break;
      case 2:
        t[r] += Fs(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = xt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ra(i);
    }
  while (i = qe());
  return t;
}, E$ = function(t, n) {
  return l1(P$(a1(t), n));
}, wp = /* @__PURE__ */ new WeakMap(), C$ = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !wp.get(r)) && !i) {
      wp.set(t, !0);
      for (var s = [], o = E$(n, s), a = r.props, l = 0, u = 0; l < o.length; l++)
        for (var c = 0; c < a.length; c++, u++)
          t.props[u] = s[l] ? o[l].replace(/&\f/g, a[c]) : a[c] + " " + o[l];
    }
  }
}, x$ = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function u1(e, t) {
  switch (l$(e, t)) {
    case 5103:
      return j + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return j + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return j + e + vo + e + Te + e + e;
    case 6828:
    case 4268:
      return j + e + Te + e + e;
    case 6165:
      return j + e + Te + "flex-" + e + e;
    case 5187:
      return j + e + z(e, /(\w+).+(:[^]+)/, j + "box-$1$2" + Te + "flex-$1$2") + e;
    case 5443:
      return j + e + Te + "flex-item-" + z(e, /flex-|-self/, "") + e;
    case 4675:
      return j + e + Te + "flex-line-pack" + z(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return j + e + Te + z(e, "shrink", "negative") + e;
    case 5292:
      return j + e + Te + z(e, "basis", "preferred-size") + e;
    case 6060:
      return j + "box-" + z(e, "-grow", "") + j + e + Te + z(e, "grow", "positive") + e;
    case 4554:
      return j + z(e, /([^-])(transform)/g, "$1" + j + "$2") + e;
    case 6187:
      return z(z(z(e, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return z(e, /(image-set\([^]*)/, j + "$1$`$1");
    case 4968:
      return z(z(e, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + Te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + j + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return z(e, /(.+)-inline(.+)/, j + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (_t(e) - 1 - t > 6) switch (Se(e, t + 1)) {
        case 109:
          if (Se(e, t + 4) !== 45) break;
        case 102:
          return z(e, /(.+:)(.+)-([^]+)/, "$1" + j + "$2-$3$1" + vo + (Se(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~pc(e, "stretch") ? u1(z(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Se(e, t + 1) !== 115) break;
    case 6444:
      switch (Se(e, _t(e) - 3 - (~pc(e, "!important") && 10))) {
        case 107:
          return z(e, ":", ":" + j) + e;
        case 101:
          return z(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + j + (Se(e, 14) === 45 ? "inline-" : "") + "box$3$1" + j + "$2$3$1" + Te + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Se(e, t + 11)) {
        case 114:
          return j + e + Te + z(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return j + e + Te + z(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return j + e + Te + z(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return j + e + Te + e + e;
  }
  return e;
}
var O$ = function(t, n, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Yf:
      t.return = u1(t.value, t.length);
      break;
    case i1:
      return er([qr(t, {
        value: z(t.value, "@", "@" + j)
      })], i);
    case qf:
      if (t.length) return c$(t.props, function(s) {
        switch (u$(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return er([qr(t, {
              props: [z(s, /:(read-\w+)/, ":" + vo + "$1")]
            })], i);
          case "::placeholder":
            return er([qr(t, {
              props: [z(s, /:(plac\w+)/, ":" + j + "input-$1")]
            }), qr(t, {
              props: [z(s, /:(plac\w+)/, ":" + vo + "$1")]
            }), qr(t, {
              props: [z(s, /:(plac\w+)/, Te + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, T$ = [O$], M$ = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var w = v.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || T$, s = {}, o, a = [];
  o = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(v) {
      for (var w = v.getAttribute("data-emotion").split(" "), h = 1; h < w.length; h++)
        s[w[h]] = !0;
      a.push(v);
    }
  );
  var l, u = [C$, x$];
  {
    var c, f = [w$, S$(function(v) {
      c.insert(v);
    })], d = _$(u.concat(i, f)), g = function(w) {
      return er(m$(w), d);
    };
    l = function(w, h, p, y) {
      c = p, g(w ? w + "{" + h.styles + "}" : h.styles), y && (m.inserted[h.name] = !0);
    };
  }
  var m = {
    key: n,
    sheet: new r$({
      key: n,
      container: o,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: l
  };
  return m.sheet.hydrate(a), m;
}, c1 = { exports: {} }, G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we = typeof Symbol == "function" && Symbol.for, Xf = we ? Symbol.for("react.element") : 60103, Kf = we ? Symbol.for("react.portal") : 60106, oa = we ? Symbol.for("react.fragment") : 60107, aa = we ? Symbol.for("react.strict_mode") : 60108, la = we ? Symbol.for("react.profiler") : 60114, ua = we ? Symbol.for("react.provider") : 60109, ca = we ? Symbol.for("react.context") : 60110, Qf = we ? Symbol.for("react.async_mode") : 60111, fa = we ? Symbol.for("react.concurrent_mode") : 60111, da = we ? Symbol.for("react.forward_ref") : 60112, ha = we ? Symbol.for("react.suspense") : 60113, A$ = we ? Symbol.for("react.suspense_list") : 60120, pa = we ? Symbol.for("react.memo") : 60115, ga = we ? Symbol.for("react.lazy") : 60116, b$ = we ? Symbol.for("react.block") : 60121, L$ = we ? Symbol.for("react.fundamental") : 60117, $$ = we ? Symbol.for("react.responder") : 60118, N$ = we ? Symbol.for("react.scope") : 60119;
function Qe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Xf:
        switch (e = e.type, e) {
          case Qf:
          case fa:
          case oa:
          case la:
          case aa:
          case ha:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ca:
              case da:
              case ga:
              case pa:
              case ua:
                return e;
              default:
                return t;
            }
        }
      case Kf:
        return t;
    }
  }
}
function f1(e) {
  return Qe(e) === fa;
}
G.AsyncMode = Qf;
G.ConcurrentMode = fa;
G.ContextConsumer = ca;
G.ContextProvider = ua;
G.Element = Xf;
G.ForwardRef = da;
G.Fragment = oa;
G.Lazy = ga;
G.Memo = pa;
G.Portal = Kf;
G.Profiler = la;
G.StrictMode = aa;
G.Suspense = ha;
G.isAsyncMode = function(e) {
  return f1(e) || Qe(e) === Qf;
};
G.isConcurrentMode = f1;
G.isContextConsumer = function(e) {
  return Qe(e) === ca;
};
G.isContextProvider = function(e) {
  return Qe(e) === ua;
};
G.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xf;
};
G.isForwardRef = function(e) {
  return Qe(e) === da;
};
G.isFragment = function(e) {
  return Qe(e) === oa;
};
G.isLazy = function(e) {
  return Qe(e) === ga;
};
G.isMemo = function(e) {
  return Qe(e) === pa;
};
G.isPortal = function(e) {
  return Qe(e) === Kf;
};
G.isProfiler = function(e) {
  return Qe(e) === la;
};
G.isStrictMode = function(e) {
  return Qe(e) === aa;
};
G.isSuspense = function(e) {
  return Qe(e) === ha;
};
G.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === oa || e === fa || e === la || e === aa || e === ha || e === A$ || typeof e == "object" && e !== null && (e.$$typeof === ga || e.$$typeof === pa || e.$$typeof === ua || e.$$typeof === ca || e.$$typeof === da || e.$$typeof === L$ || e.$$typeof === $$ || e.$$typeof === N$ || e.$$typeof === b$);
};
G.typeOf = Qe;
c1.exports = G;
var R$ = c1.exports, d1 = R$, I$ = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, F$ = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, h1 = {};
h1[d1.ForwardRef] = I$;
h1[d1.Memo] = F$;
var D$ = !0;
function j$(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var p1 = function(t, n, r) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  D$ === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, z$ = function(t, n, r) {
  p1(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function U$(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var B$ = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, W$ = /[A-Z]|^ms/g, G$ = /_EMO_([^_]+?)_([^]*?)_EMO_/g, g1 = function(t) {
  return t.charCodeAt(1) === 45;
}, _p = function(t) {
  return t != null && typeof t != "boolean";
}, sl = /* @__PURE__ */ n1(function(e) {
  return g1(e) ? e : e.replace(W$, "-$&").toLowerCase();
}), Sp = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(G$, function(r, i, s) {
          return St = {
            name: i,
            styles: s,
            next: St
          }, i;
        });
  }
  return B$[t] !== 1 && !g1(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Ai(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return St = {
          name: i.name,
          styles: i.styles,
          next: St
        }, i.name;
      var s = n;
      if (s.styles !== void 0) {
        var o = s.next;
        if (o !== void 0)
          for (; o !== void 0; )
            St = {
              name: o.name,
              styles: o.styles,
              next: St
            }, o = o.next;
        var a = s.styles + ";";
        return a;
      }
      return H$(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = St, u = n(e);
        return St = l, Ai(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null)
    return c;
  var f = t[c];
  return f !== void 0 ? f : c;
}
function H$(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Ai(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var o = n[s];
      if (typeof o != "object") {
        var a = o;
        t != null && t[a] !== void 0 ? r += s + "{" + t[a] + "}" : _p(a) && (r += sl(s) + ":" + Sp(s, a) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var l = 0; l < o.length; l++)
          _p(o[l]) && (r += sl(s) + ":" + Sp(s, o[l]) + ";");
      else {
        var u = Ai(e, t, o);
        switch (s) {
          case "animation":
          case "animationName": {
            r += sl(s) + ":" + u + ";";
            break;
          }
          default:
            r += s + "{" + u + "}";
        }
      }
    }
  return r;
}
var kp = /label:\s*([^\s;{]+)\s*(;|$)/g, St;
function v1(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  St = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, i += Ai(n, t, s);
  else {
    var o = s;
    i += o[0];
  }
  for (var a = 1; a < e.length; a++)
    if (i += Ai(n, t, e[a]), r) {
      var l = s;
      i += l[a];
    }
  kp.lastIndex = 0;
  for (var u = "", c; (c = kp.exec(i)) !== null; )
    u += "-" + c[1];
  var f = U$(i) + u;
  return {
    name: f,
    styles: i,
    next: St
  };
}
var q$ = function(t) {
  return t();
}, Y$ = wd.useInsertionEffect ? wd.useInsertionEffect : !1, V$ = Y$ || q$, m1 = /* @__PURE__ */ C.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ M$({
    key: "css"
  }) : null
);
m1.Provider;
var X$ = function(t) {
  return /* @__PURE__ */ C.forwardRef(function(n, r) {
    var i = C.useContext(m1);
    return t(n, i, r);
  });
}, K$ = /* @__PURE__ */ C.createContext({});
function Zf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return v1(t);
}
var Q$ = function() {
  var t = Zf.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Z$ = e$, J$ = function(t) {
  return t !== "theme";
}, Pp = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Z$ : J$;
}, Ep = function(t, n, r) {
  var i;
  if (n) {
    var s = n.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(o) {
      return t.__emotion_forwardProp(o) && s(o);
    } : s;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, eN = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return p1(n, r, i), V$(function() {
    return z$(n, r, i);
  }), null;
}, tN = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, s, o;
  n !== void 0 && (s = n.label, o = n.target);
  var a = Ep(t, n, r), l = a || Pp(i), u = !l("as");
  return function() {
    var c = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && f.push("label:" + s + ";"), c[0] == null || c[0].raw === void 0)
      f.push.apply(f, c);
    else {
      f.push(c[0][0]);
      for (var d = c.length, g = 1; g < d; g++)
        f.push(c[g], c[0][g]);
    }
    var m = X$(function(v, w, h) {
      var p = u && v.as || i, y = "", _ = [], S = v;
      if (v.theme == null) {
        S = {};
        for (var k in v)
          S[k] = v[k];
        S.theme = C.useContext(K$);
      }
      typeof v.className == "string" ? y = j$(w.registered, _, v.className) : v.className != null && (y = v.className + " ");
      var P = v1(f.concat(_), w.registered, S);
      y += w.key + "-" + P.name, o !== void 0 && (y += " " + o);
      var E = u && a === void 0 ? Pp(p) : l, T = {};
      for (var O in v)
        u && O === "as" || E(O) && (T[O] = v[O]);
      return T.className = y, h && (T.ref = h), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(eN, {
        cache: w,
        serialized: P,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ C.createElement(p, T));
    });
    return m.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = i, m.__emotion_styles = f, m.__emotion_forwardProp = a, Object.defineProperty(m, "toString", {
      value: function() {
        return "." + o;
      }
    }), m.withComponent = function(v, w) {
      return e(v, hc({}, n, w, {
        shouldForwardProp: Ep(m, w, !0)
      })).apply(void 0, f);
    }, m;
  };
}, nN = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], ae = tN.bind();
nN.forEach(function(e) {
  ae[e] = ae(e);
});
var mo;
(function(e) {
  const t = Zf`
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		position: absolute;
		pointer-events: none;
		transform-origin: 0 0;
		width: 100%;
		height: 100%;
		overflow: visible;
	`;
  e.DivLayer = ae.div`
		${t}
	`, e.SvgLayer = ae.svg`
		${t}
	`;
})(mo || (mo = {}));
class rN extends C.Component {
  constructor(t) {
    super(t), this.state = {};
  }
  getTransform() {
    const t = this.props.layer.getParent();
    return `
			translate(
				${t.getOffsetX()}px,
				${t.getOffsetY()}px)
			scale(
				${t.getZoomLevel() / 100}
			)
  	`;
  }
  getTransformStyle() {
    return this.props.layer.getOptions().transformed ? {
      transform: this.getTransform()
    } : {};
  }
  render() {
    return this.props.layer.getOptions().isSvg ? C.createElement(mo.SvgLayer, { style: this.getTransformStyle() }, this.props.children) : C.createElement(mo.DivLayer, { style: this.getTransformStyle() }, this.props.children);
  }
}
class iN extends C.Component {
  shouldComponentUpdate() {
    return this.props.layer.isRepaintEnabled();
  }
  render() {
    return this.props.engine.getFactoryForLayer(this.props.layer).generateReactWidget({ model: this.props.layer });
  }
}
var vc;
(function(e) {
  e.Canvas = ae.div`
		position: relative;
		cursor: move;
		overflow: hidden;
	`;
})(vc || (vc = {}));
class sN extends C.Component {
  constructor(t) {
    super(t), this.ref = C.createRef(), this.state = {
      action: null,
      diagramEngineListener: null
    };
  }
  componentWillUnmount() {
    this.props.engine.deregisterListener(this.canvasListener), this.props.engine.setCanvas(null), document.removeEventListener("keyup", this.keyUp), document.removeEventListener("keydown", this.keyDown);
  }
  registerCanvas() {
    this.props.engine.setCanvas(this.ref.current), this.props.engine.iterateListeners((t) => {
      t.rendered && t.rendered();
    });
  }
  componentDidUpdate() {
    this.registerCanvas();
  }
  componentDidMount() {
    this.canvasListener = this.props.engine.registerListener({
      repaintCanvas: () => {
        this.forceUpdate();
      }
    }), this.keyDown = (t) => {
      this.props.engine.getActionEventBus().fireAction({ event: t });
    }, this.keyUp = (t) => {
      this.props.engine.getActionEventBus().fireAction({ event: t });
    }, document.addEventListener("keyup", this.keyUp), document.addEventListener("keydown", this.keyDown), this.registerCanvas();
  }
  render() {
    const n = this.props.engine.getModel();
    return C.createElement(vc.Canvas, { className: this.props.className, ref: this.ref, onWheel: (r) => {
      this.props.engine.getActionEventBus().fireAction({ event: r });
    }, onMouseDown: (r) => {
      this.props.engine.getActionEventBus().fireAction({ event: r });
    }, onMouseUp: (r) => {
      this.props.engine.getActionEventBus().fireAction({ event: r });
    }, onMouseMove: (r) => {
      this.props.engine.getActionEventBus().fireAction({ event: r });
    }, onTouchStart: (r) => {
      this.props.engine.getActionEventBus().fireAction({ event: r });
    }, onTouchEnd: (r) => {
      this.props.engine.getActionEventBus().fireAction({ event: r });
    }, onTouchMove: (r) => {
      this.props.engine.getActionEventBus().fireAction({ event: r });
    } }, n.getLayers().map((r) => C.createElement(
      rN,
      { layer: r, key: r.getID() },
      C.createElement(iN, { layer: r, engine: this.props.engine, key: r.getID() })
    )));
  }
}
var oN = Jo, aN = Af, lN = vt;
function uN(e, t) {
  var n = {};
  return t = lN(t), aN(e, function(r, i, s) {
    oN(n, i, t(r, i, s));
  }), n;
}
var y1 = uN;
const cN = /* @__PURE__ */ Q(y1);
class Jf extends Lr {
  constructor(t = {}) {
    super(t), this.models = {}, this.repaintEnabled = !0;
  }
  deserialize(t) {
    super.deserialize(t), this.options.isSvg = !!t.data.isSvg, this.options.transformed = !!t.data.transformed, pe(t.data.models, (n) => {
      const r = this.getChildModelFactoryBank(t.engine).getFactory(n.type).generateModel({
        initialConfig: n
      });
      r.deserialize(Object.assign(Object.assign({}, t), { data: n })), this.addModel(r);
    });
  }
  serialize() {
    return Object.assign(Object.assign({}, super.serialize()), { isSvg: this.options.isSvg, transformed: this.options.transformed, models: cN(this.models, (t) => t.serialize()) });
  }
  isRepaintEnabled() {
    return this.repaintEnabled;
  }
  allowRepaint(t = !0) {
    this.repaintEnabled = t;
  }
  remove() {
    this.parent && this.parent.removeLayer(this), super.remove();
  }
  addModel(t) {
    t.setParent(this), this.models[t.getID()] = t;
  }
  getSelectionEntities() {
    return Rt(this.models, (t) => t.getSelectionEntities());
  }
  getModels() {
    return this.models;
  }
  getModel(t) {
    return this.models[t];
  }
  removeModel(t) {
    const n = typeof t == "string" ? t : t.getID();
    return this.models[n] ? (delete this.models[n], !0) : !1;
  }
}
class w1 extends Jf {
  constructor() {
    super({
      transformed: !1,
      isSvg: !1,
      type: "selection"
    });
  }
  setBox(t) {
    this.box = t;
  }
  getChildModelFactoryBank() {
    return null;
  }
}
var mc;
(function(e) {
  e.Container = ae.div`
		position: absolute;
		background-color: rgba(0, 192, 255, 0.2);
		border: solid 2px rgb(0, 192, 255);
	`;
})(mc || (mc = {}));
class fN extends C.Component {
  render() {
    const { rect: t } = this.props;
    return t ? C.createElement(mc.Container, { style: {
      top: t.top,
      left: t.left,
      width: t.width,
      height: t.height
    } }) : null;
  }
}
class dN extends br {
  constructor() {
    super("selection");
  }
  generateModel(t) {
    return new w1();
  }
  generateReactWidget(t) {
    return C.createElement(fN, { rect: t.model.box });
  }
}
class _1 extends C.Component {
  shouldComponentUpdate(t, n, r) {
    return !this.props.model.performanceTune() || this.props.model !== t.model ? !0 : !Dy(this.props.serialized, t.serialized);
  }
  render() {
    return this.props.children();
  }
}
function hN(e, t, n, r) {
  for (var i = e.length, s = n + (r ? 1 : -1); r ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var S1 = hN;
function pN(e) {
  return e !== e;
}
var gN = pN;
function vN(e, t, n) {
  for (var r = n - 1, i = e.length; ++r < i; )
    if (e[r] === t)
      return r;
  return -1;
}
var mN = vN, yN = S1, wN = gN, _N = mN;
function SN(e, t, n) {
  return t === t ? _N(e, t, n) : yN(e, wN, n);
}
var kN = SN, PN = kN;
function EN(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && PN(e, t, 0) > -1;
}
var k1 = EN;
function CN(e, t, n) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
var P1 = CN, xN = $f, ON = k1, TN = P1, MN = Mr, AN = ji, Cp = Nf, bN = Math.min;
function LN(e, t, n) {
  for (var r = n ? TN : ON, i = e[0].length, s = e.length, o = s, a = Array(s), l = 1 / 0, u = []; o--; ) {
    var c = e[o];
    o && t && (c = MN(c, AN(t))), l = bN(c.length, l), a[o] = !n && (t || i >= 120 && c.length >= 120) ? new xN(o && c) : void 0;
  }
  c = e[0];
  var f = -1, d = a[0];
  e:
    for (; ++f < i && u.length < l; ) {
      var g = c[f], m = t ? t(g) : g;
      if (g = n || g !== 0 ? g : 0, !(d ? Cp(d, m) : r(u, m, n))) {
        for (o = s; --o; ) {
          var v = a[o];
          if (!(v ? Cp(v, m) : r(e[o], m, n)))
            continue e;
        }
        d && d.push(m), u.push(g);
      }
    }
  return u;
}
var $N = LN;
function NN(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var RN = NN, IN = RN, xp = Math.max;
function FN(e, t, n) {
  return t = xp(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, i = -1, s = xp(r.length - t, 0), o = Array(s); ++i < s; )
      o[i] = r[t + i];
    i = -1;
    for (var a = Array(t + 1); ++i < t; )
      a[i] = r[i];
    return a[t] = n(o), IN(e, this, a);
  };
}
var E1 = FN;
function DN(e) {
  return function() {
    return e;
  };
}
var ed = DN, jN = ed, Op = Uy, zN = $n, UN = Op ? function(e, t) {
  return Op(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: jN(t),
    writable: !0
  });
} : zN, BN = UN, WN = 800, GN = 16, HN = Date.now;
function qN(e) {
  var t = 0, n = 0;
  return function() {
    var r = HN(), i = GN - (r - n);
    if (n = r, i > 0) {
      if (++t >= WN)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var YN = qN, VN = BN, XN = YN, KN = XN(VN), C1 = KN, QN = $n, ZN = E1, JN = C1;
function eR(e, t) {
  return JN(ZN(e, t, QN), e + "");
}
var Nr = eR, tR = Gt, nR = Ot;
function rR(e) {
  return nR(e) && tR(e);
}
var td = rR, iR = td;
function sR(e) {
  return iR(e) ? e : [];
}
var oR = sR, aR = Mr, lR = $N, uR = Nr, cR = oR, fR = uR(function(e) {
  var t = aR(e, cR);
  return t.length && t[0] === e[0] ? lR(t) : [];
}), dR = fR;
const hR = /* @__PURE__ */ Q(dR);
class nd {
  constructor(t) {
    this.actions = [], this.keys = [], this.childStates = [], this.options = t;
  }
  setEngine(t) {
    this.engine = t;
  }
  getOptions() {
    return this.options;
  }
  eject() {
    this.engine.getStateMachine().popState();
  }
  transitionWithEvent(t, n) {
    this.engine.getStateMachine().pushState(t), this.engine.getActionEventBus().fireAction(n);
  }
  registerAction(t) {
    this.actions.push(t);
  }
  tryActivateParentState(t) {
    return this.keys.length > 0 && !this.isKeysFullfilled(t) ? (this.eject(), !0) : !1;
  }
  tryActivateChildState(t) {
    const n = this.findStateToActivate(t);
    return n ? (this.engine.getStateMachine().pushState(n), !0) : !1;
  }
  findStateToActivate(t) {
    for (let n of this.childStates)
      if (n.isKeysFullfilled(t))
        return n;
    return null;
  }
  isKeysFullfilled(t) {
    return hR(this.keys, t).length === this.keys.length;
  }
  activated(t) {
    const n = this.engine.getActionEventBus().getKeys();
    if (!(this.tryActivateParentState(n) || this.tryActivateChildState(n))) {
      this.handler1 = this.engine.getActionEventBus().registerAction(new he({
        type: B.KEY_DOWN,
        fire: () => {
          this.tryActivateChildState(this.engine.getActionEventBus().getKeys());
        }
      })), this.handler2 = this.engine.getActionEventBus().registerAction(new he({
        type: B.KEY_UP,
        fire: () => {
          this.tryActivateParentState(this.engine.getActionEventBus().getKeys());
        }
      }));
      for (let r of this.actions)
        this.engine.getActionEventBus().registerAction(r);
    }
  }
  deactivated(t) {
    this.handler1 && this.handler1(), this.handler2 && this.handler2();
    for (let n of this.actions)
      this.engine.getActionEventBus().deregisterAction(n);
  }
}
class Yi extends nd {
  constructor(t) {
    super(t), this.registerAction(new he({
      type: B.MOUSE_DOWN,
      fire: (n) => {
        const { clientX: r, clientY: i } = n.event;
        this.handleMoveStart(r, i);
      }
    })), this.registerAction(new he({
      type: B.MOUSE_MOVE,
      fire: (n) => {
        const { event: r } = n;
        if (r.buttons === 0) {
          this.eject();
          return;
        }
        const { clientX: i, clientY: s } = r;
        this.handleMove(i, s, r);
      }
    })), this.registerAction(new he({
      type: B.MOUSE_UP,
      fire: () => this.handleMoveEnd()
    })), this.registerAction(new he({
      type: B.TOUCH_START,
      fire: (n) => {
        const { clientX: r, clientY: i } = n.event.touches[0];
        this.handleMoveStart(r, i);
      }
    })), this.registerAction(new he({
      type: B.TOUCH_MOVE,
      fire: (n) => {
        const { event: r } = n, { clientX: i, clientY: s } = r.touches[0];
        this.handleMove(i, s, r);
      }
    })), this.registerAction(new he({
      type: B.TOUCH_END,
      fire: () => this.handleMoveEnd()
    }));
  }
  handleMoveStart(t, n) {
    this.initialX = t, this.initialY = n;
    const r = this.engine.getRelativePoint(t, n);
    this.initialXRelative = r.x, this.initialYRelative = r.y;
  }
  handleMove(t, n, r) {
    this.fireMouseMoved({
      displacementX: t - this.initialX,
      displacementY: n - this.initialY,
      virtualDisplacementX: (t - this.initialX) / (this.engine.getModel().getZoomLevel() / 100),
      virtualDisplacementY: (n - this.initialY) / (this.engine.getModel().getZoomLevel() / 100),
      event: r
    });
  }
  handleMoveEnd() {
    this.eject();
  }
}
var pR = function(e, t, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
class gR extends Yi {
  constructor(t = {}) {
    super({
      name: "drag-canvas"
    }), this.config = Object.assign({ allowDrag: !0 }, t);
  }
  activated(t) {
    const n = Object.create(null, {
      activated: { get: () => super.activated }
    });
    return pR(this, void 0, void 0, function* () {
      n.activated.call(this, t), this.engine.getModel().clearSelection(), yield this.engine.repaintCanvas(!0);
      for (let r of this.engine.getModel().getLayers())
        r.allowRepaint(!1);
      this.initialCanvasX = this.engine.getModel().getOffsetX(), this.initialCanvasY = this.engine.getModel().getOffsetY();
    });
  }
  deactivated(t) {
    super.deactivated(t);
    for (let n of this.engine.getModel().getLayers())
      n.allowRepaint(!0);
  }
  fireMouseMoved(t) {
    this.config.allowDrag && (this.engine.getModel().setOffset(this.initialCanvasX + t.displacementX, this.initialCanvasY + t.displacementY), this.engine.repaintCanvas());
  }
}
class vR extends Yi {
  constructor() {
    super({
      name: "selection-box"
    });
  }
  activated(t) {
    super.activated(t), this.layer = new w1(), this.engine.getModel().addLayer(this.layer);
  }
  deactivated(t) {
    super.deactivated(t), this.layer.remove(), this.engine.repaintCanvas();
  }
  getBoxDimensions(t) {
    let n;
    if ("touches" in t.event) {
      const r = t.event.touches[0];
      n = this.engine.getRelativePoint(r.clientX, r.clientY);
    } else
      n = this.engine.getRelativePoint(t.event.clientX, t.event.clientY);
    return {
      left: n.x > this.initialXRelative ? this.initialXRelative : n.x,
      top: n.y > this.initialYRelative ? this.initialYRelative : n.y,
      width: Math.abs(n.x - this.initialXRelative),
      height: Math.abs(n.y - this.initialYRelative),
      right: n.x < this.initialXRelative ? this.initialXRelative : n.x,
      bottom: n.y < this.initialYRelative ? this.initialYRelative : n.y
    };
  }
  fireMouseMoved(t) {
    this.layer.setBox(this.getBoxDimensions(t));
    const n = this.engine.getRelativeMousePoint({
      clientX: this.initialX,
      clientY: this.initialY
    });
    t.virtualDisplacementX < 0 && (n.x -= Math.abs(t.virtualDisplacementX)), t.virtualDisplacementY < 0 && (n.y -= Math.abs(t.virtualDisplacementY));
    const r = pt.fromPointAndSize(n, Math.abs(t.virtualDisplacementX), Math.abs(t.virtualDisplacementY));
    for (let i of this.engine.getModel().getSelectionEntities())
      if (i.getBoundingBox) {
        const s = i.getBoundingBox();
        r.containsPoint(s.getTopLeft()) && r.containsPoint(s.getBottomRight()) ? i.setSelected(!0) : i.setSelected(!1);
      }
    this.engine.repaintCanvas();
  }
}
class mR extends nd {
  constructor() {
    super({
      name: "selecting"
    }), this.keys = ["shift"], this.registerAction(new he({
      type: B.MOUSE_DOWN,
      fire: (t) => {
        const n = this.engine.getActionEventBus().getModelForEvent(t);
        n ? (n.setSelected(!0), this.engine.repaintCanvas()) : this.transitionWithEvent(new vR(), t);
      }
    }));
  }
}
class yR extends Yi {
  constructor() {
    super({
      name: "move-items"
    }), this.registerAction(new he({
      type: B.MOUSE_DOWN,
      fire: (t) => {
        const n = this.engine.getActionEventBus().getModelForEvent(t);
        n && (n.isSelected() || this.engine.getModel().clearSelection(), n.setSelected(!0), this.engine.repaintCanvas());
      }
    }));
  }
  activated(t) {
    super.activated(t), this.initialPositions = {};
  }
  fireMouseMoved(t) {
    const n = this.engine.getModel().getSelectedEntities(), r = this.engine.getModel();
    for (let i of n)
      if (i instanceof na) {
        if (i.isLocked())
          continue;
        this.initialPositions[i.getID()] || (this.initialPositions[i.getID()] = {
          point: i.getPosition(),
          item: i
        });
        const s = this.initialPositions[i.getID()].point;
        i.setPosition(r.getGridPosition(s.x + t.virtualDisplacementX), r.getGridPosition(s.y + t.virtualDisplacementY));
      }
    this.engine.repaintCanvas();
  }
}
class $t extends na {
  constructor(t) {
    super(Object.assign(Object.assign({}, t), { type: "point" })), this.parent = t.link;
  }
  isConnectedToPort() {
    return this.parent.getPortForPoint(this) !== null;
  }
  getLink() {
    return this.getParent();
  }
  remove() {
    this.parent && this.parent.removePoint(this), super.remove();
  }
  isLocked() {
    return super.isLocked() || this.getParent().isLocked();
  }
}
function wR(e, t, n) {
  var r = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = e[r + t];
  return s;
}
var _R = wR, SR = Ry, Tp = 1 / 0, kR = 17976931348623157e292;
function PR(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = SR(e), e === Tp || e === -Tp) {
    var t = e < 0 ? -1 : 1;
    return t * kR;
  }
  return e === e ? e : 0;
}
var x1 = PR, ER = x1;
function CR(e) {
  var t = ER(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
var O1 = CR, xR = _R, OR = Ar, Mp = O1;
function TR(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? (n && typeof n != "number" && OR(e, t, n) ? (t = 0, n = r) : (t = t == null ? 0 : Mp(t), n = n === void 0 ? r : Mp(n)), xR(e, t, n)) : [];
}
var MR = TR;
const ol = /* @__PURE__ */ Q(MR);
class rd extends Lr {
  constructor(t) {
    super(t), this.points = [
      new $t({
        link: this
      }),
      new $t({
        link: this
      })
    ], this.sourcePort = null, this.targetPort = null, this.renderedPaths = [], this.labels = [];
  }
  getBoundingBox() {
    return new pt(po(fe(this.points, (t) => t.getPosition())));
  }
  getSelectionEntities() {
    return this.getTargetPort() && this.getSourcePort() ? super.getSelectionEntities().concat(ol(this.points, 1, this.points.length - 1)) : this.getSourcePort() ? this.getTargetPort() ? super.getSelectionEntities().concat(this.points) : super.getSelectionEntities().concat(ol(this.points, 1, this.points.length)) : super.getSelectionEntities().concat(ol(this.points, 0, this.points.length - 1));
  }
  deserialize(t) {
    super.deserialize(t), this.points = fe(t.data.points || [], (n) => {
      var r = new $t({
        link: this,
        position: new R(n.x, n.y)
      });
      return r.deserialize(Object.assign(Object.assign({}, t), { data: n })), r;
    }), pe(t.data.labels || [], (n) => {
      let r = t.engine.getFactoryForLabel(n.type).generateModel({});
      r.deserialize(Object.assign(Object.assign({}, t), { data: n })), this.addLabel(r);
    }), t.data.target && t.getModel(t.data.targetPort).then((n) => {
      this.setTargetPort(n);
    }), t.data.source && t.getModel(t.data.sourcePort).then((n) => {
      this.setSourcePort(n);
    });
  }
  getRenderedPath() {
    return this.renderedPaths;
  }
  setRenderedPaths(t) {
    this.renderedPaths = t;
  }
  serialize() {
    return Object.assign(Object.assign({}, super.serialize()), { source: this.sourcePort ? this.sourcePort.getParent().getID() : null, sourcePort: this.sourcePort ? this.sourcePort.getID() : null, target: this.targetPort ? this.targetPort.getParent().getID() : null, targetPort: this.targetPort ? this.targetPort.getID() : null, points: fe(this.points, (t) => t.serialize()), labels: fe(this.labels, (t) => t.serialize()) });
  }
  doClone(t = {}, n) {
    n.setPoints(fe(this.getPoints(), (r) => r.clone(t))), this.sourcePort && n.setSourcePort(this.sourcePort.clone(t)), this.targetPort && n.setTargetPort(this.targetPort.clone(t));
  }
  clearPort(t) {
    this.sourcePort === t ? this.setSourcePort(null) : this.targetPort === t && this.setTargetPort(null);
  }
  remove() {
    this.sourcePort && (this.sourcePort.removeLink(this), delete this.sourcePort), this.targetPort && (this.targetPort.removeLink(this), delete this.targetPort), super.remove();
  }
  isLastPoint(t) {
    var n = this.getPointIndex(t);
    return n === this.points.length - 1;
  }
  getPointIndex(t) {
    return this.points.indexOf(t);
  }
  getPointModel(t) {
    for (var n = 0; n < this.points.length; n++)
      if (this.points[n].getID() === t)
        return this.points[n];
    return null;
  }
  getPortForPoint(t) {
    return this.sourcePort !== null && this.getFirstPoint().getID() === t.getID() ? this.sourcePort : this.targetPort !== null && this.getLastPoint().getID() === t.getID() ? this.targetPort : null;
  }
  getPointForPort(t) {
    return this.sourcePort !== null && this.sourcePort.getID() === t.getID() ? this.getFirstPoint() : this.targetPort !== null && this.targetPort.getID() === t.getID() ? this.getLastPoint() : null;
  }
  getFirstPoint() {
    return this.points[0];
  }
  getLastPoint() {
    return this.points[this.points.length - 1];
  }
  setSourcePort(t) {
    t !== null && t.addLink(this), this.sourcePort !== null && this.sourcePort.removeLink(this), this.sourcePort = t, this.fireEvent({ port: t }, "sourcePortChanged"), t != null && t.reportedPosition && this.getPointForPort(t).setPosition(t.getCenter());
  }
  getSourcePort() {
    return this.sourcePort;
  }
  getTargetPort() {
    return this.targetPort;
  }
  setTargetPort(t) {
    t !== null && t.addLink(this), this.targetPort !== null && this.targetPort.removeLink(this), this.targetPort = t, this.fireEvent({ port: t }, "targetPortChanged"), t != null && t.reportedPosition && this.getPointForPort(t).setPosition(t.getCenter());
  }
  point(t, n, r = 1) {
    return this.addPoint(this.generatePoint(t, n), r);
  }
  addLabel(t) {
    t.setParent(this), this.labels.push(t);
  }
  getPoints() {
    return this.points;
  }
  getLabels() {
    return this.labels;
  }
  setPoints(t) {
    pe(t, (n) => {
      n.setParent(this);
    }), this.points = t;
  }
  removePoint(t) {
    this.isLastPoint(t) && this.remove(), this.points.splice(this.getPointIndex(t), 1);
  }
  removePointsBefore(t) {
    this.points.splice(0, this.getPointIndex(t));
  }
  removePointsAfter(t) {
    this.points.splice(this.getPointIndex(t) + 1);
  }
  removeMiddlePoints() {
    this.points.length > 2 && this.points.splice(1, this.points.length - 2);
  }
  addPoint(t, n = 1) {
    return t.setParent(this), this.points.splice(n, 0, t), t;
  }
  generatePoint(t = 0, n = 0) {
    return new $t({
      link: this,
      position: new R(t, n)
    });
  }
}
class va extends na {
  constructor(t) {
    super(t), this.ports = {}, this.width = 0, this.height = 0;
  }
  getBoundingBox() {
    return pt.fromPointAndSize(this.getPosition(), this.width, this.height);
  }
  setPosition(t, n) {
    const r = this.position;
    t instanceof R ? super.setPosition(t) : super.setPosition(t, n), pe(this.ports, (i) => {
      i.setPosition(i.getX() + this.position.x - r.x, i.getY() + this.position.y - r.y);
    });
  }
  deserialize(t) {
    super.deserialize(t), pe(t.data.ports, (n) => {
      let r = t.engine.getFactoryForPort(n.type).generateModel({});
      r.deserialize(Object.assign(Object.assign({}, t), { data: n })), t.registerModel(r), this.addPort(r);
    });
  }
  serialize() {
    return Object.assign(Object.assign({}, super.serialize()), { ports: fe(this.ports, (t) => t.serialize()) });
  }
  doClone(t = {}, n) {
    n.ports = {}, pe(this.ports, (r) => {
      n.addPort(r.clone(t));
    });
  }
  remove() {
    super.remove(), pe(this.ports, (t) => {
      pe(t.getLinks(), (n) => {
        n.remove();
      });
    });
  }
  getPortFromID(t) {
    for (var n in this.ports)
      if (this.ports[n].getID() === t)
        return this.ports[n];
    return null;
  }
  getLink(t) {
    for (let n in this.ports) {
      const r = this.ports[n].getLinks();
      if (r[t])
        return r[t];
    }
  }
  getPort(t) {
    return this.ports[t];
  }
  getPorts() {
    return this.ports;
  }
  removePort(t) {
    for (let n of Pt(t.getLinks()))
      n.clearPort(t);
    this.ports[t.getName()] && (this.ports[t.getName()].setParent(null), delete this.ports[t.getName()]);
  }
  addPort(t) {
    return t.setParent(this), this.ports[t.getName()] = t, t;
  }
  updateDimensions({ width: t, height: n }) {
    this.width = t, this.height = n;
  }
}
class Jr extends Jf {
  constructor() {
    super({
      type: "diagram-nodes",
      isSvg: !1,
      transformed: !0
    });
  }
  addModel(t) {
    if (!(t instanceof va))
      throw new Error("Can only add nodes to this layer");
    t.registerListener({
      entityRemoved: () => {
        this.getParent().removeNode(t);
      }
    }), super.addModel(t);
  }
  getChildModelFactoryBank(t) {
    return t.getNodeFactories();
  }
  getNodes() {
    return this.getModels();
  }
}
class ei extends Jf {
  constructor() {
    super({
      type: "diagram-links",
      isSvg: !0,
      transformed: !0
    });
  }
  addModel(t) {
    if (!(t instanceof rd))
      throw new Error("Can only add links to this layer");
    t.registerListener({
      entityRemoved: () => {
        this.getParent().removeLink(t);
      }
    }), super.addModel(t);
  }
  getLinks() {
    return this.getModels();
  }
  getChildModelFactoryBank(t) {
    return t.getLinkFactories();
  }
}
class AR extends e1 {
  constructor(t = {}) {
    super(t), this.addLayer(new ei()), this.addLayer(new Jr());
  }
  deserialize(t) {
    this.layers = [], super.deserialize(t);
  }
  addLayer(t) {
    super.addLayer(t), t instanceof Jr && (this.activeNodeLayer = t), t instanceof ei && (this.activeLinkLayer = t);
  }
  getLinkLayers() {
    return ho(this.layers, (t) => t instanceof ei);
  }
  getNodeLayers() {
    return ho(this.layers, (t) => t instanceof Jr);
  }
  getActiveNodeLayer() {
    if (!this.activeNodeLayer) {
      const t = this.getNodeLayers();
      t.length === 0 ? this.addLayer(new Jr()) : this.activeNodeLayer = t[0];
    }
    return this.activeNodeLayer;
  }
  getActiveLinkLayer() {
    if (!this.activeLinkLayer) {
      const t = this.getLinkLayers();
      t.length === 0 ? this.addLayer(new ei()) : this.activeLinkLayer = t[0];
    }
    return this.activeLinkLayer;
  }
  getNode(t) {
    for (const n of this.getNodeLayers()) {
      const r = n.getModel(t);
      if (r)
        return r;
    }
  }
  getLink(t) {
    for (const n of this.getLinkLayers()) {
      const r = n.getModel(t);
      if (r)
        return r;
    }
  }
  addAll(...t) {
    return pe(t, (n) => {
      n instanceof rd ? this.addLink(n) : n instanceof va && this.addNode(n);
    }), t;
  }
  addLink(t) {
    return this.getActiveLinkLayer().addModel(t), this.fireEvent({
      link: t,
      isCreated: !0
    }, "linksUpdated"), t;
  }
  addNode(t) {
    return this.getActiveNodeLayer().addModel(t), this.fireEvent({ node: t, isCreated: !0 }, "nodesUpdated"), t;
  }
  removeLink(t) {
    rp(this.getLinkLayers(), (r) => r.removeModel(t)) && this.fireEvent({ link: t, isCreated: !1 }, "linksUpdated");
  }
  removeNode(t) {
    rp(this.getNodeLayers(), (r) => r.removeModel(t)) && this.fireEvent({ node: t, isCreated: !1 }, "nodesUpdated");
  }
  getLinks() {
    return Rt(this.getLinkLayers(), (t) => Pt(t.getModels()));
  }
  getNodes() {
    return Rt(this.getNodeLayers(), (t) => Pt(t.getModels()));
  }
}
class T1 extends Lr {
  constructor(t) {
    super(Object.assign(Object.assign({}, t), { offsetX: t.offsetX || 0, offsetY: t.offsetY || 0 }));
  }
  deserialize(t) {
    super.deserialize(t), this.options.offsetX = t.data.offsetX, this.options.offsetY = t.data.offsetY;
  }
  serialize() {
    return Object.assign(Object.assign({}, super.serialize()), { offsetX: this.options.offsetX, offsetY: this.options.offsetY });
  }
}
var yo;
(function(e) {
  e.Label = ae.div`
		display: inline-block;
		position: absolute;
	`, e.Foreign = ae.foreignObject`
		pointer-events: none;
		overflow: visible;
	`;
})(yo || (yo = {}));
class bR extends C.Component {
  constructor(t) {
    super(t), this.findPathAndRelativePositionToRenderLabel = (n) => {
      const r = this.props.label.getParent(), i = r.getRenderedPath().map((a) => a.getTotalLength());
      let s = i.reduce((a, l) => a + l, 0) * (n / (r.getLabels().length + 1)), o = 0;
      for (; o < r.getRenderedPath().length; ) {
        if (s - i[o] < 0)
          return {
            path: r.getRenderedPath()[o],
            position: s
          };
        s -= i[o], o++;
      }
    }, this.calculateLabelPosition = () => {
      const n = this.findPathAndRelativePositionToRenderLabel(this.props.index + 1);
      if (!n)
        return;
      const { path: r, position: i } = n, s = {
        width: this.ref.current.offsetWidth,
        height: this.ref.current.offsetHeight
      }, o = r.getPointAtLength(i), a = {
        x: o.x - s.width / 2 + this.props.label.getOptions().offsetX,
        y: o.y - s.height / 2 + this.props.label.getOptions().offsetY
      };
      this.ref.current.style.transform = `translate(${a.x}px, ${a.y}px)`;
    }, this.ref = C.createRef();
  }
  componentDidUpdate() {
    window.requestAnimationFrame(this.calculateLabelPosition);
  }
  componentDidMount() {
    window.requestAnimationFrame(this.calculateLabelPosition);
  }
  render() {
    const t = this.props.engine.getCanvas();
    return C.createElement(
      yo.Foreign,
      { key: this.props.label.getID(), width: t == null ? void 0 : t.offsetWidth, height: t == null ? void 0 : t.offsetHeight },
      C.createElement(yo.Label, { ref: this.ref }, this.props.engine.getFactoryForLabel(this.props.label).generateReactWidget({ model: this.props.label }))
    );
  }
}
class id extends C.Component {
  constructor(t) {
    super(t), this.state = {
      sourcePort: null,
      targetPort: null
    };
  }
  componentWillUnmount() {
    this.sourceListener && this.sourceListener.deregister(), this.targetListener && this.targetListener.deregister();
  }
  static getDerivedStateFromProps(t, n) {
    return {
      sourcePort: t.link.getSourcePort(),
      targetPort: t.link.getTargetPort()
    };
  }
  installTarget() {
    this.targetListener && this.targetListener.deregister(), this.props.link.getTargetPort() && (this.targetListener = this.props.link.getTargetPort().registerListener({
      reportInitialPosition: (t) => {
        this.forceUpdate();
      }
    }));
  }
  installSource() {
    this.sourceListener && this.sourceListener.deregister(), this.props.link.getSourcePort() && (this.sourceListener = this.props.link.getSourcePort().registerListener({
      reportInitialPosition: (t) => {
        this.forceUpdate();
      }
    }));
  }
  componentDidUpdate(t, n, r) {
    n.sourcePort !== this.state.sourcePort && this.installSource(), n.targetPort !== this.state.targetPort && this.installTarget();
  }
  static generateLinePath(t, n) {
    return `M${t.getX()},${t.getY()} L ${n.getX()},${n.getY()}`;
  }
  componentDidMount() {
    this.props.link.getSourcePort() && this.installSource(), this.props.link.getTargetPort() && this.installTarget();
  }
  render() {
    const { link: t } = this.props;
    return t.getSourcePort() && !t.getSourcePort().reportedPosition || t.getTargetPort() && !t.getTargetPort().reportedPosition ? null : C.createElement(_1, { model: this.props.link, serialized: this.props.link.serialize() }, () => C.createElement(
      "g",
      { "data-linkid": this.props.link.getID() },
      this.props.diagramEngine.generateWidgetForLink(t),
      fe(this.props.link.getLabels(), (n, r) => C.createElement(bR, { key: n.getID(), engine: this.props.diagramEngine, label: n, index: r }))
    ));
  }
}
var Ap;
(function(e) {
  e.Container = ae.div``;
})(Ap || (Ap = {}));
class LR extends C.Component {
  render() {
    return C.createElement(
      C.Fragment,
      null,
      //only perform these actions when we have a diagram
      fe(this.props.layer.getLinks(), (t) => C.createElement(id, { key: t.getID(), link: t, diagramEngine: this.props.engine }))
    );
  }
}
class $R extends br {
  constructor() {
    super("diagram-links");
  }
  generateModel(t) {
    return new ei();
  }
  generateReactWidget(t) {
    return C.createElement(LR, { layer: t.model, engine: this.engine });
  }
}
var M1 = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(i, s) {
      return i[0] === n ? (r = s, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), i = this.__entries__[r];
        return i && i[1];
      }, t.prototype.set = function(n, r) {
        var i = e(this.__entries__, n);
        ~i ? this.__entries__[i][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, i = e(r, n);
        ~i && r.splice(i, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var i = 0, s = this.__entries__; i < s.length; i++) {
          var o = s[i];
          n.call(r, o[1], o[0]);
        }
      }, t;
    }()
  );
}(), yc = typeof window < "u" && typeof document < "u" && window.document === document, wo = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), NR = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(wo) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), RR = 2;
function IR(e, t) {
  var n = !1, r = !1, i = 0;
  function s() {
    n && (n = !1, e()), r && a();
  }
  function o() {
    NR(s);
  }
  function a() {
    var l = Date.now();
    if (n) {
      if (l - i < RR)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(o, t);
    i = l;
  }
  return a;
}
var FR = 20, DR = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], jR = typeof MutationObserver < "u", zR = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = IR(this.refresh.bind(this), FR);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !yc || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), jR ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !yc || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, i = DR.some(function(s) {
        return !!~r.indexOf(s);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), A1 = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var i = r[n];
    Object.defineProperty(e, i, {
      value: t[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, cr = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || wo;
}, b1 = ma(0, 0, 0, 0);
function _o(e) {
  return parseFloat(e) || 0;
}
function bp(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, i) {
    var s = e["border-" + i + "-width"];
    return r + _o(s);
  }, 0);
}
function UR(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t; r < i.length; r++) {
    var s = i[r], o = e["padding-" + s];
    n[s] = _o(o);
  }
  return n;
}
function BR(e) {
  var t = e.getBBox();
  return ma(0, 0, t.width, t.height);
}
function WR(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return b1;
  var r = cr(e).getComputedStyle(e), i = UR(r), s = i.left + i.right, o = i.top + i.bottom, a = _o(r.width), l = _o(r.height);
  if (r.boxSizing === "border-box" && (Math.round(a + s) !== t && (a -= bp(r, "left", "right") + s), Math.round(l + o) !== n && (l -= bp(r, "top", "bottom") + o)), !HR(e)) {
    var u = Math.round(a + s) - t, c = Math.round(l + o) - n;
    Math.abs(u) !== 1 && (a -= u), Math.abs(c) !== 1 && (l -= c);
  }
  return ma(i.left, i.top, a, l);
}
var GR = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof cr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof cr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function HR(e) {
  return e === cr(e).document.documentElement;
}
function qR(e) {
  return yc ? GR(e) ? BR(e) : WR(e) : b1;
}
function YR(e) {
  var t = e.x, n = e.y, r = e.width, i = e.height, s = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(s.prototype);
  return A1(o, {
    x: t,
    y: n,
    width: r,
    height: i,
    top: n,
    right: t + r,
    bottom: i + n,
    left: t
  }), o;
}
function ma(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var VR = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ma(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = qR(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), XR = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var r = YR(n);
      A1(this, { target: t, contentRect: r });
    }
    return e;
  }()
), KR = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new M1(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof cr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new VR(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof cr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new XR(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), L1 = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new M1(), $1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = zR.getInstance(), r = new KR(t, n, this);
      L1.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  $1.prototype[e] = function() {
    var t;
    return (t = L1.get(this))[e].apply(t, arguments);
  };
});
var QR = function() {
  return typeof wo.ResizeObserver < "u" ? wo.ResizeObserver : $1;
}(), wc;
(function(e) {
  e.Node = ae.div`
		position: absolute;
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Chrome/Safari/Opera */
		user-select: none;
		cursor: move;
		pointer-events: all;
	`;
})(wc || (wc = {}));
class ZR extends C.Component {
  constructor(t) {
    super(t), this.ref = C.createRef();
  }
  componentWillUnmount() {
    var t;
    this.ob.disconnect(), this.ob = null, (t = this.listener) === null || t === void 0 || t.deregister(), this.listener = null;
  }
  componentDidUpdate(t, n, r) {
    this.listener && this.props.node !== t.node && (this.listener.deregister(), this.installSelectionListener());
  }
  installSelectionListener() {
    this.listener = this.props.node.registerListener({
      selectionChanged: (t) => {
        this.forceUpdate();
      }
    });
  }
  updateSize(t, n) {
    this.props.node.updateDimensions({ width: t, height: n });
    try {
      pe(this.props.node.getPorts(), (r) => {
        r.updateCoords(this.props.diagramEngine.getPortCoords(r));
      });
    } catch {
    }
  }
  componentDidMount() {
    this.ob = new QR((n) => {
      const r = n[0].contentRect;
      this.updateSize(r.width, r.height);
    });
    const t = this.ref.current.getBoundingClientRect();
    this.updateSize(t.width, t.height), this.ob.observe(this.ref.current), this.installSelectionListener();
  }
  render() {
    return C.createElement(_1, { model: this.props.node, serialized: this.props.node.serialize() }, () => C.createElement(wc.Node, { className: "node", ref: this.ref, "data-nodeid": this.props.node.getID(), style: {
      top: this.props.node.getY(),
      left: this.props.node.getX()
    } }, this.props.diagramEngine.generateWidgetForNode(this.props.node)));
  }
}
class JR extends C.Component {
  render() {
    return C.createElement(C.Fragment, null, fe(this.props.layer.getNodes(), (t) => C.createElement(ZR, { key: t.getID(), diagramEngine: this.props.engine, node: t })));
  }
}
class eI extends br {
  constructor() {
    super("diagram-nodes");
  }
  generateModel(t) {
    return new Jr();
  }
  generateReactWidget(t) {
    return C.createElement(JR, { layer: t.model, engine: this.engine });
  }
}
var tI = st, nI = tI.isFinite;
function rI(e) {
  return typeof e == "number" && nI(e);
}
var iI = rI;
const sI = /* @__PURE__ */ Q(iI);
var oI = bn, aI = ie, lI = Ot, uI = "[object String]";
function cI(e) {
  return typeof e == "string" || !aI(e) && lI(e) && oI(e) == uI;
}
var fI = cI, dI = Ay, hI = dI("length"), pI = hI, gI = "\\ud800-\\udfff", vI = "\\u0300-\\u036f", mI = "\\ufe20-\\ufe2f", yI = "\\u20d0-\\u20ff", wI = vI + mI + yI, _I = "\\ufe0e\\ufe0f", SI = "\\u200d", kI = RegExp("[" + SI + gI + wI + _I + "]");
function PI(e) {
  return kI.test(e);
}
var EI = PI, N1 = "\\ud800-\\udfff", CI = "\\u0300-\\u036f", xI = "\\ufe20-\\ufe2f", OI = "\\u20d0-\\u20ff", TI = CI + xI + OI, MI = "\\ufe0e\\ufe0f", AI = "[" + N1 + "]", _c = "[" + TI + "]", Sc = "\\ud83c[\\udffb-\\udfff]", bI = "(?:" + _c + "|" + Sc + ")", R1 = "[^" + N1 + "]", I1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", F1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", LI = "\\u200d", D1 = bI + "?", j1 = "[" + MI + "]?", $I = "(?:" + LI + "(?:" + [R1, I1, F1].join("|") + ")" + j1 + D1 + ")*", NI = j1 + D1 + $I, RI = "(?:" + [R1 + _c + "?", _c, I1, F1, AI].join("|") + ")", Lp = RegExp(Sc + "(?=" + Sc + ")|" + RI + NI, "g");
function II(e) {
  for (var t = Lp.lastIndex = 0; Lp.test(e); )
    ++t;
  return t;
}
var FI = II, DI = pI, jI = EI, zI = FI;
function UI(e) {
  return jI(e) ? zI(e) : DI(e);
}
var BI = UI, WI = Mf, GI = Or, HI = Gt, qI = fI, YI = BI, VI = "[object Map]", XI = "[object Set]";
function KI(e) {
  if (e == null)
    return 0;
  if (HI(e))
    return qI(e) ? YI(e) : e.length;
  var t = GI(e);
  return t == VI || t == XI ? e.size : WI(e).length;
}
var z1 = KI;
const QI = /* @__PURE__ */ Q(z1);
var It;
(function(e) {
  e.TOP = "top", e.LEFT = "left", e.BOTTOM = "bottom", e.RIGHT = "right";
})(It || (It = {}));
class ya extends na {
  constructor(t) {
    super(t), this.links = {}, this.reportedPosition = !1;
  }
  deserialize(t) {
    super.deserialize(t), this.reportedPosition = !1, this.options.name = t.data.name, this.options.alignment = t.data.alignment;
  }
  serialize() {
    return Object.assign(Object.assign({}, super.serialize()), { name: this.options.name, alignment: this.options.alignment, parentNode: this.parent.getID(), links: fe(this.links, (t) => t.getID()) });
  }
  setPosition(t, n) {
    let r = this.position;
    super.setPosition(t, n), pe(this.getLinks(), (i) => {
      let s = i.getPointForPort(this);
      s.setPosition(s.getX() + t - r.x, s.getY() + n - r.y);
    });
  }
  doClone(t = {}, n) {
    n.links = {}, n.parent = this.getParent().clone(t);
  }
  getNode() {
    return this.getParent();
  }
  getName() {
    return this.options.name;
  }
  getMaximumLinks() {
    return this.options.maximumLinks;
  }
  setMaximumLinks(t) {
    this.options.maximumLinks = t;
  }
  removeLink(t) {
    delete this.links[t.getID()];
  }
  addLink(t) {
    this.links[t.getID()] = t;
  }
  getLinks() {
    return this.links;
  }
  createLinkModel() {
    if (sI(this.options.maximumLinks)) {
      var t = QI(this.links);
      if (this.options.maximumLinks === 1 && t >= 1)
        return Pt(this.links)[0];
      if (t >= this.options.maximumLinks)
        return null;
    }
    return null;
  }
  reportPosition() {
    pe(this.getLinks(), (t) => {
      t.getPointForPort(this).setPosition(this.getCenter());
    }), this.fireEvent({
      entity: this
    }, "reportInitialPosition");
  }
  getCenter() {
    return new R(this.getX() + this.width / 2, this.getY() + this.height / 2);
  }
  getBoundingBox() {
    return pt.fromPointAndSize(this.position, this.width, this.height);
  }
  updateCoords(t) {
    this.width = t.getWidth(), this.height = t.getHeight(), this.setPosition(t.getTopLeft()), this.reportedPosition = !0, this.reportPosition();
  }
  canLinkToPort(t) {
    return !0;
  }
  isLocked() {
    return super.isLocked() || this.getParent().isLocked();
  }
}
class ZI extends C.Component {
  constructor(t) {
    super(t), this.ref = C.createRef();
  }
  report() {
    this.props.port.updateCoords(this.props.engine.getPortCoords(this.props.port, this.ref.current));
  }
  componentWillUnmount() {
    this.engineListenerHandle && this.engineListenerHandle.deregister();
  }
  componentDidUpdate(t, n, r) {
    this.props.port.reportedPosition || this.report();
  }
  componentDidMount() {
    this.engineListenerHandle = this.props.engine.registerListener({
      canvasReady: () => {
        this.report();
      }
    }), this.props.engine.getCanvas() && this.report();
  }
  getExtraProps() {
    return Ae.TESTING ? {
      "data-links": fy(this.props.port.getNode().getPort(this.props.port.getName()).links).join(",")
    } : {};
  }
  render() {
    return C.createElement("div", Object.assign({ style: this.props.style, ref: this.ref, className: `port ${this.props.className || ""}`, "data-name": this.props.port.getName(), "data-nodeid": this.props.port.getNode().getID() }, this.getExtraProps()), this.props.children);
  }
}
class JI extends Yi {
  constructor(t = {}) {
    super({ name: "drag-new-link" }), this.config = Object.assign({ allowLooseLinks: !0, allowLinksFromLockedPorts: !1 }, t), this.registerAction(new he({
      type: B.MOUSE_DOWN,
      fire: (n) => {
        if (this.port = this.engine.getMouseElement(n.event), !this.config.allowLinksFromLockedPorts && this.port.isLocked()) {
          this.eject();
          return;
        }
        if (this.link = this.port.createLinkModel(), !this.link) {
          this.eject();
          return;
        }
        this.link.setSelected(!0), this.link.setSourcePort(this.port), this.engine.getModel().addLink(this.link), this.port.reportPosition();
      }
    })), this.registerAction(new he({
      type: B.MOUSE_UP,
      fire: (n) => {
        const r = this.engine.getMouseElement(n.event);
        if (r instanceof ya)
          if (this.port.canLinkToPort(r)) {
            this.link.setTargetPort(r), r.reportPosition(), this.engine.repaintCanvas();
            return;
          } else {
            this.link.remove(), this.engine.repaintCanvas();
            return;
          }
        this.config.allowLooseLinks || (this.link.remove(), this.engine.repaintCanvas());
      }
    }));
  }
  /**
   * Calculates the link's far-end point position on mouse move.
   * In order to be as precise as possible the mouse initialXRelative & initialYRelative are taken into account as well
   * as the possible engine offset
   */
  fireMouseMoved(t) {
    const n = this.port.getPosition(), r = this.engine.getModel().getZoomLevel() / 100, i = this.engine.getModel().getOffsetX() / r, s = this.engine.getModel().getOffsetY() / r, o = this.initialXRelative / r, a = this.initialYRelative / r, l = n.x - i + (o - n.x) + t.virtualDisplacementX, u = n.y - s + (a - n.y) + t.virtualDisplacementY;
    this.link.getLastPoint().setPosition(l, u), this.engine.repaintCanvas();
  }
}
class eF extends yR {
  constructor() {
    super(), this.registerAction(new he({
      type: B.MOUSE_UP,
      fire: (t) => {
        const n = this.engine.getMouseElement(t.event);
        n instanceof ya && pe(this.initialPositions, (r) => {
          if (r.item instanceof $t) {
            const i = r.item.getParent();
            if (i.getLastPoint() !== r.item)
              return;
            i.getSourcePort().canLinkToPort(n) && (i.setTargetPort(n), n.reportPosition(), this.engine.repaintCanvas());
          }
        });
      }
    }));
  }
}
class tF extends nd {
  constructor() {
    super({
      name: "default-diagrams"
    }), this.childStates = [new mR()], this.dragCanvas = new gR(), this.dragNewLink = new JI(), this.dragItems = new eF(), this.registerAction(new he({
      type: B.MOUSE_DOWN,
      fire: (t) => {
        const n = this.engine.getActionEventBus().getModelForEvent(t);
        n ? n instanceof ya ? this.transitionWithEvent(this.dragNewLink, t) : this.transitionWithEvent(this.dragItems, t) : this.transitionWithEvent(this.dragCanvas, t);
      }
    })), this.registerAction(new he({
      type: B.TOUCH_START,
      fire: (t) => {
        this.transitionWithEvent(this.dragCanvas, t);
      }
    }));
  }
}
class nF extends B2 {
  constructor(t = {}) {
    super(t), this.maxNumberPointsPerLink = 1e3, this.nodeFactories = new Zr(), this.linkFactories = new Zr(), this.portFactories = new Zr(), this.labelFactories = new Zr();
    const n = (r) => {
      r.registerListener({
        factoryAdded: (i) => {
          i.factory.setDiagramEngine(this);
        },
        factoryRemoved: (i) => {
          i.factory.setDiagramEngine(null);
        }
      });
    };
    n(this.nodeFactories), n(this.linkFactories), n(this.portFactories), n(this.labelFactories);
  }
  /**
   * Gets a model and element under the mouse cursor
   */
  getMouseElement(t) {
    var n = t.target, r = this.model, i = Ae.closest(n, ".port[data-name]");
    if (i) {
      var s = Ae.closest(n, ".node[data-nodeid]");
      return r.getNode(s.getAttribute("data-nodeid")).getPort(i.getAttribute("data-name"));
    }
    return i = Ae.closest(n, ".point[data-id]"), i ? r.getLink(i.getAttribute("data-linkid")).getPointModel(i.getAttribute("data-id")) : (i = Ae.closest(n, "[data-linkid]"), i ? r.getLink(i.getAttribute("data-linkid")) : (i = Ae.closest(n, ".node[data-nodeid]"), i ? r.getNode(i.getAttribute("data-nodeid")) : null));
  }
  //!-------------- FACTORIES ------------
  getNodeFactories() {
    return this.nodeFactories;
  }
  getLinkFactories() {
    return this.linkFactories;
  }
  getLabelFactories() {
    return this.labelFactories;
  }
  getPortFactories() {
    return this.portFactories;
  }
  getFactoryForNode(t) {
    return typeof t == "string" ? this.nodeFactories.getFactory(t) : this.nodeFactories.getFactory(t.getType());
  }
  getFactoryForLink(t) {
    return typeof t == "string" ? this.linkFactories.getFactory(t) : this.linkFactories.getFactory(t.getType());
  }
  getFactoryForLabel(t) {
    return typeof t == "string" ? this.labelFactories.getFactory(t) : this.labelFactories.getFactory(t.getType());
  }
  getFactoryForPort(t) {
    return typeof t == "string" ? this.portFactories.getFactory(t) : this.portFactories.getFactory(t.getType());
  }
  generateWidgetForLink(t) {
    return this.getFactoryForLink(t).generateReactWidget({ model: t });
  }
  generateWidgetForNode(t) {
    return this.getFactoryForNode(t).generateReactWidget({ model: t });
  }
  getNodeElement(t) {
    const n = this.canvas.querySelector(`.node[data-nodeid="${t.getID()}"]`);
    if (n === null)
      throw new Error("Cannot find Node element with nodeID: [" + t.getID() + "]");
    return n;
  }
  getNodePortElement(t) {
    var n = this.canvas.querySelector(`.port[data-name="${t.getName()}"][data-nodeid="${t.getParent().getID()}"]`);
    if (n === null)
      throw new Error("Cannot find Node Port element with nodeID: [" + t.getParent().getID() + "] and name: [" + t.getName() + "]");
    return n;
  }
  getPortCenter(t) {
    return this.getPortCoords(t).getOrigin();
  }
  /**
   * Calculate rectangular coordinates of the port passed in.
   */
  getPortCoords(t, n) {
    if (!this.canvas)
      throw new Error("Canvas needs to be set first");
    n || (n = this.getNodePortElement(t));
    const r = n.getBoundingClientRect(), i = this.getRelativeMousePoint({
      clientX: r.left,
      clientY: r.top
    }), s = this.model.getZoomLevel() / 100;
    return pt.fromPointAndSize(i, r.width / s, r.height / s);
  }
  /**
   * Determine the width and height of the node passed in.
   * It currently assumes nodes have a rectangular shape, can be overriden for customised shapes.
   */
  getNodeDimensions(t) {
    if (!this.canvas)
      return {
        width: 0,
        height: 0
      };
    const r = this.getNodeElement(t).getBoundingClientRect();
    return {
      width: r.width,
      height: r.height
    };
  }
  getBoundingNodesRect(t) {
    if (t)
      return t.length === 0 ? new pt() : new pt(b2(t.map((n) => n.getBoundingBox())));
  }
  zoomToFitSelectedNodes(t) {
    const n = this.model.getSelectedEntities().filter((r) => r instanceof va);
    this.zoomToFitNodes({
      margin: t.margin,
      maxZoom: t.maxZoom,
      nodes: n.length > 0 ? n : null
    });
  }
  zoomToFitNodes(t) {
    let n = t || 0, r = [], i = null;
    t && typeof t == "object" && (n = t.margin || 0, r = t.nodes || [], i = t.maxZoom || null), r.length === 0 && (r = this.model.getNodes());
    const s = this.getBoundingNodesRect(r);
    if (s) {
      let o = this.canvas.getBoundingClientRect();
      const a = (u = 0) => {
        const c = this.canvas.clientWidth / (s.getWidth() + u * 2), f = this.canvas.clientHeight / (s.getHeight() + u * 2);
        let d = c < f ? c : f;
        return i && d > i && (d = i), {
          zoom: d,
          x: o.width / 2 - ((s.getWidth() + u * 2) / 2 + s.getTopLeft().x) * d + u,
          y: o.height / 2 - ((s.getHeight() + u * 2) / 2 + s.getTopLeft().y) * d + u
        };
      };
      let l = a(0);
      n && (l.x < n || l.y < n) && (l = a(n)), this.model.setZoomLevel(l.zoom * 100), this.model.setOffset(l.x, l.y), this.repaintCanvas();
    }
  }
  getMaxNumberPointsPerLink() {
    return this.maxNumberPointsPerLink;
  }
  setMaxNumberPointsPerLink(t) {
    this.maxNumberPointsPerLink = t;
  }
}
class U1 extends T1 {
  constructor(t = {}) {
    super(Object.assign({ offsetY: t.offsetY == null ? -23 : t.offsetY, type: "default" }, t));
  }
  setLabel(t) {
    this.options.label = t;
  }
  deserialize(t) {
    super.deserialize(t), this.options.label = t.data.label;
  }
  serialize() {
    return Object.assign(Object.assign({}, super.serialize()), { label: this.options.label });
  }
}
var kc;
(function(e) {
  e.Label = ae.div`
		background: rgba(0, 0, 0, 0.8);
		border-radius: 5px;
		color: white;
		font-size: 12px;
		padding: 4px 8px;
		font-family: sans-serif;
		user-select: none;
	`;
})(kc || (kc = {}));
class rF extends C.Component {
  render() {
    return C.createElement(kc.Label, null, this.props.model.getOptions().label);
  }
}
class iF extends br {
  constructor() {
    super("default");
  }
  generateReactWidget(t) {
    return C.createElement(rF, { model: t.model });
  }
  generateModel(t) {
    return new U1();
  }
}
class wa extends rd {
  constructor(t = {}) {
    super(Object.assign({ type: "default", width: t.width || 3, color: t.color || "gray", selectedColor: t.selectedColor || "rgb(0,192,255)", curvyness: 50 }, t));
  }
  calculateControlOffset(t) {
    return t.getOptions().alignment === It.RIGHT ? [this.options.curvyness, 0] : t.getOptions().alignment === It.LEFT ? [-this.options.curvyness, 0] : t.getOptions().alignment === It.TOP ? [0, -this.options.curvyness] : [0, this.options.curvyness];
  }
  getSVGPath() {
    if (this.points.length == 2) {
      const t = new L2();
      return t.setSource(this.getFirstPoint().getPosition()), t.setTarget(this.getLastPoint().getPosition()), t.setSourceControl(this.getFirstPoint().getPosition().clone()), t.setTargetControl(this.getLastPoint().getPosition().clone()), this.sourcePort && t.getSourceControl().translate(...this.calculateControlOffset(this.getSourcePort())), this.targetPort && t.getTargetControl().translate(...this.calculateControlOffset(this.getTargetPort())), t.getSVGCurve();
    }
  }
  serialize() {
    return Object.assign(Object.assign({}, super.serialize()), { width: this.options.width, color: this.options.color, curvyness: this.options.curvyness, selectedColor: this.options.selectedColor });
  }
  deserialize(t) {
    super.deserialize(t), this.options.color = t.data.color, this.options.width = t.data.width, this.options.curvyness = t.data.curvyness, this.options.selectedColor = t.data.selectedColor;
  }
  addLabel(t) {
    if (t instanceof T1)
      return super.addLabel(t);
    let n = new U1();
    return n.setLabel(t), super.addLabel(n);
  }
  setWidth(t) {
    this.options.width = t, this.fireEvent({ width: t }, "widthChanged");
  }
  setColor(t) {
    this.options.color = t, this.fireEvent({ color: t }, "colorChanged");
  }
}
var Pc;
(function(e) {
  e.PointTop = ae.circle`
		pointer-events: all;
	`;
})(Pc || (Pc = {}));
class sF extends C.Component {
  constructor(t) {
    super(t), this.state = {
      selected: !1
    };
  }
  render() {
    const { point: t } = this.props;
    return C.createElement(
      "g",
      null,
      C.createElement("circle", { cx: t.getPosition().x, cy: t.getPosition().y, r: 5, fill: this.state.selected || this.props.point.isSelected() ? this.props.colorSelected : this.props.color }),
      C.createElement(Pc.PointTop, { className: "point", onMouseLeave: () => {
        this.setState({ selected: !1 });
      }, onMouseEnter: () => {
        this.setState({ selected: !0 });
      }, "data-id": t.getID(), "data-linkid": t.getLink().getID(), cx: t.getPosition().x, cy: t.getPosition().y, r: 15, opacity: 0 })
    );
  }
}
class sd extends C.Component {
  render() {
    const t = C.cloneElement(this.props.factory.generateLinkSegment(this.props.link, this.props.selected || this.props.link.isSelected(), this.props.path), {
      ref: this.props.forwardRef
    }), n = C.cloneElement(t, Object.assign(Object.assign({ strokeLinecap: "round", onMouseLeave: () => {
      this.props.onSelection(!1);
    }, onMouseEnter: () => {
      this.props.onSelection(!0);
    } }, this.props.extras), { ref: null, "data-linkid": this.props.link.getID(), strokeOpacity: this.props.selected ? 0.1 : 0, strokeWidth: 20, fill: "none", onContextMenu: () => {
      this.props.link.isLocked() || (event.preventDefault(), this.props.link.remove());
    } }));
    return C.createElement(
      "g",
      null,
      t,
      n
    );
  }
}
const oF = (e) => {
  const [t, n] = C.useState(!1), r = C.useRef([]), i = () => {
    var f;
    return (f = e.renderPoints) !== null && f !== void 0 ? f : !0;
  };
  C.useEffect(() => (e.link.setRenderedPaths(r.current.map((f) => f.current).filter(Boolean)), () => {
    e.link.setRenderedPaths([]);
  }), [e.link]);
  const s = () => {
    const f = C.createRef();
    return r.current.push(f), f;
  }, o = (f, d) => {
    if (!f.shiftKey && !e.link.isLocked() && e.link.getPoints().length - 1 <= e.diagramEngine.getMaxNumberPointsPerLink()) {
      const g = e.diagramEngine.getRelativeMousePoint(f), m = e.link.point(g.x, g.y, d);
      f.persist(), f.stopPropagation(), e.diagramEngine.getActionEventBus().fireAction({
        event: f,
        model: m
      });
    }
  }, a = (f) => {
    var d;
    return C.createElement(sF, { key: f.getID(), point: f, colorSelected: (d = e.link.getOptions().selectedColor) !== null && d !== void 0 ? d : "", color: e.link.getOptions().color });
  }, l = (f, d, g) => C.createElement(sd, { key: `link-${g}`, path: f, selected: t, diagramEngine: e.diagramEngine, factory: e.diagramEngine.getFactoryForLink(e.link), link: e.link, forwardRef: s(), onSelection: n, extras: d }), u = e.link.getPoints(), c = [];
  if (r.current = [], u.length === 2)
    c.push(l(e.link.getSVGPath(), {
      onMouseDown: (f) => {
        var d;
        (d = e.selected) === null || d === void 0 || d.call(e, f), o(f, 1);
      }
    }, "0")), e.link.getTargetPort() == null && c.push(a(u[1]));
  else {
    for (let f = 0; f < u.length - 1; f++)
      c.push(l(id.generateLinePath(u[f], u[f + 1]), {
        "data-linkid": e.link.getID(),
        "data-point": f,
        onMouseDown: (d) => {
          var g;
          (g = e.selected) === null || g === void 0 || g.call(e, d), o(d, f + 1);
        }
      }, f));
    if (i()) {
      for (let f = 1; f < u.length - 1; f++)
        c.push(a(u[f]));
      e.link.getTargetPort() == null && c.push(a(u[u.length - 1]));
    }
  }
  return C.createElement("g", { "data-default-link-test": e.link.getOptions().testName }, c);
};
var Ec;
(function(e) {
  e.Keyframes = Q$`
		from {
			stroke-dashoffset: 24;
		}
		to {
			stroke-dashoffset: 0;
		}
	`;
  const t = Zf`
		stroke-dasharray: 10, 2;
		animation: ${e.Keyframes} 1s linear infinite;
	`;
  e.Path = ae.path`
		${(n) => n.selected && t};
		fill: none;
		pointer-events: auto;
	`;
})(Ec || (Ec = {}));
class od extends br {
  constructor(t = "default") {
    super(t);
  }
  generateReactWidget(t) {
    return C.createElement(oF, { link: t.model, diagramEngine: this.engine });
  }
  generateModel(t) {
    return new wa();
  }
  generateLinkSegment(t, n, r) {
    return C.createElement(Ec.Path, { selected: n, stroke: n ? t.getOptions().selectedColor : t.getOptions().color, strokeWidth: t.getOptions().width, d: r });
  }
}
class bi extends ya {
  constructor(t, n, r) {
    n && (t = {
      in: !!t,
      name: n,
      label: r
    }), t = t, super(Object.assign({ label: t.label || t.name, alignment: t.in ? It.LEFT : It.RIGHT, type: "default" }, t));
  }
  deserialize(t) {
    super.deserialize(t), this.options.in = t.data.in, this.options.label = t.data.label;
  }
  serialize() {
    return Object.assign(Object.assign({}, super.serialize()), { in: this.options.in, label: this.options.label });
  }
  link(t, n) {
    let r = this.createLinkModel(n);
    return r.setSourcePort(this), r.setTargetPort(t), r;
  }
  canLinkToPort(t) {
    return t instanceof bi ? this.options.in !== t.getOptions().in : !0;
  }
  createLinkModel(t) {
    let n = super.createLinkModel();
    return !n && t ? t.generateModel({}) : n || new wa();
  }
}
class B1 extends va {
  constructor(t = {}, n) {
    typeof t == "string" && (t = {
      name: t,
      color: n
    }), super(Object.assign({ type: "default", name: "Untitled", color: "rgb(0,192,255)" }, t)), this.portsOut = [], this.portsIn = [];
  }
  doClone(t, n) {
    n.portsIn = [], n.portsOut = [], super.doClone(t, n);
  }
  removePort(t) {
    super.removePort(t), t.getOptions().in ? this.portsIn.splice(this.portsIn.indexOf(t), 1) : this.portsOut.splice(this.portsOut.indexOf(t), 1);
  }
  addPort(t) {
    return super.addPort(t), t.getOptions().in ? this.portsIn.indexOf(t) === -1 && this.portsIn.push(t) : this.portsOut.indexOf(t) === -1 && this.portsOut.push(t), t;
  }
  addInPort(t, n = !0) {
    const r = new bi({
      in: !0,
      name: t,
      label: t,
      alignment: It.LEFT
    });
    return n || this.portsIn.splice(0, 0, r), this.addPort(r);
  }
  addOutPort(t, n = !0) {
    const r = new bi({
      in: !1,
      name: t,
      label: t,
      alignment: It.RIGHT
    });
    return n || this.portsOut.splice(0, 0, r), this.addPort(r);
  }
  deserialize(t) {
    super.deserialize(t), this.options.name = t.data.name, this.options.color = t.data.color, this.portsIn = fe(t.data.portsInOrder, (n) => this.getPortFromID(n)), this.portsOut = fe(t.data.portsOutOrder, (n) => this.getPortFromID(n));
  }
  serialize() {
    return Object.assign(Object.assign({}, super.serialize()), { name: this.options.name, color: this.options.color, portsInOrder: fe(this.portsIn, (t) => t.getID()), portsOutOrder: fe(this.portsOut, (t) => t.getID()) });
  }
  getInPorts() {
    return this.portsIn;
  }
  getOutPorts() {
    return this.portsOut;
  }
}
var ci;
(function(e) {
  e.PortLabel = ae.div`
		display: flex;
		margin-top: 1px;
		align-items: center;
	`, e.Label = ae.div`
		padding: 0 5px;
		flex-grow: 1;
	`, e.Port = ae.div`
		width: 15px;
		height: 15px;
		background: rgba(255, 255, 255, 0.1);

		&:hover {
			background: rgb(192, 255, 0);
		}
	`;
})(ci || (ci = {}));
class aF extends C.Component {
  render() {
    const t = C.createElement(
      ZI,
      { engine: this.props.engine, port: this.props.port },
      C.createElement(ci.Port, null)
    ), n = C.createElement(ci.Label, null, this.props.port.getOptions().label);
    return C.createElement(
      ci.PortLabel,
      null,
      this.props.port.getOptions().in ? t : n,
      this.props.port.getOptions().in ? n : t
    );
  }
}
var Xt;
(function(e) {
  e.Node = ae.div`
		background-color: ${(t) => t.background};
		border-radius: 5px;
		font-family: sans-serif;
		color: white;
		border: solid 2px black;
		overflow: visible;
		font-size: 11px;
		border: solid 2px ${(t) => t.selected ? "rgb(0,192,255)" : "black"};
	`, e.Title = ae.div`
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		white-space: nowrap;
		justify-items: center;
	`, e.TitleName = ae.div`
		flex-grow: 1;
		padding: 5px 5px;
	`, e.Ports = ae.div`
		display: flex;
		background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
	`, e.PortsContainer = ae.div`
		flex-grow: 1;
		display: flex;
		flex-direction: column;

		&:first-of-type {
			margin-right: 10px;
		}

		&:only-child {
			margin-right: 0px;
		}
	`;
})(Xt || (Xt = {}));
class lF extends C.Component {
  constructor() {
    super(...arguments), this.generatePort = (t) => C.createElement(aF, { engine: this.props.engine, port: t, key: t.getID() });
  }
  render() {
    return C.createElement(
      Xt.Node,
      { "data-default-node-name": this.props.node.getOptions().name, selected: this.props.node.isSelected(), background: this.props.node.getOptions().color },
      C.createElement(
        Xt.Title,
        null,
        C.createElement(Xt.TitleName, null, this.props.node.getOptions().name)
      ),
      C.createElement(
        Xt.Ports,
        null,
        C.createElement(Xt.PortsContainer, null, fe(this.props.node.getInPorts(), this.generatePort)),
        C.createElement(Xt.PortsContainer, null, fe(this.props.node.getOutPorts(), this.generatePort))
      )
    );
  }
}
class uF extends br {
  constructor() {
    super("default");
  }
  generateReactWidget(t) {
    return C.createElement(lF, { engine: this.engine, node: t.model });
  }
  generateModel(t) {
    return new B1();
  }
}
class cF extends t1 {
  constructor() {
    super("default");
  }
  generateModel() {
    return new bi({
      name: "unknown"
    });
  }
}
class fF extends wa {
  constructor(t = {}) {
    super(Object.assign({ type: Xi.NAME }, t));
  }
  performanceTune() {
    return !1;
  }
}
function dF(e) {
  return e && e.length ? e[0] : void 0;
}
var hF = dF, pF = hF;
const gF = /* @__PURE__ */ Q(pF);
var W1 = { exports: {} };
(function(e) {
  (function() {
    var t, n, r, i, s, o, a, l, u, c, f, d, g, m, v;
    r = Math.floor, c = Math.min, n = function(w, h) {
      return w < h ? -1 : w > h ? 1 : 0;
    }, u = function(w, h, p, y, _) {
      var S;
      if (p == null && (p = 0), _ == null && (_ = n), p < 0)
        throw new Error("lo must be non-negative");
      for (y == null && (y = w.length); p < y; )
        S = r((p + y) / 2), _(h, w[S]) < 0 ? y = S : p = S + 1;
      return [].splice.apply(w, [p, p - p].concat(h)), h;
    }, o = function(w, h, p) {
      return p == null && (p = n), w.push(h), m(w, 0, w.length - 1, p);
    }, s = function(w, h) {
      var p, y;
      return h == null && (h = n), p = w.pop(), w.length ? (y = w[0], w[0] = p, v(w, 0, h)) : y = p, y;
    }, l = function(w, h, p) {
      var y;
      return p == null && (p = n), y = w[0], w[0] = h, v(w, 0, p), y;
    }, a = function(w, h, p) {
      var y;
      return p == null && (p = n), w.length && p(w[0], h) < 0 && (y = [w[0], h], h = y[0], w[0] = y[1], v(w, 0, p)), h;
    }, i = function(w, h) {
      var p, y, _, S, k, P;
      for (h == null && (h = n), S = (function() {
        P = [];
        for (var E = 0, T = r(w.length / 2); 0 <= T ? E < T : E > T; 0 <= T ? E++ : E--)
          P.push(E);
        return P;
      }).apply(this).reverse(), k = [], y = 0, _ = S.length; y < _; y++)
        p = S[y], k.push(v(w, p, h));
      return k;
    }, g = function(w, h, p) {
      var y;
      if (p == null && (p = n), y = w.indexOf(h), y !== -1)
        return m(w, 0, y, p), v(w, y, p);
    }, f = function(w, h, p) {
      var y, _, S, k, P;
      if (p == null && (p = n), _ = w.slice(0, h), !_.length)
        return _;
      for (i(_, p), P = w.slice(h), S = 0, k = P.length; S < k; S++)
        y = P[S], a(_, y, p);
      return _.sort(p).reverse();
    }, d = function(w, h, p) {
      var y, _, S, k, P, E, T, O, b;
      if (p == null && (p = n), h * 10 <= w.length) {
        if (S = w.slice(0, h).sort(p), !S.length)
          return S;
        for (_ = S[S.length - 1], T = w.slice(h), k = 0, E = T.length; k < E; k++)
          y = T[k], p(y, _) < 0 && (u(S, y, 0, null, p), S.pop(), _ = S[S.length - 1]);
        return S;
      }
      for (i(w, p), b = [], P = 0, O = c(h, w.length); 0 <= O ? P < O : P > O; 0 <= O ? ++P : --P)
        b.push(s(w, p));
      return b;
    }, m = function(w, h, p, y) {
      var _, S, k;
      for (y == null && (y = n), _ = w[p]; p > h; ) {
        if (k = p - 1 >> 1, S = w[k], y(_, S) < 0) {
          w[p] = S, p = k;
          continue;
        }
        break;
      }
      return w[p] = _;
    }, v = function(w, h, p) {
      var y, _, S, k, P;
      for (p == null && (p = n), _ = w.length, P = h, S = w[h], y = 2 * h + 1; y < _; )
        k = y + 1, k < _ && !(p(w[y], w[k]) < 0) && (y = k), w[h] = w[y], h = y, y = 2 * h + 1;
      return w[h] = S, m(w, P, h, p);
    }, t = function() {
      w.push = o, w.pop = s, w.replace = l, w.pushpop = a, w.heapify = i, w.updateItem = g, w.nlargest = f, w.nsmallest = d;
      function w(h) {
        this.cmp = h ?? n, this.nodes = [];
      }
      return w.prototype.push = function(h) {
        return o(this.nodes, h, this.cmp);
      }, w.prototype.pop = function() {
        return s(this.nodes, this.cmp);
      }, w.prototype.peek = function() {
        return this.nodes[0];
      }, w.prototype.contains = function(h) {
        return this.nodes.indexOf(h) !== -1;
      }, w.prototype.replace = function(h) {
        return l(this.nodes, h, this.cmp);
      }, w.prototype.pushpop = function(h) {
        return a(this.nodes, h, this.cmp);
      }, w.prototype.heapify = function() {
        return i(this.nodes, this.cmp);
      }, w.prototype.updateItem = function(h) {
        return g(this.nodes, h, this.cmp);
      }, w.prototype.clear = function() {
        return this.nodes = [];
      }, w.prototype.empty = function() {
        return this.nodes.length === 0;
      }, w.prototype.size = function() {
        return this.nodes.length;
      }, w.prototype.clone = function() {
        var h;
        return h = new w(), h.nodes = this.nodes.slice(0), h;
      }, w.prototype.toArray = function() {
        return this.nodes.slice(0);
      }, w.prototype.insert = w.prototype.push, w.prototype.top = w.prototype.peek, w.prototype.front = w.prototype.peek, w.prototype.has = w.prototype.contains, w.prototype.copy = w.prototype.clone, w;
    }(), e !== null && e.exports ? e.exports = t : window.Heap = t;
  }).call(Yr);
})(W1);
var vF = W1.exports, ad = vF;
function mF(e, t, n) {
  this.x = e, this.y = t, this.walkable = n === void 0 ? !0 : n;
}
var G1 = mF, yF = {
  Always: 1,
  Never: 2,
  IfAtMostOneObstacle: 3,
  OnlyWhenNoObstacles: 4
}, ot = yF, H1 = G1, ms = ot;
function Ut(e, t, n) {
  var r;
  typeof e != "object" ? r = e : (t = e.length, r = e[0].length, n = e), this.width = r, this.height = t, this.nodes = this._buildNodes(r, t, n);
}
Ut.prototype._buildNodes = function(e, t, n) {
  var r, i, s = new Array(t);
  for (r = 0; r < t; ++r)
    for (s[r] = new Array(e), i = 0; i < e; ++i)
      s[r][i] = new H1(i, r);
  if (n === void 0)
    return s;
  if (n.length !== t || n[0].length !== e)
    throw new Error("Matrix size does not fit");
  for (r = 0; r < t; ++r)
    for (i = 0; i < e; ++i)
      n[r][i] && (s[r][i].walkable = !1);
  return s;
};
Ut.prototype.getNodeAt = function(e, t) {
  return this.nodes[t][e];
};
Ut.prototype.isWalkableAt = function(e, t) {
  return this.isInside(e, t) && this.nodes[t][e].walkable;
};
Ut.prototype.isInside = function(e, t) {
  return e >= 0 && e < this.width && t >= 0 && t < this.height;
};
Ut.prototype.setWalkableAt = function(e, t, n) {
  this.nodes[t][e].walkable = n;
};
Ut.prototype.getNeighbors = function(e, t) {
  var n = e.x, r = e.y, i = [], s = !1, o = !1, a = !1, l = !1, u = !1, c = !1, f = !1, d = !1, g = this.nodes;
  if (this.isWalkableAt(n, r - 1) && (i.push(g[r - 1][n]), s = !0), this.isWalkableAt(n + 1, r) && (i.push(g[r][n + 1]), a = !0), this.isWalkableAt(n, r + 1) && (i.push(g[r + 1][n]), u = !0), this.isWalkableAt(n - 1, r) && (i.push(g[r][n - 1]), f = !0), t === ms.Never)
    return i;
  if (t === ms.OnlyWhenNoObstacles)
    o = f && s, l = s && a, c = a && u, d = u && f;
  else if (t === ms.IfAtMostOneObstacle)
    o = f || s, l = s || a, c = a || u, d = u || f;
  else if (t === ms.Always)
    o = !0, l = !0, c = !0, d = !0;
  else
    throw new Error("Incorrect value of diagonalMovement");
  return o && this.isWalkableAt(n - 1, r - 1) && i.push(g[r - 1][n - 1]), l && this.isWalkableAt(n + 1, r - 1) && i.push(g[r - 1][n + 1]), c && this.isWalkableAt(n + 1, r + 1) && i.push(g[r + 1][n + 1]), d && this.isWalkableAt(n - 1, r + 1) && i.push(g[r + 1][n - 1]), i;
};
Ut.prototype.clone = function() {
  var e, t, n = this.width, r = this.height, i = this.nodes, s = new Ut(n, r), o = new Array(r);
  for (e = 0; e < r; ++e)
    for (o[e] = new Array(n), t = 0; t < n; ++t)
      o[e][t] = new H1(t, e, i[e][t].walkable);
  return s.nodes = o, s;
};
var wF = Ut, Ze = {};
function Cc(e) {
  for (var t = [[e.x, e.y]]; e.parent; )
    e = e.parent, t.push([e.x, e.y]);
  return t.reverse();
}
Ze.backtrace = Cc;
function _F(e, t) {
  var n = Cc(e), r = Cc(t);
  return n.concat(r.reverse());
}
Ze.biBacktrace = _F;
function SF(e) {
  var t, n = 0, r, i, s, o;
  for (t = 1; t < e.length; ++t)
    r = e[t - 1], i = e[t], s = r[0] - i[0], o = r[1] - i[1], n += Math.sqrt(s * s + o * o);
  return n;
}
Ze.pathLength = SF;
function ld(e, t, n, r) {
  var i = Math.abs, s = [], o, a, l, u, c, f;
  for (l = i(n - e), u = i(r - t), o = e < n ? 1 : -1, a = t < r ? 1 : -1, c = l - u; s.push([e, t]), !(e === n && t === r); )
    f = 2 * c, f > -u && (c = c - u, e = e + o), f < l && (c = c + l, t = t + a);
  return s;
}
Ze.interpolate = ld;
function kF(e) {
  var t = [], n = e.length, r, i, s, o, a, l;
  if (n < 2)
    return t;
  for (a = 0; a < n - 1; ++a)
    for (r = e[a], i = e[a + 1], s = ld(r[0], r[1], i[0], i[1]), o = s.length, l = 0; l < o - 1; ++l)
      t.push(s[l]);
  return t.push(e[n - 1]), t;
}
Ze.expandPath = kF;
function PF(e, t) {
  var n = t.length, r = t[0][0], i = t[0][1], s = t[n - 1][0], o = t[n - 1][1], a, l, u, c, f, d, g, m, v, w, h;
  for (a = r, l = i, f = [[a, l]], d = 2; d < n; ++d) {
    for (m = t[d], u = m[0], c = m[1], v = ld(a, l, u, c), h = !1, g = 1; g < v.length; ++g)
      if (w = v[g], !e.isWalkableAt(w[0], w[1])) {
        h = !0;
        break;
      }
    h && (lastValidCoord = t[d - 1], f.push(lastValidCoord), a = lastValidCoord[0], l = lastValidCoord[1]);
  }
  return f.push([s, o]), f;
}
Ze.smoothenPath = PF;
function EF(e) {
  if (e.length < 3)
    return e;
  var t = [], n = e[0][0], r = e[0][1], i = e[1][0], s = e[1][1], o = i - n, a = s - r, l, u, c, f, d, g;
  for (d = Math.sqrt(o * o + a * a), o /= d, a /= d, t.push([n, r]), g = 2; g < e.length; g++)
    l = i, u = s, c = o, f = a, i = e[g][0], s = e[g][1], o = i - l, a = s - u, d = Math.sqrt(o * o + a * a), o /= d, a /= d, (o !== c || a !== f) && t.push([l, u]);
  return t.push([i, s]), t;
}
Ze.compressPath = EF;
var Vi = {
  /**
   * Manhattan distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} dx + dy
   */
  manhattan: function(e, t) {
    return e + t;
  },
  /**
   * Euclidean distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} sqrt(dx * dx + dy * dy)
   */
  euclidean: function(e, t) {
    return Math.sqrt(e * e + t * t);
  },
  /**
   * Octile distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} sqrt(dx * dx + dy * dy) for grids
   */
  octile: function(e, t) {
    var n = Math.SQRT2 - 1;
    return e < t ? n * e + t : n * t + e;
  },
  /**
   * Chebyshev distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} max(dx, dy)
   */
  chebyshev: function(e, t) {
    return Math.max(e, t);
  }
}, CF = ad, xF = Ze, al = Vi, ys = ot;
function q1(e) {
  e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.heuristic = e.heuristic || al.manhattan, this.weight = e.weight || 1, this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = ys.OnlyWhenNoObstacles : this.diagonalMovement = ys.IfAtMostOneObstacle : this.diagonalMovement = ys.Never), this.diagonalMovement === ys.Never ? this.heuristic = e.heuristic || al.manhattan : this.heuristic = e.heuristic || al.octile;
}
q1.prototype.findPath = function(e, t, n, r, i) {
  var s = new CF(function(S, k) {
    return S.f - k.f;
  }), o = i.getNodeAt(e, t), a = i.getNodeAt(n, r), l = this.heuristic, u = this.diagonalMovement, c = this.weight, f = Math.abs, d = Math.SQRT2, g, m, v, w, h, p, y, _;
  for (o.g = 0, o.f = 0, s.push(o), o.opened = !0; !s.empty(); ) {
    if (g = s.pop(), g.closed = !0, g === a)
      return xF.backtrace(a);
    for (m = i.getNeighbors(g, u), w = 0, h = m.length; w < h; ++w)
      v = m[w], !v.closed && (p = v.x, y = v.y, _ = g.g + (p - g.x === 0 || y - g.y === 0 ? 1 : d), (!v.opened || _ < v.g) && (v.g = _, v.h = v.h || c * l(f(p - n), f(y - r)), v.f = v.g + v.h, v.parent = g, v.opened ? s.updateItem(v) : (s.push(v), v.opened = !0)));
  }
  return [];
};
var Y1 = q1, V1 = Y1;
function xc(e) {
  V1.call(this, e);
  var t = this.heuristic;
  this.heuristic = function(n, r) {
    return t(n, r) * 1e6;
  };
}
xc.prototype = new V1();
xc.prototype.constructor = xc;
var OF = Ze, ll = ot;
function TF(e) {
  e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = ll.OnlyWhenNoObstacles : this.diagonalMovement = ll.IfAtMostOneObstacle : this.diagonalMovement = ll.Never);
}
TF.prototype.findPath = function(e, t, n, r, i) {
  var s = [], o = this.diagonalMovement, a = i.getNodeAt(e, t), l = i.getNodeAt(n, r), u, c, f, d, g;
  for (s.push(a), a.opened = !0; s.length; ) {
    if (f = s.shift(), f.closed = !0, f === l)
      return OF.backtrace(l);
    for (u = i.getNeighbors(f, o), d = 0, g = u.length; d < g; ++d)
      c = u[d], !(c.closed || c.opened) && (s.push(c), c.opened = !0, c.parent = f);
  }
  return [];
};
var X1 = Y1;
function Oc(e) {
  X1.call(this, e), this.heuristic = function(t, n) {
    return 0;
  };
}
Oc.prototype = new X1();
Oc.prototype.constructor = Oc;
var $p = ad, Np = Ze, ul = Vi, ws = ot;
function K1(e) {
  e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.heuristic = e.heuristic || ul.manhattan, this.weight = e.weight || 1, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = ws.OnlyWhenNoObstacles : this.diagonalMovement = ws.IfAtMostOneObstacle : this.diagonalMovement = ws.Never), this.diagonalMovement === ws.Never ? this.heuristic = e.heuristic || ul.manhattan : this.heuristic = e.heuristic || ul.octile;
}
K1.prototype.findPath = function(e, t, n, r, i) {
  var s = function(T, O) {
    return T.f - O.f;
  }, o = new $p(s), a = new $p(s), l = i.getNodeAt(e, t), u = i.getNodeAt(n, r), c = this.heuristic, f = this.diagonalMovement, d = this.weight, g = Math.abs, m = Math.SQRT2, v, w, h, p, y, _, S, k, P = 1, E = 2;
  for (l.g = 0, l.f = 0, o.push(l), l.opened = P, u.g = 0, u.f = 0, a.push(u), u.opened = E; !o.empty() && !a.empty(); ) {
    for (v = o.pop(), v.closed = !0, w = i.getNeighbors(v, f), p = 0, y = w.length; p < y; ++p)
      if (h = w[p], !h.closed) {
        if (h.opened === E)
          return Np.biBacktrace(v, h);
        _ = h.x, S = h.y, k = v.g + (_ - v.x === 0 || S - v.y === 0 ? 1 : m), (!h.opened || k < h.g) && (h.g = k, h.h = h.h || d * c(g(_ - n), g(S - r)), h.f = h.g + h.h, h.parent = v, h.opened ? o.updateItem(h) : (o.push(h), h.opened = P));
      }
    for (v = a.pop(), v.closed = !0, w = i.getNeighbors(v, f), p = 0, y = w.length; p < y; ++p)
      if (h = w[p], !h.closed) {
        if (h.opened === P)
          return Np.biBacktrace(h, v);
        _ = h.x, S = h.y, k = v.g + (_ - v.x === 0 || S - v.y === 0 ? 1 : m), (!h.opened || k < h.g) && (h.g = k, h.h = h.h || d * c(g(_ - e), g(S - t)), h.f = h.g + h.h, h.parent = v, h.opened ? a.updateItem(h) : (a.push(h), h.opened = E));
      }
  }
  return [];
};
var Q1 = K1, Z1 = Q1;
function Tc(e) {
  Z1.call(this, e);
  var t = this.heuristic;
  this.heuristic = function(n, r) {
    return t(n, r) * 1e6;
  };
}
Tc.prototype = new Z1();
Tc.prototype.constructor = Tc;
var Rp = Ze, cl = ot;
function MF(e) {
  e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = cl.OnlyWhenNoObstacles : this.diagonalMovement = cl.IfAtMostOneObstacle : this.diagonalMovement = cl.Never);
}
MF.prototype.findPath = function(e, t, n, r, i) {
  var s = i.getNodeAt(e, t), o = i.getNodeAt(n, r), a = [], l = [], u, c, f, d = this.diagonalMovement, g = 0, m = 1, v, w;
  for (a.push(s), s.opened = !0, s.by = g, l.push(o), o.opened = !0, o.by = m; a.length && l.length; ) {
    for (f = a.shift(), f.closed = !0, u = i.getNeighbors(f, d), v = 0, w = u.length; v < w; ++v)
      if (c = u[v], !c.closed) {
        if (c.opened) {
          if (c.by === m)
            return Rp.biBacktrace(f, c);
          continue;
        }
        a.push(c), c.parent = f, c.opened = !0, c.by = g;
      }
    for (f = l.shift(), f.closed = !0, u = i.getNeighbors(f, d), v = 0, w = u.length; v < w; ++v)
      if (c = u[v], !c.closed) {
        if (c.opened) {
          if (c.by === g)
            return Rp.biBacktrace(c, f);
          continue;
        }
        l.push(c), c.parent = f, c.opened = !0, c.by = m;
      }
  }
  return [];
};
var J1 = Q1;
function Mc(e) {
  J1.call(this, e), this.heuristic = function(t, n) {
    return 0;
  };
}
Mc.prototype = new J1();
Mc.prototype.constructor = Mc;
var fl = Vi, Ip = G1, _s = ot;
function AF(e) {
  e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.heuristic = e.heuristic || fl.manhattan, this.weight = e.weight || 1, this.trackRecursion = e.trackRecursion || !1, this.timeLimit = e.timeLimit || 1 / 0, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = _s.OnlyWhenNoObstacles : this.diagonalMovement = _s.IfAtMostOneObstacle : this.diagonalMovement = _s.Never), this.diagonalMovement === _s.Never ? this.heuristic = e.heuristic || fl.manhattan : this.heuristic = e.heuristic || fl.octile;
}
AF.prototype.findPath = function(e, t, n, r, i) {
  var s = (/* @__PURE__ */ new Date()).getTime(), o = (function(v, w) {
    return this.heuristic(Math.abs(w.x - v.x), Math.abs(w.y - v.y));
  }).bind(this), a = function(v, w) {
    return v.x === w.x || v.y === w.y ? 1 : Math.SQRT2;
  }, l = (function(v, w, h, p, y) {
    if (this.timeLimit > 0 && (/* @__PURE__ */ new Date()).getTime() - s > this.timeLimit * 1e3)
      return 1 / 0;
    var _ = w + o(v, c) * this.weight;
    if (_ > h)
      return _;
    if (v == c)
      return p[y] = [v.x, v.y], v;
    var S, k, P, E, T = i.getNeighbors(v, this.diagonalMovement);
    for (P = 0, S = 1 / 0; E = T[P]; ++P) {
      if (this.trackRecursion && (E.retainCount = E.retainCount + 1 || 1, E.tested !== !0 && (E.tested = !0)), k = l(E, w + a(v, E), h, p, y + 1), k instanceof Ip)
        return p[y] = [v.x, v.y], k;
      this.trackRecursion && --E.retainCount === 0 && (E.tested = !1), k < S && (S = k);
    }
    return S;
  }).bind(this), u = i.getNodeAt(e, t), c = i.getNodeAt(n, r), f = o(u, c), d, g, m;
  for (d = 0; ; ++d) {
    if (g = [], m = l(u, 0, f, g, 0), m === 1 / 0)
      return [];
    if (m instanceof Ip)
      return g;
    f = m;
  }
  return [];
};
var bF = ad, Fp = Ze, e0 = Vi;
function ud(e) {
  e = e || {}, this.heuristic = e.heuristic || e0.manhattan, this.trackJumpRecursion = e.trackJumpRecursion || !1;
}
ud.prototype.findPath = function(e, t, n, r, i) {
  var s = this.openList = new bF(function(u, c) {
    return u.f - c.f;
  }), o = this.startNode = i.getNodeAt(e, t), a = this.endNode = i.getNodeAt(n, r), l;
  for (this.grid = i, o.g = 0, o.f = 0, s.push(o), o.opened = !0; !s.empty(); ) {
    if (l = s.pop(), l.closed = !0, l === a)
      return Fp.expandPath(Fp.backtrace(a));
    this._identifySuccessors(l);
  }
  return [];
};
ud.prototype._identifySuccessors = function(e) {
  var t = this.grid, n = this.heuristic, r = this.openList, i = this.endNode.x, s = this.endNode.y, o, a, l, u, c, f = e.x, d = e.y, g, m, v, w, h, p = Math.abs;
  for (o = this._findNeighbors(e), u = 0, c = o.length; u < c; ++u)
    if (a = o[u], l = this._jump(a[0], a[1], f, d), l) {
      if (g = l[0], m = l[1], h = t.getNodeAt(g, m), h.closed)
        continue;
      v = e0.octile(p(g - f), p(m - d)), w = e.g + v, (!h.opened || w < h.g) && (h.g = w, h.h = h.h || n(p(g - i), p(m - s)), h.f = h.g + h.h, h.parent = e, h.opened ? r.updateItem(h) : (r.push(h), h.opened = !0));
    }
};
var _a = ud, t0 = _a, LF = ot;
function fr(e) {
  t0.call(this, e);
}
fr.prototype = new t0();
fr.prototype.constructor = fr;
fr.prototype._jump = function(e, t, n, r) {
  var i = this.grid, s = e - n, o = t - r;
  if (!i.isWalkableAt(e, t))
    return null;
  if (this.trackJumpRecursion === !0 && (i.getNodeAt(e, t).tested = !0), i.getNodeAt(e, t) === this.endNode)
    return [e, t];
  if (s !== 0) {
    if (i.isWalkableAt(e, t - 1) && !i.isWalkableAt(e - s, t - 1) || i.isWalkableAt(e, t + 1) && !i.isWalkableAt(e - s, t + 1))
      return [e, t];
  } else if (o !== 0) {
    if (i.isWalkableAt(e - 1, t) && !i.isWalkableAt(e - 1, t - o) || i.isWalkableAt(e + 1, t) && !i.isWalkableAt(e + 1, t - o))
      return [e, t];
    if (this._jump(e + 1, t, e, t) || this._jump(e - 1, t, e, t))
      return [e, t];
  } else
    throw new Error("Only horizontal and vertical movements are allowed");
  return this._jump(e + s, t + o, e, t);
};
fr.prototype._findNeighbors = function(e) {
  var t = e.parent, n = e.x, r = e.y, i = this.grid, s, o, a, l, u = [], c, f, d, g;
  if (t)
    s = t.x, o = t.y, a = (n - s) / Math.max(Math.abs(n - s), 1), l = (r - o) / Math.max(Math.abs(r - o), 1), a !== 0 ? (i.isWalkableAt(n, r - 1) && u.push([n, r - 1]), i.isWalkableAt(n, r + 1) && u.push([n, r + 1]), i.isWalkableAt(n + a, r) && u.push([n + a, r])) : l !== 0 && (i.isWalkableAt(n - 1, r) && u.push([n - 1, r]), i.isWalkableAt(n + 1, r) && u.push([n + 1, r]), i.isWalkableAt(n, r + l) && u.push([n, r + l]));
  else
    for (c = i.getNeighbors(e, LF.Never), d = 0, g = c.length; d < g; ++d)
      f = c[d], u.push([f.x, f.y]);
  return u;
};
var $F = fr, n0 = _a, NF = ot;
function dr(e) {
  n0.call(this, e);
}
dr.prototype = new n0();
dr.prototype.constructor = dr;
dr.prototype._jump = function(e, t, n, r) {
  var i = this.grid, s = e - n, o = t - r;
  if (!i.isWalkableAt(e, t))
    return null;
  if (this.trackJumpRecursion === !0 && (i.getNodeAt(e, t).tested = !0), i.getNodeAt(e, t) === this.endNode)
    return [e, t];
  if (s !== 0 && o !== 0) {
    if (i.isWalkableAt(e - s, t + o) && !i.isWalkableAt(e - s, t) || i.isWalkableAt(e + s, t - o) && !i.isWalkableAt(e, t - o))
      return [e, t];
    if (this._jump(e + s, t, e, t) || this._jump(e, t + o, e, t))
      return [e, t];
  } else if (s !== 0) {
    if (i.isWalkableAt(e + s, t + 1) && !i.isWalkableAt(e, t + 1) || i.isWalkableAt(e + s, t - 1) && !i.isWalkableAt(e, t - 1))
      return [e, t];
  } else if (i.isWalkableAt(e + 1, t + o) && !i.isWalkableAt(e + 1, t) || i.isWalkableAt(e - 1, t + o) && !i.isWalkableAt(e - 1, t))
    return [e, t];
  return this._jump(e + s, t + o, e, t);
};
dr.prototype._findNeighbors = function(e) {
  var t = e.parent, n = e.x, r = e.y, i = this.grid, s, o, a, l, u = [], c, f, d, g;
  if (t)
    s = t.x, o = t.y, a = (n - s) / Math.max(Math.abs(n - s), 1), l = (r - o) / Math.max(Math.abs(r - o), 1), a !== 0 && l !== 0 ? (i.isWalkableAt(n, r + l) && u.push([n, r + l]), i.isWalkableAt(n + a, r) && u.push([n + a, r]), i.isWalkableAt(n + a, r + l) && u.push([n + a, r + l]), i.isWalkableAt(n - a, r) || u.push([n - a, r + l]), i.isWalkableAt(n, r - l) || u.push([n + a, r - l])) : a === 0 ? (i.isWalkableAt(n, r + l) && u.push([n, r + l]), i.isWalkableAt(n + 1, r) || u.push([n + 1, r + l]), i.isWalkableAt(n - 1, r) || u.push([n - 1, r + l])) : (i.isWalkableAt(n + a, r) && u.push([n + a, r]), i.isWalkableAt(n, r + 1) || u.push([n + a, r + 1]), i.isWalkableAt(n, r - 1) || u.push([n + a, r - 1]));
  else
    for (c = i.getNeighbors(e, NF.Always), d = 0, g = c.length; d < g; ++d)
      f = c[d], u.push([f.x, f.y]);
  return u;
};
var RF = dr, r0 = _a, IF = ot;
function hr(e) {
  r0.call(this, e);
}
hr.prototype = new r0();
hr.prototype.constructor = hr;
hr.prototype._jump = function(e, t, n, r) {
  var i = this.grid, s = e - n, o = t - r;
  if (!i.isWalkableAt(e, t))
    return null;
  if (this.trackJumpRecursion === !0 && (i.getNodeAt(e, t).tested = !0), i.getNodeAt(e, t) === this.endNode)
    return [e, t];
  if (s !== 0 && o !== 0) {
    if (this._jump(e + s, t, e, t) || this._jump(e, t + o, e, t))
      return [e, t];
  } else if (s !== 0) {
    if (i.isWalkableAt(e, t - 1) && !i.isWalkableAt(e - s, t - 1) || i.isWalkableAt(e, t + 1) && !i.isWalkableAt(e - s, t + 1))
      return [e, t];
  } else if (o !== 0 && (i.isWalkableAt(e - 1, t) && !i.isWalkableAt(e - 1, t - o) || i.isWalkableAt(e + 1, t) && !i.isWalkableAt(e + 1, t - o)))
    return [e, t];
  return i.isWalkableAt(e + s, t) && i.isWalkableAt(e, t + o) ? this._jump(e + s, t + o, e, t) : null;
};
hr.prototype._findNeighbors = function(e) {
  var t = e.parent, n = e.x, r = e.y, i = this.grid, s, o, a, l, u = [], c, f, d, g;
  if (t)
    if (s = t.x, o = t.y, a = (n - s) / Math.max(Math.abs(n - s), 1), l = (r - o) / Math.max(Math.abs(r - o), 1), a !== 0 && l !== 0)
      i.isWalkableAt(n, r + l) && u.push([n, r + l]), i.isWalkableAt(n + a, r) && u.push([n + a, r]), i.isWalkableAt(n, r + l) && i.isWalkableAt(n + a, r) && u.push([n + a, r + l]);
    else {
      var m;
      if (a !== 0) {
        m = i.isWalkableAt(n + a, r);
        var v = i.isWalkableAt(n, r + 1), w = i.isWalkableAt(n, r - 1);
        m && (u.push([n + a, r]), v && u.push([n + a, r + 1]), w && u.push([n + a, r - 1])), v && u.push([n, r + 1]), w && u.push([n, r - 1]);
      } else if (l !== 0) {
        m = i.isWalkableAt(n, r + l);
        var h = i.isWalkableAt(n + 1, r), p = i.isWalkableAt(n - 1, r);
        m && (u.push([n, r + l]), h && u.push([n + 1, r + l]), p && u.push([n - 1, r + l])), h && u.push([n + 1, r]), p && u.push([n - 1, r]);
      }
    }
  else
    for (c = i.getNeighbors(e, IF.OnlyWhenNoObstacles), d = 0, g = c.length; d < g; ++d)
      f = c[d], u.push([f.x, f.y]);
  return u;
};
var FF = hr, i0 = _a, DF = ot;
function pr(e) {
  i0.call(this, e);
}
pr.prototype = new i0();
pr.prototype.constructor = pr;
pr.prototype._jump = function(e, t, n, r) {
  var i = this.grid, s = e - n, o = t - r;
  if (!i.isWalkableAt(e, t))
    return null;
  if (this.trackJumpRecursion === !0 && (i.getNodeAt(e, t).tested = !0), i.getNodeAt(e, t) === this.endNode)
    return [e, t];
  if (s !== 0 && o !== 0) {
    if (i.isWalkableAt(e - s, t + o) && !i.isWalkableAt(e - s, t) || i.isWalkableAt(e + s, t - o) && !i.isWalkableAt(e, t - o))
      return [e, t];
    if (this._jump(e + s, t, e, t) || this._jump(e, t + o, e, t))
      return [e, t];
  } else if (s !== 0) {
    if (i.isWalkableAt(e + s, t + 1) && !i.isWalkableAt(e, t + 1) || i.isWalkableAt(e + s, t - 1) && !i.isWalkableAt(e, t - 1))
      return [e, t];
  } else if (i.isWalkableAt(e + 1, t + o) && !i.isWalkableAt(e + 1, t) || i.isWalkableAt(e - 1, t + o) && !i.isWalkableAt(e - 1, t))
    return [e, t];
  return i.isWalkableAt(e + s, t) || i.isWalkableAt(e, t + o) ? this._jump(e + s, t + o, e, t) : null;
};
pr.prototype._findNeighbors = function(e) {
  var t = e.parent, n = e.x, r = e.y, i = this.grid, s, o, a, l, u = [], c, f, d, g;
  if (t)
    s = t.x, o = t.y, a = (n - s) / Math.max(Math.abs(n - s), 1), l = (r - o) / Math.max(Math.abs(r - o), 1), a !== 0 && l !== 0 ? (i.isWalkableAt(n, r + l) && u.push([n, r + l]), i.isWalkableAt(n + a, r) && u.push([n + a, r]), (i.isWalkableAt(n, r + l) || i.isWalkableAt(n + a, r)) && u.push([n + a, r + l]), !i.isWalkableAt(n - a, r) && i.isWalkableAt(n, r + l) && u.push([n - a, r + l]), !i.isWalkableAt(n, r - l) && i.isWalkableAt(n + a, r) && u.push([n + a, r - l])) : a === 0 ? i.isWalkableAt(n, r + l) && (u.push([n, r + l]), i.isWalkableAt(n + 1, r) || u.push([n + 1, r + l]), i.isWalkableAt(n - 1, r) || u.push([n - 1, r + l])) : i.isWalkableAt(n + a, r) && (u.push([n + a, r]), i.isWalkableAt(n, r + 1) || u.push([n + a, r + 1]), i.isWalkableAt(n, r - 1) || u.push([n + a, r - 1]));
  else
    for (c = i.getNeighbors(e, DF.IfAtMostOneObstacle), d = 0, g = c.length; d < g; ++d)
      f = c[d], u.push([f.x, f.y]);
  return u;
};
var jF = pr, dl = ot, zF = $F, UF = RF, BF = FF, WF = jF;
function GF(e) {
  return e = e || {}, e.diagonalMovement === dl.Never ? new zF(e) : e.diagonalMovement === dl.Always ? new UF(e) : e.diagonalMovement === dl.OnlyWhenNoObstacles ? new BF(e) : new WF(e);
}
var HF = GF, qF = {
  Grid: wF,
  Util: Ze,
  DiagonalMovement: ot,
  Heuristic: Vi,
  JumpPointFinder: HF
}, tr = qF;
const hl = new tr.JumpPointFinder({
  heuristic: tr.Heuristic.manhattan,
  diagonalMovement: tr.DiagonalMovement.Never
});
class YF {
  constructor(t) {
    this.instance = hl, this.factory = t;
  }
  /**
   * Taking as argument a fully unblocked walking matrix, this method
   * finds a direct path from point A to B.
   */
  calculateDirectPath(t, n) {
    const r = this.factory.getCanvasMatrix(), i = new tr.Grid(r);
    return hl.findPath(this.factory.translateRoutingX(Math.floor(t.getX() / this.factory.ROUTING_SCALING_FACTOR)), this.factory.translateRoutingY(Math.floor(t.getY() / this.factory.ROUTING_SCALING_FACTOR)), this.factory.translateRoutingX(Math.floor(n.getX() / this.factory.ROUTING_SCALING_FACTOR)), this.factory.translateRoutingY(Math.floor(n.getY() / this.factory.ROUTING_SCALING_FACTOR)), i);
  }
  /**
   * Using @link{#calculateDirectPath}'s result as input, we here
   * determine the first walkable point found in the matrix that includes
   * blocked paths.
   */
  calculateLinkStartEndCoords(t, n) {
    const r = n.findIndex((a) => t[a[1]] ? t[a[1]][a[0]] === 0 : !1), i = n.length - 1 - n.slice().reverse().findIndex((a) => t[a[1]] ? t[a[1]][a[0]] === 0 : !1);
    if (r === -1 || i === -1)
      return;
    const s = n.slice(0, r), o = n.slice(i);
    return {
      start: {
        x: n[r][0],
        y: n[r][1]
      },
      end: {
        x: n[i][0],
        y: n[i][1]
      },
      pathToStart: s,
      pathToEnd: o
    };
  }
  /**
   * Puts everything together: merges the paths from/to the centre of the ports,
   * with the path calculated around other elements.
   */
  calculateDynamicPath(t, n, r, i, s) {
    const o = new tr.Grid(t), a = hl.findPath(n.x, n.y, r.x, r.y, o), l = i.concat(a, s).map((u) => [
      this.factory.translateRoutingX(u[0], !0),
      this.factory.translateRoutingY(u[1], !0)
    ]);
    return tr.Util.compressPath(l);
  }
}
class VF extends C.Component {
  constructor(t) {
    super(t), this.refPaths = [], this.state = {
      selected: !1
    }, this.pathFinding = new YF(this.props.factory);
  }
  componentDidUpdate() {
    this.props.link.setRenderedPaths(this.refPaths.map((t) => t.current));
  }
  componentDidMount() {
    this.props.link.setRenderedPaths(this.refPaths.map((t) => t.current));
  }
  componentWillUnmount() {
    this.props.link.setRenderedPaths([]);
  }
  generateLink(t, n) {
    const r = C.createRef();
    return this.refPaths.push(r), C.createElement(sd, { key: `link-${n}`, path: t, selected: this.state.selected, diagramEngine: this.props.diagramEngine, factory: this.props.diagramEngine.getFactoryForLink(this.props.link), link: this.props.link, forwardRef: r, onSelection: (i) => {
      this.setState({ selected: i });
    }, extras: {} });
  }
  render() {
    this.refPaths = [];
    var t = this.props.link.getPoints(), n = [];
    const r = this.pathFinding.calculateDirectPath(gF(t), zy(t)), i = this.props.factory.getRoutingMatrix(), s = this.pathFinding.calculateLinkStartEndCoords(i, r);
    if (s) {
      const { start: o, end: a, pathToStart: l, pathToEnd: u } = s, c = this.pathFinding.calculateDynamicPath(i, o, a, l, u);
      n.push(
        //smooth: boolean, extraProps: any, id: string | number, firstPoint: PointModel, lastPoint: PointModel
        this.generateLink(this.props.factory.generateDynamicPath(c), "0")
      );
    }
    return C.createElement(C.Fragment, null, n);
  }
}
var XF = Vo, KF = Gi, QF = Gf, ZF = ie;
function JF() {
  var e = arguments.length;
  if (!e)
    return [];
  for (var t = Array(e - 1), n = arguments[0], r = e; r--; )
    t[r - 1] = arguments[r];
  return XF(ZF(n) ? QF(n) : [n], KF(t, 1));
}
var e3 = JF;
const t3 = /* @__PURE__ */ Q(e3);
var n3 = "Expected a function";
function r3(e, t, n) {
  if (typeof e != "function")
    throw new TypeError(n3);
  return setTimeout(function() {
    e.apply(void 0, n);
  }, t);
}
var i3 = r3, s3 = i3, o3 = Nr, a3 = o3(function(e, t) {
  return s3(e, 1, t);
}), l3 = a3;
const u3 = /* @__PURE__ */ Q(l3);
var c3 = Tr;
function f3(e, t, n) {
  for (var r = -1, i = e.length; ++r < i; ) {
    var s = e[r], o = t(s);
    if (o != null && (a === void 0 ? o === o && !c3(o) : n(o, a)))
      var a = o, l = s;
  }
  return l;
}
var Sa = f3;
function d3(e, t) {
  return e < t;
}
var s0 = d3, h3 = Sa, p3 = vt, g3 = s0;
function v3(e, t) {
  return e && e.length ? h3(e, p3(t), g3) : void 0;
}
var o0 = v3;
const Dp = /* @__PURE__ */ Q(o0);
function m3(e, t) {
  return e > t;
}
var a0 = m3, y3 = Sa, w3 = a0, _3 = vt;
function S3(e, t) {
  return e && e.length ? y3(e, _3(t), w3) : void 0;
}
var k3 = S3;
const jp = /* @__PURE__ */ Q(k3);
var P3 = Math.ceil, E3 = Math.max;
function C3(e, t, n, r) {
  for (var i = -1, s = E3(P3((t - e) / (n || 1)), 0), o = Array(s); s--; )
    o[r ? s : ++i] = e, e += n;
  return o;
}
var x3 = C3, O3 = x3, T3 = Ar, pl = x1;
function M3(e) {
  return function(t, n, r) {
    return r && typeof r != "number" && T3(t, n, r) && (n = r = void 0), t = pl(t), n === void 0 ? (n = t, t = 0) : n = pl(n), r = r === void 0 ? t < n ? 1 : -1 : pl(r), O3(t, n, r, e);
  };
}
var A3 = M3, b3 = A3, L3 = b3(), l0 = L3;
const $3 = /* @__PURE__ */ Q(l0);
function N3(e, t, n, r) {
  var i = -1, s = e == null ? 0 : e.length;
  for (r && s && (n = e[++i]); ++i < s; )
    n = t(n, e[i], i, e);
  return n;
}
var R3 = N3;
function I3(e, t, n, r, i) {
  return i(e, function(s, o, a) {
    n = r ? (r = !1, s) : t(n, s, o, a);
  }), n;
}
var F3 = I3, D3 = R3, j3 = Bi, z3 = vt, U3 = F3, B3 = ie;
function W3(e, t, n) {
  var r = B3(e) ? D3 : U3, i = arguments.length < 3;
  return r(e, z3(t), n, i, j3);
}
var cd = W3;
const G3 = /* @__PURE__ */ Q(cd);
var zp = { exports: {} }, Ac = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = /* @__PURE__ */ function() {
    function f(d, g) {
      var m = [], v = !0, w = !1, h = void 0;
      try {
        for (var p = d[Symbol.iterator](), y; !(v = (y = p.next()).done) && (m.push(y.value), !(g && m.length === g)); v = !0)
          ;
      } catch (_) {
        w = !0, h = _;
      } finally {
        try {
          !v && p.return && p.return();
        } finally {
          if (w) throw h;
        }
      }
      return m;
    }
    return function(d, g) {
      if (Array.isArray(d))
        return d;
      if (Symbol.iterator in Object(d))
        return f(d, g);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(), r = function(d) {
    return d * d;
  }, i = function(d, g) {
    var m = n(d, 2), v = m[0], w = m[1], h = n(g, 2), p = h[0], y = h[1];
    return Math.sqrt(r(v - p) + r(w - y));
  }, s = function(d, g) {
    var m = i(d, g);
    return m == 0 ? 1 / 0 : r(m) / (2 * Math.abs(d[1] - g[1]));
  }, o = function(d, g, m) {
    var v = (d[0] - m[0]) * (g[1] - m[1]) - (g[0] - m[0]) * (d[1] - m[1]);
    if (v == 0) return [1 / 0, 1 / 0];
    var w = (((d[0] - m[0]) * (d[0] + m[0]) + (d[1] - m[1]) * (d[1] + m[1])) / 2 * (g[1] - m[1]) - ((g[0] - m[0]) * (g[0] + m[0]) + (g[1] - m[1]) * (g[1] + m[1])) / 2 * (d[1] - m[1])) / v, h = (((g[0] - m[0]) * (g[0] + m[0]) + (g[1] - m[1]) * (g[1] + m[1])) / 2 * (d[0] - m[0]) - ((d[0] - m[0]) * (d[0] + m[0]) + (d[1] - m[1]) * (d[1] + m[1])) / 2 * (g[0] - m[0])) / v;
    return [w, h];
  }, a = function(d, g, m) {
    if (d[1] === g[1]) return [(d[0] + g[0]) / 2, (d[0] + g[0]) / 2];
    var v = (d[1] * g[0] - d[0] * g[1] + d[0] * m - g[0] * m + Math.sqrt((d[0] * d[0] + d[1] * d[1] - 2 * d[0] * g[0] + g[0] * g[0] - 2 * d[1] * g[1] + g[1] * g[1]) * (d[1] * g[1] - d[1] * m - g[1] * m + m * m))) / (d[1] - g[1]), w = (d[1] * g[0] - d[0] * g[1] + d[0] * m - g[0] * m - Math.sqrt((d[0] * d[0] + d[1] * d[1] - 2 * d[0] * g[0] + g[0] * g[0] - 2 * d[1] * g[1] + g[1] * g[1]) * (d[1] * g[1] - d[1] * m - g[1] * m + m * m))) / (d[1] - g[1]);
    return v < w ? [v, w] : [w, v];
  }, l = function(d, g) {
    var m = arguments.length <= 2 || arguments[2] === void 0 ? 1e-10 : arguments[2], v = g.ps[0] - d.ps[0], w = g.ps[1] - d.ps[1];
    if (d.m == 1 / 0) return d.hp * (g.m * v - w) <= m && g.vec[0] * v <= m;
    if (g.m == 1 / 0) return g.hp * (d.m * v - w) >= -m && d.vec[0] * v >= -m;
    var h = g.vec[0] * d.vec[1] - g.vec[1] * d.vec[0];
    if (h === 0) return !1;
    var p = (w * g.vec[0] - v * g.vec[1]) / h, y = (w * d.vec[0] - v * d.vec[1]) / h;
    return p >= -m && y >= m || p >= m && y >= -m;
  }, u = function(d, g) {
    return d.map(function(m) {
      return {
        x: m.x * g[0] + m.y * g[2] + g[4],
        y: m.x * g[1] + m.y * g[3] + g[5]
      };
    });
  }, c = function(d, g, m, v) {
    var w = Math.PI / 180, h = 1e-10, p = Math.cos(m * w), y = Math.sin(m * w), _ = [d * (v[0] * p + v[2] * y), d * (v[1] * p + v[3] * y), g * (-v[0] * y + v[2] * p), g * (-v[1] * y + v[3] * p)], S = _[0] * _[0] + _[2] * _[2], k = _[1] * _[1] + _[3] * _[3], P = ((_[0] - _[3]) * (_[0] - _[3]) + (_[2] + _[1]) * (_[2] + _[1])) * ((_[0] + _[3]) * (_[0] + _[3]) + (_[2] - _[1]) * (_[2] - _[1])), E = (S + k) / 2;
    if (P < h * E)
      return {
        rx: Math.sqrt(E),
        ry: Math.sqrt(E),
        ax: 0,
        isDegenerate: !1
      };
    var T = _[0] * _[1] + _[2] * _[3];
    P = Math.sqrt(P);
    var O = E + P / 2, b = E - P / 2, L = void 0, le = void 0, Ee = void 0;
    return L = Math.abs(T) < h && Math.abs(O - k) < h ? 90 : Math.atan(Math.abs(T) > Math.abs(O - k) ? (O - S) / T : T / (O - k)) * 180 / Math.PI, L >= 0 ? (le = Math.sqrt(O), Ee = Math.sqrt(b)) : (L += 90, le = Math.sqrt(b), Ee = Math.sqrt(O)), {
      rx: le,
      ry: Ee,
      ax: L,
      isDegenerate: le < h * Ee || Ee < h * le
    };
  };
  t.default = {
    distPointToPoint: i,
    distPointToParabol: s,
    circumCenter: o,
    parabolsCrossX: a,
    doHalflinesCross: l,
    matrixTransform: u,
    transformEllipse: c
  }, e.exports = t.default;
})(Ac, Ac.exports);
var H3 = Ac.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = /* @__PURE__ */ function() {
    function s(o, a) {
      var l = [], u = !0, c = !1, f = void 0;
      try {
        for (var d = o[Symbol.iterator](), g; !(u = (g = d.next()).done) && (l.push(g.value), !(a && l.length === a)); u = !0)
          ;
      } catch (m) {
        c = !0, f = m;
      } finally {
        try {
          !u && d.return && d.return();
        } finally {
          if (c) throw f;
        }
      }
      return l;
    }
    return function(o, a) {
      if (Array.isArray(o))
        return o;
      if (Symbol.iterator in Object(o))
        return s(o, a);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(), r = H3, i = function s(o) {
    var a = o || [], l = function(p, y) {
      var _ = p.slice(0, p.length);
      return _.push(y), _;
    }, u = function(p, y) {
      var _ = n(p, 2), S = _[0], k = _[1], P = n(y, 2), E = P[0], T = P[1];
      return S === E && k === T;
    }, c = function(p, y) {
      for (var _ = p.length; p.charAt(_ - 1) === "0"; )
        _ = _ - 1;
      return p.charAt(_ - 1) === "." && (_ = _ - 1), p.substr(0, _);
    }, f = function(p, y) {
      var _ = p.toFixed(y);
      return c(_);
    }, d = function(p) {
      var y = p.command, _ = p.params, S = _.map(function(k) {
        return f(k, 6);
      });
      return y + " " + S.join(" ");
    }, g = function(p, y) {
      var _ = p.command, S = p.params;
      switch (_) {
        case "M":
          return [S[0], S[1]];
        case "L":
          return [S[0], S[1]];
        case "H":
          return [S[0], y[1]];
        case "V":
          return [y[0], S[0]];
        case "Z":
          return null;
        case "C":
          return [S[4], S[5]];
        case "S":
          return [S[2], S[3]];
        case "Q":
          return [S[2], S[3]];
        case "T":
          return [S[0], S[1]];
        case "A":
          return [S[5], S[6]];
      }
    }, m = function(p, y, _) {
      var S = p.params, k = {
        V: function(E, T, O) {
          var b = [{ x: O[0], y: S[0] }], L = (0, r.matrixTransform)(b, T);
          return L[0].x === (0, r.matrixTransform)([{ x: O[0], y: O[1] }], T)[0].x ? {
            command: "V",
            params: [L[0].y]
          } : {
            command: "L",
            params: [L[0].x, L[0].y]
          };
        },
        H: function(E, T, O) {
          var b = [{ x: S[0], y: O[1] }], L = (0, r.matrixTransform)(b, T);
          return L[0].y === (0, r.matrixTransform)([{ x: O[0], y: O[1] }], T)[0].y ? {
            command: "H",
            params: [L[0].x]
          } : {
            command: "L",
            params: [L[0].x, L[0].y]
          };
        },
        A: function(E, T, O) {
          var b = (0, r.transformEllipse)(S[0], S[1], S[2], T), L = S[4];
          T[0] * T[3] - T[1] * T[2] < 0 && (L = L ? "0" : "1");
          var le = [{ x: S[5], y: S[6] }], Ee = (0, r.matrixTransform)(le, T);
          return b.isDegenerate ? {
            command: "L",
            params: [Ee[0].x, Ee[0].y]
          } : {
            command: "A",
            params: [b.rx, b.ry, b.ax, S[3], L, Ee[0].x, Ee[0].y]
          };
        },
        C: function(E, T, O) {
          var b = [{ x: S[0], y: S[1] }, { x: S[2], y: S[3] }, { x: S[4], y: S[5] }], L = (0, r.matrixTransform)(b, T);
          return {
            command: "C",
            params: [L[0].x, L[0].y, L[1].x, L[1].y, L[2].x, L[2].y]
          };
        },
        Z: function(E, T, O) {
          return {
            command: "Z",
            params: []
          };
        },
        default: function(E, T, O) {
          var b = [{ x: S[0], y: S[1] }], L = (0, r.matrixTransform)(b, T), le = E.params.slice(0, E.params.length);
          return le.splice(0, 2, L[0].x, L[0].y), {
            command: E.command,
            params: le
          };
        }
      };
      return k[p.command] ? k[p.command](p, y, _) : k.default(p, y, _);
    }, v = function(p, y) {
      return function(_) {
        var S = typeof _ == "object" ? p.map(function(k) {
          return _[k];
        }) : arguments;
        return y.apply(null, S);
      };
    }, w = function(p) {
      return s(l(a, p));
    };
    return {
      moveto: v(["x", "y"], function(h, p) {
        return w({
          command: "M",
          params: [h, p]
        });
      }),
      lineto: v(["x", "y"], function(h, p) {
        return w({
          command: "L",
          params: [h, p]
        });
      }),
      hlineto: v(["x"], function(h) {
        return w({
          command: "H",
          params: [h]
        });
      }),
      vlineto: v(["y"], function(h) {
        return w({
          command: "V",
          params: [h]
        });
      }),
      closepath: function() {
        return w({
          command: "Z",
          params: []
        });
      },
      curveto: v(["x1", "y1", "x2", "y2", "x", "y"], function(h, p, y, _, S, k) {
        return w({
          command: "C",
          params: [h, p, y, _, S, k]
        });
      }),
      smoothcurveto: v(["x2", "y2", "x", "y"], function(h, p, y, _) {
        return w({
          command: "S",
          params: [h, p, y, _]
        });
      }),
      qcurveto: v(["x1", "y1", "x", "y"], function(h, p, y, _) {
        return w({
          command: "Q",
          params: [h, p, y, _]
        });
      }),
      smoothqcurveto: v(["x", "y"], function(h, p) {
        return w({
          command: "T",
          params: [h, p]
        });
      }),
      arc: v(["rx", "ry", "xrot", "largeArcFlag", "sweepFlag", "x", "y"], function(h, p, y, _, S, k, P) {
        return w({
          command: "A",
          params: [h, p, y, _, S, k, P]
        });
      }),
      translate: v(["dx", "dy"], function() {
        var h = arguments.length <= 0 || arguments[0] === void 0 ? 0 : arguments[0], p = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1];
        if (h !== 0 || p !== 0) {
          var y = function() {
            var _ = [0, 0], S = [1, 0, 0, 1, h, p], k = a.map(function(P) {
              var E = m(P, S, _);
              return _ = g(P, _), E;
            });
            return {
              v: s(k)
            };
          }();
          if (typeof y == "object") return y.v;
        } else
          return s(a);
      }),
      rotate: v(["angle", "rx", "ry"], function(h) {
        var p = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1], y = arguments.length <= 2 || arguments[2] === void 0 ? 0 : arguments[2];
        if (h !== 0) {
          var _ = function() {
            var S = void 0, k = void 0, P = a;
            p !== 0 && y !== 0 && (S = [0, 0], k = [1, 0, 0, 1, -p, -y], P = P.map(function(b) {
              var L = m(b, k, S);
              return S = g(b, S), L;
            }));
            var E = h * Math.PI / 180, T = Math.cos(E), O = Math.sin(E);
            return S = [0, 0], k = [T, O, -O, T, 0, 0], P = P.map(function(b) {
              var L = m(b, k, S);
              return S = g(b, S), L;
            }), p !== 0 && y !== 0 && (S = [0, 0], k = [1, 0, 0, 1, p, y], P = P.map(function(b) {
              var L = m(b, k, S);
              return S = g(b, S), L;
            })), {
              v: s(P)
            };
          }();
          if (typeof _ == "object") return _.v;
        } else
          return s(a);
      }),
      scale: v(["sx", "sy"], function() {
        var h = arguments.length <= 0 || arguments[0] === void 0 ? 1 : arguments[0], p = arguments.length <= 1 || arguments[1] === void 0 ? h : arguments[1];
        return function() {
          if (h !== 1 || p !== 1) {
            var y = function() {
              var _ = [0, 0], S = [h, 0, 0, p, 0, 0], k = a.map(function(P) {
                var E = m(P, S, _);
                return _ = g(P, _), E;
              });
              return {
                v: s(k)
              };
            }();
            if (typeof y == "object") return y.v;
          } else
            return s(a);
        }();
      }),
      shearX: v(["angle"], function() {
        var h = arguments.length <= 0 || arguments[0] === void 0 ? 0 : arguments[0];
        if (h !== 0) {
          var p = function() {
            var y = [0, 0], _ = [1, 0, Math.tan(h * Math.PI / 180), 1, 0, 0], S = a.map(function(k) {
              var P = m(k, _, y);
              return y = g(k, y), P;
            });
            return {
              v: s(S)
            };
          }();
          if (typeof p == "object") return p.v;
        } else
          return s(a);
      }),
      shearY: v(["angle"], function() {
        var h = arguments.length <= 0 || arguments[0] === void 0 ? 0 : arguments[0];
        if (h !== 0) {
          var p = function() {
            var y = [0, 0], _ = [1, Math.tan(h * Math.PI / 180), 0, 1, 0, 0], S = a.map(function(k) {
              var P = m(k, _, y);
              return y = g(k, y), P;
            });
            return {
              v: s(S)
            };
          }();
          if (typeof p == "object") return p.v;
        } else
          return s(a);
      }),
      print: function() {
        return a.map(d).join(" ");
      },
      toString: function() {
        return (void 0).print();
      },
      points: function() {
        var p = [], y = [0, 0], _ = !0, S = !1, k = void 0;
        try {
          for (var P = a[Symbol.iterator](), E; !(_ = (E = P.next()).done); _ = !0) {
            var T = E.value, O = g(T, y);
            y = O, O && p.push(O);
          }
        } catch (b) {
          S = !0, k = b;
        } finally {
          try {
            !_ && P.return && P.return();
          } finally {
            if (S)
              throw k;
          }
        }
        return p;
      },
      instructions: function() {
        return a.slice(0, a.length);
      },
      connect: function(p) {
        var y = this.points(), _ = y[y.length - 1], S = p.points()[0], k = void 0;
        return a[a.length - 1].command !== "Z" ? (k = p.instructions().slice(1), u(_, S) || k.unshift({
          command: "L",
          params: S
        })) : k = p.instructions(), s(this.instructions().concat(k));
      }
    };
  };
  t.default = function() {
    return i();
  }, e.exports = t.default;
})(zp, zp.exports);
const q3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
class Xi extends od {
  constructor() {
    super(Xi.NAME), this.ROUTING_SCALING_FACTOR = 5, this.canvasMatrix = [], this.routingMatrix = [], this.hAdjustmentFactor = 0, this.vAdjustmentFactor = 0, this.calculateMatrixDimensions = () => {
      const t = Pt(this.engine.getModel().getNodes()).map((v) => ({
        x: v.getX(),
        width: v.width,
        y: v.getY(),
        height: v.height
      })), n = Pt(this.engine.getModel().getLinks()), r = Rt(n.map((v) => [v.getSourcePort(), v.getTargetPort()])).filter((v) => v !== null).map((v) => ({
        x: v.getX(),
        width: v.width,
        y: v.getY(),
        height: v.height
      })), i = Rt(n.map((v) => v.getPoints())).map((v) => ({
        // points don't have width/height, so let's just use 0
        x: v.getX(),
        width: 0,
        y: v.getY(),
        height: 0
      })), s = (v, w) => G3(w, (h, p) => h + nl(v, p, 0), 0), o = this.engine.getCanvas(), a = t3(t, r, i), l = Math.floor(Math.min(nl(Dp(a, "x"), "x", 0), 0) / this.ROUTING_SCALING_FACTOR) * this.ROUTING_SCALING_FACTOR, u = jp(a, (v) => s(v, ["x", "width"])), c = Math.max(s(u, ["x", "width"]), o.offsetWidth), f = Dp(a, "y"), d = Math.floor(Math.min(nl(f, "y", 0), 0) / this.ROUTING_SCALING_FACTOR) * this.ROUTING_SCALING_FACTOR, g = jp(a, (v) => s(v, ["y", "height"])), m = Math.max(s(g, ["y", "height"]), o.offsetHeight);
      return {
        width: Math.ceil(Math.abs(l) + c),
        hAdjustmentFactor: Math.abs(l) / this.ROUTING_SCALING_FACTOR + 1,
        height: Math.ceil(Math.abs(d) + m),
        vAdjustmentFactor: Math.abs(d) / this.ROUTING_SCALING_FACTOR + 1
      };
    }, this.markNodes = (t) => {
      Pt(this.engine.getModel().getNodes()).forEach((n) => {
        const r = Math.floor(n.getX() / this.ROUTING_SCALING_FACTOR), i = Math.ceil((n.getX() + n.width) / this.ROUTING_SCALING_FACTOR), s = Math.floor(n.getY() / this.ROUTING_SCALING_FACTOR), o = Math.ceil((n.getY() + n.height) / this.ROUTING_SCALING_FACTOR);
        for (let a = r - 1; a <= i + 1; a++)
          for (let l = s - 1; l < o + 1; l++)
            this.markMatrixPoint(t, this.translateRoutingX(a), this.translateRoutingY(l));
      });
    }, this.markPorts = (t) => {
      Rt(Pt(this.engine.getModel().getLinks()).map((r) => [].concat(r.getSourcePort(), r.getTargetPort()))).filter((r) => r !== null).forEach((r) => {
        const i = Math.floor(r.x / this.ROUTING_SCALING_FACTOR), s = Math.ceil((r.x + r.width) / this.ROUTING_SCALING_FACTOR), o = Math.floor(r.y / this.ROUTING_SCALING_FACTOR), a = Math.ceil((r.y + r.height) / this.ROUTING_SCALING_FACTOR);
        for (let l = i - 1; l <= s + 1; l++)
          for (let u = o - 1; u < a + 1; u++)
            this.markMatrixPoint(t, this.translateRoutingX(l), this.translateRoutingY(u));
      });
    }, this.markMatrixPoint = (t, n, r) => {
      t[r] !== void 0 && t[r][n] !== void 0 && (t[r][n] = 1);
    };
  }
  setDiagramEngine(t) {
    super.setDiagramEngine(t), t.getStateMachine().registerListener({
      stateChanged: (n) => {
        if (n.newState instanceof Yi) {
          const r = t.getActionEventBus().registerAction(new he({
            type: B.MOUSE_UP,
            fire: () => {
              this.calculateRoutingMatrix(), t.repaintCanvas(), r();
            }
          }));
        }
      }
    }), this.listener = t.registerListener({
      canvasReady: () => {
        u3(() => {
          this.calculateRoutingMatrix(), t.repaintCanvas();
        });
      }
    });
  }
  setFactoryBank(t) {
    super.setFactoryBank(t), !t && this.listener && this.listener.deregister();
  }
  generateReactWidget(t) {
    return C.createElement(VF, { diagramEngine: this.engine, link: t.model, factory: this });
  }
  generateModel(t) {
    return new fF();
  }
  /**
   * A representation of the canvas in the following format:
   *
   * +-----------------+
   * | 0 0 0 0 0 0 0 0 |
   * | 0 0 0 0 0 0 0 0 |
   * | 0 0 0 0 0 0 0 0 |
   * | 0 0 0 0 0 0 0 0 |
   * | 0 0 0 0 0 0 0 0 |
   * +-----------------+
   *
   * In which all walkable points are marked by zeros.
   * It uses @link{#ROUTING_SCALING_FACTOR} to reduce the matrix dimensions and improve performance.
   */
  getCanvasMatrix() {
    return this.canvasMatrix.length === 0 && this.calculateCanvasMatrix(), this.canvasMatrix;
  }
  calculateCanvasMatrix() {
    const { width: t, hAdjustmentFactor: n, height: r, vAdjustmentFactor: i } = this.calculateMatrixDimensions();
    this.hAdjustmentFactor = n, this.vAdjustmentFactor = i;
    const s = Math.ceil(t / this.ROUTING_SCALING_FACTOR), o = Math.ceil(r / this.ROUTING_SCALING_FACTOR);
    this.canvasMatrix = $3(0, o).map(() => new Array(s).fill(0));
  }
  /**
   * A representation of the canvas in the following format:
   *
   * +-----------------+
   * | 0 0 1 1 0 0 0 0 |
   * | 0 0 1 1 0 0 1 1 |
   * | 0 0 0 0 0 0 1 1 |
   * | 1 1 0 0 0 0 0 0 |
   * | 1 1 0 0 0 0 0 0 |
   * +-----------------+
   *
   * In which all points blocked by a node (and its ports) are
   * marked as 1; points were there is nothing (ie, free) receive 0.
   */
  getRoutingMatrix() {
    return this.routingMatrix.length === 0 && this.calculateRoutingMatrix(), this.routingMatrix;
  }
  calculateRoutingMatrix() {
    const t = Zy(this.getCanvasMatrix());
    this.markNodes(t), this.markPorts(t), this.routingMatrix = t;
  }
  /**
   * The routing matrix does not have negative indexes, but elements could be negatively positioned.
   * We use the functions below to translate back and forth between these coordinates, relying on the
   * calculated values of hAdjustmentFactor and vAdjustmentFactor.
   */
  translateRoutingX(t, n = !1) {
    return t + this.hAdjustmentFactor * (n ? -1 : 1);
  }
  translateRoutingY(t, n = !1) {
    return t + this.vAdjustmentFactor * (n ? -1 : 1);
  }
  generateDynamicPath(t) {
    let n = q3();
    return n = n.moveto(t[0][0] * this.ROUTING_SCALING_FACTOR, t[0][1] * this.ROUTING_SCALING_FACTOR), t.slice(1).forEach((r) => {
      n = n.lineto(r[0] * this.ROUTING_SCALING_FACTOR, r[1] * this.ROUTING_SCALING_FACTOR);
    }), n.print();
  }
}
Xi.NAME = "pathfinding";
class u0 extends C.Component {
  constructor(t) {
    super(t), this.handleMove = (function(n) {
      this.draggingEvent(n, this.dragging_index);
    }).bind(this), this.handleUp = (function(n) {
      this.setState({ canDrag: !1, selected: !1 }), window.removeEventListener("mousemove", this.handleMove), window.removeEventListener("mouseup", this.handleUp);
    }).bind(this), this.refPaths = [], this.state = {
      selected: !1,
      canDrag: !1
    }, this.dragging_index = 0;
  }
  componentDidUpdate() {
    this.props.link.setRenderedPaths(this.refPaths.map((t) => t.current));
  }
  componentDidMount() {
    this.props.link.setRenderedPaths(this.refPaths.map((t) => t.current));
  }
  componentWillUnmount() {
    this.props.link.setRenderedPaths([]);
  }
  generateLink(t, n, r) {
    const i = C.createRef();
    return this.refPaths.push(i), C.createElement(sd, { key: `link-${r}`, path: t, selected: this.state.selected, diagramEngine: this.props.diagramEngine, factory: this.props.diagramEngine.getFactoryForLink(this.props.link), link: this.props.link, forwardRef: i, onSelection: (s) => {
      this.setState({ selected: s });
    }, extras: n });
  }
  calculatePositions(t, n, r, i) {
    if (r === 0) {
      let o = new $t({
        link: this.props.link,
        position: new R(t[r].getX(), t[r].getY())
      });
      this.props.link.addPoint(o, r), this.dragging_index++;
      return;
    } else if (r === t.length - 2) {
      let o = new $t({
        link: this.props.link,
        position: new R(t[r + 1].getX(), t[r + 1].getY())
      });
      this.props.link.addPoint(o, r + 1);
      return;
    }
    if (r - 2 > 0) {
      let o = {
        [r - 2]: t[r - 2].getPosition(),
        [r + 1]: t[r + 1].getPosition(),
        [r - 1]: t[r - 1].getPosition()
      };
      if (Math.abs(o[r - 1][i] - o[r + 1][i]) < 5) {
        o[r - 2][i] = this.props.diagramEngine.getRelativeMousePoint(n)[i], o[r + 1][i] = this.props.diagramEngine.getRelativeMousePoint(n)[i], t[r - 2].setPosition(o[r - 2]), t[r + 1].setPosition(o[r + 1]), t[r - 1].remove(), t[r - 1].remove(), this.dragging_index--, this.dragging_index--;
        return;
      }
    }
    if (r + 2 < t.length - 2) {
      let o = {
        [r + 3]: t[r + 3].getPosition(),
        [r + 2]: t[r + 2].getPosition(),
        [r + 1]: t[r + 1].getPosition(),
        [r]: t[r].getPosition()
      };
      if (Math.abs(o[r + 1][i] - o[r + 2][i]) < 5) {
        o[r][i] = this.props.diagramEngine.getRelativeMousePoint(n)[i], o[r + 3][i] = this.props.diagramEngine.getRelativeMousePoint(n)[i], t[r].setPosition(o[r]), t[r + 3].setPosition(o[r + 3]), t[r + 1].remove(), t[r + 1].remove();
        return;
      }
    }
    let s = {
      [r]: t[r].getPosition(),
      [r + 1]: t[r + 1].getPosition()
    };
    s[r][i] = this.props.diagramEngine.getRelativeMousePoint(n)[i], s[r + 1][i] = this.props.diagramEngine.getRelativeMousePoint(n)[i], t[r].setPosition(s[r]), t[r + 1].setPosition(s[r + 1]);
  }
  draggingEvent(t, n) {
    let r = this.props.link.getPoints(), i = Math.abs(r[n].getX() - r[n + 1].getX()), s = Math.abs(r[n].getY() - r[n + 1].getY());
    i === 0 ? this.calculatePositions(r, t, n, "x") : s === 0 && this.calculatePositions(r, t, n, "y"), this.props.link.setFirstAndLastPathsDirection();
  }
  render() {
    let t = this.props.link.getPoints(), n = [], r = t[0], i = t[t.length - 1], s = !1;
    r.getX() > i.getX() && (r = t[t.length - 1], i = t[0], s = !0);
    let o = Math.abs(t[0].getY() - t[t.length - 1].getY());
    if (this.props.link.getTargetPort() === null && t.length === 2)
      [...Array(2)].forEach((a) => {
        this.props.link.addPoint(new $t({
          link: this.props.link,
          position: new R(r.getX(), i.getY())
        }), 1);
      }), this.props.link.setManuallyFirstAndLastPathsDirection(!0, !0);
    else if (this.props.link.getTargetPort() === null && this.props.link.getSourcePort() !== null)
      t[1].setPosition(i.getX() + (r.getX() - i.getX()) / 2, s ? i.getY() : r.getY()), t[2].setPosition(i.getX() + (r.getX() - i.getX()) / 2, s ? r.getY() : i.getY());
    else if (!this.state.canDrag && t.length > 2)
      for (let a = 1; a < t.length; a += t.length - 2)
        a - 1 === 0 ? this.props.link.getFirstPathXdirection() ? t[a].setPosition(t[a].getX(), t[a - 1].getY()) : t[a].setPosition(t[a - 1].getX(), t[a].getY()) : this.props.link.getLastPathXdirection() ? t[a - 1].setPosition(t[a - 1].getX(), t[a].getY()) : t[a - 1].setPosition(t[a].getX(), t[a - 1].getY());
    t.length === 2 && o !== 0 && !this.state.canDrag && this.props.link.addPoint(new $t({
      link: this.props.link,
      position: new R(r.getX(), i.getY())
    }));
    for (let a = 0; a < t.length - 1; a++)
      n.push(this.generateLink(id.generateLinePath(t[a], t[a + 1]), {
        "data-linkid": this.props.link.getID(),
        "data-point": a,
        onMouseDown: (l) => {
          l.button === 0 && (this.setState({ canDrag: !0 }), this.dragging_index = a, window.addEventListener("mousemove", this.handleMove), window.addEventListener("mouseup", this.handleUp));
        },
        onMouseEnter: (l) => {
          this.setState({ selected: !0 }), this.props.link.lastHoverIndexOfPath = a;
        }
      }, a));
    return this.refPaths = [], C.createElement("g", { "data-default-link-test": this.props.link.getOptions().testName }, n);
  }
}
u0.defaultProps = {
  color: "red",
  width: 3,
  link: null,
  smooth: !1,
  diagramEngine: null,
  factory: null
};
class Y3 extends wa {
  constructor(t = {}) {
    super(Object.assign({ type: ka.NAME }, t)), this.lastHoverIndexOfPath = 0, this._lastPathXdirection = !1, this._firstPathXdirection = !1;
  }
  setFirstAndLastPathsDirection() {
    let t = this.getPoints();
    for (let n = 1; n < t.length; n += t.length - 2) {
      let r = Math.abs(t[n].getX() - t[n - 1].getX()), i = Math.abs(t[n].getY() - t[n - 1].getY());
      n - 1 === 0 ? this._firstPathXdirection = r > i : this._lastPathXdirection = r > i;
    }
  }
  // @ts-ignore
  addPoint(t, n = 1) {
    return super.addPoint(t, n), this.setFirstAndLastPathsDirection(), t;
  }
  deserialize(t) {
    super.deserialize(t), this.setFirstAndLastPathsDirection();
  }
  setManuallyFirstAndLastPathsDirection(t, n) {
    this._firstPathXdirection = t, this._lastPathXdirection = n;
  }
  getLastPathXdirection() {
    return this._lastPathXdirection;
  }
  getFirstPathXdirection() {
    return this._firstPathXdirection;
  }
  setWidth(t) {
    this.options.width = t, this.fireEvent({ width: t }, "widthChanged");
  }
  setColor(t) {
    this.options.color = t, this.fireEvent({ color: t }, "colorChanged");
  }
}
class ka extends od {
  constructor() {
    super(ka.NAME);
  }
  generateModel(t) {
    return new Y3();
  }
  generateReactWidget(t) {
    return C.createElement(u0, { diagramEngine: this.engine, link: t.model, factory: this });
  }
}
ka.NAME = "rightAngle";
function fd(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var gl, Up;
function V3() {
  if (Up) return gl;
  Up = 1;
  var e = Ky, t = 4;
  function n(r) {
    return e(r, t);
  }
  return gl = n, gl;
}
var vl, Bp;
function c0() {
  return Bp || (Bp = 1, vl = Bf), vl;
}
var ml, Wp;
function X3() {
  if (Wp) return ml;
  Wp = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(r, i) {
    return r != null && t.call(r, i);
  }
  return ml = n, ml;
}
var yl, Gp;
function f0() {
  if (Gp) return yl;
  Gp = 1;
  var e = X3(), t = Ty;
  function n(r, i) {
    return r != null && t(r, i, e);
  }
  return yl = n, yl;
}
var wl, Hp;
function K3() {
  if (Hp) return wl;
  Hp = 1;
  var e = Mf, t = Or, n = Di, r = ie, i = Gt, s = _r, o = Bo, a = zi, l = "[object Map]", u = "[object Set]", c = Object.prototype, f = c.hasOwnProperty;
  function d(g) {
    if (g == null)
      return !0;
    if (i(g) && (r(g) || typeof g == "string" || typeof g.splice == "function" || s(g) || a(g) || n(g)))
      return !g.length;
    var m = t(g);
    if (m == l || m == u)
      return !g.size;
    if (o(g))
      return !e(g).length;
    for (var v in g)
      if (f.call(g, v))
        return !1;
    return !0;
  }
  return wl = d, wl;
}
var _l, qp;
function d0() {
  if (qp) return _l;
  qp = 1;
  function e(t) {
    return t === void 0;
  }
  return _l = e, _l;
}
var Sl, Yp;
function Q3() {
  if (Yp) return Sl;
  Yp = 1;
  var e = Uf, t = Hy, n = Af, r = vt, i = ta, s = ie, o = _r, a = Ui, l = Ke, u = zi;
  function c(f, d, g) {
    var m = s(f), v = m || o(f) || u(f);
    if (d = r(d), g == null) {
      var w = f && f.constructor;
      v ? g = m ? new w() : [] : l(f) ? g = a(w) ? t(i(f)) : {} : g = {};
    }
    return (v ? e : n)(f, function(h, p, y) {
      return d(g, h, p, y);
    }), g;
  }
  return Sl = c, Sl;
}
var kl, Vp;
function Z3() {
  if (Vp) return kl;
  Vp = 1;
  function e() {
  }
  return kl = e, kl;
}
var Pl, Xp;
function J3() {
  if (Xp) return Pl;
  Xp = 1;
  var e = wy, t = Z3(), n = Rf, r = 1 / 0, i = e && 1 / n(new e([, -0]))[1] == r ? function(s) {
    return new e(s);
  } : t;
  return Pl = i, Pl;
}
var El, Kp;
function eD() {
  if (Kp) return El;
  Kp = 1;
  var e = $f, t = k1, n = P1, r = Nf, i = J3(), s = Rf, o = 200;
  function a(l, u, c) {
    var f = -1, d = t, g = l.length, m = !0, v = [], w = v;
    if (c)
      m = !1, d = n;
    else if (g >= o) {
      var h = u ? null : i(l);
      if (h)
        return s(h);
      m = !1, d = r, w = new e();
    } else
      w = u ? [] : v;
    e:
      for (; ++f < g; ) {
        var p = l[f], y = u ? u(p) : p;
        if (p = c || p !== 0 ? p : 0, m && y === y) {
          for (var _ = w.length; _--; )
            if (w[_] === y)
              continue e;
          u && w.push(y), v.push(p);
        } else d(w, y, c) || (w !== v && w.push(y), v.push(p));
      }
    return v;
  }
  return El = a, El;
}
var Cl, Qp;
function tD() {
  if (Qp) return Cl;
  Qp = 1;
  var e = Gi, t = Nr, n = eD(), r = td, i = t(function(s) {
    return n(e(s, 1, r, !0));
  });
  return Cl = i, Cl;
}
var xl, Zp;
function at() {
  if (Zp) return xl;
  Zp = 1;
  var e;
  if (typeof fd == "function")
    try {
      e = {
        clone: V3(),
        constant: ed,
        each: c0(),
        filter: zf,
        has: f0(),
        isArray: ie,
        isEmpty: K3(),
        isFunction: Ui,
        isUndefined: d0(),
        keys: Ht,
        map: Qo,
        reduce: cd,
        size: z1,
        transform: Q3(),
        union: tD(),
        values: Wf
      };
    } catch {
    }
  return e || (e = window._), xl = e, xl;
}
var Ol, Jp;
function dd() {
  if (Jp) return Ol;
  Jp = 1;
  var e = at();
  Ol = i;
  var t = "\0", n = "\0", r = "";
  function i(c) {
    this._isDirected = e.has(c, "directed") ? c.directed : !0, this._isMultigraph = e.has(c, "multigraph") ? c.multigraph : !1, this._isCompound = e.has(c, "compound") ? c.compound : !1, this._label = void 0, this._defaultNodeLabelFn = e.constant(void 0), this._defaultEdgeLabelFn = e.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[n] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  i.prototype._nodeCount = 0, i.prototype._edgeCount = 0, i.prototype.isDirected = function() {
    return this._isDirected;
  }, i.prototype.isMultigraph = function() {
    return this._isMultigraph;
  }, i.prototype.isCompound = function() {
    return this._isCompound;
  }, i.prototype.setGraph = function(c) {
    return this._label = c, this;
  }, i.prototype.graph = function() {
    return this._label;
  }, i.prototype.setDefaultNodeLabel = function(c) {
    return e.isFunction(c) || (c = e.constant(c)), this._defaultNodeLabelFn = c, this;
  }, i.prototype.nodeCount = function() {
    return this._nodeCount;
  }, i.prototype.nodes = function() {
    return e.keys(this._nodes);
  }, i.prototype.sources = function() {
    var c = this;
    return e.filter(this.nodes(), function(f) {
      return e.isEmpty(c._in[f]);
    });
  }, i.prototype.sinks = function() {
    var c = this;
    return e.filter(this.nodes(), function(f) {
      return e.isEmpty(c._out[f]);
    });
  }, i.prototype.setNodes = function(c, f) {
    var d = arguments, g = this;
    return e.each(c, function(m) {
      d.length > 1 ? g.setNode(m, f) : g.setNode(m);
    }), this;
  }, i.prototype.setNode = function(c, f) {
    return e.has(this._nodes, c) ? (arguments.length > 1 && (this._nodes[c] = f), this) : (this._nodes[c] = arguments.length > 1 ? f : this._defaultNodeLabelFn(c), this._isCompound && (this._parent[c] = n, this._children[c] = {}, this._children[n][c] = !0), this._in[c] = {}, this._preds[c] = {}, this._out[c] = {}, this._sucs[c] = {}, ++this._nodeCount, this);
  }, i.prototype.node = function(c) {
    return this._nodes[c];
  }, i.prototype.hasNode = function(c) {
    return e.has(this._nodes, c);
  }, i.prototype.removeNode = function(c) {
    var f = this;
    if (e.has(this._nodes, c)) {
      var d = function(g) {
        f.removeEdge(f._edgeObjs[g]);
      };
      delete this._nodes[c], this._isCompound && (this._removeFromParentsChildList(c), delete this._parent[c], e.each(this.children(c), function(g) {
        f.setParent(g);
      }), delete this._children[c]), e.each(e.keys(this._in[c]), d), delete this._in[c], delete this._preds[c], e.each(e.keys(this._out[c]), d), delete this._out[c], delete this._sucs[c], --this._nodeCount;
    }
    return this;
  }, i.prototype.setParent = function(c, f) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (e.isUndefined(f))
      f = n;
    else {
      f += "";
      for (var d = f; !e.isUndefined(d); d = this.parent(d))
        if (d === c)
          throw new Error("Setting " + f + " as parent of " + c + " would create a cycle");
      this.setNode(f);
    }
    return this.setNode(c), this._removeFromParentsChildList(c), this._parent[c] = f, this._children[f][c] = !0, this;
  }, i.prototype._removeFromParentsChildList = function(c) {
    delete this._children[this._parent[c]][c];
  }, i.prototype.parent = function(c) {
    if (this._isCompound) {
      var f = this._parent[c];
      if (f !== n)
        return f;
    }
  }, i.prototype.children = function(c) {
    if (e.isUndefined(c) && (c = n), this._isCompound) {
      var f = this._children[c];
      if (f)
        return e.keys(f);
    } else {
      if (c === n)
        return this.nodes();
      if (this.hasNode(c))
        return [];
    }
  }, i.prototype.predecessors = function(c) {
    var f = this._preds[c];
    if (f)
      return e.keys(f);
  }, i.prototype.successors = function(c) {
    var f = this._sucs[c];
    if (f)
      return e.keys(f);
  }, i.prototype.neighbors = function(c) {
    var f = this.predecessors(c);
    if (f)
      return e.union(f, this.successors(c));
  }, i.prototype.isLeaf = function(c) {
    var f;
    return this.isDirected() ? f = this.successors(c) : f = this.neighbors(c), f.length === 0;
  }, i.prototype.filterNodes = function(c) {
    var f = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    f.setGraph(this.graph());
    var d = this;
    e.each(this._nodes, function(v, w) {
      c(w) && f.setNode(w, v);
    }), e.each(this._edgeObjs, function(v) {
      f.hasNode(v.v) && f.hasNode(v.w) && f.setEdge(v, d.edge(v));
    });
    var g = {};
    function m(v) {
      var w = d.parent(v);
      return w === void 0 || f.hasNode(w) ? (g[v] = w, w) : w in g ? g[w] : m(w);
    }
    return this._isCompound && e.each(f.nodes(), function(v) {
      f.setParent(v, m(v));
    }), f;
  }, i.prototype.setDefaultEdgeLabel = function(c) {
    return e.isFunction(c) || (c = e.constant(c)), this._defaultEdgeLabelFn = c, this;
  }, i.prototype.edgeCount = function() {
    return this._edgeCount;
  }, i.prototype.edges = function() {
    return e.values(this._edgeObjs);
  }, i.prototype.setPath = function(c, f) {
    var d = this, g = arguments;
    return e.reduce(c, function(m, v) {
      return g.length > 1 ? d.setEdge(m, v, f) : d.setEdge(m, v), v;
    }), this;
  }, i.prototype.setEdge = function() {
    var c, f, d, g, m = !1, v = arguments[0];
    typeof v == "object" && v !== null && "v" in v ? (c = v.v, f = v.w, d = v.name, arguments.length === 2 && (g = arguments[1], m = !0)) : (c = v, f = arguments[1], d = arguments[3], arguments.length > 2 && (g = arguments[2], m = !0)), c = "" + c, f = "" + f, e.isUndefined(d) || (d = "" + d);
    var w = a(this._isDirected, c, f, d);
    if (e.has(this._edgeLabels, w))
      return m && (this._edgeLabels[w] = g), this;
    if (!e.isUndefined(d) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(c), this.setNode(f), this._edgeLabels[w] = m ? g : this._defaultEdgeLabelFn(c, f, d);
    var h = l(this._isDirected, c, f, d);
    return c = h.v, f = h.w, Object.freeze(h), this._edgeObjs[w] = h, s(this._preds[f], c), s(this._sucs[c], f), this._in[f][w] = h, this._out[c][w] = h, this._edgeCount++, this;
  }, i.prototype.edge = function(c, f, d) {
    var g = arguments.length === 1 ? u(this._isDirected, arguments[0]) : a(this._isDirected, c, f, d);
    return this._edgeLabels[g];
  }, i.prototype.hasEdge = function(c, f, d) {
    var g = arguments.length === 1 ? u(this._isDirected, arguments[0]) : a(this._isDirected, c, f, d);
    return e.has(this._edgeLabels, g);
  }, i.prototype.removeEdge = function(c, f, d) {
    var g = arguments.length === 1 ? u(this._isDirected, arguments[0]) : a(this._isDirected, c, f, d), m = this._edgeObjs[g];
    return m && (c = m.v, f = m.w, delete this._edgeLabels[g], delete this._edgeObjs[g], o(this._preds[f], c), o(this._sucs[c], f), delete this._in[f][g], delete this._out[c][g], this._edgeCount--), this;
  }, i.prototype.inEdges = function(c, f) {
    var d = this._in[c];
    if (d) {
      var g = e.values(d);
      return f ? e.filter(g, function(m) {
        return m.v === f;
      }) : g;
    }
  }, i.prototype.outEdges = function(c, f) {
    var d = this._out[c];
    if (d) {
      var g = e.values(d);
      return f ? e.filter(g, function(m) {
        return m.w === f;
      }) : g;
    }
  }, i.prototype.nodeEdges = function(c, f) {
    var d = this.inEdges(c, f);
    if (d)
      return d.concat(this.outEdges(c, f));
  };
  function s(c, f) {
    c[f] ? c[f]++ : c[f] = 1;
  }
  function o(c, f) {
    --c[f] || delete c[f];
  }
  function a(c, f, d, g) {
    var m = "" + f, v = "" + d;
    if (!c && m > v) {
      var w = m;
      m = v, v = w;
    }
    return m + r + v + r + (e.isUndefined(g) ? t : g);
  }
  function l(c, f, d, g) {
    var m = "" + f, v = "" + d;
    if (!c && m > v) {
      var w = m;
      m = v, v = w;
    }
    var h = { v: m, w: v };
    return g && (h.name = g), h;
  }
  function u(c, f) {
    return a(c, f.v, f.w, f.name);
  }
  return Ol;
}
var Tl, eg;
function nD() {
  return eg || (eg = 1, Tl = "2.1.8"), Tl;
}
var Ml, tg;
function rD() {
  return tg || (tg = 1, Ml = {
    Graph: dd(),
    version: nD()
  }), Ml;
}
var Al, ng;
function iD() {
  if (ng) return Al;
  ng = 1;
  var e = at(), t = dd();
  Al = {
    write: n,
    read: s
  };
  function n(o) {
    var a = {
      options: {
        directed: o.isDirected(),
        multigraph: o.isMultigraph(),
        compound: o.isCompound()
      },
      nodes: r(o),
      edges: i(o)
    };
    return e.isUndefined(o.graph()) || (a.value = e.clone(o.graph())), a;
  }
  function r(o) {
    return e.map(o.nodes(), function(a) {
      var l = o.node(a), u = o.parent(a), c = { v: a };
      return e.isUndefined(l) || (c.value = l), e.isUndefined(u) || (c.parent = u), c;
    });
  }
  function i(o) {
    return e.map(o.edges(), function(a) {
      var l = o.edge(a), u = { v: a.v, w: a.w };
      return e.isUndefined(a.name) || (u.name = a.name), e.isUndefined(l) || (u.value = l), u;
    });
  }
  function s(o) {
    var a = new t(o.options).setGraph(o.value);
    return e.each(o.nodes, function(l) {
      a.setNode(l.v, l.value), l.parent && a.setParent(l.v, l.parent);
    }), e.each(o.edges, function(l) {
      a.setEdge({ v: l.v, w: l.w, name: l.name }, l.value);
    }), a;
  }
  return Al;
}
var bl, rg;
function sD() {
  if (rg) return bl;
  rg = 1;
  var e = at();
  bl = t;
  function t(n) {
    var r = {}, i = [], s;
    function o(a) {
      e.has(r, a) || (r[a] = !0, s.push(a), e.each(n.successors(a), o), e.each(n.predecessors(a), o));
    }
    return e.each(n.nodes(), function(a) {
      s = [], o(a), s.length && i.push(s);
    }), i;
  }
  return bl;
}
var Ll, ig;
function h0() {
  if (ig) return Ll;
  ig = 1;
  var e = at();
  Ll = t;
  function t() {
    this._arr = [], this._keyIndices = {};
  }
  return t.prototype.size = function() {
    return this._arr.length;
  }, t.prototype.keys = function() {
    return this._arr.map(function(n) {
      return n.key;
    });
  }, t.prototype.has = function(n) {
    return e.has(this._keyIndices, n);
  }, t.prototype.priority = function(n) {
    var r = this._keyIndices[n];
    if (r !== void 0)
      return this._arr[r].priority;
  }, t.prototype.min = function() {
    if (this.size() === 0)
      throw new Error("Queue underflow");
    return this._arr[0].key;
  }, t.prototype.add = function(n, r) {
    var i = this._keyIndices;
    if (n = String(n), !e.has(i, n)) {
      var s = this._arr, o = s.length;
      return i[n] = o, s.push({ key: n, priority: r }), this._decrease(o), !0;
    }
    return !1;
  }, t.prototype.removeMin = function() {
    this._swap(0, this._arr.length - 1);
    var n = this._arr.pop();
    return delete this._keyIndices[n.key], this._heapify(0), n.key;
  }, t.prototype.decrease = function(n, r) {
    var i = this._keyIndices[n];
    if (r > this._arr[i].priority)
      throw new Error("New priority is greater than current priority. Key: " + n + " Old: " + this._arr[i].priority + " New: " + r);
    this._arr[i].priority = r, this._decrease(i);
  }, t.prototype._heapify = function(n) {
    var r = this._arr, i = 2 * n, s = i + 1, o = n;
    i < r.length && (o = r[i].priority < r[o].priority ? i : o, s < r.length && (o = r[s].priority < r[o].priority ? s : o), o !== n && (this._swap(n, o), this._heapify(o)));
  }, t.prototype._decrease = function(n) {
    for (var r = this._arr, i = r[n].priority, s; n !== 0 && (s = n >> 1, !(r[s].priority < i)); )
      this._swap(n, s), n = s;
  }, t.prototype._swap = function(n, r) {
    var i = this._arr, s = this._keyIndices, o = i[n], a = i[r];
    i[n] = a, i[r] = o, s[a.key] = n, s[o.key] = r;
  }, Ll;
}
var $l, sg;
function p0() {
  if (sg) return $l;
  sg = 1;
  var e = at(), t = h0();
  $l = r;
  var n = e.constant(1);
  function r(s, o, a, l) {
    return i(
      s,
      String(o),
      a || n,
      l || function(u) {
        return s.outEdges(u);
      }
    );
  }
  function i(s, o, a, l) {
    var u = {}, c = new t(), f, d, g = function(m) {
      var v = m.v !== f ? m.v : m.w, w = u[v], h = a(m), p = d.distance + h;
      if (h < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + m + " Weight: " + h);
      p < w.distance && (w.distance = p, w.predecessor = f, c.decrease(v, p));
    };
    for (s.nodes().forEach(function(m) {
      var v = m === o ? 0 : Number.POSITIVE_INFINITY;
      u[m] = { distance: v }, c.add(m, v);
    }); c.size() > 0 && (f = c.removeMin(), d = u[f], d.distance !== Number.POSITIVE_INFINITY); )
      l(f).forEach(g);
    return u;
  }
  return $l;
}
var Nl, og;
function oD() {
  if (og) return Nl;
  og = 1;
  var e = p0(), t = at();
  Nl = n;
  function n(r, i, s) {
    return t.transform(r.nodes(), function(o, a) {
      o[a] = e(r, a, i, s);
    }, {});
  }
  return Nl;
}
var Rl, ag;
function g0() {
  if (ag) return Rl;
  ag = 1;
  var e = at();
  Rl = t;
  function t(n) {
    var r = 0, i = [], s = {}, o = [];
    function a(l) {
      var u = s[l] = {
        onStack: !0,
        lowlink: r,
        index: r++
      };
      if (i.push(l), n.successors(l).forEach(function(d) {
        e.has(s, d) ? s[d].onStack && (u.lowlink = Math.min(u.lowlink, s[d].index)) : (a(d), u.lowlink = Math.min(u.lowlink, s[d].lowlink));
      }), u.lowlink === u.index) {
        var c = [], f;
        do
          f = i.pop(), s[f].onStack = !1, c.push(f);
        while (l !== f);
        o.push(c);
      }
    }
    return n.nodes().forEach(function(l) {
      e.has(s, l) || a(l);
    }), o;
  }
  return Rl;
}
var Il, lg;
function aD() {
  if (lg) return Il;
  lg = 1;
  var e = at(), t = g0();
  Il = n;
  function n(r) {
    return e.filter(t(r), function(i) {
      return i.length > 1 || i.length === 1 && r.hasEdge(i[0], i[0]);
    });
  }
  return Il;
}
var Fl, ug;
function lD() {
  if (ug) return Fl;
  ug = 1;
  var e = at();
  Fl = n;
  var t = e.constant(1);
  function n(i, s, o) {
    return r(
      i,
      s || t,
      o || function(a) {
        return i.outEdges(a);
      }
    );
  }
  function r(i, s, o) {
    var a = {}, l = i.nodes();
    return l.forEach(function(u) {
      a[u] = {}, a[u][u] = { distance: 0 }, l.forEach(function(c) {
        u !== c && (a[u][c] = { distance: Number.POSITIVE_INFINITY });
      }), o(u).forEach(function(c) {
        var f = c.v === u ? c.w : c.v, d = s(c);
        a[u][f] = { distance: d, predecessor: u };
      });
    }), l.forEach(function(u) {
      var c = a[u];
      l.forEach(function(f) {
        var d = a[f];
        l.forEach(function(g) {
          var m = d[u], v = c[g], w = d[g], h = m.distance + v.distance;
          h < w.distance && (w.distance = h, w.predecessor = v.predecessor);
        });
      });
    }), a;
  }
  return Fl;
}
var Dl, cg;
function v0() {
  if (cg) return Dl;
  cg = 1;
  var e = at();
  Dl = t, t.CycleException = n;
  function t(r) {
    var i = {}, s = {}, o = [];
    function a(l) {
      if (e.has(s, l))
        throw new n();
      e.has(i, l) || (s[l] = !0, i[l] = !0, e.each(r.predecessors(l), a), delete s[l], o.push(l));
    }
    if (e.each(r.sinks(), a), e.size(i) !== r.nodeCount())
      throw new n();
    return o;
  }
  function n() {
  }
  return n.prototype = new Error(), Dl;
}
var jl, fg;
function uD() {
  if (fg) return jl;
  fg = 1;
  var e = v0();
  jl = t;
  function t(n) {
    try {
      e(n);
    } catch (r) {
      if (r instanceof e.CycleException)
        return !1;
      throw r;
    }
    return !0;
  }
  return jl;
}
var zl, dg;
function m0() {
  if (dg) return zl;
  dg = 1;
  var e = at();
  zl = t;
  function t(r, i, s) {
    e.isArray(i) || (i = [i]);
    var o = (r.isDirected() ? r.successors : r.neighbors).bind(r), a = [], l = {};
    return e.each(i, function(u) {
      if (!r.hasNode(u))
        throw new Error("Graph does not have node: " + u);
      n(r, u, s === "post", l, o, a);
    }), a;
  }
  function n(r, i, s, o, a, l) {
    e.has(o, i) || (o[i] = !0, s || l.push(i), e.each(a(i), function(u) {
      n(r, u, s, o, a, l);
    }), s && l.push(i));
  }
  return zl;
}
var Ul, hg;
function cD() {
  if (hg) return Ul;
  hg = 1;
  var e = m0();
  Ul = t;
  function t(n, r) {
    return e(n, r, "post");
  }
  return Ul;
}
var Bl, pg;
function fD() {
  if (pg) return Bl;
  pg = 1;
  var e = m0();
  Bl = t;
  function t(n, r) {
    return e(n, r, "pre");
  }
  return Bl;
}
var Wl, gg;
function dD() {
  if (gg) return Wl;
  gg = 1;
  var e = at(), t = dd(), n = h0();
  Wl = r;
  function r(i, s) {
    var o = new t(), a = {}, l = new n(), u;
    function c(d) {
      var g = d.v === u ? d.w : d.v, m = l.priority(g);
      if (m !== void 0) {
        var v = s(d);
        v < m && (a[g] = u, l.decrease(g, v));
      }
    }
    if (i.nodeCount() === 0)
      return o;
    e.each(i.nodes(), function(d) {
      l.add(d, Number.POSITIVE_INFINITY), o.setNode(d);
    }), l.decrease(i.nodes()[0], 0);
    for (var f = !1; l.size() > 0; ) {
      if (u = l.removeMin(), e.has(a, u))
        o.setEdge(u, a[u]);
      else {
        if (f)
          throw new Error("Input graph is not connected: " + i);
        f = !0;
      }
      i.nodeEdges(u).forEach(c);
    }
    return o;
  }
  return Wl;
}
var Gl, vg;
function hD() {
  return vg || (vg = 1, Gl = {
    components: sD(),
    dijkstra: p0(),
    dijkstraAll: oD(),
    findCycles: aD(),
    floydWarshall: lD(),
    isAcyclic: uD(),
    postorder: cD(),
    preorder: fD(),
    prim: dD(),
    tarjan: g0(),
    topsort: v0()
  }), Gl;
}
var Hl, mg;
function pD() {
  if (mg) return Hl;
  mg = 1;
  var e = rD();
  return Hl = {
    Graph: e.Graph,
    json: iD(),
    alg: hD(),
    version: e.version
  }, Hl;
}
var So;
if (typeof fd == "function")
  try {
    So = pD();
  } catch {
  }
So || (So = window.graphlib);
var Tt = So, ql, yg;
function gD() {
  if (yg) return ql;
  yg = 1;
  var e = Nr, t = Sr, n = Ar, r = Nn, i = Object.prototype, s = i.hasOwnProperty, o = e(function(a, l) {
    a = Object(a);
    var u = -1, c = l.length, f = c > 2 ? l[2] : void 0;
    for (f && n(l[0], l[1], f) && (c = 1); ++u < c; )
      for (var d = l[u], g = r(d), m = -1, v = g.length; ++m < v; ) {
        var w = g[m], h = a[w];
        (h === void 0 || t(h, i[w]) && !s.call(a, w)) && (a[w] = d[w]);
      }
    return a;
  });
  return ql = o, ql;
}
var Yl, wg;
function vD() {
  if (wg) return Yl;
  wg = 1;
  var e = vt, t = Gt, n = Ht;
  function r(i) {
    return function(s, o, a) {
      var l = Object(s);
      if (!t(s)) {
        var u = e(o);
        s = n(s), o = function(f) {
          return u(l[f], f, l);
        };
      }
      var c = i(s, o, a);
      return c > -1 ? l[u ? s[c] : c] : void 0;
    };
  }
  return Yl = r, Yl;
}
var mD = S1, yD = vt, wD = O1, _D = Math.max;
function SD(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = n == null ? 0 : wD(n);
  return i < 0 && (i = _D(r + i, 0)), mD(e, yD(t), i);
}
var kD = SD, Vl, _g;
function PD() {
  if (_g) return Vl;
  _g = 1;
  var e = vD(), t = kD, n = e(t);
  return Vl = n, Vl;
}
var Xl, Sg;
function y0() {
  if (Sg) return Xl;
  Sg = 1;
  var e = Gi;
  function t(n) {
    var r = n == null ? 0 : n.length;
    return r ? e(n, 1) : [];
  }
  return Xl = t, Xl;
}
var Kl, kg;
function ED() {
  if (kg) return Kl;
  kg = 1;
  var e = xf, t = $y, n = Nn;
  function r(i, s) {
    return i == null ? i : e(i, t(s), n);
  }
  return Kl = r, Kl;
}
var Ql, Pg;
function CD() {
  if (Pg) return Ql;
  Pg = 1;
  var e = Sa, t = a0, n = $n;
  function r(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return Ql = r, Ql;
}
var Zl, Eg;
function w0() {
  if (Eg) return Zl;
  Eg = 1;
  var e = Jo, t = Sr;
  function n(r, i, s) {
    (s !== void 0 && !t(r[i], s) || s === void 0 && !(i in r)) && e(r, i, s);
  }
  return Zl = n, Zl;
}
var Jl, Cg;
function xD() {
  if (Cg) return Jl;
  Cg = 1;
  var e = bn, t = ta, n = Ot, r = "[object Object]", i = Function.prototype, s = Object.prototype, o = i.toString, a = s.hasOwnProperty, l = o.call(Object);
  function u(c) {
    if (!n(c) || e(c) != r)
      return !1;
    var f = t(c);
    if (f === null)
      return !0;
    var d = a.call(f, "constructor") && f.constructor;
    return typeof d == "function" && d instanceof d && o.call(d) == l;
  }
  return Jl = u, Jl;
}
var eu, xg;
function _0() {
  if (xg) return eu;
  xg = 1;
  function e(t, n) {
    if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
      return t[n];
  }
  return eu = e, eu;
}
var tu, Og;
function OD() {
  if (Og) return tu;
  Og = 1;
  var e = Hi, t = Nn;
  function n(r) {
    return e(r, t(r));
  }
  return tu = n, tu;
}
var nu, Tg;
function TD() {
  if (Tg) return nu;
  Tg = 1;
  var e = w0(), t = By, n = Gy, r = Gf, i = qy, s = Di, o = ie, a = td, l = _r, u = Ui, c = Ke, f = xD(), d = zi, g = _0(), m = OD();
  function v(w, h, p, y, _, S, k) {
    var P = g(w, p), E = g(h, p), T = k.get(E);
    if (T) {
      e(w, p, T);
      return;
    }
    var O = S ? S(P, E, p + "", w, h, k) : void 0, b = O === void 0;
    if (b) {
      var L = o(E), le = !L && l(E), Ee = !L && !le && d(E);
      O = E, L || le || Ee ? o(P) ? O = P : a(P) ? O = r(P) : le ? (b = !1, O = t(E, !0)) : Ee ? (b = !1, O = n(E, !0)) : O = [] : f(E) || s(E) ? (O = P, s(P) ? O = m(P) : (!c(P) || u(P)) && (O = i(E))) : b = !1;
    }
    b && (k.set(E, O), _(O, E, y, S, k), k.delete(E)), e(w, p, O);
  }
  return nu = v, nu;
}
var ru, Mg;
function MD() {
  if (Mg) return ru;
  Mg = 1;
  var e = Yo, t = w0(), n = xf, r = TD(), i = Ke, s = Nn, o = _0();
  function a(l, u, c, f, d) {
    l !== u && n(u, function(g, m) {
      if (d || (d = new e()), i(g))
        r(l, u, m, c, a, f, d);
      else {
        var v = f ? f(o(l, m), g, m + "", l, u, d) : void 0;
        v === void 0 && (v = g), t(l, m, v);
      }
    }, s);
  }
  return ru = a, ru;
}
var iu, Ag;
function AD() {
  if (Ag) return iu;
  Ag = 1;
  var e = Nr, t = Ar;
  function n(r) {
    return e(function(i, s) {
      var o = -1, a = s.length, l = a > 1 ? s[a - 1] : void 0, u = a > 2 ? s[2] : void 0;
      for (l = r.length > 3 && typeof l == "function" ? (a--, l) : void 0, u && t(s[0], s[1], u) && (l = a < 3 ? void 0 : l, a = 1), i = Object(i); ++o < a; ) {
        var c = s[o];
        c && r(i, c, o, l);
      }
      return i;
    });
  }
  return iu = n, iu;
}
var su, bg;
function bD() {
  if (bg) return su;
  bg = 1;
  var e = MD(), t = AD(), n = t(function(r, i, s) {
    e(r, i, s);
  });
  return su = n, su;
}
var ou, Lg;
function LD() {
  if (Lg) return ou;
  Lg = 1;
  var e = Sa, t = s0, n = $n;
  function r(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return ou = r, ou;
}
var au, $g;
function $D() {
  if ($g) return au;
  $g = 1;
  var e = ea, t = Xo, n = Uo, r = Ke, i = Wi;
  function s(o, a, l, u) {
    if (!r(o))
      return o;
    a = t(a, o);
    for (var c = -1, f = a.length, d = f - 1, g = o; g != null && ++c < f; ) {
      var m = i(a[c]), v = l;
      if (m === "__proto__" || m === "constructor" || m === "prototype")
        return o;
      if (c != d) {
        var w = g[m];
        v = u ? u(w, m, g) : void 0, v === void 0 && (v = r(w) ? w : n(a[c + 1]) ? [] : {});
      }
      e(g, m, v), g = g[m];
    }
    return o;
  }
  return au = s, au;
}
var lu, Ng;
function ND() {
  if (Ng) return lu;
  Ng = 1;
  var e = Ko, t = $D(), n = Xo;
  function r(i, s, o) {
    for (var a = -1, l = s.length, u = {}; ++a < l; ) {
      var c = s[a], f = e(i, c);
      o(f, c) && t(u, n(c, i), f);
    }
    return u;
  }
  return lu = r, lu;
}
var uu, Rg;
function RD() {
  if (Rg) return uu;
  Rg = 1;
  var e = ND(), t = My;
  function n(r, i) {
    return e(r, i, function(s, o) {
      return t(r, o);
    });
  }
  return uu = n, uu;
}
var cu, Ig;
function ID() {
  if (Ig) return cu;
  Ig = 1;
  var e = y0(), t = E1, n = C1;
  function r(i) {
    return n(t(i, void 0, e), i + "");
  }
  return cu = r, cu;
}
var fu, Fg;
function FD() {
  if (Fg) return fu;
  Fg = 1;
  var e = RD(), t = ID(), n = t(function(r, i) {
    return r == null ? {} : e(r, i);
  });
  return fu = n, fu;
}
function DD(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
var jD = DD, Dg = Tr;
function zD(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, i = e === e, s = Dg(e), o = t !== void 0, a = t === null, l = t === t, u = Dg(t);
    if (!a && !u && !s && e > t || s && o && l && !a && !u || r && o && l || !n && l || !i)
      return 1;
    if (!r && !s && !u && e < t || u && n && i && !r && !s || a && n && i || !o && i || !l)
      return -1;
  }
  return 0;
}
var UD = zD, BD = UD;
function WD(e, t, n) {
  for (var r = -1, i = e.criteria, s = t.criteria, o = i.length, a = n.length; ++r < o; ) {
    var l = BD(i[r], s[r]);
    if (l) {
      if (r >= a)
        return l;
      var u = n[r];
      return l * (u == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var GD = WD, du = Mr, HD = Ko, qD = vt, YD = Ly, VD = jD, XD = ji, KD = GD, QD = $n, ZD = ie;
function JD(e, t, n) {
  t.length ? t = du(t, function(s) {
    return ZD(s) ? function(o) {
      return HD(o, s.length === 1 ? s[0] : s);
    } : s;
  }) : t = [QD];
  var r = -1;
  t = du(t, XD(qD));
  var i = YD(e, function(s, o, a) {
    var l = du(t, function(u) {
      return u(s);
    });
    return { criteria: l, index: ++r, value: s };
  });
  return VD(i, function(s, o) {
    return KD(s, o, n);
  });
}
var ej = JD, tj = Gi, nj = ej, rj = Nr, jg = Ar, ij = rj(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && jg(e, t[0], t[1]) ? t = [] : n > 2 && jg(t[0], t[1], t[2]) && (t = [t[0]]), nj(e, tj(t, 1), []);
}), sj = ij, hu, zg;
function oj() {
  if (zg) return hu;
  zg = 1;
  var e = xy, t = 0;
  function n(r) {
    var i = ++t;
    return e(r) + i;
  }
  return hu = n, hu;
}
var pu, Ug;
function aj() {
  if (Ug) return pu;
  Ug = 1;
  function e(t, n, r) {
    for (var i = -1, s = t.length, o = n.length, a = {}; ++i < s; ) {
      var l = i < o ? n[i] : void 0;
      r(a, t[i], l);
    }
    return a;
  }
  return pu = e, pu;
}
var gu, Bg;
function lj() {
  if (Bg) return gu;
  Bg = 1;
  var e = ea, t = aj();
  function n(r, i) {
    return t(r || [], i || [], e);
  }
  return gu = n, gu;
}
var ko;
if (typeof fd == "function")
  try {
    ko = {
      cloneDeep: Qy,
      constant: ed,
      defaults: gD(),
      each: c0(),
      filter: zf,
      find: PD(),
      flatten: y0(),
      forEach: Bf,
      forIn: ED(),
      has: f0(),
      isUndefined: d0(),
      last: jy,
      map: Qo,
      mapValues: y1,
      max: CD(),
      merge: bD(),
      min: LD(),
      minBy: o0,
      now: Ny,
      pick: FD(),
      range: l0,
      reduce: cd,
      sortBy: sj,
      uniqueId: oj(),
      values: Wf,
      zipObject: lj()
    };
  } catch {
  }
ko || (ko = window._);
var Rr = ko;
function hd() {
  var e = {};
  e._next = e._prev = e, this._sentinel = e;
}
hd.prototype.dequeue = function() {
  var e = this._sentinel, t = e._prev;
  if (t !== e)
    return S0(t), t;
};
hd.prototype.enqueue = function(e) {
  var t = this._sentinel;
  e._prev && e._next && S0(e), e._next = t._next, t._next._prev = e, t._next = e, e._prev = t;
};
hd.prototype.toString = function() {
  for (var e = [], t = this._sentinel, n = t._prev; n !== t; )
    e.push(JSON.stringify(n, uj)), n = n._prev;
  return "[" + e.join(", ") + "]";
};
function S0(e) {
  e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev;
}
function uj(e, t) {
  if (e !== "_next" && e !== "_prev")
    return t;
}
var cj = Rr;
Tt.Graph;
cj.constant(1);
var U = Rr, k0 = Tt.Graph, gr = {
  addDummyNode: P0,
  simplify: fj,
  asNonCompoundGraph: dj,
  successorWeights: hj,
  predecessorWeights: pj,
  intersectRect: gj,
  buildLayerMatrix: vj,
  normalizeRanks: mj,
  removeEmptyRanks: yj,
  addBorderNode: wj,
  maxRank: E0,
  partition: _j,
  time: Sj,
  notime: kj
};
function P0(e, t, n, r) {
  var i;
  do
    i = U.uniqueId(r);
  while (e.hasNode(i));
  return n.dummy = t, e.setNode(i, n), i;
}
function fj(e) {
  var t = new k0().setGraph(e.graph());
  return U.forEach(e.nodes(), function(n) {
    t.setNode(n, e.node(n));
  }), U.forEach(e.edges(), function(n) {
    var r = t.edge(n.v, n.w) || { weight: 0, minlen: 1 }, i = e.edge(n);
    t.setEdge(n.v, n.w, {
      weight: r.weight + i.weight,
      minlen: Math.max(r.minlen, i.minlen)
    });
  }), t;
}
function dj(e) {
  var t = new k0({ multigraph: e.isMultigraph() }).setGraph(e.graph());
  return U.forEach(e.nodes(), function(n) {
    e.children(n).length || t.setNode(n, e.node(n));
  }), U.forEach(e.edges(), function(n) {
    t.setEdge(n, e.edge(n));
  }), t;
}
function hj(e) {
  var t = U.map(e.nodes(), function(n) {
    var r = {};
    return U.forEach(e.outEdges(n), function(i) {
      r[i.w] = (r[i.w] || 0) + e.edge(i).weight;
    }), r;
  });
  return U.zipObject(e.nodes(), t);
}
function pj(e) {
  var t = U.map(e.nodes(), function(n) {
    var r = {};
    return U.forEach(e.inEdges(n), function(i) {
      r[i.v] = (r[i.v] || 0) + e.edge(i).weight;
    }), r;
  });
  return U.zipObject(e.nodes(), t);
}
function gj(e, t) {
  var n = e.x, r = e.y, i = t.x - n, s = t.y - r, o = e.width / 2, a = e.height / 2;
  if (!i && !s)
    throw new Error("Not possible to find intersection inside of the rectangle");
  var l, u;
  return Math.abs(s) * o > Math.abs(i) * a ? (s < 0 && (a = -a), l = a * i / s, u = a) : (i < 0 && (o = -o), l = o, u = o * s / i), { x: n + l, y: r + u };
}
function vj(e) {
  var t = U.map(U.range(E0(e) + 1), function() {
    return [];
  });
  return U.forEach(e.nodes(), function(n) {
    var r = e.node(n), i = r.rank;
    U.isUndefined(i) || (t[i][r.order] = n);
  }), t;
}
function mj(e) {
  var t = U.min(U.map(e.nodes(), function(n) {
    return e.node(n).rank;
  }));
  U.forEach(e.nodes(), function(n) {
    var r = e.node(n);
    U.has(r, "rank") && (r.rank -= t);
  });
}
function yj(e) {
  var t = U.min(U.map(e.nodes(), function(s) {
    return e.node(s).rank;
  })), n = [];
  U.forEach(e.nodes(), function(s) {
    var o = e.node(s).rank - t;
    n[o] || (n[o] = []), n[o].push(s);
  });
  var r = 0, i = e.graph().nodeRankFactor;
  U.forEach(n, function(s, o) {
    U.isUndefined(s) && o % i !== 0 ? --r : r && U.forEach(s, function(a) {
      e.node(a).rank += r;
    });
  });
}
function wj(e, t, n, r) {
  var i = {
    width: 0,
    height: 0
  };
  return arguments.length >= 4 && (i.rank = n, i.order = r), P0(e, "border", i, t);
}
function E0(e) {
  return U.max(U.map(e.nodes(), function(t) {
    var n = e.node(t).rank;
    if (!U.isUndefined(n))
      return n;
  }));
}
function _j(e, t) {
  var n = { lhs: [], rhs: [] };
  return U.forEach(e, function(r) {
    t(r) ? n.lhs.push(r) : n.rhs.push(r);
  }), n;
}
function Sj(e, t) {
  var n = U.now();
  try {
    return t();
  } finally {
    console.log(e + " time: " + (U.now() - n) + "ms");
  }
}
function kj(e, t) {
  return t();
}
var Ss = Rr, Pa = {
  longestPath: Pj,
  slack: Ej
};
function Pj(e) {
  var t = {};
  function n(r) {
    var i = e.node(r);
    if (Ss.has(t, r))
      return i.rank;
    t[r] = !0;
    var s = Ss.min(Ss.map(e.outEdges(r), function(o) {
      return n(o.w) - e.edge(o).minlen;
    }));
    return (s === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
    s === void 0 || // return value of _.map([]) for Lodash 4
    s === null) && (s = 0), i.rank = s;
  }
  Ss.forEach(e.sources(), n);
}
function Ej(e, t) {
  return e.node(t.w).rank - e.node(t.v).rank - e.edge(t).minlen;
}
var Po = Rr, Cj = Tt.Graph, Eo = Pa.slack, xj = Oj;
function Oj(e) {
  var t = new Cj({ directed: !1 }), n = e.nodes()[0], r = e.nodeCount();
  t.setNode(n, {});
  for (var i, s; Tj(t, e) < r; )
    i = Mj(t, e), s = t.hasNode(i.v) ? Eo(e, i) : -Eo(e, i), Aj(t, e, s);
  return t;
}
function Tj(e, t) {
  function n(r) {
    Po.forEach(t.nodeEdges(r), function(i) {
      var s = i.v, o = r === s ? i.w : s;
      !e.hasNode(o) && !Eo(t, i) && (e.setNode(o, {}), e.setEdge(r, o, {}), n(o));
    });
  }
  return Po.forEach(e.nodes(), n), e.nodeCount();
}
function Mj(e, t) {
  return Po.minBy(t.edges(), function(n) {
    if (e.hasNode(n.v) !== e.hasNode(n.w))
      return Eo(t, n);
  });
}
function Aj(e, t, n) {
  Po.forEach(e.nodes(), function(r) {
    t.node(r).rank += n;
  });
}
var Bt = Rr, bj = xj, Lj = Pa.slack, $j = Pa.longestPath, Nj = Tt.alg.preorder, Rj = Tt.alg.postorder, Ij = gr.simplify;
Ir.initLowLimValues = gd;
Ir.initCutValues = pd;
Ir.calcCutValue = C0;
Ir.leaveEdge = O0;
Ir.enterEdge = T0;
Ir.exchangeEdges = M0;
function Ir(e) {
  e = Ij(e), $j(e);
  var t = bj(e);
  gd(t), pd(t, e);
  for (var n, r; n = O0(t); )
    r = T0(t, e, n), M0(t, e, n, r);
}
function pd(e, t) {
  var n = Rj(e, e.nodes());
  n = n.slice(0, n.length - 1), Bt.forEach(n, function(r) {
    Fj(e, t, r);
  });
}
function Fj(e, t, n) {
  var r = e.node(n), i = r.parent;
  e.edge(n, i).cutvalue = C0(e, t, n);
}
function C0(e, t, n) {
  var r = e.node(n), i = r.parent, s = !0, o = t.edge(n, i), a = 0;
  return o || (s = !1, o = t.edge(i, n)), a = o.weight, Bt.forEach(t.nodeEdges(n), function(l) {
    var u = l.v === n, c = u ? l.w : l.v;
    if (c !== i) {
      var f = u === s, d = t.edge(l).weight;
      if (a += f ? d : -d, jj(e, n, c)) {
        var g = e.edge(n, c).cutvalue;
        a += f ? -g : g;
      }
    }
  }), a;
}
function gd(e, t) {
  arguments.length < 2 && (t = e.nodes()[0]), x0(e, {}, 1, t);
}
function x0(e, t, n, r, i) {
  var s = n, o = e.node(r);
  return t[r] = !0, Bt.forEach(e.neighbors(r), function(a) {
    Bt.has(t, a) || (n = x0(e, t, n, a, r));
  }), o.low = s, o.lim = n++, i ? o.parent = i : delete o.parent, n;
}
function O0(e) {
  return Bt.find(e.edges(), function(t) {
    return e.edge(t).cutvalue < 0;
  });
}
function T0(e, t, n) {
  var r = n.v, i = n.w;
  t.hasEdge(r, i) || (r = n.w, i = n.v);
  var s = e.node(r), o = e.node(i), a = s, l = !1;
  s.lim > o.lim && (a = o, l = !0);
  var u = Bt.filter(t.edges(), function(c) {
    return l === Wg(e, e.node(c.v), a) && l !== Wg(e, e.node(c.w), a);
  });
  return Bt.minBy(u, function(c) {
    return Lj(t, c);
  });
}
function M0(e, t, n, r) {
  var i = n.v, s = n.w;
  e.removeEdge(i, s), e.setEdge(r.v, r.w, {}), gd(e), pd(e, t), Dj(e, t);
}
function Dj(e, t) {
  var n = Bt.find(e.nodes(), function(i) {
    return !t.node(i).parent;
  }), r = Nj(e, n);
  r = r.slice(1), Bt.forEach(r, function(i) {
    var s = e.node(i).parent, o = t.edge(i, s), a = !1;
    o || (o = t.edge(s, i), a = !0), t.node(i).rank = t.node(s).rank + (a ? o.minlen : -o.minlen);
  });
}
function jj(e, t, n) {
  return e.hasEdge(t, n);
}
function Wg(e, t, n) {
  return n.low <= t.lim && t.lim <= n.lim;
}
var zj = Pa;
zj.longestPath;
Tt.Graph;
Tt.Graph;
var $ = Rr, Uj = Tt.Graph, Bj = gr, Wj = {
  positionX: e4
};
function Gj(e, t) {
  var n = {};
  function r(i, s) {
    var o = 0, a = 0, l = i.length, u = $.last(s);
    return $.forEach(s, function(c, f) {
      var d = qj(e, c), g = d ? e.node(d).order : l;
      (d || c === u) && ($.forEach(s.slice(a, f + 1), function(m) {
        $.forEach(e.predecessors(m), function(v) {
          var w = e.node(v), h = w.order;
          (h < o || g < h) && !(w.dummy && e.node(m).dummy) && A0(n, v, m);
        });
      }), a = f + 1, o = g);
    }), s;
  }
  return $.reduce(t, r), n;
}
function Hj(e, t) {
  var n = {};
  function r(s, o, a, l, u) {
    var c;
    $.forEach($.range(o, a), function(f) {
      c = s[f], e.node(c).dummy && $.forEach(e.predecessors(c), function(d) {
        var g = e.node(d);
        g.dummy && (g.order < l || g.order > u) && A0(n, d, c);
      });
    });
  }
  function i(s, o) {
    var a = -1, l, u = 0;
    return $.forEach(o, function(c, f) {
      if (e.node(c).dummy === "border") {
        var d = e.predecessors(c);
        d.length && (l = e.node(d[0]).order, r(o, u, f, a, l), u = f, a = l);
      }
      r(o, u, o.length, l, s.length);
    }), o;
  }
  return $.reduce(t, i), n;
}
function qj(e, t) {
  if (e.node(t).dummy)
    return $.find(e.predecessors(t), function(n) {
      return e.node(n).dummy;
    });
}
function A0(e, t, n) {
  if (t > n) {
    var r = t;
    t = n, n = r;
  }
  var i = e[t];
  i || (e[t] = i = {}), i[n] = !0;
}
function Yj(e, t, n) {
  if (t > n) {
    var r = t;
    t = n, n = r;
  }
  return $.has(e[t], n);
}
function Vj(e, t, n, r) {
  var i = {}, s = {}, o = {};
  return $.forEach(t, function(a) {
    $.forEach(a, function(l, u) {
      i[l] = l, s[l] = l, o[l] = u;
    });
  }), $.forEach(t, function(a) {
    var l = -1;
    $.forEach(a, function(u) {
      var c = r(u);
      if (c.length) {
        c = $.sortBy(c, function(v) {
          return o[v];
        });
        for (var f = (c.length - 1) / 2, d = Math.floor(f), g = Math.ceil(f); d <= g; ++d) {
          var m = c[d];
          s[u] === u && l < o[m] && !Yj(n, u, m) && (s[m] = u, s[u] = i[u] = i[m], l = o[m]);
        }
      }
    });
  }), { root: i, align: s };
}
function Xj(e, t, n, r, i) {
  var s = {}, o = Kj(e, t, n, i), a = i ? "borderLeft" : "borderRight";
  function l(f, d) {
    for (var g = o.nodes(), m = g.pop(), v = {}; m; )
      v[m] ? f(m) : (v[m] = !0, g.push(m), g = g.concat(d(m))), m = g.pop();
  }
  function u(f) {
    s[f] = o.inEdges(f).reduce(function(d, g) {
      return Math.max(d, s[g.v] + o.edge(g));
    }, 0);
  }
  function c(f) {
    var d = o.outEdges(f).reduce(function(m, v) {
      return Math.min(m, s[v.w] - o.edge(v));
    }, Number.POSITIVE_INFINITY), g = e.node(f);
    d !== Number.POSITIVE_INFINITY && g.borderType !== a && (s[f] = Math.max(s[f], d));
  }
  return l(u, o.predecessors.bind(o)), l(c, o.successors.bind(o)), $.forEach(r, function(f) {
    s[f] = s[n[f]];
  }), s;
}
function Kj(e, t, n, r) {
  var i = new Uj(), s = e.graph(), o = t4(s.nodesep, s.edgesep, r);
  return $.forEach(t, function(a) {
    var l;
    $.forEach(a, function(u) {
      var c = n[u];
      if (i.setNode(c), l) {
        var f = n[l], d = i.edge(f, c);
        i.setEdge(f, c, Math.max(o(e, u, l), d || 0));
      }
      l = u;
    });
  }), i;
}
function Qj(e, t) {
  return $.minBy($.values(t), function(n) {
    var r = Number.NEGATIVE_INFINITY, i = Number.POSITIVE_INFINITY;
    return $.forIn(n, function(s, o) {
      var a = n4(e, o) / 2;
      r = Math.max(s + a, r), i = Math.min(s - a, i);
    }), r - i;
  });
}
function Zj(e, t) {
  var n = $.values(t), r = $.min(n), i = $.max(n);
  $.forEach(["u", "d"], function(s) {
    $.forEach(["l", "r"], function(o) {
      var a = s + o, l = e[a], u;
      if (l !== t) {
        var c = $.values(l);
        u = o === "l" ? r - $.min(c) : i - $.max(c), u && (e[a] = $.mapValues(l, function(f) {
          return f + u;
        }));
      }
    });
  });
}
function Jj(e, t) {
  return $.mapValues(e.ul, function(n, r) {
    if (t)
      return e[t.toLowerCase()][r];
    var i = $.sortBy($.map(e, r));
    return (i[1] + i[2]) / 2;
  });
}
function e4(e) {
  var t = Bj.buildLayerMatrix(e), n = $.merge(
    Gj(e, t),
    Hj(e, t)
  ), r = {}, i;
  $.forEach(["u", "d"], function(o) {
    i = o === "u" ? t : $.values(t).reverse(), $.forEach(["l", "r"], function(a) {
      a === "r" && (i = $.map(i, function(f) {
        return $.values(f).reverse();
      }));
      var l = (o === "u" ? e.predecessors : e.successors).bind(e), u = Vj(e, i, n, l), c = Xj(
        e,
        i,
        u.root,
        u.align,
        a === "r"
      );
      a === "r" && (c = $.mapValues(c, function(f) {
        return -f;
      })), r[o + a] = c;
    });
  });
  var s = Qj(e, r);
  return Zj(r, s), Jj(r, e.graph().align);
}
function t4(e, t, n) {
  return function(r, i, s) {
    var o = r.node(i), a = r.node(s), l = 0, u;
    if (l += o.width / 2, $.has(o, "labelpos"))
      switch (o.labelpos.toLowerCase()) {
        case "l":
          u = -o.width / 2;
          break;
        case "r":
          u = o.width / 2;
          break;
      }
    if (u && (l += n ? u : -u), u = 0, l += (o.dummy ? t : e) / 2, l += (a.dummy ? t : e) / 2, l += a.width / 2, $.has(a, "labelpos"))
      switch (a.labelpos.toLowerCase()) {
        case "l":
          u = a.width / 2;
          break;
        case "r":
          u = -a.width / 2;
          break;
      }
    return u && (l += n ? u : -u), u = 0, l;
  };
}
function n4(e, t) {
  return e.node(t).width;
}
Wj.positionX;
gr.normalizeRanks;
gr.removeEmptyRanks;
Tt.Graph;
Tt.Graph;
gr.time, gr.notime;
const r4 = (e = {}) => {
  const t = new nF(e);
  return t.getLayerFactories().registerFactory(new eI()), t.getLayerFactories().registerFactory(new $R()), t.getLayerFactories().registerFactory(new dN()), t.getLabelFactories().registerFactory(new iF()), t.getNodeFactories().registerFactory(new uF()), t.getLinkFactories().registerFactory(new od()), t.getLinkFactories().registerFactory(new Xi()), t.getPortFactories().registerFactory(new cF()), t.getStateMachine().pushState(new tF()), t;
}, Li = {
  uiIn: { label: "Infraestructura · entrada (UI y contratos)", color: "rgb(37, 99, 235)" },
  app: { label: "Aplicación (puertos y casos de uso)", color: "rgb(22, 163, 74)" },
  domain: { label: "Dominio (modelo y reglas)", color: "rgb(202, 138, 4)" },
  infraOut: { label: "Infraestructura · salida (persistencia, seguridad)", color: "rgb(147, 51, 234)" },
  config: { label: "Configuración Spring (@Bean)", color: "rgb(100, 116, 139)" },
  core: { label: "core-module (contratos y base común)", color: "rgb(13, 148, 136)" },
  team: { label: "Tu módulo (catálogo, pedidos, entregas, pagos)", color: "rgb(220, 38, 38)" },
  system: { label: "delivery-system (ensambla la aplicación)", color: "rgb(234, 88, 12)" }
}, Oe = "user-module/src/main/java/org/jala/edu/user/", ks = "core-module/src/main/java/org/jala/edu/core/", Gg = [
  {
    id: "hexagonal",
    title: "1 · Hexagonal de user-module",
    intro: "Las dependencias apuntan hacia el centro: la UI y los adaptadores conocen a la aplicación, la aplicación conoce al dominio, y el dominio no conoce a nadie. Los adaptadores de salida implementan los puertos que define la aplicación.",
    nodes: [
      {
        id: "ui",
        layer: "uiIn",
        x: 20,
        y: 40,
        name: "UI JavaFX",
        items: ["LoginController", "ListUsersController", "CreateUserController", "*.fxml"],
        file: Oe + "infrastructure/adapter/in/ui/",
        what: "Controladores de pantalla (Spring @Component @Scope(PROTOTYPE)) y sus FXML. Solo leen el formulario, arman el command y llaman al caso de uso en segundo plano con BackgroundTasks.",
        copy: "En tu módulo: infrastructure/adapter/in/ui/. Inyecta los casos de uso y CurrentUserService por constructor (@RequiredArgsConstructor). Nunca accedas al repositorio desde un controlador."
      },
      {
        id: "contractIn",
        layer: "uiIn",
        x: 20,
        y: 300,
        name: "Adaptadores de contrato",
        items: ["UserServiceAdapter", "SessionCurrentUserService"],
        file: Oe + "infrastructure/adapter/in/contract/",
        what: "Implementan los contratos de core (UserService, CurrentUserService) para que otros módulos los usen sin depender de user-module. Traducen los tipos de core (UserRole de core) a los del dominio.",
        copy: "Si tu equipo es dueño de un contrato (CatalogService, OrderService, PaymentService), crea aquí su adaptador y regístralo como @Bean: reemplaza solo al fallback de core."
      },
      {
        id: "portIn",
        layer: "app",
        x: 360,
        y: 40,
        name: "Puertos de entrada",
        items: ["LoginCommand", "ChangeUserStatusCommand", "CheckUserAccessQuery", "CreateUserCommand"],
        file: Oe + "application/port/in/",
        what: "Records inmutables con los datos de entrada de cada caso de uso. Un command cambia estado; una query solo consulta.",
        copy: "Un record por caso de uso en application/port/in/. Valida en el dominio, no aquí."
      },
      {
        id: "usecase",
        layer: "app",
        x: 360,
        y: 250,
        name: "Casos de uso",
        items: ["LoginUseCase", "ChangeUserStatusUseCase", "CheckUserAccessUseCase", "ActiveAdminRule"],
        file: Oe + "application/usecase/",
        what: "Clases Java puras (sin anotaciones de Spring) que implementan UseCase<Input, Output> de core. Orquestan: buscan en el puerto de salida, aplican reglas del dominio y guardan.",
        copy: "Una clase por historia en application/usecase/. Recibe los puertos por constructor. Aquí va la validación de permisos con UserService.isActiveWithRole (D-07)."
      },
      {
        id: "domain",
        layer: "domain",
        x: 700,
        y: 120,
        name: "Dominio",
        items: ["User", "Email · Password · PhoneNumber", "UserRole · UserStatus", "excepciones"],
        file: Oe + "domain/",
        what: "El modelo y sus reglas: User se activa o desactiva, Email y PhoneNumber validan su formato, Password exige 8 caracteres. Las excepciones extienden DomainException, NotFoundException o ConflictException de core.",
        copy: "Tu modelo extiende BaseModel<ID> de core. Las reglas viven en el modelo y en value objects (records que validan en su constructor)."
      },
      {
        id: "portOut",
        layer: "app",
        x: 700,
        y: 380,
        name: "Puertos de salida",
        items: ["UserRepositoryPort", "PasswordHasher"],
        file: Oe + "application/port/out/",
        what: "Interfaces que la aplicación necesita del exterior. UserRepositoryPort extiende CrudRepositoryPort<User, UserId> de core y agrega sus consultas (findByEmail, countActiveByRole…).",
        copy: "Tu puerto extiende CrudRepositoryPort<TuModelo, TuId> y declara solo las consultas que tus casos de uso usan."
      },
      {
        id: "memory",
        layer: "infraOut",
        x: 1040,
        y: 220,
        name: "Adaptador en memoria",
        items: ["InMemoryUserRepositoryAdapter", "@ConditionalOnInMemoryPersistence"],
        file: Oe + "infrastructure/adapter/out/persistence/memory/",
        what: "Extiende InMemoryCrudRepository de core y resuelve las consultas con stream(). Se usa en modo memory y como fake en las pruebas de los casos de uso.",
        copy: "Siempre ten este adaptador: es el modo por defecto y tu fake de pruebas."
      },
      {
        id: "jpa",
        layer: "infraOut",
        x: 1040,
        y: 380,
        name: "Adaptador JPA",
        items: ["UserPersistenceAdapter", "UserJpaEntity · UserPersistenceMapper", "UserJpaRepository", "db/migration/user/*.sql"],
        file: Oe + "infrastructure/adapter/out/persistence/jpa/",
        what: "Extiende JpaCrudRepositoryAdapter de core: delega en un repositorio Spring Data y convierte entidad ↔ dominio con el mapper. Flyway crea las tablas con las migraciones del módulo.",
        copy: "Marca el adaptador con @ConditionalOnJpaPersistence. Migraciones en db/migration/<tu-modulo>/V<yyyyMMddHHmm>__descripcion.sql. Sin claves foráneas a tablas de otros módulos."
      },
      {
        id: "bcrypt",
        layer: "infraOut",
        x: 1040,
        y: 580,
        name: "Seguridad",
        items: ["BCryptPasswordHasher"],
        file: Oe + "infrastructure/adapter/out/security/",
        what: "Implementa PasswordHasher con BCrypt (spring-security-crypto). El dominio nunca ve la librería.",
        copy: "Patrón para cualquier servicio externo: interfaz en application/port/out, implementación en infrastructure/adapter/out."
      },
      {
        id: "config",
        layer: "config",
        x: 20,
        y: 520,
        name: "Configuración",
        items: ["UserModuleConfiguration", "UserUiConfiguration", "SampleUsersLoader"],
        file: Oe + "infrastructure/config/",
        what: 'Registra cada caso de uso como @Bean (así la aplicación no depende de Spring), el NavigationItem "Users" y la pantalla de login.',
        copy: "Un @Bean por caso de uso en <Tu>ModuleConfiguration; tu NavigationItem en <Tu>UiConfiguration."
      },
      {
        id: "coreContracts",
        layer: "core",
        x: 360,
        y: 540,
        name: "core · contratos",
        items: ["UserService", "CurrentUserService", "UseCase · CrudRepositoryPort"],
        file: ks + "contract/",
        what: "Interfaces compartidas por todos los módulos. user-module implementa UserService y CurrentUserService.",
        copy: "Tu módulo depende solo de core-module, nunca de otro módulo de negocio."
      }
    ],
    links: [
      ["ui", "portIn", "crea"],
      ["ui", "usecase", "execute()"],
      ["contractIn", "usecase", "delega en"],
      ["contractIn", "coreContracts", "implementa"],
      ["portIn", "usecase", "entrada de"],
      ["usecase", "domain", "aplica reglas"],
      ["usecase", "portOut", "depende de"],
      ["memory", "portOut", "implementa"],
      ["jpa", "portOut", "implementa"],
      ["bcrypt", "portOut", "implementa"],
      ["config", "usecase", "@Bean"],
      ["portOut", "domain", "guarda"]
    ]
  },
  {
    id: "integracion",
    title: "2 · Integración entre módulos",
    intro: "Ningún módulo depende de otro: todos dependen de los contratos de core. Si nadie implementa un contrato, core usa su fallback con datos de ejemplo; cuando el equipo dueño registra su @Bean, el fallback desaparece solo.",
    nodes: [
      {
        id: "teamUi",
        layer: "team",
        x: 20,
        y: 40,
        name: "Tu controlador",
        items: ["p. ej. NewCartController", "currentUserService.currentUser().id()"],
        file: "<tu-modulo>/.../infrastructure/adapter/in/ui/",
        what: "Lee quién inició sesión en el momento de la acción y pasa su id al caso de uso.",
        copy: "Reemplaza SampleUsers.CUSTOMER (u otro id fijo) por currentUserService.currentUser().id()."
      },
      {
        id: "teamUseCase",
        layer: "team",
        x: 20,
        y: 250,
        name: "Tu caso de uso",
        items: ["p. ej. AddProductToCartUseCase", "users.isActiveWithRole(id, ROLE)"],
        file: "<tu-modulo>/.../application/usecase/",
        what: "Valida que el usuario esté activo y tenga el rol, y aplica la regla de tu módulo.",
        copy: "Mantén isActiveWithRole: un usuario desactivado no opera aunque tenga sesión."
      },
      {
        id: "teamContract",
        layer: "team",
        x: 20,
        y: 460,
        name: "Tu adaptador de contrato",
        items: ["p. ej. CatalogServiceAdapter", "implements CatalogService"],
        file: "<tu-modulo>/.../infrastructure/adapter/in/contract/",
        what: "Expone tu módulo a los demás a través del contrato de core, igual que UserServiceAdapter.",
        copy: "Catálogo → CatalogService · Pedidos → OrderService · Pagos → PaymentService. Regístralo como @Bean en tu configuración."
      },
      {
        id: "core",
        layer: "core",
        x: 430,
        y: 180,
        name: "core · contratos",
        items: ["UserService", "CurrentUserService", "CatalogService", "OrderService", "PaymentService"],
        file: ks + "contract/",
        what: "El único punto de encuentro entre módulos. Cambiar un contrato se acuerda entre los equipos (D-00 a D-09).",
        copy: "Importa org.jala.edu.core.contract.*; nunca importes clases de otro módulo de negocio."
      },
      {
        id: "fallback",
        layer: "core",
        x: 430,
        y: 470,
        name: "Fallbacks de core",
        items: ["ContractFallbackAutoConfiguration", "@ConditionalOnMissingBean"],
        file: ks + "infrastructure/contract/",
        what: 'Si ningún módulo registra un contrato, core usa uno de ejemplo y avisa en el log ("No module provides …").',
        copy: "Cuando el log deje de mostrar el aviso de tu contrato, tu adaptador ya está activo."
      },
      {
        id: "users",
        layer: "uiIn",
        x: 840,
        y: 60,
        name: "user-module",
        items: ["UserServiceAdapter", "SessionCurrentUserService"],
        file: Oe + "infrastructure/adapter/in/contract/",
        what: "Implementación real de UserService y CurrentUserService (#18, #56, #61).",
        copy: "Es el ejemplo a seguir para tu adaptador de contrato."
      },
      {
        id: "roleMenu",
        layer: "system",
        x: 840,
        y: 280,
        name: "Menú por rol",
        items: ["RoleMenu (NavigationFilter)", "título del NavigationItem → roles"],
        file: "delivery-system/src/main/java/org/jala/edu/system/RoleMenu.java",
        what: "Decide qué botón ve cada rol según el título del NavigationItem: Catalog → ADMIN y MERCHANT; Orders y Payments → CUSTOMER; Deliveries → COURIER.",
        copy: "No cambies el título de tu botón. Si un rol necesita otra pantalla (D-08), se pide un MR a delivery-system."
      },
      {
        id: "bridge",
        layer: "system",
        x: 840,
        y: 480,
        name: "Modo jpa",
        items: ["MissingJpaAdaptersAutoConfiguration", "JpaModeStartupTest"],
        file: "delivery-system/src/main/java/org/jala/edu/system/",
        what: "Si un puerto no tiene adaptador JPA, el puente usa el de memoria con un aviso. La prueba arranca toda la app en modo jpa y falla en el MR si falta algo.",
        copy: "Cuando agregues tu adaptador JPA, pide quitar la entrada de tu puerto del puente."
      }
    ],
    links: [
      ["teamUi", "core", "CurrentUserService"],
      ["teamUi", "teamUseCase", "execute(id, …)"],
      ["teamUseCase", "core", "UserService"],
      ["teamContract", "core", "implementa"],
      ["users", "core", "implementa"],
      ["fallback", "core", "si falta"],
      ["teamUi", "roleMenu", "NavigationItem"],
      ["teamContract", "bridge", "adaptador JPA"]
    ]
  },
  {
    id: "login",
    title: "3 · Flujo del inicio de sesión",
    intro: "Sigue los pasos de izquierda a derecha: así viaja un inicio de sesión por las capas. Tus historias siguen el mismo recorrido: pantalla → command → caso de uso → puertos → dominio → respuesta.",
    nodes: [
      {
        id: "screen",
        layer: "uiIn",
        x: 20,
        y: 60,
        name: "1 · Pantalla",
        items: ["login.fxml", "LoginController.onSignIn()"],
        file: Oe + "infrastructure/adapter/in/ui/LoginController.java",
        what: "AppShell muestra primero la LoginScreen del módulo. El controlador lee correo y contraseña y crea el command.",
        copy: "Tus controladores siguen igual: leer campos → command → BackgroundTasks → caso de uso."
      },
      {
        id: "cmd",
        layer: "app",
        x: 320,
        y: 60,
        name: "2 · Command",
        items: ["LoginCommand(email, password)", "toString() oculta la contraseña"],
        file: Oe + "application/port/in/LoginCommand.java",
        what: "Datos de entrada del caso de uso. Nunca imprime la contraseña.",
        copy: "Si tu command lleva datos sensibles, sobrescribe toString()."
      },
      {
        id: "loginUseCase",
        layer: "app",
        x: 620,
        y: 60,
        name: "3 · LoginUseCase",
        items: ["valida formato", "busca por correo", "compara hash", "revisa estado"],
        file: Oe + "application/usecase/LoginUseCase.java",
        what: "Correo o contraseña con formato inválido, correo inexistente o hash distinto → InvalidCredentialsException. Usuario inactivo → InactiveUserException.",
        copy: "Un caso de uso devuelve el resultado o lanza una excepción del dominio; el controlador la muestra con ErrorMessages."
      },
      {
        id: "repo",
        layer: "app",
        x: 620,
        y: 300,
        name: "4 · Puertos de salida",
        items: ["UserRepositoryPort.findByEmail", "PasswordHasher.matches"],
        file: Oe + "application/port/out/",
        what: "El caso de uso solo conoce las interfaces; en ejecución llegan el adaptador de memoria o JPA y BCrypt.",
        copy: "Tus casos de uso reciben interfaces, no adaptadores concretos."
      },
      {
        id: "session",
        layer: "uiIn",
        x: 920,
        y: 60,
        name: "5 · Sesión",
        items: ["SessionCurrentUserService.signIn(user)", "CurrentUser(id, role, name)"],
        file: Oe + "infrastructure/adapter/in/contract/SessionCurrentUserService.java",
        what: "Guarda el usuario de la sesión. Desde aquí cualquier módulo lo lee con CurrentUserService.",
        copy: "Lee siempre el usuario con currentUserService.currentUser(); no guardes el id en una constante."
      },
      {
        id: "shell",
        layer: "core",
        x: 920,
        y: 300,
        name: "6 · Ventana principal",
        items: ["AppShell.showMainWindow()", "MainViewController + RoleMenu", "Sign out → SignOutEvent"],
        file: ks + "infrastructure/ui/AppShell.java",
        what: "Muestra solo los botones del rol. Sign out publica SignOutEvent, borra la sesión y vuelve al login.",
        copy: "Si tu módulo guarda algo por usuario en memoria, escucha @EventListener(SignOutEvent.class) para limpiarlo."
      }
    ],
    links: [
      ["screen", "cmd", "crea"],
      ["cmd", "loginUseCase", "execute()"],
      ["loginUseCase", "repo", "consulta"],
      ["loginUseCase", "session", "usuario válido"],
      ["session", "shell", "abre"],
      ["shell", "screen", "Sign out"]
    ]
  }
];
function i4(e, t) {
  const n = new AR(), r = {};
  return e.nodes.forEach((i) => {
    const s = new B1({ name: i.name, color: Li[i.layer].color });
    s.setPosition(i.x, i.y);
    const o = s.addInPort(" ");
    i.items.forEach((l) => s.addOutPort(l));
    const a = s.addOutPort("  ");
    s.getPorts && Object.values(s.getPorts()).forEach((l) => l.setLocked(!0)), s.registerListener({
      selectionChanged: (l) => {
        l.isSelected && t(i);
      }
    }), r[i.id] = { node: s, inPort: o, exitPort: a }, n.addNode(s);
  }), e.links.forEach(([i, s, o]) => {
    const a = r[i].exitPort.link(r[s].inPort);
    a.addLabel(o), a.setLocked(!0), n.addLink(a);
  }), n;
}
function s4({ diagram: e }) {
  const t = [...new Set(e.nodes.map((n) => n.layer))];
  return /* @__PURE__ */ H.jsx("ul", { className: "dg-legend", children: t.map((n) => /* @__PURE__ */ H.jsxs("li", { children: [
    /* @__PURE__ */ H.jsx("span", { className: "dg-swatch", style: { background: Li[n].color } }),
    Li[n].label
  ] }, n)) });
}
function o4({ spec: e }) {
  return e ? /* @__PURE__ */ H.jsxs("div", { className: "dg-details", style: { borderLeftColor: Li[e.layer].color }, children: [
    /* @__PURE__ */ H.jsx("h4", { children: e.name }),
    /* @__PURE__ */ H.jsx("p", { className: "dg-layer", children: Li[e.layer].label }),
    /* @__PURE__ */ H.jsxs("p", { children: [
      /* @__PURE__ */ H.jsx("b", { children: "Qué es:" }),
      " ",
      e.what
    ] }),
    /* @__PURE__ */ H.jsxs("p", { children: [
      /* @__PURE__ */ H.jsx("b", { children: "En tu módulo:" }),
      " ",
      e.copy
    ] }),
    /* @__PURE__ */ H.jsx("p", { className: "dg-file", children: /* @__PURE__ */ H.jsx("code", { children: e.file }) }),
    /* @__PURE__ */ H.jsx("p", { className: "dg-items", children: e.items.map((t) => /* @__PURE__ */ H.jsx("code", { children: t }, t)) })
  ] }) : /* @__PURE__ */ H.jsx("div", { className: "dg-details dg-empty", children: "👆 Haz clic en un recuadro para ver qué hace, en qué archivo está y qué copias en tu módulo. Arrastra los recuadros para reordenarlos; usa la rueda del mouse para acercar o alejar." });
}
function a4() {
  const [e, t] = C.useState(0), [n, r] = C.useState(null), [i, s] = C.useState(0), o = Gg[e], a = C.useMemo(() => {
    const c = r4();
    return c.setMaxNumberPointsPerLink(0), c;
  }, []), l = C.useMemo(() => i4(o, r), [o, i]);
  a.setModel(l);
  const u = () => {
    try {
      a.zoomToFitNodes({ margin: 40 });
    } catch {
      a.repaintCanvas();
    }
  };
  return C.useEffect(() => {
    r(null);
  }, [e]), C.useEffect(() => {
    const c = setTimeout(u, 80);
    return () => clearTimeout(c);
  }, [l]), /* @__PURE__ */ H.jsxs("div", { className: "dg", children: [
    /* @__PURE__ */ H.jsx("div", { className: "dg-tabs", role: "tablist", children: Gg.map((c, f) => /* @__PURE__ */ H.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": f === e,
        className: f === e ? "dg-tab dg-active" : "dg-tab",
        onClick: () => t(f),
        children: c.title
      },
      c.id
    )) }),
    /* @__PURE__ */ H.jsx("p", { className: "dg-intro", children: o.intro }),
    /* @__PURE__ */ H.jsxs("div", { className: "dg-toolbar", children: [
      /* @__PURE__ */ H.jsx("button", { type: "button", onClick: u, children: "🔍 Ajustar a la vista" }),
      /* @__PURE__ */ H.jsx("button", { type: "button", onClick: () => s((c) => c + 1), children: "↺ Reordenar" })
    ] }),
    /* @__PURE__ */ H.jsx("div", { className: "dg-canvas-wrap", children: /* @__PURE__ */ H.jsx(sN, { className: "dg-canvas", engine: a }) }),
    /* @__PURE__ */ H.jsx(s4, { diagram: o }),
    /* @__PURE__ */ H.jsx(o4, { spec: n })
  ] });
}
const Hg = document.getElementById("diagrama-arquitectura");
Hg && iy(Hg).render(/* @__PURE__ */ H.jsx(a4, {}));
