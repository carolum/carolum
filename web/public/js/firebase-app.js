!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = e || self).firebase = t())
})(this, function () {
    'use strict'
    var r = function (e, t) {
        return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t
                }) ||
            function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }
    var a = function () {
        return (a =
            Object.assign ||
            function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in (t = arguments[r]))
                        Object.prototype.hasOwnProperty.call(t, i) &&
                            (e[i] = t[i])
                return e
            }).apply(this, arguments)
    }
    function e(r, n) {
        var i,
            o,
            a,
            e,
            s = {
                label: 0,
                sent: function () {
                    if (1 & a[0]) throw a[1]
                    return a[1]
                },
                trys: [],
                ops: [],
            }
        return (
            (e = { next: t(0), throw: t(1), return: t(2) }),
            'function' == typeof Symbol &&
                (e[Symbol.iterator] = function () {
                    return this
                }),
            e
        )
        function t(t) {
            return function (e) {
                return (function (t) {
                    if (i)
                        throw new TypeError('Generator is already executing.')
                    for (; s; )
                        try {
                            if (
                                ((i = 1),
                                o &&
                                    (a =
                                        2 & t[0]
                                            ? o.return
                                            : t[0]
                                            ? o.throw ||
                                              ((a = o.return) && a.call(o), 0)
                                            : o.next) &&
                                    !(a = a.call(o, t[1])).done)
                            )
                                return a
                            switch (
                                ((o = 0), a && (t = [2 & t[0], a.value]), t[0])
                            ) {
                                case 0:
                                case 1:
                                    a = t
                                    break
                                case 4:
                                    return s.label++, { value: t[1], done: !1 }
                                case 5:
                                    s.label++, (o = t[1]), (t = [0])
                                    continue
                                case 7:
                                    ;(t = s.ops.pop()), s.trys.pop()
                                    continue
                                default:
                                    if (
                                        !(a =
                                            0 < (a = s.trys).length &&
                                            a[a.length - 1]) &&
                                        (6 === t[0] || 2 === t[0])
                                    ) {
                                        s = 0
                                        continue
                                    }
                                    if (
                                        3 === t[0] &&
                                        (!a || (t[1] > a[0] && t[1] < a[3]))
                                    ) {
                                        s.label = t[1]
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        ;(s.label = a[1]), (a = t)
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        ;(s.label = a[2]), s.ops.push(t)
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop()
                                    continue
                            }
                            t = n.call(r, s)
                        } catch (e) {
                            ;(t = [6, e]), (o = 0)
                        } finally {
                            i = a = 0
                        }
                    if (5 & t[0]) throw t[1]
                    return { value: t[0] ? t[1] : void 0, done: !0 }
                })([t, e])
            }
        }
    }
    function d(e) {
        var t = 'function' == typeof Symbol && e[Symbol.iterator],
            r = 0
        return t
            ? t.call(e)
            : {
                  next: function () {
                      return (
                          e && r >= e.length && (e = void 0),
                          { value: e && e[r++], done: !e }
                      )
                  },
              }
    }
    function p(e, t) {
        var r = 'function' == typeof Symbol && e[Symbol.iterator]
        if (!r) return e
        var n,
            i,
            o = r.call(e),
            a = []
        try {
            for (; (void 0 === t || 0 < t--) && !(n = o.next()).done; )
                a.push(n.value)
        } catch (e) {
            i = { error: e }
        } finally {
            try {
                n && !n.done && (r = o.return) && r.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    }
    function v(e, t) {
        if (!(t instanceof Object)) return t
        switch (t.constructor) {
            case Date:
                return new Date(t.getTime())
            case Object:
                void 0 === e && (e = {})
                break
            case Array:
                e = []
                break
            default:
                return t
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = v(e[r], t[r]))
        return e
    }
    var i =
        ((t.prototype.wrapCallback = function (r) {
            var n = this
            return function (e, t) {
                e ? n.reject(e) : n.resolve(t),
                    'function' == typeof r &&
                        (n.promise.catch(function () {}),
                        1 === r.length ? r(e) : r(e, t))
            }
        }),
        t)
    function t() {
        var r = this
        ;(this.reject = function () {}),
            (this.resolve = function () {}),
            (this.promise = new Promise(function (e, t) {
                ;(r.resolve = e), (r.reject = t)
            }))
    }
    var n,
        o,
        s,
        f =
            ((s = Error),
            r((n = l), (o = s)),
            void (n.prototype =
                null === o
                    ? Object.create(o)
                    : ((c.prototype = o.prototype), new c())),
            l)
    function c() {
        this.constructor = n
    }
    function l(e, t) {
        var r = s.call(this, t) || this
        return (
            (r.code = e),
            (r.name = 'FirebaseError'),
            Object.setPrototypeOf(r, l.prototype),
            Error.captureStackTrace &&
                Error.captureStackTrace(r, u.prototype.create),
            r
        )
    }
    var u =
        ((h.prototype.create = function (e) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r]
            for (
                var n = t[0] || {},
                    i = this.service + '/' + e,
                    o = this.errors[e],
                    a = o
                        ? (function (e, n) {
                              return e.replace(m, function (e, t) {
                                  var r = n[t]
                                  return null != r
                                      ? r.toString()
                                      : '<' + t + '?>'
                              })
                          })(o, n)
                        : 'Error',
                    s = this.serviceName + ': ' + a + ' (' + i + ').',
                    c = new f(i, s),
                    l = 0,
                    p = Object.keys(n);
                l < p.length;
                l++
            ) {
                var u = p[l]
                '_' !== u.slice(-1) &&
                    (u in c &&
                        console.warn(
                            'Overwriting FirebaseError base field "' +
                                u +
                                '" can cause unexpected behavior.'
                        ),
                    (c[u] = n[u]))
            }
            return c
        }),
        h)
    function h(e, t, r) {
        ;(this.service = e), (this.serviceName = t), (this.errors = r)
    }
    var m = /\{\$([^}]+)}/g
    function y(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function b(e, t) {
        var r = new g(e, t)
        return r.subscribe.bind(r)
    }
    var g =
        ((w.prototype.next = function (t) {
            this.forEachObserver(function (e) {
                e.next(t)
            })
        }),
        (w.prototype.error = function (t) {
            this.forEachObserver(function (e) {
                e.error(t)
            }),
                this.close(t)
        }),
        (w.prototype.complete = function () {
            this.forEachObserver(function (e) {
                e.complete()
            }),
                this.close()
        }),
        (w.prototype.subscribe = function (e, t, r) {
            var n,
                i = this
            if (void 0 === e && void 0 === t && void 0 === r)
                throw new Error('Missing Observer.')
            void 0 ===
                (n = (function (e, t) {
                    if ('object' != typeof e || null === e) return !1
                    for (var r = 0, n = t; r < n.length; r++) {
                        var i = n[r]
                        if (i in e && 'function' == typeof e[i]) return !0
                    }
                    return !1
                })(e, ['next', 'error', 'complete'])
                    ? e
                    : { next: e, error: t, complete: r }).next && (n.next = O),
                void 0 === n.error && (n.error = O),
                void 0 === n.complete && (n.complete = O)
            var o = this.unsubscribeOne.bind(this, this.observers.length)
            return (
                this.finalized &&
                    this.task.then(function () {
                        try {
                            i.finalError ? n.error(i.finalError) : n.complete()
                        } catch (e) {}
                    }),
                this.observers.push(n),
                o
            )
        }),
        (w.prototype.unsubscribeOne = function (e) {
            void 0 !== this.observers &&
                void 0 !== this.observers[e] &&
                (delete this.observers[e],
                (this.observerCount -= 1),
                0 === this.observerCount &&
                    void 0 !== this.onNoObservers &&
                    this.onNoObservers(this))
        }),
        (w.prototype.forEachObserver = function (e) {
            if (!this.finalized)
                for (var t = 0; t < this.observers.length; t++)
                    this.sendOne(t, e)
        }),
        (w.prototype.sendOne = function (e, t) {
            var r = this
            this.task.then(function () {
                if (void 0 !== r.observers && void 0 !== r.observers[e])
                    try {
                        t(r.observers[e])
                    } catch (e) {
                        'undefined' != typeof console &&
                            console.error &&
                            console.error(e)
                    }
            })
        }),
        (w.prototype.close = function (e) {
            var t = this
            this.finalized ||
                ((this.finalized = !0),
                void 0 !== e && (this.finalError = e),
                this.task.then(function () {
                    ;(t.observers = void 0), (t.onNoObservers = void 0)
                }))
        }),
        w)
    function w(e, t) {
        var r = this
        ;(this.observers = []),
            (this.unsubscribes = []),
            (this.observerCount = 0),
            (this.task = Promise.resolve()),
            (this.finalized = !1),
            (this.onNoObservers = t),
            this.task
                .then(function () {
                    e(r)
                })
                .catch(function (e) {
                    r.error(e)
                })
    }
    function O() {}
    var E =
        ((I.prototype.setInstantiationMode = function (e) {
            return (this.instantiationMode = e), this
        }),
        (I.prototype.setMultipleInstances = function (e) {
            return (this.multipleInstances = e), this
        }),
        (I.prototype.setServiceProps = function (e) {
            return (this.serviceProps = e), this
        }),
        I)
    function I(e, t, r) {
        ;(this.name = e),
            (this.instanceFactory = t),
            (this.type = r),
            (this.multipleInstances = !1),
            (this.serviceProps = {}),
            (this.instantiationMode = 'LAZY')
    }
    var _ = '[DEFAULT]',
        N =
            ((P.prototype.get = function (e) {
                void 0 === e && (e = _)
                var t = this.normalizeInstanceIdentifier(e)
                if (!this.instancesDeferred.has(t)) {
                    var r = new i()
                    this.instancesDeferred.set(t, r)
                    try {
                        var n = this.getOrInitializeService(t)
                        n && r.resolve(n)
                    } catch (e) {}
                }
                return this.instancesDeferred.get(t).promise
            }),
            (P.prototype.getImmediate = function (e) {
                var t = a({ identifier: _, optional: !1 }, e),
                    r = t.identifier,
                    n = t.optional,
                    i = this.normalizeInstanceIdentifier(r)
                try {
                    var o = this.getOrInitializeService(i)
                    if (o) return o
                    if (n) return null
                    throw Error('Service ' + this.name + ' is not available')
                } catch (e) {
                    if (n) return null
                    throw e
                }
            }),
            (P.prototype.getComponent = function () {
                return this.component
            }),
            (P.prototype.setComponent = function (e) {
                var t, r
                if (e.name !== this.name)
                    throw Error(
                        'Mismatching Component ' +
                            e.name +
                            ' for Provider ' +
                            this.name +
                            '.'
                    )
                if (this.component)
                    throw Error(
                        'Component for ' +
                            this.name +
                            ' has already been provided'
                    )
                if (
                    (function (e) {
                        return 'EAGER' === e.instantiationMode
                    })((this.component = e))
                )
                    try {
                        this.getOrInitializeService(_)
                    } catch (e) {}
                try {
                    for (
                        var n = d(this.instancesDeferred.entries()),
                            i = n.next();
                        !i.done;
                        i = n.next()
                    ) {
                        var o = p(i.value, 2),
                            a = o[0],
                            s = o[1],
                            c = this.normalizeInstanceIdentifier(a)
                        try {
                            var l = this.getOrInitializeService(c)
                            s.resolve(l)
                        } catch (e) {}
                    }
                } catch (e) {
                    t = { error: e }
                } finally {
                    try {
                        i && !i.done && (r = n.return) && r.call(n)
                    } finally {
                        if (t) throw t.error
                    }
                }
            }),
            (P.prototype.clearInstance = function (e) {
                void 0 === e && (e = _),
                    this.instancesDeferred.delete(e),
                    this.instances.delete(e)
            }),
            (P.prototype.delete = function () {
                return (function (o, a, s, c) {
                    return new (s = s || Promise)(function (e, t) {
                        function r(e) {
                            try {
                                i(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }
                        function n(e) {
                            try {
                                i(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }
                        function i(t) {
                            t.done
                                ? e(t.value)
                                : new s(function (e) {
                                      e(t.value)
                                  }).then(r, n)
                        }
                        i((c = c.apply(o, a || [])).next())
                    })
                })(this, void 0, void 0, function () {
                    var t
                    return e(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return (
                                    (t = Array.from(this.instances.values())),
                                    [
                                        4,
                                        Promise.all(
                                            t
                                                .filter(function (e) {
                                                    return 'INTERNAL' in e
                                                })
                                                .map(function (e) {
                                                    return e.INTERNAL.delete()
                                                })
                                        ),
                                    ]
                                )
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            }),
            (P.prototype.isComponentSet = function () {
                return null != this.component
            }),
            (P.prototype.getOrInitializeService = function (e) {
                var t = this.instances.get(e)
                return (
                    !t &&
                        this.component &&
                        ((t = this.component.instanceFactory(
                            this.container,
                            (function (e) {
                                return e === _ ? void 0 : e
                            })(e)
                        )),
                        this.instances.set(e, t)),
                    t || null
                )
            }),
            (P.prototype.normalizeInstanceIdentifier = function (e) {
                return this.component
                    ? this.component.multipleInstances
                        ? e
                        : _
                    : e
            }),
            P)
    function P(e, t) {
        ;(this.name = e),
            (this.container = t),
            (this.component = null),
            (this.instances = new Map()),
            (this.instancesDeferred = new Map())
    }
    var S,
        A,
        C =
            ((R.prototype.addComponent = function (e) {
                var t = this.getProvider(e.name)
                if (t.isComponentSet())
                    throw new Error(
                        'Component ' +
                            e.name +
                            ' has already been registered with ' +
                            this.name
                    )
                t.setComponent(e)
            }),
            (R.prototype.addOrOverwriteComponent = function (e) {
                this.getProvider(e.name).isComponentSet() &&
                    this.providers.delete(e.name),
                    this.addComponent(e)
            }),
            (R.prototype.getProvider = function (e) {
                if (this.providers.has(e)) return this.providers.get(e)
                var t = new N(e, this)
                return this.providers.set(e, t), t
            }),
            (R.prototype.getProviders = function () {
                return Array.from(this.providers.values())
            }),
            R)
    function R(e) {
        ;(this.name = e), (this.providers = new Map())
    }
    function j() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
            e += arguments[t].length
        var n = Array(e),
            i = 0
        for (t = 0; t < r; t++)
            for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
                n[i] = o[a]
        return n
    }
    ;((A = S = S || {})[(A.DEBUG = 0)] = 'DEBUG'),
        (A[(A.VERBOSE = 1)] = 'VERBOSE'),
        (A[(A.INFO = 2)] = 'INFO'),
        (A[(A.WARN = 3)] = 'WARN'),
        (A[(A.ERROR = 4)] = 'ERROR'),
        (A[(A.SILENT = 5)] = 'SILENT')
    function k(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
            r[n - 2] = arguments[n]
        if (!(t < e.logLevel)) {
            var i = new Date().toISOString()
            switch (t) {
                case S.DEBUG:
                case S.VERBOSE:
                    console.log.apply(
                        console,
                        j(['[' + i + ']  ' + e.name + ':'], r)
                    )
                    break
                case S.INFO:
                    console.info.apply(
                        console,
                        j(['[' + i + ']  ' + e.name + ':'], r)
                    )
                    break
                case S.WARN:
                    console.warn.apply(
                        console,
                        j(['[' + i + ']  ' + e.name + ':'], r)
                    )
                    break
                case S.ERROR:
                    console.error.apply(
                        console,
                        j(['[' + i + ']  ' + e.name + ':'], r)
                    )
                    break
                default:
                    throw new Error(
                        'Attempted to log a message with an invalid logType (value: ' +
                            t +
                            ')'
                    )
            }
        }
    }
    var D,
        F = S.INFO,
        x =
            (Object.defineProperty(L.prototype, 'logLevel', {
                get: function () {
                    return this._logLevel
                },
                set: function (e) {
                    if (!(e in S))
                        throw new TypeError(
                            'Invalid value assigned to `logLevel`'
                        )
                    this._logLevel = e
                },
                enumerable: !0,
                configurable: !0,
            }),
            Object.defineProperty(L.prototype, 'logHandler', {
                get: function () {
                    return this._logHandler
                },
                set: function (e) {
                    if ('function' != typeof e)
                        throw new TypeError(
                            'Value assigned to `logHandler` must be a function'
                        )
                    this._logHandler = e
                },
                enumerable: !0,
                configurable: !0,
            }),
            (L.prototype.debug = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t]
                this._logHandler.apply(this, j([this, S.DEBUG], e))
            }),
            (L.prototype.log = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t]
                this._logHandler.apply(this, j([this, S.VERBOSE], e))
            }),
            (L.prototype.info = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t]
                this._logHandler.apply(this, j([this, S.INFO], e))
            }),
            (L.prototype.warn = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t]
                this._logHandler.apply(this, j([this, S.WARN], e))
            }),
            (L.prototype.error = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t]
                this._logHandler.apply(this, j([this, S.ERROR], e))
            }),
            L)
    function L(e) {
        ;(this.name = e), (this._logLevel = F), (this._logHandler = k)
    }
    var T,
        z =
            (((D = {})['no-app'] =
                "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
            (D['bad-app-name'] = "Illegal App name: '{$appName}"),
            (D['duplicate-app'] =
                "Firebase App named '{$appName}' already exists"),
            (D['app-deleted'] =
                "Firebase App named '{$appName}' already deleted"),
            (D['invalid-app-argument'] =
                'firebase.{$appName}() takes either no argument or a Firebase App instance.'),
            D),
        V = new u('app', 'Firebase', z),
        B = '@firebase/app',
        M = '[DEFAULT]',
        U =
            (((T = {})[B] = 'fire-core'),
            (T['@firebase/analytics'] = 'fire-analytics'),
            (T['@firebase/auth'] = 'fire-auth'),
            (T['@firebase/database'] = 'fire-rtdb'),
            (T['@firebase/functions'] = 'fire-fn'),
            (T['@firebase/installations'] = 'fire-iid'),
            (T['@firebase/messaging'] = 'fire-fcm'),
            (T['@firebase/performance'] = 'fire-perf'),
            (T['@firebase/remote-config'] = 'fire-rc'),
            (T['@firebase/storage'] = 'fire-gcs'),
            (T['@firebase/firestore'] = 'fire-fst'),
            (T['fire-js'] = 'fire-js'),
            (T['firebase-wrapper'] = 'fire-js-all'),
            T),
        H = new x('@firebase/app'),
        W =
            (Object.defineProperty(
                G.prototype,
                'automaticDataCollectionEnabled',
                {
                    get: function () {
                        return (
                            this.checkDestroyed_(),
                            this.automaticDataCollectionEnabled_
                        )
                    },
                    set: function (e) {
                        this.checkDestroyed_(),
                            (this.automaticDataCollectionEnabled_ = e)
                    },
                    enumerable: !0,
                    configurable: !0,
                }
            ),
            Object.defineProperty(G.prototype, 'name', {
                get: function () {
                    return this.checkDestroyed_(), this.name_
                },
                enumerable: !0,
                configurable: !0,
            }),
            Object.defineProperty(G.prototype, 'options', {
                get: function () {
                    return this.checkDestroyed_(), this.options_
                },
                enumerable: !0,
                configurable: !0,
            }),
            (G.prototype.delete = function () {
                var t = this
                return new Promise(function (e) {
                    t.checkDestroyed_(), e()
                })
                    .then(function () {
                        return (
                            t.firebase_.INTERNAL.removeApp(t.name_),
                            Promise.all(
                                t.container.getProviders().map(function (e) {
                                    return e.delete()
                                })
                            )
                        )
                    })
                    .then(function () {
                        t.isDeleted_ = !0
                    })
            }),
            (G.prototype._getService = function (e, t) {
                return (
                    void 0 === t && (t = M),
                    this.checkDestroyed_(),
                    this.container
                        .getProvider(e)
                        .getImmediate({ identifier: t })
                )
            }),
            (G.prototype._removeServiceInstance = function (e, t) {
                void 0 === t && (t = M),
                    this.container.getProvider(e).clearInstance(t)
            }),
            (G.prototype._addComponent = function (t) {
                try {
                    this.container.addComponent(t)
                } catch (e) {
                    H.debug(
                        'Component ' +
                            t.name +
                            ' failed to register with FirebaseApp ' +
                            this.name,
                        e
                    )
                }
            }),
            (G.prototype._addOrOverwriteComponent = function (e) {
                this.container.addOrOverwriteComponent(e)
            }),
            (G.prototype.checkDestroyed_ = function () {
                if (this.isDeleted_)
                    throw V.create('app-deleted', { appName: this.name_ })
            }),
            G)
    function G(e, t, r) {
        var n,
            i,
            o = this
        ;(this.firebase_ = r),
            (this.isDeleted_ = !1),
            (this.name_ = t.name),
            (this.automaticDataCollectionEnabled_ =
                t.automaticDataCollectionEnabled || !1),
            (this.options_ = (function (e) {
                return v(void 0, e)
            })(e)),
            (this.container = new C(t.name)),
            this._addComponent(
                new E(
                    'app',
                    function () {
                        return o
                    },
                    'PUBLIC'
                )
            )
        try {
            for (
                var a = d(this.firebase_.INTERNAL.components.values()),
                    s = a.next();
                !s.done;
                s = a.next()
            ) {
                var c = s.value
                this._addComponent(c)
            }
        } catch (e) {
            n = { error: e }
        } finally {
            try {
                s && !s.done && (i = a.return) && i.call(a)
            } finally {
                if (n) throw n.error
            }
        }
    }
    ;(W.prototype.name && W.prototype.options) ||
        W.prototype.delete ||
        console.log('dc')
    var $ = '7.7.0'
    function Y(c) {
        var l = {},
            p = new Map(),
            u = {
                __esModule: !0,
                initializeApp: function (e, t) {
                    void 0 === t && (t = {})
                    if ('object' != typeof t || null === t) {
                        t = { name: t }
                    }
                    var r = t
                    void 0 === r.name && (r.name = M)
                    var n = r.name
                    if ('string' != typeof n || !n)
                        throw V.create('bad-app-name', { appName: String(n) })
                    if (y(l, n)) throw V.create('duplicate-app', { appName: n })
                    var i = new c(e, r, u)
                    return (l[n] = i)
                },
                app: f,
                registerVersion: function (e, t, r) {
                    var n,
                        i = null !== (n = U[e]) && void 0 !== n ? n : e
                    r && (i += '-' + r)
                    var o = i.match(/\s|\//),
                        a = t.match(/\s|\//)
                    if (o || a) {
                        var s = [
                            'Unable to register library "' +
                                i +
                                '" with version "' +
                                t +
                                '":',
                        ]
                        return (
                            o &&
                                s.push(
                                    'library name "' +
                                        i +
                                        '" contains illegal characters (whitespace or "/")'
                                ),
                            o && a && s.push('and'),
                            a &&
                                s.push(
                                    'version name "' +
                                        t +
                                        '" contains illegal characters (whitespace or "/")'
                                ),
                            void H.warn(s.join(' '))
                        )
                    }
                    h(
                        new E(
                            i + '-version',
                            function () {
                                return { library: i, version: t }
                            },
                            'VERSION'
                        )
                    )
                },
                apps: null,
                SDK_VERSION: $,
                INTERNAL: {
                    registerComponent: h,
                    removeApp: function (e) {
                        delete l[e]
                    },
                    components: p,
                    useAsService: function (e, t) {
                        return 'serverAuth' !== t ? t : null
                    },
                },
            }
        function f(e) {
            if (!y(l, (e = e || M))) throw V.create('no-app', { appName: e })
            return l[e]
        }
        function h(r) {
            var t,
                e,
                n = r.name
            if (p.has(n))
                return (
                    H.debug(
                        'There were multiple attempts to register component ' +
                            n +
                            '.'
                    ),
                    'PUBLIC' === r.type ? u[n] : null
                )
            if ((p.set(n, r), 'PUBLIC' === r.type)) {
                var i = function (e) {
                    if ((void 0 === e && (e = f()), 'function' != typeof e[n]))
                        throw V.create('invalid-app-argument', { appName: n })
                    return e[n]()
                }
                void 0 !== r.serviceProps && v(i, r.serviceProps),
                    (u[n] = i),
                    (c.prototype[n] = function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t]
                        return this._getService
                            .bind(this, n)
                            .apply(this, r.multipleInstances ? e : [])
                    })
            }
            try {
                for (
                    var o = d(Object.keys(l)), a = o.next();
                    !a.done;
                    a = o.next()
                ) {
                    var s = a.value
                    l[s]._addComponent(r)
                }
            } catch (e) {
                t = { error: e }
            } finally {
                try {
                    a && !a.done && (e = o.return) && e.call(o)
                } finally {
                    if (t) throw t.error
                }
            }
            return 'PUBLIC' === r.type ? u[n] : null
        }
        return (
            (u.default = u),
            Object.defineProperty(u, 'apps', {
                get: function () {
                    return Object.keys(l).map(function (e) {
                        return l[e]
                    })
                },
            }),
            (f.App = c),
            u
        )
    }
    var K = (function e() {
            var t = Y(W)
            return (
                (t.INTERNAL = a(a({}, t.INTERNAL), {
                    createFirebaseNamespace: e,
                    extendNamespace: function (e) {
                        v(t, e)
                    },
                    createSubscribe: b,
                    ErrorFactory: u,
                    deepExtend: v,
                })),
                t
            )
        })(),
        Z =
            ((q.prototype.getPlatformInfoString = function () {
                return this.container
                    .getProviders()
                    .map(function (e) {
                        if (
                            (function (e) {
                                var t,
                                    r = e.getComponent()
                                return (
                                    'VERSION' ===
                                    (null === (t = r) || void 0 === t
                                        ? void 0
                                        : t.type)
                                )
                            })(e)
                        ) {
                            var t = e.getImmediate()
                            return t.library + '/' + t.version
                        }
                        return null
                    })
                    .filter(function (e) {
                        return e
                    })
                    .join(' ')
            }),
            q)
    function q(e) {
        this.container = e
    }
    if (
        'object' == typeof self &&
        self.self === self &&
        void 0 !== self.firebase
    ) {
        H.warn(
            '\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  '
        )
        var J = self.firebase.SDK_VERSION
        J &&
            0 <= J.indexOf('LITE') &&
            H.warn(
                '\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    '
            )
    }
    var Q = K.initializeApp
    K.initializeApp = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
        return (
            (function () {
                try {
                    return (
                        '[object process]' ===
                        Object.prototype.toString.call(global.process)
                    )
                } catch (e) {
                    return !1
                }
            })() &&
                H.warn(
                    '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '
                ),
            Q.apply(void 0, e)
        )
    }
    var X,
        ee,
        te = K
    ;(X = te).INTERNAL.registerComponent(
        new E(
            'platform-logger',
            function (e) {
                return new Z(e)
            },
            'PRIVATE'
        )
    ),
        X.registerVersion(B, '0.5.2', ee),
        X.registerVersion('fire-js', '')
    return te.registerVersion('firebase', '7.7.0', 'app'), te
})
//# sourceMappingURL=firebase-app.js.map
