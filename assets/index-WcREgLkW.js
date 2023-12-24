function yk(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var za =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Ll(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var fy = { exports: {} },
  Fl = {},
  dy = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ma = Symbol.for("react.element"),
  xk = Symbol.for("react.portal"),
  Sk = Symbol.for("react.fragment"),
  wk = Symbol.for("react.strict_mode"),
  bk = Symbol.for("react.profiler"),
  kk = Symbol.for("react.provider"),
  Ck = Symbol.for("react.context"),
  Pk = Symbol.for("react.forward_ref"),
  Tk = Symbol.for("react.suspense"),
  Ek = Symbol.for("react.memo"),
  _k = Symbol.for("react.lazy"),
  Yh = Symbol.iterator;
function Ak(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yh && e[Yh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var py = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  hy = Object.assign,
  my = {};
function Ui(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = my),
    (this.updater = n || py);
}
Ui.prototype.isReactComponent = {};
Ui.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ui.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vy() {}
vy.prototype = Ui.prototype;
function Ad(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = my),
    (this.updater = n || py);
}
var Rd = (Ad.prototype = new vy());
Rd.constructor = Ad;
hy(Rd, Ui.prototype);
Rd.isPureReactComponent = !0;
var Kh = Array.isArray,
  gy = Object.prototype.hasOwnProperty,
  Od = { current: null },
  yy = { key: !0, ref: !0, __self: !0, __source: !0 };
function xy(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      gy.call(t, r) && !yy.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: ma,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: Od.current,
  };
}
function Rk(e, t) {
  return {
    $$typeof: ma,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Id(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ma;
}
function Ok(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Xh = /\/+/g;
function $u(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ok("" + e.key)
    : t.toString(36);
}
function bs(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ma:
          case xk:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + $u(a, 0) : r),
      Kh(i)
        ? ((n = ""),
          e != null && (n = e.replace(Xh, "$&/") + "/"),
          bs(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Id(i) &&
            (i = Rk(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Xh, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Kh(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var l = r + $u(o, s);
      a += bs(o, t, n, l, i);
    }
  else if (((l = Ak(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + $u(o, s++)), (a += bs(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Va(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    bs(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Ik(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var nt = { current: null },
  ks = { transition: null },
  Mk = {
    ReactCurrentDispatcher: nt,
    ReactCurrentBatchConfig: ks,
    ReactCurrentOwner: Od,
  };
U.Children = {
  map: Va,
  forEach: function (e, t, n) {
    Va(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Va(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Va(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Id(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
U.Component = Ui;
U.Fragment = Sk;
U.Profiler = bk;
U.PureComponent = Ad;
U.StrictMode = wk;
U.Suspense = Tk;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mk;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = hy({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = Od.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      gy.call(t, l) &&
        !yy.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ma, type: e.type, key: i, ref: o, props: r, _owner: a };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ck,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: kk, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = xy;
U.createFactory = function (e) {
  var t = xy.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: Pk, render: e };
};
U.isValidElement = Id;
U.lazy = function (e) {
  return { $$typeof: _k, _payload: { _status: -1, _result: e }, _init: Ik };
};
U.memo = function (e, t) {
  return { $$typeof: Ek, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = ks.transition;
  ks.transition = {};
  try {
    e();
  } finally {
    ks.transition = t;
  }
};
U.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
U.useCallback = function (e, t) {
  return nt.current.useCallback(e, t);
};
U.useContext = function (e) {
  return nt.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return nt.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return nt.current.useEffect(e, t);
};
U.useId = function () {
  return nt.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return nt.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return nt.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return nt.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return nt.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return nt.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return nt.current.useRef(e);
};
U.useState = function (e) {
  return nt.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return nt.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return nt.current.useTransition();
};
U.version = "18.2.0";
dy.exports = U;
var S = dy.exports;
const wn = Ll(S),
  Qh = yk({ __proto__: null, default: wn }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nk = S,
  Lk = Symbol.for("react.element"),
  Fk = Symbol.for("react.fragment"),
  Dk = Object.prototype.hasOwnProperty,
  jk = Nk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zk = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sy(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) Dk.call(t, r) && !zk.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Lk,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: jk.current,
  };
}
Fl.Fragment = Fk;
Fl.jsx = Sy;
Fl.jsxs = Sy;
fy.exports = Fl;
var _ = fy.exports,
  Wc = {},
  wy = { exports: {} },
  St = {},
  by = { exports: {} },
  ky = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, B) {
    var $ = M.length;
    M.push(B);
    e: for (; 0 < $; ) {
      var z = ($ - 1) >>> 1,
        re = M[z];
      if (0 < i(re, B)) (M[z] = B), (M[$] = re), ($ = z);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var B = M[0],
      $ = M.pop();
    if ($ !== B) {
      M[0] = $;
      e: for (var z = 0, re = M.length, H = re >>> 1; z < H; ) {
        var Ge = 2 * (z + 1) - 1,
          Wt = M[Ge],
          Te = Ge + 1,
          Fe = M[Te];
        if (0 > i(Wt, $))
          Te < re && 0 > i(Fe, Wt)
            ? ((M[z] = Fe), (M[Te] = $), (z = Te))
            : ((M[z] = Wt), (M[Ge] = $), (z = Ge));
        else if (Te < re && 0 > i(Fe, $)) (M[z] = Fe), (M[Te] = $), (z = Te);
        else break e;
      }
    }
    return B;
  }
  function i(M, B) {
    var $ = M.sortIndex - B.sortIndex;
    return $ !== 0 ? $ : M.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    p = !1,
    m = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(M) {
    for (var B = n(u); B !== null; ) {
      if (B.callback === null) r(u);
      else if (B.startTime <= M)
        r(u), (B.sortIndex = B.expirationTime), t(l, B);
      else break;
      B = n(u);
    }
  }
  function b(M) {
    if (((v = !1), g(M), !m))
      if (n(l) !== null) (m = !0), He(P);
      else {
        var B = n(u);
        B !== null && it(b, B.startTime - M);
      }
  }
  function P(M, B) {
    (m = !1), v && ((v = !1), y(R), (R = -1)), (p = !0);
    var $ = d;
    try {
      for (
        g(B), f = n(l);
        f !== null && (!(f.expirationTime > B) || (M && !Q()));

      ) {
        var z = f.callback;
        if (typeof z == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var re = z(f.expirationTime <= B);
          (B = e.unstable_now()),
            typeof re == "function" ? (f.callback = re) : f === n(l) && r(l),
            g(B);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var H = !0;
      else {
        var Ge = n(u);
        Ge !== null && it(b, Ge.startTime - B), (H = !1);
      }
      return H;
    } finally {
      (f = null), (d = $), (p = !1);
    }
  }
  var A = !1,
    T = null,
    R = -1,
    O = 5,
    D = -1;
  function Q() {
    return !(e.unstable_now() - D < O);
  }
  function Le() {
    if (T !== null) {
      var M = e.unstable_now();
      D = M;
      var B = !0;
      try {
        B = T(!0, M);
      } finally {
        B ? _e() : ((A = !1), (T = null));
      }
    } else A = !1;
  }
  var _e;
  if (typeof h == "function")
    _e = function () {
      h(Le);
    };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(),
      ue = ie.port2;
    (ie.port1.onmessage = Le),
      (_e = function () {
        ue.postMessage(null);
      });
  } else
    _e = function () {
      w(Le, 0);
    };
  function He(M) {
    (T = M), A || ((A = !0), _e());
  }
  function it(M, B) {
    R = w(function () {
      M(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || p || ((m = !0), He(P));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = d;
      }
      var $ = d;
      d = B;
      try {
        return M();
      } finally {
        d = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, B) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var $ = d;
      d = M;
      try {
        return B();
      } finally {
        d = $;
      }
    }),
    (e.unstable_scheduleCallback = function (M, B, $) {
      var z = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? z + $ : z))
          : ($ = z),
        M)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = $ + re),
        (M = {
          id: c++,
          callback: B,
          priorityLevel: M,
          startTime: $,
          expirationTime: re,
          sortIndex: -1,
        }),
        $ > z
          ? ((M.sortIndex = $),
            t(u, M),
            n(l) === null &&
              M === n(u) &&
              (v ? (y(R), (R = -1)) : (v = !0), it(b, $ - z)))
          : ((M.sortIndex = re), t(l, M), m || p || ((m = !0), He(P))),
        M
      );
    }),
    (e.unstable_shouldYield = Q),
    (e.unstable_wrapCallback = function (M) {
      var B = d;
      return function () {
        var $ = d;
        d = B;
        try {
          return M.apply(this, arguments);
        } finally {
          d = $;
        }
      };
    });
})(ky);
by.exports = ky;
var Vk = by.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cy = S,
  yt = Vk;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Py = new Set(),
  Fo = {};
function Ur(e, t) {
  Ii(e, t), Ii(e + "Capture", t);
}
function Ii(e, t) {
  for (Fo[e] = t, e = 0; e < t.length; e++) Py.add(t[e]);
}
var bn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Uc = Object.prototype.hasOwnProperty,
  Bk =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  qh = {},
  Zh = {};
function $k(e) {
  return Uc.call(Zh, e)
    ? !0
    : Uc.call(qh, e)
    ? !1
    : Bk.test(e)
    ? (Zh[e] = !0)
    : ((qh[e] = !0), !1);
}
function Wk(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Uk(e, t, n, r) {
  if (t === null || typeof t > "u" || Wk(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function rt(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new rt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ue[t] = new rt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ue[e] = new rt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ue[e] = new rt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new rt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ue[e] = new rt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ue[e] = new rt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ue[e] = new rt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ue[e] = new rt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Md = /[\-:]([a-z])/g;
function Nd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Md, Nd);
    Ue[t] = new rt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Md, Nd);
    Ue[t] = new rt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Md, Nd);
  Ue[t] = new rt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ue[e] = new rt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ue.xlinkHref = new rt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ue[e] = new rt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ld(e, t, n, r) {
  var i = Ue.hasOwnProperty(t) ? Ue[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Uk(t, n, i, r) && (n = null),
    r || i === null
      ? $k(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rn = Cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ba = Symbol.for("react.element"),
  ti = Symbol.for("react.portal"),
  ni = Symbol.for("react.fragment"),
  Fd = Symbol.for("react.strict_mode"),
  Hc = Symbol.for("react.profiler"),
  Ty = Symbol.for("react.provider"),
  Ey = Symbol.for("react.context"),
  Dd = Symbol.for("react.forward_ref"),
  Gc = Symbol.for("react.suspense"),
  Yc = Symbol.for("react.suspense_list"),
  jd = Symbol.for("react.memo"),
  Dn = Symbol.for("react.lazy"),
  _y = Symbol.for("react.offscreen"),
  Jh = Symbol.iterator;
function Ji(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Jh && e[Jh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var be = Object.assign,
  Wu;
function fo(e) {
  if (Wu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wu = (t && t[1]) || "";
    }
  return (
    `
` +
    Wu +
    e
  );
}
var Uu = !1;
function Hu(e, t) {
  if (!e || Uu) return "";
  Uu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
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
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          s = o.length - 1;
        1 <= a && 0 <= s && i[a] !== o[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (i[a] !== o[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || i[a] !== o[s])) {
                var l =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Uu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? fo(e) : "";
}
function Hk(e) {
  switch (e.tag) {
    case 5:
      return fo(e.type);
    case 16:
      return fo("Lazy");
    case 13:
      return fo("Suspense");
    case 19:
      return fo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Hu(e.type, !1)), e;
    case 11:
      return (e = Hu(e.type.render, !1)), e;
    case 1:
      return (e = Hu(e.type, !0)), e;
    default:
      return "";
  }
}
function Kc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ni:
      return "Fragment";
    case ti:
      return "Portal";
    case Hc:
      return "Profiler";
    case Fd:
      return "StrictMode";
    case Gc:
      return "Suspense";
    case Yc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ey:
        return (e.displayName || "Context") + ".Consumer";
      case Ty:
        return (e._context.displayName || "Context") + ".Provider";
      case Dd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case jd:
        return (
          (t = e.displayName || null), t !== null ? t : Kc(e.type) || "Memo"
        );
      case Dn:
        (t = e._payload), (e = e._init);
        try {
          return Kc(e(t));
        } catch {}
    }
  return null;
}
function Gk(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return Kc(t);
    case 8:
      return t === Fd ? "StrictMode" : "Mode";
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
function nr(e) {
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
function Ay(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Yk(e) {
  var t = Ay(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function $a(e) {
  e._valueTracker || (e._valueTracker = Yk(e));
}
function Ry(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ay(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Hs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xc(e, t) {
  var n = t.checked;
  return be({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function em(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Oy(e, t) {
  (t = t.checked), t != null && Ld(e, "checked", t, !1);
}
function Qc(e, t) {
  Oy(e, t);
  var n = nr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? qc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && qc(e, t.type, nr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function tm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function qc(e, t, n) {
  (t !== "number" || Hs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var po = Array.isArray;
function wi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Zc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return be({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function nm(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (po(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nr(n) };
}
function Iy(e, t) {
  var n = nr(t.value),
    r = nr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function rm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function My(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Jc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? My(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Wa,
  Ny = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Wa = Wa || document.createElement("div"),
          Wa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Wa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Do(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xo = {
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
    strokeWidth: !0,
  },
  Kk = ["Webkit", "ms", "Moz", "O"];
Object.keys(xo).forEach(function (e) {
  Kk.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xo[t] = xo[e]);
  });
});
function Ly(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xo.hasOwnProperty(e) && xo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Fy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Ly(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Xk = be(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ef(e, t) {
  if (t) {
    if (Xk[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function tf(e, t) {
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
var nf = null;
function zd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var rf = null,
  bi = null,
  ki = null;
function im(e) {
  if ((e = ya(e))) {
    if (typeof rf != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = Bl(t)), rf(e.stateNode, e.type, t));
  }
}
function Dy(e) {
  bi ? (ki ? ki.push(e) : (ki = [e])) : (bi = e);
}
function jy() {
  if (bi) {
    var e = bi,
      t = ki;
    if (((ki = bi = null), im(e), t)) for (e = 0; e < t.length; e++) im(t[e]);
  }
}
function zy(e, t) {
  return e(t);
}
function Vy() {}
var Gu = !1;
function By(e, t, n) {
  if (Gu) return e(t, n);
  Gu = !0;
  try {
    return zy(e, t, n);
  } finally {
    (Gu = !1), (bi !== null || ki !== null) && (Vy(), jy());
  }
}
function jo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bl(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var of = !1;
if (bn)
  try {
    var eo = {};
    Object.defineProperty(eo, "passive", {
      get: function () {
        of = !0;
      },
    }),
      window.addEventListener("test", eo, eo),
      window.removeEventListener("test", eo, eo);
  } catch {
    of = !1;
  }
function Qk(e, t, n, r, i, o, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var So = !1,
  Gs = null,
  Ys = !1,
  af = null,
  qk = {
    onError: function (e) {
      (So = !0), (Gs = e);
    },
  };
function Zk(e, t, n, r, i, o, a, s, l) {
  (So = !1), (Gs = null), Qk.apply(qk, arguments);
}
function Jk(e, t, n, r, i, o, a, s, l) {
  if ((Zk.apply(this, arguments), So)) {
    if (So) {
      var u = Gs;
      (So = !1), (Gs = null);
    } else throw Error(I(198));
    Ys || ((Ys = !0), (af = u));
  }
}
function Hr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function $y(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function om(e) {
  if (Hr(e) !== e) throw Error(I(188));
}
function e2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Hr(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return om(i), e;
        if (o === r) return om(i), t;
        o = o.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var a = !1, s = i.child; s; ) {
        if (s === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = o.child; s; ) {
          if (s === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function Wy(e) {
  return (e = e2(e)), e !== null ? Uy(e) : null;
}
function Uy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Uy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Hy = yt.unstable_scheduleCallback,
  am = yt.unstable_cancelCallback,
  t2 = yt.unstable_shouldYield,
  n2 = yt.unstable_requestPaint,
  Ee = yt.unstable_now,
  r2 = yt.unstable_getCurrentPriorityLevel,
  Vd = yt.unstable_ImmediatePriority,
  Gy = yt.unstable_UserBlockingPriority,
  Ks = yt.unstable_NormalPriority,
  i2 = yt.unstable_LowPriority,
  Yy = yt.unstable_IdlePriority,
  Dl = null,
  nn = null;
function o2(e) {
  if (nn && typeof nn.onCommitFiberRoot == "function")
    try {
      nn.onCommitFiberRoot(Dl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Vt = Math.clz32 ? Math.clz32 : l2,
  a2 = Math.log,
  s2 = Math.LN2;
function l2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((a2(e) / s2) | 0)) | 0;
}
var Ua = 64,
  Ha = 4194304;
function ho(e) {
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
function Xs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~i;
    s !== 0 ? (r = ho(s)) : ((o &= a), o !== 0 && (r = ho(o)));
  } else (a = n & ~i), a !== 0 ? (r = ho(a)) : o !== 0 && (r = ho(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Vt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function u2(e, t) {
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
function c2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - Vt(o),
      s = 1 << a,
      l = i[a];
    l === -1
      ? (!(s & n) || s & r) && (i[a] = u2(s, t))
      : l <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function sf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ky() {
  var e = Ua;
  return (Ua <<= 1), !(Ua & 4194240) && (Ua = 64), e;
}
function Yu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function va(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Vt(t)),
    (e[t] = n);
}
function f2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Vt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Bd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Vt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ee = 0;
function Xy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Qy,
  $d,
  qy,
  Zy,
  Jy,
  lf = !1,
  Ga = [],
  Hn = null,
  Gn = null,
  Yn = null,
  zo = new Map(),
  Vo = new Map(),
  Vn = [],
  d2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function sm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Hn = null;
      break;
    case "dragenter":
    case "dragleave":
      Gn = null;
      break;
    case "mouseover":
    case "mouseout":
      Yn = null;
      break;
    case "pointerover":
    case "pointerout":
      zo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vo.delete(t.pointerId);
  }
}
function to(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ya(t)), t !== null && $d(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function p2(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Hn = to(Hn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Gn = to(Gn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Yn = to(Yn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return zo.set(o, to(zo.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Vo.set(o, to(Vo.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function e0(e) {
  var t = kr(e.target);
  if (t !== null) {
    var n = Hr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = $y(n)), t !== null)) {
          (e.blockedOn = t),
            Jy(e.priority, function () {
              qy(n);
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
    var n = uf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (nf = r), n.target.dispatchEvent(r), (nf = null);
    } else return (t = ya(n)), t !== null && $d(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function lm(e, t, n) {
  Cs(e) && n.delete(t);
}
function h2() {
  (lf = !1),
    Hn !== null && Cs(Hn) && (Hn = null),
    Gn !== null && Cs(Gn) && (Gn = null),
    Yn !== null && Cs(Yn) && (Yn = null),
    zo.forEach(lm),
    Vo.forEach(lm);
}
function no(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    lf ||
      ((lf = !0),
      yt.unstable_scheduleCallback(yt.unstable_NormalPriority, h2)));
}
function Bo(e) {
  function t(i) {
    return no(i, e);
  }
  if (0 < Ga.length) {
    no(Ga[0], e);
    for (var n = 1; n < Ga.length; n++) {
      var r = Ga[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Hn !== null && no(Hn, e),
      Gn !== null && no(Gn, e),
      Yn !== null && no(Yn, e),
      zo.forEach(t),
      Vo.forEach(t),
      n = 0;
    n < Vn.length;
    n++
  )
    (r = Vn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vn.length && ((n = Vn[0]), n.blockedOn === null); )
    e0(n), n.blockedOn === null && Vn.shift();
}
var Ci = Rn.ReactCurrentBatchConfig,
  Qs = !0;
function m2(e, t, n, r) {
  var i = ee,
    o = Ci.transition;
  Ci.transition = null;
  try {
    (ee = 1), Wd(e, t, n, r);
  } finally {
    (ee = i), (Ci.transition = o);
  }
}
function v2(e, t, n, r) {
  var i = ee,
    o = Ci.transition;
  Ci.transition = null;
  try {
    (ee = 4), Wd(e, t, n, r);
  } finally {
    (ee = i), (Ci.transition = o);
  }
}
function Wd(e, t, n, r) {
  if (Qs) {
    var i = uf(e, t, n, r);
    if (i === null) rc(e, t, r, qs, n), sm(e, r);
    else if (p2(i, e, t, n, r)) r.stopPropagation();
    else if ((sm(e, r), t & 4 && -1 < d2.indexOf(e))) {
      for (; i !== null; ) {
        var o = ya(i);
        if (
          (o !== null && Qy(o),
          (o = uf(e, t, n, r)),
          o === null && rc(e, t, r, qs, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else rc(e, t, r, null, n);
  }
}
var qs = null;
function uf(e, t, n, r) {
  if (((qs = null), (e = zd(r)), (e = kr(e)), e !== null))
    if (((t = Hr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = $y(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (qs = e), null;
}
function t0(e) {
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
      switch (r2()) {
        case Vd:
          return 1;
        case Gy:
          return 4;
        case Ks:
        case i2:
          return 16;
        case Yy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $n = null,
  Ud = null,
  Ps = null;
function n0() {
  if (Ps) return Ps;
  var e,
    t = Ud,
    n = t.length,
    r,
    i = "value" in $n ? $n.value : $n.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (Ps = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ts(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ya() {
  return !0;
}
function um() {
  return !1;
}
function wt(e) {
  function t(n, r, i, o, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ya
        : um),
      (this.isPropagationStopped = um),
      this
    );
  }
  return (
    be(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ya));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ya));
      },
      persist: function () {},
      isPersistent: Ya,
    }),
    t
  );
}
var Hi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Hd = wt(Hi),
  ga = be({}, Hi, { view: 0, detail: 0 }),
  g2 = wt(ga),
  Ku,
  Xu,
  ro,
  jl = be({}, ga, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Gd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ro &&
            (ro && e.type === "mousemove"
              ? ((Ku = e.screenX - ro.screenX), (Xu = e.screenY - ro.screenY))
              : (Xu = Ku = 0),
            (ro = e)),
          Ku);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Xu;
    },
  }),
  cm = wt(jl),
  y2 = be({}, jl, { dataTransfer: 0 }),
  x2 = wt(y2),
  S2 = be({}, ga, { relatedTarget: 0 }),
  Qu = wt(S2),
  w2 = be({}, Hi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  b2 = wt(w2),
  k2 = be({}, Hi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  C2 = wt(k2),
  P2 = be({}, Hi, { data: 0 }),
  fm = wt(P2),
  T2 = {
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
    MozPrintableKey: "Unidentified",
  },
  E2 = {
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
    224: "Meta",
  },
  _2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function A2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _2[e]) ? !!t[e] : !1;
}
function Gd() {
  return A2;
}
var R2 = be({}, ga, {
    key: function (e) {
      if (e.key) {
        var t = T2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ts(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? E2[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Gd,
    charCode: function (e) {
      return e.type === "keypress" ? Ts(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ts(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  O2 = wt(R2),
  I2 = be({}, jl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  dm = wt(I2),
  M2 = be({}, ga, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gd,
  }),
  N2 = wt(M2),
  L2 = be({}, Hi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  F2 = wt(L2),
  D2 = be({}, jl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  j2 = wt(D2),
  z2 = [9, 13, 27, 32],
  Yd = bn && "CompositionEvent" in window,
  wo = null;
bn && "documentMode" in document && (wo = document.documentMode);
var V2 = bn && "TextEvent" in window && !wo,
  r0 = bn && (!Yd || (wo && 8 < wo && 11 >= wo)),
  pm = " ",
  hm = !1;
function i0(e, t) {
  switch (e) {
    case "keyup":
      return z2.indexOf(t.keyCode) !== -1;
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
function o0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ri = !1;
function B2(e, t) {
  switch (e) {
    case "compositionend":
      return o0(t);
    case "keypress":
      return t.which !== 32 ? null : ((hm = !0), pm);
    case "textInput":
      return (e = t.data), e === pm && hm ? null : e;
    default:
      return null;
  }
}
function $2(e, t) {
  if (ri)
    return e === "compositionend" || (!Yd && i0(e, t))
      ? ((e = n0()), (Ps = Ud = $n = null), (ri = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return r0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var W2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function mm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!W2[e.type] : t === "textarea";
}
function a0(e, t, n, r) {
  Dy(r),
    (t = Zs(t, "onChange")),
    0 < t.length &&
      ((n = new Hd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var bo = null,
  $o = null;
function U2(e) {
  g0(e, 0);
}
function zl(e) {
  var t = ai(e);
  if (Ry(t)) return e;
}
function H2(e, t) {
  if (e === "change") return t;
}
var s0 = !1;
if (bn) {
  var qu;
  if (bn) {
    var Zu = "oninput" in document;
    if (!Zu) {
      var vm = document.createElement("div");
      vm.setAttribute("oninput", "return;"),
        (Zu = typeof vm.oninput == "function");
    }
    qu = Zu;
  } else qu = !1;
  s0 = qu && (!document.documentMode || 9 < document.documentMode);
}
function gm() {
  bo && (bo.detachEvent("onpropertychange", l0), ($o = bo = null));
}
function l0(e) {
  if (e.propertyName === "value" && zl($o)) {
    var t = [];
    a0(t, $o, e, zd(e)), By(U2, t);
  }
}
function G2(e, t, n) {
  e === "focusin"
    ? (gm(), (bo = t), ($o = n), bo.attachEvent("onpropertychange", l0))
    : e === "focusout" && gm();
}
function Y2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return zl($o);
}
function K2(e, t) {
  if (e === "click") return zl(t);
}
function X2(e, t) {
  if (e === "input" || e === "change") return zl(t);
}
function Q2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $t = typeof Object.is == "function" ? Object.is : Q2;
function Wo(e, t) {
  if ($t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Uc.call(t, i) || !$t(e[i], t[i])) return !1;
  }
  return !0;
}
function ym(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function xm(e, t) {
  var n = ym(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
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
    n = ym(n);
  }
}
function u0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? u0(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function c0() {
  for (var e = window, t = Hs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hs(e.document);
  }
  return t;
}
function Kd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function q2(e) {
  var t = c0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    u0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Kd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = xm(n, o));
        var a = xm(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Z2 = bn && "documentMode" in document && 11 >= document.documentMode,
  ii = null,
  cf = null,
  ko = null,
  ff = !1;
function Sm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ff ||
    ii == null ||
    ii !== Hs(r) ||
    ((r = ii),
    "selectionStart" in r && Kd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ko && Wo(ko, r)) ||
      ((ko = r),
      (r = Zs(cf, "onSelect")),
      0 < r.length &&
        ((t = new Hd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ii))));
}
function Ka(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var oi = {
    animationend: Ka("Animation", "AnimationEnd"),
    animationiteration: Ka("Animation", "AnimationIteration"),
    animationstart: Ka("Animation", "AnimationStart"),
    transitionend: Ka("Transition", "TransitionEnd"),
  },
  Ju = {},
  f0 = {};
bn &&
  ((f0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete oi.animationend.animation,
    delete oi.animationiteration.animation,
    delete oi.animationstart.animation),
  "TransitionEvent" in window || delete oi.transitionend.transition);
function Vl(e) {
  if (Ju[e]) return Ju[e];
  if (!oi[e]) return e;
  var t = oi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in f0) return (Ju[e] = t[n]);
  return e;
}
var d0 = Vl("animationend"),
  p0 = Vl("animationiteration"),
  h0 = Vl("animationstart"),
  m0 = Vl("transitionend"),
  v0 = new Map(),
  wm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ur(e, t) {
  v0.set(e, t), Ur(t, [e]);
}
for (var ec = 0; ec < wm.length; ec++) {
  var tc = wm[ec],
    J2 = tc.toLowerCase(),
    eC = tc[0].toUpperCase() + tc.slice(1);
  ur(J2, "on" + eC);
}
ur(d0, "onAnimationEnd");
ur(p0, "onAnimationIteration");
ur(h0, "onAnimationStart");
ur("dblclick", "onDoubleClick");
ur("focusin", "onFocus");
ur("focusout", "onBlur");
ur(m0, "onTransitionEnd");
Ii("onMouseEnter", ["mouseout", "mouseover"]);
Ii("onMouseLeave", ["mouseout", "mouseover"]);
Ii("onPointerEnter", ["pointerout", "pointerover"]);
Ii("onPointerLeave", ["pointerout", "pointerover"]);
Ur(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ur(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ur(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ur(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ur(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  tC = new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));
function bm(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Jk(r, t, void 0, e), (e.currentTarget = null);
}
function g0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== o && i.isPropagationStopped())) break e;
          bm(i, s, u), (o = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          bm(i, s, u), (o = l);
        }
    }
  }
  if (Ys) throw ((e = af), (Ys = !1), (af = null), e);
}
function ce(e, t) {
  var n = t[vf];
  n === void 0 && (n = t[vf] = new Set());
  var r = e + "__bubble";
  n.has(r) || (y0(t, e, 2, !1), n.add(r));
}
function nc(e, t, n) {
  var r = 0;
  t && (r |= 4), y0(n, e, r, t);
}
var Xa = "_reactListening" + Math.random().toString(36).slice(2);
function Uo(e) {
  if (!e[Xa]) {
    (e[Xa] = !0),
      Py.forEach(function (n) {
        n !== "selectionchange" && (tC.has(n) || nc(n, !1, e), nc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xa] || ((t[Xa] = !0), nc("selectionchange", !1, t));
  }
}
function y0(e, t, n, r) {
  switch (t0(t)) {
    case 1:
      var i = m2;
      break;
    case 4:
      i = v2;
      break;
    default:
      i = Wd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !of ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function rc(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = kr(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = o = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  By(function () {
    var u = o,
      c = zd(n),
      f = [];
    e: {
      var d = v0.get(e);
      if (d !== void 0) {
        var p = Hd,
          m = e;
        switch (e) {
          case "keypress":
            if (Ts(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = O2;
            break;
          case "focusin":
            (m = "focus"), (p = Qu);
            break;
          case "focusout":
            (m = "blur"), (p = Qu);
            break;
          case "beforeblur":
          case "afterblur":
            p = Qu;
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
            p = cm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = x2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = N2;
            break;
          case d0:
          case p0:
          case h0:
            p = b2;
            break;
          case m0:
            p = F2;
            break;
          case "scroll":
            p = g2;
            break;
          case "wheel":
            p = j2;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = C2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = dm;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          y = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var b = g.stateNode;
          if (
            (g.tag === 5 &&
              b !== null &&
              ((g = b),
              y !== null && ((b = jo(h, y)), b != null && v.push(Ho(h, b, g)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new p(d, m, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          d &&
            n !== nf &&
            (m = n.relatedTarget || n.fromElement) &&
            (kr(m) || m[kn]))
        )
          break e;
        if (
          (p || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          p
            ? ((m = n.relatedTarget || n.toElement),
              (p = u),
              (m = m ? kr(m) : null),
              m !== null &&
                ((w = Hr(m)), m !== w || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((p = null), (m = u)),
          p !== m)
        ) {
          if (
            ((v = cm),
            (b = "onMouseLeave"),
            (y = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = dm),
              (b = "onPointerLeave"),
              (y = "onPointerEnter"),
              (h = "pointer")),
            (w = p == null ? d : ai(p)),
            (g = m == null ? d : ai(m)),
            (d = new v(b, h + "leave", p, n, c)),
            (d.target = w),
            (d.relatedTarget = g),
            (b = null),
            kr(c) === u &&
              ((v = new v(y, h + "enter", m, n, c)),
              (v.target = g),
              (v.relatedTarget = w),
              (b = v)),
            (w = b),
            p && m)
          )
            t: {
              for (v = p, y = m, h = 0, g = v; g; g = qr(g)) h++;
              for (g = 0, b = y; b; b = qr(b)) g++;
              for (; 0 < h - g; ) (v = qr(v)), h--;
              for (; 0 < g - h; ) (y = qr(y)), g--;
              for (; h--; ) {
                if (v === y || (y !== null && v === y.alternate)) break t;
                (v = qr(v)), (y = qr(y));
              }
              v = null;
            }
          else v = null;
          p !== null && km(f, d, p, v, !1),
            m !== null && w !== null && km(f, w, m, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? ai(u) : window),
          (p = d.nodeName && d.nodeName.toLowerCase()),
          p === "select" || (p === "input" && d.type === "file"))
        )
          var P = H2;
        else if (mm(d))
          if (s0) P = X2;
          else {
            P = Y2;
            var A = G2;
          }
        else
          (p = d.nodeName) &&
            p.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (P = K2);
        if (P && (P = P(e, u))) {
          a0(f, P, n, c);
          break e;
        }
        A && A(e, d, u),
          e === "focusout" &&
            (A = d._wrapperState) &&
            A.controlled &&
            d.type === "number" &&
            qc(d, "number", d.value);
      }
      switch (((A = u ? ai(u) : window), e)) {
        case "focusin":
          (mm(A) || A.contentEditable === "true") &&
            ((ii = A), (cf = u), (ko = null));
          break;
        case "focusout":
          ko = cf = ii = null;
          break;
        case "mousedown":
          ff = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ff = !1), Sm(f, n, c);
          break;
        case "selectionchange":
          if (Z2) break;
        case "keydown":
        case "keyup":
          Sm(f, n, c);
      }
      var T;
      if (Yd)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        ri
          ? i0(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (r0 &&
          n.locale !== "ko" &&
          (ri || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && ri && (T = n0())
            : (($n = c),
              (Ud = "value" in $n ? $n.value : $n.textContent),
              (ri = !0))),
        (A = Zs(u, R)),
        0 < A.length &&
          ((R = new fm(R, e, null, n, c)),
          f.push({ event: R, listeners: A }),
          T ? (R.data = T) : ((T = o0(n)), T !== null && (R.data = T)))),
        (T = V2 ? B2(e, n) : $2(e, n)) &&
          ((u = Zs(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new fm("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    g0(f, t);
  });
}
function Ho(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = jo(e, n)),
      o != null && r.unshift(Ho(e, o, i)),
      (o = jo(e, t)),
      o != null && r.push(Ho(e, o, i))),
      (e = e.return);
  }
  return r;
}
function qr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function km(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((l = jo(n, o)), l != null && a.unshift(Ho(n, l, s)))
        : i || ((l = jo(n, o)), l != null && a.push(Ho(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var nC = /\r\n?/g,
  rC = /\u0000|\uFFFD/g;
function Cm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      nC,
      `
`
    )
    .replace(rC, "");
}
function Qa(e, t, n) {
  if (((t = Cm(t)), Cm(e) !== t && n)) throw Error(I(425));
}
function Js() {}
var df = null,
  pf = null;
function hf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var mf = typeof setTimeout == "function" ? setTimeout : void 0,
  iC = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Pm = typeof Promise == "function" ? Promise : void 0,
  oC =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Pm < "u"
      ? function (e) {
          return Pm.resolve(null).then(e).catch(aC);
        }
      : mf;
function aC(e) {
  setTimeout(function () {
    throw e;
  });
}
function ic(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Bo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Bo(t);
}
function Kn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Tm(e) {
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
var Gi = Math.random().toString(36).slice(2),
  Jt = "__reactFiber$" + Gi,
  Go = "__reactProps$" + Gi,
  kn = "__reactContainer$" + Gi,
  vf = "__reactEvents$" + Gi,
  sC = "__reactListeners$" + Gi,
  lC = "__reactHandles$" + Gi;
function kr(e) {
  var t = e[Jt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[kn] || n[Jt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Tm(e); e !== null; ) {
          if ((n = e[Jt])) return n;
          e = Tm(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ya(e) {
  return (
    (e = e[Jt] || e[kn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ai(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function Bl(e) {
  return e[Go] || null;
}
var gf = [],
  si = -1;
function cr(e) {
  return { current: e };
}
function pe(e) {
  0 > si || ((e.current = gf[si]), (gf[si] = null), si--);
}
function se(e, t) {
  si++, (gf[si] = e.current), (e.current = t);
}
var rr = {},
  Ze = cr(rr),
  st = cr(!1),
  Fr = rr;
function Mi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function lt(e) {
  return (e = e.childContextTypes), e != null;
}
function el() {
  pe(st), pe(Ze);
}
function Em(e, t, n) {
  if (Ze.current !== rr) throw Error(I(168));
  se(Ze, t), se(st, n);
}
function x0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(I(108, Gk(e) || "Unknown", i));
  return be({}, n, r);
}
function tl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rr),
    (Fr = Ze.current),
    se(Ze, e),
    se(st, st.current),
    !0
  );
}
function _m(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n
    ? ((e = x0(e, t, Fr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      pe(st),
      pe(Ze),
      se(Ze, e))
    : pe(st),
    se(st, n);
}
var dn = null,
  $l = !1,
  oc = !1;
function S0(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function uC(e) {
  ($l = !0), S0(e);
}
function fr() {
  if (!oc && dn !== null) {
    oc = !0;
    var e = 0,
      t = ee;
    try {
      var n = dn;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (dn = null), ($l = !1);
    } catch (i) {
      throw (dn !== null && (dn = dn.slice(e + 1)), Hy(Vd, fr), i);
    } finally {
      (ee = t), (oc = !1);
    }
  }
  return null;
}
var li = [],
  ui = 0,
  nl = null,
  rl = 0,
  _t = [],
  At = 0,
  Dr = null,
  pn = 1,
  hn = "";
function yr(e, t) {
  (li[ui++] = rl), (li[ui++] = nl), (nl = e), (rl = t);
}
function w0(e, t, n) {
  (_t[At++] = pn), (_t[At++] = hn), (_t[At++] = Dr), (Dr = e);
  var r = pn;
  e = hn;
  var i = 32 - Vt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Vt(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (pn = (1 << (32 - Vt(t) + i)) | (n << i) | r),
      (hn = o + e);
  } else (pn = (1 << o) | (n << i) | r), (hn = e);
}
function Xd(e) {
  e.return !== null && (yr(e, 1), w0(e, 1, 0));
}
function Qd(e) {
  for (; e === nl; )
    (nl = li[--ui]), (li[ui] = null), (rl = li[--ui]), (li[ui] = null);
  for (; e === Dr; )
    (Dr = _t[--At]),
      (_t[At] = null),
      (hn = _t[--At]),
      (_t[At] = null),
      (pn = _t[--At]),
      (_t[At] = null);
}
var vt = null,
  mt = null,
  ge = !1,
  jt = null;
function b0(e, t) {
  var n = Rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Am(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (vt = e), (mt = Kn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (vt = e), (mt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dr !== null ? { id: pn, overflow: hn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (vt = e),
            (mt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function yf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xf(e) {
  if (ge) {
    var t = mt;
    if (t) {
      var n = t;
      if (!Am(e, t)) {
        if (yf(e)) throw Error(I(418));
        t = Kn(n.nextSibling);
        var r = vt;
        t && Am(e, t)
          ? b0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ge = !1), (vt = e));
      }
    } else {
      if (yf(e)) throw Error(I(418));
      (e.flags = (e.flags & -4097) | 2), (ge = !1), (vt = e);
    }
  }
}
function Rm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  vt = e;
}
function qa(e) {
  if (e !== vt) return !1;
  if (!ge) return Rm(e), (ge = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !hf(e.type, e.memoizedProps))),
    t && (t = mt))
  ) {
    if (yf(e)) throw (k0(), Error(I(418)));
    for (; t; ) b0(e, t), (t = Kn(t.nextSibling));
  }
  if ((Rm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              mt = Kn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      mt = null;
    }
  } else mt = vt ? Kn(e.stateNode.nextSibling) : null;
  return !0;
}
function k0() {
  for (var e = mt; e; ) e = Kn(e.nextSibling);
}
function Ni() {
  (mt = vt = null), (ge = !1);
}
function qd(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
var cC = Rn.ReactCurrentBatchConfig;
function Ft(e, t) {
  if (e && e.defaultProps) {
    (t = be({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var il = cr(null),
  ol = null,
  ci = null,
  Zd = null;
function Jd() {
  Zd = ci = ol = null;
}
function ep(e) {
  var t = il.current;
  pe(il), (e._currentValue = t);
}
function Sf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Pi(e, t) {
  (ol = e),
    (Zd = ci = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (at = !0), (e.firstContext = null));
}
function It(e) {
  var t = e._currentValue;
  if (Zd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ci === null)) {
      if (ol === null) throw Error(I(308));
      (ci = e), (ol.dependencies = { lanes: 0, firstContext: e });
    } else ci = ci.next = e;
  return t;
}
var Cr = null;
function tp(e) {
  Cr === null ? (Cr = [e]) : Cr.push(e);
}
function C0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), tp(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Cn(e, r)
  );
}
function Cn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var jn = !1;
function np(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function P0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function yn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Cn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), tp(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Cn(e, n)
  );
}
function Es(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bd(e, n);
  }
}
function Om(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function al(e, t, n, r) {
  var i = e.updateQueue;
  jn = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (o = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (a = 0), (c = u = l = null), (s = o);
    do {
      var d = s.lane,
        p = s.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var m = e,
            v = s;
          switch (((d = t), (p = n), v.tag)) {
            case 1:
              if (((m = v.payload), typeof m == "function")) {
                f = m.call(p, f, d);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = v.payload),
                (d = typeof m == "function" ? m.call(p, f, d) : m),
                d == null)
              )
                break e;
              f = be({}, f, d);
              break e;
            case 2:
              jn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [s]) : d.push(s));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = f)) : (c = c.next = p),
          (a |= d);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (d = s),
          (s = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (zr |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function Im(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(I(191, i));
        i.call(r);
      }
    }
}
var T0 = new Cy.Component().refs;
function wf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : be({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Hr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = tt(),
      i = qn(e),
      o = yn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Xn(e, o, i)),
      t !== null && (Bt(t, e, i, r), Es(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = tt(),
      i = qn(e),
      o = yn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Xn(e, o, i)),
      t !== null && (Bt(t, e, i, r), Es(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = tt(),
      r = qn(e),
      i = yn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Xn(e, i, r)),
      t !== null && (Bt(t, e, r, n), Es(t, e, r));
  },
};
function Mm(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Wo(n, r) || !Wo(i, o)
      : !0
  );
}
function E0(e, t, n) {
  var r = !1,
    i = rr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = It(o))
      : ((i = lt(t) ? Fr : Ze.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Mi(e, i) : rr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Wl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Nm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Wl.enqueueReplaceState(t, t.state, null);
}
function bf(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = T0), np(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = It(o))
    : ((o = lt(t) ? Fr : Ze.current), (i.context = Mi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (wf(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Wl.enqueueReplaceState(i, i.state, null),
      al(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function io(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var s = i.refs;
            s === T0 && (s = i.refs = {}),
              a === null ? delete s[o] : (s[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function Za(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Lm(e) {
  var t = e._init;
  return t(e._payload);
}
function _0(e) {
  function t(y, h) {
    if (e) {
      var g = y.deletions;
      g === null ? ((y.deletions = [h]), (y.flags |= 16)) : g.push(h);
    }
  }
  function n(y, h) {
    if (!e) return null;
    for (; h !== null; ) t(y, h), (h = h.sibling);
    return null;
  }
  function r(y, h) {
    for (y = new Map(); h !== null; )
      h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
    return y;
  }
  function i(y, h) {
    return (y = Zn(y, h)), (y.index = 0), (y.sibling = null), y;
  }
  function o(y, h, g) {
    return (
      (y.index = g),
      e
        ? ((g = y.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((y.flags |= 2), h) : g)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    );
  }
  function a(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function s(y, h, g, b) {
    return h === null || h.tag !== 6
      ? ((h = dc(g, y.mode, b)), (h.return = y), h)
      : ((h = i(h, g)), (h.return = y), h);
  }
  function l(y, h, g, b) {
    var P = g.type;
    return P === ni
      ? c(y, h, g.props.children, b, g.key)
      : h !== null &&
        (h.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === Dn &&
            Lm(P) === h.type))
      ? ((b = i(h, g.props)), (b.ref = io(y, h, g)), (b.return = y), b)
      : ((b = Ms(g.type, g.key, g.props, null, y.mode, b)),
        (b.ref = io(y, h, g)),
        (b.return = y),
        b);
  }
  function u(y, h, g, b) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = pc(g, y.mode, b)), (h.return = y), h)
      : ((h = i(h, g.children || [])), (h.return = y), h);
  }
  function c(y, h, g, b, P) {
    return h === null || h.tag !== 7
      ? ((h = Ir(g, y.mode, b, P)), (h.return = y), h)
      : ((h = i(h, g)), (h.return = y), h);
  }
  function f(y, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = dc("" + h, y.mode, g)), (h.return = y), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ba:
          return (
            (g = Ms(h.type, h.key, h.props, null, y.mode, g)),
            (g.ref = io(y, null, h)),
            (g.return = y),
            g
          );
        case ti:
          return (h = pc(h, y.mode, g)), (h.return = y), h;
        case Dn:
          var b = h._init;
          return f(y, b(h._payload), g);
      }
      if (po(h) || Ji(h))
        return (h = Ir(h, y.mode, g, null)), (h.return = y), h;
      Za(y, h);
    }
    return null;
  }
  function d(y, h, g, b) {
    var P = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return P !== null ? null : s(y, h, "" + g, b);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ba:
          return g.key === P ? l(y, h, g, b) : null;
        case ti:
          return g.key === P ? u(y, h, g, b) : null;
        case Dn:
          return (P = g._init), d(y, h, P(g._payload), b);
      }
      if (po(g) || Ji(g)) return P !== null ? null : c(y, h, g, b, null);
      Za(y, g);
    }
    return null;
  }
  function p(y, h, g, b, P) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (y = y.get(g) || null), s(h, y, "" + b, P);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ba:
          return (y = y.get(b.key === null ? g : b.key) || null), l(h, y, b, P);
        case ti:
          return (y = y.get(b.key === null ? g : b.key) || null), u(h, y, b, P);
        case Dn:
          var A = b._init;
          return p(y, h, g, A(b._payload), P);
      }
      if (po(b) || Ji(b)) return (y = y.get(g) || null), c(h, y, b, P, null);
      Za(h, b);
    }
    return null;
  }
  function m(y, h, g, b) {
    for (
      var P = null, A = null, T = h, R = (h = 0), O = null;
      T !== null && R < g.length;
      R++
    ) {
      T.index > R ? ((O = T), (T = null)) : (O = T.sibling);
      var D = d(y, T, g[R], b);
      if (D === null) {
        T === null && (T = O);
        break;
      }
      e && T && D.alternate === null && t(y, T),
        (h = o(D, h, R)),
        A === null ? (P = D) : (A.sibling = D),
        (A = D),
        (T = O);
    }
    if (R === g.length) return n(y, T), ge && yr(y, R), P;
    if (T === null) {
      for (; R < g.length; R++)
        (T = f(y, g[R], b)),
          T !== null &&
            ((h = o(T, h, R)), A === null ? (P = T) : (A.sibling = T), (A = T));
      return ge && yr(y, R), P;
    }
    for (T = r(y, T); R < g.length; R++)
      (O = p(T, y, R, g[R], b)),
        O !== null &&
          (e && O.alternate !== null && T.delete(O.key === null ? R : O.key),
          (h = o(O, h, R)),
          A === null ? (P = O) : (A.sibling = O),
          (A = O));
    return (
      e &&
        T.forEach(function (Q) {
          return t(y, Q);
        }),
      ge && yr(y, R),
      P
    );
  }
  function v(y, h, g, b) {
    var P = Ji(g);
    if (typeof P != "function") throw Error(I(150));
    if (((g = P.call(g)), g == null)) throw Error(I(151));
    for (
      var A = (P = null), T = h, R = (h = 0), O = null, D = g.next();
      T !== null && !D.done;
      R++, D = g.next()
    ) {
      T.index > R ? ((O = T), (T = null)) : (O = T.sibling);
      var Q = d(y, T, D.value, b);
      if (Q === null) {
        T === null && (T = O);
        break;
      }
      e && T && Q.alternate === null && t(y, T),
        (h = o(Q, h, R)),
        A === null ? (P = Q) : (A.sibling = Q),
        (A = Q),
        (T = O);
    }
    if (D.done) return n(y, T), ge && yr(y, R), P;
    if (T === null) {
      for (; !D.done; R++, D = g.next())
        (D = f(y, D.value, b)),
          D !== null &&
            ((h = o(D, h, R)), A === null ? (P = D) : (A.sibling = D), (A = D));
      return ge && yr(y, R), P;
    }
    for (T = r(y, T); !D.done; R++, D = g.next())
      (D = p(T, y, R, D.value, b)),
        D !== null &&
          (e && D.alternate !== null && T.delete(D.key === null ? R : D.key),
          (h = o(D, h, R)),
          A === null ? (P = D) : (A.sibling = D),
          (A = D));
    return (
      e &&
        T.forEach(function (Le) {
          return t(y, Le);
        }),
      ge && yr(y, R),
      P
    );
  }
  function w(y, h, g, b) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === ni &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ba:
          e: {
            for (var P = g.key, A = h; A !== null; ) {
              if (A.key === P) {
                if (((P = g.type), P === ni)) {
                  if (A.tag === 7) {
                    n(y, A.sibling),
                      (h = i(A, g.props.children)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                } else if (
                  A.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Dn &&
                    Lm(P) === A.type)
                ) {
                  n(y, A.sibling),
                    (h = i(A, g.props)),
                    (h.ref = io(y, A, g)),
                    (h.return = y),
                    (y = h);
                  break e;
                }
                n(y, A);
                break;
              } else t(y, A);
              A = A.sibling;
            }
            g.type === ni
              ? ((h = Ir(g.props.children, y.mode, b, g.key)),
                (h.return = y),
                (y = h))
              : ((b = Ms(g.type, g.key, g.props, null, y.mode, b)),
                (b.ref = io(y, h, g)),
                (b.return = y),
                (y = b));
          }
          return a(y);
        case ti:
          e: {
            for (A = g.key; h !== null; ) {
              if (h.key === A)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  n(y, h.sibling),
                    (h = i(h, g.children || [])),
                    (h.return = y),
                    (y = h);
                  break e;
                } else {
                  n(y, h);
                  break;
                }
              else t(y, h);
              h = h.sibling;
            }
            (h = pc(g, y.mode, b)), (h.return = y), (y = h);
          }
          return a(y);
        case Dn:
          return (A = g._init), w(y, h, A(g._payload), b);
      }
      if (po(g)) return m(y, h, g, b);
      if (Ji(g)) return v(y, h, g, b);
      Za(y, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (n(y, h.sibling), (h = i(h, g)), (h.return = y), (y = h))
          : (n(y, h), (h = dc(g, y.mode, b)), (h.return = y), (y = h)),
        a(y))
      : n(y, h);
  }
  return w;
}
var Li = _0(!0),
  A0 = _0(!1),
  xa = {},
  rn = cr(xa),
  Yo = cr(xa),
  Ko = cr(xa);
function Pr(e) {
  if (e === xa) throw Error(I(174));
  return e;
}
function rp(e, t) {
  switch ((se(Ko, t), se(Yo, e), se(rn, xa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Jc(t, e));
  }
  pe(rn), se(rn, t);
}
function Fi() {
  pe(rn), pe(Yo), pe(Ko);
}
function R0(e) {
  Pr(Ko.current);
  var t = Pr(rn.current),
    n = Jc(t, e.type);
  t !== n && (se(Yo, e), se(rn, n));
}
function ip(e) {
  Yo.current === e && (pe(rn), pe(Yo));
}
var xe = cr(0);
function sl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ac = [];
function op() {
  for (var e = 0; e < ac.length; e++)
    ac[e]._workInProgressVersionPrimary = null;
  ac.length = 0;
}
var _s = Rn.ReactCurrentDispatcher,
  sc = Rn.ReactCurrentBatchConfig,
  jr = 0,
  we = null,
  Ie = null,
  De = null,
  ll = !1,
  Co = !1,
  Xo = 0,
  fC = 0;
function Ye() {
  throw Error(I(321));
}
function ap(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!$t(e[n], t[n])) return !1;
  return !0;
}
function sp(e, t, n, r, i, o) {
  if (
    ((jr = o),
    (we = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (_s.current = e === null || e.memoizedState === null ? mC : vC),
    (e = n(r, i)),
    Co)
  ) {
    o = 0;
    do {
      if (((Co = !1), (Xo = 0), 25 <= o)) throw Error(I(301));
      (o += 1),
        (De = Ie = null),
        (t.updateQueue = null),
        (_s.current = gC),
        (e = n(r, i));
    } while (Co);
  }
  if (
    ((_s.current = ul),
    (t = Ie !== null && Ie.next !== null),
    (jr = 0),
    (De = Ie = we = null),
    (ll = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function lp() {
  var e = Xo !== 0;
  return (Xo = 0), e;
}
function Kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return De === null ? (we.memoizedState = De = e) : (De = De.next = e), De;
}
function Mt() {
  if (Ie === null) {
    var e = we.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ie.next;
  var t = De === null ? we.memoizedState : De.next;
  if (t !== null) (De = t), (Ie = e);
  else {
    if (e === null) throw Error(I(310));
    (Ie = e),
      (e = {
        memoizedState: Ie.memoizedState,
        baseState: Ie.baseState,
        baseQueue: Ie.baseQueue,
        queue: Ie.queue,
        next: null,
      }),
      De === null ? (we.memoizedState = De = e) : (De = De.next = e);
  }
  return De;
}
function Qo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function lc(e) {
  var t = Mt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Ie,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((jr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = f), (a = r)) : (l = l.next = f),
          (we.lanes |= c),
          (zr |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (a = r) : (l.next = s),
      $t(r, t.memoizedState) || (at = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (we.lanes |= o), (zr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function uc(e) {
  var t = Mt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    $t(o, t.memoizedState) || (at = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function O0() {}
function I0(e, t) {
  var n = we,
    r = Mt(),
    i = t(),
    o = !$t(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (at = !0)),
    (r = r.queue),
    up(L0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (De !== null && De.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      qo(9, N0.bind(null, n, r, i, t), void 0, null),
      je === null)
    )
      throw Error(I(349));
    jr & 30 || M0(n, t, i);
  }
  return i;
}
function M0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (we.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function N0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), F0(t) && D0(e);
}
function L0(e, t, n) {
  return n(function () {
    F0(t) && D0(e);
  });
}
function F0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$t(e, n);
  } catch {
    return !0;
  }
}
function D0(e) {
  var t = Cn(e, 1);
  t !== null && Bt(t, e, 1, -1);
}
function Fm(e) {
  var t = Kt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = hC.bind(null, we, e)),
    [t.memoizedState, e]
  );
}
function qo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (we.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function j0() {
  return Mt().memoizedState;
}
function As(e, t, n, r) {
  var i = Kt();
  (we.flags |= e),
    (i.memoizedState = qo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ul(e, t, n, r) {
  var i = Mt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ie !== null) {
    var a = Ie.memoizedState;
    if (((o = a.destroy), r !== null && ap(r, a.deps))) {
      i.memoizedState = qo(t, n, o, r);
      return;
    }
  }
  (we.flags |= e), (i.memoizedState = qo(1 | t, n, o, r));
}
function Dm(e, t) {
  return As(8390656, 8, e, t);
}
function up(e, t) {
  return Ul(2048, 8, e, t);
}
function z0(e, t) {
  return Ul(4, 2, e, t);
}
function V0(e, t) {
  return Ul(4, 4, e, t);
}
function B0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function $0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ul(4, 4, B0.bind(null, t, e), n)
  );
}
function cp() {}
function W0(e, t) {
  var n = Mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ap(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function U0(e, t) {
  var n = Mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ap(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function H0(e, t, n) {
  return jr & 21
    ? ($t(n, t) || ((n = Ky()), (we.lanes |= n), (zr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = n));
}
function dC(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = sc.transition;
  sc.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (sc.transition = r);
  }
}
function G0() {
  return Mt().memoizedState;
}
function pC(e, t, n) {
  var r = qn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Y0(e))
  )
    K0(t, n);
  else if (((n = C0(e, t, n, r)), n !== null)) {
    var i = tt();
    Bt(n, e, r, i), X0(n, t, r);
  }
}
function hC(e, t, n) {
  var r = qn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Y0(e)) K0(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = o(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), $t(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), tp(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = C0(e, t, i, r)),
      n !== null && ((i = tt()), Bt(n, e, r, i), X0(n, t, r));
  }
}
function Y0(e) {
  var t = e.alternate;
  return e === we || (t !== null && t === we);
}
function K0(e, t) {
  Co = ll = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function X0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bd(e, n);
  }
}
var ul = {
    readContext: It,
    useCallback: Ye,
    useContext: Ye,
    useEffect: Ye,
    useImperativeHandle: Ye,
    useInsertionEffect: Ye,
    useLayoutEffect: Ye,
    useMemo: Ye,
    useReducer: Ye,
    useRef: Ye,
    useState: Ye,
    useDebugValue: Ye,
    useDeferredValue: Ye,
    useTransition: Ye,
    useMutableSource: Ye,
    useSyncExternalStore: Ye,
    useId: Ye,
    unstable_isNewReconciler: !1,
  },
  mC = {
    readContext: It,
    useCallback: function (e, t) {
      return (Kt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: It,
    useEffect: Dm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        As(4194308, 4, B0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return As(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return As(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Kt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Kt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = pC.bind(null, we, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Kt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Fm,
    useDebugValue: cp,
    useDeferredValue: function (e) {
      return (Kt().memoizedState = e);
    },
    useTransition: function () {
      var e = Fm(!1),
        t = e[0];
      return (e = dC.bind(null, e[1])), (Kt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = we,
        i = Kt();
      if (ge) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), je === null)) throw Error(I(349));
        jr & 30 || M0(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Dm(L0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        qo(9, N0.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Kt(),
        t = je.identifierPrefix;
      if (ge) {
        var n = hn,
          r = pn;
        (n = (r & ~(1 << (32 - Vt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = fC++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  vC = {
    readContext: It,
    useCallback: W0,
    useContext: It,
    useEffect: up,
    useImperativeHandle: $0,
    useInsertionEffect: z0,
    useLayoutEffect: V0,
    useMemo: U0,
    useReducer: lc,
    useRef: j0,
    useState: function () {
      return lc(Qo);
    },
    useDebugValue: cp,
    useDeferredValue: function (e) {
      var t = Mt();
      return H0(t, Ie.memoizedState, e);
    },
    useTransition: function () {
      var e = lc(Qo)[0],
        t = Mt().memoizedState;
      return [e, t];
    },
    useMutableSource: O0,
    useSyncExternalStore: I0,
    useId: G0,
    unstable_isNewReconciler: !1,
  },
  gC = {
    readContext: It,
    useCallback: W0,
    useContext: It,
    useEffect: up,
    useImperativeHandle: $0,
    useInsertionEffect: z0,
    useLayoutEffect: V0,
    useMemo: U0,
    useReducer: uc,
    useRef: j0,
    useState: function () {
      return uc(Qo);
    },
    useDebugValue: cp,
    useDeferredValue: function (e) {
      var t = Mt();
      return Ie === null ? (t.memoizedState = e) : H0(t, Ie.memoizedState, e);
    },
    useTransition: function () {
      var e = uc(Qo)[0],
        t = Mt().memoizedState;
      return [e, t];
    },
    useMutableSource: O0,
    useSyncExternalStore: I0,
    useId: G0,
    unstable_isNewReconciler: !1,
  };
function Di(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Hk(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function cc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function kf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var yC = typeof WeakMap == "function" ? WeakMap : Map;
function Q0(e, t, n) {
  (n = yn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      fl || ((fl = !0), (Mf = r)), kf(e, t);
    }),
    n
  );
}
function q0(e, t, n) {
  (n = yn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        kf(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        kf(e, t),
          typeof r != "function" &&
            (Qn === null ? (Qn = new Set([this])) : Qn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function jm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yC();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = IC.bind(null, e, t, n)), t.then(e, e));
}
function zm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vm(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yn(-1, 1)), (t.tag = 2), Xn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var xC = Rn.ReactCurrentOwner,
  at = !1;
function et(e, t, n, r) {
  t.child = e === null ? A0(t, null, n, r) : Li(t, e.child, n, r);
}
function Bm(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Pi(t, i),
    (r = sp(e, t, n, r, o, i)),
    (n = lp()),
    e !== null && !at
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Pn(e, t, i))
      : (ge && n && Xd(t), (t.flags |= 1), et(e, t, r, i), t.child)
  );
}
function $m(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !yp(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Z0(e, t, o, r, i))
      : ((e = Ms(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Wo), n(a, r) && e.ref === t.ref)
    )
      return Pn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Zn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Z0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Wo(o, r) && e.ref === t.ref)
      if (((at = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (at = !0);
      else return (t.lanes = e.lanes), Pn(e, t, i);
  }
  return Cf(e, t, n, r, i);
}
function J0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se(di, ht),
        (ht |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          se(di, ht),
          (ht |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        se(di, ht),
        (ht |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      se(di, ht),
      (ht |= r);
  return et(e, t, i, n), t.child;
}
function e1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Cf(e, t, n, r, i) {
  var o = lt(n) ? Fr : Ze.current;
  return (
    (o = Mi(t, o)),
    Pi(t, i),
    (n = sp(e, t, n, r, o, i)),
    (r = lp()),
    e !== null && !at
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Pn(e, t, i))
      : (ge && r && Xd(t), (t.flags |= 1), et(e, t, n, i), t.child)
  );
}
function Wm(e, t, n, r, i) {
  if (lt(n)) {
    var o = !0;
    tl(t);
  } else o = !1;
  if ((Pi(t, i), t.stateNode === null))
    Rs(e, t), E0(t, n, r), bf(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = It(u))
      : ((u = lt(n) ? Fr : Ze.current), (u = Mi(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || l !== u) && Nm(t, a, r, u)),
      (jn = !1);
    var d = t.memoizedState;
    (a.state = d),
      al(t, r, a, i),
      (l = t.memoizedState),
      s !== r || d !== l || st.current || jn
        ? (typeof c == "function" && (wf(t, n, c, r), (l = t.memoizedState)),
          (s = jn || Mm(t, n, s, r, d, l, u))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      P0(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ft(t.type, s)),
      (a.props = u),
      (f = t.pendingProps),
      (d = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = It(l))
        : ((l = lt(n) ? Fr : Ze.current), (l = Mi(t, l)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== f || d !== l) && Nm(t, a, r, l)),
      (jn = !1),
      (d = t.memoizedState),
      (a.state = d),
      al(t, r, a, i);
    var m = t.memoizedState;
    s !== f || d !== m || st.current || jn
      ? (typeof p == "function" && (wf(t, n, p, r), (m = t.memoizedState)),
        (u = jn || Mm(t, n, u, r, d, m, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, m, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, m, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (a.props = r),
        (a.state = m),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pf(e, t, n, r, o, i);
}
function Pf(e, t, n, r, i, o) {
  e1(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && _m(t, n, !1), Pn(e, t, o);
  (r = t.stateNode), (xC.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Li(t, e.child, null, o)), (t.child = Li(t, null, s, o)))
      : et(e, t, s, o),
    (t.memoizedState = r.state),
    i && _m(t, n, !0),
    t.child
  );
}
function t1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Em(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Em(e, t.context, !1),
    rp(e, t.containerInfo);
}
function Um(e, t, n, r, i) {
  return Ni(), qd(i), (t.flags |= 256), et(e, t, n, r), t.child;
}
var Tf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ef(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function n1(e, t, n) {
  var r = t.pendingProps,
    i = xe.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    se(xe, i & 1),
    e === null)
  )
    return (
      xf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = Yl(a, r, 0, null)),
              (e = Ir(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ef(n)),
              (t.memoizedState = Tf),
              e)
            : fp(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return SC(e, t, a, r, s, i, n);
  if (o) {
    (o = r.fallback), (a = t.mode), (i = e.child), (s = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Zn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = Zn(s, o)) : ((o = Ir(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Ef(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Tf),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Zn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function fp(e, t) {
  return (
    (t = Yl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ja(e, t, n, r) {
  return (
    r !== null && qd(r),
    Li(t, e.child, null, n),
    (e = fp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function SC(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = cc(Error(I(422)))), Ja(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Yl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Ir(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Li(t, e.child, null, a),
        (t.child.memoizedState = Ef(a)),
        (t.memoizedState = Tf),
        o);
  if (!(t.mode & 1)) return Ja(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(I(419))), (r = cc(o, r, void 0)), Ja(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), at || s)) {
    if (((r = je), r !== null)) {
      switch (a & -a) {
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
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Cn(e, i), Bt(r, e, i, -1));
    }
    return gp(), (r = cc(Error(I(421)))), Ja(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = MC.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (mt = Kn(i.nextSibling)),
      (vt = t),
      (ge = !0),
      (jt = null),
      e !== null &&
        ((_t[At++] = pn),
        (_t[At++] = hn),
        (_t[At++] = Dr),
        (pn = e.id),
        (hn = e.overflow),
        (Dr = t)),
      (t = fp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Hm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Sf(e.return, t, n);
}
function fc(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function r1(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((et(e, t, r.children, n), (r = xe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hm(e, n, t);
        else if (e.tag === 19) Hm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((se(xe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && sl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          fc(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && sl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        fc(t, !0, n, null, o);
        break;
      case "together":
        fc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Rs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Zn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Zn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function wC(e, t, n) {
  switch (t.tag) {
    case 3:
      t1(t), Ni();
      break;
    case 5:
      R0(t);
      break;
    case 1:
      lt(t.type) && tl(t);
      break;
    case 4:
      rp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      se(il, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(xe, xe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? n1(e, t, n)
          : (se(xe, xe.current & 1),
            (e = Pn(e, t, n)),
            e !== null ? e.sibling : null);
      se(xe, xe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return r1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        se(xe, xe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), J0(e, t, n);
  }
  return Pn(e, t, n);
}
var i1, _f, o1, a1;
i1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
_f = function () {};
o1 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Pr(rn.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Xc(e, i)), (r = Xc(e, r)), (o = []);
        break;
      case "select":
        (i = be({}, i, { value: void 0 })),
          (r = be({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Zc(e, i)), (r = Zc(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Js);
    }
    ef(n, r);
    var a;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Fo.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Fo.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ce("scroll", e),
                  o || s === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
a1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function oo(e, t) {
  if (!ge)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bC(e, t, n) {
  var r = t.pendingProps;
  switch ((Qd(t), t.tag)) {
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
      return Ke(t), null;
    case 1:
      return lt(t.type) && el(), Ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Fi(),
        pe(st),
        pe(Ze),
        op(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qa(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), jt !== null && (Ff(jt), (jt = null)))),
        _f(e, t),
        Ke(t),
        null
      );
    case 5:
      ip(t);
      var i = Pr(Ko.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        o1(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return Ke(t), null;
        }
        if (((e = Pr(rn.current)), qa(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Jt] = t), (r[Go] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < mo.length; i++) ce(mo[i], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", r), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              em(r, o), ce("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ce("invalid", r);
              break;
            case "textarea":
              nm(r, o), ce("invalid", r);
          }
          ef(n, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var s = o[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Qa(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Qa(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : Fo.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  ce("scroll", r);
            }
          switch (n) {
            case "input":
              $a(r), tm(r, o, !0);
              break;
            case "textarea":
              $a(r), rm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Js);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = My(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Jt] = t),
            (e[Go] = r),
            i1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = tf(n, r)), n)) {
              case "dialog":
                ce("cancel", e), ce("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < mo.length; i++) ce(mo[i], e);
                i = r;
                break;
              case "source":
                ce("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", e), ce("load", e), (i = r);
                break;
              case "details":
                ce("toggle", e), (i = r);
                break;
              case "input":
                em(e, r), (i = Xc(e, r)), ce("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = be({}, r, { value: void 0 })),
                  ce("invalid", e);
                break;
              case "textarea":
                nm(e, r), (i = Zc(e, r)), ce("invalid", e);
                break;
              default:
                i = r;
            }
            ef(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var l = s[o];
                o === "style"
                  ? Fy(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Ny(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Do(e, l)
                    : typeof l == "number" && Do(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Fo.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && ce("scroll", e)
                      : l != null && Ld(e, o, l, a));
              }
            switch (n) {
              case "input":
                $a(e), tm(e, r, !1);
                break;
              case "textarea":
                $a(e), rm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? wi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      wi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Js);
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
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ke(t), null;
    case 6:
      if (e && t.stateNode != null) a1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (((n = Pr(Ko.current)), Pr(rn.current), qa(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Jt] = t),
            (o = r.nodeValue !== n) && ((e = vt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Qa(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Qa(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Jt] = t),
            (t.stateNode = r);
      }
      return Ke(t), null;
    case 13:
      if (
        (pe(xe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ge && mt !== null && t.mode & 1 && !(t.flags & 128))
          k0(), Ni(), (t.flags |= 98560), (o = !1);
        else if (((o = qa(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(I(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(I(317));
            o[Jt] = t;
          } else
            Ni(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ke(t), (o = !1);
        } else jt !== null && (Ff(jt), (jt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || xe.current & 1 ? Me === 0 && (Me = 3) : gp())),
          t.updateQueue !== null && (t.flags |= 4),
          Ke(t),
          null);
    case 4:
      return (
        Fi(), _f(e, t), e === null && Uo(t.stateNode.containerInfo), Ke(t), null
      );
    case 10:
      return ep(t.type._context), Ke(t), null;
    case 17:
      return lt(t.type) && el(), Ke(t), null;
    case 19:
      if ((pe(xe), (o = t.memoizedState), o === null)) return Ke(t), null;
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) oo(o, !1);
        else {
          if (Me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = sl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    oo(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return se(xe, (xe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ee() > ji &&
            ((t.flags |= 128), (r = !0), oo(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = sl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              oo(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !ge)
            )
              return Ke(t), null;
          } else
            2 * Ee() - o.renderingStartTime > ji &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), oo(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ee()),
          (t.sibling = null),
          (n = xe.current),
          se(xe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ke(t), null);
    case 22:
    case 23:
      return (
        vp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ht & 1073741824 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function kC(e, t) {
  switch ((Qd(t), t.tag)) {
    case 1:
      return (
        lt(t.type) && el(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Fi(),
        pe(st),
        pe(Ze),
        op(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ip(t), null;
    case 13:
      if (
        (pe(xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        Ni();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return pe(xe), null;
    case 4:
      return Fi(), null;
    case 10:
      return ep(t.type._context), null;
    case 22:
    case 23:
      return vp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var es = !1,
  qe = !1,
  CC = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function fi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ke(e, t, r);
      }
    else n.current = null;
}
function Af(e, t, n) {
  try {
    n();
  } catch (r) {
    ke(e, t, r);
  }
}
var Gm = !1;
function PC(e, t) {
  if (((df = Qs), (e = c0()), Kd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (i !== 0 && f.nodeType !== 3) || (s = a + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (d = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (s = a),
                d === o && ++c === r && (l = a),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = p;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pf = { focusedElem: e, selectionRange: n }, Qs = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var v = m.memoizedProps,
                    w = m.memoizedState,
                    y = t.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ft(t.type, v),
                      w
                    );
                  y.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (b) {
          ke(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (m = Gm), (Gm = !1), m;
}
function Po(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Af(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Hl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Rf(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function s1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), s1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Jt], delete t[Go], delete t[vf], delete t[sC], delete t[lC])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function l1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ym(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || l1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Of(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Js));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Of(e, t, n), e = e.sibling; e !== null; ) Of(e, t, n), (e = e.sibling);
}
function If(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (If(e, t, n), e = e.sibling; e !== null; ) If(e, t, n), (e = e.sibling);
}
var Be = null,
  Dt = !1;
function Mn(e, t, n) {
  for (n = n.child; n !== null; ) u1(e, t, n), (n = n.sibling);
}
function u1(e, t, n) {
  if (nn && typeof nn.onCommitFiberUnmount == "function")
    try {
      nn.onCommitFiberUnmount(Dl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      qe || fi(n, t);
    case 6:
      var r = Be,
        i = Dt;
      (Be = null),
        Mn(e, t, n),
        (Be = r),
        (Dt = i),
        Be !== null &&
          (Dt
            ? ((e = Be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Be.removeChild(n.stateNode));
      break;
    case 18:
      Be !== null &&
        (Dt
          ? ((e = Be),
            (n = n.stateNode),
            e.nodeType === 8
              ? ic(e.parentNode, n)
              : e.nodeType === 1 && ic(e, n),
            Bo(e))
          : ic(Be, n.stateNode));
      break;
    case 4:
      (r = Be),
        (i = Dt),
        (Be = n.stateNode.containerInfo),
        (Dt = !0),
        Mn(e, t, n),
        (Be = r),
        (Dt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !qe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && Af(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      Mn(e, t, n);
      break;
    case 1:
      if (
        !qe &&
        (fi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ke(n, t, s);
        }
      Mn(e, t, n);
      break;
    case 21:
      Mn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((qe = (r = qe) || n.memoizedState !== null), Mn(e, t, n), (qe = r))
        : Mn(e, t, n);
      break;
    default:
      Mn(e, t, n);
  }
}
function Km(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new CC()),
      t.forEach(function (r) {
        var i = NC.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Be = s.stateNode), (Dt = !1);
              break e;
            case 3:
              (Be = s.stateNode.containerInfo), (Dt = !0);
              break e;
            case 4:
              (Be = s.stateNode.containerInfo), (Dt = !0);
              break e;
          }
          s = s.return;
        }
        if (Be === null) throw Error(I(160));
        u1(o, a, i), (Be = null), (Dt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ke(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) c1(t, e), (t = t.sibling);
}
function c1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Lt(t, e), Gt(e), r & 4)) {
        try {
          Po(3, e, e.return), Hl(3, e);
        } catch (v) {
          ke(e, e.return, v);
        }
        try {
          Po(5, e, e.return);
        } catch (v) {
          ke(e, e.return, v);
        }
      }
      break;
    case 1:
      Lt(t, e), Gt(e), r & 512 && n !== null && fi(n, n.return);
      break;
    case 5:
      if (
        (Lt(t, e),
        Gt(e),
        r & 512 && n !== null && fi(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Do(i, "");
        } catch (v) {
          ke(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && Oy(i, o),
              tf(s, a);
            var u = tf(s, o);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                f = l[a + 1];
              c === "style"
                ? Fy(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Ny(i, f)
                : c === "children"
                ? Do(i, f)
                : Ld(i, c, f, u);
            }
            switch (s) {
              case "input":
                Qc(i, o);
                break;
              case "textarea":
                Iy(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? wi(i, !!o.multiple, p, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? wi(i, !!o.multiple, o.defaultValue, !0)
                      : wi(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Go] = o;
          } catch (v) {
            ke(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Lt(t, e), Gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          ke(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Lt(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Bo(t.containerInfo);
        } catch (v) {
          ke(e, e.return, v);
        }
      break;
    case 4:
      Lt(t, e), Gt(e);
      break;
    case 13:
      Lt(t, e),
        Gt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (hp = Ee())),
        r & 4 && Km(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((qe = (u = qe) || c), Lt(t, e), (qe = u)) : Lt(t, e),
        Gt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (F = e, c = e.child; c !== null; ) {
            for (f = F = c; F !== null; ) {
              switch (((d = F), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Po(4, d, d.return);
                  break;
                case 1:
                  fi(d, d.return);
                  var m = d.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (v) {
                      ke(r, n, v);
                    }
                  }
                  break;
                case 5:
                  fi(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Qm(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), (F = p)) : Qm(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = f.stateNode),
                      (l = f.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = Ly("display", a)));
              } catch (v) {
                ke(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                ke(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Lt(t, e), Gt(e), r & 4 && Km(e);
      break;
    case 21:
      break;
    default:
      Lt(t, e), Gt(e);
  }
}
function Gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (l1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Do(i, ""), (r.flags &= -33));
          var o = Ym(e);
          If(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Ym(e);
          Of(e, s, a);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      ke(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function TC(e, t, n) {
  (F = e), f1(e);
}
function f1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var i = F,
      o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || es;
      if (!a) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || qe;
        s = es;
        var u = qe;
        if (((es = a), (qe = l) && !u))
          for (F = i; F !== null; )
            (a = F),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? qm(i)
                : l !== null
                ? ((l.return = a), (F = l))
                : qm(i);
        for (; o !== null; ) (F = o), f1(o), (o = o.sibling);
        (F = i), (es = s), (qe = u);
      }
      Xm(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (F = o)) : Xm(e);
  }
}
function Xm(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              qe || Hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !qe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Im(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Im(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
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
                    f !== null && Bo(f);
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
              throw Error(I(163));
          }
        qe || (t.flags & 512 && Rf(t));
      } catch (d) {
        ke(t, t.return, d);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Qm(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function qm(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hl(4, t);
          } catch (l) {
            ke(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ke(t, i, l);
            }
          }
          var o = t.return;
          try {
            Rf(t);
          } catch (l) {
            ke(t, o, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Rf(t);
          } catch (l) {
            ke(t, a, l);
          }
      }
    } catch (l) {
      ke(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (F = s);
      break;
    }
    F = t.return;
  }
}
var EC = Math.ceil,
  cl = Rn.ReactCurrentDispatcher,
  dp = Rn.ReactCurrentOwner,
  Ot = Rn.ReactCurrentBatchConfig,
  X = 0,
  je = null,
  Oe = null,
  We = 0,
  ht = 0,
  di = cr(0),
  Me = 0,
  Zo = null,
  zr = 0,
  Gl = 0,
  pp = 0,
  To = null,
  ot = null,
  hp = 0,
  ji = 1 / 0,
  fn = null,
  fl = !1,
  Mf = null,
  Qn = null,
  ts = !1,
  Wn = null,
  dl = 0,
  Eo = 0,
  Nf = null,
  Os = -1,
  Is = 0;
function tt() {
  return X & 6 ? Ee() : Os !== -1 ? Os : (Os = Ee());
}
function qn(e) {
  return e.mode & 1
    ? X & 2 && We !== 0
      ? We & -We
      : cC.transition !== null
      ? (Is === 0 && (Is = Ky()), Is)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : t0(e.type))),
        e)
    : 1;
}
function Bt(e, t, n, r) {
  if (50 < Eo) throw ((Eo = 0), (Nf = null), Error(I(185)));
  va(e, n, r),
    (!(X & 2) || e !== je) &&
      (e === je && (!(X & 2) && (Gl |= n), Me === 4 && Bn(e, We)),
      ut(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((ji = Ee() + 500), $l && fr()));
}
function ut(e, t) {
  var n = e.callbackNode;
  c2(e, t);
  var r = Xs(e, e === je ? We : 0);
  if (r === 0)
    n !== null && am(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && am(n), t === 1))
      e.tag === 0 ? uC(Zm.bind(null, e)) : S0(Zm.bind(null, e)),
        oC(function () {
          !(X & 6) && fr();
        }),
        (n = null);
    else {
      switch (Xy(r)) {
        case 1:
          n = Vd;
          break;
        case 4:
          n = Gy;
          break;
        case 16:
          n = Ks;
          break;
        case 536870912:
          n = Yy;
          break;
        default:
          n = Ks;
      }
      n = x1(n, d1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function d1(e, t) {
  if (((Os = -1), (Is = 0), X & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (Ti() && e.callbackNode !== n) return null;
  var r = Xs(e, e === je ? We : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
  else {
    t = r;
    var i = X;
    X |= 2;
    var o = h1();
    (je !== e || We !== t) && ((fn = null), (ji = Ee() + 500), Or(e, t));
    do
      try {
        RC();
        break;
      } catch (s) {
        p1(e, s);
      }
    while (!0);
    Jd(),
      (cl.current = o),
      (X = i),
      Oe !== null ? (t = 0) : ((je = null), (We = 0), (t = Me));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = sf(e)), i !== 0 && ((r = i), (t = Lf(e, i)))), t === 1)
    )
      throw ((n = Zo), Or(e, 0), Bn(e, r), ut(e, Ee()), n);
    if (t === 6) Bn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !_C(i) &&
          ((t = pl(e, r)),
          t === 2 && ((o = sf(e)), o !== 0 && ((r = o), (t = Lf(e, o)))),
          t === 1))
      )
        throw ((n = Zo), Or(e, 0), Bn(e, r), ut(e, Ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          xr(e, ot, fn);
          break;
        case 3:
          if (
            (Bn(e, r), (r & 130023424) === r && ((t = hp + 500 - Ee()), 10 < t))
          ) {
            if (Xs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              tt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = mf(xr.bind(null, e, ot, fn), t);
            break;
          }
          xr(e, ot, fn);
          break;
        case 4:
          if ((Bn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - Vt(r);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * EC(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = mf(xr.bind(null, e, ot, fn), r);
            break;
          }
          xr(e, ot, fn);
          break;
        case 5:
          xr(e, ot, fn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return ut(e, Ee()), e.callbackNode === n ? d1.bind(null, e) : null;
}
function Lf(e, t) {
  var n = To;
  return (
    e.current.memoizedState.isDehydrated && (Or(e, t).flags |= 256),
    (e = pl(e, t)),
    e !== 2 && ((t = ot), (ot = n), t !== null && Ff(t)),
    e
  );
}
function Ff(e) {
  ot === null ? (ot = e) : ot.push.apply(ot, e);
}
function _C(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!$t(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Bn(e, t) {
  for (
    t &= ~pp,
      t &= ~Gl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Vt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Zm(e) {
  if (X & 6) throw Error(I(327));
  Ti();
  var t = Xs(e, 0);
  if (!(t & 1)) return ut(e, Ee()), null;
  var n = pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = sf(e);
    r !== 0 && ((t = r), (n = Lf(e, r)));
  }
  if (n === 1) throw ((n = Zo), Or(e, 0), Bn(e, t), ut(e, Ee()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xr(e, ot, fn),
    ut(e, Ee()),
    null
  );
}
function mp(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((ji = Ee() + 500), $l && fr());
  }
}
function Vr(e) {
  Wn !== null && Wn.tag === 0 && !(X & 6) && Ti();
  var t = X;
  X |= 1;
  var n = Ot.transition,
    r = ee;
  try {
    if (((Ot.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (Ot.transition = n), (X = t), !(X & 6) && fr();
  }
}
function vp() {
  (ht = di.current), pe(di);
}
function Or(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), iC(n)), Oe !== null))
    for (n = Oe.return; n !== null; ) {
      var r = n;
      switch ((Qd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && el();
          break;
        case 3:
          Fi(), pe(st), pe(Ze), op();
          break;
        case 5:
          ip(r);
          break;
        case 4:
          Fi();
          break;
        case 13:
          pe(xe);
          break;
        case 19:
          pe(xe);
          break;
        case 10:
          ep(r.type._context);
          break;
        case 22:
        case 23:
          vp();
      }
      n = n.return;
    }
  if (
    ((je = e),
    (Oe = e = Zn(e.current, null)),
    (We = ht = t),
    (Me = 0),
    (Zo = null),
    (pp = Gl = zr = 0),
    (ot = To = null),
    Cr !== null)
  ) {
    for (t = 0; t < Cr.length; t++)
      if (((n = Cr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Cr = null;
  }
  return e;
}
function p1(e, t) {
  do {
    var n = Oe;
    try {
      if ((Jd(), (_s.current = ul), ll)) {
        for (var r = we.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ll = !1;
      }
      if (
        ((jr = 0),
        (De = Ie = we = null),
        (Co = !1),
        (Xo = 0),
        (dp.current = null),
        n === null || n.return === null)
      ) {
        (Me = 1), (Zo = t), (Oe = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = We),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = zm(a);
          if (p !== null) {
            (p.flags &= -257),
              Vm(p, a, s, o, t),
              p.mode & 1 && jm(o, u, t),
              (t = p),
              (l = u);
            var m = t.updateQueue;
            if (m === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              jm(o, u, t), gp();
              break e;
            }
            l = Error(I(426));
          }
        } else if (ge && s.mode & 1) {
          var w = zm(a);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Vm(w, a, s, o, t),
              qd(Di(l, s));
            break e;
          }
        }
        (o = l = Di(l, s)),
          Me !== 4 && (Me = 2),
          To === null ? (To = [o]) : To.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var y = Q0(o, l, t);
              Om(o, y);
              break e;
            case 1:
              s = l;
              var h = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Qn === null || !Qn.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var b = q0(o, s, t);
                Om(o, b);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      v1(n);
    } catch (P) {
      (t = P), Oe === n && n !== null && (Oe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function h1() {
  var e = cl.current;
  return (cl.current = ul), e === null ? ul : e;
}
function gp() {
  (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
    je === null || (!(zr & 268435455) && !(Gl & 268435455)) || Bn(je, We);
}
function pl(e, t) {
  var n = X;
  X |= 2;
  var r = h1();
  (je !== e || We !== t) && ((fn = null), Or(e, t));
  do
    try {
      AC();
      break;
    } catch (i) {
      p1(e, i);
    }
  while (!0);
  if ((Jd(), (X = n), (cl.current = r), Oe !== null)) throw Error(I(261));
  return (je = null), (We = 0), Me;
}
function AC() {
  for (; Oe !== null; ) m1(Oe);
}
function RC() {
  for (; Oe !== null && !t2(); ) m1(Oe);
}
function m1(e) {
  var t = y1(e.alternate, e, ht);
  (e.memoizedProps = e.pendingProps),
    t === null ? v1(e) : (Oe = t),
    (dp.current = null);
}
function v1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = kC(n, t)), n !== null)) {
        (n.flags &= 32767), (Oe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Me = 6), (Oe = null);
        return;
      }
    } else if (((n = bC(n, t, ht)), n !== null)) {
      Oe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Oe = t;
      return;
    }
    Oe = t = e;
  } while (t !== null);
  Me === 0 && (Me = 5);
}
function xr(e, t, n) {
  var r = ee,
    i = Ot.transition;
  try {
    (Ot.transition = null), (ee = 1), OC(e, t, n, r);
  } finally {
    (Ot.transition = i), (ee = r);
  }
  return null;
}
function OC(e, t, n, r) {
  do Ti();
  while (Wn !== null);
  if (X & 6) throw Error(I(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (f2(e, o),
    e === je && ((Oe = je = null), (We = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ts ||
      ((ts = !0),
      x1(Ks, function () {
        return Ti(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ot.transition), (Ot.transition = null);
    var a = ee;
    ee = 1;
    var s = X;
    (X |= 4),
      (dp.current = null),
      PC(e, n),
      c1(n, e),
      q2(pf),
      (Qs = !!df),
      (pf = df = null),
      (e.current = n),
      TC(n),
      n2(),
      (X = s),
      (ee = a),
      (Ot.transition = o);
  } else e.current = n;
  if (
    (ts && ((ts = !1), (Wn = e), (dl = i)),
    (o = e.pendingLanes),
    o === 0 && (Qn = null),
    o2(n.stateNode),
    ut(e, Ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (fl) throw ((fl = !1), (e = Mf), (Mf = null), e);
  return (
    dl & 1 && e.tag !== 0 && Ti(),
    (o = e.pendingLanes),
    o & 1 ? (e === Nf ? Eo++ : ((Eo = 0), (Nf = e))) : (Eo = 0),
    fr(),
    null
  );
}
function Ti() {
  if (Wn !== null) {
    var e = Xy(dl),
      t = Ot.transition,
      n = ee;
    try {
      if (((Ot.transition = null), (ee = 16 > e ? 16 : e), Wn === null))
        var r = !1;
      else {
        if (((e = Wn), (Wn = null), (dl = 0), X & 6)) throw Error(I(331));
        var i = X;
        for (X |= 4, F = e.current; F !== null; ) {
          var o = F,
            a = o.child;
          if (F.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Po(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (F = f);
                  else
                    for (; F !== null; ) {
                      c = F;
                      var d = c.sibling,
                        p = c.return;
                      if ((s1(c), c === u)) {
                        F = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), (F = d);
                        break;
                      }
                      F = p;
                    }
                }
              }
              var m = o.alternate;
              if (m !== null) {
                var v = m.child;
                if (v !== null) {
                  m.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              F = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (F = a);
          else
            e: for (; F !== null; ) {
              if (((o = F), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Po(9, o, o.return);
                }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (F = y);
                break e;
              }
              F = o.return;
            }
        }
        var h = e.current;
        for (F = h; F !== null; ) {
          a = F;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (F = g);
          else
            e: for (a = h; F !== null; ) {
              if (((s = F), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hl(9, s);
                  }
                } catch (P) {
                  ke(s, s.return, P);
                }
              if (s === a) {
                F = null;
                break e;
              }
              var b = s.sibling;
              if (b !== null) {
                (b.return = s.return), (F = b);
                break e;
              }
              F = s.return;
            }
        }
        if (
          ((X = i), fr(), nn && typeof nn.onPostCommitFiberRoot == "function")
        )
          try {
            nn.onPostCommitFiberRoot(Dl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (Ot.transition = t);
    }
  }
  return !1;
}
function Jm(e, t, n) {
  (t = Di(n, t)),
    (t = Q0(e, t, 1)),
    (e = Xn(e, t, 1)),
    (t = tt()),
    e !== null && (va(e, 1, t), ut(e, t));
}
function ke(e, t, n) {
  if (e.tag === 3) Jm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Jm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Qn === null || !Qn.has(r)))
        ) {
          (e = Di(n, e)),
            (e = q0(t, e, 1)),
            (t = Xn(t, e, 1)),
            (e = tt()),
            t !== null && (va(t, 1, e), ut(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function IC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = tt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    je === e &&
      (We & n) === n &&
      (Me === 4 || (Me === 3 && (We & 130023424) === We && 500 > Ee() - hp)
        ? Or(e, 0)
        : (pp |= n)),
    ut(e, t);
}
function g1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ha), (Ha <<= 1), !(Ha & 130023424) && (Ha = 4194304))
      : (t = 1));
  var n = tt();
  (e = Cn(e, t)), e !== null && (va(e, t, n), ut(e, n));
}
function MC(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), g1(e, n);
}
function NC(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  r !== null && r.delete(t), g1(e, n);
}
var y1;
y1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || st.current) at = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (at = !1), wC(e, t, n);
      at = !!(e.flags & 131072);
    }
  else (at = !1), ge && t.flags & 1048576 && w0(t, rl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Rs(e, t), (e = t.pendingProps);
      var i = Mi(t, Ze.current);
      Pi(t, n), (i = sp(null, t, r, e, i, n));
      var o = lp();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            lt(r) ? ((o = !0), tl(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            np(t),
            (i.updater = Wl),
            (t.stateNode = i),
            (i._reactInternals = t),
            bf(t, r, e, n),
            (t = Pf(null, t, r, !0, o, n)))
          : ((t.tag = 0), ge && o && Xd(t), et(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Rs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = FC(r)),
          (e = Ft(r, e)),
          i)
        ) {
          case 0:
            t = Cf(null, t, r, e, n);
            break e;
          case 1:
            t = Wm(null, t, r, e, n);
            break e;
          case 11:
            t = Bm(null, t, r, e, n);
            break e;
          case 14:
            t = $m(null, t, r, Ft(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ft(r, i)),
        Cf(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ft(r, i)),
        Wm(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((t1(t), e === null)) throw Error(I(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          P0(e, t),
          al(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Di(Error(I(423)), t)), (t = Um(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Di(Error(I(424)), t)), (t = Um(e, t, r, n, i));
            break e;
          } else
            for (
              mt = Kn(t.stateNode.containerInfo.firstChild),
                vt = t,
                ge = !0,
                jt = null,
                n = A0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ni(), r === i)) {
            t = Pn(e, t, n);
            break e;
          }
          et(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        R0(t),
        e === null && xf(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        hf(r, i) ? (a = null) : o !== null && hf(r, o) && (t.flags |= 32),
        e1(e, t),
        et(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && xf(t), null;
    case 13:
      return n1(e, t, n);
    case 4:
      return (
        rp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Li(t, null, r, n)) : et(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ft(r, i)),
        Bm(e, t, r, i, n)
      );
    case 7:
      return et(e, t, t.pendingProps, n), t.child;
    case 8:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          se(il, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if ($t(o.value, a)) {
            if (o.children === i.children && !st.current) {
              t = Pn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                a = o.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = yn(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Sf(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(I(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  Sf(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        et(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Pi(t, n),
        (i = It(i)),
        (r = r(i)),
        (t.flags |= 1),
        et(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ft(r, t.pendingProps)),
        (i = Ft(r.type, i)),
        $m(e, t, r, i, n)
      );
    case 15:
      return Z0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ft(r, i)),
        Rs(e, t),
        (t.tag = 1),
        lt(r) ? ((e = !0), tl(t)) : (e = !1),
        Pi(t, n),
        E0(t, r, i),
        bf(t, r, i, n),
        Pf(null, t, r, !0, e, n)
      );
    case 19:
      return r1(e, t, n);
    case 22:
      return J0(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function x1(e, t) {
  return Hy(e, t);
}
function LC(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Rt(e, t, n, r) {
  return new LC(e, t, n, r);
}
function yp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function FC(e) {
  if (typeof e == "function") return yp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Dd)) return 11;
    if (e === jd) return 14;
  }
  return 2;
}
function Zn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ms(e, t, n, r, i, o) {
  var a = 2;
  if (((r = e), typeof e == "function")) yp(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case ni:
        return Ir(n.children, i, o, t);
      case Fd:
        (a = 8), (i |= 8);
        break;
      case Hc:
        return (
          (e = Rt(12, n, t, i | 2)), (e.elementType = Hc), (e.lanes = o), e
        );
      case Gc:
        return (e = Rt(13, n, t, i)), (e.elementType = Gc), (e.lanes = o), e;
      case Yc:
        return (e = Rt(19, n, t, i)), (e.elementType = Yc), (e.lanes = o), e;
      case _y:
        return Yl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ty:
              a = 10;
              break e;
            case Ey:
              a = 9;
              break e;
            case Dd:
              a = 11;
              break e;
            case jd:
              a = 14;
              break e;
            case Dn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Rt(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ir(e, t, n, r) {
  return (e = Rt(7, e, r, t)), (e.lanes = n), e;
}
function Yl(e, t, n, r) {
  return (
    (e = Rt(22, e, r, t)),
    (e.elementType = _y),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function dc(e, t, n) {
  return (e = Rt(6, e, null, t)), (e.lanes = n), e;
}
function pc(e, t, n) {
  return (
    (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function DC(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yu(0)),
    (this.expirationTimes = Yu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function xp(e, t, n, r, i, o, a, s, l) {
  return (
    (e = new DC(e, t, n, s, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Rt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    np(o),
    e
  );
}
function jC(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ti,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function S1(e) {
  if (!e) return rr;
  e = e._reactInternals;
  e: {
    if (Hr(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (lt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (lt(n)) return x0(e, n, t);
  }
  return t;
}
function w1(e, t, n, r, i, o, a, s, l) {
  return (
    (e = xp(n, r, !0, e, i, o, a, s, l)),
    (e.context = S1(null)),
    (n = e.current),
    (r = tt()),
    (i = qn(n)),
    (o = yn(r, i)),
    (o.callback = t ?? null),
    Xn(n, o, i),
    (e.current.lanes = i),
    va(e, i, r),
    ut(e, r),
    e
  );
}
function Kl(e, t, n, r) {
  var i = t.current,
    o = tt(),
    a = qn(i);
  return (
    (n = S1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yn(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xn(i, t, a)),
    e !== null && (Bt(e, i, a, o), Es(e, i, a)),
    a
  );
}
function hl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ev(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Sp(e, t) {
  ev(e, t), (e = e.alternate) && ev(e, t);
}
function zC() {
  return null;
}
var b1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function wp(e) {
  this._internalRoot = e;
}
Xl.prototype.render = wp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  Kl(e, t, null, null);
};
Xl.prototype.unmount = wp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vr(function () {
      Kl(null, e, null, null);
    }),
      (t[kn] = null);
  }
};
function Xl(e) {
  this._internalRoot = e;
}
Xl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vn.length && t !== 0 && t < Vn[n].priority; n++);
    Vn.splice(n, 0, e), n === 0 && e0(e);
  }
};
function bp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ql(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function tv() {}
function VC(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = hl(a);
        o.call(u);
      };
    }
    var a = w1(t, r, e, 0, null, !1, !1, "", tv);
    return (
      (e._reactRootContainer = a),
      (e[kn] = a.current),
      Uo(e.nodeType === 8 ? e.parentNode : e),
      Vr(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = hl(l);
      s.call(u);
    };
  }
  var l = xp(e, 0, !1, null, null, !1, !1, "", tv);
  return (
    (e._reactRootContainer = l),
    (e[kn] = l.current),
    Uo(e.nodeType === 8 ? e.parentNode : e),
    Vr(function () {
      Kl(t, l, n, r);
    }),
    l
  );
}
function ql(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var l = hl(a);
        s.call(l);
      };
    }
    Kl(t, a, e, i);
  } else a = VC(n, t, e, i, r);
  return hl(a);
}
Qy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ho(t.pendingLanes);
        n !== 0 &&
          (Bd(t, n | 1), ut(t, Ee()), !(X & 6) && ((ji = Ee() + 500), fr()));
      }
      break;
    case 13:
      Vr(function () {
        var r = Cn(e, 1);
        if (r !== null) {
          var i = tt();
          Bt(r, e, 1, i);
        }
      }),
        Sp(e, 1);
  }
};
$d = function (e) {
  if (e.tag === 13) {
    var t = Cn(e, 134217728);
    if (t !== null) {
      var n = tt();
      Bt(t, e, 134217728, n);
    }
    Sp(e, 134217728);
  }
};
qy = function (e) {
  if (e.tag === 13) {
    var t = qn(e),
      n = Cn(e, t);
    if (n !== null) {
      var r = tt();
      Bt(n, e, t, r);
    }
    Sp(e, t);
  }
};
Zy = function () {
  return ee;
};
Jy = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
rf = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Qc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Bl(r);
            if (!i) throw Error(I(90));
            Ry(r), Qc(r, i);
          }
        }
      }
      break;
    case "textarea":
      Iy(e, n);
      break;
    case "select":
      (t = n.value), t != null && wi(e, !!n.multiple, t, !1);
  }
};
zy = mp;
Vy = Vr;
var BC = { usingClientEntryPoint: !1, Events: [ya, ai, Bl, Dy, jy, mp] },
  ao = {
    findFiberByHostInstance: kr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  $C = {
    bundleType: ao.bundleType,
    version: ao.version,
    rendererPackageName: ao.rendererPackageName,
    rendererConfig: ao.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ao.findFiberByHostInstance || zC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ns.isDisabled && ns.supportsFiber)
    try {
      (Dl = ns.inject($C)), (nn = ns);
    } catch {}
}
St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = BC;
St.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bp(t)) throw Error(I(200));
  return jC(e, t, null, n);
};
St.createRoot = function (e, t) {
  if (!bp(e)) throw Error(I(299));
  var n = !1,
    r = "",
    i = b1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = xp(e, 1, !1, null, null, n, !1, r, i)),
    (e[kn] = t.current),
    Uo(e.nodeType === 8 ? e.parentNode : e),
    new wp(t)
  );
};
St.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return (e = Wy(t)), (e = e === null ? null : e.stateNode), e;
};
St.flushSync = function (e) {
  return Vr(e);
};
St.hydrate = function (e, t, n) {
  if (!Ql(t)) throw Error(I(200));
  return ql(null, e, t, !0, n);
};
St.hydrateRoot = function (e, t, n) {
  if (!bp(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    a = b1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = w1(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[kn] = t.current),
    Uo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Xl(t);
};
St.render = function (e, t, n) {
  if (!Ql(t)) throw Error(I(200));
  return ql(null, e, t, !1, n);
};
St.unmountComponentAtNode = function (e) {
  if (!Ql(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (Vr(function () {
        ql(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[kn] = null);
        });
      }),
      !0)
    : !1;
};
St.unstable_batchedUpdates = mp;
St.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ql(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return ql(e, t, n, !1, r);
};
St.version = "18.2.0-next-9e3b772b8-20220608";
function k1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k1);
    } catch (e) {
      console.error(e);
    }
}
k1(), (wy.exports = St);
var kp = wy.exports,
  nv = kp;
(Wc.createRoot = nv.createRoot), (Wc.hydrateRoot = nv.hydrateRoot);
function WC(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function dr(e = {}) {
  const {
      name: t,
      strict: n = !0,
      hookName: r = "useContext",
      providerName: i = "Provider",
      errorMessage: o,
      defaultValue: a,
    } = e,
    s = S.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = S.useContext(s);
    if (!c && n) {
      const f = new Error(o ?? WC(r, i));
      throw (
        ((f.name = "ContextError"),
        (u = Error.captureStackTrace) == null || u.call(Error, f, l),
        f)
      );
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [IN, UC] = dr({ strict: !1, name: "ButtonGroupContext" });
function HC(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function GC(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var YC = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (i) {
        var o;
        r.tags.length === 0
          ? r.insertionPoint
            ? (o = r.insertionPoint.nextSibling)
            : r.prepend
            ? (o = r.container.firstChild)
            : (o = r.before)
          : (o = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(i, o),
          r.tags.push(i);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(GC(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = HC(i);
          try {
            o.insertRule(r, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Xe = "-ms-",
  ml = "-moz-",
  Z = "-webkit-",
  C1 = "comm",
  Cp = "rule",
  Pp = "decl",
  KC = "@import",
  P1 = "@keyframes",
  XC = "@layer",
  QC = Math.abs,
  Zl = String.fromCharCode,
  qC = Object.assign;
function ZC(e, t) {
  return $e(e, 0) ^ 45
    ? (((((((t << 2) ^ $e(e, 0)) << 2) ^ $e(e, 1)) << 2) ^ $e(e, 2)) << 2) ^
        $e(e, 3)
    : 0;
}
function T1(e) {
  return e.trim();
}
function JC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function J(e, t, n) {
  return e.replace(t, n);
}
function Df(e, t) {
  return e.indexOf(t);
}
function $e(e, t) {
  return e.charCodeAt(t) | 0;
}
function Jo(e, t, n) {
  return e.slice(t, n);
}
function qt(e) {
  return e.length;
}
function Tp(e) {
  return e.length;
}
function rs(e, t) {
  return t.push(e), e;
}
function eP(e, t) {
  return e.map(t).join("");
}
var Jl = 1,
  zi = 1,
  E1 = 0,
  ct = 0,
  Re = 0,
  Yi = "";
function eu(e, t, n, r, i, o, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Jl,
    column: zi,
    length: a,
    return: "",
  };
}
function so(e, t) {
  return qC(eu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function tP() {
  return Re;
}
function nP() {
  return (
    (Re = ct > 0 ? $e(Yi, --ct) : 0), zi--, Re === 10 && ((zi = 1), Jl--), Re
  );
}
function gt() {
  return (
    (Re = ct < E1 ? $e(Yi, ct++) : 0), zi++, Re === 10 && ((zi = 1), Jl++), Re
  );
}
function on() {
  return $e(Yi, ct);
}
function Ns() {
  return ct;
}
function Sa(e, t) {
  return Jo(Yi, e, t);
}
function ea(e) {
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
function _1(e) {
  return (Jl = zi = 1), (E1 = qt((Yi = e))), (ct = 0), [];
}
function A1(e) {
  return (Yi = ""), e;
}
function Ls(e) {
  return T1(Sa(ct - 1, jf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function rP(e) {
  for (; (Re = on()) && Re < 33; ) gt();
  return ea(e) > 2 || ea(Re) > 3 ? "" : " ";
}
function iP(e, t) {
  for (
    ;
    --t &&
    gt() &&
    !(Re < 48 || Re > 102 || (Re > 57 && Re < 65) || (Re > 70 && Re < 97));

  );
  return Sa(e, Ns() + (t < 6 && on() == 32 && gt() == 32));
}
function jf(e) {
  for (; gt(); )
    switch (Re) {
      case e:
        return ct;
      case 34:
      case 39:
        e !== 34 && e !== 39 && jf(Re);
        break;
      case 40:
        e === 41 && jf(e);
        break;
      case 92:
        gt();
        break;
    }
  return ct;
}
function oP(e, t) {
  for (; gt() && e + Re !== 57; ) if (e + Re === 84 && on() === 47) break;
  return "/*" + Sa(t, ct - 1) + "*" + Zl(e === 47 ? e : gt());
}
function aP(e) {
  for (; !ea(on()); ) gt();
  return Sa(e, ct);
}
function sP(e) {
  return A1(Fs("", null, null, null, [""], (e = _1(e)), 0, [0], e));
}
function Fs(e, t, n, r, i, o, a, s, l) {
  for (
    var u = 0,
      c = 0,
      f = a,
      d = 0,
      p = 0,
      m = 0,
      v = 1,
      w = 1,
      y = 1,
      h = 0,
      g = "",
      b = i,
      P = o,
      A = r,
      T = g;
    w;

  )
    switch (((m = h), (h = gt()))) {
      case 40:
        if (m != 108 && $e(T, f - 1) == 58) {
          Df((T += J(Ls(h), "&", "&\f")), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Ls(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += rP(m);
        break;
      case 92:
        T += iP(Ns() - 1, 7);
        continue;
      case 47:
        switch (on()) {
          case 42:
          case 47:
            rs(lP(oP(gt(), Ns()), t, n), l);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * v:
        s[u++] = qt(T) * y;
      case 125 * v:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            y == -1 && (T = J(T, /\f/g, "")),
              p > 0 &&
                qt(T) - f &&
                rs(
                  p > 32
                    ? iv(T + ";", r, n, f - 1)
                    : iv(J(T, " ", "") + ";", r, n, f - 2),
                  l
                );
            break;
          case 59:
            T += ";";
          default:
            if (
              (rs((A = rv(T, t, n, u, c, i, s, g, (b = []), (P = []), f)), o),
              h === 123)
            )
              if (c === 0) Fs(T, t, A, A, b, o, f, s, P);
              else
                switch (d === 99 && $e(T, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Fs(
                      e,
                      A,
                      A,
                      r && rs(rv(e, A, A, 0, 0, i, s, g, i, (b = []), f), P),
                      i,
                      P,
                      f,
                      s,
                      r ? b : P
                    );
                    break;
                  default:
                    Fs(T, A, A, A, [""], P, 0, s, P);
                }
        }
        (u = c = p = 0), (v = y = 1), (g = T = ""), (f = a);
        break;
      case 58:
        (f = 1 + qt(T)), (p = m);
      default:
        if (v < 1) {
          if (h == 123) --v;
          else if (h == 125 && v++ == 0 && nP() == 125) continue;
        }
        switch (((T += Zl(h)), h * v)) {
          case 38:
            y = c > 0 ? 1 : ((T += "\f"), -1);
            break;
          case 44:
            (s[u++] = (qt(T) - 1) * y), (y = 1);
            break;
          case 64:
            on() === 45 && (T += Ls(gt())),
              (d = on()),
              (c = f = qt((g = T += aP(Ns())))),
              h++;
            break;
          case 45:
            m === 45 && qt(T) == 2 && (v = 0);
        }
    }
  return o;
}
function rv(e, t, n, r, i, o, a, s, l, u, c) {
  for (
    var f = i - 1, d = i === 0 ? o : [""], p = Tp(d), m = 0, v = 0, w = 0;
    m < r;
    ++m
  )
    for (var y = 0, h = Jo(e, f + 1, (f = QC((v = a[m])))), g = e; y < p; ++y)
      (g = T1(v > 0 ? d[y] + " " + h : J(h, /&\f/g, d[y]))) && (l[w++] = g);
  return eu(e, t, n, i === 0 ? Cp : s, l, u, c);
}
function lP(e, t, n) {
  return eu(e, t, n, C1, Zl(tP()), Jo(e, 2, -2), 0);
}
function iv(e, t, n, r) {
  return eu(e, t, n, Pp, Jo(e, 0, r), Jo(e, r + 1, -1), r);
}
function Ei(e, t) {
  for (var n = "", r = Tp(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
  return n;
}
function uP(e, t, n, r) {
  switch (e.type) {
    case XC:
      if (e.children.length) break;
    case KC:
    case Pp:
      return (e.return = e.return || e.value);
    case C1:
      return "";
    case P1:
      return (e.return = e.value + "{" + Ei(e.children, r) + "}");
    case Cp:
      e.value = e.props.join(",");
  }
  return qt((n = Ei(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function cP(e) {
  var t = Tp(e);
  return function (n, r, i, o) {
    for (var a = "", s = 0; s < t; s++) a += e[s](n, r, i, o) || "";
    return a;
  };
}
function fP(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function R1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var dP = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = on()), i === 38 && o === 12 && (n[r] = 1), !ea(o);

    )
      gt();
    return Sa(t, ct);
  },
  pP = function (t, n) {
    var r = -1,
      i = 44;
    do
      switch (ea(i)) {
        case 0:
          i === 38 && on() === 12 && (n[r] = 1), (t[r] += dP(ct - 1, n, r));
          break;
        case 2:
          t[r] += Ls(i);
          break;
        case 4:
          if (i === 44) {
            (t[++r] = on() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Zl(i);
      }
    while ((i = gt()));
    return t;
  },
  hP = function (t, n) {
    return A1(pP(_1(t), n));
  },
  ov = new WeakMap(),
  mP = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          i = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ov.get(r)) &&
        !i
      ) {
        ov.set(t, !0);
        for (
          var o = [], a = hP(n, o), s = r.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = o[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
      }
    }
  },
  vP = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function O1(e, t) {
  switch (ZC(e, t)) {
    case 5103:
      return Z + "print-" + e + e;
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
      return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + ml + e + Xe + e + e;
    case 6828:
    case 4268:
      return Z + e + Xe + e + e;
    case 6165:
      return Z + e + Xe + "flex-" + e + e;
    case 5187:
      return (
        Z + e + J(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + Xe + "flex-$1$2") + e
      );
    case 5443:
      return Z + e + Xe + "flex-item-" + J(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Z +
        e +
        Xe +
        "flex-line-pack" +
        J(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Z + e + Xe + J(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + Xe + J(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Z +
        "box-" +
        J(e, "-grow", "") +
        Z +
        e +
        Xe +
        J(e, "grow", "positive") +
        e
      );
    case 4554:
      return Z + J(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    case 6187:
      return (
        J(J(J(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return J(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
      return (
        J(
          J(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + Xe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Z +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return J(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
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
      if (qt(e) - 1 - t > 6)
        switch ($e(e, t + 1)) {
          case 109:
            if ($e(e, t + 4) !== 45) break;
          case 102:
            return (
              J(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Z +
                  "$2-$3$1" +
                  ml +
                  ($e(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Df(e, "stretch")
              ? O1(J(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if ($e(e, t + 1) !== 115) break;
    case 6444:
      switch ($e(e, qt(e) - 3 - (~Df(e, "!important") && 10))) {
        case 107:
          return J(e, ":", ":" + Z) + e;
        case 101:
          return (
            J(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Z +
                ($e(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Z +
                "$2$3$1" +
                Xe +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch ($e(e, t + 11)) {
        case 114:
          return Z + e + Xe + J(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + Xe + J(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + Xe + J(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + Xe + e + e;
  }
  return e;
}
var gP = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Pp:
          t.return = O1(t.value, t.length);
          break;
        case P1:
          return Ei([so(t, { value: J(t.value, "@", "@" + Z) })], i);
        case Cp:
          if (t.length)
            return eP(t.props, function (o) {
              switch (JC(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Ei(
                    [so(t, { props: [J(o, /:(read-\w+)/, ":" + ml + "$1")] })],
                    i
                  );
                case "::placeholder":
                  return Ei(
                    [
                      so(t, {
                        props: [J(o, /:(plac\w+)/, ":" + Z + "input-$1")],
                      }),
                      so(t, { props: [J(o, /:(plac\w+)/, ":" + ml + "$1")] }),
                      so(t, { props: [J(o, /:(plac\w+)/, Xe + "input-$1")] }),
                    ],
                    i
                  );
              }
              return "";
            });
      }
  },
  yP = [gP],
  xP = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var w = v.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || yP,
      o = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (
            var w = v.getAttribute("data-emotion").split(" "), y = 1;
            y < w.length;
            y++
          )
            o[w[y]] = !0;
          s.push(v);
        }
      );
    var l,
      u = [mP, vP];
    {
      var c,
        f = [
          uP,
          fP(function (v) {
            c.insert(v);
          }),
        ],
        d = cP(u.concat(i, f)),
        p = function (w) {
          return Ei(sP(w), d);
        };
      l = function (w, y, h, g) {
        (c = h),
          p(w ? w + "{" + y.styles + "}" : y.styles),
          g && (m.inserted[y.name] = !0);
      };
    }
    var m = {
      key: n,
      sheet: new YC({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: l,
    };
    return m.sheet.hydrate(s), m;
  };
function Vi() {
  return (
    (Vi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vi.apply(this, arguments)
  );
}
var I1 = { exports: {} },
  ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ze = typeof Symbol == "function" && Symbol.for,
  Ep = ze ? Symbol.for("react.element") : 60103,
  _p = ze ? Symbol.for("react.portal") : 60106,
  tu = ze ? Symbol.for("react.fragment") : 60107,
  nu = ze ? Symbol.for("react.strict_mode") : 60108,
  ru = ze ? Symbol.for("react.profiler") : 60114,
  iu = ze ? Symbol.for("react.provider") : 60109,
  ou = ze ? Symbol.for("react.context") : 60110,
  Ap = ze ? Symbol.for("react.async_mode") : 60111,
  au = ze ? Symbol.for("react.concurrent_mode") : 60111,
  su = ze ? Symbol.for("react.forward_ref") : 60112,
  lu = ze ? Symbol.for("react.suspense") : 60113,
  SP = ze ? Symbol.for("react.suspense_list") : 60120,
  uu = ze ? Symbol.for("react.memo") : 60115,
  cu = ze ? Symbol.for("react.lazy") : 60116,
  wP = ze ? Symbol.for("react.block") : 60121,
  bP = ze ? Symbol.for("react.fundamental") : 60117,
  kP = ze ? Symbol.for("react.responder") : 60118,
  CP = ze ? Symbol.for("react.scope") : 60119;
function bt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ep:
        switch (((e = e.type), e)) {
          case Ap:
          case au:
          case tu:
          case ru:
          case nu:
          case lu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ou:
              case su:
              case cu:
              case uu:
              case iu:
                return e;
              default:
                return t;
            }
        }
      case _p:
        return t;
    }
  }
}
function M1(e) {
  return bt(e) === au;
}
ne.AsyncMode = Ap;
ne.ConcurrentMode = au;
ne.ContextConsumer = ou;
ne.ContextProvider = iu;
ne.Element = Ep;
ne.ForwardRef = su;
ne.Fragment = tu;
ne.Lazy = cu;
ne.Memo = uu;
ne.Portal = _p;
ne.Profiler = ru;
ne.StrictMode = nu;
ne.Suspense = lu;
ne.isAsyncMode = function (e) {
  return M1(e) || bt(e) === Ap;
};
ne.isConcurrentMode = M1;
ne.isContextConsumer = function (e) {
  return bt(e) === ou;
};
ne.isContextProvider = function (e) {
  return bt(e) === iu;
};
ne.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ep;
};
ne.isForwardRef = function (e) {
  return bt(e) === su;
};
ne.isFragment = function (e) {
  return bt(e) === tu;
};
ne.isLazy = function (e) {
  return bt(e) === cu;
};
ne.isMemo = function (e) {
  return bt(e) === uu;
};
ne.isPortal = function (e) {
  return bt(e) === _p;
};
ne.isProfiler = function (e) {
  return bt(e) === ru;
};
ne.isStrictMode = function (e) {
  return bt(e) === nu;
};
ne.isSuspense = function (e) {
  return bt(e) === lu;
};
ne.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === tu ||
    e === au ||
    e === ru ||
    e === nu ||
    e === lu ||
    e === SP ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === cu ||
        e.$$typeof === uu ||
        e.$$typeof === iu ||
        e.$$typeof === ou ||
        e.$$typeof === su ||
        e.$$typeof === bP ||
        e.$$typeof === kP ||
        e.$$typeof === CP ||
        e.$$typeof === wP))
  );
};
ne.typeOf = bt;
I1.exports = ne;
var PP = I1.exports,
  N1 = PP,
  TP = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  EP = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  L1 = {};
L1[N1.ForwardRef] = TP;
L1[N1.Memo] = EP;
var _P = !0;
function AP(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : (r += i + " ");
    }),
    r
  );
}
var F1 = function (t, n, r) {
    var i = t.key + "-" + n.name;
    (r === !1 || _P === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = n.styles);
  },
  RP = function (t, n, r) {
    F1(t, n, r);
    var i = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var o = n;
      do t.insert(n === o ? "." + i : "", o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function OP(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var IP = {
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
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  MP = /[A-Z]|^ms/g,
  NP = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  D1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  av = function (t) {
    return t != null && typeof t != "boolean";
  },
  hc = R1(function (e) {
    return D1(e) ? e : e.replace(MP, "-$&").toLowerCase();
  }),
  sv = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(NP, function (r, i, o) {
            return (Zt = { name: i, styles: o, next: Zt }), i;
          });
    }
    return IP[t] !== 1 && !D1(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function ta(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Zt = { name: n.name, styles: n.styles, next: Zt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Zt = { name: r.name, styles: r.styles, next: Zt }), (r = r.next);
        var i = n.styles + ";";
        return i;
      }
      return LP(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var o = Zt,
          a = n(e);
        return (Zt = o), ta(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function LP(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += ta(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var a = n[o];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (r += o + "{" + t[a] + "}")
          : av(a) && (r += hc(o) + ":" + sv(o, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          av(a[s]) && (r += hc(o) + ":" + sv(o, a[s]) + ";");
      else {
        var l = ta(e, t, a);
        switch (o) {
          case "animation":
          case "animationName": {
            r += hc(o) + ":" + l + ";";
            break;
          }
          default:
            r += o + "{" + l + "}";
        }
      }
    }
  return r;
}
var lv = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Zt,
  j1 = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var i = !0,
      o = "";
    Zt = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((i = !1), (o += ta(r, n, a)))
      : (o += a[0]);
    for (var s = 1; s < t.length; s++) (o += ta(r, n, t[s])), i && (o += a[s]);
    lv.lastIndex = 0;
    for (var l = "", u; (u = lv.exec(o)) !== null; ) l += "-" + u[1];
    var c = OP(o) + l;
    return { name: c, styles: o, next: Zt };
  },
  FP = function (t) {
    return t();
  },
  DP = Qh.useInsertionEffect ? Qh.useInsertionEffect : !1,
  jP = DP || FP,
  z1 = S.createContext(typeof HTMLElement < "u" ? xP({ key: "css" }) : null);
z1.Provider;
var zP = function (t) {
    return S.forwardRef(function (n, r) {
      var i = S.useContext(z1);
      return t(n, i, r);
    });
  },
  V1 = S.createContext({});
function VP() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return j1(t);
}
var BP = function () {
  var t = VP.apply(void 0, arguments),
    n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
};
function $P() {
  const e = S.useContext(V1);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var B1 = S.createContext({});
B1.displayName = "ColorModeContext";
function $1() {
  const e = S.useContext(B1);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var vl =
  globalThis != null && globalThis.document ? S.useLayoutEffect : S.useEffect;
function WP() {
  const e = $1(),
    t = $P();
  return { ...e, theme: t };
}
var ye = (...e) => e.filter(Boolean).join(" ");
function Jn(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Tr(e, ...t) {
  return UP(e) ? e(...t) : e;
}
var UP = (e) => typeof e == "function",
  Xt = (e) => (e ? "" : void 0),
  mc = (e) => (e ? !0 : void 0);
function Er(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var gl = { exports: {} };
gl.exports;
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    i = 800,
    o = 16,
    a = 9007199254740991,
    s = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    f = "[object Date]",
    d = "[object Error]",
    p = "[object Function]",
    m = "[object GeneratorFunction]",
    v = "[object Map]",
    w = "[object Number]",
    y = "[object Null]",
    h = "[object Object]",
    g = "[object Proxy]",
    b = "[object RegExp]",
    P = "[object Set]",
    A = "[object String]",
    T = "[object Undefined]",
    R = "[object WeakMap]",
    O = "[object ArrayBuffer]",
    D = "[object DataView]",
    Q = "[object Float32Array]",
    Le = "[object Float64Array]",
    _e = "[object Int8Array]",
    ie = "[object Int16Array]",
    ue = "[object Int32Array]",
    He = "[object Uint8Array]",
    it = "[object Uint8ClampedArray]",
    M = "[object Uint16Array]",
    B = "[object Uint32Array]",
    $ = /[\\^$.*+?()[\]{}|]/g,
    z = /^\[object .+?Constructor\]$/,
    re = /^(?:0|[1-9]\d*)$/,
    H = {};
  (H[Q] = H[Le] = H[_e] = H[ie] = H[ue] = H[He] = H[it] = H[M] = H[B] = !0),
    (H[s] =
      H[l] =
      H[O] =
      H[c] =
      H[D] =
      H[f] =
      H[d] =
      H[p] =
      H[v] =
      H[w] =
      H[h] =
      H[b] =
      H[P] =
      H[A] =
      H[R] =
        !1);
  var Ge = typeof za == "object" && za && za.Object === Object && za,
    Wt = typeof self == "object" && self && self.Object === Object && self,
    Te = Ge || Wt || Function("return this")(),
    Fe = t && !t.nodeType && t,
    dt = Fe && !0 && e && !e.nodeType && e,
    Ut = dt && dt.exports === Fe,
    Nt = Ut && Ge.process,
    Ht = (function () {
      try {
        var x = dt && dt.require && dt.require("util").types;
        return x || (Nt && Nt.binding && Nt.binding("util"));
      } catch {}
    })(),
    Xi = Ht && Ht.isTypedArray;
  function Ra(x, k, E) {
    switch (E.length) {
      case 0:
        return x.call(k);
      case 1:
        return x.call(k, E[0]);
      case 2:
        return x.call(k, E[0], E[1]);
      case 3:
        return x.call(k, E[0], E[1], E[2]);
    }
    return x.apply(k, E);
  }
  function ab(x, k) {
    for (var E = -1, N = Array(x); ++E < x; ) N[E] = k(E);
    return N;
  }
  function sb(x) {
    return function (k) {
      return x(k);
    };
  }
  function lb(x, k) {
    return x == null ? void 0 : x[k];
  }
  function ub(x, k) {
    return function (E) {
      return x(k(E));
    };
  }
  var cb = Array.prototype,
    fb = Function.prototype,
    Oa = Object.prototype,
    Ou = Te["__core-js_shared__"],
    Ia = fb.toString,
    ln = Oa.hasOwnProperty,
    _h = (function () {
      var x = /[^.]+$/.exec((Ou && Ou.keys && Ou.keys.IE_PROTO) || "");
      return x ? "Symbol(src)_1." + x : "";
    })(),
    Ah = Oa.toString,
    db = Ia.call(Object),
    pb = RegExp(
      "^" +
        Ia.call(ln)
          .replace($, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Ma = Ut ? Te.Buffer : void 0,
    Rh = Te.Symbol,
    Oh = Te.Uint8Array,
    Ih = Ma ? Ma.allocUnsafe : void 0,
    Mh = ub(Object.getPrototypeOf, Object),
    Nh = Object.create,
    hb = Oa.propertyIsEnumerable,
    mb = cb.splice,
    hr = Rh ? Rh.toStringTag : void 0,
    Na = (function () {
      try {
        var x = Nu(Object, "defineProperty");
        return x({}, "", {}), x;
      } catch {}
    })(),
    vb = Ma ? Ma.isBuffer : void 0,
    Lh = Math.max,
    gb = Date.now,
    Fh = Nu(Te, "Map"),
    Qi = Nu(Object, "create"),
    yb = (function () {
      function x() {}
      return function (k) {
        if (!vr(k)) return {};
        if (Nh) return Nh(k);
        x.prototype = k;
        var E = new x();
        return (x.prototype = void 0), E;
      };
    })();
  function mr(x) {
    var k = -1,
      E = x == null ? 0 : x.length;
    for (this.clear(); ++k < E; ) {
      var N = x[k];
      this.set(N[0], N[1]);
    }
  }
  function xb() {
    (this.__data__ = Qi ? Qi(null) : {}), (this.size = 0);
  }
  function Sb(x) {
    var k = this.has(x) && delete this.__data__[x];
    return (this.size -= k ? 1 : 0), k;
  }
  function wb(x) {
    var k = this.__data__;
    if (Qi) {
      var E = k[x];
      return E === r ? void 0 : E;
    }
    return ln.call(k, x) ? k[x] : void 0;
  }
  function bb(x) {
    var k = this.__data__;
    return Qi ? k[x] !== void 0 : ln.call(k, x);
  }
  function kb(x, k) {
    var E = this.__data__;
    return (
      (this.size += this.has(x) ? 0 : 1),
      (E[x] = Qi && k === void 0 ? r : k),
      this
    );
  }
  (mr.prototype.clear = xb),
    (mr.prototype.delete = Sb),
    (mr.prototype.get = wb),
    (mr.prototype.has = bb),
    (mr.prototype.set = kb);
  function un(x) {
    var k = -1,
      E = x == null ? 0 : x.length;
    for (this.clear(); ++k < E; ) {
      var N = x[k];
      this.set(N[0], N[1]);
    }
  }
  function Cb() {
    (this.__data__ = []), (this.size = 0);
  }
  function Pb(x) {
    var k = this.__data__,
      E = La(k, x);
    if (E < 0) return !1;
    var N = k.length - 1;
    return E == N ? k.pop() : mb.call(k, E, 1), --this.size, !0;
  }
  function Tb(x) {
    var k = this.__data__,
      E = La(k, x);
    return E < 0 ? void 0 : k[E][1];
  }
  function Eb(x) {
    return La(this.__data__, x) > -1;
  }
  function _b(x, k) {
    var E = this.__data__,
      N = La(E, x);
    return N < 0 ? (++this.size, E.push([x, k])) : (E[N][1] = k), this;
  }
  (un.prototype.clear = Cb),
    (un.prototype.delete = Pb),
    (un.prototype.get = Tb),
    (un.prototype.has = Eb),
    (un.prototype.set = _b);
  function Xr(x) {
    var k = -1,
      E = x == null ? 0 : x.length;
    for (this.clear(); ++k < E; ) {
      var N = x[k];
      this.set(N[0], N[1]);
    }
  }
  function Ab() {
    (this.size = 0),
      (this.__data__ = {
        hash: new mr(),
        map: new (Fh || un)(),
        string: new mr(),
      });
  }
  function Rb(x) {
    var k = Da(this, x).delete(x);
    return (this.size -= k ? 1 : 0), k;
  }
  function Ob(x) {
    return Da(this, x).get(x);
  }
  function Ib(x) {
    return Da(this, x).has(x);
  }
  function Mb(x, k) {
    var E = Da(this, x),
      N = E.size;
    return E.set(x, k), (this.size += E.size == N ? 0 : 1), this;
  }
  (Xr.prototype.clear = Ab),
    (Xr.prototype.delete = Rb),
    (Xr.prototype.get = Ob),
    (Xr.prototype.has = Ib),
    (Xr.prototype.set = Mb);
  function Qr(x) {
    var k = (this.__data__ = new un(x));
    this.size = k.size;
  }
  function Nb() {
    (this.__data__ = new un()), (this.size = 0);
  }
  function Lb(x) {
    var k = this.__data__,
      E = k.delete(x);
    return (this.size = k.size), E;
  }
  function Fb(x) {
    return this.__data__.get(x);
  }
  function Db(x) {
    return this.__data__.has(x);
  }
  function jb(x, k) {
    var E = this.__data__;
    if (E instanceof un) {
      var N = E.__data__;
      if (!Fh || N.length < n - 1)
        return N.push([x, k]), (this.size = ++E.size), this;
      E = this.__data__ = new Xr(N);
    }
    return E.set(x, k), (this.size = E.size), this;
  }
  (Qr.prototype.clear = Nb),
    (Qr.prototype.delete = Lb),
    (Qr.prototype.get = Fb),
    (Qr.prototype.has = Db),
    (Qr.prototype.set = jb);
  function zb(x, k) {
    var E = Du(x),
      N = !E && Fu(x),
      K = !E && !N && Bh(x),
      oe = !E && !N && !K && Wh(x),
      me = E || N || K || oe,
      G = me ? ab(x.length, String) : [],
      ve = G.length;
    for (var Ct in x)
      (k || ln.call(x, Ct)) &&
        !(
          me &&
          (Ct == "length" ||
            (K && (Ct == "offset" || Ct == "parent")) ||
            (oe &&
              (Ct == "buffer" || Ct == "byteLength" || Ct == "byteOffset")) ||
            zh(Ct, ve))
        ) &&
        G.push(Ct);
    return G;
  }
  function Iu(x, k, E) {
    ((E !== void 0 && !ja(x[k], E)) || (E === void 0 && !(k in x))) &&
      Mu(x, k, E);
  }
  function Vb(x, k, E) {
    var N = x[k];
    (!(ln.call(x, k) && ja(N, E)) || (E === void 0 && !(k in x))) &&
      Mu(x, k, E);
  }
  function La(x, k) {
    for (var E = x.length; E--; ) if (ja(x[E][0], k)) return E;
    return -1;
  }
  function Mu(x, k, E) {
    k == "__proto__" && Na
      ? Na(x, k, { configurable: !0, enumerable: !0, value: E, writable: !0 })
      : (x[k] = E);
  }
  var Bb = ek();
  function Fa(x) {
    return x == null
      ? x === void 0
        ? T
        : y
      : hr && hr in Object(x)
      ? tk(x)
      : sk(x);
  }
  function Dh(x) {
    return qi(x) && Fa(x) == s;
  }
  function $b(x) {
    if (!vr(x) || ok(x)) return !1;
    var k = zu(x) ? pb : z;
    return k.test(fk(x));
  }
  function Wb(x) {
    return qi(x) && $h(x.length) && !!H[Fa(x)];
  }
  function Ub(x) {
    if (!vr(x)) return ak(x);
    var k = Vh(x),
      E = [];
    for (var N in x) (N == "constructor" && (k || !ln.call(x, N))) || E.push(N);
    return E;
  }
  function jh(x, k, E, N, K) {
    x !== k &&
      Bb(
        k,
        function (oe, me) {
          if ((K || (K = new Qr()), vr(oe))) Hb(x, k, me, E, jh, N, K);
          else {
            var G = N ? N(Lu(x, me), oe, me + "", x, k, K) : void 0;
            G === void 0 && (G = oe), Iu(x, me, G);
          }
        },
        Uh
      );
  }
  function Hb(x, k, E, N, K, oe, me) {
    var G = Lu(x, E),
      ve = Lu(k, E),
      Ct = me.get(ve);
    if (Ct) {
      Iu(x, E, Ct);
      return;
    }
    var pt = oe ? oe(G, ve, E + "", x, k, me) : void 0,
      Zi = pt === void 0;
    if (Zi) {
      var Vu = Du(ve),
        Bu = !Vu && Bh(ve),
        Gh = !Vu && !Bu && Wh(ve);
      (pt = ve),
        Vu || Bu || Gh
          ? Du(G)
            ? (pt = G)
            : dk(G)
            ? (pt = qb(G))
            : Bu
            ? ((Zi = !1), (pt = Kb(ve, !0)))
            : Gh
            ? ((Zi = !1), (pt = Qb(ve, !0)))
            : (pt = [])
          : pk(ve) || Fu(ve)
          ? ((pt = G),
            Fu(G) ? (pt = hk(G)) : (!vr(G) || zu(G)) && (pt = nk(ve)))
          : (Zi = !1);
    }
    Zi && (me.set(ve, pt), K(pt, ve, N, oe, me), me.delete(ve)), Iu(x, E, pt);
  }
  function Gb(x, k) {
    return uk(lk(x, k, Hh), x + "");
  }
  var Yb = Na
    ? function (x, k) {
        return Na(x, "toString", {
          configurable: !0,
          enumerable: !1,
          value: vk(k),
          writable: !0,
        });
      }
    : Hh;
  function Kb(x, k) {
    if (k) return x.slice();
    var E = x.length,
      N = Ih ? Ih(E) : new x.constructor(E);
    return x.copy(N), N;
  }
  function Xb(x) {
    var k = new x.constructor(x.byteLength);
    return new Oh(k).set(new Oh(x)), k;
  }
  function Qb(x, k) {
    var E = k ? Xb(x.buffer) : x.buffer;
    return new x.constructor(E, x.byteOffset, x.length);
  }
  function qb(x, k) {
    var E = -1,
      N = x.length;
    for (k || (k = Array(N)); ++E < N; ) k[E] = x[E];
    return k;
  }
  function Zb(x, k, E, N) {
    var K = !E;
    E || (E = {});
    for (var oe = -1, me = k.length; ++oe < me; ) {
      var G = k[oe],
        ve = N ? N(E[G], x[G], G, E, x) : void 0;
      ve === void 0 && (ve = x[G]), K ? Mu(E, G, ve) : Vb(E, G, ve);
    }
    return E;
  }
  function Jb(x) {
    return Gb(function (k, E) {
      var N = -1,
        K = E.length,
        oe = K > 1 ? E[K - 1] : void 0,
        me = K > 2 ? E[2] : void 0;
      for (
        oe = x.length > 3 && typeof oe == "function" ? (K--, oe) : void 0,
          me && rk(E[0], E[1], me) && ((oe = K < 3 ? void 0 : oe), (K = 1)),
          k = Object(k);
        ++N < K;

      ) {
        var G = E[N];
        G && x(k, G, N, oe);
      }
      return k;
    });
  }
  function ek(x) {
    return function (k, E, N) {
      for (var K = -1, oe = Object(k), me = N(k), G = me.length; G--; ) {
        var ve = me[x ? G : ++K];
        if (E(oe[ve], ve, oe) === !1) break;
      }
      return k;
    };
  }
  function Da(x, k) {
    var E = x.__data__;
    return ik(k) ? E[typeof k == "string" ? "string" : "hash"] : E.map;
  }
  function Nu(x, k) {
    var E = lb(x, k);
    return $b(E) ? E : void 0;
  }
  function tk(x) {
    var k = ln.call(x, hr),
      E = x[hr];
    try {
      x[hr] = void 0;
      var N = !0;
    } catch {}
    var K = Ah.call(x);
    return N && (k ? (x[hr] = E) : delete x[hr]), K;
  }
  function nk(x) {
    return typeof x.constructor == "function" && !Vh(x) ? yb(Mh(x)) : {};
  }
  function zh(x, k) {
    var E = typeof x;
    return (
      (k = k ?? a),
      !!k &&
        (E == "number" || (E != "symbol" && re.test(x))) &&
        x > -1 &&
        x % 1 == 0 &&
        x < k
    );
  }
  function rk(x, k, E) {
    if (!vr(E)) return !1;
    var N = typeof k;
    return (N == "number" ? ju(E) && zh(k, E.length) : N == "string" && k in E)
      ? ja(E[k], x)
      : !1;
  }
  function ik(x) {
    var k = typeof x;
    return k == "string" || k == "number" || k == "symbol" || k == "boolean"
      ? x !== "__proto__"
      : x === null;
  }
  function ok(x) {
    return !!_h && _h in x;
  }
  function Vh(x) {
    var k = x && x.constructor,
      E = (typeof k == "function" && k.prototype) || Oa;
    return x === E;
  }
  function ak(x) {
    var k = [];
    if (x != null) for (var E in Object(x)) k.push(E);
    return k;
  }
  function sk(x) {
    return Ah.call(x);
  }
  function lk(x, k, E) {
    return (
      (k = Lh(k === void 0 ? x.length - 1 : k, 0)),
      function () {
        for (
          var N = arguments, K = -1, oe = Lh(N.length - k, 0), me = Array(oe);
          ++K < oe;

        )
          me[K] = N[k + K];
        K = -1;
        for (var G = Array(k + 1); ++K < k; ) G[K] = N[K];
        return (G[k] = E(me)), Ra(x, this, G);
      }
    );
  }
  function Lu(x, k) {
    if (!(k === "constructor" && typeof x[k] == "function") && k != "__proto__")
      return x[k];
  }
  var uk = ck(Yb);
  function ck(x) {
    var k = 0,
      E = 0;
    return function () {
      var N = gb(),
        K = o - (N - E);
      if (((E = N), K > 0)) {
        if (++k >= i) return arguments[0];
      } else k = 0;
      return x.apply(void 0, arguments);
    };
  }
  function fk(x) {
    if (x != null) {
      try {
        return Ia.call(x);
      } catch {}
      try {
        return x + "";
      } catch {}
    }
    return "";
  }
  function ja(x, k) {
    return x === k || (x !== x && k !== k);
  }
  var Fu = Dh(
      (function () {
        return arguments;
      })()
    )
      ? Dh
      : function (x) {
          return qi(x) && ln.call(x, "callee") && !hb.call(x, "callee");
        },
    Du = Array.isArray;
  function ju(x) {
    return x != null && $h(x.length) && !zu(x);
  }
  function dk(x) {
    return qi(x) && ju(x);
  }
  var Bh = vb || gk;
  function zu(x) {
    if (!vr(x)) return !1;
    var k = Fa(x);
    return k == p || k == m || k == u || k == g;
  }
  function $h(x) {
    return typeof x == "number" && x > -1 && x % 1 == 0 && x <= a;
  }
  function vr(x) {
    var k = typeof x;
    return x != null && (k == "object" || k == "function");
  }
  function qi(x) {
    return x != null && typeof x == "object";
  }
  function pk(x) {
    if (!qi(x) || Fa(x) != h) return !1;
    var k = Mh(x);
    if (k === null) return !0;
    var E = ln.call(k, "constructor") && k.constructor;
    return typeof E == "function" && E instanceof E && Ia.call(E) == db;
  }
  var Wh = Xi ? sb(Xi) : Wb;
  function hk(x) {
    return Zb(x, Uh(x));
  }
  function Uh(x) {
    return ju(x) ? zb(x, !0) : Ub(x);
  }
  var mk = Jb(function (x, k, E, N) {
    jh(x, k, E, N);
  });
  function vk(x) {
    return function () {
      return x;
    };
  }
  function Hh(x) {
    return x;
  }
  function gk() {
    return !1;
  }
  e.exports = mk;
})(gl, gl.exports);
var HP = gl.exports;
const mn = Ll(HP);
var GP = (e) => /!(important)?$/.test(e),
  uv = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  YP = (e, t) => (n) => {
    const r = String(t),
      i = GP(r),
      o = uv(r),
      a = e ? `${e}.${o}` : o;
    let s = Jn(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
    return (s = uv(s)), i ? `${s} !important` : s;
  };
function Rp(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (o, a) => {
    var s;
    const l = YP(t, o)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var is =
  (...e) =>
  (t) =>
    e.reduce((n, r) => r(n), t);
function Pt(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return (r.transform = Rp({ scale: e, transform: t })), r;
  };
}
var KP =
  ({ rtl: e, ltr: t }) =>
  (n) =>
    n.direction === "rtl" ? e : t;
function XP(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: KP(t),
    transform: n ? Rp({ scale: n, compose: r }) : r,
  };
}
var W1 = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function QP() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...W1,
  ].join(" ");
}
function qP() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...W1,
  ].join(" ");
}
var ZP = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  JP = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function eT(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var tT = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  zf = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  nT = new Set(Object.values(zf)),
  Vf = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  rT = (e) => e.trim();
function iT(e, t) {
  if (e == null || Vf.has(e)) return e;
  if (!(Bf(e) || Vf.has(e))) return `url('${e}')`;
  const i = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    o = i == null ? void 0 : i[1],
    a = i == null ? void 0 : i[2];
  if (!o || !a) return e;
  const s = o.includes("-gradient") ? o : `${o}-gradient`,
    [l, ...u] = a.split(",").map(rT).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0) return e;
  const c = l in zf ? zf[l] : l;
  u.unshift(c);
  const f = u.map((d) => {
    if (nT.has(d)) return d;
    const p = d.indexOf(" "),
      [m, v] = p !== -1 ? [d.substr(0, p), d.substr(p + 1)] : [d],
      w = Bf(v) ? v : v && v.split(" "),
      y = `colors.${m}`,
      h = y in t.__cssMap ? t.__cssMap[y].varRef : m;
    return w ? [h, ...(Array.isArray(w) ? w : [w])].join(" ") : h;
  });
  return `${s}(${f.join(", ")})`;
}
var Bf = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  oT = (e, t) => iT(e, t ?? {});
function aT(e) {
  return /^var\(--.+\)$/.test(e);
}
var sT = (e) => {
    const t = parseFloat(e.toString()),
      n = e.toString().replace(String(t), "");
    return { unitless: !n, value: t, unit: n };
  },
  Yt = (e) => (t) => `${e}(${t})`,
  Y = {
    filter(e) {
      return e !== "auto" ? e : ZP;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : JP;
    },
    ring(e) {
      return eT(Y.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? QP() : e === "auto-gpu" ? qP() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = sT(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const n = { left: "right", right: "left" };
      return t.direction === "rtl" ? n[e] : e;
    },
    degree(e) {
      if (aT(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: oT,
    blur: Yt("blur"),
    opacity: Yt("opacity"),
    brightness: Yt("brightness"),
    contrast: Yt("contrast"),
    dropShadow: Yt("drop-shadow"),
    grayscale: Yt("grayscale"),
    hueRotate: (e) => Yt("hue-rotate")(Y.degree(e)),
    invert: Yt("invert"),
    saturate: Yt("saturate"),
    sepia: Yt("sepia"),
    bgImage(e) {
      return e == null || Bf(e) || Vf.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: n, divide: r } = (t = tT[e]) != null ? t : {},
        i = { flexDirection: e };
      return n && (i[n] = 1), r && (i[r] = 1), i;
    },
  },
  C = {
    borderWidths: Pt("borderWidths"),
    borderStyles: Pt("borderStyles"),
    colors: Pt("colors"),
    borders: Pt("borders"),
    gradients: Pt("gradients", Y.gradient),
    radii: Pt("radii", Y.px),
    space: Pt("space", is(Y.vh, Y.px)),
    spaceT: Pt("space", is(Y.vh, Y.px)),
    degreeT(e) {
      return { property: e, transform: Y.degree };
    },
    prop(e, t, n) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: Rp({ scale: t, transform: n }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: Pt("sizes", is(Y.vh, Y.px)),
    sizesT: Pt("sizes", is(Y.vh, Y.fraction)),
    shadows: Pt("shadows"),
    logical: XP,
    blur: Pt("blur", Y.blur),
  },
  Ds = {
    background: C.colors("background"),
    backgroundColor: C.colors("backgroundColor"),
    backgroundImage: C.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: Y.bgClip },
    bgSize: C.prop("backgroundSize"),
    bgPosition: C.prop("backgroundPosition"),
    bg: C.colors("background"),
    bgColor: C.colors("backgroundColor"),
    bgPos: C.prop("backgroundPosition"),
    bgRepeat: C.prop("backgroundRepeat"),
    bgAttachment: C.prop("backgroundAttachment"),
    bgGradient: C.gradients("backgroundImage"),
    bgClip: { transform: Y.bgClip },
  };
Object.assign(Ds, { bgImage: Ds.backgroundImage, bgImg: Ds.backgroundImage });
var q = {
  border: C.borders("border"),
  borderWidth: C.borderWidths("borderWidth"),
  borderStyle: C.borderStyles("borderStyle"),
  borderColor: C.colors("borderColor"),
  borderRadius: C.radii("borderRadius"),
  borderTop: C.borders("borderTop"),
  borderBlockStart: C.borders("borderBlockStart"),
  borderTopLeftRadius: C.radii("borderTopLeftRadius"),
  borderStartStartRadius: C.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: C.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: C.radii("borderTopRightRadius"),
  borderStartEndRadius: C.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: C.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: C.borders("borderRight"),
  borderInlineEnd: C.borders("borderInlineEnd"),
  borderBottom: C.borders("borderBottom"),
  borderBlockEnd: C.borders("borderBlockEnd"),
  borderBottomLeftRadius: C.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: C.radii("borderBottomRightRadius"),
  borderLeft: C.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: C.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: C.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: C.borders(["borderLeft", "borderRight"]),
  borderInline: C.borders("borderInline"),
  borderY: C.borders(["borderTop", "borderBottom"]),
  borderBlock: C.borders("borderBlock"),
  borderTopWidth: C.borderWidths("borderTopWidth"),
  borderBlockStartWidth: C.borderWidths("borderBlockStartWidth"),
  borderTopColor: C.colors("borderTopColor"),
  borderBlockStartColor: C.colors("borderBlockStartColor"),
  borderTopStyle: C.borderStyles("borderTopStyle"),
  borderBlockStartStyle: C.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: C.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: C.borderWidths("borderBlockEndWidth"),
  borderBottomColor: C.colors("borderBottomColor"),
  borderBlockEndColor: C.colors("borderBlockEndColor"),
  borderBottomStyle: C.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: C.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: C.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: C.borderWidths("borderInlineStartWidth"),
  borderLeftColor: C.colors("borderLeftColor"),
  borderInlineStartColor: C.colors("borderInlineStartColor"),
  borderLeftStyle: C.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: C.borderStyles("borderInlineStartStyle"),
  borderRightWidth: C.borderWidths("borderRightWidth"),
  borderInlineEndWidth: C.borderWidths("borderInlineEndWidth"),
  borderRightColor: C.colors("borderRightColor"),
  borderInlineEndColor: C.colors("borderInlineEndColor"),
  borderRightStyle: C.borderStyles("borderRightStyle"),
  borderInlineEndStyle: C.borderStyles("borderInlineEndStyle"),
  borderTopRadius: C.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: C.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: C.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: C.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(q, {
  rounded: q.borderRadius,
  roundedTop: q.borderTopRadius,
  roundedTopLeft: q.borderTopLeftRadius,
  roundedTopRight: q.borderTopRightRadius,
  roundedTopStart: q.borderStartStartRadius,
  roundedTopEnd: q.borderStartEndRadius,
  roundedBottom: q.borderBottomRadius,
  roundedBottomLeft: q.borderBottomLeftRadius,
  roundedBottomRight: q.borderBottomRightRadius,
  roundedBottomStart: q.borderEndStartRadius,
  roundedBottomEnd: q.borderEndEndRadius,
  roundedLeft: q.borderLeftRadius,
  roundedRight: q.borderRightRadius,
  roundedStart: q.borderInlineStartRadius,
  roundedEnd: q.borderInlineEndRadius,
  borderStart: q.borderInlineStart,
  borderEnd: q.borderInlineEnd,
  borderTopStartRadius: q.borderStartStartRadius,
  borderTopEndRadius: q.borderStartEndRadius,
  borderBottomStartRadius: q.borderEndStartRadius,
  borderBottomEndRadius: q.borderEndEndRadius,
  borderStartRadius: q.borderInlineStartRadius,
  borderEndRadius: q.borderInlineEndRadius,
  borderStartWidth: q.borderInlineStartWidth,
  borderEndWidth: q.borderInlineEndWidth,
  borderStartColor: q.borderInlineStartColor,
  borderEndColor: q.borderInlineEndColor,
  borderStartStyle: q.borderInlineStartStyle,
  borderEndStyle: q.borderInlineEndStyle,
});
var lT = {
    color: C.colors("color"),
    textColor: C.colors("color"),
    fill: C.colors("fill"),
    stroke: C.colors("stroke"),
  },
  $f = {
    boxShadow: C.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: C.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: C.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign($f, { shadow: $f.boxShadow });
var uT = {
    filter: { transform: Y.filter },
    blur: C.blur("--chakra-blur"),
    brightness: C.propT("--chakra-brightness", Y.brightness),
    contrast: C.propT("--chakra-contrast", Y.contrast),
    hueRotate: C.propT("--chakra-hue-rotate", Y.hueRotate),
    invert: C.propT("--chakra-invert", Y.invert),
    saturate: C.propT("--chakra-saturate", Y.saturate),
    dropShadow: C.propT("--chakra-drop-shadow", Y.dropShadow),
    backdropFilter: { transform: Y.backdropFilter },
    backdropBlur: C.blur("--chakra-backdrop-blur"),
    backdropBrightness: C.propT("--chakra-backdrop-brightness", Y.brightness),
    backdropContrast: C.propT("--chakra-backdrop-contrast", Y.contrast),
    backdropHueRotate: C.propT("--chakra-backdrop-hue-rotate", Y.hueRotate),
    backdropInvert: C.propT("--chakra-backdrop-invert", Y.invert),
    backdropSaturate: C.propT("--chakra-backdrop-saturate", Y.saturate),
  },
  yl = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: Y.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: C.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: C.space("gap"),
    rowGap: C.space("rowGap"),
    columnGap: C.space("columnGap"),
  };
Object.assign(yl, { flexDir: yl.flexDirection });
var U1 = {
    gridGap: C.space("gridGap"),
    gridColumnGap: C.space("gridColumnGap"),
    gridRowGap: C.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  cT = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: Y.outline },
    outlineOffset: !0,
    outlineColor: C.colors("outlineColor"),
  },
  Et = {
    width: C.sizesT("width"),
    inlineSize: C.sizesT("inlineSize"),
    height: C.sizes("height"),
    blockSize: C.sizes("blockSize"),
    boxSize: C.sizes(["width", "height"]),
    minWidth: C.sizes("minWidth"),
    minInlineSize: C.sizes("minInlineSize"),
    minHeight: C.sizes("minHeight"),
    minBlockSize: C.sizes("minBlockSize"),
    maxWidth: C.sizes("maxWidth"),
    maxInlineSize: C.sizes("maxInlineSize"),
    maxHeight: C.sizes("maxHeight"),
    maxBlockSize: C.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    aspectRatio: !0,
    hideFrom: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, i;
        return {
          [`@media screen and (min-width: ${
            (i =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r.minW) != null
              ? i
              : e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, i;
        return {
          [`@media screen and (max-width: ${
            (i =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r._minW) != null
              ? i
              : e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: C.propT("float", Y.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(Et, {
  w: Et.width,
  h: Et.height,
  minW: Et.minWidth,
  maxW: Et.maxWidth,
  minH: Et.minHeight,
  maxH: Et.maxHeight,
  overscroll: Et.overscrollBehavior,
  overscrollX: Et.overscrollBehaviorX,
  overscrollY: Et.overscrollBehaviorY,
});
var fT = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: C.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: C.prop("listStyleImage"),
};
function dT(e, t, n, r) {
  const i = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < i.length && e; r += 1) e = e[i[r]];
  return e === void 0 ? n : e;
}
var pT = (e) => {
    const t = new WeakMap();
    return (r, i, o, a) => {
      if (typeof r > "u") return e(r, i, o);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(i)) return s.get(i);
      const l = e(r, i, o, a);
      return s.set(i, l), l;
    };
  },
  hT = pT(dT),
  mT = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  vT = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  vc = (e, t, n) => {
    const r = {},
      i = hT(e, t, {});
    for (const o in i) (o in n && n[o] != null) || (r[o] = i[o]);
    return r;
  },
  gT = {
    srOnly: {
      transform(e) {
        return e === !0 ? mT : e === "focusable" ? vT : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, n) => vc(t, `layerStyles.${e}`, n),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, n) => vc(t, `textStyles.${e}`, n),
    },
    apply: { processResult: !0, transform: (e, t, n) => vc(t, e, n) },
  },
  _o = {
    position: !0,
    pos: C.prop("position"),
    zIndex: C.prop("zIndex", "zIndices"),
    inset: C.spaceT("inset"),
    insetX: C.spaceT(["left", "right"]),
    insetInline: C.spaceT("insetInline"),
    insetY: C.spaceT(["top", "bottom"]),
    insetBlock: C.spaceT("insetBlock"),
    top: C.spaceT("top"),
    insetBlockStart: C.spaceT("insetBlockStart"),
    bottom: C.spaceT("bottom"),
    insetBlockEnd: C.spaceT("insetBlockEnd"),
    left: C.spaceT("left"),
    insetInlineStart: C.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: C.spaceT("right"),
    insetInlineEnd: C.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(_o, {
  insetStart: _o.insetInlineStart,
  insetEnd: _o.insetInlineEnd,
});
var yT = {
    ring: { transform: Y.ring },
    ringColor: C.colors("--chakra-ring-color"),
    ringOffset: C.prop("--chakra-ring-offset-width"),
    ringOffsetColor: C.colors("--chakra-ring-offset-color"),
    ringInset: C.prop("--chakra-ring-inset"),
  },
  fe = {
    margin: C.spaceT("margin"),
    marginTop: C.spaceT("marginTop"),
    marginBlockStart: C.spaceT("marginBlockStart"),
    marginRight: C.spaceT("marginRight"),
    marginInlineEnd: C.spaceT("marginInlineEnd"),
    marginBottom: C.spaceT("marginBottom"),
    marginBlockEnd: C.spaceT("marginBlockEnd"),
    marginLeft: C.spaceT("marginLeft"),
    marginInlineStart: C.spaceT("marginInlineStart"),
    marginX: C.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: C.spaceT("marginInline"),
    marginY: C.spaceT(["marginTop", "marginBottom"]),
    marginBlock: C.spaceT("marginBlock"),
    padding: C.space("padding"),
    paddingTop: C.space("paddingTop"),
    paddingBlockStart: C.space("paddingBlockStart"),
    paddingRight: C.space("paddingRight"),
    paddingBottom: C.space("paddingBottom"),
    paddingBlockEnd: C.space("paddingBlockEnd"),
    paddingLeft: C.space("paddingLeft"),
    paddingInlineStart: C.space("paddingInlineStart"),
    paddingInlineEnd: C.space("paddingInlineEnd"),
    paddingX: C.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: C.space("paddingInline"),
    paddingY: C.space(["paddingTop", "paddingBottom"]),
    paddingBlock: C.space("paddingBlock"),
  };
Object.assign(fe, {
  m: fe.margin,
  mt: fe.marginTop,
  mr: fe.marginRight,
  me: fe.marginInlineEnd,
  marginEnd: fe.marginInlineEnd,
  mb: fe.marginBottom,
  ml: fe.marginLeft,
  ms: fe.marginInlineStart,
  marginStart: fe.marginInlineStart,
  mx: fe.marginX,
  my: fe.marginY,
  p: fe.padding,
  pt: fe.paddingTop,
  py: fe.paddingY,
  px: fe.paddingX,
  pb: fe.paddingBottom,
  pl: fe.paddingLeft,
  ps: fe.paddingInlineStart,
  paddingStart: fe.paddingInlineStart,
  pr: fe.paddingRight,
  pe: fe.paddingInlineEnd,
  paddingEnd: fe.paddingInlineEnd,
});
var xT = {
    textDecorationColor: C.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: C.shadows("textShadow"),
  },
  ST = {
    clipPath: !0,
    transform: C.propT("transform", Y.transform),
    transformOrigin: !0,
    translateX: C.spaceT("--chakra-translate-x"),
    translateY: C.spaceT("--chakra-translate-y"),
    skewX: C.degreeT("--chakra-skew-x"),
    skewY: C.degreeT("--chakra-skew-y"),
    scaleX: C.prop("--chakra-scale-x"),
    scaleY: C.prop("--chakra-scale-y"),
    scale: C.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: C.degreeT("--chakra-rotate"),
  },
  wT = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: C.prop("transitionDuration", "transition.duration"),
    transitionProperty: C.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: C.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  bT = {
    fontFamily: C.prop("fontFamily", "fonts"),
    fontSize: C.prop("fontSize", "fontSizes", Y.px),
    fontWeight: C.prop("fontWeight", "fontWeights"),
    lineHeight: C.prop("lineHeight", "lineHeights"),
    letterSpacing: C.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  kT = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: C.spaceT("scrollMargin"),
    scrollMarginTop: C.spaceT("scrollMarginTop"),
    scrollMarginBottom: C.spaceT("scrollMarginBottom"),
    scrollMarginLeft: C.spaceT("scrollMarginLeft"),
    scrollMarginRight: C.spaceT("scrollMarginRight"),
    scrollMarginX: C.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: C.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: C.spaceT("scrollPadding"),
    scrollPaddingTop: C.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: C.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: C.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: C.spaceT("scrollPaddingRight"),
    scrollPaddingX: C.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: C.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function H1(e) {
  return Jn(e) && e.reference ? e.reference : String(e);
}
var fu = (e, ...t) => t.map(H1).join(` ${e} `).replace(/calc/g, ""),
  cv = (...e) => `calc(${fu("+", ...e)})`,
  fv = (...e) => `calc(${fu("-", ...e)})`,
  Wf = (...e) => `calc(${fu("*", ...e)})`,
  dv = (...e) => `calc(${fu("/", ...e)})`,
  pv = (e) => {
    const t = H1(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : Wf(t, -1);
  },
  lo = Object.assign(
    (e) => ({
      add: (...t) => lo(cv(e, ...t)),
      subtract: (...t) => lo(fv(e, ...t)),
      multiply: (...t) => lo(Wf(e, ...t)),
      divide: (...t) => lo(dv(e, ...t)),
      negate: () => lo(pv(e)),
      toString: () => e.toString(),
    }),
    { add: cv, subtract: fv, multiply: Wf, divide: dv, negate: pv }
  );
function CT(e) {
  const t = parseFloat(e.toString()),
    n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function hv(e) {
  if (e == null) return e;
  const { unitless: t } = CT(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
function PT(e, t) {
  const n = ["@media screen"];
  return (
    e && n.push("and", `(min-width: ${hv(e)})`),
    t && n.push("and", `(max-width: ${hv(t)})`),
    n.join(" ")
  );
}
var Ve = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  Nn = (e) => G1((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  cn = (e) => G1((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  G1 = (e, ...t) => t.map(e).join(", "),
  Op = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: Nn(Ve.hover),
    _peerHover: cn(Ve.hover),
    _groupFocus: Nn(Ve.focus),
    _peerFocus: cn(Ve.focus),
    _groupFocusVisible: Nn(Ve.focusVisible),
    _peerFocusVisible: cn(Ve.focusVisible),
    _groupActive: Nn(Ve.active),
    _peerActive: cn(Ve.active),
    _groupDisabled: Nn(Ve.disabled),
    _peerDisabled: cn(Ve.disabled),
    _groupInvalid: Nn(Ve.invalid),
    _peerInvalid: cn(Ve.invalid),
    _groupChecked: Nn(Ve.checked),
    _peerChecked: cn(Ve.checked),
    _groupFocusWithin: Nn(Ve.focusWithin),
    _peerFocusWithin: cn(Ve.focusWithin),
    _peerPlaceholderShown: cn(Ve.placeholderShown),
    _placeholder: "&::placeholder",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
    _horizontal: "&[data-orientation=horizontal]",
    _vertical: "&[data-orientation=vertical]",
  },
  TT = Object.keys(Op);
function ET(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
var Ip = mn(
  {},
  Ds,
  q,
  lT,
  yl,
  Et,
  uT,
  yT,
  cT,
  U1,
  gT,
  _o,
  $f,
  fe,
  kT,
  bT,
  xT,
  ST,
  fT,
  wT
);
Object.assign({}, fe, Et, yl, U1, _o);
var _T = [...Object.keys(Ip), ...TT],
  AT = { ...Ip, ...Op },
  RT = (e) => e in AT,
  OT = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: n, toArrayValue: r, media: i } = t.__breakpoints,
      o = {};
    for (const a in e) {
      let s = Tr(e[a], t);
      if (s == null) continue;
      if (((s = Jn(s) && n(s) ? r(s) : s), !Array.isArray(s))) {
        o[a] = s;
        continue;
      }
      const l = s.slice(0, i.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = i == null ? void 0 : i[u];
        if (!c) {
          o[a] = s[u];
          continue;
        }
        (o[c] = o[c] || {}), s[u] != null && (o[c][a] = s[u]);
      }
    }
    return o;
  };
function IT(e) {
  const t = [];
  let n = "",
    r = !1;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    o === "("
      ? ((r = !0), (n += o))
      : o === ")"
      ? ((r = !1), (n += o))
      : o === "," && !r
      ? (t.push(n), (n = ""))
      : (n += o);
  }
  return (n = n.trim()), n && t.push(n), t;
}
function MT(e) {
  return /^var\(--.+\)$/.test(e);
}
var NT = (e, t) => e.startsWith("--") && typeof t == "string" && !MT(t),
  LT = (e, t) => {
    var n, r;
    if (t == null) return t;
    const i = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      o = (l) => {
        var u;
        return (u = i(l)) != null ? u : l;
      },
      [a, s] = IT(t);
    return (t = (r = (n = i(a)) != null ? n : o(s)) != null ? r : o(t)), t;
  };
function FT(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e,
    i = (o, a = !1) => {
      var s, l, u;
      const c = Tr(o, r),
        f = OT(c)(r);
      let d = {};
      for (let p in f) {
        const m = f[p];
        let v = Tr(m, r);
        p in n && (p = n[p]), NT(p, v) && (v = LT(r, v));
        let w = t[p];
        if ((w === !0 && (w = { property: p }), Jn(v))) {
          (d[p] = (s = d[p]) != null ? s : {}), (d[p] = mn({}, d[p], i(v, !0)));
          continue;
        }
        let y =
          (u =
            (l = w == null ? void 0 : w.transform) == null
              ? void 0
              : l.call(w, v, r, c)) != null
            ? u
            : v;
        y = w != null && w.processResult ? i(y, !0) : y;
        const h = Tr(w == null ? void 0 : w.property, r);
        if (!a && w != null && w.static) {
          const g = Tr(w.static, r);
          d = mn({}, d, g);
        }
        if (h && Array.isArray(h)) {
          for (const g of h) d[g] = y;
          continue;
        }
        if (h) {
          h === "&" && Jn(y) ? (d = mn({}, d, y)) : (d[h] = y);
          continue;
        }
        if (Jn(y)) {
          d = mn({}, d, y);
          continue;
        }
        d[p] = y;
      }
      return d;
    };
  return i;
}
var DT = (e) => (t) => FT({ theme: t, pseudos: Op, configs: Ip })(e);
function jT(e, t) {
  if (Array.isArray(e)) return e;
  if (Jn(e)) return t(e);
  if (e != null) return [e];
}
function zT(e, t) {
  for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n;
  return -1;
}
function VT(e) {
  const t = e.__breakpoints;
  return function (r, i, o, a) {
    var s, l;
    if (!t) return;
    const u = {},
      c = jT(o, t.toArrayValue);
    if (!c) return u;
    const f = c.length,
      d = f === 1,
      p = !!r.parts;
    for (let m = 0; m < f; m++) {
      const v = t.details[m],
        w = t.details[zT(c, m)],
        y = PT(v.minW, w == null ? void 0 : w._minW),
        h = Tr((s = r[i]) == null ? void 0 : s[c[m]], a);
      if (h) {
        if (p) {
          (l = r.parts) == null ||
            l.forEach((g) => {
              mn(u, { [g]: d ? h[g] : { [y]: h[g] } });
            });
          continue;
        }
        if (!p) {
          d ? mn(u, h) : (u[y] = h);
          continue;
        }
        u[y] = h;
      }
    }
    return u;
  };
}
function BT(e) {
  return (t) => {
    var n;
    const { variant: r, size: i, theme: o } = t,
      a = VT(o);
    return mn(
      {},
      Tr((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", i, t),
      a(e, "variants", r, t)
    );
  };
}
function On(e) {
  return ET(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function $T() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
var WT = $T();
function UT(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      t.includes(r) || (n[r] = e[r]);
    }),
    n
  );
}
function HT(e, t, n, r) {
  const i = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < i.length && e; r += 1) e = e[i[r]];
  return e === void 0 ? n : e;
}
var GT = (e) => {
    const t = new WeakMap();
    return (r, i, o, a) => {
      if (typeof r > "u") return e(r, i, o);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(i)) return s.get(i);
      const l = e(r, i, o, a);
      return s.set(i, l), l;
    };
  },
  YT = GT(HT);
function Y1(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      const i = e[r];
      t(i, r, e) && (n[r] = i);
    }),
    n
  );
}
var K1 = (e) => Y1(e, (t) => t != null);
function KT(e) {
  return typeof e == "function";
}
function XT(e, ...t) {
  return KT(e) ? e(...t) : e;
}
function QT(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var qT = typeof Element < "u",
  ZT = typeof Map == "function",
  JT = typeof Set == "function",
  eE = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function js(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!js(e[r], t[r])) return !1;
      return !0;
    }
    var o;
    if (ZT && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!js(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (JT && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (eE && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
    if (qT && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") &&
          e.$$typeof
        ) &&
        !js(e[i[r]], t[i[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var tE = function (t, n) {
  try {
    return js(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const nE = Ll(tE);
function X1(e, t = {}) {
  var n;
  const { styleConfig: r, ...i } = t,
    { theme: o, colorMode: a } = WP(),
    s = e ? YT(o, `components.${e}`) : void 0,
    l = r || s,
    u = mn(
      { theme: o, colorMode: a },
      (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
      K1(UT(i, ["children"]))
    ),
    c = S.useRef({});
  if (l) {
    const d = BT(l)(u);
    nE(c.current, d) || (c.current = d);
  }
  return c.current;
}
function Gr(e, t = {}) {
  return X1(e, t);
}
function du(e, t = {}) {
  return X1(e, t);
}
var rE = new Set([
    ..._T,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  iE = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function oE(e) {
  return iE.has(e) || !rE.has(e);
}
function aE(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const i in r)
        Object.prototype.hasOwnProperty.call(r, i) &&
          (i in n && delete n[i], (n[i] = r[i]));
  return n;
}
function Q1(e) {
  const t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
var sE =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  lE = R1(function (e) {
    return (
      sE.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  uE = lE,
  cE = function (t) {
    return t !== "theme";
  },
  mv = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? uE : cE;
  },
  vv = function (t, n, r) {
    var i;
    if (n) {
      var o = n.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (a) {
              return t.__emotion_forwardProp(a) && o(a);
            }
          : o;
    }
    return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
  },
  fE = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag;
    return (
      F1(n, r, i),
      jP(function () {
        return RP(n, r, i);
      }),
      null
    );
  },
  dE = function e(t, n) {
    var r = t.__emotion_real === t,
      i = (r && t.__emotion_base) || t,
      o,
      a;
    n !== void 0 && ((o = n.label), (a = n.target));
    var s = vv(t, n, r),
      l = s || mv(i),
      u = !l("as");
    return function () {
      var c = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && f.push("label:" + o + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var d = c.length, p = 1; p < d; p++) f.push(c[p], c[0][p]);
      }
      var m = zP(function (v, w, y) {
        var h = (u && v.as) || i,
          g = "",
          b = [],
          P = v;
        if (v.theme == null) {
          P = {};
          for (var A in v) P[A] = v[A];
          P.theme = S.useContext(V1);
        }
        typeof v.className == "string"
          ? (g = AP(w.registered, b, v.className))
          : v.className != null && (g = v.className + " ");
        var T = j1(f.concat(b), w.registered, P);
        (g += w.key + "-" + T.name), a !== void 0 && (g += " " + a);
        var R = u && s === void 0 ? mv(h) : l,
          O = {};
        for (var D in v) (u && D === "as") || (R(D) && (O[D] = v[D]));
        return (
          (O.className = g),
          (O.ref = y),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(fE, {
              cache: w,
              serialized: T,
              isStringTag: typeof h == "string",
            }),
            S.createElement(h, O)
          )
        );
      });
      return (
        (m.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof i == "string"
                ? i
                : i.displayName || i.name || "Component") +
              ")"),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = i),
        (m.__emotion_styles = f),
        (m.__emotion_forwardProp = s),
        Object.defineProperty(m, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (m.withComponent = function (v, w) {
          return e(v, Vi({}, n, w, { shouldForwardProp: vv(m, w, !0) })).apply(
            void 0,
            f
          );
        }),
        m
      );
    };
  },
  pE = [
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
    "tspan",
  ],
  xl = dE.bind();
pE.forEach(function (e) {
  xl[e] = xl(e);
});
var gv,
  hE = (gv = xl.default) != null ? gv : xl,
  mE =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: n, css: r, __css: i, sx: o, ...a } = t,
        s = Y1(a, (f, d) => RT(d)),
        l = XT(e, t),
        u = aE({}, i, l, K1(s), o),
        c = DT(u)(t.theme);
      return r ? [c, r] : c;
    };
function gc(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = oE);
  const i = mE({ baseStyle: n }),
    o = hE(e, r)(i);
  return wn.forwardRef(function (l, u) {
    const { colorMode: c, forced: f } = $1();
    return wn.createElement(o, { ref: u, "data-theme": f ? c : void 0, ...l });
  });
}
function vE() {
  const e = new Map();
  return new Proxy(gc, {
    apply(t, n, r) {
      return gc(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, gc(n)), e.get(n);
    },
  });
}
var te = vE();
function ae(e) {
  return S.forwardRef(e);
}
function gE(e) {
  const [t, n] = S.useState(!e);
  return {
    ref: S.useCallback((o) => {
      o && n(o.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
function Uf(e) {
  const { children: t, className: n, ...r } = e,
    i = S.isValidElement(t)
      ? S.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    o = ye("chakra-button__icon", n);
  return _.jsx(te.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...r,
    className: o,
    children: i,
  });
}
Uf.displayName = "ButtonIcon";
var yE = BP({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  q1 = ae((e, t) => {
    const n = Gr("Spinner", e),
      {
        label: r = "Loading...",
        thickness: i = "2px",
        speed: o = "0.45s",
        emptyColor: a = "transparent",
        className: s,
        ...l
      } = On(e),
      u = ye("chakra-spinner", s),
      c = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: i,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${yE} ${o} linear infinite`,
        ...n,
      };
    return _.jsx(te.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && _.jsx(te.span, { srOnly: !0, children: r }),
    });
  });
q1.displayName = "Spinner";
function Hf(e) {
  const {
      label: t,
      placement: n,
      spacing: r = "0.5rem",
      children: i = _.jsx(q1, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: o,
      __css: a,
      ...s
    } = e,
    l = ye("chakra-button__spinner", o),
    u = n === "start" ? "marginEnd" : "marginStart",
    c = S.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? r : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...a,
      }),
      [a, t, u, r]
    );
  return _.jsx(te.div, { className: l, ...s, __css: c, children: i });
}
Hf.displayName = "ButtonSpinner";
function xE(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function na(...e) {
  return (t) => {
    e.forEach((n) => {
      xE(n, t);
    });
  };
}
function SE(...e) {
  return S.useMemo(() => na(...e), e);
}
var ra = ae((e, t) => {
  const n = UC(),
    r = Gr("Button", { ...n, ...e }),
    {
      isDisabled: i = n == null ? void 0 : n.isDisabled,
      isLoading: o,
      isActive: a,
      children: s,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: f = "0.5rem",
      type: d,
      spinner: p,
      spinnerPlacement: m = "start",
      className: v,
      as: w,
      ...y
    } = On(e),
    h = S.useMemo(() => {
      const A = { ...(r == null ? void 0 : r._focus), zIndex: 1 };
      return {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        ...r,
        ...(!!n && { _focus: A }),
      };
    }, [r, n]),
    { ref: g, type: b } = gE(w),
    P = { rightIcon: u, leftIcon: l, iconSpacing: f, children: s };
  return _.jsxs(te.button, {
    ref: SE(t, g),
    as: w,
    type: d ?? b,
    "data-active": Xt(a),
    "data-loading": Xt(o),
    __css: h,
    className: ye("chakra-button", v),
    ...y,
    disabled: i || o,
    children: [
      o &&
        m === "start" &&
        _.jsx(Hf, {
          className: "chakra-button__spinner--start",
          label: c,
          placement: "start",
          spacing: f,
          children: p,
        }),
      o
        ? c || _.jsx(te.span, { opacity: 0, children: _.jsx(yv, { ...P }) })
        : _.jsx(yv, { ...P }),
      o &&
        m === "end" &&
        _.jsx(Hf, {
          className: "chakra-button__spinner--end",
          label: c,
          placement: "end",
          spacing: f,
          children: p,
        }),
    ],
  });
});
ra.displayName = "Button";
function yv(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: i } = e;
  return _.jsxs(_.Fragment, {
    children: [
      t && _.jsx(Uf, { marginEnd: i, children: t }),
      r,
      n && _.jsx(Uf, { marginStart: i, children: n }),
    ],
  });
}
var wE = WT ? S.useLayoutEffect : S.useEffect;
function xv(e, t = []) {
  const n = S.useRef(e);
  return (
    wE(() => {
      n.current = e;
    }),
    S.useCallback((...r) => {
      var i;
      return (i = n.current) == null ? void 0 : i.call(n, ...r);
    }, t)
  );
}
function bE(e, t) {
  const n = S.useId();
  return S.useMemo(() => e || [t, n].filter(Boolean).join("-"), [e, t, n]);
}
function kE(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function CE(e = {}) {
  const { onClose: t, onOpen: n, isOpen: r, id: i } = e,
    o = xv(n),
    a = xv(t),
    [s, l] = S.useState(e.defaultIsOpen || !1),
    [u, c] = kE(r, s),
    f = bE(i, "disclosure"),
    d = S.useCallback(() => {
      u || l(!1), a == null || a();
    }, [u, a]),
    p = S.useCallback(() => {
      u || l(!0), o == null || o();
    }, [u, o]),
    m = S.useCallback(() => {
      (c ? d : p)();
    }, [c, p, d]);
  return {
    isOpen: !!c,
    onOpen: p,
    onClose: d,
    onToggle: m,
    isControlled: u,
    getButtonProps: (v = {}) => ({
      ...v,
      "aria-expanded": c,
      "aria-controls": f,
      onClick: QT(v.onClick, m),
    }),
    getDisclosureProps: (v = {}) => ({ ...v, hidden: !c, id: f }),
  };
}
var Sv = {
    path: _.jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        _.jsx("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        _.jsx("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        _.jsx("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  Mp = ae((e, t) => {
    const {
        as: n,
        viewBox: r,
        color: i = "currentColor",
        focusable: o = !1,
        children: a,
        className: s,
        __css: l,
        ...u
      } = e,
      c = ye("chakra-icon", s),
      f = Gr("Icon", e),
      d = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: i,
        ...l,
        ...f,
      },
      p = { ref: t, focusable: o, className: c, __css: d },
      m = r ?? Sv.viewBox;
    if (n && typeof n != "string") return _.jsx(te.svg, { as: n, ...p, ...u });
    const v = a ?? Sv.path;
    return _.jsx(te.svg, {
      verticalAlign: "middle",
      viewBox: m,
      ...p,
      ...u,
      children: v,
    });
  });
Mp.displayName = "Icon";
function Z1(e) {
  const {
      viewBox: t = "0 0 24 24",
      d: n,
      displayName: r,
      defaultProps: i = {},
    } = e,
    o = S.Children.toArray(e.path),
    a = ae((s, l) =>
      _.jsx(Mp, {
        ref: l,
        viewBox: t,
        ...i,
        ...s,
        children: o.length ? o : _.jsx("path", { fill: "currentColor", d: n }),
      })
    );
  return (a.displayName = r), a;
}
var PE = Z1({
    d: "M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z",
    displayName: "Search2Icon",
  }),
  TE = Z1({
    d: "M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",
    displayName: "AddIcon",
  }),
  Gf = ae(function (t, n) {
    const { htmlWidth: r, htmlHeight: i, alt: o, ...a } = t;
    return _.jsx("img", { width: r, height: i, ref: n, alt: o, ...a });
  });
Gf.displayName = "NativeImage";
function EE(e) {
  const {
      loading: t,
      src: n,
      srcSet: r,
      onLoad: i,
      onError: o,
      crossOrigin: a,
      sizes: s,
      ignoreFallback: l,
    } = e,
    [u, c] = S.useState("pending");
  S.useEffect(() => {
    c(n ? "loading" : "pending");
  }, [n]);
  const f = S.useRef(),
    d = S.useCallback(() => {
      if (!n) return;
      p();
      const m = new Image();
      (m.src = n),
        a && (m.crossOrigin = a),
        r && (m.srcset = r),
        s && (m.sizes = s),
        t && (m.loading = t),
        (m.onload = (v) => {
          p(), c("loaded"), i == null || i(v);
        }),
        (m.onerror = (v) => {
          p(), c("failed"), o == null || o(v);
        }),
        (f.current = m);
    }, [n, a, r, s, i, o, t]),
    p = () => {
      f.current &&
        ((f.current.onload = null),
        (f.current.onerror = null),
        (f.current = null));
    };
  return (
    vl(() => {
      if (!l)
        return (
          u === "loading" && d(),
          () => {
            p();
          }
        );
    }, [u, d, l]),
    l ? "loaded" : u
  );
}
var _E = (e, t) =>
  (e !== "loaded" && t === "beforeLoadOrError") ||
  (e === "failed" && t === "onError");
function AE(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
var J1 = ae(function (t, n) {
  const {
      fallbackSrc: r,
      fallback: i,
      src: o,
      srcSet: a,
      align: s,
      fit: l,
      loading: u,
      ignoreFallback: c,
      crossOrigin: f,
      fallbackStrategy: d = "beforeLoadOrError",
      referrerPolicy: p,
      ...m
    } = t,
    v = r !== void 0 || i !== void 0,
    w = u != null || c || !v,
    y = EE({ ...t, crossOrigin: f, ignoreFallback: w }),
    h = _E(y, d),
    g = {
      ref: n,
      objectFit: l,
      objectPosition: s,
      ...(w ? m : AE(m, ["onError", "onLoad"])),
    };
  return h
    ? i ||
        _.jsx(te.img, {
          as: Gf,
          className: "chakra-image__placeholder",
          src: r,
          ...g,
        })
    : _.jsx(te.img, {
        as: Gf,
        src: o,
        srcSet: a,
        crossOrigin: f,
        loading: u,
        referrerPolicy: p,
        className: "chakra-image",
        ...g,
      });
});
J1.displayName = "Image";
function ex(e) {
  return S.Children.toArray(e).filter((t) => S.isValidElement(t));
}
var [RE, OE] = dr({
    name: "InputGroupStylesContext",
    errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `,
  }),
  tx = ae(function (t, n) {
    const r = du("Input", t),
      { children: i, className: o, ...a } = On(t),
      s = ye("chakra-input__group", o),
      l = {},
      u = ex(i),
      c = r.field;
    u.forEach((d) => {
      var p, m;
      r &&
        (c &&
          d.type.id === "InputLeftElement" &&
          (l.paddingStart = (p = c.height) != null ? p : c.h),
        c &&
          d.type.id === "InputRightElement" &&
          (l.paddingEnd = (m = c.height) != null ? m : c.h),
        d.type.id === "InputRightAddon" && (l.borderEndRadius = 0),
        d.type.id === "InputLeftAddon" && (l.borderStartRadius = 0));
    });
    const f = u.map((d) => {
      var p, m;
      const v = Q1({
        size: ((p = d.props) == null ? void 0 : p.size) || t.size,
        variant: ((m = d.props) == null ? void 0 : m.variant) || t.variant,
      });
      return d.type.id !== "Input"
        ? S.cloneElement(d, v)
        : S.cloneElement(d, Object.assign(v, l, d.props));
    });
    return _.jsx(te.div, {
      className: s,
      ref: n,
      __css: {
        width: "100%",
        display: "flex",
        position: "relative",
        isolation: "isolate",
        ...r.group,
      },
      "data-group": !0,
      ...a,
      children: _.jsx(RE, { value: r, children: f }),
    });
  });
tx.displayName = "InputGroup";
var IE = te("div", {
    baseStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "0",
      zIndex: 2,
    },
  }),
  pu = ae(function (t, n) {
    var r, i;
    const { placement: o = "left", ...a } = t,
      s = OE(),
      l = s.field,
      c = {
        [o === "left" ? "insetStart" : "insetEnd"]: "0",
        width:
          (r = l == null ? void 0 : l.height) != null
            ? r
            : l == null
            ? void 0
            : l.h,
        height:
          (i = l == null ? void 0 : l.height) != null
            ? i
            : l == null
            ? void 0
            : l.h,
        fontSize: l == null ? void 0 : l.fontSize,
        ...s.element,
      };
    return _.jsx(IE, { ref: n, __css: c, ...a });
  });
pu.id = "InputElement";
pu.displayName = "InputElement";
var Np = ae(function (t, n) {
  const { className: r, ...i } = t,
    o = ye("chakra-input__left-element", r);
  return _.jsx(pu, { ref: n, placement: "left", className: o, ...i });
});
Np.id = "InputLeftElement";
Np.displayName = "InputLeftElement";
var nx = ae(function (t, n) {
  const { className: r, ...i } = t,
    o = ye("chakra-input__right-element", r);
  return _.jsx(pu, { ref: n, placement: "right", className: o, ...i });
});
nx.id = "InputRightElement";
nx.displayName = "InputRightElement";
var [ME, rx] = dr({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [NE, hu] = dr({ strict: !1, name: "FormControlContext" });
function LE(e) {
  const {
      id: t,
      isRequired: n,
      isInvalid: r,
      isDisabled: i,
      isReadOnly: o,
      ...a
    } = e,
    s = S.useId(),
    l = t || `field-${s}`,
    u = `${l}-label`,
    c = `${l}-feedback`,
    f = `${l}-helptext`,
    [d, p] = S.useState(!1),
    [m, v] = S.useState(!1),
    [w, y] = S.useState(!1),
    h = S.useCallback(
      (T = {}, R = null) => ({
        id: f,
        ...T,
        ref: na(R, (O) => {
          O && v(!0);
        }),
      }),
      [f]
    ),
    g = S.useCallback(
      (T = {}, R = null) => ({
        ...T,
        ref: R,
        "data-focus": Xt(w),
        "data-disabled": Xt(i),
        "data-invalid": Xt(r),
        "data-readonly": Xt(o),
        id: T.id !== void 0 ? T.id : u,
        htmlFor: T.htmlFor !== void 0 ? T.htmlFor : l,
      }),
      [l, i, w, r, o, u]
    ),
    b = S.useCallback(
      (T = {}, R = null) => ({
        id: c,
        ...T,
        ref: na(R, (O) => {
          O && p(!0);
        }),
        "aria-live": "polite",
      }),
      [c]
    ),
    P = S.useCallback(
      (T = {}, R = null) => ({
        ...T,
        ...a,
        ref: R,
        role: "group",
        "data-focus": Xt(w),
        "data-disabled": Xt(i),
        "data-invalid": Xt(r),
        "data-readonly": Xt(o),
      }),
      [a, i, w, r, o]
    ),
    A = S.useCallback(
      (T = {}, R = null) => ({
        ...T,
        ref: R,
        role: "presentation",
        "aria-hidden": !0,
        children: T.children || "*",
      }),
      []
    );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!o,
    isDisabled: !!i,
    isFocused: !!w,
    onFocus: () => y(!0),
    onBlur: () => y(!1),
    hasFeedbackText: d,
    setHasFeedbackText: p,
    hasHelpText: m,
    setHasHelpText: v,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: f,
    htmlProps: a,
    getHelpTextProps: h,
    getErrorMessageProps: b,
    getRootProps: P,
    getLabelProps: g,
    getRequiredIndicatorProps: A,
  };
}
var Yf = ae(function (t, n) {
  const r = du("Form", t),
    i = On(t),
    { getRootProps: o, htmlProps: a, ...s } = LE(i),
    l = ye("chakra-form-control", t.className);
  return _.jsx(NE, {
    value: s,
    children: _.jsx(ME, {
      value: r,
      children: _.jsx(te.div, {
        ...o({}, n),
        className: l,
        __css: r.container,
      }),
    }),
  });
});
Yf.displayName = "FormControl";
var FE = ae(function (t, n) {
  const r = hu(),
    i = rx(),
    o = ye("chakra-form__helper-text", t.className);
  return _.jsx(te.div, {
    ...(r == null ? void 0 : r.getHelpTextProps(t, n)),
    __css: i.helperText,
    className: o,
  });
});
FE.displayName = "FormHelperText";
var Kf = ae(function (t, n) {
  var r;
  const i = Gr("FormLabel", t),
    o = On(t),
    {
      className: a,
      children: s,
      requiredIndicator: l = _.jsx(ix, {}),
      optionalIndicator: u = null,
      ...c
    } = o,
    f = hu(),
    d =
      (r = f == null ? void 0 : f.getLabelProps(c, n)) != null
        ? r
        : { ref: n, ...c };
  return _.jsxs(te.label, {
    ...d,
    className: ye("chakra-form__label", o.className),
    __css: { display: "block", textAlign: "start", ...i },
    children: [s, f != null && f.isRequired ? l : u],
  });
});
Kf.displayName = "FormLabel";
var ix = ae(function (t, n) {
  const r = hu(),
    i = rx();
  if (!(r != null && r.isRequired)) return null;
  const o = ye("chakra-form__required-indicator", t.className);
  return _.jsx(te.span, {
    ...(r == null ? void 0 : r.getRequiredIndicatorProps(t, n)),
    __css: i.requiredIndicator,
    className: o,
  });
});
ix.displayName = "RequiredIndicator";
function DE(e) {
  const {
    isDisabled: t,
    isInvalid: n,
    isReadOnly: r,
    isRequired: i,
    ...o
  } = jE(e);
  return {
    ...o,
    disabled: t,
    readOnly: r,
    required: i,
    "aria-invalid": mc(n),
    "aria-required": mc(i),
    "aria-readonly": mc(r),
  };
}
function jE(e) {
  var t, n, r;
  const i = hu(),
    {
      id: o,
      disabled: a,
      readOnly: s,
      required: l,
      isRequired: u,
      isInvalid: c,
      isReadOnly: f,
      isDisabled: d,
      onFocus: p,
      onBlur: m,
      ...v
    } = e,
    w = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return (
    i != null &&
      i.hasFeedbackText &&
      i != null &&
      i.isInvalid &&
      w.push(i.feedbackId),
    i != null && i.hasHelpText && w.push(i.helpTextId),
    {
      ...v,
      "aria-describedby": w.join(" ") || void 0,
      id: o ?? (i == null ? void 0 : i.id),
      isDisabled: (t = a ?? d) != null ? t : i == null ? void 0 : i.isDisabled,
      isReadOnly: (n = s ?? f) != null ? n : i == null ? void 0 : i.isReadOnly,
      isRequired: (r = l ?? u) != null ? r : i == null ? void 0 : i.isRequired,
      isInvalid: c ?? (i == null ? void 0 : i.isInvalid),
      onFocus: Er(i == null ? void 0 : i.onFocus, p),
      onBlur: Er(i == null ? void 0 : i.onBlur, m),
    }
  );
}
var Lp = ae(function (t, n) {
  const { htmlSize: r, ...i } = t,
    o = du("Input", i),
    a = On(i),
    s = DE(a),
    l = ye("chakra-input", t.className);
  return _.jsx(te.input, {
    size: r,
    ...s,
    __css: o.field,
    ref: n,
    className: l,
  });
});
Lp.displayName = "Input";
Lp.id = "Input";
function zE(e, t) {
  return Array.isArray(e)
    ? e.map((n) => (n === null ? null : t(n)))
    : Jn(e)
    ? Object.keys(e).reduce((n, r) => ((n[r] = t(e[r])), n), {})
    : e != null
    ? t(e)
    : null;
}
var Xf = ae(function (t, n) {
  const r = Gr("Text", t),
    { className: i, align: o, decoration: a, casing: s, ...l } = On(t),
    u = Q1({
      textAlign: t.align,
      textDecoration: t.decoration,
      textTransform: t.casing,
    });
  return _.jsx(te.p, {
    ref: n,
    className: ye("chakra-text", t.className),
    ...u,
    ...l,
    __css: r,
  });
});
Xf.displayName = "Text";
var ox = (e) =>
  _.jsx(te.div, {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css,
    },
  });
ox.displayName = "StackItem";
function VE(e) {
  const { spacing: t, direction: n } = e,
    r = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
      "column-reverse": {
        my: t,
        mx: 0,
        borderLeftWidth: 0,
        borderBottomWidth: "1px",
      },
      row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
      "row-reverse": {
        mx: t,
        my: 0,
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      },
    };
  return { "&": zE(n, (i) => r[i]) };
}
var Fp = ae((e, t) => {
  const {
      isInline: n,
      direction: r,
      align: i,
      justify: o,
      spacing: a = "0.5rem",
      wrap: s,
      children: l,
      divider: u,
      className: c,
      shouldWrapChildren: f,
      ...d
    } = e,
    p = n ? "row" : r ?? "column",
    m = S.useMemo(() => VE({ spacing: a, direction: p }), [a, p]),
    v = !!u,
    w = !f && !v,
    y = S.useMemo(() => {
      const g = ex(l);
      return w
        ? g
        : g.map((b, P) => {
            const A = typeof b.key < "u" ? b.key : P,
              T = P + 1 === g.length,
              O = f ? _.jsx(ox, { children: b }, A) : b;
            if (!v) return O;
            const D = S.cloneElement(u, { __css: m }),
              Q = T ? null : D;
            return _.jsxs(S.Fragment, { children: [O, Q] }, A);
          });
    }, [u, m, v, w, f, l]),
    h = ye("chakra-stack", c);
  return _.jsx(te.div, {
    ref: t,
    display: "flex",
    alignItems: i,
    justifyContent: o,
    flexDirection: p,
    flexWrap: s,
    gap: v ? void 0 : a,
    className: h,
    ...d,
    children: y,
  });
});
Fp.displayName = "Stack";
var ax = ae(function (t, n) {
  const r = Gr("Heading", t),
    { className: i, ...o } = On(t);
  return _.jsx(te.h2, {
    ref: n,
    className: ye("chakra-heading", t.className),
    ...o,
    __css: r,
  });
});
ax.displayName = "Heading";
var vn = te("div");
vn.displayName = "Box";
var sx = ae(function (t, n) {
  const { size: r, centerContent: i = !0, ...o } = t,
    a = i
      ? { display: "flex", alignItems: "center", justifyContent: "center" }
      : {};
  return _.jsx(vn, {
    ref: n,
    boxSize: r,
    __css: { ...a, flexShrink: 0, flexGrow: 0 },
    ...o,
  });
});
sx.displayName = "Square";
var BE = ae(function (t, n) {
  const { size: r, ...i } = t;
  return _.jsx(sx, { size: r, ref: n, borderRadius: "9999px", ...i });
});
BE.displayName = "Circle";
var Ao = ae(function (t, n) {
  const {
      direction: r,
      align: i,
      justify: o,
      wrap: a,
      basis: s,
      grow: l,
      shrink: u,
      ...c
    } = t,
    f = {
      display: "flex",
      flexDirection: r,
      alignItems: i,
      justifyContent: o,
      flexWrap: a,
      flexBasis: s,
      flexGrow: l,
      flexShrink: u,
    };
  return _.jsx(te.div, { ref: n, __css: f, ...c });
});
Ao.displayName = "Flex";
var $E = {
    prefix: "fas",
    iconName: "pen-to-square",
    icon: [
      512,
      512,
      ["edit"],
      "f044",
      "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",
    ],
  },
  WE = $E,
  UE = {
    prefix: "fas",
    iconName: "user",
    icon: [
      448,
      512,
      [128100, 62144],
      "f007",
      "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z",
    ],
  },
  HE = {
    prefix: "fas",
    iconName: "trash",
    icon: [
      448,
      512,
      [],
      "f1f8",
      "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",
    ],
  };
function wv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wv(Object(n), !0).forEach(function (r) {
          Ne(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : wv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Sl(e) {
  "@babel/helpers - typeof";
  return (
    (Sl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sl(e)
  );
}
function GE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function YE(e, t, n) {
  return (
    t && bv(e.prototype, t),
    n && bv(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Ne(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Dp(e, t) {
  return XE(e) || qE(e, t) || lx(e, t) || JE();
}
function wa(e) {
  return KE(e) || QE(e) || lx(e) || ZE();
}
function KE(e) {
  if (Array.isArray(e)) return Qf(e);
}
function XE(e) {
  if (Array.isArray(e)) return e;
}
function QE(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function qE(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      a,
      s;
    try {
      for (
        n = n.call(e);
        !(i = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        i = !0
      );
    } catch (l) {
      (o = !0), (s = l);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw s;
      }
    }
    return r;
  }
}
function lx(e, t) {
  if (e) {
    if (typeof e == "string") return Qf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Qf(e, t);
  }
}
function Qf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ZE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var kv = function () {},
  jp = {},
  ux = {},
  cx = null,
  fx = { mark: kv, measure: kv };
try {
  typeof window < "u" && (jp = window),
    typeof document < "u" && (ux = document),
    typeof MutationObserver < "u" && (cx = MutationObserver),
    typeof performance < "u" && (fx = performance);
} catch {}
var e_ = jp.navigator || {},
  Cv = e_.userAgent,
  Pv = Cv === void 0 ? "" : Cv,
  ir = jp,
  he = ux,
  Tv = cx,
  os = fx;
ir.document;
var In =
    !!he.documentElement &&
    !!he.head &&
    typeof he.addEventListener == "function" &&
    typeof he.createElement == "function",
  dx = ~Pv.indexOf("MSIE") || ~Pv.indexOf("Trident/"),
  as,
  ss,
  ls,
  us,
  cs,
  Tn = "___FONT_AWESOME___",
  qf = 16,
  px = "fa",
  hx = "svg-inline--fa",
  Br = "data-fa-i2svg",
  Zf = "data-fa-pseudo-element",
  t_ = "data-fa-pseudo-element-pending",
  zp = "data-prefix",
  Vp = "data-icon",
  Ev = "fontawesome-i2svg",
  n_ = "async",
  r_ = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  mx = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  de = "classic",
  Ce = "sharp",
  Bp = [de, Ce];
function ba(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[de];
    },
  });
}
var ia = ba(
    ((as = {}),
    Ne(as, de, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      fakd: "kit",
      "fa-kit": "kit",
      "fa-kit-duotone": "kit",
    }),
    Ne(as, Ce, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    }),
    as)
  ),
  oa = ba(
    ((ss = {}),
    Ne(ss, de, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    Ne(ss, Ce, { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" }),
    ss)
  ),
  aa = ba(
    ((ls = {}),
    Ne(ls, de, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    Ne(ls, Ce, {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    }),
    ls)
  ),
  i_ = ba(
    ((us = {}),
    Ne(us, de, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    Ne(us, Ce, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    }),
    us)
  ),
  o_ = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  vx = "fa-layers-text",
  a_ =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  s_ = ba(
    ((cs = {}),
    Ne(cs, de, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    Ne(cs, Ce, { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" }),
    cs)
  ),
  gx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  l_ = gx.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  u_ = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  _r = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  sa = new Set();
Object.keys(oa[de]).map(sa.add.bind(sa));
Object.keys(oa[Ce]).map(sa.add.bind(sa));
var c_ = []
    .concat(Bp, wa(sa), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      _r.GROUP,
      _r.SWAP_OPACITY,
      _r.PRIMARY,
      _r.SECONDARY,
    ])
    .concat(
      gx.map(function (e) {
        return "".concat(e, "x");
      })
    )
    .concat(
      l_.map(function (e) {
        return "w-".concat(e);
      })
    ),
  Ro = ir.FontAwesomeConfig || {};
function f_(e) {
  var t = he.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function d_(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (he && typeof he.querySelector == "function") {
  var p_ = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  p_.forEach(function (e) {
    var t = Dp(e, 2),
      n = t[0],
      r = t[1],
      i = d_(f_(n));
    i != null && (Ro[r] = i);
  });
}
var yx = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: px,
  replacementClass: hx,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Ro.familyPrefix && (Ro.cssPrefix = Ro.familyPrefix);
var Bi = L(L({}, yx), Ro);
Bi.autoReplaceSvg || (Bi.observeMutations = !1);
var j = {};
Object.keys(yx).forEach(function (e) {
  Object.defineProperty(j, e, {
    enumerable: !0,
    set: function (n) {
      (Bi[e] = n),
        Oo.forEach(function (r) {
          return r(j);
        });
    },
    get: function () {
      return Bi[e];
    },
  });
});
Object.defineProperty(j, "familyPrefix", {
  enumerable: !0,
  set: function (t) {
    (Bi.cssPrefix = t),
      Oo.forEach(function (n) {
        return n(j);
      });
  },
  get: function () {
    return Bi.cssPrefix;
  },
});
ir.FontAwesomeConfig = j;
var Oo = [];
function h_(e) {
  return (
    Oo.push(e),
    function () {
      Oo.splice(Oo.indexOf(e), 1);
    }
  );
}
var Ln = qf,
  tn = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function m_(e) {
  if (!(!e || !In)) {
    var t = he.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    for (var n = he.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var o = n[i],
        a = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(a) > -1 && (r = o);
    }
    return he.head.insertBefore(t, r), e;
  }
}
var v_ = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function la() {
  for (var e = 12, t = ""; e-- > 0; ) t += v_[(Math.random() * 62) | 0];
  return t;
}
function Ki(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function $p(e) {
  return e.classList
    ? Ki(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter(function (t) {
        return t;
      });
}
function xx(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function g_(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + "".concat(n, '="').concat(xx(e[n]), '" ');
    }, "")
    .trim();
}
function mu(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function Wp(e) {
  return (
    e.size !== tn.size ||
    e.x !== tn.x ||
    e.y !== tn.y ||
    e.rotate !== tn.rotate ||
    e.flipX ||
    e.flipY
  );
}
function y_(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: "translate(".concat(n / 2, " 256)") },
    o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    a = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    s = "rotate(".concat(t.rotate, " 0 0)"),
    l = { transform: "".concat(o, " ").concat(a, " ").concat(s) },
    u = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: i, inner: l, path: u };
}
function x_(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? qf : n,
    i = e.height,
    o = i === void 0 ? qf : i,
    a = e.startCentered,
    s = a === void 0 ? !1 : a,
    l = "";
  return (
    s && dx
      ? (l += "translate("
          .concat(t.x / Ln - r / 2, "em, ")
          .concat(t.y / Ln - o / 2, "em) "))
      : s
      ? (l += "translate(calc(-50% + "
          .concat(t.x / Ln, "em), calc(-50% + ")
          .concat(t.y / Ln, "em)) "))
      : (l += "translate(".concat(t.x / Ln, "em, ").concat(t.y / Ln, "em) ")),
    (l += "scale("
      .concat((t.size / Ln) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / Ln) * (t.flipY ? -1 : 1), ") ")),
    (l += "rotate(".concat(t.rotate, "deg) ")),
    l
  );
}
var S_ = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Sx() {
  var e = px,
    t = hx,
    n = j.cssPrefix,
    r = j.replacementClass,
    i = S_;
  if (n !== e || r !== t) {
    var o = new RegExp("\\.".concat(e, "\\-"), "g"),
      a = new RegExp("\\--".concat(e, "\\-"), "g"),
      s = new RegExp("\\.".concat(t), "g");
    i = i
      .replace(o, ".".concat(n, "-"))
      .replace(a, "--".concat(n, "-"))
      .replace(s, ".".concat(r));
  }
  return i;
}
var _v = !1;
function yc() {
  j.autoAddCss && !_v && (m_(Sx()), (_v = !0));
}
var w_ = {
    mixout: function () {
      return { dom: { css: Sx, insertCss: yc } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          yc();
        },
        beforeI2svg: function () {
          yc();
        },
      };
    },
  },
  En = ir || {};
En[Tn] || (En[Tn] = {});
En[Tn].styles || (En[Tn].styles = {});
En[Tn].hooks || (En[Tn].hooks = {});
En[Tn].shims || (En[Tn].shims = []);
var zt = En[Tn],
  wx = [],
  b_ = function e() {
    he.removeEventListener("DOMContentLoaded", e),
      (wl = 1),
      wx.map(function (t) {
        return t();
      });
  },
  wl = !1;
In &&
  ((wl = (he.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    he.readyState
  )),
  wl || he.addEventListener("DOMContentLoaded", b_));
function k_(e) {
  In && (wl ? setTimeout(e, 0) : wx.push(e));
}
function ka(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    o = i === void 0 ? [] : i;
  return typeof e == "string"
    ? xx(e)
    : "<"
        .concat(t, " ")
        .concat(g_(r), ">")
        .concat(o.map(ka).join(""), "</")
        .concat(t, ">");
}
function Av(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var C_ = function (t, n) {
    return function (r, i, o, a) {
      return t.call(n, r, i, o, a);
    };
  },
  xc = function (t, n, r, i) {
    var o = Object.keys(t),
      a = o.length,
      s = i !== void 0 ? C_(n, i) : n,
      l,
      u,
      c;
    for (
      r === void 0 ? ((l = 1), (c = t[o[0]])) : ((l = 0), (c = r));
      l < a;
      l++
    )
      (u = o[l]), (c = s(c, t[u], u, t));
    return c;
  };
function P_(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var o = e.charCodeAt(n++);
      (o & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (o & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function Jf(e) {
  var t = P_(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function T_(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function Rv(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function ed(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    o = Rv(t);
  typeof zt.hooks.addPack == "function" && !i
    ? zt.hooks.addPack(e, Rv(t))
    : (zt.styles[e] = L(L({}, zt.styles[e] || {}), o)),
    e === "fas" && ed("fa", t);
}
var fs,
  ds,
  ps,
  pi = zt.styles,
  E_ = zt.shims,
  __ =
    ((fs = {}),
    Ne(fs, de, Object.values(aa[de])),
    Ne(fs, Ce, Object.values(aa[Ce])),
    fs),
  Up = null,
  bx = {},
  kx = {},
  Cx = {},
  Px = {},
  Tx = {},
  A_ =
    ((ds = {}),
    Ne(ds, de, Object.keys(ia[de])),
    Ne(ds, Ce, Object.keys(ia[Ce])),
    ds);
function R_(e) {
  return ~c_.indexOf(e);
}
function O_(e, t) {
  var n = t.split("-"),
    r = n[0],
    i = n.slice(1).join("-");
  return r === e && i !== "" && !R_(i) ? i : null;
}
var Ex = function () {
  var t = function (o) {
    return xc(
      pi,
      function (a, s, l) {
        return (a[l] = xc(s, o, {})), a;
      },
      {}
    );
  };
  (bx = t(function (i, o, a) {
    if ((o[3] && (i[o[3]] = a), o[2])) {
      var s = o[2].filter(function (l) {
        return typeof l == "number";
      });
      s.forEach(function (l) {
        i[l.toString(16)] = a;
      });
    }
    return i;
  })),
    (kx = t(function (i, o, a) {
      if (((i[a] = a), o[2])) {
        var s = o[2].filter(function (l) {
          return typeof l == "string";
        });
        s.forEach(function (l) {
          i[l] = a;
        });
      }
      return i;
    })),
    (Tx = t(function (i, o, a) {
      var s = o[2];
      return (
        (i[a] = a),
        s.forEach(function (l) {
          i[l] = a;
        }),
        i
      );
    }));
  var n = "far" in pi || j.autoFetchSvg,
    r = xc(
      E_,
      function (i, o) {
        var a = o[0],
          s = o[1],
          l = o[2];
        return (
          s === "far" && !n && (s = "fas"),
          typeof a == "string" && (i.names[a] = { prefix: s, iconName: l }),
          typeof a == "number" &&
            (i.unicodes[a.toString(16)] = { prefix: s, iconName: l }),
          i
        );
      },
      { names: {}, unicodes: {} }
    );
  (Cx = r.names),
    (Px = r.unicodes),
    (Up = vu(j.styleDefault, { family: j.familyDefault }));
};
h_(function (e) {
  Up = vu(e.styleDefault, { family: j.familyDefault });
});
Ex();
function Hp(e, t) {
  return (bx[e] || {})[t];
}
function I_(e, t) {
  return (kx[e] || {})[t];
}
function Ar(e, t) {
  return (Tx[e] || {})[t];
}
function _x(e) {
  return Cx[e] || { prefix: null, iconName: null };
}
function M_(e) {
  var t = Px[e],
    n = Hp("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function or() {
  return Up;
}
var Gp = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function vu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? de : n,
    i = ia[r][e],
    o = oa[r][e] || oa[r][i],
    a = e in zt.styles ? e : null;
  return o || a || null;
}
var Ov =
  ((ps = {}),
  Ne(ps, de, Object.keys(aa[de])),
  Ne(ps, Ce, Object.keys(aa[Ce])),
  ps);
function gu(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    o =
      ((t = {}),
      Ne(t, de, "".concat(j.cssPrefix, "-").concat(de)),
      Ne(t, Ce, "".concat(j.cssPrefix, "-").concat(Ce)),
      t),
    a = null,
    s = de;
  (e.includes(o[de]) ||
    e.some(function (u) {
      return Ov[de].includes(u);
    })) &&
    (s = de),
    (e.includes(o[Ce]) ||
      e.some(function (u) {
        return Ov[Ce].includes(u);
      })) &&
      (s = Ce);
  var l = e.reduce(function (u, c) {
    var f = O_(j.cssPrefix, c);
    if (
      (pi[c]
        ? ((c = __[s].includes(c) ? i_[s][c] : c), (a = c), (u.prefix = c))
        : A_[s].indexOf(c) > -1
        ? ((a = c), (u.prefix = vu(c, { family: s })))
        : f
        ? (u.iconName = f)
        : c !== j.replacementClass &&
          c !== o[de] &&
          c !== o[Ce] &&
          u.rest.push(c),
      !i && u.prefix && u.iconName)
    ) {
      var d = a === "fa" ? _x(u.iconName) : {},
        p = Ar(u.prefix, u.iconName);
      d.prefix && (a = null),
        (u.iconName = d.iconName || p || u.iconName),
        (u.prefix = d.prefix || u.prefix),
        u.prefix === "far" &&
          !pi.far &&
          pi.fas &&
          !j.autoFetchSvg &&
          (u.prefix = "fas");
    }
    return u;
  }, Gp());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"),
    !l.prefix &&
      s === Ce &&
      (pi.fass || j.autoFetchSvg) &&
      ((l.prefix = "fass"),
      (l.iconName = Ar(l.prefix, l.iconName) || l.iconName)),
    (l.prefix === "fa" || a === "fa") && (l.prefix = or() || "fas"),
    l
  );
}
var N_ = (function () {
    function e() {
      GE(this, e), (this.definitions = {});
    }
    return (
      YE(e, [
        {
          key: "add",
          value: function () {
            for (
              var n = this, r = arguments.length, i = new Array(r), o = 0;
              o < r;
              o++
            )
              i[o] = arguments[o];
            var a = i.reduce(this._pullDefinitions, {});
            Object.keys(a).forEach(function (s) {
              (n.definitions[s] = L(L({}, n.definitions[s] || {}), a[s])),
                ed(s, a[s]);
              var l = aa[de][s];
              l && ed(l, a[s]), Ex();
            });
          },
        },
        {
          key: "reset",
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: "_pullDefinitions",
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (o) {
                var a = i[o],
                  s = a.prefix,
                  l = a.iconName,
                  u = a.icon,
                  c = u[2];
                n[s] || (n[s] = {}),
                  c.length > 0 &&
                    c.forEach(function (f) {
                      typeof f == "string" && (n[s][f] = u);
                    }),
                  (n[s][l] = u);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  Iv = [],
  hi = {},
  _i = {},
  L_ = Object.keys(_i);
function F_(e, t) {
  var n = t.mixoutsTo;
  return (
    (Iv = e),
    (hi = {}),
    Object.keys(_i).forEach(function (r) {
      L_.indexOf(r) === -1 && delete _i[r];
    }),
    Iv.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (a) {
          typeof i[a] == "function" && (n[a] = i[a]),
            Sl(i[a]) === "object" &&
              Object.keys(i[a]).forEach(function (s) {
                n[a] || (n[a] = {}), (n[a][s] = i[a][s]);
              });
        }),
        r.hooks)
      ) {
        var o = r.hooks();
        Object.keys(o).forEach(function (a) {
          hi[a] || (hi[a] = []), hi[a].push(o[a]);
        });
      }
      r.provides && r.provides(_i);
    }),
    n
  );
}
function td(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  var o = hi[e] || [];
  return (
    o.forEach(function (a) {
      t = a.apply(null, [t].concat(r));
    }),
    t
  );
}
function $r(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = hi[e] || [];
  i.forEach(function (o) {
    o.apply(null, n);
  });
}
function _n() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return _i[e] ? _i[e].apply(null, t) : void 0;
}
function nd(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || or();
  if (t)
    return (t = Ar(n, t) || t), Av(Ax.definitions, n, t) || Av(zt.styles, n, t);
}
var Ax = new N_(),
  D_ = function () {
    (j.autoReplaceSvg = !1), (j.observeMutations = !1), $r("noAuto");
  },
  j_ = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return In
        ? ($r("beforeI2svg", t), _n("pseudoElements2svg", t), _n("i2svg", t))
        : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      j.autoReplaceSvg === !1 && (j.autoReplaceSvg = !0),
        (j.observeMutations = !0),
        k_(function () {
          V_({ autoReplaceSvgRoot: n }), $r("watch", t);
        });
    },
  },
  z_ = {
    icon: function (t) {
      if (t === null) return null;
      if (Sl(t) === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: Ar(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          r = vu(t[0]);
        return { prefix: r, iconName: Ar(r, n) || n };
      }
      if (
        typeof t == "string" &&
        (t.indexOf("".concat(j.cssPrefix, "-")) > -1 || t.match(o_))
      ) {
        var i = gu(t.split(" "), { skipLookups: !0 });
        return {
          prefix: i.prefix || or(),
          iconName: Ar(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof t == "string") {
        var o = or();
        return { prefix: o, iconName: Ar(o, t) || t };
      }
    },
  },
  kt = {
    noAuto: D_,
    config: j,
    dom: j_,
    parse: z_,
    library: Ax,
    findIconDefinition: nd,
    toHtml: ka,
  },
  V_ = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? he : n;
    (Object.keys(zt.styles).length > 0 || j.autoFetchSvg) &&
      In &&
      j.autoReplaceSvg &&
      kt.dom.i2svg({ node: r });
  };
function yu(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (r) {
          return ka(r);
        });
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (In) {
          var r = he.createElement("div");
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function B_(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    o = e.styles,
    a = e.transform;
  if (Wp(a) && n.found && !r.found) {
    var s = n.width,
      l = n.height,
      u = { x: s / l / 2, y: 0.5 };
    i.style = mu(
      L(
        L({}, o),
        {},
        {
          "transform-origin": ""
            .concat(u.x + a.x / 16, "em ")
            .concat(u.y + a.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: i, children: t }];
}
function $_(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    o = e.symbol,
    a = o === !0 ? "".concat(t, "-").concat(j.cssPrefix, "-").concat(n) : o;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: L(L({}, i), {}, { id: a }), children: r },
      ],
    },
  ];
}
function Yp(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    o = e.iconName,
    a = e.transform,
    s = e.symbol,
    l = e.title,
    u = e.maskId,
    c = e.titleId,
    f = e.extra,
    d = e.watchable,
    p = d === void 0 ? !1 : d,
    m = r.found ? r : n,
    v = m.width,
    w = m.height,
    y = i === "fak",
    h = [j.replacementClass, o ? "".concat(j.cssPrefix, "-").concat(o) : ""]
      .filter(function (O) {
        return f.classes.indexOf(O) === -1;
      })
      .filter(function (O) {
        return O !== "" || !!O;
      })
      .concat(f.classes)
      .join(" "),
    g = {
      children: [],
      attributes: L(
        L({}, f.attributes),
        {},
        {
          "data-prefix": i,
          "data-icon": o,
          class: h,
          role: f.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(v, " ").concat(w),
        }
      ),
    },
    b =
      y && !~f.classes.indexOf("fa-fw")
        ? { width: "".concat((v / w) * 16 * 0.0625, "em") }
        : {};
  p && (g.attributes[Br] = ""),
    l &&
      (g.children.push({
        tag: "title",
        attributes: {
          id: g.attributes["aria-labelledby"] || "title-".concat(c || la()),
        },
        children: [l],
      }),
      delete g.attributes.title);
  var P = L(
      L({}, g),
      {},
      {
        prefix: i,
        iconName: o,
        main: n,
        mask: r,
        maskId: u,
        transform: a,
        symbol: s,
        styles: L(L({}, b), f.styles),
      }
    ),
    A =
      r.found && n.found
        ? _n("generateAbstractMask", P) || { children: [], attributes: {} }
        : _n("generateAbstractIcon", P) || { children: [], attributes: {} },
    T = A.children,
    R = A.attributes;
  return (P.children = T), (P.attributes = R), s ? $_(P) : B_(P);
}
function Mv(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    o = e.title,
    a = e.extra,
    s = e.watchable,
    l = s === void 0 ? !1 : s,
    u = L(
      L(L({}, a.attributes), o ? { title: o } : {}),
      {},
      { class: a.classes.join(" ") }
    );
  l && (u[Br] = "");
  var c = L({}, a.styles);
  Wp(i) &&
    ((c.transform = x_({
      transform: i,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (c["-webkit-transform"] = c.transform));
  var f = mu(c);
  f.length > 0 && (u.style = f);
  var d = [];
  return (
    d.push({ tag: "span", attributes: u, children: [t] }),
    o &&
      d.push({ tag: "span", attributes: { class: "sr-only" }, children: [o] }),
    d
  );
}
function W_(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = L(
      L(L({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(" ") }
    ),
    o = mu(r.styles);
  o.length > 0 && (i.style = o);
  var a = [];
  return (
    a.push({ tag: "span", attributes: i, children: [t] }),
    n &&
      a.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    a
  );
}
var Sc = zt.styles;
function rd(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = Dp(r, 1),
    o = i[0],
    a = null;
  return (
    Array.isArray(o)
      ? (a = {
          tag: "g",
          attributes: { class: "".concat(j.cssPrefix, "-").concat(_r.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(j.cssPrefix, "-").concat(_r.SECONDARY),
                fill: "currentColor",
                d: o[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(j.cssPrefix, "-").concat(_r.PRIMARY),
                fill: "currentColor",
                d: o[1],
              },
            },
          ],
        })
      : (a = { tag: "path", attributes: { fill: "currentColor", d: o } }),
    { found: !0, width: t, height: n, icon: a }
  );
}
var U_ = { found: !1, width: 512, height: 512 };
function H_(e, t) {
  !mx &&
    !j.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function id(e, t) {
  var n = t;
  return (
    t === "fa" && j.styleDefault !== null && (t = or()),
    new Promise(function (r, i) {
      if ((_n("missingIconAbstract"), n === "fa")) {
        var o = _x(e) || {};
        (e = o.iconName || e), (t = o.prefix || t);
      }
      if (e && t && Sc[t] && Sc[t][e]) {
        var a = Sc[t][e];
        return r(rd(a));
      }
      H_(e, t),
        r(
          L(
            L({}, U_),
            {},
            {
              icon:
                j.showMissingIcons && e ? _n("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
var Nv = function () {},
  od =
    j.measurePerformance && os && os.mark && os.measure
      ? os
      : { mark: Nv, measure: Nv },
  vo = 'FA "6.5.1"',
  G_ = function (t) {
    return (
      od.mark("".concat(vo, " ").concat(t, " begins")),
      function () {
        return Rx(t);
      }
    );
  },
  Rx = function (t) {
    od.mark("".concat(vo, " ").concat(t, " ends")),
      od.measure(
        "".concat(vo, " ").concat(t),
        "".concat(vo, " ").concat(t, " begins"),
        "".concat(vo, " ").concat(t, " ends")
      );
  },
  Kp = { begin: G_, end: Rx },
  zs = function () {};
function Lv(e) {
  var t = e.getAttribute ? e.getAttribute(Br) : null;
  return typeof t == "string";
}
function Y_(e) {
  var t = e.getAttribute ? e.getAttribute(zp) : null,
    n = e.getAttribute ? e.getAttribute(Vp) : null;
  return t && n;
}
function K_(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(j.replacementClass)
  );
}
function X_() {
  if (j.autoReplaceSvg === !0) return Vs.replace;
  var e = Vs[j.autoReplaceSvg];
  return e || Vs.replace;
}
function Q_(e) {
  return he.createElementNS("http://www.w3.org/2000/svg", e);
}
function q_(e) {
  return he.createElement(e);
}
function Ox(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === "svg" ? Q_ : q_) : n;
  if (typeof e == "string") return he.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (a) {
    i.setAttribute(a, e.attributes[a]);
  });
  var o = e.children || [];
  return (
    o.forEach(function (a) {
      i.appendChild(Ox(a, { ceFn: r }));
    }),
    i
  );
}
function Z_(e) {
  var t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var Vs = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(Ox(i), n);
        }),
        n.getAttribute(Br) === null && j.keepOriginalSource)
      ) {
        var r = he.createComment(Z_(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~$p(n).indexOf(j.replacementClass)) return Vs.replace(t);
    var i = new RegExp("".concat(j.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var o = r[0].attributes.class.split(" ").reduce(
        function (s, l) {
          return (
            l === j.replacementClass || l.match(i)
              ? s.toSvg.push(l)
              : s.toNode.push(l),
            s
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = o.toSvg.join(" ")),
        o.toNode.length === 0
          ? n.removeAttribute("class")
          : n.setAttribute("class", o.toNode.join(" "));
    }
    var a = r.map(function (s) {
      return ka(s);
    }).join(`
`);
    n.setAttribute(Br, ""), (n.innerHTML = a);
  },
};
function Fv(e) {
  e();
}
function Ix(e, t) {
  var n = typeof t == "function" ? t : zs;
  if (e.length === 0) n();
  else {
    var r = Fv;
    j.mutateApproach === n_ && (r = ir.requestAnimationFrame || Fv),
      r(function () {
        var i = X_(),
          o = Kp.begin("mutate");
        e.map(i), o(), n();
      });
  }
}
var Xp = !1;
function Mx() {
  Xp = !0;
}
function ad() {
  Xp = !1;
}
var bl = null;
function Dv(e) {
  if (Tv && j.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? zs : t,
      r = e.nodeCallback,
      i = r === void 0 ? zs : r,
      o = e.pseudoElementsCallback,
      a = o === void 0 ? zs : o,
      s = e.observeMutationsRoot,
      l = s === void 0 ? he : s;
    (bl = new Tv(function (u) {
      if (!Xp) {
        var c = or();
        Ki(u).forEach(function (f) {
          if (
            (f.type === "childList" &&
              f.addedNodes.length > 0 &&
              !Lv(f.addedNodes[0]) &&
              (j.searchPseudoElements && a(f.target), n(f.target)),
            f.type === "attributes" &&
              f.target.parentNode &&
              j.searchPseudoElements &&
              a(f.target.parentNode),
            f.type === "attributes" &&
              Lv(f.target) &&
              ~u_.indexOf(f.attributeName))
          )
            if (f.attributeName === "class" && Y_(f.target)) {
              var d = gu($p(f.target)),
                p = d.prefix,
                m = d.iconName;
              f.target.setAttribute(zp, p || c),
                m && f.target.setAttribute(Vp, m);
            } else K_(f.target) && i(f.target);
        });
      }
    })),
      In &&
        bl.observe(l, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function J_() {
  bl && bl.disconnect();
}
function eA(e) {
  var t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce(function (r, i) {
        var o = i.split(":"),
          a = o[0],
          s = o.slice(1);
        return a && s.length > 0 && (r[a] = s.join(":").trim()), r;
      }, {})),
    n
  );
}
function tA(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    i = gu($p(e));
  return (
    i.prefix || (i.prefix = or()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          I_(i.prefix, e.innerText) || Hp(i.prefix, Jf(e.innerText))),
      !i.iconName &&
        j.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function nA(e) {
  var t = Ki(e.attributes).reduce(function (i, o) {
      return (
        i.name !== "class" && i.name !== "style" && (i[o.name] = o.value), i
      );
    }, {}),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    j.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(j.replacementClass, "-title-")
            .concat(r || la()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function rA() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: tn,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function jv(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = tA(e),
    r = n.iconName,
    i = n.prefix,
    o = n.rest,
    a = nA(e),
    s = td("parseNodeAttributes", {}, e),
    l = t.styleParser ? eA(e) : [];
  return L(
    {
      iconName: r,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: i,
      transform: tn,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: o, styles: l, attributes: a },
    },
    s
  );
}
var iA = zt.styles;
function Nx(e) {
  var t = j.autoReplaceSvg === "nest" ? jv(e, { styleParser: !1 }) : jv(e);
  return ~t.extra.classes.indexOf(vx)
    ? _n("generateLayersText", e, t)
    : _n("generateSvgReplacementMutation", e, t);
}
var ar = new Set();
Bp.map(function (e) {
  ar.add("fa-".concat(e));
});
Object.keys(ia[de]).map(ar.add.bind(ar));
Object.keys(ia[Ce]).map(ar.add.bind(ar));
ar = wa(ar);
function zv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!In) return Promise.resolve();
  var n = he.documentElement.classList,
    r = function (f) {
      return n.add("".concat(Ev, "-").concat(f));
    },
    i = function (f) {
      return n.remove("".concat(Ev, "-").concat(f));
    },
    o = j.autoFetchSvg
      ? ar
      : Bp.map(function (c) {
          return "fa-".concat(c);
        }).concat(Object.keys(iA));
  o.includes("fa") || o.push("fa");
  var a = [".".concat(vx, ":not([").concat(Br, "])")]
    .concat(
      o.map(function (c) {
        return ".".concat(c, ":not([").concat(Br, "])");
      })
    )
    .join(", ");
  if (a.length === 0) return Promise.resolve();
  var s = [];
  try {
    s = Ki(e.querySelectorAll(a));
  } catch {}
  if (s.length > 0) r("pending"), i("complete");
  else return Promise.resolve();
  var l = Kp.begin("onTree"),
    u = s.reduce(function (c, f) {
      try {
        var d = Nx(f);
        d && c.push(d);
      } catch (p) {
        mx || (p.name === "MissingIcon" && console.error(p));
      }
      return c;
    }, []);
  return new Promise(function (c, f) {
    Promise.all(u)
      .then(function (d) {
        Ix(d, function () {
          r("active"),
            r("complete"),
            i("pending"),
            typeof t == "function" && t(),
            l(),
            c();
        });
      })
      .catch(function (d) {
        l(), f(d);
      });
  });
}
function oA(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Nx(e).then(function (n) {
    n && Ix([n], t);
  });
}
function aA(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : nd(t || {}),
      i = n.mask;
    return (
      i && (i = (i || {}).icon ? i : nd(i || {})),
      e(r, L(L({}, n), {}, { mask: i }))
    );
  };
}
var sA = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? tn : r,
      o = n.symbol,
      a = o === void 0 ? !1 : o,
      s = n.mask,
      l = s === void 0 ? null : s,
      u = n.maskId,
      c = u === void 0 ? null : u,
      f = n.title,
      d = f === void 0 ? null : f,
      p = n.titleId,
      m = p === void 0 ? null : p,
      v = n.classes,
      w = v === void 0 ? [] : v,
      y = n.attributes,
      h = y === void 0 ? {} : y,
      g = n.styles,
      b = g === void 0 ? {} : g;
    if (t) {
      var P = t.prefix,
        A = t.iconName,
        T = t.icon;
      return yu(L({ type: "icon" }, t), function () {
        return (
          $r("beforeDOMElementCreation", { iconDefinition: t, params: n }),
          j.autoA11y &&
            (d
              ? (h["aria-labelledby"] = ""
                  .concat(j.replacementClass, "-title-")
                  .concat(m || la()))
              : ((h["aria-hidden"] = "true"), (h.focusable = "false"))),
          Yp({
            icons: {
              main: rd(T),
              mask: l
                ? rd(l.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: P,
            iconName: A,
            transform: L(L({}, tn), i),
            symbol: a,
            title: d,
            maskId: c,
            titleId: m,
            extra: { attributes: h, styles: b, classes: w },
          })
        );
      });
    }
  },
  lA = {
    mixout: function () {
      return { icon: aA(sA) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = zv), (n.nodeCallback = oA), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? he : r,
          o = n.callback,
          a = o === void 0 ? function () {} : o;
        return zv(i, a);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            o = r.title,
            a = r.titleId,
            s = r.prefix,
            l = r.transform,
            u = r.symbol,
            c = r.mask,
            f = r.maskId,
            d = r.extra;
          return new Promise(function (p, m) {
            Promise.all([
              id(i, s),
              c.iconName
                ? id(c.iconName, c.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (v) {
                var w = Dp(v, 2),
                  y = w[0],
                  h = w[1];
                p([
                  n,
                  Yp({
                    icons: { main: y, mask: h },
                    prefix: s,
                    iconName: i,
                    transform: l,
                    symbol: u,
                    maskId: f,
                    title: o,
                    titleId: a,
                    extra: d,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(m);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            o = n.main,
            a = n.transform,
            s = n.styles,
            l = mu(s);
          l.length > 0 && (i.style = l);
          var u;
          return (
            Wp(a) &&
              (u = _n("generateAbstractTransformGrouping", {
                main: o,
                transform: a,
                containerWidth: o.width,
                iconWidth: o.width,
              })),
            r.push(u || o.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  uA = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.classes,
            o = i === void 0 ? [] : i;
          return yu({ type: "layer" }, function () {
            $r("beforeDOMElementCreation", { assembler: n, params: r });
            var a = [];
            return (
              n(function (s) {
                Array.isArray(s)
                  ? s.map(function (l) {
                      a = a.concat(l.abstract);
                    })
                  : (a = a.concat(s.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(j.cssPrefix, "-layers")]
                      .concat(wa(o))
                      .join(" "),
                  },
                  children: a,
                },
              ]
            );
          });
        },
      };
    },
  },
  cA = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.title,
            o = i === void 0 ? null : i,
            a = r.classes,
            s = a === void 0 ? [] : a,
            l = r.attributes,
            u = l === void 0 ? {} : l,
            c = r.styles,
            f = c === void 0 ? {} : c;
          return yu({ type: "counter", content: n }, function () {
            return (
              $r("beforeDOMElementCreation", { content: n, params: r }),
              W_({
                content: n.toString(),
                title: o,
                extra: {
                  attributes: u,
                  styles: f,
                  classes: ["".concat(j.cssPrefix, "-layers-counter")].concat(
                    wa(s)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  fA = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.transform,
            o = i === void 0 ? tn : i,
            a = r.title,
            s = a === void 0 ? null : a,
            l = r.classes,
            u = l === void 0 ? [] : l,
            c = r.attributes,
            f = c === void 0 ? {} : c,
            d = r.styles,
            p = d === void 0 ? {} : d;
          return yu({ type: "text", content: n }, function () {
            return (
              $r("beforeDOMElementCreation", { content: n, params: r }),
              Mv({
                content: n,
                transform: L(L({}, tn), o),
                title: s,
                extra: {
                  attributes: f,
                  styles: p,
                  classes: ["".concat(j.cssPrefix, "-layers-text")].concat(
                    wa(u)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          o = r.transform,
          a = r.extra,
          s = null,
          l = null;
        if (dx) {
          var u = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect();
          (s = c.width / u), (l = c.height / u);
        }
        return (
          j.autoA11y && !i && (a.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            n,
            Mv({
              content: n.innerHTML,
              width: s,
              height: l,
              transform: o,
              title: i,
              extra: a,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  dA = new RegExp('"', "ug"),
  Vv = [1105920, 1112319];
function pA(e) {
  var t = e.replace(dA, ""),
    n = T_(t, 0),
    r = n >= Vv[0] && n <= Vv[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: Jf(i ? t[0] : t), isSecondary: r || i };
}
function Bv(e, t) {
  var n = "".concat(t_).concat(t.replace(":", "-"));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var o = Ki(e.children),
      a = o.filter(function (T) {
        return T.getAttribute(Zf) === t;
      })[0],
      s = ir.getComputedStyle(e, t),
      l = s.getPropertyValue("font-family").match(a_),
      u = s.getPropertyValue("font-weight"),
      c = s.getPropertyValue("content");
    if (a && !l) return e.removeChild(a), r();
    if (l && c !== "none" && c !== "") {
      var f = s.getPropertyValue("content"),
        d = ~["Sharp"].indexOf(l[2]) ? Ce : de,
        p = ~[
          "Solid",
          "Regular",
          "Light",
          "Thin",
          "Duotone",
          "Brands",
          "Kit",
        ].indexOf(l[2])
          ? oa[d][l[2].toLowerCase()]
          : s_[d][u],
        m = pA(f),
        v = m.value,
        w = m.isSecondary,
        y = l[0].startsWith("FontAwesome"),
        h = Hp(p, v),
        g = h;
      if (y) {
        var b = M_(v);
        b.iconName && b.prefix && ((h = b.iconName), (p = b.prefix));
      }
      if (
        h &&
        !w &&
        (!a || a.getAttribute(zp) !== p || a.getAttribute(Vp) !== g)
      ) {
        e.setAttribute(n, g), a && e.removeChild(a);
        var P = rA(),
          A = P.extra;
        (A.attributes[Zf] = t),
          id(h, p)
            .then(function (T) {
              var R = Yp(
                  L(
                    L({}, P),
                    {},
                    {
                      icons: { main: T, mask: Gp() },
                      prefix: p,
                      iconName: g,
                      extra: A,
                      watchable: !0,
                    }
                  )
                ),
                O = he.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore(O, e.firstChild)
                : e.appendChild(O),
                (O.outerHTML = R.map(function (D) {
                  return ka(D);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function hA(e) {
  return Promise.all([Bv(e, "::before"), Bv(e, "::after")]);
}
function mA(e) {
  return (
    e.parentNode !== document.head &&
    !~r_.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Zf) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function $v(e) {
  if (In)
    return new Promise(function (t, n) {
      var r = Ki(e.querySelectorAll("*")).filter(mA).map(hA),
        i = Kp.begin("searchPseudoElements");
      Mx(),
        Promise.all(r)
          .then(function () {
            i(), ad(), t();
          })
          .catch(function () {
            i(), ad(), n();
          });
    });
}
var vA = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = $v), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? he : r;
        j.searchPseudoElements && $v(i);
      };
    },
  },
  Wv = !1,
  gA = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            Mx(), (Wv = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Dv(td("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          J_();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          Wv
            ? ad()
            : Dv(td("mutationObserverCallbacks", { observeMutationsRoot: r }));
        },
      };
    },
  },
  Uv = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce(function (r, i) {
        var o = i.toLowerCase().split("-"),
          a = o[0],
          s = o.slice(1).join("-");
        if (a && s === "h") return (r.flipX = !0), r;
        if (a && s === "v") return (r.flipY = !0), r;
        if (((s = parseFloat(s)), isNaN(s))) return r;
        switch (a) {
          case "grow":
            r.size = r.size + s;
            break;
          case "shrink":
            r.size = r.size - s;
            break;
          case "left":
            r.x = r.x - s;
            break;
          case "right":
            r.x = r.x + s;
            break;
          case "up":
            r.y = r.y - s;
            break;
          case "down":
            r.y = r.y + s;
            break;
          case "rotate":
            r.rotate = r.rotate + s;
            break;
        }
        return r;
      }, n);
  },
  yA = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return Uv(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-transform");
          return i && (n.transform = Uv(i)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          o = n.containerWidth,
          a = n.iconWidth,
          s = { transform: "translate(".concat(o / 2, " 256)") },
          l = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "),
          u = "scale("
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ", ")
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ") "),
          c = "rotate(".concat(i.rotate, " 0 0)"),
          f = { transform: "".concat(l, " ").concat(u, " ").concat(c) },
          d = { transform: "translate(".concat((a / 2) * -1, " -256)") },
          p = { outer: s, inner: f, path: d };
        return {
          tag: "g",
          attributes: L({}, p.outer),
          children: [
            {
              tag: "g",
              attributes: L({}, p.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: L(L({}, r.icon.attributes), p.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  wc = { x: 0, y: 0, width: "100%", height: "100%" };
function Hv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function xA(e) {
  return e.tag === "g" ? e.children : [e];
}
var SA = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-mask"),
            o = i
              ? gu(
                  i.split(" ").map(function (a) {
                    return a.trim();
                  })
                )
              : Gp();
          return (
            o.prefix || (o.prefix = or()),
            (n.mask = o),
            (n.maskId = r.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          o = n.main,
          a = n.mask,
          s = n.maskId,
          l = n.transform,
          u = o.width,
          c = o.icon,
          f = a.width,
          d = a.icon,
          p = y_({ transform: l, containerWidth: f, iconWidth: u }),
          m = { tag: "rect", attributes: L(L({}, wc), {}, { fill: "white" }) },
          v = c.children ? { children: c.children.map(Hv) } : {},
          w = {
            tag: "g",
            attributes: L({}, p.inner),
            children: [
              Hv(
                L({ tag: c.tag, attributes: L(L({}, c.attributes), p.path) }, v)
              ),
            ],
          },
          y = { tag: "g", attributes: L({}, p.outer), children: [w] },
          h = "mask-".concat(s || la()),
          g = "clip-".concat(s || la()),
          b = {
            tag: "mask",
            attributes: L(
              L({}, wc),
              {},
              {
                id: h,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [m, y],
          },
          P = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: g }, children: xA(d) },
              b,
            ],
          };
        return (
          r.push(P, {
            tag: "rect",
            attributes: L(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(g, ")"),
                mask: "url(#".concat(h, ")"),
              },
              wc
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  wA = {
    provides: function (t) {
      var n = !1;
      ir.matchMedia &&
        (n = ir.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: "currentColor" },
            o = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: L(
              L({}, i),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          var a = L(L({}, o), {}, { attributeName: "opacity" }),
            s = {
              tag: "circle",
              attributes: L(L({}, i), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            n ||
              s.children.push(
                {
                  tag: "animate",
                  attributes: L(
                    L({}, o),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: L(L({}, a), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            r.push(s),
            r.push({
              tag: "path",
              attributes: L(
                L({}, i),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: L(L({}, a), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: "path",
                attributes: L(
                  L({}, i),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: L(L({}, a), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  bA = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-symbol"),
            o = i === null ? !1 : i === "" ? !0 : i;
          return (n.symbol = o), n;
        },
      };
    },
  },
  kA = [w_, lA, uA, cA, fA, vA, gA, yA, SA, wA, bA];
F_(kA, { mixoutsTo: kt });
kt.noAuto;
kt.config;
kt.library;
kt.dom;
var sd = kt.parse;
kt.findIconDefinition;
kt.toHtml;
var CA = kt.icon;
kt.layer;
kt.text;
kt.counter;
var Lx = { exports: {} },
  PA = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  TA = PA,
  EA = TA;
function Fx() {}
function Dx() {}
Dx.resetWarningCache = Fx;
var _A = function () {
  function e(r, i, o, a, s, l) {
    if (l !== EA) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Dx,
    resetWarningCache: Fx,
  };
  return (n.PropTypes = n), n;
};
Lx.exports = _A();
var AA = Lx.exports;
const W = Ll(AA);
function Gv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gv(Object(n), !0).forEach(function (r) {
          mi(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Gv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function kl(e) {
  "@babel/helpers - typeof";
  return (
    (kl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    kl(e)
  );
}
function mi(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function RA(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function OA(e, t) {
  if (e == null) return {};
  var n = RA(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function ld(e) {
  return IA(e) || MA(e) || NA(e) || LA();
}
function IA(e) {
  if (Array.isArray(e)) return ud(e);
}
function MA(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function NA(e, t) {
  if (e) {
    if (typeof e == "string") return ud(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ud(e, t);
  }
}
function ud(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function LA() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FA(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    o = e.bounce,
    a = e.shake,
    s = e.flash,
    l = e.spin,
    u = e.spinPulse,
    c = e.spinReverse,
    f = e.pulse,
    d = e.fixedWidth,
    p = e.inverse,
    m = e.border,
    v = e.listItem,
    w = e.flip,
    y = e.size,
    h = e.rotation,
    g = e.pull,
    b =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": o,
        "fa-shake": a,
        "fa-flash": s,
        "fa-spin": l,
        "fa-spin-reverse": c,
        "fa-spin-pulse": u,
        "fa-pulse": f,
        "fa-fw": d,
        "fa-inverse": p,
        "fa-border": m,
        "fa-li": v,
        "fa-flip": w === !0,
        "fa-flip-horizontal": w === "horizontal" || w === "both",
        "fa-flip-vertical": w === "vertical" || w === "both",
      }),
      mi(t, "fa-".concat(y), typeof y < "u" && y !== null),
      mi(t, "fa-rotate-".concat(h), typeof h < "u" && h !== null && h !== 0),
      mi(t, "fa-pull-".concat(g), typeof g < "u" && g !== null),
      mi(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(b)
    .map(function (P) {
      return b[P] ? P : null;
    })
    .filter(function (P) {
      return P;
    });
}
function DA(e) {
  return (e = e - 0), e === e;
}
function jx(e) {
  return DA(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var jA = ["style"];
function zA(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function VA(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        i = jx(n.slice(0, r)),
        o = n.slice(r + 1).trim();
      return i.startsWith("webkit") ? (t[zA(i)] = o) : (t[i] = o), t;
    }, {});
}
function zx(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (l) {
      return zx(e, l);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (l, u) {
        var c = t.attributes[u];
        switch (u) {
          case "class":
            (l.attrs.className = c), delete t.attributes.class;
            break;
          case "style":
            l.attrs.style = VA(c);
            break;
          default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0
              ? (l.attrs[u.toLowerCase()] = c)
              : (l.attrs[jx(u)] = c);
        }
        return l;
      },
      { attrs: {} }
    ),
    o = n.style,
    a = o === void 0 ? {} : o,
    s = OA(n, jA);
  return (
    (i.attrs.style = Un(Un({}, i.attrs.style), a)),
    e.apply(void 0, [t.tag, Un(Un({}, i.attrs), s)].concat(ld(r)))
  );
}
var Vx = !1;
try {
  Vx = !0;
} catch {}
function BA() {
  if (!Vx && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Yv(e) {
  if (e && kl(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (sd.icon) return sd.icon(e);
  if (e === null) return null;
  if (e && kl(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function bc(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? mi({}, e, t)
    : {};
}
var Mr = wn.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    o = e.className,
    a = e.title,
    s = e.titleId,
    l = e.maskId,
    u = Yv(n),
    c = bc("classes", [].concat(ld(FA(e)), ld(o.split(" ")))),
    f = bc(
      "transform",
      typeof e.transform == "string" ? sd.transform(e.transform) : e.transform
    ),
    d = bc("mask", Yv(r)),
    p = CA(
      u,
      Un(
        Un(Un(Un({}, c), f), d),
        {},
        { symbol: i, title: a, titleId: s, maskId: l }
      )
    );
  if (!p) return BA("Could not find icon", u), null;
  var m = p.abstract,
    v = { ref: t };
  return (
    Object.keys(e).forEach(function (w) {
      Mr.defaultProps.hasOwnProperty(w) || (v[w] = e[w]);
    }),
    $A(m[0], v)
  );
});
Mr.displayName = "FontAwesomeIcon";
Mr.propTypes = {
  beat: W.bool,
  border: W.bool,
  beatFade: W.bool,
  bounce: W.bool,
  className: W.string,
  fade: W.bool,
  flash: W.bool,
  mask: W.oneOfType([W.object, W.array, W.string]),
  maskId: W.string,
  fixedWidth: W.bool,
  inverse: W.bool,
  flip: W.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: W.oneOfType([W.object, W.array, W.string]),
  listItem: W.bool,
  pull: W.oneOf(["right", "left"]),
  pulse: W.bool,
  rotation: W.oneOf([0, 90, 180, 270]),
  shake: W.bool,
  size: W.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: W.bool,
  spinPulse: W.bool,
  spinReverse: W.bool,
  symbol: W.oneOfType([W.bool, W.string]),
  title: W.string,
  titleId: W.string,
  transform: W.oneOfType([W.string, W.object]),
  swapOpacity: W.bool,
};
Mr.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var $A = zx.bind(null, wn.createElement),
  [MN, WA] = dr({ strict: !1, name: "PortalManagerContext" }),
  [Bx, UA] = dr({ strict: !1, name: "PortalContext" }),
  Qp = "chakra-portal",
  HA = ".chakra-portal",
  GA = (e) =>
    _.jsx("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  YA = (e) => {
    const { appendToParentPortal: t, children: n } = e,
      [r, i] = S.useState(null),
      o = S.useRef(null),
      [, a] = S.useState({});
    S.useEffect(() => a({}), []);
    const s = UA(),
      l = WA();
    vl(() => {
      if (!r) return;
      const c = r.ownerDocument,
        f = t ? s ?? c.body : c.body;
      if (!f) return;
      (o.current = c.createElement("div")),
        (o.current.className = Qp),
        f.appendChild(o.current),
        a({});
      const d = o.current;
      return () => {
        f.contains(d) && f.removeChild(d);
      };
    }, [r]);
    const u =
      l != null && l.zIndex
        ? _.jsx(GA, { zIndex: l == null ? void 0 : l.zIndex, children: n })
        : n;
    return o.current
      ? kp.createPortal(_.jsx(Bx, { value: o.current, children: u }), o.current)
      : _.jsx("span", {
          ref: (c) => {
            c && i(c);
          },
        });
  },
  KA = (e) => {
    const { children: t, containerRef: n, appendToParentPortal: r } = e,
      i = n.current,
      o = i ?? (typeof window < "u" ? document.body : void 0),
      a = S.useMemo(() => {
        const l = i == null ? void 0 : i.ownerDocument.createElement("div");
        return l && (l.className = Qp), l;
      }, [i]),
      [, s] = S.useState({});
    return (
      vl(() => s({}), []),
      vl(() => {
        if (!(!a || !o))
          return (
            o.appendChild(a),
            () => {
              o.removeChild(a);
            }
          );
      }, [a, o]),
      o && a
        ? kp.createPortal(_.jsx(Bx, { value: r ? a : null, children: t }), a)
        : null
    );
  };
function xu(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: n, ...r } = t;
  return n ? _.jsx(KA, { containerRef: n, ...r }) : _.jsx(YA, { ...r });
}
xu.className = Qp;
xu.selector = HA;
xu.displayName = "Portal";
const $x = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Su = S.createContext({}),
  wu = S.createContext(null),
  bu = typeof document < "u",
  qp = bu ? S.useLayoutEffect : S.useEffect,
  Wx = S.createContext({ strict: !1 }),
  Zp = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  XA = "framerAppearId",
  Ux = "data-" + Zp(XA);
function QA(e, t, n, r) {
  const { visualElement: i } = S.useContext(Su),
    o = S.useContext(Wx),
    a = S.useContext(wu),
    s = S.useContext($x).reducedMotion,
    l = S.useRef();
  (r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  const u = l.current;
  S.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const c = S.useRef(!!(n[Ux] && !window.HandoffComplete));
  return (
    qp(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    S.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function vi(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function qA(e, t, n) {
  return S.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : vi(n) && (n.current = r));
    },
    [t]
  );
}
function ua(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ku(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Jp = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  eh = ["initial", ...Jp];
function Cu(e) {
  return ku(e.animate) || eh.some((t) => ua(e[t]));
}
function Hx(e) {
  return !!(Cu(e) || e.variants);
}
function ZA(e, t) {
  if (Cu(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ua(n) ? n : void 0,
      animate: ua(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function JA(e) {
  const { initial: t, animate: n } = ZA(e, S.useContext(Su));
  return S.useMemo(() => ({ initial: t, animate: n }), [Kv(t), Kv(n)]);
}
function Kv(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Xv = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  ca = {};
for (const e in Xv) ca[e] = { isEnabled: (t) => Xv[e].some((n) => !!t[n]) };
function eR(e) {
  for (const t in e) ca[t] = { ...ca[t], ...e[t] };
}
const th = S.createContext({}),
  Gx = S.createContext({}),
  tR = Symbol.for("motionComponentSymbol");
function nR({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && eR(e);
  function o(s, l) {
    let u;
    const c = { ...S.useContext($x), ...s, layoutId: rR(s) },
      { isStatic: f } = c,
      d = JA(s),
      p = r(s, f);
    if (!f && bu) {
      d.visualElement = QA(i, p, c, t);
      const m = S.useContext(Gx),
        v = S.useContext(Wx).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, v, e, m));
    }
    return S.createElement(
      Su.Provider,
      { value: d },
      u && d.visualElement
        ? S.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, s, qA(p, d.visualElement, l), p, f, d.visualElement)
    );
  }
  const a = S.forwardRef(o);
  return (a[tR] = i), a;
}
function rR({ layoutId: e }) {
  const t = S.useContext(th).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function iR(e) {
  function t(r, i = {}) {
    return nR(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const oR = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function nh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(oR.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Cl = {};
function aR(e) {
  Object.assign(Cl, e);
}
const Ca = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Yr = new Set(Ca);
function Yx(e, { layout: t, layoutId: n }) {
  return (
    Yr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Cl[e] || e === "opacity"))
  );
}
const ft = (e) => !!(e && e.getVelocity),
  sR = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  lR = Ca.length;
function uR(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let a = 0; a < lR; a++) {
    const s = Ca[a];
    if (e[s] !== void 0) {
      const l = sR[s] || s;
      o += `${l}(${e[s]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const Kx = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Xx = Kx("--"),
  cd = Kx("var(--"),
  cR =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  fR = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  sr = (e, t, n) => Math.min(Math.max(n, e), t),
  Kr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Io = { ...Kr, transform: (e) => sr(0, 1, e) },
  hs = { ...Kr, default: 1 },
  Mo = (e) => Math.round(e * 1e5) / 1e5,
  Pu = /(-)?([\d]*\.?[\d])+/g,
  Qx =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  dR =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Pa(e) {
  return typeof e == "string";
}
const Ta = (e) => ({
    test: (t) => Pa(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Fn = Ta("deg"),
  an = Ta("%"),
  V = Ta("px"),
  pR = Ta("vh"),
  hR = Ta("vw"),
  Qv = {
    ...an,
    parse: (e) => an.parse(e) / 100,
    transform: (e) => an.transform(e * 100),
  },
  qv = { ...Kr, transform: Math.round },
  qx = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    size: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    rotate: Fn,
    rotateX: Fn,
    rotateY: Fn,
    rotateZ: Fn,
    scale: hs,
    scaleX: hs,
    scaleY: hs,
    scaleZ: hs,
    skew: Fn,
    skewX: Fn,
    skewY: Fn,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Io,
    originX: Qv,
    originY: Qv,
    originZ: V,
    zIndex: qv,
    fillOpacity: Io,
    strokeOpacity: Io,
    numOctaves: qv,
  };
function rh(e, t, n, r) {
  const { style: i, vars: o, transform: a, transformOrigin: s } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (Xx(f)) {
      o[f] = d;
      continue;
    }
    const p = qx[f],
      m = fR(d, p);
    if (Yr.has(f)) {
      if (((l = !0), (a[f] = m), !c)) continue;
      d !== (p.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (s[f] = m)) : (i[f] = m);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = uR(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: p = 0 } = s;
    i.transformOrigin = `${f} ${d} ${p}`;
  }
}
const ih = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Zx(e, t, n) {
  for (const r in t) !ft(t[r]) && !Yx(r, n) && (e[r] = t[r]);
}
function mR({ transformTemplate: e }, t, n) {
  return S.useMemo(() => {
    const r = ih();
    return (
      rh(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function vR(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    Zx(i, r, e),
    Object.assign(i, mR(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function gR(e, t, n) {
  const r = {},
    i = vR(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const yR = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function Pl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    yR.has(e)
  );
}
let Jx = (e) => !Pl(e);
function xR(e) {
  e && (Jx = (t) => (t.startsWith("on") ? !Pl(t) : e(t)));
}
try {
  xR(require("@emotion/is-prop-valid").default);
} catch {}
function SR(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Jx(i) ||
        (n === !0 && Pl(i)) ||
        (!t && !Pl(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Zv(e, t, n) {
  return typeof e == "string" ? e : V.transform(t + n * e);
}
function wR(e, t, n) {
  const r = Zv(t, e.x, e.width),
    i = Zv(n, e.y, e.height);
  return `${r} ${i}`;
}
const bR = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  kR = { offset: "strokeDashoffset", array: "strokeDasharray" };
function CR(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? bR : kR;
  e[o.offset] = V.transform(-r);
  const a = V.transform(t),
    s = V.transform(n);
  e[o.array] = `${a} ${s}`;
}
function oh(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((rh(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: p, style: m, dimensions: v } = e;
  p.transform && (v && (m.transform = p.transform), delete p.transform),
    v &&
      (i !== void 0 || o !== void 0 || m.transform) &&
      (m.transformOrigin = wR(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (p.x = t),
    n !== void 0 && (p.y = n),
    r !== void 0 && (p.scale = r),
    a !== void 0 && CR(p, a, s, l, !1);
}
const eS = () => ({ ...ih(), attrs: {} }),
  ah = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function PR(e, t, n, r) {
  const i = S.useMemo(() => {
    const o = eS();
    return (
      oh(o, t, { enableHardwareAcceleration: !1 }, ah(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Zx(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function TR(e = !1) {
  return (n, r, i, { latestValues: o }, a) => {
    const l = (nh(n) ? PR : gR)(r, o, a, n),
      c = { ...SR(r, typeof n == "string", e), ...l, ref: i },
      { children: f } = r,
      d = S.useMemo(() => (ft(f) ? f.get() : f), [f]);
    return S.createElement(n, { ...c, children: d });
  };
}
function tS(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const nS = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function rS(e, t, n, r) {
  tS(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(nS.has(i) ? i : Zp(i), t.attrs[i]);
}
function sh(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (ft(n[i]) || (t.style && ft(t.style[i])) || Yx(i, e)) && (r[i] = n[i]);
  return r;
}
function iS(e, t) {
  const n = sh(e, t);
  for (const r in e)
    if (ft(e[r]) || ft(t[r])) {
      const i =
        Ca.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function lh(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function oS(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Tl = (e) => Array.isArray(e),
  ER = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  _R = (e) => (Tl(e) ? e[e.length - 1] || 0 : e);
function Bs(e) {
  const t = ft(e) ? e.get() : e;
  return ER(t) ? t.toValue() : t;
}
function AR(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const a = { latestValues: RR(r, i, o, e), renderState: t() };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const aS = (e) => (t, n) => {
  const r = S.useContext(Su),
    i = S.useContext(wu),
    o = () => AR(e, t, r, i);
  return n ? o() : oS(o);
};
function RR(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Bs(o[d]);
  let { initial: a, animate: s } = e;
  const l = Cu(e),
    u = Hx(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const f = c ? s : a;
  return (
    f &&
      typeof f != "boolean" &&
      !ku(f) &&
      (Array.isArray(f) ? f : [f]).forEach((p) => {
        const m = lh(e, p);
        if (!m) return;
        const { transitionEnd: v, transition: w, ...y } = m;
        for (const h in y) {
          let g = y[h];
          if (Array.isArray(g)) {
            const b = c ? g.length - 1 : 0;
            g = g[b];
          }
          g !== null && (i[h] = g);
        }
        for (const h in v) i[h] = v[h];
      }),
    i
  );
}
const Pe = (e) => e;
class Jv {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function OR(e) {
  let t = new Jv(),
    n = new Jv(),
    r = 0,
    i = !1,
    o = !1;
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return u && a.add(l), d.add(l) && f && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), a.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(l), a.has(c) && (s.schedule(c), e());
          }
        (i = !1), o && ((o = !1), s.process(l));
      },
    };
  return s;
}
const ms = ["prepare", "read", "update", "preRender", "render", "postRender"],
  IR = 40;
function MR(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = ms.reduce((f, d) => ((f[d] = OR(() => (n = !0))), f), {}),
    a = (f) => o[f].process(i),
    s = () => {
      const f = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, IR), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        ms.forEach(a),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(s));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(s);
    };
  return {
    schedule: ms.reduce((f, d) => {
      const p = o[d];
      return (f[d] = (m, v = !1, w = !1) => (n || l(), p.schedule(m, v, w))), f;
    }, {}),
    cancel: (f) => ms.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
const {
    schedule: le,
    cancel: An,
    state: Qe,
    steps: kc,
  } = MR(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Pe, !0),
  NR = {
    useVisualState: aS({
      scrapeMotionValuesFromProps: iS,
      createRenderState: eS,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        le.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          le.render(() => {
            oh(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              ah(t.tagName),
              e.transformTemplate
            ),
              rS(t, n);
          });
      },
    }),
  },
  LR = {
    useVisualState: aS({
      scrapeMotionValuesFromProps: sh,
      createRenderState: ih,
    }),
  };
function FR(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(nh(e) ? NR : LR),
    preloadedFeatures: n,
    useRender: TR(t),
    createVisualElement: r,
    Component: e,
  };
}
function gn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const sS = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Tu(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const DR = (e) => (t) => sS(t) && e(t, Tu(t));
function xn(e, t, n, r) {
  return gn(e, t, DR(n), r);
}
const jR = (e, t) => (n) => t(e(n)),
  er = (...e) => e.reduce(jR);
function lS(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const eg = lS("dragHorizontal"),
  tg = lS("dragVertical");
function uS(e) {
  let t = !1;
  if (e === "y") t = tg();
  else if (e === "x") t = eg();
  else {
    const n = eg(),
      r = tg();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function cS() {
  const e = uS(!0);
  return e ? (e(), !1) : !0;
}
class pr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function ng(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, a) => {
      if (o.type === "touch" || cS()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive("whileHover", t),
        s[r] && le.update(() => s[r](o, a));
    };
  return xn(e.current, n, i, { passive: !e.getProps()[r] });
}
class zR extends pr {
  mount() {
    this.unmount = er(ng(this.node, !0), ng(this.node, !1));
  }
  unmount() {}
}
class VR extends pr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = er(
      gn(this.node.current, "focus", () => this.onFocus()),
      gn(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const fS = (e, t) => (t ? (e === t ? !0 : fS(e, t.parentElement)) : !1);
function Cc(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Tu(n));
}
class BR extends pr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Pe),
      (this.removeEndListeners = Pe),
      (this.removeAccessibleListeners = Pe),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = xn(
            window,
            "pointerup",
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              le.update(() => {
                fS(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          a = xn(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = er(o, a)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const a = (s) => {
              s.key !== "Enter" ||
                !this.checkPressEnd() ||
                Cc("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && le.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = gn(this.node.current, "keyup", a)),
              Cc("down", (s, l) => {
                this.startPress(s, l);
              });
          },
          n = gn(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Cc("cancel", (o, a) => this.cancelPress(o, a));
          },
          i = gn(this.node.current, "blur", r);
        this.removeAccessibleListeners = er(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && le.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !cS()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && le.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = xn(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = gn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = er(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const fd = new WeakMap(),
  Pc = new WeakMap(),
  $R = (e) => {
    const t = fd.get(e.target);
    t && t(e);
  },
  WR = (e) => {
    e.forEach($R);
  };
function UR({ root: e, ...t }) {
  const n = e || document;
  Pc.has(n) || Pc.set(n, {});
  const r = Pc.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(WR, { root: e, ...t })), r[i];
}
function HR(e, t, n) {
  const r = UR(t);
  return (
    fd.set(e, n),
    r.observe(e),
    () => {
      fd.delete(e), r.unobserve(e);
    }
  );
}
const GR = { some: 0, all: 1 };
class YR extends pr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : GR[i],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return HR(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(KR(t, n)) && this.startObserver();
  }
  unmount() {}
}
function KR({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const XR = {
  inView: { Feature: YR },
  tap: { Feature: BR },
  focus: { Feature: VR },
  hover: { Feature: zR },
};
function dS(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function QR(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function qR(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Eu(e, t, n) {
  const r = e.getProps();
  return lh(r, t, n !== void 0 ? n : r.custom, QR(e), qR(e));
}
let ZR = Pe,
  uh = Pe;
const tr = (e) => e * 1e3,
  Sn = (e) => e / 1e3,
  JR = { current: !1 },
  pS = (e) => Array.isArray(e) && typeof e[0] == "number";
function hS(e) {
  return !!(
    !e ||
    (typeof e == "string" && mS[e]) ||
    pS(e) ||
    (Array.isArray(e) && e.every(hS))
  );
}
const go = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  mS = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: go([0, 0.65, 0.55, 1]),
    circOut: go([0.55, 0, 1, 0.45]),
    backIn: go([0.31, 0.01, 0.66, -0.59]),
    backOut: go([0.33, 1.53, 0.69, 0.99]),
  };
function vS(e) {
  if (e) return pS(e) ? go(e) : Array.isArray(e) ? e.map(vS) : mS[e];
}
function eO(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: a = "loop",
    ease: s,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = vS(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
function tO(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const gS = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  nO = 1e-7,
  rO = 12;
function iO(e, t, n, r, i) {
  let o,
    a,
    s = 0;
  do (a = t + (n - t) / 2), (o = gS(a, r, i) - e), o > 0 ? (n = a) : (t = a);
  while (Math.abs(o) > nO && ++s < rO);
  return a;
}
function Ea(e, t, n, r) {
  if (e === t && n === r) return Pe;
  const i = (o) => iO(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : gS(i(o), t, r));
}
const oO = Ea(0.42, 0, 1, 1),
  aO = Ea(0, 0, 0.58, 1),
  yS = Ea(0.42, 0, 0.58, 1),
  sO = (e) => Array.isArray(e) && typeof e[0] != "number",
  xS = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  SS = (e) => (t) => 1 - e(1 - t),
  ch = (e) => 1 - Math.sin(Math.acos(e)),
  wS = SS(ch),
  lO = xS(ch),
  bS = Ea(0.33, 1.53, 0.69, 0.99),
  fh = SS(bS),
  uO = xS(fh),
  cO = (e) =>
    (e *= 2) < 1 ? 0.5 * fh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  fO = {
    linear: Pe,
    easeIn: oO,
    easeInOut: yS,
    easeOut: aO,
    circIn: ch,
    circInOut: lO,
    circOut: wS,
    backIn: fh,
    backInOut: uO,
    backOut: bS,
    anticipate: cO,
  },
  rg = (e) => {
    if (Array.isArray(e)) {
      uh(e.length === 4);
      const [t, n, r, i] = e;
      return Ea(t, n, r, i);
    } else if (typeof e == "string") return fO[e];
    return e;
  },
  dh = (e, t) => (n) =>
    !!(
      (Pa(n) && dR.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  kS = (e, t, n) => (r) => {
    if (!Pa(r)) return r;
    const [i, o, a, s] = r.match(Pu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  dO = (e) => sr(0, 255, e),
  Tc = { ...Kr, transform: (e) => Math.round(dO(e)) },
  Rr = {
    test: dh("rgb", "red"),
    parse: kS("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Tc.transform(e) +
      ", " +
      Tc.transform(t) +
      ", " +
      Tc.transform(n) +
      ", " +
      Mo(Io.transform(r)) +
      ")",
  };
function pO(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const dd = { test: dh("#"), parse: pO, transform: Rr.transform },
  gi = {
    test: dh("hsl", "hue"),
    parse: kS("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      an.transform(Mo(t)) +
      ", " +
      an.transform(Mo(n)) +
      ", " +
      Mo(Io.transform(r)) +
      ")",
  },
  Je = {
    test: (e) => Rr.test(e) || dd.test(e) || gi.test(e),
    parse: (e) =>
      Rr.test(e) ? Rr.parse(e) : gi.test(e) ? gi.parse(e) : dd.parse(e),
    transform: (e) =>
      Pa(e) ? e : e.hasOwnProperty("red") ? Rr.transform(e) : gi.transform(e),
  },
  Se = (e, t, n) => -n * e + n * t + e;
function Ec(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function hO({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    a = 0;
  if (!t) i = o = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (i = Ec(l, s, e + 1 / 3)), (o = Ec(l, s, e)), (a = Ec(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
const _c = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  mO = [dd, Rr, gi],
  vO = (e) => mO.find((t) => t.test(e));
function ig(e) {
  const t = vO(e);
  let n = t.parse(e);
  return t === gi && (n = hO(n)), n;
}
const CS = (e, t) => {
  const n = ig(e),
    r = ig(t),
    i = { ...n };
  return (o) => (
    (i.red = _c(n.red, r.red, o)),
    (i.green = _c(n.green, r.green, o)),
    (i.blue = _c(n.blue, r.blue, o)),
    (i.alpha = Se(n.alpha, r.alpha, o)),
    Rr.transform(i)
  );
};
function gO(e) {
  var t, n;
  return (
    isNaN(e) &&
    Pa(e) &&
    (((t = e.match(Pu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Qx)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const PS = { regex: cR, countKey: "Vars", token: "${v}", parse: Pe },
  TS = { regex: Qx, countKey: "Colors", token: "${c}", parse: Je.parse },
  ES = { regex: Pu, countKey: "Numbers", token: "${n}", parse: Kr.parse };
function Ac(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function El(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && Ac(n, PS), Ac(n, TS), Ac(n, ES), n;
}
function _S(e) {
  return El(e).values;
}
function AS(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = El(e),
    o = t.length;
  return (a) => {
    let s = i;
    for (let l = 0; l < o; l++)
      l < r
        ? (s = s.replace(PS.token, a[l]))
        : l < r + n
        ? (s = s.replace(TS.token, Je.transform(a[l])))
        : (s = s.replace(ES.token, Mo(a[l])));
    return s;
  };
}
const yO = (e) => (typeof e == "number" ? 0 : e);
function xO(e) {
  const t = _S(e);
  return AS(e)(t.map(yO));
}
const lr = {
    test: gO,
    parse: _S,
    createTransformer: AS,
    getAnimatableNone: xO,
  },
  RS = (e, t) => (n) => `${n > 0 ? t : e}`;
function OS(e, t) {
  return typeof e == "number"
    ? (n) => Se(e, t, n)
    : Je.test(e)
    ? CS(e, t)
    : e.startsWith("var(")
    ? RS(e, t)
    : MS(e, t);
}
const IS = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, a) => OS(o, t[a]));
    return (o) => {
      for (let a = 0; a < r; a++) n[a] = i[a](o);
      return n;
    };
  },
  SO = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = OS(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  MS = (e, t) => {
    const n = lr.createTransformer(t),
      r = El(e),
      i = El(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? er(IS(r.values, i.values), n)
      : RS(e, t);
  },
  fa = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  og = (e, t) => (n) => Se(e, t, n);
function wO(e) {
  return typeof e == "number"
    ? og
    : typeof e == "string"
    ? Je.test(e)
      ? CS
      : MS
    : Array.isArray(e)
    ? IS
    : typeof e == "object"
    ? SO
    : og;
}
function bO(e, t, n) {
  const r = [],
    i = n || wO(e[0]),
    o = e.length - 1;
  for (let a = 0; a < o; a++) {
    let s = i(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Pe : t;
      s = er(l, s);
    }
    r.push(s);
  }
  return r;
}
function NS(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((uh(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = bO(t, r, i),
    s = a.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = fa(e[c], e[c + 1], u);
      return a[c](f);
    };
  return n ? (u) => l(sr(e[0], e[o - 1], u)) : l;
}
function kO(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = fa(0, t, r);
    e.push(Se(n, 1, i));
  }
}
function CO(e) {
  const t = [0];
  return kO(t, e.length - 1), t;
}
function PO(e, t) {
  return e.map((n) => n * t);
}
function TO(e, t) {
  return e.map(() => t || yS).splice(0, e.length - 1);
}
function _l({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = sO(r) ? r.map(rg) : rg(r),
    o = { done: !1, value: t[0] },
    a = PO(n && n.length === t.length ? n : CO(t), e),
    s = NS(a, t, { ease: Array.isArray(i) ? i : TO(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = s(l)), (o.done = l >= e), o),
  };
}
function LS(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const EO = 5;
function FS(e, t, n) {
  const r = Math.max(t - EO, 0);
  return LS(n - e(r), t - r);
}
const Rc = 0.001,
  _O = 0.01,
  ag = 10,
  AO = 0.05,
  RO = 1;
function OO({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  ZR(e <= tr(ag));
  let a = 1 - t;
  (a = sr(AO, RO, a)),
    (e = sr(_O, ag, Sn(e))),
    a < 1
      ? ((i = (u) => {
          const c = u * a,
            f = c * e,
            d = c - n,
            p = pd(u, a),
            m = Math.exp(-f);
          return Rc - (d / p) * m;
        }),
        (o = (u) => {
          const f = u * a * e,
            d = f * n + n,
            p = Math.pow(a, 2) * Math.pow(u, 2) * e,
            m = Math.exp(-f),
            v = pd(Math.pow(u, 2), a);
          return ((-i(u) + Rc > 0 ? -1 : 1) * ((d - p) * m)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Rc + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const s = 5 / e,
    l = MO(i, o, s);
  if (((e = tr(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e };
  }
}
const IO = 12;
function MO(e, t, n) {
  let r = n;
  for (let i = 1; i < IO; i++) r = r - e(r) / t(r);
  return r;
}
function pd(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const NO = ["duration", "bounce"],
  LO = ["stiffness", "damping", "mass"];
function sg(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function FO(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!sg(e, LO) && sg(e, NO)) {
    const n = OO(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function DS({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: s,
      damping: l,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = FO(r),
    p = c ? -Sn(c) : 0,
    m = l / (2 * Math.sqrt(s * u)),
    v = o - i,
    w = Sn(Math.sqrt(s / u)),
    y = Math.abs(v) < 5;
  n || (n = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5);
  let h;
  if (m < 1) {
    const g = pd(w, m);
    h = (b) => {
      const P = Math.exp(-m * w * b);
      return (
        o - P * (((p + m * w * v) / g) * Math.sin(g * b) + v * Math.cos(g * b))
      );
    };
  } else if (m === 1) h = (g) => o - Math.exp(-w * g) * (v + (p + w * v) * g);
  else {
    const g = w * Math.sqrt(m * m - 1);
    h = (b) => {
      const P = Math.exp(-m * w * b),
        A = Math.min(g * b, 300);
      return (
        o - (P * ((p + m * w * v) * Math.sinh(A) + g * v * Math.cosh(A))) / g
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (g) => {
      const b = h(g);
      if (d) a.done = g >= f;
      else {
        let P = p;
        g !== 0 && (m < 1 ? (P = FS(h, g, b)) : (P = 0));
        const A = Math.abs(P) <= n,
          T = Math.abs(o - b) <= t;
        a.done = A && T;
      }
      return (a.value = a.done ? o : b), a;
    },
  };
}
function lg({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    p = (R) => (s !== void 0 && R < s) || (l !== void 0 && R > l),
    m = (R) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - R) < Math.abs(l - R)
        ? s
        : l;
  let v = n * t;
  const w = f + v,
    y = a === void 0 ? w : a(w);
  y !== w && (v = y - f);
  const h = (R) => -v * Math.exp(-R / r),
    g = (R) => y + h(R),
    b = (R) => {
      const O = h(R),
        D = g(R);
      (d.done = Math.abs(O) <= u), (d.value = d.done ? y : D);
    };
  let P, A;
  const T = (R) => {
    p(d.value) &&
      ((P = R),
      (A = DS({
        keyframes: [d.value, m(d.value)],
        velocity: FS(g, R, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (R) => {
        let O = !1;
        return (
          !A && P === void 0 && ((O = !0), b(R), T(R)),
          P !== void 0 && R > P ? A.next(R - P) : (!O && b(R), d)
        );
      },
    }
  );
}
const DO = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => le.update(t, !0),
      stop: () => An(t),
      now: () => (Qe.isProcessing ? Qe.timestamp : performance.now()),
    };
  },
  ug = 2e4;
function cg(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ug; ) (t += n), (r = e.next(t));
  return t >= ug ? 1 / 0 : t;
}
const jO = { decay: lg, inertia: lg, tween: _l, keyframes: _l, spring: DS };
function Al({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = DO,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: a = 0,
  repeatType: s = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let p = 1,
    m = !1,
    v,
    w;
  const y = () => {
    w = new Promise((z) => {
      v = z;
    });
  };
  y();
  let h;
  const g = jO[i] || _l;
  let b;
  g !== _l &&
    typeof r[0] != "number" &&
    ((b = NS([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const P = g({ ...d, keyframes: r });
  let A;
  s === "mirror" &&
    (A = g({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let T = "idle",
    R = null,
    O = null,
    D = null;
  P.calculatedDuration === null && o && (P.calculatedDuration = cg(P));
  const { calculatedDuration: Q } = P;
  let Le = 1 / 0,
    _e = 1 / 0;
  Q !== null && ((Le = Q + a), (_e = Le * (o + 1) - a));
  let ie = 0;
  const ue = (z) => {
      if (O === null) return;
      p > 0 && (O = Math.min(O, z)),
        p < 0 && (O = Math.min(z - _e / p, O)),
        R !== null ? (ie = R) : (ie = Math.round(z - O) * p);
      const re = ie - t * (p >= 0 ? 1 : -1),
        H = p >= 0 ? re < 0 : re > _e;
      (ie = Math.max(re, 0)), T === "finished" && R === null && (ie = _e);
      let Ge = ie,
        Wt = P;
      if (o) {
        const Ut = ie / Le;
        let Nt = Math.floor(Ut),
          Ht = Ut % 1;
        !Ht && Ut >= 1 && (Ht = 1),
          Ht === 1 && Nt--,
          (Nt = Math.min(Nt, o + 1));
        const Xi = !!(Nt % 2);
        Xi &&
          (s === "reverse"
            ? ((Ht = 1 - Ht), a && (Ht -= a / Le))
            : s === "mirror" && (Wt = A));
        let Ra = sr(0, 1, Ht);
        ie > _e && (Ra = s === "reverse" && Xi ? 1 : 0), (Ge = Ra * Le);
      }
      const Te = H ? { done: !1, value: r[0] } : Wt.next(Ge);
      b && (Te.value = b(Te.value));
      let { done: Fe } = Te;
      !H && Q !== null && (Fe = p >= 0 ? ie >= _e : ie <= 0);
      const dt = R === null && (T === "finished" || (T === "running" && Fe));
      return f && f(Te.value), dt && M(), Te;
    },
    He = () => {
      h && h.stop(), (h = void 0);
    },
    it = () => {
      (T = "idle"), He(), v(), y(), (O = D = null);
    },
    M = () => {
      (T = "finished"), c && c(), He(), v();
    },
    B = () => {
      if (m) return;
      h || (h = n(ue));
      const z = h.now();
      l && l(),
        R !== null ? (O = z - R) : (!O || T === "finished") && (O = z),
        T === "finished" && y(),
        (D = O),
        (R = null),
        (T = "running"),
        h.start();
    };
  e && B();
  const $ = {
    then(z, re) {
      return w.then(z, re);
    },
    get time() {
      return Sn(ie);
    },
    set time(z) {
      (z = tr(z)),
        (ie = z),
        R !== null || !h || p === 0 ? (R = z) : (O = h.now() - z / p);
    },
    get duration() {
      const z = P.calculatedDuration === null ? cg(P) : P.calculatedDuration;
      return Sn(z);
    },
    get speed() {
      return p;
    },
    set speed(z) {
      z === p || !h || ((p = z), ($.time = Sn(ie)));
    },
    get state() {
      return T;
    },
    play: B,
    pause: () => {
      (T = "paused"), (R = ie);
    },
    stop: () => {
      (m = !0), T !== "idle" && ((T = "idle"), u && u(), it());
    },
    cancel: () => {
      D !== null && ue(D), it();
    },
    complete: () => {
      T = "finished";
    },
    sample: (z) => ((O = 0), ue(z)),
  };
  return $;
}
function zO(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const VO = zO(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  BO = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  vs = 10,
  $O = 2e4,
  WO = (e, t) => t.type === "spring" || e === "backgroundColor" || !hS(t.ease);
function UO(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      VO() &&
      BO.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let a = !1,
    s,
    l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: p } = i;
  if (WO(t, i)) {
    const h = Al({ ...i, repeat: 0, delay: 0 });
    let g = { done: !1, value: c[0] };
    const b = [];
    let P = 0;
    for (; !g.done && P < $O; ) (g = h.sample(P)), b.push(g.value), (P += vs);
    (p = void 0), (c = b), (f = P - vs), (d = "linear");
  }
  const m = eO(e.owner.current, t, c, { ...i, duration: f, ease: d, times: p }),
    v = () => m.cancel(),
    w = () => {
      le.update(v), s(), u();
    };
  return (
    (m.onfinish = () => {
      e.set(tO(c, i)), r && r(), w();
    }),
    {
      then(h, g) {
        return l.then(h, g);
      },
      attachTimeline(h) {
        return (m.timeline = h), (m.onfinish = null), Pe;
      },
      get time() {
        return Sn(m.currentTime || 0);
      },
      set time(h) {
        m.currentTime = tr(h);
      },
      get speed() {
        return m.playbackRate;
      },
      set speed(h) {
        m.playbackRate = h;
      },
      get duration() {
        return Sn(f);
      },
      play: () => {
        a || (m.play(), An(v));
      },
      pause: () => m.pause(),
      stop: () => {
        if (((a = !0), m.playState === "idle")) return;
        const { currentTime: h } = m;
        if (h) {
          const g = Al({ ...i, autoplay: !1 });
          e.setWithVelocity(g.sample(h - vs).value, g.sample(h).value, vs);
        }
        w();
      },
      complete: () => m.finish(),
      cancel: w,
    }
  );
}
function HO({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Pe,
      pause: Pe,
      stop: Pe,
      then: (o) => (o(), Promise.resolve()),
      cancel: Pe,
      complete: Pe,
    }
  );
  return t
    ? Al({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const GO = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  YO = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  KO = { type: "keyframes", duration: 0.8 },
  XO = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  QO = (e, { keyframes: t }) =>
    t.length > 2
      ? KO
      : Yr.has(e)
      ? e.startsWith("scale")
        ? YO(t[1])
        : GO
      : XO,
  hd = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (lr.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  qO = new Set(["brightness", "contrast", "saturate", "opacity"]);
function ZO(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Pu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = qO.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const JO = /([a-z-]*)\(.*?\)/g,
  md = {
    ...lr,
    getAnimatableNone: (e) => {
      const t = e.match(JO);
      return t ? t.map(ZO).join(" ") : e;
    },
  },
  eI = {
    ...qx,
    color: Je,
    backgroundColor: Je,
    outlineColor: Je,
    fill: Je,
    stroke: Je,
    borderColor: Je,
    borderTopColor: Je,
    borderRightColor: Je,
    borderBottomColor: Je,
    borderLeftColor: Je,
    filter: md,
    WebkitFilter: md,
  },
  ph = (e) => eI[e];
function jS(e, t) {
  let n = ph(e);
  return (
    n !== md && (n = lr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const zS = (e) => /^0[^.\s]+$/.test(e);
function tI(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || zS(e);
}
function nI(e, t, n, r) {
  const i = hd(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? a : o[u - 1]),
      tI(o[u]) && l.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (s = o[u]);
  if (i && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      o[c] = jS(t, s);
    }
  return o;
}
function rI({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function hh(e, t) {
  return e[t] || e.default || e;
}
const mh =
  (e, t, n, r = {}) =>
  (i) => {
    const o = hh(r, e) || {},
      a = o.delay || r.delay || 0;
    let { elapsed: s = 0 } = r;
    s = s - tr(a);
    const l = nI(t, e, n, o),
      u = l[0],
      c = l[l.length - 1],
      f = hd(e, u),
      d = hd(e, c);
    let p = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -s,
      onUpdate: (m) => {
        t.set(m), o.onUpdate && o.onUpdate(m);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (rI(o) || (p = { ...p, ...QO(e, p) }),
      p.duration && (p.duration = tr(p.duration)),
      p.repeatDelay && (p.repeatDelay = tr(p.repeatDelay)),
      !f || !d || JR.current || o.type === !1)
    )
      return HO(p);
    if (
      !r.isHandoff &&
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const m = UO(t, e, p);
      if (m) return m;
    }
    return Al(p);
  };
function Rl(e) {
  return !!(ft(e) && e.add);
}
const VS = (e) => /^\-?\d*\.?\d+$/.test(e);
function vh(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function gh(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class yh {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return vh(this.subscriptions, t), () => gh(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const a = this.subscriptions[o];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const iI = (e) => !isNaN(parseFloat(e));
class oI {
  constructor(t, n = {}) {
    (this.version = "10.16.16"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: a } = Qe;
        this.lastUpdated !== a &&
          ((this.timeDelta = o),
          (this.lastUpdated = a),
          le.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => le.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = iI(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new yh());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            le.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? LS(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function $i(e, t) {
  return new oI(e, t);
}
const BS = (e) => (t) => t.test(e),
  aI = { test: (e) => e === "auto", parse: (e) => e },
  $S = [Kr, V, an, Fn, hR, pR, aI],
  uo = (e) => $S.find(BS(e)),
  sI = [...$S, Je, lr],
  lI = (e) => sI.find(BS(e));
function uI(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, $i(n));
}
function cI(e, t) {
  const n = Eu(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const a in o) {
    const s = _R(o[a]);
    uI(e, a, s);
  }
}
function fI(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((s) => !e.hasValue(s)),
    a = o.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = o[s],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && i !== void 0
              ? i
              : t[l]),
        c != null &&
          (typeof c == "string" && (VS(c) || zS(c))
            ? (c = parseFloat(c))
            : !lI(c) && lr.test(u) && (c = jS(l, u)),
          e.addValue(l, $i(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function dI(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function pI(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = dI(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const a = n.getValue(i);
      a && (r[i] = a.get());
    }
  }
  return r;
}
function hI({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function mI(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function WS(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: a,
    ...s
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in s) {
    const d = e.getValue(f),
      p = s[f];
    if (!d || p === void 0 || (c && hI(c, f))) continue;
    const m = { delay: n, elapsed: 0, ...hh(o || {}, f) };
    if (window.HandoffAppearAnimations) {
      const y = e.getProps()[Ux];
      if (y) {
        const h = window.HandoffAppearAnimations(y, f, d, le);
        h !== null && ((m.elapsed = h), (m.isHandoff = !0));
      }
    }
    let v = !m.isHandoff && !mI(d, p);
    if (
      (m.type === "spring" && (d.getVelocity() || m.velocity) && (v = !1),
      d.animation && (v = !1),
      v)
    )
      continue;
    d.start(mh(f, d, p, e.shouldReduceMotion && Yr.has(f) ? { type: !1 } : m));
    const w = d.animation;
    Rl(l) && (l.add(f), w.then(() => l.remove(f))), u.push(w);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && cI(e, a);
      }),
    u
  );
}
function vd(e, t, n = {}) {
  const r = Eu(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(WS(e, r, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return vI(e, t, u + l, c, f, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [o, a] : [a, o];
    return l().then(() => u());
  } else return Promise.all([o(), a(n.delay)]);
}
function vI(e, t, n = 0, r = 0, i = 1, o) {
  const a = [],
    s = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(gI)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          a.push(
            vd(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(a)
  );
}
function gI(e, t) {
  return e.sortNodePosition(t);
}
function yI(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => vd(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = vd(e, t, n);
  else {
    const i = typeof t == "function" ? Eu(e, t, n.custom) : t;
    r = Promise.all(WS(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const xI = [...Jp].reverse(),
  SI = Jp.length;
function wI(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => yI(e, n, r)));
}
function bI(e) {
  let t = wI(e);
  const n = CI();
  let r = !0;
  const i = (l, u) => {
    const c = Eu(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...p } = c;
      l = { ...l, ...p, ...d };
    }
    return l;
  };
  function o(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      p = new Set();
    let m = {},
      v = 1 / 0;
    for (let y = 0; y < SI; y++) {
      const h = xI[y],
        g = n[h],
        b = c[h] !== void 0 ? c[h] : f[h],
        P = ua(b),
        A = h === u ? g.isActive : null;
      A === !1 && (v = y);
      let T = b === f[h] && b !== c[h] && P;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (g.protectedKeys = { ...m }),
        (!g.isActive && A === null) ||
          (!b && !g.prevProp) ||
          ku(b) ||
          typeof b == "boolean")
      )
        continue;
      const R = kI(g.prevProp, b);
      let O = R || (h === u && g.isActive && !T && P) || (y > v && P);
      const D = Array.isArray(b) ? b : [b];
      let Q = D.reduce(i, {});
      A === !1 && (Q = {});
      const { prevResolvedValues: Le = {} } = g,
        _e = { ...Le, ...Q },
        ie = (ue) => {
          (O = !0), p.delete(ue), (g.needsAnimating[ue] = !0);
        };
      for (const ue in _e) {
        const He = Q[ue],
          it = Le[ue];
        m.hasOwnProperty(ue) ||
          (He !== it
            ? Tl(He) && Tl(it)
              ? !dS(He, it) || R
                ? ie(ue)
                : (g.protectedKeys[ue] = !0)
              : He !== void 0
              ? ie(ue)
              : p.add(ue)
            : He !== void 0 && p.has(ue)
            ? ie(ue)
            : (g.protectedKeys[ue] = !0));
      }
      (g.prevProp = b),
        (g.prevResolvedValues = Q),
        g.isActive && (m = { ...m, ...Q }),
        r && e.blockInitialAnimation && (O = !1),
        O &&
          !T &&
          d.push(
            ...D.map((ue) => ({ animation: ue, options: { type: h, ...l } }))
          );
    }
    if (p.size) {
      const y = {};
      p.forEach((h) => {
        const g = e.getBaseTarget(h);
        g !== void 0 && (y[h] = g);
      }),
        d.push({ animation: y });
    }
    let w = !!d.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (w = !1),
      (r = !1),
      w ? t(d) : Promise.resolve()
    );
  }
  function s(l, u, c) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((p) => {
        var m;
        return (m = p.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = a(c, l);
    for (const p in n) n[p].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function kI(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !dS(t, e) : !1;
}
function gr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function CI() {
  return {
    animate: gr(!0),
    whileInView: gr(),
    whileHover: gr(),
    whileTap: gr(),
    whileDrag: gr(),
    whileFocus: gr(),
    exit: gr(),
  };
}
class PI extends pr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = bI(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), ku(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let TI = 0;
class EI extends pr {
  constructor() {
    super(...arguments), (this.id = TI++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const _I = { animation: { Feature: PI }, exit: { Feature: EI } },
  fg = (e, t) => Math.abs(e - t);
function AI(e, t) {
  const n = fg(e.x, t.x),
    r = fg(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class US {
  constructor(t, n, { transformPagePoint: r, contextWindow: i } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const c = Ic(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          d = AI(c.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !d) return;
        const { point: p } = c,
          { timestamp: m } = Qe;
        this.history.push({ ...p, timestamp: m });
        const { onStart: v, onMove: w } = this.handlers;
        f ||
          (v && v(this.lastMoveEvent, c),
          (this.startEvent = this.lastMoveEvent)),
          w && w(this.lastMoveEvent, c);
      }),
      (this.handlePointerMove = (c, f) => {
        (this.lastMoveEvent = c),
          (this.lastMoveEventInfo = Oc(f, this.transformPagePoint)),
          le.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (c, f) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: d, onSessionEnd: p } = this.handlers,
          m = Ic(
            c.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Oc(f, this.transformPagePoint),
            this.history
          );
        this.startEvent && d && d(c, m), p && p(c, m);
      }),
      !sS(t))
    )
      return;
    (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = Tu(t),
      a = Oc(o, this.transformPagePoint),
      { point: s } = a,
      { timestamp: l } = Qe;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, Ic(a, this.history)),
      (this.removeListeners = er(
        xn(this.contextWindow, "pointermove", this.handlePointerMove),
        xn(this.contextWindow, "pointerup", this.handlePointerUp),
        xn(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), An(this.updatePoint);
  }
}
function Oc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function dg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ic({ point: e }, t) {
  return {
    point: e,
    delta: dg(e, HS(t)),
    offset: dg(e, RI(t)),
    velocity: OI(t, 0.1),
  };
}
function RI(e) {
  return e[0];
}
function HS(e) {
  return e[e.length - 1];
}
function OI(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = HS(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > tr(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = Sn(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function xt(e) {
  return e.max - e.min;
}
function gd(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function pg(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Se(t.min, t.max, e.origin)),
    (e.scale = xt(n) / xt(t)),
    (gd(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Se(n.min, n.max, e.origin) - e.originPoint),
    (gd(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function No(e, t, n, r) {
  pg(e.x, t.x, n.x, r ? r.originX : void 0),
    pg(e.y, t.y, n.y, r ? r.originY : void 0);
}
function hg(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + xt(t));
}
function II(e, t, n) {
  hg(e.x, t.x, n.x), hg(e.y, t.y, n.y);
}
function mg(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + xt(t));
}
function Lo(e, t, n) {
  mg(e.x, t.x, n.x), mg(e.y, t.y, n.y);
}
function MI(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Se(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Se(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function vg(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function NI(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: vg(e.x, n, i), y: vg(e.y, t, r) };
}
function gg(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function LI(e, t) {
  return { x: gg(e.x, t.x), y: gg(e.y, t.y) };
}
function FI(e, t) {
  let n = 0.5;
  const r = xt(e),
    i = xt(t);
  return (
    i > r
      ? (n = fa(t.min, t.max - r, e.min))
      : r > i && (n = fa(e.min, e.max - i, t.min)),
    sr(0, 1, n)
  );
}
function DI(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const yd = 0.35;
function jI(e = yd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = yd),
    { x: yg(e, "left", "right"), y: yg(e, "top", "bottom") }
  );
}
function yg(e, t, n) {
  return { min: xg(e, t), max: xg(e, n) };
}
function xg(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Sg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  yi = () => ({ x: Sg(), y: Sg() }),
  wg = () => ({ min: 0, max: 0 }),
  Ae = () => ({ x: wg(), y: wg() });
function Qt(e) {
  return [e("x"), e("y")];
}
function GS({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function zI({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function VI(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Mc(e) {
  return e === void 0 || e === 1;
}
function xd({ scale: e, scaleX: t, scaleY: n }) {
  return !Mc(e) || !Mc(t) || !Mc(n);
}
function Sr(e) {
  return xd(e) || YS(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function YS(e) {
  return bg(e.x) || bg(e.y);
}
function bg(e) {
  return e && e !== "0%";
}
function Ol(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function kg(e, t, n, r, i) {
  return i !== void 0 && (e = Ol(e, i, r)), Ol(e, n, r) + t;
}
function Sd(e, t = 0, n = 1, r, i) {
  (e.min = kg(e.min, t, n, r, i)), (e.max = kg(e.max, t, n, r, i));
}
function KS(e, { x: t, y: n }) {
  Sd(e.x, t.translate, t.scale, t.originPoint),
    Sd(e.y, n.translate, n.scale, n.originPoint);
}
function BI(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, a;
  for (let s = 0; s < i; s++) {
    (o = n[s]), (a = o.projectionDelta);
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        xi(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), KS(e, a)),
      r && Sr(o.latestValues) && xi(e, o.latestValues));
  }
  (t.x = Cg(t.x)), (t.y = Cg(t.y));
}
function Cg(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function zn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Pg(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    a = Se(e.min, e.max, o);
  Sd(e, t[n], t[r], a, t.scale);
}
const $I = ["x", "scaleX", "originX"],
  WI = ["y", "scaleY", "originY"];
function xi(e, t) {
  Pg(e.x, t, $I), Pg(e.y, t, WI);
}
function XS(e, t) {
  return GS(VI(e.getBoundingClientRect(), t));
}
function UI(e, t, n) {
  const r = XS(e, n),
    { scroll: i } = t;
  return i && (zn(r.x, i.offset.x), zn(r.y, i.offset.y)), r;
}
const QS = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  HI = new WeakMap();
class GI {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ae()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (l) => {
        this.stopAnimation(), n && this.snapToCursor(Tu(l, "page").point);
      },
      o = (l, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = uS(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Qt((m) => {
            let v = this.getAxisMotionValue(m).get() || 0;
            if (an.test(v)) {
              const { projection: w } = this.visualElement;
              if (w && w.layout) {
                const y = w.layout.layoutBox[m];
                y && (v = xt(y) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[m] = v;
          }),
          d && le.update(() => d(l, u), !1, !0);
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      },
      a = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: p,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: m } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = YI(m)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, m),
          this.updateAxis("y", u.point, m),
          this.visualElement.render(),
          p && p(l, u);
      },
      s = (l, u) => this.stop(l, u);
    this.panSession = new US(
      t,
      { onSessionStart: i, onStart: o, onMove: a, onSessionEnd: s },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        contextWindow: QS(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && le.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !gs(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (a = MI(a, this.constraints[t], this.elastic[t])),
      o.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && vi(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = NI(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = jI(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Qt((a) => {
          this.getAxisMotionValue(a) &&
            (this.constraints[a] = DI(i.layoutBox[a], this.constraints[a]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !vi(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = UI(r, i.root, this.visualElement.getTransformPagePoint());
    let a = LI(i.layout.layoutBox, o);
    if (n) {
      const s = n(zI(a));
      (this.hasMutatedConstraints = !!s), s && (a = GS(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = Qt((c) => {
        if (!gs(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        a && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          p = i ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, m);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(mh(t, r, 0, n));
  }
  stopAnimation() {
    Qt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Qt((n) => {
      const { drag: r } = this.getProps();
      if (!gs(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: a, max: s } = i.layout.layoutBox[n];
        o.set(t[n] - Se(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!vi(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Qt((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        i[a] = FI({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Qt((a) => {
        if (!gs(a, t, null)) return;
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        s.set(Se(l, u, i[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    HI.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = xn(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        vi(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const a = gn(window, "resize", () => this.scalePositionWithinConstraints()),
      s = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Qt((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), o(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: a = yd,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function gs(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function YI(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class KI extends pr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Pe),
      (this.removeListeners = Pe),
      (this.controls = new GI(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Pe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Tg = (e) => (t, n) => {
  e && le.update(() => e(t, n));
};
class XI extends pr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Pe);
  }
  onPointerDown(t) {
    this.session = new US(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: QS(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Tg(t),
      onStart: Tg(n),
      onMove: r,
      onEnd: (o, a) => {
        delete this.session, i && le.update(() => i(o, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = xn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function qS() {
  const e = S.useContext(wu);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = S.useId();
  return S.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const $s = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Eg(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const co = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (V.test(e)) e = parseFloat(e);
        else return e;
      const n = Eg(e, t.target.x),
        r = Eg(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  QI = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = lr.parse(e);
      if (i.length > 5) return r;
      const o = lr.createTransformer(e),
        a = typeof i[0] != "number" ? 1 : 0,
        s = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + a] /= s), (i[1 + a] /= l);
      const u = Se(s, l, 0.5);
      return (
        typeof i[2 + a] == "number" && (i[2 + a] /= u),
        typeof i[3 + a] == "number" && (i[3 + a] /= u),
        o(i)
      );
    },
  };
class qI extends wn.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    aR(ZI),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      ($s.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? a.promote()
            : a.relegate() ||
              le.postRender(() => {
                const s = a.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function ZS(e) {
  const [t, n] = qS(),
    r = S.useContext(th);
  return wn.createElement(qI, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(Gx),
    isPresent: t,
    safeToRemove: n,
  });
}
const ZI = {
    borderRadius: {
      ...co,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: co,
    borderTopRightRadius: co,
    borderBottomLeftRadius: co,
    borderBottomRightRadius: co,
    boxShadow: QI,
  },
  JS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  JI = JS.length,
  _g = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Ag = (e) => typeof e == "number" || V.test(e);
function eM(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Se(0, n.opacity !== void 0 ? n.opacity : 1, tM(r))),
      (e.opacityExit = Se(t.opacity !== void 0 ? t.opacity : 1, 0, nM(r))))
    : o &&
      (e.opacity = Se(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let a = 0; a < JI; a++) {
    const s = `border${JS[a]}Radius`;
    let l = Rg(t, s),
      u = Rg(n, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Ag(l) === Ag(u)
        ? ((e[s] = Math.max(Se(_g(l), _g(u), r), 0)),
          (an.test(u) || an.test(l)) && (e[s] += "%"))
        : (e[s] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = Se(t.rotate || 0, n.rotate || 0, r));
}
function Rg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const tM = ew(0, 0.5, wS),
  nM = ew(0.5, 0.95, Pe);
function ew(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(fa(e, t, r)));
}
function Og(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Tt(e, t) {
  Og(e.x, t.x), Og(e.y, t.y);
}
function Ig(e, t, n, r, i) {
  return (
    (e -= t), (e = Ol(e, 1 / n, r)), i !== void 0 && (e = Ol(e, 1 / i, r)), e
  );
}
function rM(e, t = 0, n = 1, r = 0.5, i, o = e, a = e) {
  if (
    (an.test(t) &&
      ((t = parseFloat(t)), (t = Se(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let s = Se(o.min, o.max, r);
  e === o && (s -= t),
    (e.min = Ig(e.min, t, n, s, i)),
    (e.max = Ig(e.max, t, n, s, i));
}
function Mg(e, t, [n, r, i], o, a) {
  rM(e, t[n], t[r], t[i], t.scale, o, a);
}
const iM = ["x", "scaleX", "originX"],
  oM = ["y", "scaleY", "originY"];
function Ng(e, t, n, r) {
  Mg(e.x, t, iM, n ? n.x : void 0, r ? r.x : void 0),
    Mg(e.y, t, oM, n ? n.y : void 0, r ? r.y : void 0);
}
function Lg(e) {
  return e.translate === 0 && e.scale === 1;
}
function tw(e) {
  return Lg(e.x) && Lg(e.y);
}
function aM(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function nw(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Fg(e) {
  return xt(e.x) / xt(e.y);
}
class sM {
  constructor() {
    this.members = [];
  }
  add(t) {
    vh(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (gh(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Dg(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x,
    s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const lM = (e, t) => e.depth - t.depth;
class uM {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    vh(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    gh(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(lM),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function cM(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (An(r), e(o - t));
    };
  return le.read(r, !0), () => An(r);
}
function fM(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function dM(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function pM(e, t, n) {
  const r = ft(e) ? e : $i(e);
  return r.start(mh("", r, t, n)), r.animation;
}
const jg = ["", "X", "Y", "Z"],
  hM = { visibility: "hidden" },
  zg = 1e3;
let mM = 0;
const wr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function rw({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      (this.id = mM++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (wr.totalNodes =
              wr.resolvedTargetDeltas =
              wr.recalculatedProjection =
                0),
            this.nodes.forEach(yM),
            this.nodes.forEach(kM),
            this.nodes.forEach(CM),
            this.nodes.forEach(xM),
            fM(wr);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new uM());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new yh()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = dM(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = cM(d, 250)),
            $s.hasAnimatedSinceResize &&
              (($s.hasAnimatedSinceResize = !1), this.nodes.forEach(Bg));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: p,
              layout: m,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || AM,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: y } =
                  c.getProps(),
                h = !this.targetLayout || !nw(this.targetLayout, m) || p,
                g = !d && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g);
                const b = { ...hh(v, "layout"), onPlay: w, onComplete: y };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((b.delay = 0), (b.type = !1)),
                  this.startAnimation(b);
              } else
                d || Bg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = m;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        An(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(PM),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Vg);
        return;
      }
      this.isUpdating || this.nodes.forEach(wM),
        (this.isUpdating = !1),
        this.nodes.forEach(bM),
        this.nodes.forEach(vM),
        this.nodes.forEach(gM),
        this.clearAllSnapshots();
      const s = performance.now();
      (Qe.delta = sr(0, 1e3 / 60, s - Qe.timestamp)),
        (Qe.timestamp = s),
        (Qe.isProcessing = !0),
        kc.update.process(Qe),
        kc.preRender.process(Qe),
        kc.render.process(Qe),
        (Qe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(SM), this.sharedNodes.forEach(TM);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        le.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      le.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ae()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !tw(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (s || Sr(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        RM(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return Ae();
      const s = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (zn(s.x, l.offset.x), zn(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Ae();
      Tt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Tt(s, a);
            const { scroll: d } = this.root;
            d && (zn(s.x, -d.offset.x), zn(s.y, -d.offset.y));
          }
          zn(s.x, c.offset.x), zn(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Ae();
      Tt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          xi(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Sr(c.latestValues) && xi(l, c.latestValues);
      }
      return Sr(this.latestValues) && xi(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Ae();
      Tt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Sr(u.latestValues)) continue;
        xd(u.latestValues) && u.updateSnapshot();
        const c = Ae(),
          f = u.measurePageBox();
        Tt(c, f),
          Ng(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Sr(this.latestValues) && Ng(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Qe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Qe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ae()),
              (this.relativeTargetOrigin = Ae()),
              Lo(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              Tt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Ae()), (this.targetWithTransforms = Ae())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                II(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Tt(this.target, this.layout.layoutBox),
                KS(this.target, this.targetDelta))
              : Tt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ae()),
                (this.relativeTargetOrigin = Ae()),
                Lo(this.relativeTargetOrigin, this.target, p.target),
                Tt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          wr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          xd(this.parent.latestValues) ||
          YS(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Qe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Tt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        p = this.treeScale.y;
      BI(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (s.target = s.layout.layoutBox);
      const { target: m } = s;
      if (!m) {
        this.projectionTransform &&
          ((this.projectionDelta = yi()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = yi()),
        (this.projectionDeltaWithTransform = yi()));
      const v = this.projectionTransform;
      No(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.projectionTransform = Dg(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== d ||
          this.treeScale.y !== p) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)),
        wr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = yi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const d = Ae(),
        p = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        v = p !== m,
        w = this.getStack(),
        y = !w || w.members.length <= 1,
        h = !!(v && !y && this.options.crossfade === !0 && !this.path.some(_M));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (b) => {
        const P = b / 1e3;
        $g(f.x, a.x, P),
          $g(f.y, a.y, P),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Lo(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            EM(this.relativeTarget, this.relativeTargetOrigin, d, P),
            g && aM(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Ae()),
            Tt(g, this.relativeTarget)),
          v &&
            ((this.animationValues = c), eM(c, u, this.latestValues, P, h, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (An(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = le.update(() => {
          ($s.hasAnimatedSinceResize = !0),
            (this.currentAnimation = pM(0, zg, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(zg),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          iw(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Ae();
          const f = xt(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + f);
          const d = xt(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + d);
        }
        Tt(s, l),
          xi(s, c),
          No(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new sM()),
        this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const { latestValues: l } = a;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s))
        return;
      const u = {};
      for (let c = 0; c < jg.length; c++) {
        const f = "rotate" + jg[c];
        l[f] && ((u[f] = l[f]), a.setStaticValue(f, 0));
      }
      a.render();
      for (const c in u) a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return hM;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Bs(a == null ? void 0 : a.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Bs(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !Sr(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Dg(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: p, y: m } = this.projectionDelta;
      (u.transformOrigin = `${p.origin * 100}% ${m.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (s = d.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in Cl) {
        if (d[v] === void 0) continue;
        const { correct: w, applyTo: y } = Cl[v],
          h = u.transform === "none" ? d[v] : w(d[v], f);
        if (y) {
          const g = y.length;
          for (let b = 0; b < g; b++) u[y[b]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? Bs(a == null ? void 0 : a.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(Vg),
        this.root.sharedNodes.clear();
    }
  };
}
function vM(e) {
  e.updateLayout();
}
function gM(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      a = n.source !== e.layout.source;
    o === "size"
      ? Qt((f) => {
          const d = a ? n.measuredBox[f] : n.layoutBox[f],
            p = xt(d);
          (d.min = r[f].min), (d.max = d.min + p);
        })
      : iw(o, n.layoutBox, r) &&
        Qt((f) => {
          const d = a ? n.measuredBox[f] : n.layoutBox[f],
            p = xt(r[f]);
          (d.max = d.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + p));
        });
    const s = yi();
    No(s, r, n.layoutBox);
    const l = yi();
    a ? No(l, e.applyTransform(i, !0), n.measuredBox) : No(l, r, n.layoutBox);
    const u = !tw(s);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: p } = f;
        if (d && p) {
          const m = Ae();
          Lo(m, n.layoutBox, d.layoutBox);
          const v = Ae();
          Lo(v, r, p.layoutBox),
            nw(m, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = m),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function yM(e) {
  wr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function xM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function SM(e) {
  e.clearSnapshot();
}
function Vg(e) {
  e.clearMeasurements();
}
function wM(e) {
  e.isLayoutDirty = !1;
}
function bM(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Bg(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function kM(e) {
  e.resolveTargetDelta();
}
function CM(e) {
  e.calcProjection();
}
function PM(e) {
  e.resetRotation();
}
function TM(e) {
  e.removeLeadSnapshot();
}
function $g(e, t, n) {
  (e.translate = Se(t.translate, 0, n)),
    (e.scale = Se(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Wg(e, t, n, r) {
  (e.min = Se(t.min, n.min, r)), (e.max = Se(t.max, n.max, r));
}
function EM(e, t, n, r) {
  Wg(e.x, t.x, n.x, r), Wg(e.y, t.y, n.y, r);
}
function _M(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const AM = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ug = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  Hg = Ug("applewebkit/") && !Ug("chrome/") ? Math.round : Pe;
function Gg(e) {
  (e.min = Hg(e.min)), (e.max = Hg(e.max));
}
function RM(e) {
  Gg(e.x), Gg(e.y);
}
function iw(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !gd(Fg(t), Fg(n), 0.2))
  );
}
const OM = rw({
    attachResizeListener: (e, t) => gn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Nc = { current: void 0 },
  ow = rw({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Nc.current) {
        const e = new OM({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Nc.current = e);
      }
      return Nc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  IM = {
    pan: { Feature: XI },
    drag: { Feature: KI, ProjectionNode: ow, MeasureLayout: ZS },
  },
  MM = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function NM(e) {
  const t = MM.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function wd(e, t, n = 1) {
  const [r, i] = NM(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const a = o.trim();
    return VS(a) ? parseFloat(a) : a;
  } else return cd(i) ? wd(i, t, n + 1) : i;
}
function LM(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!cd(o)) return;
      const a = wd(o, r);
      a && i.set(a);
    });
  for (const i in t) {
    const o = t[i];
    if (!cd(o)) continue;
    const a = wd(o, r);
    a && ((t[i] = a), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const FM = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  aw = (e) => FM.has(e),
  DM = (e) => Object.keys(e).some(aw),
  Yg = (e) => e === Kr || e === V,
  Kg = (e, t) => parseFloat(e.split(", ")[t]),
  Xg =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Kg(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? Kg(o[1], e) : 0;
      }
    },
  jM = new Set(["x", "y", "z"]),
  zM = Ca.filter((e) => !jM.has(e));
function VM(e) {
  const t = [];
  return (
    zM.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Wi = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Xg(4, 13),
  y: Xg(5, 14),
};
Wi.translateX = Wi.x;
Wi.translateY = Wi.y;
const BM = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: a } = o,
      s = {};
    a === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        s[u] = Wi[u](r, o);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(s[u]), (e[u] = Wi[u](l, o));
      }),
      e
    );
  },
  $M = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(aw);
    let o = [],
      a = !1;
    const s = [];
    if (
      (i.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          f = uo(c);
        const d = t[l];
        let p;
        if (Tl(d)) {
          const m = d.length,
            v = d[0] === null ? 1 : 0;
          (c = d[v]), (f = uo(c));
          for (let w = v; w < m && d[w] !== null; w++)
            p ? uh(uo(d[w]) === p) : (p = uo(d[w]));
        } else p = uo(d);
        if (f !== p)
          if (Yg(f) && Yg(p)) {
            const m = u.get();
            typeof m == "string" && u.set(parseFloat(m)),
              typeof d == "string"
                ? (t[l] = parseFloat(d))
                : Array.isArray(d) && p === V && (t[l] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            p != null &&
            p.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(p.transform(c))
                : (t[l] = f.transform(d))
              : (a || ((o = VM(e)), (a = !0)),
                s.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(d));
      }),
      s.length)
    ) {
      const l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = BM(t, e, s);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        bu && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function WM(e, t, n, r) {
  return DM(t) ? $M(e, t, n, r) : { target: t, transitionEnd: r };
}
const UM = (e, t, n, r) => {
    const i = LM(e, t, r);
    return (t = i.target), (r = i.transitionEnd), WM(e, t, n, r);
  },
  bd = { current: null },
  sw = { current: !1 };
function HM() {
  if (((sw.current = !0), !!bu))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (bd.current = e.matches);
      e.addListener(t), t();
    } else bd.current = !1;
}
function GM(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      a = n[i];
    if (ft(o)) e.addValue(i, o), Rl(r) && r.add(i);
    else if (ft(a)) e.addValue(i, $i(o, { owner: e })), Rl(r) && r.remove(i);
    else if (a !== o)
      if (e.hasValue(i)) {
        const s = e.getValue(i);
        !s.hasAnimated && s.set(o);
      } else {
        const s = e.getStaticValue(i);
        e.addValue(i, $i(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Qg = new WeakMap(),
  lw = Object.keys(ca),
  YM = lw.length,
  qg = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  KM = eh.length;
class XM {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => le.render(this.render, !1, !0));
    const { latestValues: s, renderState: l } = o;
    (this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = n.initial ? { ...s } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.isControllingVariants = Cu(n)),
      (this.isVariantNode = Hx(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      s[f] !== void 0 && ft(d) && (d.set(s[f], !1), Rl(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Qg.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      sw.current || HM(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : bd.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Qg.delete(this.current),
      this.projection && this.projection.unmount(),
      An(this.notifyUpdate),
      An(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Yr.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && le.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let a, s;
    for (let l = 0; l < YM; l++) {
      const u = lw[l],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: p,
        } = ca[u];
      d && (a = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: p,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (f && vi(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: p,
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ae();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < qg.length; r++) {
      const i = qg[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = GM(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < KM; r++) {
      const i = eh[r],
        o = this.props[i];
      (ua(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = $i(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = lh(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !ft(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new yh()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class uw extends XM {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o
  ) {
    let a = pI(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), a && (a = i(a))), o)) {
      fI(this, r, a);
      const s = UM(this, r, a, n);
      (n = s.transitionEnd), (r = s.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function QM(e) {
  return window.getComputedStyle(e);
}
class qM extends uw {
  readValueFromInstance(t, n) {
    if (Yr.has(n)) {
      const r = ph(n);
      return (r && r.default) || 0;
    } else {
      const r = QM(t),
        i = (Xx(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return XS(t, n);
  }
  build(t, n, r, i) {
    rh(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return sh(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ft(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    tS(t, n, r, i);
  }
}
class ZM extends uw {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Yr.has(n)) {
      const r = ph(n);
      return (r && r.default) || 0;
    }
    return (n = nS.has(n) ? n : Zp(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Ae();
  }
  scrapeMotionValuesFromProps(t, n) {
    return iS(t, n);
  }
  build(t, n, r, i) {
    oh(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    rS(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = ah(t.tagName)), super.mount(t);
  }
}
const JM = (e, t) =>
    nh(e)
      ? new ZM(t, { enableHardwareAcceleration: !1 })
      : new qM(t, { enableHardwareAcceleration: !0 }),
  e5 = { layout: { ProjectionNode: ow, MeasureLayout: ZS } },
  t5 = { ..._I, ...XR, ...IM, ...e5 },
  _a = iR((e, t) => FR(e, t, t5, JM));
function cw() {
  const e = S.useRef(!1);
  return (
    qp(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function n5() {
  const e = cw(),
    [t, n] = S.useState(0),
    r = S.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [S.useCallback(() => le.postRender(r), [r]), t];
}
class r5 extends S.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function i5({ children: e, isPresent: t }) {
  const n = S.useId(),
    r = S.useRef(null),
    i = S.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    S.useInsertionEffect(() => {
      const { width: o, height: a, top: s, left: l } = i.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    S.createElement(
      r5,
      { isPresent: t, childRef: r, sizeRef: i },
      S.cloneElement(e, { ref: r })
    )
  );
}
const Lc = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: a,
}) => {
  const s = oS(o5),
    l = S.useId(),
    u = S.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          s.set(c, !0);
          for (const f of s.values()) if (!f) return;
          r && r();
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      o ? void 0 : [n]
    );
  return (
    S.useMemo(() => {
      s.forEach((c, f) => s.set(f, !1));
    }, [n]),
    S.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    a === "popLayout" && (e = S.createElement(i5, { isPresent: n }, e)),
    S.createElement(wu.Provider, { value: u }, e)
  );
};
function o5() {
  return new Map();
}
function a5(e) {
  return S.useEffect(() => () => e(), []);
}
const br = (e) => e.key || "";
function s5(e, t) {
  e.forEach((n) => {
    const r = br(n);
    t.set(r, n);
  });
}
function l5(e) {
  const t = [];
  return (
    S.Children.forEach(e, (n) => {
      S.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const _u = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: a = "sync",
}) => {
  const s = S.useContext(th).forceRender || n5()[0],
    l = cw(),
    u = l5(e);
  let c = u;
  const f = S.useRef(new Map()).current,
    d = S.useRef(c),
    p = S.useRef(new Map()).current,
    m = S.useRef(!0);
  if (
    (qp(() => {
      (m.current = !1), s5(u, p), (d.current = c);
    }),
    a5(() => {
      (m.current = !0), p.clear(), f.clear();
    }),
    m.current)
  )
    return S.createElement(
      S.Fragment,
      null,
      c.map((h) =>
        S.createElement(
          Lc,
          {
            key: br(h),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: a,
          },
          h
        )
      )
    );
  c = [...c];
  const v = d.current.map(br),
    w = u.map(br),
    y = v.length;
  for (let h = 0; h < y; h++) {
    const g = v[h];
    w.indexOf(g) === -1 && !f.has(g) && f.set(g, void 0);
  }
  return (
    a === "wait" && f.size && (c = []),
    f.forEach((h, g) => {
      if (w.indexOf(g) !== -1) return;
      const b = p.get(g);
      if (!b) return;
      const P = v.indexOf(g);
      let A = h;
      if (!A) {
        const T = () => {
          f.delete(g);
          const R = Array.from(p.keys()).filter((O) => !w.includes(O));
          if (
            (R.forEach((O) => p.delete(O)),
            (d.current = u.filter((O) => {
              const D = br(O);
              return D === g || R.includes(D);
            })),
            !f.size)
          ) {
            if (l.current === !1) return;
            s(), r && r();
          }
        };
        (A = S.createElement(
          Lc,
          {
            key: br(b),
            isPresent: !1,
            onExitComplete: T,
            custom: t,
            presenceAffectsLayout: o,
            mode: a,
          },
          b
        )),
          f.set(g, A);
      }
      c.splice(P, 0, A);
    }),
    (c = c.map((h) => {
      const g = h.key;
      return f.has(g)
        ? h
        : S.createElement(
            Lc,
            { key: br(h), isPresent: !0, presenceAffectsLayout: o, mode: a },
            h
          );
    })),
    S.createElement(
      S.Fragment,
      null,
      f.size ? c : c.map((h) => S.cloneElement(h))
    )
  );
};
function u5(e) {
  return _.jsx(Mp, {
    focusable: "false",
    "aria-hidden": !0,
    ...e,
    children: _.jsx("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
    }),
  });
}
var fw = ae(function (t, n) {
  const r = Gr("CloseButton", t),
    { children: i, isDisabled: o, __css: a, ...s } = On(t),
    l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    };
  return _.jsx(te.button, {
    type: "button",
    "aria-label": "Close",
    ref: n,
    disabled: o,
    __css: { ...l, ...r, ...a },
    ...s,
    children: i || _.jsx(u5, { width: "1em", height: "1em" }),
  });
});
fw.displayName = "CloseButton";
var Zg = {
    ease: [0.25, 0.1, 0.25, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
  },
  Nr = {
    enter: { duration: 0.2, ease: Zg.easeOut },
    exit: { duration: 0.1, ease: Zg.easeIn },
  },
  Lr = {
    enter: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.enter,
    }),
    exit: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.exit,
    }),
  },
  c5 = {
    enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
      var r;
      return {
        opacity: 1,
        transition:
          (r = e == null ? void 0 : e.enter) != null
            ? r
            : Lr.enter(Nr.enter, n),
        transitionEnd: t == null ? void 0 : t.enter,
      };
    },
    exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
      var r;
      return {
        opacity: 0,
        transition:
          (r = e == null ? void 0 : e.exit) != null ? r : Lr.exit(Nr.exit, n),
        transitionEnd: t == null ? void 0 : t.exit,
      };
    },
  },
  dw = { initial: "exit", animate: "enter", exit: "exit", variants: c5 },
  f5 = S.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: i,
        className: o,
        transition: a,
        transitionEnd: s,
        delay: l,
        ...u
      } = t,
      c = i || r ? "enter" : "exit",
      f = r ? i && r : !0,
      d = { transition: a, transitionEnd: s, delay: l };
    return _.jsx(_u, {
      custom: d,
      children:
        f &&
        _.jsx(_a.div, {
          ref: n,
          className: ye("chakra-fade", o),
          custom: d,
          ...dw,
          animate: c,
          ...u,
        }),
    });
  });
f5.displayName = "Fade";
var d5 = {
    exit: ({
      reverse: e,
      initialScale: t,
      transition: n,
      transitionEnd: r,
      delay: i,
    }) => {
      var o;
      return {
        opacity: 0,
        ...(e
          ? { scale: t, transitionEnd: r == null ? void 0 : r.exit }
          : { transitionEnd: { scale: t, ...(r == null ? void 0 : r.exit) } }),
        transition:
          (o = n == null ? void 0 : n.exit) != null ? o : Lr.exit(Nr.exit, i),
      };
    },
    enter: ({ transitionEnd: e, transition: t, delay: n }) => {
      var r;
      return {
        opacity: 1,
        scale: 1,
        transition:
          (r = t == null ? void 0 : t.enter) != null
            ? r
            : Lr.enter(Nr.enter, n),
        transitionEnd: e == null ? void 0 : e.enter,
      };
    },
  },
  pw = { initial: "exit", animate: "enter", exit: "exit", variants: d5 },
  p5 = S.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: i,
        reverse: o = !0,
        initialScale: a = 0.95,
        className: s,
        transition: l,
        transitionEnd: u,
        delay: c,
        ...f
      } = t,
      d = r ? i && r : !0,
      p = i || r ? "enter" : "exit",
      m = {
        initialScale: a,
        reverse: o,
        transition: l,
        transitionEnd: u,
        delay: c,
      };
    return _.jsx(_u, {
      custom: m,
      children:
        d &&
        _.jsx(_a.div, {
          ref: n,
          className: ye("chakra-offset-slide", s),
          ...pw,
          animate: p,
          custom: m,
          ...f,
        }),
    });
  });
p5.displayName = "ScaleFade";
var h5 = {
    initial: ({
      offsetX: e,
      offsetY: t,
      transition: n,
      transitionEnd: r,
      delay: i,
    }) => {
      var o;
      return {
        opacity: 0,
        x: e,
        y: t,
        transition:
          (o = n == null ? void 0 : n.exit) != null ? o : Lr.exit(Nr.exit, i),
        transitionEnd: r == null ? void 0 : r.exit,
      };
    },
    enter: ({ transition: e, transitionEnd: t, delay: n }) => {
      var r;
      return {
        opacity: 1,
        x: 0,
        y: 0,
        transition:
          (r = e == null ? void 0 : e.enter) != null
            ? r
            : Lr.enter(Nr.enter, n),
        transitionEnd: t == null ? void 0 : t.enter,
      };
    },
    exit: ({
      offsetY: e,
      offsetX: t,
      transition: n,
      transitionEnd: r,
      reverse: i,
      delay: o,
    }) => {
      var a;
      const s = { x: t, y: e };
      return {
        opacity: 0,
        transition:
          (a = n == null ? void 0 : n.exit) != null ? a : Lr.exit(Nr.exit, o),
        ...(i
          ? { ...s, transitionEnd: r == null ? void 0 : r.exit }
          : { transitionEnd: { ...s, ...(r == null ? void 0 : r.exit) } }),
      };
    },
  },
  yo = { initial: "initial", animate: "enter", exit: "exit", variants: h5 },
  m5 = S.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: i,
        reverse: o = !0,
        className: a,
        offsetX: s = 0,
        offsetY: l = 8,
        transition: u,
        transitionEnd: c,
        delay: f,
        ...d
      } = t,
      p = r ? i && r : !0,
      m = i || r ? "enter" : "exit",
      v = {
        offsetX: s,
        offsetY: l,
        reverse: o,
        transition: u,
        transitionEnd: c,
        delay: f,
      };
    return _.jsx(_u, {
      custom: v,
      children:
        p &&
        _.jsx(_a.div, {
          ref: n,
          className: ye("chakra-offset-slide", a),
          custom: v,
          ...yo,
          animate: m,
          ...d,
        }),
    });
  });
m5.displayName = "SlideFade";
function v5(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var kd = "data-focus-lock",
  hw = "data-focus-lock-disabled",
  g5 = "data-no-focus-lock",
  y5 = "data-autofocus-inside",
  x5 = "data-no-autofocus";
function S5(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function w5(e, t) {
  var n = S.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var i = n.value;
          i !== r && ((n.value = r), n.callback(r, i));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
function mw(e, t) {
  return w5(t || null, function (n) {
    return e.forEach(function (r) {
      return S5(r, n);
    });
  });
}
var Fc = {
    width: "1px",
    height: "0px",
    padding: 0,
    overflow: "hidden",
    position: "fixed",
    top: "1px",
    left: "1px",
  },
  en = function () {
    return (
      (en =
        Object.assign ||
        function (t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        }),
      en.apply(this, arguments)
    );
  };
function vw(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function b5(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function gw(e) {
  return e;
}
function yw(e, t) {
  t === void 0 && (t = gw);
  var n = [],
    r = !1,
    i = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (o) {
        var a = t(o, r);
        return (
          n.push(a),
          function () {
            n = n.filter(function (s) {
              return s !== a;
            });
          }
        );
      },
      assignSyncMedium: function (o) {
        for (r = !0; n.length; ) {
          var a = n;
          (n = []), a.forEach(o);
        }
        n = {
          push: function (s) {
            return o(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (o) {
        r = !0;
        var a = [];
        if (n.length) {
          var s = n;
          (n = []), s.forEach(o), (a = n);
        }
        var l = function () {
            var c = a;
            (a = []), c.forEach(o);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (c) {
              a.push(c), u();
            },
            filter: function (c) {
              return (a = a.filter(c)), n;
            },
          });
      },
    };
  return i;
}
function xh(e, t) {
  return t === void 0 && (t = gw), yw(e, t);
}
function xw(e) {
  e === void 0 && (e = {});
  var t = yw(null);
  return (t.options = en({ async: !0, ssr: !1 }, e)), t;
}
var Sw = function (e) {
  var t = e.sideCar,
    n = vw(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return S.createElement(r, en({}, n));
};
Sw.isSideCarExport = !0;
function k5(e, t) {
  return e.useMedium(t), Sw;
}
var ww = xh({}, function (e) {
    var t = e.target,
      n = e.currentTarget;
    return { target: t, currentTarget: n };
  }),
  bw = xh(),
  C5 = xh(),
  P5 = xw({ async: !0 }),
  T5 = [],
  Sh = S.forwardRef(function (t, n) {
    var r,
      i = S.useState(),
      o = i[0],
      a = i[1],
      s = S.useRef(),
      l = S.useRef(!1),
      u = S.useRef(null),
      c = t.children,
      f = t.disabled,
      d = t.noFocusGuards,
      p = t.persistentFocus,
      m = t.crossFrame,
      v = t.autoFocus;
    t.allowTextSelection;
    var w = t.group,
      y = t.className,
      h = t.whiteList,
      g = t.hasPositiveIndices,
      b = t.shards,
      P = b === void 0 ? T5 : b,
      A = t.as,
      T = A === void 0 ? "div" : A,
      R = t.lockProps,
      O = R === void 0 ? {} : R,
      D = t.sideCar,
      Q = t.returnFocus,
      Le = t.focusOptions,
      _e = t.onActivation,
      ie = t.onDeactivation,
      ue = S.useState({}),
      He = ue[0],
      it = S.useCallback(
        function () {
          (u.current = u.current || (document && document.activeElement)),
            s.current && _e && _e(s.current),
            (l.current = !0);
        },
        [_e]
      ),
      M = S.useCallback(
        function () {
          (l.current = !1), ie && ie(s.current);
        },
        [ie]
      );
    S.useEffect(function () {
      f || (u.current = null);
    }, []);
    var B = S.useCallback(
        function (Fe) {
          var dt = u.current;
          if (dt && dt.focus) {
            var Ut = typeof Q == "function" ? Q(dt) : Q;
            if (Ut) {
              var Nt = typeof Ut == "object" ? Ut : void 0;
              (u.current = null),
                Fe
                  ? Promise.resolve().then(function () {
                      return dt.focus(Nt);
                    })
                  : dt.focus(Nt);
            }
          }
        },
        [Q]
      ),
      $ = S.useCallback(function (Fe) {
        l.current && ww.useMedium(Fe);
      }, []),
      z = bw.useMedium,
      re = S.useCallback(function (Fe) {
        s.current !== Fe && ((s.current = Fe), a(Fe));
      }, []),
      H = Vi(((r = {}), (r[hw] = f && "disabled"), (r[kd] = w), r), O),
      Ge = d !== !0,
      Wt = Ge && d !== "tail",
      Te = mw([n, re]);
    return S.createElement(
      S.Fragment,
      null,
      Ge && [
        S.createElement("div", {
          key: "guard-first",
          "data-focus-guard": !0,
          tabIndex: f ? -1 : 0,
          style: Fc,
        }),
        g
          ? S.createElement("div", {
              key: "guard-nearest",
              "data-focus-guard": !0,
              tabIndex: f ? -1 : 1,
              style: Fc,
            })
          : null,
      ],
      !f &&
        S.createElement(D, {
          id: He,
          sideCar: P5,
          observed: o,
          disabled: f,
          persistentFocus: p,
          crossFrame: m,
          autoFocus: v,
          whiteList: h,
          shards: P,
          onActivation: it,
          onDeactivation: M,
          returnFocus: B,
          focusOptions: Le,
        }),
      S.createElement(
        T,
        Vi({ ref: Te }, H, { className: y, onBlur: z, onFocus: $ }),
        c
      ),
      Wt &&
        S.createElement("div", {
          "data-focus-guard": !0,
          tabIndex: f ? -1 : 0,
          style: Fc,
        })
    );
  });
Sh.propTypes = {};
Sh.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0,
};
const kw = Sh;
function Cd(e, t) {
  return (
    (Cd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Cd(e, t)
  );
}
function E5(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Cd(e, t);
}
function da(e) {
  "@babel/helpers - typeof";
  return (
    (da =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    da(e)
  );
}
function _5(e, t) {
  if (da(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (da(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function A5(e) {
  var t = _5(e, "string");
  return da(t) == "symbol" ? t : String(t);
}
function R5(e, t, n) {
  return (
    (t = A5(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function O5(e, t) {
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function (i) {
    var o = [],
      a;
    function s() {
      (a = e(
        o.map(function (u) {
          return u.props;
        })
      )),
        t(a);
    }
    var l = (function (u) {
      E5(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function () {
        return a;
      };
      var f = c.prototype;
      return (
        (f.componentDidMount = function () {
          o.push(this), s();
        }),
        (f.componentDidUpdate = function () {
          s();
        }),
        (f.componentWillUnmount = function () {
          var p = o.indexOf(this);
          o.splice(p, 1), s();
        }),
        (f.render = function () {
          return wn.createElement(i, this.props);
        }),
        c
      );
    })(S.PureComponent);
    return R5(l, "displayName", "SideEffect(" + n(i) + ")"), l;
  };
}
var sn = function (e) {
    for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
    return t;
  },
  Il = function (e) {
    return Array.isArray(e) ? e : [e];
  },
  Cw = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  I5 = function (e) {
    if (e.nodeType !== Node.ELEMENT_NODE) return !1;
    var t = window.getComputedStyle(e, null);
    return !t || !t.getPropertyValue
      ? !1
      : t.getPropertyValue("display") === "none" ||
          t.getPropertyValue("visibility") === "hidden";
  },
  Pw = function (e) {
    return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
      ? e.parentNode.host
      : e.parentNode;
  },
  Tw = function (e) {
    return e === document || (e && e.nodeType === Node.DOCUMENT_NODE);
  },
  M5 = function (e, t) {
    return !e || Tw(e) || (!I5(e) && t(Pw(e)));
  },
  Ew = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = M5(t, Ew.bind(void 0, e));
    return e.set(t, r), r;
  },
  N5 = function (e, t) {
    return e && !Tw(e) ? (D5(e) ? t(Pw(e)) : !1) : !0;
  },
  _w = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = N5(t, _w.bind(void 0, e));
    return e.set(t, r), r;
  },
  Aw = function (e) {
    return e.dataset;
  },
  L5 = function (e) {
    return e.tagName === "BUTTON";
  },
  Rw = function (e) {
    return e.tagName === "INPUT";
  },
  Ow = function (e) {
    return Rw(e) && e.type === "radio";
  },
  F5 = function (e) {
    return !((Rw(e) || L5(e)) && (e.type === "hidden" || e.disabled));
  },
  D5 = function (e) {
    var t = e.getAttribute(x5);
    return ![!0, "true", ""].includes(t);
  },
  wh = function (e) {
    var t;
    return !!(e && !((t = Aw(e)) === null || t === void 0) && t.focusGuard);
  },
  Ml = function (e) {
    return !wh(e);
  },
  j5 = function (e) {
    return !!e;
  },
  z5 = function (e, t) {
    var n = e.tabIndex - t.tabIndex,
      r = e.index - t.index;
    if (n) {
      if (!e.tabIndex) return 1;
      if (!t.tabIndex) return -1;
    }
    return n || r;
  },
  Iw = function (e, t, n) {
    return sn(e)
      .map(function (r, i) {
        return {
          node: r,
          index: i,
          tabIndex:
            n && r.tabIndex === -1
              ? (r.dataset || {}).focusGuard
                ? 0
                : -1
              : r.tabIndex,
        };
      })
      .filter(function (r) {
        return !t || r.tabIndex >= 0;
      })
      .sort(z5);
  },
  V5 = [
    "button:enabled",
    "select:enabled",
    "textarea:enabled",
    "input:enabled",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[tabindex]",
    "[contenteditable]",
    "[autofocus]",
  ],
  bh = V5.join(","),
  B5 = "".concat(bh, ", [data-focus-guard]"),
  Mw = function (e, t) {
    return sn((e.shadowRoot || e).children).reduce(function (n, r) {
      return n.concat(r.matches(t ? B5 : bh) ? [r] : [], Mw(r));
    }, []);
  },
  $5 = function (e, t) {
    var n;
    return e instanceof HTMLIFrameElement &&
      !((n = e.contentDocument) === null || n === void 0) &&
      n.body
      ? Au([e.contentDocument.body], t)
      : [e];
  },
  Au = function (e, t) {
    return e.reduce(function (n, r) {
      var i,
        o = Mw(r, t),
        a = (i = []).concat.apply(
          i,
          o.map(function (s) {
            return $5(s, t);
          })
        );
      return n.concat(
        a,
        r.parentNode
          ? sn(r.parentNode.querySelectorAll(bh)).filter(function (s) {
              return s === r;
            })
          : []
      );
    }, []);
  },
  W5 = function (e) {
    var t = e.querySelectorAll("[".concat(y5, "]"));
    return sn(t)
      .map(function (n) {
        return Au([n]);
      })
      .reduce(function (n, r) {
        return n.concat(r);
      }, []);
  },
  kh = function (e, t) {
    return sn(e)
      .filter(function (n) {
        return Ew(t, n);
      })
      .filter(function (n) {
        return F5(n);
      });
  },
  Jg = function (e, t) {
    return (
      t === void 0 && (t = new Map()),
      sn(e).filter(function (n) {
        return _w(t, n);
      })
    );
  },
  Pd = function (e, t, n) {
    return Iw(kh(Au(e, n), t), !0, n);
  },
  ey = function (e, t) {
    return Iw(kh(Au(e), t), !1);
  },
  U5 = function (e, t) {
    return kh(W5(e), t);
  },
  Ai = function (e, t) {
    return e.shadowRoot
      ? Ai(e.shadowRoot, t)
      : Object.getPrototypeOf(e).contains !== void 0 &&
        Object.getPrototypeOf(e).contains.call(e, t)
      ? !0
      : sn(e.children).some(function (n) {
          var r;
          if (n instanceof HTMLIFrameElement) {
            var i =
              (r = n.contentDocument) === null || r === void 0
                ? void 0
                : r.body;
            return i ? Ai(i, t) : !1;
          }
          return Ai(n, t);
        });
  },
  H5 = function (e) {
    for (var t = new Set(), n = e.length, r = 0; r < n; r += 1)
      for (var i = r + 1; i < n; i += 1) {
        var o = e[r].compareDocumentPosition(e[i]);
        (o & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i),
          (o & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
      }
    return e.filter(function (a, s) {
      return !t.has(s);
    });
  },
  Nw = function (e) {
    return e.parentNode ? Nw(e.parentNode) : e;
  },
  Ch = function (e) {
    var t = Il(e);
    return t.filter(Boolean).reduce(function (n, r) {
      var i = r.getAttribute(kd);
      return (
        n.push.apply(
          n,
          i
            ? H5(
                sn(
                  Nw(r).querySelectorAll(
                    "["
                      .concat(kd, '="')
                      .concat(i, '"]:not([')
                      .concat(hw, '="disabled"])')
                  )
                )
              )
            : [r]
        ),
        n
      );
    }, []);
  },
  G5 = function (e) {
    try {
      return e();
    } catch {
      return;
    }
  },
  pa = function (e) {
    if ((e === void 0 && (e = document), !(!e || !e.activeElement))) {
      var t = e.activeElement;
      return t.shadowRoot
        ? pa(t.shadowRoot)
        : t instanceof HTMLIFrameElement &&
          G5(function () {
            return t.contentWindow.document;
          })
        ? pa(t.contentWindow.document)
        : t;
    }
  },
  Y5 = function (e, t) {
    return e === t;
  },
  K5 = function (e, t) {
    return !!sn(e.querySelectorAll("iframe")).some(function (n) {
      return Y5(n, t);
    });
  },
  Lw = function (e, t) {
    return (
      t === void 0 && (t = pa(Cw(e).ownerDocument)),
      !t || (t.dataset && t.dataset.focusGuard)
        ? !1
        : Ch(e).some(function (n) {
            return Ai(n, t) || K5(n, t);
          })
    );
  },
  X5 = function (e) {
    e === void 0 && (e = document);
    var t = pa(e);
    return t
      ? sn(e.querySelectorAll("[".concat(g5, "]"))).some(function (n) {
          return Ai(n, t);
        })
      : !1;
  },
  Q5 = function (e, t) {
    return (
      t
        .filter(Ow)
        .filter(function (n) {
          return n.name === e.name;
        })
        .filter(function (n) {
          return n.checked;
        })[0] || e
    );
  },
  Ph = function (e, t) {
    return Ow(e) && e.name ? Q5(e, t) : e;
  },
  q5 = function (e) {
    var t = new Set();
    return (
      e.forEach(function (n) {
        return t.add(Ph(n, e));
      }),
      e.filter(function (n) {
        return t.has(n);
      })
    );
  },
  ty = function (e) {
    return e[0] && e.length > 1 ? Ph(e[0], e) : e[0];
  },
  ny = function (e, t) {
    return e.length > 1 ? e.indexOf(Ph(e[t], e)) : t;
  },
  Fw = "NEW_FOCUS",
  Z5 = function (e, t, n, r) {
    var i = e.length,
      o = e[0],
      a = e[i - 1],
      s = wh(n);
    if (!(n && e.indexOf(n) >= 0)) {
      var l = n !== void 0 ? t.indexOf(n) : -1,
        u = r ? t.indexOf(r) : l,
        c = r ? e.indexOf(r) : -1,
        f = l - u,
        d = t.indexOf(o),
        p = t.indexOf(a),
        m = q5(t),
        v = n !== void 0 ? m.indexOf(n) : -1,
        w = v - (r ? m.indexOf(r) : l),
        y = ny(e, 0),
        h = ny(e, i - 1);
      if (l === -1 || c === -1) return Fw;
      if (!f && c >= 0) return c;
      if (l <= d && s && Math.abs(f) > 1) return h;
      if (l >= p && s && Math.abs(f) > 1) return y;
      if (f && Math.abs(w) > 1) return c;
      if (l <= d) return h;
      if (l > p) return y;
      if (f) return Math.abs(f) > 1 ? c : (i + c + f) % i;
    }
  },
  J5 = function (e) {
    return function (t) {
      var n,
        r = (n = Aw(t)) === null || n === void 0 ? void 0 : n.autofocus;
      return (
        t.autofocus || (r !== void 0 && r !== "false") || e.indexOf(t) >= 0
      );
    };
  },
  e3 = function (e, t, n) {
    var r = e.map(function (o) {
        var a = o.node;
        return a;
      }),
      i = Jg(r.filter(J5(n)));
    return i && i.length ? ty(i) : ty(Jg(t));
  },
  Td = function (e, t) {
    return (
      t === void 0 && (t = []),
      t.push(e),
      e.parentNode && Td(e.parentNode.host || e.parentNode, t),
      t
    );
  },
  Dc = function (e, t) {
    for (var n = Td(e), r = Td(t), i = 0; i < n.length; i += 1) {
      var o = n[i];
      if (r.indexOf(o) >= 0) return o;
    }
    return !1;
  },
  Dw = function (e, t, n) {
    var r = Il(e),
      i = Il(t),
      o = r[0],
      a = !1;
    return (
      i.filter(Boolean).forEach(function (s) {
        (a = Dc(a || s, s) || a),
          n.filter(Boolean).forEach(function (l) {
            var u = Dc(o, l);
            u && (!a || Ai(u, a) ? (a = u) : (a = Dc(u, a)));
          });
      }),
      a
    );
  },
  t3 = function (e, t) {
    return e.reduce(function (n, r) {
      return n.concat(U5(r, t));
    }, []);
  },
  n3 = function (e, t) {
    var n = new Map();
    return (
      t.forEach(function (r) {
        return n.set(r.node, r);
      }),
      e
        .map(function (r) {
          return n.get(r);
        })
        .filter(j5)
    );
  },
  r3 = function (e, t) {
    var n = pa(Il(e).length > 0 ? document : Cw(e).ownerDocument),
      r = Ch(e).filter(Ml),
      i = Dw(n || e, e, r),
      o = new Map(),
      a = ey(r, o),
      s = Pd(r, o).filter(function (p) {
        var m = p.node;
        return Ml(m);
      });
    if (!(!s[0] && ((s = a), !s[0]))) {
      var l = ey([i], o).map(function (p) {
          var m = p.node;
          return m;
        }),
        u = n3(l, s),
        c = u.map(function (p) {
          var m = p.node;
          return m;
        }),
        f = Z5(c, l, n, t);
      if (f === Fw) {
        var d = e3(a, c, t3(r, o));
        if (d) return { node: d };
        console.warn("focus-lock: cannot find any node to move focus into");
        return;
      }
      return f === void 0 ? f : u[f];
    }
  },
  i3 = function (e) {
    var t = Ch(e).filter(Ml),
      n = Dw(e, e, t),
      r = new Map(),
      i = Pd([n], r, !0),
      o = Pd(t, r)
        .filter(function (a) {
          var s = a.node;
          return Ml(s);
        })
        .map(function (a) {
          var s = a.node;
          return s;
        });
    return i.map(function (a) {
      var s = a.node,
        l = a.index;
      return { node: s, index: l, lockItem: o.indexOf(s) >= 0, guard: wh(s) };
    });
  },
  o3 = function (e, t) {
    "focus" in e && e.focus(t),
      "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
  },
  jc = 0,
  zc = !1,
  jw = function (e, t, n) {
    n === void 0 && (n = {});
    var r = r3(e, t);
    if (!zc && r) {
      if (jc > 2) {
        console.error(
          "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
        ),
          (zc = !0),
          setTimeout(function () {
            zc = !1;
          }, 1);
        return;
      }
      jc++, o3(r.node, n.focusOptions), jc--;
    }
  };
function Th(e) {
  setTimeout(e, 1);
}
var a3 = function () {
    return document && document.activeElement === document.body;
  },
  s3 = function () {
    return a3() || X5();
  },
  Ri = null,
  Si = null,
  Oi = null,
  ha = !1,
  l3 = function () {
    return !0;
  },
  u3 = function (t) {
    return (Ri.whiteList || l3)(t);
  },
  c3 = function (t, n) {
    Oi = { observerNode: t, portaledElement: n };
  },
  f3 = function (t) {
    return Oi && Oi.portaledElement === t;
  };
function ry(e, t, n, r) {
  var i = null,
    o = e;
  do {
    var a = r[o];
    if (a.guard) a.node.dataset.focusAutoGuard && (i = a);
    else if (a.lockItem) {
      if (o !== e) return;
      i = null;
    } else break;
  } while ((o += n) !== t);
  i && (i.node.tabIndex = 0);
}
var d3 = function (t) {
    return t && "current" in t ? t.current : t;
  },
  p3 = function (t) {
    return t ? !!ha : ha === "meanwhile";
  },
  h3 = function e(t, n, r) {
    return (
      n &&
      ((n.host === t && (!n.activeElement || r.contains(n.activeElement))) ||
        (n.parentNode && e(t, n.parentNode, r)))
    );
  },
  m3 = function (t, n) {
    return n.some(function (r) {
      return h3(t, r, r);
    });
  },
  Nl = function () {
    var t = !1;
    if (Ri) {
      var n = Ri,
        r = n.observed,
        i = n.persistentFocus,
        o = n.autoFocus,
        a = n.shards,
        s = n.crossFrame,
        l = n.focusOptions,
        u = r || (Oi && Oi.portaledElement),
        c = document && document.activeElement;
      if (u) {
        var f = [u].concat(a.map(d3).filter(Boolean));
        if (
          ((!c || u3(c)) &&
            (i || p3(s) || !s3() || (!Si && o)) &&
            (u &&
              !(Lw(f) || (c && m3(c, f)) || f3(c)) &&
              (document && !Si && c && !o
                ? (c.blur && c.blur(), document.body.focus())
                : ((t = jw(f, Si, { focusOptions: l })), (Oi = {}))),
            (ha = !1),
            (Si = document && document.activeElement)),
          document)
        ) {
          var d = document && document.activeElement,
            p = i3(f),
            m = p
              .map(function (v) {
                var w = v.node;
                return w;
              })
              .indexOf(d);
          m > -1 &&
            (p
              .filter(function (v) {
                var w = v.guard,
                  y = v.node;
                return w && y.dataset.focusAutoGuard;
              })
              .forEach(function (v) {
                var w = v.node;
                return w.removeAttribute("tabIndex");
              }),
            ry(m, p.length, 1, p),
            ry(m, -1, -1, p));
        }
      }
    }
    return t;
  },
  zw = function (t) {
    Nl() && t && (t.stopPropagation(), t.preventDefault());
  },
  Eh = function () {
    return Th(Nl);
  },
  v3 = function (t) {
    var n = t.target,
      r = t.currentTarget;
    r.contains(n) || c3(r, n);
  },
  g3 = function () {
    return null;
  },
  Vw = function () {
    (ha = "just"),
      Th(function () {
        ha = "meanwhile";
      });
  },
  y3 = function () {
    document.addEventListener("focusin", zw),
      document.addEventListener("focusout", Eh),
      window.addEventListener("blur", Vw);
  },
  x3 = function () {
    document.removeEventListener("focusin", zw),
      document.removeEventListener("focusout", Eh),
      window.removeEventListener("blur", Vw);
  };
function S3(e) {
  return e.filter(function (t) {
    var n = t.disabled;
    return !n;
  });
}
function w3(e) {
  var t = e.slice(-1)[0];
  t && !Ri && y3();
  var n = Ri,
    r = n && t && t.id === n.id;
  (Ri = t),
    n &&
      !r &&
      (n.onDeactivation(),
      e.filter(function (i) {
        var o = i.id;
        return o === n.id;
      }).length || n.returnFocus(!t)),
    t
      ? ((Si = null),
        (!r || n.observed !== t.observed) && t.onActivation(),
        Nl(),
        Th(Nl))
      : (x3(), (Si = null));
}
ww.assignSyncMedium(v3);
bw.assignMedium(Eh);
C5.assignMedium(function (e) {
  return e({ moveFocusInside: jw, focusInside: Lw });
});
const b3 = O5(S3, w3)(g3);
var Bw = S.forwardRef(function (t, n) {
    return S.createElement(kw, Vi({ sideCar: b3, ref: n }, t));
  }),
  $w = kw.propTypes || {};
$w.sideCar;
v5($w, ["sideCar"]);
Bw.propTypes = {};
const iy = Bw;
function k3(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "nodeType" in e &&
    e.nodeType === Node.ELEMENT_NODE
  );
}
function C3(e) {
  var t;
  if (!k3(e)) return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
var P3 = (e) => e.hasAttribute("tabindex");
function T3(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Ww(e) {
  return e.parentElement && Ww(e.parentElement) ? !0 : e.hidden;
}
function E3(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function _3(e) {
  if (!C3(e) || Ww(e) || T3(e)) return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0) return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls"),
  };
  return t in r ? r[t]() : E3(e) ? !0 : P3(e);
}
var A3 = [
    "input:not(:disabled):not([disabled])",
    "select:not(:disabled):not([disabled])",
    "textarea:not(:disabled):not([disabled])",
    "embed",
    "iframe",
    "object",
    "a[href]",
    "area[href]",
    "button:not(:disabled):not([disabled])",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    "*[tabindex]:not([aria-disabled])",
    "*[contenteditable]",
  ],
  R3 = A3.join(),
  O3 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function I3(e) {
  const t = Array.from(e.querySelectorAll(R3));
  return t.unshift(e), t.filter((n) => _3(n) && O3(n));
}
var oy,
  M3 = (oy = iy.default) != null ? oy : iy,
  Uw = (e) => {
    const {
        initialFocusRef: t,
        finalFocusRef: n,
        contentRef: r,
        restoreFocus: i,
        children: o,
        isDisabled: a,
        autoFocus: s,
        persistentFocus: l,
        lockFocusAcrossFrames: u,
      } = e,
      c = S.useCallback(() => {
        t != null && t.current
          ? t.current.focus()
          : r != null &&
            r.current &&
            I3(r.current).length === 0 &&
            requestAnimationFrame(() => {
              var m;
              (m = r.current) == null || m.focus();
            });
      }, [t, r]),
      f = S.useCallback(() => {
        var p;
        (p = n == null ? void 0 : n.current) == null || p.focus();
      }, [n]),
      d = i && !n;
    return _.jsx(M3, {
      crossFrame: u,
      persistentFocus: l,
      autoFocus: s,
      disabled: a,
      onActivation: c,
      onDeactivation: f,
      returnFocus: d,
      children: o,
    });
  };
Uw.displayName = "FocusLock";
var N3 = {
    slideInBottom: { ...yo, custom: { offsetY: 16, reverse: !0 } },
    slideInRight: { ...yo, custom: { offsetX: 16, reverse: !0 } },
    slideInTop: { ...yo, custom: { offsetY: -16, reverse: !0 } },
    slideInLeft: { ...yo, custom: { offsetX: -16, reverse: !0 } },
    scale: { ...pw, custom: { initialScale: 0.95, reverse: !0 } },
    none: {},
  },
  L3 = te(_a.section),
  F3 = (e) => N3[e || "none"],
  Hw = S.forwardRef((e, t) => {
    const { preset: n, motionProps: r = F3(n), ...i } = e;
    return _.jsx(L3, { ref: t, ...r, ...i });
  });
Hw.displayName = "ModalTransition";
var D3 = Object.defineProperty,
  j3 = (e, t, n) =>
    t in e
      ? D3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  z3 = (e, t, n) => (j3(e, typeof t != "symbol" ? t + "" : t, n), n),
  V3 = class {
    constructor() {
      z3(this, "modals"), (this.modals = new Map());
    }
    add(e) {
      return this.modals.set(e, this.modals.size + 1), this.modals.size;
    }
    remove(e) {
      this.modals.delete(e);
    }
    isTopModal(e) {
      return e ? this.modals.get(e) === this.modals.size : !1;
    }
  },
  Ed = new V3();
function Gw(e, t) {
  const [n, r] = S.useState(0);
  return (
    S.useEffect(() => {
      const i = e.current;
      if (i) {
        if (t) {
          const o = Ed.add(i);
          r(o);
        }
        return () => {
          Ed.remove(i), r(0);
        };
      }
    }, [t, e]),
    n
  );
}
var B3 = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Zr = new WeakMap(),
  ys = new WeakMap(),
  xs = {},
  Vc = 0,
  Yw = function (e) {
    return e && (e.host || Yw(e.parentNode));
  },
  $3 = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Yw(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  W3 = function (e, t, n, r) {
    var i = $3(t, Array.isArray(e) ? e : [e]);
    xs[n] || (xs[n] = new WeakMap());
    var o = xs[n],
      a = [],
      s = new Set(),
      l = new Set(i),
      u = function (f) {
        !f || s.has(f) || (s.add(f), u(f.parentNode));
      };
    i.forEach(u);
    var c = function (f) {
      !f ||
        l.has(f) ||
        Array.prototype.forEach.call(f.children, function (d) {
          if (s.has(d)) c(d);
          else {
            var p = d.getAttribute(r),
              m = p !== null && p !== "false",
              v = (Zr.get(d) || 0) + 1,
              w = (o.get(d) || 0) + 1;
            Zr.set(d, v),
              o.set(d, w),
              a.push(d),
              v === 1 && m && ys.set(d, !0),
              w === 1 && d.setAttribute(n, "true"),
              m || d.setAttribute(r, "true");
          }
        });
    };
    return (
      c(t),
      s.clear(),
      Vc++,
      function () {
        a.forEach(function (f) {
          var d = Zr.get(f) - 1,
            p = o.get(f) - 1;
          Zr.set(f, d),
            o.set(f, p),
            d || (ys.has(f) || f.removeAttribute(r), ys.delete(f)),
            p || f.removeAttribute(n);
        }),
          Vc--,
          Vc ||
            ((Zr = new WeakMap()),
            (Zr = new WeakMap()),
            (ys = new WeakMap()),
            (xs = {}));
      }
    );
  },
  U3 = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || B3(e);
    return i
      ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]"))),
        W3(r, i, n, "aria-hidden"))
      : function () {
          return null;
        };
  };
function H3(e) {
  const {
      isOpen: t,
      onClose: n,
      id: r,
      closeOnOverlayClick: i = !0,
      closeOnEsc: o = !0,
      useInert: a = !0,
      onOverlayClick: s,
      onEsc: l,
    } = e,
    u = S.useRef(null),
    c = S.useRef(null),
    [f, d, p] = Y3(
      r,
      "chakra-modal",
      "chakra-modal--header",
      "chakra-modal--body"
    );
  G3(u, t && a);
  const m = Gw(u, t),
    v = S.useRef(null),
    w = S.useCallback((O) => {
      v.current = O.target;
    }, []),
    y = S.useCallback(
      (O) => {
        O.key === "Escape" &&
          (O.stopPropagation(), o && (n == null || n()), l == null || l());
      },
      [o, n, l]
    ),
    [h, g] = S.useState(!1),
    [b, P] = S.useState(!1),
    A = S.useCallback(
      (O = {}, D = null) => ({
        role: "dialog",
        ...O,
        ref: na(D, u),
        id: f,
        tabIndex: -1,
        "aria-modal": !0,
        "aria-labelledby": h ? d : void 0,
        "aria-describedby": b ? p : void 0,
        onClick: Er(O.onClick, (Q) => Q.stopPropagation()),
      }),
      [p, b, f, d, h]
    ),
    T = S.useCallback(
      (O) => {
        O.stopPropagation(),
          v.current === O.target &&
            Ed.isTopModal(u.current) &&
            (i && (n == null || n()), s == null || s());
      },
      [n, i, s]
    ),
    R = S.useCallback(
      (O = {}, D = null) => ({
        ...O,
        ref: na(D, c),
        onClick: Er(O.onClick, T),
        onKeyDown: Er(O.onKeyDown, y),
        onMouseDown: Er(O.onMouseDown, w),
      }),
      [y, w, T]
    );
  return {
    isOpen: t,
    onClose: n,
    headerId: d,
    bodyId: p,
    setBodyMounted: P,
    setHeaderMounted: g,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: A,
    getDialogContainerProps: R,
    index: m,
  };
}
function G3(e, t) {
  const n = e.current;
  S.useEffect(() => {
    if (!(!e.current || !t)) return U3(e.current);
  }, [t, e, n]);
}
function Y3(e, ...t) {
  const n = S.useId(),
    r = e || n;
  return S.useMemo(() => t.map((i) => `${i}-${r}`), [r, t]);
}
var [K3, Aa] = dr({
    name: "ModalStylesContext",
    errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `,
  }),
  [X3, Wr] = dr({
    strict: !0,
    name: "ModalContext",
    errorMessage:
      "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
  }),
  Kw = (e) => {
    const t = {
        scrollBehavior: "outside",
        autoFocus: !0,
        trapFocus: !0,
        returnFocusOnClose: !0,
        blockScrollOnMount: !0,
        allowPinchZoom: !1,
        motionPreset: "scale",
        lockFocusAcrossFrames: !0,
        ...e,
      },
      {
        portalProps: n,
        children: r,
        autoFocus: i,
        trapFocus: o,
        initialFocusRef: a,
        finalFocusRef: s,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: f,
        motionPreset: d,
        lockFocusAcrossFrames: p,
        onCloseComplete: m,
      } = t,
      v = du("Modal", t),
      y = {
        ...H3(t),
        autoFocus: i,
        trapFocus: o,
        initialFocusRef: a,
        finalFocusRef: s,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: f,
        motionPreset: d,
        lockFocusAcrossFrames: p,
      };
    return _.jsx(X3, {
      value: y,
      children: _.jsx(K3, {
        value: v,
        children: _.jsx(_u, {
          onExitComplete: m,
          children: y.isOpen && _.jsx(xu, { ...n, children: r }),
        }),
      }),
    });
  };
Kw.displayName = "Modal";
var Ws = "right-scroll-bar-position",
  Us = "width-before-scroll-bar",
  Q3 = "with-scroll-bars-hidden",
  q3 = "--removed-body-scroll-bar-size",
  Xw = xw(),
  Bc = function () {},
  Ru = S.forwardRef(function (e, t) {
    var n = S.useRef(null),
      r = S.useState({
        onScrollCapture: Bc,
        onWheelCapture: Bc,
        onTouchMoveCapture: Bc,
      }),
      i = r[0],
      o = r[1],
      a = e.forwardProps,
      s = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      f = e.shards,
      d = e.sideCar,
      p = e.noIsolation,
      m = e.inert,
      v = e.allowPinchZoom,
      w = e.as,
      y = w === void 0 ? "div" : w,
      h = e.gapMode,
      g = vw(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      b = d,
      P = mw([n, t]),
      A = en(en({}, g), i);
    return S.createElement(
      S.Fragment,
      null,
      c &&
        S.createElement(b, {
          sideCar: Xw,
          removeScrollBar: u,
          shards: f,
          noIsolation: p,
          inert: m,
          setCallbacks: o,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: h,
        }),
      a
        ? S.cloneElement(S.Children.only(s), en(en({}, A), { ref: P }))
        : S.createElement(y, en({}, A, { className: l, ref: P }), s)
    );
  });
Ru.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ru.classNames = { fullWidth: Us, zeroRight: Ws };
var ay,
  Z3 = function () {
    if (ay) return ay;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
function J3() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Z3();
  return t && e.setAttribute("nonce", t), e;
}
function eN(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function tN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var nN = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = J3()) && (eN(t, n), tN(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  rN = function () {
    var e = nN();
    return function (t, n) {
      S.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Qw = function () {
    var e = rN(),
      t = function (n) {
        var r = n.styles,
          i = n.dynamic;
        return e(r, i), null;
      };
    return t;
  },
  iN = { left: 0, top: 0, right: 0, gap: 0 },
  $c = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  oN = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      i = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [$c(n), $c(r), $c(i)];
  },
  aN = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return iN;
    var t = oN(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  sN = Qw(),
  lN = function (e, t, n, r) {
    var i = e.left,
      o = e.top,
      a = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Q3,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  i,
                  `px;
    padding-top: `
                )
                .concat(
                  o,
                  `px;
    padding-right: `
                )
                .concat(
                  a,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(s, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(s, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Ws,
          ` {
    right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Us,
          ` {
    margin-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Ws, " .")
        .concat(
          Ws,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Us, " .")
        .concat(
          Us,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body {
    `
        )
        .concat(q3, ": ")
        .concat(
          s,
          `px;
  }
`
        )
    );
  },
  uN = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? "margin" : r,
      o = S.useMemo(
        function () {
          return aN(i);
        },
        [i]
      );
    return S.createElement(sN, { styles: lN(o, !t, i, n ? "" : "!important") });
  },
  _d = !1;
if (typeof window < "u")
  try {
    var Ss = Object.defineProperty({}, "passive", {
      get: function () {
        return (_d = !0), !0;
      },
    });
    window.addEventListener("test", Ss, Ss),
      window.removeEventListener("test", Ss, Ss);
  } catch {
    _d = !1;
  }
var Jr = _d ? { passive: !1 } : !1,
  cN = function (e) {
    return e.tagName === "TEXTAREA";
  },
  qw = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !cN(e) && n[t] === "visible")
    );
  },
  fN = function (e) {
    return qw(e, "overflowY");
  },
  dN = function (e) {
    return qw(e, "overflowX");
  },
  sy = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var i = Zw(e, r);
      if (i) {
        var o = Jw(e, r),
          a = o[1],
          s = o[2];
        if (a > s) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  pN = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  hN = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Zw = function (e, t) {
    return e === "v" ? fN(t) : dN(t);
  },
  Jw = function (e, t) {
    return e === "v" ? pN(t) : hN(t);
  },
  mN = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  vN = function (e, t, n, r, i) {
    var o = mN(e, window.getComputedStyle(t).direction),
      a = o * r,
      s = n.target,
      l = t.contains(s),
      u = !1,
      c = a > 0,
      f = 0,
      d = 0;
    do {
      var p = Jw(e, s),
        m = p[0],
        v = p[1],
        w = p[2],
        y = v - w - o * m;
      (m || y) && Zw(e, s) && ((f += y), (d += m)),
        s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
    } while ((!l && s !== document.body) || (l && (t.contains(s) || t === s)));
    return (
      ((c && ((i && Math.abs(f) < 1) || (!i && a > f))) ||
        (!c && ((i && Math.abs(d) < 1) || (!i && -a > d)))) &&
        (u = !0),
      u
    );
  },
  ws = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  ly = function (e) {
    return [e.deltaX, e.deltaY];
  },
  uy = function (e) {
    return e && "current" in e ? e.current : e;
  },
  gN = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  yN = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  xN = 0,
  ei = [];
function SN(e) {
  var t = S.useRef([]),
    n = S.useRef([0, 0]),
    r = S.useRef(),
    i = S.useState(xN++)[0],
    o = S.useState(Qw)[0],
    a = S.useRef(e);
  S.useEffect(
    function () {
      a.current = e;
    },
    [e]
  ),
    S.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(i));
          var v = b5([e.lockRef.current], (e.shards || []).map(uy), !0).filter(
            Boolean
          );
          return (
            v.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(i));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(i)),
                v.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(i));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var s = S.useCallback(function (v, w) {
      if ("touches" in v && v.touches.length === 2)
        return !a.current.allowPinchZoom;
      var y = ws(v),
        h = n.current,
        g = "deltaX" in v ? v.deltaX : h[0] - y[0],
        b = "deltaY" in v ? v.deltaY : h[1] - y[1],
        P,
        A = v.target,
        T = Math.abs(g) > Math.abs(b) ? "h" : "v";
      if ("touches" in v && T === "h" && A.type === "range") return !1;
      var R = sy(T, A);
      if (!R) return !0;
      if ((R ? (P = T) : ((P = T === "v" ? "h" : "v"), (R = sy(T, A))), !R))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (g || b) && (r.current = P), !P)
      )
        return !0;
      var O = r.current || P;
      return vN(O, w, v, O === "h" ? g : b, !0);
    }, []),
    l = S.useCallback(function (v) {
      var w = v;
      if (!(!ei.length || ei[ei.length - 1] !== o)) {
        var y = "deltaY" in w ? ly(w) : ws(w),
          h = t.current.filter(function (P) {
            return (
              P.name === w.type &&
              (P.target === w.target || w.target === P.shadowParent) &&
              gN(P.delta, y)
            );
          })[0];
        if (h && h.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!h) {
          var g = (a.current.shards || [])
              .map(uy)
              .filter(Boolean)
              .filter(function (P) {
                return P.contains(w.target);
              }),
            b = g.length > 0 ? s(w, g[0]) : !a.current.noIsolation;
          b && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = S.useCallback(function (v, w, y, h) {
      var g = { name: v, delta: w, target: y, should: h, shadowParent: wN(y) };
      t.current.push(g),
        setTimeout(function () {
          t.current = t.current.filter(function (b) {
            return b !== g;
          });
        }, 1);
    }, []),
    c = S.useCallback(function (v) {
      (n.current = ws(v)), (r.current = void 0);
    }, []),
    f = S.useCallback(function (v) {
      u(v.type, ly(v), v.target, s(v, e.lockRef.current));
    }, []),
    d = S.useCallback(function (v) {
      u(v.type, ws(v), v.target, s(v, e.lockRef.current));
    }, []);
  S.useEffect(function () {
    return (
      ei.push(o),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: d,
      }),
      document.addEventListener("wheel", l, Jr),
      document.addEventListener("touchmove", l, Jr),
      document.addEventListener("touchstart", c, Jr),
      function () {
        (ei = ei.filter(function (v) {
          return v !== o;
        })),
          document.removeEventListener("wheel", l, Jr),
          document.removeEventListener("touchmove", l, Jr),
          document.removeEventListener("touchstart", c, Jr);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    m = e.inert;
  return S.createElement(
    S.Fragment,
    null,
    m ? S.createElement(o, { styles: yN(i) }) : null,
    p ? S.createElement(uN, { gapMode: e.gapMode }) : null
  );
}
function wN(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const bN = k5(Xw, SN);
var eb = S.forwardRef(function (e, t) {
  return S.createElement(Ru, en({}, e, { ref: t, sideCar: bN }));
});
eb.classNames = Ru.classNames;
const kN = eb;
function CN(e) {
  const {
      autoFocus: t,
      trapFocus: n,
      dialogRef: r,
      initialFocusRef: i,
      blockScrollOnMount: o,
      allowPinchZoom: a,
      finalFocusRef: s,
      returnFocusOnClose: l,
      preserveScrollBarGap: u,
      lockFocusAcrossFrames: c,
      isOpen: f,
    } = Wr(),
    [d, p] = qS();
  S.useEffect(() => {
    !d && p && setTimeout(p);
  }, [d, p]);
  const m = Gw(r, f);
  return _.jsx(Uw, {
    autoFocus: t,
    isDisabled: !n,
    initialFocusRef: i,
    finalFocusRef: s,
    restoreFocus: l,
    contentRef: r,
    lockFocusAcrossFrames: c,
    children: _.jsx(kN, {
      removeScrollBar: !u,
      allowPinchZoom: a,
      enabled: m === 1 && o,
      forwardProps: !0,
      children: e.children,
    }),
  });
}
var tb = ae((e, t) => {
  const {
      className: n,
      children: r,
      containerProps: i,
      motionProps: o,
      ...a
    } = e,
    { getDialogProps: s, getDialogContainerProps: l } = Wr(),
    u = s(a, t),
    c = l(i),
    f = ye("chakra-modal__content", n),
    d = Aa(),
    p = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...d.dialog,
    },
    m = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...d.dialogContainer,
    },
    { motionPreset: v } = Wr();
  return _.jsx(CN, {
    children: _.jsx(te.div, {
      ...c,
      className: "chakra-modal__content-container",
      tabIndex: -1,
      __css: m,
      children: _.jsx(Hw, {
        preset: v,
        motionProps: o,
        className: f,
        ...u,
        __css: p,
        children: r,
      }),
    }),
  });
});
tb.displayName = "ModalContent";
var nb = ae((e, t) => {
  const { className: n, ...r } = e,
    { headerId: i, setHeaderMounted: o } = Wr();
  S.useEffect(() => (o(!0), () => o(!1)), [o]);
  const a = ye("chakra-modal__header", n),
    l = { flex: 0, ...Aa().header };
  return _.jsx(te.header, { ref: t, className: a, id: i, ...r, __css: l });
});
nb.displayName = "ModalHeader";
var PN = te(_a.div),
  rb = ae((e, t) => {
    const { className: n, transition: r, motionProps: i, ...o } = e,
      a = ye("chakra-modal__overlay", n),
      l = {
        pos: "fixed",
        left: "0",
        top: "0",
        w: "100vw",
        h: "100vh",
        ...Aa().overlay,
      },
      { motionPreset: u } = Wr(),
      f = i || (u === "none" ? {} : dw);
    return _.jsx(PN, { ...f, __css: l, ref: t, className: a, ...o });
  });
rb.displayName = "ModalOverlay";
var ib = ae((e, t) => {
  const { className: n, ...r } = e,
    { bodyId: i, setBodyMounted: o } = Wr();
  S.useEffect(() => (o(!0), () => o(!1)), [o]);
  const a = ye("chakra-modal__body", n),
    s = Aa();
  return _.jsx(te.div, { ref: t, className: a, id: i, ...r, __css: s.body });
});
ib.displayName = "ModalBody";
var ob = ae((e, t) => {
  const { onClick: n, className: r, ...i } = e,
    { onClose: o } = Wr(),
    a = ye("chakra-modal__close-btn", r),
    s = Aa();
  return _.jsx(fw, {
    ref: t,
    __css: s.closeButton,
    className: a,
    onClick: Er(n, (l) => {
      l.stopPropagation(), o();
    }),
    ...i,
  });
});
ob.displayName = "ModalCloseButton";
const TN = ({ editContact: e, name: t, email: n, id: r, deleteContact: i }) =>
    _.jsxs(Ao, {
      color: "white",
      justify: "space-between",
      bg: "purple",
      p: "4",
      borderRadius: "xl",
      boxShadow: "xl",
      mb: "4",
      children: [
        _.jsxs(Ao, {
          align: "center",
          children: [
            _.jsx(vn, {
              mr: "4",
              children: _.jsx(Mr, { size: "3x", icon: UE, mr: "4" }),
            }),
            _.jsxs(Fp, {
              children: [
                _.jsx(Xf, { children: t }),
                _.jsx(Xf, { children: n }),
              ],
            }),
          ],
        }),
        _.jsxs(Ao, {
          align: "center",
          children: [
            _.jsx(vn, {
              cursor: "pointer",
              mr: "4",
              children: _.jsx(ra, {
                cursor: "pointer",
                bg: "purple",
                border: "none",
                color: "white",
                onClick: () => e(r),
                children: _.jsx(Mr, { size: "2x", icon: WE }),
              }),
            }),
            _.jsx(vn, {
              children: _.jsx(ra, {
                cursor: "pointer",
                bg: "purple",
                border: "none",
                color: "red",
                onClick: () => i(r),
                children: _.jsx(Mr, { size: "2x", icon: HE }),
              }),
            }),
          ],
        }),
      ],
    }),
  EN = ({ onOpen: e, isOpen: t, onClose: n, children: r, title: i }) =>
    _.jsx(_.Fragment, {
      children: _.jsxs(Kw, {
        isOpen: t,
        onClose: n,
        children: [
          _.jsx(rb, {}),
          _.jsxs(tb, {
            children: [
              _.jsx(nb, { children: i }),
              _.jsx(ob, {}),
              _.jsx(ib, { children: r }),
            ],
          }),
        ],
      }),
    }),
  cy = { name: "", email: "", id: "" },
  _N = ({
    onClose: e,
    editableContact: t,
    setEditableContact: n,
    addContact: r,
    updateContact: i,
  }) => {
    const [o, a] = S.useState(t),
      [s, l] = S.useState(cy);
    function u(f) {
      l({ ...s, [f.target.name]: f.target.value });
    }
    function c(f) {
      t
        ? (i(s), n(null), alert("Contact Successfully updated!"))
        : (console.log("Submitting"), r(s), l(cy)),
        e();
    }
    return (
      S.useEffect(() => {
        t && l(o);
      }, [t]),
      _.jsx("div", {
        children: _.jsxs(Fp, {
          id: "Contact Form",
          bg: " #B931FC",
          w: "calc(50%/1.87)",
          m: "auto",
          borderRadius: "10%",
          children: [
            _.jsxs(Yf, {
              className: "FormControl",
              children: [
                _.jsx(Kf, { children: "Name" }),
                _.jsx("input", {
                  onChange: u,
                  name: "name",
                  type: "text",
                  value: s.name,
                }),
              ],
            }),
            _.jsxs(Yf, {
              className: "FormControl",
              children: [
                _.jsx(Kf, { children: "email address" }),
                _.jsx("input", {
                  onChange: u,
                  name: "email",
                  type: "email",
                  value: s.email,
                }),
              ],
            }),
            _.jsxs(ra, {
              onClick: c,
              cursor: "pointer",
              type: "submit",
              bg: "blue",
              color: "white",
              borderRadius: "10%",
              alignSelf: "flex-end",
              children: [t ? "Edit" : "Add", "Contact"],
            }),
          ],
        }),
      })
    );
  },
  AN = [
    { id: 1, name: "firstPerson", email: "firstEmail@gmail.com" },
    { id: 2, name: "secondPerson", email: "secondEmail@gmail.com" },
    { id: 3, name: "thirdPerson", email: "thirdEmail@gmail.com" },
  ];
var RN = {};
console.log(RN.REACT_APP_SERVER);
const ON = () => {
  const { isOpen: e, onOpen: t, onClose: n } = CE(),
    [r, i] = S.useState(null),
    [o, a] = S.useState(AN),
    [s, l] = S.useState(""),
    u = o.filter((m) => m.name.includes(s));
  function c(m) {
    const v = o.find((w) => w.id === m);
    i(v);
  }
  function f(m) {
    console.log(m), a(o.filter((v) => v.id !== m));
  }
  function d(m) {
    console.log("Adding"), a([...o, { ...m, id: o.length + 1 }]);
  }
  function p(m) {
    const v = m.id,
      w = [...o];
    w.splice(v - 1, 1, m), a(w);
  }
  return _.jsxs("div", {
    id: "main",
    children: [
      _.jsx(EN, {
        isOpen: e,
        onOpen: t,
        onClose: n,
        children: _.jsx(_N, {
          onClose: n,
          updateContact: p,
          setEditableContact: i,
          editableContact: r,
          addContact: d,
        }),
      }),
      _.jsxs(vn, {
        children: [
          _.jsxs(Ao, {
            p: "4",
            justify: "center",
            align: "center",
            children: [
              _.jsx(J1, {
                src: "src/assets/react.svg",
                w: "150px",
                h: "100px",
              }),
              _.jsx(ax, {
                as: "h1",
                textTransform: "uppercase",
                children: "Contact App",
              }),
            ],
          }),
          _.jsx(vn, {
            p: "4",
            children: _.jsxs(ra, {
              cursor: "pointer",
              bg: "purple",
              color: "white",
              w: "100%",
              fontSize: "xl",
              fontWeight: "bold",
              colorScheme: "purple",
              onClick: t,
              children: [
                _.jsx(TE, { h: "20px", w: "20px", mr: "4" }),
                " ",
                r ? "Edit" : "Add",
                " Contact",
              ],
            }),
          }),
          _.jsx(vn, {
            p: "4",
            children: _.jsxs(tx, {
              children: [
                _.jsx(Np, {
                  pointerEvents: "none",
                  children: _.jsx(PE, { color: "gray" }),
                }),
                _.jsx(Lp, {
                  focusBorderColor: "purple",
                  type: "tel",
                  onChange: (m) => {
                    l(m.target.value);
                  },
                  placeholder: "Search Contact...",
                }),
              ],
            }),
          }),
          _.jsx(vn, {
            p: "4",
            children: u.map((m, v) =>
              _.jsx(
                TN,
                {
                  editContact: c,
                  deleteContact: f,
                  id: m.id,
                  email: m.email,
                  name: m.name,
                },
                m.id
              )
            ),
          }),
        ],
      }),
    ],
  });
};
Wc.createRoot(document.getElementById("root")).render(
  _.jsx(wn.StrictMode, { children: _.jsx(ON, {}) })
);
