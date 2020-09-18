!(function (t, e) {
    'object' == typeof exports && 'undefined' != typeof module
        ? e(require('@firebase/app'))
        : 'function' == typeof define && define.amd
        ? define(['@firebase/app'], e)
        : e((t = t || self).firebase)
})(this, function (Ui) {
    'use strict'
    try {
        ;(function () {
            Ui = Ui && Ui.hasOwnProperty('default') ? Ui.default : Ui
            var r = function (t, e) {
                return (r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                            t.__proto__ = e
                        }) ||
                    function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }
            function t(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e),
                    (t.prototype =
                        null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()))
            }
            var u = function () {
                return (u =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in (e = arguments[n]))
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    (t[i] = e[i])
                        return t
                    }).apply(this, arguments)
            }
            function e(n, r) {
                var i,
                    o,
                    s,
                    t,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & s[0]) throw s[1]
                            return s[1]
                        },
                        trys: [],
                        ops: [],
                    }
                return (
                    (t = { next: e(0), throw: e(1), return: e(2) }),
                    'function' == typeof Symbol &&
                        (t[Symbol.iterator] = function () {
                            return this
                        }),
                    t
                )
                function e(e) {
                    return function (t) {
                        return (function (e) {
                            if (i)
                                throw new TypeError(
                                    'Generator is already executing.'
                                )
                            for (; a; )
                                try {
                                    if (
                                        ((i = 1),
                                        o &&
                                            (s =
                                                2 & e[0]
                                                    ? o.return
                                                    : e[0]
                                                    ? o.throw ||
                                                      ((s = o.return) &&
                                                          s.call(o),
                                                      0)
                                                    : o.next) &&
                                            !(s = s.call(o, e[1])).done)
                                    )
                                        return s
                                    switch (
                                        ((o = 0),
                                        s && (e = [2 & e[0], s.value]),
                                        e[0])
                                    ) {
                                        case 0:
                                        case 1:
                                            s = e
                                            break
                                        case 4:
                                            return (
                                                a.label++,
                                                { value: e[1], done: !1 }
                                            )
                                        case 5:
                                            a.label++, (o = e[1]), (e = [0])
                                            continue
                                        case 7:
                                            ;(e = a.ops.pop()), a.trys.pop()
                                            continue
                                        default:
                                            if (
                                                !(s =
                                                    0 < (s = a.trys).length &&
                                                    s[s.length - 1]) &&
                                                (6 === e[0] || 2 === e[0])
                                            ) {
                                                a = 0
                                                continue
                                            }
                                            if (
                                                3 === e[0] &&
                                                (!s ||
                                                    (e[1] > s[0] &&
                                                        e[1] < s[3]))
                                            ) {
                                                a.label = e[1]
                                                break
                                            }
                                            if (6 === e[0] && a.label < s[1]) {
                                                ;(a.label = s[1]), (s = e)
                                                break
                                            }
                                            if (s && a.label < s[2]) {
                                                ;(a.label = s[2]), a.ops.push(e)
                                                break
                                            }
                                            s[2] && a.ops.pop(), a.trys.pop()
                                            continue
                                    }
                                    e = r.call(n, a)
                                } catch (t) {
                                    ;(e = [6, t]), (o = 0)
                                } finally {
                                    i = s = 0
                                }
                            if (5 & e[0]) throw e[1]
                            return { value: e[0] ? e[1] : void 0, done: !0 }
                        })([e, t])
                    }
                }
            }
            function f(t) {
                var e = 'function' == typeof Symbol && t[Symbol.iterator],
                    n = 0
                return e
                    ? e.call(t)
                    : {
                          next: function () {
                              return (
                                  t && n >= t.length && (t = void 0),
                                  { value: t && t[n++], done: !t }
                              )
                          },
                      }
            }
            function _(t, e) {
                var n = 'function' == typeof Symbol && t[Symbol.iterator]
                if (!n) return t
                var r,
                    i,
                    o = n.call(t),
                    s = []
                try {
                    for (; (void 0 === e || 0 < e--) && !(r = o.next()).done; )
                        s.push(r.value)
                } catch (t) {
                    i = { error: t }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            }
            function o() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t = t.concat(_(arguments[e]))
                return t
            }
            function s(t) {
                for (var e = [], n = 0, r = 0; r < t.length; r++) {
                    var i = t.charCodeAt(r)
                    i < 128
                        ? (e[n++] = i)
                        : (i < 2048
                              ? (e[n++] = (i >> 6) | 192)
                              : (55296 == (64512 & i) &&
                                r + 1 < t.length &&
                                56320 == (64512 & t.charCodeAt(r + 1))
                                    ? ((i =
                                          65536 +
                                          ((1023 & i) << 10) +
                                          (1023 & t.charCodeAt(++r))),
                                      (e[n++] = (i >> 18) | 240),
                                      (e[n++] = ((i >> 12) & 63) | 128))
                                    : (e[n++] = (i >> 12) | 224),
                                (e[n++] = ((i >> 6) & 63) | 128)),
                          (e[n++] = (63 & i) | 128))
                }
                return e
            }
            function a(t) {
                try {
                    return l.decodeString(t, !0)
                } catch (t) {
                    console.error('base64Decode failed: ', t)
                }
                return null
            }
            var h = {
                    NODE_CLIENT: !1,
                    NODE_ADMIN: !1,
                    SDK_VERSION: '${JSCORE_VERSION}',
                },
                C = function (t, e) {
                    if (!t) throw c(e)
                },
                c = function (t) {
                    return new Error(
                        'Firebase Database (' +
                            h.SDK_VERSION +
                            ') INTERNAL ASSERT FAILED: ' +
                            t
                    )
                },
                l = {
                    byteToCharMap_: null,
                    charToByteMap_: null,
                    byteToCharMapWebSafe_: null,
                    charToByteMapWebSafe_: null,
                    ENCODED_VALS_BASE:
                        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                    get ENCODED_VALS() {
                        return this.ENCODED_VALS_BASE + '+/='
                    },
                    get ENCODED_VALS_WEBSAFE() {
                        return this.ENCODED_VALS_BASE + '-_.'
                    },
                    HAS_NATIVE_SUPPORT: 'function' == typeof atob,
                    encodeByteArray: function (t, e) {
                        if (!Array.isArray(t))
                            throw Error(
                                'encodeByteArray takes an array as a parameter'
                            )
                        this.init_()
                        for (
                            var n = e
                                    ? this.byteToCharMapWebSafe_
                                    : this.byteToCharMap_,
                                r = [],
                                i = 0;
                            i < t.length;
                            i += 3
                        ) {
                            var o = t[i],
                                s = i + 1 < t.length,
                                a = s ? t[i + 1] : 0,
                                h = i + 2 < t.length,
                                l = h ? t[i + 2] : 0,
                                u = o >> 2,
                                c = ((3 & o) << 4) | (a >> 4),
                                p = ((15 & a) << 2) | (l >> 6),
                                d = 63 & l
                            h || ((d = 64), s || (p = 64)),
                                r.push(n[u], n[c], n[p], n[d])
                        }
                        return r.join('')
                    },
                    encodeString: function (t, e) {
                        return this.HAS_NATIVE_SUPPORT && !e
                            ? btoa(t)
                            : this.encodeByteArray(s(t), e)
                    },
                    decodeString: function (t, e) {
                        return this.HAS_NATIVE_SUPPORT && !e
                            ? atob(t)
                            : (function (t) {
                                  for (
                                      var e = [], n = 0, r = 0;
                                      n < t.length;

                                  ) {
                                      var i = t[n++]
                                      if (i < 128)
                                          e[r++] = String.fromCharCode(i)
                                      else if (191 < i && i < 224) {
                                          var o = t[n++]
                                          e[r++] = String.fromCharCode(
                                              ((31 & i) << 6) | (63 & o)
                                          )
                                      } else if (239 < i && i < 365) {
                                          var s =
                                              (((7 & i) << 18) |
                                                  ((63 & (o = t[n++])) << 12) |
                                                  ((63 & (a = t[n++])) << 6) |
                                                  (63 & t[n++])) -
                                              65536
                                          ;(e[r++] = String.fromCharCode(
                                              55296 + (s >> 10)
                                          )),
                                              (e[r++] = String.fromCharCode(
                                                  56320 + (1023 & s)
                                              ))
                                      } else {
                                          o = t[n++]
                                          var a = t[n++]
                                          e[r++] = String.fromCharCode(
                                              ((15 & i) << 12) |
                                                  ((63 & o) << 6) |
                                                  (63 & a)
                                          )
                                      }
                                  }
                                  return e.join('')
                              })(this.decodeStringToByteArray(t, e))
                    },
                    decodeStringToByteArray: function (t, e) {
                        this.init_()
                        for (
                            var n = e
                                    ? this.charToByteMapWebSafe_
                                    : this.charToByteMap_,
                                r = [],
                                i = 0;
                            i < t.length;

                        ) {
                            var o = n[t.charAt(i++)],
                                s = i < t.length ? n[t.charAt(i)] : 0,
                                a = ++i < t.length ? n[t.charAt(i)] : 64,
                                h = ++i < t.length ? n[t.charAt(i)] : 64
                            if (
                                (++i,
                                null == o ||
                                    null == s ||
                                    null == a ||
                                    null == h)
                            )
                                throw Error()
                            var l = (o << 2) | (s >> 4)
                            if ((r.push(l), 64 !== a)) {
                                var u = ((s << 4) & 240) | (a >> 2)
                                if ((r.push(u), 64 !== h)) {
                                    var c = ((a << 6) & 192) | h
                                    r.push(c)
                                }
                            }
                        }
                        return r
                    },
                    init_: function () {
                        if (!this.byteToCharMap_) {
                            ;(this.byteToCharMap_ = {}),
                                (this.charToByteMap_ = {}),
                                (this.byteToCharMapWebSafe_ = {}),
                                (this.charToByteMapWebSafe_ = {})
                            for (var t = 0; t < this.ENCODED_VALS.length; t++)
                                (this.byteToCharMap_[
                                    t
                                ] = this.ENCODED_VALS.charAt(t)),
                                    (this.charToByteMap_[
                                        this.byteToCharMap_[t]
                                    ] = t),
                                    (this.byteToCharMapWebSafe_[
                                        t
                                    ] = this.ENCODED_VALS_WEBSAFE.charAt(t)),
                                    (this.charToByteMapWebSafe_[
                                        this.byteToCharMapWebSafe_[t]
                                    ] = t) >= this.ENCODED_VALS_BASE.length &&
                                        ((this.charToByteMap_[
                                            this.ENCODED_VALS_WEBSAFE.charAt(t)
                                        ] = t),
                                        (this.charToByteMapWebSafe_[
                                            this.ENCODED_VALS.charAt(t)
                                        ] = t))
                        }
                    },
                }
            function n(t) {
                return (function t(e, n) {
                    if (!(n instanceof Object)) return n
                    switch (n.constructor) {
                        case Date:
                            var r = n
                            return new Date(r.getTime())
                        case Object:
                            void 0 === e && (e = {})
                            break
                        case Array:
                            e = []
                            break
                        default:
                            return n
                    }
                    for (var i in n)
                        n.hasOwnProperty(i) && (e[i] = t(e[i], n[i]))
                    return e
                })(void 0, t)
            }
            var p =
                ((i.prototype.wrapCallback = function (n) {
                    var r = this
                    return function (t, e) {
                        t ? r.reject(t) : r.resolve(e),
                            'function' == typeof n &&
                                (r.promise.catch(function () {}),
                                1 === n.length ? n(t) : n(t, e))
                    }
                }),
                i)
            function i() {
                var n = this
                ;(this.reject = function () {}),
                    (this.resolve = function () {}),
                    (this.promise = new Promise(function (t, e) {
                        ;(n.resolve = t), (n.reject = e)
                    }))
            }
            function d() {
                return (
                    'undefined' != typeof window &&
                    !!(window.cordova || window.phonegap || window.PhoneGap) &&
                    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
                        'undefined' != typeof navigator &&
                            'string' == typeof navigator.userAgent
                            ? navigator.userAgent
                            : ''
                    )
                )
            }
            function y() {
                return !0 === h.NODE_ADMIN
            }
            var v,
                g = (t(m, (v = Error)), m)
            function m(t, e) {
                var n = v.call(this, e) || this
                return (
                    (n.code = t),
                    (n.name = 'FirebaseError'),
                    Object.setPrototypeOf(n, m.prototype),
                    Error.captureStackTrace &&
                        Error.captureStackTrace(n, E.prototype.create),
                    n
                )
            }
            var E =
                ((w.prototype.create = function (t) {
                    for (var e = [], n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n]
                    for (
                        var r = e[0] || {},
                            i = this.service + '/' + t,
                            o = this.errors[t],
                            s = o
                                ? (function (t, r) {
                                      return t.replace(b, function (t, e) {
                                          var n = r[e]
                                          return null != n
                                              ? n.toString()
                                              : '<' + e + '?>'
                                      })
                                  })(o, r)
                                : 'Error',
                            a = this.serviceName + ': ' + s + ' (' + i + ').',
                            h = new g(i, a),
                            l = 0,
                            u = Object.keys(r);
                        l < u.length;
                        l++
                    ) {
                        var c = u[l]
                        '_' !== c.slice(-1) &&
                            (c in h &&
                                console.warn(
                                    'Overwriting FirebaseError base field "' +
                                        c +
                                        '" can cause unexpected behavior.'
                                ),
                            (h[c] = r[c]))
                    }
                    return h
                }),
                w)
            function w(t, e, n) {
                ;(this.service = t), (this.serviceName = e), (this.errors = n)
            }
            var b = /\{\$([^}]+)}/g
            function S(t) {
                return JSON.parse(t)
            }
            function T(t) {
                return JSON.stringify(t)
            }
            function I(t) {
                var e = {},
                    n = {},
                    r = {},
                    i = ''
                try {
                    var o = t.split('.')
                    ;(e = S(a(o[0]) || '')),
                        (n = S(a(o[1]) || '')),
                        (i = o[2]),
                        (r = n.d || {}),
                        delete n.d
                } catch (t) {}
                return { header: e, claims: n, data: r, signature: i }
            }
            function N(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            function R(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
                    ? t[e]
                    : void 0
            }
            function P(t) {
                for (var e in t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) return !1
                return !0
            }
            function D(t, e, n) {
                var r = {}
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) &&
                        (r[i] = e.call(n, t[i], i, t))
                return r
            }
            var O =
                ((x.prototype.reset = function () {
                    ;(this.chain_[0] = 1732584193),
                        (this.chain_[1] = 4023233417),
                        (this.chain_[2] = 2562383102),
                        (this.chain_[3] = 271733878),
                        (this.chain_[4] = 3285377520),
                        (this.inbuf_ = 0),
                        (this.total_ = 0)
                }),
                (x.prototype.compress_ = function (t, e) {
                    e = e || 0
                    var n = this.W_
                    if ('string' == typeof t)
                        for (var r = 0; r < 16; r++)
                            (n[r] =
                                (t.charCodeAt(e) << 24) |
                                (t.charCodeAt(e + 1) << 16) |
                                (t.charCodeAt(e + 2) << 8) |
                                t.charCodeAt(e + 3)),
                                (e += 4)
                    else
                        for (r = 0; r < 16; r++)
                            (n[r] =
                                (t[e] << 24) |
                                (t[e + 1] << 16) |
                                (t[e + 2] << 8) |
                                t[e + 3]),
                                (e += 4)
                    for (r = 16; r < 80; r++) {
                        var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16]
                        n[r] = 4294967295 & ((i << 1) | (i >>> 31))
                    }
                    var o,
                        s,
                        a = this.chain_[0],
                        h = this.chain_[1],
                        l = this.chain_[2],
                        u = this.chain_[3],
                        c = this.chain_[4]
                    for (r = 0; r < 80; r++)
                        (s =
                            r < 40
                                ? r < 20
                                    ? ((o = u ^ (h & (l ^ u))), 1518500249)
                                    : ((o = h ^ l ^ u), 1859775393)
                                : r < 60
                                ? ((o = (h & l) | (u & (h | l))), 2400959708)
                                : ((o = h ^ l ^ u), 3395469782)),
                            (i =
                                (((a << 5) | (a >>> 27)) + o + c + s + n[r]) &
                                4294967295),
                            (c = u),
                            (u = l),
                            (l = 4294967295 & ((h << 30) | (h >>> 2))),
                            (h = a),
                            (a = i)
                    ;(this.chain_[0] = (this.chain_[0] + a) & 4294967295),
                        (this.chain_[1] = (this.chain_[1] + h) & 4294967295),
                        (this.chain_[2] = (this.chain_[2] + l) & 4294967295),
                        (this.chain_[3] = (this.chain_[3] + u) & 4294967295),
                        (this.chain_[4] = (this.chain_[4] + c) & 4294967295)
                }),
                (x.prototype.update = function (t, e) {
                    if (null != t) {
                        void 0 === e && (e = t.length)
                        for (
                            var n = e - this.blockSize,
                                r = 0,
                                i = this.buf_,
                                o = this.inbuf_;
                            r < e;

                        ) {
                            if (0 === o)
                                for (; r <= n; )
                                    this.compress_(t, r), (r += this.blockSize)
                            if ('string' == typeof t) {
                                for (; r < e; )
                                    if (
                                        ((i[o] = t.charCodeAt(r)),
                                        ++r,
                                        ++o === this.blockSize)
                                    ) {
                                        this.compress_(i), (o = 0)
                                        break
                                    }
                            } else
                                for (; r < e; )
                                    if (
                                        ((i[o] = t[r]),
                                        ++r,
                                        ++o === this.blockSize)
                                    ) {
                                        this.compress_(i), (o = 0)
                                        break
                                    }
                        }
                        ;(this.inbuf_ = o), (this.total_ += e)
                    }
                }),
                (x.prototype.digest = function () {
                    var t = [],
                        e = 8 * this.total_
                    this.inbuf_ < 56
                        ? this.update(this.pad_, 56 - this.inbuf_)
                        : this.update(
                              this.pad_,
                              this.blockSize - (this.inbuf_ - 56)
                          )
                    for (var n = this.blockSize - 1; 56 <= n; n--)
                        (this.buf_[n] = 255 & e), (e /= 256)
                    this.compress_(this.buf_)
                    var r = 0
                    for (n = 0; n < 5; n++)
                        for (var i = 24; 0 <= i; i -= 8)
                            (t[r] = (this.chain_[n] >> i) & 255), ++r
                    return t
                }),
                x)
            function x() {
                ;(this.chain_ = []),
                    (this.buf_ = []),
                    (this.W_ = []),
                    (this.pad_ = []),
                    (this.inbuf_ = 0),
                    (this.total_ = 0),
                    (this.blockSize = 64),
                    (this.pad_[0] = 128)
                for (var t = 1; t < this.blockSize; ++t) this.pad_[t] = 0
                this.reset()
            }
            function k(t, e, n, r) {
                var i
                if (
                    (r < e
                        ? (i = 'at least ' + e)
                        : n < r && (i = 0 === n ? 'none' : 'no more than ' + n),
                    i)
                )
                    throw new Error(
                        t +
                            ' failed: Was called with ' +
                            r +
                            (1 === r ? ' argument.' : ' arguments.') +
                            ' Expects ' +
                            i +
                            '.'
                    )
            }
            function F(t, e, n) {
                var r = ''
                switch (e) {
                    case 1:
                        r = n ? 'first' : 'First'
                        break
                    case 2:
                        r = n ? 'second' : 'Second'
                        break
                    case 3:
                        r = n ? 'third' : 'Third'
                        break
                    case 4:
                        r = n ? 'fourth' : 'Fourth'
                        break
                    default:
                        throw new Error(
                            'errorPrefix called with argumentNumber > 4.  Need to update it?'
                        )
                }
                var i = t + ' failed: '
                return (i += r + ' argument ')
            }
            function A(t, e, n, r) {
                if ((!r || n) && 'function' != typeof n)
                    throw new Error(F(t, e, r) + 'must be a valid function.')
            }
            function L(t, e, n, r) {
                if ((!r || n) && ('object' != typeof n || null === n))
                    throw new Error(
                        F(t, e, r) + 'must be a valid context object.'
                    )
            }
            function M(t) {
                for (var e = 0, n = 0; n < t.length; n++) {
                    var r = t.charCodeAt(n)
                    r < 128
                        ? e++
                        : r < 2048
                        ? (e += 2)
                        : 55296 <= r && r <= 56319
                        ? ((e += 4), n++)
                        : (e += 3)
                }
                return e
            }
            var W, Q
            function q() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                    t += arguments[e].length
                var r = Array(t),
                    i = 0
                for (e = 0; e < n; e++)
                    for (
                        var o = arguments[e], s = 0, a = o.length;
                        s < a;
                        s++, i++
                    )
                        r[i] = o[s]
                return r
            }
            ;((Q = W = W || {})[(Q.DEBUG = 0)] = 'DEBUG'),
                (Q[(Q.VERBOSE = 1)] = 'VERBOSE'),
                (Q[(Q.INFO = 2)] = 'INFO'),
                (Q[(Q.WARN = 3)] = 'WARN'),
                (Q[(Q.ERROR = 4)] = 'ERROR'),
                (Q[(Q.SILENT = 5)] = 'SILENT')
            function U(t, e) {
                for (var n = [], r = 2; r < arguments.length; r++)
                    n[r - 2] = arguments[r]
                if (!(e < t.logLevel)) {
                    var i = new Date().toISOString()
                    switch (e) {
                        case W.DEBUG:
                        case W.VERBOSE:
                            console.log.apply(
                                console,
                                q(['[' + i + ']  ' + t.name + ':'], n)
                            )
                            break
                        case W.INFO:
                            console.info.apply(
                                console,
                                q(['[' + i + ']  ' + t.name + ':'], n)
                            )
                            break
                        case W.WARN:
                            console.warn.apply(
                                console,
                                q(['[' + i + ']  ' + t.name + ':'], n)
                            )
                            break
                        case W.ERROR:
                            console.error.apply(
                                console,
                                q(['[' + i + ']  ' + t.name + ':'], n)
                            )
                            break
                        default:
                            throw new Error(
                                'Attempted to log a message with an invalid logType (value: ' +
                                    e +
                                    ')'
                            )
                    }
                }
            }
            var V = W.INFO,
                H =
                    (Object.defineProperty(B.prototype, 'logLevel', {
                        get: function () {
                            return this._logLevel
                        },
                        set: function (t) {
                            if (!(t in W))
                                throw new TypeError(
                                    'Invalid value assigned to `logLevel`'
                                )
                            this._logLevel = t
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(B.prototype, 'logHandler', {
                        get: function () {
                            return this._logHandler
                        },
                        set: function (t) {
                            if ('function' != typeof t)
                                throw new TypeError(
                                    'Value assigned to `logHandler` must be a function'
                                )
                            this._logHandler = t
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (B.prototype.debug = function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e]
                        this._logHandler.apply(this, q([this, W.DEBUG], t))
                    }),
                    (B.prototype.log = function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e]
                        this._logHandler.apply(this, q([this, W.VERBOSE], t))
                    }),
                    (B.prototype.info = function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e]
                        this._logHandler.apply(this, q([this, W.INFO], t))
                    }),
                    (B.prototype.warn = function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e]
                        this._logHandler.apply(this, q([this, W.WARN], t))
                    }),
                    (B.prototype.error = function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e]
                        this._logHandler.apply(this, q([this, W.ERROR], t))
                    }),
                    B)
            function B(t) {
                ;(this.name = t), (this._logLevel = V), (this._logHandler = U)
            }
            var j =
                ((K.prototype.setInstantiationMode = function (t) {
                    return (this.instantiationMode = t), this
                }),
                (K.prototype.setMultipleInstances = function (t) {
                    return (this.multipleInstances = t), this
                }),
                (K.prototype.setServiceProps = function (t) {
                    return (this.serviceProps = t), this
                }),
                K)
            function K(t, e, n) {
                ;(this.name = t),
                    (this.instanceFactory = e),
                    (this.type = n),
                    (this.multipleInstances = !1),
                    (this.serviceProps = {}),
                    (this.instantiationMode = 'LAZY')
            }
            var Y =
                ((z.prototype.set = function (t, e) {
                    null == e
                        ? this.domStorage_.removeItem(this.prefixedName_(t))
                        : this.domStorage_.setItem(this.prefixedName_(t), T(e))
                }),
                (z.prototype.get = function (t) {
                    var e = this.domStorage_.getItem(this.prefixedName_(t))
                    return null == e ? null : S(e)
                }),
                (z.prototype.remove = function (t) {
                    this.domStorage_.removeItem(this.prefixedName_(t))
                }),
                (z.prototype.prefixedName_ = function (t) {
                    return this.prefix_ + t
                }),
                (z.prototype.toString = function () {
                    return this.domStorage_.toString()
                }),
                z)
            function z(t) {
                ;(this.domStorage_ = t), (this.prefix_ = 'firebase:')
            }
            var G =
                ((X.prototype.set = function (t, e) {
                    null == e ? delete this.cache_[t] : (this.cache_[t] = e)
                }),
                (X.prototype.get = function (t) {
                    return N(this.cache_, t) ? this.cache_[t] : null
                }),
                (X.prototype.remove = function (t) {
                    delete this.cache_[t]
                }),
                X)
            function X() {
                ;(this.cache_ = {}), (this.isInMemoryStorage = !0)
            }
            function $(t) {
                try {
                    if ('undefined' != typeof window && void 0 !== window[t]) {
                        var e = window[t]
                        return (
                            e.setItem('firebase:sentinel', 'cache'),
                            e.removeItem('firebase:sentinel'),
                            new Y(e)
                        )
                    }
                } catch (t) {}
                return new G()
            }
            function J(t) {
                var e = (function (t) {
                        for (var e = [], n = 0, r = 0; r < t.length; r++) {
                            var i = t.charCodeAt(r)
                            if (55296 <= i && i <= 56319) {
                                var o = i - 55296
                                C(
                                    ++r < t.length,
                                    'Surrogate pair missing trail surrogate.'
                                ),
                                    (i =
                                        65536 +
                                        (o << 10) +
                                        (t.charCodeAt(r) - 56320))
                            }
                            i < 128
                                ? (e[n++] = i)
                                : (i < 2048
                                      ? (e[n++] = (i >> 6) | 192)
                                      : (i < 65536
                                            ? (e[n++] = (i >> 12) | 224)
                                            : ((e[n++] = (i >> 18) | 240),
                                              (e[n++] =
                                                  ((i >> 12) & 63) | 128)),
                                        (e[n++] = ((i >> 6) & 63) | 128)),
                                  (e[n++] = (63 & i) | 128))
                        }
                        return e
                    })(t),
                    n = new O()
                n.update(e)
                var r = n.digest()
                return l.encodeByteArray(r)
            }
            function Z(t, e) {
                C(
                    !e || !0 === t || !1 === t,
                    "Can't turn on custom loggers persistently."
                ),
                    !0 === t
                        ? ((pt.logLevel = W.VERBOSE),
                          (_t = pt.log.bind(pt)),
                          e && ct.set('logging_enabled', !0))
                        : 'function' == typeof t
                        ? (_t = t)
                        : ((_t = null), ct.remove('logging_enabled'))
            }
            function tt() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e]
                if (
                    (!0 === yt &&
                        ((yt = !1),
                        null === _t &&
                            !0 === ct.get('logging_enabled') &&
                            Z(!0)),
                    _t)
                ) {
                    var n = ft.apply(null, t)
                    _t(n)
                }
            }
            function et(n) {
                return function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e]
                    tt.apply(void 0, o([n], t))
                }
            }
            function nt() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e]
                var n = 'FIREBASE INTERNAL ERROR: ' + ft.apply(void 0, o(t))
                pt.error(n)
            }
            function rt() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e]
                var n = 'FIREBASE FATAL ERROR: ' + ft.apply(void 0, o(t))
                throw (pt.error(n), new Error(n))
            }
            function it() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e]
                var n = 'FIREBASE WARNING: ' + ft.apply(void 0, o(t))
                pt.warn(n)
            }
            function ot(t) {
                return (
                    'number' == typeof t &&
                    (t != t ||
                        t === Number.POSITIVE_INFINITY ||
                        t === Number.NEGATIVE_INFINITY)
                )
            }
            function st(t, e) {
                return t === e ? 0 : t < e ? -1 : 1
            }
            function at(t, e) {
                if (e && t in e) return e[t]
                throw new Error(
                    'Missing required key (' + t + ') in object: ' + T(e)
                )
            }
            function ht(t, e) {
                var n = t.length
                if (n <= e) return [t]
                for (var r = [], i = 0; i < n; i += e)
                    n < i + e
                        ? r.push(t.substring(i, n))
                        : r.push(t.substring(i, i + e))
                return r
            }
            var lt,
                ut = $('localStorage'),
                ct = $('sessionStorage'),
                pt = new H('@firebase/database'),
                dt =
                    ((lt = 1),
                    function () {
                        return lt++
                    }),
                ft = function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e]
                    for (var n = '', r = 0; r < t.length; r++) {
                        var i = t[r]
                        Array.isArray(i) ||
                        (i &&
                            'object' == typeof i &&
                            'number' == typeof i.length)
                            ? (n += ft.apply(null, i))
                            : (n += 'object' == typeof i ? T(i) : i),
                            (n += ' ')
                    }
                    return n
                },
                _t = null,
                yt = !0,
                vt = '[MIN_NAME]',
                gt = '[MAX_NAME]',
                mt = function (t, e) {
                    if (t === e) return 0
                    if (t === vt || e === gt) return -1
                    if (e === vt || t === gt) return 1
                    var n = It(t),
                        r = It(e)
                    return null !== n
                        ? null !== r
                            ? n - r == 0
                                ? t.length - e.length
                                : n - r
                            : -1
                        : null !== r
                        ? 1
                        : t < e
                        ? -1
                        : 1
                },
                Ct = function (t) {
                    if ('object' != typeof t || null === t) return T(t)
                    var e = []
                    for (var n in t) e.push(n)
                    e.sort()
                    for (var r = '{', i = 0; i < e.length; i++)
                        0 !== i && (r += ','),
                            (r += T(e[i])),
                            (r += ':'),
                            (r += Ct(t[e[i]]))
                    return (r += '}')
                }
            function Et(t, e) {
                for (var n in t) t.hasOwnProperty(n) && e(n, t[n])
            }
            function wt(t) {
                var e, n, r, i, o
                C(!ot(t), 'Invalid JSON number'),
                    0 === t
                        ? (e = 1 / t == -1 / (r = n = 0) ? 1 : 0)
                        : ((e = t < 0),
                          (r =
                              (t = Math.abs(t)) >= Math.pow(2, -1022)
                                  ? ((n =
                                        (i = Math.min(
                                            Math.floor(Math.log(t) / Math.LN2),
                                            1023
                                        )) + 1023),
                                    Math.round(
                                        t * Math.pow(2, 52 - i) -
                                            Math.pow(2, 52)
                                    ))
                                  : ((n = 0),
                                    Math.round(t / Math.pow(2, -1074)))))
                var s = []
                for (o = 52; o; o -= 1)
                    s.push(r % 2 ? 1 : 0), (r = Math.floor(r / 2))
                for (o = 11; o; o -= 1)
                    s.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2))
                s.push(e ? 1 : 0), s.reverse()
                var a = s.join(''),
                    h = ''
                for (o = 0; o < 64; o += 8) {
                    var l = parseInt(a.substr(o, 8), 2).toString(16)
                    1 === l.length && (l = '0' + l), (h += l)
                }
                return h.toLowerCase()
            }
            function bt(t) {
                try {
                    t()
                } catch (e) {
                    setTimeout(function () {
                        var t = e.stack || ''
                        throw (
                            (it('Exception was thrown by user callback.', t), e)
                        )
                    }, Math.floor(0))
                }
            }
            function St(t, e) {
                var n = setTimeout(t, e)
                return 'object' == typeof n && n.unref && n.unref(), n
            }
            var Tt = new RegExp('^-?(0*)\\d{1,10}$'),
                It = function (t) {
                    if (Tt.test(t)) {
                        var e = Number(t)
                        if (-2147483648 <= e && e <= 2147483647) return e
                    }
                    return null
                },
                Nt =
                    (Object.defineProperty(Rt, 'Empty', {
                        get: function () {
                            return new Rt('')
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (Rt.prototype.getFront = function () {
                        return this.pieceNum_ >= this.pieces_.length
                            ? null
                            : this.pieces_[this.pieceNum_]
                    }),
                    (Rt.prototype.getLength = function () {
                        return this.pieces_.length - this.pieceNum_
                    }),
                    (Rt.prototype.popFront = function () {
                        var t = this.pieceNum_
                        return (
                            t < this.pieces_.length && t++,
                            new Rt(this.pieces_, t)
                        )
                    }),
                    (Rt.prototype.getBack = function () {
                        return this.pieceNum_ < this.pieces_.length
                            ? this.pieces_[this.pieces_.length - 1]
                            : null
                    }),
                    (Rt.prototype.toString = function () {
                        for (
                            var t = '', e = this.pieceNum_;
                            e < this.pieces_.length;
                            e++
                        )
                            '' !== this.pieces_[e] &&
                                (t += '/' + this.pieces_[e])
                        return t || '/'
                    }),
                    (Rt.prototype.toUrlEncodedString = function () {
                        for (
                            var t = '', e = this.pieceNum_;
                            e < this.pieces_.length;
                            e++
                        )
                            '' !== this.pieces_[e] &&
                                (t +=
                                    '/' +
                                    encodeURIComponent(String(this.pieces_[e])))
                        return t || '/'
                    }),
                    (Rt.prototype.slice = function (t) {
                        return (
                            void 0 === t && (t = 0),
                            this.pieces_.slice(this.pieceNum_ + t)
                        )
                    }),
                    (Rt.prototype.parent = function () {
                        if (this.pieceNum_ >= this.pieces_.length) return null
                        for (
                            var t = [], e = this.pieceNum_;
                            e < this.pieces_.length - 1;
                            e++
                        )
                            t.push(this.pieces_[e])
                        return new Rt(t, 0)
                    }),
                    (Rt.prototype.child = function (t) {
                        for (
                            var e = [], n = this.pieceNum_;
                            n < this.pieces_.length;
                            n++
                        )
                            e.push(this.pieces_[n])
                        if (t instanceof Rt)
                            for (n = t.pieceNum_; n < t.pieces_.length; n++)
                                e.push(t.pieces_[n])
                        else {
                            var r = t.split('/')
                            for (n = 0; n < r.length; n++)
                                0 < r[n].length && e.push(r[n])
                        }
                        return new Rt(e, 0)
                    }),
                    (Rt.prototype.isEmpty = function () {
                        return this.pieceNum_ >= this.pieces_.length
                    }),
                    (Rt.relativePath = function (t, e) {
                        var n = t.getFront(),
                            r = e.getFront()
                        if (null === n) return e
                        if (n === r)
                            return Rt.relativePath(t.popFront(), e.popFront())
                        throw new Error(
                            'INTERNAL ERROR: innerPath (' +
                                e +
                                ') is not within outerPath (' +
                                t +
                                ')'
                        )
                    }),
                    (Rt.comparePaths = function (t, e) {
                        for (
                            var n = t.slice(), r = e.slice(), i = 0;
                            i < n.length && i < r.length;
                            i++
                        ) {
                            var o = mt(n[i], r[i])
                            if (0 !== o) return o
                        }
                        return n.length === r.length
                            ? 0
                            : n.length < r.length
                            ? -1
                            : 1
                    }),
                    (Rt.prototype.equals = function (t) {
                        if (this.getLength() !== t.getLength()) return !1
                        for (
                            var e = this.pieceNum_, n = t.pieceNum_;
                            e <= this.pieces_.length;
                            e++, n++
                        )
                            if (this.pieces_[e] !== t.pieces_[n]) return !1
                        return !0
                    }),
                    (Rt.prototype.contains = function (t) {
                        var e = this.pieceNum_,
                            n = t.pieceNum_
                        if (this.getLength() > t.getLength()) return !1
                        for (; e < this.pieces_.length; ) {
                            if (this.pieces_[e] !== t.pieces_[n]) return !1
                            ++e, ++n
                        }
                        return !0
                    }),
                    Rt)
            function Rt(t, e) {
                if (void 0 === e) {
                    this.pieces_ = t.split('/')
                    for (var n = 0, r = 0; r < this.pieces_.length; r++)
                        0 < this.pieces_[r].length &&
                            ((this.pieces_[n] = this.pieces_[r]), n++)
                    ;(this.pieces_.length = n), (this.pieceNum_ = 0)
                } else (this.pieces_ = t), (this.pieceNum_ = e)
            }
            var Pt =
                (Object.defineProperty(Dt, 'MAX_PATH_DEPTH', {
                    get: function () {
                        return 32
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(Dt, 'MAX_PATH_LENGTH_BYTES', {
                    get: function () {
                        return 768
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (Dt.prototype.push = function (t) {
                    0 < this.parts_.length && (this.byteLength_ += 1),
                        this.parts_.push(t),
                        (this.byteLength_ += M(t)),
                        this.checkValid_()
                }),
                (Dt.prototype.pop = function () {
                    var t = this.parts_.pop()
                    ;(this.byteLength_ -= M(t)),
                        0 < this.parts_.length && (this.byteLength_ -= 1)
                }),
                (Dt.prototype.checkValid_ = function () {
                    if (this.byteLength_ > Dt.MAX_PATH_LENGTH_BYTES)
                        throw new Error(
                            this.errorPrefix_ +
                                'has a key path longer than ' +
                                Dt.MAX_PATH_LENGTH_BYTES +
                                ' bytes (' +
                                this.byteLength_ +
                                ').'
                        )
                    if (this.parts_.length > Dt.MAX_PATH_DEPTH)
                        throw new Error(
                            this.errorPrefix_ +
                                'path specified exceeds the maximum depth that can be written (' +
                                Dt.MAX_PATH_DEPTH +
                                ') or object contains a cycle ' +
                                this.toErrorString()
                        )
                }),
                (Dt.prototype.toErrorString = function () {
                    return 0 === this.parts_.length
                        ? ''
                        : "in property '" + this.parts_.join('.') + "'"
                }),
                Dt)
            function Dt(t, e) {
                ;(this.errorPrefix_ = e),
                    (this.parts_ = t.slice()),
                    (this.byteLength_ = Math.max(1, this.parts_.length))
                for (var n = 0; n < this.parts_.length; n++)
                    this.byteLength_ += M(this.parts_[n])
                this.checkValid_()
            }
            var Ot = 'firebaseio.com',
                xt = 'websocket',
                kt = 'long_polling',
                Ft =
                    ((At.prototype.needsQueryParam = function () {
                        return (
                            this.host !== this.internalHost ||
                            this.isCustomHost() ||
                            this.includeNamespaceInQueryParams
                        )
                    }),
                    (At.prototype.isCacheableHost = function () {
                        return 's-' === this.internalHost.substr(0, 2)
                    }),
                    (At.prototype.isDemoHost = function () {
                        return 'firebaseio-demo.com' === this.domain
                    }),
                    (At.prototype.isCustomHost = function () {
                        return (
                            'firebaseio.com' !== this.domain &&
                            'firebaseio-demo.com' !== this.domain
                        )
                    }),
                    (At.prototype.updateHost = function (t) {
                        t !== this.internalHost &&
                            ((this.internalHost = t),
                            this.isCacheableHost() &&
                                ut.set('host:' + this.host, this.internalHost))
                    }),
                    (At.prototype.connectionURL = function (t, e) {
                        var n
                        if (
                            (C(
                                'string' == typeof t,
                                'typeof type must == string'
                            ),
                            C(
                                'object' == typeof e,
                                'typeof params must == object'
                            ),
                            t === xt)
                        )
                            n =
                                (this.secure ? 'wss://' : 'ws://') +
                                this.internalHost +
                                '/.ws?'
                        else {
                            if (t !== kt)
                                throw new Error('Unknown connection type: ' + t)
                            n =
                                (this.secure ? 'https://' : 'http://') +
                                this.internalHost +
                                '/.lp?'
                        }
                        this.needsQueryParam() && (e.ns = this.namespace)
                        var r = []
                        return (
                            Et(e, function (t, e) {
                                r.push(t + '=' + e)
                            }),
                            n + r.join('&')
                        )
                    }),
                    (At.prototype.toString = function () {
                        var t = this.toURLString()
                        return (
                            this.persistenceKey &&
                                (t += '<' + this.persistenceKey + '>'),
                            t
                        )
                    }),
                    (At.prototype.toURLString = function () {
                        return (
                            (this.secure ? 'https://' : 'http://') + this.host
                        )
                    }),
                    At)
            function At(t, e, n, r, i, o) {
                void 0 === i && (i = ''),
                    void 0 === o && (o = !1),
                    (this.secure = e),
                    (this.namespace = n),
                    (this.webSocketOnly = r),
                    (this.persistenceKey = i),
                    (this.includeNamespaceInQueryParams = o),
                    (this.host = t.toLowerCase()),
                    (this.domain = this.host.substr(
                        this.host.indexOf('.') + 1
                    )),
                    (this.internalHost = ut.get('host:' + t) || this.host)
            }
            function Lt(t) {
                var e = zt(t),
                    n = e.namespace
                'firebase' === e.domain &&
                    rt(
                        e.host +
                            ' is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead'
                    ),
                    (n && 'undefined' !== n) ||
                        'localhost' === e.domain ||
                        rt(
                            'Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com'
                        ),
                    e.secure ||
                        ('undefined' != typeof window &&
                            window.location &&
                            window.location.protocol &&
                            -1 !== window.location.protocol.indexOf('https:') &&
                            it(
                                'Insecure Firebase access from a secure page. Please use https in calls to new Firebase().'
                            ))
                var r = 'ws' === e.scheme || 'wss' === e.scheme
                return {
                    repoInfo: new Ft(
                        e.host,
                        e.secure,
                        n,
                        r,
                        '',
                        n !== e.subdomain
                    ),
                    path: new Nt(e.pathString),
                }
            }
            function Mt(t) {
                return 'string' == typeof t && 0 !== t.length && !Gt.test(t)
            }
            function Wt(t) {
                return 'string' == typeof t && 0 !== t.length && !Xt.test(t)
            }
            function Qt(t) {
                return (
                    null === t ||
                    'string' == typeof t ||
                    ('number' == typeof t && !ot(t)) ||
                    (t && 'object' == typeof t && N(t, '.sv'))
                )
            }
            function qt(t, e, n, r, i) {
                ;(i && void 0 === n) || Jt(F(t, e, i), n, r)
            }
            function Ut(t, e, n, r, i) {
                if (!i || void 0 !== n) {
                    var o = F(t, e, i)
                    if (!n || 'object' != typeof n || Array.isArray(n))
                        throw new Error(
                            o +
                                ' must be an object containing the children to replace.'
                        )
                    var s = []
                    Et(n, function (t, e) {
                        var n = new Nt(t)
                        if (
                            (Jt(o, e, r.child(n)),
                            '.priority' === n.getBack() && !Qt(e))
                        )
                            throw new Error(
                                o +
                                    "contains an invalid value for '" +
                                    n.toString() +
                                    "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
                            )
                        s.push(n)
                    }),
                        (function (t, e) {
                            var n, r
                            for (n = 0; n < e.length; n++)
                                for (
                                    var i = (r = e[n]).slice(), o = 0;
                                    o < i.length;
                                    o++
                                )
                                    if (
                                        '.priority' === i[o] &&
                                        o === i.length - 1
                                    );
                                    else if (!Mt(i[o]))
                                        throw new Error(
                                            t +
                                                'contains an invalid key (' +
                                                i[o] +
                                                ') in path ' +
                                                r.toString() +
                                                '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                                        )
                            e.sort(Nt.comparePaths)
                            var s = null
                            for (n = 0; n < e.length; n++) {
                                if (((r = e[n]), null !== s && s.contains(r)))
                                    throw new Error(
                                        t +
                                            'contains a path ' +
                                            s.toString() +
                                            ' that is ancestor of another path ' +
                                            r.toString()
                                    )
                                s = r
                            }
                        })(o, s)
                }
            }
            function Vt(t, e, n, r) {
                if (!r || void 0 !== n) {
                    if (ot(n))
                        throw new Error(
                            F(t, e, r) +
                                'is ' +
                                n.toString() +
                                ', but must be a valid Firebase priority (a string, finite number, server value, or null).'
                        )
                    if (!Qt(n))
                        throw new Error(
                            F(t, e, r) +
                                'must be a valid Firebase priority (a string, finite number, server value, or null).'
                        )
                }
            }
            function Ht(t, e, n, r) {
                if (!r || void 0 !== n)
                    switch (n) {
                        case 'value':
                        case 'child_added':
                        case 'child_removed':
                        case 'child_changed':
                        case 'child_moved':
                            break
                        default:
                            throw new Error(
                                F(t, e, r) +
                                    'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
                            )
                    }
            }
            function Bt(t, e, n, r) {
                if (!((r && void 0 === n) || Mt(n)))
                    throw new Error(
                        F(t, e, r) +
                            'was an invalid key = "' +
                            n +
                            '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
                    )
            }
            function jt(t, e, n, r) {
                if (!((r && void 0 === n) || Wt(n)))
                    throw new Error(
                        F(t, e, r) +
                            'was an invalid path = "' +
                            n +
                            '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
                    )
            }
            function Kt(t, e) {
                if ('.info' === e.getFront())
                    throw new Error(
                        t + " failed = Can't modify data under /.info/"
                    )
            }
            function Yt(t, e, n) {
                var r = n.path.toString()
                if (
                    'string' != typeof n.repoInfo.host ||
                    0 === n.repoInfo.host.length ||
                    (!Mt(n.repoInfo.namespace) &&
                        'localhost' !== n.repoInfo.host.split(':')[0]) ||
                    (0 !== r.length &&
                        !(function (t) {
                            return (
                                (t = t && t.replace(/^\/*\.info(\/|$)/, '/')),
                                Wt(t)
                            )
                        })(r))
                )
                    throw new Error(
                        F(t, e, !1) +
                            'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
                    )
            }
            var zt = function (t) {
                    var e = '',
                        n = '',
                        r = '',
                        i = '',
                        o = '',
                        s = !0,
                        a = 'https',
                        h = 443
                    if ('string' == typeof t) {
                        var l = t.indexOf('//')
                        0 <= l &&
                            ((a = t.substring(0, l - 1)),
                            (t = t.substring(l + 2)))
                        var u = t.indexOf('/')
                        ;-1 === u && (u = t.length)
                        var c = t.indexOf('?')
                        ;-1 === c && (c = t.length),
                            (e = t.substring(0, Math.min(u, c))),
                            u < c &&
                                (i = (function (t) {
                                    for (
                                        var e = '', n = t.split('/'), r = 0;
                                        r < n.length;
                                        r++
                                    )
                                        if (0 < n[r].length) {
                                            var i = n[r]
                                            try {
                                                i = decodeURIComponent(
                                                    i.replace(/\+/g, ' ')
                                                )
                                            } catch (t) {}
                                            e += '/' + i
                                        }
                                    return e
                                })(t.substring(u, c)))
                        var p = (function (t) {
                            var e,
                                n,
                                r = {}
                            '?' === t.charAt(0) && (t = t.substring(1))
                            try {
                                for (
                                    var i = f(t.split('&')), o = i.next();
                                    !o.done;
                                    o = i.next()
                                ) {
                                    var s = o.value
                                    if (0 !== s.length) {
                                        var a = s.split('=')
                                        2 === a.length
                                            ? (r[
                                                  decodeURIComponent(a[0])
                                              ] = decodeURIComponent(a[1]))
                                            : it(
                                                  "Invalid query segment '" +
                                                      s +
                                                      "' in query '" +
                                                      t +
                                                      "'"
                                              )
                                    }
                                }
                            } catch (t) {
                                e = { error: t }
                            } finally {
                                try {
                                    o && !o.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return r
                        })(t.substring(Math.min(t.length, c)))
                        0 <= (l = e.indexOf(':'))
                            ? ((s = 'https' === a || 'wss' === a),
                              (h = parseInt(e.substring(l + 1), 10)))
                            : (l = t.length)
                        var d = e.split('.')
                        3 === d.length
                            ? ((n = d[1]), (o = r = d[0].toLowerCase()))
                            : 2 === d.length
                            ? (n = d[0])
                            : 'localhost' === d[0].slice(0, l).toLowerCase() &&
                              (n = 'localhost'),
                            'ns' in p && (o = p.ns)
                    }
                    return {
                        host: e,
                        port: h,
                        domain: n,
                        subdomain: r,
                        secure: s,
                        scheme: a,
                        pathString: i,
                        namespace: o,
                    }
                },
                Gt = /[\[\].#$\/\u0000-\u001F\u007F]/,
                Xt = /[\[\].#$\u0000-\u001F\u007F]/,
                $t = 10485760,
                Jt = function (n, t, e) {
                    var r = e instanceof Nt ? new Pt(e, n) : e
                    if (void 0 === t)
                        throw new Error(
                            n + 'contains undefined ' + r.toErrorString()
                        )
                    if ('function' == typeof t)
                        throw new Error(
                            n +
                                'contains a function ' +
                                r.toErrorString() +
                                ' with contents = ' +
                                t.toString()
                        )
                    if (ot(t))
                        throw new Error(
                            n +
                                'contains ' +
                                t.toString() +
                                ' ' +
                                r.toErrorString()
                        )
                    if ('string' == typeof t && t.length > $t / 3 && M(t) > $t)
                        throw new Error(
                            n +
                                'contains a string greater than ' +
                                $t +
                                ' utf8 bytes ' +
                                r.toErrorString() +
                                " ('" +
                                t.substring(0, 50) +
                                "...')"
                        )
                    if (t && 'object' == typeof t) {
                        var i = !1,
                            o = !1
                        if (
                            (Et(t, function (t, e) {
                                if ('.value' === t) i = !0
                                else if (
                                    '.priority' !== t &&
                                    '.sv' !== t &&
                                    ((o = !0), !Mt(t))
                                )
                                    throw new Error(
                                        n +
                                            ' contains an invalid key (' +
                                            t +
                                            ') ' +
                                            r.toErrorString() +
                                            '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                                    )
                                r.push(t), Jt(n, e, r), r.pop()
                            }),
                            i && o)
                        )
                            throw new Error(
                                n +
                                    ' contains ".value" child ' +
                                    r.toErrorString() +
                                    ' in addition to actual children.'
                            )
                    }
                },
                Zt =
                    ((te.prototype.cancel = function (t) {
                        k('OnDisconnect.cancel', 0, 1, arguments.length),
                            A('OnDisconnect.cancel', 1, t, !0)
                        var e = new p()
                        return (
                            this.repo_.onDisconnectCancel(
                                this.path_,
                                e.wrapCallback(t)
                            ),
                            e.promise
                        )
                    }),
                    (te.prototype.remove = function (t) {
                        k('OnDisconnect.remove', 0, 1, arguments.length),
                            Kt('OnDisconnect.remove', this.path_),
                            A('OnDisconnect.remove', 1, t, !0)
                        var e = new p()
                        return (
                            this.repo_.onDisconnectSet(
                                this.path_,
                                null,
                                e.wrapCallback(t)
                            ),
                            e.promise
                        )
                    }),
                    (te.prototype.set = function (t, e) {
                        k('OnDisconnect.set', 1, 2, arguments.length),
                            Kt('OnDisconnect.set', this.path_),
                            qt('OnDisconnect.set', 1, t, this.path_, !1),
                            A('OnDisconnect.set', 2, e, !0)
                        var n = new p()
                        return (
                            this.repo_.onDisconnectSet(
                                this.path_,
                                t,
                                n.wrapCallback(e)
                            ),
                            n.promise
                        )
                    }),
                    (te.prototype.setWithPriority = function (t, e, n) {
                        k(
                            'OnDisconnect.setWithPriority',
                            2,
                            3,
                            arguments.length
                        ),
                            Kt('OnDisconnect.setWithPriority', this.path_),
                            qt(
                                'OnDisconnect.setWithPriority',
                                1,
                                t,
                                this.path_,
                                !1
                            ),
                            Vt('OnDisconnect.setWithPriority', 2, e, !1),
                            A('OnDisconnect.setWithPriority', 3, n, !0)
                        var r = new p()
                        return (
                            this.repo_.onDisconnectSetWithPriority(
                                this.path_,
                                t,
                                e,
                                r.wrapCallback(n)
                            ),
                            r.promise
                        )
                    }),
                    (te.prototype.update = function (t, e) {
                        if (
                            (k('OnDisconnect.update', 1, 2, arguments.length),
                            Kt('OnDisconnect.update', this.path_),
                            Array.isArray(t))
                        ) {
                            for (var n = {}, r = 0; r < t.length; ++r)
                                n['' + r] = t[r]
                            ;(t = n),
                                it(
                                    'Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.'
                                )
                        }
                        Ut('OnDisconnect.update', 1, t, this.path_, !1),
                            A('OnDisconnect.update', 2, e, !0)
                        var i = new p()
                        return (
                            this.repo_.onDisconnectUpdate(
                                this.path_,
                                t,
                                i.wrapCallback(e)
                            ),
                            i.promise
                        )
                    }),
                    te)
            function te(t, e) {
                ;(this.repo_ = t), (this.path_ = e)
            }
            var ee =
                ((ne.prototype.toJSON = function () {
                    return (
                        k('TransactionResult.toJSON', 0, 1, arguments.length),
                        {
                            committed: this.committed,
                            snapshot: this.snapshot.toJSON(),
                        }
                    )
                }),
                ne)
            function ne(t, e) {
                ;(this.committed = t), (this.snapshot = e)
            }
            var re,
                ie,
                oe,
                se =
                    ((re =
                        '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz'),
                    (ie = 0),
                    (oe = []),
                    function (t) {
                        var e,
                            n = t === ie
                        ie = t
                        var r = new Array(8)
                        for (e = 7; 0 <= e; e--)
                            (r[e] = re.charAt(t % 64)), (t = Math.floor(t / 64))
                        C(0 === t, 'Cannot push at time == 0')
                        var i = r.join('')
                        if (n) {
                            for (e = 11; 0 <= e && 63 === oe[e]; e--) oe[e] = 0
                            oe[e]++
                        } else
                            for (e = 0; e < 12; e++)
                                oe[e] = Math.floor(64 * Math.random())
                        for (e = 0; e < 12; e++) i += re.charAt(oe[e])
                        return (
                            C(
                                20 === i.length,
                                'nextPushId: Length should be 20.'
                            ),
                            i
                        )
                    }),
                ae =
                    ((he.Wrap = function (t, e) {
                        return new he(t, e)
                    }),
                    he)
            function he(t, e) {
                ;(this.name = t), (this.node = e)
            }
            var le,
                ue =
                    ((ce.prototype.getCompare = function () {
                        return this.compare.bind(this)
                    }),
                    (ce.prototype.indexedValueChanged = function (t, e) {
                        var n = new ae(vt, t),
                            r = new ae(vt, e)
                        return 0 !== this.compare(n, r)
                    }),
                    (ce.prototype.minPost = function () {
                        return ae.MIN
                    }),
                    ce)
            function ce() {}
            var pe,
                de =
                    (t(fe, (pe = ue)),
                    Object.defineProperty(fe, '__EMPTY_NODE', {
                        get: function () {
                            return le
                        },
                        set: function (t) {
                            le = t
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (fe.prototype.compare = function (t, e) {
                        return mt(t.name, e.name)
                    }),
                    (fe.prototype.isDefinedOn = function (t) {
                        throw c(
                            'KeyIndex.isDefinedOn not expected to be called.'
                        )
                    }),
                    (fe.prototype.indexedValueChanged = function (t, e) {
                        return !1
                    }),
                    (fe.prototype.minPost = function () {
                        return ae.MIN
                    }),
                    (fe.prototype.maxPost = function () {
                        return new ae(gt, le)
                    }),
                    (fe.prototype.makePost = function (t, e) {
                        return (
                            C(
                                'string' == typeof t,
                                'KeyIndex indexValue must always be a string.'
                            ),
                            new ae(t, le)
                        )
                    }),
                    (fe.prototype.toString = function () {
                        return '.key'
                    }),
                    fe)
            function fe() {
                return (null !== pe && pe.apply(this, arguments)) || this
            }
            var _e,
                ye = new de()
            function ve(t) {
                return 'number' == typeof t ? 'number:' + wt(t) : 'string:' + t
            }
            function ge(t) {
                if (t.isLeafNode()) {
                    var e = t.val()
                    C(
                        'string' == typeof e ||
                            'number' == typeof e ||
                            ('object' == typeof e && N(e, '.sv')),
                        'Priority must be a string or number.'
                    )
                } else
                    C(t === _e || t.isEmpty(), 'priority of unexpected type.')
                C(
                    t === _e || t.getPriority().isEmpty(),
                    "Priority nodes can't have a priority of their own."
                )
            }
            var me,
                Ce,
                Ee,
                we,
                be =
                    (Object.defineProperty(Se, '__childrenNodeConstructor', {
                        get: function () {
                            return me
                        },
                        set: function (t) {
                            me = t
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (Se.prototype.isLeafNode = function () {
                        return !0
                    }),
                    (Se.prototype.getPriority = function () {
                        return this.priorityNode_
                    }),
                    (Se.prototype.updatePriority = function (t) {
                        return new Se(this.value_, t)
                    }),
                    (Se.prototype.getImmediateChild = function (t) {
                        return '.priority' === t
                            ? this.priorityNode_
                            : Se.__childrenNodeConstructor.EMPTY_NODE
                    }),
                    (Se.prototype.getChild = function (t) {
                        return t.isEmpty()
                            ? this
                            : '.priority' === t.getFront()
                            ? this.priorityNode_
                            : Se.__childrenNodeConstructor.EMPTY_NODE
                    }),
                    (Se.prototype.hasChild = function () {
                        return !1
                    }),
                    (Se.prototype.getPredecessorChildName = function (t, e) {
                        return null
                    }),
                    (Se.prototype.updateImmediateChild = function (t, e) {
                        return '.priority' === t
                            ? this.updatePriority(e)
                            : e.isEmpty() && '.priority' !== t
                            ? this
                            : Se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                                  t,
                                  e
                              ).updatePriority(this.priorityNode_)
                    }),
                    (Se.prototype.updateChild = function (t, e) {
                        var n = t.getFront()
                        return null === n
                            ? e
                            : e.isEmpty() && '.priority' !== n
                            ? this
                            : (C(
                                  '.priority' !== n || 1 === t.getLength(),
                                  '.priority must be the last token in a path'
                              ),
                              this.updateImmediateChild(
                                  n,
                                  Se.__childrenNodeConstructor.EMPTY_NODE.updateChild(
                                      t.popFront(),
                                      e
                                  )
                              ))
                    }),
                    (Se.prototype.isEmpty = function () {
                        return !1
                    }),
                    (Se.prototype.numChildren = function () {
                        return 0
                    }),
                    (Se.prototype.forEachChild = function (t, e) {
                        return !1
                    }),
                    (Se.prototype.val = function (t) {
                        return t && !this.getPriority().isEmpty()
                            ? {
                                  '.value': this.getValue(),
                                  '.priority': this.getPriority().val(),
                              }
                            : this.getValue()
                    }),
                    (Se.prototype.hash = function () {
                        if (null === this.lazyHash_) {
                            var t = ''
                            this.priorityNode_.isEmpty() ||
                                (t +=
                                    'priority:' +
                                    ve(this.priorityNode_.val()) +
                                    ':')
                            var e = typeof this.value_
                            ;(t += e + ':'),
                                (t +=
                                    'number' == e
                                        ? wt(this.value_)
                                        : this.value_),
                                (this.lazyHash_ = J(t))
                        }
                        return this.lazyHash_
                    }),
                    (Se.prototype.getValue = function () {
                        return this.value_
                    }),
                    (Se.prototype.compareTo = function (t) {
                        return t === Se.__childrenNodeConstructor.EMPTY_NODE
                            ? 1
                            : t instanceof Se.__childrenNodeConstructor
                            ? -1
                            : (C(t.isLeafNode(), 'Unknown node type'),
                              this.compareToLeafNode_(t))
                    }),
                    (Se.prototype.compareToLeafNode_ = function (t) {
                        var e = typeof t.value_,
                            n = typeof this.value_,
                            r = Se.VALUE_TYPE_ORDER.indexOf(e),
                            i = Se.VALUE_TYPE_ORDER.indexOf(n)
                        return (
                            C(0 <= r, 'Unknown leaf type: ' + e),
                            C(0 <= i, 'Unknown leaf type: ' + n),
                            r === i
                                ? 'object' == n
                                    ? 0
                                    : this.value_ < t.value_
                                    ? -1
                                    : this.value_ === t.value_
                                    ? 0
                                    : 1
                                : i - r
                        )
                    }),
                    (Se.prototype.withIndex = function () {
                        return this
                    }),
                    (Se.prototype.isIndexed = function () {
                        return !0
                    }),
                    (Se.prototype.equals = function (t) {
                        if (t === this) return !0
                        if (t.isLeafNode()) {
                            var e = t
                            return (
                                this.value_ === e.value_ &&
                                this.priorityNode_.equals(e.priorityNode_)
                            )
                        }
                        return !1
                    }),
                    (Se.VALUE_TYPE_ORDER = [
                        'object',
                        'boolean',
                        'number',
                        'string',
                    ]),
                    Se)
            function Se(t, e) {
                void 0 === e && (e = Se.__childrenNodeConstructor.EMPTY_NODE),
                    (this.value_ = t),
                    (this.priorityNode_ = e),
                    (this.lazyHash_ = null),
                    C(
                        void 0 !== this.value_ && null !== this.value_,
                        "LeafNode shouldn't be created with null/undefined value."
                    ),
                    ge(this.priorityNode_)
            }
            function Te() {
                return (null !== we && we.apply(this, arguments)) || this
            }
            var Ie = new (t(Te, (we = ue)),
                (Te.prototype.compare = function (t, e) {
                    var n = t.node.getPriority(),
                        r = e.node.getPriority(),
                        i = n.compareTo(r)
                    return 0 === i ? mt(t.name, e.name) : i
                }),
                (Te.prototype.isDefinedOn = function (t) {
                    return !t.getPriority().isEmpty()
                }),
                (Te.prototype.indexedValueChanged = function (t, e) {
                    return !t.getPriority().equals(e.getPriority())
                }),
                (Te.prototype.minPost = function () {
                    return ae.MIN
                }),
                (Te.prototype.maxPost = function () {
                    return new ae(gt, new be('[PRIORITY-POST]', Ee))
                }),
                (Te.prototype.makePost = function (t, e) {
                    var n = Ce(t)
                    return new ae(e, new be('[PRIORITY-POST]', n))
                }),
                (Te.prototype.toString = function () {
                    return '.priority'
                }),
                Te)(),
                Ne =
                    ((Re.prototype.getNext = function () {
                        if (0 === this.nodeStack_.length) return null
                        var t,
                            e = this.nodeStack_.pop()
                        if (
                            ((t = this.resultGenerator_
                                ? this.resultGenerator_(e.key, e.value)
                                : { key: e.key, value: e.value }),
                            this.isReverse_)
                        )
                            for (e = e.left; !e.isEmpty(); )
                                this.nodeStack_.push(e), (e = e.right)
                        else
                            for (e = e.right; !e.isEmpty(); )
                                this.nodeStack_.push(e), (e = e.left)
                        return t
                    }),
                    (Re.prototype.hasNext = function () {
                        return 0 < this.nodeStack_.length
                    }),
                    (Re.prototype.peek = function () {
                        if (0 === this.nodeStack_.length) return null
                        var t = this.nodeStack_[this.nodeStack_.length - 1]
                        return this.resultGenerator_
                            ? this.resultGenerator_(t.key, t.value)
                            : { key: t.key, value: t.value }
                    }),
                    Re)
            function Re(t, e, n, r, i) {
                void 0 === i && (i = null),
                    (this.isReverse_ = r),
                    (this.resultGenerator_ = i),
                    (this.nodeStack_ = [])
                for (var o = 1; !t.isEmpty(); )
                    if (
                        ((t = t),
                        (o = e ? n(t.key, e) : 1),
                        r && (o *= -1),
                        o < 0)
                    )
                        t = this.isReverse_ ? t.left : t.right
                    else {
                        if (0 === o) {
                            this.nodeStack_.push(t)
                            break
                        }
                        this.nodeStack_.push(t),
                            (t = this.isReverse_ ? t.right : t.left)
                    }
            }
            var Pe =
                ((De.prototype.copy = function (t, e, n, r, i) {
                    return new De(
                        null != t ? t : this.key,
                        null != e ? e : this.value,
                        null != n ? n : this.color,
                        null != r ? r : this.left,
                        null != i ? i : this.right
                    )
                }),
                (De.prototype.count = function () {
                    return this.left.count() + 1 + this.right.count()
                }),
                (De.prototype.isEmpty = function () {
                    return !1
                }),
                (De.prototype.inorderTraversal = function (t) {
                    return (
                        this.left.inorderTraversal(t) ||
                        !!t(this.key, this.value) ||
                        this.right.inorderTraversal(t)
                    )
                }),
                (De.prototype.reverseTraversal = function (t) {
                    return (
                        this.right.reverseTraversal(t) ||
                        t(this.key, this.value) ||
                        this.left.reverseTraversal(t)
                    )
                }),
                (De.prototype.min_ = function () {
                    return this.left.isEmpty() ? this : this.left.min_()
                }),
                (De.prototype.minKey = function () {
                    return this.min_().key
                }),
                (De.prototype.maxKey = function () {
                    return this.right.isEmpty() ? this.key : this.right.maxKey()
                }),
                (De.prototype.insert = function (t, e, n) {
                    var r = this,
                        i = n(t, r.key)
                    return (r =
                        i < 0
                            ? r.copy(
                                  null,
                                  null,
                                  null,
                                  r.left.insert(t, e, n),
                                  null
                              )
                            : 0 === i
                            ? r.copy(null, e, null, null, null)
                            : r.copy(
                                  null,
                                  null,
                                  null,
                                  null,
                                  r.right.insert(t, e, n)
                              )).fixUp_()
                }),
                (De.prototype.removeMin_ = function () {
                    if (this.left.isEmpty()) return ke.EMPTY_NODE
                    var t = this
                    return (
                        t.left.isRed_() ||
                            t.left.left.isRed_() ||
                            (t = t.moveRedLeft_()),
                        (t = t.copy(
                            null,
                            null,
                            null,
                            t.left.removeMin_(),
                            null
                        )).fixUp_()
                    )
                }),
                (De.prototype.remove = function (t, e) {
                    var n, r
                    if (e(t, (n = this).key) < 0)
                        n.left.isEmpty() ||
                            n.left.isRed_() ||
                            n.left.left.isRed_() ||
                            (n = n.moveRedLeft_()),
                            (n = n.copy(
                                null,
                                null,
                                null,
                                n.left.remove(t, e),
                                null
                            ))
                    else {
                        if (
                            (n.left.isRed_() && (n = n.rotateRight_()),
                            n.right.isEmpty() ||
                                n.right.isRed_() ||
                                n.right.left.isRed_() ||
                                (n = n.moveRedRight_()),
                            0 === e(t, n.key))
                        ) {
                            if (n.right.isEmpty()) return ke.EMPTY_NODE
                            ;(r = n.right.min_()),
                                (n = n.copy(
                                    r.key,
                                    r.value,
                                    null,
                                    null,
                                    n.right.removeMin_()
                                ))
                        }
                        n = n.copy(null, null, null, null, n.right.remove(t, e))
                    }
                    return n.fixUp_()
                }),
                (De.prototype.isRed_ = function () {
                    return this.color
                }),
                (De.prototype.fixUp_ = function () {
                    var t = this
                    return (
                        t.right.isRed_() &&
                            !t.left.isRed_() &&
                            (t = t.rotateLeft_()),
                        t.left.isRed_() &&
                            t.left.left.isRed_() &&
                            (t = t.rotateRight_()),
                        t.left.isRed_() &&
                            t.right.isRed_() &&
                            (t = t.colorFlip_()),
                        t
                    )
                }),
                (De.prototype.moveRedLeft_ = function () {
                    var t = this.colorFlip_()
                    return (
                        t.right.left.isRed_() &&
                            (t = (t = (t = t.copy(
                                null,
                                null,
                                null,
                                null,
                                t.right.rotateRight_()
                            )).rotateLeft_()).colorFlip_()),
                        t
                    )
                }),
                (De.prototype.moveRedRight_ = function () {
                    var t = this.colorFlip_()
                    return (
                        t.left.left.isRed_() &&
                            (t = (t = t.rotateRight_()).colorFlip_()),
                        t
                    )
                }),
                (De.prototype.rotateLeft_ = function () {
                    var t = this.copy(null, null, De.RED, null, this.right.left)
                    return this.right.copy(null, null, this.color, t, null)
                }),
                (De.prototype.rotateRight_ = function () {
                    var t = this.copy(null, null, De.RED, this.left.right, null)
                    return this.left.copy(null, null, this.color, null, t)
                }),
                (De.prototype.colorFlip_ = function () {
                    var t = this.left.copy(
                            null,
                            null,
                            !this.left.color,
                            null,
                            null
                        ),
                        e = this.right.copy(
                            null,
                            null,
                            !this.right.color,
                            null,
                            null
                        )
                    return this.copy(null, null, !this.color, t, e)
                }),
                (De.prototype.checkMaxDepth_ = function () {
                    var t = this.check_()
                    return Math.pow(2, t) <= this.count() + 1
                }),
                (De.prototype.check_ = function () {
                    if (this.isRed_() && this.left.isRed_())
                        throw new Error(
                            'Red node has red child(' +
                                this.key +
                                ',' +
                                this.value +
                                ')'
                        )
                    if (this.right.isRed_())
                        throw new Error(
                            'Right child of (' +
                                this.key +
                                ',' +
                                this.value +
                                ') is red'
                        )
                    var t = this.left.check_()
                    if (t !== this.right.check_())
                        throw new Error('Black depths differ')
                    return t + (this.isRed_() ? 0 : 1)
                }),
                (De.RED = !0),
                (De.BLACK = !1),
                De)
            function De(t, e, n, r, i) {
                ;(this.key = t),
                    (this.value = e),
                    (this.color = null != n ? n : De.RED),
                    (this.left = null != r ? r : ke.EMPTY_NODE),
                    (this.right = null != i ? i : ke.EMPTY_NODE)
            }
            var Oe =
                ((xe.prototype.copy = function (t, e, n, r, i) {
                    return this
                }),
                (xe.prototype.insert = function (t, e, n) {
                    return new Pe(t, e, null)
                }),
                (xe.prototype.remove = function (t, e) {
                    return this
                }),
                (xe.prototype.count = function () {
                    return 0
                }),
                (xe.prototype.isEmpty = function () {
                    return !0
                }),
                (xe.prototype.inorderTraversal = function (t) {
                    return !1
                }),
                (xe.prototype.reverseTraversal = function (t) {
                    return !1
                }),
                (xe.prototype.minKey = function () {
                    return null
                }),
                (xe.prototype.maxKey = function () {
                    return null
                }),
                (xe.prototype.check_ = function () {
                    return 0
                }),
                (xe.prototype.isRed_ = function () {
                    return !1
                }),
                xe)
            function xe() {}
            var ke =
                ((Fe.prototype.insert = function (t, e) {
                    return new Fe(
                        this.comparator_,
                        this.root_
                            .insert(t, e, this.comparator_)
                            .copy(null, null, Pe.BLACK, null, null)
                    )
                }),
                (Fe.prototype.remove = function (t) {
                    return new Fe(
                        this.comparator_,
                        this.root_
                            .remove(t, this.comparator_)
                            .copy(null, null, Pe.BLACK, null, null)
                    )
                }),
                (Fe.prototype.get = function (t) {
                    for (var e, n = this.root_; !n.isEmpty(); ) {
                        if (0 === (e = this.comparator_(t, n.key)))
                            return n.value
                        e < 0 ? (n = n.left) : 0 < e && (n = n.right)
                    }
                    return null
                }),
                (Fe.prototype.getPredecessorKey = function (t) {
                    for (var e, n = this.root_, r = null; !n.isEmpty(); ) {
                        if (0 === (e = this.comparator_(t, n.key))) {
                            if (n.left.isEmpty()) return r ? r.key : null
                            for (n = n.left; !n.right.isEmpty(); ) n = n.right
                            return n.key
                        }
                        e < 0 ? (n = n.left) : 0 < e && (n = (r = n).right)
                    }
                    throw new Error(
                        'Attempted to find predecessor key for a nonexistent key.  What gives?'
                    )
                }),
                (Fe.prototype.isEmpty = function () {
                    return this.root_.isEmpty()
                }),
                (Fe.prototype.count = function () {
                    return this.root_.count()
                }),
                (Fe.prototype.minKey = function () {
                    return this.root_.minKey()
                }),
                (Fe.prototype.maxKey = function () {
                    return this.root_.maxKey()
                }),
                (Fe.prototype.inorderTraversal = function (t) {
                    return this.root_.inorderTraversal(t)
                }),
                (Fe.prototype.reverseTraversal = function (t) {
                    return this.root_.reverseTraversal(t)
                }),
                (Fe.prototype.getIterator = function (t) {
                    return new Ne(this.root_, null, this.comparator_, !1, t)
                }),
                (Fe.prototype.getIteratorFrom = function (t, e) {
                    return new Ne(this.root_, t, this.comparator_, !1, e)
                }),
                (Fe.prototype.getReverseIteratorFrom = function (t, e) {
                    return new Ne(this.root_, t, this.comparator_, !0, e)
                }),
                (Fe.prototype.getReverseIterator = function (t) {
                    return new Ne(this.root_, null, this.comparator_, !0, t)
                }),
                (Fe.EMPTY_NODE = new Oe()),
                Fe)
            function Fe(t, e) {
                void 0 === e && (e = Fe.EMPTY_NODE),
                    (this.comparator_ = t),
                    (this.root_ = e)
            }
            var Ae = Math.log(2),
                Le =
                    ((Me.prototype.nextBitIsOne = function () {
                        var t = !(this.bits_ & (1 << this.current_))
                        return this.current_--, t
                    }),
                    Me)
            function Me(t) {
                var e
                ;(this.count = ((e = t + 1), parseInt(Math.log(e) / Ae, 10))),
                    (this.current_ = this.count - 1)
                var n,
                    r = ((n = this.count), parseInt(Array(n + 1).join('1'), 2))
                this.bits_ = (t + 1) & r
            }
            var We,
                Qe,
                qe = function (l, t, u, e) {
                    l.sort(t)
                    var c = function (t, e) {
                            var n,
                                r,
                                i = e - t
                            if (0 == i) return null
                            if (1 == i)
                                return (
                                    (n = l[t]),
                                    (r = u ? u(n) : n),
                                    new Pe(r, n.node, Pe.BLACK, null, null)
                                )
                            var o = parseInt(i / 2, 10) + t,
                                s = c(t, o),
                                a = c(o + 1, e)
                            return (
                                (n = l[o]),
                                (r = u ? u(n) : n),
                                new Pe(r, n.node, Pe.BLACK, s, a)
                            )
                        },
                        n = (function (t) {
                            for (
                                var e = null,
                                    n = null,
                                    a = l.length,
                                    r = function (t, e) {
                                        var n = a - t,
                                            r = a
                                        a -= t
                                        var i = c(1 + n, r),
                                            o = l[n],
                                            s = u ? u(o) : o
                                        h(new Pe(s, o.node, e, null, i))
                                    },
                                    h = function (t) {
                                        e = e ? (e.left = t) : (n = t)
                                    },
                                    i = 0;
                                i < t.count;
                                ++i
                            ) {
                                var o = t.nextBitIsOne(),
                                    s = Math.pow(2, t.count - (i + 1))
                                o
                                    ? r(s, Pe.BLACK)
                                    : (r(s, Pe.BLACK), r(s, Pe.RED))
                            }
                            return n
                        })(new Le(l.length))
                    return new ke(e || t, n)
                },
                Ue = {},
                Ve =
                    (Object.defineProperty(He, 'Default', {
                        get: function () {
                            return (
                                C(Ie, 'ChildrenNode.ts has not been loaded'),
                                (We =
                                    We ||
                                    new He(
                                        { '.priority': Ue },
                                        { '.priority': Ie }
                                    ))
                            )
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (He.prototype.get = function (t) {
                        var e = R(this.indexes_, t)
                        if (!e) throw new Error('No index defined for ' + t)
                        return e instanceof ke ? e : null
                    }),
                    (He.prototype.hasIndex = function (t) {
                        return N(this.indexSet_, t.toString())
                    }),
                    (He.prototype.addIndex = function (t, e) {
                        C(
                            t !== ye,
                            "KeyIndex always exists and isn't meant to be added to the IndexMap."
                        )
                        for (
                            var n,
                                r = [],
                                i = !1,
                                o = e.getIterator(ae.Wrap),
                                s = o.getNext();
                            s;

                        )
                            (i = i || t.isDefinedOn(s.node)),
                                r.push(s),
                                (s = o.getNext())
                        n = i ? qe(r, t.getCompare()) : Ue
                        var a = t.toString(),
                            h = u({}, this.indexSet_)
                        h[a] = t
                        var l = u({}, this.indexes_)
                        return (l[a] = n), new He(l, h)
                    }),
                    (He.prototype.addToIndexes = function (h, l) {
                        var u = this
                        return new He(
                            D(this.indexes_, function (t, e) {
                                var n = R(u.indexSet_, e)
                                if (
                                    (C(
                                        n,
                                        'Missing index implementation for ' + e
                                    ),
                                    t === Ue)
                                ) {
                                    if (n.isDefinedOn(h.node)) {
                                        for (
                                            var r = [],
                                                i = l.getIterator(ae.Wrap),
                                                o = i.getNext();
                                            o;

                                        )
                                            o.name !== h.name && r.push(o),
                                                (o = i.getNext())
                                        return r.push(h), qe(r, n.getCompare())
                                    }
                                    return Ue
                                }
                                var s = l.get(h.name),
                                    a = t
                                return (
                                    s && (a = a.remove(new ae(h.name, s))),
                                    a.insert(h, h.node)
                                )
                            }),
                            this.indexSet_
                        )
                    }),
                    (He.prototype.removeFromIndexes = function (n, r) {
                        return new He(
                            D(this.indexes_, function (t) {
                                if (t === Ue) return t
                                var e = r.get(n.name)
                                return e ? t.remove(new ae(n.name, e)) : t
                            }),
                            this.indexSet_
                        )
                    }),
                    He)
            function He(t, e) {
                ;(this.indexes_ = t), (this.indexSet_ = e)
            }
            function Be(t, e) {
                return mt(t.name, e.name)
            }
            function je(t, e) {
                return mt(t, e)
            }
            var Ke,
                Ye =
                    (Object.defineProperty(ze, 'EMPTY_NODE', {
                        get: function () {
                            return (Qe =
                                Qe || new ze(new ke(je), null, Ve.Default))
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (ze.prototype.isLeafNode = function () {
                        return !1
                    }),
                    (ze.prototype.getPriority = function () {
                        return this.priorityNode_ || Qe
                    }),
                    (ze.prototype.updatePriority = function (t) {
                        return this.children_.isEmpty()
                            ? this
                            : new ze(this.children_, t, this.indexMap_)
                    }),
                    (ze.prototype.getImmediateChild = function (t) {
                        if ('.priority' === t) return this.getPriority()
                        var e = this.children_.get(t)
                        return null === e ? Qe : e
                    }),
                    (ze.prototype.getChild = function (t) {
                        var e = t.getFront()
                        return null === e
                            ? this
                            : this.getImmediateChild(e).getChild(t.popFront())
                    }),
                    (ze.prototype.hasChild = function (t) {
                        return null !== this.children_.get(t)
                    }),
                    (ze.prototype.updateImmediateChild = function (t, e) {
                        if (
                            (C(e, 'We should always be passing snapshot nodes'),
                            '.priority' === t)
                        )
                            return this.updatePriority(e)
                        var n = new ae(t, e),
                            r = void 0,
                            i = void 0
                        i = e.isEmpty()
                            ? ((r = this.children_.remove(t)),
                              this.indexMap_.removeFromIndexes(
                                  n,
                                  this.children_
                              ))
                            : ((r = this.children_.insert(t, e)),
                              this.indexMap_.addToIndexes(n, this.children_))
                        var o = r.isEmpty() ? Qe : this.priorityNode_
                        return new ze(r, o, i)
                    }),
                    (ze.prototype.updateChild = function (t, e) {
                        var n = t.getFront()
                        if (null === n) return e
                        C(
                            '.priority' !== t.getFront() || 1 === t.getLength(),
                            '.priority must be the last token in a path'
                        )
                        var r = this.getImmediateChild(n).updateChild(
                            t.popFront(),
                            e
                        )
                        return this.updateImmediateChild(n, r)
                    }),
                    (ze.prototype.isEmpty = function () {
                        return this.children_.isEmpty()
                    }),
                    (ze.prototype.numChildren = function () {
                        return this.children_.count()
                    }),
                    (ze.prototype.val = function (n) {
                        if (this.isEmpty()) return null
                        var r = {},
                            i = 0,
                            o = 0,
                            s = !0
                        if (
                            (this.forEachChild(Ie, function (t, e) {
                                ;(r[t] = e.val(n)),
                                    i++,
                                    s && ze.INTEGER_REGEXP_.test(t)
                                        ? (o = Math.max(o, Number(t)))
                                        : (s = !1)
                            }),
                            !n && s && o < 2 * i)
                        ) {
                            var t = []
                            for (var e in r) t[e] = r[e]
                            return t
                        }
                        return (
                            n &&
                                !this.getPriority().isEmpty() &&
                                (r['.priority'] = this.getPriority().val()),
                            r
                        )
                    }),
                    (ze.prototype.hash = function () {
                        if (null === this.lazyHash_) {
                            var r = ''
                            this.getPriority().isEmpty() ||
                                (r +=
                                    'priority:' +
                                    ve(this.getPriority().val()) +
                                    ':'),
                                this.forEachChild(Ie, function (t, e) {
                                    var n = e.hash()
                                    '' !== n && (r += ':' + t + ':' + n)
                                }),
                                (this.lazyHash_ = '' === r ? '' : J(r))
                        }
                        return this.lazyHash_
                    }),
                    (ze.prototype.getPredecessorChildName = function (t, e, n) {
                        var r = this.resolveIndex_(n)
                        if (r) {
                            var i = r.getPredecessorKey(new ae(t, e))
                            return i ? i.name : null
                        }
                        return this.children_.getPredecessorKey(t)
                    }),
                    (ze.prototype.getFirstChildName = function (t) {
                        var e = this.resolveIndex_(t)
                        if (e) {
                            var n = e.minKey()
                            return n && n.name
                        }
                        return this.children_.minKey()
                    }),
                    (ze.prototype.getFirstChild = function (t) {
                        var e = this.getFirstChildName(t)
                        return e ? new ae(e, this.children_.get(e)) : null
                    }),
                    (ze.prototype.getLastChildName = function (t) {
                        var e = this.resolveIndex_(t)
                        if (e) {
                            var n = e.maxKey()
                            return n && n.name
                        }
                        return this.children_.maxKey()
                    }),
                    (ze.prototype.getLastChild = function (t) {
                        var e = this.getLastChildName(t)
                        return e ? new ae(e, this.children_.get(e)) : null
                    }),
                    (ze.prototype.forEachChild = function (t, e) {
                        var n = this.resolveIndex_(t)
                        return n
                            ? n.inorderTraversal(function (t) {
                                  return e(t.name, t.node)
                              })
                            : this.children_.inorderTraversal(e)
                    }),
                    (ze.prototype.getIterator = function (t) {
                        return this.getIteratorFrom(t.minPost(), t)
                    }),
                    (ze.prototype.getIteratorFrom = function (t, e) {
                        var n = this.resolveIndex_(e)
                        if (n)
                            return n.getIteratorFrom(t, function (t) {
                                return t
                            })
                        for (
                            var r = this.children_.getIteratorFrom(
                                    t.name,
                                    ae.Wrap
                                ),
                                i = r.peek();
                            null != i && e.compare(i, t) < 0;

                        )
                            r.getNext(), (i = r.peek())
                        return r
                    }),
                    (ze.prototype.getReverseIterator = function (t) {
                        return this.getReverseIteratorFrom(t.maxPost(), t)
                    }),
                    (ze.prototype.getReverseIteratorFrom = function (t, e) {
                        var n = this.resolveIndex_(e)
                        if (n)
                            return n.getReverseIteratorFrom(t, function (t) {
                                return t
                            })
                        for (
                            var r = this.children_.getReverseIteratorFrom(
                                    t.name,
                                    ae.Wrap
                                ),
                                i = r.peek();
                            null != i && 0 < e.compare(i, t);

                        )
                            r.getNext(), (i = r.peek())
                        return r
                    }),
                    (ze.prototype.compareTo = function (t) {
                        return this.isEmpty()
                            ? t.isEmpty()
                                ? 0
                                : -1
                            : t.isLeafNode() || t.isEmpty()
                            ? 1
                            : t === Xe
                            ? -1
                            : 0
                    }),
                    (ze.prototype.withIndex = function (t) {
                        if (t === ye || this.indexMap_.hasIndex(t)) return this
                        var e = this.indexMap_.addIndex(t, this.children_)
                        return new ze(this.children_, this.priorityNode_, e)
                    }),
                    (ze.prototype.isIndexed = function (t) {
                        return t === ye || this.indexMap_.hasIndex(t)
                    }),
                    (ze.prototype.equals = function (t) {
                        if (t === this) return !0
                        if (t.isLeafNode()) return !1
                        var e = t
                        if (this.getPriority().equals(e.getPriority())) {
                            if (this.children_.count() !== e.children_.count())
                                return !1
                            for (
                                var n = this.getIterator(Ie),
                                    r = e.getIterator(Ie),
                                    i = n.getNext(),
                                    o = r.getNext();
                                i && o;

                            ) {
                                if (i.name !== o.name || !i.node.equals(o.node))
                                    return !1
                                ;(i = n.getNext()), (o = r.getNext())
                            }
                            return null === i && null === o
                        }
                        return !1
                    }),
                    (ze.prototype.resolveIndex_ = function (t) {
                        return t === ye
                            ? null
                            : this.indexMap_.get(t.toString())
                    }),
                    (ze.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/),
                    ze)
            function ze(t, e, n) {
                ;(this.children_ = t),
                    (this.priorityNode_ = e),
                    (this.indexMap_ = n),
                    (this.lazyHash_ = null),
                    this.priorityNode_ && ge(this.priorityNode_),
                    this.children_.isEmpty() &&
                        C(
                            !this.priorityNode_ || this.priorityNode_.isEmpty(),
                            'An empty node cannot have a priority'
                        )
            }
            function Ge() {
                return (
                    Ke.call(this, new ke(je), Ye.EMPTY_NODE, Ve.Default) || this
                )
            }
            var Xe = new (t(Ge, (Ke = Ye)),
            (Ge.prototype.compareTo = function (t) {
                return t === this ? 0 : 1
            }),
            (Ge.prototype.equals = function (t) {
                return t === this
            }),
            (Ge.prototype.getPriority = function () {
                return this
            }),
            (Ge.prototype.getImmediateChild = function (t) {
                return Ye.EMPTY_NODE
            }),
            (Ge.prototype.isEmpty = function () {
                return !1
            }),
            Ge)()
            Object.defineProperties(ae, {
                MIN: { value: new ae(vt, Ye.EMPTY_NODE) },
                MAX: { value: new ae(gt, Xe) },
            }),
                (de.__EMPTY_NODE = Ye.EMPTY_NODE),
                (be.__childrenNodeConstructor = Ye),
                (_e = Xe),
                (Ee = Xe)
            var $e,
                Je = !0
            function Ze(r, t) {
                if ((void 0 === t && (t = null), null === r))
                    return Ye.EMPTY_NODE
                if (
                    ('object' == typeof r &&
                        '.priority' in r &&
                        (t = r['.priority']),
                    C(
                        null === t ||
                            'string' == typeof t ||
                            'number' == typeof t ||
                            ('object' == typeof t && '.sv' in t),
                        'Invalid priority type found: ' + typeof t
                    ),
                    'object' == typeof r &&
                        '.value' in r &&
                        null !== r['.value'] &&
                        (r = r['.value']),
                    'object' != typeof r || '.sv' in r)
                )
                    return new be(r, Ze(t))
                if (r instanceof Array || !Je) {
                    var i = Ye.EMPTY_NODE
                    return (
                        Et(r, function (t, e) {
                            if (N(r, t) && '.' !== t.substring(0, 1)) {
                                var n = Ze(e)
                                ;(!n.isLeafNode() && n.isEmpty()) ||
                                    (i = i.updateImmediateChild(t, n))
                            }
                        }),
                        i.updatePriority(Ze(t))
                    )
                }
                var o = [],
                    s = !1
                if (
                    (Et(r, function (t, e) {
                        if ('.' !== t.substring(0, 1)) {
                            var n = Ze(e)
                            n.isEmpty() ||
                                ((s = s || !n.getPriority().isEmpty()),
                                o.push(new ae(t, n)))
                        }
                    }),
                    0 === o.length)
                )
                    return Ye.EMPTY_NODE
                var e = qe(
                    o,
                    Be,
                    function (t) {
                        return t.name
                    },
                    je
                )
                if (s) {
                    var n = qe(o, Ie.getCompare())
                    return new Ye(
                        e,
                        Ze(t),
                        new Ve({ '.priority': n }, { '.priority': Ie })
                    )
                }
                return new Ye(e, Ze(t), Ve.Default)
            }
            function tn() {
                return (null !== $e && $e.apply(this, arguments)) || this
            }
            Ce = Ze
            var en,
                nn = new (t(tn, ($e = ue)),
                (tn.prototype.compare = function (t, e) {
                    var n = t.node.compareTo(e.node)
                    return 0 === n ? mt(t.name, e.name) : n
                }),
                (tn.prototype.isDefinedOn = function (t) {
                    return !0
                }),
                (tn.prototype.indexedValueChanged = function (t, e) {
                    return !t.equals(e)
                }),
                (tn.prototype.minPost = function () {
                    return ae.MIN
                }),
                (tn.prototype.maxPost = function () {
                    return ae.MAX
                }),
                (tn.prototype.makePost = function (t, e) {
                    var n = Ze(t)
                    return new ae(e, n)
                }),
                (tn.prototype.toString = function () {
                    return '.value'
                }),
                tn)(),
                rn =
                    (t(on, (en = ue)),
                    (on.prototype.extractChild = function (t) {
                        return t.getChild(this.indexPath_)
                    }),
                    (on.prototype.isDefinedOn = function (t) {
                        return !t.getChild(this.indexPath_).isEmpty()
                    }),
                    (on.prototype.compare = function (t, e) {
                        var n = this.extractChild(t.node),
                            r = this.extractChild(e.node),
                            i = n.compareTo(r)
                        return 0 === i ? mt(t.name, e.name) : i
                    }),
                    (on.prototype.makePost = function (t, e) {
                        var n = Ze(t),
                            r = Ye.EMPTY_NODE.updateChild(this.indexPath_, n)
                        return new ae(e, r)
                    }),
                    (on.prototype.maxPost = function () {
                        var t = Ye.EMPTY_NODE.updateChild(this.indexPath_, Xe)
                        return new ae(gt, t)
                    }),
                    (on.prototype.toString = function () {
                        return this.indexPath_.slice().join('/')
                    }),
                    on)
            function on(t) {
                var e = en.call(this) || this
                return (
                    (e.indexPath_ = t),
                    C(
                        !t.isEmpty() && '.priority' !== t.getFront(),
                        "Can't create PathIndex with empty path or .priority key"
                    ),
                    e
                )
            }
            var sn =
                ((an.prototype.val = function () {
                    return (
                        k('DataSnapshot.val', 0, 0, arguments.length),
                        this.node_.val()
                    )
                }),
                (an.prototype.exportVal = function () {
                    return (
                        k('DataSnapshot.exportVal', 0, 0, arguments.length),
                        this.node_.val(!0)
                    )
                }),
                (an.prototype.toJSON = function () {
                    return (
                        k('DataSnapshot.toJSON', 0, 1, arguments.length),
                        this.exportVal()
                    )
                }),
                (an.prototype.exists = function () {
                    return (
                        k('DataSnapshot.exists', 0, 0, arguments.length),
                        !this.node_.isEmpty()
                    )
                }),
                (an.prototype.child = function (t) {
                    k('DataSnapshot.child', 0, 1, arguments.length),
                        (t = String(t)),
                        jt('DataSnapshot.child', 1, t, !1)
                    var e = new Nt(t),
                        n = this.ref_.child(e)
                    return new an(this.node_.getChild(e), n, Ie)
                }),
                (an.prototype.hasChild = function (t) {
                    k('DataSnapshot.hasChild', 1, 1, arguments.length),
                        jt('DataSnapshot.hasChild', 1, t, !1)
                    var e = new Nt(t)
                    return !this.node_.getChild(e).isEmpty()
                }),
                (an.prototype.getPriority = function () {
                    return (
                        k('DataSnapshot.getPriority', 0, 0, arguments.length),
                        this.node_.getPriority().val()
                    )
                }),
                (an.prototype.forEach = function (n) {
                    var r = this
                    return (
                        k('DataSnapshot.forEach', 1, 1, arguments.length),
                        A('DataSnapshot.forEach', 1, n, !1),
                        !this.node_.isLeafNode() &&
                            !!this.node_.forEachChild(this.index_, function (
                                t,
                                e
                            ) {
                                return n(new an(e, r.ref_.child(t), Ie))
                            })
                    )
                }),
                (an.prototype.hasChildren = function () {
                    return (
                        k('DataSnapshot.hasChildren', 0, 0, arguments.length),
                        !this.node_.isLeafNode() && !this.node_.isEmpty()
                    )
                }),
                Object.defineProperty(an.prototype, 'key', {
                    get: function () {
                        return this.ref_.getKey()
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (an.prototype.numChildren = function () {
                    return (
                        k('DataSnapshot.numChildren', 0, 0, arguments.length),
                        this.node_.numChildren()
                    )
                }),
                (an.prototype.getRef = function () {
                    return (
                        k('DataSnapshot.ref', 0, 0, arguments.length), this.ref_
                    )
                }),
                Object.defineProperty(an.prototype, 'ref', {
                    get: function () {
                        return this.getRef()
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                an)
            function an(t, e, n) {
                ;(this.node_ = t), (this.ref_ = e), (this.index_ = n)
            }
            var hn =
                ((ln.prototype.getPath = function () {
                    var t = this.snapshot.getRef()
                    return 'value' === this.eventType
                        ? t.path
                        : t.getParent().path
                }),
                (ln.prototype.getEventType = function () {
                    return this.eventType
                }),
                (ln.prototype.getEventRunner = function () {
                    return this.eventRegistration.getEventRunner(this)
                }),
                (ln.prototype.toString = function () {
                    return (
                        this.getPath().toString() +
                        ':' +
                        this.eventType +
                        ':' +
                        T(this.snapshot.exportVal())
                    )
                }),
                ln)
            function ln(t, e, n, r) {
                ;(this.eventType = t),
                    (this.eventRegistration = e),
                    (this.snapshot = n),
                    (this.prevName = r)
            }
            var un =
                ((cn.prototype.getPath = function () {
                    return this.path
                }),
                (cn.prototype.getEventType = function () {
                    return 'cancel'
                }),
                (cn.prototype.getEventRunner = function () {
                    return this.eventRegistration.getEventRunner(this)
                }),
                (cn.prototype.toString = function () {
                    return this.path.toString() + ':cancel'
                }),
                cn)
            function cn(t, e, n) {
                ;(this.eventRegistration = t), (this.error = e), (this.path = n)
            }
            var pn =
                ((dn.prototype.respondsTo = function (t) {
                    return 'value' === t
                }),
                (dn.prototype.createEvent = function (t, e) {
                    var n = e.getQueryParams().getIndex()
                    return new hn(
                        'value',
                        this,
                        new sn(t.snapshotNode, e.getRef(), n)
                    )
                }),
                (dn.prototype.getEventRunner = function (t) {
                    var e = this.context_
                    if ('cancel' === t.getEventType()) {
                        C(
                            this.cancelCallback_,
                            'Raising a cancel event on a listener with no cancel callback'
                        )
                        var n = this.cancelCallback_
                        return function () {
                            n.call(e, t.error)
                        }
                    }
                    var r = this.callback_
                    return function () {
                        r.call(e, t.snapshot)
                    }
                }),
                (dn.prototype.createCancelEvent = function (t, e) {
                    return this.cancelCallback_ ? new un(this, t, e) : null
                }),
                (dn.prototype.matches = function (t) {
                    return (
                        t instanceof dn &&
                        (!t.callback_ ||
                            !this.callback_ ||
                            (t.callback_ === this.callback_ &&
                                t.context_ === this.context_))
                    )
                }),
                (dn.prototype.hasAnyCallback = function () {
                    return null !== this.callback_
                }),
                dn)
            function dn(t, e, n) {
                ;(this.callback_ = t),
                    (this.cancelCallback_ = e),
                    (this.context_ = n)
            }
            var fn,
                _n =
                    ((yn.prototype.respondsTo = function (t) {
                        var e = 'children_added' === t ? 'child_added' : t
                        return (
                            (e =
                                'children_removed' === e ? 'child_removed' : e),
                            N(this.callbacks_, e)
                        )
                    }),
                    (yn.prototype.createCancelEvent = function (t, e) {
                        return this.cancelCallback_ ? new un(this, t, e) : null
                    }),
                    (yn.prototype.createEvent = function (t, e) {
                        C(
                            null != t.childName,
                            'Child events should have a childName.'
                        )
                        var n = e.getRef().child(t.childName),
                            r = e.getQueryParams().getIndex()
                        return new hn(
                            t.type,
                            this,
                            new sn(t.snapshotNode, n, r),
                            t.prevName
                        )
                    }),
                    (yn.prototype.getEventRunner = function (t) {
                        var e = this.context_
                        if ('cancel' === t.getEventType()) {
                            C(
                                this.cancelCallback_,
                                'Raising a cancel event on a listener with no cancel callback'
                            )
                            var n = this.cancelCallback_
                            return function () {
                                n.call(e, t.error)
                            }
                        }
                        var r = this.callbacks_[t.eventType]
                        return function () {
                            r.call(e, t.snapshot, t.prevName)
                        }
                    }),
                    (yn.prototype.matches = function (e) {
                        var n = this
                        if (e instanceof yn) {
                            if (!this.callbacks_ || !e.callbacks_) return !0
                            if (this.context_ === e.context_) {
                                var t = Object.keys(e.callbacks_),
                                    r = Object.keys(this.callbacks_),
                                    i = t.length
                                if (i === r.length) {
                                    if (1 !== i)
                                        return r.every(function (t) {
                                            return (
                                                e.callbacks_[t] ===
                                                n.callbacks_[t]
                                            )
                                        })
                                    var o = t[0],
                                        s = r[0]
                                    return !(
                                        s !== o ||
                                        (e.callbacks_[o] &&
                                            this.callbacks_[s] &&
                                            e.callbacks_[o] !==
                                                this.callbacks_[s])
                                    )
                                }
                            }
                        }
                        return !1
                    }),
                    (yn.prototype.hasAnyCallback = function () {
                        return null !== this.callbacks_
                    }),
                    yn)
            function yn(t, e, n) {
                ;(this.callbacks_ = t),
                    (this.cancelCallback_ = e),
                    (this.context_ = n)
            }
            var vn =
                (Object.defineProperty(gn, '__referenceConstructor', {
                    get: function () {
                        return C(fn, 'Reference.ts has not been loaded'), fn
                    },
                    set: function (t) {
                        fn = t
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (gn.validateQueryEndpoints_ = function (t) {
                    var e = null,
                        n = null
                    if (
                        (t.hasStart() && (e = t.getIndexStartValue()),
                        t.hasEnd() && (n = t.getIndexEndValue()),
                        t.getIndex() === ye)
                    ) {
                        var r =
                                'Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().',
                            i =
                                'Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.'
                        if (t.hasStart()) {
                            if (t.getIndexStartName() !== vt) throw new Error(r)
                            if ('string' != typeof e) throw new Error(i)
                        }
                        if (t.hasEnd()) {
                            if (t.getIndexEndName() !== gt) throw new Error(r)
                            if ('string' != typeof n) throw new Error(i)
                        }
                    } else if (t.getIndex() === Ie) {
                        if ((null != e && !Qt(e)) || (null != n && !Qt(n)))
                            throw new Error(
                                'Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).'
                            )
                    } else if (
                        (C(
                            t.getIndex() instanceof rn || t.getIndex() === nn,
                            'unknown index type.'
                        ),
                        (null != e && 'object' == typeof e) ||
                            (null != n && 'object' == typeof n))
                    )
                        throw new Error(
                            'Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.'
                        )
                }),
                (gn.validateLimit_ = function (t) {
                    if (
                        t.hasStart() &&
                        t.hasEnd() &&
                        t.hasLimit() &&
                        !t.hasAnchoredLimit()
                    )
                        throw new Error(
                            "Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead."
                        )
                }),
                (gn.prototype.validateNoPreviousOrderByCall_ = function (t) {
                    if (!0 === this.orderByCalled_)
                        throw new Error(
                            t + ": You can't combine multiple orderBy calls."
                        )
                }),
                (gn.prototype.getQueryParams = function () {
                    return this.queryParams_
                }),
                (gn.prototype.getRef = function () {
                    return (
                        k('Query.ref', 0, 0, arguments.length),
                        new gn.__referenceConstructor(this.repo, this.path)
                    )
                }),
                (gn.prototype.on = function (t, e, n, r) {
                    k('Query.on', 2, 4, arguments.length),
                        Ht('Query.on', 1, t, !1),
                        A('Query.on', 2, e, !1)
                    var i = gn.getCancelAndContextArgs_('Query.on', n, r)
                    if ('value' === t) this.onValueEvent(e, i.cancel, i.context)
                    else {
                        var o = {}
                        ;(o[t] = e), this.onChildEvent(o, i.cancel, i.context)
                    }
                    return e
                }),
                (gn.prototype.onValueEvent = function (t, e, n) {
                    var r = new pn(t, e || null, n || null)
                    this.repo.addEventCallbackForQuery(this, r)
                }),
                (gn.prototype.onChildEvent = function (t, e, n) {
                    var r = new _n(t, e, n)
                    this.repo.addEventCallbackForQuery(this, r)
                }),
                (gn.prototype.off = function (t, e, n) {
                    k('Query.off', 0, 3, arguments.length),
                        Ht('Query.off', 1, t, !0),
                        A('Query.off', 2, e, !0),
                        L('Query.off', 3, n, !0)
                    var r = null,
                        i = null
                    'value' === t
                        ? (r = new pn(e || null, null, n || null))
                        : t &&
                          (e && ((i = {})[t] = e),
                          (r = new _n(i, null, n || null))),
                        this.repo.removeEventCallbackForQuery(this, r)
                }),
                (gn.prototype.once = function (e, n, t, r) {
                    var i = this
                    k('Query.once', 1, 4, arguments.length),
                        Ht('Query.once', 1, e, !1),
                        A('Query.once', 2, n, !0)
                    var o = gn.getCancelAndContextArgs_('Query.once', t, r),
                        s = !0,
                        a = new p()
                    a.promise.catch(function () {})
                    var h = function (t) {
                        s &&
                            ((s = !1),
                            i.off(e, h),
                            n && n.bind(o.context)(t),
                            a.resolve(t))
                    }
                    return (
                        this.on(e, h, function (t) {
                            i.off(e, h),
                                o.cancel && o.cancel.bind(o.context)(t),
                                a.reject(t)
                        }),
                        a.promise
                    )
                }),
                (gn.prototype.limitToFirst = function (t) {
                    if (
                        (k('Query.limitToFirst', 1, 1, arguments.length),
                        'number' != typeof t || Math.floor(t) !== t || t <= 0)
                    )
                        throw new Error(
                            'Query.limitToFirst: First argument must be a positive integer.'
                        )
                    if (this.queryParams_.hasLimit())
                        throw new Error(
                            'Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).'
                        )
                    return new gn(
                        this.repo,
                        this.path,
                        this.queryParams_.limitToFirst(t),
                        this.orderByCalled_
                    )
                }),
                (gn.prototype.limitToLast = function (t) {
                    if (
                        (k('Query.limitToLast', 1, 1, arguments.length),
                        'number' != typeof t || Math.floor(t) !== t || t <= 0)
                    )
                        throw new Error(
                            'Query.limitToLast: First argument must be a positive integer.'
                        )
                    if (this.queryParams_.hasLimit())
                        throw new Error(
                            'Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).'
                        )
                    return new gn(
                        this.repo,
                        this.path,
                        this.queryParams_.limitToLast(t),
                        this.orderByCalled_
                    )
                }),
                (gn.prototype.orderByChild = function (t) {
                    if (
                        (k('Query.orderByChild', 1, 1, arguments.length),
                        '$key' === t)
                    )
                        throw new Error(
                            'Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.'
                        )
                    if ('$priority' === t)
                        throw new Error(
                            'Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.'
                        )
                    if ('$value' === t)
                        throw new Error(
                            'Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.'
                        )
                    jt('Query.orderByChild', 1, t, !1),
                        this.validateNoPreviousOrderByCall_(
                            'Query.orderByChild'
                        )
                    var e = new Nt(t)
                    if (e.isEmpty())
                        throw new Error(
                            'Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.'
                        )
                    var n = new rn(e),
                        r = this.queryParams_.orderBy(n)
                    return (
                        gn.validateQueryEndpoints_(r),
                        new gn(this.repo, this.path, r, !0)
                    )
                }),
                (gn.prototype.orderByKey = function () {
                    k('Query.orderByKey', 0, 0, arguments.length),
                        this.validateNoPreviousOrderByCall_('Query.orderByKey')
                    var t = this.queryParams_.orderBy(ye)
                    return (
                        gn.validateQueryEndpoints_(t),
                        new gn(this.repo, this.path, t, !0)
                    )
                }),
                (gn.prototype.orderByPriority = function () {
                    k('Query.orderByPriority', 0, 0, arguments.length),
                        this.validateNoPreviousOrderByCall_(
                            'Query.orderByPriority'
                        )
                    var t = this.queryParams_.orderBy(Ie)
                    return (
                        gn.validateQueryEndpoints_(t),
                        new gn(this.repo, this.path, t, !0)
                    )
                }),
                (gn.prototype.orderByValue = function () {
                    k('Query.orderByValue', 0, 0, arguments.length),
                        this.validateNoPreviousOrderByCall_(
                            'Query.orderByValue'
                        )
                    var t = this.queryParams_.orderBy(nn)
                    return (
                        gn.validateQueryEndpoints_(t),
                        new gn(this.repo, this.path, t, !0)
                    )
                }),
                (gn.prototype.startAt = function (t, e) {
                    void 0 === t && (t = null),
                        k('Query.startAt', 0, 2, arguments.length),
                        qt('Query.startAt', 1, t, this.path, !0),
                        Bt('Query.startAt', 2, e, !0)
                    var n = this.queryParams_.startAt(t, e)
                    if (
                        (gn.validateLimit_(n),
                        gn.validateQueryEndpoints_(n),
                        this.queryParams_.hasStart())
                    )
                        throw new Error(
                            'Query.startAt: Starting point was already set (by another call to startAt or equalTo).'
                        )
                    return (
                        void 0 === t && (e = t = null),
                        new gn(this.repo, this.path, n, this.orderByCalled_)
                    )
                }),
                (gn.prototype.endAt = function (t, e) {
                    void 0 === t && (t = null),
                        k('Query.endAt', 0, 2, arguments.length),
                        qt('Query.endAt', 1, t, this.path, !0),
                        Bt('Query.endAt', 2, e, !0)
                    var n = this.queryParams_.endAt(t, e)
                    if (
                        (gn.validateLimit_(n),
                        gn.validateQueryEndpoints_(n),
                        this.queryParams_.hasEnd())
                    )
                        throw new Error(
                            'Query.endAt: Ending point was already set (by another call to endAt or equalTo).'
                        )
                    return new gn(this.repo, this.path, n, this.orderByCalled_)
                }),
                (gn.prototype.equalTo = function (t, e) {
                    if (
                        (k('Query.equalTo', 1, 2, arguments.length),
                        qt('Query.equalTo', 1, t, this.path, !1),
                        Bt('Query.equalTo', 2, e, !0),
                        this.queryParams_.hasStart())
                    )
                        throw new Error(
                            'Query.equalTo: Starting point was already set (by another call to startAt or equalTo).'
                        )
                    if (this.queryParams_.hasEnd())
                        throw new Error(
                            'Query.equalTo: Ending point was already set (by another call to endAt or equalTo).'
                        )
                    return this.startAt(t, e).endAt(t, e)
                }),
                (gn.prototype.toString = function () {
                    return (
                        k('Query.toString', 0, 0, arguments.length),
                        this.repo.toString() + this.path.toUrlEncodedString()
                    )
                }),
                (gn.prototype.toJSON = function () {
                    return (
                        k('Query.toJSON', 0, 1, arguments.length),
                        this.toString()
                    )
                }),
                (gn.prototype.queryObject = function () {
                    return this.queryParams_.getQueryObject()
                }),
                (gn.prototype.queryIdentifier = function () {
                    var t = this.queryObject(),
                        e = Ct(t)
                    return '{}' === e ? 'default' : e
                }),
                (gn.prototype.isEqual = function (t) {
                    if (
                        (k('Query.isEqual', 1, 1, arguments.length),
                        !(t instanceof gn))
                    )
                        throw new Error(
                            'Query.isEqual failed: First argument must be an instance of firebase.database.Query.'
                        )
                    var e = this.repo === t.repo,
                        n = this.path.equals(t.path),
                        r = this.queryIdentifier() === t.queryIdentifier()
                    return e && n && r
                }),
                (gn.getCancelAndContextArgs_ = function (t, e, n) {
                    var r = { cancel: null, context: null }
                    if (e && n)
                        (r.cancel = e),
                            A(t, 3, r.cancel, !0),
                            (r.context = n),
                            L(t, 4, r.context, !0)
                    else if (e)
                        if ('object' == typeof e && null !== e) r.context = e
                        else {
                            if ('function' != typeof e)
                                throw new Error(
                                    F(t, 3, !0) +
                                        ' must either be a cancel callback or a context object.'
                                )
                            r.cancel = e
                        }
                    return r
                }),
                Object.defineProperty(gn.prototype, 'ref', {
                    get: function () {
                        return this.getRef()
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                gn)
            function gn(t, e, n, r) {
                ;(this.repo = t),
                    (this.path = e),
                    (this.queryParams_ = n),
                    (this.orderByCalled_ = r)
            }
            var mn =
                ((Cn.prototype.find = function (t) {
                    if (null != this.value) return this.value.getChild(t)
                    if (!t.isEmpty() && 0 < this.children.size) {
                        var e = t.getFront()
                        return (
                            (t = t.popFront()),
                            this.children.has(e)
                                ? this.children.get(e).find(t)
                                : null
                        )
                    }
                    return null
                }),
                (Cn.prototype.remember = function (t, e) {
                    if (t.isEmpty()) (this.value = e), this.children.clear()
                    else if (null !== this.value)
                        this.value = this.value.updateChild(t, e)
                    else {
                        var n = t.getFront()
                        this.children.has(n) || this.children.set(n, new Cn())
                        var r = this.children.get(n)
                        ;(t = t.popFront()), r.remember(t, e)
                    }
                }),
                (Cn.prototype.forget = function (t) {
                    if (t.isEmpty())
                        return (this.value = null), this.children.clear(), !0
                    if (null !== this.value) {
                        if (this.value.isLeafNode()) return !1
                        var e = this.value
                        this.value = null
                        var n = this
                        return (
                            e.forEachChild(Ie, function (t, e) {
                                n.remember(new Nt(t), e)
                            }),
                            this.forget(t)
                        )
                    }
                    if (0 < this.children.size) {
                        var r = t.getFront()
                        return (
                            (t = t.popFront()),
                            !this.children.has(r) ||
                                (this.children.get(r).forget(t) &&
                                    this.children.delete(r)),
                            0 === this.children.size
                        )
                    }
                    return !0
                }),
                (Cn.prototype.forEachTree = function (r, i) {
                    null !== this.value
                        ? i(r, this.value)
                        : this.forEachChild(function (t, e) {
                              var n = new Nt(r.toString() + '/' + t)
                              e.forEachTree(n, i)
                          })
                }),
                (Cn.prototype.forEachChild = function (n) {
                    this.children.forEach(function (t, e) {
                        n(e, t)
                    })
                }),
                Cn)
            function Cn() {
                ;(this.value = null), (this.children = new Map())
            }
            function En(t, e) {
                return t && 'object' == typeof t
                    ? (C(
                          '.sv' in t,
                          'Unexpected leaf node or priority contents'
                      ),
                      e[t['.sv']])
                    : t
            }
            var wn,
                bn,
                Sn = function (t, r) {
                    var i,
                        e = t.getPriority().val(),
                        n = En(e, r)
                    if (t.isLeafNode()) {
                        var o = t,
                            s = En(o.getValue(), r)
                        return s !== o.getValue() || n !== o.getPriority().val()
                            ? new be(s, Ze(n))
                            : t
                    }
                    var a = t
                    return (
                        n !== (i = a).getPriority().val() &&
                            (i = i.updatePriority(new be(n))),
                        a.forEachChild(Ie, function (t, e) {
                            var n = Sn(e, r)
                            n !== e && (i = i.updateImmediateChild(t, n))
                        }),
                        i
                    )
                }
            ;((bn = wn = wn || {})[(bn.OVERWRITE = 0)] = 'OVERWRITE'),
                (bn[(bn.MERGE = 1)] = 'MERGE'),
                (bn[(bn.ACK_USER_WRITE = 2)] = 'ACK_USER_WRITE'),
                (bn[(bn.LISTEN_COMPLETE = 3)] = 'LISTEN_COMPLETE')
            var Tn =
                ((In.User = new In(!0, !1, null, !1)),
                (In.Server = new In(!1, !0, null, !1)),
                (In.forServerTaggedQuery = function (t) {
                    return new In(!1, !0, t, !0)
                }),
                In)
            function In(t, e, n, r) {
                ;(this.fromUser = t),
                    (this.fromServer = e),
                    (this.queryId = n),
                    (this.tagged = r),
                    C(!r || e, 'Tagged queries must be from server.')
            }
            var Nn,
                Rn =
                    ((Pn.prototype.operationForChild = function (t) {
                        if (this.path.isEmpty()) {
                            if (null != this.affectedTree.value)
                                return (
                                    C(
                                        this.affectedTree.children.isEmpty(),
                                        'affectedTree should not have overlapping affected paths.'
                                    ),
                                    this
                                )
                            var e = this.affectedTree.subtree(new Nt(t))
                            return new Pn(Nt.Empty, e, this.revert)
                        }
                        return (
                            C(
                                this.path.getFront() === t,
                                'operationForChild called for unrelated child.'
                            ),
                            new Pn(
                                this.path.popFront(),
                                this.affectedTree,
                                this.revert
                            )
                        )
                    }),
                    Pn)
            function Pn(t, e, n) {
                ;(this.path = t),
                    (this.affectedTree = e),
                    (this.revert = n),
                    (this.type = wn.ACK_USER_WRITE),
                    (this.source = Tn.User)
            }
            var Dn =
                ((On.fromObject = function (t) {
                    var n = On.Empty
                    return (
                        Et(t, function (t, e) {
                            n = n.set(new Nt(t), e)
                        }),
                        n
                    )
                }),
                (On.prototype.isEmpty = function () {
                    return null === this.value && this.children.isEmpty()
                }),
                (On.prototype.findRootMostMatchingPathAndValue = function (
                    t,
                    e
                ) {
                    if (null != this.value && e(this.value))
                        return { path: Nt.Empty, value: this.value }
                    if (t.isEmpty()) return null
                    var n = t.getFront(),
                        r = this.children.get(n)
                    if (null === r) return null
                    var i = r.findRootMostMatchingPathAndValue(t.popFront(), e)
                    return null == i
                        ? null
                        : { path: new Nt(n).child(i.path), value: i.value }
                }),
                (On.prototype.findRootMostValueAndPath = function (t) {
                    return this.findRootMostMatchingPathAndValue(
                        t,
                        function () {
                            return !0
                        }
                    )
                }),
                (On.prototype.subtree = function (t) {
                    if (t.isEmpty()) return this
                    var e = t.getFront(),
                        n = this.children.get(e)
                    return null !== n ? n.subtree(t.popFront()) : On.Empty
                }),
                (On.prototype.set = function (t, e) {
                    if (t.isEmpty()) return new On(e, this.children)
                    var n = t.getFront(),
                        r = (this.children.get(n) || On.Empty).set(
                            t.popFront(),
                            e
                        ),
                        i = this.children.insert(n, r)
                    return new On(this.value, i)
                }),
                (On.prototype.remove = function (t) {
                    if (t.isEmpty())
                        return this.children.isEmpty()
                            ? On.Empty
                            : new On(null, this.children)
                    var e = t.getFront(),
                        n = this.children.get(e)
                    if (n) {
                        var r = n.remove(t.popFront()),
                            i = void 0
                        return (
                            (i = r.isEmpty()
                                ? this.children.remove(e)
                                : this.children.insert(e, r)),
                            null === this.value && i.isEmpty()
                                ? On.Empty
                                : new On(this.value, i)
                        )
                    }
                    return this
                }),
                (On.prototype.get = function (t) {
                    if (t.isEmpty()) return this.value
                    var e = t.getFront(),
                        n = this.children.get(e)
                    return n ? n.get(t.popFront()) : null
                }),
                (On.prototype.setTree = function (t, e) {
                    if (t.isEmpty()) return e
                    var n = t.getFront(),
                        r = (this.children.get(n) || On.Empty).setTree(
                            t.popFront(),
                            e
                        ),
                        i = void 0
                    return (
                        (i = r.isEmpty()
                            ? this.children.remove(n)
                            : this.children.insert(n, r)),
                        new On(this.value, i)
                    )
                }),
                (On.prototype.fold = function (t) {
                    return this.fold_(Nt.Empty, t)
                }),
                (On.prototype.fold_ = function (n, r) {
                    var i = {}
                    return (
                        this.children.inorderTraversal(function (t, e) {
                            i[t] = e.fold_(n.child(t), r)
                        }),
                        r(n, this.value, i)
                    )
                }),
                (On.prototype.findOnPath = function (t, e) {
                    return this.findOnPath_(t, Nt.Empty, e)
                }),
                (On.prototype.findOnPath_ = function (t, e, n) {
                    var r = !!this.value && n(e, this.value)
                    if (r) return r
                    if (t.isEmpty()) return null
                    var i = t.getFront(),
                        o = this.children.get(i)
                    return o ? o.findOnPath_(t.popFront(), e.child(i), n) : null
                }),
                (On.prototype.foreachOnPath = function (t, e) {
                    return this.foreachOnPath_(t, Nt.Empty, e)
                }),
                (On.prototype.foreachOnPath_ = function (t, e, n) {
                    if (t.isEmpty()) return this
                    this.value && n(e, this.value)
                    var r = t.getFront(),
                        i = this.children.get(r)
                    return i
                        ? i.foreachOnPath_(t.popFront(), e.child(r), n)
                        : On.Empty
                }),
                (On.prototype.foreach = function (t) {
                    this.foreach_(Nt.Empty, t)
                }),
                (On.prototype.foreach_ = function (n, r) {
                    this.children.inorderTraversal(function (t, e) {
                        e.foreach_(n.child(t), r)
                    }),
                        this.value && r(n, this.value)
                }),
                (On.prototype.foreachChild = function (n) {
                    this.children.inorderTraversal(function (t, e) {
                        e.value && n(t, e.value)
                    })
                }),
                (On.Empty = new On(null)),
                On)
            function On(t, e) {
                void 0 === e && (e = Nn = Nn || new ke(st)),
                    (this.value = t),
                    (this.children = e)
            }
            var xn =
                ((kn.prototype.operationForChild = function (t) {
                    return this.path.isEmpty()
                        ? new kn(this.source, Nt.Empty)
                        : new kn(this.source, this.path.popFront())
                }),
                kn)
            function kn(t, e) {
                ;(this.source = t),
                    (this.path = e),
                    (this.type = wn.LISTEN_COMPLETE)
            }
            var Fn =
                ((An.prototype.operationForChild = function (t) {
                    return this.path.isEmpty()
                        ? new An(
                              this.source,
                              Nt.Empty,
                              this.snap.getImmediateChild(t)
                          )
                        : new An(this.source, this.path.popFront(), this.snap)
                }),
                An)
            function An(t, e, n) {
                ;(this.source = t),
                    (this.path = e),
                    (this.snap = n),
                    (this.type = wn.OVERWRITE)
            }
            var Ln =
                ((Mn.prototype.operationForChild = function (t) {
                    if (this.path.isEmpty()) {
                        var e = this.children.subtree(new Nt(t))
                        return e.isEmpty()
                            ? null
                            : e.value
                            ? new Fn(this.source, Nt.Empty, e.value)
                            : new Mn(this.source, Nt.Empty, e)
                    }
                    return (
                        C(
                            this.path.getFront() === t,
                            "Can't get a merge for a child not on the path of the operation"
                        ),
                        new Mn(this.source, this.path.popFront(), this.children)
                    )
                }),
                (Mn.prototype.toString = function () {
                    return (
                        'Operation(' +
                        this.path +
                        ': ' +
                        this.source.toString() +
                        ' merge: ' +
                        this.children.toString() +
                        ')'
                    )
                }),
                Mn)
            function Mn(t, e, n) {
                ;(this.source = t),
                    (this.path = e),
                    (this.children = n),
                    (this.type = wn.MERGE)
            }
            var Wn =
                ((Qn.prototype.isFullyInitialized = function () {
                    return this.fullyInitialized_
                }),
                (Qn.prototype.isFiltered = function () {
                    return this.filtered_
                }),
                (Qn.prototype.isCompleteForPath = function (t) {
                    if (t.isEmpty())
                        return this.isFullyInitialized() && !this.filtered_
                    var e = t.getFront()
                    return this.isCompleteForChild(e)
                }),
                (Qn.prototype.isCompleteForChild = function (t) {
                    return (
                        (this.isFullyInitialized() && !this.filtered_) ||
                        this.node_.hasChild(t)
                    )
                }),
                (Qn.prototype.getNode = function () {
                    return this.node_
                }),
                Qn)
            function Qn(t, e, n) {
                ;(this.node_ = t),
                    (this.fullyInitialized_ = e),
                    (this.filtered_ = n)
            }
            var qn =
                ((Un.prototype.updateEventSnap = function (t, e, n) {
                    return new Un(new Wn(t, e, n), this.serverCache_)
                }),
                (Un.prototype.updateServerSnap = function (t, e, n) {
                    return new Un(this.eventCache_, new Wn(t, e, n))
                }),
                (Un.prototype.getEventCache = function () {
                    return this.eventCache_
                }),
                (Un.prototype.getCompleteEventSnap = function () {
                    return this.eventCache_.isFullyInitialized()
                        ? this.eventCache_.getNode()
                        : null
                }),
                (Un.prototype.getServerCache = function () {
                    return this.serverCache_
                }),
                (Un.prototype.getCompleteServerSnap = function () {
                    return this.serverCache_.isFullyInitialized()
                        ? this.serverCache_.getNode()
                        : null
                }),
                (Un.Empty = new Un(
                    new Wn(Ye.EMPTY_NODE, !1, !1),
                    new Wn(Ye.EMPTY_NODE, !1, !1)
                )),
                Un)
            function Un(t, e) {
                ;(this.eventCache_ = t), (this.serverCache_ = e)
            }
            var Vn =
                ((Hn.valueChange = function (t) {
                    return new Hn(Hn.VALUE, t)
                }),
                (Hn.childAddedChange = function (t, e) {
                    return new Hn(Hn.CHILD_ADDED, e, t)
                }),
                (Hn.childRemovedChange = function (t, e) {
                    return new Hn(Hn.CHILD_REMOVED, e, t)
                }),
                (Hn.childChangedChange = function (t, e, n) {
                    return new Hn(Hn.CHILD_CHANGED, e, t, n)
                }),
                (Hn.childMovedChange = function (t, e) {
                    return new Hn(Hn.CHILD_MOVED, e, t)
                }),
                (Hn.CHILD_ADDED = 'child_added'),
                (Hn.CHILD_REMOVED = 'child_removed'),
                (Hn.CHILD_CHANGED = 'child_changed'),
                (Hn.CHILD_MOVED = 'child_moved'),
                (Hn.VALUE = 'value'),
                Hn)
            function Hn(t, e, n, r, i) {
                ;(this.type = t),
                    (this.snapshotNode = e),
                    (this.childName = n),
                    (this.oldSnap = r),
                    (this.prevName = i)
            }
            var Bn =
                ((jn.prototype.updateChild = function (t, e, n, r, i, o) {
                    C(
                        t.isIndexed(this.index_),
                        'A node must be indexed if only a child is updated'
                    )
                    var s = t.getImmediateChild(e)
                    return s.getChild(r).equals(n.getChild(r)) &&
                        s.isEmpty() === n.isEmpty()
                        ? t
                        : (null != o &&
                              (n.isEmpty()
                                  ? t.hasChild(e)
                                      ? o.trackChildChange(
                                            Vn.childRemovedChange(e, s)
                                        )
                                      : C(
                                            t.isLeafNode(),
                                            'A child remove without an old child only makes sense on a leaf node'
                                        )
                                  : s.isEmpty()
                                  ? o.trackChildChange(
                                        Vn.childAddedChange(e, n)
                                    )
                                  : o.trackChildChange(
                                        Vn.childChangedChange(e, n, s)
                                    )),
                          t.isLeafNode() && n.isEmpty()
                              ? t
                              : t
                                    .updateImmediateChild(e, n)
                                    .withIndex(this.index_))
                }),
                (jn.prototype.updateFullNode = function (r, n, i) {
                    return (
                        null != i &&
                            (r.isLeafNode() ||
                                r.forEachChild(Ie, function (t, e) {
                                    n.hasChild(t) ||
                                        i.trackChildChange(
                                            Vn.childRemovedChange(t, e)
                                        )
                                }),
                            n.isLeafNode() ||
                                n.forEachChild(Ie, function (t, e) {
                                    if (r.hasChild(t)) {
                                        var n = r.getImmediateChild(t)
                                        n.equals(e) ||
                                            i.trackChildChange(
                                                Vn.childChangedChange(t, e, n)
                                            )
                                    } else i.trackChildChange(Vn.childAddedChange(t, e))
                                })),
                        n.withIndex(this.index_)
                    )
                }),
                (jn.prototype.updatePriority = function (t, e) {
                    return t.isEmpty() ? Ye.EMPTY_NODE : t.updatePriority(e)
                }),
                (jn.prototype.filtersNodes = function () {
                    return !1
                }),
                (jn.prototype.getIndexedFilter = function () {
                    return this
                }),
                (jn.prototype.getIndex = function () {
                    return this.index_
                }),
                jn)
            function jn(t) {
                this.index_ = t
            }
            var Kn =
                ((Yn.prototype.trackChildChange = function (t) {
                    var e = t.type,
                        n = t.childName
                    C(
                        e === Vn.CHILD_ADDED ||
                            e === Vn.CHILD_CHANGED ||
                            e === Vn.CHILD_REMOVED,
                        'Only child changes supported for tracking'
                    ),
                        C(
                            '.priority' !== n,
                            'Only non-priority child changes can be tracked.'
                        )
                    var r = this.changeMap.get(n)
                    if (r) {
                        var i = r.type
                        if (e === Vn.CHILD_ADDED && i === Vn.CHILD_REMOVED)
                            this.changeMap.set(
                                n,
                                Vn.childChangedChange(
                                    n,
                                    t.snapshotNode,
                                    r.snapshotNode
                                )
                            )
                        else if (e === Vn.CHILD_REMOVED && i === Vn.CHILD_ADDED)
                            this.changeMap.delete(n)
                        else if (
                            e === Vn.CHILD_REMOVED &&
                            i === Vn.CHILD_CHANGED
                        )
                            this.changeMap.set(
                                n,
                                Vn.childRemovedChange(n, r.oldSnap)
                            )
                        else if (e === Vn.CHILD_CHANGED && i === Vn.CHILD_ADDED)
                            this.changeMap.set(
                                n,
                                Vn.childAddedChange(n, t.snapshotNode)
                            )
                        else {
                            if (
                                e !== Vn.CHILD_CHANGED ||
                                i !== Vn.CHILD_CHANGED
                            )
                                throw c(
                                    'Illegal combination of changes: ' +
                                        t +
                                        ' occurred after ' +
                                        r
                                )
                            this.changeMap.set(
                                n,
                                Vn.childChangedChange(
                                    n,
                                    t.snapshotNode,
                                    r.oldSnap
                                )
                            )
                        }
                    } else this.changeMap.set(n, t)
                }),
                (Yn.prototype.getChanges = function () {
                    return Array.from(this.changeMap.values())
                }),
                Yn)
            function Yn() {
                this.changeMap = new Map()
            }
            function zn() {}
            var Gn = new ((zn.prototype.getCompleteChild = function (t) {
                    return null
                }),
                (zn.prototype.getChildAfterChild = function (t, e, n) {
                    return null
                }),
                zn)(),
                Xn =
                    (($n.prototype.getCompleteChild = function (t) {
                        var e = this.viewCache_.getEventCache()
                        if (e.isCompleteForChild(t))
                            return e.getNode().getImmediateChild(t)
                        var n =
                            null != this.optCompleteServerCache_
                                ? new Wn(this.optCompleteServerCache_, !0, !1)
                                : this.viewCache_.getServerCache()
                        return this.writes_.calcCompleteChild(t, n)
                    }),
                    ($n.prototype.getChildAfterChild = function (t, e, n) {
                        var r =
                                null != this.optCompleteServerCache_
                                    ? this.optCompleteServerCache_
                                    : this.viewCache_.getCompleteServerSnap(),
                            i = this.writes_.calcIndexedSlice(r, e, 1, n, t)
                        return 0 === i.length ? null : i[0]
                    }),
                    $n)
            function $n(t, e, n) {
                void 0 === n && (n = null),
                    (this.writes_ = t),
                    (this.viewCache_ = e),
                    (this.optCompleteServerCache_ = n)
            }
            var Jn = function (t, e) {
                    ;(this.viewCache = t), (this.changes = e)
                },
                Zn =
                    ((tr.prototype.assertIndexed = function (t) {
                        C(
                            t
                                .getEventCache()
                                .getNode()
                                .isIndexed(this.filter_.getIndex()),
                            'Event snap not indexed'
                        ),
                            C(
                                t
                                    .getServerCache()
                                    .getNode()
                                    .isIndexed(this.filter_.getIndex()),
                                'Server snap not indexed'
                            )
                    }),
                    (tr.prototype.applyOperation = function (t, e, n, r) {
                        var i,
                            o,
                            s = new Kn()
                        if (e.type === wn.OVERWRITE) {
                            var a = e
                            i = a.source.fromUser
                                ? this.applyUserOverwrite_(
                                      t,
                                      a.path,
                                      a.snap,
                                      n,
                                      r,
                                      s
                                  )
                                : (C(a.source.fromServer, 'Unknown source.'),
                                  (o =
                                      a.source.tagged ||
                                      (t.getServerCache().isFiltered() &&
                                          !a.path.isEmpty())),
                                  this.applyServerOverwrite_(
                                      t,
                                      a.path,
                                      a.snap,
                                      n,
                                      r,
                                      o,
                                      s
                                  ))
                        } else if (e.type === wn.MERGE) {
                            var h = e
                            i = h.source.fromUser
                                ? this.applyUserMerge_(
                                      t,
                                      h.path,
                                      h.children,
                                      n,
                                      r,
                                      s
                                  )
                                : (C(h.source.fromServer, 'Unknown source.'),
                                  (o =
                                      h.source.tagged ||
                                      t.getServerCache().isFiltered()),
                                  this.applyServerMerge_(
                                      t,
                                      h.path,
                                      h.children,
                                      n,
                                      r,
                                      o,
                                      s
                                  ))
                        } else if (e.type === wn.ACK_USER_WRITE) {
                            var l = e
                            i = l.revert
                                ? this.revertUserWrite_(t, l.path, n, r, s)
                                : this.ackUserWrite_(
                                      t,
                                      l.path,
                                      l.affectedTree,
                                      n,
                                      r,
                                      s
                                  )
                        } else {
                            if (e.type !== wn.LISTEN_COMPLETE)
                                throw c('Unknown operation type: ' + e.type)
                            i = this.listenComplete_(t, e.path, n, s)
                        }
                        var u = s.getChanges()
                        return tr.maybeAddValueEvent_(t, i, u), new Jn(i, u)
                    }),
                    (tr.maybeAddValueEvent_ = function (t, e, n) {
                        var r = e.getEventCache()
                        if (r.isFullyInitialized()) {
                            var i =
                                    r.getNode().isLeafNode() ||
                                    r.getNode().isEmpty(),
                                o = t.getCompleteEventSnap()
                            ;(0 < n.length ||
                                !t.getEventCache().isFullyInitialized() ||
                                (i && !r.getNode().equals(o)) ||
                                !r
                                    .getNode()
                                    .getPriority()
                                    .equals(o.getPriority())) &&
                                n.push(Vn.valueChange(e.getCompleteEventSnap()))
                        }
                    }),
                    (tr.prototype.generateEventCacheAfterServerEvent_ = function (
                        t,
                        e,
                        n,
                        r,
                        i
                    ) {
                        var o = t.getEventCache()
                        if (null != n.shadowingWrite(e)) return t
                        var s = void 0,
                            a = void 0
                        if (e.isEmpty())
                            if (
                                (C(
                                    t.getServerCache().isFullyInitialized(),
                                    'If change path is empty, we must have complete server data'
                                ),
                                t.getServerCache().isFiltered())
                            ) {
                                var h = t.getCompleteServerSnap(),
                                    l = h instanceof Ye ? h : Ye.EMPTY_NODE,
                                    u = n.calcCompleteEventChildren(l)
                                s = this.filter_.updateFullNode(
                                    t.getEventCache().getNode(),
                                    u,
                                    i
                                )
                            } else {
                                var c = n.calcCompleteEventCache(
                                    t.getCompleteServerSnap()
                                )
                                s = this.filter_.updateFullNode(
                                    t.getEventCache().getNode(),
                                    c,
                                    i
                                )
                            }
                        else {
                            var p = e.getFront()
                            if ('.priority' === p) {
                                C(
                                    1 === e.getLength(),
                                    "Can't have a priority with additional path components"
                                )
                                var d = o.getNode()
                                a = t.getServerCache().getNode()
                                var f = n.calcEventCacheAfterServerOverwrite(
                                    e,
                                    d,
                                    a
                                )
                                s =
                                    null != f
                                        ? this.filter_.updatePriority(d, f)
                                        : o.getNode()
                            } else {
                                var _ = e.popFront(),
                                    y = void 0
                                if (o.isCompleteForChild(p)) {
                                    a = t.getServerCache().getNode()
                                    var v = n.calcEventCacheAfterServerOverwrite(
                                        e,
                                        o.getNode(),
                                        a
                                    )
                                    y =
                                        null != v
                                            ? o
                                                  .getNode()
                                                  .getImmediateChild(p)
                                                  .updateChild(_, v)
                                            : o.getNode().getImmediateChild(p)
                                } else
                                    y = n.calcCompleteChild(
                                        p,
                                        t.getServerCache()
                                    )
                                s =
                                    null != y
                                        ? this.filter_.updateChild(
                                              o.getNode(),
                                              p,
                                              y,
                                              _,
                                              r,
                                              i
                                          )
                                        : o.getNode()
                            }
                        }
                        return t.updateEventSnap(
                            s,
                            o.isFullyInitialized() || e.isEmpty(),
                            this.filter_.filtersNodes()
                        )
                    }),
                    (tr.prototype.applyServerOverwrite_ = function (
                        t,
                        e,
                        n,
                        r,
                        i,
                        o,
                        s
                    ) {
                        var a,
                            h = t.getServerCache(),
                            l = o
                                ? this.filter_
                                : this.filter_.getIndexedFilter()
                        if (e.isEmpty())
                            a = l.updateFullNode(h.getNode(), n, null)
                        else if (l.filtersNodes() && !h.isFiltered()) {
                            var u = h.getNode().updateChild(e, n)
                            a = l.updateFullNode(h.getNode(), u, null)
                        } else {
                            var c = e.getFront()
                            if (!h.isCompleteForPath(e) && 1 < e.getLength())
                                return t
                            var p = e.popFront(),
                                d = h
                                    .getNode()
                                    .getImmediateChild(c)
                                    .updateChild(p, n)
                            a =
                                '.priority' === c
                                    ? l.updatePriority(h.getNode(), d)
                                    : l.updateChild(
                                          h.getNode(),
                                          c,
                                          d,
                                          p,
                                          Gn,
                                          null
                                      )
                        }
                        var f = t.updateServerSnap(
                                a,
                                h.isFullyInitialized() || e.isEmpty(),
                                l.filtersNodes()
                            ),
                            _ = new Xn(r, f, i)
                        return this.generateEventCacheAfterServerEvent_(
                            f,
                            e,
                            r,
                            _,
                            s
                        )
                    }),
                    (tr.prototype.applyUserOverwrite_ = function (
                        t,
                        e,
                        n,
                        r,
                        i,
                        o
                    ) {
                        var s,
                            a,
                            h = t.getEventCache(),
                            l = new Xn(r, t, i)
                        if (e.isEmpty())
                            (a = this.filter_.updateFullNode(
                                t.getEventCache().getNode(),
                                n,
                                o
                            )),
                                (s = t.updateEventSnap(
                                    a,
                                    !0,
                                    this.filter_.filtersNodes()
                                ))
                        else {
                            var u = e.getFront()
                            if ('.priority' === u)
                                (a = this.filter_.updatePriority(
                                    t.getEventCache().getNode(),
                                    n
                                )),
                                    (s = t.updateEventSnap(
                                        a,
                                        h.isFullyInitialized(),
                                        h.isFiltered()
                                    ))
                            else {
                                var c = e.popFront(),
                                    p = h.getNode().getImmediateChild(u),
                                    d = void 0
                                if (c.isEmpty()) d = n
                                else {
                                    var f = l.getCompleteChild(u)
                                    d =
                                        null != f
                                            ? '.priority' === c.getBack() &&
                                              f.getChild(c.parent()).isEmpty()
                                                ? f
                                                : f.updateChild(c, n)
                                            : Ye.EMPTY_NODE
                                }
                                if (p.equals(d)) s = t
                                else {
                                    var _ = this.filter_.updateChild(
                                        h.getNode(),
                                        u,
                                        d,
                                        c,
                                        l,
                                        o
                                    )
                                    s = t.updateEventSnap(
                                        _,
                                        h.isFullyInitialized(),
                                        this.filter_.filtersNodes()
                                    )
                                }
                            }
                        }
                        return s
                    }),
                    (tr.cacheHasChild_ = function (t, e) {
                        return t.getEventCache().isCompleteForChild(e)
                    }),
                    (tr.prototype.applyUserMerge_ = function (
                        r,
                        i,
                        t,
                        o,
                        s,
                        a
                    ) {
                        var h = this,
                            l = r
                        return (
                            t.foreach(function (t, e) {
                                var n = i.child(t)
                                tr.cacheHasChild_(r, n.getFront()) &&
                                    (l = h.applyUserOverwrite_(
                                        l,
                                        n,
                                        e,
                                        o,
                                        s,
                                        a
                                    ))
                            }),
                            t.foreach(function (t, e) {
                                var n = i.child(t)
                                tr.cacheHasChild_(r, n.getFront()) ||
                                    (l = h.applyUserOverwrite_(
                                        l,
                                        n,
                                        e,
                                        o,
                                        s,
                                        a
                                    ))
                            }),
                            l
                        )
                    }),
                    (tr.prototype.applyMerge_ = function (n, t) {
                        return (
                            t.foreach(function (t, e) {
                                n = n.updateChild(t, e)
                            }),
                            n
                        )
                    }),
                    (tr.prototype.applyServerMerge_ = function (
                        o,
                        t,
                        e,
                        s,
                        a,
                        h,
                        l
                    ) {
                        var u = this
                        if (
                            o.getServerCache().getNode().isEmpty() &&
                            !o.getServerCache().isFullyInitialized()
                        )
                            return o
                        var n,
                            c = o
                        n = t.isEmpty() ? e : Dn.Empty.setTree(t, e)
                        var p = o.getServerCache().getNode()
                        return (
                            n.children.inorderTraversal(function (t, e) {
                                if (p.hasChild(t)) {
                                    var n = o
                                            .getServerCache()
                                            .getNode()
                                            .getImmediateChild(t),
                                        r = u.applyMerge_(n, e)
                                    c = u.applyServerOverwrite_(
                                        c,
                                        new Nt(t),
                                        r,
                                        s,
                                        a,
                                        h,
                                        l
                                    )
                                }
                            }),
                            n.children.inorderTraversal(function (t, e) {
                                var n =
                                    !o.getServerCache().isCompleteForChild(t) &&
                                    null == e.value
                                if (!p.hasChild(t) && !n) {
                                    var r = o
                                            .getServerCache()
                                            .getNode()
                                            .getImmediateChild(t),
                                        i = u.applyMerge_(r, e)
                                    c = u.applyServerOverwrite_(
                                        c,
                                        new Nt(t),
                                        i,
                                        s,
                                        a,
                                        h,
                                        l
                                    )
                                }
                            }),
                            c
                        )
                    }),
                    (tr.prototype.ackUserWrite_ = function (t, r, e, n, i, o) {
                        if (null != n.shadowingWrite(r)) return t
                        var s = t.getServerCache().isFiltered(),
                            a = t.getServerCache()
                        if (null != e.value) {
                            if (
                                (r.isEmpty() && a.isFullyInitialized()) ||
                                a.isCompleteForPath(r)
                            )
                                return this.applyServerOverwrite_(
                                    t,
                                    r,
                                    a.getNode().getChild(r),
                                    n,
                                    i,
                                    s,
                                    o
                                )
                            if (r.isEmpty()) {
                                var h = Dn.Empty
                                return (
                                    a
                                        .getNode()
                                        .forEachChild(ye, function (t, e) {
                                            h = h.set(new Nt(t), e)
                                        }),
                                    this.applyServerMerge_(t, r, h, n, i, s, o)
                                )
                            }
                            return t
                        }
                        var l = Dn.Empty
                        return (
                            e.foreach(function (t, e) {
                                var n = r.child(t)
                                a.isCompleteForPath(n) &&
                                    (l = l.set(t, a.getNode().getChild(n)))
                            }),
                            this.applyServerMerge_(t, r, l, n, i, s, o)
                        )
                    }),
                    (tr.prototype.listenComplete_ = function (t, e, n, r) {
                        var i = t.getServerCache(),
                            o = t.updateServerSnap(
                                i.getNode(),
                                i.isFullyInitialized() || e.isEmpty(),
                                i.isFiltered()
                            )
                        return this.generateEventCacheAfterServerEvent_(
                            o,
                            e,
                            n,
                            Gn,
                            r
                        )
                    }),
                    (tr.prototype.revertUserWrite_ = function (t, e, n, r, i) {
                        var o
                        if (null != n.shadowingWrite(e)) return t
                        var s = new Xn(n, t, r),
                            a = t.getEventCache().getNode(),
                            h = void 0
                        if (e.isEmpty() || '.priority' === e.getFront()) {
                            var l = void 0
                            if (t.getServerCache().isFullyInitialized())
                                l = n.calcCompleteEventCache(
                                    t.getCompleteServerSnap()
                                )
                            else {
                                var u = t.getServerCache().getNode()
                                C(
                                    u instanceof Ye,
                                    'serverChildren would be complete if leaf node'
                                ),
                                    (l = n.calcCompleteEventChildren(u))
                            }
                            ;(l = l), (h = this.filter_.updateFullNode(a, l, i))
                        } else {
                            var c = e.getFront(),
                                p = n.calcCompleteChild(c, t.getServerCache())
                            null == p &&
                                t.getServerCache().isCompleteForChild(c) &&
                                (p = a.getImmediateChild(c)),
                                (h =
                                    null != p
                                        ? this.filter_.updateChild(
                                              a,
                                              c,
                                              p,
                                              e.popFront(),
                                              s,
                                              i
                                          )
                                        : t
                                              .getEventCache()
                                              .getNode()
                                              .hasChild(c)
                                        ? this.filter_.updateChild(
                                              a,
                                              c,
                                              Ye.EMPTY_NODE,
                                              e.popFront(),
                                              s,
                                              i
                                          )
                                        : a).isEmpty() &&
                                    t.getServerCache().isFullyInitialized() &&
                                    (o = n.calcCompleteEventCache(
                                        t.getCompleteServerSnap()
                                    )).isLeafNode() &&
                                    (h = this.filter_.updateFullNode(h, o, i))
                        }
                        return (
                            (o =
                                t.getServerCache().isFullyInitialized() ||
                                null != n.shadowingWrite(Nt.Empty)),
                            t.updateEventSnap(h, o, this.filter_.filtersNodes())
                        )
                    }),
                    tr)
            function tr(t) {
                this.filter_ = t
            }
            var er =
                ((nr.prototype.generateEventsForChanges = function (t, e, n) {
                    var r = this,
                        i = [],
                        o = []
                    return (
                        t.forEach(function (t) {
                            t.type === Vn.CHILD_CHANGED &&
                                r.index_.indexedValueChanged(
                                    t.oldSnap,
                                    t.snapshotNode
                                ) &&
                                o.push(
                                    Vn.childMovedChange(
                                        t.childName,
                                        t.snapshotNode
                                    )
                                )
                        }),
                        this.generateEventsForType_(
                            i,
                            Vn.CHILD_REMOVED,
                            t,
                            n,
                            e
                        ),
                        this.generateEventsForType_(i, Vn.CHILD_ADDED, t, n, e),
                        this.generateEventsForType_(i, Vn.CHILD_MOVED, o, n, e),
                        this.generateEventsForType_(
                            i,
                            Vn.CHILD_CHANGED,
                            t,
                            n,
                            e
                        ),
                        this.generateEventsForType_(i, Vn.VALUE, t, n, e),
                        i
                    )
                }),
                (nr.prototype.generateEventsForType_ = function (
                    r,
                    e,
                    t,
                    i,
                    o
                ) {
                    var s = this,
                        n = t.filter(function (t) {
                            return t.type === e
                        })
                    n.sort(this.compareChanges_.bind(this)),
                        n.forEach(function (e) {
                            var n = s.materializeSingleChange_(e, o)
                            i.forEach(function (t) {
                                t.respondsTo(e.type) &&
                                    r.push(t.createEvent(n, s.query_))
                            })
                        })
                }),
                (nr.prototype.materializeSingleChange_ = function (t, e) {
                    return (
                        'value' === t.type ||
                            'child_removed' === t.type ||
                            (t.prevName = e.getPredecessorChildName(
                                t.childName,
                                t.snapshotNode,
                                this.index_
                            )),
                        t
                    )
                }),
                (nr.prototype.compareChanges_ = function (t, e) {
                    if (null == t.childName || null == e.childName)
                        throw c('Should only compare child_ events.')
                    var n = new ae(t.childName, t.snapshotNode),
                        r = new ae(e.childName, e.snapshotNode)
                    return this.index_.compare(n, r)
                }),
                nr)
            function nr(t) {
                ;(this.query_ = t),
                    (this.index_ = this.query_.getQueryParams().getIndex())
            }
            var rr,
                ir =
                    ((or.prototype.getQuery = function () {
                        return this.query_
                    }),
                    (or.prototype.getServerCache = function () {
                        return this.viewCache_.getServerCache().getNode()
                    }),
                    (or.prototype.getCompleteServerCache = function (t) {
                        var e = this.viewCache_.getCompleteServerSnap()
                        return e &&
                            (this.query_.getQueryParams().loadsAllData() ||
                                (!t.isEmpty() &&
                                    !e
                                        .getImmediateChild(t.getFront())
                                        .isEmpty()))
                            ? e.getChild(t)
                            : null
                    }),
                    (or.prototype.isEmpty = function () {
                        return 0 === this.eventRegistrations_.length
                    }),
                    (or.prototype.addEventRegistration = function (t) {
                        this.eventRegistrations_.push(t)
                    }),
                    (or.prototype.removeEventRegistration = function (t, n) {
                        var r = []
                        if (n) {
                            C(
                                null == t,
                                'A cancel should cancel all event registrations.'
                            )
                            var i = this.query_.path
                            this.eventRegistrations_.forEach(function (t) {
                                n = n
                                var e = t.createCancelEvent(n, i)
                                e && r.push(e)
                            })
                        }
                        if (t) {
                            for (
                                var e = [], o = 0;
                                o < this.eventRegistrations_.length;
                                ++o
                            ) {
                                var s = this.eventRegistrations_[o]
                                if (s.matches(t)) {
                                    if (t.hasAnyCallback()) {
                                        e = e.concat(
                                            this.eventRegistrations_.slice(
                                                o + 1
                                            )
                                        )
                                        break
                                    }
                                } else e.push(s)
                            }
                            this.eventRegistrations_ = e
                        } else this.eventRegistrations_ = []
                        return r
                    }),
                    (or.prototype.applyOperation = function (t, e, n) {
                        t.type === wn.MERGE &&
                            null !== t.source.queryId &&
                            (C(
                                this.viewCache_.getCompleteServerSnap(),
                                'We should always have a full cache before handling merges'
                            ),
                            C(
                                this.viewCache_.getCompleteEventSnap(),
                                'Missing event cache, even though we have a server cache'
                            ))
                        var r = this.viewCache_,
                            i = this.processor_.applyOperation(r, t, e, n)
                        return (
                            this.processor_.assertIndexed(i.viewCache),
                            C(
                                i.viewCache
                                    .getServerCache()
                                    .isFullyInitialized() ||
                                    !r.getServerCache().isFullyInitialized(),
                                'Once a server snap is complete, it should never go back'
                            ),
                            (this.viewCache_ = i.viewCache),
                            this.generateEventsForChanges_(
                                i.changes,
                                i.viewCache.getEventCache().getNode(),
                                null
                            )
                        )
                    }),
                    (or.prototype.getInitialEvents = function (t) {
                        var e = this.viewCache_.getEventCache(),
                            n = []
                        return (
                            e.getNode().isLeafNode() ||
                                e.getNode().forEachChild(Ie, function (t, e) {
                                    n.push(Vn.childAddedChange(t, e))
                                }),
                            e.isFullyInitialized() &&
                                n.push(Vn.valueChange(e.getNode())),
                            this.generateEventsForChanges_(n, e.getNode(), t)
                        )
                    }),
                    (or.prototype.generateEventsForChanges_ = function (
                        t,
                        e,
                        n
                    ) {
                        var r = n ? [n] : this.eventRegistrations_
                        return this.eventGenerator_.generateEventsForChanges(
                            t,
                            e,
                            r
                        )
                    }),
                    or)
            function or(t, e) {
                ;(this.query_ = t), (this.eventRegistrations_ = [])
                var n = this.query_.getQueryParams(),
                    r = new Bn(n.getIndex()),
                    i = n.getNodeFilter()
                this.processor_ = new Zn(i)
                var o = e.getServerCache(),
                    s = e.getEventCache(),
                    a = r.updateFullNode(Ye.EMPTY_NODE, o.getNode(), null),
                    h = i.updateFullNode(Ye.EMPTY_NODE, s.getNode(), null),
                    l = new Wn(a, o.isFullyInitialized(), r.filtersNodes()),
                    u = new Wn(h, s.isFullyInitialized(), i.filtersNodes())
                ;(this.viewCache_ = new qn(u, l)),
                    (this.eventGenerator_ = new er(this.query_))
            }
            var sr =
                (Object.defineProperty(ar, '__referenceConstructor', {
                    get: function () {
                        return C(rr, 'Reference.ts has not been loaded'), rr
                    },
                    set: function (t) {
                        C(
                            !rr,
                            '__referenceConstructor has already been defined'
                        ),
                            (rr = t)
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (ar.prototype.isEmpty = function () {
                    return 0 === this.views.size
                }),
                (ar.prototype.applyOperation = function (t, e, n) {
                    var r,
                        i,
                        o = t.source.queryId
                    if (null !== o) {
                        var s = this.views.get(o)
                        return (
                            C(
                                null != s,
                                'SyncTree gave us an op for an invalid query.'
                            ),
                            s.applyOperation(t, e, n)
                        )
                    }
                    var a = []
                    try {
                        for (
                            var h = f(this.views.values()), l = h.next();
                            !l.done;
                            l = h.next()
                        )
                            (s = l.value),
                                (a = a.concat(s.applyOperation(t, e, n)))
                    } catch (t) {
                        r = { error: t }
                    } finally {
                        try {
                            l && !l.done && (i = h.return) && i.call(h)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return a
                }),
                (ar.prototype.addEventRegistration = function (t, e, n, r, i) {
                    var o = t.queryIdentifier(),
                        s = this.views.get(o)
                    if (!s) {
                        var a = n.calcCompleteEventCache(i ? r : null),
                            h = !1
                        h =
                            !!a ||
                            ((a =
                                r instanceof Ye
                                    ? n.calcCompleteEventChildren(r)
                                    : Ye.EMPTY_NODE),
                            !1)
                        var l = new qn(new Wn(a, h, !1), new Wn(r, i, !1))
                        ;(s = new ir(t, l)), this.views.set(o, s)
                    }
                    return s.addEventRegistration(e), s.getInitialEvents(e)
                }),
                (ar.prototype.removeEventRegistration = function (t, e, n) {
                    var r,
                        i,
                        o = t.queryIdentifier(),
                        s = [],
                        a = [],
                        h = this.hasCompleteView()
                    if ('default' === o)
                        try {
                            for (
                                var l = f(this.views.entries()), u = l.next();
                                !u.done;
                                u = l.next()
                            ) {
                                var c = _(u.value, 2),
                                    p = c[0],
                                    d = c[1]
                                ;(a = a.concat(
                                    d.removeEventRegistration(e, n)
                                )),
                                    d.isEmpty() &&
                                        (this.views.delete(p),
                                        d
                                            .getQuery()
                                            .getQueryParams()
                                            .loadsAllData() ||
                                            s.push(d.getQuery()))
                            }
                        } catch (t) {
                            r = { error: t }
                        } finally {
                            try {
                                u && !u.done && (i = l.return) && i.call(l)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    else
                        (d = this.views.get(o)) &&
                            ((a = a.concat(d.removeEventRegistration(e, n))),
                            d.isEmpty() &&
                                (this.views.delete(o),
                                d.getQuery().getQueryParams().loadsAllData() ||
                                    s.push(d.getQuery())))
                    return (
                        h &&
                            !this.hasCompleteView() &&
                            s.push(
                                new ar.__referenceConstructor(t.repo, t.path)
                            ),
                        { removed: s, events: a }
                    )
                }),
                (ar.prototype.getQueryViews = function () {
                    var e,
                        t,
                        n = []
                    try {
                        for (
                            var r = f(this.views.values()), i = r.next();
                            !i.done;
                            i = r.next()
                        ) {
                            var o = i.value
                            o.getQuery().getQueryParams().loadsAllData() ||
                                n.push(o)
                        }
                    } catch (t) {
                        e = { error: t }
                    } finally {
                        try {
                            i && !i.done && (t = r.return) && t.call(r)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return n
                }),
                (ar.prototype.getCompleteServerCache = function (t) {
                    var e,
                        n,
                        r = null
                    try {
                        for (
                            var i = f(this.views.values()), o = i.next();
                            !o.done;
                            o = i.next()
                        ) {
                            var s = o.value
                            r = r || s.getCompleteServerCache(t)
                        }
                    } catch (t) {
                        e = { error: t }
                    } finally {
                        try {
                            o && !o.done && (n = i.return) && n.call(i)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return r
                }),
                (ar.prototype.viewForQuery = function (t) {
                    if (t.getQueryParams().loadsAllData())
                        return this.getCompleteView()
                    var e = t.queryIdentifier()
                    return this.views.get(e)
                }),
                (ar.prototype.viewExistsForQuery = function (t) {
                    return null != this.viewForQuery(t)
                }),
                (ar.prototype.hasCompleteView = function () {
                    return null != this.getCompleteView()
                }),
                (ar.prototype.getCompleteView = function () {
                    var e, t
                    try {
                        for (
                            var n = f(this.views.values()), r = n.next();
                            !r.done;
                            r = n.next()
                        ) {
                            var i = r.value
                            if (i.getQuery().getQueryParams().loadsAllData())
                                return i
                        }
                    } catch (t) {
                        e = { error: t }
                    } finally {
                        try {
                            r && !r.done && (t = n.return) && t.call(n)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return null
                }),
                ar)
            function ar() {
                this.views = new Map()
            }
            var hr =
                ((lr.prototype.addWrite = function (t, e) {
                    if (t.isEmpty()) return new lr(new Dn(e))
                    var n = this.writeTree_.findRootMostValueAndPath(t)
                    if (null != n) {
                        var r = n.path,
                            i = n.value,
                            o = Nt.relativePath(r, t)
                        return (
                            (i = i.updateChild(o, e)),
                            new lr(this.writeTree_.set(r, i))
                        )
                    }
                    var s = new Dn(e)
                    return new lr(this.writeTree_.setTree(t, s))
                }),
                (lr.prototype.addWrites = function (n, t) {
                    var r = this
                    return (
                        Et(t, function (t, e) {
                            r = r.addWrite(n.child(t), e)
                        }),
                        r
                    )
                }),
                (lr.prototype.removeWrite = function (t) {
                    return t.isEmpty()
                        ? lr.Empty
                        : new lr(this.writeTree_.setTree(t, Dn.Empty))
                }),
                (lr.prototype.hasCompleteWrite = function (t) {
                    return null != this.getCompleteNode(t)
                }),
                (lr.prototype.getCompleteNode = function (t) {
                    var e = this.writeTree_.findRootMostValueAndPath(t)
                    return null != e
                        ? this.writeTree_
                              .get(e.path)
                              .getChild(Nt.relativePath(e.path, t))
                        : null
                }),
                (lr.prototype.getCompleteChildren = function () {
                    var n = [],
                        t = this.writeTree_.value
                    return (
                        null != t
                            ? t.isLeafNode() ||
                              t.forEachChild(Ie, function (t, e) {
                                  n.push(new ae(t, e))
                              })
                            : this.writeTree_.children.inorderTraversal(
                                  function (t, e) {
                                      null != e.value &&
                                          n.push(new ae(t, e.value))
                                  }
                              ),
                        n
                    )
                }),
                (lr.prototype.childCompoundWrite = function (t) {
                    if (t.isEmpty()) return this
                    var e = this.getCompleteNode(t)
                    return new lr(
                        null != e ? new Dn(e) : this.writeTree_.subtree(t)
                    )
                }),
                (lr.prototype.isEmpty = function () {
                    return this.writeTree_.isEmpty()
                }),
                (lr.prototype.apply = function (t) {
                    return (function n(r, t, i) {
                        if (null != t.value) return i.updateChild(r, t.value)
                        var o = null
                        return (
                            t.children.inorderTraversal(function (t, e) {
                                '.priority' === t
                                    ? (C(
                                          null !== e.value,
                                          'Priority writes must always be leaf nodes'
                                      ),
                                      (o = e.value))
                                    : (i = n(r.child(t), e, i))
                            }),
                            i.getChild(r).isEmpty() ||
                                null === o ||
                                (i = i.updateChild(r.child('.priority'), o)),
                            i
                        )
                    })(Nt.Empty, this.writeTree_, t)
                }),
                (lr.Empty = new lr(new Dn(null))),
                lr)
            function lr(t) {
                this.writeTree_ = t
            }
            var ur =
                ((cr.prototype.childWrites = function (t) {
                    return new pr(t, this)
                }),
                (cr.prototype.addOverwrite = function (t, e, n, r) {
                    C(
                        n > this.lastWriteId_,
                        'Stacking an older write on top of newer ones'
                    ),
                        void 0 === r && (r = !0),
                        this.allWrites_.push({
                            path: t,
                            snap: e,
                            writeId: n,
                            visible: r,
                        }),
                        r &&
                            (this.visibleWrites_ = this.visibleWrites_.addWrite(
                                t,
                                e
                            )),
                        (this.lastWriteId_ = n)
                }),
                (cr.prototype.addMerge = function (t, e, n) {
                    C(
                        n > this.lastWriteId_,
                        'Stacking an older merge on top of newer ones'
                    ),
                        this.allWrites_.push({
                            path: t,
                            children: e,
                            writeId: n,
                            visible: !0,
                        }),
                        (this.visibleWrites_ = this.visibleWrites_.addWrites(
                            t,
                            e
                        )),
                        (this.lastWriteId_ = n)
                }),
                (cr.prototype.getWrite = function (t) {
                    for (var e = 0; e < this.allWrites_.length; e++) {
                        var n = this.allWrites_[e]
                        if (n.writeId === t) return n
                    }
                    return null
                }),
                (cr.prototype.removeWrite = function (e) {
                    var n = this,
                        t = this.allWrites_.findIndex(function (t) {
                            return t.writeId === e
                        })
                    C(0 <= t, 'removeWrite called with nonexistent writeId.')
                    var r = this.allWrites_[t]
                    this.allWrites_.splice(t, 1)
                    for (
                        var i = r.visible,
                            o = !1,
                            s = this.allWrites_.length - 1;
                        i && 0 <= s;

                    ) {
                        var a = this.allWrites_[s]
                        a.visible &&
                            (t <= s && this.recordContainsPath_(a, r.path)
                                ? (i = !1)
                                : r.path.contains(a.path) && (o = !0)),
                            s--
                    }
                    return (
                        !!i &&
                        (o
                            ? this.resetTree_()
                            : r.snap
                            ? (this.visibleWrites_ = this.visibleWrites_.removeWrite(
                                  r.path
                              ))
                            : Et(r.children, function (t) {
                                  n.visibleWrites_ = n.visibleWrites_.removeWrite(
                                      r.path.child(t)
                                  )
                              }),
                        !0)
                    )
                }),
                (cr.prototype.getCompleteWriteData = function (t) {
                    return this.visibleWrites_.getCompleteNode(t)
                }),
                (cr.prototype.calcCompleteEventCache = function (e, t, n, r) {
                    if (n || r) {
                        var i = this.visibleWrites_.childCompoundWrite(e)
                        if (!r && i.isEmpty()) return t
                        if (r || null != t || i.hasCompleteWrite(Nt.Empty)) {
                            var o = cr.layerTree_(
                                this.allWrites_,
                                function (t) {
                                    return (
                                        (t.visible || r) &&
                                        (!n || !~n.indexOf(t.writeId)) &&
                                        (t.path.contains(e) ||
                                            e.contains(t.path))
                                    )
                                },
                                e
                            )
                            return (h = t || Ye.EMPTY_NODE), o.apply(h)
                        }
                        return null
                    }
                    var s = this.visibleWrites_.getCompleteNode(e)
                    if (null != s) return s
                    var a = this.visibleWrites_.childCompoundWrite(e)
                    if (a.isEmpty()) return t
                    if (null != t || a.hasCompleteWrite(Nt.Empty)) {
                        var h = t || Ye.EMPTY_NODE
                        return a.apply(h)
                    }
                    return null
                }),
                (cr.prototype.calcCompleteEventChildren = function (t, e) {
                    var r = Ye.EMPTY_NODE,
                        n = this.visibleWrites_.getCompleteNode(t)
                    if (n)
                        return (
                            n.isLeafNode() ||
                                n.forEachChild(Ie, function (t, e) {
                                    r = r.updateImmediateChild(t, e)
                                }),
                            r
                        )
                    if (e) {
                        var i = this.visibleWrites_.childCompoundWrite(t)
                        return (
                            e.forEachChild(Ie, function (t, e) {
                                var n = i.childCompoundWrite(new Nt(t)).apply(e)
                                r = r.updateImmediateChild(t, n)
                            }),
                            i.getCompleteChildren().forEach(function (t) {
                                r = r.updateImmediateChild(t.name, t.node)
                            }),
                            r
                        )
                    }
                    return (
                        this.visibleWrites_
                            .childCompoundWrite(t)
                            .getCompleteChildren()
                            .forEach(function (t) {
                                r = r.updateImmediateChild(t.name, t.node)
                            }),
                        r
                    )
                }),
                (cr.prototype.calcEventCacheAfterServerOverwrite = function (
                    t,
                    e,
                    n,
                    r
                ) {
                    C(
                        n || r,
                        'Either existingEventSnap or existingServerSnap must exist'
                    )
                    var i = t.child(e)
                    if (this.visibleWrites_.hasCompleteWrite(i)) return null
                    var o = this.visibleWrites_.childCompoundWrite(i)
                    return o.isEmpty() ? r.getChild(e) : o.apply(r.getChild(e))
                }),
                (cr.prototype.calcCompleteChild = function (t, e, n) {
                    var r = t.child(e),
                        i = this.visibleWrites_.getCompleteNode(r)
                    return null != i
                        ? i
                        : n.isCompleteForChild(e)
                        ? this.visibleWrites_
                              .childCompoundWrite(r)
                              .apply(n.getNode().getImmediateChild(e))
                        : null
                }),
                (cr.prototype.shadowingWrite = function (t) {
                    return this.visibleWrites_.getCompleteNode(t)
                }),
                (cr.prototype.calcIndexedSlice = function (t, e, n, r, i, o) {
                    var s,
                        a = this.visibleWrites_.childCompoundWrite(t),
                        h = a.getCompleteNode(Nt.Empty)
                    if (null != h) s = h
                    else {
                        if (null == e) return []
                        s = a.apply(e)
                    }
                    if ((s = s.withIndex(o)).isEmpty() || s.isLeafNode())
                        return []
                    for (
                        var l = [],
                            u = o.getCompare(),
                            c = i
                                ? s.getReverseIteratorFrom(n, o)
                                : s.getIteratorFrom(n, o),
                            p = c.getNext();
                        p && l.length < r;

                    )
                        0 !== u(p, n) && l.push(p), (p = c.getNext())
                    return l
                }),
                (cr.prototype.recordContainsPath_ = function (t, e) {
                    if (t.snap) return t.path.contains(e)
                    for (var n in t.children)
                        if (
                            t.children.hasOwnProperty(n) &&
                            t.path.child(n).contains(e)
                        )
                            return !0
                    return !1
                }),
                (cr.prototype.resetTree_ = function () {
                    ;(this.visibleWrites_ = cr.layerTree_(
                        this.allWrites_,
                        cr.DefaultFilter_,
                        Nt.Empty
                    )),
                        0 < this.allWrites_.length
                            ? (this.lastWriteId_ = this.allWrites_[
                                  this.allWrites_.length - 1
                              ].writeId)
                            : (this.lastWriteId_ = -1)
                }),
                (cr.DefaultFilter_ = function (t) {
                    return t.visible
                }),
                (cr.layerTree_ = function (t, e, n) {
                    for (var r = hr.Empty, i = 0; i < t.length; ++i) {
                        var o = t[i]
                        if (e(o)) {
                            var s = o.path,
                                a = void 0
                            if (o.snap)
                                n.contains(s)
                                    ? ((a = Nt.relativePath(n, s)),
                                      (r = r.addWrite(a, o.snap)))
                                    : s.contains(n) &&
                                      ((a = Nt.relativePath(s, n)),
                                      (r = r.addWrite(
                                          Nt.Empty,
                                          o.snap.getChild(a)
                                      )))
                            else {
                                if (!o.children)
                                    throw c(
                                        'WriteRecord should have .snap or .children'
                                    )
                                if (n.contains(s))
                                    (a = Nt.relativePath(n, s)),
                                        (r = r.addWrites(a, o.children))
                                else if (s.contains(n))
                                    if ((a = Nt.relativePath(s, n)).isEmpty())
                                        r = r.addWrites(Nt.Empty, o.children)
                                    else {
                                        var h = R(o.children, a.getFront())
                                        if (h) {
                                            var l = h.getChild(a.popFront())
                                            r = r.addWrite(Nt.Empty, l)
                                        }
                                    }
                            }
                        }
                    }
                    return r
                }),
                cr)
            function cr() {
                ;(this.visibleWrites_ = hr.Empty),
                    (this.allWrites_ = []),
                    (this.lastWriteId_ = -1)
            }
            var pr =
                ((dr.prototype.calcCompleteEventCache = function (t, e, n) {
                    return this.writeTree_.calcCompleteEventCache(
                        this.treePath_,
                        t,
                        e,
                        n
                    )
                }),
                (dr.prototype.calcCompleteEventChildren = function (t) {
                    return this.writeTree_.calcCompleteEventChildren(
                        this.treePath_,
                        t
                    )
                }),
                (dr.prototype.calcEventCacheAfterServerOverwrite = function (
                    t,
                    e,
                    n
                ) {
                    return this.writeTree_.calcEventCacheAfterServerOverwrite(
                        this.treePath_,
                        t,
                        e,
                        n
                    )
                }),
                (dr.prototype.shadowingWrite = function (t) {
                    return this.writeTree_.shadowingWrite(
                        this.treePath_.child(t)
                    )
                }),
                (dr.prototype.calcIndexedSlice = function (t, e, n, r, i) {
                    return this.writeTree_.calcIndexedSlice(
                        this.treePath_,
                        t,
                        e,
                        n,
                        r,
                        i
                    )
                }),
                (dr.prototype.calcCompleteChild = function (t, e) {
                    return this.writeTree_.calcCompleteChild(
                        this.treePath_,
                        t,
                        e
                    )
                }),
                (dr.prototype.child = function (t) {
                    return new dr(this.treePath_.child(t), this.writeTree_)
                }),
                dr)
            function dr(t, e) {
                ;(this.treePath_ = t), (this.writeTree_ = e)
            }
            var fr =
                ((_r.prototype.applyUserOverwrite = function (t, e, n, r) {
                    return (
                        this.pendingWriteTree_.addOverwrite(t, e, n, r),
                        r
                            ? this.applyOperationToSyncPoints_(
                                  new Fn(Tn.User, t, e)
                              )
                            : []
                    )
                }),
                (_r.prototype.applyUserMerge = function (t, e, n) {
                    this.pendingWriteTree_.addMerge(t, e, n)
                    var r = Dn.fromObject(e)
                    return this.applyOperationToSyncPoints_(
                        new Ln(Tn.User, t, r)
                    )
                }),
                (_r.prototype.ackUserWrite = function (t, e) {
                    void 0 === e && (e = !1)
                    var n = this.pendingWriteTree_.getWrite(t)
                    if (this.pendingWriteTree_.removeWrite(t)) {
                        var r = Dn.Empty
                        return (
                            null != n.snap
                                ? (r = r.set(Nt.Empty, !0))
                                : Et(n.children, function (t, e) {
                                      r = r.set(new Nt(t), e)
                                  }),
                            this.applyOperationToSyncPoints_(
                                new Rn(n.path, r, e)
                            )
                        )
                    }
                    return []
                }),
                (_r.prototype.applyServerOverwrite = function (t, e) {
                    return this.applyOperationToSyncPoints_(
                        new Fn(Tn.Server, t, e)
                    )
                }),
                (_r.prototype.applyServerMerge = function (t, e) {
                    var n = Dn.fromObject(e)
                    return this.applyOperationToSyncPoints_(
                        new Ln(Tn.Server, t, n)
                    )
                }),
                (_r.prototype.applyListenComplete = function (t) {
                    return this.applyOperationToSyncPoints_(
                        new xn(Tn.Server, t)
                    )
                }),
                (_r.prototype.applyTaggedQueryOverwrite = function (t, e, n) {
                    var r = this.queryKeyForTag_(n)
                    if (null == r) return []
                    var i = _r.parseQueryKey_(r),
                        o = i.path,
                        s = i.queryId,
                        a = Nt.relativePath(o, t),
                        h = new Fn(Tn.forServerTaggedQuery(s), a, e)
                    return this.applyTaggedOperation_(o, h)
                }),
                (_r.prototype.applyTaggedQueryMerge = function (t, e, n) {
                    var r = this.queryKeyForTag_(n)
                    if (r) {
                        var i = _r.parseQueryKey_(r),
                            o = i.path,
                            s = i.queryId,
                            a = Nt.relativePath(o, t),
                            h = Dn.fromObject(e),
                            l = new Ln(Tn.forServerTaggedQuery(s), a, h)
                        return this.applyTaggedOperation_(o, l)
                    }
                    return []
                }),
                (_r.prototype.applyTaggedListenComplete = function (t, e) {
                    var n = this.queryKeyForTag_(e)
                    if (n) {
                        var r = _r.parseQueryKey_(n),
                            i = r.path,
                            o = r.queryId,
                            s = Nt.relativePath(i, t),
                            a = new xn(Tn.forServerTaggedQuery(o), s)
                        return this.applyTaggedOperation_(i, a)
                    }
                    return []
                }),
                (_r.prototype.addEventRegistration = function (t, e) {
                    var r = t.path,
                        i = null,
                        o = !1
                    this.syncPointTree_.foreachOnPath(r, function (t, e) {
                        var n = Nt.relativePath(t, r)
                        ;(i = i || e.getCompleteServerCache(n)),
                            (o = o || e.hasCompleteView())
                    })
                    var n,
                        s = this.syncPointTree_.get(r)
                    s
                        ? ((o = o || s.hasCompleteView()),
                          (i = i || s.getCompleteServerCache(Nt.Empty)))
                        : ((s = new sr()),
                          (this.syncPointTree_ = this.syncPointTree_.set(
                              r,
                              s
                          ))),
                        null != i
                            ? (n = !0)
                            : ((n = !1),
                              (i = Ye.EMPTY_NODE),
                              this.syncPointTree_
                                  .subtree(r)
                                  .foreachChild(function (t, e) {
                                      var n = e.getCompleteServerCache(Nt.Empty)
                                      n && (i = i.updateImmediateChild(t, n))
                                  }))
                    var a = s.viewExistsForQuery(t)
                    if (!a && !t.getQueryParams().loadsAllData()) {
                        var h = _r.makeQueryKey_(t)
                        C(
                            !this.queryToTagMap.has(h),
                            'View does not exist, but we have a tag'
                        )
                        var l = _r.getNextQueryTag_()
                        this.queryToTagMap.set(h, l),
                            this.tagToQueryMap.set(l, h)
                    }
                    var u = this.pendingWriteTree_.childWrites(r),
                        c = s.addEventRegistration(t, e, u, i, n)
                    if (!a && !o) {
                        var p = s.viewForQuery(t)
                        c = c.concat(this.setupListener_(t, p))
                    }
                    return c
                }),
                (_r.prototype.removeEventRegistration = function (t, e, n) {
                    var r = this,
                        i = t.path,
                        o = this.syncPointTree_.get(i),
                        s = []
                    if (
                        o &&
                        ('default' === t.queryIdentifier() ||
                            o.viewExistsForQuery(t))
                    ) {
                        var a = o.removeEventRegistration(t, e, n)
                        o.isEmpty() &&
                            (this.syncPointTree_ = this.syncPointTree_.remove(
                                i
                            ))
                        var h = a.removed
                        s = a.events
                        var l =
                                -1 !==
                                h.findIndex(function (t) {
                                    return t.getQueryParams().loadsAllData()
                                }),
                            u = this.syncPointTree_.findOnPath(i, function (
                                t,
                                e
                            ) {
                                return e.hasCompleteView()
                            })
                        if (l && !u) {
                            var c = this.syncPointTree_.subtree(i)
                            if (!c.isEmpty())
                                for (
                                    var p = this.collectDistinctViewsForSubTree_(
                                            c
                                        ),
                                        d = 0;
                                    d < p.length;
                                    ++d
                                ) {
                                    var f = p[d],
                                        _ = f.getQuery(),
                                        y = this.createListenerForView_(f)
                                    this.listenProvider_.startListening(
                                        _r.queryForListening_(_),
                                        this.tagForQuery_(_),
                                        y.hashFn,
                                        y.onComplete
                                    )
                                }
                        }
                        !u &&
                            0 < h.length &&
                            !n &&
                            (l
                                ? this.listenProvider_.stopListening(
                                      _r.queryForListening_(t),
                                      null
                                  )
                                : h.forEach(function (t) {
                                      var e = r.queryToTagMap.get(
                                          _r.makeQueryKey_(t)
                                      )
                                      r.listenProvider_.stopListening(
                                          _r.queryForListening_(t),
                                          e
                                      )
                                  })),
                            this.removeTags_(h)
                    }
                    return s
                }),
                (_r.prototype.calcCompleteEventCache = function (i, t) {
                    var e = this.pendingWriteTree_,
                        n = this.syncPointTree_.findOnPath(i, function (t, e) {
                            var n = Nt.relativePath(t, i),
                                r = e.getCompleteServerCache(n)
                            if (r) return r
                        })
                    return e.calcCompleteEventCache(i, n, t, !0)
                }),
                (_r.prototype.collectDistinctViewsForSubTree_ = function (t) {
                    return t.fold(function (t, e, n) {
                        if (e && e.hasCompleteView())
                            return [e.getCompleteView()]
                        var r = []
                        return (
                            e && (r = e.getQueryViews()),
                            Et(n, function (t, e) {
                                r = r.concat(e)
                            }),
                            r
                        )
                    })
                }),
                (_r.prototype.removeTags_ = function (t) {
                    for (var e = 0; e < t.length; ++e) {
                        var n = t[e]
                        if (!n.getQueryParams().loadsAllData()) {
                            var r = _r.makeQueryKey_(n),
                                i = this.queryToTagMap.get(r)
                            this.queryToTagMap.delete(r),
                                this.tagToQueryMap.delete(i)
                        }
                    }
                }),
                (_r.queryForListening_ = function (t) {
                    return t.getQueryParams().loadsAllData() &&
                        !t.getQueryParams().isDefault()
                        ? t.getRef()
                        : t
                }),
                (_r.prototype.setupListener_ = function (t, e) {
                    var n = t.path,
                        r = this.tagForQuery_(t),
                        i = this.createListenerForView_(e),
                        o = this.listenProvider_.startListening(
                            _r.queryForListening_(t),
                            r,
                            i.hashFn,
                            i.onComplete
                        ),
                        s = this.syncPointTree_.subtree(n)
                    if (r)
                        C(
                            !s.value.hasCompleteView(),
                            "If we're adding a query, it shouldn't be shadowed"
                        )
                    else
                        for (
                            var a = s.fold(function (t, e, n) {
                                    if (
                                        !t.isEmpty() &&
                                        e &&
                                        e.hasCompleteView()
                                    )
                                        return [e.getCompleteView().getQuery()]
                                    var r = []
                                    return (
                                        e &&
                                            (r = r.concat(
                                                e
                                                    .getQueryViews()
                                                    .map(function (t) {
                                                        return t.getQuery()
                                                    })
                                            )),
                                        Et(n, function (t, e) {
                                            r = r.concat(e)
                                        }),
                                        r
                                    )
                                }),
                                h = 0;
                            h < a.length;
                            ++h
                        ) {
                            var l = a[h]
                            this.listenProvider_.stopListening(
                                _r.queryForListening_(l),
                                this.tagForQuery_(l)
                            )
                        }
                    return o
                }),
                (_r.prototype.createListenerForView_ = function (t) {
                    var n = this,
                        r = t.getQuery(),
                        i = this.tagForQuery_(r)
                    return {
                        hashFn: function () {
                            return (t.getServerCache() || Ye.EMPTY_NODE).hash()
                        },
                        onComplete: function (t) {
                            if ('ok' === t)
                                return i
                                    ? n.applyTaggedListenComplete(r.path, i)
                                    : n.applyListenComplete(r.path)
                            var e = (function (t, e) {
                                var n = 'Unknown Error'
                                'too_big' === t
                                    ? (n =
                                          'The data requested exceeds the maximum size that can be accessed with a single request.')
                                    : 'permission_denied' === t
                                    ? (n =
                                          "Client doesn't have permission to access the desired data.")
                                    : 'unavailable' === t &&
                                      (n = 'The service is unavailable')
                                var r = new Error(
                                    t + ' at ' + e.path.toString() + ': ' + n
                                )
                                return (r.code = t.toUpperCase()), r
                            })(t, r)
                            return n.removeEventRegistration(r, null, e)
                        },
                    }
                }),
                (_r.makeQueryKey_ = function (t) {
                    return t.path.toString() + '$' + t.queryIdentifier()
                }),
                (_r.parseQueryKey_ = function (t) {
                    var e = t.indexOf('$')
                    return (
                        C(-1 !== e && e < t.length - 1, 'Bad queryKey.'),
                        {
                            queryId: t.substr(e + 1),
                            path: new Nt(t.substr(0, e)),
                        }
                    )
                }),
                (_r.prototype.queryKeyForTag_ = function (t) {
                    return this.tagToQueryMap.get(t)
                }),
                (_r.prototype.tagForQuery_ = function (t) {
                    var e = _r.makeQueryKey_(t)
                    return this.queryToTagMap.get(e)
                }),
                (_r.getNextQueryTag_ = function () {
                    return _r.nextQueryTag_++
                }),
                (_r.prototype.applyTaggedOperation_ = function (t, e) {
                    var n = this.syncPointTree_.get(t)
                    C(n, "Missing sync point for query tag that we're tracking")
                    var r = this.pendingWriteTree_.childWrites(t)
                    return n.applyOperation(e, r, null)
                }),
                (_r.prototype.applyOperationToSyncPoints_ = function (t) {
                    return this.applyOperationHelper_(
                        t,
                        this.syncPointTree_,
                        null,
                        this.pendingWriteTree_.childWrites(Nt.Empty)
                    )
                }),
                (_r.prototype.applyOperationHelper_ = function (t, e, n, r) {
                    if (t.path.isEmpty())
                        return this.applyOperationDescendantsHelper_(t, e, n, r)
                    var i = e.get(Nt.Empty)
                    null == n &&
                        null != i &&
                        (n = i.getCompleteServerCache(Nt.Empty))
                    var o = [],
                        s = t.path.getFront(),
                        a = t.operationForChild(s),
                        h = e.children.get(s)
                    if (h && a) {
                        var l = n ? n.getImmediateChild(s) : null,
                            u = r.child(s)
                        o = o.concat(this.applyOperationHelper_(a, h, l, u))
                    }
                    return i && (o = o.concat(i.applyOperation(t, r, n))), o
                }),
                (_r.prototype.applyOperationDescendantsHelper_ = function (
                    o,
                    t,
                    s,
                    a
                ) {
                    var h = this,
                        e = t.get(Nt.Empty)
                    null == s &&
                        null != e &&
                        (s = e.getCompleteServerCache(Nt.Empty))
                    var l = []
                    return (
                        t.children.inorderTraversal(function (t, e) {
                            var n = s ? s.getImmediateChild(t) : null,
                                r = a.child(t),
                                i = o.operationForChild(t)
                            i &&
                                (l = l.concat(
                                    h.applyOperationDescendantsHelper_(
                                        i,
                                        e,
                                        n,
                                        r
                                    )
                                ))
                        }),
                        e && (l = l.concat(e.applyOperation(o, a, s))),
                        l
                    )
                }),
                (_r.nextQueryTag_ = 1),
                _r)
            function _r(t) {
                ;(this.listenProvider_ = t),
                    (this.syncPointTree_ = Dn.Empty),
                    (this.pendingWriteTree_ = new ur()),
                    (this.tagToQueryMap = new Map()),
                    (this.queryToTagMap = new Map())
            }
            var yr =
                ((vr.prototype.getNode = function (t) {
                    return this.rootNode_.getChild(t)
                }),
                (vr.prototype.updateSnapshot = function (t, e) {
                    this.rootNode_ = this.rootNode_.updateChild(t, e)
                }),
                vr)
            function vr() {
                this.rootNode_ = Ye.EMPTY_NODE
            }
            var gr =
                ((mr.prototype.getToken = function (t) {
                    return this.auth_
                        ? this.auth_.getToken(t).catch(function (t) {
                              return t &&
                                  'auth/token-not-initialized' === t.code
                                  ? (tt(
                                        'Got auth/token-not-initialized error.  Treating as null token.'
                                    ),
                                    null)
                                  : Promise.reject(t)
                          })
                        : Promise.resolve(null)
                }),
                (mr.prototype.addTokenChangeListener = function (e) {
                    this.auth_
                        ? this.auth_.addAuthTokenListener(e)
                        : (setTimeout(function () {
                              return e(null)
                          }, 0),
                          this.authProvider_.get().then(function (t) {
                              return t.addAuthTokenListener(e)
                          }))
                }),
                (mr.prototype.removeTokenChangeListener = function (e) {
                    this.authProvider_.get().then(function (t) {
                        return t.removeAuthTokenListener(e)
                    })
                }),
                (mr.prototype.notifyForInvalidToken = function () {
                    var t =
                        'Provided authentication credentials for the app named "' +
                        this.app_.name +
                        '" are invalid. This usually indicates your app was not initialized correctly. '
                    'credential' in this.app_.options
                        ? (t +=
                              'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                        : 'serviceAccount' in this.app_.options
                        ? (t +=
                              'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                        : (t +=
                              'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
                        it(t)
                }),
                mr)
            function mr(t, e) {
                var n = this
                ;(this.app_ = t),
                    (this.authProvider_ = e),
                    (this.auth_ = null),
                    (this.auth_ = e.getImmediate({ optional: !0 })),
                    this.auth_ ||
                        e.get().then(function (t) {
                            return (n.auth_ = t)
                        })
            }
            var Cr =
                ((Er.prototype.incrementCounter = function (t, e) {
                    void 0 === e && (e = 1),
                        N(this.counters_, t) || (this.counters_[t] = 0),
                        (this.counters_[t] += e)
                }),
                (Er.prototype.get = function () {
                    return n(this.counters_)
                }),
                Er)
            function Er() {
                this.counters_ = {}
            }
            var wr =
                ((br.getCollection = function (t) {
                    var e = t.toString()
                    return (
                        this.collections_[e] ||
                            (this.collections_[e] = new Cr()),
                        this.collections_[e]
                    )
                }),
                (br.getOrCreateReporter = function (t, e) {
                    var n = t.toString()
                    return (
                        this.reporters_[n] || (this.reporters_[n] = e()),
                        this.reporters_[n]
                    )
                }),
                (br.collections_ = {}),
                (br.reporters_ = {}),
                br)
            function br() {}
            var Sr =
                ((Tr.prototype.get = function () {
                    var t = this.collection_.get(),
                        n = u({}, t)
                    return (
                        this.last_ &&
                            Et(this.last_, function (t, e) {
                                n[t] = n[t] - e
                            }),
                        (this.last_ = t),
                        n
                    )
                }),
                Tr)
            function Tr(t) {
                ;(this.collection_ = t), (this.last_ = null)
            }
            var Ir =
                ((Nr.prototype.includeStat = function (t) {
                    this.statsToReport_[t] = !0
                }),
                (Nr.prototype.reportStats_ = function () {
                    var n = this,
                        t = this.statsListener_.get(),
                        r = {},
                        i = !1
                    Et(t, function (t, e) {
                        0 < e &&
                            N(n.statsToReport_, t) &&
                            ((r[t] = e), (i = !0))
                    }),
                        i && this.server_.reportStats(r),
                        St(
                            this.reportStats_.bind(this),
                            Math.floor(2 * Math.random() * 3e5)
                        )
                }),
                Nr)
            function Nr(t, e) {
                ;(this.server_ = e),
                    (this.statsToReport_ = {}),
                    (this.statsListener_ = new Sr(t))
                var n = 1e4 + 2e4 * Math.random()
                St(this.reportStats_.bind(this), Math.floor(n))
            }
            var Rr =
                ((Pr.prototype.queueEvents = function (t) {
                    for (var e = null, n = 0; n < t.length; n++) {
                        var r = t[n],
                            i = r.getPath()
                        null === e ||
                            i.equals(e.getPath()) ||
                            (this.eventLists_.push(e), (e = null)),
                            null === e && (e = new Dr(i)),
                            e.add(r)
                    }
                    e && this.eventLists_.push(e)
                }),
                (Pr.prototype.raiseEventsAtPath = function (e, t) {
                    this.queueEvents(t),
                        this.raiseQueuedEventsMatchingPredicate_(function (t) {
                            return t.equals(e)
                        })
                }),
                (Pr.prototype.raiseEventsForChangedPath = function (e, t) {
                    this.queueEvents(t),
                        this.raiseQueuedEventsMatchingPredicate_(function (t) {
                            return t.contains(e) || e.contains(t)
                        })
                }),
                (Pr.prototype.raiseQueuedEventsMatchingPredicate_ = function (
                    t
                ) {
                    this.recursionDepth_++
                    for (var e = !0, n = 0; n < this.eventLists_.length; n++) {
                        var r = this.eventLists_[n]
                        r &&
                            (t(r.getPath())
                                ? (this.eventLists_[n].raise(),
                                  (this.eventLists_[n] = null))
                                : (e = !1))
                    }
                    e && (this.eventLists_ = []), this.recursionDepth_--
                }),
                Pr)
            function Pr() {
                ;(this.eventLists_ = []), (this.recursionDepth_ = 0)
            }
            var Dr =
                ((Or.prototype.add = function (t) {
                    this.events_.push(t)
                }),
                (Or.prototype.raise = function () {
                    for (var t = 0; t < this.events_.length; t++) {
                        var e = this.events_[t]
                        if (null !== e) {
                            this.events_[t] = null
                            var n = e.getEventRunner()
                            _t && tt('event: ' + e.toString()), bt(n)
                        }
                    }
                }),
                (Or.prototype.getPath = function () {
                    return this.path_
                }),
                Or)
            function Or(t) {
                ;(this.path_ = t), (this.events_ = [])
            }
            var xr =
                ((kr.prototype.trigger = function (t) {
                    for (var e = [], n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n]
                    if (Array.isArray(this.listeners_[t]))
                        for (
                            var r = o(this.listeners_[t]), i = 0;
                            i < r.length;
                            i++
                        )
                            r[i].callback.apply(r[i].context, e)
                }),
                (kr.prototype.on = function (t, e, n) {
                    this.validateEventType_(t),
                        (this.listeners_[t] = this.listeners_[t] || []),
                        this.listeners_[t].push({ callback: e, context: n })
                    var r = this.getInitialEvent(t)
                    r && e.apply(n, r)
                }),
                (kr.prototype.off = function (t, e, n) {
                    this.validateEventType_(t)
                    for (
                        var r = this.listeners_[t] || [], i = 0;
                        i < r.length;
                        i++
                    )
                        if (r[i].callback === e && (!n || n === r[i].context))
                            return void r.splice(i, 1)
                }),
                (kr.prototype.validateEventType_ = function (e) {
                    C(
                        this.allowedEvents_.find(function (t) {
                            return t === e
                        }),
                        'Unknown event: ' + e
                    )
                }),
                kr)
            function kr(t) {
                ;(this.allowedEvents_ = t),
                    (this.listeners_ = {}),
                    C(
                        Array.isArray(t) && 0 < t.length,
                        'Requires a non-empty array'
                    )
            }
            var Fr,
                Ar =
                    (t(Lr, (Fr = xr)),
                    (Lr.getInstance = function () {
                        return new Lr()
                    }),
                    (Lr.prototype.getInitialEvent = function (t) {
                        return (
                            C('visible' === t, 'Unknown event type: ' + t),
                            [this.visible_]
                        )
                    }),
                    Lr)
            function Lr() {
                var e,
                    t,
                    n = Fr.call(this, ['visible']) || this
                return (
                    'undefined' != typeof document &&
                        void 0 !== document.addEventListener &&
                        (void 0 !== document.hidden
                            ? ((t = 'visibilitychange'), (e = 'hidden'))
                            : void 0 !== document.mozHidden
                            ? ((t = 'mozvisibilitychange'), (e = 'mozHidden'))
                            : void 0 !== document.msHidden
                            ? ((t = 'msvisibilitychange'), (e = 'msHidden'))
                            : void 0 !== document.webkitHidden &&
                              ((t = 'webkitvisibilitychange'),
                              (e = 'webkitHidden'))),
                    (n.visible_ = !0),
                    t &&
                        document.addEventListener(
                            t,
                            function () {
                                var t = !document[e]
                                t !== n.visible_ &&
                                    ((n.visible_ = t), n.trigger('visible', t))
                            },
                            !1
                        ),
                    n
                )
            }
            var Mr,
                Wr =
                    (t(Qr, (Mr = xr)),
                    (Qr.getInstance = function () {
                        return new Qr()
                    }),
                    (Qr.prototype.getInitialEvent = function (t) {
                        return (
                            C('online' === t, 'Unknown event type: ' + t),
                            [this.online_]
                        )
                    }),
                    (Qr.prototype.currentlyOnline = function () {
                        return this.online_
                    }),
                    Qr)
            function Qr() {
                var t = Mr.call(this, ['online']) || this
                return (
                    (t.online_ = !0),
                    'undefined' == typeof window ||
                        void 0 === window.addEventListener ||
                        d() ||
                        (window.addEventListener(
                            'online',
                            function () {
                                t.online_ ||
                                    ((t.online_ = !0), t.trigger('online', !0))
                            },
                            !1
                        ),
                        window.addEventListener(
                            'offline',
                            function () {
                                t.online_ &&
                                    ((t.online_ = !1), t.trigger('online', !1))
                            },
                            !1
                        )),
                    t
                )
            }
            var qr =
                ((Ur.prototype.closeAfter = function (t, e) {
                    ;(this.closeAfterResponse = t),
                        (this.onClose = e),
                        this.closeAfterResponse < this.currentResponseNum &&
                            (this.onClose(), (this.onClose = null))
                }),
                (Ur.prototype.handleResponse = function (t, e) {
                    var r = this
                    this.pendingResponses[t] = e
                    for (
                        var n = function () {
                                var e = i.pendingResponses[i.currentResponseNum]
                                delete i.pendingResponses[i.currentResponseNum]
                                for (
                                    var t = function (t) {
                                            e[t] &&
                                                bt(function () {
                                                    r.onMessage_(e[t])
                                                })
                                        },
                                        n = 0;
                                    n < e.length;
                                    ++n
                                )
                                    t(n)
                                if (
                                    i.currentResponseNum ===
                                    i.closeAfterResponse
                                )
                                    return (
                                        i.onClose &&
                                            (i.onClose(), (i.onClose = null)),
                                        'break'
                                    )
                                i.currentResponseNum++
                            },
                            i = this;
                        this.pendingResponses[this.currentResponseNum] &&
                        'break' !== n();

                    );
                }),
                Ur)
            function Ur(t) {
                ;(this.onMessage_ = t),
                    (this.pendingResponses = []),
                    (this.currentResponseNum = 0),
                    (this.closeAfterResponse = -1),
                    (this.onClose = null)
            }
            var Vr =
                ((Hr.prototype.open = function (t, e) {
                    var s = this
                    ;(this.curSegmentNum = 0),
                        (this.onDisconnect_ = e),
                        (this.myPacketOrderer = new qr(t)),
                        (this.isClosed_ = !1),
                        (this.connectTimeoutTimer_ = setTimeout(function () {
                            s.log_('Timed out trying to connect.'),
                                s.onClosed_(),
                                (s.connectTimeoutTimer_ = null)
                        }, Math.floor(3e4))),
                        (function (t) {
                            if ('complete' === document.readyState) t()
                            else {
                                var e = !1,
                                    n = function () {
                                        document.body
                                            ? e || ((e = !0), t())
                                            : setTimeout(n, Math.floor(10))
                                    }
                                document.addEventListener
                                    ? (document.addEventListener(
                                          'DOMContentLoaded',
                                          n,
                                          !1
                                      ),
                                      window.addEventListener('load', n, !1))
                                    : document.attachEvent &&
                                      (document.attachEvent(
                                          'onreadystatechange',
                                          function () {
                                              'complete' ===
                                                  document.readyState && n()
                                          }
                                      ),
                                      window.attachEvent('onload', n))
                            }
                        })(function () {
                            if (!s.isClosed_) {
                                s.scriptTagHolder = new Br(
                                    function () {
                                        for (
                                            var t = [], e = 0;
                                            e < arguments.length;
                                            e++
                                        )
                                            t[e] = arguments[e]
                                        var n = _(t, 5),
                                            r = n[0],
                                            i = n[1],
                                            o = n[2]
                                        if (
                                            (n[3],
                                            n[4],
                                            s.incrementIncomingBytes_(t),
                                            s.scriptTagHolder)
                                        )
                                            if (
                                                (s.connectTimeoutTimer_ &&
                                                    (clearTimeout(
                                                        s.connectTimeoutTimer_
                                                    ),
                                                    (s.connectTimeoutTimer_ = null)),
                                                (s.everConnected_ = !0),
                                                'start' === r)
                                            )
                                                (s.id = i), (s.password = o)
                                            else {
                                                if ('close' !== r)
                                                    throw new Error(
                                                        'Unrecognized command received: ' +
                                                            r
                                                    )
                                                i
                                                    ? ((s.scriptTagHolder.sendNewPolls = !1),
                                                      s.myPacketOrderer.closeAfter(
                                                          i,
                                                          function () {
                                                              s.onClosed_()
                                                          }
                                                      ))
                                                    : s.onClosed_()
                                            }
                                    },
                                    function () {
                                        for (
                                            var t = [], e = 0;
                                            e < arguments.length;
                                            e++
                                        )
                                            t[e] = arguments[e]
                                        var n = _(t, 2),
                                            r = n[0],
                                            i = n[1]
                                        s.incrementIncomingBytes_(t),
                                            s.myPacketOrderer.handleResponse(
                                                r,
                                                i
                                            )
                                    },
                                    function () {
                                        s.onClosed_()
                                    },
                                    s.urlFn
                                )
                                var t = { start: 't' }
                                ;(t.ser = Math.floor(1e8 * Math.random())),
                                    s.scriptTagHolder
                                        .uniqueCallbackIdentifier &&
                                        (t.cb =
                                            s.scriptTagHolder.uniqueCallbackIdentifier),
                                    (t.v = '5'),
                                    s.transportSessionId &&
                                        (t.s = s.transportSessionId),
                                    s.lastSessionId && (t.ls = s.lastSessionId),
                                    'undefined' != typeof location &&
                                        location.href &&
                                        -1 !== location.href.indexOf(Ot) &&
                                        (t.r = 'f')
                                var e = s.urlFn(t)
                                s.log_('Connecting via long-poll to ' + e),
                                    s.scriptTagHolder.addTag(e, function () {})
                            }
                        })
                }),
                (Hr.prototype.start = function () {
                    this.scriptTagHolder.startLongPoll(this.id, this.password),
                        this.addDisconnectPingFrame(this.id, this.password)
                }),
                (Hr.forceAllow = function () {
                    Hr.forceAllow_ = !0
                }),
                (Hr.forceDisallow = function () {
                    Hr.forceDisallow_ = !0
                }),
                (Hr.isAvailable = function () {
                    return (
                        !!Hr.forceAllow_ ||
                        !(
                            Hr.forceDisallow_ ||
                            'undefined' == typeof document ||
                            null == document.createElement ||
                            ('object' == typeof window &&
                                window.chrome &&
                                window.chrome.extension &&
                                !/^chrome/.test(window.location.href)) ||
                            ('object' == typeof Windows &&
                                'object' == typeof Windows.UI)
                        )
                    )
                }),
                (Hr.prototype.markConnectionHealthy = function () {}),
                (Hr.prototype.shutdown_ = function () {
                    ;(this.isClosed_ = !0),
                        this.scriptTagHolder &&
                            (this.scriptTagHolder.close(),
                            (this.scriptTagHolder = null)),
                        this.myDisconnFrame &&
                            (document.body.removeChild(this.myDisconnFrame),
                            (this.myDisconnFrame = null)),
                        this.connectTimeoutTimer_ &&
                            (clearTimeout(this.connectTimeoutTimer_),
                            (this.connectTimeoutTimer_ = null))
                }),
                (Hr.prototype.onClosed_ = function () {
                    this.isClosed_ ||
                        (this.log_('Longpoll is closing itself'),
                        this.shutdown_(),
                        this.onDisconnect_ &&
                            (this.onDisconnect_(this.everConnected_),
                            (this.onDisconnect_ = null)))
                }),
                (Hr.prototype.close = function () {
                    this.isClosed_ ||
                        (this.log_('Longpoll is being closed.'),
                        this.shutdown_())
                }),
                (Hr.prototype.send = function (t) {
                    var e = T(t)
                    ;(this.bytesSent += e.length),
                        this.stats_.incrementCounter('bytes_sent', e.length)
                    for (
                        var n = (function (t) {
                                var e = s(t)
                                return l.encodeByteArray(e, !0)
                            })(e),
                            r = ht(n, 1840),
                            i = 0;
                        i < r.length;
                        i++
                    )
                        this.scriptTagHolder.enqueueSegment(
                            this.curSegmentNum,
                            r.length,
                            r[i]
                        ),
                            this.curSegmentNum++
                }),
                (Hr.prototype.addDisconnectPingFrame = function (t, e) {
                    this.myDisconnFrame = document.createElement('iframe')
                    var n = { dframe: 't' }
                    ;(n.id = t),
                        (n.pw = e),
                        (this.myDisconnFrame.src = this.urlFn(n)),
                        (this.myDisconnFrame.style.display = 'none'),
                        document.body.appendChild(this.myDisconnFrame)
                }),
                (Hr.prototype.incrementIncomingBytes_ = function (t) {
                    var e = T(t).length
                    ;(this.bytesReceived += e),
                        this.stats_.incrementCounter('bytes_received', e)
                }),
                Hr)
            function Hr(t, e, n, r) {
                ;(this.connId = t),
                    (this.repoInfo = e),
                    (this.transportSessionId = n),
                    (this.lastSessionId = r),
                    (this.bytesSent = 0),
                    (this.bytesReceived = 0),
                    (this.everConnected_ = !1),
                    (this.log_ = et(t)),
                    (this.stats_ = wr.getCollection(e)),
                    (this.urlFn = function (t) {
                        return e.connectionURL(kt, t)
                    })
            }
            var Br =
                ((jr.createIFrame_ = function () {
                    var e = document.createElement('iframe')
                    if (((e.style.display = 'none'), !document.body))
                        throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.'
                    document.body.appendChild(e)
                    try {
                        e.contentWindow.document ||
                            tt('No IE domain setting required')
                    } catch (t) {
                        var n = document.domain
                        e.src =
                            "javascript:void((function(){document.open();document.domain='" +
                            n +
                            "';document.close();})())"
                    }
                    return (
                        e.contentDocument
                            ? (e.doc = e.contentDocument)
                            : e.contentWindow
                            ? (e.doc = e.contentWindow.document)
                            : e.document && (e.doc = e.document),
                        e
                    )
                }),
                (jr.prototype.close = function () {
                    var t = this
                    ;(this.alive = !1),
                        this.myIFrame &&
                            ((this.myIFrame.doc.body.innerHTML = ''),
                            setTimeout(function () {
                                null !== t.myIFrame &&
                                    (document.body.removeChild(t.myIFrame),
                                    (t.myIFrame = null))
                            }, Math.floor(0)))
                    var e = this.onDisconnect
                    e && ((this.onDisconnect = null), e())
                }),
                (jr.prototype.startLongPoll = function (t, e) {
                    for (
                        this.myID = t, this.myPW = e, this.alive = !0;
                        this.newRequest_();

                    );
                }),
                (jr.prototype.newRequest_ = function () {
                    if (
                        this.alive &&
                        this.sendNewPolls &&
                        this.outstandingRequests.size <
                            (0 < this.pendingSegs.length ? 2 : 1)
                    ) {
                        this.currentSerial++
                        var t = {}
                        ;(t.id = this.myID),
                            (t.pw = this.myPW),
                            (t.ser = this.currentSerial)
                        for (
                            var e = this.urlFn(t), n = '', r = 0;
                            0 < this.pendingSegs.length &&
                            this.pendingSegs[0].d.length + 30 + n.length <=
                                1870;

                        ) {
                            var i = this.pendingSegs.shift()
                            ;(n =
                                n +
                                '&seg' +
                                r +
                                '=' +
                                i.seg +
                                '&ts' +
                                r +
                                '=' +
                                i.ts +
                                '&d' +
                                r +
                                '=' +
                                i.d),
                                r++
                        }
                        return (
                            (e += n),
                            this.addLongPollTag_(e, this.currentSerial),
                            !0
                        )
                    }
                    return !1
                }),
                (jr.prototype.enqueueSegment = function (t, e, n) {
                    this.pendingSegs.push({ seg: t, ts: e, d: n }),
                        this.alive && this.newRequest_()
                }),
                (jr.prototype.addLongPollTag_ = function (t, e) {
                    var n = this
                    function r() {
                        n.outstandingRequests.delete(e), n.newRequest_()
                    }
                    this.outstandingRequests.add(e)
                    var i = setTimeout(r, Math.floor(25e3))
                    this.addTag(t, function () {
                        clearTimeout(i), r()
                    })
                }),
                (jr.prototype.addTag = function (t, n) {
                    var r = this
                    setTimeout(function () {
                        try {
                            if (!r.sendNewPolls) return
                            var e = r.myIFrame.doc.createElement('script')
                            ;(e.type = 'text/javascript'),
                                (e.async = !0),
                                (e.src = t),
                                (e.onload = e.onreadystatechange = function () {
                                    var t = e.readyState
                                    ;(t &&
                                        'loaded' !== t &&
                                        'complete' !== t) ||
                                        ((e.onload = e.onreadystatechange = null),
                                        e.parentNode &&
                                            e.parentNode.removeChild(e),
                                        n())
                                }),
                                (e.onerror = function () {
                                    tt('Long-poll script failed to load: ' + t),
                                        (r.sendNewPolls = !1),
                                        r.close()
                                }),
                                r.myIFrame.doc.body.appendChild(e)
                        } catch (t) {}
                    }, Math.floor(1))
                }),
                jr)
            function jr(t, e, n, r) {
                ;(this.onDisconnect = n),
                    (this.urlFn = r),
                    (this.outstandingRequests = new Set()),
                    (this.pendingSegs = []),
                    (this.currentSerial = Math.floor(1e8 * Math.random())),
                    (this.sendNewPolls = !0),
                    (this.uniqueCallbackIdentifier = dt()),
                    (window['pLPCommand' + this.uniqueCallbackIdentifier] = t),
                    (window['pRTLPCB' + this.uniqueCallbackIdentifier] = e),
                    (this.myIFrame = jr.createIFrame_())
                var i = ''
                this.myIFrame.src &&
                    'javascript:' ===
                        this.myIFrame.src.substr(0, 'javascript:'.length) &&
                    (i =
                        '<script>document.domain="' +
                        document.domain +
                        '";</script>')
                var o = '<html><body>' + i + '</body></html>'
                try {
                    this.myIFrame.doc.open(),
                        this.myIFrame.doc.write(o),
                        this.myIFrame.doc.close()
                } catch (t) {
                    tt('frame writing exception'), t.stack && tt(t.stack), tt(t)
                }
            }
            var Kr = ''
            var Yr = null
            'undefined' != typeof MozWebSocket
                ? (Yr = MozWebSocket)
                : 'undefined' != typeof WebSocket && (Yr = WebSocket)
            var zr =
                ((Gr.connectionURL_ = function (t, e, n) {
                    var r = { v: '5' }
                    return (
                        'undefined' != typeof location &&
                            location.href &&
                            -1 !== location.href.indexOf(Ot) &&
                            (r.r = 'f'),
                        e && (r.s = e),
                        n && (r.ls = n),
                        t.connectionURL(xt, r)
                    )
                }),
                (Gr.prototype.open = function (t, e) {
                    var n = this
                    ;(this.onDisconnect = e),
                        (this.onMessage = t),
                        this.log_('Websocket connecting to ' + this.connURL),
                        (this.everConnected_ = !1),
                        ut.set('previous_websocket_failure', !0)
                    try {
                        if (y()) {
                            var r = h.NODE_ADMIN ? 'AdminNode' : 'Node',
                                i = {
                                    headers: {
                                        'User-Agent':
                                            'Firebase/5/' +
                                            Kr +
                                            '/' +
                                            process.platform +
                                            '/' +
                                            r,
                                    },
                                },
                                o = process.env,
                                s =
                                    0 === this.connURL.indexOf('wss://')
                                        ? o.HTTPS_PROXY || o.https_proxy
                                        : o.HTTP_PROXY || o.http_proxy
                            s && (i.proxy = { origin: s }),
                                (this.mySock = new Yr(this.connURL, [], i))
                        } else this.mySock = new Yr(this.connURL)
                    } catch (t) {
                        this.log_('Error instantiating WebSocket.')
                        var a = t.message || t.data
                        return a && this.log_(a), void this.onClosed_()
                    }
                    ;(this.mySock.onopen = function () {
                        n.log_('Websocket connected.'), (n.everConnected_ = !0)
                    }),
                        (this.mySock.onclose = function () {
                            n.log_('Websocket connection was disconnected.'),
                                (n.mySock = null),
                                n.onClosed_()
                        }),
                        (this.mySock.onmessage = function (t) {
                            n.handleIncomingFrame(t)
                        }),
                        (this.mySock.onerror = function (t) {
                            n.log_('WebSocket error.  Closing connection.')
                            var e = t.message || t.data
                            e && n.log_(e), n.onClosed_()
                        })
                }),
                (Gr.prototype.start = function () {}),
                (Gr.forceDisallow = function () {
                    Gr.forceDisallow_ = !0
                }),
                (Gr.isAvailable = function () {
                    var t = !1
                    if (
                        'undefined' != typeof navigator &&
                        navigator.userAgent
                    ) {
                        var e = navigator.userAgent.match(
                            /Android ([0-9]{0,}\.[0-9]{0,})/
                        )
                        e && 1 < e.length && parseFloat(e[1]) < 4.4 && (t = !0)
                    }
                    return !t && null !== Yr && !Gr.forceDisallow_
                }),
                (Gr.previouslyFailed = function () {
                    return (
                        ut.isInMemoryStorage ||
                        !0 === ut.get('previous_websocket_failure')
                    )
                }),
                (Gr.prototype.markConnectionHealthy = function () {
                    ut.remove('previous_websocket_failure')
                }),
                (Gr.prototype.appendFrame_ = function (t) {
                    if (
                        (this.frames.push(t),
                        this.frames.length === this.totalFrames)
                    ) {
                        var e = this.frames.join('')
                        this.frames = null
                        var n = S(e)
                        this.onMessage(n)
                    }
                }),
                (Gr.prototype.handleNewFrameCount_ = function (t) {
                    ;(this.totalFrames = t), (this.frames = [])
                }),
                (Gr.prototype.extractFrameCount_ = function (t) {
                    if (
                        (C(
                            null === this.frames,
                            'We already have a frame buffer'
                        ),
                        t.length <= 6)
                    ) {
                        var e = Number(t)
                        if (!isNaN(e)) return this.handleNewFrameCount_(e), null
                    }
                    return this.handleNewFrameCount_(1), t
                }),
                (Gr.prototype.handleIncomingFrame = function (t) {
                    if (null !== this.mySock) {
                        var e = t.data
                        if (
                            ((this.bytesReceived += e.length),
                            this.stats_.incrementCounter(
                                'bytes_received',
                                e.length
                            ),
                            this.resetKeepAlive(),
                            null !== this.frames)
                        )
                            this.appendFrame_(e)
                        else {
                            var n = this.extractFrameCount_(e)
                            null !== n && this.appendFrame_(n)
                        }
                    }
                }),
                (Gr.prototype.send = function (t) {
                    this.resetKeepAlive()
                    var e = T(t)
                    ;(this.bytesSent += e.length),
                        this.stats_.incrementCounter('bytes_sent', e.length)
                    var n = ht(e, 16384)
                    1 < n.length && this.sendString_(String(n.length))
                    for (var r = 0; r < n.length; r++) this.sendString_(n[r])
                }),
                (Gr.prototype.shutdown_ = function () {
                    ;(this.isClosed_ = !0),
                        this.keepaliveTimer &&
                            (clearInterval(this.keepaliveTimer),
                            (this.keepaliveTimer = null)),
                        this.mySock &&
                            (this.mySock.close(), (this.mySock = null))
                }),
                (Gr.prototype.onClosed_ = function () {
                    this.isClosed_ ||
                        (this.log_('WebSocket is closing itself'),
                        this.shutdown_(),
                        this.onDisconnect &&
                            (this.onDisconnect(this.everConnected_),
                            (this.onDisconnect = null)))
                }),
                (Gr.prototype.close = function () {
                    this.isClosed_ ||
                        (this.log_('WebSocket is being closed'),
                        this.shutdown_())
                }),
                (Gr.prototype.resetKeepAlive = function () {
                    var t = this
                    clearInterval(this.keepaliveTimer),
                        (this.keepaliveTimer = setInterval(function () {
                            t.mySock && t.sendString_('0'), t.resetKeepAlive()
                        }, Math.floor(45e3)))
                }),
                (Gr.prototype.sendString_ = function (t) {
                    try {
                        this.mySock.send(t)
                    } catch (t) {
                        this.log_(
                            'Exception thrown from WebSocket.send():',
                            t.message || t.data,
                            'Closing connection.'
                        ),
                            setTimeout(this.onClosed_.bind(this), 0)
                    }
                }),
                (Gr.responsesRequiredToBeHealthy = 2),
                (Gr.healthyTimeout = 3e4),
                Gr)
            function Gr(t, e, n, r) {
                ;(this.connId = t),
                    (this.keepaliveTimer = null),
                    (this.frames = null),
                    (this.totalFrames = 0),
                    (this.bytesSent = 0),
                    (this.bytesReceived = 0),
                    (this.log_ = et(this.connId)),
                    (this.stats_ = wr.getCollection(e)),
                    (this.connURL = Gr.connectionURL_(e, n, r))
            }
            var Xr =
                (Object.defineProperty($r, 'ALL_TRANSPORTS', {
                    get: function () {
                        return [Vr, zr]
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                ($r.prototype.initTransports_ = function (t) {
                    var e,
                        n,
                        r = zr && zr.isAvailable(),
                        i = r && !zr.previouslyFailed()
                    if (
                        (t.webSocketOnly &&
                            (r ||
                                it(
                                    "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
                                ),
                            (i = !0)),
                        i)
                    )
                        this.transports_ = [zr]
                    else {
                        var o = (this.transports_ = [])
                        try {
                            for (
                                var s = f($r.ALL_TRANSPORTS), a = s.next();
                                !a.done;
                                a = s.next()
                            ) {
                                var h = a.value
                                h && h.isAvailable() && o.push(h)
                            }
                        } catch (t) {
                            e = { error: t }
                        } finally {
                            try {
                                a && !a.done && (n = s.return) && n.call(s)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }
                }),
                ($r.prototype.initialTransport = function () {
                    if (0 < this.transports_.length) return this.transports_[0]
                    throw new Error('No transports available')
                }),
                ($r.prototype.upgradeTransport = function () {
                    return 1 < this.transports_.length
                        ? this.transports_[1]
                        : null
                }),
                $r)
            function $r(t) {
                this.initTransports_(t)
            }
            var Jr =
                ((Zr.prototype.start_ = function () {
                    var t = this,
                        e = this.transportManager_.initialTransport()
                    ;(this.conn_ = new e(
                        this.nextTransportId_(),
                        this.repoInfo_,
                        void 0,
                        this.lastSessionId
                    )),
                        (this.primaryResponsesRequired_ =
                            e.responsesRequiredToBeHealthy || 0)
                    var n = this.connReceiver_(this.conn_),
                        r = this.disconnReceiver_(this.conn_)
                    ;(this.tx_ = this.conn_),
                        (this.rx_ = this.conn_),
                        (this.secondaryConn_ = null),
                        (this.isHealthy_ = !1),
                        setTimeout(function () {
                            t.conn_ && t.conn_.open(n, r)
                        }, Math.floor(0))
                    var i = e.healthyTimeout || 0
                    0 < i &&
                        (this.healthyTimeout_ = St(function () {
                            ;(t.healthyTimeout_ = null),
                                t.isHealthy_ ||
                                    (t.conn_ && 102400 < t.conn_.bytesReceived
                                        ? (t.log_(
                                              'Connection exceeded healthy timeout but has received ' +
                                                  t.conn_.bytesReceived +
                                                  ' bytes.  Marking connection healthy.'
                                          ),
                                          (t.isHealthy_ = !0),
                                          t.conn_.markConnectionHealthy())
                                        : t.conn_ && 10240 < t.conn_.bytesSent
                                        ? t.log_(
                                              'Connection exceeded healthy timeout but has sent ' +
                                                  t.conn_.bytesSent +
                                                  ' bytes.  Leaving connection alive.'
                                          )
                                        : (t.log_(
                                              'Closing unhealthy connection after timeout.'
                                          ),
                                          t.close()))
                        }, Math.floor(i)))
                }),
                (Zr.prototype.nextTransportId_ = function () {
                    return 'c:' + this.id + ':' + this.connectionCount++
                }),
                (Zr.prototype.disconnReceiver_ = function (e) {
                    var n = this
                    return function (t) {
                        e === n.conn_
                            ? n.onConnectionLost_(t)
                            : e === n.secondaryConn_
                            ? (n.log_('Secondary connection lost.'),
                              n.onSecondaryConnectionLost_())
                            : n.log_('closing an old connection')
                    }
                }),
                (Zr.prototype.connReceiver_ = function (e) {
                    var n = this
                    return function (t) {
                        2 !== n.state_ &&
                            (e === n.rx_
                                ? n.onPrimaryMessageReceived_(t)
                                : e === n.secondaryConn_
                                ? n.onSecondaryMessageReceived_(t)
                                : n.log_('message on old connection'))
                    }
                }),
                (Zr.prototype.sendRequest = function (t) {
                    var e = { t: 'd', d: t }
                    this.sendData_(e)
                }),
                (Zr.prototype.tryCleanupConnection = function () {
                    this.tx_ === this.secondaryConn_ &&
                        this.rx_ === this.secondaryConn_ &&
                        (this.log_(
                            'cleaning up and promoting a connection: ' +
                                this.secondaryConn_.connId
                        ),
                        (this.conn_ = this.secondaryConn_),
                        (this.secondaryConn_ = null))
                }),
                (Zr.prototype.onSecondaryControl_ = function (t) {
                    if ('t' in t) {
                        var e = t.t
                        'a' === e
                            ? this.upgradeIfSecondaryHealthy_()
                            : 'r' === e
                            ? (this.log_(
                                  'Got a reset on secondary, closing it'
                              ),
                              this.secondaryConn_.close(),
                              (this.tx_ !== this.secondaryConn_ &&
                                  this.rx_ !== this.secondaryConn_) ||
                                  this.close())
                            : 'o' === e &&
                              (this.log_('got pong on secondary.'),
                              this.secondaryResponsesRequired_--,
                              this.upgradeIfSecondaryHealthy_())
                    }
                }),
                (Zr.prototype.onSecondaryMessageReceived_ = function (t) {
                    var e = at('t', t),
                        n = at('d', t)
                    if ('c' === e) this.onSecondaryControl_(n)
                    else {
                        if ('d' !== e)
                            throw new Error('Unknown protocol layer: ' + e)
                        this.pendingDataMessages.push(n)
                    }
                }),
                (Zr.prototype.upgradeIfSecondaryHealthy_ = function () {
                    this.secondaryResponsesRequired_ <= 0
                        ? (this.log_('Secondary connection is healthy.'),
                          (this.isHealthy_ = !0),
                          this.secondaryConn_.markConnectionHealthy(),
                          this.proceedWithUpgrade_())
                        : (this.log_('sending ping on secondary.'),
                          this.secondaryConn_.send({
                              t: 'c',
                              d: { t: 'p', d: {} },
                          }))
                }),
                (Zr.prototype.proceedWithUpgrade_ = function () {
                    this.secondaryConn_.start(),
                        this.log_('sending client ack on secondary'),
                        this.secondaryConn_.send({
                            t: 'c',
                            d: { t: 'a', d: {} },
                        }),
                        this.log_('Ending transmission on primary'),
                        this.conn_.send({ t: 'c', d: { t: 'n', d: {} } }),
                        (this.tx_ = this.secondaryConn_),
                        this.tryCleanupConnection()
                }),
                (Zr.prototype.onPrimaryMessageReceived_ = function (t) {
                    var e = at('t', t),
                        n = at('d', t)
                    'c' === e
                        ? this.onControl_(n)
                        : 'd' === e && this.onDataMessage_(n)
                }),
                (Zr.prototype.onDataMessage_ = function (t) {
                    this.onPrimaryResponse_(), this.onMessage_(t)
                }),
                (Zr.prototype.onPrimaryResponse_ = function () {
                    this.isHealthy_ ||
                        (this.primaryResponsesRequired_--,
                        this.primaryResponsesRequired_ <= 0 &&
                            (this.log_('Primary connection is healthy.'),
                            (this.isHealthy_ = !0),
                            this.conn_.markConnectionHealthy()))
                }),
                (Zr.prototype.onControl_ = function (t) {
                    var e = at('t', t)
                    if ('d' in t) {
                        var n = t.d
                        if ('h' === e) this.onHandshake_(n)
                        else if ('n' === e) {
                            this.log_('recvd end transmission on primary'),
                                (this.rx_ = this.secondaryConn_)
                            for (
                                var r = 0;
                                r < this.pendingDataMessages.length;
                                ++r
                            )
                                this.onDataMessage_(this.pendingDataMessages[r])
                            ;(this.pendingDataMessages = []),
                                this.tryCleanupConnection()
                        } else
                            's' === e
                                ? this.onConnectionShutdown_(n)
                                : 'r' === e
                                ? this.onReset_(n)
                                : 'e' === e
                                ? nt('Server Error: ' + n)
                                : 'o' === e
                                ? (this.log_('got pong on primary.'),
                                  this.onPrimaryResponse_(),
                                  this.sendPingOnPrimaryIfNecessary_())
                                : nt('Unknown control packet command: ' + e)
                    }
                }),
                (Zr.prototype.onHandshake_ = function (t) {
                    var e = t.ts,
                        n = t.v,
                        r = t.h
                    ;(this.sessionId = t.s),
                        this.repoInfo_.updateHost(r),
                        0 === this.state_ &&
                            (this.conn_.start(),
                            this.onConnectionEstablished_(this.conn_, e),
                            '5' !== n &&
                                it('Protocol version mismatch detected'),
                            this.tryStartUpgrade_())
                }),
                (Zr.prototype.tryStartUpgrade_ = function () {
                    var t = this.transportManager_.upgradeTransport()
                    t && this.startUpgrade_(t)
                }),
                (Zr.prototype.startUpgrade_ = function (t) {
                    var e = this
                    ;(this.secondaryConn_ = new t(
                        this.nextTransportId_(),
                        this.repoInfo_,
                        this.sessionId
                    )),
                        (this.secondaryResponsesRequired_ =
                            t.responsesRequiredToBeHealthy || 0)
                    var n = this.connReceiver_(this.secondaryConn_),
                        r = this.disconnReceiver_(this.secondaryConn_)
                    this.secondaryConn_.open(n, r),
                        St(function () {
                            e.secondaryConn_ &&
                                (e.log_('Timed out trying to upgrade.'),
                                e.secondaryConn_.close())
                        }, Math.floor(6e4))
                }),
                (Zr.prototype.onReset_ = function (t) {
                    this.log_('Reset packet received.  New host: ' + t),
                        this.repoInfo_.updateHost(t),
                        1 === this.state_
                            ? this.close()
                            : (this.closeConnections_(), this.start_())
                }),
                (Zr.prototype.onConnectionEstablished_ = function (t, e) {
                    var n = this
                    this.log_('Realtime connection established.'),
                        (this.conn_ = t),
                        (this.state_ = 1),
                        this.onReady_ &&
                            (this.onReady_(e, this.sessionId),
                            (this.onReady_ = null)),
                        0 === this.primaryResponsesRequired_
                            ? (this.log_('Primary connection is healthy.'),
                              (this.isHealthy_ = !0))
                            : St(function () {
                                  n.sendPingOnPrimaryIfNecessary_()
                              }, Math.floor(5e3))
                }),
                (Zr.prototype.sendPingOnPrimaryIfNecessary_ = function () {
                    this.isHealthy_ ||
                        1 !== this.state_ ||
                        (this.log_('sending ping on primary.'),
                        this.sendData_({ t: 'c', d: { t: 'p', d: {} } }))
                }),
                (Zr.prototype.onSecondaryConnectionLost_ = function () {
                    var t = this.secondaryConn_
                    ;(this.secondaryConn_ = null),
                        (this.tx_ !== t && this.rx_ !== t) || this.close()
                }),
                (Zr.prototype.onConnectionLost_ = function (t) {
                    ;(this.conn_ = null),
                        t || 0 !== this.state_
                            ? 1 === this.state_ &&
                              this.log_('Realtime connection lost.')
                            : (this.log_('Realtime connection failed.'),
                              this.repoInfo_.isCacheableHost() &&
                                  (ut.remove('host:' + this.repoInfo_.host),
                                  (this.repoInfo_.internalHost = this.repoInfo_.host))),
                        this.close()
                }),
                (Zr.prototype.onConnectionShutdown_ = function (t) {
                    this.log_(
                        'Connection shutdown command received. Shutting down...'
                    ),
                        this.onKill_ &&
                            (this.onKill_(t), (this.onKill_ = null)),
                        (this.onDisconnect_ = null),
                        this.close()
                }),
                (Zr.prototype.sendData_ = function (t) {
                    if (1 !== this.state_) throw 'Connection is not connected'
                    this.tx_.send(t)
                }),
                (Zr.prototype.close = function () {
                    2 !== this.state_ &&
                        (this.log_('Closing realtime connection.'),
                        (this.state_ = 2),
                        this.closeConnections_(),
                        this.onDisconnect_ &&
                            (this.onDisconnect_(), (this.onDisconnect_ = null)))
                }),
                (Zr.prototype.closeConnections_ = function () {
                    this.log_('Shutting down all connections'),
                        this.conn_ && (this.conn_.close(), (this.conn_ = null)),
                        this.secondaryConn_ &&
                            (this.secondaryConn_.close(),
                            (this.secondaryConn_ = null)),
                        this.healthyTimeout_ &&
                            (clearTimeout(this.healthyTimeout_),
                            (this.healthyTimeout_ = null))
                }),
                Zr)
            function Zr(t, e, n, r, i, o, s) {
                ;(this.id = t),
                    (this.repoInfo_ = e),
                    (this.onMessage_ = n),
                    (this.onReady_ = r),
                    (this.onDisconnect_ = i),
                    (this.onKill_ = o),
                    (this.lastSessionId = s),
                    (this.connectionCount = 0),
                    (this.pendingDataMessages = []),
                    (this.state_ = 0),
                    (this.log_ = et('c:' + this.id + ':')),
                    (this.transportManager_ = new Xr(e)),
                    this.log_('Connection created'),
                    this.start_()
            }
            var ti =
                ((ei.prototype.put = function (t, e, n, r) {}),
                (ei.prototype.merge = function (t, e, n, r) {}),
                (ei.prototype.refreshAuthToken = function (t) {}),
                (ei.prototype.onDisconnectPut = function (t, e, n) {}),
                (ei.prototype.onDisconnectMerge = function (t, e, n) {}),
                (ei.prototype.onDisconnectCancel = function (t, e) {}),
                (ei.prototype.reportStats = function (t) {}),
                ei)
            function ei() {}
            var ni,
                ri =
                    (t(ii, (ni = ti)),
                    (ii.prototype.sendRequest = function (t, e, n) {
                        var r = ++this.requestNumber_,
                            i = { r: r, a: t, b: e }
                        this.log_(T(i)),
                            C(
                                this.connected_,
                                "sendRequest call when we're not connected not allowed."
                            ),
                            this.realtime_.sendRequest(i),
                            n && (this.requestCBHash_[r] = n)
                    }),
                    (ii.prototype.listen = function (t, e, n, r) {
                        var i = t.queryIdentifier(),
                            o = t.path.toString()
                        this.log_('Listen called for ' + o + ' ' + i),
                            this.listens.has(o) ||
                                this.listens.set(o, new Map()),
                            C(
                                t.getQueryParams().isDefault() ||
                                    !t.getQueryParams().loadsAllData(),
                                'listen() called for non-default but complete query'
                            ),
                            C(
                                !this.listens.get(o).has(i),
                                'listen() called twice for same path/queryId.'
                            )
                        var s = { onComplete: r, hashFn: e, query: t, tag: n }
                        this.listens.get(o).set(i, s),
                            this.connected_ && this.sendListen_(s)
                    }),
                    (ii.prototype.sendListen_ = function (r) {
                        var i = this,
                            o = r.query,
                            s = o.path.toString(),
                            a = o.queryIdentifier()
                        this.log_('Listen on ' + s + ' for ' + a)
                        var t = { p: s }
                        r.tag && ((t.q = o.queryObject()), (t.t = r.tag)),
                            (t.h = r.hashFn()),
                            this.sendRequest('q', t, function (t) {
                                var e = t.d,
                                    n = t.s
                                ii.warnOnListenWarnings_(e, o),
                                    (i.listens.get(s) &&
                                        i.listens.get(s).get(a)) === r &&
                                        (i.log_('listen response', t),
                                        'ok' !== n && i.removeListen_(s, a),
                                        r.onComplete && r.onComplete(n, e))
                            })
                    }),
                    (ii.warnOnListenWarnings_ = function (t, e) {
                        if (t && 'object' == typeof t && N(t, 'w')) {
                            var n = R(t, 'w')
                            if (Array.isArray(n) && ~n.indexOf('no_index')) {
                                var r =
                                        '".indexOn": "' +
                                        e
                                            .getQueryParams()
                                            .getIndex()
                                            .toString() +
                                        '"',
                                    i = e.path.toString()
                                it(
                                    'Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ' +
                                        r +
                                        ' at ' +
                                        i +
                                        ' to your security rules for better performance.'
                                )
                            }
                        }
                    }),
                    (ii.prototype.refreshAuthToken = function (t) {
                        ;(this.authToken_ = t),
                            this.log_('Auth token refreshed'),
                            this.authToken_
                                ? this.tryAuth()
                                : this.connected_ &&
                                  this.sendRequest(
                                      'unauth',
                                      {},
                                      function () {}
                                  ),
                            this.reduceReconnectDelayIfAdminCredential_(t)
                    }),
                    (ii.prototype.reduceReconnectDelayIfAdminCredential_ = function (
                        t
                    ) {
                        ;((t && 40 === t.length) ||
                            (function (t) {
                                var e = I(t).claims
                                return 'object' == typeof e && !0 === e.admin
                            })(t)) &&
                            (this.log_(
                                'Admin auth credential detected.  Reducing max reconnect time.'
                            ),
                            (this.maxReconnectDelay_ = 3e4))
                    }),
                    (ii.prototype.tryAuth = function () {
                        var r = this
                        if (this.connected_ && this.authToken_) {
                            var i = this.authToken_,
                                t = (function (t) {
                                    var e = I(t).claims
                                    return (
                                        !!e &&
                                        'object' == typeof e &&
                                        e.hasOwnProperty('iat')
                                    )
                                })(i)
                                    ? 'auth'
                                    : 'gauth',
                                e = { cred: i }
                            null === this.authOverride_
                                ? (e.noauth = !0)
                                : 'object' == typeof this.authOverride_ &&
                                  (e.authvar = this.authOverride_),
                                this.sendRequest(t, e, function (t) {
                                    var e = t.s,
                                        n = t.d || 'error'
                                    r.authToken_ === i &&
                                        ('ok' === e
                                            ? (r.invalidAuthTokenCount_ = 0)
                                            : r.onAuthRevoked_(e, n))
                                })
                        }
                    }),
                    (ii.prototype.unlisten = function (t, e) {
                        var n = t.path.toString(),
                            r = t.queryIdentifier()
                        this.log_('Unlisten called for ' + n + ' ' + r),
                            C(
                                t.getQueryParams().isDefault() ||
                                    !t.getQueryParams().loadsAllData(),
                                'unlisten() called for non-default but complete query'
                            ),
                            this.removeListen_(n, r) &&
                                this.connected_ &&
                                this.sendUnlisten_(n, r, t.queryObject(), e)
                    }),
                    (ii.prototype.sendUnlisten_ = function (t, e, n, r) {
                        this.log_('Unlisten on ' + t + ' for ' + e)
                        var i = { p: t }
                        r && ((i.q = n), (i.t = r)), this.sendRequest('n', i)
                    }),
                    (ii.prototype.onDisconnectPut = function (t, e, n) {
                        this.connected_
                            ? this.sendOnDisconnect_('o', t, e, n)
                            : this.onDisconnectRequestQueue_.push({
                                  pathString: t,
                                  action: 'o',
                                  data: e,
                                  onComplete: n,
                              })
                    }),
                    (ii.prototype.onDisconnectMerge = function (t, e, n) {
                        this.connected_
                            ? this.sendOnDisconnect_('om', t, e, n)
                            : this.onDisconnectRequestQueue_.push({
                                  pathString: t,
                                  action: 'om',
                                  data: e,
                                  onComplete: n,
                              })
                    }),
                    (ii.prototype.onDisconnectCancel = function (t, e) {
                        this.connected_
                            ? this.sendOnDisconnect_('oc', t, null, e)
                            : this.onDisconnectRequestQueue_.push({
                                  pathString: t,
                                  action: 'oc',
                                  data: null,
                                  onComplete: e,
                              })
                    }),
                    (ii.prototype.sendOnDisconnect_ = function (t, e, n, r) {
                        var i = { p: e, d: n }
                        this.log_('onDisconnect ' + t, i),
                            this.sendRequest(t, i, function (t) {
                                r &&
                                    setTimeout(function () {
                                        r(t.s, t.d)
                                    }, Math.floor(0))
                            })
                    }),
                    (ii.prototype.put = function (t, e, n, r) {
                        this.putInternal('p', t, e, n, r)
                    }),
                    (ii.prototype.merge = function (t, e, n, r) {
                        this.putInternal('m', t, e, n, r)
                    }),
                    (ii.prototype.putInternal = function (t, e, n, r, i) {
                        var o = { p: e, d: n }
                        void 0 !== i && (o.h = i),
                            this.outstandingPuts_.push({
                                action: t,
                                request: o,
                                onComplete: r,
                            }),
                            this.outstandingPutCount_++
                        var s = this.outstandingPuts_.length - 1
                        this.connected_
                            ? this.sendPut_(s)
                            : this.log_('Buffering put: ' + e)
                    }),
                    (ii.prototype.sendPut_ = function (e) {
                        var n = this,
                            r = this.outstandingPuts_[e].action,
                            t = this.outstandingPuts_[e].request,
                            i = this.outstandingPuts_[e].onComplete
                        ;(this.outstandingPuts_[e].queued = this.connected_),
                            this.sendRequest(r, t, function (t) {
                                n.log_(r + ' response', t),
                                    delete n.outstandingPuts_[e],
                                    n.outstandingPutCount_--,
                                    0 === n.outstandingPutCount_ &&
                                        (n.outstandingPuts_ = []),
                                    i && i(t.s, t.d)
                            })
                    }),
                    (ii.prototype.reportStats = function (t) {
                        var n = this
                        if (this.connected_) {
                            var e = { c: t }
                            this.log_('reportStats', e),
                                this.sendRequest('s', e, function (t) {
                                    if ('ok' !== t.s) {
                                        var e = t.d
                                        n.log_(
                                            'reportStats',
                                            'Error sending stats: ' + e
                                        )
                                    }
                                })
                        }
                    }),
                    (ii.prototype.onDataMessage_ = function (t) {
                        if ('r' in t) {
                            this.log_('from server: ' + T(t))
                            var e = t.r,
                                n = this.requestCBHash_[e]
                            n && (delete this.requestCBHash_[e], n(t.b))
                        } else {
                            if ('error' in t)
                                throw (
                                    'A server-side error has occurred: ' +
                                    t.error
                                )
                            'a' in t && this.onDataPush_(t.a, t.b)
                        }
                    }),
                    (ii.prototype.onDataPush_ = function (t, e) {
                        this.log_('handleServerMessage', t, e),
                            'd' === t
                                ? this.onDataUpdate_(e.p, e.d, !1, e.t)
                                : 'm' === t
                                ? this.onDataUpdate_(e.p, e.d, !0, e.t)
                                : 'c' === t
                                ? this.onListenRevoked_(e.p, e.q)
                                : 'ac' === t
                                ? this.onAuthRevoked_(e.s, e.d)
                                : 'sd' === t
                                ? this.onSecurityDebugPacket_(e)
                                : nt(
                                      'Unrecognized action received from server: ' +
                                          T(t) +
                                          '\nAre you using the latest client?'
                                  )
                    }),
                    (ii.prototype.onReady_ = function (t, e) {
                        this.log_('connection ready'),
                            (this.connected_ = !0),
                            (this.lastConnectionEstablishedTime_ = new Date().getTime()),
                            this.handleTimestamp_(t),
                            (this.lastSessionId = e),
                            this.firstConnection_ && this.sendConnectStats_(),
                            this.restoreState_(),
                            (this.firstConnection_ = !1),
                            this.onConnectStatus_(!0)
                    }),
                    (ii.prototype.scheduleConnect_ = function (t) {
                        var e = this
                        C(
                            !this.realtime_,
                            "Scheduling a connect when we're already connected/ing?"
                        ),
                            this.establishConnectionTimer_ &&
                                clearTimeout(this.establishConnectionTimer_),
                            (this.establishConnectionTimer_ = setTimeout(
                                function () {
                                    ;(e.establishConnectionTimer_ = null),
                                        e.establishConnection_()
                                },
                                Math.floor(t)
                            ))
                    }),
                    (ii.prototype.onVisible_ = function (t) {
                        t &&
                            !this.visible_ &&
                            this.reconnectDelay_ === this.maxReconnectDelay_ &&
                            (this.log_(
                                'Window became visible.  Reducing delay.'
                            ),
                            (this.reconnectDelay_ = 1e3),
                            this.realtime_ || this.scheduleConnect_(0)),
                            (this.visible_ = t)
                    }),
                    (ii.prototype.onOnline_ = function (t) {
                        t
                            ? (this.log_('Browser went online.'),
                              (this.reconnectDelay_ = 1e3),
                              this.realtime_ || this.scheduleConnect_(0))
                            : (this.log_(
                                  'Browser went offline.  Killing connection.'
                              ),
                              this.realtime_ && this.realtime_.close())
                    }),
                    (ii.prototype.onRealtimeDisconnect_ = function () {
                        if (
                            (this.log_('data client disconnected'),
                            (this.connected_ = !1),
                            (this.realtime_ = null),
                            this.cancelSentTransactions_(),
                            (this.requestCBHash_ = {}),
                            this.shouldReconnect_())
                        ) {
                            this.visible_
                                ? this.lastConnectionEstablishedTime_ &&
                                  (3e4 <
                                      new Date().getTime() -
                                          this.lastConnectionEstablishedTime_ &&
                                      (this.reconnectDelay_ = 1e3),
                                  (this.lastConnectionEstablishedTime_ = null))
                                : (this.log_(
                                      "Window isn't visible.  Delaying reconnect."
                                  ),
                                  (this.reconnectDelay_ = this.maxReconnectDelay_),
                                  (this.lastConnectionAttemptTime_ = new Date().getTime()))
                            var t =
                                    new Date().getTime() -
                                    this.lastConnectionAttemptTime_,
                                e = Math.max(0, this.reconnectDelay_ - t)
                            ;(e = Math.random() * e),
                                this.log_('Trying to reconnect in ' + e + 'ms'),
                                this.scheduleConnect_(e),
                                (this.reconnectDelay_ = Math.min(
                                    this.maxReconnectDelay_,
                                    1.3 * this.reconnectDelay_
                                ))
                        }
                        this.onConnectStatus_(!1)
                    }),
                    (ii.prototype.establishConnection_ = function () {
                        if (this.shouldReconnect_()) {
                            this.log_('Making a connection attempt'),
                                (this.lastConnectionAttemptTime_ = new Date().getTime()),
                                (this.lastConnectionEstablishedTime_ = null)
                            var e = this.onDataMessage_.bind(this),
                                n = this.onReady_.bind(this),
                                r = this.onRealtimeDisconnect_.bind(this),
                                i = this.id + ':' + ii.nextConnectionId_++,
                                o = this,
                                s = this.lastSessionId,
                                a = !1,
                                h = null,
                                l = function () {
                                    h ? h.close() : ((a = !0), r())
                                }
                            this.realtime_ = {
                                close: l,
                                sendRequest: function (t) {
                                    C(
                                        h,
                                        "sendRequest call when we're not connected not allowed."
                                    ),
                                        h.sendRequest(t)
                                },
                            }
                            var t = this.forceTokenRefresh_
                            ;(this.forceTokenRefresh_ = !1),
                                this.authTokenProvider_
                                    .getToken(t)
                                    .then(function (t) {
                                        a
                                            ? tt(
                                                  'getToken() completed but was canceled'
                                              )
                                            : (tt(
                                                  'getToken() completed. Creating connection.'
                                              ),
                                              (o.authToken_ =
                                                  t && t.accessToken),
                                              (h = new Jr(
                                                  i,
                                                  o.repoInfo_,
                                                  e,
                                                  n,
                                                  r,
                                                  function (t) {
                                                      it(
                                                          t +
                                                              ' (' +
                                                              o.repoInfo_.toString() +
                                                              ')'
                                                      ),
                                                          o.interrupt(
                                                              'server_kill'
                                                          )
                                                  },
                                                  s
                                              )))
                                    })
                                    .then(null, function (t) {
                                        o.log_('Failed to get token: ' + t),
                                            a || l()
                                    })
                        }
                    }),
                    (ii.prototype.interrupt = function (t) {
                        tt('Interrupting connection for reason: ' + t),
                            (this.interruptReasons_[t] = !0),
                            this.realtime_
                                ? this.realtime_.close()
                                : (this.establishConnectionTimer_ &&
                                      (clearTimeout(
                                          this.establishConnectionTimer_
                                      ),
                                      (this.establishConnectionTimer_ = null)),
                                  this.connected_ &&
                                      this.onRealtimeDisconnect_())
                    }),
                    (ii.prototype.resume = function (t) {
                        tt('Resuming connection for reason: ' + t),
                            delete this.interruptReasons_[t],
                            P(this.interruptReasons_) &&
                                ((this.reconnectDelay_ = 1e3),
                                this.realtime_ || this.scheduleConnect_(0))
                    }),
                    (ii.prototype.handleTimestamp_ = function (t) {
                        var e = t - new Date().getTime()
                        this.onServerInfoUpdate_({ serverTimeOffset: e })
                    }),
                    (ii.prototype.cancelSentTransactions_ = function () {
                        for (var t = 0; t < this.outstandingPuts_.length; t++) {
                            var e = this.outstandingPuts_[t]
                            e &&
                                'h' in e.request &&
                                e.queued &&
                                (e.onComplete && e.onComplete('disconnect'),
                                delete this.outstandingPuts_[t],
                                this.outstandingPutCount_--)
                        }
                        0 === this.outstandingPutCount_ &&
                            (this.outstandingPuts_ = [])
                    }),
                    (ii.prototype.onListenRevoked_ = function (t, e) {
                        var n
                        n = e
                            ? e
                                  .map(function (t) {
                                      return Ct(t)
                                  })
                                  .join('$')
                            : 'default'
                        var r = this.removeListen_(t, n)
                        r && r.onComplete && r.onComplete('permission_denied')
                    }),
                    (ii.prototype.removeListen_ = function (t, e) {
                        var n,
                            r = new Nt(t).toString()
                        if (this.listens.has(r)) {
                            var i = this.listens.get(r)
                            ;(n = i.get(e)),
                                i.delete(e),
                                0 === i.size && this.listens.delete(r)
                        } else n = void 0
                        return n
                    }),
                    (ii.prototype.onAuthRevoked_ = function (t, e) {
                        tt('Auth token revoked: ' + t + '/' + e),
                            (this.authToken_ = null),
                            (this.forceTokenRefresh_ = !0),
                            this.realtime_.close(),
                            ('invalid_token' !== t &&
                                'permission_denied' !== t) ||
                                (this.invalidAuthTokenCount_++,
                                3 <= this.invalidAuthTokenCount_ &&
                                    ((this.reconnectDelay_ = 3e4),
                                    this.authTokenProvider_.notifyForInvalidToken()))
                    }),
                    (ii.prototype.onSecurityDebugPacket_ = function (t) {
                        this.securityDebugCallback_
                            ? this.securityDebugCallback_(t)
                            : 'msg' in t &&
                              console.log(
                                  'FIREBASE: ' +
                                      t.msg.replace('\n', '\nFIREBASE: ')
                              )
                    }),
                    (ii.prototype.restoreState_ = function () {
                        var e, t, n, r
                        this.tryAuth()
                        try {
                            for (
                                var i = f(this.listens.values()), o = i.next();
                                !o.done;
                                o = i.next()
                            ) {
                                var s = o.value
                                try {
                                    for (
                                        var a = ((n = void 0), f(s.values())),
                                            h = a.next();
                                        !h.done;
                                        h = a.next()
                                    ) {
                                        var l = h.value
                                        this.sendListen_(l)
                                    }
                                } catch (t) {
                                    n = { error: t }
                                } finally {
                                    try {
                                        h &&
                                            !h.done &&
                                            (r = a.return) &&
                                            r.call(a)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                            }
                        } catch (t) {
                            e = { error: t }
                        } finally {
                            try {
                                o && !o.done && (t = i.return) && t.call(i)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        for (var u = 0; u < this.outstandingPuts_.length; u++)
                            this.outstandingPuts_[u] && this.sendPut_(u)
                        for (; this.onDisconnectRequestQueue_.length; ) {
                            var c = this.onDisconnectRequestQueue_.shift()
                            this.sendOnDisconnect_(
                                c.action,
                                c.pathString,
                                c.data,
                                c.onComplete
                            )
                        }
                    }),
                    (ii.prototype.sendConnectStats_ = function () {
                        var t = {}
                        ;(t['sdk.js.' + Kr.replace(/\./g, '-')] = 1),
                            d()
                                ? (t['framework.cordova'] = 1)
                                : 'object' == typeof navigator &&
                                  'ReactNative' === navigator.product &&
                                  (t['framework.reactnative'] = 1),
                            this.reportStats(t)
                    }),
                    (ii.prototype.shouldReconnect_ = function () {
                        var t = Wr.getInstance().currentlyOnline()
                        return P(this.interruptReasons_) && t
                    }),
                    (ii.nextPersistentConnectionId_ = 0),
                    (ii.nextConnectionId_ = 0),
                    ii)
            function ii(t, e, n, r, i, o) {
                var s = ni.call(this) || this
                if (
                    ((s.repoInfo_ = t),
                    (s.onDataUpdate_ = e),
                    (s.onConnectStatus_ = n),
                    (s.onServerInfoUpdate_ = r),
                    (s.authTokenProvider_ = i),
                    (s.authOverride_ = o),
                    (s.id = ii.nextPersistentConnectionId_++),
                    (s.log_ = et('p:' + s.id + ':')),
                    (s.interruptReasons_ = {}),
                    (s.listens = new Map()),
                    (s.outstandingPuts_ = []),
                    (s.outstandingPutCount_ = 0),
                    (s.onDisconnectRequestQueue_ = []),
                    (s.connected_ = !1),
                    (s.reconnectDelay_ = 1e3),
                    (s.maxReconnectDelay_ = 3e5),
                    (s.securityDebugCallback_ = null),
                    (s.lastSessionId = null),
                    (s.establishConnectionTimer_ = null),
                    (s.visible_ = !1),
                    (s.requestCBHash_ = {}),
                    (s.requestNumber_ = 0),
                    (s.realtime_ = null),
                    (s.authToken_ = null),
                    (s.forceTokenRefresh_ = !1),
                    (s.invalidAuthTokenCount_ = 0),
                    (s.firstConnection_ = !0),
                    (s.lastConnectionAttemptTime_ = null),
                    (s.lastConnectionEstablishedTime_ = null),
                    o && !y())
                )
                    throw new Error(
                        'Auth override specified in options, but not supported on non Node.js platforms'
                    )
                return (
                    s.scheduleConnect_(0),
                    Ar.getInstance().on('visible', s.onVisible_, s),
                    -1 === t.host.indexOf('fblocal') &&
                        Wr.getInstance().on('online', s.onOnline_, s),
                    s
                )
            }
            var oi,
                si =
                    (t(ai, (oi = ti)),
                    (ai.prototype.reportStats = function (t) {
                        throw new Error('Method not implemented.')
                    }),
                    (ai.getListenId_ = function (t, e) {
                        return void 0 !== e
                            ? 'tag$' + e
                            : (C(
                                  t.getQueryParams().isDefault(),
                                  "should have a tag if it's not a default query."
                              ),
                              t.path.toString())
                    }),
                    (ai.prototype.listen = function (t, e, r, i) {
                        var o = this,
                            s = t.path.toString()
                        this.log_(
                            'Listen called for ' + s + ' ' + t.queryIdentifier()
                        )
                        var a = ai.getListenId_(t, r),
                            h = {}
                        this.listens_[a] = h
                        var n = t.getQueryParams().toRestQueryStringParameters()
                        this.restRequest_(s + '.json', n, function (t, e) {
                            var n = e
                            404 === t && (t = n = null),
                                null === t && o.onDataUpdate_(s, n, !1, r),
                                R(o.listens_, a) === h &&
                                    i(
                                        t
                                            ? 401 === t
                                                ? 'permission_denied'
                                                : 'rest_error:' + t
                                            : 'ok',
                                        null
                                    )
                        })
                    }),
                    (ai.prototype.unlisten = function (t, e) {
                        var n = ai.getListenId_(t, e)
                        delete this.listens_[n]
                    }),
                    (ai.prototype.refreshAuthToken = function (t) {}),
                    (ai.prototype.restRequest_ = function (i, o, s) {
                        var a = this
                        void 0 === o && (o = {}),
                            (o.format = 'export'),
                            this.authTokenProvider_
                                .getToken(!1)
                                .then(function (t) {
                                    var e = t && t.accessToken
                                    e && (o.auth = e)
                                    var n =
                                        (a.repoInfo_.secure
                                            ? 'https://'
                                            : 'http://') +
                                        a.repoInfo_.host +
                                        i +
                                        '?ns=' +
                                        a.repoInfo_.namespace +
                                        (function (t) {
                                            for (
                                                var n = [],
                                                    e = function (e, t) {
                                                        Array.isArray(t)
                                                            ? t.forEach(
                                                                  function (t) {
                                                                      n.push(
                                                                          encodeURIComponent(
                                                                              e
                                                                          ) +
                                                                              '=' +
                                                                              encodeURIComponent(
                                                                                  t
                                                                              )
                                                                      )
                                                                  }
                                                              )
                                                            : n.push(
                                                                  encodeURIComponent(
                                                                      e
                                                                  ) +
                                                                      '=' +
                                                                      encodeURIComponent(
                                                                          t
                                                                      )
                                                              )
                                                    },
                                                    r = 0,
                                                    i = Object.entries(t);
                                                r < i.length;
                                                r++
                                            ) {
                                                var o = i[r]
                                                e(o[0], o[1])
                                            }
                                            return n.length
                                                ? '&' + n.join('&')
                                                : ''
                                        })(o)
                                    a.log_('Sending REST request for ' + n)
                                    var r = new XMLHttpRequest()
                                    ;(r.onreadystatechange = function () {
                                        if (s && 4 === r.readyState) {
                                            a.log_(
                                                'REST Response for ' +
                                                    n +
                                                    ' received. status:',
                                                r.status,
                                                'response:',
                                                r.responseText
                                            )
                                            var t = null
                                            if (
                                                200 <= r.status &&
                                                r.status < 300
                                            ) {
                                                try {
                                                    t = S(r.responseText)
                                                } catch (t) {
                                                    it(
                                                        'Failed to parse JSON response for ' +
                                                            n +
                                                            ': ' +
                                                            r.responseText
                                                    )
                                                }
                                                s(null, t)
                                            } else
                                                401 !== r.status &&
                                                    404 !== r.status &&
                                                    it(
                                                        'Got unsuccessful REST response for ' +
                                                            n +
                                                            ' Status: ' +
                                                            r.status
                                                    ),
                                                    s(r.status)
                                            s = null
                                        }
                                    }),
                                        r.open('GET', n, !0),
                                        r.send()
                                })
                    }),
                    ai)
            function ai(t, e, n) {
                var r = oi.call(this) || this
                return (
                    (r.repoInfo_ = t),
                    (r.onDataUpdate_ = e),
                    (r.authTokenProvider_ = n),
                    (r.log_ = et('p:rest:')),
                    (r.listens_ = {}),
                    r
                )
            }
            var hi = 'repo_interrupt',
                li =
                    ((ui.prototype.toString = function () {
                        return (
                            (this.repoInfo_.secure ? 'https://' : 'http://') +
                            this.repoInfo_.host
                        )
                    }),
                    (ui.prototype.name = function () {
                        return this.repoInfo_.namespace
                    }),
                    (ui.prototype.serverTime = function () {
                        var t =
                            this.infoData_
                                .getNode(new Nt('.info/serverTimeOffset'))
                                .val() || 0
                        return new Date().getTime() + t
                    }),
                    (ui.prototype.generateServerValues = function () {
                        return (function (t) {
                            return (
                                ((t = t || {}).timestamp =
                                    t.timestamp || new Date().getTime()),
                                t
                            )
                        })({ timestamp: this.serverTime() })
                    }),
                    (ui.prototype.onDataUpdate_ = function (t, e, n, r) {
                        this.dataUpdateCount++
                        var i = new Nt(t)
                        e = this.interceptServerDataCallback_
                            ? this.interceptServerDataCallback_(t, e)
                            : e
                        var o = []
                        if (r)
                            if (n) {
                                var s = D(e, function (t) {
                                    return Ze(t)
                                })
                                o = this.serverSyncTree_.applyTaggedQueryMerge(
                                    i,
                                    s,
                                    r
                                )
                            } else {
                                var a = Ze(e)
                                o = this.serverSyncTree_.applyTaggedQueryOverwrite(
                                    i,
                                    a,
                                    r
                                )
                            }
                        else if (n) {
                            var h = D(e, function (t) {
                                return Ze(t)
                            })
                            o = this.serverSyncTree_.applyServerMerge(i, h)
                        } else {
                            var l = Ze(e)
                            o = this.serverSyncTree_.applyServerOverwrite(i, l)
                        }
                        var u = i
                        0 < o.length && (u = this.rerunTransactions_(i)),
                            this.eventQueue_.raiseEventsForChangedPath(u, o)
                    }),
                    (ui.prototype.interceptServerData_ = function (t) {
                        this.interceptServerDataCallback_ = t
                    }),
                    (ui.prototype.onConnectStatus_ = function (t) {
                        this.updateInfo_('connected', t),
                            !1 === t && this.runOnDisconnectEvents_()
                    }),
                    (ui.prototype.onServerInfoUpdate_ = function (t) {
                        var n = this
                        Et(t, function (t, e) {
                            n.updateInfo_(t, e)
                        })
                    }),
                    (ui.prototype.updateInfo_ = function (t, e) {
                        var n = new Nt('/.info/' + t),
                            r = Ze(e)
                        this.infoData_.updateSnapshot(n, r)
                        var i = this.infoSyncTree_.applyServerOverwrite(n, r)
                        this.eventQueue_.raiseEventsForChangedPath(n, i)
                    }),
                    (ui.prototype.getNextWriteId_ = function () {
                        return this.nextWriteId_++
                    }),
                    (ui.prototype.setWithPriority = function (i, t, e, o) {
                        var s = this
                        this.log_('set', {
                            path: i.toString(),
                            value: t,
                            priority: e,
                        })
                        var n = this.generateServerValues(),
                            r = Ze(t, e),
                            a = Sn(r, n),
                            h = this.getNextWriteId_(),
                            l = this.serverSyncTree_.applyUserOverwrite(
                                i,
                                a,
                                h,
                                !0
                            )
                        this.eventQueue_.queueEvents(l),
                            this.server_.put(i.toString(), r.val(!0), function (
                                t,
                                e
                            ) {
                                var n = 'ok' === t
                                n || it('set at ' + i + ' failed: ' + t)
                                var r = s.serverSyncTree_.ackUserWrite(h, !n)
                                s.eventQueue_.raiseEventsForChangedPath(i, r),
                                    s.callOnCompleteCallback(o, t, e)
                            })
                        var u = this.abortTransactions_(i)
                        this.rerunTransactions_(u),
                            this.eventQueue_.raiseEventsForChangedPath(u, [])
                    }),
                    (ui.prototype.update = function (o, t, s) {
                        var a = this
                        this.log_('update', { path: o.toString(), value: t })
                        var r = !0,
                            i = this.generateServerValues(),
                            h = {}
                        if (
                            (Et(t, function (t, e) {
                                r = !1
                                var n = Ze(e)
                                h[t] = Sn(n, i)
                            }),
                            r)
                        )
                            tt(
                                "update() called with empty data.  Don't do anything."
                            ),
                                this.callOnCompleteCallback(s, 'ok')
                        else {
                            var l = this.getNextWriteId_(),
                                e = this.serverSyncTree_.applyUserMerge(o, h, l)
                            this.eventQueue_.queueEvents(e),
                                this.server_.merge(o.toString(), t, function (
                                    t,
                                    e
                                ) {
                                    var n = 'ok' === t
                                    n || it('update at ' + o + ' failed: ' + t)
                                    var r = a.serverSyncTree_.ackUserWrite(
                                            l,
                                            !n
                                        ),
                                        i =
                                            0 < r.length
                                                ? a.rerunTransactions_(o)
                                                : o
                                    a.eventQueue_.raiseEventsForChangedPath(
                                        i,
                                        r
                                    ),
                                        a.callOnCompleteCallback(s, t, e)
                                }),
                                Et(t, function (t) {
                                    var e = a.abortTransactions_(o.child(t))
                                    a.rerunTransactions_(e)
                                }),
                                this.eventQueue_.raiseEventsForChangedPath(
                                    o,
                                    []
                                )
                        }
                    }),
                    (ui.prototype.runOnDisconnectEvents_ = function () {
                        var r = this
                        this.log_('onDisconnectEvents')
                        var t = this.generateServerValues(),
                            e = (function (t, n) {
                                var r = new mn()
                                return (
                                    t.forEachTree(new Nt(''), function (t, e) {
                                        r.remember(t, Sn(e, n))
                                    }),
                                    r
                                )
                            })(this.onDisconnect_, t),
                            i = []
                        e.forEachTree(Nt.Empty, function (t, e) {
                            i = i.concat(
                                r.serverSyncTree_.applyServerOverwrite(t, e)
                            )
                            var n = r.abortTransactions_(t)
                            r.rerunTransactions_(n)
                        }),
                            (this.onDisconnect_ = new mn()),
                            this.eventQueue_.raiseEventsForChangedPath(
                                Nt.Empty,
                                i
                            )
                    }),
                    (ui.prototype.onDisconnectCancel = function (n, r) {
                        var i = this
                        this.server_.onDisconnectCancel(n.toString(), function (
                            t,
                            e
                        ) {
                            'ok' === t && i.onDisconnect_.forget(n),
                                i.callOnCompleteCallback(r, t, e)
                        })
                    }),
                    (ui.prototype.onDisconnectSet = function (n, t, r) {
                        var i = this,
                            o = Ze(t)
                        this.server_.onDisconnectPut(
                            n.toString(),
                            o.val(!0),
                            function (t, e) {
                                'ok' === t && i.onDisconnect_.remember(n, o),
                                    i.callOnCompleteCallback(r, t, e)
                            }
                        )
                    }),
                    (ui.prototype.onDisconnectSetWithPriority = function (
                        n,
                        t,
                        e,
                        r
                    ) {
                        var i = this,
                            o = Ze(t, e)
                        this.server_.onDisconnectPut(
                            n.toString(),
                            o.val(!0),
                            function (t, e) {
                                'ok' === t && i.onDisconnect_.remember(n, o),
                                    i.callOnCompleteCallback(r, t, e)
                            }
                        )
                    }),
                    (ui.prototype.onDisconnectUpdate = function (r, n, i) {
                        var o = this
                        if (P(n))
                            return (
                                tt(
                                    "onDisconnect().update() called with empty data.  Don't do anything."
                                ),
                                void this.callOnCompleteCallback(i, 'ok')
                            )
                        this.server_.onDisconnectMerge(
                            r.toString(),
                            n,
                            function (t, e) {
                                'ok' === t &&
                                    Et(n, function (t, e) {
                                        var n = Ze(e)
                                        o.onDisconnect_.remember(r.child(t), n)
                                    }),
                                    o.callOnCompleteCallback(i, t, e)
                            }
                        )
                    }),
                    (ui.prototype.addEventCallbackForQuery = function (t, e) {
                        var n
                        ;(n =
                            '.info' === t.path.getFront()
                                ? this.infoSyncTree_.addEventRegistration(t, e)
                                : this.serverSyncTree_.addEventRegistration(
                                      t,
                                      e
                                  )),
                            this.eventQueue_.raiseEventsAtPath(t.path, n)
                    }),
                    (ui.prototype.removeEventCallbackForQuery = function (
                        t,
                        e
                    ) {
                        var n
                        ;(n =
                            '.info' === t.path.getFront()
                                ? this.infoSyncTree_.removeEventRegistration(
                                      t,
                                      e
                                  )
                                : this.serverSyncTree_.removeEventRegistration(
                                      t,
                                      e
                                  )),
                            this.eventQueue_.raiseEventsAtPath(t.path, n)
                    }),
                    (ui.prototype.interrupt = function () {
                        this.persistentConnection_ &&
                            this.persistentConnection_.interrupt(hi)
                    }),
                    (ui.prototype.resume = function () {
                        this.persistentConnection_ &&
                            this.persistentConnection_.resume(hi)
                    }),
                    (ui.prototype.stats = function (t) {
                        if (
                            (void 0 === t && (t = !1),
                            'undefined' != typeof console)
                        ) {
                            var e
                            e = t
                                ? (this.statsListener_ ||
                                      (this.statsListener_ = new Sr(
                                          this.stats_
                                      )),
                                  this.statsListener_.get())
                                : this.stats_.get()
                            var i = Object.keys(e).reduce(function (t, e) {
                                return Math.max(e.length, t)
                            }, 0)
                            Et(e, function (t, e) {
                                for (var n = t, r = t.length; r < i + 2; r++)
                                    n += ' '
                                console.log(n + e)
                            })
                        }
                    }),
                    (ui.prototype.statsIncrementCounter = function (t) {
                        this.stats_.incrementCounter(t),
                            this.statsReporter_.includeStat(t)
                    }),
                    (ui.prototype.log_ = function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e]
                        var n = ''
                        this.persistentConnection_ &&
                            (n = this.persistentConnection_.id + ':'),
                            tt.apply(void 0, o([n], t))
                    }),
                    (ui.prototype.callOnCompleteCallback = function (r, i, o) {
                        r &&
                            bt(function () {
                                if ('ok' === i) r(null)
                                else {
                                    var t = (i || 'error').toUpperCase(),
                                        e = t
                                    o && (e += ': ' + o)
                                    var n = new Error(e)
                                    ;(n.code = t), r(n)
                                }
                            })
                    }),
                    Object.defineProperty(ui.prototype, 'database', {
                        get: function () {
                            return (
                                this.__database ||
                                (this.__database = new Pi(this))
                            )
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    ui)
            function ui(t, e, n, r) {
                var s = this
                ;(this.repoInfo_ = t),
                    (this.app = n),
                    (this.dataUpdateCount = 0),
                    (this.statsListener_ = null),
                    (this.eventQueue_ = new Rr()),
                    (this.nextWriteId_ = 1),
                    (this.interceptServerDataCallback_ = null),
                    (this.onDisconnect_ = new mn()),
                    (this.persistentConnection_ = null)
                var i = new gr(n, r)
                if (
                    ((this.stats_ = wr.getCollection(t)),
                    e ||
                        0 <=
                            (
                                ('object' == typeof window &&
                                    window.navigator &&
                                    window.navigator.userAgent) ||
                                ''
                            ).search(
                                /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
                            ))
                )
                    (this.server_ = new si(
                        this.repoInfo_,
                        this.onDataUpdate_.bind(this),
                        i
                    )),
                        setTimeout(this.onConnectStatus_.bind(this, !0), 0)
                else {
                    var o = n.options.databaseAuthVariableOverride
                    if (null != o) {
                        if ('object' != typeof o)
                            throw new Error(
                                'Only objects are supported for option databaseAuthVariableOverride'
                            )
                        try {
                            T(o)
                        } catch (t) {
                            throw new Error(
                                'Invalid authOverride provided: ' + t
                            )
                        }
                    }
                    ;(this.persistentConnection_ = new ri(
                        this.repoInfo_,
                        this.onDataUpdate_.bind(this),
                        this.onConnectStatus_.bind(this),
                        this.onServerInfoUpdate_.bind(this),
                        i,
                        o
                    )),
                        (this.server_ = this.persistentConnection_)
                }
                i.addTokenChangeListener(function (t) {
                    s.server_.refreshAuthToken(t)
                }),
                    (this.statsReporter_ = wr.getOrCreateReporter(
                        t,
                        function () {
                            return new Ir(s.stats_, s.server_)
                        }
                    )),
                    this.transactionsInit_(),
                    (this.infoData_ = new yr()),
                    (this.infoSyncTree_ = new fr({
                        startListening: function (t, e, n, r) {
                            var i = [],
                                o = s.infoData_.getNode(t.path)
                            return (
                                o.isEmpty() ||
                                    ((i = s.infoSyncTree_.applyServerOverwrite(
                                        t.path,
                                        o
                                    )),
                                    setTimeout(function () {
                                        r('ok')
                                    }, 0)),
                                i
                            )
                        },
                        stopListening: function () {},
                    })),
                    this.updateInfo_('connected', !1),
                    (this.serverSyncTree_ = new fr({
                        startListening: function (r, t, e, i) {
                            return (
                                s.server_.listen(r, e, t, function (t, e) {
                                    var n = i(t, e)
                                    s.eventQueue_.raiseEventsForChangedPath(
                                        r.path,
                                        n
                                    )
                                }),
                                []
                            )
                        },
                        stopListening: function (t, e) {
                            s.server_.unlisten(t, e)
                        },
                    }))
            }
            var ci =
                ((pi.prototype.getStartPost = function () {
                    return this.startPost_
                }),
                (pi.prototype.getEndPost = function () {
                    return this.endPost_
                }),
                (pi.prototype.matches = function (t) {
                    return (
                        this.index_.compare(this.getStartPost(), t) <= 0 &&
                        this.index_.compare(t, this.getEndPost()) <= 0
                    )
                }),
                (pi.prototype.updateChild = function (t, e, n, r, i, o) {
                    return (
                        this.matches(new ae(e, n)) || (n = Ye.EMPTY_NODE),
                        this.indexedFilter_.updateChild(t, e, n, r, i, o)
                    )
                }),
                (pi.prototype.updateFullNode = function (t, e, n) {
                    e.isLeafNode() && (e = Ye.EMPTY_NODE)
                    var r = e.withIndex(this.index_)
                    r = r.updatePriority(Ye.EMPTY_NODE)
                    var i = this
                    return (
                        e.forEachChild(Ie, function (t, e) {
                            i.matches(new ae(t, e)) ||
                                (r = r.updateImmediateChild(t, Ye.EMPTY_NODE))
                        }),
                        this.indexedFilter_.updateFullNode(t, r, n)
                    )
                }),
                (pi.prototype.updatePriority = function (t, e) {
                    return t
                }),
                (pi.prototype.filtersNodes = function () {
                    return !0
                }),
                (pi.prototype.getIndexedFilter = function () {
                    return this.indexedFilter_
                }),
                (pi.prototype.getIndex = function () {
                    return this.index_
                }),
                (pi.getStartPost_ = function (t) {
                    if (t.hasStart()) {
                        var e = t.getIndexStartName()
                        return t.getIndex().makePost(t.getIndexStartValue(), e)
                    }
                    return t.getIndex().minPost()
                }),
                (pi.getEndPost_ = function (t) {
                    if (t.hasEnd()) {
                        var e = t.getIndexEndName()
                        return t.getIndex().makePost(t.getIndexEndValue(), e)
                    }
                    return t.getIndex().maxPost()
                }),
                pi)
            function pi(t) {
                ;(this.indexedFilter_ = new Bn(t.getIndex())),
                    (this.index_ = t.getIndex()),
                    (this.startPost_ = pi.getStartPost_(t)),
                    (this.endPost_ = pi.getEndPost_(t))
            }
            var di =
                ((fi.prototype.updateChild = function (t, e, n, r, i, o) {
                    return (
                        this.rangedFilter_.matches(new ae(e, n)) ||
                            (n = Ye.EMPTY_NODE),
                        t.getImmediateChild(e).equals(n)
                            ? t
                            : t.numChildren() < this.limit_
                            ? this.rangedFilter_
                                  .getIndexedFilter()
                                  .updateChild(t, e, n, r, i, o)
                            : this.fullLimitUpdateChild_(t, e, n, i, o)
                    )
                }),
                (fi.prototype.updateFullNode = function (t, e, n) {
                    var r
                    if (e.isLeafNode() || e.isEmpty())
                        r = Ye.EMPTY_NODE.withIndex(this.index_)
                    else if (
                        2 * this.limit_ < e.numChildren() &&
                        e.isIndexed(this.index_)
                    ) {
                        r = Ye.EMPTY_NODE.withIndex(this.index_)
                        var i = void 0
                        i = this.reverse_
                            ? e.getReverseIteratorFrom(
                                  this.rangedFilter_.getEndPost(),
                                  this.index_
                              )
                            : e.getIteratorFrom(
                                  this.rangedFilter_.getStartPost(),
                                  this.index_
                              )
                        for (var o = 0; i.hasNext() && o < this.limit_; ) {
                            var s = i.getNext()
                            if (
                                !(this.reverse_
                                    ? this.index_.compare(
                                          this.rangedFilter_.getStartPost(),
                                          s
                                      ) <= 0
                                    : this.index_.compare(
                                          s,
                                          this.rangedFilter_.getEndPost()
                                      ) <= 0)
                            )
                                break
                            ;(r = r.updateImmediateChild(s.name, s.node)), o++
                        }
                    } else {
                        r = (r = e.withIndex(this.index_)).updatePriority(
                            Ye.EMPTY_NODE
                        )
                        var a = void 0,
                            h = void 0,
                            l = void 0
                        if (((i = void 0), this.reverse_)) {
                            ;(i = r.getReverseIterator(this.index_)),
                                (a = this.rangedFilter_.getEndPost()),
                                (h = this.rangedFilter_.getStartPost())
                            var u = this.index_.getCompare()
                            l = function (t, e) {
                                return u(e, t)
                            }
                        } else
                            (i = r.getIterator(this.index_)),
                                (a = this.rangedFilter_.getStartPost()),
                                (h = this.rangedFilter_.getEndPost()),
                                (l = this.index_.getCompare())
                        o = 0
                        for (var c = !1; i.hasNext(); )
                            (s = i.getNext()),
                                !c && l(a, s) <= 0 && (c = !0),
                                c && o < this.limit_ && l(s, h) <= 0
                                    ? o++
                                    : (r = r.updateImmediateChild(
                                          s.name,
                                          Ye.EMPTY_NODE
                                      ))
                    }
                    return this.rangedFilter_
                        .getIndexedFilter()
                        .updateFullNode(t, r, n)
                }),
                (fi.prototype.updatePriority = function (t, e) {
                    return t
                }),
                (fi.prototype.filtersNodes = function () {
                    return !0
                }),
                (fi.prototype.getIndexedFilter = function () {
                    return this.rangedFilter_.getIndexedFilter()
                }),
                (fi.prototype.getIndex = function () {
                    return this.index_
                }),
                (fi.prototype.fullLimitUpdateChild_ = function (t, e, n, r, i) {
                    var o
                    if (this.reverse_) {
                        var s = this.index_.getCompare()
                        o = function (t, e) {
                            return s(e, t)
                        }
                    } else o = this.index_.getCompare()
                    var a = t
                    C(a.numChildren() === this.limit_, '')
                    var h = new ae(e, n),
                        l = this.reverse_
                            ? a.getFirstChild(this.index_)
                            : a.getLastChild(this.index_),
                        u = this.rangedFilter_.matches(h)
                    if (a.hasChild(e)) {
                        for (
                            var c = a.getImmediateChild(e),
                                p = r.getChildAfterChild(
                                    this.index_,
                                    l,
                                    this.reverse_
                                );
                            null != p && (p.name === e || a.hasChild(p.name));

                        )
                            p = r.getChildAfterChild(
                                this.index_,
                                p,
                                this.reverse_
                            )
                        var d = null == p ? 1 : o(p, h)
                        if (u && !n.isEmpty() && 0 <= d)
                            return (
                                null != i &&
                                    i.trackChildChange(
                                        Vn.childChangedChange(e, n, c)
                                    ),
                                a.updateImmediateChild(e, n)
                            )
                        null != i &&
                            i.trackChildChange(Vn.childRemovedChange(e, c))
                        var f = a.updateImmediateChild(e, Ye.EMPTY_NODE)
                        return null != p && this.rangedFilter_.matches(p)
                            ? (null != i &&
                                  i.trackChildChange(
                                      Vn.childAddedChange(p.name, p.node)
                                  ),
                              f.updateImmediateChild(p.name, p.node))
                            : f
                    }
                    return n.isEmpty()
                        ? t
                        : u && 0 <= o(l, h)
                        ? (null != i &&
                              (i.trackChildChange(
                                  Vn.childRemovedChange(l.name, l.node)
                              ),
                              i.trackChildChange(Vn.childAddedChange(e, n))),
                          a
                              .updateImmediateChild(e, n)
                              .updateImmediateChild(l.name, Ye.EMPTY_NODE))
                        : t
                }),
                fi)
            function fi(t) {
                ;(this.rangedFilter_ = new ci(t)),
                    (this.index_ = t.getIndex()),
                    (this.limit_ = t.getLimit()),
                    (this.reverse_ = !t.isViewFromLeft())
            }
            var _i =
                ((yi.prototype.hasStart = function () {
                    return this.startSet_
                }),
                (yi.prototype.isViewFromLeft = function () {
                    return '' === this.viewFrom_
                        ? this.startSet_
                        : this.viewFrom_ ===
                              yi.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT
                }),
                (yi.prototype.getIndexStartValue = function () {
                    return (
                        C(this.startSet_, 'Only valid if start has been set'),
                        this.indexStartValue_
                    )
                }),
                (yi.prototype.getIndexStartName = function () {
                    return (
                        C(this.startSet_, 'Only valid if start has been set'),
                        this.startNameSet_ ? this.indexStartName_ : vt
                    )
                }),
                (yi.prototype.hasEnd = function () {
                    return this.endSet_
                }),
                (yi.prototype.getIndexEndValue = function () {
                    return (
                        C(this.endSet_, 'Only valid if end has been set'),
                        this.indexEndValue_
                    )
                }),
                (yi.prototype.getIndexEndName = function () {
                    return (
                        C(this.endSet_, 'Only valid if end has been set'),
                        this.endNameSet_ ? this.indexEndName_ : gt
                    )
                }),
                (yi.prototype.hasLimit = function () {
                    return this.limitSet_
                }),
                (yi.prototype.hasAnchoredLimit = function () {
                    return this.limitSet_ && '' !== this.viewFrom_
                }),
                (yi.prototype.getLimit = function () {
                    return (
                        C(this.limitSet_, 'Only valid if limit has been set'),
                        this.limit_
                    )
                }),
                (yi.prototype.getIndex = function () {
                    return this.index_
                }),
                (yi.prototype.copy_ = function () {
                    var t = new yi()
                    return (
                        (t.limitSet_ = this.limitSet_),
                        (t.limit_ = this.limit_),
                        (t.startSet_ = this.startSet_),
                        (t.indexStartValue_ = this.indexStartValue_),
                        (t.startNameSet_ = this.startNameSet_),
                        (t.indexStartName_ = this.indexStartName_),
                        (t.endSet_ = this.endSet_),
                        (t.indexEndValue_ = this.indexEndValue_),
                        (t.endNameSet_ = this.endNameSet_),
                        (t.indexEndName_ = this.indexEndName_),
                        (t.index_ = this.index_),
                        (t.viewFrom_ = this.viewFrom_),
                        t
                    )
                }),
                (yi.prototype.limit = function (t) {
                    var e = this.copy_()
                    return (
                        (e.limitSet_ = !0),
                        (e.limit_ = t),
                        (e.viewFrom_ = ''),
                        e
                    )
                }),
                (yi.prototype.limitToFirst = function (t) {
                    var e = this.copy_()
                    return (
                        (e.limitSet_ = !0),
                        (e.limit_ = t),
                        (e.viewFrom_ =
                            yi.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT),
                        e
                    )
                }),
                (yi.prototype.limitToLast = function (t) {
                    var e = this.copy_()
                    return (
                        (e.limitSet_ = !0),
                        (e.limit_ = t),
                        (e.viewFrom_ =
                            yi.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT),
                        e
                    )
                }),
                (yi.prototype.startAt = function (t, e) {
                    var n = this.copy_()
                    return (
                        (n.startSet_ = !0),
                        void 0 === t && (t = null),
                        (n.indexStartValue_ = t),
                        null != e
                            ? ((n.startNameSet_ = !0), (n.indexStartName_ = e))
                            : ((n.startNameSet_ = !1),
                              (n.indexStartName_ = '')),
                        n
                    )
                }),
                (yi.prototype.endAt = function (t, e) {
                    var n = this.copy_()
                    return (
                        (n.endSet_ = !0),
                        void 0 === t && (t = null),
                        (n.indexEndValue_ = t),
                        void 0 !== e
                            ? ((n.endNameSet_ = !0), (n.indexEndName_ = e))
                            : ((n.endNameSet_ = !1), (n.indexEndName_ = '')),
                        n
                    )
                }),
                (yi.prototype.orderBy = function (t) {
                    var e = this.copy_()
                    return (e.index_ = t), e
                }),
                (yi.prototype.getQueryObject = function () {
                    var t = yi.WIRE_PROTOCOL_CONSTANTS_,
                        e = {}
                    if (
                        (this.startSet_ &&
                            ((e[t.INDEX_START_VALUE] = this.indexStartValue_),
                            this.startNameSet_ &&
                                (e[t.INDEX_START_NAME] = this.indexStartName_)),
                        this.endSet_ &&
                            ((e[t.INDEX_END_VALUE] = this.indexEndValue_),
                            this.endNameSet_ &&
                                (e[t.INDEX_END_NAME] = this.indexEndName_)),
                        this.limitSet_)
                    ) {
                        e[t.LIMIT] = this.limit_
                        var n = this.viewFrom_
                        '' === n &&
                            (n = this.isViewFromLeft()
                                ? t.VIEW_FROM_LEFT
                                : t.VIEW_FROM_RIGHT),
                            (e[t.VIEW_FROM] = n)
                    }
                    return (
                        this.index_ !== Ie &&
                            (e[t.INDEX] = this.index_.toString()),
                        e
                    )
                }),
                (yi.prototype.loadsAllData = function () {
                    return !(this.startSet_ || this.endSet_ || this.limitSet_)
                }),
                (yi.prototype.isDefault = function () {
                    return this.loadsAllData() && this.index_ === Ie
                }),
                (yi.prototype.getNodeFilter = function () {
                    return this.loadsAllData()
                        ? new Bn(this.getIndex())
                        : this.hasLimit()
                        ? new di(this)
                        : new ci(this)
                }),
                (yi.prototype.toRestQueryStringParameters = function () {
                    var t,
                        e = yi.REST_QUERY_CONSTANTS_,
                        n = {}
                    return (
                        this.isDefault() ||
                            ((t =
                                this.index_ === Ie
                                    ? e.PRIORITY_INDEX
                                    : this.index_ === nn
                                    ? e.VALUE_INDEX
                                    : this.index_ === ye
                                    ? e.KEY_INDEX
                                    : (C(
                                          this.index_ instanceof rn,
                                          'Unrecognized index type!'
                                      ),
                                      this.index_.toString())),
                            (n[e.ORDER_BY] = T(t)),
                            this.startSet_ &&
                                ((n[e.START_AT] = T(this.indexStartValue_)),
                                this.startNameSet_ &&
                                    (n[e.START_AT] +=
                                        ',' + T(this.indexStartName_))),
                            this.endSet_ &&
                                ((n[e.END_AT] = T(this.indexEndValue_)),
                                this.endNameSet_ &&
                                    (n[e.END_AT] +=
                                        ',' + T(this.indexEndName_))),
                            this.limitSet_ &&
                                (this.isViewFromLeft()
                                    ? (n[e.LIMIT_TO_FIRST] = this.limit_)
                                    : (n[e.LIMIT_TO_LAST] = this.limit_))),
                        n
                    )
                }),
                (yi.WIRE_PROTOCOL_CONSTANTS_ = {
                    INDEX_START_VALUE: 'sp',
                    INDEX_START_NAME: 'sn',
                    INDEX_END_VALUE: 'ep',
                    INDEX_END_NAME: 'en',
                    LIMIT: 'l',
                    VIEW_FROM: 'vf',
                    VIEW_FROM_LEFT: 'l',
                    VIEW_FROM_RIGHT: 'r',
                    INDEX: 'i',
                }),
                (yi.REST_QUERY_CONSTANTS_ = {
                    ORDER_BY: 'orderBy',
                    PRIORITY_INDEX: '$priority',
                    VALUE_INDEX: '$value',
                    KEY_INDEX: '$key',
                    START_AT: 'startAt',
                    END_AT: 'endAt',
                    LIMIT_TO_FIRST: 'limitToFirst',
                    LIMIT_TO_LAST: 'limitToLast',
                }),
                (yi.DEFAULT = new yi()),
                yi)
            function yi() {
                ;(this.limitSet_ = !1),
                    (this.startSet_ = !1),
                    (this.startNameSet_ = !1),
                    (this.endSet_ = !1),
                    (this.endNameSet_ = !1),
                    (this.limit_ = 0),
                    (this.viewFrom_ = ''),
                    (this.indexStartValue_ = null),
                    (this.indexStartName_ = ''),
                    (this.indexEndValue_ = null),
                    (this.indexEndName_ = ''),
                    (this.index_ = Ie)
            }
            var vi,
                gi =
                    (t(mi, (vi = vn)),
                    (mi.prototype.getKey = function () {
                        return (
                            k('Reference.key', 0, 0, arguments.length),
                            this.path.isEmpty() ? null : this.path.getBack()
                        )
                    }),
                    (mi.prototype.child = function (t) {
                        return (
                            k('Reference.child', 1, 1, arguments.length),
                            'number' == typeof t
                                ? (t = String(t))
                                : t instanceof Nt ||
                                  (null === this.path.getFront()
                                      ? (function (t, e, n, r) {
                                            ;(n =
                                                n &&
                                                n.replace(
                                                    /^\/*\.info(\/|$)/,
                                                    '/'
                                                )),
                                                jt(t, e, n, r)
                                        })('Reference.child', 1, t, !1)
                                      : jt('Reference.child', 1, t, !1)),
                            new mi(this.repo, this.path.child(t))
                        )
                    }),
                    (mi.prototype.getParent = function () {
                        k('Reference.parent', 0, 0, arguments.length)
                        var t = this.path.parent()
                        return null === t ? null : new mi(this.repo, t)
                    }),
                    (mi.prototype.getRoot = function () {
                        k('Reference.root', 0, 0, arguments.length)
                        for (var t = this; null !== t.getParent(); )
                            t = t.getParent()
                        return t
                    }),
                    (mi.prototype.databaseProp = function () {
                        return this.repo.database
                    }),
                    (mi.prototype.set = function (t, e) {
                        k('Reference.set', 1, 2, arguments.length),
                            Kt('Reference.set', this.path),
                            qt('Reference.set', 1, t, this.path, !1),
                            A('Reference.set', 2, e, !0)
                        var n = new p()
                        return (
                            this.repo.setWithPriority(
                                this.path,
                                t,
                                null,
                                n.wrapCallback(e)
                            ),
                            n.promise
                        )
                    }),
                    (mi.prototype.update = function (t, e) {
                        if (
                            (k('Reference.update', 1, 2, arguments.length),
                            Kt('Reference.update', this.path),
                            Array.isArray(t))
                        ) {
                            for (var n = {}, r = 0; r < t.length; ++r)
                                n['' + r] = t[r]
                            ;(t = n),
                                it(
                                    'Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.'
                                )
                        }
                        Ut('Reference.update', 1, t, this.path, !1),
                            A('Reference.update', 2, e, !0)
                        var i = new p()
                        return (
                            this.repo.update(this.path, t, i.wrapCallback(e)),
                            i.promise
                        )
                    }),
                    (mi.prototype.setWithPriority = function (t, e, n) {
                        if (
                            (k(
                                'Reference.setWithPriority',
                                2,
                                3,
                                arguments.length
                            ),
                            Kt('Reference.setWithPriority', this.path),
                            qt(
                                'Reference.setWithPriority',
                                1,
                                t,
                                this.path,
                                !1
                            ),
                            Vt('Reference.setWithPriority', 2, e, !1),
                            A('Reference.setWithPriority', 3, n, !0),
                            '.length' === this.getKey() ||
                                '.keys' === this.getKey())
                        )
                            throw (
                                'Reference.setWithPriority failed: ' +
                                this.getKey() +
                                ' is a read-only object.'
                            )
                        var r = new p()
                        return (
                            this.repo.setWithPriority(
                                this.path,
                                t,
                                e,
                                r.wrapCallback(n)
                            ),
                            r.promise
                        )
                    }),
                    (mi.prototype.remove = function (t) {
                        return (
                            k('Reference.remove', 0, 1, arguments.length),
                            Kt('Reference.remove', this.path),
                            A('Reference.remove', 1, t, !0),
                            this.set(null, t)
                        )
                    }),
                    (mi.prototype.transaction = function (t, r, e) {
                        if (
                            (k('Reference.transaction', 1, 3, arguments.length),
                            Kt('Reference.transaction', this.path),
                            A('Reference.transaction', 1, t, !1),
                            A('Reference.transaction', 2, r, !0),
                            (function (t, e, n, r) {
                                if (
                                    (!r || void 0 !== n) &&
                                    'boolean' != typeof n
                                )
                                    throw new Error(
                                        F(t, e, r) + 'must be a boolean.'
                                    )
                            })('Reference.transaction', 3, e, !0),
                            '.length' === this.getKey() ||
                                '.keys' === this.getKey())
                        )
                            throw (
                                'Reference.transaction failed: ' +
                                this.getKey() +
                                ' is a read-only object.'
                            )
                        void 0 === e && (e = !0)
                        var i = new p()
                        return (
                            'function' == typeof r &&
                                i.promise.catch(function () {}),
                            this.repo.startTransaction(
                                this.path,
                                t,
                                function (t, e, n) {
                                    t ? i.reject(t) : i.resolve(new ee(e, n)),
                                        'function' == typeof r && r(t, e, n)
                                },
                                e
                            ),
                            i.promise
                        )
                    }),
                    (mi.prototype.setPriority = function (t, e) {
                        k('Reference.setPriority', 1, 2, arguments.length),
                            Kt('Reference.setPriority', this.path),
                            Vt('Reference.setPriority', 1, t, !1),
                            A('Reference.setPriority', 2, e, !0)
                        var n = new p()
                        return (
                            this.repo.setWithPriority(
                                this.path.child('.priority'),
                                t,
                                null,
                                n.wrapCallback(e)
                            ),
                            n.promise
                        )
                    }),
                    (mi.prototype.push = function (t, e) {
                        k('Reference.push', 0, 2, arguments.length),
                            Kt('Reference.push', this.path),
                            qt('Reference.push', 1, t, this.path, !0),
                            A('Reference.push', 2, e, !0)
                        var n,
                            r = this.repo.serverTime(),
                            i = se(r),
                            o = this.child(i),
                            s = this.child(i)
                        return (
                            (n =
                                null != t
                                    ? o.set(t, e).then(function () {
                                          return s
                                      })
                                    : Promise.resolve(s)),
                            (o.then = n.then.bind(n)),
                            (o.catch = n.then.bind(n, void 0)),
                            'function' == typeof e && n.catch(function () {}),
                            o
                        )
                    }),
                    (mi.prototype.onDisconnect = function () {
                        return (
                            Kt('Reference.onDisconnect', this.path),
                            new Zt(this.repo, this.path)
                        )
                    }),
                    Object.defineProperty(mi.prototype, 'database', {
                        get: function () {
                            return this.databaseProp()
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(mi.prototype, 'key', {
                        get: function () {
                            return this.getKey()
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(mi.prototype, 'parent', {
                        get: function () {
                            return this.getParent()
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(mi.prototype, 'root', {
                        get: function () {
                            return this.getRoot()
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    mi)
            function mi(t, e) {
                if (!(t instanceof li))
                    throw new Error(
                        'new Reference() no longer supported - use app.database().'
                    )
                return vi.call(this, t, e, _i.DEFAULT, !1) || this
            }
            ;(vn.__referenceConstructor = gi), (sr.__referenceConstructor = gi)
            var Ci,
                Ei,
                wi = function () {
                    ;(this.children = {}),
                        (this.childCount = 0),
                        (this.value = null)
                },
                bi =
                    ((Si.prototype.subTree = function (t) {
                        for (
                            var e = t instanceof Nt ? t : new Nt(t),
                                n = this,
                                r = e.getFront();
                            null !== r;

                        )
                            (n = new Si(
                                r,
                                n,
                                R(n.node_.children, r) || new wi()
                            )),
                                (r = (e = e.popFront()).getFront())
                        return n
                    }),
                    (Si.prototype.getValue = function () {
                        return this.node_.value
                    }),
                    (Si.prototype.setValue = function (t) {
                        C(void 0 !== t, 'Cannot set value to undefined'),
                            (this.node_.value = t),
                            this.updateParents_()
                    }),
                    (Si.prototype.clear = function () {
                        ;(this.node_.value = null),
                            (this.node_.children = {}),
                            (this.node_.childCount = 0),
                            this.updateParents_()
                    }),
                    (Si.prototype.hasChildren = function () {
                        return 0 < this.node_.childCount
                    }),
                    (Si.prototype.isEmpty = function () {
                        return null === this.getValue() && !this.hasChildren()
                    }),
                    (Si.prototype.forEachChild = function (n) {
                        var r = this
                        Et(this.node_.children, function (t, e) {
                            n(new Si(t, r, e))
                        })
                    }),
                    (Si.prototype.forEachDescendant = function (e, t, n) {
                        t && !n && e(this),
                            this.forEachChild(function (t) {
                                t.forEachDescendant(e, !0, n)
                            }),
                            t && n && e(this)
                    }),
                    (Si.prototype.forEachAncestor = function (t, e) {
                        for (var n = e ? this : this.parent(); null !== n; ) {
                            if (t(n)) return !0
                            n = n.parent()
                        }
                        return !1
                    }),
                    (Si.prototype.forEachImmediateDescendantWithValue = function (
                        e
                    ) {
                        this.forEachChild(function (t) {
                            null !== t.getValue()
                                ? e(t)
                                : t.forEachImmediateDescendantWithValue(e)
                        })
                    }),
                    (Si.prototype.path = function () {
                        return new Nt(
                            null === this.parent_
                                ? this.name_
                                : this.parent_.path() + '/' + this.name_
                        )
                    }),
                    (Si.prototype.name = function () {
                        return this.name_
                    }),
                    (Si.prototype.parent = function () {
                        return this.parent_
                    }),
                    (Si.prototype.updateParents_ = function () {
                        null !== this.parent_ &&
                            this.parent_.updateChild_(this.name_, this)
                    }),
                    (Si.prototype.updateChild_ = function (t, e) {
                        var n = e.isEmpty(),
                            r = N(this.node_.children, t)
                        n && r
                            ? (delete this.node_.children[t],
                              this.node_.childCount--,
                              this.updateParents_())
                            : n ||
                              r ||
                              ((this.node_.children[t] = e.node_),
                              this.node_.childCount++,
                              this.updateParents_())
                    }),
                    Si)
            function Si(t, e, n) {
                void 0 === t && (t = ''),
                    void 0 === e && (e = null),
                    void 0 === n && (n = new wi()),
                    (this.name_ = t),
                    (this.parent_ = e),
                    (this.node_ = n)
            }
            ;((Ei = Ci = Ci || {})[(Ei.RUN = 0)] = 'RUN'),
                (Ei[(Ei.SENT = 1)] = 'SENT'),
                (Ei[(Ei.COMPLETED = 2)] = 'COMPLETED'),
                (Ei[(Ei.SENT_NEEDS_ABORT = 3)] = 'SENT_NEEDS_ABORT'),
                (Ei[(Ei.NEEDS_ABORT = 4)] = 'NEEDS_ABORT'),
                (li.MAX_TRANSACTION_RETRIES_ = 25),
                (li.prototype.transactionsInit_ = function () {
                    this.transactionQueueTree_ = new bi()
                }),
                (li.prototype.startTransaction = function (t, e, n, r) {
                    this.log_('transaction on ' + t)
                    function i() {}
                    var o = new gi(this, t)
                    o.on('value', i)
                    var s = {
                            path: t,
                            update: e,
                            onComplete: n,
                            status: null,
                            order: dt(),
                            applyLocally: r,
                            retryCount: 0,
                            unwatcher: function () {
                                o.off('value', i)
                            },
                            abortReason: null,
                            currentWriteId: null,
                            currentInputSnapshot: null,
                            currentOutputSnapshotRaw: null,
                            currentOutputSnapshotResolved: null,
                        },
                        a = this.getLatestState_(t)
                    s.currentInputSnapshot = a
                    var h = s.update(a.val())
                    if (void 0 === h) {
                        if (
                            (s.unwatcher(),
                            (s.currentOutputSnapshotRaw = null),
                            (s.currentOutputSnapshotResolved = null),
                            s.onComplete)
                        ) {
                            var l = new sn(
                                s.currentInputSnapshot,
                                new gi(this, s.path),
                                Ie
                            )
                            s.onComplete(null, !1, l)
                        }
                    } else {
                        Jt('transaction failed: Data returned ', h, s.path),
                            (s.status = Ci.RUN)
                        var u = this.transactionQueueTree_.subTree(t),
                            c = u.getValue() || []
                        c.push(s), u.setValue(c)
                        var p = void 0
                        if (
                            'object' == typeof h &&
                            null !== h &&
                            N(h, '.priority')
                        )
                            (p = R(h, '.priority')),
                                C(
                                    Qt(p),
                                    'Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.'
                                )
                        else
                            p = (
                                this.serverSyncTree_.calcCompleteEventCache(
                                    t
                                ) || Ye.EMPTY_NODE
                            )
                                .getPriority()
                                .val()
                        p = p
                        var d = this.generateServerValues(),
                            f = Ze(h, p),
                            _ = Sn(f, d)
                        ;(s.currentOutputSnapshotRaw = f),
                            (s.currentOutputSnapshotResolved = _),
                            (s.currentWriteId = this.getNextWriteId_())
                        var y = this.serverSyncTree_.applyUserOverwrite(
                            t,
                            _,
                            s.currentWriteId,
                            s.applyLocally
                        )
                        this.eventQueue_.raiseEventsForChangedPath(t, y),
                            this.sendReadyTransactions_()
                    }
                }),
                (li.prototype.getLatestState_ = function (t, e) {
                    return (
                        this.serverSyncTree_.calcCompleteEventCache(t, e) ||
                        Ye.EMPTY_NODE
                    )
                }),
                (li.prototype.sendReadyTransactions_ = function (t) {
                    var e = this
                    if (
                        (void 0 === t && (t = this.transactionQueueTree_),
                        t || this.pruneCompletedTransactionsBelowNode_(t),
                        null !== t.getValue())
                    ) {
                        var n = this.buildTransactionQueue_(t)
                        C(
                            0 < n.length,
                            'Sending zero length transaction queue'
                        ),
                            n.every(function (t) {
                                return t.status === Ci.RUN
                            }) && this.sendTransactionQueue_(t.path(), n)
                    } else
                        t.hasChildren() &&
                            t.forEachChild(function (t) {
                                e.sendReadyTransactions_(t)
                            })
                }),
                (li.prototype.sendTransactionQueue_ = function (a, h) {
                    for (
                        var l = this,
                            t = h.map(function (t) {
                                return t.currentWriteId
                            }),
                            e = this.getLatestState_(a, t),
                            n = e,
                            r = e.hash(),
                            i = 0;
                        i < h.length;
                        i++
                    ) {
                        var o = h[i]
                        C(
                            o.status === Ci.RUN,
                            'tryToSendTransactionQueue_: items in queue should all be run.'
                        ),
                            (o.status = Ci.SENT),
                            o.retryCount++
                        var s = Nt.relativePath(a, o.path)
                        n = n.updateChild(s, o.currentOutputSnapshotRaw)
                    }
                    var u = n.val(!0),
                        c = a
                    this.server_.put(
                        c.toString(),
                        u,
                        function (t) {
                            l.log_('transaction put response', {
                                path: c.toString(),
                                status: t,
                            })
                            var e = []
                            if ('ok' === t) {
                                for (var n = [], r = 0; r < h.length; r++) {
                                    if (
                                        ((h[r].status = Ci.COMPLETED),
                                        (e = e.concat(
                                            l.serverSyncTree_.ackUserWrite(
                                                h[r].currentWriteId
                                            )
                                        )),
                                        h[r].onComplete)
                                    ) {
                                        var i =
                                                h[r]
                                                    .currentOutputSnapshotResolved,
                                            o = new gi(l, h[r].path),
                                            s = new sn(i, o, Ie)
                                        n.push(
                                            h[r].onComplete.bind(
                                                null,
                                                null,
                                                !0,
                                                s
                                            )
                                        )
                                    }
                                    h[r].unwatcher()
                                }
                                l.pruneCompletedTransactionsBelowNode_(
                                    l.transactionQueueTree_.subTree(a)
                                ),
                                    l.sendReadyTransactions_(),
                                    l.eventQueue_.raiseEventsForChangedPath(
                                        a,
                                        e
                                    )
                                for (r = 0; r < n.length; r++) bt(n[r])
                            } else {
                                if ('datastale' === t)
                                    for (r = 0; r < h.length; r++)
                                        h[r].status === Ci.SENT_NEEDS_ABORT
                                            ? (h[r].status = Ci.NEEDS_ABORT)
                                            : (h[r].status = Ci.RUN)
                                else {
                                    it(
                                        'transaction at ' +
                                            c.toString() +
                                            ' failed: ' +
                                            t
                                    )
                                    for (r = 0; r < h.length; r++)
                                        (h[r].status = Ci.NEEDS_ABORT),
                                            (h[r].abortReason = t)
                                }
                                l.rerunTransactions_(a)
                            }
                        },
                        r
                    )
                }),
                (li.prototype.rerunTransactions_ = function (t) {
                    var e = this.getAncestorTransactionNode_(t),
                        n = e.path(),
                        r = this.buildTransactionQueue_(e)
                    return this.rerunTransactionQueue_(r, n), n
                }),
                (li.prototype.rerunTransactionQueue_ = function (t, e) {
                    if (0 !== t.length) {
                        for (
                            var n,
                                r = [],
                                i = [],
                                o = t
                                    .filter(function (t) {
                                        return t.status === Ci.RUN
                                    })
                                    .map(function (t) {
                                        return t.currentWriteId
                                    }),
                                s = 0;
                            s < t.length;
                            s++
                        ) {
                            var a = t[s],
                                h = Nt.relativePath(e, a.path),
                                l = !1,
                                u = void 0
                            if (
                                (C(
                                    null !== h,
                                    'rerunTransactionsUnderNode_: relativePath should not be null.'
                                ),
                                a.status === Ci.NEEDS_ABORT)
                            )
                                (l = !0),
                                    (u = a.abortReason),
                                    (i = i.concat(
                                        this.serverSyncTree_.ackUserWrite(
                                            a.currentWriteId,
                                            !0
                                        )
                                    ))
                            else if (a.status === Ci.RUN)
                                if (a.retryCount >= li.MAX_TRANSACTION_RETRIES_)
                                    (l = !0),
                                        (u = 'maxretry'),
                                        (i = i.concat(
                                            this.serverSyncTree_.ackUserWrite(
                                                a.currentWriteId,
                                                !0
                                            )
                                        ))
                                else {
                                    var c = this.getLatestState_(a.path, o)
                                    a.currentInputSnapshot = c
                                    var p = t[s].update(c.val())
                                    if (void 0 !== p) {
                                        Jt(
                                            'transaction failed: Data returned ',
                                            p,
                                            a.path
                                        )
                                        var d = Ze(p)
                                        ;('object' == typeof p &&
                                            null != p &&
                                            N(p, '.priority')) ||
                                            (d = d.updatePriority(
                                                c.getPriority()
                                            ))
                                        var f = a.currentWriteId,
                                            _ = this.generateServerValues(),
                                            y = Sn(d, _)
                                        ;(a.currentOutputSnapshotRaw = d),
                                            (a.currentOutputSnapshotResolved = y),
                                            (a.currentWriteId = this.getNextWriteId_()),
                                            o.splice(o.indexOf(f), 1),
                                            (i = (i = i.concat(
                                                this.serverSyncTree_.applyUserOverwrite(
                                                    a.path,
                                                    y,
                                                    a.currentWriteId,
                                                    a.applyLocally
                                                )
                                            )).concat(
                                                this.serverSyncTree_.ackUserWrite(
                                                    f,
                                                    !0
                                                )
                                            ))
                                    } else
                                        (l = !0),
                                            (u = 'nodata'),
                                            (i = i.concat(
                                                this.serverSyncTree_.ackUserWrite(
                                                    a.currentWriteId,
                                                    !0
                                                )
                                            ))
                                }
                            if (
                                (this.eventQueue_.raiseEventsForChangedPath(
                                    e,
                                    i
                                ),
                                (i = []),
                                l &&
                                    ((t[s].status = Ci.COMPLETED),
                                    (n = t[s].unwatcher),
                                    setTimeout(n, Math.floor(0)),
                                    t[s].onComplete))
                            )
                                if ('nodata' === u) {
                                    var v = new gi(this, t[s].path),
                                        g = t[s].currentInputSnapshot,
                                        m = new sn(g, v, Ie)
                                    r.push(
                                        t[s].onComplete.bind(null, null, !1, m)
                                    )
                                } else
                                    r.push(
                                        t[s].onComplete.bind(
                                            null,
                                            new Error(u),
                                            !1,
                                            null
                                        )
                                    )
                        }
                        this.pruneCompletedTransactionsBelowNode_(
                            this.transactionQueueTree_
                        )
                        for (s = 0; s < r.length; s++) bt(r[s])
                        this.sendReadyTransactions_()
                    }
                }),
                (li.prototype.getAncestorTransactionNode_ = function (t) {
                    var e,
                        n = this.transactionQueueTree_
                    for (
                        e = t.getFront();
                        null !== e && null === n.getValue();

                    )
                        (n = n.subTree(e)), (e = (t = t.popFront()).getFront())
                    return n
                }),
                (li.prototype.buildTransactionQueue_ = function (t) {
                    var e = []
                    return (
                        this.aggregateTransactionQueuesForNode_(t, e),
                        e.sort(function (t, e) {
                            return t.order - e.order
                        }),
                        e
                    )
                }),
                (li.prototype.aggregateTransactionQueuesForNode_ = function (
                    t,
                    e
                ) {
                    var n = this,
                        r = t.getValue()
                    if (null !== r)
                        for (var i = 0; i < r.length; i++) e.push(r[i])
                    t.forEachChild(function (t) {
                        n.aggregateTransactionQueuesForNode_(t, e)
                    })
                }),
                (li.prototype.pruneCompletedTransactionsBelowNode_ = function (
                    t
                ) {
                    var e = this,
                        n = t.getValue()
                    if (n) {
                        for (var r = 0, i = 0; i < n.length; i++)
                            n[i].status !== Ci.COMPLETED && ((n[r] = n[i]), r++)
                        ;(n.length = r), t.setValue(0 < n.length ? n : null)
                    }
                    t.forEachChild(function (t) {
                        e.pruneCompletedTransactionsBelowNode_(t)
                    })
                }),
                (li.prototype.abortTransactions_ = function (t) {
                    var e = this,
                        n = this.getAncestorTransactionNode_(t).path(),
                        r = this.transactionQueueTree_.subTree(t)
                    return (
                        r.forEachAncestor(function (t) {
                            e.abortTransactionsOnNode_(t)
                        }),
                        this.abortTransactionsOnNode_(r),
                        r.forEachDescendant(function (t) {
                            e.abortTransactionsOnNode_(t)
                        }),
                        n
                    )
                }),
                (li.prototype.abortTransactionsOnNode_ = function (t) {
                    var e = t.getValue()
                    if (null !== e) {
                        for (
                            var n = [], r = [], i = -1, o = 0;
                            o < e.length;
                            o++
                        )
                            if (e[o].status === Ci.SENT_NEEDS_ABORT);
                            else if (e[o].status === Ci.SENT)
                                C(
                                    i === o - 1,
                                    'All SENT items should be at beginning of queue.'
                                ),
                                    (e[(i = o)].status = Ci.SENT_NEEDS_ABORT),
                                    (e[o].abortReason = 'set')
                            else if (
                                (C(
                                    e[o].status === Ci.RUN,
                                    'Unexpected transaction status in abort'
                                ),
                                e[o].unwatcher(),
                                (r = r.concat(
                                    this.serverSyncTree_.ackUserWrite(
                                        e[o].currentWriteId,
                                        !0
                                    )
                                )),
                                e[o].onComplete)
                            ) {
                                n.push(
                                    e[o].onComplete.bind(
                                        null,
                                        new Error('set'),
                                        !1,
                                        null
                                    )
                                )
                            }
                        ;-1 === i ? t.setValue(null) : (e.length = i + 1),
                            this.eventQueue_.raiseEventsForChangedPath(
                                t.path(),
                                r
                            )
                        for (o = 0; o < n.length; o++) bt(n[o])
                    }
                })
            var Ti,
                Ii = 'databaseURL',
                Ni =
                    ((Ri.getInstance = function () {
                        return (Ti = Ti || new Ri())
                    }),
                    (Ri.prototype.interrupt = function () {
                        var e, t, n, r
                        try {
                            for (
                                var i = f(Object.keys(this.repos_)),
                                    o = i.next();
                                !o.done;
                                o = i.next()
                            ) {
                                var s = o.value
                                try {
                                    for (
                                        var a =
                                                ((n = void 0),
                                                f(Object.keys(this.repos_[s]))),
                                            h = a.next();
                                        !h.done;
                                        h = a.next()
                                    ) {
                                        var l = h.value
                                        this.repos_[s][l].interrupt()
                                    }
                                } catch (t) {
                                    n = { error: t }
                                } finally {
                                    try {
                                        h &&
                                            !h.done &&
                                            (r = a.return) &&
                                            r.call(a)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                            }
                        } catch (t) {
                            e = { error: t }
                        } finally {
                            try {
                                o && !o.done && (t = i.return) && t.call(i)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }),
                    (Ri.prototype.resume = function () {
                        var e, t, n, r
                        try {
                            for (
                                var i = f(Object.keys(this.repos_)),
                                    o = i.next();
                                !o.done;
                                o = i.next()
                            ) {
                                var s = o.value
                                try {
                                    for (
                                        var a =
                                                ((n = void 0),
                                                f(Object.keys(this.repos_[s]))),
                                            h = a.next();
                                        !h.done;
                                        h = a.next()
                                    ) {
                                        var l = h.value
                                        this.repos_[s][l].resume()
                                    }
                                } catch (t) {
                                    n = { error: t }
                                } finally {
                                    try {
                                        h &&
                                            !h.done &&
                                            (r = a.return) &&
                                            r.call(a)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                            }
                        } catch (t) {
                            e = { error: t }
                        } finally {
                            try {
                                o && !o.done && (t = i.return) && t.call(i)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }),
                    (Ri.prototype.databaseFromApp = function (t, e, n) {
                        var r = n || t.options[Ii]
                        void 0 === r &&
                            rt(
                                "Can't determine Firebase Database URL.  Be sure to include " +
                                    Ii +
                                    ' option when calling firebase.initializeApp().'
                            )
                        var i = Lt(r),
                            o = i.repoInfo,
                            s = void 0
                        return (
                            'undefined' != typeof process &&
                                (s =
                                    process.env
                                        .FIREBASE_DATABASE_EMULATOR_HOST),
                            s &&
                                ((r = 'http://' + s + '?ns=' + o.namespace),
                                (o = (i = Lt(r)).repoInfo)),
                            Yt('Invalid Firebase Database URL', 1, i),
                            i.path.isEmpty() ||
                                rt(
                                    'Database URL must point to the root of a Firebase Database (not including a child path).'
                                ),
                            this.createRepo(o, t, e).database
                        )
                    }),
                    (Ri.prototype.deleteRepo = function (t) {
                        var e = R(this.repos_, t.app.name)
                        ;(e && R(e, t.repoInfo_.toURLString()) === t) ||
                            rt(
                                'Database ' +
                                    t.app.name +
                                    '(' +
                                    t.repoInfo_ +
                                    ') has already been deleted.'
                            ),
                            t.interrupt(),
                            delete e[t.repoInfo_.toURLString()]
                    }),
                    (Ri.prototype.createRepo = function (t, e, n) {
                        var r = R(this.repos_, e.name)
                        r || ((r = {}), (this.repos_[e.name] = r))
                        var i = R(r, t.toURLString())
                        return (
                            i &&
                                rt(
                                    'Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.'
                                ),
                            (i = new li(t, this.useRestClient_, e, n)),
                            (r[t.toURLString()] = i)
                        )
                    }),
                    (Ri.prototype.forceRestClient = function (t) {
                        this.useRestClient_ = t
                    }),
                    Ri)
            function Ri() {
                ;(this.repos_ = {}), (this.useRestClient_ = !1)
            }
            var Pi =
                (Object.defineProperty(Di.prototype, 'app', {
                    get: function () {
                        return this.repo_.app
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (Di.prototype.ref = function (t) {
                    return (
                        this.checkDeleted_('ref'),
                        k('database.ref', 0, 1, arguments.length),
                        t instanceof gi
                            ? this.refFromURL(t.toString())
                            : void 0 !== t
                            ? this.root_.child(t)
                            : this.root_
                    )
                }),
                (Di.prototype.refFromURL = function (t) {
                    var e = 'database.refFromURL'
                    this.checkDeleted_(e), k(e, 1, 1, arguments.length)
                    var n = Lt(t)
                    Yt(e, 1, n)
                    var r = n.repoInfo
                    return (
                        r.host !== this.repo_.repoInfo_.host &&
                            rt(
                                e +
                                    ': Host name does not match the current database: (found ' +
                                    r.host +
                                    ' but expected ' +
                                    this.repo_.repoInfo_.host +
                                    ')'
                            ),
                        this.ref(n.path.toString())
                    )
                }),
                (Di.prototype.checkDeleted_ = function (t) {
                    null === this.repo_ &&
                        rt('Cannot call ' + t + ' on a deleted database.')
                }),
                (Di.prototype.goOffline = function () {
                    k('database.goOffline', 0, 0, arguments.length),
                        this.checkDeleted_('goOffline'),
                        this.repo_.interrupt()
                }),
                (Di.prototype.goOnline = function () {
                    k('database.goOnline', 0, 0, arguments.length),
                        this.checkDeleted_('goOnline'),
                        this.repo_.resume()
                }),
                (Di.ServerValue = { TIMESTAMP: { '.sv': 'timestamp' } }),
                Di)
            function Di(t) {
                ;(this.repo_ = t) instanceof li ||
                    rt(
                        "Don't call new Database() directly - please use firebase.database()."
                    ),
                    (this.root_ = new gi(t, Nt.Empty)),
                    (this.INTERNAL = new Oi(this))
            }
            var Oi =
                ((xi.prototype.delete = function () {
                    return (function (o, s, a, h) {
                        return new (a = a || Promise)(function (t, e) {
                            function n(t) {
                                try {
                                    i(h.next(t))
                                } catch (t) {
                                    e(t)
                                }
                            }
                            function r(t) {
                                try {
                                    i(h.throw(t))
                                } catch (t) {
                                    e(t)
                                }
                            }
                            function i(e) {
                                e.done
                                    ? t(e.value)
                                    : new a(function (t) {
                                          t(e.value)
                                      }).then(n, r)
                            }
                            i((h = h.apply(o, s || [])).next())
                        })
                    })(this, void 0, void 0, function () {
                        return e(this, function (t) {
                            return (
                                this.database.checkDeleted_('delete'),
                                Ni.getInstance().deleteRepo(
                                    this.database.repo_
                                ),
                                (this.database.repo_ = null),
                                (this.database.root_ = null),
                                (this.database.INTERNAL = null),
                                (this.database = null),
                                [2]
                            )
                        })
                    })
                }),
                xi)
            function xi(t) {
                this.database = t
            }
            var ki = Object.freeze({
                    __proto__: null,
                    forceLongPolling: function () {
                        zr.forceDisallow(), Vr.forceAllow()
                    },
                    forceWebSockets: function () {
                        Vr.forceDisallow()
                    },
                    isWebSocketsAvailable: function () {
                        return zr.isAvailable()
                    },
                    setSecurityDebugCallback: function (t, e) {
                        t.repo.persistentConnection_.securityDebugCallback_ = e
                    },
                    stats: function (t, e) {
                        t.repo.stats(e)
                    },
                    statsIncrementCounter: function (t, e) {
                        t.repo.statsIncrementCounter(e)
                    },
                    dataUpdateCount: function (t) {
                        return t.repo.dataUpdateCount
                    },
                    interceptServerData: function (t, e) {
                        return t.repo.interceptServerData_(e)
                    },
                }),
                Fi = ri
            ;(ri.prototype.simpleListen = function (t, e) {
                this.sendRequest('q', { p: t }, e)
            }),
                (ri.prototype.echo = function (t, e) {
                    this.sendRequest('echo', { d: t }, e)
                })
            var Ai,
                Li,
                Mi = Jr,
                Wi = Ft,
                Qi = Object.freeze({
                    __proto__: null,
                    DataConnection: Fi,
                    RealTimeConnection: Mi,
                    hijackHash: function (i) {
                        var o = ri.prototype.put
                        return (
                            (ri.prototype.put = function (t, e, n, r) {
                                void 0 !== r && (r = i()),
                                    o.call(this, t, e, n, r)
                            }),
                            function () {
                                ri.prototype.put = o
                            }
                        )
                    },
                    ConnectionTarget: Wi,
                    queryIdentifier: function (t) {
                        return t.queryIdentifier()
                    },
                    forceRestClient: function (t) {
                        Ni.getInstance().forceRestClient(t)
                    },
                }),
                qi = Pi.ServerValue
            ;(Ai = (Li = Ui).SDK_VERSION),
                (Kr = Ai),
                Li.INTERNAL.registerComponent(
                    new j(
                        'database',
                        function (t, e) {
                            var n = t.getProvider('app').getImmediate(),
                                r = t.getProvider('auth-internal')
                            return Ni.getInstance().databaseFromApp(n, r, e)
                        },
                        'PUBLIC'
                    )
                        .setServiceProps({
                            Reference: gi,
                            Query: vn,
                            Database: Pi,
                            DataSnapshot: sn,
                            enableLogging: Z,
                            INTERNAL: ki,
                            ServerValue: qi,
                            TEST_ACCESS: Qi,
                        })
                        .setMultipleInstances(!0)
                ),
                Li.registerVersion('@firebase/database', '0.5.22')
        }.apply(this, arguments))
    } catch (t) {
        throw (
            (console.error(t),
            new Error(
                'Cannot instantiate firebase-database.js - be sure to load firebase-app.js first.'
            ))
        )
    }
})
//# sourceMappingURL=firebase-database.js.map
