var nr = function (e, t) {
  return (
    (nr =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var i in r)
          Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
      }),
    nr(e, t)
  );
};
function au(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  nr(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function cu(e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (o) {
          o(s);
        });
  }
  return new (n || (n = Promise))(function (s, o) {
    function a(h) {
      try {
        u(r.next(h));
      } catch (l) {
        o(l);
      }
    }
    function c(h) {
      try {
        u(r.throw(h));
      } catch (l) {
        o(l);
      }
    }
    function u(h) {
      h.done ? s(h.value) : i(h.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function uu(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    r,
    i,
    s,
    o;
  return (
    (o = { next: a(0), throw: a(1), return: a(2) }),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function a(u) {
    return function (h) {
      return c([u, h]);
    };
  }
  function c(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (
          ((r = 1),
          i &&
            (s =
              u[0] & 2
                ? i.return
                : u[0]
                ? i.throw || ((s = i.return) && s.call(i), 0)
                : i.next) &&
            !(s = s.call(i, u[1])).done)
        )
          return s;
        switch (((i = 0), s && (u = [u[0] & 2, s.value]), u[0])) {
          case 0:
          case 1:
            s = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, (i = u[1]), (u = [0]);
            continue;
          case 7:
            (u = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((s = n.trys),
              !(s = s.length > 0 && s[s.length - 1]) &&
                (u[0] === 6 || u[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!s || (u[1] > s[0] && u[1] < s[3]))) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < s[1]) {
              (n.label = s[1]), (s = u);
              break;
            }
            if (s && n.label < s[2]) {
              (n.label = s[2]), n.ops.push(u);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (h) {
        (u = [6, h]), (i = 0);
      } finally {
        r = s = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function rr(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Ye(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    i,
    s = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}
function Qi(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, s; r < i; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var hu = (function () {
  function e() {
    var t = this;
    (this.reject = function () {}),
      (this.resolve = function () {}),
      (this.promise = new Promise(function (n, r) {
        (t.resolve = n), (t.reject = r);
      }));
  }
  return (
    (e.prototype.wrapCallback = function (t) {
      var n = this;
      return function (r, i) {
        r ? n.reject(r) : n.resolve(i),
          typeof t == "function" &&
            (n.promise.catch(function () {}), t.length === 1 ? t(r) : t(r, i));
      };
    }),
    e
  );
})();
function Xe() {
  return typeof navigator != "undefined" &&
    typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function Ji() {
  return (
    typeof window != "undefined" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())
  );
}
function Zi() {
  var e =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function ts() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function es() {
  return Xe().indexOf("Electron/") >= 0;
}
function ns() {
  var e = Xe();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function rs() {
  return Xe().indexOf("MSAppHost/") >= 0;
}
var lu = "FirebaseError",
  fu = (function (e) {
    au(t, e);
    function t(n, r, i) {
      var s = e.call(this, r) || this;
      return (
        (s.code = n),
        (s.customData = i),
        (s.name = lu),
        Object.setPrototypeOf(s, t.prototype),
        Error.captureStackTrace &&
          Error.captureStackTrace(s, is.prototype.create),
        s
      );
    }
    return t;
  })(Error),
  is = (function () {
    function e(t, n, r) {
      (this.service = t), (this.serviceName = n), (this.errors = r);
    }
    return (
      (e.prototype.create = function (t) {
        for (var n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        var i = n[0] || {},
          s = this.service + "/" + t,
          o = this.errors[t],
          a = o ? du(o, i) : "Error",
          c = this.serviceName + ": " + a + " (" + s + ").",
          u = new fu(s, c, i);
        return u;
      }),
      e
    );
  })();
function du(e, t) {
  return e.replace(pu, function (n, r) {
    var i = t[r];
    return i != null ? String(i) : "<" + r + "?>";
  });
}
var pu = /\{\$([^}]+)}/g;
function vt(e) {
  return e && e._delegate ? e._delegate : e;
}
var le = (function () {
  function e(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  return (
    (e.prototype.setInstantiationMode = function (t) {
      return (this.instantiationMode = t), this;
    }),
    (e.prototype.setMultipleInstances = function (t) {
      return (this.multipleInstances = t), this;
    }),
    (e.prototype.setServiceProps = function (t) {
      return (this.serviceProps = t), this;
    }),
    (e.prototype.setInstanceCreatedCallback = function (t) {
      return (this.onInstanceCreated = t), this;
    }),
    e
  );
})();
var Pt = "[DEFAULT]";
var yu = (function () {
  function e(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.onInitCallbacks = new Map());
  }
  return (
    (e.prototype.get = function (t) {
      var n = this.normalizeInstanceIdentifier(t);
      if (!this.instancesDeferred.has(n)) {
        var r = new hu();
        if (
          (this.instancesDeferred.set(n, r),
          this.isInitialized(n) || this.shouldAutoInitialize())
        )
          try {
            var i = this.getOrInitializeService({ instanceIdentifier: n });
            i && r.resolve(i);
          } catch (s) {}
      }
      return this.instancesDeferred.get(n).promise;
    }),
    (e.prototype.getImmediate = function (t) {
      var n,
        r = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier),
        i =
          (n = t == null ? void 0 : t.optional) !== null && n !== void 0
            ? n
            : !1;
      if (this.isInitialized(r) || this.shouldAutoInitialize())
        try {
          return this.getOrInitializeService({ instanceIdentifier: r });
        } catch (s) {
          if (i) return null;
          throw s;
        }
      else {
        if (i) return null;
        throw Error("Service " + this.name + " is not available");
      }
    }),
    (e.prototype.getComponent = function () {
      return this.component;
    }),
    (e.prototype.setComponent = function (t) {
      var n, r;
      if (t.name !== this.name)
        throw Error(
          "Mismatching Component " + t.name + " for Provider " + this.name + "."
        );
      if (this.component)
        throw Error(
          "Component for " + this.name + " has already been provided"
        );
      if (((this.component = t), !!this.shouldAutoInitialize())) {
        if (mu(t))
          try {
            this.getOrInitializeService({ instanceIdentifier: Pt });
          } catch (l) {}
        try {
          for (
            var i = rr(this.instancesDeferred.entries()), s = i.next();
            !s.done;
            s = i.next()
          ) {
            var o = Ye(s.value, 2),
              a = o[0],
              c = o[1],
              u = this.normalizeInstanceIdentifier(a);
            try {
              var h = this.getOrInitializeService({ instanceIdentifier: u });
              c.resolve(h);
            } catch (l) {}
          }
        } catch (l) {
          n = { error: l };
        } finally {
          try {
            s && !s.done && (r = i.return) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
      }
    }),
    (e.prototype.clearInstance = function (t) {
      t === void 0 && (t = Pt),
        this.instancesDeferred.delete(t),
        this.instances.delete(t);
    }),
    (e.prototype.delete = function () {
      return cu(this, void 0, void 0, function () {
        var t;
        return uu(this, function (n) {
          switch (n.label) {
            case 0:
              return (
                (t = Array.from(this.instances.values())),
                [
                  4,
                  Promise.all(
                    Qi(
                      Qi(
                        [],
                        Ye(
                          t
                            .filter(function (r) {
                              return "INTERNAL" in r;
                            })
                            .map(function (r) {
                              return r.INTERNAL.delete();
                            })
                        )
                      ),
                      Ye(
                        t
                          .filter(function (r) {
                            return "_delete" in r;
                          })
                          .map(function (r) {
                            return r._delete();
                          })
                      )
                    )
                  ),
                ]
              );
            case 1:
              return n.sent(), [2];
          }
        });
      });
    }),
    (e.prototype.isComponentSet = function () {
      return this.component != null;
    }),
    (e.prototype.isInitialized = function (t) {
      return t === void 0 && (t = Pt), this.instances.has(t);
    }),
    (e.prototype.initialize = function (t) {
      var n, r;
      t === void 0 && (t = {});
      var i = t.options,
        s = i === void 0 ? {} : i,
        o = this.normalizeInstanceIdentifier(t.instanceIdentifier);
      if (this.isInitialized(o))
        throw Error(this.name + "(" + o + ") has already been initialized");
      if (!this.isComponentSet())
        throw Error("Component " + this.name + " has not been registered yet");
      var a = this.getOrInitializeService({
        instanceIdentifier: o,
        options: s,
      });
      try {
        for (
          var c = rr(this.instancesDeferred.entries()), u = c.next();
          !u.done;
          u = c.next()
        ) {
          var h = Ye(u.value, 2),
            l = h[0],
            p = h[1],
            m = this.normalizeInstanceIdentifier(l);
          o === m && p.resolve(a);
        }
      } catch (I) {
        n = { error: I };
      } finally {
        try {
          u && !u.done && (r = c.return) && r.call(c);
        } finally {
          if (n) throw n.error;
        }
      }
      return a;
    }),
    (e.prototype.onInit = function (t, n) {
      var r,
        i = this.normalizeInstanceIdentifier(n),
        s =
          (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
            ? r
            : new Set();
      s.add(t), this.onInitCallbacks.set(i, s);
      var o = this.instances.get(i);
      return (
        o && t(o, i),
        function () {
          s.delete(t);
        }
      );
    }),
    (e.prototype.invokeOnInitCallbacks = function (t, n) {
      var r,
        i,
        s = this.onInitCallbacks.get(n);
      if (!!s)
        try {
          for (var o = rr(s), a = o.next(); !a.done; a = o.next()) {
            var c = a.value;
            try {
              c(t, n);
            } catch (u) {}
          }
        } catch (u) {
          r = { error: u };
        } finally {
          try {
            a && !a.done && (i = o.return) && i.call(o);
          } finally {
            if (r) throw r.error;
          }
        }
    }),
    (e.prototype.getOrInitializeService = function (t) {
      var n = t.instanceIdentifier,
        r = t.options,
        i = r === void 0 ? {} : r,
        s = this.instances.get(n);
      if (
        !s &&
        this.component &&
        ((s = this.component.instanceFactory(this.container, {
          instanceIdentifier: gu(n),
          options: i,
        })),
        this.instances.set(n, s),
        this.invokeOnInitCallbacks(s, n),
        this.component.onInstanceCreated)
      )
        try {
          this.component.onInstanceCreated(this.container, n, s);
        } catch (o) {}
      return s || null;
    }),
    (e.prototype.normalizeInstanceIdentifier = function (t) {
      return (
        t === void 0 && (t = Pt),
        this.component ? (this.component.multipleInstances ? t : Pt) : t
      );
    }),
    (e.prototype.shouldAutoInitialize = function () {
      return (
        !!this.component && this.component.instantiationMode !== "EXPLICIT"
      );
    }),
    e
  );
})();
function gu(e) {
  return e === Pt ? void 0 : e;
}
function mu(e) {
  return e.instantiationMode === "EAGER";
}
var vu = (function () {
  function e(t) {
    (this.name = t), (this.providers = new Map());
  }
  return (
    (e.prototype.addComponent = function (t) {
      var n = this.getProvider(t.name);
      if (n.isComponentSet())
        throw new Error(
          "Component " +
            t.name +
            " has already been registered with " +
            this.name
        );
      n.setComponent(t);
    }),
    (e.prototype.addOrOverwriteComponent = function (t) {
      var n = this.getProvider(t.name);
      n.isComponentSet() && this.providers.delete(t.name), this.addComponent(t);
    }),
    (e.prototype.getProvider = function (t) {
      if (this.providers.has(t)) return this.providers.get(t);
      var n = new yu(t, this);
      return this.providers.set(t, n), n;
    }),
    (e.prototype.getProviders = function () {
      return Array.from(this.providers.values());
    }),
    e
  );
})();
function st() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
      r[i] = s[o];
  return r;
}
var wt, b;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(b || (b = {}));
var wu = {
    debug: b.DEBUG,
    verbose: b.VERBOSE,
    info: b.INFO,
    warn: b.WARN,
    error: b.ERROR,
    silent: b.SILENT,
  },
  Eu = b.INFO,
  Tu =
    ((wt = {}),
    (wt[b.DEBUG] = "log"),
    (wt[b.VERBOSE] = "log"),
    (wt[b.INFO] = "info"),
    (wt[b.WARN] = "warn"),
    (wt[b.ERROR] = "error"),
    wt),
  Iu = function (e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    if (!(t < e.logLevel)) {
      var i = new Date().toISOString(),
        s = Tu[t];
      if (s) console[s].apply(console, st(["[" + i + "]  " + e.name + ":"], n));
      else
        throw new Error(
          "Attempted to log a message with an invalid logType (value: " +
            t +
            ")"
        );
    }
  },
  ir = (function () {
    function e(t) {
      (this.name = t),
        (this._logLevel = Eu),
        (this._logHandler = Iu),
        (this._userLogHandler = null);
    }
    return (
      Object.defineProperty(e.prototype, "logLevel", {
        get: function () {
          return this._logLevel;
        },
        set: function (t) {
          if (!(t in b))
            throw new TypeError(
              'Invalid value "' + t + '" assigned to `logLevel`'
            );
          this._logLevel = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.setLogLevel = function (t) {
        this._logLevel = typeof t == "string" ? wu[t] : t;
      }),
      Object.defineProperty(e.prototype, "logHandler", {
        get: function () {
          return this._logHandler;
        },
        set: function (t) {
          if (typeof t != "function")
            throw new TypeError(
              "Value assigned to `logHandler` must be a function"
            );
          this._logHandler = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "userLogHandler", {
        get: function () {
          return this._userLogHandler;
        },
        set: function (t) {
          this._userLogHandler = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.debug = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        this._userLogHandler &&
          this._userLogHandler.apply(this, st([this, b.DEBUG], t)),
          this._logHandler.apply(this, st([this, b.DEBUG], t));
      }),
      (e.prototype.log = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        this._userLogHandler &&
          this._userLogHandler.apply(this, st([this, b.VERBOSE], t)),
          this._logHandler.apply(this, st([this, b.VERBOSE], t));
      }),
      (e.prototype.info = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        this._userLogHandler &&
          this._userLogHandler.apply(this, st([this, b.INFO], t)),
          this._logHandler.apply(this, st([this, b.INFO], t));
      }),
      (e.prototype.warn = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        this._userLogHandler &&
          this._userLogHandler.apply(this, st([this, b.WARN], t)),
          this._logHandler.apply(this, st([this, b.WARN], t));
      }),
      (e.prototype.error = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        this._userLogHandler &&
          this._userLogHandler.apply(this, st([this, b.ERROR], t)),
          this._logHandler.apply(this, st([this, b.ERROR], t));
      }),
      e
    );
  })();
var ss = class {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (Su(n)) {
          let r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
};
function Su(e) {
  let t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
var os = "@firebase/app-exp",
  Au = "0.0.900-exp.6ef484a04";
var sr = new ir("@firebase/app"),
  bu = "@firebase/app-compat",
  Nu = "@firebase/analytics-compat",
  Du = "@firebase/analytics-exp",
  Cu = "@firebase/app-check-compat",
  Ru = "@firebase/app-check-exp",
  _u = "@firebase/auth-exp",
  ku = "@firebase/auth-compat",
  Lu = "@firebase/database",
  xu = "@firebase/database-compat",
  Ou = "@firebase/functions-exp",
  Mu = "@firebase/functions-compat",
  Vu = "@firebase/installations-exp",
  Pu = "@firebase/installations-compat",
  Fu = "@firebase/messaging-exp",
  Uu = "@firebase/messaging-compat",
  qu = "@firebase/performance-exp",
  ju = "@firebase/performance-compat",
  $u = "@firebase/remote-config-exp",
  Bu = "@firebase/remote-config-compat",
  Hu = "@firebase/storage",
  Ku = "@firebase/storage-compat",
  zu = "@firebase/firestore",
  Gu = "@firebase/firestore-compat",
  Wu = "firebase-exp",
  Yu = "9.0.0-beta.7";
var as = "[DEFAULT]",
  Xu = {
    [os]: "fire-core",
    [bu]: "fire-core-compat",
    [Du]: "fire-analytics",
    [Nu]: "fire-analytics-compat",
    [Ru]: "fire-app-check",
    [Cu]: "fire-app-check-compat",
    [_u]: "fire-auth",
    [ku]: "fire-auth-compat",
    [Lu]: "fire-rtdb",
    [xu]: "fire-rtdb-compat",
    [Ou]: "fire-fn",
    [Mu]: "fire-fn-compat",
    [Vu]: "fire-iid",
    [Pu]: "fire-iid-compat",
    [Fu]: "fire-fcm",
    [Uu]: "fire-fcm-compat",
    [qu]: "fire-perf",
    [ju]: "fire-perf-compat",
    [$u]: "fire-rc",
    [Bu]: "fire-rc-compat",
    [Hu]: "fire-gcs",
    [Ku]: "fire-gcs-compat",
    [zu]: "fire-fst",
    [Gu]: "fire-fst-compat",
    "fire-js": "fire-js",
    [Wu]: "fire-js-all",
  };
var Qe = new Map(),
  or = new Map();
function Qu(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    sr.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function Je(e) {
  let t = e.name;
  if (or.has(t))
    return (
      sr.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  or.set(t, e);
  for (let n of Qe.values()) Qu(n, e);
  return !0;
}
function cs(e, t) {
  return e.container.getProvider(t);
}
var Ju = {
    ["no-app"]:
      "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    ["bad-app-name"]: "Illegal App name: '{$appName}",
    ["duplicate-app"]: "Firebase App named '{$appName}' already exists",
    ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
    ["invalid-app-argument"]:
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ["invalid-log-argument"]:
      "First argument to `onLog` must be null or a function.",
  },
  Ze = new is("app", "Firebase", Ju);
var us = class {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new le("app-exp", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Ze.create("app-deleted", { appName: this._name });
  }
};
var hs = Yu;
function ar(e, t = {}) {
  typeof t != "object" && (t = { name: t });
  let n = Object.assign({ name: as, automaticDataCollectionEnabled: !1 }, t),
    r = n.name;
  if (typeof r != "string" || !r)
    throw Ze.create("bad-app-name", { appName: String(r) });
  if (Qe.has(r)) throw Ze.create("duplicate-app", { appName: r });
  let i = new vu(r);
  for (let o of or.values()) i.addComponent(o);
  let s = new us(e, n, i);
  return Qe.set(r, s), s;
}
function ls(e = as) {
  let t = Qe.get(e);
  if (!t) throw Ze.create("no-app", { appName: e });
  return t;
}
function Ft(e, t, n) {
  var r;
  let i = (r = Xu[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  let s = i.match(/\s|\//),
    o = t.match(/\s|\//);
  if (s || o) {
    let a = [`Unable to register library "${i}" with version "${t}":`];
    s &&
      a.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && a.push("and"),
      o &&
        a.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      sr.warn(a.join(" "));
    return;
  }
  Je(new le(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
}
function Zu(e) {
  Je(new le("platform-logger", (t) => new ss(t), "PRIVATE")),
    Ft(os, Au, e),
    Ft("fire-js", "");
}
Zu();
var th = "firebase-exp",
  eh = "9.0.0-beta.7";
Ft(th, eh, "app");
var cr = function (e, t) {
  return (
    (cr =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var i in r)
          Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
      }),
    cr(e, t)
  );
};
function nh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  cr(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function fs(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
var rh =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {},
  g,
  ur = ur || {},
  E = rh || self;
function tn() {}
function hr(e) {
  var t = typeof e;
  return (
    (t = t != "object" ? t : e ? (Array.isArray(e) ? "array" : t) : "null"),
    t == "array" || (t == "object" && typeof e.length == "number")
  );
}
function fe(e) {
  var t = typeof e;
  return (t == "object" && e != null) || t == "function";
}
function sh(e) {
  return (
    (Object.prototype.hasOwnProperty.call(e, lr) && e[lr]) || (e[lr] = ++ih)
  );
}
var lr = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  ih = 0;
function oh(e, t, n) {
  return e.call.apply(e.bind, arguments);
}
function ah(e, t, n) {
  if (!e) throw Error();
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function () {
      var i = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(i, r), e.apply(t, i);
    };
  }
  return function () {
    return e.apply(t, arguments);
  };
}
function j(e, t, n) {
  return (
    Function.prototype.bind &&
    Function.prototype.bind.toString().indexOf("native code") != -1
      ? (j = oh)
      : (j = ah),
    j.apply(null, arguments)
  );
}
function en(e, t) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var r = n.slice();
    return r.push.apply(r, arguments), e.apply(this, r);
  };
}
function $(e, t) {
  function n() {}
  (n.prototype = t.prototype),
    (e.Z = t.prototype),
    (e.prototype = new n()),
    (e.prototype.constructor = e),
    (e.Vb = function (r, i, s) {
      for (
        var o = Array(arguments.length - 2), a = 2;
        a < arguments.length;
        a++
      )
        o[a - 2] = arguments[a];
      return t.prototype[i].apply(r, o);
    });
}
function lt() {
  (this.s = this.s), (this.o = this.o);
}
var ch = 0;
lt.prototype.s = !1;
lt.prototype.na = function () {
  if (!this.s && ((this.s = !0), this.M(), ch != 0)) var e = sh(this);
};
lt.prototype.M = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
var ds = Array.prototype.indexOf
    ? function (e, t) {
        return Array.prototype.indexOf.call(e, t, void 0);
      }
    : function (e, t) {
        if (typeof e == "string")
          return typeof t != "string" || t.length != 1 ? -1 : e.indexOf(t, 0);
        for (var n = 0; n < e.length; n++) if (n in e && e[n] === t) return n;
        return -1;
      },
  ps = Array.prototype.forEach
    ? function (e, t, n) {
        Array.prototype.forEach.call(e, t, n);
      }
    : function (e, t, n) {
        for (
          var r = e.length, i = typeof e == "string" ? e.split("") : e, s = 0;
          s < r;
          s++
        )
          s in i && t.call(n, i[s], s, e);
      };
function hh(e) {
  t: {
    for (
      var t = uh,
        n = e.length,
        r = typeof e == "string" ? e.split("") : e,
        i = 0;
      i < n;
      i++
    )
      if (i in r && t.call(void 0, r[i], i, e)) {
        t = i;
        break t;
      }
    t = -1;
  }
  return 0 > t ? null : typeof e == "string" ? e.charAt(t) : e[t];
}
function gs(e) {
  return Array.prototype.concat.apply([], arguments);
}
function fr(e) {
  var t = e.length;
  if (0 < t) {
    for (var n = Array(t), r = 0; r < t; r++) n[r] = e[r];
    return n;
  }
  return [];
}
function nn(e) {
  return /^[\s\xa0]*$/.test(e);
}
var ms = String.prototype.trim
  ? function (e) {
      return e.trim();
    }
  : function (e) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1];
    };
function Y(e, t) {
  return e.indexOf(t) != -1;
}
function dr(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
var X;
t: {
  if (((pr = E.navigator), pr && ((gr = pr.userAgent), gr))) {
    X = gr;
    break t;
  }
  X = "";
}
var pr, gr;
function mr(e, t, n) {
  for (var r in e) t.call(n, e[r], r, e);
}
function ys(e) {
  var t = {};
  for (var n in e) t[n] = e[n];
  return t;
}
var vs =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function ws(e, t) {
  for (var n, r, i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r) e[n] = r[n];
    for (var s = 0; s < vs.length; s++)
      (n = vs[s]), Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
}
function yr(e) {
  return yr[" "](e), e;
}
yr[" "] = tn;
function fh(e) {
  var t = lh;
  return Object.prototype.hasOwnProperty.call(t, 9) ? t[9] : (t[9] = e(9));
}
var dh = Y(X, "Opera"),
  Ut = Y(X, "Trident") || Y(X, "MSIE"),
  Es = Y(X, "Edge"),
  vr = Es || Ut,
  Ts =
    Y(X, "Gecko") &&
    !(Y(X.toLowerCase(), "webkit") && !Y(X, "Edge")) &&
    !(Y(X, "Trident") || Y(X, "MSIE")) &&
    !Y(X, "Edge"),
  ph = Y(X.toLowerCase(), "webkit") && !Y(X, "Edge");
function Is() {
  var e = E.document;
  return e ? e.documentMode : void 0;
}
var rn;
t: {
  if (
    ((sn = ""),
    (on = (function () {
      var e = X;
      if (Ts) return /rv:([^\);]+)(\)|;)/.exec(e);
      if (Es) return /Edge\/([\d\.]+)/.exec(e);
      if (Ut) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);
      if (ph) return /WebKit\/(\S+)/.exec(e);
      if (dh) return /(?:Version)[ \/]?(\S+)/.exec(e);
    })()),
    on && (sn = on ? on[1] : ""),
    Ut && ((an = Is()), an != null && an > parseFloat(sn)))
  ) {
    rn = String(an);
    break t;
  }
  rn = sn;
}
var sn,
  on,
  an,
  lh = {};
function gh() {
  return fh(function () {
    for (
      var e = 0,
        t = ms(String(rn)).split("."),
        n = ms("9").split("."),
        r = Math.max(t.length, n.length),
        i = 0;
      e == 0 && i < r;
      i++
    ) {
      var s = t[i] || "",
        o = n[i] || "";
      do {
        if (
          ((s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""]),
          (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""]),
          s[0].length == 0 && o[0].length == 0)
        )
          break;
        (e =
          dr(
            s[1].length == 0 ? 0 : parseInt(s[1], 10),
            o[1].length == 0 ? 0 : parseInt(o[1], 10)
          ) ||
          dr(s[2].length == 0, o[2].length == 0) ||
          dr(s[2], o[2])),
          (s = s[3]),
          (o = o[3]);
      } while (e == 0);
    }
    return 0 <= e;
  });
}
var wr;
E.document && Ut
  ? ((Er = Is()), (wr = Er || parseInt(rn, 10) || void 0))
  : (wr = void 0);
var Er,
  mh = wr,
  yh = (function () {
    if (!E.addEventListener || !Object.defineProperty) return !1;
    var e = !1,
      t = Object.defineProperty({}, "passive", {
        get: function () {
          e = !0;
        },
      });
    try {
      E.addEventListener("test", tn, t), E.removeEventListener("test", tn, t);
    } catch (n) {}
    return e;
  })();
function G(e, t) {
  (this.type = e), (this.g = this.target = t), (this.defaultPrevented = !1);
}
G.prototype.h = function () {
  this.defaultPrevented = !0;
};
function de(e, t) {
  if (
    (G.call(this, e ? e.type : ""),
    (this.relatedTarget = this.g = this.target = null),
    (this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
        0),
    (this.key = ""),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.state = null),
    (this.pointerId = 0),
    (this.pointerType = ""),
    (this.i = null),
    e)
  ) {
    var n = (this.type = e.type),
      r =
        e.changedTouches && e.changedTouches.length
          ? e.changedTouches[0]
          : null;
    if (
      ((this.target = e.target || e.srcElement),
      (this.g = t),
      (t = e.relatedTarget))
    ) {
      if (Ts) {
        t: {
          try {
            yr(t.nodeName);
            var i = !0;
            break t;
          } catch (s) {}
          i = !1;
        }
        i || (t = null);
      }
    } else
      n == "mouseover"
        ? (t = e.fromElement)
        : n == "mouseout" && (t = e.toElement);
    (this.relatedTarget = t),
      r
        ? ((this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX),
          (this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY),
          (this.screenX = r.screenX || 0),
          (this.screenY = r.screenY || 0))
        : ((this.clientX = e.clientX !== void 0 ? e.clientX : e.pageX),
          (this.clientY = e.clientY !== void 0 ? e.clientY : e.pageY),
          (this.screenX = e.screenX || 0),
          (this.screenY = e.screenY || 0)),
      (this.button = e.button),
      (this.key = e.key || ""),
      (this.ctrlKey = e.ctrlKey),
      (this.altKey = e.altKey),
      (this.shiftKey = e.shiftKey),
      (this.metaKey = e.metaKey),
      (this.pointerId = e.pointerId || 0),
      (this.pointerType =
        typeof e.pointerType == "string"
          ? e.pointerType
          : vh[e.pointerType] || ""),
      (this.state = e.state),
      (this.i = e),
      e.defaultPrevented && de.Z.h.call(this);
  }
}
$(de, G);
var vh = { 2: "touch", 3: "pen", 4: "mouse" };
de.prototype.h = function () {
  de.Z.h.call(this);
  var e = this.i;
  e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
};
var pe = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  wh = 0;
function Eh(e, t, n, r, i) {
  (this.listener = e),
    (this.proxy = null),
    (this.src = t),
    (this.type = n),
    (this.capture = !!r),
    (this.ia = i),
    (this.key = ++wh),
    (this.ca = this.fa = !1);
}
function cn(e) {
  (e.ca = !0),
    (e.listener = null),
    (e.proxy = null),
    (e.src = null),
    (e.ia = null);
}
function un(e) {
  (this.src = e), (this.g = {}), (this.h = 0);
}
un.prototype.add = function (e, t, n, r, i) {
  var s = e.toString();
  (e = this.g[s]), e || ((e = this.g[s] = []), this.h++);
  var o = Tr(e, t, r, i);
  return (
    -1 < o
      ? ((t = e[o]), n || (t.fa = !1))
      : ((t = new Eh(t, this.src, s, !!r, i)), (t.fa = n), e.push(t)),
    t
  );
};
function Ir(e, t) {
  var n = t.type;
  if (n in e.g) {
    var r = e.g[n],
      i = ds(r, t),
      s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
      s && (cn(t), e.g[n].length == 0 && (delete e.g[n], e.h--));
  }
}
function Tr(e, t, n, r) {
  for (var i = 0; i < e.length; ++i) {
    var s = e[i];
    if (!s.ca && s.listener == t && s.capture == !!n && s.ia == r) return i;
  }
  return -1;
}
var Sr = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Ar = {};
function Ss(e, t, n, r, i) {
  if (r && r.once) return bs(e, t, n, r, i);
  if (Array.isArray(t)) {
    for (var s = 0; s < t.length; s++) Ss(e, t[s], n, r, i);
    return null;
  }
  return (
    (n = br(n)),
    e && e[pe] ? e.N(t, n, fe(r) ? !!r.capture : !!r, i) : As(e, t, n, !1, r, i)
  );
}
function As(e, t, n, r, i, s) {
  if (!t) throw Error("Invalid event type");
  var o = fe(i) ? !!i.capture : !!i,
    a = Nr(e);
  if ((a || (e[Sr] = a = new un(e)), (n = a.add(t, n, r, o, s)), n.proxy))
    return n;
  if (
    ((r = Th()),
    (n.proxy = r),
    (r.src = e),
    (r.listener = n),
    e.addEventListener)
  )
    yh || (i = o),
      i === void 0 && (i = !1),
      e.addEventListener(t.toString(), r, i);
  else if (e.attachEvent) e.attachEvent(Ns(t.toString()), r);
  else if (e.addListener && e.removeListener) e.addListener(r);
  else throw Error("addEventListener and attachEvent are unavailable.");
  return n;
}
function Th() {
  function e(n) {
    return t.call(e.src, e.listener, n);
  }
  var t = Ih;
  return e;
}
function bs(e, t, n, r, i) {
  if (Array.isArray(t)) {
    for (var s = 0; s < t.length; s++) bs(e, t[s], n, r, i);
    return null;
  }
  return (
    (n = br(n)),
    e && e[pe] ? e.O(t, n, fe(r) ? !!r.capture : !!r, i) : As(e, t, n, !0, r, i)
  );
}
function Ds(e, t, n, r, i) {
  if (Array.isArray(t)) for (var s = 0; s < t.length; s++) Ds(e, t[s], n, r, i);
  else
    (r = fe(r) ? !!r.capture : !!r),
      (n = br(n)),
      e && e[pe]
        ? ((e = e.i),
          (t = String(t).toString()),
          t in e.g &&
            ((s = e.g[t]),
            (n = Tr(s, n, r, i)),
            -1 < n &&
              (cn(s[n]),
              Array.prototype.splice.call(s, n, 1),
              s.length == 0 && (delete e.g[t], e.h--))))
        : e &&
          (e = Nr(e)) &&
          ((t = e.g[t.toString()]),
          (e = -1),
          t && (e = Tr(t, n, r, i)),
          (n = -1 < e ? t[e] : null) && Dr(n));
}
function Dr(e) {
  if (typeof e != "number" && e && !e.ca) {
    var t = e.src;
    if (t && t[pe]) Ir(t.i, e);
    else {
      var n = e.type,
        r = e.proxy;
      t.removeEventListener
        ? t.removeEventListener(n, r, e.capture)
        : t.detachEvent
        ? t.detachEvent(Ns(n), r)
        : t.addListener && t.removeListener && t.removeListener(r),
        (n = Nr(t))
          ? (Ir(n, e), n.h == 0 && ((n.src = null), (t[Sr] = null)))
          : cn(e);
    }
  }
}
function Ns(e) {
  return e in Ar ? Ar[e] : (Ar[e] = "on" + e);
}
function Ih(e, t) {
  if (e.ca) e = !0;
  else {
    t = new de(t, this);
    var n = e.listener,
      r = e.ia || e.src;
    e.fa && Dr(e), (e = n.call(r, t));
  }
  return e;
}
function Nr(e) {
  return (e = e[Sr]), e instanceof un ? e : null;
}
var Cr = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function br(e) {
  return typeof e == "function"
    ? e
    : (e[Cr] ||
        (e[Cr] = function (t) {
          return e.handleEvent(t);
        }),
      e[Cr]);
}
function F() {
  lt.call(this), (this.i = new un(this)), (this.P = this), (this.I = null);
}
$(F, lt);
F.prototype[pe] = !0;
F.prototype.removeEventListener = function (e, t, n, r) {
  Ds(this, e, t, n, r);
};
function B(e, t) {
  var n,
    r = e.I;
  if (r) for (n = []; r; r = r.I) n.push(r);
  if (((e = e.P), (r = t.type || t), typeof t == "string")) t = new G(t, e);
  else if (t instanceof G) t.target = t.target || e;
  else {
    var i = t;
    (t = new G(r, e)), ws(t, i);
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (t.g = n[s]);
      i = hn(o, r, !0, t) && i;
    }
  if (
    ((o = t.g = e), (i = hn(o, r, !0, t) && i), (i = hn(o, r, !1, t) && i), n)
  )
    for (s = 0; s < n.length; s++) (o = t.g = n[s]), (i = hn(o, r, !1, t) && i);
}
F.prototype.M = function () {
  if ((F.Z.M.call(this), this.i)) {
    var e = this.i,
      t;
    for (t in e.g) {
      for (var n = e.g[t], r = 0; r < n.length; r++) cn(n[r]);
      delete e.g[t], e.h--;
    }
  }
  this.I = null;
};
F.prototype.N = function (e, t, n, r) {
  return this.i.add(String(e), t, !1, n, r);
};
F.prototype.O = function (e, t, n, r) {
  return this.i.add(String(e), t, !0, n, r);
};
function hn(e, t, n, r) {
  if (((t = e.i.g[String(t)]), !t)) return !0;
  t = t.concat();
  for (var i = !0, s = 0; s < t.length; ++s) {
    var o = t[s];
    if (o && !o.ca && o.capture == n) {
      var a = o.listener,
        c = o.ia || o.src;
      o.fa && Ir(e.i, o), (i = a.call(c, r) !== !1 && i);
    }
  }
  return i && !r.defaultPrevented;
}
var Rr = E.JSON.stringify;
function Sh() {
  var e = Cs,
    t = null;
  return (
    e.g && ((t = e.g), (e.g = e.g.next), e.g || (e.h = null), (t.next = null)),
    t
  );
}
var Ah = (function () {
    function e() {
      this.h = this.g = null;
    }
    return (
      (e.prototype.add = function (t, n) {
        var r = Rs.get();
        r.set(t, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
      }),
      e
    );
  })(),
  Rs = new ((function () {
    function e(t, n) {
      (this.i = t), (this.j = n), (this.h = 0), (this.g = null);
    }
    return (
      (e.prototype.get = function () {
        var t;
        return (
          0 < this.h
            ? (this.h--, (t = this.g), (this.g = t.next), (t.next = null))
            : (t = this.i()),
          t
        );
      }),
      e
    );
  })())(
    function () {
      return new bh();
    },
    function (e) {
      return e.reset();
    }
  ),
  bh = (function () {
    function e() {
      this.next = this.g = this.h = null;
    }
    return (
      (e.prototype.set = function (t, n) {
        (this.h = t), (this.g = n), (this.next = null);
      }),
      (e.prototype.reset = function () {
        this.next = this.g = this.h = null;
      }),
      e
    );
  })();
function Nh(e) {
  E.setTimeout(function () {
    throw e;
  }, 0);
}
function Lr(e, t) {
  _r || Dh(), kr || (_r(), (kr = !0)), Cs.add(e, t);
}
var _r;
function Dh() {
  var e = E.Promise.resolve(void 0);
  _r = function () {
    e.then(Ch);
  };
}
var kr = !1,
  Cs = new Ah();
function Ch() {
  for (var e; (e = Sh()); ) {
    try {
      e.h.call(e.g);
    } catch (n) {
      Nh(n);
    }
    var t = Rs;
    t.j(e), 100 > t.h && (t.h++, (e.next = t.g), (t.g = e));
  }
  kr = !1;
}
function ln(e, t) {
  F.call(this),
    (this.h = e || 1),
    (this.g = t || E),
    (this.j = j(this.kb, this)),
    (this.l = Date.now());
}
$(ln, F);
g = ln.prototype;
g.da = !1;
g.S = null;
g.kb = function () {
  if (this.da) {
    var e = Date.now() - this.l;
    0 < e && e < 0.8 * this.h
      ? (this.S = this.g.setTimeout(this.j, this.h - e))
      : (this.S && (this.g.clearTimeout(this.S), (this.S = null)),
        B(this, "tick"),
        this.da && (xr(this), this.start()));
  }
};
g.start = function () {
  (this.da = !0),
    this.S ||
      ((this.S = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function xr(e) {
  (e.da = !1), e.S && (e.g.clearTimeout(e.S), (e.S = null));
}
g.M = function () {
  ln.Z.M.call(this), xr(this), delete this.g;
};
function Or(e, t, n) {
  if (typeof e == "function") n && (e = j(e, n));
  else if (e && typeof e.handleEvent == "function") e = j(e.handleEvent, e);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(t) ? -1 : E.setTimeout(e, t || 0);
}
function _s(e) {
  e.g = Or(function () {
    (e.g = null), e.i && ((e.i = !1), _s(e));
  }, e.j);
  var t = e.h;
  (e.h = null), e.m.apply(null, t);
}
var Rh = (function (e) {
  nh(t, e);
  function t(n, r) {
    var i = e.call(this) || this;
    return (i.m = n), (i.j = r), (i.h = null), (i.i = !1), (i.g = null), i;
  }
  return (
    (t.prototype.l = function (n) {
      (this.h = arguments), this.g ? (this.i = !0) : _s(this);
    }),
    (t.prototype.M = function () {
      e.prototype.M.call(this),
        this.g &&
          (E.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null));
    }),
    t
  );
})(lt);
function ge(e) {
  lt.call(this), (this.h = e), (this.g = {});
}
$(ge, lt);
var ks = [];
function Ls(e, t, n, r) {
  Array.isArray(n) || (n && (ks[0] = n.toString()), (n = ks));
  for (var i = 0; i < n.length; i++) {
    var s = Ss(t, n[i], r || e.handleEvent, !1, e.h || e);
    if (!s) break;
    e.g[s.key] = s;
  }
}
function xs(e) {
  mr(
    e.g,
    function (t, n) {
      this.g.hasOwnProperty(n) && Dr(t);
    },
    e
  ),
    (e.g = {});
}
ge.prototype.M = function () {
  ge.Z.M.call(this), xs(this);
};
ge.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
function fn() {
  this.g = !0;
}
fn.prototype.Aa = function () {
  this.g = !1;
};
function _h(e, t, n, r, i, s) {
  e.info(function () {
    if (e.g)
      if (s)
        for (var o = "", a = s.split("&"), c = 0; c < a.length; c++) {
          var u = a[c].split("=");
          if (1 < u.length) {
            var h = u[0];
            u = u[1];
            var l = h.split("_");
            o =
              2 <= l.length && l[1] == "type"
                ? o + (h + "=" + u + "&")
                : o + (h + "=redacted&");
          }
        }
      else o = null;
    else o = s;
    return (
      "XMLHTTP REQ (" +
      r +
      ") [attempt " +
      i +
      "]: " +
      t +
      `
` +
      n +
      `
` +
      o
    );
  });
}
function kh(e, t, n, r, i, s, o) {
  e.info(function () {
    return (
      "XMLHTTP RESP (" +
      r +
      ") [ attempt " +
      i +
      "]: " +
      t +
      `
` +
      n +
      `
` +
      s +
      " " +
      o
    );
  });
}
function qt(e, t, n, r) {
  e.info(function () {
    return "XMLHTTP TEXT (" + t + "): " + Lh(e, n) + (r ? " " + r : "");
  });
}
function xh(e, t) {
  e.info(function () {
    return "TIMEOUT: " + t;
  });
}
fn.prototype.info = function () {};
function Lh(e, t) {
  if (!e.g) return t;
  if (!t) return null;
  try {
    var n = JSON.parse(t);
    if (n) {
      for (e = 0; e < n.length; e++)
        if (Array.isArray(n[e])) {
          var r = n[e];
          if (!(2 > r.length)) {
            var i = r[1];
            if (Array.isArray(i) && !(1 > i.length)) {
              var s = i[0];
              if (s != "noop" && s != "stop" && s != "close")
                for (var o = 1; o < i.length; o++) i[o] = "";
            }
          }
        }
    }
    return Rr(n);
  } catch (a) {
    return t;
  }
}
var Et = {},
  Os = null;
function dn() {
  return (Os = Os || new F());
}
Et.Ma = "serverreachability";
function Ms(e) {
  G.call(this, Et.Ma, e);
}
$(Ms, G);
function me(e) {
  var t = dn();
  B(t, new Ms(t, e));
}
Et.STAT_EVENT = "statevent";
function Vs(e, t) {
  G.call(this, Et.STAT_EVENT, e), (this.stat = t);
}
$(Vs, G);
function Q(e) {
  var t = dn();
  B(t, new Vs(t, e));
}
Et.Na = "timingevent";
function Ps(e, t) {
  G.call(this, Et.Na, e), (this.size = t);
}
$(Ps, G);
function ye(e, t) {
  if (typeof e != "function")
    throw Error("Fn must not be null and must be a function");
  return E.setTimeout(function () {
    e();
  }, t);
}
var pn = {
    NO_ERROR: 0,
    lb: 1,
    yb: 2,
    xb: 3,
    sb: 4,
    wb: 5,
    zb: 6,
    Ja: 7,
    TIMEOUT: 8,
    Cb: 9,
  },
  Fs = {
    qb: "complete",
    Mb: "success",
    Ka: "error",
    Ja: "abort",
    Eb: "ready",
    Fb: "readystatechange",
    TIMEOUT: "timeout",
    Ab: "incrementaldata",
    Db: "progress",
    tb: "downloadprogress",
    Ub: "uploadprogress",
  };
function Mr() {}
Mr.prototype.h = null;
function Us(e) {
  return e.h || (e.h = e.i());
}
function qs() {}
var ve = { OPEN: "a", pb: "b", Ka: "c", Bb: "d" };
function Vr() {
  G.call(this, "d");
}
$(Vr, G);
function Pr() {
  G.call(this, "c");
}
$(Pr, G);
var Fr;
function gn() {}
$(gn, Mr);
gn.prototype.g = function () {
  return new XMLHttpRequest();
};
gn.prototype.i = function () {
  return {};
};
Fr = new gn();
function we(e, t, n, r) {
  (this.l = e),
    (this.j = t),
    (this.m = n),
    (this.X = r || 1),
    (this.V = new ge(this)),
    (this.P = Oh),
    (e = vr ? 125 : void 0),
    (this.W = new ln(e)),
    (this.H = null),
    (this.i = !1),
    (this.s = this.A = this.v = this.K = this.F = this.Y = this.B = null),
    (this.D = []),
    (this.g = null),
    (this.C = 0),
    (this.o = this.u = null),
    (this.N = -1),
    (this.I = !1),
    (this.O = 0),
    (this.L = null),
    (this.aa = this.J = this.$ = this.U = !1),
    (this.h = new js());
}
function js() {
  (this.i = null), (this.g = ""), (this.h = !1);
}
var Oh = 45e3,
  Ur = {},
  mn = {};
g = we.prototype;
g.setTimeout = function (e) {
  this.P = e;
};
function qr(e, t, n) {
  (e.K = 1), (e.v = yn(at(t))), (e.s = n), (e.U = !0), $s(e, null);
}
function $s(e, t) {
  (e.F = Date.now()), Ee(e), (e.A = at(e.v));
  var n = e.A,
    r = e.X;
  Array.isArray(r) || (r = [String(r)]),
    Bs(n.h, "t", r),
    (e.C = 0),
    (n = e.l.H),
    (e.h = new js()),
    (e.g = Hs(e.l, n ? t : null, !e.s)),
    0 < e.O && (e.L = new Rh(j(e.Ia, e, e.g), e.O)),
    Ls(e.V, e.g, "readystatechange", e.gb),
    (t = e.H ? ys(e.H) : {}),
    e.s
      ? (e.u || (e.u = "POST"),
        (t["Content-Type"] = "application/x-www-form-urlencoded"),
        e.g.ea(e.A, e.u, e.s, t))
      : ((e.u = "GET"), e.g.ea(e.A, e.u, null, t)),
    me(1),
    _h(e.j, e.u, e.A, e.m, e.X, e.s);
}
g.gb = function (e) {
  e = e.target;
  var t = this.L;
  t && ct(e) == 3 ? t.l() : this.Ia(e);
};
g.Ia = function (e) {
  try {
    if (e == this.g)
      t: {
        var t = ct(this.g),
          n = this.g.Da(),
          r = this.g.ba();
        if (
          !(3 > t) &&
          (t != 3 || vr || (this.g && (this.h.h || this.g.ga() || Gs(this.g))))
        ) {
          this.I || t != 4 || n == 7 || (n == 8 || 0 >= r ? me(3) : me(2)),
            vn(this);
          var i = this.g.ba();
          this.N = i;
          e: if (Ks(this)) {
            var s = Gs(this.g);
            e = "";
            var o = s.length,
              a = ct(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder == "undefined") {
                Tt(this), Te(this);
                var c = "";
                break e;
              }
              this.h.i = new E.TextDecoder();
            }
            for (n = 0; n < o; n++)
              (this.h.h = !0),
                (e += this.h.i.decode(s[n], { stream: a && n == o - 1 }));
            s.splice(0, o), (this.h.g += e), (this.C = 0), (c = this.h.g);
          } else c = this.g.ga();
          if (
            ((this.i = i == 200),
            kh(this.j, this.u, this.A, this.m, this.X, t, i),
            this.i)
          ) {
            if (this.$ && !this.J) {
              e: {
                if (this.g) {
                  var u,
                    h = this.g;
                  if (
                    (u = h.g
                      ? h.g.getResponseHeader("X-HTTP-Initial-Response")
                      : null) &&
                    !nn(u)
                  ) {
                    var l = u;
                    break e;
                  }
                }
                l = null;
              }
              if ((i = l))
                qt(
                  this.j,
                  this.m,
                  i,
                  "Initial handshake response via X-HTTP-Initial-Response"
                ),
                  (this.J = !0),
                  jr(this, i);
              else {
                (this.i = !1), (this.o = 3), Q(12), Tt(this), Te(this);
                break t;
              }
            }
            this.U
              ? (zs(this, t, c),
                vr &&
                  this.i &&
                  t == 3 &&
                  (Ls(this.V, this.W, "tick", this.fb), this.W.start()))
              : (qt(this.j, this.m, c, null), jr(this, c)),
              t == 4 && Tt(this),
              this.i &&
                !this.I &&
                (t == 4 ? Ws(this.l, this) : ((this.i = !1), Ee(this)));
          } else
            i == 400 && 0 < c.indexOf("Unknown SID")
              ? ((this.o = 3), Q(12))
              : ((this.o = 0), Q(13)),
              Tt(this),
              Te(this);
        }
      }
  } catch (p) {
  } finally {
  }
};
function Ks(e) {
  return e.g ? e.u == "GET" && e.K != 2 && e.l.Ba : !1;
}
function zs(e, t, n) {
  for (var r = !0, i; !e.I && e.C < n.length; )
    if (((i = Mh(e, n)), i == mn)) {
      t == 4 && ((e.o = 4), Q(14), (r = !1)),
        qt(e.j, e.m, null, "[Incomplete Response]");
      break;
    } else if (i == Ur) {
      (e.o = 4), Q(15), qt(e.j, e.m, n, "[Invalid Chunk]"), (r = !1);
      break;
    } else qt(e.j, e.m, i, null), jr(e, i);
  Ks(e) && i != mn && i != Ur && ((e.h.g = ""), (e.C = 0)),
    t != 4 || n.length != 0 || e.h.h || ((e.o = 1), Q(16), (r = !1)),
    (e.i = e.i && r),
    r
      ? 0 < n.length &&
        !e.aa &&
        ((e.aa = !0),
        (t = e.l),
        t.g == e &&
          t.$ &&
          !t.L &&
          (t.h.info(
            "Great, no buffering proxy detected. Bytes received: " + n.length
          ),
          $r(t),
          (t.L = !0),
          Q(11)))
      : (qt(e.j, e.m, n, "[Invalid Chunked Response]"), Tt(e), Te(e));
}
g.fb = function () {
  if (this.g) {
    var e = ct(this.g),
      t = this.g.ga();
    this.C < t.length &&
      (vn(this), zs(this, e, t), this.i && e != 4 && Ee(this));
  }
};
function Mh(e, t) {
  var n = e.C,
    r = t.indexOf(
      `
`,
      n
    );
  return r == -1
    ? mn
    : ((n = Number(t.substring(n, r))),
      isNaN(n)
        ? Ur
        : ((r += 1),
          r + n > t.length ? mn : ((t = t.substr(r, n)), (e.C = r + n), t)));
}
g.cancel = function () {
  (this.I = !0), Tt(this);
};
function Ee(e) {
  (e.Y = Date.now() + e.P), Ys(e, e.P);
}
function Ys(e, t) {
  if (e.B != null) throw Error("WatchDog timer not null");
  e.B = ye(j(e.eb, e), t);
}
function vn(e) {
  e.B && (E.clearTimeout(e.B), (e.B = null));
}
g.eb = function () {
  this.B = null;
  var e = Date.now();
  0 <= e - this.Y
    ? (xh(this.j, this.A),
      this.K != 2 && (me(3), Q(17)),
      Tt(this),
      (this.o = 2),
      Te(this))
    : Ys(this, this.Y - e);
};
function Te(e) {
  e.l.G == 0 || e.I || Ws(e.l, e);
}
function Tt(e) {
  vn(e);
  var t = e.L;
  t && typeof t.na == "function" && t.na(),
    (e.L = null),
    xr(e.W),
    xs(e.V),
    e.g && ((t = e.g), (e.g = null), t.abort(), t.na());
}
function jr(e, t) {
  try {
    var n = e.l;
    if (n.G != 0 && (n.g == e || Br(n.i, e))) {
      if (((n.I = e.N), !e.J && Br(n.i, e) && n.G == 3)) {
        try {
          var r = n.Ca.g.parse(t);
        } catch (x) {
          r = null;
        }
        if (Array.isArray(r) && r.length == 3) {
          var i = r;
          if (i[0] == 0)
            t: if (!n.u) {
              if (n.g)
                if (n.g.F + 3e3 < e.F) Tn(n), wn(n);
                else break t;
              zr(n), Q(18);
            } else
              (n.ta = i[1]),
                0 < n.ta - n.U &&
                  37500 > i[2] &&
                  n.N &&
                  n.A == 0 &&
                  !n.v &&
                  (n.v = ye(j(n.ab, n), 6e3));
          if (1 >= Xs(n.i) && n.ka) {
            try {
              n.ka();
            } catch (x) {}
            n.ka = void 0;
          }
        } else It(n, 11);
      } else if (((e.J || n.g == e) && Tn(n), !nn(t)))
        for (i = n.Ca.g.parse(t), t = 0; t < i.length; t++) {
          var s = i[t];
          if (((n.U = s[0]), (s = s[1]), n.G == 2))
            if (s[0] == "c") {
              (n.J = s[1]), (n.la = s[2]);
              var o = s[3];
              o != null && ((n.ma = o), n.h.info("VER=" + n.ma));
              var a = s[4];
              a != null && ((n.za = a), n.h.info("SVER=" + n.za));
              var c = s[5];
              c != null &&
                typeof c == "number" &&
                0 < c &&
                ((r = 1.5 * c),
                (n.K = r),
                n.h.info("backChannelRequestTimeoutMs_=" + r)),
                (r = n);
              var u = e.g;
              if (u) {
                var h = u.g
                  ? u.g.getResponseHeader("X-Client-Wire-Protocol")
                  : null;
                if (h) {
                  var l = r.i;
                  !l.g &&
                    (Y(h, "spdy") || Y(h, "quic") || Y(h, "h2")) &&
                    ((l.j = l.l),
                    (l.g = new Set()),
                    l.h && (Hr(l, l.h), (l.h = null)));
                }
                if (r.D) {
                  var p = u.g
                    ? u.g.getResponseHeader("X-HTTP-Session-Id")
                    : null;
                  p && ((r.sa = p), L(r.F, r.D, p));
                }
              }
              (n.G = 3),
                n.j && n.j.xa(),
                n.$ &&
                  ((n.O = Date.now() - e.F),
                  n.h.info("Handshake RTT: " + n.O + "ms")),
                (r = n);
              var m = e;
              if (((r.oa = Zs(r, r.H ? r.la : null, r.W)), m.J)) {
                Qs(r.i, m);
                var I = m,
                  C = r.K;
                C && I.setTimeout(C), I.B && (vn(I), Ee(I)), (r.g = m);
              } else Js(r);
              0 < n.l.length && En(n);
            } else (s[0] != "stop" && s[0] != "close") || It(n, 7);
          else
            n.G == 3 &&
              (s[0] == "stop" || s[0] == "close"
                ? s[0] == "stop"
                  ? It(n, 7)
                  : Kr(n)
                : s[0] != "noop" && n.j && n.j.wa(s),
              (n.A = 0));
        }
    }
    me(4);
  } catch (x) {}
}
function Vh(e) {
  if (e.R && typeof e.R == "function") return e.R();
  if (typeof e == "string") return e.split("");
  if (hr(e)) {
    for (var t = [], n = e.length, r = 0; r < n; r++) t.push(e[r]);
    return t;
  }
  (t = []), (n = 0);
  for (r in e) t[n++] = e[r];
  return t;
}
function Gr(e, t) {
  if (e.forEach && typeof e.forEach == "function") e.forEach(t, void 0);
  else if (hr(e) || typeof e == "string") ps(e, t, void 0);
  else {
    if (e.T && typeof e.T == "function") var n = e.T();
    else if (e.R && typeof e.R == "function") n = void 0;
    else if (hr(e) || typeof e == "string") {
      n = [];
      for (var r = e.length, i = 0; i < r; i++) n.push(i);
    } else for (i in ((n = []), (r = 0), e)) n[r++] = i;
    (r = Vh(e)), (i = r.length);
    for (var s = 0; s < i; s++) t.call(void 0, r[s], n && n[s], e);
  }
}
function jt(e, t) {
  (this.h = {}), (this.g = []), (this.i = 0);
  var n = arguments.length;
  if (1 < n) {
    if (n % 2) throw Error("Uneven number of arguments");
    for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]);
  } else if (e)
    if (e instanceof jt)
      for (n = e.T(), r = 0; r < n.length; r++) this.set(n[r], e.get(n[r]));
    else for (r in e) this.set(r, e[r]);
}
g = jt.prototype;
g.R = function () {
  Wr(this);
  for (var e = [], t = 0; t < this.g.length; t++) e.push(this.h[this.g[t]]);
  return e;
};
g.T = function () {
  return Wr(this), this.g.concat();
};
function Wr(e) {
  if (e.i != e.g.length) {
    for (var t = 0, n = 0; t < e.g.length; ) {
      var r = e.g[t];
      St(e.h, r) && (e.g[n++] = r), t++;
    }
    e.g.length = n;
  }
  if (e.i != e.g.length) {
    var i = {};
    for (n = t = 0; t < e.g.length; )
      (r = e.g[t]), St(i, r) || ((e.g[n++] = r), (i[r] = 1)), t++;
    e.g.length = n;
  }
}
g.get = function (e, t) {
  return St(this.h, e) ? this.h[e] : t;
};
g.set = function (e, t) {
  St(this.h, e) || (this.i++, this.g.push(e)), (this.h[e] = t);
};
g.forEach = function (e, t) {
  for (var n = this.T(), r = 0; r < n.length; r++) {
    var i = n[r],
      s = this.get(i);
    e.call(t, s, i, this);
  }
};
function St(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var to =
  /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Ph(e, t) {
  if (e) {
    e = e.split("&");
    for (var n = 0; n < e.length; n++) {
      var r = e[n].indexOf("="),
        i = null;
      if (0 <= r) {
        var s = e[n].substring(0, r);
        i = e[n].substring(r + 1);
      } else s = e[n];
      t(s, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
    }
  }
}
function At(e, t) {
  if (
    ((this.i = this.s = this.j = ""),
    (this.m = null),
    (this.o = this.l = ""),
    (this.g = !1),
    e instanceof At)
  ) {
    (this.g = t !== void 0 ? t : e.g),
      In(this, e.j),
      (this.s = e.s),
      Sn(this, e.i),
      An(this, e.m),
      (this.l = e.l),
      (t = e.h);
    var n = new Se();
    (n.i = t.i),
      t.g && ((n.g = new jt(t.g)), (n.h = t.h)),
      eo(this, n),
      (this.o = e.o);
  } else
    e && (n = String(e).match(to))
      ? ((this.g = !!t),
        In(this, n[1] || "", !0),
        (this.s = Ie(n[2] || "")),
        Sn(this, n[3] || "", !0),
        An(this, n[4]),
        (this.l = Ie(n[5] || "", !0)),
        eo(this, n[6] || "", !0),
        (this.o = Ie(n[7] || "")))
      : ((this.g = !!t), (this.h = new Se(null, this.g)));
}
At.prototype.toString = function () {
  var e = [],
    t = this.j;
  t && e.push(Ae(t, no, !0), ":");
  var n = this.i;
  return (
    (n || t == "file") &&
      (e.push("//"),
      (t = this.s) && e.push(Ae(t, no, !0), "@"),
      e.push(
        encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
      ),
      (n = this.m),
      n != null && e.push(":", String(n))),
    (n = this.l) &&
      (this.i && n.charAt(0) != "/" && e.push("/"),
      e.push(Ae(n, n.charAt(0) == "/" ? Uh : Fh, !0))),
    (n = this.h.toString()) && e.push("?", n),
    (n = this.o) && e.push("#", Ae(n, qh)),
    e.join("")
  );
};
function at(e) {
  return new At(e);
}
function In(e, t, n) {
  (e.j = n ? Ie(t, !0) : t), e.j && (e.j = e.j.replace(/:$/, ""));
}
function Sn(e, t, n) {
  e.i = n ? Ie(t, !0) : t;
}
function An(e, t) {
  if (t) {
    if (((t = Number(t)), isNaN(t) || 0 > t))
      throw Error("Bad port number " + t);
    e.m = t;
  } else e.m = null;
}
function eo(e, t, n) {
  t instanceof Se
    ? ((e.h = t), $h(e.h, e.g))
    : (n || (t = Ae(t, jh)), (e.h = new Se(t, e.g)));
}
function L(e, t, n) {
  e.h.set(t, n);
}
function yn(e) {
  return (
    L(
      e,
      "zx",
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(
          36
        )
    ),
    e
  );
}
function Bh(e) {
  return e instanceof At ? at(e) : new At(e, void 0);
}
function Hh(e, t, n, r) {
  var i = new At(null, void 0);
  return e && In(i, e), t && Sn(i, t), n && An(i, n), r && (i.l = r), i;
}
function Ie(e, t) {
  return e
    ? t
      ? decodeURI(e.replace(/%25/g, "%2525"))
      : decodeURIComponent(e)
    : "";
}
function Ae(e, t, n) {
  return typeof e == "string"
    ? ((e = encodeURI(e).replace(t, Kh)),
      n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      e)
    : null;
}
function Kh(e) {
  return (
    (e = e.charCodeAt(0)),
    "%" + ((e >> 4) & 15).toString(16) + (e & 15).toString(16)
  );
}
var no = /[#\/\?@]/g,
  Fh = /[#\?:]/g,
  Uh = /[#\?]/g,
  jh = /[#\?@]/g,
  qh = /#/g;
function Se(e, t) {
  (this.h = this.g = null), (this.i = e || null), (this.j = !!t);
}
function ft(e) {
  e.g ||
    ((e.g = new jt()),
    (e.h = 0),
    e.i &&
      Ph(e.i, function (t, n) {
        e.add(decodeURIComponent(t.replace(/\+/g, " ")), n);
      }));
}
g = Se.prototype;
g.add = function (e, t) {
  ft(this), (this.i = null), (e = $t(this, e));
  var n = this.g.get(e);
  return n || this.g.set(e, (n = [])), n.push(t), (this.h += 1), this;
};
function ro(e, t) {
  ft(e),
    (t = $t(e, t)),
    St(e.g.h, t) &&
      ((e.i = null),
      (e.h -= e.g.get(t).length),
      (e = e.g),
      St(e.h, t) && (delete e.h[t], e.i--, e.g.length > 2 * e.i && Wr(e)));
}
function io(e, t) {
  return ft(e), (t = $t(e, t)), St(e.g.h, t);
}
g.forEach = function (e, t) {
  ft(this),
    this.g.forEach(function (n, r) {
      ps(
        n,
        function (i) {
          e.call(t, i, r, this);
        },
        this
      );
    }, this);
};
g.T = function () {
  ft(this);
  for (var e = this.g.R(), t = this.g.T(), n = [], r = 0; r < t.length; r++)
    for (var i = e[r], s = 0; s < i.length; s++) n.push(t[r]);
  return n;
};
g.R = function (e) {
  ft(this);
  var t = [];
  if (typeof e == "string") io(this, e) && (t = gs(t, this.g.get($t(this, e))));
  else {
    e = this.g.R();
    for (var n = 0; n < e.length; n++) t = gs(t, e[n]);
  }
  return t;
};
g.set = function (e, t) {
  return (
    ft(this),
    (this.i = null),
    (e = $t(this, e)),
    io(this, e) && (this.h -= this.g.get(e).length),
    this.g.set(e, [t]),
    (this.h += 1),
    this
  );
};
g.get = function (e, t) {
  return e ? ((e = this.R(e)), 0 < e.length ? String(e[0]) : t) : t;
};
function Bs(e, t, n) {
  ro(e, t),
    0 < n.length && ((e.i = null), e.g.set($t(e, t), fr(n)), (e.h += n.length));
}
g.toString = function () {
  if (this.i) return this.i;
  if (!this.g) return "";
  for (var e = [], t = this.g.T(), n = 0; n < t.length; n++) {
    var r = t[n],
      i = encodeURIComponent(String(r));
    r = this.R(r);
    for (var s = 0; s < r.length; s++) {
      var o = i;
      r[s] !== "" && (o += "=" + encodeURIComponent(String(r[s]))), e.push(o);
    }
  }
  return (this.i = e.join("&"));
};
function $t(e, t) {
  return (t = String(t)), e.j && (t = t.toLowerCase()), t;
}
function $h(e, t) {
  t &&
    !e.j &&
    (ft(e),
    (e.i = null),
    e.g.forEach(function (n, r) {
      var i = r.toLowerCase();
      r != i && (ro(this, r), Bs(this, i, n));
    }, e)),
    (e.j = t);
}
var zh = (function () {
  function e(t, n) {
    (this.h = t), (this.g = n);
  }
  return e;
})();
function so(e) {
  (this.l = e || Gh),
    E.PerformanceNavigationTiming
      ? ((e = E.performance.getEntriesByType("navigation")),
        (e =
          0 < e.length &&
          (e[0].nextHopProtocol == "hq" || e[0].nextHopProtocol == "h2")))
      : (e = !!(E.g && E.g.Ea && E.g.Ea() && E.g.Ea().Zb)),
    (this.j = e ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = []);
}
var Gh = 10;
function oo(e) {
  return e.h ? !0 : e.g ? e.g.size >= e.j : !1;
}
function Xs(e) {
  return e.h ? 1 : e.g ? e.g.size : 0;
}
function Br(e, t) {
  return e.h ? e.h == t : e.g ? e.g.has(t) : !1;
}
function Hr(e, t) {
  e.g ? e.g.add(t) : (e.h = t);
}
function Qs(e, t) {
  e.h && e.h == t ? (e.h = null) : e.g && e.g.has(t) && e.g.delete(t);
}
so.prototype.cancel = function () {
  var e, t;
  if (((this.i = ao(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    try {
      for (var n = fs(this.g.values()), r = n.next(); !r.done; r = n.next()) {
        var i = r.value;
        i.cancel();
      }
    } catch (s) {
      e = { error: s };
    } finally {
      try {
        r && !r.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
    this.g.clear();
  }
};
function ao(e) {
  var t, n;
  if (e.h != null) return e.i.concat(e.h.D);
  if (e.g != null && e.g.size !== 0) {
    var r = e.i;
    try {
      for (var i = fs(e.g.values()), s = i.next(); !s.done; s = i.next()) {
        var o = s.value;
        r = r.concat(o.D);
      }
    } catch (a) {
      t = { error: a };
    } finally {
      try {
        s && !s.done && (n = i.return) && n.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
    return r;
  }
  return fr(e.i);
}
function Yr() {}
Yr.prototype.stringify = function (e) {
  return E.JSON.stringify(e, void 0);
};
Yr.prototype.parse = function (e) {
  return E.JSON.parse(e, void 0);
};
function Wh() {
  this.g = new Yr();
}
function Yh(e, t, n) {
  var r = n || "";
  try {
    Gr(e, function (i, s) {
      var o = i;
      fe(i) && (o = Rr(i)), t.push(r + s + "=" + encodeURIComponent(o));
    });
  } catch (i) {
    throw (t.push(r + "type=" + encodeURIComponent("_badmap")), i);
  }
}
function Xh(e, t) {
  var n = new fn();
  if (E.Image) {
    var r = new Image();
    (r.onload = en(bn, n, r, "TestLoadImage: loaded", !0, t)),
      (r.onerror = en(bn, n, r, "TestLoadImage: error", !1, t)),
      (r.onabort = en(bn, n, r, "TestLoadImage: abort", !1, t)),
      (r.ontimeout = en(bn, n, r, "TestLoadImage: timeout", !1, t)),
      E.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = e);
  } else t(!1);
}
function bn(e, t, n, r, i) {
  try {
    (t.onload = null),
      (t.onerror = null),
      (t.onabort = null),
      (t.ontimeout = null),
      i(r);
  } catch (s) {}
}
function be(e) {
  (this.l = e.$b || null), (this.j = e.ib || !1);
}
$(be, Mr);
be.prototype.g = function () {
  return new Nn(this.l, this.j);
};
be.prototype.i = (function (e) {
  return function () {
    return e;
  };
})({});
function Nn(e, t) {
  F.call(this),
    (this.D = e),
    (this.u = t),
    (this.m = void 0),
    (this.readyState = Xr),
    (this.status = 0),
    (this.responseType =
      this.responseText =
      this.response =
      this.statusText =
        ""),
    (this.onreadystatechange = null),
    (this.v = new Headers()),
    (this.h = null),
    (this.C = "GET"),
    (this.B = ""),
    (this.g = !1),
    (this.A = this.j = this.l = null);
}
$(Nn, F);
var Xr = 0;
g = Nn.prototype;
g.open = function (e, t) {
  if (this.readyState != Xr)
    throw (this.abort(), Error("Error reopening a connection"));
  (this.C = e), (this.B = t), (this.readyState = 1), Ne(this);
};
g.send = function (e) {
  if (this.readyState != 1)
    throw (this.abort(), Error("need to call open() first. "));
  this.g = !0;
  var t = {
    headers: this.v,
    method: this.C,
    credentials: this.m,
    cache: void 0,
  };
  e && (t.body = e),
    (this.D || E)
      .fetch(new Request(this.B, t))
      .then(this.Va.bind(this), this.ha.bind(this));
};
g.abort = function () {
  (this.response = this.responseText = ""),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel("Request was aborted."),
    1 <= this.readyState &&
      this.g &&
      this.readyState != 4 &&
      ((this.g = !1), De(this)),
    (this.readyState = Xr);
};
g.Va = function (e) {
  if (
    this.g &&
    ((this.l = e),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = e.headers),
      (this.readyState = 2),
      Ne(this)),
    this.g && ((this.readyState = 3), Ne(this), this.g))
  )
    if (this.responseType === "arraybuffer")
      e.arrayBuffer().then(this.Ta.bind(this), this.ha.bind(this));
    else if (typeof E.ReadableStream != "undefined" && "body" in e) {
      if (((this.j = e.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error(
            'responseType must be empty for "streamBinaryChunks" mode responses.'
          );
        this.response = [];
      } else
        (this.response = this.responseText = ""), (this.A = new TextDecoder());
      co(this);
    } else e.text().then(this.Ua.bind(this), this.ha.bind(this));
};
function co(e) {
  e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e));
}
g.Sa = function (e) {
  if (this.g) {
    if (this.u && e.value) this.response.push(e.value);
    else if (!this.u) {
      var t = e.value ? e.value : new Uint8Array(0);
      (t = this.A.decode(t, { stream: !e.done })) &&
        (this.response = this.responseText += t);
    }
    e.done ? De(this) : Ne(this), this.readyState == 3 && co(this);
  }
};
g.Ua = function (e) {
  this.g && ((this.response = this.responseText = e), De(this));
};
g.Ta = function (e) {
  this.g && ((this.response = e), De(this));
};
g.ha = function () {
  this.g && De(this);
};
function De(e) {
  (e.readyState = 4), (e.l = null), (e.j = null), (e.A = null), Ne(e);
}
g.setRequestHeader = function (e, t) {
  this.v.append(e, t);
};
g.getResponseHeader = function (e) {
  return (this.h && this.h.get(e.toLowerCase())) || "";
};
g.getAllResponseHeaders = function () {
  if (!this.h) return "";
  for (var e = [], t = this.h.entries(), n = t.next(); !n.done; )
    (n = n.value), e.push(n[0] + ": " + n[1]), (n = t.next());
  return e.join(`\r
`);
};
function Ne(e) {
  e.onreadystatechange && e.onreadystatechange.call(e);
}
Object.defineProperty(Nn.prototype, "withCredentials", {
  get: function () {
    return this.m === "include";
  },
  set: function (e) {
    this.m = e ? "include" : "same-origin";
  },
});
var Qh = E.JSON.parse;
function O(e) {
  F.call(this),
    (this.headers = new jt()),
    (this.u = e || null),
    (this.h = !1),
    (this.C = this.g = null),
    (this.H = ""),
    (this.m = 0),
    (this.j = ""),
    (this.l = this.F = this.v = this.D = !1),
    (this.B = 0),
    (this.A = null),
    (this.J = uo),
    (this.K = this.L = !1);
}
$(O, F);
var uo = "",
  Jh = /^https?$/i,
  Zh = ["POST", "PUT"];
g = O.prototype;
g.ea = function (e, t, n, r) {
  if (this.g)
    throw Error(
      "[goog.net.XhrIo] Object is active with another request=" +
        this.H +
        "; newUri=" +
        e
    );
  (t = t ? t.toUpperCase() : "GET"),
    (this.H = e),
    (this.j = ""),
    (this.m = 0),
    (this.D = !1),
    (this.h = !0),
    (this.g = this.u ? this.u.g() : Fr.g()),
    (this.C = this.u ? Us(this.u) : Us(Fr)),
    (this.g.onreadystatechange = j(this.Fa, this));
  try {
    (this.F = !0), this.g.open(t, String(e), !0), (this.F = !1);
  } catch (s) {
    ho(this, s);
    return;
  }
  e = n || "";
  var i = new jt(this.headers);
  r &&
    Gr(r, function (s, o) {
      i.set(o, s);
    }),
    (r = hh(i.T())),
    (n = E.FormData && e instanceof E.FormData),
    !(0 <= ds(Zh, t)) ||
      r ||
      n ||
      i.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"),
    i.forEach(function (s, o) {
      this.g.setRequestHeader(o, s);
    }, this),
    this.J && (this.g.responseType = this.J),
    "withCredentials" in this.g &&
      this.g.withCredentials !== this.L &&
      (this.g.withCredentials = this.L);
  try {
    lo(this),
      0 < this.B &&
        ((this.K = tl(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = j(this.pa, this)))
          : (this.A = Or(this.pa, this.B, this))),
      (this.v = !0),
      this.g.send(e),
      (this.v = !1);
  } catch (s) {
    ho(this, s);
  }
};
function tl(e) {
  return Ut && gh() && typeof e.timeout == "number" && e.ontimeout !== void 0;
}
function uh(e) {
  return e.toLowerCase() == "content-type";
}
g.pa = function () {
  typeof ur != "undefined" &&
    this.g &&
    ((this.j = "Timed out after " + this.B + "ms, aborting"),
    (this.m = 8),
    B(this, "timeout"),
    this.abort(8));
};
function ho(e, t) {
  (e.h = !1),
    e.g && ((e.l = !0), e.g.abort(), (e.l = !1)),
    (e.j = t),
    (e.m = 5),
    fo(e),
    Dn(e);
}
function fo(e) {
  e.D || ((e.D = !0), B(e, "complete"), B(e, "error"));
}
g.abort = function (e) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = e || 7),
    B(this, "complete"),
    B(this, "abort"),
    Dn(this));
};
g.M = function () {
  this.g &&
    (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
    Dn(this, !0)),
    O.Z.M.call(this);
};
g.Fa = function () {
  this.s || (this.F || this.v || this.l ? po(this) : this.cb());
};
g.cb = function () {
  po(this);
};
function po(e) {
  if (
    e.h &&
    typeof ur != "undefined" &&
    (!e.C[1] || ct(e) != 4 || e.ba() != 2)
  ) {
    if (e.v && ct(e) == 4) Or(e.Fa, 0, e);
    else if ((B(e, "readystatechange"), ct(e) == 4)) {
      e.h = !1;
      try {
        var t = e.ba();
        t: switch (t) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var n = !0;
            break t;
          default:
            n = !1;
        }
        var r;
        if (!(r = n)) {
          var i;
          if ((i = t === 0)) {
            var s = String(e.H).match(to)[1] || null;
            if (!s && E.self && E.self.location) {
              var o = E.self.location.protocol;
              s = o.substr(0, o.length - 1);
            }
            i = !Jh.test(s ? s.toLowerCase() : "");
          }
          r = i;
        }
        if (r) B(e, "complete"), B(e, "success");
        else {
          e.m = 6;
          try {
            var a = 2 < ct(e) ? e.g.statusText : "";
          } catch (c) {
            a = "";
          }
          (e.j = a + " [" + e.ba() + "]"), fo(e);
        }
      } finally {
        Dn(e);
      }
    }
  }
}
function Dn(e, t) {
  if (e.g) {
    lo(e);
    var n = e.g,
      r = e.C[0] ? tn : null;
    (e.g = null), (e.C = null), t || B(e, "ready");
    try {
      n.onreadystatechange = r;
    } catch (i) {}
  }
}
function lo(e) {
  e.g && e.K && (e.g.ontimeout = null),
    e.A && (E.clearTimeout(e.A), (e.A = null));
}
function ct(e) {
  return e.g ? e.g.readyState : 0;
}
g.ba = function () {
  try {
    return 2 < ct(this) ? this.g.status : -1;
  } catch (e) {
    return -1;
  }
};
g.ga = function () {
  try {
    return this.g ? this.g.responseText : "";
  } catch (e) {
    return "";
  }
};
g.Qa = function (e) {
  if (this.g) {
    var t = this.g.responseText;
    return e && t.indexOf(e) == 0 && (t = t.substring(e.length)), Qh(t);
  }
};
function Gs(e) {
  try {
    if (!e.g) return null;
    if ("response" in e.g) return e.g.response;
    switch (e.J) {
      case uo:
      case "text":
        return e.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in e.g) return e.g.mozResponseArrayBuffer;
    }
    return null;
  } catch (t) {
    return null;
  }
}
g.Da = function () {
  return this.m;
};
g.La = function () {
  return typeof this.j == "string" ? this.j : String(this.j);
};
function el(e) {
  var t = "";
  return (
    mr(e, function (n, r) {
      (t += r),
        (t += ":"),
        (t += n),
        (t += `\r
`);
    }),
    t
  );
}
function Qr(e, t, n) {
  t: {
    for (r in n) {
      var r = !1;
      break t;
    }
    r = !0;
  }
  r ||
    ((n = el(n)),
    typeof e == "string"
      ? n != null && encodeURIComponent(String(n))
      : L(e, t, n));
}
function Ce(e, t, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[e]) || t;
}
function go(e) {
  (this.za = 0),
    (this.l = []),
    (this.h = new fn()),
    (this.la =
      this.oa =
      this.F =
      this.W =
      this.g =
      this.sa =
      this.D =
      this.aa =
      this.o =
      this.P =
      this.s =
        null),
    (this.Za = this.V = 0),
    (this.Xa = Ce("failFast", !1, e)),
    (this.N = this.v = this.u = this.m = this.j = null),
    (this.X = !0),
    (this.I = this.ta = this.U = -1),
    (this.Y = this.A = this.C = 0),
    (this.Pa = Ce("baseRetryDelayMs", 5e3, e)),
    (this.$a = Ce("retryDelaySeedMs", 1e4, e)),
    (this.Ya = Ce("forwardChannelMaxRetries", 2, e)),
    (this.ra = Ce("forwardChannelRequestTimeoutMs", 2e4, e)),
    (this.qa = (e && e.xmlHttpFactory) || void 0),
    (this.Ba = (e && e.Yb) || !1),
    (this.K = void 0),
    (this.H = (e && e.supportsCrossDomainXhr) || !1),
    (this.J = ""),
    (this.i = new so(e && e.concurrentRequestLimit)),
    (this.Ca = new Wh()),
    (this.ja = (e && e.fastHandshake) || !1),
    (this.Ra = (e && e.Wb) || !1),
    e && e.Aa && this.h.Aa(),
    e && e.forceLongPolling && (this.X = !1),
    (this.$ = (!this.ja && this.X && e && e.detectBufferingProxy) || !1),
    (this.ka = void 0),
    (this.O = 0),
    (this.L = !1),
    (this.B = null),
    (this.Wa = !e || e.Xb !== !1);
}
g = go.prototype;
g.ma = 8;
g.G = 1;
function Kr(e) {
  if ((mo(e), e.G == 3)) {
    var t = e.V++,
      n = at(e.F);
    L(n, "SID", e.J),
      L(n, "RID", t),
      L(n, "TYPE", "terminate"),
      Re(e, n),
      (t = new we(e, e.h, t, void 0)),
      (t.K = 2),
      (t.v = yn(at(n))),
      (n = !1),
      E.navigator &&
        E.navigator.sendBeacon &&
        (n = E.navigator.sendBeacon(t.v.toString(), "")),
      !n && E.Image && ((new Image().src = t.v), (n = !0)),
      n || ((t.g = Hs(t.l, null)), t.g.ea(t.v)),
      (t.F = Date.now()),
      Ee(t);
  }
  yo(e);
}
g.hb = function (e) {
  try {
    this.h.info("Origin Trials invoked: " + e);
  } catch (t) {}
};
function wn(e) {
  e.g && ($r(e), e.g.cancel(), (e.g = null));
}
function mo(e) {
  wn(e),
    e.u && (E.clearTimeout(e.u), (e.u = null)),
    Tn(e),
    e.i.cancel(),
    e.m && (typeof e.m == "number" && E.clearTimeout(e.m), (e.m = null));
}
function Jr(e, t) {
  e.l.push(new zh(e.Za++, t)), e.G == 3 && En(e);
}
function En(e) {
  oo(e.i) || e.m || ((e.m = !0), Lr(e.Ha, e), (e.C = 0));
}
function nl(e, t) {
  return Xs(e.i) >= e.i.j - (e.m ? 1 : 0)
    ? !1
    : e.m
    ? ((e.l = t.D.concat(e.l)), !0)
    : e.G == 1 || e.G == 2 || e.C >= (e.Xa ? 0 : e.Ya)
    ? !1
    : ((e.m = ye(j(e.Ha, e, t), vo(e, e.C))), e.C++, !0);
}
g.Ha = function (e) {
  if (this.m)
    if (((this.m = null), this.G == 1)) {
      if (!e) {
        (this.V = Math.floor(1e5 * Math.random())), (e = this.V++);
        var t = new we(this, this.h, e, void 0),
          n = this.s;
        if (
          (this.P && (n ? ((n = ys(n)), ws(n, this.P)) : (n = this.P)),
          this.o === null && (t.H = n),
          this.ja)
        )
          t: {
            for (var r = 0, i = 0; i < this.l.length; i++) {
              e: {
                var s = this.l[i];
                if (
                  "__data__" in s.g &&
                  ((s = s.g.__data__), typeof s == "string")
                ) {
                  s = s.length;
                  break e;
                }
                s = void 0;
              }
              if (s === void 0) break;
              if (((r += s), 4096 < r)) {
                r = i;
                break t;
              }
              if (r === 4096 || i === this.l.length - 1) {
                r = i + 1;
                break t;
              }
            }
            r = 1e3;
          }
        else r = 1e3;
        (r = Eo(this, t, r)),
          (i = at(this.F)),
          L(i, "RID", e),
          L(i, "CVER", 22),
          this.D && L(i, "X-HTTP-Session-Id", this.D),
          Re(this, i),
          this.o && n && Qr(i, this.o, n),
          Hr(this.i, t),
          this.Ra && L(i, "TYPE", "init"),
          this.ja
            ? (L(i, "$req", r), L(i, "SID", "null"), (t.$ = !0), qr(t, i, null))
            : qr(t, i, r),
          (this.G = 2);
      }
    } else
      this.G == 3 &&
        (e ? wo(this, e) : this.l.length == 0 || oo(this.i) || wo(this));
};
function wo(e, t) {
  var n;
  t ? (n = t.m) : (n = e.V++);
  var r = at(e.F);
  L(r, "SID", e.J),
    L(r, "RID", n),
    L(r, "AID", e.U),
    Re(e, r),
    e.o && e.s && Qr(r, e.o, e.s),
    (n = new we(e, e.h, n, e.C + 1)),
    e.o === null && (n.H = e.s),
    t && (e.l = t.D.concat(e.l)),
    (t = Eo(e, n, 1e3)),
    n.setTimeout(
      Math.round(0.5 * e.ra) + Math.round(0.5 * e.ra * Math.random())
    ),
    Hr(e.i, n),
    qr(n, r, t);
}
function Re(e, t) {
  e.j &&
    Gr({}, function (n, r) {
      L(t, r, n);
    });
}
function Eo(e, t, n) {
  n = Math.min(e.l.length, n);
  var r = e.j ? j(e.j.Oa, e.j, e) : null;
  t: for (var i = e.l, s = -1; ; ) {
    var o = ["count=" + n];
    s == -1
      ? 0 < n
        ? ((s = i[0].h), o.push("ofs=" + s))
        : (s = 0)
      : o.push("ofs=" + s);
    for (var a = !0, c = 0; c < n; c++) {
      var u = i[c].h,
        h = i[c].g;
      if (((u -= s), 0 > u)) (s = Math.max(0, i[c].h - 100)), (a = !1);
      else
        try {
          Yh(h, o, "req" + u + "_");
        } catch (l) {
          r && r(h);
        }
    }
    if (a) {
      r = o.join("&");
      break t;
    }
  }
  return (e = e.l.splice(0, n)), (t.D = e), r;
}
function Js(e) {
  e.g || e.u || ((e.Y = 1), Lr(e.Ga, e), (e.A = 0));
}
function zr(e) {
  return e.g || e.u || 3 <= e.A
    ? !1
    : (e.Y++, (e.u = ye(j(e.Ga, e), vo(e, e.A))), e.A++, !0);
}
g.Ga = function () {
  if (
    ((this.u = null),
    To(this),
    this.$ && !(this.L || this.g == null || 0 >= this.O))
  ) {
    var e = 2 * this.O;
    this.h.info("BP detection timer enabled: " + e),
      (this.B = ye(j(this.bb, this), e));
  }
};
g.bb = function () {
  this.B &&
    ((this.B = null),
    this.h.info("BP detection timeout reached."),
    this.h.info("Buffering proxy detected and switch to long-polling!"),
    (this.N = !1),
    (this.L = !0),
    Q(10),
    wn(this),
    To(this));
};
function $r(e) {
  e.B != null && (E.clearTimeout(e.B), (e.B = null));
}
function To(e) {
  (e.g = new we(e, e.h, "rpc", e.Y)),
    e.o === null && (e.g.H = e.s),
    (e.g.O = 0);
  var t = at(e.oa);
  L(t, "RID", "rpc"),
    L(t, "SID", e.J),
    L(t, "CI", e.N ? "0" : "1"),
    L(t, "AID", e.U),
    Re(e, t),
    L(t, "TYPE", "xmlhttp"),
    e.o && e.s && Qr(t, e.o, e.s),
    e.K && e.g.setTimeout(e.K);
  var n = e.g;
  (e = e.la), (n.K = 1), (n.v = yn(at(t))), (n.s = null), (n.U = !0), $s(n, e);
}
g.ab = function () {
  this.v != null && ((this.v = null), wn(this), zr(this), Q(19));
};
function Tn(e) {
  e.v != null && (E.clearTimeout(e.v), (e.v = null));
}
function Ws(e, t) {
  var n = null;
  if (e.g == t) {
    Tn(e), $r(e), (e.g = null);
    var r = 2;
  } else if (Br(e.i, t)) (n = t.D), Qs(e.i, t), (r = 1);
  else return;
  if (((e.I = t.N), e.G != 0)) {
    if (t.i)
      if (r == 1) {
        (n = t.s ? t.s.length : 0), (t = Date.now() - t.F);
        var i = e.C;
        (r = dn()), B(r, new Ps(r, n, t, i)), En(e);
      } else Js(e);
    else if (
      ((i = t.o),
      i == 3 ||
        (i == 0 && 0 < e.I) ||
        !((r == 1 && nl(e, t)) || (r == 2 && zr(e))))
    )
      switch ((n && 0 < n.length && ((t = e.i), (t.i = t.i.concat(n))), i)) {
        case 1:
          It(e, 5);
          break;
        case 4:
          It(e, 10);
          break;
        case 3:
          It(e, 6);
          break;
        default:
          It(e, 2);
      }
  }
}
function vo(e, t) {
  var n = e.Pa + Math.floor(Math.random() * e.$a);
  return e.j || (n *= 2), n * t;
}
function It(e, t) {
  if ((e.h.info("Error code " + t), t == 2)) {
    var n = null;
    e.j && (n = null);
    var r = j(e.jb, e);
    n ||
      ((n = new At("//www.google.com/images/cleardot.gif")),
      (E.location && E.location.protocol == "http") || In(n, "https"),
      yn(n)),
      Xh(n.toString(), r);
  } else Q(2);
  (e.G = 0), e.j && e.j.va(t), yo(e), mo(e);
}
g.jb = function (e) {
  e
    ? (this.h.info("Successfully pinged google.com"), Q(2))
    : (this.h.info("Failed to ping google.com"), Q(1));
};
function yo(e) {
  (e.G = 0),
    (e.I = -1),
    e.j &&
      ((ao(e.i).length != 0 || e.l.length != 0) &&
        ((e.i.i.length = 0), fr(e.l), (e.l.length = 0)),
      e.j.ua());
}
function Zs(e, t, n) {
  var r = Bh(n);
  if (r.i != "") t && Sn(r, t + "." + r.i), An(r, r.m);
  else {
    var i = E.location;
    r = Hh(i.protocol, t ? t + "." + i.hostname : i.hostname, +i.port, n);
  }
  return (
    e.aa &&
      mr(e.aa, function (s, o) {
        L(r, o, s);
      }),
    (t = e.D),
    (n = e.sa),
    t && n && L(r, t, n),
    L(r, "VER", e.ma),
    Re(e, r),
    r
  );
}
function Hs(e, t, n) {
  if (t && !e.H)
    throw Error("Can't create secondary domain capable XhrIo object.");
  return (
    (t = n && e.Ba && !e.qa ? new O(new be({ ib: !0 })) : new O(e.qa)),
    (t.L = e.H),
    t
  );
}
function Io() {}
g = Io.prototype;
g.xa = function () {};
g.wa = function () {};
g.va = function () {};
g.ua = function () {};
g.Oa = function () {};
function Cn() {
  if (Ut && !(10 <= Number(mh)))
    throw Error("Environmental error: no available transport.");
}
Cn.prototype.g = function (e, t) {
  return new et(e, t);
};
function et(e, t) {
  F.call(this),
    (this.g = new go(t)),
    (this.l = e),
    (this.h = (t && t.messageUrlParams) || null),
    (e = (t && t.messageHeaders) || null),
    t &&
      t.clientProtocolHeaderRequired &&
      (e
        ? (e["X-Client-Protocol"] = "webchannel")
        : (e = { "X-Client-Protocol": "webchannel" })),
    (this.g.s = e),
    (e = (t && t.initMessageHeaders) || null),
    t &&
      t.messageContentType &&
      (e
        ? (e["X-WebChannel-Content-Type"] = t.messageContentType)
        : (e = { "X-WebChannel-Content-Type": t.messageContentType })),
    t &&
      t.ya &&
      (e
        ? (e["X-WebChannel-Client-Profile"] = t.ya)
        : (e = { "X-WebChannel-Client-Profile": t.ya })),
    (this.g.P = e),
    (e = t && t.httpHeadersOverwriteParam) && !nn(e) && (this.g.o = e),
    (this.A = (t && t.supportsCrossDomainXhr) || !1),
    (this.v = (t && t.sendRawJson) || !1),
    (t = t && t.httpSessionIdParam) &&
      !nn(t) &&
      ((this.g.D = t),
      (e = this.h),
      e !== null && t in e && ((e = this.h), t in e && delete e[t])),
    (this.j = new Bt(this));
}
$(et, F);
et.prototype.m = function () {
  (this.g.j = this.j), this.A && (this.g.H = !0);
  var e = this.g,
    t = this.l,
    n = this.h || void 0;
  e.Wa && (e.h.info("Origin Trials enabled."), Lr(j(e.hb, e, t))),
    Q(0),
    (e.W = t),
    (e.aa = n || {}),
    (e.N = e.X),
    (e.F = Zs(e, null, e.W)),
    En(e);
};
et.prototype.close = function () {
  Kr(this.g);
};
et.prototype.u = function (e) {
  if (typeof e == "string") {
    var t = {};
    (t.__data__ = e), Jr(this.g, t);
  } else
    this.v ? ((t = {}), (t.__data__ = Rr(e)), Jr(this.g, t)) : Jr(this.g, e);
};
et.prototype.M = function () {
  (this.g.j = null),
    delete this.j,
    Kr(this.g),
    delete this.g,
    et.Z.M.call(this);
};
function So(e) {
  Vr.call(this);
  var t = e.__sm__;
  if (t) {
    t: {
      for (var n in t) {
        e = n;
        break t;
      }
      e = void 0;
    }
    (this.i = e) && ((e = this.i), (t = t !== null && e in t ? t[e] : void 0)),
      (this.data = t);
  } else this.data = e;
}
$(So, Vr);
function Ao() {
  Pr.call(this), (this.status = 1);
}
$(Ao, Pr);
function Bt(e) {
  this.g = e;
}
$(Bt, Io);
Bt.prototype.xa = function () {
  B(this.g, "a");
};
Bt.prototype.wa = function (e) {
  B(this.g, new So(e));
};
Bt.prototype.va = function (e) {
  B(this.g, new Ao(e));
};
Bt.prototype.ua = function () {
  B(this.g, "b");
};
Cn.prototype.createWebChannel = Cn.prototype.g;
et.prototype.send = et.prototype.u;
et.prototype.open = et.prototype.m;
et.prototype.close = et.prototype.close;
pn.NO_ERROR = 0;
pn.TIMEOUT = 8;
pn.HTTP_ERROR = 6;
Fs.COMPLETE = "complete";
qs.EventType = ve;
ve.OPEN = "a";
ve.CLOSE = "b";
ve.ERROR = "c";
ve.MESSAGE = "d";
F.prototype.listen = F.prototype.N;
O.prototype.listenOnce = O.prototype.O;
O.prototype.getLastError = O.prototype.La;
O.prototype.getLastErrorCode = O.prototype.Da;
O.prototype.getStatus = O.prototype.ba;
O.prototype.getResponseJson = O.prototype.Qa;
O.prototype.getResponseText = O.prototype.ga;
O.prototype.send = O.prototype.ea;
var rl = function () {
    return new Cn();
  },
  il = function () {
    return dn();
  },
  Zr = pn,
  sl = Fs,
  ol = Et,
  bo = {
    rb: 0,
    ub: 1,
    vb: 2,
    Ob: 3,
    Tb: 4,
    Qb: 5,
    Rb: 6,
    Pb: 7,
    Nb: 8,
    Sb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Lb: 12,
    Hb: 13,
    Ib: 14,
    Gb: 15,
    Jb: 16,
    Kb: 17,
    nb: 18,
    mb: 19,
    ob: 20,
  },
  al = be,
  Rn = qs,
  cl = O;
var Ht = "8.7.1";
var _n = class {
  constructor(t, n) {
    (this.previousValue = t),
      n &&
        ((n.sequenceNumberHandler = (r) => this.t(r)),
        (this.i = (r) => n.writeSequenceNumber(r)));
  }
  t(t) {
    return (
      (this.previousValue = Math.max(t, this.previousValue)), this.previousValue
    );
  }
  next() {
    let t = ++this.previousValue;
    return this.i && this.i(t), t;
  }
};
_n.o = -1;
var f = {
    OK: "ok",
    CANCELLED: "cancelled",
    UNKNOWN: "unknown",
    INVALID_ARGUMENT: "invalid-argument",
    DEADLINE_EXCEEDED: "deadline-exceeded",
    NOT_FOUND: "not-found",
    ALREADY_EXISTS: "already-exists",
    PERMISSION_DENIED: "permission-denied",
    UNAUTHENTICATED: "unauthenticated",
    RESOURCE_EXHAUSTED: "resource-exhausted",
    FAILED_PRECONDITION: "failed-precondition",
    ABORTED: "aborted",
    OUT_OF_RANGE: "out-of-range",
    UNIMPLEMENTED: "unimplemented",
    INTERNAL: "internal",
    UNAVAILABLE: "unavailable",
    DATA_LOSS: "data-loss",
  },
  y = class extends Error {
    constructor(t, n) {
      super(n),
        (this.code = t),
        (this.message = n),
        (this.name = "FirebaseError"),
        (this.toString = () =>
          `${this.name}: [code=${this.code}]: ${this.message}`);
    }
  };
var bt = new ir("@firebase/firestore");
function No() {
  return bt.logLevel;
}
function v(e, ...t) {
  if (bt.logLevel <= b.DEBUG) {
    let n = t.map(ti);
    bt.debug(`Firestore (${Ht}): ${e}`, ...n);
  }
}
function dt(e, ...t) {
  if (bt.logLevel <= b.ERROR) {
    let n = t.map(ti);
    bt.error(`Firestore (${Ht}): ${e}`, ...n);
  }
}
function Do(e, ...t) {
  if (bt.logLevel <= b.WARN) {
    let n = t.map(ti);
    bt.warn(`Firestore (${Ht}): ${e}`, ...n);
  }
}
function ti(e) {
  if (typeof e == "string") return e;
  try {
    return (t = e), JSON.stringify(t);
  } catch (n) {
    return e;
  }
  var t;
}
function T(e = "Unexpected state") {
  let t = `FIRESTORE (${Ht}) INTERNAL ASSERTION FAILED: ` + e;
  throw (dt(t), new Error(t));
}
function R(e, t) {
  e || T();
}
function S(e, t) {
  return e;
}
function ul(e) {
  let t = typeof self != "undefined" && (self.crypto || self.msCrypto),
    n = new Uint8Array(e);
  if (t && typeof t.getRandomValues == "function") t.getRandomValues(n);
  else for (let r = 0; r < e; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
var ei = class {
  static u() {
    let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = Math.floor(256 / t.length) * t.length,
      r = "";
    for (; r.length < 20; ) {
      let i = ul(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += t.charAt(i[s] % t.length));
    }
    return r;
  }
};
function D(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Kt(e, t, n) {
  return e.length === t.length && e.every((r, i) => n(r, t[i]));
}
var W = class {
  constructor(t, n) {
    if (((this.seconds = t), (this.nanoseconds = n), n < 0))
      throw new y(
        f.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (n >= 1e9)
      throw new y(
        f.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (t < -62135596800)
      throw new y(f.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    if (t >= 253402300800)
      throw new y(f.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
  }
  static now() {
    return W.fromMillis(Date.now());
  }
  static fromDate(t) {
    return W.fromMillis(t.getTime());
  }
  static fromMillis(t) {
    let n = Math.floor(t / 1e3),
      r = Math.floor(1e6 * (t - 1e3 * n));
    return new W(n, r);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t) {
    return this.seconds === t.seconds
      ? D(this.nanoseconds, t.nanoseconds)
      : D(this.seconds, t.seconds);
  }
  isEqual(t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    let t = this.seconds - -62135596800;
    return (
      String(t).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
};
var N = class {
  constructor(t) {
    this.timestamp = t;
  }
  static fromTimestamp(t) {
    return new N(t);
  }
  static min() {
    return new N(new W(0, 0));
  }
  compareTo(t) {
    return this.timestamp._compareTo(t.timestamp);
  }
  isEqual(t) {
    return this.timestamp.isEqual(t.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
};
function Co(e) {
  let t = 0;
  for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
  return t;
}
function zt(e, t) {
  for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]);
}
function Ro(e) {
  for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
var Gt = class {
    constructor(t, n, r) {
      n === void 0 ? (n = 0) : n > t.length && T(),
        r === void 0 ? (r = t.length - n) : r > t.length - n && T(),
        (this.segments = t),
        (this.offset = n),
        (this.len = r);
    }
    get length() {
      return this.len;
    }
    isEqual(t) {
      return Gt.comparator(this, t) === 0;
    }
    child(t) {
      let n = this.segments.slice(this.offset, this.limit());
      return (
        t instanceof Gt
          ? t.forEach((r) => {
              n.push(r);
            })
          : n.push(t),
        this.construct(n)
      );
    }
    limit() {
      return this.offset + this.length;
    }
    popFirst(t) {
      return (
        (t = t === void 0 ? 1 : t),
        this.construct(this.segments, this.offset + t, this.length - t)
      );
    }
    popLast() {
      return this.construct(this.segments, this.offset, this.length - 1);
    }
    firstSegment() {
      return this.segments[this.offset];
    }
    lastSegment() {
      return this.get(this.length - 1);
    }
    get(t) {
      return this.segments[this.offset + t];
    }
    isEmpty() {
      return this.length === 0;
    }
    isPrefixOf(t) {
      if (t.length < this.length) return !1;
      for (let n = 0; n < this.length; n++)
        if (this.get(n) !== t.get(n)) return !1;
      return !0;
    }
    isImmediateParentOf(t) {
      if (this.length + 1 !== t.length) return !1;
      for (let n = 0; n < this.length; n++)
        if (this.get(n) !== t.get(n)) return !1;
      return !0;
    }
    forEach(t) {
      for (let n = this.offset, r = this.limit(); n < r; n++)
        t(this.segments[n]);
    }
    toArray() {
      return this.segments.slice(this.offset, this.limit());
    }
    static comparator(t, n) {
      let r = Math.min(t.length, n.length);
      for (let i = 0; i < r; i++) {
        let s = t.get(i),
          o = n.get(i);
        if (s < o) return -1;
        if (s > o) return 1;
      }
      return t.length < n.length ? -1 : t.length > n.length ? 1 : 0;
    }
  },
  _ = class extends Gt {
    construct(t, n, r) {
      return new _(t, n, r);
    }
    canonicalString() {
      return this.toArray().join("/");
    }
    toString() {
      return this.canonicalString();
    }
    static fromString(...t) {
      let n = [];
      for (let r of t) {
        if (r.indexOf("//") >= 0)
          throw new y(
            f.INVALID_ARGUMENT,
            `Invalid segment (${r}). Paths must not contain // in them.`
          );
        n.push(...r.split("/").filter((i) => i.length > 0));
      }
      return new _(n);
    }
    static emptyPath() {
      return new _([]);
    }
  },
  hl = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
  J = class extends Gt {
    construct(t, n, r) {
      return new J(t, n, r);
    }
    static isValidIdentifier(t) {
      return hl.test(t);
    }
    canonicalString() {
      return this.toArray()
        .map(
          (t) => (
            (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
            J.isValidIdentifier(t) || (t = "`" + t + "`"),
            t
          )
        )
        .join(".");
    }
    toString() {
      return this.canonicalString();
    }
    isKeyField() {
      return this.length === 1 && this.get(0) === "__name__";
    }
    static keyField() {
      return new J(["__name__"]);
    }
    static fromServerFormat(t) {
      let n = [],
        r = "",
        i = 0,
        s = () => {
          if (r.length === 0)
            throw new y(
              f.INVALID_ARGUMENT,
              `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
            );
          n.push(r), (r = "");
        },
        o = !1;
      for (; i < t.length; ) {
        let a = t[i];
        if (a === "\\") {
          if (i + 1 === t.length)
            throw new y(
              f.INVALID_ARGUMENT,
              "Path has trailing escape character: " + t
            );
          let c = t[i + 1];
          if (c !== "\\" && c !== "." && c !== "`")
            throw new y(
              f.INVALID_ARGUMENT,
              "Path has invalid escape sequence: " + t
            );
          (r += c), (i += 2);
        } else
          a === "`"
            ? ((o = !o), i++)
            : a !== "." || o
            ? ((r += a), i++)
            : (s(), i++);
      }
      if ((s(), o))
        throw new y(f.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
      return new J(n);
    }
    static emptyPath() {
      return new J([]);
    }
  };
var kn = class {
  constructor(t) {
    (this.fields = t), t.sort(J.comparator);
  }
  covers(t) {
    for (let n of this.fields) if (n.isPrefixOf(t)) return !0;
    return !1;
  }
  isEqual(t) {
    return Kt(this.fields, t.fields, (n, r) => n.isEqual(r));
  }
};
var H = class {
  constructor(t) {
    this.binaryString = t;
  }
  static fromBase64String(t) {
    let n = atob(t);
    return new H(n);
  }
  static fromUint8Array(t) {
    let n = (function (r) {
      let i = "";
      for (let s = 0; s < r.length; ++s) i += String.fromCharCode(r[s]);
      return i;
    })(t);
    return new H(n);
  }
  toBase64() {
    return (t = this.binaryString), btoa(t);
    var t;
  }
  toUint8Array() {
    return (function (t) {
      let n = new Uint8Array(t.length);
      for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
      return n;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t) {
    return D(this.binaryString, t.binaryString);
  }
  isEqual(t) {
    return this.binaryString === t.binaryString;
  }
};
H.EMPTY_BYTE_STRING = new H("");
var ll = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function pt(e) {
  if ((R(!!e), typeof e == "string")) {
    let t = 0,
      n = ll.exec(e);
    if ((R(!!n), n[1])) {
      let i = n[1];
      (i = (i + "000000000").substr(0, 9)), (t = Number(i));
    }
    let r = new Date(e);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: t };
  }
  return { seconds: M(e.seconds), nanos: M(e.nanos) };
}
function M(e) {
  return typeof e == "number" ? e : typeof e == "string" ? Number(e) : 0;
}
function Wt(e) {
  return typeof e == "string" ? H.fromBase64String(e) : H.fromUint8Array(e);
}
function _o(e) {
  var t, n;
  return (
    ((n = (
      ((t = e == null ? void 0 : e.mapValue) === null || t === void 0
        ? void 0
        : t.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === "server_timestamp"
  );
}
function ko(e) {
  let t = e.mapValue.fields.__previous_value__;
  return _o(t) ? ko(t) : t;
}
function _e(e) {
  let t = pt(e.mapValue.fields.__local_write_time__.timestampValue);
  return new W(t.seconds, t.nanos);
}
function Yt(e) {
  return e == null;
}
function Ln(e) {
  return e === 0 && 1 / e == -1 / 0;
}
function fl(e) {
  return (
    typeof e == "number" &&
    Number.isInteger(e) &&
    !Ln(e) &&
    e <= Number.MAX_SAFE_INTEGER &&
    e >= Number.MIN_SAFE_INTEGER
  );
}
var w = class {
  constructor(t) {
    this.path = t;
  }
  static fromPath(t) {
    return new w(_.fromString(t));
  }
  static fromName(t) {
    return new w(_.fromString(t).popFirst(5));
  }
  hasCollectionId(t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }
  isEqual(t) {
    return t !== null && _.comparator(this.path, t.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t, n) {
    return _.comparator(t.path, n.path);
  }
  static isDocumentKey(t) {
    return t.length % 2 == 0;
  }
  static fromSegments(t) {
    return new w(new _(t.slice()));
  }
};
function Nt(e) {
  return "nullValue" in e
    ? 0
    : "booleanValue" in e
    ? 1
    : "integerValue" in e || "doubleValue" in e
    ? 2
    : "timestampValue" in e
    ? 3
    : "stringValue" in e
    ? 5
    : "bytesValue" in e
    ? 6
    : "referenceValue" in e
    ? 7
    : "geoPointValue" in e
    ? 8
    : "arrayValue" in e
    ? 9
    : "mapValue" in e
    ? _o(e)
      ? 4
      : 10
    : T();
}
function ot(e, t) {
  let n = Nt(e);
  if (n !== Nt(t)) return !1;
  switch (n) {
    case 0:
      return !0;
    case 1:
      return e.booleanValue === t.booleanValue;
    case 4:
      return _e(e).isEqual(_e(t));
    case 3:
      return (function (r, i) {
        if (
          typeof r.timestampValue == "string" &&
          typeof i.timestampValue == "string" &&
          r.timestampValue.length === i.timestampValue.length
        )
          return r.timestampValue === i.timestampValue;
        let s = pt(r.timestampValue),
          o = pt(i.timestampValue);
        return s.seconds === o.seconds && s.nanos === o.nanos;
      })(e, t);
    case 5:
      return e.stringValue === t.stringValue;
    case 6:
      return (function (r, i) {
        return Wt(r.bytesValue).isEqual(Wt(i.bytesValue));
      })(e, t);
    case 7:
      return e.referenceValue === t.referenceValue;
    case 8:
      return (function (r, i) {
        return (
          M(r.geoPointValue.latitude) === M(i.geoPointValue.latitude) &&
          M(r.geoPointValue.longitude) === M(i.geoPointValue.longitude)
        );
      })(e, t);
    case 2:
      return (function (r, i) {
        if ("integerValue" in r && "integerValue" in i)
          return M(r.integerValue) === M(i.integerValue);
        if ("doubleValue" in r && "doubleValue" in i) {
          let s = M(r.doubleValue),
            o = M(i.doubleValue);
          return s === o ? Ln(s) === Ln(o) : isNaN(s) && isNaN(o);
        }
        return !1;
      })(e, t);
    case 9:
      return Kt(e.arrayValue.values || [], t.arrayValue.values || [], ot);
    case 10:
      return (function (r, i) {
        let s = r.mapValue.fields || {},
          o = i.mapValue.fields || {};
        if (Co(s) !== Co(o)) return !1;
        for (let a in s)
          if (s.hasOwnProperty(a) && (o[a] === void 0 || !ot(s[a], o[a])))
            return !1;
        return !0;
      })(e, t);
    default:
      return T();
  }
}
function ke(e, t) {
  return (e.values || []).find((n) => ot(n, t)) !== void 0;
}
function Xt(e, t) {
  let n = Nt(e),
    r = Nt(t);
  if (n !== r) return D(n, r);
  switch (n) {
    case 0:
      return 0;
    case 1:
      return D(e.booleanValue, t.booleanValue);
    case 2:
      return (function (i, s) {
        let o = M(i.integerValue || i.doubleValue),
          a = M(s.integerValue || s.doubleValue);
        return o < a
          ? -1
          : o > a
          ? 1
          : o === a
          ? 0
          : isNaN(o)
          ? isNaN(a)
            ? 0
            : -1
          : 1;
      })(e, t);
    case 3:
      return Lo(e.timestampValue, t.timestampValue);
    case 4:
      return Lo(_e(e), _e(t));
    case 5:
      return D(e.stringValue, t.stringValue);
    case 6:
      return (function (i, s) {
        let o = Wt(i),
          a = Wt(s);
        return o.compareTo(a);
      })(e.bytesValue, t.bytesValue);
    case 7:
      return (function (i, s) {
        let o = i.split("/"),
          a = s.split("/");
        for (let c = 0; c < o.length && c < a.length; c++) {
          let u = D(o[c], a[c]);
          if (u !== 0) return u;
        }
        return D(o.length, a.length);
      })(e.referenceValue, t.referenceValue);
    case 8:
      return (function (i, s) {
        let o = D(M(i.latitude), M(s.latitude));
        return o !== 0 ? o : D(M(i.longitude), M(s.longitude));
      })(e.geoPointValue, t.geoPointValue);
    case 9:
      return (function (i, s) {
        let o = i.values || [],
          a = s.values || [];
        for (let c = 0; c < o.length && c < a.length; ++c) {
          let u = Xt(o[c], a[c]);
          if (u) return u;
        }
        return D(o.length, a.length);
      })(e.arrayValue, t.arrayValue);
    case 10:
      return (function (i, s) {
        let o = i.fields || {},
          a = Object.keys(o),
          c = s.fields || {},
          u = Object.keys(c);
        a.sort(), u.sort();
        for (let h = 0; h < a.length && h < u.length; ++h) {
          let l = D(a[h], u[h]);
          if (l !== 0) return l;
          let p = Xt(o[a[h]], c[u[h]]);
          if (p !== 0) return p;
        }
        return D(a.length, u.length);
      })(e.mapValue, t.mapValue);
    default:
      throw T();
  }
}
function Lo(e, t) {
  if (typeof e == "string" && typeof t == "string" && e.length === t.length)
    return D(e, t);
  let n = pt(e),
    r = pt(t),
    i = D(n.seconds, r.seconds);
  return i !== 0 ? i : D(n.nanos, r.nanos);
}
function ri(e) {
  return ni(e);
}
function ni(e) {
  return "nullValue" in e
    ? "null"
    : "booleanValue" in e
    ? "" + e.booleanValue
    : "integerValue" in e
    ? "" + e.integerValue
    : "doubleValue" in e
    ? "" + e.doubleValue
    : "timestampValue" in e
    ? (function (r) {
        let i = pt(r);
        return `time(${i.seconds},${i.nanos})`;
      })(e.timestampValue)
    : "stringValue" in e
    ? e.stringValue
    : "bytesValue" in e
    ? Wt(e.bytesValue).toBase64()
    : "referenceValue" in e
    ? ((n = e.referenceValue), w.fromName(n).toString())
    : "geoPointValue" in e
    ? `geo(${(t = e.geoPointValue).latitude},${t.longitude})`
    : "arrayValue" in e
    ? (function (r) {
        let i = "[",
          s = !0;
        for (let o of r.values || []) s ? (s = !1) : (i += ","), (i += ni(o));
        return i + "]";
      })(e.arrayValue)
    : "mapValue" in e
    ? (function (r) {
        let i = Object.keys(r.fields || {}).sort(),
          s = "{",
          o = !0;
        for (let a of i)
          o ? (o = !1) : (s += ","), (s += `${a}:${ni(r.fields[a])}`);
        return s + "}";
      })(e.mapValue)
    : T();
  var t, n;
}
function ii(e) {
  return !!e && "integerValue" in e;
}
function si(e) {
  return !!e && "arrayValue" in e;
}
function xo(e) {
  return !!e && "nullValue" in e;
}
function Oo(e) {
  return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue));
}
function xn(e) {
  return !!e && "mapValue" in e;
}
function Le(e) {
  if (e.geoPointValue)
    return { geoPointValue: Object.assign({}, e.geoPointValue) };
  if (e.timestampValue && typeof e.timestampValue == "object")
    return { timestampValue: Object.assign({}, e.timestampValue) };
  if (e.mapValue) {
    let t = { mapValue: { fields: {} } };
    return zt(e.mapValue.fields, (n, r) => (t.mapValue.fields[n] = Le(r))), t;
  }
  if (e.arrayValue) {
    let t = { arrayValue: { values: [] } };
    for (let n = 0; n < (e.arrayValue.values || []).length; ++n)
      t.arrayValue.values[n] = Le(e.arrayValue.values[n]);
    return t;
  }
  return Object.assign({}, e);
}
var it = class {
  constructor(t) {
    this.value = t;
  }
  static empty() {
    return new it({ mapValue: {} });
  }
  field(t) {
    if (t.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < t.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[t.get(r)]), !xn(n))) return null;
      return (n = (n.mapValue.fields || {})[t.lastSegment()]), n || null;
    }
  }
  set(t, n) {
    this.getFieldsMap(t.popLast())[t.lastSegment()] = Le(n);
  }
  setAll(t) {
    let n = J.emptyPath(),
      r = {},
      i = [];
    t.forEach((o, a) => {
      if (!n.isImmediateParentOf(a)) {
        let c = this.getFieldsMap(n);
        this.applyChanges(c, r, i), (r = {}), (i = []), (n = a.popLast());
      }
      o ? (r[a.lastSegment()] = Le(o)) : i.push(a.lastSegment());
    });
    let s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  delete(t) {
    let n = this.field(t.popLast());
    xn(n) && n.mapValue.fields && delete n.mapValue.fields[t.lastSegment()];
  }
  isEqual(t) {
    return ot(this.value, t.value);
  }
  getFieldsMap(t) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < t.length; ++r) {
      let i = n.mapValue.fields[t.get(r)];
      (xn(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[t.get(r)] = i)),
        (n = i);
    }
    return n.mapValue.fields;
  }
  applyChanges(t, n, r) {
    zt(n, (i, s) => (t[i] = s));
    for (let i of r) delete t[i];
  }
  clone() {
    return new it(Le(this.value));
  }
};
function Mo(e) {
  let t = [];
  return (
    zt(e.fields, (n, r) => {
      let i = new J([n]);
      if (xn(r)) {
        let s = Mo(r.mapValue).fields;
        if (s.length === 0) t.push(i);
        else for (let o of s) t.push(i.child(o));
      } else t.push(i);
    }),
    new kn(t)
  );
}
var K = class {
  constructor(t, n, r, i, s) {
    (this.key = t),
      (this.documentType = n),
      (this.version = r),
      (this.data = i),
      (this.documentState = s);
  }
  static newInvalidDocument(t) {
    return new K(t, 0, N.min(), it.empty(), 0);
  }
  static newFoundDocument(t, n, r) {
    return new K(t, 1, n, r, 0);
  }
  static newNoDocument(t, n) {
    return new K(t, 2, n, it.empty(), 0);
  }
  static newUnknownDocument(t, n) {
    return new K(t, 3, n, it.empty(), 2);
  }
  convertToFoundDocument(t, n) {
    return (
      (this.version = t),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 2),
      (this.data = it.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 3),
      (this.data = it.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(t) {
    return (
      t instanceof K &&
      this.key.isEqual(t.key) &&
      this.version.isEqual(t.version) &&
      this.documentType === t.documentType &&
      this.documentState === t.documentState &&
      this.data.isEqual(t.data)
    );
  }
  clone() {
    return new K(
      this.key,
      this.documentType,
      this.version,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {documentType: ${this.documentType}}), {documentState: ${
      this.documentState
    }})`;
  }
};
var Vo = class {
  constructor(t, n = null, r = [], i = [], s = null, o = null, a = null) {
    (this.path = t),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.startAt = o),
      (this.endAt = a),
      (this.h = null);
  }
};
function Po(e, t = null, n = [], r = [], i = null, s = null, o = null) {
  return new Vo(e, t, n, r, i, s, o);
}
function oi(e) {
  let t = S(e);
  if (t.h === null) {
    let n = t.path.canonicalString();
    t.collectionGroup !== null && (n += "|cg:" + t.collectionGroup),
      (n += "|f:"),
      (n += t.filters.map((r) => dl(r)).join(",")),
      (n += "|ob:"),
      (n += t.orderBy
        .map((r) =>
          (function (i) {
            return i.field.canonicalString() + i.dir;
          })(r)
        )
        .join(",")),
      Yt(t.limit) || ((n += "|l:"), (n += t.limit)),
      t.startAt && ((n += "|lb:"), (n += On(t.startAt))),
      t.endAt && ((n += "|ub:"), (n += On(t.endAt))),
      (t.h = n);
  }
  return t.h;
}
function pl(e) {
  let t = e.path.canonicalString();
  return (
    e.collectionGroup !== null &&
      (t += " collectionGroup=" + e.collectionGroup),
    e.filters.length > 0 &&
      (t += `, filters: [${e.filters
        .map((n) => {
          return `${(r = n).field.canonicalString()} ${r.op} ${ri(r.value)}`;
          var r;
        })
        .join(", ")}]`),
    Yt(e.limit) || (t += ", limit: " + e.limit),
    e.orderBy.length > 0 &&
      (t += `, orderBy: [${e.orderBy
        .map((n) =>
          (function (r) {
            return `${r.field.canonicalString()} (${r.dir})`;
          })(n)
        )
        .join(", ")}]`),
    e.startAt && (t += ", startAt: " + On(e.startAt)),
    e.endAt && (t += ", endAt: " + On(e.endAt)),
    `Target(${t})`
  );
}
function ai(e, t) {
  if (e.limit !== t.limit || e.orderBy.length !== t.orderBy.length) return !1;
  for (let i = 0; i < e.orderBy.length; i++)
    if (!gl(e.orderBy[i], t.orderBy[i])) return !1;
  if (e.filters.length !== t.filters.length) return !1;
  for (let i = 0; i < e.filters.length; i++)
    if (
      ((n = e.filters[i]),
      (r = t.filters[i]),
      n.op !== r.op || !n.field.isEqual(r.field) || !ot(n.value, r.value))
    )
      return !1;
  var n, r;
  return (
    e.collectionGroup === t.collectionGroup &&
    !!e.path.isEqual(t.path) &&
    !!Fo(e.startAt, t.startAt) &&
    Fo(e.endAt, t.endAt)
  );
}
function ci(e) {
  return (
    w.isDocumentKey(e.path) &&
    e.collectionGroup === null &&
    e.filters.length === 0
  );
}
var Z = class extends class {} {
  constructor(t, n, r) {
    super(), (this.field = t), (this.op = n), (this.value = r);
  }
  static create(t, n, r) {
    return t.isKeyField()
      ? n === "in" || n === "not-in"
        ? this.l(t, n, r)
        : new Uo(t, n, r)
      : n === "array-contains"
      ? new $o(t, r)
      : n === "in"
      ? new Bo(t, r)
      : n === "not-in"
      ? new Ho(t, r)
      : n === "array-contains-any"
      ? new Ko(t, r)
      : new Z(t, n, r);
  }
  static l(t, n, r) {
    return n === "in" ? new qo(t, r) : new jo(t, r);
  }
  matches(t) {
    let n = t.data.field(this.field);
    return this.op === "!="
      ? n !== null && this.m(Xt(n, this.value))
      : n !== null && Nt(this.value) === Nt(n) && this.m(Xt(n, this.value));
  }
  m(t) {
    switch (this.op) {
      case "<":
        return t < 0;
      case "<=":
        return t <= 0;
      case "==":
        return t === 0;
      case "!=":
        return t !== 0;
      case ">":
        return t > 0;
      case ">=":
        return t >= 0;
      default:
        return T();
    }
  }
  g() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
};
function dl(e) {
  return e.field.canonicalString() + e.op.toString() + ri(e.value);
}
var Uo = class extends Z {
    constructor(t, n, r) {
      super(t, n, r), (this.key = w.fromName(r.referenceValue));
    }
    matches(t) {
      let n = w.comparator(t.key, this.key);
      return this.m(n);
    }
  },
  qo = class extends Z {
    constructor(t, n) {
      super(t, "in", n), (this.keys = zo("in", n));
    }
    matches(t) {
      return this.keys.some((n) => n.isEqual(t.key));
    }
  },
  jo = class extends Z {
    constructor(t, n) {
      super(t, "not-in", n), (this.keys = zo("not-in", n));
    }
    matches(t) {
      return !this.keys.some((n) => n.isEqual(t.key));
    }
  };
function zo(e, t) {
  var n;
  return (
    ((n = t.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((r) => w.fromName(r.referenceValue));
}
var $o = class extends Z {
    constructor(t, n) {
      super(t, "array-contains", n);
    }
    matches(t) {
      let n = t.data.field(this.field);
      return si(n) && ke(n.arrayValue, this.value);
    }
  },
  Bo = class extends Z {
    constructor(t, n) {
      super(t, "in", n);
    }
    matches(t) {
      let n = t.data.field(this.field);
      return n !== null && ke(this.value.arrayValue, n);
    }
  },
  Ho = class extends Z {
    constructor(t, n) {
      super(t, "not-in", n);
    }
    matches(t) {
      if (ke(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
      let n = t.data.field(this.field);
      return n !== null && !ke(this.value.arrayValue, n);
    }
  },
  Ko = class extends Z {
    constructor(t, n) {
      super(t, "array-contains-any", n);
    }
    matches(t) {
      let n = t.data.field(this.field);
      return (
        !(!si(n) || !n.arrayValue.values) &&
        n.arrayValue.values.some((r) => ke(this.value.arrayValue, r))
      );
    }
  },
  Mn = class {
    constructor(t, n) {
      (this.position = t), (this.before = n);
    }
  };
function On(e) {
  return `${e.before ? "b" : "a"}:${e.position.map((t) => ri(t)).join(",")}`;
}
var Dt = class {
  constructor(t, n = "asc") {
    (this.field = t), (this.dir = n);
  }
};
function gl(e, t) {
  return e.dir === t.dir && e.field.isEqual(t.field);
}
function Go(e, t, n) {
  let r = 0;
  for (let i = 0; i < e.position.length; i++) {
    let s = t[i],
      o = e.position[i];
    if (
      (s.field.isKeyField()
        ? (r = w.comparator(w.fromName(o.referenceValue), n.key))
        : (r = Xt(o, n.data.field(s.field))),
      s.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return e.before ? r <= 0 : r < 0;
}
function Fo(e, t) {
  if (e === null) return t === null;
  if (
    t === null ||
    e.before !== t.before ||
    e.position.length !== t.position.length
  )
    return !1;
  for (let n = 0; n < e.position.length; n++)
    if (!ot(e.position[n], t.position[n])) return !1;
  return !0;
}
var Qt = class {
  constructor(
    t,
    n = null,
    r = [],
    i = [],
    s = null,
    o = "F",
    a = null,
    c = null
  ) {
    (this.path = t),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.limitType = o),
      (this.startAt = a),
      (this.endAt = c),
      (this.p = null),
      (this.T = null),
      this.startAt,
      this.endAt;
  }
};
function ml(e, t, n, r, i, s, o, a) {
  return new Qt(e, t, n, r, i, s, o, a);
}
function ui(e) {
  return new Qt(e);
}
function Vn(e) {
  return !Yt(e.limit) && e.limitType === "F";
}
function Pn(e) {
  return !Yt(e.limit) && e.limitType === "L";
}
function Wo(e) {
  return e.explicitOrderBy.length > 0 ? e.explicitOrderBy[0].field : null;
}
function Yo(e) {
  for (let t of e.filters) if (t.g()) return t.field;
  return null;
}
function yl(e) {
  return e.collectionGroup !== null;
}
function xe(e) {
  let t = S(e);
  if (t.p === null) {
    t.p = [];
    let n = Yo(t),
      r = Wo(t);
    if (n !== null && r === null)
      n.isKeyField() || t.p.push(new Dt(n)),
        t.p.push(new Dt(J.keyField(), "asc"));
    else {
      let i = !1;
      for (let s of t.explicitOrderBy)
        t.p.push(s), s.field.isKeyField() && (i = !0);
      if (!i) {
        let s =
          t.explicitOrderBy.length > 0
            ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir
            : "asc";
        t.p.push(new Dt(J.keyField(), s));
      }
    }
  }
  return t.p;
}
function Ct(e) {
  let t = S(e);
  if (!t.T)
    if (t.limitType === "F")
      t.T = Po(
        t.path,
        t.collectionGroup,
        xe(t),
        t.filters,
        t.limit,
        t.startAt,
        t.endAt
      );
    else {
      let n = [];
      for (let s of xe(t)) {
        let o = s.dir === "desc" ? "asc" : "desc";
        n.push(new Dt(s.field, o));
      }
      let r = t.endAt ? new Mn(t.endAt.position, !t.endAt.before) : null,
        i = t.startAt ? new Mn(t.startAt.position, !t.startAt.before) : null;
      t.T = Po(t.path, t.collectionGroup, n, t.filters, t.limit, r, i);
    }
  return t.T;
}
function vl(e, t, n) {
  return new Qt(
    e.path,
    e.collectionGroup,
    e.explicitOrderBy.slice(),
    e.filters.slice(),
    t,
    n,
    e.startAt,
    e.endAt
  );
}
function Fn(e, t) {
  return ai(Ct(e), Ct(t)) && e.limitType === t.limitType;
}
function Xo(e) {
  return `${oi(Ct(e))}|lt:${e.limitType}`;
}
function hi(e) {
  return `Query(target=${pl(Ct(e))}; limitType=${e.limitType})`;
}
function Un(e, t) {
  return (
    t.isFoundDocument() &&
    (function (n, r) {
      let i = r.key.path;
      return n.collectionGroup !== null
        ? r.key.hasCollectionId(n.collectionGroup) && n.path.isPrefixOf(i)
        : w.isDocumentKey(n.path)
        ? n.path.isEqual(i)
        : n.path.isImmediateParentOf(i);
    })(e, t) &&
    (function (n, r) {
      for (let i of n.explicitOrderBy)
        if (!i.field.isKeyField() && r.data.field(i.field) === null) return !1;
      return !0;
    })(e, t) &&
    (function (n, r) {
      for (let i of n.filters) if (!i.matches(r)) return !1;
      return !0;
    })(e, t) &&
    (function (n, r) {
      return !(
        (n.startAt && !Go(n.startAt, xe(n), r)) ||
        (n.endAt && Go(n.endAt, xe(n), r))
      );
    })(e, t)
  );
}
function Qo(e) {
  return (t, n) => {
    let r = !1;
    for (let i of xe(e)) {
      let s = wl(i, t, n);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function wl(e, t, n) {
  let r = e.field.isKeyField()
    ? w.comparator(t.key, n.key)
    : (function (i, s, o) {
        let a = s.data.field(i),
          c = o.data.field(i);
        return a !== null && c !== null ? Xt(a, c) : T();
      })(e.field, t, n);
  switch (e.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return T();
  }
}
function Jo(e, t) {
  if (e.I) {
    if (isNaN(t)) return { doubleValue: "NaN" };
    if (t === 1 / 0) return { doubleValue: "Infinity" };
    if (t === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: Ln(t) ? "-0" : t };
}
function Zo(e) {
  return { integerValue: "" + e };
}
function El(e, t) {
  return fl(t) ? Zo(t) : Jo(e, t);
}
var Oe = class {
  constructor() {
    this._ = void 0;
  }
};
function Tl(e, t, n) {
  return e instanceof Me
    ? (function (r, i) {
        let s = {
          fields: {
            __type__: { stringValue: "server_timestamp" },
            __local_write_time__: {
              timestampValue: { seconds: r.seconds, nanos: r.nanoseconds },
            },
          },
        };
        return i && (s.fields.__previous_value__ = i), { mapValue: s };
      })(n, t)
    : e instanceof Jt
    ? ea(e, t)
    : e instanceof Zt
    ? na(e, t)
    : (function (r, i) {
        let s = ta(r, i),
          o = ra(s) + ra(r.A);
        return ii(s) && ii(r.A) ? Zo(o) : Jo(r.R, o);
      })(e, t);
}
function Il(e, t, n) {
  return e instanceof Jt ? ea(e, t) : e instanceof Zt ? na(e, t) : n;
}
function ta(e, t) {
  return e instanceof Ve
    ? ii((n = t)) ||
      (function (r) {
        return !!r && "doubleValue" in r;
      })(n)
      ? t
      : { integerValue: 0 }
    : null;
  var n;
}
var Me = class extends Oe {},
  Jt = class extends Oe {
    constructor(t) {
      super(), (this.elements = t);
    }
  };
function ea(e, t) {
  let n = ia(t);
  for (let r of e.elements) n.some((i) => ot(i, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
var Zt = class extends Oe {
  constructor(t) {
    super(), (this.elements = t);
  }
};
function na(e, t) {
  let n = ia(t);
  for (let r of e.elements) n = n.filter((i) => !ot(i, r));
  return { arrayValue: { values: n } };
}
var Ve = class extends Oe {
  constructor(t, n) {
    super(), (this.R = t), (this.A = n);
  }
};
function ra(e) {
  return M(e.integerValue || e.doubleValue);
}
function ia(e) {
  return si(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
}
function Sl(e, t) {
  return (
    e.field.isEqual(t.field) &&
    (function (n, r) {
      return (n instanceof Jt && r instanceof Jt) ||
        (n instanceof Zt && r instanceof Zt)
        ? Kt(n.elements, r.elements, ot)
        : n instanceof Ve && r instanceof Ve
        ? ot(n.A, r.A)
        : n instanceof Me && r instanceof Me;
    })(e.transform, t.transform)
  );
}
var sa = class {
    constructor(t, n) {
      (this.version = t), (this.transformResults = n);
    }
  },
  gt = class {
    constructor(t, n) {
      (this.updateTime = t), (this.exists = n);
    }
    static none() {
      return new gt();
    }
    static exists(t) {
      return new gt(void 0, t);
    }
    static updateTime(t) {
      return new gt(t);
    }
    get isNone() {
      return this.updateTime === void 0 && this.exists === void 0;
    }
    isEqual(t) {
      return (
        this.exists === t.exists &&
        (this.updateTime
          ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
          : !t.updateTime)
      );
    }
  };
function qn(e, t) {
  return e.updateTime !== void 0
    ? t.isFoundDocument() && t.version.isEqual(e.updateTime)
    : e.exists === void 0 || e.exists === t.isFoundDocument();
}
var Pe = class {};
function Al(e, t, n) {
  e instanceof Fe
    ? (function (r, i, s) {
        let o = r.value.clone(),
          a = aa(r.fieldTransforms, i, s.transformResults);
        o.setAll(a),
          i.convertToFoundDocument(s.version, o).setHasCommittedMutations();
      })(e, t, n)
    : e instanceof Rt
    ? (function (r, i, s) {
        if (!qn(r.precondition, i))
          return void i.convertToUnknownDocument(s.version);
        let o = aa(r.fieldTransforms, i, s.transformResults),
          a = i.data;
        a.setAll(oa(r)),
          a.setAll(o),
          i.convertToFoundDocument(s.version, a).setHasCommittedMutations();
      })(e, t, n)
    : (function (r, i, s) {
        i.convertToNoDocument(s.version).setHasCommittedMutations();
      })(0, t, n);
}
function li(e, t, n) {
  e instanceof Fe
    ? (function (r, i, s) {
        if (!qn(r.precondition, i)) return;
        let o = r.value.clone(),
          a = ua(r.fieldTransforms, s, i);
        o.setAll(a), i.convertToFoundDocument(ca(i), o).setHasLocalMutations();
      })(e, t, n)
    : e instanceof Rt
    ? (function (r, i, s) {
        if (!qn(r.precondition, i)) return;
        let o = ua(r.fieldTransforms, s, i),
          a = i.data;
        a.setAll(oa(r)),
          a.setAll(o),
          i.convertToFoundDocument(ca(i), a).setHasLocalMutations();
      })(e, t, n)
    : (function (r, i) {
        qn(r.precondition, i) && i.convertToNoDocument(N.min());
      })(e, t);
}
function bl(e, t) {
  let n = null;
  for (let r of e.fieldTransforms) {
    let i = t.data.field(r.field),
      s = ta(r.transform, i || null);
    s != null && (n == null && (n = it.empty()), n.set(r.field, s));
  }
  return n || null;
}
function ha(e, t) {
  return (
    e.type === t.type &&
    !!e.key.isEqual(t.key) &&
    !!e.precondition.isEqual(t.precondition) &&
    !!(function (n, r) {
      return (
        (n === void 0 && r === void 0) ||
        (!(!n || !r) && Kt(n, r, (i, s) => Sl(i, s)))
      );
    })(e.fieldTransforms, t.fieldTransforms) &&
    (e.type === 0
      ? e.value.isEqual(t.value)
      : e.type !== 1 ||
        (e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask)))
  );
}
function ca(e) {
  return e.isFoundDocument() ? e.version : N.min();
}
var Fe = class extends Pe {
    constructor(t, n, r, i = []) {
      super(),
        (this.key = t),
        (this.value = n),
        (this.precondition = r),
        (this.fieldTransforms = i),
        (this.type = 0);
    }
  },
  Rt = class extends Pe {
    constructor(t, n, r, i, s = []) {
      super(),
        (this.key = t),
        (this.data = n),
        (this.fieldMask = r),
        (this.precondition = i),
        (this.fieldTransforms = s),
        (this.type = 1);
    }
  };
function oa(e) {
  let t = new Map();
  return (
    e.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        let r = e.data.field(n);
        t.set(n, r);
      }
    }),
    t
  );
}
function aa(e, t, n) {
  let r = new Map();
  R(e.length === n.length);
  for (let i = 0; i < n.length; i++) {
    let s = e[i],
      o = s.transform,
      a = t.data.field(s.field);
    r.set(s.field, Il(o, a, n[i]));
  }
  return r;
}
function ua(e, t, n) {
  let r = new Map();
  for (let i of e) {
    let s = i.transform,
      o = n.data.field(i.field);
    r.set(i.field, Tl(s, o, t));
  }
  return r;
}
var fi = class extends Pe {
    constructor(t, n) {
      super(),
        (this.key = t),
        (this.precondition = n),
        (this.type = 2),
        (this.fieldTransforms = []);
    }
  },
  la = class extends Pe {
    constructor(t, n) {
      super(),
        (this.key = t),
        (this.precondition = n),
        (this.type = 3),
        (this.fieldTransforms = []);
    }
  };
var fa = class {
  constructor(t) {
    this.count = t;
  }
};
var V, A;
function Nl(e) {
  switch (e) {
    case f.OK:
      return T();
    case f.CANCELLED:
    case f.UNKNOWN:
    case f.DEADLINE_EXCEEDED:
    case f.RESOURCE_EXHAUSTED:
    case f.INTERNAL:
    case f.UNAVAILABLE:
    case f.UNAUTHENTICATED:
      return !1;
    case f.INVALID_ARGUMENT:
    case f.NOT_FOUND:
    case f.ALREADY_EXISTS:
    case f.PERMISSION_DENIED:
    case f.FAILED_PRECONDITION:
    case f.ABORTED:
    case f.OUT_OF_RANGE:
    case f.UNIMPLEMENTED:
    case f.DATA_LOSS:
      return !0;
    default:
      return T();
  }
}
function da(e) {
  if (e === void 0) return dt("GRPC error has no .code"), f.UNKNOWN;
  switch (e) {
    case V.OK:
      return f.OK;
    case V.CANCELLED:
      return f.CANCELLED;
    case V.UNKNOWN:
      return f.UNKNOWN;
    case V.DEADLINE_EXCEEDED:
      return f.DEADLINE_EXCEEDED;
    case V.RESOURCE_EXHAUSTED:
      return f.RESOURCE_EXHAUSTED;
    case V.INTERNAL:
      return f.INTERNAL;
    case V.UNAVAILABLE:
      return f.UNAVAILABLE;
    case V.UNAUTHENTICATED:
      return f.UNAUTHENTICATED;
    case V.INVALID_ARGUMENT:
      return f.INVALID_ARGUMENT;
    case V.NOT_FOUND:
      return f.NOT_FOUND;
    case V.ALREADY_EXISTS:
      return f.ALREADY_EXISTS;
    case V.PERMISSION_DENIED:
      return f.PERMISSION_DENIED;
    case V.FAILED_PRECONDITION:
      return f.FAILED_PRECONDITION;
    case V.ABORTED:
      return f.ABORTED;
    case V.OUT_OF_RANGE:
      return f.OUT_OF_RANGE;
    case V.UNIMPLEMENTED:
      return f.UNIMPLEMENTED;
    case V.DATA_LOSS:
      return f.DATA_LOSS;
    default:
      return T();
  }
}
((A = V || (V = {}))[(A.OK = 0)] = "OK"),
  (A[(A.CANCELLED = 1)] = "CANCELLED"),
  (A[(A.UNKNOWN = 2)] = "UNKNOWN"),
  (A[(A.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (A[(A.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (A[(A.NOT_FOUND = 5)] = "NOT_FOUND"),
  (A[(A.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (A[(A.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (A[(A.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (A[(A.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (A[(A.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (A[(A.ABORTED = 10)] = "ABORTED"),
  (A[(A.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (A[(A.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (A[(A.INTERNAL = 13)] = "INTERNAL"),
  (A[(A.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (A[(A.DATA_LOSS = 15)] = "DATA_LOSS");
var z = class {
    constructor(t, n) {
      (this.comparator = t), (this.root = n || U.EMPTY);
    }
    insert(t, n) {
      return new z(
        this.comparator,
        this.root
          .insert(t, n, this.comparator)
          .copy(null, null, U.BLACK, null, null)
      );
    }
    remove(t) {
      return new z(
        this.comparator,
        this.root
          .remove(t, this.comparator)
          .copy(null, null, U.BLACK, null, null)
      );
    }
    get(t) {
      let n = this.root;
      for (; !n.isEmpty(); ) {
        let r = this.comparator(t, n.key);
        if (r === 0) return n.value;
        r < 0 ? (n = n.left) : r > 0 && (n = n.right);
      }
      return null;
    }
    indexOf(t) {
      let n = 0,
        r = this.root;
      for (; !r.isEmpty(); ) {
        let i = this.comparator(t, r.key);
        if (i === 0) return n + r.left.size;
        i < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right));
      }
      return -1;
    }
    isEmpty() {
      return this.root.isEmpty();
    }
    get size() {
      return this.root.size;
    }
    minKey() {
      return this.root.minKey();
    }
    maxKey() {
      return this.root.maxKey();
    }
    inorderTraversal(t) {
      return this.root.inorderTraversal(t);
    }
    forEach(t) {
      this.inorderTraversal((n, r) => (t(n, r), !1));
    }
    toString() {
      let t = [];
      return (
        this.inorderTraversal((n, r) => (t.push(`${n}:${r}`), !1)),
        `{${t.join(", ")}}`
      );
    }
    reverseTraversal(t) {
      return this.root.reverseTraversal(t);
    }
    getIterator() {
      return new Ue(this.root, null, this.comparator, !1);
    }
    getIteratorFrom(t) {
      return new Ue(this.root, t, this.comparator, !1);
    }
    getReverseIterator() {
      return new Ue(this.root, null, this.comparator, !0);
    }
    getReverseIteratorFrom(t) {
      return new Ue(this.root, t, this.comparator, !0);
    }
  },
  Ue = class {
    constructor(t, n, r, i) {
      (this.isReverse = i), (this.nodeStack = []);
      let s = 1;
      for (; !t.isEmpty(); )
        if (((s = n ? r(t.key, n) : 1), i && (s *= -1), s < 0))
          t = this.isReverse ? t.left : t.right;
        else {
          if (s === 0) {
            this.nodeStack.push(t);
            break;
          }
          this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left);
        }
    }
    getNext() {
      let t = this.nodeStack.pop(),
        n = { key: t.key, value: t.value };
      if (this.isReverse)
        for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.right);
      else
        for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.left);
      return n;
    }
    hasNext() {
      return this.nodeStack.length > 0;
    }
    peek() {
      if (this.nodeStack.length === 0) return null;
      let t = this.nodeStack[this.nodeStack.length - 1];
      return { key: t.key, value: t.value };
    }
  },
  U = class {
    constructor(t, n, r, i, s) {
      (this.key = t),
        (this.value = n),
        (this.color = r ?? U.RED),
        (this.left = i ?? U.EMPTY),
        (this.right = s ?? U.EMPTY),
        (this.size = this.left.size + 1 + this.right.size);
    }
    copy(t, n, r, i, s) {
      return new U(
        t ?? this.key,
        n ?? this.value,
        r ?? this.color,
        i ?? this.left,
        s ?? this.right
      );
    }
    isEmpty() {
      return !1;
    }
    inorderTraversal(t) {
      return (
        this.left.inorderTraversal(t) ||
        t(this.key, this.value) ||
        this.right.inorderTraversal(t)
      );
    }
    reverseTraversal(t) {
      return (
        this.right.reverseTraversal(t) ||
        t(this.key, this.value) ||
        this.left.reverseTraversal(t)
      );
    }
    min() {
      return this.left.isEmpty() ? this : this.left.min();
    }
    minKey() {
      return this.min().key;
    }
    maxKey() {
      return this.right.isEmpty() ? this.key : this.right.maxKey();
    }
    insert(t, n, r) {
      let i = this,
        s = r(t, i.key);
      return (
        (i =
          s < 0
            ? i.copy(null, null, null, i.left.insert(t, n, r), null)
            : s === 0
            ? i.copy(null, n, null, null, null)
            : i.copy(null, null, null, null, i.right.insert(t, n, r))),
        i.fixUp()
      );
    }
    removeMin() {
      if (this.left.isEmpty()) return U.EMPTY;
      let t = this;
      return (
        t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
        (t = t.copy(null, null, null, t.left.removeMin(), null)),
        t.fixUp()
      );
    }
    remove(t, n) {
      let r,
        i = this;
      if (n(t, i.key) < 0)
        i.left.isEmpty() ||
          i.left.isRed() ||
          i.left.left.isRed() ||
          (i = i.moveRedLeft()),
          (i = i.copy(null, null, null, i.left.remove(t, n), null));
      else {
        if (
          (i.left.isRed() && (i = i.rotateRight()),
          i.right.isEmpty() ||
            i.right.isRed() ||
            i.right.left.isRed() ||
            (i = i.moveRedRight()),
          n(t, i.key) === 0)
        ) {
          if (i.right.isEmpty()) return U.EMPTY;
          (r = i.right.min()),
            (i = i.copy(r.key, r.value, null, null, i.right.removeMin()));
        }
        i = i.copy(null, null, null, null, i.right.remove(t, n));
      }
      return i.fixUp();
    }
    isRed() {
      return this.color;
    }
    fixUp() {
      let t = this;
      return (
        t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
        t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
        t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
        t
      );
    }
    moveRedLeft() {
      let t = this.colorFlip();
      return (
        t.right.left.isRed() &&
          ((t = t.copy(null, null, null, null, t.right.rotateRight())),
          (t = t.rotateLeft()),
          (t = t.colorFlip())),
        t
      );
    }
    moveRedRight() {
      let t = this.colorFlip();
      return (
        t.left.left.isRed() && ((t = t.rotateRight()), (t = t.colorFlip())), t
      );
    }
    rotateLeft() {
      let t = this.copy(null, null, U.RED, null, this.right.left);
      return this.right.copy(null, null, this.color, t, null);
    }
    rotateRight() {
      let t = this.copy(null, null, U.RED, this.left.right, null);
      return this.left.copy(null, null, this.color, null, t);
    }
    colorFlip() {
      let t = this.left.copy(null, null, !this.left.color, null, null),
        n = this.right.copy(null, null, !this.right.color, null, null);
      return this.copy(null, null, !this.color, t, n);
    }
    checkMaxDepth() {
      let t = this.check();
      return Math.pow(2, t) <= this.size + 1;
    }
    check() {
      if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw T();
      let t = this.left.check();
      if (t !== this.right.check()) throw T();
      return t + (this.isRed() ? 0 : 1);
    }
  };
(U.EMPTY = null), (U.RED = !0), (U.BLACK = !1);
U.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw T();
  }
  get value() {
    throw T();
  }
  get color() {
    throw T();
  }
  get left() {
    throw T();
  }
  get right() {
    throw T();
  }
  copy(e, t, n, r, i) {
    return this;
  }
  insert(e, t, n) {
    return new U(e, t);
  }
  remove(e, t) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(e) {
    return !1;
  }
  reverseTraversal(e) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
var q = class {
    constructor(t) {
      (this.comparator = t), (this.data = new z(this.comparator));
    }
    has(t) {
      return this.data.get(t) !== null;
    }
    first() {
      return this.data.minKey();
    }
    last() {
      return this.data.maxKey();
    }
    get size() {
      return this.data.size;
    }
    indexOf(t) {
      return this.data.indexOf(t);
    }
    forEach(t) {
      this.data.inorderTraversal((n, r) => (t(n), !1));
    }
    forEachInRange(t, n) {
      let r = this.data.getIteratorFrom(t[0]);
      for (; r.hasNext(); ) {
        let i = r.getNext();
        if (this.comparator(i.key, t[1]) >= 0) return;
        n(i.key);
      }
    }
    forEachWhile(t, n) {
      let r;
      for (
        r =
          n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
        r.hasNext();

      )
        if (!t(r.getNext().key)) return;
    }
    firstAfterOrEqual(t) {
      let n = this.data.getIteratorFrom(t);
      return n.hasNext() ? n.getNext().key : null;
    }
    getIterator() {
      return new di(this.data.getIterator());
    }
    getIteratorFrom(t) {
      return new di(this.data.getIteratorFrom(t));
    }
    add(t) {
      return this.copy(this.data.remove(t).insert(t, !0));
    }
    delete(t) {
      return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }
    isEmpty() {
      return this.data.isEmpty();
    }
    unionWith(t) {
      let n = this;
      return (
        n.size < t.size && ((n = t), (t = this)),
        t.forEach((r) => {
          n = n.add(r);
        }),
        n
      );
    }
    isEqual(t) {
      if (!(t instanceof q) || this.size !== t.size) return !1;
      let n = this.data.getIterator(),
        r = t.data.getIterator();
      for (; n.hasNext(); ) {
        let i = n.getNext().key,
          s = r.getNext().key;
        if (this.comparator(i, s) !== 0) return !1;
      }
      return !0;
    }
    toArray() {
      let t = [];
      return (
        this.forEach((n) => {
          t.push(n);
        }),
        t
      );
    }
    toString() {
      let t = [];
      return this.forEach((n) => t.push(n)), "SortedSet(" + t.toString() + ")";
    }
    copy(t) {
      let n = new q(this.comparator);
      return (n.data = t), n;
    }
  },
  di = class {
    constructor(t) {
      this.iter = t;
    }
    getNext() {
      return this.iter.getNext().key;
    }
    hasNext() {
      return this.iter.hasNext();
    }
  };
var Dl = new z(w.comparator);
function _t() {
  return Dl;
}
var Cl = new z(w.comparator);
function pi() {
  return Cl;
}
var Rl = new z(w.comparator);
function _l() {
  return Rl;
}
var kl = new q(w.comparator);
function k(...e) {
  let t = kl;
  for (let n of e) t = t.add(n);
  return t;
}
var Ll = new q(D);
function pa() {
  return Ll;
}
var qe = class {
    constructor(t, n, r, i, s) {
      (this.snapshotVersion = t),
        (this.targetChanges = n),
        (this.targetMismatches = r),
        (this.documentUpdates = i),
        (this.resolvedLimboDocuments = s);
    }
    static createSynthesizedRemoteEventForCurrentChange(t, n) {
      let r = new Map();
      return (
        r.set(t, te.createSynthesizedTargetChangeForCurrentChange(t, n)),
        new qe(N.min(), r, pa(), _t(), k())
      );
    }
  },
  te = class {
    constructor(t, n, r, i, s) {
      (this.resumeToken = t),
        (this.current = n),
        (this.addedDocuments = r),
        (this.modifiedDocuments = i),
        (this.removedDocuments = s);
    }
    static createSynthesizedTargetChangeForCurrentChange(t, n) {
      return new te(H.EMPTY_BYTE_STRING, n, k(), k(), k());
    }
  };
var je = class {
    constructor(t, n, r, i) {
      (this.P = t), (this.removedTargetIds = n), (this.key = r), (this.v = i);
    }
  },
  gi = class {
    constructor(t, n) {
      (this.targetId = t), (this.V = n);
    }
  },
  mi = class {
    constructor(t, n, r = H.EMPTY_BYTE_STRING, i = null) {
      (this.state = t),
        (this.targetIds = n),
        (this.resumeToken = r),
        (this.cause = i);
    }
  },
  yi = class {
    constructor() {
      (this.S = 0),
        (this.D = ga()),
        (this.C = H.EMPTY_BYTE_STRING),
        (this.N = !1),
        (this.k = !0);
    }
    get current() {
      return this.N;
    }
    get resumeToken() {
      return this.C;
    }
    get $() {
      return this.S !== 0;
    }
    get O() {
      return this.k;
    }
    F(t) {
      t.approximateByteSize() > 0 && ((this.k = !0), (this.C = t));
    }
    M() {
      let t = k(),
        n = k(),
        r = k();
      return (
        this.D.forEach((i, s) => {
          switch (s) {
            case 0:
              t = t.add(i);
              break;
            case 2:
              n = n.add(i);
              break;
            case 1:
              r = r.add(i);
              break;
            default:
              T();
          }
        }),
        new te(this.C, this.N, t, n, r)
      );
    }
    L() {
      (this.k = !1), (this.D = ga());
    }
    B(t, n) {
      (this.k = !0), (this.D = this.D.insert(t, n));
    }
    U(t) {
      (this.k = !0), (this.D = this.D.remove(t));
    }
    q() {
      this.S += 1;
    }
    K() {
      this.S -= 1;
    }
    j() {
      (this.k = !0), (this.N = !0);
    }
  },
  ma = class {
    constructor(t) {
      (this.W = t),
        (this.G = new Map()),
        (this.H = _t()),
        (this.J = ya()),
        (this.Y = new q(D));
    }
    X(t) {
      for (let n of t.P)
        t.v && t.v.isFoundDocument() ? this.Z(n, t.v) : this.tt(n, t.key, t.v);
      for (let n of t.removedTargetIds) this.tt(n, t.key, t.v);
    }
    et(t) {
      this.forEachTarget(t, (n) => {
        let r = this.nt(n);
        switch (t.state) {
          case 0:
            this.st(n) && r.F(t.resumeToken);
            break;
          case 1:
            r.K(), r.$ || r.L(), r.F(t.resumeToken);
            break;
          case 2:
            r.K(), r.$ || this.removeTarget(n);
            break;
          case 3:
            this.st(n) && (r.j(), r.F(t.resumeToken));
            break;
          case 4:
            this.st(n) && (this.it(n), r.F(t.resumeToken));
            break;
          default:
            T();
        }
      });
    }
    forEachTarget(t, n) {
      t.targetIds.length > 0
        ? t.targetIds.forEach(n)
        : this.G.forEach((r, i) => {
            this.st(i) && n(i);
          });
    }
    rt(t) {
      let n = t.targetId,
        r = t.V.count,
        i = this.ot(n);
      if (i) {
        let s = i.target;
        if (ci(s))
          if (r === 0) {
            let o = new w(s.path);
            this.tt(n, o, K.newNoDocument(o, N.min()));
          } else R(r === 1);
        else this.ct(n) !== r && (this.it(n), (this.Y = this.Y.add(n)));
      }
    }
    ut(t) {
      let n = new Map();
      this.G.forEach((s, o) => {
        let a = this.ot(o);
        if (a) {
          if (s.current && ci(a.target)) {
            let c = new w(a.target.path);
            this.H.get(c) !== null ||
              this.at(o, c) ||
              this.tt(o, c, K.newNoDocument(c, t));
          }
          s.O && (n.set(o, s.M()), s.L());
        }
      });
      let r = k();
      this.J.forEach((s, o) => {
        let a = !0;
        o.forEachWhile((c) => {
          let u = this.ot(c);
          return !u || u.purpose === 2 || ((a = !1), !1);
        }),
          a && (r = r.add(s));
      });
      let i = new qe(t, n, this.Y, this.H, r);
      return (this.H = _t()), (this.J = ya()), (this.Y = new q(D)), i;
    }
    Z(t, n) {
      if (!this.st(t)) return;
      let r = this.at(t, n.key) ? 2 : 0;
      this.nt(t).B(n.key, r),
        (this.H = this.H.insert(n.key, n)),
        (this.J = this.J.insert(n.key, this.ht(n.key).add(t)));
    }
    tt(t, n, r) {
      if (!this.st(t)) return;
      let i = this.nt(t);
      this.at(t, n) ? i.B(n, 1) : i.U(n),
        (this.J = this.J.insert(n, this.ht(n).delete(t))),
        r && (this.H = this.H.insert(n, r));
    }
    removeTarget(t) {
      this.G.delete(t);
    }
    ct(t) {
      let n = this.nt(t).M();
      return (
        this.W.getRemoteKeysForTarget(t).size +
        n.addedDocuments.size -
        n.removedDocuments.size
      );
    }
    q(t) {
      this.nt(t).q();
    }
    nt(t) {
      let n = this.G.get(t);
      return n || ((n = new yi()), this.G.set(t, n)), n;
    }
    ht(t) {
      let n = this.J.get(t);
      return n || ((n = new q(D)), (this.J = this.J.insert(t, n))), n;
    }
    st(t) {
      let n = this.ot(t) !== null;
      return n || v("WatchChangeAggregator", "Detected inactive target", t), n;
    }
    ot(t) {
      let n = this.G.get(t);
      return n && n.$ ? null : this.W.lt(t);
    }
    it(t) {
      this.G.set(t, new yi()),
        this.W.getRemoteKeysForTarget(t).forEach((n) => {
          this.tt(t, n, null);
        });
    }
    at(t, n) {
      return this.W.getRemoteKeysForTarget(t).has(n);
    }
  };
function ya() {
  return new z(w.comparator);
}
function ga() {
  return new z(w.comparator);
}
var xl = (() => ({ asc: "ASCENDING", desc: "DESCENDING" }))(),
  Ol = (() => ({
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  }))(),
  va = class {
    constructor(t, n) {
      (this.databaseId = t), (this.I = n);
    }
  };
function jn(e, t) {
  return e.I
    ? `${new Date(1e3 * t.seconds)
        .toISOString()
        .replace(/\.\d*/, "")
        .replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`
    : { seconds: "" + t.seconds, nanos: t.nanoseconds };
}
function wa(e, t) {
  return e.I ? t.toBase64() : t.toUint8Array();
}
function Ml(e, t) {
  return jn(e, t.toTimestamp());
}
function ut(e) {
  return (
    R(!!e),
    N.fromTimestamp(
      (function (t) {
        let n = pt(t);
        return new W(n.seconds, n.nanos);
      })(e)
    )
  );
}
function vi(e, t) {
  return (function (n) {
    return new _(["projects", n.projectId, "databases", n.database]);
  })(e)
    .child("documents")
    .child(t)
    .canonicalString();
}
function Ta(e) {
  let t = _.fromString(e);
  return R(Ea(t)), t;
}
function wi(e, t) {
  return vi(e.databaseId, t.path);
}
function Ei(e, t) {
  let n = Ta(t);
  if (n.get(1) !== e.databaseId.projectId)
    throw new y(
      f.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n.get(1) +
        " vs " +
        e.databaseId.projectId
    );
  if (n.get(3) !== e.databaseId.database)
    throw new y(
      f.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n.get(3) +
        " vs " +
        e.databaseId.database
    );
  return new w(Ia(n));
}
function Ti(e, t) {
  return vi(e.databaseId, t);
}
function Vl(e) {
  let t = Ta(e);
  return t.length === 4 ? _.emptyPath() : Ia(t);
}
function Ii(e) {
  return new _([
    "projects",
    e.databaseId.projectId,
    "databases",
    e.databaseId.database,
  ]).canonicalString();
}
function Ia(e) {
  return R(e.length > 4 && e.get(4) === "documents"), e.popFirst(5);
}
function Sa(e, t, n) {
  return { name: wi(e, t), fields: n.value.mapValue.fields };
}
function Pl(e, t) {
  let n;
  if ("targetChange" in t) {
    t.targetChange;
    let r = (function (c) {
        return c === "NO_CHANGE"
          ? 0
          : c === "ADD"
          ? 1
          : c === "REMOVE"
          ? 2
          : c === "CURRENT"
          ? 3
          : c === "RESET"
          ? 4
          : T();
      })(t.targetChange.targetChangeType || "NO_CHANGE"),
      i = t.targetChange.targetIds || [],
      s = (function (c, u) {
        return c.I
          ? (R(u === void 0 || typeof u == "string"),
            H.fromBase64String(u || ""))
          : (R(u === void 0 || u instanceof Uint8Array),
            H.fromUint8Array(u || new Uint8Array()));
      })(e, t.targetChange.resumeToken),
      o = t.targetChange.cause,
      a =
        o &&
        (function (c) {
          let u = c.code === void 0 ? f.UNKNOWN : da(c.code);
          return new y(u, c.message || "");
        })(o);
    n = new mi(r, i, s, a || null);
  } else if ("documentChange" in t) {
    t.documentChange;
    let r = t.documentChange;
    r.document, r.document.name, r.document.updateTime;
    let i = Ei(e, r.document.name),
      s = ut(r.document.updateTime),
      o = new it({ mapValue: { fields: r.document.fields } }),
      a = K.newFoundDocument(i, s, o),
      c = r.targetIds || [],
      u = r.removedTargetIds || [];
    n = new je(c, u, a.key, a);
  } else if ("documentDelete" in t) {
    t.documentDelete;
    let r = t.documentDelete;
    r.document;
    let i = Ei(e, r.document),
      s = r.readTime ? ut(r.readTime) : N.min(),
      o = K.newNoDocument(i, s),
      a = r.removedTargetIds || [];
    n = new je([], a, o.key, o);
  } else if ("documentRemove" in t) {
    t.documentRemove;
    let r = t.documentRemove;
    r.document;
    let i = Ei(e, r.document),
      s = r.removedTargetIds || [];
    n = new je([], s, i, null);
  } else {
    if (!("filter" in t)) return T();
    {
      t.filter;
      let r = t.filter;
      r.targetId;
      let i = r.count || 0,
        s = new fa(i),
        o = r.targetId;
      n = new gi(o, s);
    }
  }
  return n;
}
function Ul(e, t) {
  let n;
  if (t instanceof Fe) n = { update: Sa(e, t.key, t.value) };
  else if (t instanceof fi) n = { delete: wi(e, t.key) };
  else if (t instanceof Rt)
    n = { update: Sa(e, t.key, t.data), updateMask: Fl(t.fieldMask) };
  else {
    if (!(t instanceof la)) return T();
    n = { verify: wi(e, t.key) };
  }
  return (
    t.fieldTransforms.length > 0 &&
      (n.updateTransforms = t.fieldTransforms.map((r) =>
        (function (i, s) {
          let o = s.transform;
          if (o instanceof Me)
            return {
              fieldPath: s.field.canonicalString(),
              setToServerValue: "REQUEST_TIME",
            };
          if (o instanceof Jt)
            return {
              fieldPath: s.field.canonicalString(),
              appendMissingElements: { values: o.elements },
            };
          if (o instanceof Zt)
            return {
              fieldPath: s.field.canonicalString(),
              removeAllFromArray: { values: o.elements },
            };
          if (o instanceof Ve)
            return { fieldPath: s.field.canonicalString(), increment: o.A };
          throw T();
        })(0, r)
      )),
    t.precondition.isNone ||
      (n.currentDocument = (function (r, i) {
        return i.updateTime !== void 0
          ? { updateTime: Ml(r, i.updateTime) }
          : i.exists !== void 0
          ? { exists: i.exists }
          : T();
      })(e, t.precondition)),
    n
  );
}
function ql(e, t) {
  return e && e.length > 0
    ? (R(t !== void 0),
      e.map((n) =>
        (function (r, i) {
          let s = r.updateTime ? ut(r.updateTime) : ut(i);
          return (
            s.isEqual(N.min()) && (s = ut(i)),
            new sa(s, r.transformResults || [])
          );
        })(n, t)
      ))
    : [];
}
function jl(e, t) {
  return { documents: [Ti(e, t.path)] };
}
function Hl(e, t) {
  let n = { structuredQuery: {} },
    r = t.path;
  t.collectionGroup !== null
    ? ((n.parent = Ti(e, r)),
      (n.structuredQuery.from = [
        { collectionId: t.collectionGroup, allDescendants: !0 },
      ]))
    : ((n.parent = Ti(e, r.popLast())),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]));
  let i = (function (a) {
    if (a.length === 0) return;
    let c = a.map((u) =>
      (function (h) {
        if (h.op === "==") {
          if (Oo(h.value))
            return { unaryFilter: { field: ee(h.field), op: "IS_NAN" } };
          if (xo(h.value))
            return { unaryFilter: { field: ee(h.field), op: "IS_NULL" } };
        } else if (h.op === "!=") {
          if (Oo(h.value))
            return { unaryFilter: { field: ee(h.field), op: "IS_NOT_NAN" } };
          if (xo(h.value))
            return { unaryFilter: { field: ee(h.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: ee(h.field), op: Bl(h.op), value: h.value },
        };
      })(u)
    );
    return c.length === 1
      ? c[0]
      : { compositeFilter: { op: "AND", filters: c } };
  })(t.filters);
  i && (n.structuredQuery.where = i);
  let s = (function (a) {
    if (a.length !== 0)
      return a.map((c) =>
        (function (u) {
          return { field: ee(u.field), direction: $l(u.dir) };
        })(c)
      );
  })(t.orderBy);
  s && (n.structuredQuery.orderBy = s);
  let o = (function (a, c) {
    return a.I || Yt(c) ? c : { value: c };
  })(e, t.limit);
  return (
    o !== null && (n.structuredQuery.limit = o),
    t.startAt && (n.structuredQuery.startAt = Aa(t.startAt)),
    t.endAt && (n.structuredQuery.endAt = Aa(t.endAt)),
    n
  );
}
function Kl(e) {
  let t = Vl(e.parent),
    n = e.structuredQuery,
    r = n.from ? n.from.length : 0,
    i = null;
  if (r > 0) {
    R(r === 1);
    let h = n.from[0];
    h.allDescendants ? (i = h.collectionId) : (t = t.child(h.collectionId));
  }
  let s = [];
  n.where && (s = ba(n.where));
  let o = [];
  n.orderBy &&
    (o = n.orderBy.map((h) =>
      (function (l) {
        return new Dt(
          ne(l.field),
          (function (p) {
            switch (p) {
              case "ASCENDING":
                return "asc";
              case "DESCENDING":
                return "desc";
              default:
                return;
            }
          })(l.direction)
        );
      })(h)
    ));
  let a = null;
  n.limit &&
    (a = (function (h) {
      let l;
      return (l = typeof h == "object" ? h.value : h), Yt(l) ? null : l;
    })(n.limit));
  let c = null;
  n.startAt && (c = Na(n.startAt));
  let u = null;
  return n.endAt && (u = Na(n.endAt)), ml(t, i, o, s, a, "F", c, u);
}
function zl(e, t) {
  let n = (function (r, i) {
    switch (i) {
      case 0:
        return null;
      case 1:
        return "existence-filter-mismatch";
      case 2:
        return "limbo-document";
      default:
        return T();
    }
  })(0, t.purpose);
  return n == null ? null : { "goog-listen-tags": n };
}
function ba(e) {
  return e
    ? e.unaryFilter !== void 0
      ? [Wl(e)]
      : e.fieldFilter !== void 0
      ? [Gl(e)]
      : e.compositeFilter !== void 0
      ? e.compositeFilter.filters
          .map((t) => ba(t))
          .reduce((t, n) => t.concat(n))
      : T()
    : [];
}
function Aa(e) {
  return { before: e.before, values: e.position };
}
function Na(e) {
  let t = !!e.before,
    n = e.values || [];
  return new Mn(n, t);
}
function $l(e) {
  return xl[e];
}
function Bl(e) {
  return Ol[e];
}
function ee(e) {
  return { fieldPath: e.canonicalString() };
}
function ne(e) {
  return J.fromServerFormat(e.fieldPath);
}
function Gl(e) {
  return Z.create(
    ne(e.fieldFilter.field),
    (function (t) {
      switch (t) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        case "OPERATOR_UNSPECIFIED":
        default:
          return T();
      }
    })(e.fieldFilter.op),
    e.fieldFilter.value
  );
}
function Wl(e) {
  switch (e.unaryFilter.op) {
    case "IS_NAN":
      let t = ne(e.unaryFilter.field);
      return Z.create(t, "==", { doubleValue: NaN });
    case "IS_NULL":
      let n = ne(e.unaryFilter.field);
      return Z.create(n, "==", { nullValue: "NULL_VALUE" });
    case "IS_NOT_NAN":
      let r = ne(e.unaryFilter.field);
      return Z.create(r, "!=", { doubleValue: NaN });
    case "IS_NOT_NULL":
      let i = ne(e.unaryFilter.field);
      return Z.create(i, "!=", { nullValue: "NULL_VALUE" });
    case "OPERATOR_UNSPECIFIED":
    default:
      return T();
  }
}
function Fl(e) {
  let t = [];
  return (
    e.fields.forEach((n) => t.push(n.canonicalString())), { fieldPaths: t }
  );
}
function Ea(e) {
  return e.length >= 4 && e.get(0) === "projects" && e.get(2) === "databases";
}
var Yl =
    "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
  Da = class {
    constructor() {
      this.onCommittedListeners = [];
    }
    addOnCommittedListener(t) {
      this.onCommittedListeners.push(t);
    }
    raiseOnCommittedEvent() {
      this.onCommittedListeners.forEach((t) => t());
    }
  };
var re = class {
  constructor() {
    this.promise = new Promise((t, n) => {
      (this.resolve = t), (this.reject = n);
    });
  }
};
var d = class {
  constructor(t) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      t(
        (n) => {
          (this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n);
        },
        (n) => {
          (this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n);
        }
      );
  }
  catch(t) {
    return this.next(void 0, t);
  }
  next(t, n) {
    return (
      this.callbackAttached && T(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(t, this.result)
        : new d((r, i) => {
            (this.nextCallback = (s) => {
              this.wrapSuccess(t, s).next(r, i);
            }),
              (this.catchCallback = (s) => {
                this.wrapFailure(n, s).next(r, i);
              });
          })
    );
  }
  toPromise() {
    return new Promise((t, n) => {
      this.next(t, n);
    });
  }
  wrapUserFunction(t) {
    try {
      let n = t();
      return n instanceof d ? n : d.resolve(n);
    } catch (n) {
      return d.reject(n);
    }
  }
  wrapSuccess(t, n) {
    return t ? this.wrapUserFunction(() => t(n)) : d.resolve(n);
  }
  wrapFailure(t, n) {
    return t ? this.wrapUserFunction(() => t(n)) : d.reject(n);
  }
  static resolve(t) {
    return new d((n, r) => {
      n(t);
    });
  }
  static reject(t) {
    return new d((n, r) => {
      r(t);
    });
  }
  static waitFor(t) {
    return new d((n, r) => {
      let i = 0,
        s = 0,
        o = !1;
      t.forEach((a) => {
        ++i,
          a.next(
            () => {
              ++s, o && s === i && n();
            },
            (c) => r(c)
          );
      }),
        (o = !0),
        s === i && n();
    });
  }
  static or(t) {
    let n = d.resolve(!1);
    for (let r of t) n = n.next((i) => (i ? d.resolve(i) : r()));
    return n;
  }
  static forEach(t, n) {
    let r = [];
    return (
      t.forEach((i, s) => {
        r.push(n.call(this, i, s));
      }),
      this.waitFor(r)
    );
  }
};
function $e(e) {
  return e.name === "IndexedDbTransactionError";
}
var Ca = class {
    constructor(t, n, r, i) {
      (this.batchId = t),
        (this.localWriteTime = n),
        (this.baseMutations = r),
        (this.mutations = i);
    }
    applyToRemoteDocument(t, n) {
      let r = n.mutationResults;
      for (let i = 0; i < this.mutations.length; i++) {
        let s = this.mutations[i];
        s.key.isEqual(t.key) && Al(s, t, r[i]);
      }
    }
    applyToLocalView(t) {
      for (let n of this.baseMutations)
        n.key.isEqual(t.key) && li(n, t, this.localWriteTime);
      for (let n of this.mutations)
        n.key.isEqual(t.key) && li(n, t, this.localWriteTime);
    }
    applyToLocalDocumentSet(t) {
      this.mutations.forEach((n) => {
        let r = t.get(n.key),
          i = r;
        this.applyToLocalView(i),
          r.isValidDocument() || i.convertToNoDocument(N.min());
      });
    }
    keys() {
      return this.mutations.reduce((t, n) => t.add(n.key), k());
    }
    isEqual(t) {
      return (
        this.batchId === t.batchId &&
        Kt(this.mutations, t.mutations, (n, r) => ha(n, r)) &&
        Kt(this.baseMutations, t.baseMutations, (n, r) => ha(n, r))
      );
    }
  },
  $n = class {
    constructor(t, n, r, i) {
      (this.batch = t),
        (this.commitVersion = n),
        (this.mutationResults = r),
        (this.docVersions = i);
    }
    static from(t, n, r) {
      R(t.mutations.length === r.length);
      let i = _l(),
        s = t.mutations;
      for (let o = 0; o < s.length; o++) i = i.insert(s[o].key, r[o].version);
      return new $n(t, n, r, i);
    }
  };
var mt = class {
  constructor(t, n, r, i, s = N.min(), o = N.min(), a = H.EMPTY_BYTE_STRING) {
    (this.target = t),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = i),
      (this.snapshotVersion = s),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = a);
  }
  withSequenceNumber(t) {
    return new mt(
      this.target,
      this.targetId,
      this.purpose,
      t,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken
    );
  }
  withResumeToken(t, n) {
    return new mt(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      t
    );
  }
  withLastLimboFreeSnapshotVersion(t) {
    return new mt(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      t,
      this.resumeToken
    );
  }
};
var Ra = class {
  constructor(t) {
    this.Lt = t;
  }
};
function Xl(e) {
  let t = Kl({ parent: e.parent, structuredQuery: e.structuredQuery });
  return e.limitType === "LAST" ? vl(t, t.limit, "L") : t;
}
var _a = class {
    constructor() {
      this.Bt = new ka();
    }
    addToCollectionParentIndex(t, n) {
      return this.Bt.add(n), d.resolve();
    }
    getCollectionParents(t, n) {
      return d.resolve(this.Bt.getEntries(n));
    }
  },
  ka = class {
    constructor() {
      this.index = {};
    }
    add(t) {
      let n = t.lastSegment(),
        r = t.popLast(),
        i = this.index[n] || new q(_.comparator),
        s = !i.has(r);
      return (this.index[n] = i.add(r)), s;
    }
    has(t) {
      let n = t.lastSegment(),
        r = t.popLast(),
        i = this.index[n];
      return i && i.has(r);
    }
    getEntries(t) {
      return (this.index[t] || new q(_.comparator)).toArray();
    }
  };
var kt = class {
  constructor(t) {
    this.Ht = t;
  }
  next() {
    return (this.Ht += 2), this.Ht;
  }
  static Jt() {
    return new kt(0);
  }
  static Yt() {
    return new kt(-1);
  }
};
async function Be(e) {
  if (e.code !== f.FAILED_PRECONDITION || e.message !== Yl) throw e;
  v("LocalStore", "Unexpectedly lost primary lease");
}
var ie = class {
  constructor(t, n) {
    (this.mapKeyFn = t), (this.equalsFn = n), (this.inner = {});
  }
  get(t) {
    let n = this.mapKeyFn(t),
      r = this.inner[n];
    if (r !== void 0) {
      for (let [i, s] of r) if (this.equalsFn(i, t)) return s;
    }
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, n) {
    let r = this.mapKeyFn(t),
      i = this.inner[r];
    if (i !== void 0) {
      for (let s = 0; s < i.length; s++)
        if (this.equalsFn(i[s][0], t)) return void (i[s] = [t, n]);
      i.push([t, n]);
    } else this.inner[r] = [[t, n]];
  }
  delete(t) {
    let n = this.mapKeyFn(t),
      r = this.inner[n];
    if (r === void 0) return !1;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], t))
        return r.length === 1 ? delete this.inner[n] : r.splice(i, 1), !0;
    return !1;
  }
  forEach(t) {
    zt(this.inner, (n, r) => {
      for (let [i, s] of r) t(i, s);
    });
  }
  isEmpty() {
    return Ro(this.inner);
  }
};
var La = class {
  constructor() {
    (this.changes = new ie(
      (t) => t.toString(),
      (t, n) => t.isEqual(n)
    )),
      (this.changesApplied = !1);
  }
  getReadTime(t) {
    let n = this.changes.get(t);
    return n ? n.readTime : N.min();
  }
  addEntry(t, n) {
    this.assertNotApplied(),
      this.changes.set(t.key, { document: t, readTime: n });
  }
  removeEntry(t, n = null) {
    this.assertNotApplied(),
      this.changes.set(t, { document: K.newInvalidDocument(t), readTime: n });
  }
  getEntry(t, n) {
    this.assertNotApplied();
    let r = this.changes.get(n);
    return r !== void 0 ? d.resolve(r.document) : this.getFromCache(t, n);
  }
  getEntries(t, n) {
    return this.getAllFromCache(t, n);
  }
  apply(t) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(t)
    );
  }
  assertNotApplied() {}
};
var Si = class {
  constructor(t, n, r) {
    (this.qe = t), (this._n = n), (this.qt = r);
  }
  mn(t, n) {
    return this._n
      .getAllMutationBatchesAffectingDocumentKey(t, n)
      .next((r) => this.gn(t, n, r));
  }
  gn(t, n, r) {
    return this.qe.getEntry(t, n).next((i) => {
      for (let s of r) s.applyToLocalView(i);
      return i;
    });
  }
  yn(t, n) {
    t.forEach((r, i) => {
      for (let s of n) s.applyToLocalView(i);
    });
  }
  pn(t, n) {
    return this.qe.getEntries(t, n).next((r) => this.En(t, r).next(() => r));
  }
  En(t, n) {
    return this._n
      .getAllMutationBatchesAffectingDocumentKeys(t, n)
      .next((r) => this.yn(n, r));
  }
  getDocumentsMatchingQuery(t, n, r) {
    return (function (i) {
      return (
        w.isDocumentKey(i.path) &&
        i.collectionGroup === null &&
        i.filters.length === 0
      );
    })(n)
      ? this.Tn(t, n.path)
      : yl(n)
      ? this.In(t, n, r)
      : this.An(t, n, r);
  }
  Tn(t, n) {
    return this.mn(t, new w(n)).next((r) => {
      let i = pi();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  In(t, n, r) {
    let i = n.collectionGroup,
      s = pi();
    return this.qt.getCollectionParents(t, i).next((o) =>
      d
        .forEach(o, (a) => {
          let c = (function (u, h) {
            return new Qt(
              h,
              null,
              u.explicitOrderBy.slice(),
              u.filters.slice(),
              u.limit,
              u.limitType,
              u.startAt,
              u.endAt
            );
          })(n, a.child(i));
          return this.An(t, c, r).next((u) => {
            u.forEach((h, l) => {
              s = s.insert(h, l);
            });
          });
        })
        .next(() => s)
    );
  }
  An(t, n, r) {
    let i, s;
    return this.qe
      .getDocumentsMatchingQuery(t, n, r)
      .next((o) => ((i = o), this._n.getAllMutationBatchesAffectingQuery(t, n)))
      .next(
        (o) => (
          (s = o),
          this.Rn(t, s, i).next((a) => {
            i = a;
            for (let c of s)
              for (let u of c.mutations) {
                let h = u.key,
                  l = i.get(h);
                l == null &&
                  ((l = K.newInvalidDocument(h)), (i = i.insert(h, l))),
                  li(u, l, c.localWriteTime),
                  l.isFoundDocument() || (i = i.remove(h));
              }
          })
        )
      )
      .next(
        () => (
          i.forEach((o, a) => {
            Un(n, a) || (i = i.remove(o));
          }),
          i
        )
      );
  }
  Rn(t, n, r) {
    let i = k();
    for (let o of n)
      for (let a of o.mutations)
        a instanceof Rt && r.get(a.key) === null && (i = i.add(a.key));
    let s = r;
    return this.qe.getEntries(t, i).next(
      (o) => (
        o.forEach((a, c) => {
          c.isFoundDocument() && (s = s.insert(a, c));
        }),
        s
      )
    );
  }
};
var Bn = class {
  constructor(t, n, r, i) {
    (this.targetId = t), (this.fromCache = n), (this.Pn = r), (this.bn = i);
  }
  static vn(t, n) {
    let r = k(),
      i = k();
    for (let s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    return new Bn(t, n.fromCache, r, i);
  }
};
var xa = class {
  Vn(t) {
    this.Sn = t;
  }
  getDocumentsMatchingQuery(t, n, r, i) {
    return (function (s) {
      return (
        s.filters.length === 0 &&
        s.limit === null &&
        s.startAt == null &&
        s.endAt == null &&
        (s.explicitOrderBy.length === 0 ||
          (s.explicitOrderBy.length === 1 &&
            s.explicitOrderBy[0].field.isKeyField()))
      );
    })(n) || r.isEqual(N.min())
      ? this.Dn(t, n)
      : this.Sn.pn(t, i).next((s) => {
          let o = this.Cn(n, s);
          return (Vn(n) || Pn(n)) && this.Nn(n.limitType, o, i, r)
            ? this.Dn(t, n)
            : (No() <= b.DEBUG &&
                v(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  r.toString(),
                  hi(n)
                ),
              this.Sn.getDocumentsMatchingQuery(t, n, r).next(
                (a) => (
                  o.forEach((c) => {
                    a = a.insert(c.key, c);
                  }),
                  a
                )
              ));
        });
  }
  Cn(t, n) {
    let r = new q(Qo(t));
    return (
      n.forEach((i, s) => {
        Un(t, s) && (r = r.add(s));
      }),
      r
    );
  }
  Nn(t, n, r, i) {
    if (r.size !== n.size) return !0;
    let s = t === "F" ? n.last() : n.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0);
  }
  Dn(t, n) {
    return (
      No() <= b.DEBUG &&
        v("QueryEngine", "Using full collection scan to execute query:", hi(n)),
      this.Sn.getDocumentsMatchingQuery(t, n, N.min())
    );
  }
};
var Oa = class {
  constructor(t, n, r, i) {
    (this.persistence = t),
      (this.xn = n),
      (this.R = i),
      (this.kn = new z(D)),
      (this.$n = new ie((s) => oi(s), ai)),
      (this.On = N.min()),
      (this._n = t.getMutationQueue(r)),
      (this.Fn = t.getRemoteDocumentCache()),
      (this.Ue = t.getTargetCache()),
      (this.Mn = new Si(this.Fn, this._n, this.persistence.getIndexManager())),
      (this.Ke = t.getBundleCache()),
      this.xn.Vn(this.Mn);
  }
  collectGarbage(t) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (n) => t.collect(n, this.kn)
    );
  }
};
function Ql(e, t, n, r) {
  return new Oa(e, t, n, r);
}
async function Ma(e, t) {
  let n = S(e),
    r = n._n,
    i = n.Mn,
    s = await n.persistence.runTransaction(
      "Handle user change",
      "readonly",
      (o) => {
        let a;
        return n._n
          .getAllMutationBatches(o)
          .next(
            (c) => (
              (a = c),
              (r = n.persistence.getMutationQueue(t)),
              (i = new Si(n.Fn, r, n.persistence.getIndexManager())),
              r.getAllMutationBatches(o)
            )
          )
          .next((c) => {
            let u = [],
              h = [],
              l = k();
            for (let p of a) {
              u.push(p.batchId);
              for (let m of p.mutations) l = l.add(m.key);
            }
            for (let p of c) {
              h.push(p.batchId);
              for (let m of p.mutations) l = l.add(m.key);
            }
            return i
              .pn(o, l)
              .next((p) => ({ Ln: p, removedBatchIds: u, addedBatchIds: h }));
          });
      }
    );
  return (n._n = r), (n.Mn = i), n.xn.Vn(n.Mn), s;
}
function Jl(e, t) {
  let n = S(e);
  return n.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    (r) => {
      let i = t.batch.keys(),
        s = n.Fn.newChangeBuffer({ trackRemovals: !0 });
      return (function (o, a, c, u) {
        let h = c.batch,
          l = h.keys(),
          p = d.resolve();
        return (
          l.forEach((m) => {
            p = p
              .next(() => u.getEntry(a, m))
              .next((I) => {
                let C = c.docVersions.get(m);
                R(C !== null),
                  I.version.compareTo(C) < 0 &&
                    (h.applyToRemoteDocument(I, c),
                    I.isValidDocument() && u.addEntry(I, c.commitVersion));
              });
          }),
          p.next(() => o._n.removeMutationBatch(a, h))
        );
      })(n, r, t, s)
        .next(() => s.apply(r))
        .next(() => n._n.performConsistencyCheck(r))
        .next(() => n.Mn.pn(r, i));
    }
  );
}
function Va(e) {
  let t = S(e);
  return t.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (n) => t.Ue.getLastRemoteSnapshotVersion(n)
  );
}
function tf(e, t) {
  let n = S(e),
    r = t.snapshotVersion,
    i = n.kn;
  return n.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (s) => {
      let o = n.Fn.newChangeBuffer({ trackRemovals: !0 });
      i = n.kn;
      let a = [];
      t.targetChanges.forEach((u, h) => {
        let l = i.get(h);
        if (!l) return;
        a.push(
          n.Ue.removeMatchingKeys(s, u.removedDocuments, h).next(() =>
            n.Ue.addMatchingKeys(s, u.addedDocuments, h)
          )
        );
        let p = u.resumeToken;
        if (p.approximateByteSize() > 0) {
          let m = l
            .withResumeToken(p, r)
            .withSequenceNumber(s.currentSequenceNumber);
          (i = i.insert(h, m)),
            (function (I, C, x) {
              return (
                R(C.resumeToken.approximateByteSize() > 0),
                I.resumeToken.approximateByteSize() === 0 ||
                C.snapshotVersion.toMicroseconds() -
                  I.snapshotVersion.toMicroseconds() >=
                  3e8
                  ? !0
                  : x.addedDocuments.size +
                      x.modifiedDocuments.size +
                      x.removedDocuments.size >
                    0
              );
            })(l, m, u) && a.push(n.Ue.updateTargetData(s, m));
        }
      });
      let c = _t();
      if (
        (t.documentUpdates.forEach((u, h) => {
          t.resolvedLimboDocuments.has(u) &&
            a.push(n.persistence.referenceDelegate.updateLimboDocument(s, u));
        }),
        a.push(
          Zl(s, o, t.documentUpdates, r, void 0).next((u) => {
            c = u;
          })
        ),
        !r.isEqual(N.min()))
      ) {
        let u = n.Ue.getLastRemoteSnapshotVersion(s).next((h) =>
          n.Ue.setTargetsMetadata(s, s.currentSequenceNumber, r)
        );
        a.push(u);
      }
      return d
        .waitFor(a)
        .next(() => o.apply(s))
        .next(() => n.Mn.En(s, c))
        .next(() => c);
    })
    .then((s) => ((n.kn = i), s));
}
function Zl(e, t, n, r, i) {
  let s = k();
  return (
    n.forEach((o) => (s = s.add(o))),
    t.getEntries(e, s).next((o) => {
      let a = _t();
      return (
        n.forEach((c, u) => {
          let h = o.get(c),
            l = (i == null ? void 0 : i.get(c)) || r;
          u.isNoDocument() && u.version.isEqual(N.min())
            ? (t.removeEntry(c, l), (a = a.insert(c, u)))
            : !h.isValidDocument() ||
              u.version.compareTo(h.version) > 0 ||
              (u.version.compareTo(h.version) === 0 && h.hasPendingWrites)
            ? (t.addEntry(u, l), (a = a.insert(c, u)))
            : v(
                "LocalStore",
                "Ignoring outdated watch update for ",
                c,
                ". Current version:",
                h.version,
                " Watch version:",
                u.version
              );
        }),
        a
      );
    })
  );
}
function ef(e, t) {
  let n = S(e);
  return n.persistence.runTransaction(
    "Get next mutation batch",
    "readonly",
    (r) => (
      t === void 0 && (t = -1), n._n.getNextMutationBatchAfterBatchId(r, t)
    )
  );
}
function nf(e, t) {
  let n = S(e);
  return n.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let i;
      return n.Ue.getTargetData(r, t).next((s) =>
        s
          ? ((i = s), d.resolve(i))
          : n.Ue.allocateTargetId(r).next(
              (o) => (
                (i = new mt(t, o, 0, r.currentSequenceNumber)),
                n.Ue.addTargetData(r, i).next(() => i)
              )
            )
      );
    })
    .then((r) => {
      let i = n.kn.get(r.targetId);
      return (
        (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
          ((n.kn = n.kn.insert(r.targetId, r)), n.$n.set(t, r.targetId)),
        r
      );
    });
}
async function Ai(e, t, n) {
  let r = S(e),
    i = r.kn.get(t),
    s = n ? "readwrite" : "readwrite-primary";
  try {
    n ||
      (await r.persistence.runTransaction("Release target", s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i)
      ));
  } catch (o) {
    if (!$e(o)) throw o;
    v("LocalStore", `Failed to update sequence numbers for target ${t}: ${o}`);
  }
  (r.kn = r.kn.remove(t)), r.$n.delete(i.target);
}
function Pa(e, t, n) {
  let r = S(e),
    i = N.min(),
    s = k();
  return r.persistence.runTransaction("Execute query", "readonly", (o) =>
    (function (a, c, u) {
      let h = S(a),
        l = h.$n.get(u);
      return l !== void 0 ? d.resolve(h.kn.get(l)) : h.Ue.getTargetData(c, u);
    })(r, o, Ct(t))
      .next((a) => {
        if (a)
          return (
            (i = a.lastLimboFreeSnapshotVersion),
            r.Ue.getMatchingKeysForTargetId(o, a.targetId).next((c) => {
              s = c;
            })
          );
      })
      .next(() =>
        r.xn.getDocumentsMatchingQuery(o, t, n ? i : N.min(), n ? s : k())
      )
      .next((a) => ({ documents: a, Bn: s }))
  );
}
var Fa = class {
  constructor(t) {
    (this.R = t), (this.jn = new Map()), (this.Qn = new Map());
  }
  getBundleMetadata(t, n) {
    return d.resolve(this.jn.get(n));
  }
  saveBundleMetadata(t, n) {
    var r;
    return (
      this.jn.set(n.id, {
        id: (r = n).id,
        version: r.version,
        createTime: ut(r.createTime),
      }),
      d.resolve()
    );
  }
  getNamedQuery(t, n) {
    return d.resolve(this.Qn.get(n));
  }
  saveNamedQuery(t, n) {
    return (
      this.Qn.set(
        n.name,
        (function (r) {
          return {
            name: r.name,
            query: Xl(r.bundledQuery),
            readTime: ut(r.readTime),
          };
        })(n)
      ),
      d.resolve()
    );
  }
};
var Hn = class {
    constructor() {
      (this.Wn = new q(P.Gn)), (this.zn = new q(P.Hn));
    }
    isEmpty() {
      return this.Wn.isEmpty();
    }
    addReference(t, n) {
      let r = new P(t, n);
      (this.Wn = this.Wn.add(r)), (this.zn = this.zn.add(r));
    }
    Jn(t, n) {
      t.forEach((r) => this.addReference(r, n));
    }
    removeReference(t, n) {
      this.Yn(new P(t, n));
    }
    Xn(t, n) {
      t.forEach((r) => this.removeReference(r, n));
    }
    Zn(t) {
      let n = new w(new _([])),
        r = new P(n, t),
        i = new P(n, t + 1),
        s = [];
      return (
        this.zn.forEachInRange([r, i], (o) => {
          this.Yn(o), s.push(o.key);
        }),
        s
      );
    }
    ts() {
      this.Wn.forEach((t) => this.Yn(t));
    }
    Yn(t) {
      (this.Wn = this.Wn.delete(t)), (this.zn = this.zn.delete(t));
    }
    es(t) {
      let n = new w(new _([])),
        r = new P(n, t),
        i = new P(n, t + 1),
        s = k();
      return (
        this.zn.forEachInRange([r, i], (o) => {
          s = s.add(o.key);
        }),
        s
      );
    }
    containsKey(t) {
      let n = new P(t, 0),
        r = this.Wn.firstAfterOrEqual(n);
      return r !== null && t.isEqual(r.key);
    }
  },
  P = class {
    constructor(t, n) {
      (this.key = t), (this.ns = n);
    }
    static Gn(t, n) {
      return w.comparator(t.key, n.key) || D(t.ns, n.ns);
    }
    static Hn(t, n) {
      return D(t.ns, n.ns) || w.comparator(t.key, n.key);
    }
  };
var Ua = class {
  constructor(t, n) {
    (this.qt = t),
      (this.referenceDelegate = n),
      (this._n = []),
      (this.ss = 1),
      (this.rs = new q(P.Gn));
  }
  checkEmpty(t) {
    return d.resolve(this._n.length === 0);
  }
  addMutationBatch(t, n, r, i) {
    let s = this.ss;
    this.ss++, this._n.length > 0 && this._n[this._n.length - 1];
    let o = new Ca(s, n, r, i);
    this._n.push(o);
    for (let a of i)
      (this.rs = this.rs.add(new P(a.key, s))),
        this.qt.addToCollectionParentIndex(t, a.key.path.popLast());
    return d.resolve(o);
  }
  lookupMutationBatch(t, n) {
    return d.resolve(this.os(n));
  }
  getNextMutationBatchAfterBatchId(t, n) {
    let r = n + 1,
      i = this.cs(r),
      s = i < 0 ? 0 : i;
    return d.resolve(this._n.length > s ? this._n[s] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return d.resolve(this._n.length === 0 ? -1 : this.ss - 1);
  }
  getAllMutationBatches(t) {
    return d.resolve(this._n.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t, n) {
    let r = new P(n, 0),
      i = new P(n, Number.POSITIVE_INFINITY),
      s = [];
    return (
      this.rs.forEachInRange([r, i], (o) => {
        let a = this.os(o.ns);
        s.push(a);
      }),
      d.resolve(s)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(t, n) {
    let r = new q(D);
    return (
      n.forEach((i) => {
        let s = new P(i, 0),
          o = new P(i, Number.POSITIVE_INFINITY);
        this.rs.forEachInRange([s, o], (a) => {
          r = r.add(a.ns);
        });
      }),
      d.resolve(this.us(r))
    );
  }
  getAllMutationBatchesAffectingQuery(t, n) {
    let r = n.path,
      i = r.length + 1,
      s = r;
    w.isDocumentKey(s) || (s = s.child(""));
    let o = new P(new w(s), 0),
      a = new q(D);
    return (
      this.rs.forEachWhile((c) => {
        let u = c.key.path;
        return !!r.isPrefixOf(u) && (u.length === i && (a = a.add(c.ns)), !0);
      }, o),
      d.resolve(this.us(a))
    );
  }
  us(t) {
    let n = [];
    return (
      t.forEach((r) => {
        let i = this.os(r);
        i !== null && n.push(i);
      }),
      n
    );
  }
  removeMutationBatch(t, n) {
    R(this.hs(n.batchId, "removed") === 0), this._n.shift();
    let r = this.rs;
    return d
      .forEach(n.mutations, (i) => {
        let s = new P(i.key, n.batchId);
        return (
          (r = r.delete(s)),
          this.referenceDelegate.markPotentiallyOrphaned(t, i.key)
        );
      })
      .next(() => {
        this.rs = r;
      });
  }
  Gt(t) {}
  containsKey(t, n) {
    let r = new P(n, 0),
      i = this.rs.firstAfterOrEqual(r);
    return d.resolve(n.isEqual(i && i.key));
  }
  performConsistencyCheck(t) {
    return this._n.length, d.resolve();
  }
  hs(t, n) {
    return this.cs(t);
  }
  cs(t) {
    return this._n.length === 0 ? 0 : t - this._n[0].batchId;
  }
  os(t) {
    let n = this.cs(t);
    return n < 0 || n >= this._n.length ? null : this._n[n];
  }
};
var qa = class {
    constructor(t, n) {
      (this.qt = t),
        (this.ls = n),
        (this.docs = new z(w.comparator)),
        (this.size = 0);
    }
    addEntry(t, n, r) {
      let i = n.key,
        s = this.docs.get(i),
        o = s ? s.size : 0,
        a = this.ls(n);
      return (
        (this.docs = this.docs.insert(i, {
          document: n.clone(),
          size: a,
          readTime: r,
        })),
        (this.size += a - o),
        this.qt.addToCollectionParentIndex(t, i.path.popLast())
      );
    }
    removeEntry(t) {
      let n = this.docs.get(t);
      n && ((this.docs = this.docs.remove(t)), (this.size -= n.size));
    }
    getEntry(t, n) {
      let r = this.docs.get(n);
      return d.resolve(r ? r.document.clone() : K.newInvalidDocument(n));
    }
    getEntries(t, n) {
      let r = _t();
      return (
        n.forEach((i) => {
          let s = this.docs.get(i);
          r = r.insert(i, s ? s.document.clone() : K.newInvalidDocument(i));
        }),
        d.resolve(r)
      );
    }
    getDocumentsMatchingQuery(t, n, r) {
      let i = _t(),
        s = new w(n.path.child("")),
        o = this.docs.getIteratorFrom(s);
      for (; o.hasNext(); ) {
        let {
          key: a,
          value: { document: c, readTime: u },
        } = o.getNext();
        if (!n.path.isPrefixOf(a.path)) break;
        u.compareTo(r) <= 0 || (Un(n, c) && (i = i.insert(c.key, c.clone())));
      }
      return d.resolve(i);
    }
    fs(t, n) {
      return d.forEach(this.docs, (r) => n(r));
    }
    newChangeBuffer(t) {
      return new ja(this);
    }
    getSize(t) {
      return d.resolve(this.size);
    }
  },
  ja = class extends La {
    constructor(t) {
      super(), (this.Ie = t);
    }
    applyChanges(t) {
      let n = [];
      return (
        this.changes.forEach((r, i) => {
          i.document.isValidDocument()
            ? n.push(this.Ie.addEntry(t, i.document, this.getReadTime(r)))
            : this.Ie.removeEntry(r);
        }),
        d.waitFor(n)
      );
    }
    getFromCache(t, n) {
      return this.Ie.getEntry(t, n);
    }
    getAllFromCache(t, n) {
      return this.Ie.getEntries(t, n);
    }
  };
var $a = class {
  constructor(t) {
    (this.persistence = t),
      (this.ds = new ie((n) => oi(n), ai)),
      (this.lastRemoteSnapshotVersion = N.min()),
      (this.highestTargetId = 0),
      (this.ws = 0),
      (this._s = new Hn()),
      (this.targetCount = 0),
      (this.gs = kt.Jt());
  }
  forEachTarget(t, n) {
    return this.ds.forEach((r, i) => n(i)), d.resolve();
  }
  getLastRemoteSnapshotVersion(t) {
    return d.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t) {
    return d.resolve(this.ws);
  }
  allocateTargetId(t) {
    return (
      (this.highestTargetId = this.gs.next()), d.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(t, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.ws && (this.ws = n),
      d.resolve()
    );
  }
  te(t) {
    this.ds.set(t.target, t);
    let n = t.targetId;
    n > this.highestTargetId &&
      ((this.gs = new kt(n)), (this.highestTargetId = n)),
      t.sequenceNumber > this.ws && (this.ws = t.sequenceNumber);
  }
  addTargetData(t, n) {
    return this.te(n), (this.targetCount += 1), d.resolve();
  }
  updateTargetData(t, n) {
    return this.te(n), d.resolve();
  }
  removeTargetData(t, n) {
    return (
      this.ds.delete(n.target),
      this._s.Zn(n.targetId),
      (this.targetCount -= 1),
      d.resolve()
    );
  }
  removeTargets(t, n, r) {
    let i = 0,
      s = [];
    return (
      this.ds.forEach((o, a) => {
        a.sequenceNumber <= n &&
          r.get(a.targetId) === null &&
          (this.ds.delete(o),
          s.push(this.removeMatchingKeysForTargetId(t, a.targetId)),
          i++);
      }),
      d.waitFor(s).next(() => i)
    );
  }
  getTargetCount(t) {
    return d.resolve(this.targetCount);
  }
  getTargetData(t, n) {
    let r = this.ds.get(n) || null;
    return d.resolve(r);
  }
  addMatchingKeys(t, n, r) {
    return this._s.Jn(n, r), d.resolve();
  }
  removeMatchingKeys(t, n, r) {
    this._s.Xn(n, r);
    let i = this.persistence.referenceDelegate,
      s = [];
    return (
      i &&
        n.forEach((o) => {
          s.push(i.markPotentiallyOrphaned(t, o));
        }),
      d.waitFor(s)
    );
  }
  removeMatchingKeysForTargetId(t, n) {
    return this._s.Zn(n), d.resolve();
  }
  getMatchingKeysForTargetId(t, n) {
    let r = this._s.es(n);
    return d.resolve(r);
  }
  containsKey(t, n) {
    return d.resolve(this._s.containsKey(n));
  }
};
var Ba = class {
    constructor(t, n) {
      (this.ys = {}),
        (this.Ne = new _n(0)),
        (this.xe = !1),
        (this.xe = !0),
        (this.referenceDelegate = t(this)),
        (this.Ue = new $a(this)),
        (this.qt = new _a()),
        (this.qe = (function (r, i) {
          return new qa(r, i);
        })(this.qt, (r) => this.referenceDelegate.ps(r))),
        (this.R = new Ra(n)),
        (this.Ke = new Fa(this.R));
    }
    start() {
      return Promise.resolve();
    }
    shutdown() {
      return (this.xe = !1), Promise.resolve();
    }
    get started() {
      return this.xe;
    }
    setDatabaseDeletedListener() {}
    setNetworkEnabled() {}
    getIndexManager() {
      return this.qt;
    }
    getMutationQueue(t) {
      let n = this.ys[t.toKey()];
      return (
        n ||
          ((n = new Ua(this.qt, this.referenceDelegate)),
          (this.ys[t.toKey()] = n)),
        n
      );
    }
    getTargetCache() {
      return this.Ue;
    }
    getRemoteDocumentCache() {
      return this.qe;
    }
    getBundleCache() {
      return this.Ke;
    }
    runTransaction(t, n, r) {
      v("MemoryPersistence", "Starting transaction:", t);
      let i = new Ha(this.Ne.next());
      return (
        this.referenceDelegate.Es(),
        r(i)
          .next((s) => this.referenceDelegate.Ts(i).next(() => s))
          .toPromise()
          .then((s) => (i.raiseOnCommittedEvent(), s))
      );
    }
    Is(t, n) {
      return d.or(Object.values(this.ys).map((r) => () => r.containsKey(t, n)));
    }
  },
  Ha = class extends Da {
    constructor(t) {
      super(), (this.currentSequenceNumber = t);
    }
  },
  Kn = class {
    constructor(t) {
      (this.persistence = t), (this.As = new Hn()), (this.Rs = null);
    }
    static Ps(t) {
      return new Kn(t);
    }
    get bs() {
      if (this.Rs) return this.Rs;
      throw T();
    }
    addReference(t, n, r) {
      return (
        this.As.addReference(r, n), this.bs.delete(r.toString()), d.resolve()
      );
    }
    removeReference(t, n, r) {
      return (
        this.As.removeReference(r, n), this.bs.add(r.toString()), d.resolve()
      );
    }
    markPotentiallyOrphaned(t, n) {
      return this.bs.add(n.toString()), d.resolve();
    }
    removeTarget(t, n) {
      this.As.Zn(n.targetId).forEach((i) => this.bs.add(i.toString()));
      let r = this.persistence.getTargetCache();
      return r
        .getMatchingKeysForTargetId(t, n.targetId)
        .next((i) => {
          i.forEach((s) => this.bs.add(s.toString()));
        })
        .next(() => r.removeTargetData(t, n));
    }
    Es() {
      this.Rs = new Set();
    }
    Ts(t) {
      let n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
      return d
        .forEach(this.bs, (r) => {
          let i = w.fromPath(r);
          return this.vs(t, i).next((s) => {
            s || n.removeEntry(i);
          });
        })
        .next(() => ((this.Rs = null), n.apply(t)));
    }
    updateLimboDocument(t, n) {
      return this.vs(t, n).next((r) => {
        r ? this.bs.delete(n.toString()) : this.bs.add(n.toString());
      });
    }
    ps(t) {
      return 0;
    }
    vs(t, n) {
      return d.or([
        () => d.resolve(this.As.containsKey(n)),
        () => this.persistence.getTargetCache().containsKey(t, n),
        () => this.persistence.Is(t, n),
      ]);
    }
  };
var nt = class {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
};
(nt.UNAUTHENTICATED = new nt(null)),
  (nt.GOOGLE_CREDENTIALS = new nt("google-credentials-uid")),
  (nt.FIRST_PARTY = new nt("first-party-uid"));
var bi = class {
    constructor() {
      this.activeTargetIds = pa();
    }
    Ds(t) {
      this.activeTargetIds = this.activeTargetIds.add(t);
    }
    Cs(t) {
      this.activeTargetIds = this.activeTargetIds.delete(t);
    }
    Ss() {
      let t = {
        activeTargetIds: this.activeTargetIds.toArray(),
        updateTimeMs: Date.now(),
      };
      return JSON.stringify(t);
    }
  },
  Ka = class {
    constructor() {
      (this.li = new bi()),
        (this.fi = {}),
        (this.onlineStateHandler = null),
        (this.sequenceNumberHandler = null);
    }
    addPendingMutation(t) {}
    updateMutationState(t, n, r) {}
    addLocalQueryTarget(t) {
      return this.li.Ds(t), this.fi[t] || "not-current";
    }
    updateQueryState(t, n, r) {
      this.fi[t] = n;
    }
    removeLocalQueryTarget(t) {
      this.li.Cs(t);
    }
    isLocalQueryTarget(t) {
      return this.li.activeTargetIds.has(t);
    }
    clearQueryState(t) {
      delete this.fi[t];
    }
    getAllActiveQueryTargets() {
      return this.li.activeTargetIds;
    }
    isActiveQueryTarget(t) {
      return this.li.activeTargetIds.has(t);
    }
    start() {
      return (this.li = new bi()), Promise.resolve();
    }
    handleUserChange(t, n, r) {}
    setOnlineState(t) {}
    shutdown() {}
    writeSequenceNumber(t) {}
    notifyBundleLoaded() {}
  };
var za = class {
  di(t) {}
  shutdown() {}
};
var Ni = class {
  constructor() {
    (this.wi = () => this._i()),
      (this.mi = () => this.gi()),
      (this.yi = []),
      this.pi();
  }
  di(t) {
    this.yi.push(t);
  }
  shutdown() {
    window.removeEventListener("online", this.wi),
      window.removeEventListener("offline", this.mi);
  }
  pi() {
    window.addEventListener("online", this.wi),
      window.addEventListener("offline", this.mi);
  }
  _i() {
    v("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (let t of this.yi) t(0);
  }
  gi() {
    v("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (let t of this.yi) t(1);
  }
  static gt() {
    return (
      typeof window != "undefined" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
};
var rf = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
};
var Ga = class {
  constructor(t) {
    (this.Ei = t.Ei), (this.Ti = t.Ti);
  }
  Ii(t) {
    this.Ai = t;
  }
  Ri(t) {
    this.Pi = t;
  }
  onMessage(t) {
    this.bi = t;
  }
  close() {
    this.Ti();
  }
  send(t) {
    this.Ei(t);
  }
  vi() {
    this.Ai();
  }
  Vi(t) {
    this.Pi(t);
  }
  Si(t) {
    this.bi(t);
  }
};
var Wa = class extends class {
  constructor(t) {
    (this.databaseInfo = t), (this.databaseId = t.databaseId);
    let n = t.ssl ? "https" : "http";
    (this.Di = n + "://" + t.host),
      (this.Ci =
        "projects/" +
        this.databaseId.projectId +
        "/databases/" +
        this.databaseId.database +
        "/documents");
  }
  Ni(t, n, r, i) {
    let s = this.xi(t, n);
    v("RestConnection", "Sending: ", s, r);
    let o = {};
    return (
      this.ki(o, i),
      this.$i(t, s, o, r).then(
        (a) => (v("RestConnection", "Received: ", a), a),
        (a) => {
          throw (
            (Do(
              "RestConnection",
              `${t} failed with error: `,
              a,
              "url: ",
              s,
              "request:",
              r
            ),
            a)
          );
        }
      )
    );
  }
  Oi(t, n, r, i) {
    return this.Ni(t, n, r, i);
  }
  ki(t, n) {
    if (
      ((t["X-Goog-Api-Client"] = "gl-js/ fire/" + Ht),
      (t["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (t["X-Firebase-GMPID"] = this.databaseInfo.appId),
      n)
    )
      for (let r in n.authHeaders)
        n.authHeaders.hasOwnProperty(r) && (t[r] = n.authHeaders[r]);
  }
  xi(t, n) {
    let r = rf[t];
    return `${this.Di}/v1/${n}:${r}`;
  }
} {
  constructor(t) {
    super(t),
      (this.forceLongPolling = t.forceLongPolling),
      (this.autoDetectLongPolling = t.autoDetectLongPolling),
      (this.useFetchStreams = t.useFetchStreams);
  }
  $i(t, n, r, i) {
    return new Promise((s, o) => {
      let a = new cl();
      a.listenOnce(sl.COMPLETE, () => {
        try {
          switch (a.getLastErrorCode()) {
            case Zr.NO_ERROR:
              let u = a.getResponseJson();
              v("Connection", "XHR received:", JSON.stringify(u)), s(u);
              break;
            case Zr.TIMEOUT:
              v("Connection", 'RPC "' + t + '" timed out'),
                o(new y(f.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case Zr.HTTP_ERROR:
              let h = a.getStatus();
              if (
                (v(
                  "Connection",
                  'RPC "' + t + '" failed with status:',
                  h,
                  "response text:",
                  a.getResponseText()
                ),
                h > 0)
              ) {
                let l = a.getResponseJson().error;
                if (l && l.status && l.message) {
                  let p = (function (m) {
                    let I = m.toLowerCase().replace(/_/g, "-");
                    return Object.values(f).indexOf(I) >= 0 ? I : f.UNKNOWN;
                  })(l.status);
                  o(new y(p, l.message));
                } else
                  o(
                    new y(
                      f.UNKNOWN,
                      "Server responded with status " + a.getStatus()
                    )
                  );
              } else o(new y(f.UNAVAILABLE, "Connection failed."));
              break;
            default:
              T();
          }
        } finally {
          v("Connection", 'RPC "' + t + '" completed.');
        }
      });
      let c = JSON.stringify(i);
      a.send(n, "POST", c, r, 15);
    });
  }
  Fi(t, n) {
    let r = [this.Di, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
      i = rl(),
      s = il(),
      o = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      };
    this.useFetchStreams && (o.xmlHttpFactory = new al({})),
      this.ki(o.initMessageHeaders, n),
      Ji() ||
        ts() ||
        es() ||
        ns() ||
        rs() ||
        Zi() ||
        (o.httpHeadersOverwriteParam = "$httpHeaders");
    let a = r.join("");
    v("Connection", "Creating WebChannel: " + a, o);
    let c = i.createWebChannel(a, o),
      u = !1,
      h = !1,
      l = new Ga({
        Ei: (m) => {
          h
            ? v("Connection", "Not sending because WebChannel is closed:", m)
            : (u ||
                (v("Connection", "Opening WebChannel transport."),
                c.open(),
                (u = !0)),
              v("Connection", "WebChannel sending:", m),
              c.send(m));
        },
        Ti: () => c.close(),
      }),
      p = (m, I, C) => {
        m.listen(I, (x) => {
          try {
            C(x);
          } catch (rt) {
            setTimeout(() => {
              throw rt;
            }, 0);
          }
        });
      };
    return (
      p(c, Rn.EventType.OPEN, () => {
        h || v("Connection", "WebChannel transport opened.");
      }),
      p(c, Rn.EventType.CLOSE, () => {
        h || ((h = !0), v("Connection", "WebChannel transport closed"), l.Vi());
      }),
      p(c, Rn.EventType.ERROR, (m) => {
        h ||
          ((h = !0),
          Do("Connection", "WebChannel transport errored:", m),
          l.Vi(new y(f.UNAVAILABLE, "The operation could not be completed")));
      }),
      p(c, Rn.EventType.MESSAGE, (m) => {
        var I;
        if (!h) {
          let C = m.data[0];
          R(!!C);
          let x = C,
            rt =
              x.error ||
              ((I = x[0]) === null || I === void 0 ? void 0 : I.error);
          if (rt) {
            v("Connection", "WebChannel received error:", rt);
            let Ge = rt.status,
              Vt = (function (ou) {
                let Xi = V[ou];
                if (Xi !== void 0) return da(Xi);
              })(Ge),
              We = rt.message;
            Vt === void 0 &&
              ((Vt = f.INTERNAL),
              (We =
                "Unknown error status: " + Ge + " with message " + rt.message)),
              (h = !0),
              l.Vi(new y(Vt, We)),
              c.close();
          } else v("Connection", "WebChannel received:", C), l.Si(C);
        }
      }),
      p(s, ol.STAT_EVENT, (m) => {
        m.stat === bo.PROXY
          ? v("Connection", "Detected buffering proxy")
          : m.stat === bo.NOPROXY &&
            v("Connection", "Detected no buffering proxy");
      }),
      setTimeout(() => {
        l.vi();
      }, 0),
      l
    );
  }
};
function Di() {
  return typeof document != "undefined" ? document : null;
}
function zn(e) {
  return new va(e, !0);
}
var Ci = class {
  constructor(t, n, r = 1e3, i = 1.5, s = 6e4) {
    (this.Se = t),
      (this.timerId = n),
      (this.Mi = r),
      (this.Li = i),
      (this.Bi = s),
      (this.Ui = 0),
      (this.qi = null),
      (this.Ki = Date.now()),
      this.reset();
  }
  reset() {
    this.Ui = 0;
  }
  ji() {
    this.Ui = this.Bi;
  }
  Qi(t) {
    this.cancel();
    let n = Math.floor(this.Ui + this.Wi()),
      r = Math.max(0, Date.now() - this.Ki),
      i = Math.max(0, n - r);
    i > 0 &&
      v(
        "ExponentialBackoff",
        `Backing off for ${i} ms (base delay: ${this.Ui} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`
      ),
      (this.qi = this.Se.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.Ki = Date.now()), t())
      )),
      (this.Ui *= this.Li),
      this.Ui < this.Mi && (this.Ui = this.Mi),
      this.Ui > this.Bi && (this.Ui = this.Bi);
  }
  Gi() {
    this.qi !== null && (this.qi.skipDelay(), (this.qi = null));
  }
  cancel() {
    this.qi !== null && (this.qi.cancel(), (this.qi = null));
  }
  Wi() {
    return (Math.random() - 0.5) * this.Ui;
  }
};
var Ri = class {
    constructor(t, n, r, i, s, o) {
      (this.Se = t),
        (this.zi = r),
        (this.Hi = i),
        (this.Ji = s),
        (this.listener = o),
        (this.state = 0),
        (this.Yi = 0),
        (this.Xi = null),
        (this.stream = null),
        (this.Zi = new Ci(t, n));
    }
    tr() {
      return this.state === 1 || this.state === 2 || this.state === 4;
    }
    er() {
      return this.state === 2;
    }
    start() {
      this.state !== 3 ? this.auth() : this.nr();
    }
    async stop() {
      this.tr() && (await this.close(0));
    }
    sr() {
      (this.state = 0), this.Zi.reset();
    }
    ir() {
      this.er() &&
        this.Xi === null &&
        (this.Xi = this.Se.enqueueAfterDelay(this.zi, 6e4, () => this.rr()));
    }
    cr(t) {
      this.ur(), this.stream.send(t);
    }
    async rr() {
      if (this.er()) return this.close(0);
    }
    ur() {
      this.Xi && (this.Xi.cancel(), (this.Xi = null));
    }
    async close(t, n) {
      this.ur(),
        this.Zi.cancel(),
        this.Yi++,
        t !== 3
          ? this.Zi.reset()
          : n && n.code === f.RESOURCE_EXHAUSTED
          ? (dt(n.toString()),
            dt(
              "Using maximum backoff delay to prevent overloading the backend."
            ),
            this.Zi.ji())
          : n && n.code === f.UNAUTHENTICATED && this.Ji.invalidateToken(),
        this.stream !== null &&
          (this.ar(), this.stream.close(), (this.stream = null)),
        (this.state = t),
        await this.listener.Ri(n);
    }
    ar() {}
    auth() {
      this.state = 1;
      let t = this.hr(this.Yi),
        n = this.Yi;
      this.Ji.getToken().then(
        (r) => {
          this.Yi === n && this.lr(r);
        },
        (r) => {
          t(() => {
            let i = new y(
              f.UNKNOWN,
              "Fetching auth token failed: " + r.message
            );
            return this.dr(i);
          });
        }
      );
    }
    lr(t) {
      let n = this.hr(this.Yi);
      (this.stream = this.wr(t)),
        this.stream.Ii(() => {
          n(() => ((this.state = 2), this.listener.Ii()));
        }),
        this.stream.Ri((r) => {
          n(() => this.dr(r));
        }),
        this.stream.onMessage((r) => {
          n(() => this.onMessage(r));
        });
    }
    nr() {
      (this.state = 4),
        this.Zi.Qi(async () => {
          (this.state = 0), this.start();
        });
    }
    dr(t) {
      return (
        v("PersistentStream", `close with error: ${t}`),
        (this.stream = null),
        this.close(3, t)
      );
    }
    hr(t) {
      return (n) => {
        this.Se.enqueueAndForget(() =>
          this.Yi === t
            ? n()
            : (v(
                "PersistentStream",
                "stream callback skipped by getCloseGuardedDispatcher."
              ),
              Promise.resolve())
        );
      };
    }
  },
  Ya = class extends Ri {
    constructor(t, n, r, i, s) {
      super(
        t,
        "listen_stream_connection_backoff",
        "listen_stream_idle",
        n,
        r,
        s
      ),
        (this.R = i);
    }
    wr(t) {
      return this.Hi.Fi("Listen", t);
    }
    onMessage(t) {
      this.Zi.reset();
      let n = Pl(this.R, t),
        r = (function (i) {
          if (!("targetChange" in i)) return N.min();
          let s = i.targetChange;
          return s.targetIds && s.targetIds.length
            ? N.min()
            : s.readTime
            ? ut(s.readTime)
            : N.min();
        })(t);
      return this.listener._r(n, r);
    }
    mr(t) {
      let n = {};
      (n.database = Ii(this.R)),
        (n.addTarget = (function (i, s) {
          let o,
            a = s.target;
          return (
            (o = ci(a) ? { documents: jl(i, a) } : { query: Hl(i, a) }),
            (o.targetId = s.targetId),
            s.resumeToken.approximateByteSize() > 0
              ? (o.resumeToken = wa(i, s.resumeToken))
              : s.snapshotVersion.compareTo(N.min()) > 0 &&
                (o.readTime = jn(i, s.snapshotVersion.toTimestamp())),
            o
          );
        })(this.R, t));
      let r = zl(this.R, t);
      r && (n.labels = r), this.cr(n);
    }
    gr(t) {
      let n = {};
      (n.database = Ii(this.R)), (n.removeTarget = t), this.cr(n);
    }
  },
  Xa = class extends Ri {
    constructor(t, n, r, i, s) {
      super(t, "write_stream_connection_backoff", "write_stream_idle", n, r, s),
        (this.R = i),
        (this.yr = !1);
    }
    get pr() {
      return this.yr;
    }
    start() {
      (this.yr = !1), (this.lastStreamToken = void 0), super.start();
    }
    ar() {
      this.yr && this.Er([]);
    }
    wr(t) {
      return this.Hi.Fi("Write", t);
    }
    onMessage(t) {
      if (
        (R(!!t.streamToken), (this.lastStreamToken = t.streamToken), this.yr)
      ) {
        this.Zi.reset();
        let n = ql(t.writeResults, t.commitTime),
          r = ut(t.commitTime);
        return this.listener.Tr(r, n);
      }
      return (
        R(!t.writeResults || t.writeResults.length === 0),
        (this.yr = !0),
        this.listener.Ir()
      );
    }
    Ar() {
      let t = {};
      (t.database = Ii(this.R)), this.cr(t);
    }
    Er(t) {
      let n = {
        streamToken: this.lastStreamToken,
        writes: t.map((r) => Ul(this.R, r)),
      };
      this.cr(n);
    }
  };
var Qa = class extends class {} {
    constructor(t, n, r) {
      super(),
        (this.credentials = t),
        (this.Hi = n),
        (this.R = r),
        (this.Rr = !1);
    }
    Pr() {
      if (this.Rr)
        throw new y(
          f.FAILED_PRECONDITION,
          "The client has already been terminated."
        );
    }
    Ni(t, n, r) {
      return (
        this.Pr(),
        this.credentials
          .getToken()
          .then((i) => this.Hi.Ni(t, n, r, i))
          .catch((i) => {
            throw i.name === "FirebaseError"
              ? (i.code === f.UNAUTHENTICATED &&
                  this.credentials.invalidateToken(),
                i)
              : new y(f.UNKNOWN, i.toString());
          })
      );
    }
    Oi(t, n, r) {
      return (
        this.Pr(),
        this.credentials
          .getToken()
          .then((i) => this.Hi.Oi(t, n, r, i))
          .catch((i) => {
            throw i.name === "FirebaseError"
              ? (i.code === f.UNAUTHENTICATED &&
                  this.credentials.invalidateToken(),
                i)
              : new y(f.UNKNOWN, i.toString());
          })
      );
    }
    terminate() {
      this.Rr = !0;
    }
  },
  Ja = class {
    constructor(t, n) {
      (this.asyncQueue = t),
        (this.onlineStateHandler = n),
        (this.state = "Unknown"),
        (this.br = 0),
        (this.vr = null),
        (this.Vr = !0);
    }
    Sr() {
      this.br === 0 &&
        (this.Dr("Unknown"),
        (this.vr = this.asyncQueue.enqueueAfterDelay(
          "online_state_timeout",
          1e4,
          () => (
            (this.vr = null),
            this.Cr("Backend didn't respond within 10 seconds."),
            this.Dr("Offline"),
            Promise.resolve()
          )
        )));
    }
    Nr(t) {
      this.state === "Online"
        ? this.Dr("Unknown")
        : (this.br++,
          this.br >= 1 &&
            (this.kr(),
            this.Cr(
              `Connection failed 1 times. Most recent error: ${t.toString()}`
            ),
            this.Dr("Offline")));
    }
    set(t) {
      this.kr(), (this.br = 0), t === "Online" && (this.Vr = !1), this.Dr(t);
    }
    Dr(t) {
      t !== this.state && ((this.state = t), this.onlineStateHandler(t));
    }
    Cr(t) {
      let n = `Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
      this.Vr ? (dt(n), (this.Vr = !1)) : v("OnlineStateTracker", n);
    }
    kr() {
      this.vr !== null && (this.vr.cancel(), (this.vr = null));
    }
  };
var Za = class {
  constructor(t, n, r, i, s) {
    (this.localStore = t),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.$r = []),
      (this.Or = new Map()),
      (this.Fr = new Set()),
      (this.Mr = []),
      (this.Lr = s),
      this.Lr.di((o) => {
        r.enqueueAndForget(async () => {
          Lt(this) &&
            (v(
              "RemoteStore",
              "Restarting streams for network reachability change."
            ),
            await (async function (a) {
              let c = S(a);
              c.Fr.add(4),
                await He(c),
                c.Br.set("Unknown"),
                c.Fr.delete(4),
                await Gn(c);
            })(this));
        });
      }),
      (this.Br = new Ja(r, i));
  }
};
async function Gn(e) {
  if (Lt(e)) for (let t of e.Mr) await t(!0);
}
async function He(e) {
  for (let t of e.Mr) await t(!1);
}
function tc(e, t) {
  let n = S(e);
  n.Or.has(t.targetId) ||
    (n.Or.set(t.targetId, t), Li(n) ? ki(n) : se(n).er() && _i(n, t));
}
function nc(e, t) {
  let n = S(e),
    r = se(n);
  n.Or.delete(t),
    r.er() && ec(n, t),
    n.Or.size === 0 && (r.er() ? r.ir() : Lt(n) && n.Br.set("Unknown"));
}
function _i(e, t) {
  e.Ur.q(t.targetId), se(e).mr(t);
}
function ec(e, t) {
  e.Ur.q(t), se(e).gr(t);
}
function ki(e) {
  (e.Ur = new ma({
    getRemoteKeysForTarget: (t) => e.remoteSyncer.getRemoteKeysForTarget(t),
    lt: (t) => e.Or.get(t) || null,
  })),
    se(e).start(),
    e.Br.Sr();
}
function Li(e) {
  return Lt(e) && !se(e).tr() && e.Or.size > 0;
}
function Lt(e) {
  return S(e).Fr.size === 0;
}
function rc(e) {
  e.Ur = void 0;
}
async function sf(e) {
  e.Or.forEach((t, n) => {
    _i(e, t);
  });
}
async function of(e, t) {
  rc(e), Li(e) ? (e.Br.Nr(t), ki(e)) : e.Br.set("Unknown");
}
async function af(e, t, n) {
  if ((e.Br.set("Online"), t instanceof mi && t.state === 2 && t.cause))
    try {
      await (async function (r, i) {
        let s = i.cause;
        for (let o of i.targetIds)
          r.Or.has(o) &&
            (await r.remoteSyncer.rejectListen(o, s),
            r.Or.delete(o),
            r.Ur.removeTarget(o));
      })(e, t);
    } catch (r) {
      v(
        "RemoteStore",
        "Failed to remove targets %s: %s ",
        t.targetIds.join(","),
        r
      ),
        await Wn(e, r);
    }
  else if (
    (t instanceof je ? e.Ur.X(t) : t instanceof gi ? e.Ur.rt(t) : e.Ur.et(t),
    !n.isEqual(N.min()))
  )
    try {
      let r = await Va(e.localStore);
      n.compareTo(r) >= 0 &&
        (await (function (i, s) {
          let o = i.Ur.ut(s);
          return (
            o.targetChanges.forEach((a, c) => {
              if (a.resumeToken.approximateByteSize() > 0) {
                let u = i.Or.get(c);
                u && i.Or.set(c, u.withResumeToken(a.resumeToken, s));
              }
            }),
            o.targetMismatches.forEach((a) => {
              let c = i.Or.get(a);
              if (!c) return;
              i.Or.set(
                a,
                c.withResumeToken(H.EMPTY_BYTE_STRING, c.snapshotVersion)
              ),
                ec(i, a);
              let u = new mt(c.target, a, 1, c.sequenceNumber);
              _i(i, u);
            }),
            i.remoteSyncer.applyRemoteEvent(o)
          );
        })(e, n));
    } catch (r) {
      v("RemoteStore", "Failed to raise snapshot:", r), await Wn(e, r);
    }
}
async function Wn(e, t, n) {
  if (!$e(t)) throw t;
  e.Fr.add(1),
    await He(e),
    e.Br.set("Offline"),
    n || (n = () => Va(e.localStore)),
    e.asyncQueue.enqueueRetryable(async () => {
      v("RemoteStore", "Retrying IndexedDB access"),
        await n(),
        e.Fr.delete(1),
        await Gn(e);
    });
}
function ic(e, t) {
  return t().catch((n) => Wn(e, n, t));
}
async function Yn(e) {
  let t = S(e),
    n = yt(t),
    r = t.$r.length > 0 ? t.$r[t.$r.length - 1].batchId : -1;
  for (; cf(t); )
    try {
      let i = await ef(t.localStore, r);
      if (i === null) {
        t.$r.length === 0 && n.ir();
        break;
      }
      (r = i.batchId), uf(t, i);
    } catch (i) {
      await Wn(t, i);
    }
  sc(t) && oc(t);
}
function cf(e) {
  return Lt(e) && e.$r.length < 10;
}
function uf(e, t) {
  e.$r.push(t);
  let n = yt(e);
  n.er() && n.pr && n.Er(t.mutations);
}
function sc(e) {
  return Lt(e) && !yt(e).tr() && e.$r.length > 0;
}
function oc(e) {
  yt(e).start();
}
async function hf(e) {
  yt(e).Ar();
}
async function lf(e) {
  let t = yt(e);
  for (let n of e.$r) t.Er(n.mutations);
}
async function ff(e, t, n) {
  let r = e.$r.shift(),
    i = $n.from(r, t, n);
  await ic(e, () => e.remoteSyncer.applySuccessfulWrite(i)), await Yn(e);
}
async function df(e, t) {
  t &&
    yt(e).pr &&
    (await (async function (n, r) {
      if (((i = r.code), Nl(i) && i !== f.ABORTED)) {
        let s = n.$r.shift();
        yt(n).sr(),
          await ic(n, () => n.remoteSyncer.rejectFailedWrite(s.batchId, r)),
          await Yn(n);
      }
      var i;
    })(e, t)),
    sc(e) && oc(e);
}
async function pf(e, t) {
  let n = S(e);
  t
    ? (n.Fr.delete(2), await Gn(n))
    : t || (n.Fr.add(2), await He(n), n.Br.set("Unknown"));
}
function se(e) {
  return (
    e.qr ||
      ((e.qr = (function (t, n, r) {
        let i = S(t);
        return i.Pr(), new Ya(n, i.Hi, i.credentials, i.R, r);
      })(e.datastore, e.asyncQueue, {
        Ii: sf.bind(null, e),
        Ri: of.bind(null, e),
        _r: af.bind(null, e),
      })),
      e.Mr.push(async (t) => {
        t
          ? (e.qr.sr(), Li(e) ? ki(e) : e.Br.set("Unknown"))
          : (await e.qr.stop(), rc(e));
      })),
    e.qr
  );
}
function yt(e) {
  return (
    e.Kr ||
      ((e.Kr = (function (t, n, r) {
        let i = S(t);
        return i.Pr(), new Xa(n, i.Hi, i.credentials, i.R, r);
      })(e.datastore, e.asyncQueue, {
        Ii: hf.bind(null, e),
        Ri: df.bind(null, e),
        Ir: lf.bind(null, e),
        Tr: ff.bind(null, e),
      })),
      e.Mr.push(async (t) => {
        t
          ? (e.Kr.sr(), await Yn(e))
          : (await e.Kr.stop(),
            e.$r.length > 0 &&
              (v(
                "RemoteStore",
                `Stopping write stream with ${e.$r.length} pending writes`
              ),
              (e.$r = [])));
      })),
    e.Kr
  );
}
var Xn = class {
  constructor(t, n, r, i, s) {
    (this.asyncQueue = t),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new re()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  static createAndSchedule(t, n, r, i, s) {
    let o = Date.now() + r,
      a = new Xn(t, n, o, i, s);
    return a.start(r), a;
  }
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new y(f.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
};
function xi(e, t) {
  if ((dt("AsyncQueue", `${t}: ${e}`), $e(e)))
    return new y(f.UNAVAILABLE, `${t}: ${e}`);
  throw e;
}
var xt = class {
  constructor(t) {
    (this.comparator = t
      ? (n, r) => t(n, r) || w.comparator(n.key, r.key)
      : (n, r) => w.comparator(n.key, r.key)),
      (this.keyedMap = pi()),
      (this.sortedSet = new z(this.comparator));
  }
  static emptySet(t) {
    return new xt(t.comparator);
  }
  has(t) {
    return this.keyedMap.get(t) != null;
  }
  get(t) {
    return this.keyedMap.get(t);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(t) {
    let n = this.keyedMap.get(t);
    return n ? this.sortedSet.indexOf(n) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(t) {
    this.sortedSet.inorderTraversal((n, r) => (t(n), !1));
  }
  add(t) {
    let n = this.delete(t.key);
    return n.copy(n.keyedMap.insert(t.key, t), n.sortedSet.insert(t, null));
  }
  delete(t) {
    let n = this.get(t);
    return n
      ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(n))
      : this;
  }
  isEqual(t) {
    if (!(t instanceof xt) || this.size !== t.size) return !1;
    let n = this.sortedSet.getIterator(),
      r = t.sortedSet.getIterator();
    for (; n.hasNext(); ) {
      let i = n.getNext().key,
        s = r.getNext().key;
      if (!i.isEqual(s)) return !1;
    }
    return !0;
  }
  toString() {
    let t = [];
    return (
      this.forEach((n) => {
        t.push(n.toString());
      }),
      t.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          t.join(`  
`) +
          `
)`
    );
  }
  copy(t, n) {
    let r = new xt();
    return (
      (r.comparator = this.comparator), (r.keyedMap = t), (r.sortedSet = n), r
    );
  }
};
var Oi = class {
    constructor() {
      this.jr = new z(w.comparator);
    }
    track(t) {
      let n = t.doc.key,
        r = this.jr.get(n);
      r
        ? t.type !== 0 && r.type === 3
          ? (this.jr = this.jr.insert(n, t))
          : t.type === 3 && r.type !== 1
          ? (this.jr = this.jr.insert(n, { type: r.type, doc: t.doc }))
          : t.type === 2 && r.type === 2
          ? (this.jr = this.jr.insert(n, { type: 2, doc: t.doc }))
          : t.type === 2 && r.type === 0
          ? (this.jr = this.jr.insert(n, { type: 0, doc: t.doc }))
          : t.type === 1 && r.type === 0
          ? (this.jr = this.jr.remove(n))
          : t.type === 1 && r.type === 2
          ? (this.jr = this.jr.insert(n, { type: 1, doc: r.doc }))
          : t.type === 0 && r.type === 1
          ? (this.jr = this.jr.insert(n, { type: 2, doc: t.doc }))
          : T()
        : (this.jr = this.jr.insert(n, t));
    }
    Qr() {
      let t = [];
      return (
        this.jr.inorderTraversal((n, r) => {
          t.push(r);
        }),
        t
      );
    }
  },
  Ot = class {
    constructor(t, n, r, i, s, o, a, c) {
      (this.query = t),
        (this.docs = n),
        (this.oldDocs = r),
        (this.docChanges = i),
        (this.mutatedKeys = s),
        (this.fromCache = o),
        (this.syncStateChanged = a),
        (this.excludesMetadataChanges = c);
    }
    static fromInitialDocuments(t, n, r, i) {
      let s = [];
      return (
        n.forEach((o) => {
          s.push({ type: 0, doc: o });
        }),
        new Ot(t, n, xt.emptySet(n), s, r, i, !0, !1)
      );
    }
    get hasPendingWrites() {
      return !this.mutatedKeys.isEmpty();
    }
    isEqual(t) {
      if (
        !(
          this.fromCache === t.fromCache &&
          this.syncStateChanged === t.syncStateChanged &&
          this.mutatedKeys.isEqual(t.mutatedKeys) &&
          Fn(this.query, t.query) &&
          this.docs.isEqual(t.docs) &&
          this.oldDocs.isEqual(t.oldDocs)
        )
      )
        return !1;
      let n = this.docChanges,
        r = t.docChanges;
      if (n.length !== r.length) return !1;
      for (let i = 0; i < n.length; i++)
        if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc)) return !1;
      return !0;
    }
  };
var ac = class {
    constructor() {
      (this.Wr = void 0), (this.listeners = []);
    }
  },
  cc = class {
    constructor() {
      (this.queries = new ie((t) => Xo(t), Fn)),
        (this.onlineState = "Unknown"),
        (this.Gr = new Set());
    }
  };
async function gf(e, t) {
  let n = S(e),
    r = t.query,
    i = !1,
    s = n.queries.get(r);
  if ((s || ((i = !0), (s = new ac())), i))
    try {
      s.Wr = await n.onListen(r);
    } catch (o) {
      let a = xi(o, `Initialization of query '${hi(t.query)}' failed`);
      return void t.onError(a);
    }
  n.queries.set(r, s),
    s.listeners.push(t),
    t.zr(n.onlineState),
    s.Wr && t.Hr(s.Wr) && Mi(n);
}
async function mf(e, t) {
  let n = S(e),
    r = t.query,
    i = !1,
    s = n.queries.get(r);
  if (s) {
    let o = s.listeners.indexOf(t);
    o >= 0 && (s.listeners.splice(o, 1), (i = s.listeners.length === 0));
  }
  if (i) return n.queries.delete(r), n.onUnlisten(r);
}
function yf(e, t) {
  let n = S(e),
    r = !1;
  for (let i of t) {
    let s = i.query,
      o = n.queries.get(s);
    if (o) {
      for (let a of o.listeners) a.Hr(i) && (r = !0);
      o.Wr = i;
    }
  }
  r && Mi(n);
}
function vf(e, t, n) {
  let r = S(e),
    i = r.queries.get(t);
  if (i) for (let s of i.listeners) s.onError(n);
  r.queries.delete(t);
}
function Mi(e) {
  e.Gr.forEach((t) => {
    t.next();
  });
}
var uc = class {
  constructor(t, n, r) {
    (this.query = t),
      (this.Jr = n),
      (this.Yr = !1),
      (this.Xr = null),
      (this.onlineState = "Unknown"),
      (this.options = r || {});
  }
  Hr(t) {
    if (!this.options.includeMetadataChanges) {
      let r = [];
      for (let i of t.docChanges) i.type !== 3 && r.push(i);
      t = new Ot(
        t.query,
        t.docs,
        t.oldDocs,
        r,
        t.mutatedKeys,
        t.fromCache,
        t.syncStateChanged,
        !0
      );
    }
    let n = !1;
    return (
      this.Yr
        ? this.Zr(t) && (this.Jr.next(t), (n = !0))
        : this.eo(t, this.onlineState) && (this.no(t), (n = !0)),
      (this.Xr = t),
      n
    );
  }
  onError(t) {
    this.Jr.error(t);
  }
  zr(t) {
    this.onlineState = t;
    let n = !1;
    return (
      this.Xr &&
        !this.Yr &&
        this.eo(this.Xr, t) &&
        (this.no(this.Xr), (n = !0)),
      n
    );
  }
  eo(t, n) {
    if (!t.fromCache) return !0;
    let r = n !== "Offline";
    return (!this.options.so || !r) && (!t.docs.isEmpty() || n === "Offline");
  }
  Zr(t) {
    if (t.docChanges.length > 0) return !0;
    let n = this.Xr && this.Xr.hasPendingWrites !== t.hasPendingWrites;
    return (
      !(!t.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    );
  }
  no(t) {
    (t = Ot.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache)),
      (this.Yr = !0),
      this.Jr.next(t);
  }
};
var Vi = class {
    constructor(t) {
      this.key = t;
    }
  },
  Pi = class {
    constructor(t) {
      this.key = t;
    }
  },
  hc = class {
    constructor(t, n) {
      (this.query = t),
        (this.uo = n),
        (this.ao = null),
        (this.current = !1),
        (this.ho = k()),
        (this.mutatedKeys = k()),
        (this.lo = Qo(t)),
        (this.fo = new xt(this.lo));
    }
    get wo() {
      return this.uo;
    }
    _o(t, n) {
      let r = n ? n.mo : new Oi(),
        i = n ? n.fo : this.fo,
        s = n ? n.mutatedKeys : this.mutatedKeys,
        o = i,
        a = !1,
        c = Vn(this.query) && i.size === this.query.limit ? i.last() : null,
        u = Pn(this.query) && i.size === this.query.limit ? i.first() : null;
      if (
        (t.inorderTraversal((h, l) => {
          let p = i.get(h),
            m = Un(this.query, l) ? l : null,
            I = !!p && this.mutatedKeys.has(p.key),
            C =
              !!m &&
              (m.hasLocalMutations ||
                (this.mutatedKeys.has(m.key) && m.hasCommittedMutations)),
            x = !1;
          p && m
            ? p.data.isEqual(m.data)
              ? I !== C && (r.track({ type: 3, doc: m }), (x = !0))
              : this.yo(p, m) ||
                (r.track({ type: 2, doc: m }),
                (x = !0),
                ((c && this.lo(m, c) > 0) || (u && this.lo(m, u) < 0)) &&
                  (a = !0))
            : !p && m
            ? (r.track({ type: 0, doc: m }), (x = !0))
            : p &&
              !m &&
              (r.track({ type: 1, doc: p }), (x = !0), (c || u) && (a = !0)),
            x &&
              (m
                ? ((o = o.add(m)), (s = C ? s.add(h) : s.delete(h)))
                : ((o = o.delete(h)), (s = s.delete(h))));
        }),
        Vn(this.query) || Pn(this.query))
      )
        for (; o.size > this.query.limit; ) {
          let h = Vn(this.query) ? o.last() : o.first();
          (o = o.delete(h.key)),
            (s = s.delete(h.key)),
            r.track({ type: 1, doc: h });
        }
      return { fo: o, mo: r, Nn: a, mutatedKeys: s };
    }
    yo(t, n) {
      return (
        t.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
      );
    }
    applyChanges(t, n, r) {
      let i = this.fo;
      (this.fo = t.fo), (this.mutatedKeys = t.mutatedKeys);
      let s = t.mo.Qr();
      s.sort(
        (u, h) =>
          (function (l, p) {
            let m = (I) => {
              switch (I) {
                case 0:
                  return 1;
                case 2:
                case 3:
                  return 2;
                case 1:
                  return 0;
                default:
                  return T();
              }
            };
            return m(l) - m(p);
          })(u.type, h.type) || this.lo(u.doc, h.doc)
      ),
        this.po(r);
      let o = n ? this.Eo() : [],
        a = this.ho.size === 0 && this.current ? 1 : 0,
        c = a !== this.ao;
      return (
        (this.ao = a),
        s.length !== 0 || c
          ? {
              snapshot: new Ot(
                this.query,
                t.fo,
                i,
                s,
                t.mutatedKeys,
                a === 0,
                c,
                !1
              ),
              To: o,
            }
          : { To: o }
      );
    }
    zr(t) {
      return this.current && t === "Offline"
        ? ((this.current = !1),
          this.applyChanges(
            {
              fo: this.fo,
              mo: new Oi(),
              mutatedKeys: this.mutatedKeys,
              Nn: !1,
            },
            !1
          ))
        : { To: [] };
    }
    Io(t) {
      return (
        !this.uo.has(t) && !!this.fo.has(t) && !this.fo.get(t).hasLocalMutations
      );
    }
    po(t) {
      t &&
        (t.addedDocuments.forEach((n) => (this.uo = this.uo.add(n))),
        t.modifiedDocuments.forEach((n) => {}),
        t.removedDocuments.forEach((n) => (this.uo = this.uo.delete(n))),
        (this.current = t.current));
    }
    Eo() {
      if (!this.current) return [];
      let t = this.ho;
      (this.ho = k()),
        this.fo.forEach((r) => {
          this.Io(r.key) && (this.ho = this.ho.add(r.key));
        });
      let n = [];
      return (
        t.forEach((r) => {
          this.ho.has(r) || n.push(new Pi(r));
        }),
        this.ho.forEach((r) => {
          t.has(r) || n.push(new Vi(r));
        }),
        n
      );
    }
    Ao(t) {
      (this.uo = t.Bn), (this.ho = k());
      let n = this._o(t.documents);
      return this.applyChanges(n, !0);
    }
    Ro() {
      return Ot.fromInitialDocuments(
        this.query,
        this.fo,
        this.mutatedKeys,
        this.ao === 0
      );
    }
  },
  lc = class {
    constructor(t, n, r) {
      (this.query = t), (this.targetId = n), (this.view = r);
    }
  },
  fc = class {
    constructor(t) {
      (this.key = t), (this.Po = !1);
    }
  },
  dc = class {
    constructor(t, n, r, i, s, o) {
      (this.localStore = t),
        (this.remoteStore = n),
        (this.eventManager = r),
        (this.sharedClientState = i),
        (this.currentUser = s),
        (this.maxConcurrentLimboResolutions = o),
        (this.bo = {}),
        (this.vo = new ie((a) => Xo(a), Fn)),
        (this.Vo = new Map()),
        (this.So = new Set()),
        (this.Do = new z(w.comparator)),
        (this.Co = new Map()),
        (this.No = new Hn()),
        (this.xo = {}),
        (this.ko = new Map()),
        (this.$o = kt.Yt()),
        (this.onlineState = "Unknown"),
        (this.Oo = void 0);
    }
    get isPrimaryClient() {
      return this.Oo === !0;
    }
  };
async function Tf(e, t) {
  let n = Ef(e),
    r,
    i,
    s = n.vo.get(t);
  if (s)
    (r = s.targetId),
      n.sharedClientState.addLocalQueryTarget(r),
      (i = s.view.Ro());
  else {
    let o = await nf(n.localStore, Ct(t)),
      a = n.sharedClientState.addLocalQueryTarget(o.targetId);
    (r = o.targetId),
      (i = await wf(n, t, r, a === "current")),
      n.isPrimaryClient && tc(n.remoteStore, o);
  }
  return i;
}
async function wf(e, t, n, r) {
  e.Fo = (h, l, p) =>
    (async function (m, I, C, x) {
      let rt = I.view._o(C);
      rt.Nn &&
        (rt = await Pa(m.localStore, I.query, !1).then(({ documents: We }) =>
          I.view._o(We, rt)
        ));
      let Ge = x && x.targetChanges.get(I.targetId),
        Vt = I.view.applyChanges(rt, m.isPrimaryClient, Ge);
      return pc(m, I.targetId, Vt.To), Vt.snapshot;
    })(e, h, l, p);
  let i = await Pa(e.localStore, t, !0),
    s = new hc(t, i.Bn),
    o = s._o(i.documents),
    a = te.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && e.onlineState !== "Offline"
    ),
    c = s.applyChanges(o, e.isPrimaryClient, a);
  pc(e, n, c.To);
  let u = new lc(t, n, s);
  return (
    e.vo.set(t, u),
    e.Vo.has(n) ? e.Vo.get(n).push(t) : e.Vo.set(n, [t]),
    c.snapshot
  );
}
async function If(e, t) {
  let n = S(e),
    r = n.vo.get(t),
    i = n.Vo.get(r.targetId);
  if (i.length > 1)
    return (
      n.Vo.set(
        r.targetId,
        i.filter((s) => !Fn(s, t))
      ),
      void n.vo.delete(t)
    );
  n.isPrimaryClient
    ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
      n.sharedClientState.isActiveQueryTarget(r.targetId) ||
        (await Ai(n.localStore, r.targetId, !1)
          .then(() => {
            n.sharedClientState.clearQueryState(r.targetId),
              nc(n.remoteStore, r.targetId),
              Fi(n, r.targetId);
          })
          .catch(Be)))
    : (Fi(n, r.targetId), await Ai(n.localStore, r.targetId, !0));
}
async function Af(e, t, n) {
  let r = Sf(e);
  try {
    let i = await (function (s, o) {
      let a = S(s),
        c = W.now(),
        u = o.reduce((l, p) => l.add(p.key), k()),
        h;
      return a.persistence
        .runTransaction("Locally write mutations", "readwrite", (l) =>
          a.Mn.pn(l, u).next((p) => {
            h = p;
            let m = [];
            for (let I of o) {
              let C = bl(I, h.get(I.key));
              C != null &&
                m.push(new Rt(I.key, C, Mo(C.value.mapValue), gt.exists(!0)));
            }
            return a._n.addMutationBatch(l, c, m, o);
          })
        )
        .then(
          (l) => (
            l.applyToLocalDocumentSet(h), { batchId: l.batchId, changes: h }
          )
        );
    })(r.localStore, t);
    r.sharedClientState.addPendingMutation(i.batchId),
      (function (s, o, a) {
        let c = s.xo[s.currentUser.toKey()];
        c || (c = new z(D)),
          (c = c.insert(o, a)),
          (s.xo[s.currentUser.toKey()] = c);
      })(r, i.batchId, n),
      await Ke(r, i.changes),
      await Yn(r.remoteStore);
  } catch (i) {
    let s = xi(i, "Failed to persist write");
    n.reject(s);
  }
}
async function gc(e, t) {
  let n = S(e);
  try {
    let r = await tf(n.localStore, t);
    t.targetChanges.forEach((i, s) => {
      let o = n.Co.get(s);
      o &&
        (R(
          i.addedDocuments.size +
            i.modifiedDocuments.size +
            i.removedDocuments.size <=
            1
        ),
        i.addedDocuments.size > 0
          ? (o.Po = !0)
          : i.modifiedDocuments.size > 0
          ? R(o.Po)
          : i.removedDocuments.size > 0 && (R(o.Po), (o.Po = !1)));
    }),
      await Ke(n, r, t);
  } catch (r) {
    await Be(r);
  }
}
function mc(e, t, n) {
  let r = S(e);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    let i = [];
    r.vo.forEach((s, o) => {
      let a = o.view.zr(t);
      a.snapshot && i.push(a.snapshot);
    }),
      (function (s, o) {
        let a = S(s);
        a.onlineState = o;
        let c = !1;
        a.queries.forEach((u, h) => {
          for (let l of h.listeners) l.zr(o) && (c = !0);
        }),
          c && Mi(a);
      })(r.eventManager, t),
      i.length && r.bo._r(i),
      (r.onlineState = t),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
  }
}
async function bf(e, t, n) {
  let r = S(e);
  r.sharedClientState.updateQueryState(t, "rejected", n);
  let i = r.Co.get(t),
    s = i && i.key;
  if (s) {
    let o = new z(w.comparator);
    o = o.insert(s, K.newNoDocument(s, N.min()));
    let a = k().add(s),
      c = new qe(N.min(), new Map(), new q(D), o, a);
    await gc(r, c), (r.Do = r.Do.remove(s)), r.Co.delete(t), Ui(r);
  } else
    await Ai(r.localStore, t, !1)
      .then(() => Fi(r, t, n))
      .catch(Be);
}
async function Nf(e, t) {
  let n = S(e),
    r = t.batch.batchId;
  try {
    let i = await Jl(n.localStore, t);
    vc(n, r, null),
      yc(n, r),
      n.sharedClientState.updateMutationState(r, "acknowledged"),
      await Ke(n, i);
  } catch (i) {
    await Be(i);
  }
}
async function Df(e, t, n) {
  let r = S(e);
  try {
    let i = await (function (s, o) {
      let a = S(s);
      return a.persistence.runTransaction(
        "Reject batch",
        "readwrite-primary",
        (c) => {
          let u;
          return a._n
            .lookupMutationBatch(c, o)
            .next(
              (h) => (
                R(h !== null), (u = h.keys()), a._n.removeMutationBatch(c, h)
              )
            )
            .next(() => a._n.performConsistencyCheck(c))
            .next(() => a.Mn.pn(c, u));
        }
      );
    })(r.localStore, t);
    vc(r, t, n),
      yc(r, t),
      r.sharedClientState.updateMutationState(t, "rejected", n),
      await Ke(r, i);
  } catch (i) {
    await Be(i);
  }
}
function yc(e, t) {
  (e.ko.get(t) || []).forEach((n) => {
    n.resolve();
  }),
    e.ko.delete(t);
}
function vc(e, t, n) {
  let r = S(e),
    i = r.xo[r.currentUser.toKey()];
  if (i) {
    let s = i.get(t);
    s && (n ? s.reject(n) : s.resolve(), (i = i.remove(t))),
      (r.xo[r.currentUser.toKey()] = i);
  }
}
function Fi(e, t, n = null) {
  e.sharedClientState.removeLocalQueryTarget(t);
  for (let r of e.Vo.get(t)) e.vo.delete(r), n && e.bo.Mo(r, n);
  e.Vo.delete(t),
    e.isPrimaryClient &&
      e.No.Zn(t).forEach((r) => {
        e.No.containsKey(r) || wc(e, r);
      });
}
function wc(e, t) {
  e.So.delete(t.path.canonicalString());
  let n = e.Do.get(t);
  n !== null &&
    (nc(e.remoteStore, n), (e.Do = e.Do.remove(t)), e.Co.delete(n), Ui(e));
}
function pc(e, t, n) {
  for (let r of n)
    r instanceof Vi
      ? (e.No.addReference(r.key, t), Cf(e, r))
      : r instanceof Pi
      ? (v("SyncEngine", "Document no longer in limbo: " + r.key),
        e.No.removeReference(r.key, t),
        e.No.containsKey(r.key) || wc(e, r.key))
      : T();
}
function Cf(e, t) {
  let n = t.key,
    r = n.path.canonicalString();
  e.Do.get(n) ||
    e.So.has(r) ||
    (v("SyncEngine", "New document in limbo: " + n), e.So.add(r), Ui(e));
}
function Ui(e) {
  for (; e.So.size > 0 && e.Do.size < e.maxConcurrentLimboResolutions; ) {
    let t = e.So.values().next().value;
    e.So.delete(t);
    let n = new w(_.fromString(t)),
      r = e.$o.next();
    e.Co.set(r, new fc(n)),
      (e.Do = e.Do.insert(n, r)),
      tc(e.remoteStore, new mt(Ct(ui(n.path)), r, 2, _n.o));
  }
}
async function Ke(e, t, n) {
  let r = S(e),
    i = [],
    s = [],
    o = [];
  r.vo.isEmpty() ||
    (r.vo.forEach((a, c) => {
      o.push(
        r.Fo(c, t, n).then((u) => {
          if (u) {
            r.isPrimaryClient &&
              r.sharedClientState.updateQueryState(
                c.targetId,
                u.fromCache ? "not-current" : "current"
              ),
              i.push(u);
            let h = Bn.vn(c.targetId, u);
            s.push(h);
          }
        })
      );
    }),
    await Promise.all(o),
    r.bo._r(i),
    await (async function (a, c) {
      let u = S(a);
      try {
        await u.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (h) =>
            d.forEach(c, (l) =>
              d
                .forEach(l.Pn, (p) =>
                  u.persistence.referenceDelegate.addReference(h, l.targetId, p)
                )
                .next(() =>
                  d.forEach(l.bn, (p) =>
                    u.persistence.referenceDelegate.removeReference(
                      h,
                      l.targetId,
                      p
                    )
                  )
                )
            )
        );
      } catch (h) {
        if (!$e(h)) throw h;
        v("LocalStore", "Failed to update sequence numbers: " + h);
      }
      for (let h of c) {
        let l = h.targetId;
        if (!h.fromCache) {
          let p = u.kn.get(l),
            m = p.snapshotVersion,
            I = p.withLastLimboFreeSnapshotVersion(m);
          u.kn = u.kn.insert(l, I);
        }
      }
    })(r.localStore, s));
}
async function Rf(e, t) {
  let n = S(e);
  if (!n.currentUser.isEqual(t)) {
    v("SyncEngine", "User change. New user:", t.toKey());
    let r = await Ma(n.localStore, t);
    (n.currentUser = t),
      (function (i, s) {
        i.ko.forEach((o) => {
          o.forEach((a) => {
            a.reject(new y(f.CANCELLED, s));
          });
        }),
          i.ko.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        t,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await Ke(n, r.Ln);
  }
}
function _f(e, t) {
  let n = S(e),
    r = n.Co.get(t);
  if (r && r.Po) return k().add(r.key);
  {
    let i = k(),
      s = n.Vo.get(t);
    if (!s) return i;
    for (let o of s) {
      let a = n.vo.get(o);
      i = i.unionWith(a.view.wo);
    }
    return i;
  }
}
function Ef(e) {
  let t = S(e);
  return (
    (t.remoteStore.remoteSyncer.applyRemoteEvent = gc.bind(null, t)),
    (t.remoteStore.remoteSyncer.getRemoteKeysForTarget = _f.bind(null, t)),
    (t.remoteStore.remoteSyncer.rejectListen = bf.bind(null, t)),
    (t.bo._r = yf.bind(null, t.eventManager)),
    (t.bo.Mo = vf.bind(null, t.eventManager)),
    t
  );
}
function Sf(e) {
  let t = S(e);
  return (
    (t.remoteStore.remoteSyncer.applySuccessfulWrite = Nf.bind(null, t)),
    (t.remoteStore.remoteSyncer.rejectFailedWrite = Df.bind(null, t)),
    t
  );
}
var Ec = class {
    constructor() {
      this.synchronizeTabs = !1;
    }
    async initialize(t) {
      (this.R = zn(t.databaseInfo.databaseId)),
        (this.sharedClientState = this.Bo(t)),
        (this.persistence = this.Uo(t)),
        await this.persistence.start(),
        (this.gcScheduler = this.qo(t)),
        (this.localStore = this.Ko(t));
    }
    qo(t) {
      return null;
    }
    Ko(t) {
      return Ql(this.persistence, new xa(), t.initialUser, this.R);
    }
    Uo(t) {
      return new Ba(Kn.Ps, this.R);
    }
    Bo(t) {
      return new Ka();
    }
    async terminate() {
      this.gcScheduler && this.gcScheduler.stop(),
        await this.sharedClientState.shutdown(),
        await this.persistence.shutdown();
    }
  },
  Tc = class {
    async initialize(t, n) {
      this.localStore ||
        ((this.localStore = t.localStore),
        (this.sharedClientState = t.sharedClientState),
        (this.datastore = this.createDatastore(n)),
        (this.remoteStore = this.createRemoteStore(n)),
        (this.eventManager = this.createEventManager(n)),
        (this.syncEngine = this.createSyncEngine(n, !t.synchronizeTabs)),
        (this.sharedClientState.onlineStateHandler = (r) =>
          mc(this.syncEngine, r, 1)),
        (this.remoteStore.remoteSyncer.handleCredentialChange = Rf.bind(
          null,
          this.syncEngine
        )),
        await pf(this.remoteStore, this.syncEngine.isPrimaryClient));
    }
    createEventManager(t) {
      return new cc();
    }
    createDatastore(t) {
      let n = zn(t.databaseInfo.databaseId),
        r = ((i = t.databaseInfo), new Wa(i));
      var i;
      return (function (s, o, a) {
        return new Qa(s, o, a);
      })(t.credentials, r, n);
    }
    createRemoteStore(t) {
      return (
        (n = this.localStore),
        (r = this.datastore),
        (i = t.asyncQueue),
        (s = (a) => mc(this.syncEngine, a, 0)),
        (o = Ni.gt() ? new Ni() : new za()),
        new Za(n, r, i, s, o)
      );
      var n, r, i, s, o;
    }
    createSyncEngine(t, n) {
      return (function (r, i, s, o, a, c, u) {
        let h = new dc(r, i, s, o, a, c);
        return u && (h.Oo = !0), h;
      })(
        this.localStore,
        this.remoteStore,
        this.eventManager,
        this.sharedClientState,
        t.initialUser,
        t.maxConcurrentLimboResolutions,
        n
      );
    }
    terminate() {
      return (async function (t) {
        let n = S(t);
        v("RemoteStore", "RemoteStore shutting down."),
          n.Fr.add(5),
          await He(n),
          n.Lr.shutdown(),
          n.Br.set("Unknown");
      })(this.remoteStore);
    }
  };
var Ic = class {
  constructor(t) {
    (this.observer = t), (this.muted = !1);
  }
  next(t) {
    this.observer.next && this.Qo(this.observer.next, t);
  }
  error(t) {
    this.observer.error
      ? this.Qo(this.observer.error, t)
      : console.error("Uncaught Error in snapshot listener:", t);
  }
  Wo() {
    this.muted = !0;
  }
  Qo(t, n) {
    this.muted ||
      setTimeout(() => {
        this.muted || t(n);
      }, 0);
  }
};
var Sc = class {
  constructor(t, n, r) {
    (this.credentials = t),
      (this.asyncQueue = n),
      (this.databaseInfo = r),
      (this.user = nt.UNAUTHENTICATED),
      (this.clientId = ei.u()),
      (this.credentialListener = () => Promise.resolve()),
      this.credentials.setChangeListener(n, async (i) => {
        v("FirestoreClient", "Received user=", i.uid),
          await this.credentialListener(i),
          (this.user = i);
      });
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      credentials: this.credentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(t) {
    this.credentialListener = t;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new y(
        f.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    let t = new re();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this.onlineComponents && (await this.onlineComponents.terminate()),
            this.offlineComponents &&
              (await this.offlineComponents.terminate()),
            this.credentials.removeChangeListener(),
            t.resolve();
        } catch (n) {
          let r = xi(n, "Failed to shutdown persistence");
          t.reject(r);
        }
      }),
      t.promise
    );
  }
};
async function kf(e, t) {
  e.asyncQueue.verifyOperationInProgress(),
    v("FirestoreClient", "Initializing OfflineComponentProvider");
  let n = await e.getConfiguration();
  await t.initialize(n);
  let r = n.initialUser;
  e.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await Ma(t.localStore, i), (r = i));
  }),
    t.persistence.setDatabaseDeletedListener(() => e.terminate()),
    (e.offlineComponents = t);
}
async function xf(e, t) {
  e.asyncQueue.verifyOperationInProgress();
  let n = await Lf(e);
  v("FirestoreClient", "Initializing OnlineComponentProvider");
  let r = await e.getConfiguration();
  await t.initialize(n, r),
    e.setCredentialChangeListener((i) =>
      (async function (s, o) {
        let a = S(s);
        a.asyncQueue.verifyOperationInProgress(),
          v("RemoteStore", "RemoteStore received new credentials");
        let c = Lt(a);
        a.Fr.add(3),
          await He(a),
          c && a.Br.set("Unknown"),
          await a.remoteSyncer.handleCredentialChange(o),
          a.Fr.delete(3),
          await Gn(a);
      })(t.remoteStore, i)
    ),
    (e.onlineComponents = t);
}
async function Lf(e) {
  return (
    e.offlineComponents ||
      (v("FirestoreClient", "Using default OfflineComponentProvider"),
      await kf(e, new Ec())),
    e.offlineComponents
  );
}
async function Ac(e) {
  return (
    e.onlineComponents ||
      (v("FirestoreClient", "Using default OnlineComponentProvider"),
      await xf(e, new Tc())),
    e.onlineComponents
  );
}
function Of(e) {
  return Ac(e).then((t) => t.syncEngine);
}
async function bc(e) {
  let t = await Ac(e),
    n = t.eventManager;
  return (
    (n.onListen = Tf.bind(null, t.syncEngine)),
    (n.onUnlisten = If.bind(null, t.syncEngine)),
    n
  );
}
var Nc = class {
    constructor(t, n, r, i, s, o, a, c) {
      (this.databaseId = t),
        (this.appId = n),
        (this.persistenceKey = r),
        (this.host = i),
        (this.ssl = s),
        (this.forceLongPolling = o),
        (this.autoDetectLongPolling = a),
        (this.useFetchStreams = c);
    }
  },
  oe = class {
    constructor(t, n) {
      (this.projectId = t), (this.database = n || "(default)");
    }
    get isDefaultDatabase() {
      return this.database === "(default)";
    }
    isEqual(t) {
      return (
        t instanceof oe &&
        t.projectId === this.projectId &&
        t.database === this.database
      );
    }
  };
var Dc = new Map();
var Cc = class {
    constructor(t, n) {
      (this.user = n),
        (this.type = "OAuth"),
        (this.authHeaders = {}),
        (this.authHeaders.Authorization = `Bearer ${t}`);
    }
  },
  qi = class {
    constructor() {
      this.changeListener = null;
    }
    getToken() {
      return Promise.resolve(null);
    }
    invalidateToken() {}
    setChangeListener(t, n) {
      (this.changeListener = n),
        t.enqueueRetryable(() => n(nt.UNAUTHENTICATED));
    }
    removeChangeListener() {
      this.changeListener = null;
    }
  },
  Rc = class {
    constructor(t) {
      (this.currentUser = nt.UNAUTHENTICATED),
        (this.oc = new re()),
        (this.cc = 0),
        (this.forceRefresh = !1),
        (this.auth = null),
        (this.asyncQueue = null),
        (this.uc = () => {
          this.cc++,
            (this.currentUser = this.ac()),
            this.oc.resolve(),
            this.changeListener &&
              this.asyncQueue.enqueueRetryable(() =>
                this.changeListener(this.currentUser)
              );
        });
      let n = (r) => {
        v("FirebaseCredentialsProvider", "Auth detected"),
          (this.auth = r),
          this.auth.addAuthTokenListener(this.uc);
      };
      t.onInit((r) => n(r)),
        setTimeout(() => {
          if (!this.auth) {
            let r = t.getImmediate({ optional: !0 });
            r
              ? n(r)
              : (v("FirebaseCredentialsProvider", "Auth not yet detected"),
                this.oc.resolve());
          }
        }, 0);
    }
    getToken() {
      let t = this.cc,
        n = this.forceRefresh;
      return (
        (this.forceRefresh = !1),
        this.auth
          ? this.auth
              .getToken(n)
              .then((r) =>
                this.cc !== t
                  ? (v(
                      "FirebaseCredentialsProvider",
                      "getToken aborted due to token change."
                    ),
                    this.getToken())
                  : r
                  ? (R(typeof r.accessToken == "string"),
                    new Cc(r.accessToken, this.currentUser))
                  : null
              )
          : Promise.resolve(null)
      );
    }
    invalidateToken() {
      this.forceRefresh = !0;
    }
    setChangeListener(t, n) {
      (this.asyncQueue = t),
        this.asyncQueue.enqueueRetryable(async () => {
          await this.oc.promise,
            await n(this.currentUser),
            (this.changeListener = n);
        });
    }
    removeChangeListener() {
      this.auth && this.auth.removeAuthTokenListener(this.uc),
        (this.changeListener = () => Promise.resolve());
    }
    ac() {
      let t = this.auth && this.auth.getUid();
      return R(t === null || typeof t == "string"), new nt(t);
    }
  },
  _c = class {
    constructor(t, n, r) {
      (this.hc = t),
        (this.lc = n),
        (this.fc = r),
        (this.type = "FirstParty"),
        (this.user = nt.FIRST_PARTY);
    }
    get authHeaders() {
      let t = { "X-Goog-AuthUser": this.lc },
        n = this.hc.auth.getAuthHeaderValueForFirstParty([]);
      return (
        n && (t.Authorization = n),
        this.fc && (t["X-Goog-Iam-Authorization-Token"] = this.fc),
        t
      );
    }
  },
  kc = class {
    constructor(t, n, r) {
      (this.hc = t), (this.lc = n), (this.fc = r);
    }
    getToken() {
      return Promise.resolve(new _c(this.hc, this.lc, this.fc));
    }
    setChangeListener(t, n) {
      t.enqueueRetryable(() => n(nt.FIRST_PARTY));
    }
    removeChangeListener() {}
    invalidateToken() {}
  };
function Lc(e, t, n) {
  if (!n)
    throw new y(
      f.INVALID_ARGUMENT,
      `Function ${e}() cannot be called with an empty ${t}.`
    );
}
function xc(e) {
  if (!w.isDocumentKey(e))
    throw new y(
      f.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`
    );
}
function Oc(e) {
  if (w.isDocumentKey(e))
    throw new y(
      f.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`
    );
}
function ji(e) {
  if (e === void 0) return "undefined";
  if (e === null) return "null";
  if (typeof e == "string")
    return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
  if (typeof e == "number" || typeof e == "boolean") return "" + e;
  if (typeof e == "object") {
    if (e instanceof Array) return "an array";
    {
      let t = (function (n) {
        if (n.constructor) {
          let r = /function\s+([^\s(]+)\s*\(/.exec(n.constructor.toString());
          if (r && r.length > 1) return r[1];
        }
        return null;
      })(e);
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return typeof e == "function" ? "a function" : T();
}
function ae(e, t) {
  if (("_delegate" in e && (e = e._delegate), !(e instanceof t))) {
    if (t.name === e.constructor.name)
      throw new y(
        f.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      let n = ji(e);
      throw new y(
        f.INVALID_ARGUMENT,
        `Expected type '${t.name}', but it was: ${n}`
      );
    }
  }
  return e;
}
var $i = class {
  constructor(t) {
    var n;
    if (t.host === void 0) {
      if (t.ssl !== void 0)
        throw new y(
          f.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        );
      (this.host = "firestore.googleapis.com"), (this.ssl = !0);
    } else
      (this.host = t.host),
        (this.ssl = (n = t.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = t.credentials),
      (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
      t.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < 1048576)
        throw new y(
          f.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576"
        );
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
      (this.experimentalAutoDetectLongPolling =
        !!t.experimentalAutoDetectLongPolling),
      (this.useFetchStreams = !!t.useFetchStreams),
      (function (r, i, s, o) {
        if (i === !0 && o === !0)
          throw new y(
            f.INVALID_ARGUMENT,
            `${r} and ${s} cannot be used together.`
          );
      })(
        "experimentalForceLongPolling",
        t.experimentalForceLongPolling,
        "experimentalAutoDetectLongPolling",
        t.experimentalAutoDetectLongPolling
      );
  }
  isEqual(t) {
    return (
      this.host === t.host &&
      this.ssl === t.ssl &&
      this.credentials === t.credentials &&
      this.cacheSizeBytes === t.cacheSizeBytes &&
      this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        t.experimentalAutoDetectLongPolling &&
      this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
      this.useFetchStreams === t.useFetchStreams
    );
  }
};
var Qn = class {
  constructor(t, n) {
    (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new $i({})),
      (this._settingsFrozen = !1),
      t instanceof oe
        ? ((this._databaseId = t), (this._credentials = new qi()))
        : ((this._app = t),
          (this._databaseId = (function (r) {
            if (
              !Object.prototype.hasOwnProperty.apply(r.options, ["projectId"])
            )
              throw new y(
                f.INVALID_ARGUMENT,
                '"projectId" not provided in firebase.initializeApp.'
              );
            return new oe(r.options.projectId);
          })(t)),
          (this._credentials = new Rc(n)));
  }
  get app() {
    if (!this._app)
      throw new y(
        f.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(t) {
    if (this._settingsFrozen)
      throw new y(
        f.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
      );
    (this._settings = new $i(t)),
      t.credentials !== void 0 &&
        (this._credentials = (function (n) {
          if (!n) return new qi();
          switch (n.type) {
            case "gapi":
              let r = n.client;
              return (
                R(
                  !(
                    typeof r != "object" ||
                    r === null ||
                    !r.auth ||
                    !r.auth.getAuthHeaderValueForFirstParty
                  )
                ),
                new kc(r, n.sessionIndex || "0", n.iamToken || null)
              );
            case "provider":
              return n.client;
            default:
              throw new y(
                f.INVALID_ARGUMENT,
                "makeCredentialsProvider failed due to invalid credential type"
              );
          }
        })(t.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (t) {
        let n = Dc.get(t);
        n &&
          (v("ComponentProvider", "Removing Datastore"),
          Dc.delete(t),
          n.terminate());
      })(this),
      Promise.resolve()
    );
  }
};
var tt = class {
    constructor(t, n, r) {
      (this.converter = n),
        (this._key = r),
        (this.type = "document"),
        (this.firestore = t);
    }
    get _path() {
      return this._key.path;
    }
    get id() {
      return this._key.path.lastSegment();
    }
    get path() {
      return this._key.path.canonicalString();
    }
    get parent() {
      return new ht(this.firestore, this.converter, this._key.path.popLast());
    }
    withConverter(t) {
      return new tt(this.firestore, t, this._key);
    }
  },
  ce = class {
    constructor(t, n, r) {
      (this.converter = n),
        (this._query = r),
        (this.type = "query"),
        (this.firestore = t);
    }
    withConverter(t) {
      return new ce(this.firestore, t, this._query);
    }
  },
  ht = class extends ce {
    constructor(t, n, r) {
      super(t, n, ui(r)), (this._path = r), (this.type = "collection");
    }
    get id() {
      return this._query.path.lastSegment();
    }
    get path() {
      return this._query.path.canonicalString();
    }
    get parent() {
      let t = this._path.popLast();
      return t.isEmpty() ? null : new tt(this.firestore, null, new w(t));
    }
    withConverter(t) {
      return new ht(this.firestore, t, this._path);
    }
  };
function Mc(e, t, ...n) {
  if (((e = vt(e)), Lc("collection", "path", t), e instanceof Qn)) {
    let r = _.fromString(t, ...n);
    return Oc(r), new ht(e, null, r);
  }
  {
    if (!(e instanceof tt || e instanceof ht))
      throw new y(
        f.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    let r = _.fromString(e.path, ...n).child(_.fromString(t));
    return Oc(r), new ht(e.firestore, null, r);
  }
}
function Bi(e, t, ...n) {
  if (
    ((e = vt(e)),
    arguments.length === 1 && (t = ei.u()),
    Lc("doc", "path", t),
    e instanceof Qn)
  ) {
    let r = _.fromString(t, ...n);
    return xc(r), new tt(e, null, new w(r));
  }
  {
    if (!(e instanceof tt || e instanceof ht))
      throw new y(
        f.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    let r = e._path.child(_.fromString(t, ...n));
    return (
      xc(r), new tt(e.firestore, e instanceof ht ? e.converter : null, new w(r))
    );
  }
}
var Vc = class {
  constructor() {
    (this.dc = Promise.resolve()),
      (this.wc = []),
      (this._c = !1),
      (this.mc = []),
      (this.gc = null),
      (this.yc = !1),
      (this.Ec = !1),
      (this.Tc = []),
      (this.Zi = new Ci(this, "async_queue_retry")),
      (this.Ic = () => {
        let n = Di();
        n &&
          v("AsyncQueue", "Visibility state changed to " + n.visibilityState),
          this.Zi.Gi();
      });
    let t = Di();
    t &&
      typeof t.addEventListener == "function" &&
      t.addEventListener("visibilitychange", this.Ic);
  }
  get isShuttingDown() {
    return this._c;
  }
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.Ac(), this.Rc(t);
  }
  enterRestrictedMode(t) {
    if (!this._c) {
      (this._c = !0), (this.Ec = t || !1);
      let n = Di();
      n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener("visibilitychange", this.Ic);
    }
  }
  enqueue(t) {
    if ((this.Ac(), this._c)) return new Promise(() => {});
    let n = new re();
    return this.Rc(() =>
      this._c && this.Ec
        ? Promise.resolve()
        : (t().then(n.resolve, n.reject), n.promise)
    ).then(() => n.promise);
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.wc.push(t), this.Pc()));
  }
  async Pc() {
    if (this.wc.length !== 0) {
      try {
        await this.wc[0](), this.wc.shift(), this.Zi.reset();
      } catch (t) {
        if (!$e(t)) throw t;
        v("AsyncQueue", "Operation failed with retryable error: " + t);
      }
      this.wc.length > 0 && this.Zi.Qi(() => this.Pc());
    }
  }
  Rc(t) {
    let n = this.dc.then(
      () => (
        (this.yc = !0),
        t()
          .catch((r) => {
            throw (
              ((this.gc = r),
              (this.yc = !1),
              dt(
                "INTERNAL UNHANDLED ERROR: ",
                (function (i) {
                  let s = i.message || "";
                  return (
                    i.stack &&
                      (s = i.stack.includes(i.message)
                        ? i.stack
                        : i.message +
                          `
` +
                          i.stack),
                    s
                  );
                })(r)
              ),
              r)
            );
          })
          .then((r) => ((this.yc = !1), r))
      )
    );
    return (this.dc = n), n;
  }
  enqueueAfterDelay(t, n, r) {
    this.Ac(), this.Tc.indexOf(t) > -1 && (n = 0);
    let i = Xn.createAndSchedule(this, t, n, r, (s) => this.bc(s));
    return this.mc.push(i), i;
  }
  Ac() {
    this.gc && T();
  }
  verifyOperationInProgress() {}
  async vc() {
    let t;
    do (t = this.dc), await t;
    while (t !== this.dc);
  }
  Vc(t) {
    for (let n of this.mc) if (n.timerId === t) return !0;
    return !1;
  }
  Sc(t) {
    return this.vc().then(() => {
      this.mc.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (let n of this.mc)
        if ((n.skipDelay(), t !== "all" && n.timerId === t)) break;
      return this.vc();
    });
  }
  Dc(t) {
    this.Tc.push(t);
  }
  bc(t) {
    let n = this.mc.indexOf(t);
    this.mc.splice(n, 1);
  }
};
function Pc(e) {
  return (function (t, n) {
    if (typeof t != "object" || t === null) return !1;
    let r = t;
    for (let i of n) if (i in r && typeof r[i] == "function") return !0;
    return !1;
  })(e, ["next", "error", "complete"]);
}
var ue = class extends Qn {
  constructor(t, n) {
    super(t, n),
      (this.type = "firestore"),
      (this._queue = new Vc()),
      (this._persistenceKey = "name" in t ? t.name : "[DEFAULT]");
  }
  _terminate() {
    return this._firestoreClient || Fc(this), this._firestoreClient.terminate();
  }
};
function Uc(e = ls()) {
  return cs(e, "firestore-exp").getImmediate();
}
function qc(e) {
  return (
    e._firestoreClient || Fc(e),
    e._firestoreClient.verifyNotTerminated(),
    e._firestoreClient
  );
}
function Fc(e) {
  var t;
  let n = e._freezeSettings(),
    r = (function (i, s, o, a) {
      return new Nc(
        i,
        s,
        o,
        a.host,
        a.ssl,
        a.experimentalForceLongPolling,
        a.experimentalAutoDetectLongPolling,
        a.useFetchStreams
      );
    })(
      e._databaseId,
      ((t = e._app) === null || t === void 0 ? void 0 : t.options.appId) || "",
      e._persistenceKey,
      n
    );
  e._firestoreClient = new Sc(e._credentials, e._queue, r);
}
var Jn = class {
  constructor(...t) {
    for (let n = 0; n < t.length; ++n)
      if (t[n].length === 0)
        throw new y(
          f.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty."
        );
    this._internalPath = new J(t);
  }
  isEqual(t) {
    return this._internalPath.isEqual(t._internalPath);
  }
};
var Mt = class {
  constructor(t) {
    this._byteString = t;
  }
  static fromBase64String(t) {
    try {
      return new Mt(H.fromBase64String(t));
    } catch (n) {
      throw new y(
        f.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + n
      );
    }
  }
  static fromUint8Array(t) {
    return new Mt(H.fromUint8Array(t));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(t) {
    return this._byteString.isEqual(t._byteString);
  }
};
var Hi = class {
  constructor(t) {
    this._methodName = t;
  }
};
var Zn = class {
  constructor(t, n) {
    if (!isFinite(t) || t < -90 || t > 90)
      throw new y(
        f.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + t
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new y(
        f.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + n
      );
    (this._lat = t), (this._long = n);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(t) {
    return this._lat === t._lat && this._long === t._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(t) {
    return D(this._lat, t._lat) || D(this._long, t._long);
  }
};
var Mf = /^__.*__$/,
  jc = class {
    constructor(t, n, r) {
      (this.data = t), (this.fieldMask = n), (this.fieldTransforms = r);
    }
    toMutation(t, n) {
      return this.fieldMask !== null
        ? new Rt(t, this.data, this.fieldMask, n, this.fieldTransforms)
        : new Fe(t, this.data, n, this.fieldTransforms);
    }
  };
function $c(e) {
  switch (e) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw T();
  }
}
var tr = class {
    constructor(t, n, r, i, s, o) {
      (this.settings = t),
        (this.databaseId = n),
        (this.R = r),
        (this.ignoreUndefinedProperties = i),
        s === void 0 && this.Cc(),
        (this.fieldTransforms = s || []),
        (this.fieldMask = o || []);
    }
    get path() {
      return this.settings.path;
    }
    get Nc() {
      return this.settings.Nc;
    }
    xc(t) {
      return new tr(
        Object.assign(Object.assign({}, this.settings), t),
        this.databaseId,
        this.R,
        this.ignoreUndefinedProperties,
        this.fieldTransforms,
        this.fieldMask
      );
    }
    kc(t) {
      var n;
      let r = (n = this.path) === null || n === void 0 ? void 0 : n.child(t),
        i = this.xc({ path: r, $c: !1 });
      return i.Oc(t), i;
    }
    Fc(t) {
      var n;
      let r = (n = this.path) === null || n === void 0 ? void 0 : n.child(t),
        i = this.xc({ path: r, $c: !1 });
      return i.Cc(), i;
    }
    Mc(t) {
      return this.xc({ path: void 0, $c: !0 });
    }
    Lc(t) {
      return er(
        t,
        this.settings.methodName,
        this.settings.Bc || !1,
        this.path,
        this.settings.Uc
      );
    }
    contains(t) {
      return (
        this.fieldMask.find((n) => t.isPrefixOf(n)) !== void 0 ||
        this.fieldTransforms.find((n) => t.isPrefixOf(n.field)) !== void 0
      );
    }
    Cc() {
      if (this.path)
        for (let t = 0; t < this.path.length; t++) this.Oc(this.path.get(t));
    }
    Oc(t) {
      if (t.length === 0) throw this.Lc("Document fields must not be empty");
      if ($c(this.Nc) && Mf.test(t))
        throw this.Lc('Document fields cannot begin and end with "__"');
    }
  },
  Bc = class {
    constructor(t, n, r) {
      (this.databaseId = t),
        (this.ignoreUndefinedProperties = n),
        (this.R = r || zn(t));
    }
    qc(t, n, r, i = !1) {
      return new tr(
        { Nc: t, methodName: n, Uc: r, path: J.emptyPath(), $c: !1, Bc: i },
        this.databaseId,
        this.R,
        this.ignoreUndefinedProperties
      );
    }
  };
function Vf(e) {
  let t = e._freezeSettings(),
    n = zn(e._databaseId);
  return new Bc(e._databaseId, !!t.ignoreUndefinedProperties, n);
}
function Uf(e, t, n, r, i, s = {}) {
  let o = e.qc(s.merge || s.mergeFields ? 2 : 0, t, n, i);
  Kc("Data must be an object, but it was:", o, r);
  let a = Hc(r, o),
    c,
    u;
  if (s.merge) (c = new kn(o.fieldMask)), (u = o.fieldTransforms);
  else if (s.mergeFields) {
    let h = [];
    for (let l of s.mergeFields) {
      let p = Pf(t, l, n);
      if (!o.contains(p))
        throw new y(
          f.INVALID_ARGUMENT,
          `Field '${p}' is specified in your field mask but missing from your input data.`
        );
      Ff(h, p) || h.push(p);
    }
    (c = new kn(h)), (u = o.fieldTransforms.filter((l) => c.covers(l.field)));
  } else (c = null), (u = o.fieldTransforms);
  return new jc(new it(a), c, u);
}
function zc(e, t) {
  if (Gc((e = vt(e)))) return Kc("Unsupported field value:", t, e), Hc(e, t);
  if (e instanceof Hi)
    return (
      (function (n, r) {
        if (!$c(r.Nc))
          throw r.Lc(
            `${n._methodName}() can only be used with update() and set()`
          );
        if (!r.path)
          throw r.Lc(
            `${n._methodName}() is not currently supported inside arrays`
          );
        let i = n._toFieldTransform(r);
        i && r.fieldTransforms.push(i);
      })(e, t),
      null
    );
  if (e === void 0 && t.ignoreUndefinedProperties) return null;
  if ((t.path && t.fieldMask.push(t.path), e instanceof Array)) {
    if (t.settings.$c && t.Nc !== 4)
      throw t.Lc("Nested arrays are not supported");
    return (function (n, r) {
      let i = [],
        s = 0;
      for (let o of n) {
        let a = zc(o, r.Mc(s));
        a == null && (a = { nullValue: "NULL_VALUE" }), i.push(a), s++;
      }
      return { arrayValue: { values: i } };
    })(e, t);
  }
  return (function (n, r) {
    if ((n = vt(n)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof n == "number") return El(r.R, n);
    if (typeof n == "boolean") return { booleanValue: n };
    if (typeof n == "string") return { stringValue: n };
    if (n instanceof Date) {
      let i = W.fromDate(n);
      return { timestampValue: jn(r.R, i) };
    }
    if (n instanceof W) {
      let i = new W(n.seconds, 1e3 * Math.floor(n.nanoseconds / 1e3));
      return { timestampValue: jn(r.R, i) };
    }
    if (n instanceof Zn)
      return {
        geoPointValue: { latitude: n.latitude, longitude: n.longitude },
      };
    if (n instanceof Mt) return { bytesValue: wa(r.R, n._byteString) };
    if (n instanceof tt) {
      let i = r.databaseId,
        s = n.firestore._databaseId;
      if (!s.isEqual(i))
        throw r.Lc(
          `Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`
        );
      return {
        referenceValue: vi(
          n.firestore._databaseId || r.databaseId,
          n._key.path
        ),
      };
    }
    throw r.Lc(`Unsupported field value: ${ji(n)}`);
  })(e, t);
}
function Hc(e, t) {
  let n = {};
  return (
    Ro(e)
      ? t.path && t.path.length > 0 && t.fieldMask.push(t.path)
      : zt(e, (r, i) => {
          let s = zc(i, t.kc(r));
          s != null && (n[r] = s);
        }),
    { mapValue: { fields: n } }
  );
}
function Gc(e) {
  return !(
    typeof e != "object" ||
    e === null ||
    e instanceof Array ||
    e instanceof Date ||
    e instanceof W ||
    e instanceof Zn ||
    e instanceof Mt ||
    e instanceof tt ||
    e instanceof Hi
  );
}
function Kc(e, t, n) {
  if (
    !Gc(n) ||
    !(function (r) {
      return (
        typeof r == "object" &&
        r !== null &&
        (Object.getPrototypeOf(r) === Object.prototype ||
          Object.getPrototypeOf(r) === null)
      );
    })(n)
  ) {
    let r = ji(n);
    throw r === "an object" ? t.Lc(e + " a custom object") : t.Lc(e + " " + r);
  }
}
function Pf(e, t, n) {
  if ((t = vt(t)) instanceof Jn) return t._internalPath;
  if (typeof t == "string") return Wc(e, t);
  throw er(
    "Field path arguments must be of type string or FieldPath.",
    e,
    !1,
    void 0,
    n
  );
}
var qf = new RegExp("[~\\*/\\[\\]]");
function Wc(e, t, n) {
  if (t.search(qf) >= 0)
    throw er(
      `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
      e,
      !1,
      void 0,
      n
    );
  try {
    return new Jn(...t.split("."))._internalPath;
  } catch (r) {
    throw er(
      `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      e,
      !1,
      void 0,
      n
    );
  }
}
function er(e, t, n, r, i) {
  let s = r && !r.isEmpty(),
    o = i !== void 0,
    a = `Function ${t}() called with invalid data`;
  n && (a += " (via `toFirestore()`)"), (a += ". ");
  let c = "";
  return (
    (s || o) &&
      ((c += " (found"),
      s && (c += ` in field ${r}`),
      o && (c += ` in document ${i}`),
      (c += ")")),
    new y(f.INVALID_ARGUMENT, a + e + c)
  );
}
function Ff(e, t) {
  return e.some((n) => n.isEqual(t));
}
var Ki = class {
    constructor(t, n, r, i, s) {
      (this._firestore = t),
        (this._userDataWriter = n),
        (this._key = r),
        (this._document = i),
        (this._converter = s);
    }
    get id() {
      return this._key.path.lastSegment();
    }
    get ref() {
      return new tt(this._firestore, this._converter, this._key);
    }
    exists() {
      return this._document !== null;
    }
    data() {
      if (this._document) {
        if (this._converter) {
          let t = new Yc(
            this._firestore,
            this._userDataWriter,
            this._key,
            this._document,
            null
          );
          return this._converter.fromFirestore(t);
        }
        return this._userDataWriter.convertValue(this._document.data.value);
      }
    }
    get(t) {
      if (this._document) {
        let n = this._document.data.field(zi("DocumentSnapshot.get", t));
        if (n !== null) return this._userDataWriter.convertValue(n);
      }
    }
  },
  Yc = class extends Ki {
    data() {
      return super.data();
    }
  };
function zi(e, t) {
  return typeof t == "string"
    ? Wc(e, t)
    : t instanceof Jn
    ? t._internalPath
    : t._delegate._internalPath;
}
var he = class {
    constructor(t, n) {
      (this.hasPendingWrites = t), (this.fromCache = n);
    }
    isEqual(t) {
      return (
        this.hasPendingWrites === t.hasPendingWrites &&
        this.fromCache === t.fromCache
      );
    }
  },
  Gi = class extends Ki {
    constructor(t, n, r, i, s, o) {
      super(t, n, r, i, o),
        (this._firestore = t),
        (this._firestoreImpl = t),
        (this.metadata = s);
    }
    exists() {
      return super.exists();
    }
    data(t = {}) {
      if (this._document) {
        if (this._converter) {
          let n = new ze(
            this._firestore,
            this._userDataWriter,
            this._key,
            this._document,
            this.metadata,
            null
          );
          return this._converter.fromFirestore(n, t);
        }
        return this._userDataWriter.convertValue(
          this._document.data.value,
          t.serverTimestamps
        );
      }
    }
    get(t, n = {}) {
      if (this._document) {
        let r = this._document.data.field(zi("DocumentSnapshot.get", t));
        if (r !== null)
          return this._userDataWriter.convertValue(r, n.serverTimestamps);
      }
    }
  },
  ze = class extends Gi {
    data(t = {}) {
      return super.data(t);
    }
  },
  Xc = class {
    constructor(t, n, r, i) {
      (this._firestore = t),
        (this._userDataWriter = n),
        (this._snapshot = i),
        (this.metadata = new he(i.hasPendingWrites, i.fromCache)),
        (this.query = r);
    }
    get docs() {
      let t = [];
      return this.forEach((n) => t.push(n)), t;
    }
    get size() {
      return this._snapshot.docs.size;
    }
    get empty() {
      return this.size === 0;
    }
    forEach(t, n) {
      this._snapshot.docs.forEach((r) => {
        t.call(
          n,
          new ze(
            this._firestore,
            this._userDataWriter,
            r.key,
            r,
            new he(
              this._snapshot.mutatedKeys.has(r.key),
              this._snapshot.fromCache
            ),
            this.query.converter
          )
        );
      });
    }
    docChanges(t = {}) {
      let n = !!t.includeMetadataChanges;
      if (n && this._snapshot.excludesMetadataChanges)
        throw new y(
          f.INVALID_ARGUMENT,
          "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
        );
      return (
        (this._cachedChanges &&
          this._cachedChangesIncludeMetadataChanges === n) ||
          ((this._cachedChanges = (function (r, i) {
            if (r._snapshot.oldDocs.isEmpty()) {
              let s = 0;
              return r._snapshot.docChanges.map((o) => ({
                type: "added",
                doc: new ze(
                  r._firestore,
                  r._userDataWriter,
                  o.doc.key,
                  o.doc,
                  new he(
                    r._snapshot.mutatedKeys.has(o.doc.key),
                    r._snapshot.fromCache
                  ),
                  r.query.converter
                ),
                oldIndex: -1,
                newIndex: s++,
              }));
            }
            {
              let s = r._snapshot.oldDocs;
              return r._snapshot.docChanges
                .filter((o) => i || o.type !== 3)
                .map((o) => {
                  let a = new ze(
                      r._firestore,
                      r._userDataWriter,
                      o.doc.key,
                      o.doc,
                      new he(
                        r._snapshot.mutatedKeys.has(o.doc.key),
                        r._snapshot.fromCache
                      ),
                      r.query.converter
                    ),
                    c = -1,
                    u = -1;
                  return (
                    o.type !== 0 &&
                      ((c = s.indexOf(o.doc.key)), (s = s.delete(o.doc.key))),
                    o.type !== 1 &&
                      ((s = s.add(o.doc)), (u = s.indexOf(o.doc.key))),
                    { type: jf(o.type), doc: a, oldIndex: c, newIndex: u }
                  );
                });
            }
          })(this, n)),
          (this._cachedChangesIncludeMetadataChanges = n)),
        this._cachedChanges
      );
    }
  };
function jf(e) {
  switch (e) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return T();
  }
}
function $f(e) {
  if (Pn(e) && e.explicitOrderBy.length === 0)
    throw new y(
      f.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause"
    );
}
var Qc = class {};
function Jc(e, ...t) {
  for (let n of t) e = n._apply(e);
  return e;
}
var Zc = class extends Qc {
  constructor(t, n) {
    super(), (this.Qc = t), (this.zc = n), (this.type = "orderBy");
  }
  _apply(t) {
    let n = (function (r, i, s) {
      if (r.startAt !== null)
        throw new y(
          f.INVALID_ARGUMENT,
          "Invalid query. You must not call startAt() or startAfter() before calling orderBy()."
        );
      if (r.endAt !== null)
        throw new y(
          f.INVALID_ARGUMENT,
          "Invalid query. You must not call endAt() or endBefore() before calling orderBy()."
        );
      let o = new Dt(i, s);
      return (
        (function (a, c) {
          if (Wo(a) === null) {
            let u = Yo(a);
            u !== null && Bf(a, u, c.field);
          }
        })(r, o),
        o
      );
    })(t._query, this.Qc, this.zc);
    return new ce(
      t.firestore,
      t.converter,
      (function (r, i) {
        let s = r.explicitOrderBy.concat([i]);
        return new Qt(
          r.path,
          r.collectionGroup,
          s,
          r.filters.slice(),
          r.limit,
          r.limitType,
          r.startAt,
          r.endAt
        );
      })(t._query, n)
    );
  }
};
function tu(e, t = "asc") {
  let n = t,
    r = zi("orderBy", e);
  return new Zc(r, n);
}
function Bf(e, t, n) {
  if (!n.isEqual(t))
    throw new y(
      f.INVALID_ARGUMENT,
      `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`
    );
}
var eu = class {
  convertValue(t, n = "none") {
    switch (Nt(t)) {
      case 0:
        return null;
      case 1:
        return t.booleanValue;
      case 2:
        return M(t.integerValue || t.doubleValue);
      case 3:
        return this.convertTimestamp(t.timestampValue);
      case 4:
        return this.convertServerTimestamp(t, n);
      case 5:
        return t.stringValue;
      case 6:
        return this.convertBytes(Wt(t.bytesValue));
      case 7:
        return this.convertReference(t.referenceValue);
      case 8:
        return this.convertGeoPoint(t.geoPointValue);
      case 9:
        return this.convertArray(t.arrayValue, n);
      case 10:
        return this.convertObject(t.mapValue, n);
      default:
        throw T();
    }
  }
  convertObject(t, n) {
    let r = {};
    return (
      zt(t.fields, (i, s) => {
        r[i] = this.convertValue(s, n);
      }),
      r
    );
  }
  convertGeoPoint(t) {
    return new Zn(M(t.latitude), M(t.longitude));
  }
  convertArray(t, n) {
    return (t.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(t, n) {
    switch (n) {
      case "previous":
        let r = ko(t);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(_e(t));
      default:
        return null;
    }
  }
  convertTimestamp(t) {
    let n = pt(t);
    return new W(n.seconds, n.nanos);
  }
  convertDocumentKey(t, n) {
    let r = _.fromString(t);
    R(Ea(r));
    let i = new oe(r.get(1), r.get(3)),
      s = new w(r.popFirst(5));
    return (
      i.isEqual(n) ||
        dt(
          `Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`
        ),
      s
    );
  }
};
function Hf(e, t, n) {
  let r;
  return (
    (r = e
      ? n && (n.merge || n.mergeFields)
        ? e.toFirestore(t, n)
        : e.toFirestore(t)
      : t),
    r
  );
}
var Wi = class extends eu {
  constructor(t) {
    super(), (this.firestore = t);
  }
  convertBytes(t) {
    return new Mt(t);
  }
  convertReference(t) {
    let n = this.convertDocumentKey(t, this.firestore._databaseId);
    return new tt(this.firestore, null, n);
  }
};
function ru(e, t, n) {
  e = ae(e, tt);
  let r = ae(e.firestore, ue),
    i = Hf(e.converter, t, n);
  return nu(r, [
    Uf(Vf(r), "setDoc", e._key, i, e.converter !== null, n).toMutation(
      e._key,
      gt.none()
    ),
  ]);
}
function iu(e) {
  return nu(ae(e.firestore, ue), [new fi(e._key, gt.none())]);
}
function su(e, ...t) {
  var n, r, i;
  e = vt(e);
  let s = { includeMetadataChanges: !1 },
    o = 0;
  typeof t[o] != "object" || Pc(t[o]) || ((s = t[o]), o++);
  let a = { includeMetadataChanges: s.includeMetadataChanges };
  if (Pc(t[o])) {
    let l = t[o];
    (t[o] = (n = l.next) === null || n === void 0 ? void 0 : n.bind(l)),
      (t[o + 1] = (r = l.error) === null || r === void 0 ? void 0 : r.bind(l)),
      (t[o + 2] =
        (i = l.complete) === null || i === void 0 ? void 0 : i.bind(l));
  }
  let c, u, h;
  if (e instanceof tt)
    (u = ae(e.firestore, ue)),
      (h = ui(e._key.path)),
      (c = {
        next: (l) => {
          t[o] && t[o](Kf(u, e, l));
        },
        error: t[o + 1],
        complete: t[o + 2],
      });
  else {
    let l = ae(e, ce);
    (u = ae(l.firestore, ue)), (h = l._query);
    let p = new Wi(u);
    (c = {
      next: (m) => {
        t[o] && t[o](new Xc(u, p, l, m));
      },
      error: t[o + 1],
      complete: t[o + 2],
    }),
      $f(e._query);
  }
  return (function (l, p, m, I) {
    let C = new Ic(I),
      x = new uc(p, C, m);
    return (
      l.asyncQueue.enqueueAndForget(async () => gf(await bc(l), x)),
      () => {
        C.Wo(), l.asyncQueue.enqueueAndForget(async () => mf(await bc(l), x));
      }
    );
  })(qc(u), h, a, c);
}
function nu(e, t) {
  return (function (n, r) {
    let i = new re();
    return (
      n.asyncQueue.enqueueAndForget(async () => Af(await Of(n), r, i)),
      i.promise
    );
  })(qc(e), t);
}
function Kf(e, t, n) {
  let r = n.docs.get(t._key),
    i = new Wi(e);
  return new Gi(
    e,
    i,
    t._key,
    r,
    new he(n.hasPendingWrites, n.fromCache),
    t.converter
  );
}
var zf;
(function (e) {
  Ht = e;
})(hs),
  Je(
    new le(
      "firestore-exp",
      (e, { options: t }) => {
        let n = e.getProvider("app-exp").getImmediate(),
          r = new ue(n, e.getProvider("auth-internal"));
        return (
          (t = Object.assign({ useFetchStreams: !1 }, t)), r._setSettings(t), r
        );
      },
      "PUBLIC"
    )
  ),
  Ft("@firebase/firestore", "0.0.900-exp.6ef484a04", zf);
var Gf = {
    apiKey: "AIzaSyCYFptob_Bc8P9Kw7VqIA4rZq1k-sRFhT4",
    authDomain: "ronaldoti.firebaseapp.com",
    databaseURL: "https://ronaldoti-default-rtdb.firebaseio.com",
    projectId: "ronaldoti",
    storageBucket: "ronaldoti.appspot.com",
    messagingSenderId: "510097924583",
    appId: "1:510097924583:web:2426d89be3b17d12d21d42",
    measurementId: "G-5GV9ZNWBPH",
  },
  dd = ar(Gf),
  Yi = Uc(),
  Wf = document.querySelector("form");
Wf.addEventListener("submit", Yf);
function Yf(e) {
  e.preventDefault();
  let n = {
    email: document.querySelector(".email-input").value,
    timestamp: W.now().seconds,
  };
  Xf(n);
}
async function Xf(e) {
  let t = Bi(Yi, "newsletterEmails", e.email);
  await ru(t, e).then(() => {
    console.log("data written");
  });
}
function Jf(e) {
  let t = document.querySelector("tbody"),
    n = new Date(e.data().timestamp * 1e3).toLocaleDateString(),
    r = new Date(e.data().timestamp * 1e3).toLocaleTimeString(),
    i = document.createElement("button"),
    s = document.createElement("tr"),
    o = document.createElement("td");
  s.setAttribute("data-id", e.id), (i.innerHTML = "Del");
  let a = `

              <td>${e.data().email}</td>
              <td>${n}</td>

  `;
  o.appendChild(i),
    (s.innerHTML = a),
    s.appendChild(o),
    i.addEventListener("click", () => {
      Qf(e.id);
    }),
    s.classList.add("new-box"),
    t.appendChild(s);
}
async function Qf(e) {
  await iu(Bi(Yi, "newsletterEmails", e));
}
function Zf(e) {
  let t = document.querySelector(`[data-id= ${e.id}]`);
  (t.style.background = "hsl(0, 60%, 80%)"),
    t.classList.remove("new-box"),
    t.classList.add("remove-box"),
    t.addEventListener("animationend", () => {
      t.remove();
    }),
    console.log(t);
}
var td = Jc(Mc(Yi, "newsletterEmails"), tu("timestamp", "desc")),
  pd = su(td, (e) => {
    e.docChanges().forEach((t) => {
      t.type === "added" && Jf(t.doc),
        t.type === "modified" && console.log("Modified", t.doc.data()),
        t.type === "removed" &&
          (console.log("Removed", t.doc.data()), Zf(t.doc));
    });
  });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */