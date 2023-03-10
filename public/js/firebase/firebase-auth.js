! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = t || self).firebase) }(this, function(Lh) {
    "use strict";
    try {
        (function() {
            Lh = Lh && Lh.hasOwnProperty("default") ? Lh.default : Lh,
                function() {
                    var t, u = u || {},
                        h = this;

                    function c(t) { return "string" == typeof t }

                    function n(t) { return "boolean" == typeof t }

                    function o() {}

                    function l(t) { var e = typeof t; if ("object" == e) { if (!t) return "null"; if (t instanceof Array) return "array"; if (t instanceof Object) return e; var n = Object.prototype.toString.call(t); if ("[object Window]" == n) return "object"; if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function" } else if ("function" == e && void 0 === t.call) return "object"; return e }

                    function i(t) { return null === t }

                    function f(t) { return "array" == l(t) }

                    function d(t) { var e = l(t); return "array" == e || "object" == e && "number" == typeof t.length }

                    function a(t) { return "function" == l(t) }

                    function p(t) { var e = typeof t; return "object" == e && null != t || "function" == e }
                    var e = "closure_uid_" + (1e9 * Math.random() >>> 0),
                        r = 0;

                    function s(t, e, n) { return t.call.apply(t.bind, arguments) }

                    function v(e, n, t) { if (!e) throw Error(); if (2 < arguments.length) { var i = Array.prototype.slice.call(arguments, 2); return function() { var t = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(t, i), e.apply(n, t) } } return function() { return e.apply(n, arguments) } }

                    function m(t, e, n) { return (m = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? s : v).apply(null, arguments) }

                    function g(e, t) { var n = Array.prototype.slice.call(arguments, 1); return function() { var t = n.slice(); return t.push.apply(t, arguments), e.apply(this, t) } }
                    var b = Date.now || function() { return +new Date };

                    function y(t, o) {
                        function e() {}
                        e.prototype = o.prototype, t.ob = o.prototype, t.prototype = new e, (t.prototype.constructor = t).ed = function(t, e, n) { for (var i = Array(arguments.length - 2), r = 2; r < arguments.length; r++) i[r - 2] = arguments[r]; return o.prototype[e].apply(t, i) }
                    }

                    function w(t) { t.prototype.then = t.prototype.then, t.prototype.$goog_Thenable = !0 }

                    function I(t) { if (!t) return !1; try { return !!t.$goog_Thenable } catch (t) { return !1 } }

                    function T(t) {
                        if (Error.captureStackTrace) Error.captureStackTrace(this, T);
                        else {
                            var e = Error().stack;
                            e && (this.stack = e)
                        }
                        t && (this.message = String(t))
                    }

                    function E(t, e) {
                        for (var n = "", i = (t = t.split("%s")).length - 1, r = 0; r < i; r++) n += t[r] + (r < e.length ? e[r] : "%s");
                        T.call(this, n + t[i])
                    }

                    function A(t, e) { throw new E("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1)) }

                    function k(t, e) { this.c = t, this.f = e, this.b = 0, this.a = null }

                    function S(t, e) { t.f(e), t.b < 100 && (t.b++, e.next = t.a, t.a = e) }

                    function N() { this.b = this.a = null }
                    y(T, Error), T.prototype.name = "CustomError", y(E, T), E.prototype.name = "AssertionError", k.prototype.get = function() {
                        if (0 < this.b) {
                            this.b--;
                            var t = this.a;
                            this.a = t.next, t.next = null
                        } else t = this.c();
                        return t
                    };
                    var _ = new k(function() { return new O }, function(t) { t.reset() });

                    function O() { this.next = this.b = this.a = null }
                    N.prototype.add = function(t, e) {
                        var n = _.get();
                        n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n
                    }, O.prototype.set = function(t, e) { this.a = t, this.b = e, this.next = null }, O.prototype.reset = function() { this.next = this.b = this.a = null };
                    var P = Array.prototype.indexOf ? function(t, e) { return Array.prototype.indexOf.call(t, e, void 0) } : function(t, e) {
                            if (c(t)) return c(e) && 1 == e.length ? t.indexOf(e, 0) : -1;
                            for (var n = 0; n < t.length; n++)
                                if (n in t && t[n] === e) return n;
                            return -1
                        },
                        R = Array.prototype.forEach ? function(t, e, n) { Array.prototype.forEach.call(t, e, n) } : function(t, e, n) { for (var i = t.length, r = c(t) ? t.split("") : t, o = 0; o < i; o++) o in r && e.call(n, r[o], o, t) };
                    var D = Array.prototype.map ? function(t, e) { return Array.prototype.map.call(t, e, void 0) } : function(t, e) { for (var n = t.length, i = Array(n), r = c(t) ? t.split("") : t, o = 0; o < n; o++) o in r && (i[o] = e.call(void 0, r[o], o, t)); return i },
                        C = Array.prototype.some ? function(t, e) { return Array.prototype.some.call(t, e, void 0) } : function(t, e) {
                            for (var n = t.length, i = c(t) ? t.split("") : t, r = 0; r < n; r++)
                                if (r in i && e.call(void 0, i[r], r, t)) return !0;
                            return !1
                        };

                    function L(t, e) { return 0 <= P(t, e) }

                    function x(t, e) { var n; return (n = 0 <= (e = P(t, e))) && Array.prototype.splice.call(t, e, 1), n }

                    function M(n, i) {
                        ! function(t, e) {
                            var n = t.length,
                                i = c(t) ? t.split("") : t;
                            for (--n; 0 <= n; --n) n in i && e.call(void 0, i[n], n, t)
                        }(n, function(t, e) { i.call(void 0, t, e, n) && 1 == Array.prototype.splice.call(n, e, 1).length && 0 })
                    }

                    function j(t) { return Array.prototype.concat.apply([], arguments) }

                    function U(t) { var e = t.length; if (0 < e) { for (var n = Array(e), i = 0; i < e; i++) n[i] = t[i]; return n } return [] }

                    function V(t, e) { for (var n = t.split("%s"), i = "", r = Array.prototype.slice.call(arguments, 1); r.length && 1 < n.length;) i += n.shift() + r.shift(); return i + n.join("%s") }
                    var K = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1] };

                    function F(t) { return z.test(t) && (-1 != t.indexOf("&") && (t = t.replace(H, "&amp;")), -1 != t.indexOf("<") && (t = t.replace(W, "&lt;")), -1 != t.indexOf(">") && (t = t.replace(B, "&gt;")), -1 != t.indexOf('"') && (t = t.replace(G, "&quot;")), -1 != t.indexOf("'") && (t = t.replace(X, "&#39;")), -1 != t.indexOf("\0") && (t = t.replace(J, "&#0;"))), t }
                    var q, H = /&/g,
                        W = /</g,
                        B = />/g,
                        G = /"/g,
                        X = /'/g,
                        J = /\x00/g,
                        z = /[\x00&<>"']/;

                    function Y(t, e) { return -1 != t.indexOf(e) }

                    function $(t, e) { return t < e ? -1 : e < t ? 1 : 0 }
                    t: {
                        var Z = h.navigator;
                        if (Z) { var Q = Z.userAgent; if (Q) { q = Q; break t } }
                        q = ""
                    }

                    function tt(t) { return Y(q, t) }

                    function et(t, e) { for (var n in t) e.call(void 0, t[n], n, t) }

                    function nt(t) { for (var e in t) return !1; return !0 }

                    function it(t) { var e, n = {}; for (e in t) n[e] = t[e]; return n }
                    var rt, ot, at = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

                    function st(t, e) { for (var n, i, r = 1; r < arguments.length; r++) { for (n in i = arguments[r]) t[n] = i[n]; for (var o = 0; o < at.length; o++) n = at[o], Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]) } }

                    function ut(t) { h.setTimeout(function() { throw t }, 0) }

                    function ct(t, e) {
                        ot || function() {
                            if (h.Promise && h.Promise.resolve) {
                                var t = h.Promise.resolve(void 0);
                                ot = function() { t.then(ft) }
                            } else ot = function() {
                                var t = ft;
                                !a(h.setImmediate) || h.Window && h.Window.prototype && !tt("Edge") && h.Window.prototype.setImmediate == h.setImmediate ? (rt || (rt = function() {
                                    var t = h.MessageChannel;
                                    if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !tt("Presto") && (t = function() {
                                            var t = document.createElement("IFRAME");
                                            t.style.display = "none", t.src = "", document.documentElement.appendChild(t);
                                            var e = t.contentWindow;
                                            (t = e.document).open(), t.write(""), t.close();
                                            var n = "callImmediate" + Math.random(),
                                                i = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;
                                            t = m(function(t) { "*" != i && t.origin != i || t.data != n || this.port1.onmessage() }, this), e.addEventListener("message", t, !1), this.port1 = {}, this.port2 = { postMessage: function() { e.postMessage(n, i) } }
                                        }), void 0 === t || tt("Trident") || tt("MSIE")) return "undefined" != typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(t) {
                                        var e = document.createElement("SCRIPT");
                                        e.onreadystatechange = function() { e.onreadystatechange = null, e.parentNode.removeChild(e), e = null, t(), t = null }, document.documentElement.appendChild(e)
                                    } : function(t) { h.setTimeout(t, 0) };
                                    var e = new t,
                                        n = {},
                                        i = n;
                                    return e.port1.onmessage = function() {
                                            if (void 0 !== n.next) {
                                                var t = (n = n.next).wb;
                                                n.wb = null, t()
                                            }
                                        },
                                        function(t) { i.next = { wb: t }, i = i.next, e.port2.postMessage(0) }
                                }()), rt(t)) : h.setImmediate(t)
                            }
                        }(), ht || (ot(), ht = !0), lt.add(t, e)
                    }
                    var ht = !1,
                        lt = new N;

                    function ft() {
                        for (var t; n = e = void 0, n = null, (e = lt).a && (n = e.a, e.a = e.a.next, e.a || (e.b = null), n.next = null), t = n;) {
                            try { t.a.call(t.b) } catch (t) { ut(t) }
                            S(_, t)
                        }
                        var e, n;
                        ht = !1
                    }

                    function dt(t, e) {
                        if (this.a = pt, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != o) try {
                            var n = this;
                            t.call(e, function(t) { St(n, vt, t) }, function(t) {
                                if (!(t instanceof Ct)) try { if (t instanceof Error) throw t; throw Error("Promise rejected.") } catch (t) {}
                                St(n, mt, t)
                            })
                        } catch (t) { St(this, mt, t) }
                    }
                    var pt = 0,
                        vt = 2,
                        mt = 3;

                    function gt() { this.next = this.f = this.b = this.g = this.a = null, this.c = !1 }
                    gt.prototype.reset = function() { this.f = this.b = this.g = this.a = null, this.c = !1 };
                    var bt = new k(function() { return new gt }, function(t) { t.reset() });

                    function yt(t, e, n) { var i = bt.get(); return i.g = t, i.b = e, i.f = n, i }

                    function wt(t) { if (t instanceof dt) return t; var e = new dt(o); return St(e, vt, t), e }

                    function It(n) { return new dt(function(t, e) { e(n) }) }

                    function Tt(t, e, n) { Nt(t, e, n, null) || ct(g(e, t)) }

                    function Et(n) {
                        return new dt(function(i) {
                            var r = n.length,
                                o = [];
                            if (r)
                                for (var t = function(t, e, n) { r--, o[t] = e ? { Db: !0, value: n } : { Db: !1, reason: n }, 0 == r && i(o) }, e = 0; e < n.length; e++) Tt(n[e], g(t, e, !0), g(t, e, !1));
                            else i(o)
                        })
                    }

                    function At(t, e) { t.b || t.a != vt && t.a != mt || _t(t), t.f ? t.f.next = e : t.b = e, t.f = e }

                    function kt(t, r, o, a) {
                        var e = yt(null, null, null);
                        return e.a = new dt(function(n, i) {
                            e.g = r ? function(t) {
                                try {
                                    var e = r.call(a, t);
                                    n(e)
                                } catch (t) { i(t) }
                            } : n, e.b = o ? function(t) {
                                try {
                                    var e = o.call(a, t);
                                    void 0 === e && t instanceof Ct ? i(t) : n(e)
                                } catch (t) { i(t) }
                            } : i
                        }), At(e.a.c = t, e), e.a
                    }

                    function St(t, e, n) {
                        var i, r;
                        t.a == pt && (t === n && (e = mt, n = new TypeError("Promise cannot resolve to itself")), t.a = 1, Nt(n, t.Nc, t.Oc, t) || (t.i = n, t.a = e, t.c = null, _t(t), e != mt || n instanceof Ct || (r = n, (i = t).g = !0, ct(function() { i.g && Dt.call(null, r) }))))
                    }

                    function Nt(t, e, n, i) {
                        if (t instanceof dt) return At(t, yt(e || o, n || null, i)), !0;
                        if (I(t)) return t.then(e, n, i), !0;
                        if (p(t)) try {
                            var r = t.then;
                            if (a(r)) return function(t, e, n, i, r) {
                                function o(t) { a || (a = !0, i.call(r, t)) }
                                var a = !1;
                                try { e.call(t, function(t) { a || (a = !0, n.call(r, t)) }, o) } catch (t) { o(t) }
                            }(t, r, e, n, i), !0
                        } catch (t) { return n.call(i, t), !0 }
                        return !1
                    }

                    function _t(t) { t.h || (t.h = !0, ct(t.Yb, t)) }

                    function Ot(t) { var e = null; return t.b && (e = t.b, t.b = e.next, e.next = null), t.b || (t.f = null), e }

                    function Pt(t, e, n, i) {
                        if (n == mt && e.b && !e.c)
                            for (; t && t.g; t = t.c) t.g = !1;
                        if (e.a) e.a.c = null, Rt(e, n, i);
                        else try { e.c ? e.g.call(e.f) : Rt(e, n, i) } catch (t) { Dt.call(null, t) }
                        S(bt, e)
                    }

                    function Rt(t, e, n) { e == vt ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n) }
                    dt.prototype.then = function(t, e, n) { return kt(this, a(t) ? t : null, a(e) ? e : null, n) }, w(dt), (t = dt.prototype).ia = function(t, e) { return (t = yt(t, t, e)).c = !0, At(this, t), this }, t.s = function(t, e) { return kt(this, null, t, e) }, t.cancel = function(t) {
                        this.a == pt && ct(function() {
                            ! function t(e, n) {
                                if (e.a == pt)
                                    if (e.c) {
                                        var i = e.c;
                                        if (i.b) {
                                            for (var r = 0, o = null, a = null, s = i.b; s && (s.c || (r++, s.a == e && (o = s), !(o && 1 < r))); s = s.next) o || (a = s);
                                            o && (i.a == pt && 1 == r ? t(i, n) : (a ? ((r = a).next == i.f && (i.f = r), r.next = r.next.next) : Ot(i), Pt(i, o, mt, n)))
                                        }
                                        e.c = null
                                    } else St(e, mt, n)
                            }(this, new Ct(t))
                        }, this)
                    }, t.Nc = function(t) { this.a = pt, St(this, vt, t) }, t.Oc = function(t) { this.a = pt, St(this, mt, t) }, t.Yb = function() {
                        for (var t; t = Ot(this);) Pt(this, t, this.a, this.i);
                        this.h = !1
                    };
                    var Dt = ut;

                    function Ct(t) { T.call(this, t) }

                    function Lt() { this.qa = this.qa, this.ja = this.ja }
                    y(Ct, T);
                    var xt = 0;

                    function Mt(t) { if (!t.qa && (t.qa = !0, t.va(), 0 != xt)) t[e] || (t[e] = ++r) }

                    function jt(t) { return jt[" "](t), t }
                    Lt.prototype.qa = !(Ct.prototype.name = "cancel"), Lt.prototype.va = function() {
                        if (this.ja)
                            for (; this.ja.length;) this.ja.shift()()
                    }, jt[" "] = o;
                    var Ut, Vt, Kt = tt("Opera"),
                        Ft = tt("Trident") || tt("MSIE"),
                        qt = tt("Edge"),
                        Ht = qt || Ft,
                        Wt = tt("Gecko") && !(Y(q.toLowerCase(), "webkit") && !tt("Edge")) && !(tt("Trident") || tt("MSIE")) && !tt("Edge"),
                        Bt = Y(q.toLowerCase(), "webkit") && !tt("Edge");

                    function Gt() { var t = h.document; return t ? t.documentMode : void 0 }
                    t: {
                        var Xt = "",
                            Jt = (Vt = q, Wt ? /rv:([^\);]+)(\)|;)/.exec(Vt) : qt ? /Edge\/([\d\.]+)/.exec(Vt) : Ft ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Vt) : Bt ? /WebKit\/(\S+)/.exec(Vt) : Kt ? /(?:Version)[ \/]?(\S+)/.exec(Vt) : void 0);
                        if (Jt && (Xt = Jt ? Jt[1] : ""), Ft) { var zt = Gt(); if (null != zt && zt > parseFloat(Xt)) { Ut = String(zt); break t } }
                        Ut = Xt
                    }
                    var Yt, $t = {};

                    function Zt(s) {
                        return t = s, e = function() {
                            for (var t = 0, e = K(String(Ut)).split("."), n = K(String(s)).split("."), i = Math.max(e.length, n.length), r = 0; 0 == t && r < i; r++) {
                                var o = e[r] || "",
                                    a = n[r] || "";
                                do {
                                    if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], 0 == o[0].length && 0 == a[0].length) break;
                                    t = $(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || $(0 == o[2].length, 0 == a[2].length) || $(o[2], a[2]), o = o[3], a = a[3]
                                } while (0 == t)
                            }
                            return 0 <= t
                        }, n = $t, Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t);
                        var t, e, n
                    }
                    var Qt = h.document;
                    Yt = Qt && Ft ? Gt() || ("CSS1Compat" == Qt.compatMode ? parseInt(Ut, 10) : 5) : void 0;
                    var te = Object.freeze || function(t) { return t },
                        ee = !Ft || 9 <= Number(Yt),
                        ne = Ft && !Zt("9"),
                        ie = function() {
                            if (!h.addEventListener || !Object.defineProperty) return !1;
                            var t = !1,
                                e = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                            return h.addEventListener("test", o, e), h.removeEventListener("test", o, e), t
                        }();

                    function re(t, e) { this.type = t, this.b = this.target = e, this.Kb = !0 }

                    function oe(t, e) {
                        if (re.call(this, t ? t.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, t) {
                            var n = this.type = t.type,
                                i = t.changedTouches ? t.changedTouches[0] : null;
                            if (this.target = t.target || t.srcElement, this.b = e, e = t.relatedTarget) {
                                if (Wt) {
                                    t: {
                                        try { jt(e.nodeName); var r = !0; break t } catch (t) {}
                                        r = !1
                                    }
                                    r || (e = null)
                                }
                            } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                            this.relatedTarget = e, this.screenY = null === i ? (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, t.screenY || 0) : (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX, this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY, this.screenX = i.screenX || 0, i.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = c(t.pointerType) ? t.pointerType : ae[t.pointerType] || "", (this.a = t).defaultPrevented && this.preventDefault()
                        }
                    }
                    re.prototype.preventDefault = function() { this.Kb = !1 }, y(oe, re);
                    var ae = te({ 2: "touch", 3: "pen", 4: "mouse" });
                    oe.prototype.preventDefault = function() {
                        oe.ob.preventDefault.call(this);
                        var t = this.a;
                        if (t.preventDefault) t.preventDefault();
                        else if (t.returnValue = !1, ne) try {
                            (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1)
                        } catch (t) {}
                    }, oe.prototype.f = function() { return this.a };
                    var se = "closure_listenable_" + (1e6 * Math.random() | 0),
                        ue = 0;

                    function ce(t, e, n, i, r) { this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!i, this.La = r, this.key = ++ue, this.oa = this.Ia = !1 }

                    function he(t) { t.oa = !0, t.listener = null, t.proxy = null, t.src = null, t.La = null }

                    function le(t) { this.src = t, this.a = {}, this.b = 0 }

                    function fe(t, e) {
                        var n = e.type;
                        n in t.a && x(t.a[n], e) && (he(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
                    }

                    function de(t, e, n, i) { for (var r = 0; r < t.length; ++r) { var o = t[r]; if (!o.oa && o.listener == e && o.capture == !!n && o.La == i) return r } return -1 }
                    le.prototype.add = function(t, e, n, i, r) {
                        var o = t.toString();
                        (t = this.a[o]) || (t = this.a[o] = [], this.b++);
                        var a = de(t, e, i, r);
                        return -1 < a ? (e = t[a], n || (e.Ia = !1)) : ((e = new ce(e, this.src, o, !!i, r)).Ia = n, t.push(e)), e
                    };
                    var pe = "closure_lm_" + (1e6 * Math.random() | 0),
                        ve = {};

                    function me(t, e, n, i, r) {
                        if (i && i.once) be(t, e, n, i, r);
                        else if (f(e))
                            for (var o = 0; o < e.length; o++) me(t, e[o], n, i, r);
                        else n = Ne(n), t && t[se] ? Oe(t, e, n, p(i) ? !!i.capture : !!i, r) : ge(t, e, n, !1, i, r)
                    }

                    function ge(t, e, n, i, r, o) {
                        if (!e) throw Error("Invalid event type");
                        var a, s, u = p(r) ? !!r.capture : !!r,
                            c = ke(t);
                        if (c || (t[pe] = c = new le(t)), !(n = c.add(e, n, i, u, o)).proxy)
                            if (a = Ae, i = s = ee ? function(t) { return a.call(s.src, s.listener, t) } : function(t) { if (!(t = a.call(s.src, s.listener, t))) return t }, (n.proxy = i).src = t, i.listener = n, t.addEventListener) ie || (r = u), void 0 === r && (r = !1), t.addEventListener(e.toString(), i, r);
                            else if (t.attachEvent) t.attachEvent(Ie(e.toString()), i);
                        else {
                            if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                            t.addListener(i)
                        }
                    }

                    function be(t, e, n, i, r) {
                        if (f(e))
                            for (var o = 0; o < e.length; o++) be(t, e[o], n, i, r);
                        else n = Ne(n), t && t[se] ? Pe(t, e, n, p(i) ? !!i.capture : !!i, r) : ge(t, e, n, !0, i, r)
                    }

                    function ye(t, e, n, i, r) {
                        if (f(e))
                            for (var o = 0; o < e.length; o++) ye(t, e[o], n, i, r);
                        else i = p(i) ? !!i.capture : !!i, n = Ne(n), t && t[se] ? (t = t.l, (e = String(e).toString()) in t.a && (-1 < (n = de(o = t.a[e], n, i, r)) && (he(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--)))) : t && (t = ke(t)) && (e = t.a[e.toString()], t = -1, e && (t = de(e, n, i, r)), (n = -1 < t ? e[t] : null) && we(n))
                    }

                    function we(t) {
                        if ("number" != typeof t && t && !t.oa) {
                            var e = t.src;
                            if (e && e[se]) fe(e.l, t);
                            else {
                                var n = t.type,
                                    i = t.proxy;
                                e.removeEventListener ? e.removeEventListener(n, i, t.capture) : e.detachEvent ? e.detachEvent(Ie(n), i) : e.addListener && e.removeListener && e.removeListener(i), (n = ke(e)) ? (fe(n, t), 0 == n.b && (n.src = null, e[pe] = null)) : he(t)
                            }
                        }
                    }

                    function Ie(t) { return t in ve ? ve[t] : ve[t] = "on" + t }

                    function Te(t, e, n, i) {
                        var r = !0;
                        if ((t = ke(t)) && (e = t.a[e.toString()]))
                            for (e = e.concat(), t = 0; t < e.length; t++) {
                                var o = e[t];
                                o && o.capture == n && !o.oa && (o = Ee(o, i), r = r && !1 !== o)
                            }
                        return r
                    }

                    function Ee(t, e) {
                        var n = t.listener,
                            i = t.La || t.src;
                        return t.Ia && we(t), n.call(i, e)
                    }

                    function Ae(t, e) {
                        if (t.oa) return !0;
                        if (ee) return Ee(t, new oe(e, this));
                        if (!e) t: {
                            e = ["window", "event"];
                            for (var n = h, i = 0; i < e.length; i++)
                                if (null == (n = n[e[i]])) { e = null; break t }
                            e = n
                        }
                        if (e = new oe(i = e, this), n = !0, !(i.keyCode < 0 || null != i.returnValue)) {
                            t: { var r = !1; if (0 == i.keyCode) try { i.keyCode = -1; break t } catch (t) { r = !0 }(r || null == i.returnValue) && (i.returnValue = !0) }
                            for (i = [], r = e.b; r; r = r.parentNode) i.push(r);
                            for (t = t.type, r = i.length - 1; 0 <= r; r--) {
                                e.b = i[r];
                                var o = Te(i[r], t, !0, e);
                                n = n && o
                            }
                            for (r = 0; r < i.length; r++) e.b = i[r],
                            o = Te(i[r], t, !1, e),
                            n = n && o
                        }
                        return n
                    }

                    function ke(t) { return (t = t[pe]) instanceof le ? t : null }
                    var Se = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

                    function Ne(e) { return a(e) ? e : (e[Se] || (e[Se] = function(t) { return e.handleEvent(t) }), e[Se]) }

                    function _e() { Lt.call(this), this.l = new le(this), (this.Rb = this).Va = null }

                    function Oe(t, e, n, i, r) { t.l.add(String(e), n, !1, i, r) }

                    function Pe(t, e, n, i, r) { t.l.add(String(e), n, !0, i, r) }

                    function Re(t, e, n, i) {
                        if (!(e = t.l.a[String(e)])) return !0;
                        e = e.concat();
                        for (var r = !0, o = 0; o < e.length; ++o) {
                            var a = e[o];
                            if (a && !a.oa && a.capture == n) {
                                var s = a.listener,
                                    u = a.La || a.src;
                                a.Ia && fe(t.l, a), r = !1 !== s.call(u, i) && r
                            }
                        }
                        return r && 0 != i.Kb
                    }

                    function De(t, e, n) {
                        if (a(t)) n && (t = m(t, n));
                        else {
                            if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                            t = m(t.handleEvent, t)
                        }
                        return 2147483647 < Number(e) ? -1 : h.setTimeout(t, e || 0)
                    }

                    function Ce(n) { var i = null; return new dt(function(t, e) {-1 == (i = De(function() { t(void 0) }, n)) && e(Error("Failed to schedule timer.")) }).s(function(t) { throw h.clearTimeout(i), t }) }

                    function Le(t) { if (t.S && "function" == typeof t.S) return t.S(); if (c(t)) return t.split(""); if (d(t)) { for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]); return e } for (i in e = [], n = 0, t) e[n++] = t[i]; return e }

                    function xe(t) {
                        if (t.U && "function" == typeof t.U) return t.U();
                        if (!t.S || "function" != typeof t.S) {
                            if (d(t) || c(t)) {
                                var e = [];
                                t = t.length;
                                for (var n = 0; n < t; n++) e.push(n);
                                return e
                            }
                            for (var i in e = [], n = 0, t) e[n++] = i;
                            return e
                        }
                    }

                    function Me(t, e) {
                        this.b = {}, this.a = [], this.c = 0;
                        var n = arguments.length;
                        if (1 < n) { if (n % 2) throw Error("Uneven number of arguments"); for (var i = 0; i < n; i += 2) this.set(arguments[i], arguments[i + 1]) } else if (t)
                            if (t instanceof Me)
                                for (n = t.U(), i = 0; i < n.length; i++) this.set(n[i], t.get(n[i]));
                            else
                                for (i in t) this.set(i, t[i])
                    }

                    function je(t) {
                        if (t.c != t.a.length) {
                            for (var e = 0, n = 0; e < t.a.length;) {
                                var i = t.a[e];
                                Ue(t.b, i) && (t.a[n++] = i), e++
                            }
                            t.a.length = n
                        }
                        if (t.c != t.a.length) {
                            var r = {};
                            for (n = e = 0; e < t.a.length;) Ue(r, i = t.a[e]) || (r[t.a[n++] = i] = 1), e++;
                            t.a.length = n
                        }
                    }

                    function Ue(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }
                    y(_e, Lt), _e.prototype[se] = !0, _e.prototype.addEventListener = function(t, e, n, i) { me(this, t, e, n, i) }, _e.prototype.removeEventListener = function(t, e, n, i) { ye(this, t, e, n, i) }, _e.prototype.dispatchEvent = function(t) {
                        var e, n = this.Va;
                        if (n)
                            for (e = []; n; n = n.Va) e.push(n);
                        n = this.Rb;
                        var i = t.type || t;
                        if (c(t)) t = new re(t, n);
                        else if (t instanceof re) t.target = t.target || n;
                        else {
                            var r = t;
                            st(t = new re(i, n), r)
                        }
                        if (r = !0, e)
                            for (var o = e.length - 1; 0 <= o; o--) {
                                var a = t.b = e[o];
                                r = Re(a, i, !0, t) && r
                            }
                        if (r = Re(a = t.b = n, i, !0, t) && r, r = Re(a, i, !1, t) && r, e)
                            for (o = 0; o < e.length; o++) r = Re(a = t.b = e[o], i, !1, t) && r;
                        return r
                    }, _e.prototype.va = function() {
                        if (_e.ob.va.call(this), this.l) {
                            var t, e = this.l;
                            for (t in e.a) {
                                for (var n = e.a[t], i = 0; i < n.length; i++) he(n[i]);
                                delete e.a[t], e.b--
                            }
                        }
                        this.Va = null
                    }, (t = Me.prototype).S = function() { je(this); for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]); return t }, t.U = function() { return je(this), this.a.concat() }, t.clear = function() { this.b = {}, this.c = this.a.length = 0 }, t.get = function(t, e) { return Ue(this.b, t) ? this.b[t] : e }, t.set = function(t, e) { Ue(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e }, t.forEach = function(t, e) {
                        for (var n = this.U(), i = 0; i < n.length; i++) {
                            var r = n[i],
                                o = this.get(r);
                            t.call(e, o, r, this)
                        }
                    };
                    var Ve = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

                    function Ke(t, e) {
                        if (this.b = this.l = this.c = "", this.i = null, this.h = this.g = "", this.f = !1, t instanceof Ke) {
                            this.f = void 0 !== e ? e : t.f, Fe(this, t.c), this.l = t.l, this.b = t.b, qe(this, t.i), this.g = t.g, e = t.a;
                            var n = new nn;
                            n.c = e.c, e.a && (n.a = new Me(e.a), n.b = e.b), He(this, n), this.h = t.h
                        } else t && (n = String(t).match(Ve)) ? (this.f = !!e, Fe(this, n[1] || "", !0), this.l = Je(n[2] || ""), this.b = Je(n[3] || "", !0), qe(this, n[4]), this.g = Je(n[5] || "", !0), He(this, n[6] || "", !0), this.h = Je(n[7] || "")) : (this.f = !!e, this.a = new nn(null, this.f))
                    }

                    function Fe(t, e, n) { t.c = n ? Je(e, !0) : e, t.c && (t.c = t.c.replace(/:$/, "")) }

                    function qe(t, e) {
                        if (e) {
                            if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
                            t.i = e
                        } else t.i = null
                    }

                    function He(t, e, n) {
                        var i, r;
                        e instanceof nn ? (t.a = e, i = t.a, (r = t.f) && !i.f && (rn(i), i.c = null, i.a.forEach(function(t, e) {
                            var n = e.toLowerCase();
                            e != n && (an(this, e), un(this, n, t))
                        }, i)), i.f = r) : (n || (e = ze(e, tn)), t.a = new nn(e, t.f))
                    }

                    function We(t, e, n) { t.a.set(e, n) }

                    function Be(t, e) { return t.a.get(e) }

                    function Ge(t) { return t instanceof Ke ? new Ke(t) : new Ke(t, void 0) }

                    function Xe(t, e) { var n = new Ke(null, void 0); return Fe(n, "https"), t && (n.b = t), e && (n.g = e), n }

                    function Je(t, e) { return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : "" }

                    function ze(t, e, n) { return c(t) ? (t = encodeURI(t).replace(e, Ye), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null }

                    function Ye(t) { return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16) }
                    Ke.prototype.toString = function() {
                        var t = [],
                            e = this.c;
                        e && t.push(ze(e, $e, !0), ":");
                        var n = this.b;
                        return (n || "file" == e) && (t.push("//"), (e = this.l) && t.push(ze(e, $e, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.i) && t.push(":", String(n))), (n = this.g) && (this.b && "/" != n.charAt(0) && t.push("/"), t.push(ze(n, "/" == n.charAt(0) ? Qe : Ze, !0))), (n = this.a.toString()) && t.push("?", n), (n = this.h) && t.push("#", ze(n, en)), t.join("")
                    };
                    var $e = /[#\/\?@]/g,
                        Ze = /[#\?:]/g,
                        Qe = /[#\?]/g,
                        tn = /[#\?@]/g,
                        en = /#/g;

                    function nn(t, e) { this.b = this.a = null, this.c = t || null, this.f = !!e }

                    function rn(n) {
                        n.a || (n.a = new Me, n.b = 0, n.c && function(t, e) {
                            if (t) {
                                t = t.split("&");
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n].indexOf("="),
                                        r = null;
                                    if (0 <= i) {
                                        var o = t[n].substring(0, i);
                                        r = t[n].substring(i + 1)
                                    } else o = t[n];
                                    e(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "")
                                }
                            }
                        }(n.c, function(t, e) { n.add(decodeURIComponent(t.replace(/\+/g, " ")), e) }))
                    }

                    function on(t) {
                        var e = xe(t);
                        if (void 0 === e) throw Error("Keys are undefined");
                        var n = new nn(null, void 0);
                        t = Le(t);
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i],
                                o = t[i];
                            f(o) ? un(n, r, o) : n.add(r, o)
                        }
                        return n
                    }

                    function an(t, e) { rn(t), e = cn(t, e), Ue(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, Ue((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && je(t))) }

                    function sn(t, e) { return rn(t), e = cn(t, e), Ue(t.a.b, e) }

                    function un(t, e, n) { an(t, e), 0 < n.length && (t.c = null, t.a.set(cn(t, e), U(n)), t.b += n.length) }

                    function cn(t, e) { return e = String(e), t.f && (e = e.toLowerCase()), e }(t = nn.prototype).add = function(t, e) { rn(this), this.c = null, t = cn(this, t); var n = this.a.get(t); return n || this.a.set(t, n = []), n.push(e), this.b += 1, this }, t.clear = function() { this.a = this.c = null, this.b = 0 }, t.forEach = function(n, i) { rn(this), this.a.forEach(function(t, e) { R(t, function(t) { n.call(i, t, e, this) }, this) }, this) }, t.U = function() {
                        rn(this);
                        for (var t = this.a.S(), e = this.a.U(), n = [], i = 0; i < e.length; i++)
                            for (var r = t[i], o = 0; o < r.length; o++) n.push(e[i]);
                        return n
                    }, t.S = function(t) {
                        rn(this);
                        var e = [];
                        if (c(t)) sn(this, t) && (e = j(e, this.a.get(cn(this, t))));
                        else { t = this.a.S(); for (var n = 0; n < t.length; n++) e = j(e, t[n]) }
                        return e
                    }, t.set = function(t, e) { return rn(this), this.c = null, sn(this, t = cn(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this }, t.get = function(t, e) { return 0 < (t = t ? this.S(t) : []).length ? String(t[0]) : e }, t.toString = function() {
                        if (this.c) return this.c;
                        if (!this.a) return "";
                        for (var t = [], e = this.a.U(), n = 0; n < e.length; n++) {
                            var i = e[n],
                                r = encodeURIComponent(String(i));
                            i = this.S(i);
                            for (var o = 0; o < i.length; o++) { var a = r; "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))), t.push(a) }
                        }
                        return this.c = t.join("&")
                    };
                    var hn = !Ft || 9 <= Number(Yt);

                    function ln() { this.a = "", this.b = dn }

                    function fn(t) { return t instanceof ln && t.constructor === ln && t.b === dn ? t.a : (A("expected object of type Const, got '" + t + "'"), "type_error:Const") }
                    ln.prototype.na = !0, ln.prototype.ma = function() { return this.a }, ln.prototype.toString = function() { return "Const{" + this.a + "}" };
                    var dn = {};

                    function pn(t) { var e = new ln; return e.a = t, e }

                    function vn() { this.a = "", this.b = wn }

                    function mn(t) { return t instanceof vn && t.constructor === vn && t.b === wn ? t.a : (A("expected object of type TrustedResourceUrl, got '" + t + "' of type " + l(t)), "type_error:TrustedResourceUrl") }

                    function gn(t, n) { var e, i, r = fn(t); if (!yn.test(r)) throw Error("Invalid TrustedResourceUrl format: " + r); return t = r.replace(bn, function(t, e) { if (!Object.prototype.hasOwnProperty.call(n, e)) throw Error('Found marker, "' + e + '", in format string, "' + r + '", but no valid label mapping found in args: ' + JSON.stringify(n)); return (t = n[e]) instanceof ln ? fn(t) : encodeURIComponent(String(t)) }), e = t, (i = new vn).a = e, i }
                    pn(""), vn.prototype.na = !0, vn.prototype.ma = function() { return this.a }, vn.prototype.toString = function() { return "TrustedResourceUrl{" + this.a + "}" };
                    var bn = /%{(\w+)}/g,
                        yn = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank#/i,
                        wn = {};

                    function In() { this.a = "", this.b = kn }

                    function Tn(t) { return t instanceof In && t.constructor === In && t.b === kn ? t.a : (A("expected object of type SafeUrl, got '" + t + "' of type " + l(t)), "type_error:SafeUrl") }
                    In.prototype.na = !0, In.prototype.ma = function() { return this.a }, In.prototype.toString = function() { return "SafeUrl{" + this.a + "}" };
                    var En = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

                    function An(t) { return t instanceof In ? t : (t = t.na ? t.ma() : String(t), En.test(t) || (t = "about:invalid#zClosurez"), Sn(t)) }
                    var kn = {};

                    function Sn(t) { var e = new In; return e.a = t, e }

                    function Nn() { this.a = "", this.b = _n }
                    Sn("about:blank"), Nn.prototype.na = !0, Nn.prototype.ma = function() { return this.a }, Nn.prototype.toString = function() { return "SafeHtml{" + this.a + "}" };
                    var _n = {};

                    function On(t) { var e = new Nn; return e.a = t, e }

                    function Pn(t) { var e = document; return c(t) ? e.getElementById(t) : t }

                    function Rn(n, t) { et(t, function(t, e) { t && t.na && (t = t.ma()), "style" == e ? n.style.cssText = t : "class" == e ? n.className = t : "for" == e ? n.htmlFor = t : Dn.hasOwnProperty(e) ? n.setAttribute(Dn[e], t) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? n.setAttribute(e, t) : n[e] = t }) }
                    On("<!DOCTYPE html>"), On(""), On("<br>");
                    var Dn = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

                    function Cn(t, e, n) {
                        var i = arguments,
                            r = document,
                            o = String(i[0]),
                            a = i[1];
                        if (!hn && a && (a.name || a.type)) {
                            if (o = ["<", o], a.name && o.push(' name="', F(a.name), '"'), a.type) {
                                o.push(' type="', F(a.type), '"');
                                var s = {};
                                st(s, a), delete s.type, a = s
                            }
                            o.push(">"), o = o.join("")
                        }
                        return o = r.createElement(o), a && (c(a) ? o.className = a : f(a) ? o.className = a.join(" ") : Rn(o, a)), 2 < i.length && function(e, n, t) {
                            function i(t) { t && n.appendChild(c(t) ? e.createTextNode(t) : t) }
                            for (var r = 2; r < t.length; r++) { var o = t[r];!d(o) || p(o) && 0 < o.nodeType ? i(o) : R(Ln(o) ? U(o) : o, i) }
                        }(r, o, i), o
                    }

                    function Ln(t) { if (t && "number" == typeof t.length) { if (p(t)) return "function" == typeof t.item || "string" == typeof t.item; if (a(t)) return "function" == typeof t.item } return !1 }

                    function xn(t) {
                        var e = [];
                        return function t(e, n, i) {
                            if (null == n) i.push("null");
                            else {
                                if ("object" == typeof n) {
                                    if (f(n)) {
                                        var r = n;
                                        n = r.length, i.push("[");
                                        for (var o = "", a = 0; a < n; a++) i.push(o), t(e, r[a], i), o = ",";
                                        return void i.push("]")
                                    }
                                    if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) { for (r in i.push("{"), o = "", n) Object.prototype.hasOwnProperty.call(n, r) && ("function" != typeof(a = n[r]) && (i.push(o), Vn(r, i), i.push(":"), t(e, a, i), o = ",")); return void i.push("}") }
                                    n = n.valueOf()
                                }
                                switch (typeof n) {
                                    case "string":
                                        Vn(n, i);
                                        break;
                                    case "number":
                                        i.push(isFinite(n) && !isNaN(n) ? String(n) : "null");
                                        break;
                                    case "boolean":
                                        i.push(String(n));
                                        break;
                                    case "function":
                                        i.push("null");
                                        break;
                                    default:
                                        throw Error("Unknown type: " + typeof n)
                                }
                            }
                        }(new Mn, t, e), e.join("")
                    }

                    function Mn() {}
                    var jn = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\v": "\\u000b" },
                        Un = /\uffff/.test("???") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

                    function Vn(t, e) { e.push('"', t.replace(Un, function(t) { var e = jn[t]; return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), jn[t] = e), e }), '"') }

                    function Kn() { var t = oi(); return Ft && !!Yt && 11 == Yt || /Edge\/\d+/.test(t) }

                    function Fn() { return h.window && h.window.location.href || self && self.location && self.location.href || "" }

                    function qn(t, e) {
                        e = e || h.window;
                        var n = "about:blank";
                        t && (n = Tn(An(t))), e.location.href = n
                    }

                    function Hn(t) { return !!((t = (t || oi()).toLowerCase()).match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/)) }

                    function Wn(t) { t = t || h.window; try { t.close() } catch (t) {} }

                    function Bn(t, e, n) {
                        var i = Math.floor(1e9 * Math.random()).toString();
                        e = e || 500, n = n || 600;
                        var r = (window.screen.availHeight - n) / 2,
                            o = (window.screen.availWidth - e) / 2;
                        for (s in e = { width: e, height: n, top: 0 < r ? r : 0, left: 0 < o ? o : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 }, n = oi().toLowerCase(), i && (e.target = i, Y(n, "crios/") && (e.target = "_blank")), ni(oi()) == ti && (t = t || "http://localhost", e.scrollbars = !0), n = t || "", (t = e) || (t = {}), i = window, e = n instanceof In ? n : An(void 0 !== n.href ? n.href : String(n)), n = t.target || n.target, r = [], t) switch (s) {
                            case "width":
                            case "height":
                            case "top":
                            case "left":
                                r.push(s + "=" + t[s]);
                                break;
                            case "target":
                            case "noopener":
                            case "noreferrer":
                                break;
                            default:
                                r.push(s + "=" + (t[s] ? 1 : 0))
                        }
                        var a, s = r.join(",");
                        if ((tt("iPhone") && !tt("iPod") && !tt("iPad") || tt("iPad") || tt("iPod")) && i.navigator && i.navigator.standalone && n && "_self" != n ? (s = i.document.createElement("A"), e instanceof In || e instanceof In || (e = e.na ? e.ma() : String(e), En.test(e) || (e = "about:invalid#zClosurez"), e = Sn(e)), s.href = Tn(e), s.setAttribute("target", n), t.noreferrer && s.setAttribute("rel", "noreferrer"), (t = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, i, 1), s.dispatchEvent(t), s = {}) : t.noreferrer ? (s = i.open("", n, s), t = Tn(e), s && (Ht && Y(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"), s.opener = null, pn("b/12014412, meta tag with sanitized URL"), t = On(t = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + F(t) + '">'), s.document.write((a = t) instanceof Nn && a.constructor === Nn && a.b === _n ? a.a : (A("expected object of type SafeHtml, got '" + a + "' of type " + l(a)), "type_error:SafeHtml")), s.document.close())) : (s = i.open(Tn(e), n, s)) && t.noopener && (s.opener = null), s) try { s.focus() } catch (t) {}
                        return s
                    }
                    var Gn = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                        Xn = /^[^@]+@[^@]+$/;

                    function Jn() { var e = null; return new dt(function(t) { "complete" == h.document.readyState ? t() : (e = function() { t() }, be(window, "load", e)) }).s(function(t) { throw ye(window, "load", e), t }) }

                    function zn(t) { return t = t || oi(), !("file:" !== hi() || !t.toLowerCase().match(/iphone|ipad|ipod|android/)) }

                    function Yn() { var t = h.window; try { return !(!t || t == t.top) } catch (t) { return !1 } }

                    function $n() { return "object" != typeof h.window && "function" == typeof h.importScripts }

                    function Zn() { return Lh.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : Lh.INTERNAL.hasOwnProperty("node") ? "Node" : $n() ? "Worker" : "Browser" }

                    function Qn() { var t = Zn(); return "ReactNative" === t || "Node" === t }
                    var ti = "Firefox",
                        ei = "Chrome";

                    function ni(t) { var e = t.toLowerCase(); return Y(e, "opera/") || Y(e, "opr/") || Y(e, "opios/") ? "Opera" : Y(e, "iemobile") ? "IEMobile" : Y(e, "msie") || Y(e, "trident/") ? "IE" : Y(e, "edge/") ? "Edge" : Y(e, "firefox/") ? ti : Y(e, "silk/") ? "Silk" : Y(e, "blackberry") ? "Blackberry" : Y(e, "webos") ? "Webos" : !Y(e, "safari/") || Y(e, "chrome/") || Y(e, "crios/") || Y(e, "android") ? !Y(e, "chrome/") && !Y(e, "crios/") || Y(e, "edge/") ? Y(e, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : ei : "Safari" }
                    var ii = { Uc: "FirebaseCore-web", Wc: "FirebaseUI-web" };

                    function ri(t, e) {
                        e = e || [];
                        var n, i = [],
                            r = {};
                        for (n in ii) r[ii[n]] = !0;
                        for (n = 0; n < e.length; n++) void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n]));
                        return i.sort(), (e = i).length || (e = ["FirebaseCore-web"]), "Browser" === (i = Zn()) ? i = ni(r = oi()) : "Worker" === i && (i = ni(r = oi()) + "-" + i), i + "/JsCore/" + t + "/" + e.join(",")
                    }

                    function oi() { return h.navigator && h.navigator.userAgent || "" }

                    function ai(t, e) { t = t.split("."), e = e || h; for (var n = 0; n < t.length && "object" == typeof e && null != e; n++) e = e[t[n]]; return n != t.length && (e = void 0), e }

                    function si() {
                        try {
                            var t = h.localStorage,
                                e = vi();
                            if (t) return t.setItem(e, "1"), t.removeItem(e), !Kn() || !!h.indexedDB
                        } catch (t) { return $n() && !!h.indexedDB }
                        return !1
                    }

                    function ui() { return (ci() || "chrome-extension:" === hi() || zn()) && !Qn() && si() && !$n() }

                    function ci() { return "http:" === hi() || "https:" === hi() }

                    function hi() { return h.location && h.location.protocol || null }

                    function li(t) { return !Hn(t = t || oi()) && ni(t) != ti }

                    function fi(t) { return void 0 === t ? null : xn(t) }

                    function di(t) { var e, n = {}; for (e in t) t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]); return n }

                    function pi(t) { if (null !== t) return JSON.parse(t) }

                    function vi(t) { return t || Math.floor(1e9 * Math.random()).toString() }

                    function mi(t) { return "Safari" != ni(t = t || oi()) && !t.toLowerCase().match(/iphone|ipad|ipod/) }

                    function gi() {
                        var t = h.___jsl;
                        if (t && t.H)
                            for (var e in t.H)
                                if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = t.H[e].L.concat(), t.CP)
                                    for (var n = 0; n < t.CP.length; n++) t.CP[n] = null
                    }

                    function bi(t, e) {
                        if (e < t) throw Error("Short delay should be less than long delay!");
                        this.a = t, this.c = e, t = oi(), e = Zn(), this.b = Hn(t) || "ReactNative" === e
                    }

                    function yi() { var t = h.document; return !t || void 0 === t.visibilityState || "visible" == t.visibilityState }

                    function wi(t) { try { var e = new Date(parseInt(t, 10)); if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString() } catch (t) {} return null }

                    function Ii() { return !(!ai("fireauth.oauthhelper", h) && !ai("fireauth.iframe", h)) }
                    bi.prototype.get = function() { var t = h.navigator; return !t || "boolean" != typeof t.onLine || !ci() && "chrome-extension:" !== hi() && void 0 === t.connection || t.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a) };
                    var Ti, Ei = {};

                    function Ai(t) { Ei[t] || (Ei[t] = !0, "undefined" != typeof console && "function" == typeof console.warn && console.warn(t)) }
                    try {
                        var ki = {};
                        Object.defineProperty(ki, "abcd", { configurable: !0, enumerable: !0, value: 1 }), Object.defineProperty(ki, "abcd", { configurable: !0, enumerable: !0, value: 2 }), Ti = 2 == ki.abcd
                    } catch (t) { Ti = !1 }

                    function Si(t, e, n) { Ti ? Object.defineProperty(t, e, { configurable: !0, enumerable: !0, value: n }) : t[e] = n }

                    function Ni(t, e) {
                        if (e)
                            for (var n in e) e.hasOwnProperty(n) && Si(t, n, e[n])
                    }

                    function _i(t) { var e = {}; return Ni(e, t), e }

                    function Oi(t) {
                        var e = t;
                        if ("object" == typeof t && null != t)
                            for (var n in e = "length" in t ? [] : {}, t) Si(e, n, Oi(t[n]));
                        return e
                    }

                    function Pi(t) {
                        var e = {},
                            n = t[Di],
                            i = t[Ci];
                        if (!(t = t[Li]) || t != Ri && !n) throw Error("Invalid provider user info!");
                        e[Mi] = i || null, e[xi] = n || null, Si(this, Ui, t), Si(this, ji, Oi(e))
                    }
                    var Ri = "EMAIL_SIGNIN",
                        Di = "email",
                        Ci = "newEmail",
                        Li = "requestType",
                        xi = "email",
                        Mi = "fromEmail",
                        ji = "data",
                        Ui = "operation";

                    function Vi(t, e) { this.code = Fi + t, this.message = e || qi[t] || "" }

                    function Ki(t) { var e = t && t.code; return e ? new Vi(e.substring(Fi.length), t.message) : null }
                    y(Vi, Error), Vi.prototype.C = function() { return { code: this.code, message: this.message } }, Vi.prototype.toJSON = function() { return this.C() };
                    var Fi = "auth/",
                        qi = { "argument-error": "", "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.", "code-expired": "The SMS code has expired. Please re-send the verification code to try again.", "cordova-not-ready": "Cordova framework is not ready.", "cors-unsupported": "This browser is not supported.", "credential-already-in-use": "This credential is already associated with a different user account.", "custom-token-mismatch": "The custom token corresponds to a different audience.", "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.", "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.", "email-already-in-use": "The email address is already in use by another account.", "expired-action-code": "The action code has expired. ", "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.", "internal-error": "An internal error has occurred.", "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.", "invalid-app-id": "The mobile app identifier is not registed for the current project.", "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.", "invalid-auth-event": "An internal error has occurred.", "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.", "invalid-continue-uri": "The continue URL provided in the request is invalid.", "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.", "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.", "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.", "invalid-email": "The email address is badly formatted.", "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.", "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.", "invalid-credential": "The supplied auth credential is malformed or has expired.", "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.", "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.", "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password": "The password is invalid or the user does not have a password.", "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].", "invalid-provider-id": "The specified provider ID is invalid.", "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.", "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.", "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.", "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.", "missing-continue-uri": "A continue URL must be provided in the request.", "missing-iframe-start": "An internal error has occurred.", "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.", "missing-or-invalid-nonce": "The OIDC ID token requires a valid unhashed nonce.", "missing-phone-number": "To send verification codes, provide a phone number for the recipient.", "missing-verification-id": "The phone auth credential was created with an empty verification ID.", "app-deleted": "This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.", "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event": "An internal error has occurred.", "no-such-provider": "User was not linked to an account with the given provider.", "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.", "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.', "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.", "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.", "provider-already-linked": "User can only be linked to one identity for the given provider.", "quota-exceeded": "The project's quota for this operation has been exceeded.", "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending": "A redirect sign-in operation is already pending.", "rejected-credential": "The request contains malformed or mismatching credentials.", timeout: "The operation has timed out.", "user-token-expired": "The user's credential is no longer valid. The user must sign in again.", "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.", "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.", "unsupported-persistence-type": "The current environment does not support the specified persistence type.", "user-cancelled": "User did not grant your application the permissions it requested.", "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled": "The user account has been disabled by an administrator.", "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.", "user-signed-out": "", "weak-password": "The password must be 6 characters long or more.", "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled." };

                    function Hi(t) {
                        var e = t[Ji];
                        if (void 0 === e) throw new Vi("missing-continue-uri");
                        if ("string" != typeof e || "string" == typeof e && !e.length) throw new Vi("invalid-continue-uri");
                        this.h = e, this.b = this.a = null, this.g = !1;
                        var n = t[Wi];
                        if (n && "object" == typeof n) {
                            e = n[$i];
                            var i = n[zi];
                            if (n = n[Yi], "string" == typeof e && e.length) {
                                if (this.a = e, void 0 !== i && "boolean" != typeof i) throw new Vi("argument-error", zi + " property must be a boolean when specified.");
                                if (this.g = !!i, void 0 !== n && ("string" != typeof n || "string" == typeof n && !n.length)) throw new Vi("argument-error", Yi + " property must be a non empty string when specified.");
                                this.b = n || null
                            } else { if (void 0 !== e) throw new Vi("argument-error", $i + " property must be a non empty string when specified."); if (void 0 !== i || void 0 !== n) throw new Vi("missing-android-pkg-name") }
                        } else if (void 0 !== n) throw new Vi("argument-error", Wi + " property must be a non null object when specified.");
                        if (this.f = null, (e = t[Xi]) && "object" == typeof e) {
                            if ("string" == typeof(e = e[Zi]) && e.length) this.f = e;
                            else if (void 0 !== e) throw new Vi("argument-error", Zi + " property must be a non empty string when specified.")
                        } else if (void 0 !== e) throw new Vi("argument-error", Xi + " property must be a non null object when specified.");
                        if (void 0 !== (e = t[Gi]) && "boolean" != typeof e) throw new Vi("argument-error", Gi + " property must be a boolean when specified.");
                        if (this.c = !!e, void 0 !== (t = t[Bi]) && ("string" != typeof t || "string" == typeof t && !t.length)) throw new Vi("argument-error", Bi + " property must be a non empty string when specified.");
                        this.i = t || null
                    }
                    var Wi = "android",
                        Bi = "dynamicLinkDomain",
                        Gi = "handleCodeInApp",
                        Xi = "iOS",
                        Ji = "url",
                        zi = "installApp",
                        Yi = "minimumVersion",
                        $i = "packageName",
                        Zi = "bundleId";

                    function Qi(t) { var e = {}; for (var n in e.continueUrl = t.h, e.canHandleCodeInApp = t.c, (e.androidPackageName = t.a) && (e.androidMinimumVersion = t.b, e.androidInstallApp = t.g), e.iOSBundleId = t.f, e.dynamicLinkDomain = t.i, e) null === e[n] && delete e[n]; return e }
                    var tr = null,
                        er = null;

                    function nr(t) {
                        var e = "";
                        return function(i, t) {
                            function e(t) {
                                for (; r < i.length;) {
                                    var e = i.charAt(r++),
                                        n = er[e];
                                    if (null != n) return n;
                                    if (!/^[\s\xa0]*$/.test(e)) throw Error("Unknown base64 encoding at char: " + e)
                                }
                                return t
                            }! function() { if (!tr) { tr = {}, er = {}; for (var t = 0; t < 65; t++) tr[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t), 62 <= (er[tr[t]] = t) && (er["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)] = t) } }();
                            for (var r = 0;;) {
                                var n = e(-1),
                                    o = e(0),
                                    a = e(64),
                                    s = e(64);
                                if (64 === s && -1 === n) break;
                                t(n << 2 | o >> 4), 64 != a && (t(o << 4 & 240 | a >> 2), 64 != s && t(a << 6 & 192 | s))
                            }
                        }(t, function(t) { e += String.fromCharCode(t) }), e
                    }

                    function ir(t) { this.c = t.sub, this.a = t.provider_id || t.firebase && t.firebase.sign_in_provider || null, this.b = !!t.is_anonymous || "anonymous" == this.a }

                    function rr(t) { return (t = or(t)) && t.sub && t.iss && t.aud && t.exp ? new ir(t) : null }

                    function or(t) { if (!t) return null; if (3 != (t = t.split(".")).length) return null; for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++) t += "."; try { return JSON.parse(nr(t)) } catch (t) {} return null }
                    ir.prototype.f = function() { return this.b };
                    var ar, sr = { $c: { ab: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", ib: "https://securetoken.googleapis.com/v1/token", id: "p" }, bd: { ab: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", ib: "https://staging-securetoken.sandbox.googleapis.com/v1/token", id: "s" }, cd: { ab: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/", ib: "https://test-securetoken.sandbox.googleapis.com/v1/token", id: "t" } };

                    function ur(t) {
                        for (var e in sr)
                            if (sr[e].id === t) return { firebaseEndpoint: (t = sr[e]).ab, secureTokenEndpoint: t.ib };
                        return null
                    }
                    ar = ur("__EID__") ? "__EID__" : void 0;
                    var cr = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
                        hr = ["client_id", "response_type", "scope", "redirect_uri", "state"],
                        lr = { Vc: { Ma: "locale", Ba: 500, Aa: 600, Na: "facebook.com", hb: hr }, Xc: { Ma: null, Ba: 500, Aa: 620, Na: "github.com", hb: hr }, Yc: { Ma: "hl", Ba: 515, Aa: 680, Na: "google.com", hb: hr }, dd: { Ma: "lang", Ba: 485, Aa: 705, Na: "twitter.com", hb: cr } };

                    function fr(t) {
                        for (var e in lr)
                            if (lr[e].Na == t) return lr[e];
                        return null
                    }

                    function dr(t) {
                        var e = {};
                        e["facebook.com"] = br, e["google.com"] = wr, e["github.com"] = yr, e["twitter.com"] = Ir;
                        var n = t && t[vr];
                        try { if (n) return e[n] ? new e[n](t) : new gr(t); if (void 0 !== t[pr]) return new mr(t) } catch (t) {}
                        return null
                    }
                    var pr = "idToken",
                        vr = "providerId";

                    function mr(t) {
                        var e = t[vr];
                        if (!e && t[pr]) {
                            var n = rr(t[pr]);
                            n && n.a && (e = n.a)
                        }
                        if (!e) throw Error("Invalid additional user info!");
                        "anonymous" != e && "custom" != e || (e = null), n = !1, void 0 !== t.isNewUser ? n = !!t.isNewUser : "identitytoolkit#SignupNewUserResponse" === t.kind && (n = !0), Si(this, "providerId", e), Si(this, "isNewUser", n)
                    }

                    function gr(t) { mr.call(this, t), Si(this, "profile", Oi((t = pi(t.rawUserInfo || "{}")) || {})) }

                    function br(t) { if (gr.call(this, t), "facebook.com" != this.providerId) throw Error("Invalid provider ID!") }

                    function yr(t) {
                        if (gr.call(this, t), "github.com" != this.providerId) throw Error("Invalid provider ID!");
                        Si(this, "username", this.profile && this.profile.login || null)
                    }

                    function wr(t) { if (gr.call(this, t), "google.com" != this.providerId) throw Error("Invalid provider ID!") }

                    function Ir(t) {
                        if (gr.call(this, t), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
                        Si(this, "username", t.screenName || null)
                    }

                    function Tr(t) { this.a = Ge(t) }

                    function Er(t) {
                        var e = Ge(t),
                            n = Be(e, "link"),
                            i = Be(Ge(n), "link");
                        return Be(Ge(e = Be(e, "deep_link_id")), "link") || e || i || n || t
                    }

                    function Ar(t, n) { return t.then(function(t) { if (t[sa]) { var e = rr(t[sa]); if (!e || n != e.c) throw new Vi("user-mismatch"); return t } throw new Vi("user-mismatch") }).s(function(t) { throw t && t.code && t.code == Fi + "user-not-found" ? new Vi("user-mismatch") : t }) }

                    function kr(t, e) {
                        if (!e) throw new Vi("internal-error", "failed to construct a credential");
                        this.a = e, Si(this, "providerId", t), Si(this, "signInMethod", t)
                    }

                    function Sr(t) { return { pendingToken: t.a, requestUri: "http://localhost" } }

                    function Nr(t, e, n) {
                        if (this.a = null, e.idToken || e.accessToken) e.idToken && Si(this, "idToken", e.idToken), e.accessToken && Si(this, "accessToken", e.accessToken), e.nonce && !e.pendingToken && Si(this, "nonce", e.nonce), e.pendingToken && (this.a = e.pendingToken);
                        else {
                            if (!e.oauthToken || !e.oauthTokenSecret) throw new Vi("internal-error", "failed to construct a credential");
                            Si(this, "accessToken", e.oauthToken), Si(this, "secret", e.oauthTokenSecret)
                        }
                        Si(this, "providerId", t), Si(this, "signInMethod", n)
                    }

                    function _r(t) { var e = {}; return t.idToken && (e.id_token = t.idToken), t.accessToken && (e.access_token = t.accessToken), t.secret && (e.oauth_token_secret = t.secret), e.providerId = t.providerId, t.nonce && !t.a && (e.nonce = t.nonce), e = { postBody: on(e).toString(), requestUri: "http://localhost" }, t.a && (delete e.postBody, e.pendingToken = t.a), e }

                    function Or(t, e) { this.Dc = e || [], Ni(this, { providerId: t, isOAuthProvider: !0 }), this.yb = {}, this.cb = (fr(t) || {}).Ma || null, this.$a = null }

                    function Pr(t) {
                        if ("string" != typeof t || 0 != t.indexOf("saml.")) throw new Vi("argument-error", 'SAML provider IDs must be prefixed with "saml."');
                        Or.call(this, t, [])
                    }

                    function Rr(t) { Or.call(this, t, hr), this.a = [] }

                    function Dr() { Rr.call(this, "facebook.com") }

                    function Cr(t) { if (!t) throw new Vi("argument-error", "credential failed: expected 1 argument (the OAuth access token)."); var e = t; return p(t) && (e = t.accessToken), (new Dr).credential(null, e) }

                    function Lr() { Rr.call(this, "github.com") }

                    function xr(t) { if (!t) throw new Vi("argument-error", "credential failed: expected 1 argument (the OAuth access token)."); var e = t; return p(t) && (e = t.accessToken), (new Lr).credential(null, e) }

                    function Mr() { Rr.call(this, "google.com"), this.ua("profile") }

                    function jr(t, e) { var n = t; return p(t) && (n = t.idToken, e = t.accessToken), (new Mr).credential(n, e) }

                    function Ur() { Or.call(this, "twitter.com", cr) }

                    function Vr(t, e) { var n = t; if (p(n) || (n = { oauthToken: t, oauthTokenSecret: e }), !n.oauthToken || !n.oauthTokenSecret) throw new Vi("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret)."); return new Nr("twitter.com", n, "twitter.com") }

                    function Kr(t, e, n) { this.a = t, this.c = e, Si(this, "providerId", "password"), Si(this, "signInMethod", n === Fr.EMAIL_LINK_SIGN_IN_METHOD ? Fr.EMAIL_LINK_SIGN_IN_METHOD : Fr.EMAIL_PASSWORD_SIGN_IN_METHOD) }

                    function Fr() { Ni(this, { providerId: "password", isOAuthProvider: !1 }) }

                    function qr(t, e) { if (!(e = Hr(e))) throw new Vi("argument-error", "Invalid email link!"); return new Kr(t, e, Fr.EMAIL_LINK_SIGN_IN_METHOD) }

                    function Hr(t) { var e = Be((t = new Tr(t = Er(t))).a, "oobCode") || null; return "signIn" === (Be(t.a, "mode") || null) && e ? e : null }

                    function Wr(t) {
                        if (!(t.Ta && t.Sa || t.Fa && t.$)) throw new Vi("internal-error");
                        this.a = t, Si(this, "providerId", "phone"), Si(this, "signInMethod", "phone")
                    }

                    function Br(t) { return t.a.Fa && t.a.$ ? { temporaryProof: t.a.Fa, phoneNumber: t.a.$ } : { sessionInfo: t.a.Ta, code: t.a.Sa } }

                    function Gr(t) {
                        try { this.a = t || Lh.auth() } catch (t) { throw new Vi("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().") }
                        Ni(this, { providerId: "phone", isOAuthProvider: !1 })
                    }

                    function Xr(t, e) { if (!t) throw new Vi("missing-verification-id"); if (!e) throw new Vi("missing-verification-code"); return new Wr({ Ta: t, Sa: e }) }

                    function Jr(t) {
                        if (t.temporaryProof && t.phoneNumber) return new Wr({ Fa: t.temporaryProof, $: t.phoneNumber });
                        var e = t && t.providerId;
                        if (!e || "password" === e) return null;
                        var n = t && t.oauthAccessToken,
                            i = t && t.oauthTokenSecret,
                            r = t && t.nonce,
                            o = t && t.oauthIdToken,
                            a = t && t.pendingToken;
                        try {
                            switch (e) {
                                case "google.com":
                                    return jr(o, n);
                                case "facebook.com":
                                    return Cr(n);
                                case "github.com":
                                    return xr(n);
                                case "twitter.com":
                                    return Vr(n, i);
                                default:
                                    return n || i || o || a ? a ? 0 == e.indexOf("saml.") ? new kr(e, a) : new Nr(e, { pendingToken: a, idToken: t.oauthIdToken, accessToken: t.oauthAccessToken }, e) : new Rr(e).credential(o, n, r) : null
                            }
                        } catch (t) { return null }
                    }

                    function zr(t) { if (!t.isOAuthProvider) throw new Vi("invalid-oauth-provider") }

                    function Yr(t, e, n, i, r, o) { if (this.b = t, this.c = e || null, this.f = n || null, this.g = i || null, this.h = o || null, this.a = r || null, !this.f && !this.a) throw new Vi("invalid-auth-event"); if (this.f && this.a) throw new Vi("invalid-auth-event"); if (this.f && !this.g) throw new Vi("invalid-auth-event") }

                    function $r(t) { return (t = t || {}).type ? new Yr(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && Ki(t.error), t.postBody) : null }

                    function Zr() { this.b = null, this.a = [] }
                    y(gr, mr), y(br, gr), y(yr, gr), y(wr, gr), y(Ir, gr), kr.prototype.la = function(t) { return ka(t, Sr(this)) }, kr.prototype.b = function(t, e) { var n = Sr(this); return n.idToken = e, Sa(t, n) }, kr.prototype.f = function(t, e) { return Ar(Na(t, Sr(this)), e) }, kr.prototype.C = function() { return { providerId: this.providerId, signInMethod: this.signInMethod, pendingToken: this.a } }, Nr.prototype.la = function(t) { return ka(t, _r(this)) }, Nr.prototype.b = function(t, e) { var n = _r(this); return n.idToken = e, Sa(t, n) }, Nr.prototype.f = function(t, e) { return Ar(Na(t, _r(this)), e) }, Nr.prototype.C = function() { var t = { providerId: this.providerId, signInMethod: this.signInMethod }; return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret && (t.oauthTokenSecret = this.secret), this.nonce && (t.nonce = this.nonce), this.a && (t.pendingToken = this.a), t }, Or.prototype.Da = function(t) { return this.yb = it(t), this }, y(Pr, Or), y(Rr, Or), Rr.prototype.ua = function(t) { return L(this.a, t) || this.a.push(t), this }, Rr.prototype.Eb = function() { return U(this.a) }, Rr.prototype.credential = function(t, e, n) { if (!t && !e) throw new Vi("argument-error", "credential failed: must provide the ID token and/or the access token."); return new Nr(this.providerId, { idToken: t || null, accessToken: e || null, nonce: n || null }, this.providerId) }, y(Dr, Rr), Si(Dr, "PROVIDER_ID", "facebook.com"), Si(Dr, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"), y(Lr, Rr), Si(Lr, "PROVIDER_ID", "github.com"), Si(Lr, "GITHUB_SIGN_IN_METHOD", "github.com"), y(Mr, Rr), Si(Mr, "PROVIDER_ID", "google.com"), Si(Mr, "GOOGLE_SIGN_IN_METHOD", "google.com"), y(Ur, Or), Si(Ur, "PROVIDER_ID", "twitter.com"), Si(Ur, "TWITTER_SIGN_IN_METHOD", "twitter.com"), Kr.prototype.la = function(t) { return this.signInMethod == Fr.EMAIL_LINK_SIGN_IN_METHOD ? ns(t, xa, { email: this.a, oobCode: this.c }) : ns(t, Za, { email: this.a, password: this.c }) }, Kr.prototype.b = function(t, e) { return this.signInMethod == Fr.EMAIL_LINK_SIGN_IN_METHOD ? ns(t, Ma, { idToken: e, email: this.a, oobCode: this.c }) : ns(t, Ga, { idToken: e, email: this.a, password: this.c }) }, Kr.prototype.f = function(t, e) { return Ar(this.la(t), e) }, Kr.prototype.C = function() { return { email: this.a, password: this.c, signInMethod: this.signInMethod } }, Ni(Fr, { PROVIDER_ID: "password" }), Ni(Fr, { EMAIL_LINK_SIGN_IN_METHOD: "emailLink" }), Ni(Fr, { EMAIL_PASSWORD_SIGN_IN_METHOD: "password" }), Wr.prototype.la = function(t) { return t.Ua(Br(this)) }, Wr.prototype.b = function(t, e) { var n = Br(this); return n.idToken = e, ns(t, ts, n) }, Wr.prototype.f = function(t, e) { var n = Br(this); return n.operation = "REAUTH", Ar(t = ns(t, es, n), e) }, Wr.prototype.C = function() { var t = { providerId: "phone" }; return this.a.Ta && (t.verificationId = this.a.Ta), this.a.Sa && (t.verificationCode = this.a.Sa), this.a.Fa && (t.temporaryProof = this.a.Fa), this.a.$ && (t.phoneNumber = this.a.$), t }, Gr.prototype.Ua = function(i, r) {
                        var o = this.a.b;
                        return wt(r.verify()).then(function(t) {
                            if (!c(t)) throw new Vi("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
                            switch (r.type) {
                                case "recaptcha":
                                    return (e = o, n = { phoneNumber: i, recaptchaToken: t }, ns(e, Wa, n)).then(function(t) { return "function" == typeof r.reset && r.reset(), t }, function(t) { throw "function" == typeof r.reset && r.reset(), t });
                                default:
                                    throw new Vi("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')
                            }
                            var e, n
                        })
                    }, Ni(Gr, { PROVIDER_ID: "phone" }), Ni(Gr, { PHONE_SIGN_IN_METHOD: "phone" }), Yr.prototype.C = function() { return { type: this.b, eventId: this.c, urlResponse: this.f, sessionId: this.g, postBody: this.h, error: this.a && this.a.C() } };
                    var Qr, to = null;

                    function eo(t) {
                        var e = "unauthorized-domain",
                            n = void 0,
                            i = Ge(t);
                        t = i.b, "chrome-extension" == (i = i.c) ? n = V("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == i || "https" == i ? n = V("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : e = "operation-not-supported-in-this-environment", Vi.call(this, e, n)
                    }

                    function no(t, e, n) { Vi.call(this, t, n), (t = e || {}).zb && Si(this, "email", t.zb), t.$ && Si(this, "phoneNumber", t.$), t.credential && Si(this, "credential", t.credential) }

                    function io(t) {
                        if (t.code) {
                            var e = t.code || "";
                            0 == e.indexOf(Fi) && (e = e.substring(Fi.length));
                            var n = { credential: Jr(t) };
                            if (t.email) n.zb = t.email;
                            else if (t.phoneNumber) n.$ = t.phoneNumber;
                            else if (!n.credential) return new Vi(e, t.message || void 0);
                            return new no(e, n, t.message)
                        }
                        return null
                    }

                    function ro() {}

                    function oo(t) { return t.c || (t.c = t.b()) }

                    function ao() {}

                    function so(t) { if (t.f || "undefined" != typeof XMLHttpRequest || "undefined" == typeof ActiveXObject) return t.f; for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < e.length; n++) { var i = e[n]; try { return new ActiveXObject(i), t.f = i } catch (t) {} } throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed") }

                    function uo() {}

                    function co() { this.a = new XDomainRequest, this.readyState = 0, this.onreadystatechange = null, this.responseText = "", this.status = -1, this.statusText = "", this.a.onload = m(this.ec, this), this.a.onerror = m(this.Fb, this), this.a.onprogress = m(this.fc, this), this.a.ontimeout = m(this.ic, this) }

                    function ho(t, e) { t.readyState = e, t.onreadystatechange && t.onreadystatechange() }

                    function lo(t, e, n) { this.reset(t, e, n, void 0, void 0) }

                    function fo(t) { this.f = t, this.b = this.c = this.a = null }

                    function po(t, e) { this.name = t, this.value = e }
                    Zr.prototype.subscribe = function(t) {
                        var n = this;
                        this.a.push(t), this.b || (this.b = function(t) { for (var e = 0; e < n.a.length; e++) n.a[e](t) }, "function" == typeof(t = ai("universalLinks.subscribe", h)) && t(null, this.b))
                    }, Zr.prototype.unsubscribe = function(e) { M(this.a, function(t) { return t == e }) }, y(eo, Vi), y(no, Vi), no.prototype.C = function() {
                        var t = { code: this.code, message: this.message };
                        this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber);
                        var e = this.credential && this.credential.C();
                        return e && st(t, e), t
                    }, no.prototype.toJSON = function() { return this.C() }, ro.prototype.c = null, y(ao, ro), ao.prototype.a = function() { var t = so(this); return t ? new ActiveXObject(t) : new XMLHttpRequest }, ao.prototype.b = function() { var t = {}; return so(this) && (t[0] = !0, t[1] = !0), t }, Qr = new ao, y(uo, ro), uo.prototype.a = function() { var t = new XMLHttpRequest; if ("withCredentials" in t) return t; if ("undefined" != typeof XDomainRequest) return new co; throw Error("Unsupported browser") }, uo.prototype.b = function() { return {} }, (t = co.prototype).open = function(t, e, n) {
                        if (null != n && !n) throw Error("Only async requests are supported.");
                        this.a.open(t, e)
                    }, t.send = function(t) {
                        if (t) {
                            if ("string" != typeof t) throw Error("Only string data is supported");
                            this.a.send(t)
                        } else this.a.send()
                    }, t.abort = function() { this.a.abort() }, t.setRequestHeader = function() {}, t.getResponseHeader = function(t) { return "content-type" == t.toLowerCase() ? this.a.contentType : "" }, t.ec = function() { this.status = 200, this.responseText = this.a.responseText, ho(this, 4) }, t.Fb = function() { this.status = 500, this.responseText = "", ho(this, 4) }, t.ic = function() { this.Fb() }, t.fc = function() { this.status = 200, ho(this, 1) }, t.getAllResponseHeaders = function() { return "content-type: " + this.a.contentType }, lo.prototype.a = null, lo.prototype.reset = function(t, e, n, i, r) { delete this.a }, po.prototype.toString = function() { return this.name };
                    var vo = new po("SEVERE", 1e3),
                        mo = new po("WARNING", 900),
                        go = new po("CONFIG", 700),
                        bo = new po("FINE", 500);
                    fo.prototype.log = function(t, e, n) {
                        if (t.value >= function t(e) { return e.c ? e.c : e.a ? t(e.a) : (A("Root logger has no level set."), null) }(this).value)
                            for (a(e) && (e = e()), t = new lo(t, String(e), this.f), n && (t.a = n), n = this; n;) n = n.a
                    };
                    var yo, wo = {},
                        Io = null;

                    function To(t) {
                        var e;
                        if (Io || (Io = new fo(""), (wo[""] = Io).c = go), !(e = wo[t])) {
                            e = new fo(t);
                            var n = t.lastIndexOf("."),
                                i = t.substr(n + 1);
                            (n = To(t.substr(0, n))).b || (n.b = {}), (n.b[i] = e).a = n, wo[t] = e
                        }
                        return e
                    }

                    function Eo(t, e) { t && t.log(bo, e, void 0) }

                    function Ao(t) { this.f = t }

                    function ko(t) { _e.call(this), this.i = t, this.readyState = So, this.status = 0, this.responseText = this.statusText = "", this.onreadystatechange = null, this.g = new Headers, this.b = null, this.h = "GET", this.c = "", this.a = !1, this.f = To("goog.net.FetchXmlHttp") }
                    y(Ao, ro), Ao.prototype.a = function() { return new ko(this.f) }, Ao.prototype.b = (yo = {}, function() { return yo }), y(ko, _e);
                    var So = 0;

                    function No(t) { t.onreadystatechange && t.onreadystatechange.call(t) }

                    function _o(t) { _e.call(this), this.headers = new Me, this.D = t || null, this.c = !1, this.w = this.a = null, this.h = this.N = this.m = "", this.f = this.I = this.i = this.G = !1, this.g = 0, this.u = null, this.o = Oo, this.v = this.O = !1 }(t = ko.prototype).open = function(t, e) {
                        if (this.readyState != So) throw this.abort(), Error("Error reopening a connection");
                        this.h = t, this.c = e, this.readyState = 1, No(this)
                    }, t.send = function(t) {
                        if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
                        this.a = !0;
                        var e = { headers: this.g, method: this.h, credentials: void 0, cache: void 0 };
                        t && (e.body = t), this.i.fetch(new Request(this.c, e)).then(this.hc.bind(this), this.Gb.bind(this))
                    }, t.abort = function() { this.responseText = "", this.g = new Headers, this.status = 0, 1 <= this.readyState && this.a && 4 != this.readyState && (this.readyState = 4, this.a = !1, No(this)), this.readyState = So }, t.hc = function(t) { this.a && (this.b || (this.b = t.headers, this.readyState = 2, No(this)), this.a && (this.readyState = 3, No(this), this.a && t.text().then(this.gc.bind(this, t), this.Gb.bind(this)))) }, t.gc = function(t, e) { this.a && (this.status = t.status, this.statusText = t.statusText, this.responseText = e, this.readyState = 4, No(this)) }, t.Gb = function(t) {
                        var e = this.f;
                        e && e.log(mo, "Failed to fetch url " + this.c, t instanceof Error ? t : Error(t)), this.a && (this.readyState = 4, No(this))
                    }, t.setRequestHeader = function(t, e) { this.g.append(t, e) }, t.getResponseHeader = function(t) { return this.b ? this.b.get(t.toLowerCase()) || "" : ((t = this.f) && t.log(mo, "Attempting to get response header but no headers have been received for url: " + this.c, void 0), "") }, t.getAllResponseHeaders = function() {
                        if (!this.b) { var t = this.f; return t && t.log(mo, "Attempting to get all response headers but no headers have been received for url: " + this.c, void 0), "" }
                        t = [];
                        for (var e = this.b.entries(), n = e.next(); !n.done;) n = n.value, t.push(n[0] + ": " + n[1]), n = e.next();
                        return t.join("\r\n")
                    }, y(_o, _e);
                    var Oo = "";
                    _o.prototype.b = To("goog.net.XhrIo");
                    var Po = /^https?$/i,
                        Ro = ["POST", "PUT"];

                    function Do(e, t, n, i, r) {
                        if (e.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + e.m + "; newUri=" + t);
                        n = n ? n.toUpperCase() : "GET", e.m = t, e.h = "", e.N = n, e.G = !1, e.c = !0, e.a = e.D ? e.D.a() : Qr.a(), e.w = e.D ? oo(e.D) : oo(Qr), e.a.onreadystatechange = m(e.Jb, e);
                        try { Eo(e.b, Fo(e, "Opening Xhr")), e.I = !0, e.a.open(n, String(t), !0), e.I = !1 } catch (t) { return Eo(e.b, Fo(e, "Error opening Xhr: " + t.message)), void Lo(e, t) }
                        t = i || "";
                        var o, a = new Me(e.headers);
                        r && function(t, e) {
                            if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                            else if (d(t) || c(t)) R(t, e, void 0);
                            else
                                for (var n = xe(t), i = Le(t), r = i.length, o = 0; o < r; o++) e.call(void 0, i[o], n && n[o], t)
                        }(r, function(t, e) { a.set(e, t) }), r = function(t) {
                            t: {
                                for (var e = Co, n = t.length, i = c(t) ? t.split("") : t, r = 0; r < n; r++)
                                    if (r in i && e.call(void 0, i[r], r, t)) { e = r; break t }
                                e = -1
                            }
                            return e < 0 ? null : c(t) ? t.charAt(e) : t[e]
                        }(a.U()), i = h.FormData && t instanceof h.FormData, !L(Ro, n) || r || i || a.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), a.forEach(function(t, e) { this.a.setRequestHeader(e, t) }, e), e.o && (e.a.responseType = e.o), "withCredentials" in e.a && e.a.withCredentials !== e.O && (e.a.withCredentials = e.O);
                        try { Uo(e), 0 < e.g && (e.v = (o = e.a, Ft && Zt(9) && "number" == typeof o.timeout && void 0 !== o.ontimeout), Eo(e.b, Fo(e, "Will abort after " + e.g + "ms if incomplete, xhr2 " + e.v)), e.v ? (e.a.timeout = e.g, e.a.ontimeout = m(e.Ga, e)) : e.u = De(e.Ga, e.g, e)), Eo(e.b, Fo(e, "Sending request")), e.i = !0, e.a.send(t), e.i = !1 } catch (t) { Eo(e.b, Fo(e, "Send error: " + t.message)), Lo(e, t) }
                    }

                    function Co(t) { return "content-type" == t.toLowerCase() }

                    function Lo(t, e) { t.c = !1, t.a && (t.f = !0, t.a.abort(), t.f = !1), t.h = e, xo(t), jo(t) }

                    function xo(t) { t.G || (t.G = !0, t.dispatchEvent("complete"), t.dispatchEvent("error")) }

                    function Mo(e) {
                        if (e.c && void 0 !== u)
                            if (e.w[1] && 4 == Vo(e) && 2 == Ko(e)) Eo(e.b, Fo(e, "Local request error detected and ignored"));
                            else if (e.i && 4 == Vo(e)) De(e.Jb, 0, e);
                        else if (e.dispatchEvent("readystatechange"), 4 == Vo(e)) {
                            Eo(e.b, Fo(e, "Request complete")), e.c = !1;
                            try {
                                var t, n = Ko(e);
                                t: switch (n) {
                                    case 200:
                                    case 201:
                                    case 202:
                                    case 204:
                                    case 206:
                                    case 304:
                                    case 1223:
                                        var i = !0;
                                        break t;
                                    default:
                                        i = !1
                                }
                                if (!(t = i)) {
                                    var r;
                                    if (r = 0 === n) {
                                        var o = String(e.m).match(Ve)[1] || null;
                                        if (!o && h.self && h.self.location) {
                                            var a = h.self.location.protocol;
                                            o = a.substr(0, a.length - 1)
                                        }
                                        r = !Po.test(o ? o.toLowerCase() : "")
                                    }
                                    t = r
                                }
                                if (t) e.dispatchEvent("complete"), e.dispatchEvent("success");
                                else {
                                    try { var s = 2 < Vo(e) ? e.a.statusText : "" } catch (t) { Eo(e.b, "Can not get status: " + t.message), s = "" }
                                    e.h = s + " [" + Ko(e) + "]", xo(e)
                                }
                            } finally { jo(e) }
                        }
                    }

                    function jo(e, t) {
                        if (e.a) {
                            Uo(e);
                            var n = e.a,
                                i = e.w[0] ? o : null;
                            e.a = null, e.w = null, t || e.dispatchEvent("ready");
                            try { n.onreadystatechange = i } catch (t) {
                                (e = e.b) && e.log(vo, "Problem encountered resetting onreadystatechange: " + t.message, void 0)
                            }
                        }
                    }

                    function Uo(t) { t.a && t.v && (t.a.ontimeout = null), t.u && (h.clearTimeout(t.u), t.u = null) }

                    function Vo(t) { return t.a ? t.a.readyState : 0 }

                    function Ko(t) { try { return 2 < Vo(t) ? t.a.status : -1 } catch (t) { return -1 } }

                    function Fo(t, e) { return e + " [" + t.N + " " + t.m + " " + Ko(t) + "]" }

                    function qo(t, e) { this.g = [], this.v = t, this.u = e || null, this.f = this.a = !1, this.c = void 0, this.m = this.w = this.i = !1, this.h = 0, this.b = null, this.l = 0 }

                    function Ho(t, e, n) { t.a = !0, t.c = n, t.f = !e, Xo(t) }

                    function Wo(t) {
                        if (t.a) {
                            if (!t.m) throw new Jo(t);
                            t.m = !1
                        }
                    }

                    function Bo(t, e, n, i) { t.g.push([e, n, i]), t.a && Xo(t) }

                    function Go(t) { return C(t.g, function(t) { return a(t[1]) }) }

                    function Xo(e) {
                        if (e.h && e.a && Go(e)) {
                            var n = e.h,
                                i = $o[n];
                            i && (h.clearTimeout(i.a), delete $o[n]), e.h = 0
                        }
                        e.b && (e.b.l--, delete e.b), n = e.c;
                        for (var t = i = !1; e.g.length && !e.i;) {
                            var r = e.g.shift(),
                                o = r[0],
                                a = r[1];
                            if (r = r[2], o = e.f ? a : o) try {
                                var s = o.call(r || e.u, n);
                                void 0 !== s && (e.f = e.f && (s == n || s instanceof Error), e.c = n = s), (I(n) || "function" == typeof h.Promise && n instanceof h.Promise) && (t = !0, e.i = !0)
                            } catch (t) { n = t, e.f = !0, Go(e) || (i = !0) }
                        }
                        e.c = n, t && (s = m(e.o, e, !0), t = m(e.o, e, !1), n instanceof qo ? (Bo(n, s, t), n.w = !0) : n.then(s, t)), i && (n = new Yo(n), $o[n.a] = n, e.h = n.a)
                    }

                    function Jo() { T.call(this) }

                    function zo() { T.call(this) }

                    function Yo(t) { this.a = h.setTimeout(m(this.c, this), 0), this.b = t }(t = _o.prototype).Ga = function() { void 0 !== u && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", Eo(this.b, Fo(this, this.h)), this.dispatchEvent("timeout"), this.abort(8)) }, t.abort = function() { this.a && this.c && (Eo(this.b, Fo(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), jo(this)) }, t.va = function() { this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), jo(this, !0)), _o.ob.va.call(this) }, t.Jb = function() { this.qa || (this.I || this.i || this.f ? Mo(this) : this.wc()) }, t.wc = function() { Mo(this) }, t.getResponse = function() {
                        try {
                            if (!this.a) return null;
                            if ("response" in this.a) return this.a.response;
                            switch (this.o) {
                                case Oo:
                                case "text":
                                    return this.a.responseText;
                                case "arraybuffer":
                                    if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer
                            }
                            var t = this.b;
                            return t && t.log(vo, "Response type " + this.o + " is not supported on this browser", void 0), null
                        } catch (t) { return Eo(this.b, "Can not get response: " + t.message), null }
                    }, qo.prototype.cancel = function(t) {
                        if (this.a) this.c instanceof qo && this.c.cancel();
                        else {
                            if (this.b) {
                                var e = this.b;
                                delete this.b, t ? e.cancel(t) : (e.l--, e.l <= 0 && e.cancel())
                            }
                            this.v ? this.v.call(this.u, this) : this.m = !0, this.a || (t = new zo(this), Wo(this), Ho(this, !1, t))
                        }
                    }, qo.prototype.o = function(t, e) { this.i = !1, Ho(this, t, e) }, qo.prototype.D = function() { Wo(this), Ho(this, !0, null) }, qo.prototype.then = function(t, e, n) { var i, r, o = new dt(function(t, e) { i = t, r = e }); return Bo(this, i, function(t) { t instanceof zo ? o.cancel() : r(t) }), o.then(t, e, n) }, w(qo), y(Jo, T), Jo.prototype.message = "Deferred has already fired", Jo.prototype.name = "AlreadyCalledError", y(zo, T), zo.prototype.message = "Deferred was canceled", zo.prototype.name = "CanceledError", Yo.prototype.c = function() { throw delete $o[this.a], this.b };
                    var $o = {};

                    function Zo(t) {
                        var e, n, i, r = document,
                            o = mn(t),
                            a = document.createElement("SCRIPT"),
                            s = { Lb: a, Ga: void 0 },
                            u = new qo(Qo, s);
                        return e = window.setTimeout(function() {
                            ta(a, !0);
                            var t = new ia(na, "Timeout reached for loading script " + o);
                            Wo(u), Ho(u, !1, t)
                        }, 5e3), s.Ga = e, a.onload = a.onreadystatechange = function() { a.readyState && "loaded" != a.readyState && "complete" != a.readyState || (ta(a, !1, e), u.D()) }, a.onerror = function() {
                            ta(a, !0, e);
                            var t = new ia(ea, "Error while loading script " + o);
                            Wo(u), Ho(u, !1, t)
                        }, st(s = {}, { type: "text/javascript", charset: "UTF-8" }), Rn(a, s), a.src = mn(t), (n = r, (i = (n || document).getElementsByTagName("HEAD")) && 0 != i.length ? i[0] : n.documentElement).appendChild(a), u
                    }

                    function Qo() {
                        if (this && this.Lb) {
                            var t = this.Lb;
                            t && "SCRIPT" == t.tagName && ta(t, !0, this.Ga)
                        }
                    }

                    function ta(t, e, n) { null != n && h.clearTimeout(n), t.onload = o, t.onerror = o, t.onreadystatechange = o, e && window.setTimeout(function() { t && t.parentNode && t.parentNode.removeChild(t) }, 0) }
                    var ea = 0,
                        na = 1;

                    function ia(t, e) {
                        var n = "Jsloader error (code #" + t + ")";
                        e && (n += ": " + e), T.call(this, n), this.code = t
                    }

                    function ra(t) { this.f = t }

                    function oa(t, e, n) {
                        if (this.b = t, t = e || {}, this.i = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.l = t.secureTokenTimeout || ua, this.f = it(t.secureTokenHeaders || ca), this.g = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.h = t.firebaseTimeout || ha, this.a = it(t.firebaseHeaders || la), n && (this.a["X-Client-Version"] = n, this.f["X-Client-Version"] = n), n = "Node" == Zn(), !(n = h.XMLHttpRequest || n && Lh.INTERNAL.node && Lh.INTERNAL.node.XMLHttpRequest) && !$n()) throw new Vi("internal-error", "The XMLHttpRequest compatibility library was not found.");
                        this.c = void 0, $n() ? this.c = new Ao(self) : Qn() ? this.c = new ra(n) : this.c = new uo
                    }
                    y(ia, T), y(ra, ro), ra.prototype.a = function() { return new this.f }, ra.prototype.b = function() { return {} };
                    var aa, sa = "idToken",
                        ua = new bi(3e4, 6e4),
                        ca = { "Content-Type": "application/x-www-form-urlencoded" },
                        ha = new bi(3e4, 6e4),
                        la = { "Content-Type": "application/json" };

                    function fa(t, e) { e ? t.a["X-Firebase-Locale"] = e : delete t.a["X-Firebase-Locale"] }

                    function da(t, e) { e ? (t.a["X-Client-Version"] = e, t.f["X-Client-Version"] = e) : (delete t.a["X-Client-Version"], delete t.f["X-Client-Version"]) }

                    function pa(t, e, n, i, r, o, a) {
                        var s;
                        (t = !((s = ni(s = oi()) != ei ? null : (s = s.match(/\sChrome\/(\d+)/i)) && 2 == s.length ? parseInt(s[1], 10) : null) && s < 30 || Ft && Yt && !(9 < Yt)) || $n() ? m(t.o, t) : (aa || (aa = new dt(function(t, e) {
                            ! function(t, e) {
                                if (((window.gapi || {}).client || {}).request) t();
                                else {
                                    h[ma] = function() {
                                        ((window.gapi || {}).client || {}).request ? t() : e(Error("CORS_UNSUPPORTED"))
                                    };
                                    var n = gn(va, { onload: ma });
                                    Bo(Zo(n), null, function() { e(Error("CORS_UNSUPPORTED")) }, void 0)
                                }
                            }(t, e)
                        })), m(t.m, t)))(e, n, i, r, o, a)
                    }
                    oa.prototype.o = function(t, n, e, i, r, o) {
                        if ($n() && (void 0 === h.fetch || void 0 === h.Headers || void 0 === h.Request)) throw new Vi("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
                        var a = new _o(this.c);
                        if (o) { a.g = Math.max(0, o); var s = setTimeout(function() { a.dispatchEvent("timeout") }, o) }
                        Oe(a, "complete", function() {
                            s && clearTimeout(s);
                            var e = null;
                            try { e = JSON.parse(function(e) { try { return e.a ? e.a.responseText : "" } catch (t) { return Eo(e.b, "Can not get responseText: " + t.message), "" } }(this)) || null } catch (t) { e = null }
                            n && n(e)
                        }), Pe(a, "ready", function() { s && clearTimeout(s), Mt(this) }), Pe(a, "timeout", function() { s && clearTimeout(s), Mt(this), n && n(null) }), Do(a, t, e, i, r)
                    };
                    var va = pn("https://apis.google.com/js/client.js?onload=%{onload}"),
                        ma = "__fcb" + Math.floor(1e6 * Math.random()).toString();

                    function ga(t) { if (!c(t = t.email) || !Xn.test(t)) throw new Vi("invalid-email") }

                    function ba(t) { "email" in t && ga(t) }

                    function ya(t) { if (!t[sa]) throw new Vi("internal-error") }

                    function wa(t) { if (t.phoneNumber || t.temporaryProof) { if (!t.phoneNumber || !t.temporaryProof) throw new Vi("internal-error") } else { if (!t.sessionInfo) throw new Vi("missing-verification-id"); if (!t.code) throw new Vi("missing-verification-code") } }
                    oa.prototype.m = function(t, n, i, r, o) {
                        var a = this;
                        aa.then(function() {
                            window.gapi.client.setApiKey(a.b);
                            var e = window.gapi.auth.getToken();
                            window.gapi.auth.setToken(null), window.gapi.client.request({ path: t, method: i, body: r, headers: o, authType: "none", callback: function(t) { window.gapi.auth.setToken(e), n && n(t) } })
                        }).s(function(t) { n && n({ error: { message: t && t.message || "CORS_UNSUPPORTED" } }) })
                    }, oa.prototype.Qa = function() { return ns(this, Xa, {}) }, oa.prototype.pb = function(t, e) { return ns(this, Ba, { idToken: t, email: e }) }, oa.prototype.qb = function(t, e) { return ns(this, Ga, { idToken: t, password: e }) };
                    var Ia = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };

                    function Ta(t) { if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken) throw new Vi("internal-error") }

                    function Ea(t, e) { return e.oauthIdToken && e.providerId && 0 == e.providerId.indexOf("oidc.") && !e.pendingToken && (t.sessionId ? e.nonce = t.sessionId : t.postBody && (sn(t = new nn(t.postBody), "nonce") && (e.nonce = t.get("nonce")))), e }

                    function Aa(t) { var e = null; if (t.needConfirmation ? (t.code = "account-exists-with-different-credential", e = io(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use", e = io(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use", e = io(t)) : t.errorMessage && (e = is(t.errorMessage)), e) throw e; if (!t[sa]) throw new Vi("internal-error") }

                    function ka(t, e) { return e.returnIdpCredential = !0, ns(t, Ja, e) }

                    function Sa(t, e) { return e.returnIdpCredential = !0, ns(t, Ya, e) }

                    function Na(t, e) { return e.returnIdpCredential = !0, e.autoCreate = !1, ns(t, za, e) }

                    function _a(t) { if (!t.oobCode) throw new Vi("invalid-action-code") }(t = oa.prototype).rb = function(t, i) {
                        var r = { idToken: t },
                            o = [];
                        return et(Ia, function(t, e) {
                            var n = i[e];
                            null === n ? o.push(t) : e in i && (r[e] = n)
                        }), o.length && (r.deleteAttribute = o), ns(this, Ba, r)
                    }, t.kb = function(t, e) { return st(t = { requestType: "PASSWORD_RESET", email: t }, e), ns(this, Ka, t) }, t.lb = function(t, e) { return st(t = { requestType: "EMAIL_SIGNIN", email: t }, e), ns(this, Ua, t) }, t.jb = function(t, e) { return st(t = { requestType: "VERIFY_EMAIL", idToken: t }, e), ns(this, Va, t) }, t.Ua = function(t) { return ns(this, Qa, t) }, t.Za = function(t, e) { return ns(this, Ha, { oobCode: t, newPassword: e }) }, t.Ja = function(t) { return ns(this, Pa, { oobCode: t }) }, t.Wa = function(t) { return ns(this, Oa, { oobCode: t }) };
                    var Oa = { endpoint: "setAccountInfo", B: _a, da: "email" },
                        Pa = { endpoint: "resetPassword", B: _a, J: function(t) { var e = t.requestType; if (!e || !t.email && "EMAIL_SIGNIN" != e) throw new Vi("internal-error") } },
                        Ra = { endpoint: "signupNewUser", B: function(t) { if (ga(t), !t.password) throw new Vi("weak-password") }, J: ya, R: !0 },
                        Da = { endpoint: "createAuthUri" },
                        Ca = { endpoint: "deleteAccount", T: ["idToken"] },
                        La = { endpoint: "setAccountInfo", T: ["idToken", "deleteProvider"], B: function(t) { if (!f(t.deleteProvider)) throw new Vi("internal-error") } },
                        xa = { endpoint: "emailLinkSignin", T: ["email", "oobCode"], B: ga, J: ya, R: !0 },
                        Ma = { endpoint: "emailLinkSignin", T: ["idToken", "email", "oobCode"], B: ga, J: ya, R: !0 },
                        ja = { endpoint: "getAccountInfo" },
                        Ua = {
                            endpoint: "getOobConfirmationCode",
                            T: ["requestType"],
                            B: function(t) {
                                if ("EMAIL_SIGNIN" != t.requestType) throw new Vi("internal-error");
                                ga(t)
                            },
                            da: "email"
                        },
                        Va = { endpoint: "getOobConfirmationCode", T: ["idToken", "requestType"], B: function(t) { if ("VERIFY_EMAIL" != t.requestType) throw new Vi("internal-error") }, da: "email" },
                        Ka = {
                            endpoint: "getOobConfirmationCode",
                            T: ["requestType"],
                            B: function(t) {
                                if ("PASSWORD_RESET" != t.requestType) throw new Vi("internal-error");
                                ga(t)
                            },
                            da: "email"
                        },
                        Fa = { ub: !0, endpoint: "getProjectConfig", Ib: "GET" },
                        qa = { ub: !0, endpoint: "getRecaptchaParam", Ib: "GET", J: function(t) { if (!t.recaptchaSiteKey) throw new Vi("internal-error") } },
                        Ha = { endpoint: "resetPassword", B: _a, da: "email" },
                        Wa = { endpoint: "sendVerificationCode", T: ["phoneNumber", "recaptchaToken"], da: "sessionInfo" },
                        Ba = { endpoint: "setAccountInfo", T: ["idToken"], B: ba, R: !0 },
                        Ga = { endpoint: "setAccountInfo", T: ["idToken"], B: function(t) { if (ba(t), !t.password) throw new Vi("weak-password") }, J: ya, R: !0 },
                        Xa = { endpoint: "signupNewUser", J: ya, R: !0 },
                        Ja = { endpoint: "verifyAssertion", B: Ta, Oa: Ea, J: Aa, R: !0 },
                        za = { endpoint: "verifyAssertion", B: Ta, Oa: Ea, J: function(t) { if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage) throw new Vi("user-not-found"); if (t.errorMessage) throw is(t.errorMessage); if (!t[sa]) throw new Vi("internal-error") }, R: !0 },
                        Ya = { endpoint: "verifyAssertion", B: function(t) { if (Ta(t), !t.idToken) throw new Vi("internal-error") }, Oa: Ea, J: Aa, R: !0 },
                        $a = { endpoint: "verifyCustomToken", B: function(t) { if (!t.token) throw new Vi("invalid-custom-token") }, J: ya, R: !0 },
                        Za = { endpoint: "verifyPassword", B: function(t) { if (ga(t), !t.password) throw new Vi("wrong-password") }, J: ya, R: !0 },
                        Qa = { endpoint: "verifyPhoneNumber", B: wa, J: ya },
                        ts = {
                            endpoint: "verifyPhoneNumber",
                            B: function(t) {
                                if (!t.idToken) throw new Vi("internal-error");
                                wa(t)
                            },
                            J: function(t) {
                                if (t.temporaryProof) throw t.code = "credential-already-in-use", io(t);
                                ya(t)
                            }
                        },
                        es = { Xb: { USER_NOT_FOUND: "user-not-found" }, endpoint: "verifyPhoneNumber", B: wa, J: ya };

                    function ns(t, e, n) {
                        if (! function(t, e) { if (!e || !e.length) return !0; if (!t) return !1; for (var n = 0; n < e.length; n++) { var i = t[e[n]]; if (null == i || "" === i) return !1 } return !0 }(n, e.T)) return It(new Vi("internal-error"));
                        var i, r = e.Ib || "POST";
                        return wt(n).then(e.B).then(function() {
                            return e.R && (n.returnSecureToken = !0),
                                function(t, e, i, r, o, n) {
                                    var a = Ge(t.g + e);
                                    We(a, "key", t.b), n && We(a, "cb", b().toString());
                                    var s = "GET" == i;
                                    if (s)
                                        for (var u in r) r.hasOwnProperty(u) && We(a, u, r[u]);
                                    return new dt(function(e, n) { pa(t, a.toString(), function(t) { t ? t.error ? n(rs(t, o || {})) : e(t) : n(new Vi("network-request-failed")) }, i, s ? void 0 : xn(di(r)), t.a, t.h.get()) })
                                }(t, e.endpoint, r, n, e.Xb, e.ub || !1)
                        }).then(function(t) { return i = t, e.Oa ? e.Oa(n, i) : i }).then(e.J).then(function() { if (!e.da) return i; if (!(e.da in i)) throw new Vi("internal-error"); return i[e.da] })
                    }

                    function is(t) { return rs({ error: { errors: [{ message: t }], code: 400, message: t } }) }

                    function rs(t, e) {
                        var n = (t.error && t.error.errors && t.error.errors[0] || {}).reason || "",
                            i = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" };
                        if (n = i[n] ? new Vi(i[n]) : null) return n;
                        for (var r in n = t.error && t.error.message || "", st(i = { INVALID_CUSTOM_TOKEN: "invalid-custom-token", CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_EMAIL: "invalid-email", INVALID_PASSWORD: "wrong-password", USER_DISABLED: "user-disabled", MISSING_PASSWORD: "internal-error", EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential", INVALID_PENDING_TOKEN: "invalid-credential", FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce", INVALID_MESSAGE_PAYLOAD: "invalid-message-payload", INVALID_RECIPIENT_EMAIL: "invalid-recipient-email", INVALID_SENDER: "invalid-sender", EMAIL_NOT_FOUND: "user-not-found", RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", INVALID_PROVIDER_ID: "invalid-provider-id", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login", INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired", CORS_UNSUPPORTED: "cors-unsupported", DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated", INVALID_APP_ID: "invalid-app-id", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", WEAK_PASSWORD: "weak-password", OPERATION_NOT_ALLOWED: "operation-not-allowed", USER_CANCELLED: "user-cancelled", CAPTCHA_CHECK_FAILED: "captcha-check-failed", INVALID_APP_CREDENTIAL: "invalid-app-credential", INVALID_CODE: "invalid-verification-code", INVALID_PHONE_NUMBER: "invalid-phone-number", INVALID_SESSION_INFO: "invalid-verification-id", INVALID_TEMPORARY_PROOF: "invalid-credential", MISSING_APP_CREDENTIAL: "missing-app-credential", MISSING_CODE: "missing-verification-code", MISSING_PHONE_NUMBER: "missing-phone-number", MISSING_SESSION_INFO: "missing-verification-id", QUOTA_EXCEEDED: "quota-exceeded", SESSION_EXPIRED: "code-expired", REJECTED_CREDENTIAL: "rejected-credential", INVALID_CONTINUE_URI: "invalid-continue-uri", MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name", MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id", UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri", INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain", INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id", INVALID_CERT_HASH: "invalid-cert-hash" }, e || {}), e = (e = n.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < e.length ? e[1] : void 0, i)
                            if (0 === n.indexOf(r)) return new Vi(i[r], e);
                        return !e && t && (e = fi(t)), new Vi("internal-error", e)
                    }

                    function os(t) {
                        var o;
                        this.b = t, this.a = null, this.fb = (o = this, (cs || (cs = new dt(function(t, e) {
                            function n() { gi(), ai("gapi.load")("gapi.iframes", { callback: t, ontimeout: function() { gi(), e(Error("Network Error")) }, timeout: ss.get() }) }
                            if (ai("gapi.iframes.Iframe")) t();
                            else if (ai("gapi.load")) n();
                            else {
                                var i = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
                                h[i] = function() { ai("gapi.load") ? n() : e(Error("Network Error")) }, wt(Zo(i = gn(as, { onload: i }))).s(function() { e(Error("Network Error")) })
                            }
                        }).s(function(t) { throw cs = null, t }))).then(function() {
                            return new dt(function(i, r) {
                                ai("gapi.iframes.getContext")().open({ where: document.body, url: o.b, messageHandlersFilter: ai("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"), attributes: { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" } }, dontclear: !0 }, function(t) {
                                    function e() { clearTimeout(n), i() }
                                    o.a = t, o.a.restyle({ setHideOnLeave: !1 });
                                    var n = setTimeout(function() { r(Error("Network Error")) }, us.get());
                                    t.ping(e).then(e, function() { r(Error("Network Error")) })
                                })
                            })
                        }))
                    }
                    var as = pn("https://apis.google.com/js/api.js?onload=%{onload}"),
                        ss = new bi(3e4, 6e4),
                        us = new bi(5e3, 15e3),
                        cs = null;

                    function hs(t, e, n) { this.i = t, this.g = e, this.h = n, this.f = null, this.a = Xe(this.i, "/__/auth/iframe"), We(this.a, "apiKey", this.g), We(this.a, "appName", this.h), this.b = null, this.c = [] }

                    function ls(t, e, n, i, r) { this.o = t, this.m = e, this.c = n, this.l = i, this.h = this.g = this.i = null, this.a = r, this.f = null }

                    function fs(t) { try { return Lh.app(t).auth().ya() } catch (t) { return [] } }

                    function ds(t, e, n, i, r) { this.m = t, this.f = e, this.b = n, this.c = i || null, this.h = r || null, this.o = this.u = this.v = null, this.g = [], this.l = this.a = null }

                    function ps(t) {
                        var e, s = Fn();
                        return (e = t, ns(e, Fa, {}).then(function(t) { return t.authorizedDomains || [] })).then(function(t) {
                            t: {
                                var e = Ge(s),
                                    n = e.c;e = e.b;
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i],
                                        o = e,
                                        a = n;
                                    if (o = 0 == r.indexOf("chrome-extension://") ? Ge(r).b == o && "chrome-extension" == a : ("http" == a || "https" == a) && (Gn.test(r) ? o == r : (r = r.split(".").join("\\."), new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(o)))) { t = !0; break t }
                                }
                                t = !1
                            }
                            if (!t) throw new eo(Fn())
                        })
                    }

                    function vs(r) {
                        return r.l || (r.l = Jn().then(function() {
                            if (!r.u) {
                                var t = r.c,
                                    e = r.h,
                                    n = fs(r.b),
                                    i = new hs(r.m, r.f, r.b);
                                i.f = t, i.b = e, i.c = U(n || []), r.u = i.toString()
                            }
                            r.i = new os(r.u),
                                function(i) {
                                    if (!i.i) throw Error("IfcHandler must be initialized!");
                                    t = i.i, e = function(t) { var e = {}; if (t && t.authEvent) { var n = !1; for (t = $r(t.authEvent), e = 0; e < i.g.length; e++) n = i.g[e](t) || n; return (e = {}).status = n ? "ACK" : "ERROR", wt(e) } return e.status = "ERROR", wt(e) }, t.fb.then(function() { t.a.register("authEvent", e, ai("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")) });
                                    var t, e
                                }(r)
                        })), r.l
                    }

                    function ms(t) { return t.o || (t.v = t.c ? ri(t.c, fs(t.b)) : null, t.o = new oa(t.f, ur(t.h), t.v)), t.o }

                    function gs(t, e, n, i, r, o, a, s, u, c) { return (t = new ls(t, e, n, i, r)).i = o, t.g = a, t.h = s, t.b = it(u || null), t.f = c, t.toString() }

                    function bs(t) {
                        if (this.a = t || Lh.INTERNAL.reactNative && Lh.INTERNAL.reactNative.AsyncStorage, !this.a) throw new Vi("internal-error", "The React Native compatibility library was not found.");
                        this.type = "asyncStorage"
                    }

                    function ys(t) { this.b = t, this.a = {}, this.c = m(this.f, this) }
                    hs.prototype.toString = function() { return this.f ? We(this.a, "v", this.f) : an(this.a.a, "v"), this.b ? We(this.a, "eid", this.b) : an(this.a.a, "eid"), this.c.length ? We(this.a, "fw", this.c.join(",")) : an(this.a.a, "fw"), this.a.toString() }, ls.prototype.toString = function() {
                        var t = Xe(this.o, "/__/auth/handler");
                        if (We(t, "apiKey", this.m), We(t, "appName", this.c), We(t, "authType", this.l), this.a.isOAuthProvider) {
                            var e = this.a;
                            try { var n = Lh.app(this.c).auth().ea() } catch (t) { n = null }
                            for (var i in e.$a = n, We(t, "providerId", this.a.providerId), n = di((e = this.a).yb)) n[i] = n[i].toString();
                            i = e.Dc, n = it(n);
                            for (var r = 0; r < i.length; r++) {
                                var o = i[r];
                                o in n && delete n[o]
                            }
                            e.cb && e.$a && !n[e.cb] && (n[e.cb] = e.$a), nt(n) || We(t, "customParameters", fi(n))
                        }
                        if ("function" == typeof this.a.Eb && ((e = this.a.Eb()).length && We(t, "scopes", e.join(","))), this.i ? We(t, "redirectUrl", this.i) : an(t.a, "redirectUrl"), this.g ? We(t, "eventId", this.g) : an(t.a, "eventId"), this.h ? We(t, "v", this.h) : an(t.a, "v"), this.b)
                            for (var a in this.b) this.b.hasOwnProperty(a) && !Be(t, a) && We(t, a, this.b[a]);
                        return this.f ? We(t, "eid", this.f) : an(t.a, "eid"), (a = fs(this.c)).length && We(t, "fw", a.join(",")), t.toString()
                    }, (t = ds.prototype).Ea = function(e, n, t) {
                        var i = new Vi("popup-closed-by-user"),
                            r = new Vi("web-storage-unsupported"),
                            o = this,
                            a = !1;
                        return this.ga().then(function() {
                            var t, i;
                            (t = o, i = { type: "webStorageSupport" }, vs(t).then(function() { return e = t.i, n = i, e.fb.then(function() { return new dt(function(t) { e.a.send(n.type, n, t, ai("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")) }) }); var e, n }).then(function(t) { if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport; throw Error() })).then(function(t) { t || (e && Wn(e), n(r), a = !0) })
                        }).s(function() {}).then(function() {
                            if (!a) return n = e, new dt(function(e) {
                                return function t() {
                                    Ce(2e3).then(function() {
                                        if (n && !n.closed) return t();
                                        e()
                                    })
                                }()
                            });
                            var n
                        }).then(function() { if (!a) return Ce(t).then(function() { n(i) }) })
                    }, t.Mb = function() { var t = oi(); return !li(t) && !mi(t) }, t.Hb = function() { return !1 }, t.Cb = function(e, t, n, i, r, o, a) {
                        if (!e) return It(new Vi("popup-blocked"));
                        if (a && !li()) return this.ga().s(function(t) { Wn(e), r(t) }), i(), wt();
                        this.a || (this.a = ps(ms(this)));
                        var s = this;
                        return this.a.then(function() { var t = s.ga().s(function(t) { throw Wn(e), r(t), t }); return i(), t }).then(function() {
                            (zr(n), a) || qn(gs(s.m, s.f, s.b, t, n, null, o, s.c, void 0, s.h), e)
                        }).s(function(t) { throw "auth/network-request-failed" == t.code && (s.a = null), t })
                    }, t.Ca = function(t, e, n) { this.a || (this.a = ps(ms(this))); var i = this; return this.a.then(function() { zr(e), qn(gs(i.m, i.f, i.b, t, e, Fn(), n, i.c, void 0, i.h)) }).s(function(t) { throw "auth/network-request-failed" == t.code && (i.a = null), t }) }, t.ga = function() { var t = this; return vs(this).then(function() { return t.i.fb }).s(function() { throw t.a = null, new Vi("network-request-failed") }) }, t.Qb = function() { return !0 }, t.wa = function(t) { this.g.push(t) }, t.Ka = function(e) { M(this.g, function(t) { return t == e }) }, (t = bs.prototype).get = function(t) { return wt(this.a.getItem(t)).then(function(t) { return t && pi(t) }) }, t.set = function(t, e) { return wt(this.a.setItem(t, fi(e))) }, t.P = function(t) { return wt(this.a.removeItem(t)) }, t.Y = function() {}, t.ca = function() {};
                    var ws, Is = [];

                    function Ts(t) { this.a = t }

                    function Es(t) { this.c = t, this.b = !1, this.a = [] }

                    function As(i, t, e, n) {
                        var r, o, a, s, u = e || {},
                            c = null;
                        if (i.b) return It(Error("connection_unavailable"));
                        var h = n ? 800 : 50,
                            l = "undefined" != typeof MessageChannel ? new MessageChannel : null;
                        return new dt(function(e, n) { l ? (r = Math.floor(Math.random() * Math.pow(10, 20)).toString(), l.port1.start(), a = setTimeout(function() { n(Error("unsupported_event")) }, h), c = { messageChannel: l, onMessage: o = function(t) { t.data.eventId === r && ("ack" === t.data.status ? (clearTimeout(a), s = setTimeout(function() { n(Error("timeout")) }, 3e3)) : "done" === t.data.status ? (clearTimeout(s), void 0 !== t.data.response ? e(t.data.response) : n(Error("unknown_error"))) : (clearTimeout(a), clearTimeout(s), n(Error("invalid_response")))) } }, i.a.push(c), l.port1.addEventListener("message", o), i.c.postMessage({ eventType: t, eventId: r, data: u }, [l.port2])) : n(Error("connection_unavailable")) }).then(function(t) { return ks(i, c), t }).s(function(t) { throw ks(i, c), t })
                    }

                    function ks(t, e) {
                        if (e) {
                            var n = e.messageChannel,
                                i = e.onMessage;
                            n && (n.port1.removeEventListener("message", i), n.port1.close()), M(t.a, function(t) { return t == e })
                        }
                    }

                    function Ss() {
                        if (!Os()) throw new Vi("web-storage-unsupported");
                        this.c = {}, this.a = [], this.b = 0, this.m = h.indexedDB, this.type = "indexedDB", this.g = this.l = this.f = this.i = null, this.u = !1, this.h = null;
                        var t, i = this;
                        $n() && self ? (this.l = function() {
                            var e = $n() ? self : null;
                            if (R(Is, function(t) { t.b == e && (n = t) }), !n) {
                                var n = new ys(e);
                                Is.push(n)
                            }
                            return n
                        }(), this.l.subscribe("keyChanged", function(t, n) { return Ls(i).then(function(e) { return 0 < e.length && R(i.a, function(t) { t(e) }), { keyProcessed: L(e, n.key) } }) }), this.l.subscribe("ping", function() { return wt(["keyChanged"]) })) : (t = h.navigator, t && t.serviceWorker ? wt().then(function() { return t.serviceWorker.ready }).then(function(t) { return t.active || null }).s(function() { return null }) : wt(null)).then(function(t) {
                            (i.h = t) && (i.g = new Es(new Ts(t)), As(i.g, "ping", null, !0).then(function(t) { t[0].fulfilled && L(t[0].value, "keyChanged") && (i.u = !0) }).s(function() {}))
                        })
                    }

                    function Ns(r) {
                        return new dt(function(e, n) {
                            var t = r.m.open("firebaseLocalStorageDb", 1);
                            t.onerror = function(t) {
                                try { t.preventDefault() } catch (t) {}
                                n(Error(t.target.error))
                            }, t.onupgradeneeded = function(t) { t = t.target.result; try { t.createObjectStore("firebaseLocalStorage", { keyPath: "fbase_key" }) } catch (t) { n(t) } }, t.onsuccess = function(t) {
                                var i;
                                (t = t.target.result).objectStoreNames.contains("firebaseLocalStorage") ? e(t) : (i = r, new dt(function(t, e) {
                                    var n = i.m.deleteDatabase("firebaseLocalStorageDb");
                                    n.onsuccess = function() { t() }, n.onerror = function(t) { e(Error(t.target.error)) }
                                })).then(function() { return Ns(r) }).then(function(t) { e(t) }).s(function(t) { n(t) })
                            }
                        })
                    }

                    function _s(t) { return t.o || (t.o = Ns(t)), t.o }

                    function Os() { try { return !!h.indexedDB } catch (t) { return !1 } }

                    function Ps(t) { return t.objectStore("firebaseLocalStorage") }

                    function Rs(t, e) { return t.transaction(["firebaseLocalStorage"], e ? "readwrite" : "readonly") }

                    function Ds(t) { return new dt(function(e, n) { t.onsuccess = function(t) { t && t.target ? e(t.target.result) : e() }, t.onerror = function(t) { n(t.target.error) } }) }

                    function Cs(t, e) { return t.g && t.h && ((n = h.navigator) && n.serviceWorker && n.serviceWorker.controller || null) === t.h ? As(t.g, "keyChanged", { key: e }, t.u).then(function() {}).s(function() {}) : wt(); var n }

                    function Ls(i) {
                        return _s(i).then(function(t) {
                            var r = Ps(Rs(t, !1));
                            return r.getAll ? Ds(r.getAll()) : new dt(function(e, n) {
                                var i = [],
                                    t = r.openCursor();
                                t.onsuccess = function(t) {
                                    (t = t.target.result) ? (i.push(t.value), t.continue()) : e(i)
                                }, t.onerror = function(t) { n(t.target.error) }
                            })
                        }).then(function(t) {
                            var e = {},
                                n = [];
                            if (0 == i.b) {
                                for (n = 0; n < t.length; n++) e[t[n].fbase_key] = t[n].value;
                                n = function t(e, n) { var i, r = []; for (i in e) i in n ? typeof e[i] != typeof n[i] ? r.push(i) : "object" == typeof e[i] && null != e[i] && null != n[i] ? 0 < t(e[i], n[i]).length && r.push(i) : e[i] !== n[i] && r.push(i) : r.push(i); for (i in n) i in e || r.push(i); return r }(i.c, e), i.c = e
                            }
                            return n
                        })
                    }

                    function xs(t) { t.i && t.i.cancel("STOP_EVENT"), t.f && (clearTimeout(t.f), t.f = null) }

                    function Ms(t) {
                        var i = this,
                            r = null;
                        this.a = [], this.type = "indexedDB", this.c = t, this.b = wt().then(function() {
                            if (Os()) {
                                var e = vi(),
                                    n = "__sak" + e;
                                return ws || (ws = new Ss), (r = ws).set(n, e).then(function() { return r.get(n) }).then(function(t) { if (t !== e) throw Error("indexedDB not supported!"); return r.P(n) }).then(function() { return r }).s(function() { return i.c })
                            }
                            return i.c
                        }).then(function(t) { return i.type = t.type, t.Y(function(e) { R(i.a, function(t) { t(e) }) }), t })
                    }

                    function js() { this.a = {}, this.type = "inMemory" }

                    function Us() {
                        if (! function() { var t = "Node" == Zn(); if (!(t = Vs() || t && Lh.INTERNAL.node && Lh.INTERNAL.node.localStorage)) return !1; try { return t.setItem("__sak", "1"), t.removeItem("__sak"), !0 } catch (t) { return !1 } }()) { if ("Node" == Zn()) throw new Vi("internal-error", "The LocalStorage compatibility library was not found."); throw new Vi("web-storage-unsupported") }
                        this.a = Vs() || Lh.INTERNAL.node.localStorage, this.type = "localStorage"
                    }

                    function Vs() {
                        try {
                            var t = h.localStorage,
                                e = vi();
                            return t && (t.setItem(e, "1"), t.removeItem(e)), t
                        } catch (t) { return null }
                    }

                    function Ks() { this.type = "nullStorage" }

                    function Fs() {
                        if (! function() { var t = "Node" == Zn(); if (!(t = qs() || t && Lh.INTERNAL.node && Lh.INTERNAL.node.sessionStorage)) return !1; try { return t.setItem("__sak", "1"), t.removeItem("__sak"), !0 } catch (t) { return !1 } }()) { if ("Node" == Zn()) throw new Vi("internal-error", "The SessionStorage compatibility library was not found."); throw new Vi("web-storage-unsupported") }
                        this.a = qs() || Lh.INTERNAL.node.sessionStorage, this.type = "sessionStorage"
                    }

                    function qs() {
                        try {
                            var t = h.sessionStorage,
                                e = vi();
                            return t && (t.setItem(e, "1"), t.removeItem(e)), t
                        } catch (t) { return null }
                    }

                    function Hs() {
                        var t = {};
                        t.Browser = Gs, t.Node = Xs, t.ReactNative = Js, t.Worker = zs, this.a = t[Zn()]
                    }
                    ys.prototype.f = function(n) {
                        var i = n.data.eventType,
                            r = n.data.eventId,
                            t = this.a[i];
                        if (t && 0 < t.length) {
                            n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i, response: null });
                            var e = [];
                            R(t, function(t) { e.push(wt().then(function() { return t(n.origin, n.data.data) })) }), Et(e).then(function(t) {
                                var e = [];
                                R(t, function(t) { e.push({ fulfilled: t.Db, value: t.value, reason: t.reason ? t.reason.message : void 0 }) }), R(e, function(t) { for (var e in t) void 0 === t[e] && delete t[e] }), n.ports[0].postMessage({ status: "done", eventId: r, eventType: i, response: e })
                            })
                        }
                    }, ys.prototype.subscribe = function(t, e) { nt(this.a) && this.b.addEventListener("message", this.c), void 0 === this.a[t] && (this.a[t] = []), this.a[t].push(e) }, ys.prototype.unsubscribe = function(t, e) { void 0 !== this.a[t] && e ? (M(this.a[t], function(t) { return t == e }), 0 == this.a[t].length && delete this.a[t]) : e || delete this.a[t], nt(this.a) && this.b.removeEventListener("message", this.c) }, Ts.prototype.postMessage = function(t, e) { this.a.postMessage(t, e) }, Es.prototype.close = function() {
                        for (; 0 < this.a.length;) ks(this, this.a[0]);
                        this.b = !0
                    }, (t = Ss.prototype).set = function(n, i) {
                        var r, o = !1,
                            a = this;
                        return _s(this).then(function(t) { return Ds((t = Ps(Rs(r = t, !0))).get(n)) }).then(function(t) { var e = Ps(Rs(r, !0)); return t ? (t.value = i, Ds(e.put(t))) : (a.b++, o = !0, (t = {}).fbase_key = n, t.value = i, Ds(e.add(t))) }).then(function() { return a.c[n] = i, Cs(a, n) }).ia(function() { o && a.b-- })
                    }, t.get = function(e) { return _s(this).then(function(t) { return Ds(Ps(Rs(t, !1)).get(e)) }).then(function(t) { return t && t.value }) }, t.P = function(e) {
                        var n = !1,
                            i = this;
                        return _s(this).then(function(t) { return n = !0, i.b++, Ds(Ps(Rs(t, !0)).delete(e)) }).then(function() { return delete i.c[e], Cs(i, e) }).ia(function() { n && i.b-- })
                    }, t.Y = function(t) {
                        var n;
                        0 == this.a.length && (xs(n = this), function e() { n.f = setTimeout(function() { n.i = Ls(n).then(function(e) { 0 < e.length && R(n.a, function(t) { t(e) }) }).then(function() { e() }).s(function(t) { "STOP_EVENT" != t.message && e() }) }, 800) }()), this.a.push(t)
                    }, t.ca = function(e) { M(this.a, function(t) { return t == e }), 0 == this.a.length && xs(this) }, (t = Ms.prototype).get = function(e) { return this.b.then(function(t) { return t.get(e) }) }, t.set = function(e, n) { return this.b.then(function(t) { return t.set(e, n) }) }, t.P = function(e) { return this.b.then(function(t) { return t.P(e) }) }, t.Y = function(t) { this.a.push(t) }, t.ca = function(e) { M(this.a, function(t) { return t == e }) }, (t = js.prototype).get = function(t) { return wt(this.a[t]) }, t.set = function(t, e) { return this.a[t] = e, wt() }, t.P = function(t) { return delete this.a[t], wt() }, t.Y = function() {}, t.ca = function() {}, (t = Us.prototype).get = function(t) { var e = this; return wt().then(function() { return pi(e.a.getItem(t)) }) }, t.set = function(e, n) {
                        var i = this;
                        return wt().then(function() {
                            var t = fi(n);
                            null === t ? i.P(e) : i.a.setItem(e, t)
                        })
                    }, t.P = function(t) { var e = this; return wt().then(function() { e.a.removeItem(t) }) }, t.Y = function(t) { h.window && me(h.window, "storage", t) }, t.ca = function(t) { h.window && ye(h.window, "storage", t) }, (t = Ks.prototype).get = function() { return wt(null) }, t.set = function() { return wt() }, t.P = function() { return wt() }, t.Y = function() {}, t.ca = function() {}, (t = Fs.prototype).get = function(t) { var e = this; return wt().then(function() { return pi(e.a.getItem(t)) }) }, t.set = function(e, n) {
                        var i = this;
                        return wt().then(function() {
                            var t = fi(n);
                            null === t ? i.P(e) : i.a.setItem(e, t)
                        })
                    }, t.P = function(t) { var e = this; return wt().then(function() { e.a.removeItem(t) }) }, t.Y = function() {}, t.ca = function() {};
                    var Ws, Bs, Gs = { A: Us, Ra: Fs },
                        Xs = { A: Us, Ra: Fs },
                        Js = { A: bs, Ra: Ks },
                        zs = { A: Us, Ra: Ks },
                        Ys = { Zc: "local", NONE: "none", ad: "session" };

                    function $s() {
                        var t = !(mi(oi()) || !Yn()),
                            e = li(),
                            n = si();
                        this.o = t, this.h = e, this.l = n, this.a = {}, Ws || (Ws = new Hs), t = Ws;
                        try { this.g = !Kn() && Ii() || !h.indexedDB ? new t.a.A : new Ms($n() ? new js : new t.a.A) } catch (t) { this.g = new js, this.h = !0 }
                        try { this.i = new t.a.Ra } catch (t) { this.i = new js }
                        this.m = new js, this.f = m(this.Pb, this), this.b = {}
                    }

                    function Zs() { return Bs || (Bs = new $s), Bs }

                    function Qs(t, e) {
                        switch (e) {
                            case "session":
                                return t.i;
                            case "none":
                                return t.m;
                            default:
                                return t.g
                        }
                    }

                    function tu(t, e) { return "firebase:" + t.name + (e ? ":" + e : "") }

                    function eu(t, e, n) { return n = tu(e, n), "local" == e.A && (t.b[n] = null), Qs(t, e.A).P(n) }

                    function nu(t) { t.c && (clearInterval(t.c), t.c = null) }

                    function iu(t) { this.a = t, this.b = Zs() }(t = $s.prototype).get = function(t, e) { return Qs(this, t.A).get(tu(t, e)) }, t.set = function(e, t, n) {
                        var i = tu(e, n),
                            r = this,
                            o = Qs(this, e.A);
                        return o.set(i, t).then(function() { return o.get(i) }).then(function(t) { "local" == e.A && (r.b[i] = t) })
                    }, t.addListener = function(t, e, n) {
                        var i;
                        t = tu(t, e), this.l && (this.b[t] = h.localStorage.getItem(t)), nt(this.a) && (Qs(this, "local").Y(this.f), this.h || (Kn() || !Ii()) && h.indexedDB || !this.l || (nu(i = this), i.c = setInterval(function() {
                            for (var t in i.a) {
                                var e = h.localStorage.getItem(t),
                                    n = i.b[t];
                                e != n && (i.b[t] = e, e = new oe({ type: "storage", key: t, target: window, oldValue: n, newValue: e, a: !0 }), i.Pb(e))
                            }
                        }, 1e3))), this.a[t] || (this.a[t] = []), this.a[t].push(n)
                    }, t.removeListener = function(t, e, n) { t = tu(t, e), this.a[t] && (M(this.a[t], function(t) { return t == n }), 0 == this.a[t].length && delete this.a[t]), nt(this.a) && (Qs(this, "local").ca(this.f), nu(this)) }, t.Pb = function(t) {
                        if (t && t.f) {
                            var e = t.a.key;
                            if (null == e)
                                for (var n in this.a) {
                                    var i = this.b[n];
                                    void 0 === i && (i = null);
                                    var r = h.localStorage.getItem(n);
                                    r !== i && (this.b[n] = r, this.Xa(n))
                                } else if (0 == e.indexOf("firebase:") && this.a[e]) {
                                    if (void 0 !== t.a.a ? Qs(this, "local").ca(this.f) : nu(this), this.o)
                                        if (n = h.localStorage.getItem(e), (i = t.a.newValue) !== n) null !== i ? h.localStorage.setItem(e, i) : h.localStorage.removeItem(e);
                                        else if (this.b[e] === i && void 0 === t.a.a) return;
                                    var o = this;
                                    n = function() { void 0 === t.a.a && o.b[e] === h.localStorage.getItem(e) || (o.b[e] = h.localStorage.getItem(e), o.Xa(e)) }, Ft && Yt && 10 == Yt && h.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n()
                                }
                        } else R(t, m(this.Xa, this))
                    }, t.Xa = function(t) { this.a[t] && R(this.a[t], function(t) { t() }) };
                    var ru, ou = { name: "authEvent", A: "local" };

                    function au() { this.a = Zs() }

                    function su(t, e) { this.b = uu, this.f = h.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h = e, this.l = h.Int32Array ? new Int32Array(64) : Array(64), void 0 !== ru || (ru = h.Int32Array ? new Int32Array(vu) : vu), this.reset() }
                    y(su, function() { this.b = -1 });
                    for (var uu = 64, cu = uu - 1, hu = [], lu = 0; lu < cu; lu++) hu[lu] = 0;
                    var fu = j(128, hu);

                    function du(t) {
                        for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length;) n[i++] = e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3], r = 4 * i;
                        for (e = 16; e < 64; e++) {
                            r = 0 | n[e - 15], i = 0 | n[e - 2];
                            var o = (0 | n[e - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0,
                                a = (0 | n[e - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;
                            n[e] = o + a | 0
                        }
                        i = 0 | t.a[0], r = 0 | t.a[1];
                        var s = 0 | t.a[2],
                            u = 0 | t.a[3],
                            c = 0 | t.a[4],
                            h = 0 | t.a[5],
                            l = 0 | t.a[6];
                        for (o = 0 | t.a[7], e = 0; e < 64; e++) {
                            var f = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;
                            a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & h ^ ~c & l) + (0 | ru[e]) | 0) + (0 | n[e]) | 0) | 0, o = l, l = h, h = c, c = u + a | 0, u = s, s = r, r = i, i = a + f | 0
                        }
                        t.a[0] = t.a[0] + i | 0, t.a[1] = t.a[1] + r | 0, t.a[2] = t.a[2] + s | 0, t.a[3] = t.a[3] + u | 0, t.a[4] = t.a[4] + c | 0, t.a[5] = t.a[5] + h | 0, t.a[6] = t.a[6] + l | 0, t.a[7] = t.a[7] + o | 0
                    }

                    function pu(t, e, n) {
                        void 0 === n && (n = e.length);
                        var i = 0,
                            r = t.c;
                        if (c(e))
                            for (; i < n;) t.f[r++] = e.charCodeAt(i++), r == t.b && (du(t), r = 0);
                        else {
                            if (!d(e)) throw Error("message must be string or array");
                            for (; i < n;) {
                                var o = e[i++];
                                if (!("number" == typeof o && 0 <= o && o <= 255 && o == (0 | o))) throw Error("message must be a byte array");
                                t.f[r++] = o, r == t.b && (du(t), r = 0)
                            }
                        }
                        t.c = r, t.g += n
                    }
                    su.prototype.reset = function() { this.g = this.c = 0, this.a = h.Int32Array ? new Int32Array(this.h) : U(this.h) };
                    var vu = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

                    function mu() { su.call(this, 8, gu) }
                    y(mu, su);
                    var gu = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

                    function bu(t, e, n, i, r) { this.m = t, this.i = e, this.l = n, this.o = i || null, this.u = r || null, this.h = e + ":" + n, this.v = new au, this.g = new iu(this.h), this.f = null, this.b = [], this.a = this.c = null }

                    function yu(t) { return new Vi("invalid-cordova-configuration", t) }

                    function wu(t) {
                        var e = new mu;
                        pu(e, t), t = [];
                        var n = 8 * e.g;
                        e.c < 56 ? pu(e, fu, 56 - e.c) : pu(e, fu, e.b - (e.c - 56));
                        for (var i = 63; 56 <= i; i--) e.f[i] = 255 & n, n /= 256;
                        for (du(e), i = n = 0; i < e.i; i++)
                            for (var r = 24; 0 <= r; r -= 8) t[n++] = e.a[i] >> r & 255;
                        return D(t, function(t) { return 1 < (t = t.toString(16)).length ? t : "0" + t }).join("")
                    }

                    function Iu(t, e) { for (var n = 0; n < t.b.length; n++) try { t.b[n](e) } catch (t) {} }

                    function Tu(i) {
                        return i.f || (i.f = i.ga().then(function() {
                            return new dt(function(n) {
                                i.wa(function t(e) { return n(e), i.Ka(t), !1 }),
                                    function(r) {
                                        function e(i) {
                                            t = !0, n && n.cancel(), Eu(r).then(function(t) {
                                                var e = o;
                                                if (t && i && i.url) { var n = null; - 1 != (e = Er(i.url)).indexOf("/__/auth/callback") && (n = (n = "object" == typeof(n = pi(Be(n = Ge(e), "firebaseError") || null)) ? Ki(n) : null) ? new Yr(t.b, t.c, null, null, n) : new Yr(t.b, t.c, e, t.g)), e = n || o }
                                                Iu(r, e)
                                            })
                                        }
                                        var o = new Yr("unknown", null, null, null, new Vi("no-auth-event")),
                                            t = !1,
                                            n = Ce(500).then(function() { return Eu(r).then(function() { t || Iu(r, o) }) }),
                                            i = h.handleOpenURL;
                                        h.handleOpenURL = function(t) { if (0 == t.toLowerCase().indexOf(ai("BuildInfo.packageName", h).toLowerCase() + "://") && e({ url: t }), "function" == typeof i) try { i(t) } catch (t) { console.error(t) } }, to || (to = new Zr), to.subscribe(e)
                                    }(i)
                            })
                        })), i.f
                    }

                    function Eu(e) { var t, n = null; return (t = e.g, t.b.get(ou, t.a).then(function(t) { return $r(t) })).then(function(t) { return n = t, eu((t = e.g).b, ou, t.a) }).then(function() { return n }) }

                    function Au(t) { this.a = t, this.b = Zs() }(t = bu.prototype).ga = function() {
                        return this.za ? this.za : this.za = (zn(void 0) ? Jn().then(function() {
                            return new dt(function(t, e) {
                                var n = h.document,
                                    i = setTimeout(function() { e(Error("Cordova framework is not ready.")) }, 1e3);
                                n.addEventListener("deviceready", function() { clearTimeout(i), t() }, !1)
                            })
                        }) : It(Error("Cordova must run in an Android or iOS file scheme."))).then(function() { if ("function" != typeof ai("universalLinks.subscribe", h)) throw yu("cordova-universal-links-plugin-fix is not installed"); if (void 0 === ai("BuildInfo.packageName", h)) throw yu("cordova-plugin-buildinfo is not installed"); if ("function" != typeof ai("cordova.plugins.browsertab.openUrl", h)) throw yu("cordova-plugin-browsertab is not installed"); if ("function" != typeof ai("cordova.InAppBrowser.open", h)) throw yu("cordova-plugin-inappbrowser is not installed") }, function() { throw new Vi("cordova-not-ready") })
                    }, t.Ea = function(t, e) { return e(new Vi("operation-not-supported-in-this-environment")), wt() }, t.Cb = function() { return It(new Vi("operation-not-supported-in-this-environment")) }, t.Qb = function() { return !1 }, t.Mb = function() { return !0 }, t.Hb = function() { return !0 }, t.Ca = function(t, e, n) {
                        if (this.c) return It(new Vi("redirect-operation-pending"));
                        var i = this,
                            r = h.document,
                            o = null,
                            a = null,
                            s = null,
                            u = null;
                        return this.c = wt().then(function() { return zr(e), Tu(i) }).then(function() {
                            return function(n, t, e, i) {
                                var r = function() { for (var t = 20, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--; return e.join("") }(),
                                    o = new Yr(t, i, null, r, new Vi("no-auth-event")),
                                    a = ai("BuildInfo.packageName", h);
                                if ("string" != typeof a) throw new Vi("invalid-cordova-configuration");
                                var s = ai("BuildInfo.displayName", h),
                                    u = {};
                                if (oi().toLowerCase().match(/iphone|ipad|ipod/)) u.ibi = a;
                                else {
                                    if (!oi().toLowerCase().match(/android/)) return It(new Vi("operation-not-supported-in-this-environment"));
                                    u.apn = a
                                }
                                s && (u.appDisplayName = s), r = wu(r), u.sessionId = r;
                                var c = gs(n.m, n.i, n.l, t, e, null, i, n.o, u, n.u);
                                return n.ga().then(function() { var t = n.h; return n.v.a.set(ou, o.C(), t) }).then(function() {
                                    var t = ai("cordova.plugins.browsertab.isAvailable", h);
                                    if ("function" != typeof t) throw new Vi("invalid-cordova-configuration");
                                    var e = null;
                                    t(function(t) {
                                        if (t) {
                                            if ("function" != typeof(e = ai("cordova.plugins.browsertab.openUrl", h))) throw new Vi("invalid-cordova-configuration");
                                            e(c)
                                        } else {
                                            if ("function" != typeof(e = ai("cordova.InAppBrowser.open", h))) throw new Vi("invalid-cordova-configuration");
                                            t = !(!(t = oi()).match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !t.match(/(iPad|iPhone|iPod).*OS 8_\d/i)), n.a = e(c, t ? "_blank" : "_system", "location=yes")
                                        }
                                    })
                                })
                            }(i, t, e, n)
                        }).then(function() { return new dt(function(e, t) { a = function() { var t = ai("cordova.plugins.browsertab.close", h); return e(), "function" == typeof t && t(), i.a && "function" == typeof i.a.close && (i.a.close(), i.a = null), !1 }, i.wa(a), s = function() { o || (o = Ce(2e3).then(function() { t(new Vi("redirect-cancelled-by-user")) })) }, u = function() { yi() && s() }, r.addEventListener("resume", s, !1), oi().toLowerCase().match(/android/) || r.addEventListener("visibilitychange", u, !1) }).s(function(t) { return Eu(i).then(function() { throw t }) }) }).ia(function() { s && r.removeEventListener("resume", s, !1), u && r.removeEventListener("visibilitychange", u, !1), o && o.cancel(), a && i.Ka(a), i.c = null })
                    }, t.wa = function(e) { this.b.push(e), Tu(this).s(function(t) { "auth/invalid-cordova-configuration" === t.code && (t = new Yr("unknown", null, null, null, new Vi("no-auth-event")), e(t)) }) }, t.Ka = function(e) { M(this.b, function(t) { return t == e }) };
                    var ku = { name: "pendingRedirect", A: "session" };

                    function Su(t) { return eu(t.b, ku, t.a) }

                    function Nu(t, e, n) { this.u = t, this.l = e, this.m = n, this.h = [], this.f = !1, this.i = m(this.bb, this), this.b = new ju, this.o = new Fu, this.g = new Au(this.l + ":" + this.m), this.c = {}, this.c.unknown = this.b, this.c.signInViaRedirect = this.b, this.c.linkViaRedirect = this.b, this.c.reauthViaRedirect = this.b, this.c.signInViaPopup = this.o, this.c.linkViaPopup = this.o, this.c.reauthViaPopup = this.o, this.a = _u(this.u, this.l, this.m, ar) }

                    function _u(t, e, n, i) { var r = Lh.SDK_VERSION || null; return zn() ? new bu(t, e, n, r, i) : new ds(t, e, n, r, i) }

                    function Ou(e) { e.f || (e.f = !0, e.a.wa(e.i)); var n = e.a; return e.a.ga().s(function(t) { throw e.a == n && e.reset(), t }) }

                    function Pu(n) {
                        n.a.Mb() && Ou(n).s(function(t) {
                            var e = new Yr("unknown", null, null, null, new Vi("operation-not-supported-in-this-environment"));
                            Lu(t) && n.bb(e)
                        }), n.a.Hb() || Uu(n.b)
                    }(t = Nu.prototype).reset = function() { this.f = !1, this.a.Ka(this.i), this.a = _u(this.u, this.l, this.m) }, t.Ya = function() { this.b.Ya() }, t.subscribe = function(t) {
                        if (L(this.h, t) || this.h.push(t), !this.f) {
                            var n = this;
                            (e = this.g, e.b.get(ku, e.a).then(function(t) { return "pending" == t })).then(function(t) {
                                t ? Su(n.g).then(function() {
                                    Ou(n).s(function(t) {
                                        var e = new Yr("unknown", null, null, null, new Vi("operation-not-supported-in-this-environment"));
                                        Lu(t) && n.bb(e)
                                    })
                                }) : Pu(n)
                            }).s(function() { Pu(n) })
                        }
                        var e
                    }, t.unsubscribe = function(e) { M(this.h, function(t) { return t == e }) }, t.bb = function(t) {
                        if (!t) throw new Vi("invalid-auth-event");
                        for (var e = !1, n = 0; n < this.h.length; n++) {
                            var i = this.h[n];
                            if (i.vb(t.b, t.c)) {
                                (e = this.c[t.b]) && e.h(t, i), e = !0;
                                break
                            }
                        }
                        return Uu(this.b), e
                    };
                    var Ru = new bi(2e3, 1e4),
                        Du = new bi(3e4, 6e4);

                    function Cu(t, e, n, i, r, o) { return t.a.Cb(e, n, i, function() { t.f || (t.f = !0, t.a.wa(t.i)) }, function() { t.reset() }, r, o) }

                    function Lu(t) { return !(!t || "auth/cordova-not-ready" != t.code) }
                    Nu.prototype.fa = function() { return this.b.fa() }, Nu.prototype.Ca = function(t, e, n) { var i, r, o = this; return (r = this.g, r.b.set(ku, "pending", r.a)).then(function() { return o.a.Ca(t, e, n).s(function(t) { if (Lu(t)) throw new Vi("operation-not-supported-in-this-environment"); return i = t, Su(o.g).then(function() { throw i }) }).then(function() { return o.a.Qb() ? new dt(function() {}) : Su(o.g).then(function() { return o.fa() }).then(function() {}).s(function() {}) }) }) }, Nu.prototype.Ea = function(e, n, t, i) { return this.a.Ea(t, function(t) { e.ha(n, null, t, i) }, Ru.get()) };
                    var xu = {};

                    function Mu(t, e, n) { var i = e + ":" + n; return xu[i] || (xu[i] = new Nu(t, e, n)), xu[i] }

                    function ju() { this.b = null, this.f = [], this.c = [], this.a = null, this.i = this.g = !1 }

                    function Uu(t) { t.g || (t.g = !0, Ku(t, !1, null, null)) }

                    function Vu(t, e) {
                        if (t.b = function() { return wt(e) }, t.f.length)
                            for (var n = 0; n < t.f.length; n++) t.f[n](e)
                    }

                    function Ku(t, e, n, i) {
                        e ? i ? function(t, e) {
                            if (t.b = function() { return It(e) }, t.c.length)
                                for (var n = 0; n < t.c.length; n++) t.c[n](e)
                        }(t, i) : Vu(t, n) : Vu(t, { user: null }), t.f = [], t.c = []
                    }

                    function Fu() {}

                    function qu() { this.sb = !1, Object.defineProperty(this, "appVerificationDisabled", { get: function() { return this.sb }, set: function(t) { this.sb = t }, enumerable: !1 }) }

                    function Hu(t, e) { this.a = e, Si(this, "verificationId", t) }

                    function Wu(t, e, n, i) { return new Gr(t).Ua(e, n).then(function(t) { return new Hu(t, i) }) }

                    function Bu(t) {
                        var e = or(t);
                        if (!(e && e.exp && e.auth_time && e.iat)) throw new Vi("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
                        Ni(this, { token: t, expirationTime: wi(1e3 * e.exp), authTime: wi(1e3 * e.auth_time), issuedAtTime: wi(1e3 * e.iat), signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null, claims: e })
                    }

                    function Gu(t, e, n) { if (this.h = t, this.i = e, this.g = n, this.c = 3e4, this.f = 96e4, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!") }

                    function Xu(t, e) { return e ? (t.a = t.c, t.g()) : (e = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), e) }

                    function Ju(t) { this.f = t, this.b = this.a = null, this.c = 0 }

                    function zu(t, e) {
                        var n = e[sa],
                            i = e.refreshToken;
                        e = Yu(e.expiresIn), t.b = n, t.c = e, t.a = i
                    }

                    function Yu(t) { return b() + 1e3 * parseInt(t, 10) }

                    function $u(e, t) { return (i = e.f, r = t, new dt(function(e, n) { "refresh_token" == r.grant_type && r.refresh_token || "authorization_code" == r.grant_type && r.code ? pa(i, i.i + "?key=" + encodeURIComponent(i.b), function(t) { t ? t.error ? n(rs(t)) : t.access_token && t.refresh_token ? e(t) : n(new Vi("internal-error")) : n(new Vi("network-request-failed")) }, "POST", on(r).toString(), i.f, i.l.get()) : n(new Vi("internal-error")) })).then(function(t) { return e.b = t.access_token, e.c = Yu(t.expires_in), e.a = t.refresh_token, { accessToken: e.b, expirationTime: e.c, refreshToken: e.a } }).s(function(t) { throw "auth/user-token-expired" == t.code && (e.a = null), t }); var i, r }

                    function Zu(t, e) { this.a = t || null, this.b = e || null, Ni(this, { lastSignInTime: wi(e || null), creationTime: wi(t || null) }) }

                    function Qu(t, e, n, i, r, o) { Ni(this, { uid: t, displayName: i || null, photoURL: r || null, email: n || null, phoneNumber: o || null, providerId: e }) }

                    function tc(t, e) { for (var n in re.call(this, t), e) this[n] = e[n] }

                    function ec(t, e, n) {
                        var i;
                        this.G = [], this.m = t.apiKey, this.o = t.appName, this.u = t.authDomain || null, t = Lh.SDK_VERSION ? ri(Lh.SDK_VERSION) : null, this.b = new oa(this.m, ur(ar), t), this.h = new Ju(this.b), uc(this, e[sa]), zu(this.h, e), Si(this, "refreshToken", this.h.a), lc(this, n || {}), _e.call(this), this.I = !1, this.u && ui() && (this.a = Mu(this.u, this.m, this.o)), this.N = [], this.i = null, this.w = (i = this, new Gu(function() { return i.F(!0) }, function(t) { return !(!t || "auth/network-request-failed" != t.code) }, function() { var t = i.h.c - b() - 3e5; return 0 < t ? t : 0 })), this.V = m(this.Ha, this);
                        var r = this;
                        this.ka = null, this.ta = function(t) { r.pa(t.g) }, this.X = null, this.O = [], this.sa = function(t) { ic(r, t.c) }, this.W = null
                    }

                    function nc(t, e) { t.X && ye(t.X, "languageCodeChanged", t.ta), (t.X = e) && me(e, "languageCodeChanged", t.ta) }

                    function ic(t, e) { t.O = e, da(t.b, Lh.SDK_VERSION ? ri(Lh.SDK_VERSION, t.O) : null) }

                    function rc(t, e) { t.W && ye(t.W, "frameworkChanged", t.sa), (t.W = e) && me(e, "frameworkChanged", t.sa) }

                    function oc(e) { try { return Lh.app(e.o).auth() } catch (t) { throw new Vi("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + e.o + "'!") } }

                    function ac(t) { t.D || t.w.b || (t.w.start(), ye(t, "tokenChanged", t.V), me(t, "tokenChanged", t.V)) }

                    function sc(t) { ye(t, "tokenChanged", t.V), t.w.stop() }

                    function uc(t, e) { t.ra = e, Si(t, "_lat", e) }

                    function cc(t) { for (var e = [], n = 0; n < t.N.length; n++) e.push(t.N[n](t)); return Et(e).then(function() { return t }) }

                    function hc(t) { t.a && !t.I && (t.I = !0, t.a.subscribe(t)) }

                    function lc(t, e) { Ni(t, { uid: e.uid, displayName: e.displayName || null, photoURL: e.photoURL || null, email: e.email || null, emailVerified: e.emailVerified || !1, phoneNumber: e.phoneNumber || null, isAnonymous: e.isAnonymous || !1, metadata: new Zu(e.createdAt, e.lastLoginAt), providerData: [] }) }

                    function fc() {}

                    function dc(t) { return wt().then(function() { if (t.D) throw new Vi("app-deleted") }) }

                    function pc(t) { return D(t.providerData, function(t) { return t.providerId }) }

                    function vc(t, e) { e && (mc(t, e.providerId), t.providerData.push(e)) }

                    function mc(t, e) { M(t.providerData, function(t) { return t.providerId == e }) }

                    function gc(t, e, n) {
                        ("uid" != e || n) && t.hasOwnProperty(e) && Si(t, e, n)
                    }

                    function bc(e, t) {
                        var n, i, r;
                        e != t && (Ni(e, { uid: t.uid, displayName: t.displayName, photoURL: t.photoURL, email: t.email, emailVerified: t.emailVerified, phoneNumber: t.phoneNumber, isAnonymous: t.isAnonymous, providerData: [] }), t.metadata ? Si(e, "metadata", new Zu((r = t.metadata).a, r.b)) : Si(e, "metadata", new Zu), R(t.providerData, function(t) { vc(e, t) }), n = e.h, i = t.h, n.b = i.b, n.a = i.a, n.c = i.c, Si(e, "refreshToken", e.h.a))
                    }

                    function yc(r) { return r.F().then(function(t) { var e, n, i = r.isAnonymous; return (e = r, n = t, ns(e.b, ja, { idToken: n }).then(m(e.xc, e))).then(function() { return i || gc(r, "isAnonymous", !1), t }) }) }

                    function wc(t, e) { e[sa] && t.ra != e[sa] && (zu(t.h, e), t.dispatchEvent(new tc("tokenChanged")), uc(t, e[sa]), gc(t, "refreshToken", t.h.a)) }

                    function Ic(t, e) { return yc(t).then(function() { if (L(pc(t), e)) return cc(t).then(function() { throw new Vi("provider-already-linked") }) }) }

                    function Tc(t, e, n) { return _i({ user: t, credential: Jr(e), additionalUserInfo: e = dr(e), operationType: n }) }

                    function Ec(t, e) { return wc(t, e), t.reload().then(function() { return t }) }

                    function Ac(n, i, t, e, r) {
                        if (!ui()) return It(new Vi("operation-not-supported-in-this-environment"));
                        if (n.i && !r) return It(n.i);
                        var o = fr(t.providerId),
                            a = vi(n.uid + ":::"),
                            s = null;
                        (!li() || Yn()) && n.u && t.isOAuthProvider && (s = gs(n.u, n.m, n.o, i, t, null, a, Lh.SDK_VERSION || null));
                        var u = Bn(s, o && o.Ba, o && o.Aa);
                        return e = e().then(function() { if (Sc(n), !r) return n.F().then(function() {}) }).then(function() { return Cu(n.a, u, i, t, a, !!s) }).then(function() { return new dt(function(t, e) { n.ha(i, null, new Vi("cancelled-popup-request"), n.g || null), n.f = t, n.v = e, n.g = a, n.c = n.a.Ea(n, i, u, a) }) }).then(function(t) { return u && Wn(u), t ? _i(t) : null }).s(function(t) { throw u && Wn(u), t }), Nc(n, e, r)
                    }

                    function kc(e, t, n, i, r) {
                        if (!ui()) return It(new Vi("operation-not-supported-in-this-environment"));
                        if (e.i && !r) return It(e.i);
                        var o = null,
                            a = vi(e.uid + ":::");
                        return i = i().then(function() { if (Sc(e), !r) return e.F().then(function() {}) }).then(function() { return e.aa = a, cc(e) }).then(function(t) { return e.ba && (t = (t = e.ba).b.set(Pc, e.C(), t.a)), t }).then(function() { return e.a.Ca(t, n, a) }).s(function(t) { if (o = t, e.ba) return Rc(e.ba); throw o }).then(function() { if (o) throw o }), Nc(e, i, r)
                    }

                    function Sc(t) { if (!t.a || !t.I) { if (t.a && !t.I) throw new Vi("internal-error"); throw new Vi("auth-domain-config-required") } }

                    function Nc(t, e, n) { var i, r, o, a = (r = e, o = n, (i = t).i && !o ? (r.cancel(), It(i.i)) : r.s(function(t) { throw !t || "auth/user-disabled" != t.code && "auth/user-token-expired" != t.code || (i.i || i.dispatchEvent(new tc("userInvalidated")), i.i = t), t })); return t.G.push(a), a.ia(function() { x(t.G, a) }), a }

                    function _c(t) {
                        if (!t.apiKey) return null;
                        var e = { apiKey: t.apiKey, authDomain: t.authDomain, appName: t.appName },
                            n = {};
                        if (!(t.stsTokenManager && t.stsTokenManager.accessToken && t.stsTokenManager.expirationTime)) return null;
                        n[sa] = t.stsTokenManager.accessToken, n.refreshToken = t.stsTokenManager.refreshToken || null, n.expiresIn = (t.stsTokenManager.expirationTime - b()) / 1e3;
                        var i = new ec(e, n, t);
                        return t.providerData && R(t.providerData, function(t) { t && vc(i, _i(t)) }), t.redirectEventId && (i.aa = t.redirectEventId), i
                    }

                    function Oc(t) { this.a = t, this.b = Zs() }
                    ju.prototype.reset = function() { this.b = null, this.a && (this.a.cancel(), this.a = null) }, ju.prototype.h = function(t, e) {
                        if (t) {
                            this.reset(), this.g = !0;
                            var n = t.b,
                                i = t.c,
                                r = t.a && "auth/web-storage-unsupported" == t.a.code,
                                o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code;
                            this.i = !(!r && !o), "unknown" != n || r || o ? t.a ? (Ku(this, !0, null, t.a), wt()) : e.xa(n, i) ? function(e, t, n) {
                                n = n.xa(t.b, t.c);
                                var i = t.f,
                                    r = t.g,
                                    o = t.h,
                                    a = !!t.b.match(/Redirect$/);
                                n(i, r, o).then(function(t) { Ku(e, a, t, null) }).s(function(t) { Ku(e, a, null, t) })
                            }(this, t, e) : It(new Vi("invalid-auth-event")) : (Ku(this, !1, null, null), wt())
                        } else It(new Vi("invalid-auth-event"))
                    }, ju.prototype.Ya = function() { this.g && !this.i && Ku(this, !1, null, null) }, ju.prototype.fa = function() {
                        var r = this;
                        return new dt(function(t, e) {
                            var n, i;
                            r.b ? r.b().then(t, e) : (r.f.push(t), r.c.push(e), n = r, i = new Vi("timeout"), n.a && n.a.cancel(), n.a = Ce(Du.get()).then(function() { n.b || (n.g = !0, Ku(n, !0, null, i)) }))
                        })
                    }, Fu.prototype.h = function(t, e) {
                        if (t) {
                            var n = t.b,
                                i = t.c;
                            t.a ? (e.ha(t.b, null, t.a, t.c), wt()) : e.xa(n, i) ? (o = e, a = (r = t).c, s = r.b, o.xa(s, a)(r.f, r.g, r.h).then(function(t) { o.ha(s, t, null, a) }).s(function(t) { o.ha(s, null, t, a) })) : It(new Vi("invalid-auth-event"))
                        } else It(new Vi("invalid-auth-event"));
                        var r, o, a, s
                    }, Hu.prototype.confirm = function(t) { return t = Xr(this.verificationId, t), this.a(t) }, Gu.prototype.start = function() {
                        this.a = this.c,
                            function e(n, t) {
                                n.stop();
                                n.b = Ce(Xu(n, t)).then(function() { return e = h.document, n = null, yi() || !e ? wt() : new dt(function(t) { n = function() { yi() && (e.removeEventListener("visibilitychange", n, !1), t()) }, e.addEventListener("visibilitychange", n, !1) }).s(function(t) { throw e.removeEventListener("visibilitychange", n, !1), t }); var e, n }).then(function() { return n.h() }).then(function() { e(n, !0) }).s(function(t) { n.i(t) && e(n, !1) })
                            }(this, !0)
                    }, Gu.prototype.stop = function() { this.b && (this.b.cancel(), this.b = null) }, Ju.prototype.C = function() { return { apiKey: this.f.b, refreshToken: this.a, accessToken: this.b, expirationTime: this.c } }, Ju.prototype.getToken = function(t) { return t = !!t, this.b && !this.a ? It(new Vi("user-token-expired")) : t || !this.b || b() > this.c - 3e4 ? this.a ? $u(this, { grant_type: "refresh_token", refresh_token: this.a }) : wt(null) : wt({ accessToken: this.b, expirationTime: this.c, refreshToken: this.a }) }, Zu.prototype.C = function() { return { lastLoginAt: this.b, createdAt: this.a } }, y(tc, re), y(ec, _e), ec.prototype.pa = function(t) { this.ka = t, fa(this.b, t) }, ec.prototype.ea = function() { return this.ka }, ec.prototype.ya = function() { return U(this.O) }, ec.prototype.Ha = function() { this.w.b && (this.w.stop(), this.w.start()) }, Si(ec.prototype, "providerId", "firebase"), (t = ec.prototype).reload = function() { var t = this; return Nc(this, dc(this).then(function() { return yc(t).then(function() { return cc(t) }).then(fc) })) }, t.dc = function(t) { return this.F(t).then(function(t) { return new Bu(t) }) }, t.F = function(t) { var e = this; return Nc(this, dc(this).then(function() { return e.h.getToken(t) }).then(function(t) { if (!t) throw new Vi("internal-error"); return t.accessToken != e.ra && (uc(e, t.accessToken), e.dispatchEvent(new tc("tokenChanged"))), gc(e, "refreshToken", t.refreshToken), t.accessToken })) }, t.xc = function(t) {
                        if (!(t = t.users) || !t.length) throw new Vi("internal-error");
                        lc(this, { uid: (t = t[0]).localId, displayName: t.displayName, photoURL: t.photoUrl, email: t.email, emailVerified: !!t.emailVerified, phoneNumber: t.phoneNumber, lastLoginAt: t.lastLoginAt, createdAt: t.createdAt });
                        for (var e = (i = (i = t).providerUserInfo) && i.length ? D(i, function(t) { return new Qu(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber) }) : [], n = 0; n < e.length; n++) vc(this, e[n]);
                        var i;
                        gc(this, "isAnonymous", !(this.email && t.passwordHash || this.providerData && this.providerData.length))
                    }, t.gb = function(t) {
                        var e = this,
                            n = null;
                        return Nc(this, t.f(this.b, this.uid).then(function(t) { return wc(e, t), n = Tc(e, t, "reauthenticate"), e.i = null, e.reload() }).then(function() { return n }), !0)
                    }, t.yc = function(t) { return Ai("firebase.User.prototype.reauthenticateWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential instead."), this.gb(t).then(function() {}) }, t.eb = function(e) {
                        var n = this,
                            i = null;
                        return Nc(this, Ic(this, e.providerId).then(function() { return n.F() }).then(function(t) { return e.b(n.b, t) }).then(function(t) { return i = Tc(n, t, "link"), Ec(n, t) }).then(function() { return i }))
                    }, t.pc = function(t) { return Ai("firebase.User.prototype.linkWithCredential is deprecated. Please use firebase.User.prototype.linkAndRetrieveDataWithCredential instead."), this.eb(t).then(function(t) { return t.user }) }, t.qc = function(t, e) { var n = this; return Nc(this, Ic(this, "phone").then(function() { return Wu(oc(n), t, e, m(n.eb, n)) })) }, t.zc = function(t, e) { var n = this; return Nc(this, wt().then(function() { return Wu(oc(n), t, e, m(n.gb, n)) }), !0) }, t.pb = function(e) { var n = this; return Nc(this, this.F().then(function(t) { return n.b.pb(t, e) }).then(function(t) { return wc(n, t), n.reload() })) }, t.Rc = function(e) { var n = this; return Nc(this, this.F().then(function(t) { return e.b(n.b, t) }).then(function(t) { return wc(n, t), n.reload() })) }, t.qb = function(e) { var n = this; return Nc(this, this.F().then(function(t) { return n.b.qb(t, e) }).then(function(t) { return wc(n, t), n.reload() })) }, t.rb = function(e) { if (void 0 === e.displayName && void 0 === e.photoURL) return dc(this); var n = this; return Nc(this, this.F().then(function(t) { return n.b.rb(t, { displayName: e.displayName, photoUrl: e.photoURL }) }).then(function(t) { return wc(n, t), gc(n, "displayName", t.displayName || null), gc(n, "photoURL", t.photoUrl || null), R(n.providerData, function(t) { "password" === t.providerId && (Si(t, "displayName", n.displayName), Si(t, "photoURL", n.photoURL)) }), cc(n) }).then(fc)) }, t.Pc = function(r) { var o = this; return Nc(this, yc(this).then(function(t) { return L(pc(o), r) ? (e = o.b, n = t, i = [r], ns(e, La, { idToken: n, deleteProvider: i })).then(function(t) { var e = {}; return R(t.providerUserInfo || [], function(t) { e[t.providerId] = !0 }), R(pc(o), function(t) { e[t] || mc(o, t) }), e[Gr.PROVIDER_ID] || Si(o, "phoneNumber", null), cc(o) }) : cc(o).then(function() { throw new Vi("no-such-provider") }); var e, n, i })) }, t.delete = function() {
                        var e = this;
                        return Nc(this, this.F().then(function(t) { return ns(e.b, Ca, { idToken: t }) }).then(function() { e.dispatchEvent(new tc("userDeleted")) })).then(function() {
                            for (var t = 0; t < e.G.length; t++) e.G[t].cancel("app-deleted");
                            nc(e, null), rc(e, null), e.G = [], e.D = !0, sc(e), Si(e, "refreshToken", null), e.a && e.a.unsubscribe(e)
                        })
                    }, t.vb = function(t, e) { return !!("linkViaPopup" == t && (this.g || null) == e && this.f || "reauthViaPopup" == t && (this.g || null) == e && this.f || "linkViaRedirect" == t && (this.aa || null) == e || "reauthViaRedirect" == t && (this.aa || null) == e) }, t.ha = function(t, e, n, i) { "linkViaPopup" != t && "reauthViaPopup" != t || i != (this.g || null) || (n && this.v ? this.v(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.v) }, t.xa = function(t, e) { return "linkViaPopup" == t && e == (this.g || null) ? m(this.Ab, this) : "reauthViaPopup" == t && e == (this.g || null) ? m(this.Bb, this) : "linkViaRedirect" == t && (this.aa || null) == e ? m(this.Ab, this) : "reauthViaRedirect" == t && (this.aa || null) == e ? m(this.Bb, this) : null }, t.rc = function(t) { var e = this; return Ac(this, "linkViaPopup", t, function() { return Ic(e, t.providerId).then(function() { return cc(e) }) }, !1) }, t.Ac = function(t) { return Ac(this, "reauthViaPopup", t, function() { return wt() }, !0) }, t.sc = function(t) { var e = this; return kc(this, "linkViaRedirect", t, function() { return Ic(e, t.providerId) }, !1) }, t.Bc = function(t) { return kc(this, "reauthViaRedirect", t, function() { return wt() }, !0) }, t.Ab = function(e, n, i) {
                        var r = this;
                        this.c && (this.c.cancel(), this.c = null);
                        var o = null;
                        return Nc(this, this.F().then(function(t) { return Sa(r.b, { requestUri: e, postBody: i, sessionId: n, idToken: t }) }).then(function(t) { return o = Tc(r, t, "link"), Ec(r, t) }).then(function() { return o }))
                    }, t.Bb = function(t, e, n) {
                        var i = this;
                        this.c && (this.c.cancel(), this.c = null);
                        var r = null;
                        return Nc(this, wt().then(function() { return Ar(Na(i.b, { requestUri: t, sessionId: e, postBody: n }), i.uid) }).then(function(t) { return r = Tc(i, t, "reauthenticate"), wc(i, t), i.i = null, i.reload() }).then(function() { return r }), !0)
                    }, t.jb = function(e) {
                        var n = this,
                            i = null;
                        return Nc(this, this.F().then(function(t) { return i = t, void 0 === e || nt(e) ? {} : Qi(new Hi(e)) }).then(function(t) { return n.b.jb(i, t) }).then(function(t) { if (n.email != t) return n.reload() }).then(function() {}))
                    }, t.toJSON = function() { return this.C() }, t.C = function() { var e = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, phoneNumber: this.phoneNumber, isAnonymous: this.isAnonymous, providerData: [], apiKey: this.m, appName: this.o, authDomain: this.u, stsTokenManager: this.h.C(), redirectEventId: this.aa || null }; return this.metadata && st(e, this.metadata.C()), R(this.providerData, function(t) { e.providerData.push(function(t) { var e, n = {}; for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]); return n }(t)) }), e };
                    var Pc = { name: "redirectUser", A: "session" };

                    function Rc(t) { return eu(t.b, Pc, t.a) }

                    function Dc(t) {
                        var e, n, i, r, o, a, s, u, c;
                        this.a = t, this.b = Zs(), this.c = null, this.f = (e = this, n = xc("local"), i = xc("session"), r = xc("none"), (o = e.b, a = n, s = e.a, u = tu(a, s), c = Qs(o, a.A), o.get(a, s).then(function(t) {
                            var e = null;
                            try { e = pi(h.localStorage.getItem(u)) } catch (t) {}
                            if (e && !t) return h.localStorage.removeItem(u), o.set(a, e, s);
                            e && t && "localStorage" != c.type && h.localStorage.removeItem(u)
                        })).then(function() { return e.b.get(i, e.a) }).then(function(t) { return t ? i : e.b.get(r, e.a).then(function(t) { return t ? r : e.b.get(n, e.a).then(function(t) { return t ? n : e.b.get(Lc, e.a).then(function(t) { return t ? xc(t) : n }) }) }) }).then(function(t) { return e.c = t, Cc(e, t.A) }).s(function() { e.c || (e.c = n) })), this.b.addListener(xc("local"), this.a, m(this.g, this))
                    }

                    function Cc(t, e) {
                        var n, s, i = [];
                        for (n in Ys) Ys[n] !== e && i.push(eu(t.b, xc(Ys[n]), t.a));
                        return i.push(eu(t.b, Lc, t.a)), s = i, new dt(function(n, e) {
                            var i = s.length,
                                r = [];
                            if (i)
                                for (var t = function(t, e) { i--, r[t] = e, 0 == i && n(r) }, o = function(t) { e(t) }, a = 0; a < s.length; a++) Tt(s[a], g(t, a), o);
                            else n(r)
                        })
                    }
                    Dc.prototype.g = function() {
                        var e = this,
                            n = xc("local");
                        Vc(this, function() { return wt().then(function() { return e.c && "local" != e.c.A ? e.b.get(n, e.a) : null }).then(function(t) { if (t) return Cc(e, "local").then(function() { e.c = n }) }) })
                    };
                    var Lc = { name: "persistence", A: "session" };

                    function xc(t) { return { name: "authUser", A: t } }

                    function Mc(t, e) { return Vc(t, function() { return t.b.set(t.c, e.C(), t.a) }) }

                    function jc(t) { return Vc(t, function() { return eu(t.b, t.c, t.a) }) }

                    function Uc(t, e) { return Vc(t, function() { return t.b.get(t.c, t.a).then(function(t) { return t && e && (t.authDomain = e), _c(t || {}) }) }) }

                    function Vc(t, e) { return t.f = t.f.then(e, e), t.f }

                    function Kc(t) {
                        if (this.m = !1, Si(this, "settings", new qu), Si(this, "app", t), !Xc(this).options || !Xc(this).options.apiKey) throw new Vi("invalid-api-key");
                        var n, e, i, r, o, a, s, u, c, h, l, f;
                        t = Lh.SDK_VERSION ? ri(Lh.SDK_VERSION) : null, this.b = new oa(Xc(this).options && Xc(this).options.apiKey, ur(ar), t), this.N = [], this.o = [], this.I = [], this.Tb = Lh.INTERNAL.createSubscribe(m(this.mc, this)), this.O = void 0, this.Ub = Lh.INTERNAL.createSubscribe(m(this.nc, this)), Bc(this, null), this.h = new Dc(Xc(this).options.apiKey + ":" + Xc(this).name), this.w = new Oc(Xc(this).options.apiKey + ":" + Xc(this).name), this.V = $c(this, (e = Xc(n = this).options.authDomain, i = (r = n, o = (a = r.w, s = Xc(r).options.authDomain, a.b.get(Pc, a.a).then(function(t) { return t && s && (t.authDomain = s), _c(t || {}) })).then(function(t) { return (r.D = t) && (t.ba = r.w), Rc(r.w) }), $c(r, o)).then(function() { return Uc(n.h, e) }).then(function(e) { return e ? (e.ba = n.w, n.D && (n.D.aa || null) == (e.aa || null) ? e : e.reload().then(function() { return Mc(n.h, e).then(function() { return e }) }).s(function(t) { return "auth/network-request-failed" == t.code ? e : jc(n.h) })) : null }).then(function(t) { Bc(n, t || null) }), $c(n, i))), this.i = $c(this, (u = this).V.then(function() { return u.fa() }).s(function() {}).then(function() { if (!u.m) return u.ka() }).s(function() {}).then(function() {
                            if (!u.m) {
                                u.X = !0;
                                var t = u.h;
                                t.b.addListener(xc("local"), t.a, u.ka)
                            }
                        })), this.X = !1, this.ka = m(this.Mc, this), this.Ha = m(this.Z, this), this.ra = m(this.bc, this), this.sa = m(this.jc, this), this.ta = m(this.kc, this), h = Xc(c = this).options.authDomain, l = Xc(c).options.apiKey, h && ui() && (c.Sb = c.V.then(function() {
                            if (!c.m) {
                                if (c.a = Mu(h, l, Xc(c).name), c.a.subscribe(c), Jc(c) && hc(Jc(c)), c.D) {
                                    hc(c.D);
                                    var t = c.D;
                                    t.pa(c.ea()), nc(t, c), ic(t = c.D, c.G), rc(t, c), c.D = null
                                }
                                return c.a
                            }
                        })), this.INTERNAL = {}, this.INTERNAL.delete = m(this.delete, this), this.INTERNAL.logFramework = m(this.tc, this), this.u = 0, _e.call(this), f = this, Object.defineProperty(f, "lc", { get: function() { return this.ea() }, set: function(t) { this.pa(t) }, enumerable: !1 }), f.W = null, this.G = []
                    }

                    function Fc(t) { re.call(this, "languageCodeChanged"), this.g = t }

                    function qc(t) { re.call(this, "frameworkChanged"), this.c = t }

                    function Hc(t) { return t.Sb || It(new Vi("auth-domain-config-required")) }

                    function Wc(o, a) { var s = {}; return s.apiKey = Xc(o).options.apiKey, s.authDomain = Xc(o).options.authDomain, s.appName = Xc(o).name, o.V.then(function() { return t = s, e = a, n = o.w, i = o.ya(), r = new ec(t, e), n && (r.ba = n), i && ic(r, i), r.reload().then(function() { return r }); var t, e, n, i, r }).then(function(t) { return Jc(o) && t.uid == Jc(o).uid ? bc(Jc(o), t) : (Bc(o, t), hc(t)), o.Z(t) }).then(function() { Yc(o) }) }

                    function Bc(t, e) {
                        var n, i;
                        Jc(t) && (n = Jc(t), i = t.Ha, M(n.N, function(t) { return t == i }), ye(Jc(t), "tokenChanged", t.ra), ye(Jc(t), "userDeleted", t.sa), ye(Jc(t), "userInvalidated", t.ta), sc(Jc(t))), e && (e.N.push(t.Ha), me(e, "tokenChanged", t.ra), me(e, "userDeleted", t.sa), me(e, "userInvalidated", t.ta), 0 < t.u && ac(e)), Si(t, "currentUser", e), e && (e.pa(t.ea()), nc(e, t), ic(e, t.G), rc(e, t))
                    }

                    function Gc(e, t) {
                        var n = null,
                            i = null;
                        return $c(e, t.then(function(t) { return n = Jr(t), i = dr(t), Wc(e, t) }).then(function() { return _i({ user: Jc(e), credential: n, additionalUserInfo: i, operationType: "signIn" }) }))
                    }

                    function Xc(t) { return t.app }

                    function Jc(t) { return t.currentUser }

                    function zc(t) { return Jc(t) && Jc(t)._lat || null }

                    function Yc(t) {
                        if (t.X) {
                            for (var e = 0; e < t.o.length; e++) t.o[e] && t.o[e](zc(t));
                            if (t.O !== t.getUid() && t.I.length)
                                for (t.O = t.getUid(), e = 0; e < t.I.length; e++) t.I[e] && t.I[e](zc(t))
                        }
                    }

                    function $c(t, e) { return t.N.push(e), e.ia(function() { x(t.N, e) }), e }

                    function Zc() {}

                    function Qc() { this.a = {}, this.b = 1e12 }
                    Dc.prototype.mb = function(e) {
                        var n = null,
                            i = this;
                        return function(t) {
                            var e = new Vi("invalid-persistence-type"),
                                n = new Vi("unsupported-persistence-type");
                            t: {
                                for (i in Ys)
                                    if (Ys[i] == t) { var i = !0; break t }
                                i = !1
                            }
                            if (!i || "string" != typeof t) throw e;
                            switch (Zn()) {
                                case "ReactNative":
                                    if ("session" === t) throw n;
                                    break;
                                case "Node":
                                    if ("none" !== t) throw n;
                                    break;
                                default:
                                    if (!si() && "none" !== t) throw n
                            }
                        }(e), Vc(this, function() { return e != i.c.A ? i.b.get(i.c, i.a).then(function(t) { return n = t, Cc(i, e) }).then(function() { if (i.c = xc(e), n) return i.b.set(i.c, n, i.a) }) : wt() })
                    }, y(Kc, _e), y(Fc, re), y(qc, re), (t = Kc.prototype).mb = function(t) { return $c(this, t = this.h.mb(t)) }, t.pa = function(t) { this.W === t || this.m || (this.W = t, fa(this.b, this.W), this.dispatchEvent(new Fc(this.ea()))) }, t.ea = function() { return this.W }, t.Sc = function() {
                        var t = h.navigator;
                        this.pa(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null)
                    }, t.tc = function(t) { this.G.push(t), da(this.b, Lh.SDK_VERSION ? ri(Lh.SDK_VERSION, this.G) : null), this.dispatchEvent(new qc(this.G)) }, t.ya = function() { return U(this.G) }, t.toJSON = function() { return { apiKey: Xc(this).options.apiKey, authDomain: Xc(this).options.authDomain, appName: Xc(this).name, currentUser: Jc(this) && Jc(this).C() } }, t.vb = function(t, e) {
                        switch (t) {
                            case "unknown":
                            case "signInViaRedirect":
                                return !0;
                            case "signInViaPopup":
                                return this.g == e && !!this.f;
                            default:
                                return !1
                        }
                    }, t.ha = function(t, e, n, i) { "signInViaPopup" == t && this.g == i && (n && this.v ? this.v(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.v) }, t.xa = function(t, e) { return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == e && this.f ? m(this.ac, this) : null }, t.ac = function(t, e, n) {
                        var i = this;
                        t = { requestUri: t, postBody: n, sessionId: e }, this.c && (this.c.cancel(), this.c = null);
                        var r = null,
                            o = null,
                            a = ka(i.b, t).then(function(t) { return r = Jr(t), o = dr(t), t });
                        return $c(this, t = i.V.then(function() { return a }).then(function(t) { return Wc(i, t) }).then(function() { return _i({ user: Jc(i), credential: r, additionalUserInfo: o, operationType: "signIn" }) }))
                    }, t.Kc = function(e) {
                        if (!ui()) return It(new Vi("operation-not-supported-in-this-environment"));
                        var n = this,
                            t = fr(e.providerId),
                            i = vi(),
                            r = null;
                        (!li() || Yn()) && Xc(this).options.authDomain && e.isOAuthProvider && (r = gs(Xc(this).options.authDomain, Xc(this).options.apiKey, Xc(this).name, "signInViaPopup", e, null, i, Lh.SDK_VERSION || null));
                        var o = Bn(r, t && t.Ba, t && t.Aa);
                        return $c(this, t = Hc(this).then(function(t) { return Cu(t, o, "signInViaPopup", e, i, !!r) }).then(function() { return new dt(function(t, e) { n.ha("signInViaPopup", null, new Vi("cancelled-popup-request"), n.g), n.f = t, n.v = e, n.g = i, n.c = n.a.Ea(n, "signInViaPopup", o, i) }) }).then(function(t) { return o && Wn(o), t ? _i(t) : null }).s(function(t) { throw o && Wn(o), t }))
                    }, t.Lc = function(t) { if (!ui()) return It(new Vi("operation-not-supported-in-this-environment")); var e = this; return $c(this, Hc(this).then(function() { return Vc(t = e.h, function() { return t.b.set(Lc, t.c.A, t.a) }); var t }).then(function() { return e.a.Ca("signInViaRedirect", t) })) }, t.fa = function() { if (!ui()) return It(new Vi("operation-not-supported-in-this-environment")); var t = this; return $c(this, Hc(this).then(function() { return t.a.fa() }).then(function(t) { return t ? _i(t) : null })) }, t.Qc = function(t) {
                        if (!t) return It(new Vi("null-user"));
                        var e = this,
                            n = {};
                        n.apiKey = Xc(this).options.apiKey, n.authDomain = Xc(this).options.authDomain, n.appName = Xc(this).name;
                        var i = function(t, e, n, i) {
                            e = e || { apiKey: t.m, authDomain: t.u, appName: t.o };
                            var r = t.h,
                                o = {};
                            return o[sa] = r.b, o.refreshToken = r.a, o.expiresIn = (r.c - b()) / 1e3, e = new ec(e, o), n && (e.ba = n), i && ic(e, i), bc(e, t), e
                        }(t, n, e.w, e.ya());
                        return $c(this, this.i.then(function() { if (Xc(e).options.apiKey != t.m) return i.reload() }).then(function() { return Jc(e) && t.uid == Jc(e).uid ? (bc(Jc(e), t), e.Z(t)) : (Bc(e, i), hc(i), e.Z(i)) }).then(function() { Yc(e) }))
                    }, t.nb = function() { var t = this; return $c(this, this.i.then(function() { return Jc(t) ? (Bc(t, null), jc(t.h).then(function() { Yc(t) })) : wt() })) }, t.Mc = function() {
                        var i = this;
                        return Uc(this.h, Xc(this).options.authDomain).then(function(t) {
                            if (!i.m) {
                                var e;
                                if (e = Jc(i) && t) {
                                    e = Jc(i).uid;
                                    var n = t.uid;
                                    e = null != e && "" !== e && null != n && "" !== n && e == n
                                }
                                if (e) return bc(Jc(i), t), Jc(i).F();
                                (Jc(i) || t) && (Bc(i, t), t && (hc(t), t.ba = i.w), i.a && i.a.subscribe(i), Yc(i))
                            }
                        })
                    }, t.Z = function(t) { return Mc(this.h, t) }, t.bc = function() { Yc(this), this.Z(Jc(this)) }, t.jc = function() { this.nb() }, t.kc = function() { this.nb() }, t.mc = function(t) {
                        var e = this;
                        this.addAuthTokenListener(function() { t.next(Jc(e)) })
                    }, t.nc = function(t) {
                        var e, n, i = this;
                        n = function() { t.next(Jc(i)) }, (e = this).I.push(n), $c(e, e.i.then(function() {!e.m && L(e.I, n) && e.O !== e.getUid() && (e.O = e.getUid(), n(zc(e))) }))
                    }, t.vc = function(t, e, n) { var i = this; return this.X && Lh.Promise.resolve().then(function() { a(t) ? t(Jc(i)) : a(t.next) && t.next(Jc(i)) }), this.Tb(t, e, n) }, t.uc = function(t, e, n) { var i = this; return this.X && Lh.Promise.resolve().then(function() { i.O = i.getUid(), a(t) ? t(Jc(i)) : a(t.next) && t.next(Jc(i)) }), this.Ub(t, e, n) }, t.cc = function(t) { var e = this; return $c(this, this.i.then(function() { return Jc(e) ? Jc(e).F(t).then(function(t) { return { accessToken: t } }) : null })) }, t.Nb = function(t) { var n = this; return this.i.then(function() { return Gc(n, ns(n.b, $a, { token: t })) }).then(function(t) { var e = t.user; return gc(e, "isAnonymous", !1), n.Z(e), t }) }, t.Ec = function(t) { return Ai("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCustomToken is deprecated. Please use firebase.auth.Auth.prototype.signInWithCustomToken instead."), this.Nb(t) }, t.Fc = function(t, e) { return Ai("firebase.auth.Auth.prototype.signInAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.signInWithEmailAndPassword instead."), this.Ob(t, e) }, t.Ob = function(t, e) { var n = this; return this.i.then(function() { return Gc(n, ns(n.b, Za, { email: t, password: e })) }) }, t.xb = function(t, e) { var n = this; return this.i.then(function() { return Gc(n, ns(n.b, Ra, { email: t, password: e })) }) }, t.Wb = function(t, e) { return Ai("firebase.auth.Auth.prototype.createUserAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.createUserWithEmailAndPassword instead."), this.xb(t, e) }, t.Hc = function(t) { return Ai("firebase.auth.Auth.prototype.signInWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential instead."), this.Pa(t).then(function(t) { return t.user }) }, t.Pa = function(t) { var e = this; return this.i.then(function() { return Gc(e, t.la(e.b)) }) }, t.Qa = function() { var n = this; return this.i.then(function() { var t = Jc(n); return t && t.isAnonymous ? _i({ user: t, credential: null, additionalUserInfo: _i({ providerId: null, isNewUser: !1 }), operationType: "signIn" }) : Gc(n, n.b.Qa()).then(function(t) { var e = t.user; return gc(e, "isAnonymous", !0), n.Z(e), t }) }) }, t.Gc = function() { return Ai("firebase.auth.Auth.prototype.signInAnonymouslyAndRetrieveData is deprecated. Please use firebase.auth.Auth.prototype.signInAnonymously instead."), this.Qa() }, t.getUid = function() { return Jc(this) && Jc(this).uid || null }, t.Vb = function(t) { this.addAuthTokenListener(t), this.u++, 0 < this.u && Jc(this) && ac(Jc(this)) }, t.Cc = function(e) {
                        var n = this;
                        R(this.o, function(t) { t == e && n.u-- }), this.u < 0 && (this.u = 0), 0 == this.u && Jc(this) && sc(Jc(this)), this.removeAuthTokenListener(e)
                    }, t.addAuthTokenListener = function(t) {
                        var e = this;
                        this.o.push(t), $c(this, this.i.then(function() { e.m || L(e.o, t) && t(zc(e)) }))
                    }, t.removeAuthTokenListener = function(e) { M(this.o, function(t) { return t == e }) }, t.delete = function() { this.m = !0; for (var t = 0; t < this.N.length; t++) this.N[t].cancel("app-deleted"); return this.N = [], this.h && (t = this.h).b.removeListener(xc("local"), t.a, this.ka), this.a && (this.a.unsubscribe(this), this.a.Ya()), Lh.Promise.resolve() }, t.Zb = function(t) { return Ai("firebase.auth.Auth.prototype.fetchProvidersForEmail is deprecated. Please use firebase.auth.Auth.prototype.fetchSignInMethodsForEmail instead."), $c(this, ns(this.b, Da, { identifier: t, continueUri: ci() ? Fn() : "http://localhost" }).then(function(t) { return t.allProviders || [] })) }, t.$b = function(t) { return $c(this, ns(this.b, Da, { identifier: t, continueUri: ci() ? Fn() : "http://localhost" }).then(function(t) { return t.signinMethods || [] })) }, t.oc = function(t) { return !!Hr(t) }, t.lb = function(e, n) { var i = this; return $c(this, wt().then(function() { var t = new Hi(n); if (!t.c) throw new Vi("argument-error", Gi + " must be true when sending sign in link to email"); return Qi(t) }).then(function(t) { return i.b.lb(e, t) }).then(function() {})) }, t.Tc = function(t) { return this.Ja(t).then(function(t) { return t.data.email }) }, t.Za = function(t, e) { return $c(this, this.b.Za(t, e).then(function() {})) }, t.Ja = function(t) { return $c(this, this.b.Ja(t).then(function(t) { return new Pi(t) })) }, t.Wa = function(t) { return $c(this, this.b.Wa(t).then(function() {})) }, t.kb = function(e, t) { var n = this; return $c(this, wt().then(function() { return void 0 === t || nt(t) ? {} : Qi(new Hi(t)) }).then(function(t) { return n.b.kb(e, t) }).then(function() {})) }, t.Jc = function(t, e) { return $c(this, Wu(this, t, e, m(this.Pa, this))) }, t.Ic = function(e, n) { var i = this; return $c(this, wt().then(function() { var t = qr(e, n || Fn()); return i.Pa(t) })) }, Zc.prototype.render = function() {}, Zc.prototype.reset = function() {}, Zc.prototype.getResponse = function() {}, Zc.prototype.execute = function() {};
                    var th = null;

                    function eh(t, e) { return (e = nh(e)) && t.a[e] || null }

                    function nh(t) { return (t = void 0 === t ? 1e12 : t) ? t.toString() : null }

                    function ih(t, e) {
                        this.g = !1, this.c = e, this.a = this.b = null, this.h = "invisible" !== this.c.size, this.f = Pn(t);
                        var n = this;
                        this.i = function() { n.execute() }, this.h ? this.execute() : me(this.f, "click", this.i)
                    }

                    function rh(t) { if (t.g) throw Error("reCAPTCHA mock was already deleted!") }

                    function oh() {}
                    Qc.prototype.render = function(t, e) { return this.a[this.b.toString()] = new ih(t, e), this.b++ }, Qc.prototype.reset = function(t) {
                        var e = eh(this, t);
                        t = nh(t), e && t && (e.delete(), delete this.a[t])
                    }, Qc.prototype.getResponse = function(t) { return (t = eh(this, t)) ? t.getResponse() : null }, Qc.prototype.execute = function(t) {
                        (t = eh(this, t)) && t.execute()
                    }, ih.prototype.getResponse = function() { return rh(this), this.b }, ih.prototype.execute = function() {
                        rh(this);
                        var n = this;
                        this.a || (this.a = setTimeout(function() {
                            n.b = function() { for (var t = 50, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--; return e.join("") }();
                            var t = n.c.callback,
                                e = n.c["expired-callback"];
                            if (t) try { t(n.b) } catch (t) {}
                            n.a = setTimeout(function() {
                                if (n.a = null, n.b = null, e) try { e() } catch (t) {}
                                n.h && n.execute()
                            }, 6e4)
                        }, 500))
                    }, ih.prototype.delete = function() { rh(this), this.g = !0, clearTimeout(this.a), this.a = null, ye(this.f, "click", this.i) }, oh.prototype.g = function() { return th || (th = new Qc), wt(th) }, oh.prototype.c = function() {};
                    var ah = null;

                    function sh() { this.b = h.grecaptcha ? 1 / 0 : 0, this.f = null, this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString() }
                    var uh = pn("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
                        ch = new bi(3e4, 6e4);
                    sh.prototype.g = function(r) {
                        var o = this;
                        return new dt(function(t, e) {
                            var i = setTimeout(function() { e(new Vi("network-request-failed")) }, ch.get());
                            !h.grecaptcha || r !== o.f && !o.b ? (h[o.a] = function() {
                                if (h.grecaptcha) {
                                    o.f = r;
                                    var n = h.grecaptcha.render;
                                    h.grecaptcha.render = function(t, e) { return t = n(t, e), o.b++, t }, clearTimeout(i), t(h.grecaptcha)
                                } else clearTimeout(i), e(new Vi("internal-error"));
                                delete h[o.a]
                            }, wt(Zo(gn(uh, { onload: o.a, hl: r || "" }))).s(function() { clearTimeout(i), e(new Vi("internal-error", "Unable to load external reCAPTCHA dependencies!")) })) : (clearTimeout(i), t(h.grecaptcha))
                        })
                    }, sh.prototype.c = function() { this.b-- };
                    var hh = null;

                    function lh(t, e, n, i, r, o, a) {
                        if (Si(this, "type", "recaptcha"), this.c = this.f = null, this.D = !1, this.m = e, this.g = null, a = a ? (ah || (ah = new oh), ah) : (hh || (hh = new sh), hh), this.o = a, this.a = n || { theme: "light", type: "image" }, this.h = [], this.a[ph]) throw new Vi("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
                        if (this.i = "invisible" === this.a[vh], !h.document) throw new Vi("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
                        if (!Pn(e) || !this.i && Pn(e).hasChildNodes()) throw new Vi("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
                        this.u = new oa(t, o || null, r || null), this.v = i || function() { return null };
                        var s = this;
                        this.l = [];
                        var u = this.a[fh];
                        this.a[fh] = function(t) {
                            if (mh(s, t), "function" == typeof u) u(t);
                            else if ("string" == typeof u) { var e = ai(u, h); "function" == typeof e && e(t) }
                        };
                        var c = this.a[dh];
                        this.a[dh] = function() {
                            if (mh(s, null), "function" == typeof c) c();
                            else if ("string" == typeof c) { var t = ai(c, h); "function" == typeof t && t() }
                        }
                    }
                    var fh = "callback",
                        dh = "expired-callback",
                        ph = "sitekey",
                        vh = "size";

                    function mh(t, e) { for (var n = 0; n < t.l.length; n++) try { t.l[n](e) } catch (t) {} }

                    function gh(t, e) { return t.h.push(e), e.ia(function() { x(t.h, e) }), e }

                    function bh(t) { if (t.D) throw new Vi("internal-error", "RecaptchaVerifier instance has been destroyed.") }

                    function yh(t, e, n) {
                        var i = !1;
                        try { this.b = n || Lh.app() } catch (t) { throw new Vi("argument-error", "No firebase.app.App instance is currently initialized.") }
                        if (!this.b.options || !this.b.options.apiKey) throw new Vi("invalid-api-key");
                        n = this.b.options.apiKey;
                        var r = this,
                            o = null;
                        try { o = this.b.auth().ya() } catch (t) {}
                        try { i = this.b.auth().settings.appVerificationDisabledForTesting } catch (t) {}
                        o = Lh.SDK_VERSION ? ri(Lh.SDK_VERSION, o) : null, lh.call(this, n, t, e, function() { try { var e = r.b.auth().ea() } catch (t) { e = null } return e }, o, ur(ar), i)
                    }

                    function wh(t, e, n, i) {
                        t: {
                            n = Array.prototype.slice.call(n);
                            for (var r = 0, o = !1, a = 0; a < e.length; a++)
                                if (e[a].optional) o = !0;
                                else {
                                    if (o) throw new Vi("internal-error", "Argument validator encountered a required argument after an optional argument.");
                                    r++
                                }
                            if (o = e.length, n.length < r || o < n.length) i = "Expected " + (r == o ? 1 == r ? "1 argument" : r + " arguments" : r + "-" + o + " arguments") + " but got " + n.length + ".";
                            else {
                                for (r = 0; r < n.length; r++)
                                    if (o = e[r].optional && void 0 === n[r], !e[r].M(n[r]) && !o) {
                                        if (e = e[r], r < 0 || r >= Ih.length) throw new Vi("internal-error", "Argument validator received an unsupported number of arguments.");
                                        n = Ih[r], i = (i ? "" : n + " argument ") + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.K + ".";
                                        break t
                                    }
                                i = null
                            }
                        }
                        if (i) throw new Vi("argument-error", t + " failed: " + i)
                    }(t = lh.prototype).za = function() { var e = this; return this.f ? this.f : this.f = gh(this, wt().then(function() { if (ci() && !$n()) return Jn(); throw new Vi("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.") }).then(function() { return e.o.g(e.v()) }).then(function(t) { return e.g = t, ns(e.u, qa, {}) }).then(function(t) { e.a[ph] = t.recaptchaSiteKey }).s(function(t) { throw e.f = null, t })) }, t.render = function() {
                        bh(this);
                        var n = this;
                        return gh(this, this.za().then(function() {
                            if (null === n.c) {
                                var t = n.m;
                                if (!n.i) {
                                    var e = Pn(t);
                                    t = Cn("DIV"), e.appendChild(t)
                                }
                                n.c = n.g.render(t, n.a)
                            }
                            return n.c
                        }))
                    }, t.verify = function() {
                        bh(this);
                        var r = this;
                        return gh(this, this.render().then(function(e) {
                            return new dt(function(n) {
                                var t = r.g.getResponse(e);
                                if (t) n(t);
                                else {
                                    var i = function(t) {
                                        var e;
                                        t && (e = i, M(r.l, function(t) { return t == e }), n(t))
                                    };
                                    r.l.push(i), r.i && r.g.execute(r.c)
                                }
                            })
                        }))
                    }, t.reset = function() { bh(this), null !== this.c && this.g.reset(this.c) }, t.clear = function() { bh(this), this.D = !0, this.o.c(); for (var t = 0; t < this.h.length; t++) this.h[t].cancel("RecaptchaVerifier instance has been destroyed."); if (!this.i) { t = Pn(this.m); for (var e; e = t.firstChild;) t.removeChild(e) } }, y(yh, lh);
                    var Ih = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

                    function Th(t, e) { return { name: t || "", K: "a valid string", optional: !!e, M: c } }

                    function Eh(t, e) { return { name: t || "", K: "a boolean", optional: !!e, M: n } }

                    function Ah(t, e) { return { name: t || "", K: "a valid object", optional: !!e, M: p } }

                    function kh(t, e) { return { name: t || "", K: "a function", optional: !!e, M: a } }

                    function Sh(t, e) { return { name: t || "", K: "null", optional: !!e, M: i } }

                    function Nh(n) { return { name: n ? n + "Credential" : "credential", K: n ? "a valid " + n + " credential" : "a valid credential", optional: !1, M: function(t) { if (!t) return !1; var e = !n || t.providerId === n; return !(!t.la || !e) } } }

                    function _h() { return { name: "applicationVerifier", K: "an implementation of firebase.auth.ApplicationVerifier", optional: !1, M: function(t) { return !!(t && c(t.type) && a(t.verify)) } } }

                    function Oh(e, n, t, i) { return { name: t || "", K: e.K + " or " + n.K, optional: !!i, M: function(t) { return e.M(t) || n.M(t) } } }

                    function Ph(t, e) {
                        for (var n in e) {
                            var i = e[n].name;
                            t[i] = Ch(i, t[n], e[n].j)
                        }
                    }

                    function Rh(t, e) {
                        for (var n in e) {
                            var i = e[n].name;
                            i !== n && Object.defineProperty(t, i, { get: g(function(t) { return this[t] }, n), set: g(function(t, e, n, i) { wh(t, [n], [i], !0), this[e] = i }, i, n, e[n].tb), enumerable: !0 })
                        }
                    }

                    function Dh(t, e, n, i) { t[e] = Ch(e, n, i) }

                    function Ch(t, e, n) {
                        function i() { var t = Array.prototype.slice.call(arguments); return wh(a, n, t), e.apply(this, t) }
                        if (!n) return e;
                        var r, o, a = (o = (o = t).split("."))[o.length - 1];
                        for (r in e) i[r] = e[r];
                        for (r in e.prototype) i.prototype[r] = e.prototype[r];
                        return i
                    }
                    Ph(Kc.prototype, { Wa: { name: "applyActionCode", j: [Th("code")] }, Ja: { name: "checkActionCode", j: [Th("code")] }, Za: { name: "confirmPasswordReset", j: [Th("code"), Th("newPassword")] }, xb: { name: "createUserWithEmailAndPassword", j: [Th("email"), Th("password")] }, Wb: { name: "createUserAndRetrieveDataWithEmailAndPassword", j: [Th("email"), Th("password")] }, Zb: { name: "fetchProvidersForEmail", j: [Th("email")] }, $b: { name: "fetchSignInMethodsForEmail", j: [Th("email")] }, fa: { name: "getRedirectResult", j: [] }, oc: { name: "isSignInWithEmailLink", j: [Th("emailLink")] }, uc: { name: "onAuthStateChanged", j: [Oh(Ah(), kh(), "nextOrObserver"), kh("opt_error", !0), kh("opt_completed", !0)] }, vc: { name: "onIdTokenChanged", j: [Oh(Ah(), kh(), "nextOrObserver"), kh("opt_error", !0), kh("opt_completed", !0)] }, kb: { name: "sendPasswordResetEmail", j: [Th("email"), Oh(Ah("opt_actionCodeSettings", !0), Sh(null, !0), "opt_actionCodeSettings", !0)] }, lb: { name: "sendSignInLinkToEmail", j: [Th("email"), Ah("actionCodeSettings")] }, mb: { name: "setPersistence", j: [Th("persistence")] }, Pa: { name: "signInAndRetrieveDataWithCredential", j: [Nh()] }, Qa: { name: "signInAnonymously", j: [] }, Gc: { name: "signInAnonymouslyAndRetrieveData", j: [] }, Hc: { name: "signInWithCredential", j: [Nh()] }, Nb: { name: "signInWithCustomToken", j: [Th("token")] }, Ec: { name: "signInAndRetrieveDataWithCustomToken", j: [Th("token")] }, Ob: { name: "signInWithEmailAndPassword", j: [Th("email"), Th("password")] }, Ic: { name: "signInWithEmailLink", j: [Th("email"), Th("emailLink", !0)] }, Fc: { name: "signInAndRetrieveDataWithEmailAndPassword", j: [Th("email"), Th("password")] }, Jc: { name: "signInWithPhoneNumber", j: [Th("phoneNumber"), _h()] }, Kc: { name: "signInWithPopup", j: [{ name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } }] }, Lc: { name: "signInWithRedirect", j: [{ name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } }] }, Qc: { name: "updateCurrentUser", j: [Oh({ name: "user", K: "an instance of Firebase User", optional: !1, M: function(t) { return !!(t && t instanceof ec) } }, Sh(), "user")] }, nb: { name: "signOut", j: [] }, toJSON: { name: "toJSON", j: [Th(null, !0)] }, Sc: { name: "useDeviceLanguage", j: [] }, Tc: { name: "verifyPasswordResetCode", j: [Th("code")] } }), Rh(Kc.prototype, { lc: { name: "languageCode", tb: Oh(Th(), Sh(), "languageCode") } }), (Kc.Persistence = Ys).LOCAL = "local", Kc.Persistence.SESSION = "session", Kc.Persistence.NONE = "none", Ph(ec.prototype, { delete: { name: "delete", j: [] }, dc: { name: "getIdTokenResult", j: [Eh("opt_forceRefresh", !0)] }, F: { name: "getIdToken", j: [Eh("opt_forceRefresh", !0)] }, eb: { name: "linkAndRetrieveDataWithCredential", j: [Nh()] }, pc: { name: "linkWithCredential", j: [Nh()] }, qc: { name: "linkWithPhoneNumber", j: [Th("phoneNumber"), _h()] }, rc: { name: "linkWithPopup", j: [{ name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } }] }, sc: { name: "linkWithRedirect", j: [{ name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } }] }, gb: { name: "reauthenticateAndRetrieveDataWithCredential", j: [Nh()] }, yc: { name: "reauthenticateWithCredential", j: [Nh()] }, zc: { name: "reauthenticateWithPhoneNumber", j: [Th("phoneNumber"), _h()] }, Ac: { name: "reauthenticateWithPopup", j: [{ name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } }] }, Bc: { name: "reauthenticateWithRedirect", j: [{ name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } }] }, reload: { name: "reload", j: [] }, jb: { name: "sendEmailVerification", j: [Oh(Ah("opt_actionCodeSettings", !0), Sh(null, !0), "opt_actionCodeSettings", !0)] }, toJSON: { name: "toJSON", j: [Th(null, !0)] }, Pc: { name: "unlink", j: [Th("provider")] }, pb: { name: "updateEmail", j: [Th("email")] }, qb: { name: "updatePassword", j: [Th("password")] }, Rc: { name: "updatePhoneNumber", j: [Nh("phone")] }, rb: { name: "updateProfile", j: [Ah("profile")] } }), Ph(Qc.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } }), Ph(Zc.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } }), Ph(dt.prototype, { ia: { name: "finally" }, s: { name: "catch" }, then: { name: "then" } }), Rh(qu.prototype, { appVerificationDisabled: { name: "appVerificationDisabledForTesting", tb: Eh("appVerificationDisabledForTesting") } }), Ph(Hu.prototype, { confirm: { name: "confirm", j: [Th("verificationCode")] } }), Dh(Fr, "credential", function(t, e) { return new Kr(t, e) }, [Th("email"), Th("password")]), Ph(Dr.prototype, { ua: { name: "addScope", j: [Th("scope")] }, Da: { name: "setCustomParameters", j: [Ah("customOAuthParameters")] } }), Dh(Dr, "credential", Cr, [Oh(Th(), Ah(), "token")]), Dh(Fr, "credentialWithLink", qr, [Th("email"), Th("emailLink")]), Ph(Lr.prototype, { ua: { name: "addScope", j: [Th("scope")] }, Da: { name: "setCustomParameters", j: [Ah("customOAuthParameters")] } }), Dh(Lr, "credential", xr, [Oh(Th(), Ah(), "token")]), Ph(Mr.prototype, { ua: { name: "addScope", j: [Th("scope")] }, Da: { name: "setCustomParameters", j: [Ah("customOAuthParameters")] } }), Dh(Mr, "credential", jr, [Oh(Th(), Oh(Ah(), Sh()), "idToken"), Oh(Th(), Sh(), "accessToken", !0)]), Ph(Ur.prototype, { Da: { name: "setCustomParameters", j: [Ah("customOAuthParameters")] } }), Dh(Ur, "credential", Vr, [Oh(Th(), Ah(), "token"), Th("secret", !0)]), Ph(Rr.prototype, { ua: { name: "addScope", j: [Th("scope")] }, credential: { name: "credential", j: [Oh(Th(), Sh(), "idToken", !0), Oh(Th(), Sh(), "accessToken", !0), Oh(Th(), Sh(), "nonce", !0)] }, Da: { name: "setCustomParameters", j: [Ah("customOAuthParameters")] } }), Dh(Gr, "credential", Xr, [Th("verificationId"), Th("verificationCode")]), Ph(Gr.prototype, { Ua: { name: "verifyPhoneNumber", j: [Th("phoneNumber"), _h()] } }), Ph(Vi.prototype, { toJSON: { name: "toJSON", j: [Th(null, !0)] } }), Ph(no.prototype, { toJSON: { name: "toJSON", j: [Th(null, !0)] } }), Ph(eo.prototype, { toJSON: { name: "toJSON", j: [Th(null, !0)] } }), Ph(yh.prototype, { clear: { name: "clear", j: [] }, render: { name: "render", j: [] }, verify: { name: "verify", j: [] } }),
                        function() {
                            if (void 0 === Lh || !Lh.INTERNAL || !Lh.INTERNAL.registerService) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
                            var t = { Auth: Kc, Error: Vi };
                            Dh(t, "EmailAuthProvider", Fr, []), Dh(t, "FacebookAuthProvider", Dr, []), Dh(t, "GithubAuthProvider", Lr, []), Dh(t, "GoogleAuthProvider", Mr, []), Dh(t, "TwitterAuthProvider", Ur, []), Dh(t, "OAuthProvider", Rr, [Th("providerId")]), Dh(t, "SAMLAuthProvider", Pr, [Th("providerId")]), Dh(t, "PhoneAuthProvider", Gr, [{ name: "auth", K: "an instance of Firebase Auth", optional: !0, M: function(t) { return !!(t && t instanceof Kc) } }]), Dh(t, "RecaptchaVerifier", yh, [Oh(Th(), { name: "", K: "an HTML element", optional: !1, M: function(t) { return !!(t && t instanceof Element) } }, "recaptchaContainer"), Ah("recaptchaParameters", !0), { name: "app", K: "an instance of Firebase App", optional: !0, M: function(t) { return !!(t && t instanceof Lh.app.App) } }]), Lh.INTERNAL.registerService("auth", function(t, e) { return e({ INTERNAL: { getUid: m((t = new Kc(t)).getUid, t), getToken: m(t.cc, t), addAuthTokenListener: m(t.Vb, t), removeAuthTokenListener: m(t.Cc, t) } }), t }, t, function(t, e) { if ("create" === t) try { e.auth() } catch (t) {} }), Lh.INTERNAL.extendNamespace({ User: ec })
                        }()
                }.apply("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }).apply(this, arguments)
    } catch (t) { throw console.error(t), new Error("Cannot instantiate firebase-auth - be sure to load firebase-app.js first.") }
});
//# sourceMappingURL=firebase-auth.js.map