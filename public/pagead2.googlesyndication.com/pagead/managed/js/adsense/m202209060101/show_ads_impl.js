(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var q, ba;

    function ca(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ea = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function fa(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ha = fa(this),
        ia = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        r = {},
        ja = {};

    function t(a, b) {
        var c = ja[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function w(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in r ? f = r : f = ha;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ia && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ea(r, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ja[d] && (a = 1E9 * Math.random() >>> 0, ja[d] = ia ? ha.Symbol(d) : "$jscp$" + a + "$" + d), ea(f, ja[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    w("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.j = f;
            ea(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.j
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    w("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, r.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ha[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ea(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ka(ca(this))
                }
            })
        }
        return a
    }, "es6");

    function ka(a) {
        a = {
            next: a
        };
        a[t(r.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function x(a) {
        return a.raw = a
    }

    function y(a) {
        var b = "undefined" != typeof r.Symbol && t(r.Symbol, "iterator") && a[t(r.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ca(a)
        }
    }

    function la(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    }

    function ma(a) {
        return a instanceof Array ? a : la(y(a))
    }

    function na(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var oa = ia && "function" == typeof t(Object, "assign") ? t(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) na(d, e) && (a[e] = d[e])
        }
        return a
    };
    w("Object.assign", function(a) {
        return a || oa
    }, "es6");
    var pa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        qa;
    if (ia && "function" == typeof Object.setPrototypeOf) qa = Object.setPrototypeOf;
    else {
        var ra;
        a: {
            var sa = {
                    a: !0
                },
                ta = {};
            try {
                ta.__proto__ = sa;
                ra = ta.a;
                break a
            } catch (a) {}
            ra = !1
        }
        qa = ra ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ua = qa;

    function z(a, b) {
        a.prototype = pa(b.prototype);
        a.prototype.constructor = a;
        if (ua) ua(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.cg = b.prototype
    }

    function wa() {
        this.C = !1;
        this.l = null;
        this.B = void 0;
        this.j = 1;
        this.H = this.D = 0;
        this.A = null
    }

    function xa(a) {
        if (a.C) throw new TypeError("Generator is already running");
        a.C = !0
    }
    wa.prototype.F = function(a) {
        this.B = a
    };

    function ya(a, b) {
        a.A = {
            exception: b,
            xf: !0
        };
        a.j = a.D || a.H
    }
    wa.prototype.return = function(a) {
        this.A = {
            return: a
        };
        this.j = this.H
    };

    function za(a, b, c) {
        a.j = c;
        return {
            value: b
        }
    }

    function Aa(a) {
        a.j = 3;
        a.D = 0
    }

    function Ba(a) {
        a.D = 0;
        var b = a.A.exception;
        a.A = null;
        return b
    }

    function Ca(a) {
        this.j = new wa;
        this.l = a
    }

    function Da(a, b) {
        xa(a.j);
        var c = a.j.l;
        if (c) return Ea(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return Fa(a)
    }

    function Ea(a, b, c, d) {
        try {
            var e = b.call(a.j.l, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.C = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.l = null, ya(a.j, g), Fa(a)
        }
        a.j.l = null;
        d.call(a.j, f);
        return Fa(a)
    }

    function Fa(a) {
        for (; a.j.j;) try {
            var b = a.l(a.j);
            if (b) return a.j.C = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.B = void 0, ya(a.j, c)
        }
        a.j.C = !1;
        if (a.j.A) {
            b = a.j.A;
            a.j.A = null;
            if (b.xf) throw b.exception;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function Ha(a) {
        this.next = function(b) {
            xa(a.j);
            a.j.l ? b = Ea(a, a.j.l.next, b, a.j.F) : (a.j.F(b), b = Fa(a));
            return b
        };
        this.throw = function(b) {
            xa(a.j);
            a.j.l ? b = Ea(a, a.j.l["throw"], b, a.j.F) : (ya(a.j, b), b = Fa(a));
            return b
        };
        this.return = function(b) {
            return Da(a, b)
        };
        this[t(r.Symbol, "iterator")] = function() {
            return this
        }
    }

    function Ia(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new r.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : r.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    }

    function Ja(a) {
        return Ia(new Ha(new Ca(a)))
    }

    function Ka() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    w("Promise", function(a) {
        function b(g) {
            this.j = 0;
            this.A = void 0;
            this.l = [];
            this.F = !1;
            var h = this.B();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.j = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.l = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.A(function() {
                    h.C()
                })
            }
            this.j.push(g)
        };
        var e = ha.setTimeout;
        c.prototype.A = function(g) {
            e(g, 0)
        };
        c.prototype.C = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.B(l)
                    }
                }
            }
            this.j = null
        };
        c.prototype.B = function(g) {
            this.A(function() {
                throw g;
            })
        };
        b.prototype.B = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.M),
                reject: g(this.C)
            }
        };
        b.prototype.M = function(g) {
            if (g === this) this.C(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.P(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.L(g) : this.D(g)
            }
        };
        b.prototype.L = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.C(k);
                return
            }
            "function" == typeof h ? this.U(h, g) : this.D(g)
        };
        b.prototype.C = function(g) {
            this.H(2, g)
        };
        b.prototype.D = function(g) {
            this.H(1, g)
        };
        b.prototype.H = function(g, h) {
            if (0 != this.j) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.j);
            this.j = g;
            this.A = h;
            2 === this.j && this.O();
            this.I()
        };
        b.prototype.O = function() {
            var g = this;
            e(function() {
                if (g.K()) {
                    var h = ha.console;
                    "undefined" !== typeof h && h.error(g.A)
                }
            }, 1)
        };
        b.prototype.K =
            function() {
                if (this.F) return !1;
                var g = ha.CustomEvent,
                    h = ha.Event,
                    k = ha.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = ha.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.A;
                return k(g)
            };
        b.prototype.I = function() {
            if (null != this.l) {
                for (var g = 0; g < this.l.length; ++g) f.l(this.l[g]);
                this.l = null
            }
        };
        var f = new c;
        b.prototype.P = function(g) {
            var h = this.B();
            g.Rb(h.resolve, h.reject)
        };
        b.prototype.U = function(g, h) {
            var k = this.B();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(p, u) {
                return "function" == typeof p ? function(v) {
                    try {
                        l(p(v))
                    } catch (A) {
                        m(A)
                    }
                } : u
            }
            var l, m, n = new b(function(p, u) {
                l = p;
                m = u
            });
            this.Rb(k(g, l), k(h, m));
            return n
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.Rb = function(g, h) {
            function k() {
                switch (l.j) {
                    case 1:
                        g(l.A);
                        break;
                    case 2:
                        h(l.A);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.j);
                }
            }
            var l = this;
            null == this.l ? f.l(k) : this.l.push(k);
            this.F = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = y(g), m = l.next(); !m.done; m = l.next()) d(m.value).Rb(h, k)
            })
        };
        b.all = function(g) {
            var h = y(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function n(v) {
                    return function(A) {
                        p[v] = A;
                        u--;
                        0 == u && l(p)
                    }
                }
                var p = [],
                    u = 0;
                do p.push(void 0), u++, d(k.value).Rb(n(p.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");

    function La(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                i: e,
                pe: f
            }
        }
        return {
            i: -1,
            pe: void 0
        }
    }
    w("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return La(this, b, c).pe
        }
    }, "es6");
    w("WeakMap", function(a) {
        function b(g) {
            this.j = (f += Math.random() + 1).toString();
            if (g) {
                g = y(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!na(g, e)) {
                var k = new c;
                ea(g, e, {
                    value: k
                })
            }
            if (!na(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.j] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && na(g, e) ? g[e][this.j] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && na(g, e) && na(g[e], this.j)
        };
        b.prototype.delete = function(g) {
            return d(g) && na(g, e) && na(g[e], this.j) ? delete g[e][this.j] : !1
        };
        return b
    }, "es6");
    w("Map", function(a) {
        function b() {
            var h = {};
            return h.Ba = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.j;
            return ka(function() {
                if (l) {
                    for (; l.head != h.j;) l = l.Ba;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.l[l];
            if (m && na(h.l, l))
                for (h = 0; h < m.length; h++) {
                    var n = m[h];
                    if (k !== k && n.key !== n.key || k === n.key) return {
                        id: l,
                        list: m,
                        index: h,
                        ga: n
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                ga: void 0
            }
        }

        function e(h) {
            this.l = {};
            this.j = b();
            this.size = 0;
            if (h) {
                h = y(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(y([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = t(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done ||
                        4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var f = new r.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.l[l.id] = []);
            l.ga ? l.ga.value = k : (l.ga = {
                next: this.j,
                Ba: this.j.Ba,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.ga), this.j.Ba.next = l.ga, this.j.Ba = l.ga, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.ga && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.l[h.id], h.ga.Ba.next = h.ga.next, h.ga.next.Ba =
                h.ga.Ba, h.ga.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.l = {};
            this.j = this.j.Ba = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).ga
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).ga) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = t(this,
                    "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        e.prototype[t(r.Symbol, "iterator")] = t(e.prototype, "entries");
        var g = 0;
        return e
    }, "es6");
    w("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    w("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return t(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");

    function Ma(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[t(r.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    w("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ma(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    w("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ma(this, function(b) {
                return b
            })
        }
    }, "es6");
    w("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    w("Set", function(a) {
        function b(c) {
            this.j = new r.Map;
            if (c) {
                c = y(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        }
        if (function() {
                if (!a || "function" != typeof a || !t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(y([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = t(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] ==
                        c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return t(this.j, "entries").call(this.j)
        };
        b.prototype.values = function() {
            return t(this.j, "values").call(this.j)
        };
        b.prototype.keys = t(b.prototype, "values");
        b.prototype[t(r.Symbol, "iterator")] = t(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    w("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof r.Symbol && t(r.Symbol, "iterator") && b[t(r.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    w("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) na(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");

    function Na(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    w("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Na(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    w("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Na(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    w("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Na(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    w("globalThis", function(a) {
        return a || ha
    }, "es_2020");
    w("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return La(this, b, c).i
        }
    }, "es6");
    w("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ma(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    w("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    w("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || t(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    w("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Na(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    w("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    }, "es6");

    function Oa(a) {
        return a ? a : t(Array.prototype, "fill")
    }
    w("Int8Array.prototype.fill", Oa, "es6");
    w("Uint8Array.prototype.fill", Oa, "es6");
    w("Uint8ClampedArray.prototype.fill", Oa, "es6");
    w("Int16Array.prototype.fill", Oa, "es6");
    w("Uint16Array.prototype.fill", Oa, "es6");
    w("Int32Array.prototype.fill", Oa, "es6");
    w("Uint32Array.prototype.fill", Oa, "es6");
    w("Float32Array.prototype.fill", Oa, "es6");
    w("Float64Array.prototype.fill", Oa, "es6");
    w("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Na(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? t(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    w("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) na(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    w("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        z(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    w("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : t(Array, "from").call(Array, b);
            return r.Promise.all(b.map(function(c) {
                return r.Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new r.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    var B = this || self;

    function Pa(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Qa(a) {
        var b = Pa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Ra(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Sa(a) {
        return Object.prototype.hasOwnProperty.call(a, Ta) && a[Ta] || (a[Ta] = ++Ua)
    }
    var Ta = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ua = 0;

    function Va(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Wa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Xa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Xa = Va : Xa = Wa;
        return Xa.apply(null, arguments)
    }

    function Ya(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Za() {
        return Date.now()
    }

    function bb(a, b) {
        a = a.split(".");
        var c = B;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function cb(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.cg = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.bk = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function db(a) {
        return a
    };
    var eb = {
        gj: 0,
        fj: 1,
        ej: 2
    };

    function fb(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, fb);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    cb(fb, Error);
    fb.prototype.name = "CustomError";
    var gb;

    function ib(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        fb.call(this, c + a[d])
    }
    cb(ib, fb);
    ib.prototype.name = "AssertionError";

    function jb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function kb(a) {
        if (!lb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(mb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(nb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ob, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(pb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(qb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(rb, "&#0;"));
        return a
    }
    var mb = /&/g,
        nb = /</g,
        ob = />/g,
        pb = /"/g,
        qb = /'/g,
        rb = /\x00/g,
        lb = /[\x00&<>"']/;

    function sb(a, b) {
        return -1 != a.indexOf(b)
    }

    function tb(a, b) {
        var c = 0;
        a = jb(String(a)).split(".");
        b = jb(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = ub(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || ub(0 == f[2].length, 0 == g[2].length) || ub(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function ub(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function vb() {
        var a = B.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function C(a) {
        return sb(vb(), a)
    };

    function wb() {
        return C("Opera")
    }

    function xb() {
        return C("Trident") || C("MSIE")
    }

    function yb() {
        return C("Firefox") || C("FxiOS")
    }

    function Ab() {
        return C("Safari") && !(Bb() || C("Coast") || wb() || C("Edge") || C("Edg/") || C("OPR") || yb() || C("Silk") || C("Android"))
    }

    function Bb() {
        return (C("Chrome") || C("CriOS")) && !C("Edge") || C("Silk")
    }

    function Cb() {
        return C("Android") && !(Bb() || yb() || wb() || C("Silk"))
    }

    function Db(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[t(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    }

    function Eb() {
        var a = vb();
        if (xb()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        for (var d; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Db(b);
        return wb() ? a(["Version", "Opera"]) :
            C("Edge") ? a(["Edge"]) : C("Edg/") ? a(["Edg"]) : C("Silk") ? a(["Silk"]) : Bb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Fb(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Gb(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Hb(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ib(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Jb(a, b, c) {
        var d = c;
        Gb(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Kb(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Lb(a, b) {
        return 0 <= Fb(a, b)
    }

    function Mb(a, b) {
        b = Fb(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Nb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ob(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Pb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Qb(a, b) {
        if (!Qa(a) || !Qa(b) || a.length != b.length) return !1;
        for (var c = a.length, d = Rb, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function Rb(a, b) {
        return a === b
    }

    function Sb(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = Sb.apply(null, Pb(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    }

    function Tb(a, b) {
        b = b || Math.random;
        for (var c = a.length - 1; 0 < c; c--) {
            var d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function Ub(a) {
        Ub[" "](a);
        return a
    }
    Ub[" "] = function() {};

    function Vb(a, b) {
        try {
            return Ub(a[b]), !0
        } catch (c) {}
        return !1
    }

    function Wb(a, b, c, d) {
        d = d ? d(b) : b;
        return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    };
    var Xb = wb(),
        Yb = xb(),
        Zb = C("Edge"),
        $b = C("Gecko") && !(sb(vb().toLowerCase(), "webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        ac = sb(vb().toLowerCase(), "webkit") && !C("Edge");

    function bc() {
        var a = B.document;
        return a ? a.documentMode : void 0
    }
    var cc;
    a: {
        var ec = "",
            fc = function() {
                var a = vb();
                if ($b) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Zb) return /Edge\/([\d\.]+)/.exec(a);
                if (Yb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (ac) return /WebKit\/(\S+)/.exec(a);
                if (Xb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();fc && (ec = fc ? fc[1] : "");
        if (Yb) {
            var gc = bc();
            if (null != gc && gc > parseFloat(ec)) {
                cc = String(gc);
                break a
            }
        }
        cc = ec
    }
    var hc = cc,
        ic = {};

    function jc(a) {
        return Wb(ic, a, function() {
            return 0 <= tb(hc, a)
        })
    }
    var kc;
    if (B.document && Yb) {
        var lc = bc();
        kc = lc ? lc : parseInt(hc, 10) || void 0
    } else kc = void 0;
    var mc = kc;
    Cb();
    Bb();
    Ab();
    var nc = {},
        oc = null;

    function pc(a, b) {
        void 0 === b && (b = 0);
        qc();
        b = nc[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function rc(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return pc(b, 3)
    }

    function sc(a) {
        var b = [];
        tc(a, function(c) {
            b.push(c)
        });
        return b
    }

    function uc(a) {
        var b = a.length,
            c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : sb("=.", a[b - 1]) && (c = sb("=.", a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c),
            e = 0;
        tc(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }

    function tc(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = oc[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        qc();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function qc() {
        if (!oc) {
            oc = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                nc[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === oc[f] && (oc[f] = e)
                }
            }
        }
    };
    var wc = "undefined" !== typeof Uint8Array;

    function xc(a) {
        return wc && null != a && a instanceof Uint8Array
    }
    var yc, zc = {};
    var Ac;

    function Bc(a) {
        if (a !== zc) throw Error("illegal external caller");
    }

    function Cc(a, b) {
        Bc(b);
        this.R = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }

    function Dc() {
        return Ac || (Ac = new Cc(null, zc))
    }
    Cc.prototype.isEmpty = function() {
        return null == this.R
    };
    var Ec = "function" === typeof r.Symbol && "symbol" === typeof(0, r.Symbol)() ? (0, r.Symbol)(void 0) : void 0;

    function Fc(a, b) {
        Object.isFrozen(a) || (Ec ? a[Ec] |= b : void 0 !== a.xa ? a.xa |= b : Object.defineProperties(a, {
            xa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function Gc(a, b) {
        Object.isExtensible(a) && (Ec ? a[Ec] && (a[Ec] &= ~b) : void 0 !== a.xa && (a.xa &= ~b))
    }

    function Hc(a) {
        var b;
        Ec ? b = a[Ec] : b = a.xa;
        return null == b ? 0 : b
    }

    function Ic(a, b) {
        Ec ? a[Ec] = b : void 0 !== a.xa ? a.xa = b : Object.defineProperties(a, {
            xa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function Jc(a) {
        Fc(a, 1);
        return a
    }

    function Kc(a) {
        return a ? !!(Hc(a) & 2) : !1
    }

    function Lc(a) {
        Fc(a, 16);
        return a
    }

    function Mc(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        Gc(a, 16)
    }

    function Nc(a, b) {
        b ? Fc(a, 8) : Gc(a, 8)
    }

    function Oc(a, b) {
        Ic(b, (Hc(a) | 0) & -51)
    };
    var Pc = {};

    function Qc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var Rc;

    function Sc(a, b) {
        if (null != a)
            if ("string" === typeof a) a = a ? new Cc(a, zc) : Dc();
            else if (a.constructor !== Cc)
            if (xc(a)) a = a.length ? new Cc(new Uint8Array(a), zc) : Dc();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }
    var Tc = Object.freeze(Jc([]));

    function Uc(a) {
        if (Kc(a.N)) throw Error("Cannot mutate an immutable Message");
    }
    var Vc = "undefined" != typeof r.Symbol && "undefined" != typeof r.Symbol.hasInstance;

    function Xc(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function Yc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (xc(a)) return pc(a);
                    if (a instanceof Cc) {
                        var b = a.R;
                        return null == b ? "" : "string" === typeof b ? b : a.R = pc(b)
                    }
                }
        }
        return a
    };

    function Zc(a, b, c) {
        if (null != a) {
            if (Array.isArray(a)) a = $c(a, b, c);
            else if (Qc(a)) {
                var d = {},
                    e;
                for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (d[e] = Zc(a[e], b, c));
                a = d
            } else a = b(a);
            return a
        }
    }

    function $c(a, b, c) {
        var d = Array.prototype.slice.call(a);
        c(a, d);
        for (a = 0; a < d.length; a++) d[a] = Zc(d[a], b, c);
        return d
    }

    function ad(a) {
        if (a.Tc === Pc) return a.toJSON();
        a = Yc(a);
        return Array.isArray(a) ? $c(a, ad, bd) : a
    }

    function cd(a) {
        if (!a) return a;
        if ("object" === typeof a) {
            if (xc(a)) return new Uint8Array(a);
            if (a.Tc === Pc) return dd(a)
        }
        return a
    }

    function bd() {};

    function ed(a) {
        return a.l || (a.l = a.N[a.C + a.B] = {})
    }

    function D(a, b, c) {
        return -1 === b ? null : b >= a.C ? a.l ? a.l[b] : void 0 : (void 0 === c ? 0 : c) && a.l && (c = a.l[b], null != c) ? c : a.N[b + a.B]
    }

    function E(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        (void 0 === e ? 0 : e) || Uc(a);
        a.F && (a.F = void 0);
        if (b >= a.C || d) return ed(a)[b] = c, a;
        void 0 !== a.l && a.C >= a.N.length ? (d = a.N.length - 1, e = b + a.B, e >= d ? (a.N[d] = void 0, a.N[e] = c, a.N.push(a.l)) : a.N[e] = c) : a.N[b + a.B] = c;
        void 0 !== a.l && b in a.l && delete a.l[b];
        return a
    }

    function fd(a, b) {
        return null != D(a, b, !1)
    }

    function gd(a, b, c) {
        return void 0 !== hd(a, b, c, !1)
    }

    function id(a, b, c, d) {
        var e = D(a, b, d);
        Array.isArray(e) ? e && Hc(e) & 1 || Jc(e) : e = Tc;
        if (Kc(a.N)) c & 1 || (Fc(e, 2), Object.freeze(e));
        else if (e === Tc || Kc(e)) e = Jc(Array.prototype.slice.call(e)), E(a, b, e, d);
        return e
    }

    function jd(a, b, c) {
        return id(a, b, 0, void 0 === c ? !1 : c)
    }

    function kd(a, b) {
        a = D(a, b);
        return null == a ? a : +a
    }

    function ld(a, b) {
        a = D(a, b);
        return null == a ? a : !!a
    }

    function md(a, b, c) {
        a = D(a, b);
        return null == a ? c : a
    }

    function nd(a, b, c) {
        a = ld(a, b);
        return null == a ? void 0 === c ? !1 : c : a
    }

    function od(a, b, c) {
        null == c ? c = Tc : Jc(c);
        return E(a, b, c)
    }

    function pd(a, b, c, d) {
        Uc(a);
        c !== d ? E(a, b, c) : E(a, b, void 0, !1);
        return a
    }

    function qd(a, b, c, d) {
        Uc(a);
        (c = rd(a, c)) && c !== b && null != d && E(a, c, void 0, !1);
        return E(a, b, d)
    }

    function rd(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != D(a, e) && (0 !== c && E(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function hd(a, b, c, d) {
        var e = D(a, c, d);
        var f = !1;
        var g = null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.Tc !== Pc ? f ? new b(e) : void 0 : e;
        g !== e && null != g && (E(a, c, g, d, !0), Fc(g.N, Hc(a.N) & -33));
        return g
    }

    function G(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = hd(a, b, c, d);
        if (null == b) return b;
        Kc(b.N) && !Kc(a.N) && (b = b.gd(), E(a, c, b, d));
        return b
    }

    function sd(a, b, c, d, e) {
        e = void 0 === e ? !0 : e;
        a.A || (a.A = {});
        var f = a.A[c];
        d = id(a, c, 2, d);
        var g = !!(Hc(a.N) & 16),
            h = Kc(d);
        h = Kc(a.N) || h;
        if (!f) {
            f = [];
            for (var k = h, l = 0; l < d.length; l++) {
                var m = d[l];
                k = k || Kc(m);
                var n = b,
                    p = g,
                    u = !1;
                u = void 0 === u ? !1 : u;
                p = void 0 === p ? !1 : p;
                m = Array.isArray(m) ? new n(p ? Lc(m) : m) : u ? new n : void 0;
                void 0 !== m && (f.push(m), h && Fc(m.N, 2))
            }
            a.A[c] = f;
            Nc(d, !k)
        }
        b = h || e;
        e = Kc(f);
        b && !e && (Object.isFrozen(f) && (a.A[c] = f = f.slice()), Fc(f, 2), Object.freeze(f));
        !b && e && (a.A[c] = f = f.slice());
        return f
    }

    function H(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        var e = Kc(a.N);
        b = sd(a, b, c, d, e);
        a = jd(a, c, d);
        if (!(c = e) && (c = a)) {
            if (!a) throw Error("cannot check mutability state of non-array");
            c = !(Hc(a) & 8)
        }
        if (c) {
            for (c = 0; c < b.length; c++)(d = b[c]) && Kc(d.N) && !e && (b[c] = b[c].gd(), a[c] = b[c].N);
            Nc(a, !0)
        }
        return b
    }

    function td(a, b, c) {
        Uc(a);
        null == c && (c = void 0);
        return E(a, b, c)
    }

    function ud(a, b, c, d) {
        Uc(a);
        null == d && (d = void 0);
        return qd(a, b, c, d)
    }

    function vd(a, b, c) {
        Uc(a);
        if (null != c) {
            var d = Jc([]);
            for (var e = !1, f = 0; f < c.length; f++) d[f] = c[f].N, e = e || Kc(d[f]);
            a.A || (a.A = {});
            a.A[b] = c;
            Nc(d, !e)
        } else a.A && (a.A[b] = void 0), d = Tc;
        return E(a, b, d)
    }

    function wd(a, b, c, d) {
        Uc(a);
        var e = sd(a, c, b, void 0, !1);
        c = null != d ? d : new c;
        a = id(a, b, 2);
        e.push(c);
        a.push(c.N);
        Kc(c.N) && Nc(a, !1)
    }

    function xd(a, b) {
        return md(a, b, "")
    }

    function yd(a, b, c, d) {
        c = rd(a, d) === c ? c : -1;
        return G(a, b, c)
    }

    function zd(a, b, c) {
        return pd(a, b, c, !1)
    }

    function Ad(a, b) {
        return pd(a, b, 1, 0)
    };

    function Bd(a, b, c) {
        a || (a = Cd);
        Cd = null;
        var d = this.constructor.j || 0,
            e = 0 < d,
            f = this.constructor.messageId;
        a ? Hc(a) & 16 && Fc(a, 32) : (a = f ? [f] : [], Fc(a, 48));
        e && 0 < a.length && Qc(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.B = (f ? 0 : -1) - d;
        this.A = void 0;
        this.N = a;
        a: {
            f = this.N.length;d = f - 1;
            if (f && (f = this.N[d], Qc(f))) {
                this.l = f;
                b = t(Object, "keys").call(Object, f);
                if (f = 0 < b.length) b: {
                    f = isNaN;a = b.length;
                    for (var g = "string" === typeof b ? b.split("") : b, h = 0; h < a; h++)
                        if (h in g && !f.call(void 0, g[h], h, b)) {
                            f = !1;
                            break b
                        }
                    f = !0
                }
                f ? this.C = Number.MAX_VALUE :
                    this.C = d - this.B;
                break a
            }
            void 0 !== b && -1 < b ? (this.C = Math.max(b, d + 1 - this.B), this.l = void 0) : this.C = Number.MAX_VALUE
        }
        if (!e && this.l && "g" in this.l) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = 0; e < c.length; e++) d = c[e], d < this.C ? (d += this.B, (b = this.N[d]) ? Array.isArray(b) && Jc(b) : this.N[d] = Tc) : (b = ed(this), (f = b[d]) ? Array.isArray(f) && Jc(f) : b[d] = Tc)
    }
    Bd.prototype.toJSON = function() {
        var a = this.N;
        return Rc ? a : $c(a, ad, bd)
    };

    function Ed(a) {
        Rc = !0;
        try {
            return JSON.stringify(a.toJSON(), Fd)
        } finally {
            Rc = !1
        }
    }

    function Gd(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        Cd = b = Lc(b);
        a = new a(b);
        Cd = null;
        return a
    }

    function dd(a) {
        var b = $c(a.N, cd, Oc);
        Lc(b);
        Cd = b;
        b = new a.constructor(b);
        Cd = null;
        Hd(b, a);
        return b
    }
    Bd.prototype.Tc = Pc;

    function Fd(a, b) {
        return Yc(b)
    }

    function Hd(a, b) {
        b.D && (a.D = b.D.slice());
        var c = b.A;
        if (c) {
            b = b.l;
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    if (e) {
                        var f = !(!b || !b[d]),
                            g = +d;
                        if (Array.isArray(e)) {
                            if (e.length)
                                for (f = H(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) Hd(f[g], e[g])
                        } else throw Error("unexpected object: type: " + Pa(e) + ": " + e);
                    }
                }
        }
    }
    var Cd;

    function Id(a, b, c, d, e, f) {
        (a = a.A && a.A[c]) ? (e = f.Gc ? Jc(a.slice()) : a, vd(b, c, e)) : (wc && d instanceof Uint8Array ? e = d.length ? new Cc(new Uint8Array(d), zc) : Dc() : (Array.isArray(d) && (e ? Fc(d, 2) : d && Hc(d) & 1 && f.Gc ? (e = Array.prototype.slice.call(d), Ic(e, (Hc(d) | 0) & -51), d = e) : Mc(d)), e = d), E(b, c, e))
    };

    function Jd() {
        Bd.apply(this, arguments)
    }
    z(Jd, Bd);
    Jd.prototype.gd = function() {
        return this
    };
    if (Vc) {
        var Kd = {};
        Object.defineProperties(Jd, (Kd[r.Symbol.hasInstance] = Xc(function() {
            throw Error(void 0);
        }), Kd))
    };

    function Ld(a) {
        return null !== a && void 0 !== a
    }
    var Md = void 0;

    function Nd(a, b) {
        var c = Md;
        Md = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function I() {
        Jd.apply(this, arguments)
    }
    z(I, Jd);
    I.prototype.gd = function() {
        if (Kc(this.N)) {
            var a = {
                Gc: !0
            };
            var b = Kc(this.N);
            if (b && !a.Gc) throw Error("copyRepeatedFields must be true for frozen messages");
            b || Mc(this.N);
            var c = new this.constructor;
            this.D && (c.D = this.D.slice());
            for (var d = this.N, e = 0; e < d.length; e++) {
                var f = d[e];
                if (e === d.length - 1 && Qc(f))
                    for (var g in f) {
                        if (Object.prototype.hasOwnProperty.call(f, g)) {
                            var h = +g;
                            t(Number, "isNaN").call(Number, h) ? ed(c)[g] = f[g] : Id(this, c, h, f[g], b, a)
                        }
                    } else Id(this, c, e - this.B, f, b, a)
            }
            c.F = this;
            a = c
        } else a = this;
        return a
    };
    if (Vc) {
        var Od = {};
        Object.defineProperties(I, (Od[r.Symbol.hasInstance] = Xc(Object[r.Symbol.hasInstance]), Od))
    };

    function Pd(a, b) {
        this.j = a === Qd && b || "";
        this.l = Rd
    }
    Pd.prototype.ra = !0;
    Pd.prototype.ma = function() {
        return this.j
    };

    function Sd(a) {
        return a instanceof Pd && a.constructor === Pd && a.l === Rd ? a.j : "type_error:Const"
    }

    function Td(a) {
        return new Pd(Qd, a)
    }
    var Rd = {},
        Qd = {};
    var Ud = Td("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Vd(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function Wd(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Xd(a) {
        var b = Yd;
        a: {
            for (var c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Zd(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function $d(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var ae = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function be(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < ae.length; f++) c = ae[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var ce = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
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
        wbr: !0
    };
    var de;

    function ee() {
        if (void 0 === de) {
            var a = null,
                b = B.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: db,
                        createScript: db,
                        createScriptURL: db
                    })
                } catch (c) {
                    B.console && B.console.error(c.message)
                }
                de = a
            } else de = a
        }
        return de
    };
    var fe = {};

    function ge(a, b) {
        this.j = b === fe ? a : "";
        this.ra = !0
    }
    ge.prototype.toString = function() {
        return this.j.toString()
    };
    ge.prototype.ma = function() {
        return this.j.toString()
    };

    function he(a) {
        return a instanceof ge && a.constructor === ge ? a.j : "type_error:SafeScript"
    };

    function ie(a, b) {
        this.j = b === je ? a : ""
    }
    ie.prototype.toString = function() {
        return this.j + ""
    };
    ie.prototype.ra = !0;
    ie.prototype.ma = function() {
        return this.j.toString()
    };

    function ke(a, b) {
        a = le.exec(me(a).toString());
        var c = a[3] || "";
        return ne(a[1] + oe("?", a[2] || "", b) + oe("#", c))
    }

    function me(a) {
        return a instanceof ie && a.constructor === ie ? a.j : "type_error:TrustedResourceUrl"
    }

    function pe(a, b) {
        var c = Sd(a);
        if (!qe.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(re, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof Pd ? Sd(d) : encodeURIComponent(String(d))
        });
        return ne(a)
    }
    var re = /%{(\w+)}/g,
        qe = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        le = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        je = {};

    function ne(a) {
        var b = ee();
        a = b ? b.createScriptURL(a) : a;
        return new ie(a, je)
    }

    function oe(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function te(a, b) {
        this.j = b === ue ? a : ""
    }
    te.prototype.toString = function() {
        return this.j.toString()
    };
    te.prototype.ra = !0;
    te.prototype.ma = function() {
        return this.j.toString()
    };

    function ve(a) {
        return a instanceof te && a.constructor === te ? a.j : "type_error:SafeUrl"
    }
    var we = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        xe = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function ye(a) {
        if (a instanceof te) return a;
        a = "object" == typeof a && a.ra ? a.ma() : String(a);
        xe.test(a) ? a = new te(a, ue) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(we) ? new te(a, ue) : null);
        return a
    }
    var ue = {},
        ze = new te("about:invalid#zClosurez", ue);
    var Ae = {};

    function Be(a, b) {
        this.j = b === Ae ? a : "";
        this.ra = !0
    }
    Be.prototype.ma = function() {
        return this.j
    };
    Be.prototype.toString = function() {
        return this.j.toString()
    };

    function Ce(a) {
        return a instanceof Be && a.constructor === Be ? a.j : "type_error:SafeStyle"
    }

    function De(a) {
        var b = "",
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
                var d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(Ee).join(" ") : Ee(d), b += c + ":" + d + ";")
            }
        return b ? new Be(b, Ae) : Fe
    }
    var Fe = new Be("", Ae);

    function Ee(a) {
        if (a instanceof te) return 'url("' + ve(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof Pd) a = Sd(a);
        else {
            a = String(a);
            var b = a.replace(Ge, "$1").replace(Ge, "$1").replace(He, "url");
            if (Ie.test(b)) {
                if (b = !Je.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Ke(a)
                }
                a = b ? Le(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new ib("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Ke(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    var Ie = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        He = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Ge = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Je = /\/\*/;

    function Le(a) {
        return a.replace(He, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                f = h;
                return k
            });
            b = (ye(d) || ze).ma();
            return c + f + b + f + e
        })
    };
    var Me = {};

    function Ne(a, b) {
        this.j = b === Me ? a : "";
        this.ra = !0
    }
    Ne.prototype.toString = function() {
        return this.j.toString()
    };
    Ne.prototype.ma = function() {
        return this.j
    };

    function Oe(a) {
        return a instanceof Ne && a.constructor === Ne ? a.j : "type_error:SafeStyleSheet"
    };
    var Pe = {};

    function Qe(a, b) {
        this.j = b === Pe ? a : "";
        this.ra = !0
    }
    Qe.prototype.ma = function() {
        return this.j.toString()
    };
    Qe.prototype.toString = function() {
        return this.j.toString()
    };

    function Re(a) {
        return a instanceof Qe && a.constructor === Qe ? a.j : "type_error:SafeHtml"
    }

    function Se(a) {
        return a instanceof Qe ? a : Te(kb("object" == typeof a && a.ra ? a.ma() : String(a)))
    }

    function Ue(a, b, c) {
        var d = String(a);
        if (!Ve.test(d)) throw Error("");
        if (d.toUpperCase() in We) throw Error("");
        return Xe(String(a), b, c)
    }

    function Ye(a) {
        function b(e) {
            Array.isArray(e) ? e.forEach(b) : (e = Se(e), d.push(Re(e).toString()))
        }
        var c = Se(Ze),
            d = [];
        a.forEach(b);
        return Te(d.join(Re(c).toString()))
    }

    function $e(a) {
        return Ye(Array.prototype.slice.call(arguments))
    }

    function Te(a) {
        var b = ee();
        a = b ? b.createHTML(a) : a;
        return new Qe(a, Pe)
    }

    function Xe(a, b, c) {
        var d = "";
        if (b)
            for (var e in b)
                if (Object.prototype.hasOwnProperty.call(b, e)) {
                    if (!Ve.test(e)) throw Error("");
                    var f = b[e];
                    if (null != f) {
                        var g = e;
                        if (f instanceof Pd) f = Sd(f);
                        else if ("style" == g.toLowerCase()) {
                            if (!Ra(f)) throw Error("");
                            f instanceof Be || (f = De(f));
                            f = Ce(f)
                        } else {
                            if (/^on/i.test(g)) throw Error("");
                            if (g.toLowerCase() in af)
                                if (f instanceof ie) f = me(f).toString();
                                else if (f instanceof te) f = ve(f);
                            else if ("string" === typeof f) f = (ye(f) || ze).ma();
                            else throw Error("");
                        }
                        f.ra && (f = f.ma());
                        g = g +
                            '="' + kb(String(f)) + '"';
                        d += " " + g
                    }
                }
        b = "<" + a + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === ce[a.toLowerCase()] ? b += ">" : (c = $e(c), b += ">" + Re(c).toString() + "</" + a + ">");
        return Te(b)
    }
    var Ve = /^[a-zA-Z0-9-]+$/,
        af = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        We = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        bf = Te("<!DOCTYPE html>"),
        Ze = new Qe(B.trustedTypes && B.trustedTypes.emptyHTML || "", Pe),
        cf = Te("<br>");
    var df;
    try {
        new URL("s://g"), df = !0
    } catch (a) {
        df = !1
    }
    var ef = df;

    function ff(a) {
        a: if (ef) {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        } else b: {
            b = document.createElement("a");
            try {
                b.href = a
            } catch (c) {
                b = void 0;
                break b
            }
            b = b.protocol;b = ":" === b || "" === b ? "https:" : b
        }
        if ("javascript:" !== b) return a
    };

    function gf(a) {
        var b = void 0 === b ? hf : b;
        a: {
            b = void 0 === b ? hf : b;
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof jf && d.yf("#")) {
                    b = new te("#", ue);
                    break a
                }
            }
            b = void 0
        }
        b = b || ze;
        b = b instanceof te ? ve(b) : ff(b);
        void 0 !== b && (a.href = b)
    };
    var kf = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function lf(a, b, c) {
        if (b instanceof ie) a.href = me(b).toString();
        else {
            if (-1 === kf.indexOf(c)) throw Error('TrustedResourceUrl href attribute required with rel="' + c + '"');
            b = b instanceof te ? ve(b) : ff(b);
            if (void 0 === b) return;
            a.href = b
        }
        a.rel = c
    };

    function mf(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function nf(a, b) {
        a.src = me(b);
        mf(a)
    };

    function of () {
        return !1
    }

    function pf() {
        return !0
    }

    function qf(a) {
        var b = arguments,
            c = b.length;
        return function() {
            for (var d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function rf(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function sf(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function tf(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    }

    function uf(a, b) {
        var c = 0;
        return function(d) {
            B.clearTimeout(c);
            var e = arguments;
            c = B.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function vf(a, b) {
        function c() {
            e = B.setTimeout(d, 63);
            var h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        var e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var wf = {
            passive: !0
        },
        xf = sf(function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                B.addEventListener("test", null, b)
            } catch (c) {}
            return a
        });

    function yf(a) {
        return a ? a.passive && xf() ? a : a.capture || !1 : !1
    }

    function J(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, yf(d)), !0) : !1
    }

    function zf(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, yf(d)), !0) : !1
    };

    function Af(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new r.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            nf(g, a);
            c && "complete" !== b.document.readyState ? J(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };

    function Bf(a) {
        var b, c, d, e, f, g;
        return Ja(function(h) {
            switch (h.j) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.l + "&st=") + a.jb, c = void 0, h.D = 2, za(h, Cf(b), 4);
                case 4:
                    c = h.B;
                    Aa(h);
                    break;
                case 2:
                    Ba(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Bb || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.A ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.B,
                        Re: c.bg_hash_basename,
                        Qe: c.bg_binary,
                        zf: a.j + "_" + a.l,
                        Bb: d,
                        jb: a.jb,
                        ic: e,
                        wc: f,
                        ec: g
                    }) : h.return(void 0)
            }
        })
    }

    function Cf(a) {
        return new r.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    }

    function Df(a) {
        var b;
        Ja(function(c) {
            if (1 == c.j) return za(c, Bf(a), 2);
            if (b = c.B) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window,
                    f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context, g._bgv_ = b.Re, g._bgp_ = b.Qe, g._li_ = b.zf, g._jk_ = b.Bb, g._st_ = b.jb, g._rc_ = b.ic, g._dl_ = b.wc, g._g2_ = b.ec, g));
                if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
                d = pe(Ud, {
                    basename: d
                });
                Af(d)
            }
            return c.return(b)
        })
    };

    function Ef(a) {
        I.call(this, a)
    }
    z(Ef, I);

    function Ff(a, b) {
        return td(a, 5, b)
    }

    function Gf(a, b) {
        return pd(a, 3, b, "")
    }

    function Hf(a) {
        I.call(this, a)
    }
    z(Hf, I);

    function If(a, b) {
        return pd(a, 1, b, "")
    };

    function Jf(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }

    function Kf(a) {
        this.j = a.l;
        this.l = a.A;
        this.B = a.B;
        this.Bb = a.Bb;
        this.win = a.V();
        this.jb = a.jb;
        this.ic = a.ic;
        this.wc = a.wc;
        this.ec = a.ec;
        this.A = a.j
    }

    function Lf(a, b, c) {
        this.l = a;
        this.A = b;
        this.B = c;
        this.win = window;
        this.jb = "env";
        this.ic = "n";
        this.wc = "0";
        this.ec = "1";
        this.j = !0
    }
    Lf.prototype.V = function() {
        return this.win
    };
    Lf.prototype.build = function() {
        return new Kf(this)
    };

    function Mf(a) {
        I.call(this, a, -1, Nf)
    }
    z(Mf, I);
    var Nf = [2, 3];

    function Of(a) {
        I.call(this, a)
    }
    z(Of, I);

    function Pf(a) {
        var b = new Of;
        return E(b, 1, a)
    }

    function Qf(a, b) {
        return E(a, 2, b)
    }

    function Rf(a, b) {
        return E(a, 3, b)
    }

    function Sf(a, b) {
        return E(a, 4, b)
    }
    Of.prototype.getVersion = function() {
        return D(this, 5)
    };
    var Tf = window;
    var ag = {
        og: "google_adtest",
        sg: "google_ad_client",
        tg: "google_ad_format",
        vg: "google_ad_height",
        Ig: "google_ad_width",
        zg: "google_ad_layout",
        Ag: "google_ad_layout_key",
        Bg: "google_ad_output",
        Cg: "google_ad_region",
        Fg: "google_ad_slot",
        Gg: "google_ad_type",
        Hg: "google_ad_url",
        Jg: "google_allow_expandable_ads",
        bh: "google_analytics_domain_name",
        eh: "google_analytics_uacct",
        uh: "google_container_id",
        Fh: "google_gl",
        Zh: "google_enable_ose",
        ji: "google_full_width_responsive",
        jj: "google_rl_filtering",
        ij: "google_rl_mode",
        kj: "google_rt",
        hj: "google_rl_dest_url",
        Pi: "google_max_radlink_len",
        Ui: "google_num_radlinks",
        Vi: "google_num_radlinks_per_unit",
        rg: "google_ad_channel",
        Oi: "google_max_num_ads",
        Qi: "google_max_responsive_height",
        oh: "google_color_border",
        Yh: "google_enable_content_recommendations",
        Ch: "google_content_recommendation_ui_type",
        Bh: "google_source_type",
        Ah: "google_content_recommendation_rows_num",
        zh: "google_content_recommendation_columns_num",
        yh: "google_content_recommendation_ad_positions",
        Dh: "google_content_recommendation_use_square_imgs",
        rh: "google_color_link",
        qh: "google_color_line",
        th: "google_color_url",
        pg: "google_ad_block",
        Eg: "google_ad_section",
        qg: "google_ad_callback",
        kh: "google_captcha_token",
        sh: "google_color_text",
        Vg: "google_alternate_ad_url",
        yg: "google_ad_host_tier_id",
        lh: "google_city",
        wg: "google_ad_host",
        xg: "google_ad_host_channel",
        Wg: "google_alternate_color",
        mh: "google_color_bg",
        ai: "google_encoding",
        hi: "google_font_face",
        Ih: "google_cust_ch",
        Lh: "google_cust_job",
        Kh: "google_cust_interests",
        Jh: "google_cust_id",
        Mh: "google_cust_u_url",
        li: "google_hints",
        Ci: "google_image_size",
        Ri: "google_mtl",
        Kj: "google_cpm",
        xh: "google_contents",
        Ti: "google_native_settings_key",
        Eh: "google_country",
        Cj: "google_targeting",
        ii: "google_font_size",
        Ph: "google_disable_video_autoplay",
        Yj: "google_video_product_type",
        Xj: "google_video_doc_id",
        Wj: "google_cust_gender",
        yj: "google_cust_lh",
        xj: "google_cust_l",
        Jj: "google_tfs",
        Si: "google_native_ad_template",
        Hi: "google_kw",
        zj: "google_tag_for_child_directed_treatment",
        Aj: "google_tag_for_under_age_of_consent",
        mj: "google_region",
        Hh: "google_cust_criteria",
        Dg: "google_safe",
        Gh: "google_ctr_threshold",
        nj: "google_resizing_allowed",
        pj: "google_resizing_width",
        oj: "google_resizing_height",
        Vj: "google_cust_age",
        LANGUAGE: "google_language",
        Ii: "google_kw_type",
        aj: "google_pucrd",
        Zi: "google_page_url",
        Bj: "google_tag_partner",
        tj: "google_restrict_data_processing",
        kg: "google_adbreak_test",
        ug: "google_ad_frequency_hint",
        mg: "google_admob_interstitial_slot",
        ng: "google_admob_rewarded_slot",
        lg: "google_admob_ads_only",
        Ni: "google_max_ad_content_rating",
        dj: "google_ad_public_floor",
        bj: "google_ad_private_floor",
        Uj: "google_traffic_source"
    };
    var bg = sf(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Re(Ze);
        return !b.parentElement
    });

    function cg(a, b) {
        if (bg())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Re(b)
    }
    var dg = /^[\w+/_-]+[=]{0,2}$/;

    function eg(a, b) {
        b = (b || B).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && dg.test(a) ? a : "" : ""
    };

    function fg(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function gg(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function hg(a) {
        return gg.apply(null, arguments) / arguments.length
    };

    function ig(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    ig.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    ig.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    ig.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function jg(a, b) {
        this.width = a;
        this.height = b
    }

    function kg(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    q = jg.prototype;
    q.aspectRatio = function() {
        return this.width / this.height
    };
    q.isEmpty = function() {
        return !(this.width * this.height)
    };
    q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function lg(a, b) {
        var c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var d = b ? b.createElement("div") : B.document.createElement("div");
        return a.replace(mg, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = Te(e + " "), cg(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var mg = /&([^;\s<&]+);?/g;

    function ng(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function og(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function pg(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function qg(a) {
        return a ? new rg(sg(a)) : gb || (gb = new rg)
    }

    function tg(a, b) {
        Vd(b, function(c, d) {
            c && "object" == typeof c && c.ra && (c = c.ma());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ug.hasOwnProperty(d) ? a.setAttribute(ug[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var ug = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function vg(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new jg(a.clientWidth, a.clientHeight)
    }

    function wg(a) {
        var b = a.scrollingElement ? a.scrollingElement : ac || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Yb && jc("10") && a.pageYOffset != b.scrollTop ? new ig(b.scrollLeft, b.scrollTop) : new ig(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function xg(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function yg(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!Qa(f) || Ra(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (Ra(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Gb(g ? Ob(f) : f, e)
            }
        }
    }

    function zg(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Ag(a, b) {
        var c = zg(a, "DIV");
        Yb ? (b = $e(cf, b), cg(c, b), c.removeChild(c.firstChild)) : cg(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function Bg(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function sg(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var Cg = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Dg = {
            IMG: " ",
            BR: "\n"
        };

    function Eg(a) {
        var b = [];
        Fg(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Fg(a, b, c) {
        if (!(a.nodeName in Cg))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Dg) b.push(Dg[a.nodeName]);
        else
            for (a = a.firstChild; a;) Fg(a, b, c), a = a.nextSibling
    }

    function Gg(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return Hg(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && Lb(e.className.split(/\s+/), c))
        })
    }

    function Hg(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function rg(a) {
        this.j = a || B.document || document
    }
    q = rg.prototype;
    q.lf = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    q.jg = rg.prototype.lf;
    q.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    q.ja = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = e[1],
            g = zg(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : tg(g, f));
        2 < e.length && yg(d, g, e, 2);
        return g
    };
    q.createElement = function(a) {
        return zg(this.j, a)
    };
    q.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };

    function Ig(a, b) {
        return Ag(a.j, b)
    }
    q.V = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    q.appendChild = function(a, b) {
        a.appendChild(b)
    };
    q.append = function(a, b) {
        yg(sg(a), a, arguments, 1)
    };
    q.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    q.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    q.hf = Bg;

    function Jg() {
        return !Kg() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))
    }

    function Kg() {
        return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    };
    var Lg = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Mg(a) {
        try {
            return !!a && null != a.location.href && Vb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function Ng(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? B : d;
        c = (void 0 === c ? 0 : c) ? Og(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !Mg(c) || !a(c));) c = Og(c)
    }

    function Og(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    }

    function Pg(a) {
        return Mg(a.top) ? a.top : null
    }

    function Qg(a, b) {
        var c = Rg("SCRIPT", a);
        nf(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Sg(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Tg() {
        if (!r.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            r.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Ug(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Vg(a) {
        var b = [];
        Ug(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Wg(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Yg = sf(function() {
        return Kb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Xg) || 1E-4 > Math.random()
    });

    function Xg(a) {
        return sb(vb(), a)
    }
    var Zg = /^([0-9.]+)px$/,
        $g = /^(-?[0-9.]{1,30})$/;

    function ah(a) {
        if (!$g.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function bh(a) {
        return /^true$/.test(a)
    }

    function ch(a) {
        return (a = Zg.exec(a)) ? +a[1] : null
    }

    function dh() {
        var a = B.document.URL;
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    }
    var eh = {
            Kg: "allow-forms",
            Lg: "allow-modals",
            Mg: "allow-orientation-lock",
            Ng: "allow-pointer-lock",
            Og: "allow-popups",
            Pg: "allow-popups-to-escape-sandbox",
            Qg: "allow-presentation",
            Rg: "allow-same-origin",
            Sg: "allow-scripts",
            Tg: "allow-top-navigation",
            Ug: "allow-top-navigation-by-user-activation"
        },
        fh = sf(function() {
            return Vg(eh)
        });

    function gh() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
            b = fh();
        return a.length ? Hb(b, function(c) {
            return !Lb(a, c)
        }) : b
    }

    function hh() {
        var a = Rg("IFRAME"),
            b = {};
        Gb(fh(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }

    function ih(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }

    function jh(a, b) {
        for (var c = 0; 50 > c; ++c) {
            if (ih(a, b)) return a;
            if (!(a = Og(a))) break
        }
        return null
    }
    var kh = sf(function() {
        return Jg() ? 2 : Kg() ? 1 : 0
    });

    function M(a, b) {
        Ug(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    }
    var lh = {},
        mh = (lh["http://googleads.g.doubleclick.net"] = !0, lh["http://pagead2.googlesyndication.com"] = !0, lh["https://googleads.g.doubleclick.net"] = !0, lh["https://pagead2.googlesyndication.com"] = !0, lh),
        nh = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        oh = /.*domain\.test$/,
        ph = /\.prod\.google\.com(:\d+)?$/;

    function qh(a) {
        return mh[a] || nh.test(a) || oh.test(a) || ph.test(a)
    }
    var rh = [];

    function sh() {
        var a = rh;
        rh = [];
        a = y(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function th(a, b) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (c) {
            b && b.na(784, c)
        }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.na(784, Error("Invalid correlator, " + a));
        return a || -1
    }

    function uh(a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = new a.MutationObserver(function(f) {
            f = y(f);
            for (var g = f.next(); !g.done; g = f.next()) {
                g = y(g.value.removedNodes);
                for (var h = g.next(); !h.done; h = g.next())
                    if (h = h.value, d && (h === b || Bg(h, b))) {
                        f = y(d);
                        for (g = f.next(); !g.done; g = f.next()) g.value.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
            }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Ng(function(f) {
            if (!f.parent || !Mg(f.parent)) return !1;
            for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h <
                g.length; h++) try {
                a: {
                    var k = g[h];
                    try {
                        var l = k.contentWindow || (k.contentDocument ? xg(k.contentDocument) : null);
                        break a
                    } catch (m) {}
                    l = null
                }
                if (l == f) {
                    uh(f.parent, g[h], c, d);
                    break
                }
            }
            catch (m) {}
            return !1
        }, !1, !1, a)
    }

    function vh(a, b) {
        uh(xg(sg(a)), a, b)
    }

    function wh(a, b) {
        "complete" === a.document.readyState ? (rh.push(b), 1 == rh.length && (r.Promise ? r.Promise.resolve().then(sh) : window.setImmediate ? setImmediate(sh) : setTimeout(sh, 0))) : a.addEventListener("load", b)
    }

    function xh(a, b) {
        return new r.Promise(function(c) {
            setTimeout(function() {
                return void c(b)
            }, a)
        })
    }

    function Rg(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    }

    function yh(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, Mg(a) && (b = a);
        return b
    };

    function zh(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    q = zh.prototype;
    q.getWidth = function() {
        return this.right - this.left
    };
    q.getHeight = function() {
        return this.bottom - this.top
    };

    function Ah(a) {
        return new zh(a.top, a.right, a.bottom, a.left)
    }
    q.contains = function(a) {
        return this && a ? a instanceof zh ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Bh(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    q.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    q.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    q.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Ch(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Dh(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Ch(c, e, d - c, a - e)
        }
        return null
    }

    function Eh(a, b) {
        var c = Dh(a, b);
        if (!c || !c.height || !c.width) return [new Ch(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new Ch(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new Ch(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new Ch(a.left, d, b.left - a.left, e));
        h < f && c.push(new Ch(h, d, f - h, e));
        return c
    }
    Ch.prototype.contains = function(a) {
        return a instanceof ig ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Ch.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Ch.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Ch.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Fh = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Gh(a) {
        a = void 0 === a ? B : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Hh() {
        var a;
        return (a = void 0 === a ? Gh() : a) && a.initialIntersection
    }

    function Ih() {
        var a = Hh();
        return a && Ra(a.rootBounds) ? new jg(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Jh(a) {
        return (a = void 0 === a ? Gh() : a) ? Mg(a.master) ? a.master : null : null
    }

    function Kh(a, b) {
        function c(g) {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized || g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Qg(a.document, g ? pe(Td("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                    ampVersion: g
                }) : ne(Sd(Td("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g &&
                e()
        }

        function d() {}

        function e() {}
        var f = a.ampInaboxIframes = a.ampInaboxIframes || [];
        b && (f.push(b), d = function() {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Mb(f, b);
            e()
        });
        if (a.ampInaboxInitialized) return d;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        f.google_amp_listener_added || (f.google_amp_listener_added = !0, J(a, "message", c), e = function() {
            zf(a, "message", c)
        });
        return d
    };

    function R(a) {
        var b = Ka.apply(1, arguments);
        if (0 === b.length) return ne(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return ne(c.join(""))
    }

    function Lh(a, b) {
        var c = me(a).toString();
        if (/#/.test(c)) throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return ne(c)
    };

    function jf(a) {
        this.yf = a
    }

    function Mh(a) {
        return new jf(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var hf = [Mh("data"), Mh("http"), Mh("https"), Mh("mailto"), Mh("ftp"), new jf(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Nh(a) {
        return ne(me(a).toString())
    };

    function Oh(a, b, c) {
        if ("string" === typeof b)(b = Ph(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Ph(c, d);
                f && (c.style[f] = e)
            }
    }
    var Qh = {};

    function Ph(a, b) {
        var c = Qh[b];
        if (!c) {
            var d = og(b);
            c = d;
            void 0 === a.style[d] && (d = (ac ? "Webkit" : $b ? "Moz" : Yb ? "ms" : null) + pg(d), void 0 !== a.style[d] && (c = d));
            Qh[b] = c
        }
        return c
    }

    function Rh(a, b) {
        var c = sg(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Sh(a, b) {
        return Rh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Th(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Uh(a) {
        var b = sg(a),
            c = new ig(0, 0);
        var d = b ? sg(b) : document;
        d = !Yb || 9 <= Number(mc) || "CSS1Compat" == qg(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Th(a);
        b = wg(qg(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Vh(a) {
        var b = Wh;
        if ("none" != Sh(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function Wh(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = ac && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Th(a), new jg(a.right - a.left, a.bottom - a.top)) : new jg(b, c)
    }

    function Xh(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function Yh(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Xh(a, b) : 0
    }
    var Zh = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function $h(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Zh ? Zh[b] : Xh(a, b)
    };

    function ai(a) {
        return "number" === typeof a && 0 < a
    }

    function bi(a, b) {
        a = ci(a);
        if (!a) return b;
        var c = b.slice(-1);
        return b + ("?" === c || "#" === c ? "" : "&") + a
    }

    function ci(a) {
        return t(Object, "entries").call(Object, di(a)).map(function(b) {
            var c = y(b);
            b = c.next().value;
            c = c.next().value;
            return b + "=" + encodeURIComponent(String(c))
        }).join("&")
    }

    function di(a) {
        var b = {};
        Ug(a, function(c, d) {
            if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
        });
        return b
    }

    function ei() {
        var a = void 0 === a ? Tf : a;
        try {
            return a.history.length
        } catch (b) {
            return 0
        }
    }

    function fi(a) {
        var b = void 0 === b ? 1 : b;
        a = Jh(Gh(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b
    }

    function gi(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    function hi(a) {
        a.u_tz = -(new Date).getTimezoneOffset();
        a.u_his = ei();
        var b;
        a.u_h = null == (b = Tf.screen) ? void 0 : b.height;
        var c;
        a.u_w = null == (c = Tf.screen) ? void 0 : c.width;
        var d;
        a.u_ah = null == (d = Tf.screen) ? void 0 : d.availHeight;
        var e;
        a.u_aw = null == (e = Tf.screen) ? void 0 : e.availWidth;
        var f;
        a.u_cd = null == (f = Tf.screen) ? void 0 : f.colorDepth
    }

    function ii(a) {
        var b = (b = 9 !== a.nodeType && a.id) ? "/" + b : "";
        a: {
            if (a && a.nodeName && a.parentElement) {
                var c = a.nodeName.toString().toLowerCase();
                for (var d = a.parentElement.childNodes, e = 0, f = 0; f < d.length; ++f) {
                    var g = d[f];
                    if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                        if (a === g) {
                            c = "." + e;
                            break a
                        }++e
                    }
                }
            }
            c = ""
        }
        return (a.nodeName && a.nodeName.toString().toLowerCase()) + b + c
    }

    function ji(a) {
        return function() {
            if (a) {
                var b = a;
                a = null;
                b.apply(null, arguments)
            }
        }
    }

    function si() {
        var a = void 0 === a ? Tf : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function ti(a) {
        return (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1
    }

    function ui(a) {
        var b = Number(a.google_ad_width),
            c = Number(a.google_ad_height);
        if (!(0 < b && 0 < c)) {
            a: {
                try {
                    var d = String(a.google_ad_format);
                    if (d && d.match) {
                        var e = d.match(/(\d+)x(\d+)/i);
                        if (e) {
                            var f = parseInt(e[1], 10),
                                g = parseInt(e[2], 10);
                            if (0 < f && 0 < g) {
                                var h = {
                                    width: f,
                                    height: g
                                };
                                break a
                            }
                        }
                    }
                } catch (k) {}
                h = null
            }
            a = h;
            if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
        }
        return {
            width: b,
            height: c
        }
    };

    function vi(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var wi = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function xi(a, b) {
        this.j = a;
        this.l = b
    }

    function yi(a, b, c) {
        this.url = a;
        this.win = b;
        this.Od = !!c;
        this.depth = null
    };

    function zi(a, b, c, d) {
        Ai(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d)
    }

    function Ai(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        var e = Rg("IMG", a.document);
        if (c || d) {
            var f = function(g) {
                c && c(g);
                d && Mb(a.google_image_requests, e);
                zf(e, "load", f);
                zf(e, "error", f)
            };
            J(e, "load", f);
            J(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }

    function Bi(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        Ug(a, function(e, f) {
            e && (d += "&" + f + "=" + encodeURIComponent(e))
        });
        Ci(d, c)
    }

    function Ci(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : zi(c, a, void 0, b)
    };

    function Di() {
        this.A = "&";
        this.l = {};
        this.B = 0;
        this.j = []
    }

    function Ei(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Fi(a, b, c, d, e) {
        var f = [];
        Ug(a, function(g, h) {
            (g = Gi(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Gi(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Gi(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Fi(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Hi(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = Ii(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(m, n) {
            return m - n
        });
        b = null;
        for (var e = "", f = 0; f < a.j.length; f++)
            for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = Fi(h[k], a.A, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.A;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }

    function Ii(a) {
        var b = 1,
            c;
        for (c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.A.length - 1
    };

    function Ji() {
        this.j = Math.random()
    }

    function Ki() {
        var a = Li,
            b = B.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    }

    function Mi(a, b, c, d, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            if (c instanceof Di) var f = c;
            else f = new Di, Ug(c, function(h, k) {
                var l = f,
                    m = l.B++;
                h = Ei(k, h);
                l.j.push(m);
                l.l[m] = h
            });
            var g = Hi(f, "/pagead/gen_204?id=" + b + "&");
            g && zi(B, g)
        } catch (h) {}
    };
    var Ni = null;

    function Oi() {
        if (null === Ni) {
            Ni = "";
            try {
                var a = "";
                try {
                    a = B.top.location.hash
                } catch (c) {
                    a = B.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Ni = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Ni
    };

    function Pi() {
        var a = void 0 === a ? B : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Za()
    }

    function Qi() {
        var a = void 0 === a ? B : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Ri(a, b) {
        var c = Qi() || Pi();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0
    };
    var Si = B.performance,
        Ti = !!(Si && Si.mark && Si.measure && Si.clearMarks),
        Ui = sf(function() {
            var a;
            if (a = Ti) a = Oi(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Vi(a) {
        this.j = [];
        this.A = a || B;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.j = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.l = Ui() || (null != b ? b : 1 > Math.random())
    }

    function Wi() {
        var a = Xi;
        a.l = !1;
        a.j != a.A.google_js_reporting_queue && (Ui() && Gb(a.j, Yi), a.j.length = 0)
    }

    function Yi(a) {
        a && Si && Ui() && (Si.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Si.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Vi.prototype.start = function(a, b) {
        if (!this.l) return null;
        a = new Ri(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Si && Ui() && Si.mark(b);
        return a
    };
    Vi.prototype.end = function(a) {
        if (this.l && "number" === typeof a.value) {
            a.duration = (Qi() || Pi()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Si && Ui() && Si.mark(b);
            !this.l || 2048 < this.j.length || this.j.push(a)
        }
    };

    function Zi(a, b) {
        if (!a.l) return b();
        var c = a.start("491", 3);
        try {
            var d = b()
        } catch (e) {
            throw Yi(c), e;
        }
        a.end(c);
        return d
    };

    function $i() {
        var a = Xi;
        this.B = Li;
        this.l = null;
        this.C = this.na;
        this.j = void 0 === a ? null : a;
        this.A = !1
    }
    q = $i.prototype;
    q.pa = function() {
        return this.B
    };
    q.he = function(a) {
        this.l = a
    };
    q.ie = function(a) {
        this.A = a
    };
    q.La = function(a, b, c) {
        try {
            if (this.j && this.j.l) {
                var d = this.j.start(a.toString(), 3);
                var e = b();
                this.j.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                Yi(d), b = this.C(a, new vi(h, {
                    message: aj(h)
                }), void 0, c)
            } catch (k) {
                this.na(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    q.Fb = function(a, b) {
        var c = this;
        return function() {
            var d = Ka.apply(0, arguments);
            return c.La(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    q.na = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new Di;
            f.j.push(1);
            f.l[1] = Ei("context", a);
            b.error && b.meta && b.id || (b = new vi(b, {
                message: aj(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.j.push(2);
                f.l[2] = Ei("msg", g)
            }
            var h = b.meta || {};
            if (this.l) try {
                this.l(h)
            } catch (aa) {}
            if (d) try {
                d(h)
            } catch (aa) {}
            b = [h];
            f.j.push(3);
            f.l[3] = b;
            d = B;
            b = [];
            g = null;
            do {
                var k = d;
                if (Mg(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new yi(l || "", k));
                try {
                    d = k.parent
                } catch (aa) {
                    d = null
                }
            } while (d && k !=
                d);
            l = 0;
            for (var m = b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = B;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var n = b[m];
                    n.url || (n.url = k.location.ancestorOrigins[m - 1] || "", n.Od = !0)
                }
            var p = new yi(B.location.href, B, !1);
            k = null;
            var u = b.length - 1;
            for (n = u; 0 <= n; --n) {
                var v = b[n];
                !k && wi.test(v.url) && (k = v);
                if (v.url && !v.Od) {
                    p = v;
                    break
                }
            }
            v = null;
            var A = b.length && b[u].url;
            0 != p.depth && A && (v = b[u]);
            var F = new xi(p, v);
            if (F.l) {
                var S = F.l.url || "";
                f.j.push(4);
                f.l[4] = Ei("top",
                    S)
            }
            var P = {
                url: F.j.url || ""
            };
            if (F.j.url) {
                var L = F.j.url.match(Lg),
                    N = L[1],
                    O = L[3],
                    Q = L[4];
                p = "";
                N && (p += N + ":");
                O && (p += "//", p += O, Q && (p += ":" + Q));
                var K = p
            } else K = "";
            P = [P, {
                url: K
            }];
            f.j.push(5);
            f.l[5] = P;
            Mi(this.B, e, f, this.A, c)
        } catch (aa) {
            try {
                Mi(this.B, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: aj(aa),
                    url: F && F.j.url
                }, this.A, c)
            } catch (da) {}
        }
        return !0
    };
    q.Ma = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.na(a, d instanceof Error ? d : Error(d))
        })
    };

    function aj(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = bj(a.stack, b));
        return b
    }

    function bj(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            for (var c; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (d) {
            return b
        }
    };

    function cj(a) {
        return "string" === typeof a
    }

    function dj(a) {
        return void 0 === a
    }

    function ej() {
        var a = fj;
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    var gj;
    gj = {
        cj: 0,
        se: 3,
        ue: 4,
        we: 5
    };
    var hj = gj.se,
        ij = gj.ue,
        jj = gj.we;

    function kj(a) {
        I.call(this, a)
    }
    z(kj, I);

    function lj(a) {
        I.call(this, a)
    }
    z(lj, I);

    function mj(a) {
        var b = new lj;
        return E(b, 1, a)
    };

    function nj(a) {
        I.call(this, a)
    }
    z(nj, I);

    function oj(a) {
        I.call(this, a)
    }
    z(oj, I);

    function pj(a) {
        I.call(this, a, -1, qj)
    }
    z(pj, I);

    function rj(a, b) {
        return od(a, 1, b)
    }

    function sj(a, b) {
        return od(a, 12, b)
    }

    function tj() {
        var a = new pj;
        Uc(a);
        id(a, 2, 2, !1).push("irr");
        return a
    }

    function uj(a, b) {
        return E(a, 3, b)
    }

    function vj(a, b) {
        return E(a, 4, b)
    }

    function wj(a, b) {
        return E(a, 5, b)
    }

    function xj(a, b) {
        return E(a, 7, b)
    }

    function yj(a, b) {
        return E(a, 8, b)
    }

    function zj(a, b) {
        return E(a, 9, b)
    }

    function Aj(a, b) {
        return vd(a, 10, b)
    }

    function Bj(a, b) {
        return od(a, 11, b)
    }
    var qj = [1, 12, 2, 10, 11];

    function Cj(a) {
        I.call(this, a, -1, Dj)
    }
    z(Cj, I);

    function Ej(a) {
        var b = Fj();
        td(a, 1, b)
    }

    function Gj(a, b) {
        return vd(a, 3, b)
    }

    function Hj(a, b) {
        vd(a, 4, b)
    }

    function Ij(a, b) {
        wd(a, 4, lj, b);
        return a
    }

    function Jj(a, b) {
        return vd(a, 5, b)
    }
    Cj.prototype.I = function(a) {
        return E(this, 8, a)
    };
    var Dj = [3, 4, 5, 6];

    function Kj(a) {
        I.call(this, a)
    }
    z(Kj, I);
    Kj.prototype.Oa = function(a) {
        return E(this, 2, a)
    };
    var Lj = [4, 5];

    function Mj(a) {
        a.ag.apply(a, ma(Ka.apply(1, arguments).map(function(b) {
            return {
                fg: 7,
                message: b
            }
        })))
    };

    function Nj(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.fg] = b.message.toJSON(), c)]
        })])
    };

    function Oj(a, b) {
        if (r.globalThis.fetch) r.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };

    function Pj(a, b, c, d) {
        this.C = a;
        this.B = b;
        this.D = c;
        this.A = d;
        this.l = [];
        this.j = null
    }

    function Qj(a) {
        var b = Nj(a.l);
        a.B(a.C + "?e=1", b);
        a.l = [];
        a.j = null
    }
    Pj.prototype.ag = function() {
        var a = this;
        this.l.push.apply(this.l, ma(Ka.apply(0, arguments)));
        this.l.length >= this.A ? (null !== this.j && clearTimeout(this.j), Qj(this)) : null === this.j && (this.j = setTimeout(function() {
            Qj(a)
        }, this.D))
    };

    function Rj(a, b) {
        Pj.call(this, "https://pagead2.googlesyndication.com/pagead/ping", Oj, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b)
    }
    z(Rj, Pj);

    function Sj(a) {
        var b = "Pc";
        if (a.Pc && a.hasOwnProperty(b)) return a.Pc;
        b = new a;
        return a.Pc = b
    };

    function Tj(a) {
        this.methodName = a
    }
    var Uj = new Tj(15),
        Vj = new Tj(2),
        Wj = new Tj(3),
        Xj = new Tj(5),
        Yj = new Tj(6),
        Zj = new Tj(7),
        ak = new Tj(8),
        bk = new Tj(14);

    function ck(a, b, c) {
        return b[a.methodName] || c || function() {}
    };

    function dk() {
        this.j = function() {};
        this.l = function() {
            return []
        }
    }

    function ek(a, b) {
        a.j = function(c) {
            ck(Vj, b, function() {
                return []
            })(c, 1)
        };
        a.l = function() {
            return ck(Wj, b, function() {
                return []
            })(1)
        }
    };
    var Li, fk, Xi = new Vi(B);
    (function(a) {
        Li = a || new Ji;
        "number" !== typeof B.google_srt && (B.google_srt = Math.random());
        Ki();
        fk = new $i;
        fk.ie(!0);
        "complete" == B.document.readyState ? B.google_measure_js_timing || Wi() : Xi.l && J(B, "load", function() {
            B.google_measure_js_timing || Wi()
        })
    })();

    function gk(a, b) {
        return fk.La(a, b)
    }

    function hk(a, b) {
        return fk.Fb(a, b)
    }

    function ik(a, b, c) {
        var d = Sj(dk).l();
        !b.eid && d.length && (b.eid = d.toString());
        Mi(Li, a, b, !0, c)
    }

    function jk(a, b) {
        return fk.na(a, b, void 0, void 0)
    };

    function kk(a, b) {
        var c = dh();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(B.document.location.protocol), "//", encodeURIComponent(B.document.location.host)].join("")
    }
    ne(Sd(Td("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));

    function lk(a, b, c, d) {
        function e(g) {
            try {
                var h = JSON.parse(g.data)
            } catch (k) {
                return
            }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
        }
        d = void 0 === d ? null : d;
        J(a, "message", e);
        var f = !1;
        return function() {
            var g = !1;
            f || (f = !0, g = zf(a, "message", e));
            return g
        }
    }

    function mk(a, b, c, d) {
        var e = lk(a, b, qf(c, function() {
            return e()
        }), void 0 === d ? null : d);
        return e
    }

    function nk(a, b, c, d) {
        c.googMsgType = b;
        a.postMessage(JSON.stringify(c), d)
    }

    function ok(a, b, c, d, e) {
        if (!(0 >= e) && (nk(a, b, c, d), a = a.frames))
            for (var f = 0; f < a.length; ++f) 1 < e && ok(a[f], b, c, d, --e)
    };

    function pk(a, b, c, d) {
        qh(d.origin) && "expandable-xpc-ready" == c.notify && qk(a, b)
    }

    function qk(a, b) {
        var c = a.Oc;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Ia,
            f: a.Pf,
            g: a.Ie,
            h: a.wf,
            i: void 0
        });
        B.setTimeout(hk(220, ji(function() {
            Qg(c.document, Nh(b))
        })), 0)
    };

    function rk(a) {
        I.call(this, a, -1, sk)
    }
    z(rk, I);
    var sk = [15];

    function tk(a) {
        I.call(this, a)
    }
    z(tk, I);
    tk.prototype.getCorrelator = function() {
        return md(this, 1, 0)
    };
    tk.prototype.setCorrelator = function(a) {
        return pd(this, 1, a, 0)
    };

    function uk(a) {
        I.call(this, a)
    }
    z(uk, I);
    var vk = null,
        wk = null;

    function xk() {
        if (null != vk) return vk;
        vk = !1;
        try {
            var a = Pg(B);
            a && -1 !== a.location.hash.indexOf("google_logging") && (vk = !0);
            B.localStorage.getItem("google_logging") && (vk = !0)
        } catch (b) {}
        return vk
    }

    function yk() {
        if (null != wk) return wk;
        wk = !1;
        try {
            var a = Pg(B);
            if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || B.localStorage.getItem("auto_ads_logging")) wk = !0
        } catch (b) {}
        return wk
    }

    function zk(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        B.google_logging_queue || (c = !0, B.google_logging_queue = []);
        B.google_logging_queue.push([a, b]);
        c && xk() && Qg(B.document, ne(Sd(Td("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
    };
    var Ak = (new Date).getTime();

    function Bk(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var Ck = {
        yi: 0,
        xi: 1,
        ui: 2,
        ni: 3,
        vi: 4,
        oi: 5,
        wi: 6,
        si: 7,
        ti: 8,
        mi: 9,
        ri: 10
    };
    var Dk = {
        Ai: 0,
        Bi: 1,
        zi: 2
    };

    function Ek(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Fk(a) {
        a = Ib(a, function(b) {
            return new zh(b.top, b.right, b.bottom, b.left)
        });
        a = Gk(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Gk(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Jb(a.slice(1), function(b, c) {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Ah(a[0]))
    };
    var Yd = {
        lj: 0,
        bi: 1,
        ei: 2,
        ci: 3,
        di: 4,
        ki: 8,
        wj: 9,
        Li: 10,
        Mi: 11,
        sj: 16,
        Oh: 17,
        Nh: 24,
        Ji: 25,
        gh: 26,
        fh: 27,
        ve: 30,
        Ei: 32,
        Gi: 40
    };
    var Hk = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Ik = {},
        Jk = (Ik[1] = 1, Ik[2] = 1, Ik[3] = 7, Ik[4] = 7, Ik[8] = 2, Ik[27] = 3, Ik[9] = 4, Ik[30] = 5, Ik);

    function Kk() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new Lk;
        this.sideRailProcessedFixedElements = new r.Set;
        this.sideRailAvailableSpace = new r.Map
    }

    function Mk(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new r.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new r.Map)) : a.google_reactive_ads_global_state = new Kk;
        return a.google_reactive_ads_global_state
    }

    function Lk() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var Nk = 728 * 1.38;

    function Ok(a) {
        return Math.min(a.screen.width || 0, a.screen.height || 0)
    }

    function Pk(a) {
        return a != a.top ? 512 : 0
    }

    function Qk(a, b) {
        return (a = Rk(a)) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    }

    function Sk(a) {
        var b = Rk(a);
        a = a.innerWidth;
        return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
    }

    function Tk(a) {
        return Math.max(0, Uk(a, !0) - Vk(a))
    }

    function Wk(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function Vk(a) {
        return Wk(a).clientHeight
    }

    function Rk(a) {
        return Wk(a).clientWidth
    }

    function Uk(a, b) {
        var c = Wk(a);
        return b ? c.scrollHeight == Vk(a) ? c.offsetHeight : c.scrollHeight : c.offsetHeight
    }

    function Xk(a, b) {
        return Yk(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1
    }

    function Zk(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function $k(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function al(a) {
        return void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function bl(a) {
        var b = {},
            c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                var d = c[a];
                if ("key" in d && "value" in d) {
                    var e = d.value;
                    b[d.key] = null == e ? null : String(e)
                }
            }
        return b
    }

    function cl(a, b, c, d, e) {
        Mi(c, b, {
            c: e.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function Yk(a) {
        return 26 === a || 27 === a || 40 === a
    };

    function dl() {
        this.l = new el(this);
        this.j = 0
    }
    dl.prototype.resolve = function(a) {
        fl(this);
        this.j = 1;
        this.B = a;
        gl(this.l)
    };
    dl.prototype.reject = function(a) {
        fl(this);
        this.j = 2;
        this.A = a;
        gl(this.l)
    };

    function fl(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }

    function el(a) {
        this.j = a
    }
    el.prototype.then = function(a, b) {
        if (this.l) throw Error("Then functions already set.");
        this.l = a;
        this.A = b;
        gl(this)
    };

    function gl(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.B);
                break;
            case 2:
                a.A && a.A(a.j.A);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function hl(a, b) {
        il(a).forEach(b, void 0)
    }

    function il(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function jl() {
        this.j = {};
        this.l = {}
    }
    q = jl.prototype;
    q.set = function(a, b) {
        var c = kl(a);
        this.j[c] = b;
        this.l[c] = a
    };
    q.remove = function(a) {
        a = kl(a);
        this.j[a] = void 0;
        this.l[a] = void 0
    };
    q.get = function(a, b) {
        a = kl(a);
        return void 0 !== this.j[a] ? this.j[a] : b
    };

    function ll(a, b) {
        return void 0 !== a.j[kl(b)]
    }

    function ml(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function nl(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    q.xb = function() {
        return ml(this).length
    };
    q.clear = function() {
        this.j = {};
        this.l = {}
    };

    function kl(a) {
        return a instanceof Object ? String(Sa(a)) : a + ""
    };

    function ol(a) {
        this.j = new jl;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    ol.prototype.add = function(a) {
        this.j.set(a, !0)
    };
    ol.prototype.remove = function(a) {
        this.j.remove(a)
    };
    ol.prototype.contains = function(a) {
        return ll(this.j, a)
    };
    var pl = new ol("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function ql(a) {
        a && "function" == typeof a.Fa && a.Fa()
    };

    function T() {
        this.D = this.D;
        this.H = this.H
    }
    T.prototype.D = !1;
    T.prototype.Fa = function() {
        this.D || (this.D = !0, this.W())
    };

    function rl(a, b) {
        a.D ? b() : (a.H || (a.H = []), a.H.push(b))
    }
    T.prototype.W = function() {
        if (this.H)
            for (; this.H.length;) this.H.shift()()
    };

    function sl(a) {
        T.call(this);
        this.element = a;
        this.j = new r.Map
    }
    z(sl, T);
    sl.prototype.W = function() {
        tl(this);
        T.prototype.W.call(this)
    };

    function tl(a) {
        a.j.forEach(function(b, c) {
            var d = a.element;
            b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
        })
    }

    function ul(a, b, c) {
        if (!a.j.has(b)) {
            var d = a.j,
                e = d.set;
            var f = a.element;
            var g = f.style.getPropertyValue(b);
            f = g ? {
                value: g,
                priority: f.style.getPropertyPriority(b)
            } : null;
            e.call(d, b, f)
        }
        a.element.style.setProperty(b, c, "important")
    };

    function vl(a) {
        this.R = a;
        this.j = new r.Map;
        this.A = 1;
        this.l = null
    }
    vl.prototype.ba = function(a, b) {
        var c = this;
        b = void 0 === b ? !1 : b;
        var d = this.A++;
        this.j.set(d, a);
        b && a(this.R);
        return function() {
            c.j.delete(d)
        }
    };

    function wl(a, b) {
        return a.ba(b, !0)
    }

    function xl(a, b, c) {
        return wl(a, function(d) {
            d === b && c()
        })
    }

    function yl(a, b) {
        if (!1 === a.R) b();
        else {
            var c = {
                Sb: null
            };
            c.Sb = xl(a, !1, function() {
                c.Sb && (c.Sb(), c.Sb = null);
                b()
            })
        }
    }

    function zl(a, b, c) {
        Al(a).ba(function(d) {
            d === b && c()
        })
    }

    function U(a, b) {
        a.R = b;
        a.j.forEach(function(c) {
            c(a.R)
        })
    }

    function Bl(a, b) {
        a.l && a.l();
        a.l = b.ba(function(c) {
            return U(a, c)
        }, !0)
    }
    vl.prototype.map = function(a) {
        var b = new vl(a(this.R));
        this.ba(function(c) {
            return U(b, a(c))
        });
        return b
    };

    function Al(a, b) {
        b = void 0 === b ? Cl : b;
        var c = a.R,
            d = new vl(a.R);
        a.ba(function(e) {
            b(e, c) || (c = e, U(d, e))
        });
        return d
    }

    function Dl(a, b) {
        function c() {
            return {
                first: a.R,
                second: b.R
            }
        }
        var d = new vl(c());
        a.ba(function() {
            return U(d, c())
        });
        b.ba(function() {
            return U(d, c())
        });
        return d
    }

    function El() {
        function a() {
            U(d, b())
        }

        function b() {
            return c.every(function(e) {
                return e.R
            })
        }
        var c = [].concat(ma(Ka.apply(0, arguments))),
            d = new vl(b());
        c.forEach(function(e) {
            return e.ba(a)
        });
        return Al(d)
    }

    function Fl() {
        function a() {
            U(d, b())
        }

        function b() {
            return -1 !== t(c, "findIndex").call(c, function(e) {
                return e.R
            })
        }
        var c = [].concat(ma(Ka.apply(0, arguments))),
            d = new vl(b());
        c.forEach(function(e) {
            return e.ba(a)
        });
        return Al(d)
    }

    function Cl(a, b) {
        return a == b
    };

    function Gl() {
        this.j = []
    }

    function Hl(a, b) {
        Gb(a.j, function(c) {
            c(b)
        })
    }

    function Il(a) {
        this.j = a
    }
    Il.prototype.ba = function(a) {
        this.j.j.push(a)
    };
    Il.prototype.map = function(a) {
        var b = new Gl;
        this.ba(function(c) {
            return Hl(b, a(c))
        });
        return new Il(b)
    };

    function Jl() {
        var a = new Gl;
        Ka.apply(0, arguments).forEach(function(b) {
            b.ba(function(c) {
                Hl(a, c)
            })
        });
        return new Il(a)
    };

    function Kl(a) {
        var b = this;
        this.l = a;
        this.j = new vl(null);
        this.A = new vl(null);
        this.B = new Gl;
        this.F = function(c) {
            null == b.j.R && 1 == c.touches.length && U(b.j, c.touches[0])
        };
        this.C = function(c) {
            var d = b.j.R;
            null != d && (c = Ll(d, c.changedTouches), null != c && (U(b.j, null), U(b.A, null), Hl(b.B, Ml(d, c))))
        };
        this.D = function(c) {
            var d = b.j.R;
            null != d && (d = Ll(d, c.changedTouches), null != d && (U(b.A, d), c.preventDefault()))
        }
    }

    function Nl(a) {
        return Al(Dl(a.j, a.A).map(function(b) {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : Ml(c, b)
        }))
    }

    function Ml(a, b) {
        return {
            qe: b.pageX - a.pageX,
            re: b.pageY - a.pageY
        }
    }

    function Ll(a, b) {
        if (null == b) return null;
        for (var c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function Ol(a, b) {
        var c = this;
        this.B = a;
        this.C = b;
        this.j = new vl(null);
        this.l = new vl(null);
        this.A = new Gl;
        this.H = function(d) {
            U(c.j, d)
        };
        this.D = function(d) {
            var e = c.j.R;
            null != e && (U(c.j, null), U(c.l, null), Hl(c.A, Pl(e, d)))
        };
        this.F = function(d) {
            null != c.j.R && (U(c.l, d), d.preventDefault())
        }
    }

    function Ql(a) {
        return Al(Dl(a.j, a.l).map(function(b) {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : Pl(c, b)
        }))
    }

    function Pl(a, b) {
        return {
            qe: b.screenX - a.screenX,
            re: b.screenY - a.screenY
        }
    };

    function Rl(a, b) {
        var c = new Sl(a, b);
        return function() {
            return Tl(c)
        }
    }

    function Sl(a, b) {
        this.A = a;
        this.B = b;
        this.l = null;
        this.j = !1
    }

    function Tl(a) {
        if (a.j) return !1;
        if (null == a.l) return Ul(a), !0;
        var b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return Ul(a), !0;
        Vl(a, b);
        return !0
    }

    function Vl(a, b) {
        a.j = !0;
        a.A.setTimeout(function() {
            a.j = !1;
            Ul(a)
        }, b)
    }

    function Ul(a) {
        a.l = (new Date).getTime();
        a.B()
    };

    function Wl(a, b) {
        this.j = a;
        this.l = b
    }

    function Xl(a) {
        return Yl(Ql(a.j), Nl(a.l))
    }

    function Zl(a) {
        return Jl(new Il(a.j.A), new Il(a.l.B))
    }

    function Yl(a, b) {
        return Dl(a, b).map(function(c) {
            var d = c.second;
            return c.first || d || null
        })
    };

    function $l(a, b) {
        T.call(this);
        var c = this;
        this.win = a;
        this.element = b;
        this.j = !1;
        this.l = new vl(new jg(this.element.offsetWidth, this.element.offsetHeight));
        this.A = new ResizeObserver(function() {
            am(c)
        })
    }
    z($l, T);

    function bm(a, b) {
        return new $l(a, b)
    }

    function am(a) {
        a.win.requestAnimationFrame(function() {
            a.D || U(a.l, new jg(a.element.offsetWidth, a.element.offsetHeight))
        })
    }
    $l.prototype.W = function() {
        this.A.disconnect();
        T.prototype.W.call(this)
    };

    function cm(a, b, c) {
        this.A = a;
        this.j = b;
        this.l = c
    }

    function dm(a, b) {
        return {
            top: a.j - b,
            right: a.A + a.l,
            bottom: a.j + b,
            left: a.A
        }
    };

    function em(a, b) {
        this.j = a;
        this.l = b
    }
    em.prototype.getHeight = function() {
        return this.l
    };

    function fm(a) {
        return new em(Math.round(a.j), Math.round(a.l))
    }

    function gm(a, b) {
        a = a.getBoundingClientRect();
        return new em(a.top + $k(b), a.bottom - a.top)
    };

    function hm(a) {
        var b = this;
        this.j = a;
        this.l = [];
        this.D = !1;
        this.C = this.A = null;
        this.F = Rl(a, function() {
            if (null != b.C) {
                var c = Uk(b.j, !0) - b.C;
                1E3 < c && im(b, c)
            }
        });
        this.B = null
    }
    hm.prototype.init = function(a, b) {
        var c = this;
        null == a ? (this.C = a = Uk(this.j, !0), this.j.addEventListener("scroll", this.F), null != b && b(a)) : this.B = this.j.setTimeout(function() {
            c.init(void 0, b)
        }, a)
    };
    hm.prototype.Fa = function() {
        null != this.B && this.j.clearTimeout(this.B);
        this.j.removeEventListener("scroll", this.F);
        this.l = [];
        this.A = null
    };
    hm.prototype.addListener = function(a) {
        this.D ? a(this.A) : this.l.push(a)
    };

    function im(a, b) {
        a.D = !0;
        a.A = b;
        a.l.forEach(function(c) {
            c(a.A)
        });
        a.l = []
    };

    function jm(a, b, c) {
        this.win = a;
        this.j = b;
        this.A = c;
        this.l = null
    }

    function km(a) {
        return new jm(a, new sl(a.document.body), new sl(a.document.documentElement))
    }

    function lm(a) {
        null === a.l && (a.l = a.win.pageYOffset, ul(a.j, "position", "fixed"), ul(a.j, "top", -a.l + "px"), ul(a.j, "width", "100%"));
        ul(a.j, "overflow-x", "hidden");
        ul(a.j, "overflow-y", "hidden");
        ul(a.A, "overflow-x", "hidden");
        ul(a.A, "overflow-y", "hidden")
    }

    function mm(a) {
        null !== a.l && (a.win.scrollTo(0, a.l), a.l = null)
    };

    function nm(a, b) {
        return a.reduce(function(c, d) {
            return c.concat(b(d))
        }, [])
    };

    function om(a) {
        this.j = void 0 === a ? 1 : a
    }
    om.prototype.next = function() {
        var a = 48271 * this.j % 2147483647;
        this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
        return this.j / 2147483647
    };

    function pm(a) {
        this.j = a.slice(0)
    }
    q = pm.prototype;
    q.forEach = function(a) {
        var b = this;
        this.j.forEach(function(c, d) {
            return void a(c, d, b)
        })
    };
    q.filter = function(a) {
        return new pm(Hb(this.j, a))
    };

    function qm(a, b, c) {
        var d = [];
        a = y(a.j);
        for (var e = a.next(); !e.done; e = a.next()) e = e.value, b(e) ? d.push(e) : c(e);
        return new pm(d)
    }
    q.apply = function(a) {
        return new pm(a(this.j.slice(0)))
    };
    q.sort = function(a) {
        return new pm(this.j.slice(0).sort(a))
    };
    q.get = function(a) {
        return this.j[a]
    };
    q.add = function(a) {
        var b = this.j.slice(0);
        b.push(a);
        return new pm(b)
    };

    function rm(a, b) {
        a = a.j.slice(0);
        var c = new om(void 0 === b ? 1 : b);
        Tb(a, function() {
            return c.next()
        });
        return new pm(a)
    };

    function sm(a) {
        this.j = new ol(a)
    }
    sm.prototype.contains = function(a) {
        return this.j.contains(a)
    };

    function tm(a, b) {
        this.j = a;
        this.l = b
    }

    function um(a) {
        return null != a.j ? a.j.value : null
    }

    function vm(a, b) {
        null != a.j && b(a.j.value)
    }
    tm.prototype.map = function(a) {
        return null != this.j ? (a = a(this.j.value), a instanceof tm ? a : wm(a)) : this
    };

    function xm(a, b) {
        null != a.j || b(a.l);
        return a
    }

    function wm(a) {
        return new tm({
            value: a
        }, null)
    }

    function ym(a) {
        return new tm(null, Error(a))
    }

    function zm(a) {
        try {
            return wm(a())
        } catch (b) {
            return new tm(null, b)
        }
    };

    function Am() {
        this.j = new jl
    }
    Am.prototype.set = function(a, b) {
        var c = this.j.get(a);
        c || (c = new ol, this.j.set(a, c));
        c.add(b)
    };

    function Bm(a) {
        return !a
    }

    function Cm(a) {
        var b = {
            Mc: a
        };
        return function() {
            if (b.Mc) {
                var c = b.Mc;
                delete b.Mc;
                c()
            }
        }
    };

    function Dm(a) {
        I.call(this, a, -1, Em)
    }
    z(Dm, I);
    Dm.prototype.getId = function() {
        return D(this, 3)
    };
    var Em = [4];

    function Fm(a, b) {
        var c = void 0 === b.Dc ? void 0 : b.Dc,
            d = void 0 === b.nd ? void 0 : b.nd,
            e = void 0 === b.Md ? void 0 : b.Md;
        b = void 0 === b.Xc ? void 0 : b.Xc;
        this.C = a;
        this.A = d;
        this.B = new pm(c || []);
        this.l = b;
        this.j = e
    };

    function Gm(a) {
        var b = a.split("~").filter(function(e) {
            return 0 < e.length
        });
        a = new jl;
        b = y(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = c.indexOf("."); - 1 == d ? a.set(c, "") : a.set(c.substring(0, d), c.substring(d + 1))
        }
        return a
    }

    function Hm(a) {
        var b = Im(a);
        a = [];
        b = y(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = String(c.ob);
            a.push(c.Pa + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
        }
        return a.join("~")
    }

    function Im(a) {
        var b = [],
            c = a.B;
        c && c.j.length && b.push({
            Pa: "a",
            ob: Jm(c)
        });
        null != a.A && b.push({
            Pa: "as",
            ob: a.A
        });
        null != a.j && b.push({
            Pa: "i",
            ob: String(a.j)
        });
        null != a.l && b.push({
            Pa: "rp",
            ob: String(a.l)
        });
        b.sort(function(d, e) {
            return d.Pa.localeCompare(e.Pa)
        });
        b.unshift({
            Pa: "t",
            ob: Km(a.C)
        });
        return b
    }

    function Km(a) {
        switch (a) {
            case 0:
                return "aa";
            case 1:
                return "ma";
            default:
                throw Error("Invalid slot type" + a);
        }
    }

    function Jm(a) {
        a = a.j.slice(0).map(Zm);
        a = JSON.stringify(a);
        return Wg(a)
    }

    function Zm(a) {
        var b = {};
        null != D(a, 7) && (b.q = D(a, 7));
        fd(a, 2) && (b.o = D(a, 2));
        fd(a, 5) && (b.p = D(a, 5));
        return b
    };

    function $m(a) {
        I.call(this, a)
    }
    z($m, I);
    $m.prototype.setLocation = function(a) {
        return E(this, 1, a)
    };

    function an() {
        var a = new $m;
        return E(a, 2, 1)
    };

    function bn(a, b) {
        this.vd = a;
        this.j = b
    }
    bn.prototype.yb = function() {
        return this.j
    };

    function cn(a) {
        var b = [].slice.call(arguments).filter(rf(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.vd || []);
            d = t(Object, "assign").call(Object, d, e.yb())
        });
        return new bn(c, d)
    }

    function dn(a) {
        switch (a) {
            case 1:
                return new bn(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new bn(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new bn(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new bn(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function en(a) {
        return null == a ? null : new bn(null, {
            google_ml_rank: a
        })
    }

    function fn(a) {
        return null == a ? null : new bn(null, {
            google_placement_id: Hm(a)
        })
    };

    function gn(a) {
        I.call(this, a)
    }
    z(gn, I);

    function hn() {
        var a = new gn;
        a = E(a, 1, 1);
        var b = new jn;
        b = E(b, 2, !0);
        a = td(a, 2, b);
        b = new kn;
        var c = new ln;
        c = E(c, 1, 1);
        wd(b, 1, ln, c);
        return td(a, 3, b)
    }

    function jn(a) {
        I.call(this, a)
    }
    z(jn, I);

    function kn(a) {
        I.call(this, a, -1, mn)
    }
    z(kn, I);

    function ln(a) {
        I.call(this, a)
    }
    z(ln, I);

    function nn(a) {
        I.call(this, a)
    }
    z(nn, I);
    var mn = [1];

    function on(a) {
        I.call(this, a)
    }
    z(on, I);

    function pn(a) {
        I.call(this, a)
    }
    z(pn, I);

    function qn(a) {
        I.call(this, a)
    }
    z(qn, I);

    function rn(a) {
        I.call(this, a)
    }
    z(rn, I);

    function sn(a) {
        I.call(this, a)
    }
    z(sn, I);

    function tn(a) {
        I.call(this, a, -1, un)
    }
    z(tn, I);

    function vn(a) {
        I.call(this, a)
    }
    z(vn, I);

    function wn(a) {
        I.call(this, a)
    }
    z(wn, I);
    var un = [3];

    function xn(a) {
        I.call(this, a, -1, yn)
    }
    z(xn, I);
    var yn = [2];

    function zn(a) {
        I.call(this, a)
    }
    z(zn, I);

    function An(a) {
        I.call(this, a, -1, Bn)
    }
    z(An, I);
    var Bn = [1];

    function Cn(a) {
        I.call(this, a)
    }
    z(Cn, I);
    Cn.prototype.aa = function() {
        return G(this, Dm, 1)
    };
    Cn.prototype.j = function() {
        return D(this, 2)
    };

    function Dn(a) {
        I.call(this, a)
    }
    z(Dn, I);
    Dn.prototype.getName = function() {
        return D(this, 4)
    };

    function En(a) {
        I.call(this, a)
    }
    z(En, I);

    function Fn(a) {
        I.call(this, a)
    }
    z(Fn, I);

    function Gn(a) {
        I.call(this, a)
    }
    z(Gn, I);
    var Hn = [1, 2, 3];

    function In(a) {
        I.call(this, a)
    }
    z(In, I);

    function Jn(a) {
        I.call(this, a, -1, Kn)
    }
    z(Jn, I);

    function Ln(a) {
        I.call(this, a)
    }
    z(Ln, I);
    var Kn = [1];

    function Mn(a) {
        I.call(this, a)
    }
    z(Mn, I);

    function Nn(a) {
        I.call(this, a, -1, On)
    }
    z(Nn, I);
    var On = [3, 4];

    function Pn(a) {
        I.call(this, a)
    }
    z(Pn, I);

    function Qn(a) {
        I.call(this, a, -1, Rn)
    }
    z(Qn, I);
    Qn.prototype.aa = function() {
        return G(this, Dm, 1)
    };
    Qn.prototype.j = function() {
        return D(this, 2)
    };
    var Rn = [6, 7, 9, 10, 11];

    function Sn(a) {
        I.call(this, a, -1, Tn)
    }
    z(Sn, I);
    var Tn = [4];

    function Un(a) {
        I.call(this, a, -1, Vn)
    }
    z(Un, I);

    function Wn(a) {
        I.call(this, a)
    }
    z(Wn, I);
    var Vn = [6];

    function Xn(a) {
        I.call(this, a, -1, Yn)
    }
    z(Xn, I);

    function Zn(a) {
        I.call(this, a, -1, $n)
    }
    z(Zn, I);

    function ao(a) {
        I.call(this, a)
    }
    z(ao, I);

    function bo(a) {
        I.call(this, a)
    }
    z(bo, I);

    function co(a) {
        I.call(this, a)
    }
    z(co, I);

    function eo(a) {
        I.call(this, a)
    }
    z(eo, I);

    function fo(a) {
        I.call(this, a)
    }
    z(fo, I);
    var Yn = [1, 4],
        $n = [1],
        go = [1, 2];

    function ho(a) {
        I.call(this, a)
    }
    z(ho, I);

    function io(a) {
        I.call(this, a, -1, jo)
    }
    z(io, I);

    function ko(a) {
        return G(a, lo, 13)
    }

    function mo(a) {
        return G(a, no, 15)
    }

    function oo(a) {
        I.call(this, a)
    }
    z(oo, I);

    function po(a) {
        I.call(this, a)
    }
    z(po, I);

    function qo(a) {
        I.call(this, a, -1, ro)
    }
    z(qo, I);

    function so(a) {
        I.call(this, a)
    }
    z(so, I);

    function to(a) {
        I.call(this, a)
    }
    z(to, I);

    function lo(a) {
        I.call(this, a)
    }
    z(lo, I);

    function uo(a) {
        I.call(this, a)
    }
    z(uo, I);

    function no(a) {
        I.call(this, a)
    }
    z(no, I);

    function vo(a) {
        I.call(this, a)
    }
    z(vo, I);

    function wo(a) {
        I.call(this, a)
    }
    z(wo, I);
    var jo = [1, 2, 5, 7],
        ro = [2, 5, 6, 11];

    function xo(a) {
        I.call(this, a)
    }
    z(xo, I);

    function yo(a) {
        try {
            var b = a.localStorage.getItem("google_ama_settings");
            return b ? Gd(xo, b) : null
        } catch (c) {
            return null
        }
    }

    function zo(a, b) {
        if (void 0 !== a.Kc) {
            var c = yo(b);
            c || (c = new xo);
            void 0 !== a.Kc && E(c, 2, a.Kc);
            E(c, 1, Za() + 864E5);
            a = Ed(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = yo(b)) && D(a, 1) < Za()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (d) {}
    };

    function Ao(a, b, c, d) {
        this.B = a;
        this.l = b;
        this.A = c;
        this.j = d
    }
    Ao.prototype.query = function(a) {
        var b = [];
        try {
            b = a.querySelectorAll(this.B)
        } catch (f) {}
        if (!b.length) return [];
        a = Ob(b);
        a = Bo(this, a);
        "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
        if ("number" === typeof this.A) {
            b = [];
            for (var c = 0; c < a.length; c++) {
                var d = Co(a[c]),
                    e = this.A;
                0 > e && (e += d.length);
                0 <= e && e < d.length && b.push(d[e])
            }
            a = b
        }
        return a
    };
    Ao.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.B,
            occurrenceIndex: this.l,
            paragraphIndex: this.A,
            ignoreMode: this.j
        })
    };

    function Bo(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }

    function Co(a) {
        var b = [];
        hl(a.getElementsByTagName("p"), function(c) {
            100 <= Do(c) && b.push(c)
        });
        return b
    }

    function Do(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        hl(a.childNodes, function(c) {
            b += Do(c)
        });
        return b
    }

    function Eo(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function Fo(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Go(a) {
        return il(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function V(a, b) {
        this.j = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function Ho(a, b) {
        this.j = a;
        this.defaultValue = void 0 === b ? 0 : b
    }

    function Io(a) {
        this.j = a;
        this.defaultValue = ""
    };
    var Jo = new V(1084),
        Ko = new V(1082, !0),
        Lo = new Ho(1130, 100),
        Mo = new V(1150),
        No = new Ho(1126, 5E3),
        Oo = new Ho(1032, 200),
        Po = new Io(14),
        Qo = new V(1131, !0),
        Ro = new Ho(1159, 500),
        So = new V(1122, !0),
        To = new V(1196),
        Uo = new V(1170),
        Vo = new V(1160),
        Wo = new V(316),
        Xo = new V(334),
        Yo = new Ho(54),
        Zo = new V(313),
        $o = new Ho(66, -1),
        ap = new Ho(65, -1),
        bp = new V(369),
        cp = new V(1205),
        dp = new V(368),
        ep = new Ho(1169, 61440),
        fp = new V(1171),
        gp = new V(1151),
        hp = new V(1179),
        ip = new Ho(1072, .75),
        jp = new Ho(1168, 61440),
        kp = new V(290),
        lp = new V(154),
        mp = new V(1147),
        np = new V(1197, !0),
        op = new V(380254521),
        pp = new Io(1166),
        qp = new V(447540098),
        rp = new V(449967574, !0),
        sp = new V(447540095, !0),
        tp = new V(447540097),
        up = new V(447540099),
        vp = new V(447540096),
        wp = new V(83),
        xp = new V(439828594),
        yp = new V(77),
        zp = new V(78),
        Ap = new V(309),
        Bp = new V(80),
        Cp = new V(76),
        Dp = new V(1957),
        Ep = new V(380025941),
        Fp = new V(84),
        Gp = new V(1973),
        Hp = new V(188),
        Ip = new V(1971),
        Jp = new V(1162),
        Kp = new V(1175),
        Lp = new V(1120),
        Mp = new Ho(1142, 8),
        Np = new Ho(1165, 1E3),
        Op = new Ho(1158),
        Pp = new Ho(1157),
        Qp = new Ho(1195,
            1),
        Rp = new Ho(1119, 300),
        Sp = new Ho(1193, 100),
        Tp = new V(1191),
        Up = new Ho(1103),
        Vp = new V(1192),
        Wp = new V(1202),
        Xp = new V(1176),
        Yp = new Ho(1114, 1),
        Zp = new Ho(1116, 300),
        $p = new Ho(1110, 5),
        aq = new Ho(1111, 5),
        bq = new Ho(1112, 5),
        cq = new Ho(1113, 5),
        dq = new Ho(1104),
        eq = new Ho(1108),
        fq = new Ho(1106),
        gq = new Ho(1107),
        hq = new Ho(1105),
        iq = new V(1203),
        jq = new V(471002731),
        kq = new Ho(1115, 1),
        lq = new V(1121),
        mq = new Ho(1194, 1),
        nq = new V(471262996),
        oq = new V(469675169),
        pq = new Ho(469675170, 3E4),
        qq = new V(1186, !0),
        rq = new V(1928),
        sq = new V(1941),
        tq = new V(370946349),
        uq = new V(392736476),
        vq = new Ho(406149835),
        wq = new V(432946749),
        xq = new V(432938498),
        yq = new Ho(1935);

    function zq() {
        var a = {};
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.A = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.B = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.C = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function() {}
    }

    function W(a) {
        return Sj(zq).l(a.j, a.defaultValue)
    }

    function X(a) {
        return Sj(zq).A(a.j, a.defaultValue)
    }

    function Aq(a) {
        return Sj(zq).B(a.j, a.defaultValue)
    };

    function Bq(a, b) {
        a = (new rg(a)).createElement("DIV");
        var c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Cq(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Fo(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Dq(a) {
        if (a && a.parentNode) {
            var b = a.parentNode;
            b.removeChild(a);
            Fo(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };

    function Eq(a, b, c, d) {
        d = void 0 === d ? 0 : d;
        if (W(Zo)) {
            d = void 0 === d ? 0 : d;
            var e = Fq(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.Yb(c);) b = c;
                e = {
                    anchor: b,
                    position: e.pc
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Cq(a, e.anchor, e.position)
        } else Cq(a, b, c)
    }

    function Fq(a, b, c) {
        function d(f) {
            f = Gq(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = Gq(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: Hq(a.previousSibling, e),
                    Yb: function(f) {
                        return Hq(f.previousSibling, e)
                    },
                    pc: 0
                };
            case 2:
                return {
                    init: Hq(a.lastChild, e),
                    Yb: function(f) {
                        return Hq(f.previousSibling, e)
                    },
                    pc: 0
                };
            case 3:
                return {
                    init: Hq(a.nextSibling, d),
                    Yb: function(f) {
                        return Hq(f.nextSibling, d)
                    },
                    pc: 3
                };
            case 1:
                return {
                    init: Hq(a.firstChild, d),
                    Yb: function(f) {
                        return Hq(f.nextSibling, d)
                    },
                    pc: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function Gq(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Hq(a, b) {
        return a && b(a) ? a : null
    };

    function Iq(a, b) {
        try {
            return (void 0 === b ? 0 : b) ? (new jg(a.innerWidth, a.innerHeight)).round() : vg(a || window).round()
        } catch (c) {
            return new jg(-12245933, -12245933)
        }
    }

    function Jq(a) {
        a = void 0 === a ? B : a;
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function Kq(a, b) {
        b = void 0 === b ? B : b;
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new ig(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function Lq(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function Mq() {
        this.j = [];
        this.l = -1
    }
    Mq.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && t(Number, "isInteger").call(Number, a) && this.j[a] !== b && (this.j[a] = b, this.l = -1)
    };
    Mq.prototype.get = function(a) {
        return !!this.j[a]
    };

    function Nq(a) {
        -1 === a.l && (a.l = Jb(a.j, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }, 0));
        return a.l
    };

    function Oq(a, b, c) {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (a && a.top == a) return !1;
        var d = a.document,
            e = d.documentElement;
        if (b && c) {
            var f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    }

    function Pq(a, b) {
        Ug(a, function(c, d) {
            b[d] = c
        })
    }

    function Qq(a) {
        var b = a.location.href;
        if (a == a.top) return {
            url: b,
            Qc: !0
        };
        var c = !1,
            d = a.document;
        d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            Qc: c
        }
    }

    function Rq(a) {
        if (a == a.top) return 0;
        for (; a && a != a.top && Mg(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function Sq(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function Tq(a, b) {
        var c = 40 === a.google_reactive_ad_format,
            d = 16 === a.google_reactive_ad_format;
        return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
    }

    function Uq(a, b, c) {
        a = a.style;
        "rtl" == b ? a.marginRight = c : a.marginLeft = c
    }

    function Vq(a, b, c) {
        a = Sq(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Wq(a, b) {
        b = b.parentElement;
        return b ? (a = Sg(b, a)) ? a.direction : "" : ""
    }

    function Xq(a, b, c) {
        if (0 === Vq(a, b, c)) return !1;
        Uq(b, c, "0px");
        var d = Vq(a, b, c);
        Uq(b, c, -1 * d + "px");
        a = Vq(a, b, c);
        0 !== a && a !== d && Uq(b, c, d / (a - d) * d + "px");
        return !0
    };
    var Yq = RegExp("(^| )adsbygoogle($| )");

    function Zq(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = og(d.Wc);
            a[e] = d.value
        }
    }

    function $q(a, b, c, d, e, f) {
        a = ar(a, e);
        a.ua.setAttribute("data-ad-format", d ? d : "auto");
        br(a, b, c, f);
        return a
    }

    function br(a, b, c, d) {
        var e = [];
        if (d = d && d.vd) a.Wa.className = d.join(" ");
        a = a.ua;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function ar(a, b) {
        var c = Bq(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.oc && Zq(d, b.oc);
        a = (new rg(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.hd && (d.marginTop = b.hd);
        b.Ec && (d.marginBottom = b.Ec);
        b.lb && Zq(d, b.lb);
        c.appendChild(a);
        return {
            Wa: c,
            ua: a
        }
    }

    function cr(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.yb();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function dr(a) {
        var b = Go(a.document);
        Gb(b, function(c) {
            var d = er(a, c),
                e;
            if (e = d) e = Sq(c, a), e = !((e ? e.y : 0) < Vk(a));
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), cr(a, c))
        })
    }

    function er(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (var c in ag) a[ag[c]] && (b[ag[c]] = a[ag[c]]);
        return b
    };
    var fr = x(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function gr() {
        var a = void 0 === a ? "jserror" : a;
        var b = void 0 === b ? .01 : b;
        var c = void 0 === c ? R(fr) : c;
        this.l = a;
        this.j = null;
        this.A = !1;
        this.D = Math.random();
        this.B = b;
        this.C = this.na;
        this.F = c
    }
    q = gr.prototype;
    q.he = function(a) {
        this.j = a
    };
    q.ie = function(a) {
        this.A = a
    };
    q.na = function(a, b, c, d, e) {
        c = void 0 === c ? this.B : c;
        e = void 0 === e ? this.l : e;
        if ((this.A ? this.D : Math.random()) > c) return !1;
        b.error && b.meta && b.id || (b = new vi(b, {
            context: a,
            id: e
        }));
        if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
        B.google_js_errors = B.google_js_errors || [];
        B.google_js_errors.push(b);
        B.error_rep_loaded || (Qg(B.document, Nh(this.F)), B.error_rep_loaded = !0);
        return !1
    };
    q.La = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.C(a, d, this.B, c, this.l)) throw d;
        }
    };
    q.Fb = function(a, b) {
        var c = this;
        return function() {
            var d = Ka.apply(0, arguments);
            return c.La(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    q.Ma = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.na(a, d instanceof Error ? d : Error(d))
        })
    };

    function hr(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }

    function ir(a, b, c, d) {
        var e = !0;
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = Qi(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && hr(t(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (Qi() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter =
                        f.google_rum_task_id_counter || 1
                }), f)
            }
            return l
        }
    }

    function jr(a, b) {
        return ir(754, a, function(c, d) {
            (new gr).na(c, d)
        }, b)
    };

    function kr(a, b, c) {
        return ir(a, b, void 0, c).apply()
    }

    function lr(a, b) {
        return jr(a, b).apply()
    }

    function mr(a) {
        if (!a) return null;
        var b = D(a, 7);
        if (D(a, 1) || a.getId() || 0 < jd(a, 4).length) {
            b = jd(a, 4);
            var c = D(a, 3),
                d = D(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Eo(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Eo(b[c]);
            a = (b = e) ? new Ao(b, D(a, 2), D(a, 5), nr(D(a, 6))) : null
        } else a = b ? new Ao(b, D(a, 2), D(a, 5), nr(D(a, 6))) : null;
        return a
    }
    var or = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function nr(a) {
        return null == a ? a : or[a]
    }

    function pr(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = D(a[c], 1),
                e = D(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.Wc = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function qr(a, b) {
        var c = {};
        a && (c.hd = D(a, 1), c.Ec = D(a, 2), c.clearBoth = !!ld(a, 3));
        b && (c.oc = pr(H(b, Mn, 3)), c.lb = pr(H(b, Mn, 4)));
        return c
    }
    var rr = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        sr = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    var tr = {
            za: "ama_success",
            sa: .1,
            wa: !0
        },
        ur = {
            za: "ama_failure",
            sa: .1,
            wa: !0
        },
        vr = {
            za: "ama_inf_scr",
            sa: .1,
            wa: !0
        },
        wr = {
            za: "ama_inf_scr",
            sa: .1,
            wa: !0
        },
        xr = {
            za: "ama_coverage",
            sa: .1,
            wa: !0
        },
        yr = {
            za: "ama_inf_scr",
            sa: 1,
            wa: !0
        },
        zr = {
            za: "ama_opt",
            sa: .1,
            wa: !0
        },
        Ar = {
            za: "ama_aud_sen",
            sa: 1,
            wa: !0
        },
        Br = {
            za: "ama_improv",
            sa: .1,
            wa: !0
        };

    function Cr(a) {
        this.F = {};
        this.F.c = a;
        this.C = [];
        this.A = null;
        this.D = [];
        this.H = 0
    }
    Cr.prototype.Oa = function(a) {
        this.F.wpc = a;
        return this
    };

    function Dr(a, b) {
        for (var c = 0; c < b.length; c++) a.qa(b[c]);
        return a
    }
    Cr.prototype.qa = function(a) {
        for (var b = 0; b < this.C.length; b++)
            if (this.C[b] == a) return this;
        this.C.push(a);
        return this
    };

    function Er(a, b) {
        a.A = a.A ? a.A : b;
        return a
    }
    Cr.prototype.B = function(a) {
        var b = $d(this.F);
        0 < this.H && (b.t = this.H);
        b.err = this.C.join();
        b.warn = this.D.join();
        this.A && (b.excp_n = this.A.name, b.excp_m = this.A.message && this.A.message.substring(0, 512), b.excp_s = this.A.stack && bj(this.A.stack, ""));
        b.w = 0 < a.innerWidth ? a.innerWidth : null;
        b.h = 0 < a.innerHeight ? a.innerHeight : null;
        return b
    };

    function Fr(a) {
        this.j = a
    }

    function Gr(a, b, c) {
        c = c.B(a.j);
        b.wa && (c.pvc = th(a.j));
        0 < b.sa && (c.r = b.sa, Hr(a, b, c))
    }

    function Hr(a, b, c) {
        !b.wa || "pvc" in c || (c.pvc = th(a.j));
        ik(b.za, c, b.sa)
    };

    function Ir(a, b, c) {
        this.j = a;
        this.A = b;
        this.l = c
    }

    function Jr(a, b, c) {
        var d, e = a.A,
            f = Object,
            g = f.assign,
            h = Vk(a.j),
            k = null == (d = G(a.l, nn, 4)) ? void 0 : xd(d, 2);
        a = a.j;
        a = a.google_ama_state = a.google_ama_state || {};
        Hr(e, Ar, g.call(f, {}, c, {
            evt: b,
            vh: h,
            eid: k,
            psr: a.audioSenseSpaceReserved ? 1 : 0
        }))
    };

    function Kr(a) {
        this.j = a
    }
    Kr.prototype.l = function(a, b, c, d) {
        return $q(d.document, a, null, null, this.j, b)
    };
    Kr.prototype.A = function() {
        return null
    };

    function Lr(a) {
        this.j = a
    }
    Lr.prototype.l = function(a, b, c, d) {
        var e = 0 < H(this.j, Nn, 9).length ? H(this.j, Nn, 9)[0] : null,
            f = qr(G(this.j, Pn, 3), e);
        if (!e) return null;
        if (e = D(e, 1)) {
            d = d.document;
            var g = c.tagName;
            c = (new rg(d)).createElement(g);
            c.style.clear = f.clearBoth ? "both" : "none";
            "A" == g && (c.style.display = "block");
            c.style.padding = "0px";
            c.style.margin = "0px";
            f.oc && Zq(c.style, f.oc);
            d = (new rg(d)).createElement("INS");
            f.lb && Zq(d.style, f.lb);
            c.appendChild(d);
            f = {
                Wa: c,
                ua: d
            };
            f.ua.setAttribute("data-ad-type", "text");
            f.ua.setAttribute("data-native-settings-key", e);
            br(f, a, null, b);
            a = f
        } else a = null;
        return a
    };
    Lr.prototype.A = function() {
        var a = 0 < H(this.j, Nn, 9).length ? H(this.j, Nn, 9)[0] : null;
        if (!a) return null;
        a = H(a, Mn, 3);
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if ("height" == D(c, 1) && 0 < parseInt(D(c, 2), 10)) return parseInt(D(c, 2), 10)
        }
        return null
    };

    function Mr(a) {
        this.j = a
    }
    Mr.prototype.l = function(a, b, c, d) {
        if (!this.j) return null;
        var e = this.j.google_ad_format || null,
            f = this.j.google_ad_slot || null;
        if (c = c.style) {
            for (var g = [], h = 0; h < c.length; h++) {
                var k = c.item(h);
                "width" !== k && "height" !== k && g.push({
                    Wc: k,
                    value: c.getPropertyValue(k)
                })
            }
            c = {
                lb: g
            }
        } else c = {};
        a = $q(d.document, a, f, e, c, b);
        a.ua.setAttribute("data-pub-vars", JSON.stringify(this.j));
        return a
    };
    Mr.prototype.A = function() {
        return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
    };
    Mr.prototype.yb = function() {
        return this.j
    };

    function Nr(a) {
        this.l = a
    }
    Nr.prototype.j = function() {
        var a = {};
        return new bn([], (a.google_ad_type = this.l, a.google_reactive_ad_format = 26, a.google_ad_format = "fluid", a))
    };

    function Or(a, b) {
        this.B = a;
        this.A = b
    }
    Or.prototype.j = function() {
        return this.A
    };
    Or.prototype.l = function(a) {
        a = this.B.query(a.document);
        return 0 < a.length ? a[0] : null
    };

    function Pr(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        l = void 0 === l ? null : l;
        m = void 0 === m ? null : m;
        n = void 0 === n ? null : n;
        p = void 0 === p ? null : p;
        this.I = a;
        this.F = b;
        this.O = c;
        this.K = d;
        this.Ya = e;
        this.Rc = f;
        this.vc = g ? g : new $m;
        this.A = h;
        this.ea = k;
        this.H = l;
        this.B = m;
        (a = !m) || (a = !(m.aa() && null != D(m.aa(), 5)));
        this.ta = !a;
        this.D = n;
        this.U = p;
        this.P = [];
        this.C = !1;
        this.L = new jl;
        this.M = this.l = null
    }

    function Qr(a) {
        return a.F instanceof Mr ? a.F.yb() : null
    }

    function Rr(a, b, c) {
        ll(a.L, b) || a.L.set(b, []);
        a.L.get(b).push(c)
    }
    Pr.prototype.V = function() {
        return this.A
    };
    Pr.prototype.j = function() {
        return this.I.j()
    };

    function Sr(a, b) {
        a.C = !0;
        W(To) && (a.l && Dq(a.l), a.l = null);
        null != b && a.P.push(b)
    }

    function Tr(a) {
        return W(To) ? (a.M || (a.M = a.I.l(a.A)), a.M) : a.I.l(a.A)
    }

    function Ur(a) {
        var b = a.K;
        a = a.A.document.createElement("div");
        W(To) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function Vr(a) {
        return Bq(a.A.document, a.K || !1)
    }

    function Wr(a) {
        return a.F.A(a.A)
    }

    function Xr(a, b, c) {
        for (var d = [], e = 0; e < a.length; e++) {
            var f = a[e];
            var g = e,
                h = b,
                k = c,
                l = f.aa();
            if (l) {
                var m = mr(l);
                if (m) {
                    var n = rr[D(f, 2)];
                    var p = void 0 === n ? null : n;
                    if (null === p) f = null;
                    else {
                        n = (n = G(f, Pn, 3)) ? ld(n, 3) : null;
                        m = new Or(m, p);
                        p = jd(f, 10).slice(0);
                        fd(l, 5) && p.push(1);
                        var u = k ? k : {};
                        k = D(f, 12);
                        l = gd(f, $m, 4) ? G(f, $m, 4) : null;
                        1 == D(f, 8) || 2 == D(f, 8) && W(Uo) ? (u = u.Pe || null, f = new Pr(m, new Kr(qr(G(f, Pn, 3), null)), u, n, 0, p, l, h, g, k, f)) : f = 2 == D(f, 8) ? new Pr(m, new Lr(f), u.vf || new Nr("text"), n, 1, p, l, h, g, k, f) : null
                    }
                } else f = null
            } else f =
                null;
            null !== f && d.push(f)
        }
        return d
    }

    function Yr(a) {
        return a.C
    }

    function Zr(a) {
        return a.ta
    };

    function $r(a) {
        return (null == a ? 0 : a.google_ad_slot) ? wm(new Fm(1, {
            nd: a.google_ad_slot
        })) : ym("Missing dimension when creating placement id")
    }

    function as(a) {
        switch (a.Ya) {
            case 0:
            case 1:
                var b = a.B;
                null == b ? a = null : (a = b.aa(), null == a ? a = null : (b = b.j(), a = null == b ? null : new Fm(0, {
                    Dc: [a],
                    Xc: b
                })));
                return null != a ? wm(a) : ym("Missing dimension when creating placement id");
            case 2:
                return a = bs(a), null != a ? wm(a) : ym("Missing dimension when creating placement id");
            default:
                return ym("Invalid type: " + a.Ya)
        }
    }

    function bs(a) {
        if (null == a || null == a.D) return null;
        var b = G(a.D, Dm, 1),
            c = G(a.D, Dm, 2);
        if (null == b || null == c) return null;
        var d = a.U;
        if (null == d) return null;
        a = a.j();
        return null == a ? null : new Fm(0, {
            Dc: [b, c],
            Md: d,
            Xc: sr[a]
        })
    };

    function cs(a, b, c) {
        this.X = a;
        this.l = b;
        this.Y = c;
        this.j = null
    }

    function ds(a) {
        var b = Qr(a.X);
        return (b ? $r(b) : as(a.X)).map(function(c) {
            return Hm(c)
        })
    }

    function es(a) {
        a.j = a.j || ds(a);
        return a.j
    }
    cs.prototype.aa = function() {
        return this.l
    };

    function fs(a, b) {
        if (a.X.C) throw Error("AMA:AP:AP");
        Eq(b, a.aa(), a.X.j());
        Sr(a.X, b)
    }
    cs.prototype.fill = function(a, b) {
        var c = this.X;
        (a = c.F.l(a, b, this.l, c.A)) && fs(this, a.Wa);
        return a
    };

    function gs(a, b) {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = sb(b, "&") ? lg(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && pl.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (gs(a, b[c])) return !0
        }
        return !1
    }

    function hs(a) {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };

    function is() {
        this.j = {
            clearBoth: !0
        }
    }
    is.prototype.l = function(a, b, c, d) {
        return $q(d.document, a, null, null, this.j, b)
    };
    is.prototype.A = function(a) {
        return hs(Ok(a))
    };

    function js(a) {
        this.l = a
    }
    js.prototype.j = function(a) {
        a = Math.floor(a.l);
        var b = hs(a),
            c = {};
        return new bn(["ap_container"], (c.google_reactive_ad_format = 27, c.google_responsive_auto_format = 16, c.google_max_num_ads = 1, c.google_ad_type = this.l, c.google_ad_format = a + "x" + b, c.google_ad_width = a, c.google_ad_height = b, c))
    };

    function ks(a, b) {
        this.B = a;
        this.A = b
    }
    ks.prototype.l = function() {
        return this.B
    };
    ks.prototype.j = function() {
        return this.A
    };
    var ls = {
        TABLE: {
            qb: new sm([1, 2])
        },
        THEAD: {
            qb: new sm([0, 3, 1, 2])
        },
        TBODY: {
            qb: new sm([0, 3, 1, 2])
        },
        TR: {
            qb: new sm([0, 3, 1, 2])
        },
        TD: {
            qb: new sm([0, 3])
        }
    };

    function ms(a, b, c, d, e, f, g) {
        this.A = a;
        this.pb = b.slice(0);
        this.j = c;
        this.yc = d;
        this.zc = e;
        this.B = f;
        this.l = g
    }
    ms.prototype.V = function() {
        return this.l
    };

    function ns(a) {
        var b = an();
        return new Pr(new ks(a.yc, a.zc), new Kr({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.A, a.j)
    }

    function os(a, b, c, d) {
        var e = c.childNodes,
            f = [];
        b = y(c.querySelectorAll(b));
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var g = Fb(e, c);
            0 > g || f.push(new ms(a, [c], g, c, 3, Eg(c).trim(), d))
        }
        return f
    }

    function ps(a, b, c) {
        for (var d = [], e = [], f = b.childNodes, g = f.length, h = 0, k = "", l = 0; l < g; l++) {
            var m = f[l];
            if (1 == m.nodeType || 3 == m.nodeType) {
                if (1 != m.nodeType) var n = null;
                else "BR" == m.tagName ? n = m : (n = c.getComputedStyle(m).getPropertyValue("display"), n = "inline" == n || "inline-block" == n ? null : m);
                n ? (d.length && k && e.push(new ms(a, d, l - 1, n, 0, k, c)), d = [], h = l + 1, k = "") : (d.push(m), m = Eg(m).trim(), k += m && k ? " " + m : m)
            }
        }
        d.length && k && e.push(new ms(a, d, h, b, 2, k, c));
        return e
    }

    function qs(a, b) {
        return a.j - b.j
    };

    function rs(a, b, c) {
        this.j = a;
        this.B = b.Tb;
        this.C = b.Dd;
        this.l = b.articleStructure;
        this.A = c
    }

    function ss(a) {
        return Nb(a.C ? ps(a.l, a.j, a.A) : [], a.B ? os(a.l, a.B, a.j, a.A) : []).filter(function(b) {
            var c = b.yc.tagName;
            c ? (c = ls[c.toUpperCase()], b = null != c && c.qb.contains(b.zc)) : b = !1;
            return !b
        })
    };

    function ts(a, b) {
        return lr(function() {
            if (W(To)) {
                for (var c = [], d = [], e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = Tr(f);
                    if (g) {
                        if (!f.l && !f.C) {
                            var h = null;
                            try {
                                var k = Tr(f);
                                if (k) {
                                    h = Ur(f);
                                    Eq(h, k, f.j());
                                    var l = h
                                } else l = null
                            } catch (P) {
                                throw Dq(h), P;
                            }
                            f.l = l
                        }(h = f.l) && d.push({
                            Nf: f,
                            anchorElement: g,
                            ff: h
                        })
                    }
                }
                if (0 < d.length)
                    for (l = $k(b), k = al(b), e = 0; e < d.length; e++) h = d[e], f = h.Nf, g = h.anchorElement, h = us(h.ff, k, l), c.push(new cs(f, g, h));
                l = c
            } else {
                l = [];
                k = [];
                try {
                    for (var m = [], n = 0; n < a.length; n++) {
                        var p = a[n],
                            u = Tr(p);
                        u && m.push({
                            Yd: p,
                            anchorElement: u
                        })
                    }
                    for (p =
                        0; p < m.length; p++) {
                        u = k;
                        g = u.push;
                        var v = m[p],
                            A = v.anchorElement,
                            F = v.Yd,
                            S = Ur(F);
                        try {
                            Eq(S, A, F.j()), h = S
                        } catch (P) {
                            throw Dq(S), P;
                        }
                        g.call(u, h)
                    }
                    c = $k(b);
                    d = al(b);
                    for (g = 0; g < k.length; g++) e = us(k[g], d, c), f = m[g], l.push(new cs(f.Yd, f.anchorElement, e))
                } finally {
                    for (c = 0; c < k.length; c++) Dq(k[c])
                }
            }
            return l
        }, b)
    }

    function us(a, b, c) {
        a = a.getBoundingClientRect();
        return new cm(a.left + b, a.top + c, a.right - a.left)
    };

    function vs(a, b, c) {
        this.j = a;
        this.C = b;
        this.B = c;
        this.l = !1;
        this.A = 0
    }
    vs.prototype.next = function() {
        if (!this.l) {
            if (this.A >= this.B.length) var a = null;
            else {
                a = this.B[this.A++].pb[0];
                if (Ra(a) && 1 == a.nodeType) a = ws(this, a, 0);
                else {
                    var b = this.j.document.createElement("div");
                    M(b, {
                        display: "none"
                    });
                    a.parentNode.insertBefore(b, a);
                    a = ws(this, b, 3)
                }
                a = ts([a], this.j)[0] || null
            }
            if (a) return a;
            this.l = !0
        }
        return null
    };

    function ws(a, b, c) {
        return new Pr(new ks(b, c), new Kr({}), null, !0, 2, [], null, a.j, null, null, null, a.C.l, null)
    }

    function xs(a, b) {
        var c = ss(b);
        c.sort(qs);
        return new vs(a, b, c)
    };

    function ys(a) {
        this.l = a
    }
    ys.prototype.j = function() {
        return this.l.next()
    };
    var zs = {
            1: "0.5vp",
            2: "300px"
        },
        As = {
            1: 700,
            2: 1200
        },
        Bs = {},
        Cs = (Bs[1] = {
            le: "3vp",
            dd: "1vp",
            ke: "0.3vp"
        }, Bs[2] = {
            le: "900px",
            dd: "300px",
            ke: "90px"
        }, Bs);

    function Ds(a, b, c, d, e, f) {
        this.A = a;
        this.C = b;
        this.D = c.sort(function(g, h) {
            return g.adCount - h.adCount
        });
        this.l = d;
        this.B = e;
        this.j = f
    }

    function Es(a, b) {
        var c = {
            jc: a.A,
            gb: a.C
        };
        a = y(a.D);
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, d.adCount <= b && (c = d.cd);
        return c
    }

    function Fs(a, b, c) {
        var d = Gs(a),
            e = Vk(a) || As[d],
            f = void 0;
        c && (f = (c = (c = Hs(H(c, tn, 2), d)) ? G(c, wn, 7) : void 0) ? Is(c, e) : void 0);
        c = f;
        f = Gs(a);
        a = Vk(a) || As[f];
        var g = Js(Cs[f].dd, a);
        a = null === g ? Ks(f, a) : new Ds(g, g, Ls(g, g, 8), 8, .3, c);
        c = Js(Cs[d].le, e);
        f = Js(Cs[d].dd, e);
        e = Js(Cs[d].ke, e);
        d = a.A;
        c && e && f && void 0 !== b && (d = .5 >= b ? f + (1 - 2 * b) * (c - f) : e + (2 - 2 * b) * (f - e));
        b = d;
        return new Ds(d, b, Ls(d, b, a.l), a.l, a.B, a.j)
    }

    function Ms(a, b) {
        var c = Gs(a);
        a = Vk(a) || As[c];
        if (b = Hs(H(b, tn, 2), c))
            if (b = Ns(b, a)) return b;
        return Ks(c, a)
    }

    function Os(a) {
        var b = Gs(a);
        return Ks(b, Vk(a) || As[b])
    }

    function Ps(a, b, c) {
        var d = ld(b, 2);
        b = G(b, tn, 1);
        var e = Vk(c) || As[Gs(c)],
            f;
        c = null != (f = Js(null == b ? void 0 : D(b, 2), e)) ? f : a.A;
        var g;
        f = null != (g = Js(null == b ? void 0 : D(b, 5), e)) ? g : a.C;
        var h;
        d = d ? [] : null != (h = Qs(null == b ? void 0 : H(b, vn, 3), e)) ? h : a.D;
        var k;
        h = null != (k = null == b ? void 0 : D(b, 4)) ? k : a.l;
        var l;
        k = null != (l = null == b ? void 0 : kd(b, 6)) ? l : a.B;
        var m;
        l = null != (m = (null == b ? 0 : gd(b, wn, 7)) ? Is(G(b, wn, 7), e) : null) ? m : a.j;
        return new Ds(c, f, d, h, k, l)
    }

    function Hs(a, b) {
        a = y(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value, D(c, 1) == b) return c;
        return null
    }

    function Qs(a, b) {
        if (void 0 === a) return null;
        var c = [];
        a = y(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            var e = D(d, 1),
                f = Js(D(d, 2), b);
            if ("number" !== typeof e || null === f) return null;
            c.push({
                adCount: e,
                cd: {
                    jc: f,
                    gb: Js(D(d, 3), b)
                }
            })
        }
        return c
    }

    function Ns(a, b) {
        var c = Js(D(a, 2), b),
            d = Js(D(a, 5), b);
        if (null === c) return null;
        var e = D(a, 4);
        if (null == e) return null;
        var f = H(a, vn, 3);
        f = Qs(f, b);
        if (null === f) return null;
        var g = G(a, wn, 7);
        return new Ds(c, d, f, e, kd(a, 6), g ? Is(g, b) : void 0)
    }

    function Ks(a, b) {
        a = Js(zs[a], b);
        return new Ds(null === a ? Infinity : a, null, [], 3, null)
    }

    function Js(a, b) {
        if (!a) return null;
        var c = parseFloat(a);
        return isNaN(c) ? null : t(a, "endsWith").call(a, "px") ? c : t(a, "endsWith").call(a, "vp") ? c * b : null
    }

    function Gs(a) {
        a = 900 <= Rk(a);
        return Jg() && !a ? 1 : 2
    }

    function Ls(a, b, c) {
        if (4 > c) return [];
        var d = Math.ceil(c / 2);
        return [{
            adCount: d,
            cd: {
                jc: 2 * a,
                gb: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            cd: {
                jc: 3 * a,
                gb: 3 * b
            }
        }]
    }

    function Is(a, b) {
        return {
            Rd: Js(D(a, 2), b) || 0,
            Qd: D(a, 3) || 1,
            nb: Js(D(a, 1), b) || 0
        }
    };

    function Rs(a, b) {
        this.j = a;
        this.l = b
    }

    function Ss(a, b, c) {
        return Ek({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function Ts(a) {
        if (!a.length) return null;
        var b = Fk(a.map(function(c) {
            return c.j
        }));
        a = a.reduce(function(c, d) {
            return c + d.l
        }, 0);
        return new Rs(b, a)
    };

    function Us(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };

    function Vs(a, b) {
        var c = Ws(b, ".google-auto-placed"),
            d = Xs(b),
            e = Ys(b),
            f = Zs(b),
            g = $s(b),
            h = at(b),
            k = Ws(b, "div.googlepublisherpluginad"),
            l = Ws(b, "html > ins.adsbygoogle"),
            m = [].concat(Ws(b, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), Ws(b, "body ins.adsbygoogle"));
        b = [];
        a = y([
            [a.Zb, c],
            [a.Xa, d],
            [a.tf, e],
            [a.ac, f],
            [a.cc, g],
            [a.qf, h],
            [a.rf, k],
            [a.uf, l]
        ]);
        for (c = a.next(); !c.done; c = a.next()) d = y(c.value), c = d.next().value, d = d.next().value, !1 === c ? b = b.concat(d) : m = m.concat(d);
        m = bt(m);
        a = bt(b);
        b = m.slice(0);
        m = y(a);
        for (a =
            m.next(); !a.done; a = m.next())
            for (a = a.value, c = 0; c < b.length; c++)(a.contains(b[c]) || b[c].contains(a)) && b.splice(c, 1);
        return b
    }

    function ct(a) {
        return !!a.className && sb(a.className, "google-auto-placed")
    }

    function dt(a) {
        var b = Us(a);
        return b ? Hb(Ib(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    }

    function Ws(a, b) {
        return Ob(a.document.querySelectorAll(b))
    }

    function Xs(a) {
        return Ws(a, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")
    }

    function Ys(a) {
        return Ws(a, "ins.adsbygoogle[data-ad-format=autorelaxed]")
    }

    function Zs(a) {
        return (dt(a) || Ws(a, "div[id^=div-gpt-ad]")).concat(Ws(a, "iframe[id^=google_ads_iframe]"))
    }

    function $s(a) {
        return Ws(a, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")
    }

    function at(a) {
        return Ws(a, "ins.adsbygoogle-ablated-ad-slot")
    }

    function bt(a) {
        var b = [];
        a = y(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };
    var et = hk(453, Vs),
        ft = hk(454, function(a, b) {
            var c = Ws(b, ".google-auto-placed"),
                d = Xs(b),
                e = Ys(b),
                f = Zs(b),
                g = $s(b),
                h = at(b),
                k = Ws(b, "div.googlepublisherpluginad");
            b = Ws(b, "html > ins.adsbygoogle");
            return bt([].concat(!0 === a.Zb ? c : [], !0 === a.Xa ? d : [], !0 === a.tf ? e : [], !0 === a.ac ? f : [], !0 === a.cc ? g : [], !0 === a.qf ? h : [], !0 === a.rf ? k : [], !0 === a.uf ? b : []))
        });

    function gt(a, b, c) {
        this.A = a;
        this.j = b.slice(0);
        this.B = c.slice(0);
        this.l = null
    }

    function ht(a) {
        return a.j.map(function(b) {
            return b.box
        })
    }

    function it(a) {
        return a.j.reduce(function(b, c) {
            return b + c.box.bottom - c.box.top
        }, 0)
    }

    function jt(a, b, c) {
        var d = kt(a);
        b = lt(d, b, c);
        return new gt(a, d, b)
    }

    function mt(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function kt(a) {
        var b = et({
                Xa: !1
            }, a),
            c = al(a),
            d = $k(a);
        return b.map(function(e) {
            var f = e.getBoundingClientRect();
            return (e = ct(e)) || mt(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Zj: e ? 1 : 0
            } : null
        }).filter(rf(function(e) {
            return null === e
        }))
    }

    function lt(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? nt(a, b) : Ib(a, function(d) {
            return new Rs(d.box, 1)
        })
    }

    function nt(a, b) {
        a = Ib(a, function(g) {
            return new Rs(g.box, 1)
        });
        for (var c = []; 0 < a.length;) {
            for (var d = a.pop(), e = !0; e;) {
                e = !1;
                for (var f = 0; f < a.length; f++)
                    if (Ss(d, a[f], b)) {
                        d = Ts([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function ot(a, b, c) {
        var d = dm(c, b);
        return !Kb(a, function(e) {
            return Ek(e, d)
        })
    }

    function pt(a, b, c, d, e) {
        e = e.Y;
        var f = dm(e, b),
            g = dm(e, c),
            h = dm(e, d);
        return !Kb(a, function(k) {
            return Ek(k, g) || Ek(k, f) && !Ek(k, h)
        })
    }

    function qt(a, b, c, d) {
        var e = ht(a);
        if (ot(e, b, d.Y)) return !0;
        if (!pt(e, b, c.Rd, c.nb, d)) return !1;
        var f = new Rs(dm(d.Y, 0), 1);
        a = Hb(a.B, function(g) {
            return Ss(g, f, c.nb)
        });
        b = Jb(a, function(g, h) {
            return g + h.l
        }, 1);
        return 0 === a.length || b > c.Qd ? !1 : !0
    };

    function rt(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function st(a, b) {
        this.l = a;
        this.j = b
    }

    function tt(a, b) {
        var c = new Am,
            d = new ol;
        b.forEach(function(e) {
            if (yd(e, En, 1, Hn)) {
                e = yd(e, En, 1, Hn);
                if (G(e, Cn, 1) && G(e, Cn, 1).aa() && G(e, Cn, 2) && G(e, Cn, 2).aa()) {
                    var f = ut(a, G(e, Cn, 1).aa()),
                        g = ut(a, G(e, Cn, 2).aa());
                    if (f && g)
                        for (f = y(rt({
                                anchor: f,
                                position: G(e, Cn, 1).j()
                            }, {
                                anchor: g,
                                position: G(e, Cn, 2).j()
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Sa(g.anchor), g.position)
                }
                G(e, Cn, 3) && G(e, Cn, 3).aa() && (f = ut(a, G(e, Cn, 3).aa())) && c.set(Sa(f), G(e, Cn, 3).j())
            } else yd(e, Fn, 2, Hn) ? vt(a, yd(e, Fn, 2, Hn), c) : yd(e, Gn, 3, Hn) && wt(a,
                yd(e, Gn, 3, Hn), d)
        });
        return new st(c, d)
    }

    function vt(a, b, c) {
        G(b, Cn, 2) ? (b = G(b, Cn, 2), (a = ut(a, b.aa())) && c.set(Sa(a), b.j())) : G(b, Dm, 1) && (a = xt(a, G(b, Dm, 1))) && a.forEach(function(d) {
            d = Sa(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function wt(a, b, c) {
        G(b, Dm, 1) && (a = xt(a, G(b, Dm, 1))) && a.forEach(function(d) {
            c.add(Sa(d))
        })
    }

    function ut(a, b) {
        return (a = xt(a, b)) && 0 < a.length ? a[0] : null
    }

    function xt(a, b) {
        return (b = mr(b)) ? b.query(a) : null
    };

    function yt() {
        this.j = new r.Set
    }

    function zt(a) {
        a = At(a);
        return a.has("all") || a.has("after")
    }

    function Bt(a) {
        a = At(a);
        return a.has("all") || a.has("before")
    }

    function Ct(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (Dt(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(function(d) {
            return a.j.add(d)
        });
        return !1
    }

    function Dt(a) {
        var b = At(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }

    function At(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new r.Set(a.split("|")) : new r.Set
    };

    function Et(a) {
        return function(b) {
            return ts(b, a)
        }
    }

    function Ft(a) {
        var b = Vk(a);
        return b ? Ya(Gt, b + $k(a)) : of
    }

    function Ht(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return of;
        var d = ht(c || jt(b));
        return function(e) {
            return ot(d, a, e.Y)
        }
    }

    function It(a, b, c, d) {
        if (0 > a || 0 > b.Rd || 0 > b.Qd || 0 > b.nb) throw Error("ama::ead:nd");
        return Infinity === a ? of : function(e) {
            return qt(d || jt(c, b.nb), a, b, e)
        }
    }

    function Jt(a) {
        if (!a.length) return of;
        var b = new sm(a);
        return function(c) {
            return b.contains(c.Ya)
        }
    }

    function Kt(a) {
        return function(b) {
            b = y(b.Rc);
            for (var c = b.next(); !c.done; c = b.next())
                if (-1 < a.indexOf(c.value)) return !1;
            return !0
        }
    }

    function Lt(a) {
        return a.length ? function(b) {
            var c = b.Rc;
            return a.some(function(d) {
                return -1 < c.indexOf(d)
            })
        } : pf
    }

    function Mt(a, b) {
        if (0 >= a) return pf;
        var c = Wk(b).scrollHeight - a;
        return function(d) {
            return d.Y.j <= c
        }
    }

    function Nt(a) {
        var b = {};
        a && a.forEach(function(c) {
            b[c] = !0
        });
        return function(c) {
            return !b[D(c.vc, 2) || 0]
        }
    }

    function Ot(a) {
        return a.length ? function(b) {
            return t(a, "includes").call(a, D(b.vc, 1) || 0)
        } : pf
    }

    function Pt(a, b) {
        var c = tt(a, b);
        return function(d) {
            var e = d.aa();
            d = sr[d.X.j()];
            var f = Sa(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(Sa(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(Sa(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Qt() {
        var a = new yt;
        return function(b) {
            var c = b.aa();
            b = sr[b.X.j()];
            a: switch (b) {
                case 1:
                    var d = zt(c.previousElementSibling) || Bt(c);
                    break a;
                case 4:
                    d = zt(c) || Bt(c.nextElementSibling);
                    break a;
                case 2:
                    d = Bt(c.firstElementChild);
                    break a;
                case 3:
                    d = zt(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + b);
            }
            return !(d || Ct(a, c, b))
        }
    }

    function Gt(a, b) {
        return b.Y.j >= a
    }

    function Rt(a, b, c) {
        c = c.Y.l;
        return a <= c && c <= b
    };

    function St(a, b) {
        this.A = a;
        this.l = b
    }
    St.prototype.j = function() {
        for (var a = Ft(this.A), b = this.l.next(); b;) {
            if (a(b)) return b;
            b = this.l.next()
        }
        return null
    };

    function Tt(a, b) {
        this.l = a;
        this.A = b
    }
    Tt.prototype.j = function() {
        var a = new Qn;
        var b = G(this.A.l, Dm, 1);
        a = td(a, 1, b);
        a = E(E(a, 2, 2), 8, 1);
        a = Xr([a], this.l);
        return ts(a, this.l)[0] || null
    };

    function Ut(a) {
        var b = 0;
        a.forEach(function(c) {
            return b = Math.max(b, c.getBoundingClientRect().width)
        });
        return function(c) {
            return c.getBoundingClientRect().width > .5 * b
        }
    }

    function Vt(a) {
        var b = Vk(a) || 0;
        return function(c) {
            return c.getBoundingClientRect().height >= .75 * b
        }
    };

    function Wt(a) {
        this.j = new jl;
        this.l = a
    }

    function Xt(a, b) {
        return Kb(b.pb, function(c) {
            return Yt(a, c)
        })
    }

    function Yt(a, b) {
        if (!b) return !1;
        var c = Sa(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = Yt(a, b.parentNode);
        a.j.set(c, b);
        return b
    };

    function Zt(a, b) {
        this.B = a;
        this.j = [];
        this.l = [];
        this.A = b
    };

    function $t(a, b) {
        a = au(a, b);
        var c = new Wt(b);
        return nm(a, function(d) {
            var e = {
                    ge: c
                },
                f = void 0 === e ? {} : e,
                g = void 0 === f.sf ? !1 : f.sf;
            e = void 0 === f.Ef ? 3 : f.Ef;
            f = void 0 === f.ge ? null : f.ge;
            var h = ss(d);
            d = g;
            g = f;
            d = void 0 === d ? !1 : d;
            e = void 0 === e ? 3 : e;
            g = void 0 === g ? null : g;
            if (2 > e) throw Error("minGroupSize should be at least 2, found " + e);
            h = h.slice(0);
            h.sort(qs);
            f = [];
            d = new Zt(d, g);
            h = y(h);
            for (g = h.next(); !g.done; g = h.next()) {
                g = g.value;
                g = {
                    qc: g,
                    dc: 51 > g.B.length ? !1 : null != d.A ? !Xt(d.A, g) : !0
                };
                if (d.B || g.dc) {
                    if (d.j.length) {
                        var k = d.j[d.j.length -
                            1].qc;
                        b: {
                            var l = k.V();
                            var m = k.pb[k.pb.length - 1];k = g.qc.pb[0];
                            if (m && k) {
                                var n = m.parentElement,
                                    p = k.parentElement;
                                if (n && p && n == p)
                                    for (n = 0, m = m.nextSibling; 10 > n && m;) {
                                        if (m == k) {
                                            l = !0;
                                            break b
                                        }
                                        if (gs(l, m)) break;
                                        m = m.nextSibling;
                                        n++
                                    }
                            }
                            l = !1
                        }
                    } else l = !0;
                    l ? (d.j.push(g), g.dc && d.l.push(g.qc)) : (d.j = [g], d.l = g.dc ? [g.qc] : [])
                }
                if (d.l.length >= e) {
                    if (1 >= d.l.length) g = null;
                    else {
                        for (g = d.l[1]; d.j.length && !d.j[0].dc;) d.j.shift();
                        d.j.shift();
                        d.l.shift()
                    }
                    g && f.push(g)
                }
            }
            return f
        })
    }

    function au(a, b) {
        var c = new jl;
        a.forEach(function(d) {
            var e = mr(G(d, Dm, 1));
            if (e) {
                var f = e.toString();
                ll(c, f) || c.set(f, {
                    articleStructure: d,
                    He: e,
                    Tb: null,
                    Dd: !1
                });
                e = c.get(f);
                (d = (d = G(d, Dm, 2)) ? D(d, 7) : null) ? e.Tb = e.Tb ? e.Tb + "," + d : d: e.Dd = !0
            }
        });
        return nl(c).map(function(d) {
            var e = d.He.query(b.document);
            return e.length ? new rs(e[0], d, b) : null
        }).filter(function(d) {
            return null != d
        })
    };

    function bu(a, b) {
        b = au(b, a);
        var c = b.map(function(d) {
            return d.j
        });
        b = b.filter(function(d) {
            d = d.j.getBoundingClientRect();
            return 0 < d.width && 0 < d.height
        }).filter(function(d) {
            return Ut(c)(d.j)
        }).filter(function(d) {
            return Vt(a)(d.j)
        });
        b.sort(function(d, e) {
            e = e.j;
            return d.j.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };

    function cu(a, b, c) {
        if (nd(c, 2)) {
            if (a.document.getElementById("google-auto-placed-read-aloud-player-reserved")) {
                var d = new Qn;
                var e = new Dm;
                e = E(e, 7, "div#google-auto-placed-read-aloud-player-reserved");
                d = td(d, 1, e);
                d = E(E(d, 2, 2), 8, 1);
                d = Xr([d], a);
                d = ts(d, a)[0] || null
            } else d = null;
            if (d) return d
        }
        a: {
            c = du(c);b = bu(a, b);b = y(b);
            for (e = b.next(); !e.done; e = b.next()) {
                b: {
                    d = a;e = e.value;
                    var f = c;
                    switch (f) {
                        case 1:
                            d = new Tt(d, e);
                            break b;
                        case 2:
                            d = new ys(xs(d, e));
                            break b;
                        case 3:
                            d = new St(d, xs(d, e));
                            break b;
                        default:
                            throw Error("Unknown position: " +
                                f);
                    }
                }
                if (d = d.j()) {
                    a = d;
                    break a
                }
            }
            a = null
        }
        return a
    }

    function du(a) {
        if (nd(a, 2)) return 3;
        switch (md(a, 1, 0)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                throw Error("Unknown player position: " + md(a, 1, 0));
        }
    };
    var eu = x(["window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;"]);

    function fu(a) {
        this.j = a
    }

    function gu(a, b, c, d, e) {
        if (0 < a.document.getElementsByTagName("google-read-aloud-player").length) return ym("Player already created");
        var f = a.document,
            g = f.createElement("div");
        g.id = "google-auto-placed-read-aloud-player";
        M(g, {
            padding: "5px"
        });
        var h = f.createElement("script"),
            k = eu[0],
            l = ee();
        k = l ? l.createScript(k) : k;
        h.textContent = he(new ge(k, fe));
        mf(h);
        g.appendChild(h);
        hu(f, g, Td("https://www.google-analytics.com/analytics.js"));
        hu(f, g, Td("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
        f = f.createElement("google-read-aloud-player");
        f.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
        f.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
        f.setAttribute("data-url", c.url);
        f.setAttribute("data-locale", d);
        f.setAttribute("data-voice", "en-us-m-6");
        e && (fd(e, 1) && 0 != md(e, 1, 0) && f.setAttribute("data-docking-begin-trigger", iu[md(e, 1, 0)]), null != D(e, 2) && f.setAttribute("data-experiment", xd(e, 2)));
        g.appendChild(f);
        fs(b, g);
        return wm(new fu(a.document.getElementsByTagName("google-read-aloud-player")[0]))
    }

    function hu(a, b, c) {
        a = a.createElement("script");
        nf(a, ne(Sd(c)));
        a.setAttribute("async", "true");
        b.appendChild(a)
    }
    var ju = {},
        iu = (ju[1] = "out-of-view", ju);

    function ku() {
        var a = this;
        this.promise = new r.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function lu() {
        var a = new ku;
        return {
            promise: a.promise,
            resolve: a.resolve
        }
    };

    function mu(a, b, c) {
        c = void 0 === c ? function() {} : c;
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        var d = b[a];
        if (d) return d;
        d = lu();
        b[a] = d;
        c();
        return d
    }

    function nu(a, b, c) {
        return mu(a, b, function() {
            Qg(b.document, c)
        }).promise
    };

    function ou(a) {
        this.j = a
    }

    function pu(a, b) {
        a = a.j.then(function(c) {
            c.handleAdBreak({
                type: "preroll",
                name: "audiosense-preroll",
                adBreakDone: b
            })
        });
        fk.Ma(956, a)
    }

    function qu(a, b, c) {
        a = nu(7, a, c).then(function(d) {
            d.init(b);
            d.handleAdConfig({
                preloadAdBreaks: "on",
                sound: "on"
            });
            return d
        });
        fk.Ma(915, a);
        return new ou(a)
    };

    function ru(a, b, c) {
        this.A = a;
        this.B = b;
        this.l = c;
        this.j = !1
    }

    function su(a) {
        var b = a.A.j;
        b.addEventListener("firstplay", function() {
            a.j || (a.j = !0, b.pause(), pu(a.B, function() {
                return b.play()
            }), Jr(a.l, "play", {}))
        })
    };

    function tu(a, b, c, d, e, f, g) {
        this.B = a;
        this.j = new Ir(a, b, d);
        this.H = c;
        this.l = d;
        this.C = e;
        this.F = f;
        this.I = g;
        this.A = this.D = null
    }

    function uu(a) {
        var b = cu(a.B, a.H, G(a.l, jn, 2));
        if (b) {
            var c = !!a.C.Hb && vu(a);
            c && (a.D = qu(a.B, a.F, a.C.Hb));
            var d = gu(a.B, b, a.C, a.I, G(a.l, nn, 4) || void 0);
            null != d.j ? (a.A = d.j.value, a.A.j.addEventListener("firstview", function() {
                Jr(a.j, "view", {})
            }), c && su(new ru(a.A, a.D, a.j)), Jr(a.j, "place", {
                sts: "ok",
                pp: b.Y.j
            })) : Jr(a.j, "place", {
                sts: "wf"
            })
        } else Jr(a.j, "place", {
            sts: "pf"
        })
    }

    function vu(a) {
        return (a = G(a.l, kn, 3)) ? H(a, ln, 1).some(function(b) {
            return 1 === md(b, 1, 0)
        }) : !1
    }

    function wu(a, b, c, d, e, f, g) {
        return 0 == d.length ? ym("No ArticleStructure found") : G(c, jn, 2) ? wm(new tu(a, b, d, c, e, f, g ? g : "en")) : ym("No AudioSenseConfig.PlacementConfig found")
    };
    var xu = ["-webkit-text-fill-color"];

    function yu() {
        var a = {
            "animation-delay": "0s",
            "animation-direction": "normal",
            "animation-duration": "0s",
            "animation-fill-mode": "none",
            "animation-iteration-count": "1",
            "animation-name": "none",
            "animation-play-state": "running",
            "animation-timing-function": "ease",
            "background-attachment": "scroll",
            "background-blend-mode": "normal",
            "background-clip": "border-box",
            "background-color": "rgba(0, 0, 0, 0)",
            "background-image": "none",
            "background-origin": "padding-box",
            "background-position": "0% 0%",
            "background-repeat": "repeat",
            "background-size": "auto",
            "border-bottom-color": "rgb(0, 0, 0)",
            "border-bottom-left-radius": "0px",
            "border-bottom-right-radius": "0px",
            "border-bottom-style": "none",
            "border-bottom-width": "0px",
            "border-collapse": "separate",
            "border-image-outset": "0px",
            "border-image-repeat": "stretch",
            "border-image-slice": "100%",
            "border-image-source": "none",
            "border-image-width": "1",
            "border-left-color": "rgb(0, 0, 0)",
            "border-left-style": "none",
            "border-left-width": "0px",
            "border-right-color": "rgb(0, 0, 0)",
            "border-right-style": "none",
            "border-right-width": "0px",
            "border-top-color": "rgb(0, 0, 0)",
            "border-top-left-radius": "0px",
            "border-top-right-radius": "0px",
            "border-top-style": "none",
            "border-top-width": "0px",
            bottom: "auto",
            "box-shadow": "none",
            "box-sizing": "content-box",
            "break-after": "auto",
            "break-before": "auto",
            "break-inside": "auto",
            "caption-side": "top",
            clear: "none",
            clip: "auto",
            color: "rgb(0, 0, 0)",
            content: "normal",
            cursor: "auto",
            direction: "ltr",
            display: "inline",
            "empty-cells": "show",
            "float": "none",
            "font-family": "Times",
            "font-kerning": "auto",
            "font-optical-sizing": "auto",
            "font-size": "16px",
            "font-stretch": "100%",
            "font-style": "normal",
            "font-variant": "normal",
            "font-variant-ligatures": "normal",
            "font-variant-caps": "normal",
            "font-variant-numeric": "normal",
            "font-variant-east-asian": "normal",
            "font-weight": "400",
            height: "auto",
            "image-rendering": "auto",
            isolation: "auto",
            "justify-items": "normal",
            "justify-self": "auto",
            left: "auto",
            "letter-spacing": "normal",
            "line-height": "normal",
            "list-style-image": "none",
            "list-style-position": "outside",
            "list-style-type": "disc",
            "margin-bottom": "0px",
            "margin-left": "0px",
            "margin-right": "0px",
            "margin-top": "0px",
            "max-height": "none",
            "max-width": "none",
            "min-height": "0px",
            "min-width": "0px",
            "mix-blend-mode": "normal",
            "object-fit": "fill",
            "object-position": "50% 50%",
            "offset-distance": "0px",
            "offset-path": "none",
            "offset-rotate": "auto 0deg",
            opacity: "1",
            orphans: "2",
            "outline-color": "rgb(0, 0, 0)",
            "outline-offset": "0px",
            "outline-style": "none",
            "outline-width": "0px",
            "overflow-anchor": "auto",
            "overflow-wrap": "normal",
            "overflow-x": "visible",
            "overflow-y": "visible",
            "padding-bottom": "0px",
            "padding-left": "0px",
            "padding-right": "0px",
            "padding-top": "0px",
            "pointer-events": "auto",
            position: "static",
            resize: "none",
            right: "auto",
            "scroll-behavior": "auto",
            speak: "normal",
            "table-layout": "auto",
            "tab-size": "8",
            "text-align": "start",
            "text-align-last": "auto",
            "text-decoration": "none solid rgb(0, 0, 0)",
            "text-decoration-line": "none",
            "text-decoration-style": "solid",
            "text-decoration-color": "rgb(0, 0, 0)",
            "text-decoration-skip-ink": "auto",
            "text-underline-position": "auto",
            "text-indent": "0px",
            "text-rendering": "auto",
            "text-shadow": "none",
            "text-size-adjust": "auto",
            "text-overflow": "clip",
            "text-transform": "none",
            top: "auto",
            "touch-action": "auto",
            "transition-delay": "0s",
            "transition-duration": "0s",
            "transition-property": "all",
            "transition-timing-function": "ease",
            "unicode-bidi": "normal",
            "vertical-align": "baseline",
            visibility: "visible",
            "white-space": "normal",
            widows: "2",
            width: "auto",
            "will-change": "auto",
            "word-break": "normal",
            "word-spacing": "0px",
            "z-index": "auto",
            zoom: "1",
            "-webkit-appearance": "none",
            "backface-visibility": "visible",
            "-webkit-border-horizontal-spacing": "0px",
            "-webkit-border-image": "none",
            "-webkit-border-vertical-spacing": "0px",
            "-webkit-box-align": "stretch",
            "-webkit-box-decoration-break": "slice",
            "-webkit-box-direction": "normal",
            "-webkit-box-flex": "0",
            "-webkit-box-ordinal-group": "1",
            "-webkit-box-orient": "horizontal",
            "-webkit-box-pack": "start",
            "-webkit-box-reflect": "none",
            "column-count": "auto",
            "column-gap": "normal",
            "column-rule-color": "rgb(0, 0, 0)",
            "column-rule-style": "none",
            "column-rule-width": "0px",
            "column-span": "none",
            "column-width": "auto",
            "backdrop-filter": "none",
            "align-content": "normal",
            "align-items": "normal",
            "align-self": "auto",
            "flex-basis": "auto",
            "flex-grow": "0",
            "flex-shrink": "1",
            "flex-direction": "row",
            "flex-wrap": "nowrap",
            "justify-content": "normal",
            "-webkit-font-smoothing": "auto",
            "grid-auto-columns": "auto",
            "grid-auto-flow": "row",
            "grid-auto-rows": "auto",
            "grid-column-end": "auto",
            "grid-column-start": "auto",
            "grid-template-areas": "none",
            "grid-template-columns": "none",
            "grid-template-rows": "none",
            "grid-row-end": "auto",
            "grid-row-start": "auto",
            "row-gap": "normal",
            "-webkit-highlight": "none",
            hyphens: "manual",
            "-webkit-hyphenate-character": "auto",
            "-webkit-line-break": "auto",
            "-webkit-line-clamp": "none",
            "-webkit-locale": "auto",
            "-webkit-margin-before-collapse": "collapse",
            "-webkit-margin-after-collapse": "collapse",
            "-webkit-mask-box-image": "none",
            "-webkit-mask-box-image-outset": "0px",
            "-webkit-mask-box-image-repeat": "stretch",
            "-webkit-mask-box-image-slice": "0 fill",
            "-webkit-mask-box-image-source": "none",
            "-webkit-mask-box-image-width": "auto",
            "-webkit-mask-clip": "border-box",
            "-webkit-mask-composite": "source-over",
            "-webkit-mask-image": "none",
            "-webkit-mask-origin": "border-box",
            "-webkit-mask-position": "0% 0%",
            "-webkit-mask-repeat": "repeat",
            "-webkit-mask-size": "auto",
            order: "0",
            perspective: "none",
            "perspective-origin": "0px 0px",
            "-webkit-print-color-adjust": "economy",
            "-webkit-rtl-ordering": "logical",
            "shape-outside": "none",
            "shape-image-threshold": "0",
            "shape-margin": "0px",
            "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0.4)",
            "-webkit-text-combine": "none",
            "-webkit-text-decorations-in-effect": "none",
            "-webkit-text-emphasis-color": "rgb(0, 0, 0)",
            "-webkit-text-emphasis-position": "over right",
            "-webkit-text-emphasis-style": "none",
            "-webkit-text-orientation": "vertical-right",
            "-webkit-text-security": "none",
            "-webkit-text-stroke-color": "rgb(0, 0, 0)",
            "-webkit-text-stroke-width": "0px",
            transform: "none",
            "transform-origin": "0px 0px",
            "transform-style": "flat",
            "-webkit-user-drag": "auto",
            "-webkit-user-modify": "read-only",
            "user-select": "auto",
            "-webkit-writing-mode": "horizontal-tb",
            "-webkit-app-region": "none",
            "buffered-rendering": "auto",
            "clip-path": "none",
            "clip-rule": "nonzero",
            mask: "none",
            filter: "none",
            "flood-color": "rgb(0, 0, 0)",
            "flood-opacity": "1",
            "lighting-color": "rgb(255, 255, 255)",
            "stop-color": "rgb(0, 0, 0)",
            "stop-opacity": "1",
            "color-interpolation": "srgb",
            "color-interpolation-filters": "linearrgb",
            "color-rendering": "auto",
            fill: "rgb(0, 0, 0)",
            "fill-opacity": "1",
            "fill-rule": "nonzero",
            "marker-end": "none",
            "marker-mid": "none",
            "marker-start": "none",
            "mask-type": "luminance",
            "shape-rendering": "auto",
            stroke: "none",
            "stroke-dasharray": "none",
            "stroke-dashoffset": "0px",
            "stroke-linecap": "butt",
            "stroke-linejoin": "miter",
            "stroke-miterlimit": "4",
            "stroke-opacity": "1",
            "stroke-width": "1px",
            "alignment-baseline": "auto",
            "baseline-shift": "0px",
            "dominant-baseline": "auto",
            "text-anchor": "start",
            "writing-mode": "horizontal-tb",
            "vector-effect": "none",
            "paint-order": "normal",
            d: "none",
            cx: "0px",
            cy: "0px",
            x: "0px",
            y: "0px",
            r: "0px",
            rx: "auto",
            ry: "auto",
            "caret-color": "rgb(0, 0, 0)",
            "line-break": "auto"
        };
        Gb(xu, function(b) {
            delete a[b]
        });
        return a
    };

    function zu(a) {
        this.j = a
    }
    zu.prototype.va = function(a) {
        var b = a.document.createElement("div");
        M(b, yu());
        M(b, {
            width: "100%",
            margin: "auto"
        });
        b.appendChild(this.j);
        a = a.document.createElement("div");
        M(a, yu());
        a.className = "auto-prose-searchbox-wrapper";
        a.appendChild(b);
        return a
    };
    var Au = {},
        Bu = {},
        Cu = {},
        Du = {},
        Eu = {};

    function Fu() {
        throw Error("Do not instantiate directly");
    }
    Fu.prototype.xd = null;
    Fu.prototype.va = function() {
        return this.content
    };
    Fu.prototype.toString = function() {
        return this.content
    };

    function Gu(a) {
        if (a.yd !== Au) throw Error("Sanitized content was not of kind HTML.");
        return Te(a.toString())
    }

    function Hu() {
        Fu.call(this)
    }
    cb(Hu, Fu);
    Hu.prototype.yd = Au;

    function Iu(a, b) {
        return null != a && a.yd === b
    };

    function Ju(a) {
        if (null != a) switch (a.xd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function Ku(a) {
        return Iu(a, Au) ? a : a instanceof Qe ? Lu(Re(a).toString()) : a instanceof Qe ? Lu(Re(a).toString()) : Lu(String(String(a)).replace(Mu, Nu), Ju(a))
    }
    var Lu = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.xd = d);
            return c
        }
    }(Hu);

    function Ou(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Pu(a) {
        if (Iu(a, Au)) {
            var b = String;
            a = a.va();
            a = String(a).replace(Qu, "").replace(Ru, "&lt;");
            b = b(a).replace(Su, Nu)
        } else b = String(a).replace(Mu, Nu);
        return b
    }

    function Tu(a) {
        function b(d, e, f) {
            for (var g = Math.min(e.length - f, d.length), h = 0; h < g; h++) {
                var k = e[f + h];
                if (d[h] !== ("A" <= k && "Z" >= k ? k.toLowerCase() : k)) return !1
            }
            return !0
        }
        a = String(a);
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function Uu(a) {
        if (null == a) return " null ";
        if (Iu(a, Bu)) return a.va();
        if (a instanceof ge || a instanceof ge) return he(a).toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Vu, Wu) + "'"
        }
    }

    function Y(a) {
        Iu(a, Eu) ? a = Ou(a.va()) : null == a ? a = "" : a instanceof Be ? a = Ou(Ce(a)) : a instanceof Be ? a = Ou(Ce(a)) : a instanceof Ne ? a = Ou(Oe(a)) : a instanceof Ne ? a = Ou(Oe(a)) : (a = String(a), a = Xu.test(a) ? a : "zSoyz");
        return a
    }
    var Yu = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Nu(a) {
        return Yu[a]
    }
    var Zu = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function Wu(a) {
        return Zu[a]
    }
    var $u = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function av(a) {
        return $u[a]
    }
    var Mu = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Su = /[\x00\x22\x27\x3c\x3e]/g,
        Vu = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        bv = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Xu = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        cv =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function dv(a) {
        return String(a).replace(bv, av)
    }
    var Qu = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Ru = /</g;
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    function ev(a) {
        this.j = a
    }
    ev.prototype.init = function() {
        var a = Lu('<style>.autoprose-input {width: 100%; padding: 0; border: none; margin: 0; height: auto; outline: none;}.autoprose-input-td {background: #fff; border-color: #bdc1c6; border-width: 1px 0 1px 1px; border-style: solid; border-radius: 24px 0 0 24px; -moz-border-radius: 24px 0 0 24px; -webkit-border-radius: 24px 0 0 24px; padding-left: 24px; width: 100%;}.autoprose-searchbox {width: 100%; padding: 0; border: none; margin: 0; height: auto; background: rgb(255, 255, 255); outline: none;}.autoprose-searchbox-clear-button {padding-right: 5px; visibility: hidden;}.autoprose-searchbox-clear-td {background: #fff; border-color: #bdc1c6; border-width: 1px 0 1px 0; border-style: solid;}.autoprose-search-button {border-color: #bdc1c6; background-color: #fff; background-image: none; font-size: 0; padding: 6px 27px; width: auto; vertical-align: middle; border: 1px solid #bdc1c6; border-radius: 0 24px 24px 0; -moz-border-radius: 0 24px 24px 0; -webkit-border-radius: 0 24px 24px 0; height: 100%;}.autoprose-searchbox-div {padding: 5px;}.autoprose-searchbox-table {height: 38px; margin-left: auto; margin-right: auto;}</style><div class="autoprose-searchbox-div"><table class="autoprose-searchbox-table" cellspacing="0" cellpadding="0"><tr><td class="autoprose-input-td"><input autocomplete="off" class="autoprose-input" dir="ltr" name="search" placeholder="Search" size="40" spellcheck="false" title="search" type="text"></td><td class="autoprose-searchbox-clear-td"><div class="autoprose-searchbox-clear-button" title="clear results"><svg width="14" height="14" viewBox="0 0 14 14" fill="none visibility: hidden;" mlns="http://www.w3.org/2000/svg" stlye="float: right;"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#80868b"/></svg></div></td><td><button class="autoprose-search-button"><svg width="13" height="13" viewBox="0 0 13 13"><title>search</title><path d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z" fill="#1a73e8"></path></svg></button></td></tr></table></div>');
        a =
            Gu(a);
        this.j.appendChild(Ag(document, a))
    };

    function fv(a, b, c, d) {
        this.D = a;
        this.A = b;
        this.C = c;
        this.B = d || null;
        this.j = null;
        this.l = new vl(null)
    }
    fv.prototype.init = function() {
        var a = gv(this);
        this.j = a.bf;
        fs(this.A, this.j);
        U(this.l, a.We)
    };
    fv.prototype.remove = function() {
        this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
        this.j = null;
        U(this.l, null)
    };
    fv.prototype.F = function() {
        return this.l
    };

    function gv(a) {
        var b = Vr(a.A.X),
            c = a.C.va(a.D, function() {
                return a.remove()
            });
        b.appendChild(c);
        a.B && (b.className = a.B);
        return {
            bf: b,
            We: c
        }
    };

    function hv(a, b) {
        this.l = a;
        this.j = b
    }

    function iv(a) {
        var b, c, d = jv(a.l, H(a.j, Qn, 1), null == (b = G(a.j, qn, 31)) ? void 0 : null == (c = G(b, rn, 2)) ? void 0 : md(c, 1, 0));
        if (d) {
            var e;
            null == (e = G(a.j, qn, 31)) || G(e, on, 5);
            b = a.l.document.createElement("div");
            (new fv(a.l, d, new zu(b))).init();
            var f;
            (new ev(b, null == (f = G(a.j, qn, 31)) ? void 0 : G(f, pn, 4))).init()
        }
    }

    function jv(a, b, c) {
        b = b.filter(function(d) {
            a: {
                var e = D(G(d, $m, 4), 1);
                switch (c) {
                    case 1:
                        e = 4 === e || 2 === e;
                        break a;
                    case 2:
                        e = 5 === e || 3 === e;
                        break a;
                    default:
                        e = !1
                }
            }
            d = 1 === D(d, 8);
            return e && d
        });
        b = Xr(b, a);
        a = ts(b, a);
        a.sort(kv);
        b = (ba = [1, 3], t(ba, "includes")).call(ba, c) ? 0 : a.length - 1;
        return a[b] || null
    }

    function kv(a, b) {
        return a.Y.j - b.Y.j
    };

    function lv(a) {
        this.j = a
    }
    lv.prototype.va = function(a) {
        var b = a.document.createElement("div");
        M(b, yu());
        M(b, {
            width: "100%",
            "max-width": "1000px",
            margin: "auto"
        });
        b.appendChild(this.j);
        a = a.document.createElement("div");
        M(a, yu());
        M(a, {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "5px 5px 2px",
            "box-sizing": "border-box",
            "background-color": "#FFF"
        });
        a.appendChild(b);
        return a
    };

    function mv(a, b) {
        return (b = G(b, Jn, 6)) ? $t(H(b, Ln, 1), a).map(function(c) {
            return ns(c)
        }) : []
    };

    function nv(a, b, c, d, e, f) {
        this.Ga = a;
        this.l = "9d449ff4a772956c6";
        this.j = b;
        this.host = c;
        this.language = d;
        this.B = e;
        this.A = f
    }

    function ov(a, b, c) {
        a.Ga.contentWindow.google.search.cse.element.getElement("auto-rs-prose").execute(b, void 0, {
            rsToken: c,
            afsExperimentId: a.A
        })
    }
    nv.prototype.init = function() {
        this.Ga.setAttribute("id", "prose-iframe");
        this.Ga.setAttribute("width", "100%");
        this.Ga.setAttribute("height", "100%");
        var a = this.Ga,
            b = De({
                "box-sizing": "border-box",
                border: "unset"
            });
        a.style.cssText = Ce(b);
        a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
        var c = ye(a) || ze;
        a = this.j;
        b = this.host;
        var d = this.language,
            e = this.B.replace("${website}", t(this.host, "startsWith").call(this.host, "www.") ? this.host.slice(4) : this.host),
            f = Lu;
        Iu(c, Cu) || Iu(c,
            Du) ? c = dv(c) : c instanceof te ? c = dv(ve(c)) : c instanceof te ? c = dv(ve(c)) : c instanceof ie ? c = dv(me(c).toString()) : c instanceof ie ? c = dv(me(c).toString()) : (c = String(c), c = cv.test(c) ? c.replace(bv, av) : "about:invalid#zSoyz");
        a = f('<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; height: 16px; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}</style><img class="cse-favicon" src="' +
            Pu(c) + '" alt="' + Pu(b) + ' icon"><p class="cse-header"><strong>' + Ku(e) + '</strong></p><div class="gcse-search" data-gname="' + Pu("auto-rs-prose") + '" data-adclient="' + Pu(a) + '" data-adchannel="AutoRsVariant" data-as_sitesearch="' + Pu(b) + '" data-gl="' + Pu(d) + '" data-personalizedAds="false"></div>');
        a = Gu(a);
        b = {
            style: De({
                margin: 0
            })
        };
        d = {
            src: pe(Td("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                cxId: this.l,
                lang: this.language
            })
        };
        e = {};
        f = {};
        for (h in d) Object.prototype.hasOwnProperty.call(d, h) && (f[h] =
            d[h]);
        for (var g in e) Object.prototype.hasOwnProperty.call(e, g) && (f[g] = e[g]);
        var h = Xe("script", f);
        h = Ue("body", b, [a, h]);
        this.Ga.srcdoc = Re(h)
    };

    function pv(a) {
        this.j = Mk(a).floatingAdsStacking
    }

    function qv(a, b) {
        return new rv(a, b)
    }

    function sv(a) {
        a = Vg(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    pv.prototype.addListener = function(a) {
        this.j.maxZIndexListeners.push(a);
        a(sv(this))
    };

    function tv(a) {
        var b = sv(a);
        Gb(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    }

    function rv(a, b) {
        this.l = a;
        this.A = b;
        this.j = null
    }

    function uv(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.A,
                d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            tv(b);
            a.j = d
        }
    }

    function vv(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            tv(b);
            a.j = null
        }
    };

    function wv(a, b) {
        this.win = a;
        this.width = b;
        this.F = [];
        this.C = !0;
        b = new rg(a.document);
        this.l = b.ja("DIV", {
            "class": "adpub-drawer-modal-background"
        });
        var c = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
        c.setAttribute("viewBox", "0 0 24 24");
        var d = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
        d.setAttribute("fill", "#5f6368");
        d.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z");
        c.appendChild(d);
        this.H = b.ja("DIV", {
            "class": "adpub-drawer-close-button"
        }, c);
        this.j = b.ja("DIV", {
            "class": "adpub-drawer-contents"
        });
        this.B = b.ja("DIV", {
            "class": "adpub-drawer"
        }, this.H, this.j);
        this.A = b.ja("DIV", {
            "class": "adpub-drawer-container"
        }, this.l, this.B);
        this.D = b.ja("DIV", {
            "class": "adpub-drawer-root"
        });
        c = this.D.attachShadow({
            mode: "open"
        });
        d = c.appendChild;
        var e = this.win.innerHeight - 5,
            f = this.width;
        a = a.innerWidth;
        a = Lu("<style>.adpub-drawer-container {height: 100%; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " +
            Y(100002) + ";}.adpub-drawer-modal-background {background-color: black; height: " + Y(e + 5) + "px; opacity: 0; position: absolute; transition: opacity .5s ease-in-out; width: " + Y(a) + "px;}.adpub-drawer {position: absolute; transform: translateX(" + Y(f) + "px); transition: transform .5s ease-in-out; height: 100%; overflow: auto; right: 0; border-radius: 20px 0 0 20px;}.adpub-drawer-close-button {color: #5f6368; height: 24px; width: 24px; top: 20px; right: 20px; position: fixed; cursor: pointer;}.adpub-drawer-contents {background: white; height: " +
            Y(e) + "px; overflow-y: auto; padding-top: " + Y(5) + "px; width: " + Y(f) + "px;}</style>");
        d.call(c, Ig(b, Gu(a)));
        c.appendChild(this.A);
        M(this.D, yu())
    }
    wv.prototype.init = function() {
        this.win.document.body.appendChild(this.D);
        xv(this)
    };
    wv.prototype.U = function(a) {
        for (; this.j.firstChild;) this.j.removeChild(this.j.firstChild);
        this.j.appendChild(a)
    };
    wv.prototype.show = function() {
        this.C = !1;
        this.win.document.documentElement.style.overflow = "hidden";
        this.A.style.transitionDelay = "0s";
        this.A.style.visibility = "visible";
        this.l.style.opacity = ".5";
        this.B.style.transform = "translateX(0)"
    };

    function yv(a) {
        a.C = !0;
        a.j.scrollTop = 0;
        a.B.style.transitionDuration = ".5s";
        a.B.style.transform = "translateX(" + a.width + "px)";
        a.l.style.opacity = "0";
        a.A.style.transitionDelay = ".5s";
        Ub(a.A.offsetWidth);
        a.A.style.visibility = "hidden";
        setTimeout(function() {
            a.win.document.documentElement.style.overflow = ""
        }, 500);
        for (var b = y(a.F), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            try {
                c()
            } catch (d) {
                console.error(d)
            }
        }
    }
    wv.prototype.ea = function(a) {
        this.F.push(a)
    };

    function xv(a) {
        J(a.l, "click", function() {
            return yv(a)
        });
        J(a.H, "click", function() {
            return void yv(a)
        });
        var b = a.width / a.win.innerWidth;
        J(a.win, "resize", function() {
            a.width = Math.floor(b * a.win.innerWidth);
            a.j.style.width = a.width + "px";
            a.j.style.height = a.win.innerHeight + "px";
            a.l.style.width = a.win.innerWidth + "px";
            a.l.style.height = a.win.innerHeight + "px";
            a.C && (a.B.style.transform = "translateX(" + a.width + "px)")
        })
    };

    function zv(a, b, c) {
        this.win = a;
        this.F = b;
        this.A = c;
        this.O = [];
        this.P = new r.Map;
        this.I = !1;
        this.L = !0;
        this.H = null;
        b = new rg(a.document);
        this.K = b.ja("DIV", {
            "class": "cse-modal-background",
            tabindex: 1
        });
        var d = b.ja("DIV", {
            "class": "cse-drawer-handle-icon"
        });
        this.B = b.ja("DIV", {
            "class": "cse-drawer-handle"
        }, d);
        this.l = b.ja("DIV", {
            "class": "cse-drawer-contents"
        });
        this.j = b.ja("DIV", {
            "class": "cse-drawer"
        }, this.B, this.l);
        this.C = b.ja("DIV", {
            "class": "cse-drawer-container"
        }, this.K, this.j);
        this.M = b.ja("DIV", {
            "class": "adpub-drawer-root"
        });
        this.D = a.innerHeight - (c + 30 - 20);
        a = this.M.attachShadow({
            mode: "open"
        });
        c = a.appendChild;
        d = this.A;
        var e = this.D;
        d = Lu("<style>.cse-drawer-container {height: 100%; left: 0; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " + Y(100002) + ";}.cse-modal-background {background-color: black; height: 100vh; opacity: 0; overflow: hidden; position: absolute; transition: opacity .5s ease-in-out; width: 100%;}.cse-drawer {background: white; position: absolute; transform: translateY(" +
            Y(d + e) + "px); transition: transform .5s ease-in-out; width: 100%;}.cse-drawer-handle {align-items: flex-end; border-radius: " + Y(20) + "px " + Y(20) + "px 0 0; background: white; display: flex; height: " + Y(30) + "px; justify-content: center; margin-top: " + Y(-20) + "px;}.cse-drawer-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.cse-drawer-contents {background: white; height: " + Y(d) + "px; scrollbar-width: none; overflow: hidden;}.cse-drawer-scroller::-webkit-scrollbar {display: none;}.scrollable {overflow: auto;}</style>");
        c.call(a, Ig(b, Gu(d)));
        a.appendChild(this.C);
        M(this.M, yu())
    }
    zv.prototype.init = function() {
        this.win.document.body.appendChild(this.M);
        Av(this)
    };
    zv.prototype.U = function(a) {
        for (; this.l.firstChild;) this.l.removeChild(this.l.firstChild);
        this.l.appendChild(a)
    };

    function Bv(a, b) {
        function c(l) {
            l.contentWindow ? J(l.contentWindow, "message", d) : console.error("Loaded iframe missing content window.")
        }

        function d(l) {
            if (void 0 === g || t(g, "includes").call(g, l.origin)) {
                var m;
                if (t(h, "includes").call(h, null == (m = l.data) ? void 0 : m.type)) {
                    var n;
                    Array.isArray(null == (n = l.data) ? void 0 : n.touches) && (m = l.data.type, l = l.data.touches.map(function(p) {
                        return t(Object, "assign").call(Object, {}, p, {
                            target: a.l
                        })
                    }), f(a.j, m, l))
                }
            }
        }

        function e(l) {
            l = l.contentDocument;
            for (var m = {}, n = y(h), p = n.next(); !p.done; m = {
                    Jb: m.Jb
                }, p = n.next()) m.Jb = p.value, J(l, m.Jb, function(u) {
                return function(v) {
                    v = [].concat(ma(v.touches)).map(function(A) {
                        return {
                            clientX: A.clientX,
                            clientY: A.clientY,
                            force: A.force,
                            identifier: A.identifier,
                            pageX: A.pageX,
                            pageY: A.pageY,
                            radiusX: A.radiusX,
                            radiusY: A.radiusY,
                            rotationAngle: A.rotationAngle,
                            screenX: A.screenX,
                            screenY: A.screenY,
                            target: a.l
                        }
                    });
                    f(a.j, u.Jb, v)
                }
            }(m))
        }

        function f(l, m, n) {
            try {
                var p = n.map(function(u) {
                    return new Touch(u)
                });
                l.dispatchEvent(new TouchEvent(m, {
                    bubbles: !0,
                    cancelable: !0,
                    touches: p
                }))
            } catch (u) {
                for (m =
                    new UIEvent(m, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: 1,
                        view: a.win
                    }), n = y(n), p = n.next(); !p.done; p = n.next()) l.dispatchEvent(t(Object, "assign").call(Object, m, {
                    touches: [p.value]
                }))
            }
        }
        var g = ["https://cse.google.com"],
            h = ["touchstart", "touchmove", "touchend", "touchcancel"],
            k;
        "complete" === (null == (k = b.contentDocument) ? void 0 : k.readyState) && (c(b), e(b));
        J(b, "load", function() {
            c(b);
            e(b)
        })
    }

    function Cv(a, b, c) {
        var d;
        a.P.set(b, null != (d = a.win.document.documentElement.style.getPropertyValue(b)) ? d : "");
        a.win.document.documentElement.style.setProperty(b, c)
    }

    function Dv(a, b) {
        var c, d = null != (c = a.P.get(b)) ? c : "";
        a.win.document.documentElement.style.setProperty(b, d)
    }
    zv.prototype.show = function() {
        this.H = this.win.document.documentElement.scrollTop + this.win.document.body.scrollTop;
        Cv(this, "transform", "translateY(" + -this.H + "px)");
        Cv(this, "position", "fixed");
        Cv(this, "width", "100%");
        Cv(this, "overflow", "hidden");
        Cv(this, "touch-action", "none");
        Cv(this, "scroll-behavior", "auto");
        this.C.style.transform = "translateY(" + this.H + "px)";
        Ev(this, this.A - this.F)
    };

    function Fv(a) {
        a.L = !0;
        a.I = !1;
        Dv(a, "position");
        Dv(a, "width");
        Dv(a, "transform");
        Dv(a, "overflow");
        Dv(a, "touch-action");
        null != a.H && (a.win.document.documentElement.scrollTop = a.H, a.win.document.body.scrollTop = a.H);
        Dv(a, "scroll-behavior");
        a.C.style.transform = "";
        a.l.scrollTop = 0;
        a.l.classList.remove("scrollable");
        a.j.style.transitionDuration = ".5s";
        a.j.style.transform = "translateY(" + (a.A + a.D) + "px)";
        a.K.style.opacity = "0";
        a.C.style.transitionDelay = ".5s";
        Ub(a.C.offsetHeight);
        a.C.style.visibility = "hidden";
        a = y(a.O);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {
                console.error(c)
            }
        }
    }
    zv.prototype.ea = function(a) {
        this.O.push(a)
    };

    function Av(a) {
        J(a.K, "click", function() {
            return Fv(a)
        });
        J(a.B, "mousedown", function() {
            function d() {
                Gv(a);
                zf(a.B, "mousemove", e);
                zf(a.B, "mouseup", d);
                zf(a.B, "mouseleave", d)
            }

            function e(f) {
                cw(a, f.movementY)
            }
            J(a.B, "mousemove", e);
            J(a.B, "mouseup", d);
            J(a.B, "mouseleave", d)
        });
        J(a.j, "touchstart", function(d) {
            function e() {
                Gv(a);
                zf(a.j, "touchmove", f);
                zf(a.j, "touchend", e);
                zf(a.j, "touchcancel", e)
            }

            function f(h) {
                var k = h.touches[0];
                0 === dw(a) ? a.l.classList.add("scrollable") : a.l.classList.remove("scrollable");
                if (g) {
                    var l =
                        0 === dw(a) && a.l.scrollTop,
                        m = k.target === a.B || k.target.parentElement === a.B;
                    if (!l || m) l = k.screenY - g.screenY, cw(a, l), l = 0 < l && 0 === a.l.scrollTop, l = a.I && !l, h.cancelable && !l && h.preventDefault()
                }
                g = k
            }
            var g = d.touches[0];
            J(a.j, "touchmove", f, {
                passive: !1
            });
            J(a.j, "touchend", e);
            J(a.j, "touchcancel", e)
        });
        J(a.C, "touchstart", function() {});
        var b = a.A / a.win.innerHeight,
            c = a.F / a.A;
        J(a.win, "resize", function() {
            a.A = Math.floor(b * a.win.innerHeight);
            a.F = Math.floor(c * a.A);
            a.D = a.win.innerHeight - (a.A + 30 - 20);
            var d = a.I ? 0 : a.A - a.F;
            a.l.style.height =
                a.A + "px";
            a.j.style.transform = a.L ? "translateY(" + (a.A + a.D) + "px)" : "translateY(" + (d + a.D) + "px)"
        })
    }

    function Ev(a, b) {
        a.L = !1;
        0 === b && (a.I = !0, a.l.classList.add("scrollable"));
        a.C.style.transitionDelay = "0s";
        a.C.style.visibility = "visible";
        a.K.style.opacity = ".5";
        a.j.style.transform = "translateY(" + (b + a.D) + "px)"
    }

    function Gv(a) {
        var b = dw(a);
        if (a.I) 50 < b ? Fv(a) : 0 !== b && Ev(a, 0);
        else {
            var c = a.A - a.F;
            b < c - 50 ? Ev(a, 0) : b > c + 50 ? Fv(a) : b !== c && Ev(a, a.A - a.F)
        }
    }

    function cw(a, b) {
        a.j.style.transitionDuration = "0s";
        b = Math.max(dw(a) + b, 0) + a.D;
        a.j.style.transform = "translateY(" + b + "px)";
        Ub(a.j.offsetHeight);
        a.j.style.transitionDuration = ".5s"
    }

    function dw(a) {
        var b, c = null != (b = a.j.style.transform) ? b : null;
        return Number(((new DOMMatrix(c)).f - a.D).toFixed(1))
    };

    function ew(a, b) {
        var c = a.document.createElement("div");
        M(c, yu());
        a.document.body.appendChild(c);
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            je: c,
            shadowRoot: a
        }
    }

    function fw(a, b) {
        b = b.getElementById(a);
        if (!b) throw Error("Element (" + a + ") does not exist");
        return b
    }

    function gw(a, b) {
        var c = new vl(b.R);
        zl(b, !0, function() {
            return void U(c, !0)
        });
        zl(b, !1, function() {
            a.setTimeout(function() {
                b.R || U(c, !1)
            }, 700)
        });
        return Al(c)
    };
    var hw = void 0;

    function iw() {
        void 0 === hw && (hw = 20);
        return hw
    };

    function jw(a) {
        T.call(this);
        var b = this;
        this.J = a;
        this.A = new Gl;
        this.j = !1;
        this.l = kw(a);
        this.B = function(c) {
            b.j && c.state !== b.l && (b.j = !1, Hl(b.A))
        }
    }
    z(jw, T);

    function lw(a) {
        a = a.top;
        if (!a) return null;
        a = new jw(a);
        a.init();
        return a
    }

    function mw(a) {
        a.J.history.state === a.l || a.J.history.pushState(a.l, "");
        a.j = !0
    }

    function nw(a) {
        a.j && (a.j = !1, a.J.history.state === a.l && a.J.history.back())
    }
    jw.prototype.init = function() {
        this.J.addEventListener("popstate", this.B)
    };
    jw.prototype.W = function() {
        this.J.removeEventListener("popstate", this.B);
        T.prototype.W.call(this)
    };

    function kw(a) {
        a.googConNextHistoryStateId = a.googConNextHistoryStateId || 0;
        return "goog_con_state_id_" + a.googConNextHistoryStateId++
    };

    function ow(a, b, c, d) {
        T.call(this);
        this.A = b;
        this.l = new vl(!1);
        this.j = gw(a, this.l);
        zl(this.j, !0, function() {
            lm(c);
            uv(d)
        });
        zl(this.j, !1, function() {
            tl(c.j);
            tl(c.A);
            mm(c);
            vv(d)
        })
    }
    z(ow, T);

    function pw(a, b, c) {
        var d = qv(new pv(a), c.zIndex - 1),
            e = ew(a, c.Jc),
            f = e.shadowRoot,
            g = f.appendChild,
            h = new rg(a.document);
        var k = c.Fd;
        var l = c.Cd || !1,
            m = c.wd;
        k = Lu("<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + Y(c.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " + Y(k) +
            "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: " + Y(iw()) + "px; transition: transform " + Y(.5) + "s ease-in-out;" + (l ? "left: 0; border-top-right-radius: " + Y(iw()) + "px; border-bottom-right-radius: " + Y(iw()) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + Y(iw()) + "px; border-bottom-left-radius: " + Y(iw()) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (l ? "text-align: left;" :
                "text-align: right;") + 'height: 24px;}#hd-close-button {border: none; background: none; cursor: pointer;}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}</style><div id="hd-drawer-container"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-close-button" aria-label="' + Pu(m) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>');
        g.call(f, Ig(h, Gu(k)));
        g = fw("hd-content-container", f);
        g.appendChild(b);
        Ub(a.document.body.offsetHeight);
        b = {
            sb: fw("hd-drawer-container", f),
            Uc: fw("hd-modal-background", f),
            Fc: g,
            Te: fw("hd-close-button", f),
            Zc: e
        };
        d = new ow(a, b, km(a), d);
        d.init();
        c.df && (a = lw(a)) && qw(d, a);
        return d
    }
    q = ow.prototype;
    q.show = function(a) {
        var b = this;
        a = void 0 === a ? {} : a;
        a = void 0 === a.rb ? !1 : a.rb;
        rw(this).sb.classList.add("hd-revealed");
        U(this.l, !0);
        a && zl(this.j, !1, function() {
            b.Fa()
        })
    };
    q.collapse = function() {
        rw(this).sb.classList.remove("hd-revealed");
        U(this.l, !1)
    };
    q.isVisible = function() {
        return this.j
    };
    q.init = function() {
        sw(this)
    };

    function sw(a) {
        var b = rw(a),
            c = b.Te;
        b.Uc.addEventListener("click", function() {
            return void a.collapse()
        });
        c.addEventListener("click", function() {
            return void a.collapse()
        })
    }

    function qw(a, b) {
        zl(a.j, !0, function() {
            mw(b)
        });
        zl(a.j, !1, function() {
            nw(b)
        });
        (new Il(b.A)).ba(function() {
            return void a.collapse()
        });
        rl(a, Ya(ql, b))
    }

    function rw(a) {
        if (a.D) throw Error("Accessing domItems after disposal");
        return a.A
    }
    q.W = function() {
        var a = this.A.Zc.je,
            b = a.parentNode;
        b && b.removeChild(a);
        T.prototype.W.call(this)
    };
    var tw = void 0;

    function uw() {
        void 0 === tw && (tw = 20);
        return tw
    }
    var vw = void 0;

    function ww() {
        void 0 === vw && (vw = 30);
        return vw
    }

    function xw(a) {
        return Lu('<div class="ved-handle" id="' + Pu(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function yw(a) {
        this.j = a;
        this.direction = 0
    }

    function zw(a) {
        return Xl(a.j).map(function(b) {
            return b ? Aw(a, b) : 0
        })
    }

    function Bw(a) {
        return Zl(a.j).map(function(b) {
            return Aw(a, b)
        })
    }

    function Aw(a, b) {
        switch (a.direction) {
            case 0:
                return Cw(-b.re);
            case 1:
                return Cw(-b.qe);
            default:
                throw Error("Unhandled direction: " + a.direction);
        }
    }

    function Cw(a) {
        return 0 === a ? 0 : a
    };

    function Dw(a, b, c) {
        T.call(this);
        this.win = a;
        this.B = b;
        this.I = c;
        this.C = new Gl;
        this.F = new Gl;
        this.l = new vl(!1);
        this.A = new vl(!1);
        this.j = new vl(!1)
    }
    z(Dw, T);

    function Ew(a) {
        Fw(a).sb.classList.add("ved-revealed");
        U(a.l, !0)
    }

    function Gw(a) {
        return gw(a.win, a.l)
    }

    function Hw(a) {
        var b = Fw(a),
            c = b.ia,
            d = b.mc;
        return Iw(a, function() {
            return d.getBoundingClientRect().top <= c.getBoundingClientRect().top
        })
    }

    function Jw(a) {
        var b = Fw(a),
            c = b.ia,
            d = b.mc;
        return Iw(a, function() {
            return d.getBoundingClientRect().top <= c.getBoundingClientRect().top - 1
        })
    }

    function Kw(a) {
        return Fl(Hw(a), Lw(a))
    }

    function Mw(a) {
        var b = Fw(a),
            c = b.ia,
            d = b.hb;
        return Iw(a, function() {
            return d.getBoundingClientRect().top < c.getBoundingClientRect().top - 1
        })
    }
    Dw.prototype.init = function() {
        var a = this;
        Nw(this, Ow(this, Fw(this).hb));
        Pw(this);
        Qw(this);
        Rw(this);
        Sw(this);
        Fw(this).ia.addEventListener("scroll", function() {
            return void Tw(a)
        })
    };

    function Pw(a) {
        xl(Hw(a), !0, function() {
            var b = Fw(a),
                c = b.Gb;
            b.Ed.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        xl(Hw(a), !1, function() {
            var b = Fw(a),
                c = b.Gb;
            b.Ed.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function Qw(a) {
        var b = bm(a.win, Fw(a).Fc);
        b.j || (b.j = !0, b.A.observe(b.element));
        var c = Al(b.l, kg);
        wl(c, function() {
            return void Uw(a)
        });
        rl(a, Ya(ql, b))
    }

    function Rw(a) {
        xl(Vw(a), !0, function() {
            Fw(a).Vd.classList.remove("ved-hidden")
        });
        xl(Vw(a), !1, function() {
            Fw(a).Vd.classList.add("ved-hidden")
        })
    }

    function Sw(a) {
        function b() {
            return void Hl(a.C)
        }
        var c = Fw(a),
            d = c.hb,
            e = c.kf;
        c.Uc.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        zl(Ww(a), !0, b)
    }

    function Lw(a) {
        var b = Fw(a).ia;
        return Iw(a, function() {
            return b.scrollTop === b.scrollHeight - b.clientHeight
        })
    }

    function Vw(a) {
        var b = Fw(a),
            c = b.ia,
            d = b.hb;
        return Iw(a, function() {
            return d.getBoundingClientRect().top <= c.getBoundingClientRect().top
        })
    }

    function Ww(a) {
        return El(a.A.map(Bm), Xw(a))
    }

    function Xw(a) {
        return Iw(a, function() {
            return 0 === Fw(a).ia.scrollTop
        })
    }

    function Iw(a, b) {
        var c = new vl(b());
        (new Il(a.F)).ba(function() {
            return void U(c, b())
        });
        return Al(c)
    }

    function Yw(a) {
        var b = Fw(a).ia.scrollTop;
        Zw(a, b);
        return function() {
            return void $w(a, b)
        }
    }

    function Zw(a, b) {
        U(a.A, !0);
        var c = Fw(a),
            d = c.Gb;
        c = c.ia;
        c.scrollTop = 0;
        c.classList.add("ved-scrolling-paused");
        d.style.setProperty("margin-top", "-" + b + "px");
        return function() {
            return void $w(a, b)
        }
    }

    function $w(a, b) {
        var c = Fw(a),
            d = c.ia;
        c.Gb.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Nw(a, b);
        U(a.A, !1)
    }

    function Ow(a, b) {
        a = Fw(a).Gb.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function Nw(a, b) {
        Fw(a).ia.scrollTop = b;
        Tw(a)
    }

    function Tw(a) {
        yl(a.j, function() {
            return void Hl(a.F)
        })
    }

    function Uw(a) {
        if (!a.j.R) {
            var b = Fw(a),
                c = b.zd;
            b = b.Fc.getBoundingClientRect().height;
            b = Math.max(ax(a), b);
            U(a.j, !0);
            var d = Yw(a);
            c.style.setProperty("height", b + "px");
            d();
            a.win.requestAnimationFrame(function() {
                a.win.requestAnimationFrame(function() {
                    U(a.j, !1)
                })
            })
        }
    }

    function ax(a) {
        a = Fw(a);
        var b = a.mc,
            c = a.zd,
            d = a.hb;
        a = a.ia.getBoundingClientRect();
        b = b.getBoundingClientRect();
        c = c.getBoundingClientRect();
        d = d.getBoundingClientRect();
        c = c.top - b.top;
        return Math.max(a.height - d.height - c, Math.min(a.height, a.bottom - b.top) - c)
    }

    function Fw(a) {
        if (a.D) throw Error("Accessing domItems after disposal");
        return a.B
    }
    Dw.prototype.W = function() {
        var a = this.B.Zc.je,
            b = a.parentNode;
        b && b.removeChild(a);
        T.prototype.W.call(this)
    };

    function bx(a, b, c, d) {
        T.call(this);
        this.win = a;
        this.j = b;
        zl(Gw(b), !0, function() {
            lm(c);
            uv(d)
        });
        zl(Gw(b), !1, function() {
            tl(c.j);
            tl(c.A);
            mm(c);
            vv(d)
        })
    }
    z(bx, T);

    function cx(a, b, c) {
        var d = qv(new pv(a), c.zIndex - 1),
            e = ew(a, c.Jc),
            f = e.shadowRoot,
            g = f.appendChild,
            h = new rg(a.document);
        var k = 100 * c.Wd;
        var l = 100 * c.Gd;
        k = Lu("<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + Y(c.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " + Y(l) +
            "%; transition: transform " + Y(.5) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + Y(uw()) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            Y(k / l * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + Y((l - k) / l * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            Y(k / l * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + Y(k / l * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + Y(ww() + 50) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            Y(uw()) + "px " + Y(uw()) + "px 0 0; background: white; display: flex; height: " + Y(ww()) + 'px; justify-content: center; cursor: grab;}.ved-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            xw("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + xw("ved-fixed-handle") + "</div></div></div>");
        g.call(f, Ig(h, Gu(k)));
        g = fw("ved-content-container", f);
        g.appendChild(b);
        Ub(a.document.body.offsetHeight);
        b = {
            sb: fw("ved-drawer-container", f),
            Uc: fw("ved-modal-background", f),
            me: fw("ved-ui-revealer", f),
            ia: fw("ved-scroller",
                f),
            Gb: fw("ved-scrolled-stack", f),
            kf: fw("ved-fully-closed-anchor", f),
            hb: fw("ved-partially-extended-anchor", f),
            zd: fw("ved-content-sizer", f),
            Fc: g,
            dk: fw("ved-moving-handle", f),
            mc: fw("ved-moving-handle-holder", f),
            jf: fw("ved-fixed-handle", f),
            Ed: fw("ved-fixed-handle-holder", f),
            Vd: fw("ved-over-scroll-block", f),
            Zc: e
        };
        e = b.jf;
        e = new Wl(new Ol(a, e), new Kl(e));
        f = e.j;
        f.C.addEventListener("mousedown", f.H);
        f.B.addEventListener("mouseup", f.D);
        f.B.addEventListener("mousemove", f.F, {
            passive: !1
        });
        f = e.l;
        f.l.addEventListener("touchstart",
            f.F);
        f.l.addEventListener("touchend", f.C);
        f.l.addEventListener("touchmove", f.D, {
            passive: !1
        });
        b = new Dw(a, b, new yw(e));
        b.init();
        d = new bx(a, b, km(a), d);
        rl(d, Ya(ql, b));
        d.init();
        c.df && (a = lw(a)) && dx(d, a);
        return d
    }
    bx.prototype.show = function(a) {
        var b = this;
        a = void 0 === a ? {} : a;
        a = void 0 === a.rb ? !1 : a.rb;
        Ew(this.j);
        a && zl(Gw(this.j), !1, function() {
            b.Fa()
        })
    };
    bx.prototype.collapse = function() {
        var a = this.j;
        Fw(a).sb.classList.remove("ved-revealed");
        U(a.l, !1)
    };
    bx.prototype.isVisible = function() {
        return Gw(this.j)
    };
    bx.prototype.init = function() {
        var a = this;
        (new Il(this.j.C)).ba(function() {
            a.collapse()
        });
        ex(this);
        fx(this);
        Ub(this.win.document.body.offsetHeight)
    };

    function ex(a) {
        xl(El(Kw(a.j), Mw(a.j)), !0, Cm(function() {
            Fw(a.j).hb.classList.remove("ved-snap-point-top")
        }));
        xl(Jw(a.j), !0, function() {
            Fw(a.j).ia.classList.add("ved-no-snap")
        });
        xl(Jw(a.j), !1, function() {
            Fw(a.j).ia.classList.remove("ved-no-snap")
        });
        zl(Jw(a.j), !1, function() {
            var b = a.j;
            var c = Fw(b).mc;
            c = Zw(b, Ow(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function fx(a) {
        var b = a.j.I;
        zw(b).ba(function(c) {
            c = -c;
            if (0 < c) {
                var d = Fw(a.j).me;
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", "translateY(" + c + "px)")
            } else c = Fw(a.j).me, c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        Bw(b).ba(function(c) {
            30 < -c && a.collapse()
        })
    }

    function dx(a, b) {
        zl(Gw(a.j), !0, function() {
            mw(b)
        });
        zl(Gw(a.j), !1, function() {
            nw(b)
        });
        (new Il(b.A)).ba(function() {
            return void a.collapse()
        });
        rl(a, Ya(ql, b))
    };
    var gx = x(["https://www.google.com/adsense/search/async-ads.js"]),
        hx = x(["https://cse.google.com/cse.js?cx=9d449ff4a772956c6"]);

    function ix(a, b, c, d, e, f, g) {
        this.j = a;
        this.P = b;
        this.K = (null == d ? void 0 : xd(d, 1)) || "en";
        this.U = (null == d ? void 0 : xd(d, 2)) || "Search results from ${website}";
        this.I = e;
        this.D = f;
        this.M = g;
        this.O = c.replace("ca", "partner");
        this.L = qv(new pv(a), 1E5);
        this.C = new rg(a.document);
        f ? b = null : this.I ? 2 === kh() ? (b = Math.round(.95 * this.j.innerHeight) - 30, b = new zv(this.j, b, b)) : b = new wv(this.j, Math.round(.8 * this.j.innerWidth)) : b = null;
        this.B = b;
        this.A = this.C.createElement("DIV");
        this.F = this.C.createElement("DIV");
        this.l = this.C.createElement("IFRAME");
        this.H = new nv(this.l, this.O, a.location.host, this.K, this.U, this.M)
    }
    ix.prototype.init = function() {
        if (0 !== this.P.length && (this.I || !this.j.document.querySelector('script[src*="cse.google.com/cse"]'))) {
            if (this.D) this.H.init();
            else if (this.I) jx(this);
            else {
                kx(this);
                var a = this.C.createElement("SCRIPT"),
                    b = R(hx);
                b = Lh(b, new r.Map([
                    ["language", this.K]
                ]));
                nf(a, b);
                this.j.document.head.appendChild(a)
            }
            a = this.C.createElement("SCRIPT");
            nf(a, R(gx));
            this.j.document.head.appendChild(a);
            lx(this)
        }
    };

    function mx(a, b) {
        return a.D ? 2 === kh() ? cx(a.j, b, {
            Wd: .95,
            Gd: .95,
            zIndex: 100001
        }) : pw(a.j, b, {
            Fd: Math.round(.8 * a.j.innerWidth) + "px",
            wd: "",
            Cd: !1,
            zIndex: 100001
        }) : null
    }

    function kx(a) {
        function b() {
            "flex" === a.A.style.display && (a.A.style.display = "none");
            a.F.classList.remove("gsc-modal-background-image-visible");
            vv(a.L)
        }
        a.A.id = "cse-overlay-div";
        M(a.A, {
            "background-color": "white",
            border: "none",
            "border-radius": "16px 16px 16px 16px",
            "box-shadow": "0 3px 10px rgb(34 25 25 / 40%)",
            display: "none",
            "flex-direction": "column",
            height: "90%",
            left: "2.5%",
            margin: "auto",
            overflow: "auto",
            position: "fixed",
            padding: "1%",
            top: "5%",
            transition: "all 0.25s linear",
            width: "95%",
            "z-index": 100002
        });
        var c = a.C.createElement("DIV");
        c.id = "cse-overlay-close-button";
        M(c, {
            "background-image": "url(//www.google.com/images/nav_logo114.png)",
            "background-position": "-140px -230px",
            "background-repeat": "no-repeat",
            cursor: "pointer",
            display: "block",
            "float": "right",
            height: "12px",
            opacity: 1,
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "12px"
        });
        a.F.classList.add("gsc-modal-background-image");
        a.F.setAttribute("tabindex", 0);
        a.j.document.body.appendChild(a.A);
        a.j.document.body.appendChild(a.F);
        c.onclick = b;
        a.F.onclick =
            b;
        a.A.appendChild(c);
        a.A.appendChild(a.l);
        a.H.init()
    }

    function jx(a) {
        a.B.init();
        a.B.U(a.l);
        a.B instanceof zv && Bv(a.B, a.l);
        a.B.ea(function() {
            return void vv(a.L)
        });
        a.H.init()
    }
    ix.prototype.ea = function(a, b) {
        var c = this;
        this.D || uv(this.L);
        if (this.I || this.D) {
            var d = function() {
                function e() {
                    var g, h = null == (g = c.l.contentDocument) ? void 0 : g.documentElement;
                    h ? f.observe(h) : (console.warn("iframe body missing"), setTimeout(e, 1E3))
                }
                var f = new ResizeObserver(function(g) {
                    c.l.height = 0;
                    c.l.height = g[0].target.scrollHeight
                });
                e();
                c.D ? (ov(c.H, a, b), c.B.show({
                    rb: !0
                })) : c.B.show()
            };
            this.D ? (this.B = mx(this, this.l), J(this.l, "load", d)) : (ov(this.H, a, b), d())
        } else this.F.classList.add("gsc-modal-background-image-visible"),
            this.A.style.display = "flex", ov(this.H, a, b)
    };

    function lx(a) {
        (function(c, d) {
            c[d] = c[d] || function() {
                (c[d].q = c[d].q || []).push(arguments)
            };
            c[d].t = 1 * new Date
        })(a.j, "_googCsa");
        var b = a.P.map(function(c) {
            return {
                container: c,
                relatedSearches: 5
            }
        });
        a.j._googCsa("relatedsearch", {
            pubId: a.O,
            styleId: "5134551505",
            hl: a.K,
            fexp: a.M,
            channel: "AutoRsVariant",
            resultsPageBaseUrl: "http://google.com",
            resultsPageQueryParam: "q",
            relatedSearchTargeting: "content",
            relatedSearchResultClickedCallback: a.ea.bind(a),
            relatedSearchUseResultCallback: !0
        }, b)
    };

    function nx(a, b, c) {
        this.l = a;
        this.j = b;
        this.A = c
    }

    function ox(a) {
        var b = mv(a.l, a.j);
        b = ts(b, a.l).sort(px);
        var c = 0 == b.length ? [] : [b[Math.floor(b.length / 2)]];
        var d = a.l;
        b = [];
        for (var e = 0; e < c.length; e++) {
            var f = c[e],
                g = "autors-container-" + e,
                h = d.document.createElement("div");
            h.setAttribute("id", g);
            (new fv(d, f, new lv(h))).init();
            b.push(g)
        }
        var k, l, m;
        c = (null == (k = G(a.j, sn, 28)) ? void 0 : null == (l = G(k, on, 6)) ? void 0 : md(l, 1, 0)) || (null == (m = G(a.j, sn, 28)) ? void 0 : md(m, 3, 0)) || 0;
        var n;
        k = (null == (n = G(a.j, sn, 28)) ? void 0 : nd(n, 4)) || !1;
        var p;
        n = (null == (p = G(a.j, sn, 28)) ? void 0 : nd(p,
            7)) || !1;
        var u;
        (new ix(a.l, b, a.A, null == (u = G(a.j, sn, 28)) ? void 0 : G(u, pn, 5), k, n, c)).init()
    }

    function px(a, b) {
        return a.Y.j - b.Y.j
    };
    var qx = {
            hh: "google_ads_preview",
            Qh: "google_mc_lab",
            gi: "google_anchor_debug",
            fi: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            Di: "google_scr_debug",
            Fi: "google_ia_debug_allow_onclick",
            Yi: "googleads",
            ve: "google_pedestal_debug",
            rj: "google_responsive_slot_preview",
            qj: "google_responsive_dummy_ad",
            Xg: "google_audio_sense",
            Yg: "google_auto_gallery",
            ah: "google_auto_storify_swipeable",
            Zg: "google_auto_storify_scrollable"
        },
        rx = {},
        sx = (rx.google_bottom_anchor_debug = 1, rx.google_anchor_debug = 2, rx.google_ia_debug =
            8, rx.google_scr_debug = 9, rx.googleads = 2, rx.google_pedestal_debug = 30, rx);
    var tx = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        vj: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function ux(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = vx(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function vx(a) {
        var b = "";
        Ug(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    }

    function wx() {
        var a = B.location,
            b = !1;
        Ug(qx, function(c) {
            ux(a, c) && (b = !0)
        });
        return b
    }

    function xx(a, b) {
        switch (a) {
            case 1:
                return ux(b, "google_ia_debug");
            case 2:
                return ux(b, "google_bottom_anchor_debug");
            case 3:
                return ux(b, "google_anchor_debug") || ux(b, "googleads");
            case 4:
                return ux(b, "google_scr_debug")
        }
    };

    function yx(a, b, c) {
        var d = [];
        G(a, Sn, 18) && d.push(2);
        b.da && d.push(0);
        G(a, sn, 28) && 1 == md(G(a, sn, 28), 1, 0) && d.push(1);
        G(a, qn, 31) && 1 == md(G(a, qn, 31), 1, 0) && d.push(5);
        (G(a, gn, 27) && 1 == md(G(a, gn, 27), 1, 0) || ux(c, "google_audio_sense")) && d.push(3);
        G(a, Un, 29) && d.push(4);
        G(a, ho, 30) && d.push(6);
        return d
    };

    function zx(a, b, c) {
        this.l = a;
        this.B = b;
        this.A = c;
        this.j = new vl(!1)
    }
    zx.prototype.va = function(a, b, c, d) {
        var e = Ax(a, d),
            f = Ax(a),
            g = Bx(this, a),
            h = Cx(this, a, c);
        a = Dx(a);
        a.appendChild(e);
        a.appendChild(f);
        a.appendChild(g);
        a.appendChild(h);
        this.j.ba(function(k) {
            M(e, {
                display: k ? "none" : "inline"
            });
            M(f, {
                display: k ? "inline" : "none"
            });
            k ? (M(g, {
                "line-height": "24px",
                "max-width": "100vw",
                opacity: "1",
                transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
            }), M(h, {
                margin: "0px 12px 0px 8px",
                opacity: 1,
                width: "24px",
                transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
            })) : (M(g, {
                "line-height": "0px",
                "max-width": "0vw",
                opacity: "0",
                transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
            }), M(h, {
                margin: "0",
                opacity: "0",
                width: "0",
                transition: "margin 100ms, opacity 50ms, width 100ms"
            }))
        }, !0);
        return a
    };

    function Dx(a) {
        a = a.document.createElement("ins");
        Ex(a);
        M(a, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return a
    }

    function Ax(a, b) {
        a = qg(a).createElement("IMG");
        Ex(a);
        a.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        M(a, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && a.addEventListener("click", function(c) {
            b();
            c.stopPropagation()
        });
        return a
    }

    function Bx(a, b) {
        var c = b.document.createElement("button");
        Ex(c);
        M(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", function(d) {
            a.A();
            d.stopPropagation()
        });
        return c
    }

    function Cx(a, b, c) {
        b = qg(b).createElement("IMG");
        b.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        b.setAttribute("aria-label", a.B);
        Ex(b);
        M(b, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        b.addEventListener("click", function(d) {
            c();
            d.stopPropagation()
        });
        return b
    }
    zx.prototype.Jd = function() {
        return 40
    };
    zx.prototype.Td = function() {
        U(this.j, !1);
        return 0
    };
    zx.prototype.Ud = function() {
        U(this.j, !0)
    };

    function Ex(a) {
        M(a, yu());
        M(a, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function Fx(a, b, c, d, e, f, g, h) {
        this.C = a;
        this.D = b;
        this.H = c;
        this.l = d;
        this.F = e;
        this.B = void 0 === f ? null : f;
        this.j = void 0 === g ? null : g;
        this.A = void 0 === h ? null : h
    }
    Fx.prototype.va = function(a) {
        var b = a.document.createElement("div");
        Gx(this, b);
        M(b, {
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": this.l
        });
        if (this.B) {
            var c = qg(a).createElement("IMG");
            c.src = this.B;
            Gx(this, c);
            M(c, {
                margin: "0px 8px 0px 0px",
                width: "24px",
                height: "24px"
            })
        } else c = null;
        c && b.appendChild(c);
        c = a.document.createElement("span");
        Gx(this, c);
        M(c, {
            "line-height": "24px"
        });
        c.appendChild(a.document.createTextNode(this.C));
        b.appendChild(c);
        c = Hx(this, a);
        c.appendChild(b);
        return this.A ? Ix(this,
            a, c, this.A) : c
    };

    function Ix(a, b, c, d) {
        function e(h) {
            h.matches ? (M(f, {
                "flex-direction": "row"
            }), a.j && M(f, {
                "border-top": a.j,
                "border-bottom": a.j
            }), M(g, {
                "margin-left": "8px",
                "text-align": "start"
            }), M(c, {
                border: "0",
                "margin-right": "8px",
                width: "auto"
            })) : (M(f, {
                border: "0",
                "flex-direction": "column"
            }), M(g, {
                "margin-left": "0",
                "text-align": "center"
            }), M(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && M(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        }
        var f = b.document.createElement("div");
        M(f, yu());
        M(f, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        var g = b.document.createElement("span");
        g.appendChild(b.document.createTextNode(d));
        M(g, yu());
        M(g, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        e(b);
        b.addEventListener("change", e);
        f.appendChild(c);
        f.appendChild(g);
        return f
    }

    function Hx(a, b) {
        b = b.document.createElement("button");
        Gx(a, b);
        var c = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (c["border-top"] = a.j, c["border-bottom"] = a.j);
        M(b, c);
        b.addEventListener("click", function(d) {
            a.D();
            d.stopPropagation()
        });
        return b
    }

    function Gx(a, b) {
        M(b, yu());
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.F,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.H,
            "user-select": "none",
            cursor: "pointer"
        })
    };

    function Jx(a, b) {
        b = b.filter(function(c) {
            return 5 == D(G(c, $m, 4), 1) && 1 == D(c, 8)
        });
        b = Xr(b, a);
        a = ts(b, a);
        a.sort(function(c, d) {
            return d.Y.j - c.Y.j
        });
        return a[0] || null
    };

    function Kx(a) {
        var b = 0;
        try {
            b |= Pk(a.J);
            var c = Ok(a.J);
            b |= c ? 320 > c ? 8192 : 0 : 2048;
            var d = a.J;
            b |= d.navigator && Lx(d.navigator.userAgent) ? 1048576 : 0;
            if (a.kc) var e = b | (a.J.innerHeight >= a.kc ? 0 : 1024);
            else {
                var f = a.J;
                e = b | (f.innerHeight >= f.innerWidth ? 0 : 8)
            }
            b = e;
            b |= Qk(a.J, a.Sc);
            b |= Sk(a.J)
        } catch (k) {
            b |= 32
        }
        switch (a.ud) {
            case 2:
                c = a.J;
                d = a.pa;
                d = void 0 === d ? null : d;
                e = Mx(c.innerWidth, 3, 0, Math.min(Math.round(c.innerWidth / 320 * 50), Nx) + 15, 3);
                null != Ox(c, e, void 0 === d ? null : d) && (b |= 16777216);
                break;
            case 1:
                c = a.J;
                d = a.pa;
                d = void 0 === d ? null : d;
                e = c.innerWidth;
                f = c.innerHeight;
                var g = Math.min(Math.round(c.innerWidth / 320 * 50), Nx) + 15,
                    h = Mx(e, 3, f - g, f, 3);
                25 < g && h.push({
                    x: e - 25,
                    y: f - 25
                });
                null != Ox(c, h, void 0 === d ? null : d) && (b |= 16777216)
        }
        if (c = a.Se) c = a.pa, c = null != Px(a.J, void 0 === c ? null : c);
        c && (b |= 16777216);
        return b
    }

    function Lx(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }

    function Px(a, b) {
        b = void 0 === b ? null : b;
        var c = a.innerWidth,
            d = a.innerHeight,
            e = X(Op);
        c = Mx(c, 10, d - e, d, 10);
        return Ox(a, c, b)
    }

    function Qx(a, b) {
        for (var c = a.innerWidth, d = a.innerHeight, e = d; e > b;) {
            var f = Mx(c, 3, e - b, e, 3);
            f = Ox(a, f);
            if (!f) return d - e;
            e = f.getBoundingClientRect().top - 1
        }
        return null
    }

    function Ox(a, b, c) {
        c = void 0 === c ? null : c;
        b = y(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = a,
                f = d.value,
                g = c;
            g = void 0 === g ? null : g;
            if (d = Rx(e.document, f.x, f.y)) {
                var h;
                if (!(h = Sx(d, e, f, g))) a: {
                    g = void 0 === g ? null : g;h = e.document;
                    for (d = d.offsetParent; d && d != h.body; d = d.offsetParent) {
                        var k = Sx(d, e, f, g);
                        if (k) {
                            h = k;
                            break a
                        }
                    }
                    h = null
                }
                d = h || null
            } else d = null;
            if (d) return d
        }
        return null
    }

    function Rx(a, b, c) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    }

    function Mx(a, b, c, d, e) {
        for (var f = [], g = 0; g < e; g++)
            for (var h = 0; h < b; h++) {
                var k = f,
                    l = b - 1,
                    m = e - 1;
                k.push.call(k, {
                    x: (0 == l ? 0 : h / l) * a,
                    y: c + (0 == m ? 0 : g / m) * (d - c)
                })
            }
        return f
    }

    function Sx(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("fixed" !== Sh(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= Vh(a).width && 1 >= Vh(a).height ? !0 : !1;
        d && Mi(d, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: e,
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    var Nx = 90 * 1.38;

    function Tx(a, b, c) {
        var d = this;
        this.j = a;
        this.C = b;
        this.D = null;
        this.B = new vl(null);
        this.K = c || null;
        this.A = null;
        this.H = !1;
        this.l = 0;
        this.I = null;
        this.L = function() {
            return Ux(d)
        }
    }
    Tx.prototype.init = function() {
        this.j.addEventListener("scroll", this.L);
        this.l = Tk(this.j);
        Vx(this)
    };
    Tx.prototype.remove = function() {
        this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
        this.A = null;
        Wx(this);
        U(this.B, null)
    };
    Tx.prototype.F = function() {
        return this.B
    };

    function Wx(a) {
        a.j.removeEventListener("scroll", a.L)
    }

    function Ux(a) {
        if (a.H) {
            var b = $k(a.j);
            if (b > a.l + 100 || b < a.l - 100) Xx(a), a.l = Tk(a.j)
        }
        a.I && a.j.clearTimeout(a.I);
        a.I = a.j.setTimeout(function() {
            return Vx(a)
        }, 200)
    }

    function Vx(a) {
        var b = Tk(a.j);
        a.l && a.l > b && (a.l = b);
        b = $k(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), Yx(a))
    }

    function Xx(a) {
        a.H = !1;
        var b = a.C.Td();
        switch (b) {
            case 0:
                U(a.B, a.D);
                break;
            case 1:
                a.A && (M(a.A, {
                    display: "none"
                }), U(a.B, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function Yx(a) {
        a.A || (a.A = Zx(a));
        M(a.A, {
            display: "block"
        });
        a.H = !0;
        a.C.Ud();
        U(a.B, a.D)
    }

    function Zx(a) {
        var b = Qx(a.j, a.C.Jd() + 60);
        b = null == b ? 30 : b + 30;
        var c = a.j.document.createElement("div");
        M(c, yu());
        M(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.D = a.C.va(a.j, function() {
            return a.remove()
        }, function() {
            Wx(a);
            Xx(a)
        }, function() {
            Wx(a);
            Yx(a)
        });
        c.appendChild(a.D);
        a.K && (c.className = a.K);
        a.j.document.body.appendChild(c);
        return c
    };

    function $x(a, b, c, d, e) {
        this.C = a;
        this.I = b;
        this.L = c;
        this.K = d;
        this.H = e;
        this.D = new vl(0);
        this.B = new vl(null);
        this.l = this.A = this.j = null
    }
    $x.prototype.init = function() {
        var a = this;
        this.I ? (this.A = new fv(this.C, this.I, this.L, this.H), this.A.init(), Bl(this.B, this.A.F()), U(this.D, 1), null == this.j && (this.j = new hm(this.C), this.j.init(2E3)), this.j.addListener(function() {
            ay(a);
            by(a)
        })) : by(this)
    };
    $x.prototype.remove = function() {
        ay(this);
        this.j && (this.j.Fa(), this.j = null)
    };
    $x.prototype.F = function() {
        return this.B
    };

    function by(a) {
        a.l = new Tx(a.C, a.K, a.H);
        a.l.init();
        Bl(a.B, a.l.F());
        U(a.D, 2)
    }

    function ay(a) {
        U(a.D, 0);
        null != a.A && (a.A.remove(), a.A = null);
        null != a.l && (a.l.remove(), a.l = null)
    };

    function cy(a, b, c, d, e) {
        a = new $x(a, Jx(a, e), new Fx(b, d, "#FFF", "#4A4A4A", "normal"), new zx(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };

    function dy(a) {
        return a.googlefc = a.googlefc || {}
    }

    function ey(a) {
        a = dy(a);
        return a.ccpa = a.ccpa || {}
    };

    function fy(a, b, c) {
        this.j = a;
        this.A = qv(b, 2147483643);
        this.B = c;
        this.l = null
    }

    function gy(a) {
        var b = dy(a.j);
        ey(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: function() {
                return hy(a)
            }
        })
    }

    function hy(a) {
        var b = ey(a.j);
        if (iy(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = cy(a.j, c, b, function() {
                return jy(a)
            }, a.B))
        }
    }

    function jy(a) {
        uv(a.A);
        ey(a.j).openConfirmationDialog(function(b) {
            b && a.l && (a.l.remove(), a.l = null);
            vv(a.A)
        })
    }

    function iy(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function ky(a, b, c, d) {
        this.B = a;
        this.C = b;
        this.A = c;
        this.l = d;
        this.j = new vl(!1)
    }
    ky.prototype.va = function(a, b, c, d) {
        c = ly(a);
        var e = my(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
            f = my(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
            g = ny(this, a),
            h = my(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.C);
        M(h, {
            "margin-left": "auto"
        });
        c.appendChild(e);
        c.appendChild(f);
        c.appendChild(g);
        c.appendChild(h);
        var k = oy(this, a);
        a = py(a);
        a.appendChild(c);
        a.appendChild(k);
        this.j.ba(function(l) {
            M(e, {
                display: l ? "none" : "inline"
            });
            M(f, {
                display: l ? "inline" : "none"
            });
            l ? (M(g, {
                    "line-height": "24px",
                    "max-width": "100vw",
                    opacity: "1",
                    transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                }), M(h, {
                    "margin-right": "12px",
                    opacity: 1,
                    width: "24px",
                    transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                }), M(k, {
                    "border-width": "1px",
                    "line-height": "14px",
                    "max-width": "100vw",
                    opacity: "1",
                    padding: "8px 32px",
                    transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                })) :
                (M(g, {
                    "line-height": "0px",
                    "max-width": "0vw",
                    opacity: "0",
                    transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                }), M(h, {
                    "margin-right": "0",
                    opacity: "0",
                    width: "0",
                    transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                }), M(k, {
                    "border-width": "0px",
                    "line-height": "0px",
                    "max-width": "0vw",
                    opacity: "0",
                    padding: "0",
                    transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                }))
        }, !0);
        return a
    };

    function py(a) {
        a = a.document.createElement("div");
        M(a, yu());
        M(a, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return a
    }

    function ly(a) {
        a = a.document.createElement("ins");
        qy(a);
        M(a, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return a
    }

    function my(a, b, c, d) {
        a = qg(a).createElement("IMG");
        a.src = b;
        d && a.setAttribute("aria-label", d);
        qy(a);
        M(a, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        a.addEventListener("click", function(e) {
            c();
            e.stopPropagation()
        });
        return a
    }

    function ny(a, b) {
        var c = b.document.createElement("span");
        qy(c);
        M(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.B));
        c.addEventListener("click", function(d) {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function oy(a, b) {
        var c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.A));
        M(c, yu());
        M(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }
    ky.prototype.Jd = function() {
        return 71
    };
    ky.prototype.Td = function() {
        U(this.j, !1);
        return 0
    };
    ky.prototype.Ud = function() {
        U(this.j, !0)
    };

    function qy(a) {
        M(a, yu());
        M(a, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function ry(a, b, c, d) {
        this.B = a;
        this.j = qv(b, 2147483643);
        this.A = c;
        this.l = d
    }

    function sy(a) {
        ty(a.l, function(b) {
            var c = a.B,
                d = b.Yf,
                e = b.Ue,
                f = b.Je;
            b = b.showRevocationMessage;
            (new $x(c, Jx(c, a.A), new Fx(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new ky(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, function() {
            vv(a.j)
        })
    };

    function uy(a) {
        if (!a || !fd(a, 1)) return !1;
        a = D(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function vy(a, b, c, d, e) {
        this.l = a;
        this.A = b;
        this.j = c;
        this.C = d;
        this.B = e || null
    }

    function wy(a) {
        if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            uy(a.j) && (b = new ry(a.l, a.C, a.B || H(a.j, Qn, 4), a.A), uv(b.j), sy(b), b = !0);
            var c;
            a: if ((c = a.j) && fd(c, 3)) switch (c = D(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (gy(new fy(a.l, a.C, a.B || H(a.j, Qn, 4))), b = !0);
            if (c = (c = a.j) ? !0 === ld(c, 5) : !1) c = ((c = a.j) ? !0 === ld(c, 6) : !1) || W(gp);
            c && (b = !0);
            b && (a.A.start(), a.l.adsbygoogle_ama_fc_has_run = !0)
        }
    };

    function xy(a, b, c, d, e, f) {
        try {
            var g = a.j,
                h = Rg("SCRIPT", g);
            h.async = !0;
            nf(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", function() {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", function() {
                0 < c ? xy(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (k) {
            f()
        }
    }

    function yy(a, b, c, d) {
        c = void 0 === c ? function() {} : c;
        d = void 0 === d ? function() {} : d;
        xy(qg(a), b, 0, !1, c, d)
    };

    function zy(a) {
        a = (void 0 === a ? null : a) || B;
        return a.googlefc || (a.googlefc = {})
    };
    Zd(Ck).map(function(a) {
        return Number(a)
    });
    Zd(Dk).map(function(a) {
        return Number(a)
    });

    function Ay(a, b) {
        function c() {
            if (!a.frames[b])
                if (d.body) {
                    var e = Rg("IFRAME", d);
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = b;
                    d.body.appendChild(e)
                } else a.setTimeout(c, 5)
        }
        var d = a.document;
        c()
    };

    function By(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function Cy(a, b, c) {
        b = void 0 === b ? 500 : b;
        c = void 0 === c ? !1 : c;
        T.call(this);
        this.j = a;
        this.l = null;
        this.B = {};
        this.I = 0;
        this.F = b;
        this.C = c;
        this.A = null
    }
    z(Cy, T);
    Cy.prototype.W = function() {
        this.B = {};
        this.A && (zf(this.j, "message", this.A), delete this.A);
        delete this.B;
        delete this.j;
        delete this.l;
        T.prototype.W.call(this)
    };

    function Dy(a) {
        return "function" === typeof a.j.__tcfapi || null != Ey(a)
    }

    function Fy(a, b) {
        var c = {
                internalErrorState: 0,
                internalBlockOnErrors: a.C
            },
            d = tf(function() {
                return b(c)
            }),
            e = 0; - 1 !== a.F && (e = setTimeout(function() {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.F));
        Gy(a, "addEventListener", function(f) {
            f && (c = f, c.internalErrorState = By(c), c.internalBlockOnErrors = a.C, Hy(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), Gy(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }
    Cy.prototype.addEventListener = function(a) {
        function b(g, h) {
            clearTimeout(f);
            g ? (d = g, d.internalErrorState = By(d), d.internalBlockOnErrors = c.C, h && 0 === d.internalErrorState || (d.tcString = "tcunavailable", h || (d.internalErrorState = 3))) : (d.tcString = "tcunavailable", d.internalErrorState = 3);
            a(d)
        }
        var c = this,
            d = {
                internalBlockOnErrors: this.C
            },
            e = tf(function() {
                return a(d)
            }),
            f = 0; - 1 !== this.F && (f = setTimeout(function() {
            d.tcString = "tcunavailable";
            d.internalErrorState = 1;
            e()
        }, this.F));
        try {
            Gy(this, "addEventListener", b)
        } catch (g) {
            d.tcString =
                "tcunavailable", d.internalErrorState = 3, f && (clearTimeout(f), f = 0), e()
        }
    };
    Cy.prototype.removeEventListener = function(a) {
        a && a.listenerId && Gy(this, "removeEventListener", null, a.listenerId)
    };

    function Iy(a) {
        var b = void 0 === b ? !1 : b;
        return Hy(a) ? !1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length ? !0 : Jy(a, "1") : !1
    }

    function Jy(a, b) {
        var c = void 0 === c ? "755" : c;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var d = a.publisher.restrictions[b];
                if (void 0 !== d) {
                    d = d[void 0 === c ? "755" : c];
                    break a
                }
            }
            d = void 0
        }
        if (0 === d) return !1;
        a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function Gy(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (Ey(a)) {
            Ky(a);
            var e = ++a.I;
            a.B[e] = c;
            a.l && (c = {}, a.l.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function Ey(a) {
        if (a.l) return a.l;
        a.l = jh(a.j, "__tcfapiLocator");
        return a.l
    }

    function Ky(a) {
        a.A || (a.A = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, J(a.j, "message", a.A))
    }

    function Hy(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = By(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function Ly(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(function(c) {
            return Jy(a, c)
        })
    };

    function My(a, b) {
        this.j = a;
        this.l = b
    }
    My.prototype.start = function() {
        if (this.j === this.j.top) try {
            Ay(this.j, "googlefcPresent"), Ny(this)
        } catch (a) {}
    };

    function ty(a, b, c) {
        var d = zy(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: function() {
                var e = zy(a.j),
                    f = new Cy(a.j);
                Dy(f) && Fy(f, function(g) {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        Yf: e.getDefaultConsentRevocationText(),
                        Ue: e.getDefaultConsentRevocationCloseText(),
                        Je: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: function() {
                            return e.showRevocationMessage()
                        }
                    })
                });
                c()
            }
        })
    }

    function Ny(a) {
        var b = pe(Td("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        yy(a.j, b, function() {}, function() {})
    };

    function Oy(a, b, c) {
        var d = G(a, Jn, 6);
        if (!d) return [];
        c = $t(H(d, Ln, 1), c);
        return (a = mo(a)) && ld(a, 11) ? c.map(function(e) {
            return ns(e)
        }) : c.map(function(e) {
            var f = an();
            return new Pr(new ks(e.yc, e.zc), new is, new js(b), !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        })
    };

    function Py(a) {
        I.call(this, a, -1, Qy)
    }
    z(Py, I);

    function Ry(a) {
        I.call(this, a, -1, Sy)
    }
    z(Ry, I);

    function Ty(a, b) {
        return E(a, 1, b)
    }

    function Uy(a, b) {
        return vd(a, 2, b)
    }

    function Vy(a) {
        I.call(this, a)
    }
    z(Vy, I);
    Vy.prototype.getHeight = function() {
        return md(this, 2, 0)
    };
    var Qy = [5],
        Sy = [2];

    function Wy(a) {
        I.call(this, a)
    }
    z(Wy, I);
    var Xy = [1, 2];

    function Yy() {}
    Yy.prototype.j = function(a) {
        return Zy(Math.floor(a.l))
    };

    function Zy(a) {
        a = Math.floor(a);
        var b = {};
        return new bn(["pedestal_container"], (b.google_reactive_ad_format = 30, b.google_phwr = 2.189, b.google_ad_width = a, b.google_ad_format = "autorelaxed", b.google_full_width_responsive = !0, b.google_enable_content_recommendations = !0, b.google_content_recommendation_ui_type = "pedestal", b))
    };

    function $y(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."],
            c;
        a = null == (c = Mk(a)) ? void 0 : c.tagSpecificState[1];
        if (null == a) c = null;
        else {
            var d;
            c = 4 === (null == (d = a.debugCard) ? void 0 : d.getAdType()) ? a.debugCard : null
        }(d = c) && d.displayAdLoadedContent(b)
    };

    function az(a) {
        I.call(this, a)
    }
    z(az, I);

    function bz() {
        this.D = this.G = this.A = this.Ac = null;
        this.l = this.B = 0
    }

    function cz(a, b) {
        if (!b) return !1;
        var c = b.adClient;
        if ("string" !== typeof c || !c) return !1;
        a.Ac = c;
        a.A = !!b.adTest;
        c = b.pubVars;
        Ra(c) && (a.G = c);
        if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
            a.D = {};
            c = y(b.fillMessage);
            for (var d = c.next(); !d.done; d = c.next()) d = d.value, a.D[d.key] = d.value
        }
        a.B = b.adWidth;
        a.l = b.adHeight;
        ai(a.B) && ai(a.l) || ik("rctnosize", b);
        return !0
    }
    bz.prototype.H = function() {
        return !0
    };

    function dz(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return Hb(b, function(d) {
            return c - d < 1E3 * a
        })
    }

    function ez(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || Kb(d, function(e) {
                    return !t(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = dz(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    }

    function fz(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var e = "__storage_test__" === d
            } catch (f) {
                e = !1
            }
            c = !e
        }
        return c ? null : ez(a, b)
    }

    function gz(a) {
        return !!a && 1 > a.length
    };

    function hz(a, b, c) {
        var d = 0;
        try {
            d |= Pk(a), d |= Sk(a), d |= Qk(a), d |= a.innerHeight >= a.innerWidth ? 0 : 8, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0, b && !gz(fz(c, 3600)) && (d |= 134217728), W(Ep) && (d |= 128)
        } catch (e) {
            d |= 32
        }
        return d
    };

    function iz() {
        bz.call(this);
        this.C = !1;
        this.j = null;
        this.F = !1
    }
    z(iz, bz);
    iz.prototype.H = function(a) {
        this.C = !!a.enableAma;
        var b = a.amaConfig;
        if (b) try {
            var c = Gd(io, b)
        } catch (d) {
            c = null
        } else c = null;
        this.j = c;
        Array.isArray(a.fillMessage) && (this.F = !0);
        return !0
    };
    var jz = {};

    function kz(a, b, c) {
        var d = lz(a, c, b);
        if (!d) return !0;
        for (var e = -1, f = c.D.l; d.Eb && d.Eb.length;) {
            var g = d.Eb.shift(),
                h = Wr(g.X),
                k = g.Y.j,
                l = !!c.A.bd || !!c.A.jd || c.Aa() || !!c.A.Ad || k > e;
            h = !h || h <= d.Ob;
            if (l && h && mz(c, g, {
                    eb: d.Ob
                })) {
                e = k;
                if (d.Mb.j.length + 1 >= f) return !0;
                d = lz(a, c, b);
                if (!d) return !0
            }
        }
        return c.B
    }

    function lz(a, b, c) {
        var d = b.D.l,
            e = b.D.B,
            f = b.D;
        f = jt(b.V(), f.j ? f.j.nb : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = Wk(f.A).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - it(f)) : e = void 0;
        a = null == e || 50 <= e ? nz(b, f, {
            types: a
        }, c) : null;
        return {
            Mb: f,
            Ob: e,
            Eb: a
        }
    }
    jz[2] = Ya(function(a, b) {
        a = nz(b, jt(b.V()), {
            types: a,
            Ta: Os(b.V())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (mz(b, a[c])) return !0;
        return b.B ? (b.C.push(11), !0) : !1
    }, [0]);
    jz[5] = Ya(kz, [0], 5);
    jz[10] = Ya(function(a, b) {
        a = [];
        var c = b.U;
        t(c, "includes").call(c, 3) && a.push(2);
        t(c, "includes").call(c, 1) && a.push(0);
        t(c, "includes").call(c, 2) && !W(Vo) && a.push(1);
        return kz(a, 10, b)
    }, 10);
    jz[3] = function(a) {
        if (!a.B) return !1;
        var b = nz(a, jt(a.V()), {
            types: [0],
            Ta: Os(a.V())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (mz(a, b[c])) return !0;
        a.C.push(11);
        return !0
    };

    function oz(a) {
        var b;
        a.A.ne ? b = new Ds(0, null, [], 3, null) : b = Os(a.V());
        return {
            types: [0],
            Ta: b
        }
    }

    function pz(a) {
        var b = a.V().document.body.getBoundingClientRect().width;
        qz(a, Zy(b))
    }

    function rz(a, b) {
        var c = oz(a);
        c.Xf = [5];
        c = nz(a, jt(a.V()), c, 8);
        sz(a, c.reverse(), b)
    }

    function sz(a, b, c) {
        b = y(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var e = c.j(d.Y);
            if (mz(a, d, {
                    kb: e
                })) return !0
        }
        return !1
    }
    jz[8] = function(a) {
        var b = a.V().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", function() {
            return jz[8](a)
        }, {
            once: !0
        }), !0;
        if (!a.B) return !1;
        if (!a.Ab()) return !0;
        b = oz(a);
        b.Yc = [2, 4, 5];
        b = nz(a, jt(a.V()), b, 8);
        var c = new Yy;
        if (sz(a, b, c)) return !0;
        if (a.A.Bd) switch (a.A.Xd || 0) {
            case 1:
                rz(a, c);
                break;
            default:
                pz(a)
        }
        return !0
    };
    jz[6] = Ya(kz, [2], 6);
    jz[7] = Ya(kz, [1], 7);
    jz[9] = function(a) {
        var b = lz([0, 2], a, 9);
        if (!b || !b.Eb) return a.C.push(17), $y(a.V()), a.B;
        for (var c = y(b.Eb), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a.A.Lc || null;
            if (null == e) var f = null;
            else {
                f = d.X;
                e = new tz(e, a.V());
                var g = new uz;
                f = new Pr(f.I, (void 0 === g ? null : g) || f.F, (void 0 === e ? null : e) || f.O, f.K, f.Ya, f.Rc, f.vc, f.A, f.ea, f.H, f.B, f.D, f.U);
                f = new cs(f, d.aa(), d.Y)
            }
            if (f && !(Wr(f.X) > b.Ob) && mz(a, f, {
                    eb: b.Ob,
                    mb: !0
                })) return a = f.X.P, Sr(d.X, 0 < a.length ? a[0] : null), !0
        }
        a.C.push(17);
        $y(a.V());
        return a.B
    };

    function uz() {}
    uz.prototype.l = function(a, b, c, d) {
        b = void 0 === b ? null : b;
        d = ar(d.document, {});
        br(d, a, null, b);
        return d
    };
    uz.prototype.A = function(a) {
        return Vk(a) || 0
    };

    function vz(a, b, c) {
        this.l = a;
        this.j = b;
        this.Mb = c
    }
    vz.prototype.ka = function(a) {
        return this.j ? It(this.l, this.j, a, this.Mb) : Ht(this.l, a, this.Mb)
    };
    vz.prototype.la = function() {
        return this.j ? 16 : 9
    };

    function wz(a) {
        this.Bc = a
    }
    wz.prototype.ka = function(a) {
        return Pt(a.document, this.Bc)
    };
    wz.prototype.la = function() {
        return 11
    };

    function xz(a) {
        this.gb = a
    }
    xz.prototype.ka = function(a) {
        return Mt(this.gb, a)
    };
    xz.prototype.la = function() {
        return 13
    };

    function yz() {}
    yz.prototype.ka = function(a) {
        return Ft(a)
    };
    yz.prototype.la = function() {
        return 12
    };

    function zz(a) {
        this.ub = a
    }
    zz.prototype.ka = function() {
        return Kt(this.ub)
    };
    zz.prototype.la = function() {
        return 2
    };

    function Az(a) {
        this.j = a
    }
    Az.prototype.ka = function() {
        return Nt(this.j)
    };
    Az.prototype.la = function() {
        return 3
    };

    function Bz() {}
    Bz.prototype.ka = function() {
        return Qt()
    };
    Bz.prototype.la = function() {
        return 17
    };

    function Cz(a) {
        this.j = a
    }
    Cz.prototype.ka = function() {
        return Jt(this.j)
    };
    Cz.prototype.la = function() {
        return 1
    };

    function Dz() {}
    Dz.prototype.ka = function() {
        return rf(Yr)
    };
    Dz.prototype.la = function() {
        return 7
    };

    function Ez(a) {
        this.Yc = a
    }
    Ez.prototype.ka = function() {
        return Lt(this.Yc)
    };
    Ez.prototype.la = function() {
        return 6
    };

    function Fz(a) {
        this.j = a
    }
    Fz.prototype.ka = function() {
        return Ot(this.j)
    };
    Fz.prototype.la = function() {
        return 5
    };

    function Gz(a, b) {
        this.minWidth = a;
        this.maxWidth = b
    }
    Gz.prototype.ka = function() {
        return Ya(Rt, this.minWidth, this.maxWidth)
    };
    Gz.prototype.la = function() {
        return 10
    };

    function Hz(a) {
        this.B = a.l.slice(0);
        this.l = a.j.slice(0);
        this.A = a.A;
        this.C = a.B;
        this.j = a.C
    }

    function Iz() {
        this.A = 0;
        this.B = !1;
        this.l = [].slice(0);
        this.j = [].slice(0)
    }

    function Jz(a) {
        var b = new Iz;
        b.C = a;
        b.l.push(new Cz(a));
        return b
    }

    function Kz(a, b) {
        a.l.push(new Ez(b));
        return a
    }

    function Lz(a, b) {
        a.l.push(new zz(b));
        return a
    }

    function Mz(a, b) {
        a.l.push(new Fz(b));
        return a
    }

    function Nz(a, b) {
        a.l.push(new Az(b));
        return a
    }

    function Oz(a) {
        a.l.push(new Dz);
        return a
    }

    function Pz(a) {
        a.j.push(new yz);
        return a
    }

    function Qz(a, b, c, d) {
        a.j.push(new vz(void 0 === b ? 0 : b, c, d));
        return a
    }

    function Rz(a, b, c) {
        c = void 0 === c ? Infinity : c;
        a.j.push(new Gz(void 0 === b ? 0 : b, c));
        return a
    }

    function Sz(a) {
        a.j.push(new Bz);
        return a
    }

    function Tz(a, b) {
        a.j.push(new xz(void 0 === b ? 0 : b));
        return a
    }

    function Uz(a, b) {
        a.A = b;
        return a
    }
    Iz.prototype.build = function() {
        return new Hz(this)
    };

    function tz(a, b) {
        this.l = a;
        this.A = b
    }
    tz.prototype.j = function() {
        var a = this.l,
            b = this.A,
            c = a.G || {};
        c.google_ad_client = a.Ac;
        c.google_ad_height = Vk(b) || 0;
        c.google_ad_width = Rk(b) || 0;
        c.google_reactive_ad_format = 9;
        b = new az;
        E(b, 1, a.C);
        a.j && td(b, 2, a.j);
        a.F && E(b, 3, !0);
        c.google_rasc = Ed(b);
        a.A && (c.google_adtest = "on");
        return new bn(["fsi_container"], c)
    };
    var Vz = Hm(new Fm(0, {})),
        Wz = Hm(new Fm(1, {}));

    function Xz(a) {
        return a === Vz || a === Wz
    };

    function Yz() {
        this.j = new jl
    }

    function Zz(a, b, c) {
        ll(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    };

    function $z(a) {
        Cr.call(this, a);
        this.j = {}
    }
    z($z, Cr);

    function aA(a, b) {
        b && (a.j.apv = D(b, 4), gd(b, po, 23) && (a.j.sat = "" + D(G(b, po, 23), 1)));
        return a
    }

    function bA(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    $z.prototype.I = function(a) {
        null != a && (this.j.allp = a);
        return this
    };
    $z.prototype.B = function(a) {
        try {
            this.j.su = a.location.hostname
        } catch (b) {
            this.j.su = "_ex"
        }
        a = Cr.prototype.B.call(this, a);
        be(a, this.j);
        return a
    };

    function cA(a) {
        return null == a ? null : t(Number, "isInteger").call(Number, a) ? a.toString() : a.toFixed(3)
    };

    function dA(a) {
        $z.call(this, 0);
        t(Object, "assign").call(Object, this, a);
        this.l = {}
    }
    z(dA, $z);

    function eA(a, b) {
        a.l.op = fA(b)
    }

    function gA(a, b, c) {
        hA(a, "fap", b);
        a.l.fad = fA(c)
    }

    function iA(a, b, c) {
        hA(a, "fmp", b);
        a.l.fmd = fA(c)
    }

    function jA(a, b, c) {
        hA(a, "vap", b);
        a.l.vad = fA(c)
    }

    function kA(a, b, c) {
        hA(a, "vmp", b);
        a.l.vmd = fA(c)
    }

    function lA(a, b, c) {
        hA(a, "pap", b);
        a.l.pad = fA(c)
    }

    function mA(a, b, c) {
        hA(a, "pmp", b);
        a.l.pmd = fA(c)
    }

    function nA(a, b) {
        hA(a, "psq", b)
    }
    dA.prototype.B = function(a) {
        a = $z.prototype.B.call(this, a);
        t(Object, "assign").call(Object, a, this.l);
        return a
    };

    function hA(a, b, c) {
        30 >= c.length ? a.l[b] = oA(c) : (a.l[b] = oA(c.slice(0, 30)), a.l[b + "_c"] = c.length.toString())
    }

    function oA(a) {
        return a.map(function(b) {
            var c;
            return null != (c = null == b ? void 0 : b.toString()) ? c : "null"
        }).join("~")
    }

    function fA(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : t(Number, "isInteger").call(Number, a) ? a.toString() : a.toFixed(3)
    };

    function pA() {
        this.B = this.K = this.C = null;
        this.I = this.H = !1;
        this.A = null;
        this.O = this.D = this.M = !1;
        this.F = null;
        this.l = new jl;
        this.j = new jl;
        this.L = []
    }

    function qA(a, b) {
        rA(a, b, function(c) {
            c.j = !0
        })
    }

    function sA(a, b) {
        rA(a, b, function(c) {
            c.l = !0
        })
    }

    function tA(a, b) {
        rA(a, b, function(c) {
            c.A = !0
        });
        a.L.push(b.X)
    }

    function uA(a, b, c) {
        rA(a, b, function(d) {
            d.bb = c
        })
    }

    function rA(a, b, c) {
        var d = b.X;
        if (!ll(a.j, d)) {
            var e;
            a.j.set(d, new vA(null != (e = um(es(b))) ? e : ""))
        }
        c(a.j.get(d))
    }

    function wA(a, b, c) {
        var d = [],
            e = 0;
        b = y(c.filter(b));
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var f = void 0;
            Xz(null != (f = c.bb) ? f : "") ? ++e : (f = void 0, c = a.l.get(null != (f = c.bb) ? f : "", null), d.push(c))
        }
        return {
            list: d.sort(function(g, h) {
                return (null != g ? g : -1) - (null != h ? h : -1)
            }),
            cb: e
        }
    }

    function xA(a, b) {
        eA(b, a.l.xb());
        var c = nl(a.j).filter(function(f) {
                return 0 === (t(f.Ca, "startsWith").call(f.Ca, Vz) ? 0 : 1)
            }),
            d = nl(a.j).filter(function(f) {
                return 1 === (t(f.Ca, "startsWith").call(f.Ca, Vz) ? 0 : 1)
            }),
            e = wA(a, function(f) {
                return f.j
            }, c);
        gA(b, e.list, e.cb);
        e = wA(a, function(f) {
            return f.j
        }, d);
        iA(b, e.list, e.cb);
        e = wA(a, function(f) {
            return f.l
        }, c);
        jA(b, e.list, e.cb);
        e = wA(a, function(f) {
            return f.l
        }, d);
        kA(b, e.list, e.cb);
        c = wA(a, function(f) {
            return f.A
        }, c);
        lA(b, c.list, c.cb);
        d = wA(a, function(f) {
            return f.A
        }, d);
        mA(b,
            d.list, d.cb);
        nA(b, a.L.map(function(f) {
            var g;
            return null == (g = a.j.get(f)) ? void 0 : g.bb
        }).map(function(f) {
            var g;
            return null != (g = a.l.get(f)) ? g : null
        }))
    }

    function Fj() {
        var a = Sj(pA);
        if (!a.C) return tj();
        var b, c, d, e = Bj(Aj(zj(yj(xj(wj(vj(uj(sj(rj(new pj, null != (b = a.C) ? b : []), null != (c = a.K) ? c : []), a.D), a.H), a.I), a.M), a.O), null != (d = a.F) ? d : 0), nl(a.j).map(function(f) {
            var g;
            var h = new oj;
            h = E(h, 1, f.Ca);
            var k = a.l.get(null != (g = f.bb) ? g : "", -1);
            g = E(h, 2, k);
            g = E(g, 3, f.j);
            return E(g, 4, f.l)
        })), a.L.map(function(f) {
            var g;
            return null == (g = a.j.get(f)) ? void 0 : g.bb
        }).map(function(f) {
            var g;
            return null != (g = a.l.get(f)) ? g : null
        }));
        null != a.A && E(e, 6, a.A);
        null != a.B && E(e, 13, a.B);
        return e
    }

    function vA(a) {
        this.A = this.l = this.j = !1;
        this.bb = null;
        this.Ca = a
    };

    function yA(a) {
        this.j = void 0 === a ? 0 : a
    };

    function zA(a) {
        this.l = a;
        this.j = -1
    };

    function AA(a) {
        for (var b = 0; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function BA(a) {
        this.j = a;
        this.A = new jl;
        var b;
        this.B = ((null == (b = G(a, Zn, 2)) ? void 0 : H(b, ao, 1)) || []).map(function(c) {
            return {
                Wb: Gm(xd(c, 1)),
                Qf: md(c, 2, 0),
                Ca: xd(c, 1)
            }
        });
        this.l = []
    }

    function CA(a) {
        var b, c;
        return null != (c = null == (b = G(a.j, fo, 5)) ? void 0 : md(b, 1, 0)) ? c : null
    }

    function DA(a, b) {
        var c = a.B.filter(function(d) {
            return ml(d.Wb).every(function(e) {
                return d.Wb.get(e) === b.get(e)
            })
        });
        return 0 === c.length ? (a.l.push(19), null) : c.reduce(function(d, e) {
            return d.Wb.xb() > e.Wb.xb() ? d : e
        }, c[0])
    }

    function EA(a, b) {
        b = es(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (ll(a.A, b)) return a.A.get(b);
        var c = Gm(b);
        c = DA(a, c);
        a.A.set(b, c);
        return c
    }

    function FA(a, b) {
        var c;
        return (null == (c = EA(a, b)) ? void 0 : c.Qf) || Number.MAX_VALUE
    }

    function GA(a, b) {
        var c = X(ip) || 0;
        if (0 == b.length || 0 == c) return !0;
        var d = (new pm(b)).filter(function(e) {
            var f;
            e = (null == (f = EA(a, e)) ? void 0 : f.Ca) || "";
            return "" != e && !Xz(e)
        });
        return c <= d.j.length / b.length
    };

    function HA(a, b, c) {
        c = void 0 === c ? null : c;
        this.A = new zA(a);
        this.l = new yA(void 0 === b ? 0 : b);
        this.j = c && new BA(c)
    }

    function IA(a, b) {
        return 0 == b.j.length ? b : b.sort(function(c, d) {
            return FA(a.j, c) - FA(a.j, d)
        })
    }

    function JA(a, b) {
        return 0 == b.j.length ? b : b.sort(function(c, d) {
            return KA(a, c) - KA(a, d)
        })
    }

    function LA(a, b) {
        return b.sort(function(c, d) {
            var e = c.X.H,
                f = d.X.H,
                g;
            null == e || null == f ? g = null == e && null == f ? KA(a, c) - KA(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }

    function KA(a, b) {
        var c = b.Y.j,
            d = Math,
            e = d.min,
            f = b.aa(),
            g = b.X.j();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? AA(f.parentElement) : AA(f));
        d = a.A;
        0 > d.j && (d.j = Wk(d.l).scrollHeight || 0);
        d = d.j - b.Y.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.aa();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    };

    function MA(a, b, c, d) {
        this.l = new pm(a);
        this.j = new HA(b, void 0 === c ? 0 : c, void 0 === d ? null : d);
        this.A = b;
        this.B = new Yz
    }

    function NA(a) {
        a.l.forEach(function(b) {
            b.l && Dq(b.l);
            b.l = null
        })
    }

    function OA(a, b, c) {
        c = void 0 === c ? 0 : c;
        for (var d = a.l, e = y(b.B), f = e.next(); !f.done; f = e.next()) f = f.value, d = qm(d, f.ka(a.A), PA(f.la(), c));
        e = d = d.apply(Et(a.A));
        var g = y(b.l);
        for (f = g.next(); !f.done; f = g.next()) f = f.value, e = qm(e, f.ka(a.A), QA(f.la(), c));
        switch (b.A) {
            case 1:
                e = JA(a.j, e);
                break;
            case 2:
                e = LA(a.j, e);
                break;
            case 3:
                var h = Sj(pA);
                e = IA(a.j, e);
                d.forEach(function(l) {
                    qA(h, l);
                    var m;
                    null != (m = a.j.j) && (m = EA(m, l), null != (null == m ? void 0 : m.Ca) && uA(Sj(pA), l, m.Ca))
                });
                e.forEach(function(l) {
                    return sA(h, l)
                })
        }
        b.C && (e = rm(e, ng(a.A.location.href +
            a.A.localStorage.google_experiment_mod)));
        var k;
        1 === (null == (k = b.j) ? void 0 : k.length) && Zz(a.B, b.j[0], {
            Le: d.j.length,
            gg: e.j.length
        });
        return e.j.slice(0)
    }

    function PA(a, b) {
        return function(c) {
            return Rr(c, b, a)
        }
    }

    function QA(a, b) {
        return function(c) {
            return Rr(c.X, b, a)
        }
    };

    function RA(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = SA(TA(c), a);
                    break a;
                case 3:
                    a = SA(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = SA(e ? 1 == e.nodeType ? e : TA(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !UA(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !Fo(b) && 0 >= b.offsetWidth);
        return d
    }

    function SA(a, b) {
        if (!a) return !1;
        a = Sg(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function TA(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function UA(a) {
        return !!a.nextSibling || !!a.parentNode && UA(a.parentNode)
    };
    var VA = !Yb && !Ab();

    function WA(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (VA && a.dataset) {
            if (Cb() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };

    function XA(a, b, c) {
        if (!b) return null;
        var d = zg(document, "INS");
        d.id = "google_pedestal_container";
        d.style.width = "100%";
        d.style.zIndex = "-1";
        if (c) {
            var e = a.getComputedStyle(c),
                f = "";
            if (e && "static" != e.position) {
                var g = c.parentNode.lastElementChild;
                for (f = e.position; g && g != c;) {
                    if ("none" != a.getComputedStyle(g).display) {
                        f = a.getComputedStyle(g).position;
                        break
                    }
                    g = g.previousElementSibling
                }
            }
            if (c = f) d.style.position = c
        }
        b.appendChild(d);
        if (d) {
            var h = a.document;
            f = h.createElement("div");
            f.style.width = "100%";
            f.style.height =
                "2000px";
            c = Vk(a);
            e = h.body.scrollHeight;
            a = a.innerHeight;
            g = h.body.getBoundingClientRect().bottom;
            d.appendChild(f);
            var k = f.getBoundingClientRect().top;
            h = h.body.getBoundingClientRect().top;
            d.removeChild(f);
            f = e;
            e <= a && 0 < c && 0 < g && (f = g - h);
            a = k - h >= .8 * f
        } else a = !1;
        return a ? d : (b.removeChild(d), null)
    }

    function YA(a) {
        var b = a.document.body,
            c = XA(a, b, null);
        if (c) return c;
        if (a.document.body) {
            c = Math.floor(a.document.body.getBoundingClientRect().width);
            for (var d = [{
                    element: a.document.body,
                    depth: 0,
                    height: 0
                }], e = -1, f = null; 0 < d.length;) {
                var g = d.pop(),
                    h = g.element,
                    k = g.height;
                0 < g.depth && k > e && (e = k, f = h);
                if (5 > g.depth)
                    for (k = 0; k < h.children.length; k++) {
                        var l = h.children[k],
                            m = l.getBoundingClientRect().width;
                        (null == m || null == c ? 0 : m >= .9 * c && m <= 1.01 * c) && d.push({
                            element: l,
                            depth: g.depth + 1,
                            height: l.getBoundingClientRect().height
                        })
                    }
            }
            c =
                f
        } else c = null;
        return c ? XA(a, c.parentNode || b, c) : null
    }

    function ZA(a) {
        var b = 0;
        try {
            b |= Pk(a), Jg() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= 32768), $A(a) && (b |= 33554432)
        } catch (c) {
            b |= 32
        }
        return b
    }

    function $A(a) {
        a = a.document.getElementsByClassName("adsbygoogle");
        for (var b = 0; b < a.length; b++)
            if ("autorelaxed" == WA(a[b])) return !0;
        return !1
    };

    function aB(a, b) {
        this.l = a;
        this.j = b;
        this.A = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
    }

    function bB(a, b, c, d) {
        var e = Jg() && !(900 <= Rk(a.l));
        d = Hb(d, function(f) {
            return Lb(a.A, f)
        }).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Ze,
            pg_h: cB(a.j.Vc),
            pg_w: cB(a.j.Kf),
            pg_hs: cB(a.j.Jf),
            c: cB(a.j.Af),
            aa_c: cB(a.j.Ke),
            av_h: cB(a.j.Ne),
            av_w: cB(a.j.Oe),
            av_a: cB(a.j.Me),
            s: cB(a.j.Gf),
            all_s: cB(a.j.Ff),
            b: cB(a.j.Df),
            all_b: cB(a.j.Cf),
            d: cB(a.j.Ic),
            all_d: cB(a.j.Hc),
            ard: cB(a.j.Ge),
            all_ard: cB(a.j.Fe),
            pd_h: cB(a.j.Lf),
            dt: e ? "m" : "d"
        }
    }

    function dB(a) {
        var b = Uk(a, !0),
            c = Wk(a).scrollWidth,
            d = Wk(a).scrollHeight,
            e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = $k(a),
            g = [],
            h = [],
            k = [],
            l = [],
            m = [],
            n = [],
            p = [],
            u = 0,
            v = 0,
            A = Infinity,
            F = Infinity,
            S = null,
            P = Vs({
                Xa: !1
            }, a);
        P = y(P);
        for (var L = P.next(); !L.done; L = P.next()) {
            L = L.value;
            var N = L.getBoundingClientRect(),
                O = b - (N.bottom + f);
            if (L.className && sb(L.className, "adsbygoogle-ablated-ad-slot")) {
                var Q = L.getAttribute("google_element_uid");
                var K = a.google_sv_map;
                if (!Q || !K || !K[Q]) continue;
                Q = (K = ui(K[Q])) ? K.height : 0;
                K = K ? K.width : 0
            } else if (Q = N.bottom - N.top, K = N.right - N.left, 1 >= Q || 1 >= K) continue;
            g.push(Q);
            k.push(K);
            l.push(Q * K);
            ct(L) ? (v += 1, L.className && sb(L.className, "pedestal_container") && (S = Q)) : (A = Math.min(A, O), n.push(N), u += 1, h.push(Q), m.push(Q * K));
            F = Math.min(F, O);
            p.push(N)
        }
        A = Infinity === A ? null : A;
        F = Infinity === F ? null : F;
        f = eB(n);
        p = eB(p);
        h = fB(b, h);
        n = fB(b, g);
        m = fB(b * c, m);
        P = fB(b * c, l);
        return new aB(a, {
            Ze: e,
            Vc: b,
            Kf: c,
            Jf: d,
            Af: u,
            Ke: v,
            Ne: gB(g),
            Oe: gB(k),
            Me: gB(l),
            Gf: f,
            Ff: p,
            Df: A,
            Cf: F,
            Ic: h,
            Hc: n,
            Ge: m,
            Fe: P,
            Lf: S
        })
    }

    function gB(a) {
        return hg.apply(null, Hb(a, function(b) {
            return 0 < b
        })) || null
    }

    function fB(a, b) {
        return 0 >= a ? null : gg.apply(null, b) / a
    }

    function eB(a) {
        for (var b = Infinity, c = 0; c < a.length - 1; c++)
            for (var d = c + 1; d < a.length; d++) {
                var e = a[c],
                    f = a[d];
                e = Math.max(Math.max(0, e.left - f.right, f.left - e.right), Math.max(0, e.top - f.bottom, f.top - e.bottom));
                0 < e && (b = Math.min(e, b))
            }
        return Infinity !== b ? b : null
    }

    function cB(a) {
        return null == a ? null : t(Number, "isInteger").call(Number, a) ? a.toString() : a.toFixed(3)
    };

    function hB(a, b, c, d, e, f) {
        e = void 0 === e ? {} : e;
        f = void 0 === f ? [] : f;
        this.l = a;
        this.F = b;
        this.j = c;
        this.D = d.Ta;
        this.P = d.ub || [];
        this.K = d.ef || null;
        this.O = d.Ye || [];
        this.M = d.Bc || [];
        this.A = e;
        this.B = !1;
        this.L = [];
        this.C = [];
        this.I = this.H = void 0;
        this.U = f
    }

    function iB(a) {
        return a.H ? a.H : a.H = a.j.google_ama_state
    }
    q = hB.prototype;
    q.V = function() {
        return this.j
    };

    function nz(a, b, c, d) {
        var e = c.Ta ? c.Ta : a.D,
            f = Es(e, b.j.length);
        e = a.A.od ? e.j : void 0;
        var g = Sz(Tz(Pz(Rz(Qz(Oz(Mz(Nz(Kz(Lz(Jz(c.types), a.P), c.Yc || []), a.O), c.Xf || [])), f.jc || void 0, e, b), c.minWidth, c.maxWidth)), f.gb || void 0));
        a.M && g.j.push(new wz(a.M));
        b = 1;
        a.A.jd ? b = 2 : a.Aa() && (b = 3);
        Uz(g, b);
        a.A.bd && (g.B = !0);
        return kr(995, function() {
            return OA(a.l, g.build(), d)
        }, a.j)
    }
    q.qa = function(a) {
        this.L.push(a)
    };

    function mz(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = void 0 === c.eb ? void 0 : c.eb,
            e = void 0 === c.kb ? void 0 : c.kb,
            f = void 0 === c.mb ? void 0 : c.mb;
        return kr(997, function() {
            return jB(a, b, {
                eb: d,
                kb: e,
                mb: f
            })
        }, a.j)
    }

    function jB(a, b, c) {
        var d = void 0 === c ? {} : c,
            e = void 0 === d.eb ? void 0 : d.eb;
        c = void 0 === d.kb ? void 0 : d.kb;
        d = void 0 === d.mb ? void 0 : d.mb;
        var f = b.X;
        if (f.C) return !1;
        var g = b.aa();
        if (!RA(a.j, f.j(), g, a.B)) return !1;
        e = null == e ? null : new bn(null, {
            google_max_responsive_height: e
        });
        g = dn(D(f.vc, 2) || 0);
        var h = en(f.H),
            k = kB(a, f),
            l = lB(a),
            m = cn(a.K, f.O ? f.O.j(b.Y) : null, e, c || null, g, h, k, l),
            n = t(b, "fill").call(b, a.F, m);
        if (d && !mB(a, n, m) || !kr(996, function() {
                return nB(a, n, m)
            }, a.j)) return !1;
        zk(9, [f.H, f.Ya]);
        a.Aa() && tA(Sj(pA), b);
        return !0
    }

    function qz(a, b) {
        var c = YA(a.j);
        if (c) {
            var d = cn(a.K, b),
                e = $q(a.j.document, a.F, null, null, {}, d);
            e && (Eq(e.Wa, c, 2, 256), kr(996, function() {
                return nB(a, e, d)
            }, a.j))
        }
    }

    function mB(a, b, c) {
        if (!b) return !1;
        var d = b.ua,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.j;
        e = b.ua;
        c = c && c.yb() || {};
        if (d === d.top)
            if (488 > Rk(d))
                if (d.innerHeight >= d.innerWidth) {
                    var g = Rk(d);
                    if (!g || .3 < (g - f) / g) g = 6;
                    else {
                        if (g = "true" != c.google_full_width_responsive) b: {
                            g = Rk(d);
                            for (var h = e.parentElement; h; h = h.parentElement) {
                                var k = Sg(h, d);
                                if (k) {
                                    var l = ch(k.width);
                                    if (l && !(l >= g) && "visible" != k.overflow) {
                                        g = !0;
                                        break b
                                    }
                                }
                            }
                            g = !1
                        }
                        g = g ? 7 : !0
                    }
                } else g = 5;
        else g = 4;
        else g = Pg(d) ? 3 : 16;
        if (!0 !== g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = Sg(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = Rk(d), f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.j;
            b = b.ua;
            if (f = Wq(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", Uq(b, f, "0px"), b.style.width = Rk(a) + "px", Xq(a, b, f), b.style.zIndex = 30;
            return !0
        }
        Dq(b.Wa);
        return !1
    }

    function nB(a, b, c) {
        if (!b) return !1;
        try {
            cr(a.j, b.ua, c)
        } catch (d) {
            return Dq(b.Wa), a.C.push(6), !1
        }
        return !0
    }
    q.Aa = function() {
        var a = this,
            b, c;
        if (0 == (null != (c = null == (b = this.l.j.j) ? void 0 : [].concat(ma(jd(b.j, 1))).length) ? c : 0)) return !1;
        if (0 == (X(ip) || 0)) return !0;
        if (void 0 === this.I) {
            var d = Uz(Pz(Oz(Jz([0, 1, 2]))), 1).build();
            b = kr(995, function() {
                return OA(a.l, d)
            }, this.j);
            var e;
            this.I = (null == (e = this.l.j.j) ? void 0 : GA(e, b)) || !1
        }
        return this.I
    };
    q.hc = function() {
        return !!this.A.de
    };
    q.Ab = function() {
        return !$A(this.j)
    };

    function kB(a, b) {
        return um(xm(as(b).map(fn), function() {
            a.C.push(18)
        }))
    }

    function lB(a) {
        if (!a.Aa()) return null;
        var b, c = null == (b = a.l.j.j) ? void 0 : [].concat(ma(jd(b.j, 4)));
        if (null == c) return null;
        b = c.join("~");
        var d, e;
        a = null != (e = null == (d = a.l.j.j) ? void 0 : CA(d)) ? e : null;
        d = void 0 === a ? null : a;
        null == b ? d = null : (e = {
            google_daaos_ts: b
        }, null != d && (e.google_erank = d + 1), d = new bn(null, e));
        return d
    }

    function oB(a, b) {
        b = (Vk(b) || 0) - $k(b);
        for (var c = 0, d = 0; d < a.length; d++) {
            var e = a[d].getBoundingClientRect();
            mt(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function pB(a) {
        var b = {},
            c = et({
                Xa: !1,
                Zb: !1,
                ac: !1,
                cc: !1
            }, a).map(function(d) {
                return d.getBoundingClientRect()
            }).filter(mt);
        b.Be = c.length;
        c = ft({
            ac: !0
        }, a).map(function(d) {
            return d.getBoundingClientRect()
        }).filter(mt);
        b.cf = c.length;
        c = ft({
            cc: !0
        }, a).map(function(d) {
            return d.getBoundingClientRect()
        }).filter(mt);
        b.Hf = c.length;
        c = ft({
            Zb: !0
        }, a).map(function(d) {
            return d.getBoundingClientRect()
        }).filter(mt);
        b.Ee = c.length;
        c = (Vk(a) || 0) - $k(a);
        c = et({
            Xa: !1
        }, a).map(function(d) {
            return d.getBoundingClientRect()
        }).filter(mt).filter(Xa(qB,
            null, c));
        b.Ce = c.length;
        a = dB(a);
        c = null != a.j.Ic ? a.j.Ic : null;
        null != c && (b.Bf = c);
        a = null != a.j.Hc ? a.j.Hc : null;
        null != a && (b.De = a);
        return b
    }

    function qB(a, b) {
        return b.top <= a
    };

    function rB(a, b, c, d, e, f, g) {
        this.Ea = a;
        this.sc = void 0 === f ? 0 : f;
        this.rc = void 0 === g ? 0 : g;
        this.errors = b;
        this.Qa = c;
        this.j = d;
        this.l = e
    };

    function sB(a, b, c) {
        this.B = a.slice(0);
        this.l = a.slice(0);
        this.A = Mb(this.l, 1);
        this.j = b;
        this.C = c
    }

    function tB(a, b) {
        return new r.Promise(function(c) {
            setTimeout(function() {
                c(uB(a, b))
            })
        })
    }

    function vB(a) {
        a.j.B = !0;
        return r.Promise.all(a.l.map(function(b) {
            return tB(a, b)
        })).then(function(b) {
            t(b, "includes").call(b, !1) && a.j.qa(5);
            a.l.splice(0, a.l.length)
        })
    }

    function wB(a) {
        var b = a.j.l.l.filter(Yr).j.length,
            c = a.j.L.slice(0);
        var d = a.j;
        var e;
        d = [].concat(ma(d.C), ma((null == (e = d.l.j.j) ? void 0 : [].concat(ma(e.l))) || []));
        return new rB(b, c, d, a.j.l.l.j.length, a.j.l.B.j, a.j.l.l.filter(Yr).filter(Zr).j.length, a.j.l.l.filter(Zr).j.length)
    }

    function uB(a, b) {
        var c = jz[b];
        return c ? kr(998, function() {
            return c(a.j)
        }, a.C) : (a.j.qa(12), !0)
    }

    function xB(a, b, c) {
        var d = {
                Ab: b.Ab(),
                hc: b.hc(),
                ce: !!b.A.Lc,
                Aa: b.Aa()
            },
            e = void 0 === d ? {} : d;
        d = void 0 === e.Ab ? !1 : e.Ab;
        var f = void 0 === e.hc ? !1 : e.hc,
            g = void 0 === e.Aa ? !1 : e.Aa,
            h = [];
        (void 0 === e.ce ? 0 : e.ce) && h.push(9);
        if (g) {
            t(a, "includes").call(a, 4) && !f && d && h.push(8);
            t(a, "includes").call(a, 1) && h.push(1);
            e = t(a, "includes").call(a, 3);
            g = t(a, "includes").call(a, 2) && !W(Vo);
            var k = t(a, "includes").call(a, 1);
            (e || g || k) && h.push(10)
        } else t(a, "includes").call(a, 3) && h.push(6), t(a, "includes").call(a, 4) && !f && d && h.push(8), t(a, "includes").call(a,
            1) && h.push(1, 5), t(a, "includes").call(a, 2) && !W(Vo) && h.push(7);
        t(a, "includes").call(a, 4) && f && d && h.push(8);
        return new sB(h, b, c)
    };

    function yB(a) {
        this.j = a;
        this.exception = void 0
    };

    function zB(a) {
        return vB(a).then(function() {
            return new yB(wB(a))
        })
    };

    function AB() {}
    AB.prototype.j = function() {
        var a = {};
        a = (a.google_reactive_ad_format = 40, a.google_tag_origin = "qs", a);
        return new bn([], a)
    };

    function BB() {}
    BB.prototype.j = function() {
        return new bn(["adsbygoogle-resurrected-ad-slot"], {})
    };

    function CB(a) {
        var b = new BB;
        this.j = a;
        this.l = b || null
    }

    function DB(a) {
        return Go(a.j.document).map(function(b) {
            var c = new ks(b, 3);
            b = new Mr(er(a.j, b));
            return new Pr(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    };
    var EB = {
        hd: "10px",
        Ec: "10px"
    };

    function FB(a, b) {
        this.j = a;
        this.l = b || null
    }

    function GB(a) {
        return il(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(function(b) {
            return new Pr(new ks(b, 1), new Kr(EB), a.l, !1, 0, [], null, a.j, null)
        })
    };

    function HB(a, b, c) {
        this.H = -1 == c.Xb;
        this.B = c.Xb;
        this.I = -1 == c.wb;
        this.C = c.wb;
        this.F = -1 == c.Cb;
        this.l = c.Cb;
        this.D = c.Ld;
        this.A = b;
        this.j = a
    }

    function IB(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function JB(a, b, c) {
        var d = IB(c.Xb, "gapsMeasurementWindow") || IB(c.wb, "gapsPerMeasurementWindow") || IB(c.Cb, "maxGapsToReport");
        return null != d ? ym(d) : c.qd || -1 != c.wb || -1 != c.Cb ? wm(new HB(a, b, c)) : ym("ShouldHaveLimits")
    }

    function KB(a) {
        return iB(a.A) && iB(a.A).placed || []
    }

    function LB(a) {
        return KB(a).map(function(b) {
            return fm(gm(b.element, a.j))
        })
    }

    function MB(a) {
        return KB(a).map(function(b) {
            return b.index
        })
    }

    function NB(a, b) {
        var c = b.X;
        return !a.D && c.B && fd(c.B, 8) && 1 == D(c.B, 8) ? [] : c.C ? (c.P || []).map(function(d) {
            return fm(gm(d, a.j))
        }) : [fm(new em(b.Y.j, 0))]
    }

    function OB(a) {
        a.sort(function(g, h) {
            return g.j - h.j
        });
        for (var b = [], c = 0, d = 0; d < a.length; ++d) {
            var e = a[d],
                f = e.j;
            e = e.j + e.l;
            f <= c ? c = Math.max(c, e) : (b.push(new em(c, f - c)), c = e)
        }
        return b
    }

    function PB(a, b) {
        b = b.map(function(c) {
            var d = new Vy;
            d = E(d, 1, c.j);
            c = c.getHeight();
            return E(d, 2, c)
        });
        return Uy(Ty(new Ry, a), b)
    }

    function QB(a) {
        var b = H(a, Vy, 2).map(function(c) {
            return "G" + md(c, 1, 0) + "~" + c.getHeight()
        });
        return "W" + md(a, 1, 0) + b.join("")
    }

    function RB(a, b) {
        for (var c = [], d = 0, e = y(ml(b)), f = e.next(); !f.done; f = e.next()) {
            f = f.value;
            var g = b.get(f);
            g.sort(function(h, k) {
                return k.getHeight() - h.getHeight()
            });
            a.I || g.splice(a.C, g.length);
            !a.F && d + g.length > a.l && g.splice(a.l - d, g.length);
            c.push(PB(f, g));
            d += g.length;
            if (!a.F && d >= a.l) break
        }
        return c
    }

    function SB(a) {
        var b = H(a, Ry, 5).map(function(c) {
            return QB(c)
        });
        return "M" + md(a, 1, 0) + "H" + md(a, 2, 0) + "C" + md(a, 3, 0) + "B" + Number(!!nd(a, 4)) + b.join("")
    }

    function TB(a) {
        for (var b = ts(a.A.l.l.j.slice(0), a.j), c = LB(a), d = new ol(MB(a)), e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = NB(a, b[e]);
                c.push.apply(c, ma(f))
            }
        c.push(new em(0, 0));
        c.push(fm(new em(Wk(a.j).scrollHeight, 0)));
        b = OB(c);
        c = new jl;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.H ? 0 : Math.floor(e.j / a.B), ll(c, f) || c.set(f, []), c.get(f).push(e);
        b = RB(a, c);
        c = new Py;
        c = E(c, 1, a.l);
        c = E(c, 2, a.B);
        c = E(c, 3, a.C);
        a = E(c, 4, a.D);
        return vd(a, 5, b)
    }

    function UB(a) {
        a = TB(a);
        return SB(a)
    };

    function VB(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function WB(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function XB(a, b) {
        a = jd(a, 2);
        if (!a) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function YB(a, b) {
        a = WB(VB(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = Wg(a),
            d = ZB(a);
        return t(b, "find").call(b, function(e) {
            var f = gd(e, so, 7) ? D(G(e, so, 7), 1) : D(e, 1);
            e = gd(e, so, 7) ? D(G(e, so, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function ZB(a) {
        for (var b = {};;) {
            b[Wg(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var $B = {},
        aC = ($B.google_ad_channel = !0, $B.google_ad_host = !0, $B);

    function bC(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        ik("ama", b, .01)
    }

    function cC(a) {
        var b = {};
        Ug(aC, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function dC(a) {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                bC(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            bC(a, {
                lserr: 1
            })
        }
    };

    function eC(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function fC(a, b) {
        a = eC(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        var c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function gC() {
        this.S = {}
    }

    function hC() {
        if (iC) return iC;
        var a = Jh() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? iC = b : a.google_persistent_state_async = iC = new gC
    }

    function jC(a, b, c) {
        b = kC[b] || "google_ps_" + b;
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function lC(a, b, c) {
        return a.S[kC[b] || "google_ps_" + b] = c
    }

    function mC(a, b) {
        return lC(a, b, jC(a, b, 0) + 1)
    }

    function nC() {
        var a = hC();
        return jC(a, 20, {})
    }

    function oC() {
        var a = hC(),
            b = jC(a, 31, !1);
        b || lC(a, 31, !0);
        return !b
    }

    function pC() {
        var a = hC();
        return jC(a, 26)
    }

    function qC() {
        var a = hC();
        return jC(a, 28, [])
    }
    var iC = null,
        rC = {},
        kC = (rC[8] = "google_prev_ad_formats_by_region", rC[9] = "google_prev_ad_slotnames_by_region", rC);
    var Z = {},
        sC = (Z.google_ad_block = "ad_block", Z.google_ad_client = "client", Z.google_ad_output = "output", Z.google_ad_callback = "callback", Z.google_ad_height = "h", Z.google_ad_resize = "twa", Z.google_ad_slot = "slotname", Z.google_ad_unit_key = "adk", Z.google_ad_dom_fingerprint = "adf", Z.google_placement_id = "pi", Z.google_daaos_ts = "daaos", Z.google_erank = "epr", Z.google_ad_width = "w", Z.google_captcha_token = "captok", Z.google_content_recommendation_columns_num = "cr_col", Z.google_content_recommendation_rows_num = "cr_row", Z.google_ctr_threshold =
            "ctr_t", Z.google_cust_criteria = "cust_params", Z.gfwrnwer = "fwrn", Z.gfwrnher = "fwrnh", Z.google_image_size = "image_size", Z.google_last_modified_time = "lmt", Z.google_loeid = "loeid", Z.google_max_num_ads = "num_ads", Z.google_max_radlink_len = "max_radlink_len", Z.google_mtl = "mtl", Z.google_native_settings_key = "nsk", Z.google_enable_content_recommendations = "ecr", Z.google_num_radlinks = "num_radlinks", Z.google_num_radlinks_per_unit = "num_radlinks_per_unit", Z.google_pucrd = "pucrd", Z.google_reactive_plaf = "plaf", Z.google_reactive_plat =
            "plat", Z.google_reactive_fba = "fba", Z.google_reactive_sra_channels = "plach", Z.google_responsive_auto_format = "rafmt", Z.armr = "armr", Z.google_plas = "plas", Z.google_rl_dest_url = "rl_dest_url", Z.google_rl_filtering = "rl_filtering", Z.google_rl_mode = "rl_mode", Z.google_rt = "rt", Z.google_video_play_muted = "vpmute", Z.google_source_type = "src_type", Z.google_restrict_data_processing = "rdp", Z.google_tag_for_child_directed_treatment = "tfcd", Z.google_tag_for_under_age_of_consent = "tfua", Z.google_tag_origin = "to", Z.google_ad_semantic_area =
            "sem", Z.google_tfs = "tfs", Z.google_package = "pwprc", Z.google_tag_partner = "tp", Z.fra = "fpla", Z.google_ml_rank = "mlr", Z.google_apsail = "psa", Z.google_ad_channel = "channel", Z.google_ad_type = "ad_type", Z.google_ad_format = "format", Z.google_color_bg = "color_bg", Z.google_color_border = "color_border", Z.google_color_link = "color_link", Z.google_color_text = "color_text", Z.google_color_url = "color_url", Z.google_page_url = "url", Z.google_allow_expandable_ads = "ea", Z.google_ad_section = "region", Z.google_cpm = "cpm", Z.google_encoding =
            "oe", Z.google_safe = "adsafe", Z.google_font_face = "f", Z.google_font_size = "fs", Z.google_hints = "hints", Z.google_ad_host = "host", Z.google_ad_host_channel = "h_ch", Z.google_ad_host_tier_id = "ht_id", Z.google_kw_type = "kw_type", Z.google_kw = "kw", Z.google_contents = "contents", Z.google_targeting = "targeting", Z.google_adtest = "adtest", Z.google_alternate_color = "alt_color", Z.google_alternate_ad_url = "alternate_ad_url", Z.google_cust_age = "cust_age", Z.google_cust_ch = "cust_ch", Z.google_cust_gender = "cust_gender", Z.google_cust_interests =
            "cust_interests", Z.google_cust_job = "cust_job", Z.google_cust_l = "cust_l", Z.google_cust_lh = "cust_lh", Z.google_cust_u_url = "cust_u_url", Z.google_cust_id = "cust_id", Z.google_language = "hl", Z.google_city = "gcs", Z.google_country = "gl", Z.google_region = "gr", Z.google_content_recommendation_ad_positions = "ad_pos", Z.google_content_recommendation_columns_num = "cr_col", Z.google_content_recommendation_rows_num = "cr_row", Z.google_content_recommendation_ui_type = "crui", Z.google_content_recommendation_use_square_imgs = "cr_sq_img",
            Z.google_color_line = "color_line", Z.google_disable_video_autoplay = "disable_video_autoplay", Z.google_full_width_responsive_allowed = "fwr", Z.google_full_width_responsive = "fwrattr", Z.efwr = "efwr", Z.google_pgb_reactive = "pra", Z.google_resizing_allowed = "rs", Z.google_resizing_height = "rh", Z.google_resizing_width = "rw", Z.rpe = "rpe", Z.google_responsive_formats = "resp_fmts", Z.google_safe_for_responsive_override = "sfro", Z.google_video_doc_id = "video_doc_id", Z.google_video_product_type = "video_product_type", Z.google_webgl_support =
            "wgl", Z.easpi = "easpi", Z.easpa = "easai", Z.asntp = "asntp", Z.asntpv = "asntpv", Z.asntpl = "asntpl", Z.asntpm = "asntpm", Z.asntpc = "asntpc", Z.asna = "asna", Z.asnd = "asnd", Z.asnp = "asnp", Z.asns = "asns", Z.asmat = "asmat", Z.asptt = "asptt", Z);

    function tC(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function uC(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function vC(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };
    var wC = new r.WeakMap;

    function xC() {
        function a(f) {
            var g = y(f);
            f = g.next().value;
            g = la(g);
            return c.apply(f, g)
        }

        function b(f) {
            f = y(f);
            f.next();
            f = la(f);
            return d(e, f)
        }
        var c = yC;
        var d = void 0 === d ? zC : d;
        var e = Sa(c);
        return function() {
            var f = Ka.apply(0, arguments),
                g = this || B,
                h = wC.get(g);
            h || (h = {}, wC.set(g, h));
            return Wb(h, [this].concat(ma(f)), a, b)
        }
    }

    function zC(a, b) {
        a = [a];
        for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\v")
    };

    function yC(a) {
        if (a.google_ad_client) return String(a.google_ad_client);
        var b, c, d, e, f;
        if (null != (e = null != (d = null == (b = eC(a).head_tag_slot_vars) ? void 0 : b.google_ad_client) ? d : null == (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : c.getAttribute("data-ad-client"))) b = e;
        else {
            b: {
                b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                    "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !si() ? tC : uC;
                for (c = b.length - 1; 0 <= c; c--)
                    if (d = b[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                        b = d;
                        break b
                    }
                b = null
            }
            if (b) {
                a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                for (c = {}; d = a.exec(b);) c[d[1]] = vC(d[2]);
                b = c.google_ad_client ? c.google_ad_client : ""
            } else b = ""
        }
        return null != (f = b) ? f : ""
    };

    function AC(a) {
        this.A = new r.Set;
        this.win = Jh() || window;
        this.l = X(Lo);
        var b = 0 < this.l && Tg() < 1 / this.l;
        this.B = (this.j = !!jC(hC(), 30, b)) ? th(this.win) : 0;
        this.j ? (b = this.win, b = W(hp) ? xC()(b) : yC(b)) : b = "";
        this.webPropertyCode = b;
        this.pa = null != a ? a : new Rj(100)
    }

    function BC(a, b) {
        var c = new Kj;
        c = E(c, 1, a.B).Oa(a.webPropertyCode);
        c = E(c, 3, a.l);
        b = ud(c, 5, Lj, b);
        a.j && !a.A.has(2) && (a.A.add(2), Mj(a.pa, b))
    };

    function CC(a, b, c, d, e, f, g, h, k, l, m) {
        var n = null;
        h = void 0 === h ? null : h;
        n = void 0 === n ? null : n;
        k = void 0 === k ? null : k;
        l = void 0 === l ? null : l;
        if (c)
            if (d) {
                var p = yx(d, e, a.location);
                try {
                    var u = new DC(a, b, c, d, e, p, f, g, h, n, k, l, m);
                    kr(990, function() {
                        return EC(u)
                    }, a)
                } catch (v) {
                    yk() && zk(15, [v]), Gr(b, ur, Er(bA(aA((new $z(0)).Oa(c), d), p).qa(1), v)), BC(Sj(AC), Ij(new Cj, mj(1)))
                }
            } else Gr(b, ur, (new $z(0)).Oa(c).qa(8)), BC(Sj(AC), Ij(new Cj, mj(8)));
        else Gr(b, ur, (new $z(0)).qa(9)), BC(Sj(AC), Ij(new Cj, mj(9)))
    }

    function DC(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        this.l = a;
        this.D = b;
        this.C = c;
        this.j = d;
        this.B = e;
        this.H = f;
        this.ea = k || null;
        this.K = [];
        this.ta = l;
        this.L = m;
        this.O = n;
        this.Ra = g;
        this.Sa = h;
        this.M = 0;
        this.Ha = p ? p : {
            url: a.location.href,
            Hb: void 0
        };
        this.I = "n"
    }

    function EC(a) {
        a.H.forEach(function(b) {
            switch (b) {
                case 0:
                    kr(991, function() {
                        return FC(a)
                    }, a.l);
                    break;
                case 1:
                    ox(new nx(a.l, a.j, a.C));
                    break;
                case 5:
                    iv(new hv(a.l, a.j));
                    break;
                case 2:
                    GC(a);
                    break;
                case 3:
                    HC(a);
                    break;
                case 4:
                    IC(a);
                    break;
                case 6:
                    a.runStorify()
            }
        })
    }

    function FC(a) {
        JC(a);
        if (ko(a.j) && 1 === D(ko(a.j), 1)) {
            var b = G(ko(a.j), uo, 6);
            b && 2 === D(b, 1) && (dr(a.l), a.I = "b")
        }
        var c = a.B.Of;
        b = Ms(a.l, c);
        if (a.B.da && gd(a.B.da, to, 10)) {
            var d = kd(G(a.B.da, to, 10), 1);
            null !== d && void 0 !== d && (b = Fs(a.l, d, c))
        }
        gd(a.j, wo, 26) && (b = Ps(b, G(a.j, wo, 26), a.l));
        c = a.B.da ? jd(a.B.da, 6) : [];
        d = a.B.da ? H(a.B.da, Dn, 5) : [];
        var e = a.B.da ? jd(a.B.da, 2) : [],
            f = kr(993, function() {
                var k = a.j,
                    l = H(k, Qn, 1),
                    m = a.B.da && XB(a.B.da, 1) ? "text_image" : "text",
                    n = new AB,
                    p = Xr(l, a.l, {
                        Pe: n,
                        vf: new Nr(m)
                    });
                l.length != p.length && a.K.push(13);
                p = p.concat(GB(new FB(a.l, n)));
                l = 0;
                n = W(bp);
                var u = !1;
                if (ko(k) && 1 === D(ko(k), 1)) {
                    var v = G(ko(k), uo, 6);
                    v && (l = D(v, 2) || 0, 1 === D(v, 1) && (u = !0))
                }
                var A, F, S;
                v = (null == (A = G(k, Xn, 24)) ? void 0 : null == (F = G(A, bo, 3)) ? void 0 : null == (S = G(F, co, 3)) ? void 0 : yd(S, eo, 2, go)) || !1;
                if (n || u || v)
                    if (A = DB(new CB(a.l)), F = Sj(pA), p = p.concat(A), F.M = !0, F.F = A.length, "n" === a.I) {
                        var P, L;
                        a.I = (null == (P = G(k, Xn, 24)) ? 0 : null == (L = jd(P, 1)) ? 0 : L.length) ? "o" : "p"
                    }
                p = p.concat(Oy(k, m, a.l));
                k = G(k, Xn, 24);
                return new MA(p, a.l, l, k)
            }, a.l);
        a.A = new hB(f, a.C, a.l, {
            Ta: b,
            ef: a.ea,
            ub: a.B.ub,
            Ye: c,
            Bc: d
        }, KC(a), e);
        var g, h;
        (null == (g = iB(a.A)) ? 0 : null == (h = g.optimization) ? 0 : h.ablatingThisPageview) && !a.A.Aa() && (dr(a.l), Sj(pA).D = !0, a.I = "f");
        a.F = xB(e, a.A, a.l);
        W(cp) ? kr(992, function() {
            return zB(a.F)
        }, a.l).then(kr(994, function() {
            return a.U.bind(a)
        }, a.l), a.P.bind(a)) : kr(992, function() {
            var k = a.F,
                l = new dl;
            for (k.j.B = !0; 0 < k.l.length;) uB(k, k.l[0]) || k.j.qa(5), k.l.shift();
            try {
                l.resolve(new yB(wB(k)))
            } catch (m) {
                l.reject(m)
            }
            return l.l
        }, a.l).then(kr(994, function() {
            return a.U.bind(a)
        }, a.l), a.P.bind(a))
    }

    function GC(a) {
        var b = G(a.j, Sn, 18);
        b && wy(new vy(a.l, a.ta || new My(a.l, a.C), b, new pv(a.l), H(a.j, Qn, 1)))
    }

    function HC(a) {
        var b = ux(a.l.location, "google_audio_sense") ? hn() : G(a.j, gn, 27);
        if (b) {
            var c, d = (null == (c = G(a.j, Jn, 6)) ? void 0 : H(c, Ln, 1)) || [],
                e;
            c = {};
            vm(wu(a.l, a.D, b, d, a.Ha, (c.google_ad_client = a.C, c), (null == (e = G(a.j, In, 22)) ? void 0 : D(e, 1)) || null), function(f) {
                return uu(f)
            })
        }
    }

    function IC(a) {
        var b = G(a.j, Un, 29);
        if (b) {
            var c, d;
            LC(a.Ra, {
                win: a.l,
                webPropertyCode: a.C,
                Hd: b,
                rd: null != (d = null == (c = G(a.j, Jn, 6)) ? void 0 : H(c, Ln, 1)) ? d : []
            })
        }
    }
    DC.prototype.runStorify = function() {
        var a = G(this.j, ho, 30);
        if (a) {
            var b, c, d = null != (c = null == (b = G(this.j, Jn, 6)) ? void 0 : H(b, Ln, 1)) ? c : [];
            this.Sa.runStorify(this.l, Ed(a), this.C, d.map(function(e) {
                return Ed(e)
            }))
        }
    };

    function KC(a) {
        var b = W(dp);
        if (!mo(a.j)) return {
            bd: b,
            jd: !1,
            Ad: !1,
            ne: !1,
            Bd: !1,
            de: !1,
            Mf: 0,
            Xd: 0,
            od: MC(a),
            Lc: a.O
        };
        var c = mo(a.j),
            d = kd(c, 8);
        return {
            bd: b || nd(c, 14, !1),
            jd: nd(c, 2, !1),
            Ad: nd(c, 3, !1),
            ne: nd(c, 4, !1),
            Bd: nd(c, 5, !1),
            de: nd(c, 6, !1),
            Mf: null == d ? 0 : d,
            Xd: D(c, 10),
            od: MC(a),
            Lc: a.O
        }
    }

    function NC(a, b) {
        for (var c = Dr(Dr(new $z(b.Ea), b.errors), a.K), d = b.Qa, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.D.length; g++)
                if (c.D[g] == f) break a;c.D.push(f)
        }
        c.j.pp = b.rc;
        c.j.ppp = b.sc;
        c.j.ppos = b.placementPositionDiffs;
        c.j.eatf = b.Ub;
        c.j.eatfAbg = b.Vb;
        c.j.reatf = b.zb;
        c.j.a = a.F.B.slice(0).join(",");
        c = bA(aA(c, a.j), a.H).Oa(a.C);
        if (d = b.Nb) c.j.as_count = d.Be, c.j.d_count = d.cf, c.j.ng_count = d.Hf, c.j.am_count = d.Ee, c.j.atf_count = d.Ce, c.j.mdns = cA(d.Bf), c.j.alldns = cA(d.De);
        c = c.I(b.Db);
        if (d = b.gf) {
            e = [];
            f = y(ml(d));
            for (g =
                f.next(); !g.done; g = f.next())
                if (g = g.value, 0 < d.get(g).length) {
                    var h = d.get(g)[0];
                    e.push("(" + [g, h.Le, h.gg].join() + ")")
                }
            c.j.fd = e.join(",")
        }
        d = b.Vc;
        null != d && (c.j.pgh = d);
        c.j.abl = b.Kd;
        c.j.rr = a.I;
        void 0 !== b.exception && Er(c, b.exception).qa(1);
        return c
    }

    function OC(a, b) {
        var c = NC(a, b);
        Gr(a.D, 0 < b.errors.length || 0 < a.K.length || void 0 !== b.exception ? 0 < a.M ? wr : ur : 0 < a.M ? vr : tr, c);
        if (G(a.j, Xn, 24)) {
            var d;
            if (null != (d = a.A.l.j.j)) {
                b = Sj(pA);
                var e = [].concat(ma(jd(d.j, 1)));
                b.C = e;
                e = [].concat(ma(jd(d.j, 4)));
                b.K = e;
                e = CA(d);
                null != e && (b.B = e);
                var f, g;
                e = !!(null == (f = G(d.j, bo, 3)) ? 0 : null == (g = G(f, co, 3)) ? 0 : yd(g, eo, 2, go));
                b.I = e;
                f = new jl;
                var h, k;
                d = y(null != (k = null == (h = G(d.j, Zn, 2)) ? void 0 : H(h, ao, 1)) ? k : []);
                for (h = d.next(); !h.done; h = d.next()) h = h.value, f.set(xd(h, 1), md(h, 2, 0));
                b.l = f
            }
            h =
                iB(a.A);
            b = Sj(pA);
            var l;
            k = !!(null == h ? 0 : null == (l = h.optimization) ? 0 : l.ablationFromStorage);
            b.A = k;
            var m;
            if (null == h ? 0 : null == (m = h.optimization) ? 0 : m.ablatingThisPageview) b.H = !0;
            var n;
            l = !!(null == h ? 0 : null == (n = h.optimization) ? 0 : n.availableAbg);
            b.O = l;
            n = Sj(pA);
            c = new dA(c);
            if (n.C) {
                var p;
                l = null != (p = n.C) ? p : [];
                c.l.sl = l.join("~");
                var u;
                p = null != (u = n.K) ? u : [];
                c.l.daaos = p.join("~");
                c.l.ab = fA(n.H);
                c.l.rr = fA(n.M);
                c.l.oab = fA(n.I);
                null != n.A && (c.l.sab = fA(n.A));
                n.D && (c.l.fb = fA(n.D));
                c.l.ls = fA(n.O);
                eA(c, n.l.xb());
                null != n.F &&
                    (c.l.rp = fA(n.F));
                null != n.B && (c.l.expl = fA(n.B));
                xA(n, c)
            } else u = "irr".replace(RegExp("~", "g"), ""), c.l.e = c.l.e ? c.l.e + ("~" + u) : u;
            Gr(a.D, zr, c)
        }
    }

    function PC(a, b) {
        var c = Sj(AC);
        if (c.j) {
            var d = new Cj,
                e = b.Qa.filter(function(f) {
                    return null !== f
                });
            b = a.K.concat(b.errors, b.exception ? [1] : []).filter(function(f) {
                return null !== f
            });
            Hj(Jj(Gj(d, a.F.B.slice(0).map(function(f) {
                var g = new kj;
                return E(g, 1, f)
            })), e.map(function(f) {
                var g = new nj;
                return E(g, 1, f)
            })), b.map(function(f) {
                return mj(f)
            }));
            G(a.j, Xn, 24) && Ej(d);
            BC(c, d)
        }
    }

    function QC(a) {
        return ko(a.j) && 1 === D(ko(a.j), 1) ? !(G(ko(a.j), uo, 6) && 1 <= (D(G(ko(a.j), uo, 6), 3) || 0)) : !1
    }

    function RC(a) {
        if (QC(a)) {
            a = a.A;
            var b = ft({
                ac: !0,
                cc: !0
            }, a.j);
            a = 0 < oB(b, a.j)
        } else a = a.A.j, b = et({
            Xa: !1,
            Zb: !1
        }, a), a = 0 < oB(b, a);
        return a
    }
    DC.prototype.U = function(a) {
        var b = this;
        try {
            SC(this, a.j.Ea);
            var c = RC(this) || QC(this) ? RC(this) : void 0;
            zo({
                Kc: c
            }, this.l);
            TC(this);
            var d = UC(this, a, RC(this));
            gd(this.j, vo, 25) && ld(G(this.j, vo, 25), 1) && VC(this, d);
            OC(this, d);
            PC(this, d);
            hk(753, function() {
                if (W(Xo) && null != b.A) {
                    var e = JB(b.l, b.A, {
                            Xb: X(ap),
                            wb: X($o),
                            Cb: X(Yo),
                            Ld: !0,
                            qd: !1
                        }),
                        f = $d(d);
                    null != e.j ? (e = UB(e.j.value), f.placementPositionDiffs = e) : f.placementPositionDiffs = "E" + e.l.message;
                    f = NC(b, f);
                    Gr(b.D, xr, f)
                }
            })()
        } catch (e) {
            WC(this, e)
        }
    };
    DC.prototype.P = function(a) {
        SC(this, 0);
        WC(this, a)
    };

    function SC(a, b) {
        try {
            if (W(To)) {
                var c, d;
                null == (c = a.A) || null == (d = c.l) || NA(d)
            }
        } catch (e) {
            Gr(a.D, Br, Er(bA(aA((new $z(b)).Oa(a.C), a.j), a.H).qa(14), e))
        }
    }

    function WC(a, b) {
        OC(a, {
            Ea: 0,
            Db: void 0,
            errors: [],
            Qa: [],
            exception: b,
            zb: void 0,
            Ub: void 0,
            Vb: void 0,
            Nb: void 0
        });
        PC(a, {
            Ea: 0,
            Db: void 0,
            errors: [],
            Qa: [],
            exception: b,
            zb: void 0,
            Ub: void 0,
            Vb: void 0,
            Nb: void 0
        })
    }

    function VC(a, b) {
        var c = a.A.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Db;
        c.numAutoAdsPlaced = b.Ea;
        c.hasAtfAd = b.zb;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.A && (a = JB(a.l, a.A, {
            Xb: -1,
            wb: -1,
            Cb: -1,
            Ld: !0,
            qd: !0
        }), null != a.j ? (c.placementPositionDiffs = UB(a.j.value), a = TB(a.j.value), b = new Wy, a = ud(b, 2, Xy, a), c.placementPositionDiffsReport = Ed(a)) : (a = a.l.message, c.placementPositionDiffs = "E" + a, b = new Wy, a = qd(b, 1, Xy, a), c.placementPositionDiffsReport = Ed(a)))
    }

    function UC(a, b, c) {
        var d = iB(a.A),
            e = b.j,
            f = e.j,
            g = e.rc,
            h = e.Ea,
            k = e.sc,
            l = e.errors.slice(),
            m = e.Qa.slice(),
            n = b.exception,
            p;
        var u = null != (p = eC(a.l).had_ads_ablation) ? p : !1;
        d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.F.A && m.push(13), void 0 !== d.exception && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
            Ea: h,
            rc: g,
            sc: k,
            Db: f,
            errors: e.errors.slice(),
            Qa: m,
            exception: n,
            zb: c,
            Ub: !!d.eatf,
            Vb: !!d.eatfAbg,
            Kd: u
        }) : (m.push(12), a.F.A && m.push(13), c = {
            Ea: h,
            rc: g,
            sc: k,
            Db: f,
            errors: l,
            Qa: m,
            exception: n,
            zb: c,
            Ub: !1,
            Vb: !1,
            Kd: u
        });
        c.Nb = pB(a.A.j);
        if (b = b.j.l) c.gf = b;
        c.Vc = Wk(a.l).scrollHeight;
        if (yk()) {
            b = [];
            d = y(a.A.l.l.j.slice(0));
            for (e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                f = {};
                g = e.L;
                h = y(ml(g));
                for (k = h.next(); !k.done; k = h.next()) k = k.value, f[k] = g.get(k);
                e = {
                    anchorElement: Tr(e),
                    position: e.j(),
                    clearBoth: e.K,
                    locationType: e.Ya,
                    placed: e.C,
                    placementProto: e.B ? e.B.toJSON() : null,
                    articleStructure: e.D ? e.D.toJSON() : null,
                    rejectionReasons: f
                };
                b.push(e)
            }
            zk(14, [{
                placementIdentifiers: b
            }, a.A.F, c.Nb])
        }
        return c
    }

    function MC(a) {
        return a.B.da && gd(a.B.da, to, 10) ? .5 <= (kd(G(a.B.da, to, 10), 1) || 0) : !0
    }

    function XC(a, b, c, d) {
        b = {
            r: b,
            pg_h: Wk(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (b.pg_hd = d);
        Hr(a.D, yr, b)
    }

    function YC(a) {
        var b, c, d;
        return null != (d = null == (b = a.j) ? void 0 : null == (c = mo(b)) ? void 0 : nd(c, 18, !1)) ? d : !1
    }

    function JC(a) {
        YC(a) && XC(a, "p", ZC(a))
    }

    function ZC(a) {
        var b = null;
        mo(a.j) && fd(mo(a.j), 19) && (b = D(mo(a.j), 19));
        return b
    }

    function TC(a) {
        if (YC(a)) {
            var b = ZC(a);
            a.L.init(null == b ? void 0 : b, function() {
                XC(a, "s", b)
            });
            a.L.addListener(function(c) {
                XC(a, "d", ZC(a), c);
                a.L.Fa();
                var d, e;
                if (null == (d = a.j) ? 0 : null == (e = mo(d)) ? 0 : nd(e, 21, !1)) {
                    var f, g;
                    null != (f = a.j) && null != (g = mo(f)) && E(g, 18, !1);
                    try {
                        var h;
                        if (null == (h = a.H) ? 0 : t(h, "includes").call(h, 0)) a.M++, FC(a), XC(a, "r", ZC(a), c)
                    } catch (k) {
                        XC(a, "f", ZC(a), c), Gr(a.D, wr, Er(bA(aA((new $z(0)).Oa(a.C), a.j), a.H).qa(1), k))
                    }
                }
            })
        }
    };

    function $C(a) {
        I.call(this, a)
    }
    z($C, I);

    function aD(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? zm(function() {
            return Gd($C, c)
        }) : wm(null)
    };

    function bD(a) {
        this.j = a || {
            cookie: ""
        }
    }
    q = bD.prototype;
    q.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.ek;
            d = c.Zf || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Pd
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    q.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = jb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    q.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Pd: 0,
            path: b,
            domain: c
        });
        return d
    };
    q.isEmpty = function() {
        return !this.j.cookie
    };
    q.xb = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    q.clear = function() {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = jb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function cD(a, b) {
        b = void 0 === b ? window : b;
        if (ld(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    }

    function dD(a) {
        return "null" !== a.origin
    }

    function eD(a, b, c) {
        b = ld(b, 5) && dD(c) ? c.document.cookie : null;
        return null === b ? null : (new bD({
            cookie: b
        })).get(a) || ""
    };

    function fD(a) {
        I.call(this, a)
    }
    z(fD, I);

    function gD(a, b) {
        return E(a, 5, b)
    };

    function hD(a) {
        var b = a.win,
            c = a.Nd,
            d = void 0 === a.nf ? !1 : a.nf;
        if (a = (void 0 === a.pf ? 0 : a.pf) || !Dy(new Cy(b))) {
            if (!d) {
                if (!(c = !c))
                    if (c = aD(b), null != c.j)
                        if ((c = c.j.value) && fd(c, 1)) b: switch (c = D(c, 1), c) {
                            case 1:
                                c = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                        } else c = !1;
                        else jk(806, c.l), c = !1;
                d = c
            }
            a = d
        }
        return a ? iD(b, gD(new fD, !0)) : (c = jC(hC(), 24)) ? iD(b, gD(new fD, Iy(c))) : new tm(null, Error("tcunav"))
    }

    function iD(a, b) {
        return (a = cD(b, a)) ? wm(a) : new tm(null, Error("unav"))
    };

    function jD(a) {
        I.call(this, a)
    }
    z(jD, I);

    function kD(a, b, c, d) {
        this.j = a;
        this.A = b;
        this.C = c;
        this.l = !1;
        this.B = d
    };

    function lD(a) {
        this.j = a
    }

    function LC(a, b) {
        var c = b.win,
            d = b.webPropertyCode,
            e = b.Hd,
            f = b.rd;
        a = nu(8, c, a.j).then(function(g) {
            return g.runGallerify({
                win: c,
                webPropertyCode: d,
                serializedGallerifyConfig: Ed(e),
                serializedArticleStructures: f.map(function(h) {
                    return Ed(h)
                })
            })
        });
        fk.Ma(927, a)
    };

    function mD(a) {
        var b = a.win,
            c = a.webPropertyCode;
        a = a.vb;
        if (ux(b.location, "google_auto_gallery")) {
            var d = new Un;
            var e = new Wn;
            e = E(e, 1, !0);
            d = td(d, 3, e);
            LC(new lD(a), {
                win: b,
                webPropertyCode: c,
                Hd: d,
                rd: []
            })
        }
    };
    var nD = "a".charCodeAt(),
        oD = Zd(Ck),
        pD = Zd(Dk);

    function qD(a) {
        if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
        this.l = a;
        this.j = 0
    }

    function rD(a) {
        var b = sD(a, 16);
        return !0 === !!sD(a, 1) ? (a = tD(a), a.forEach(function(c) {
            if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }), a) : uD(a, b)
    }

    function tD(a) {
        for (var b = sD(a, 12), c = []; b--;) {
            var d = !0 === !!sD(a, 1),
                e = sD(a, 16);
            if (d)
                for (d = sD(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }

    function uD(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (sD(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }

    function sD(a, b) {
        if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
        var c = a.l.substring(a.j, a.j + b);
        a.j += b;
        return parseInt(c, 2)
    };

    function vD(a, b) {
        try {
            var c = sc(a.split(".")[0]).map(function(e) {
                    return (ba = e.toString(2), t(ba, "padStart")).call(ba, 8, "0")
                }).join(""),
                d = new qD(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.j += 78;
            c.cmpId = sD(d, 12);
            c.cmpVersion = sD(d, 12);
            d.j += 30;
            c.tcfPolicyVersion = sD(d, 6);
            c.isServiceSpecific = !!sD(d, 1);
            c.useNonStandardStacks = !!sD(d, 1);
            c.specialFeatureOptins = wD(uD(d, 12, pD), pD);
            c.purpose = {
                consents: wD(uD(d, 24, oD), oD),
                legitimateInterests: wD(uD(d, 24, oD), oD)
            };
            c.purposeOneTreatment = !!sD(d, 1);
            c.publisherCC = String.fromCharCode(nD +
                sD(d, 6)) + String.fromCharCode(nD + sD(d, 6));
            c.vendor = {
                consents: wD(rD(d), b),
                legitimateInterests: wD(rD(d), b)
            };
            return c
        } catch (e) {
            return null
        }
    }

    function wD(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = y(b);
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
        } else
            for (a = y(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
        delete c[0];
        return c
    };

    function xD(a) {
        this.key = a;
        this.defaultValue = !1;
        this.valueType = "boolean"
    };

    function yD() {
        this.j = {}
    }

    function zD(a) {
        AD || (AD = new BD);
        var b = AD.j[a.key];
        if ("proto" === a.valueType) {
            try {
                var c = JSON.parse(b);
                if (Array.isArray(c)) return c
            } catch (d) {}
            return a.defaultValue
        }
        return typeof b === typeof a.defaultValue ? b : a.defaultValue
    };

    function CD(a) {
        I.call(this, a)
    }
    z(CD, I);

    function DD(a) {
        I.call(this, a)
    }
    z(DD, I);

    function ED(a) {
        I.call(this, a)
    }
    z(ED, I);
    var FD = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25];

    function GD() {};

    function HD(a) {
        I.call(this, a, -1, ID)
    }
    z(HD, I);

    function JD(a) {
        I.call(this, a)
    }
    z(JD, I);

    function KD(a) {
        I.call(this, a)
    }
    z(KD, I);
    var ID = [7];
    var LD = new xD("45368529"),
        MD = new xD("45369554");

    function BD() {
        this.j = {};
        var a = B.__fcexpdef || "";
        try {
            var b = JSON.parse(a)[0];
            a = "";
            for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
            this.j = JSON.parse(a)
        } catch (d) {}
    }
    var AD;
    z(BD, yD);

    function ND(a) {
        return (a = OD(a)) ? G(a, JD, 4) : null
    }

    function OD(a) {
        if (a = (new bD(a)).get("FCCDCF", ""))
            if (zD(LD))
                if (t(a, "startsWith").call(a, "%")) try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    PD(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            return b ? Gd(HD, b) : null
        } catch (c) {
            return PD(2), null
        }
    }

    function PD(a) {
        new GD;
        var b = new DD;
        a = E(b, 7, a);
        b = new CD;
        a = td(b, 1, a);
        b = new ED;
        ud(b, 22, FD, a);
        zD(MD)
    };

    function QD(a) {
        this.j = a;
        this.l = null
    }

    function RD(a) {
        a.__tcfapiPostMessageReady || SD(new QD(a))
    }

    function SD(a) {
        a.l = function(b) {
            var c = "string" == typeof b.data;
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, function(f, g) {
                var h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage &&
                    b.source.postMessage(f, b.origin);
                return f
            }, e.parameter)
        };
        a.j.addEventListener("message", a.l);
        a.j.__tcfapiPostMessageReady = !0
    };

    function TD(a) {
        this.j = a;
        this.l = a.document;
        this.C = (a = (a = OD(this.l)) ? G(a, KD, 5) || null : null) ? D(a, 2) : null;
        this.A = (a = ND(this.l)) && null != D(a, 1) ? D(a, 1) : null;
        this.B = (a = ND(this.l)) && null != D(a, 2) ? D(a, 2) : null
    }

    function UD(a) {
        var b = W(fp);
        a.__uspapi || a.frames.__uspapiLocator || (a = new TD(a), VD(a), b && WD(a))
    }

    function VD(a) {
        !a.C || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", Ay(a.j, "__uspapiLocator"), bb("__uspapi", function() {
            return a.F.apply(a, ma(Ka.apply(0, arguments)))
        }))
    }
    TD.prototype.F = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.C
        }, !0)
    };

    function WD(a) {
        !a.A || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = "fc", Ay(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = a.j.__tcfapiEventListeners || [], bb("__tcfapi", function() {
            return a.D.apply(a, ma(Ka.apply(0, arguments)))
        }), RD(a.j))
    }
    TD.prototype.D = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.j.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(XD(this, d, null), !0) : c(null, !1);
                    break;
                case "ping":
                    c({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    a = b.push(c);
                    c(XD(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ?
                        (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
            }
    };

    function XD(a, b, c) {
        if (!a.A) return null;
        b = vD(a.A, b);
        b.addtlConsent = null != a.B ? a.B : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };

    function YD(a) {
        var b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    }

    function ZD(a, b) {
        a = YD(a);
        b = YD(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var $D = r.Promise;

    function aE(a) {
        this.A = a
    }
    aE.prototype.l = function(a, b, c) {
        this.A.then(function(d) {
            d.l(a, b, c)
        })
    };
    aE.prototype.j = function(a, b) {
        return this.A.then(function(c) {
            return c.j(a, b)
        })
    };

    function bE(a) {
        this.data = a
    };

    function cE(a) {
        this.A = a
    }
    cE.prototype.l = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        dE(d.port1, b);
        this.A.postMessage(a, [d.port2].concat(c))
    };
    cE.prototype.j = function(a, b) {
        var c = this;
        return new $D(function(d) {
            c.l(a, d, b)
        })
    };

    function eE(a, b) {
        dE(a, b);
        return new cE(a)
    }

    function dE(a, b) {
        b && (a.onmessage = function(c) {
            b(new bE(c.data, eE(c.ports[0])))
        })
    };

    function fE(a) {
        var b = a.Ga,
            c = void 0 === a.Ia ? "ZNWN1d" : a.Ia,
            d = void 0 === a.onMessage ? void 0 : a.onMessage,
            e = void 0 === a.nc ? void 0 : a.nc;
        return gE({
            destination: a.destination,
            mf: function() {
                return b.contentWindow
            },
            If: hE(a.origin),
            Ia: c,
            onMessage: d,
            nc: e
        })
    }

    function gE(a) {
        var b = a.destination,
            c = a.mf,
            d = a.If,
            e = void 0 === a.eg ? void 0 : a.eg,
            f = a.Ia,
            g = void 0 === a.onMessage ? void 0 : a.onMessage,
            h = void 0 === a.nc ? void 0 : a.nc,
            k = Object.create(null);
        d.forEach(function(l) {
            k[l] = !0
        });
        return new aE(new $D(function(l, m) {
            function n(p) {
                if (p.source && p.source === c())
                    if (!0 !== k[p.origin]) {
                        b.removeEventListener("message", n, !1);
                        var u = d.join(", ");
                        m(Error('Origin mismatch while establishing channel "' + f + '". Expected ' + (1 === d.length ? u : "one of [" + u + "]") + ", but received " + p.origin + "."))
                    } else(p.data.n ||
                        p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(eE(p.ports[0], g)), h && h(p)))
            }
            b.addEventListener("message", n, !1)
        }))
    }

    function hE(a) {
        a = "string" === typeof a ? [a] : a;
        var b = Object.create(null);
        a.forEach(function(c) {
            if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return a
    };

    function iE(a) {
        I.call(this, a)
    }
    z(iE, I);

    function jE(a) {
        this.xc = a
    }
    jE.prototype.runStorify = function(a, b, c, d) {
        var e = nu(11, a, this.xc).then(function(f) {
            f.runStorify(a, b, c, d)
        });
        fk.Ma(1021, e)
    };

    function kE(a, b, c, d, e, f, g, h, k) {
        h = void 0 === h ? null : h;
        try {
            var l = a.localStorage
        } catch (u) {
            l = null
        }
        if (l) {
            if (W(Wo)) var m = null;
            else try {
                m = l.getItem("google_ama_config")
            } catch (u) {
                m = null
            }
            try {
                var n = m ? Gd(io, m) : null
            } catch (u) {
                n = null
            }
            m = n
        } else m = null;
        a: {
            if (d) try {
                var p = Gd(io, d);
                break a
            } catch (u) {
                bC(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            p = null
        }
        if (d = p) {
            if (e) {
                p = new oo;
                td(d, 3, p);
                m = mo(d) && D(mo(d), 13) ? D(mo(d), 13) : 1;
                E(p, 1, Date.now() + 864E5 * m);
                p = dd(d);
                mo(d) && (m = new no, n = mo(d), n = ld(n, 23), m = E(m, 23, null == n ? void 0 : n), n = nd(mo(d), 12, !1), m = E(m, 12, n), n =
                    nd(mo(d), 15, !1), m = E(m, 15, n), td(p, 15, m));
                m = H(p, Qn, 1);
                for (n = 0; n < m.length; n++) E(m[n], 11, Tc);
                E(p, 22, void 0, !1);
                if (W(Wo)) dC(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", Ed(p))
                } catch (u) {
                    bC(a, {
                        lserr: 1
                    })
                }
            }
            e = YB(a, H(d, qo, 7));
            a: {
                if (e && (p = D(e, 3), m = G(d, An, 9), p && m)) {
                    b: {
                        m = H(m, zn, 1);m = y(m);
                        for (n = m.next(); !n.done; n = m.next())
                            if (n = n.value, D(n, 1) == p) {
                                p = G(n, xn, 2) || null;
                                break b
                            }
                        p = null
                    }
                    if (p) break a
                }
                p = G(d, xn, 8) || new xn
            }
            p = {
                Of: p
            };
            e && (p.da = e);
            e && XB(e, 3) && (p.ub = [1]);
            if (7 == c.google_pgb_reactive && (e = p.da, !e || !ld(e,
                    8))) return !1;
            fC(a, 2) && (zk(5, [d.toJSON()]), c = cC(c), f = new lD(f), g = new jE(g), e = p.da, c.google_package = e && D(e, 4) || "", c = new bn(["google-auto-placed"], c), CC(a, new Fr(a), b, d, p, f, g, void 0 === c ? null : c, new hm(a), void 0 === h ? null : h, {
                url: a.location.href,
                Hb: k
            }));
            return !0
        }
        m && (bC(a, {
            cfg: 1,
            cl: 1
        }), dC(a));
        return !1
    };

    function lE(a) {
        var b = a.G;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!Tf.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = mE(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = mE(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = mE(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = mE(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = mE(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = mE(a, b.google_color_line, c))
    }

    function mE(a, b, c) {
        a.j |= 2;
        return b[c % b.length]
    };

    function nE(a, b) {
        var c = fk,
            d;
        var e;
        d = (e = (e = void 0 === e ? Gh() : e) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new Ch(d.left, d.top, d.width, d.height) : null) ? new ig(e.left, e.top) : (d = Hh()) && Ra(d.rootBounds) ? new ig(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new ig(0, 0),
                g = xg(sg(b));
            if (Vb(g, "parent")) {
                do {
                    if (g == a) var h = Uh(b);
                    else {
                        var k = Th(b);
                        h = new ig(k.left,
                            k.top)
                    }
                    d = h;
                    f.x += d.x;
                    f.y += d.y
                } while (g && g != a && g != g.parent && (b = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (l) {
            return c.na(888, l), new ig(-12245933, -12245933)
        }
    };

    function oE(a) {
        I.call(this, a)
    }
    z(oE, I);

    function pE(a) {
        I.call(this, a, -1, qE)
    }
    z(pE, I);
    var qE = [1];

    function rE(a) {
        I.call(this, a, -1, sE)
    }
    z(rE, I);

    function tE(a) {
        I.call(this, a)
    }
    z(tE, I);

    function uE(a) {
        I.call(this, a, -1, vE)
    }
    z(uE, I);
    var sE = [2],
        vE = [2];

    function wE(a) {
        I.call(this, a, -1, xE)
    }
    z(wE, I);
    var xE = [19],
        yE = [13, 14];

    function zE() {
        var a = this;
        this.j = null;
        var b = {};
        this.l = (b[hj] = {}, b[ij] = {}, b[jj] = {}, b);
        b = {};
        this.l[ij] = (b[9] = function() {
            return a.j ? Wg(Ka.apply(0, arguments)[0] + " + " + a.j) % 1E3 : void 0
        }, b)
    }
    var AE;

    function BE(a, b) {
        b && !a.j && (a.j = t(b.split(":"), "find").call(b.split(":"), function(c) {
            return 0 === c.indexOf("ID=")
        }) || null)
    };
    var CE = void 0;

    function DE() {
        Nd(CE, Ld);
        return CE
    }

    function EE(a) {
        Nd(CE, dj);
        CE = a
    };

    function FE(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Wd(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function GE(a) {
        W(Jo) && ik("abg_adsensesettings_lserr", {
            s: a,
            g: W(Ko),
            c: DE(),
            r: .01
        }, .01)
    };

    function HE(a) {
        a = void 0 === a ? B : a;
        return a.ggeac || (a.ggeac = {})
    };

    function IE(a) {
        a = void 0 === a ? document : a;
        var b;
        return !(null == (b = a.featurePolicy) || !(ba = b.allowedFeatures(), t(ba, "includes")).call(ba, "browsing-topics"))
    };

    function JE() {
        this.j = function() {}
    };

    function KE() {
        var a = HE(B),
            b = a = void 0 === a ? HE() : a;
        ek(Sj(dk), b);
        LE(a);
        Sj(JE).j = ck(bk, a);
        Sj(zq).j()
    }

    function LE(a) {
        var b = Sj(zq);
        b.l = function(c, d) {
            return ck(Xj, a, function() {
                return !1
            })(c, d, 1)
        };
        b.A = function(c, d) {
            return ck(Yj, a, function() {
                return 0
            })(c, d, 1)
        };
        b.B = function(c, d) {
            return ck(Zj, a, function() {
                return ""
            })(c, d, 1)
        };
        b.C = function(c, d) {
            return ck(ak, a, function() {
                return []
            })(c, d, 1)
        };
        b.j = function() {
            ck(Uj, a)(1)
        }
    };

    function ME(a) {
        var b = Sj(dk).l();
        a = eC(a);
        a.eids || (a.eids = []);
        return b.concat(a.eids).join(",")
    }

    function NE(a) {
        var b = Oi();
        b && (a.debug_experiment_id = b)
    };

    function OE(a) {
        this.j = a;
        this.l = 0
    }

    function PE(a, b, c) {
        return c ? eD(b, c, a.j) : null
    }

    function QE(a, b, c, d) {
        if (d) {
            var e = {
                Pd: D(c, 2) - Date.now() / 1E3,
                path: D(c, 3),
                domain: D(c, 4),
                Zf: !1
            };
            a = a.j;
            ld(d, 5) && dD(a) && (new bD(a.document)).set(b, D(c, 1), e)
        }
    }

    function RE(a, b, c) {
        if (c && eD(b, c, a.j)) {
            var d = a.j.location.hostname;
            if ("localhost" === d) d = ["localhost"];
            else if (d = d.split("."), 2 > d.length) d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                d = e
            }
            d = y(d);
            for (e = d.next(); !e.done; e = d.next()) f = a.j, ld(c, 5) && dD(f) && (new bD(f.document)).remove(b, "/", e.value)
        }
    };

    function SE(a, b, c) {
        return hk(629, function(d) {
            delete a._gfp_s_;
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return r.Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            d = y(d);
            for (var e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                e = f._domain_;
                var g = f._value_,
                    h = f._expires_,
                    k = f._path_;
                f = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof k || "number" !== typeof f || !g) throw Error("Invalid JSONP response");
                e = Sf(Rf(Qf(Pf(g),
                    h), k), e);
                switch (f) {
                    case 1:
                        QE(c, "__gads", e, b);
                        break;
                    case 2:
                        W(op) && QE(c, "__gpi", e, b)
                }
            }
            return r.Promise.resolve()
        })
    }

    function TE(a, b, c) {
        var d = void 0;
        if (0 === a.l) {
            if (PE(a, "__gads", b)) var e = !0;
            else if (e = a.j, ld(b, 5) && dD(e) && (new bD(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === eD("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                ld(b, 5) && dD(f) && (new bD(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = SE(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function UE(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = PE(b, "__gads", a);
        e && (d.cookie = e);
        W(op) && ((e = PE(b, "__gpi", a)) && !t(e, "includes").call(e, "&") && (d.gpic = e), d.gpid_exp = "1");
        var f = ke(ne(Sd(Td("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = TE(b, a, c);
        g ? new r.Promise(function(h) {
            c._gfp_s_ = function(k) {
                g(k).then(h)
            };
            Qg(c.document, f)
        }) : r.Promise.resolve()
    }

    function VE(a, b, c) {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        var d = new OE(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error("Illegal value of _gfp_a_: " + e);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error("Illegal value of _gfp_p_: " + e);
            e ? r.Promise.resolve() : UE(a, d, b, c)
        } else r.Promise.resolve();
        a = PE(d, "__gads", a) || "";
        AE || (AE = new zE);
        b = AE;
        BE(b, a);
        a = b.l;
        Sj(JE).j(a);
        Sj(dk).j(20);
        Sj(dk).j(17)
    };
    var WE = x(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/rum", ".js"]),
        XE = x(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/rum_debug", ".js"]),
        YE = x(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/reactive_library", ".js"]),
        ZE = x(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/debug_card_library", ".js"]),
        $E = x(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/creativetoolset/xpc_expansion_embed.js"]),
        aF = x(["https://googleads.g.doubleclick.net/pagead/html/",
            "/", "/zrt_lookup.html"
        ]),
        bF = x(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        cF = x(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/gallerify", ".js"]),
        dF = x(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/storify", ".js"]);
    var fj = {
        Tj: 0,
        Pj: 1,
        Mj: 2,
        Oj: 3,
        Rj: 5,
        Sj: 6,
        Qj: 7,
        Nj: 8
    };

    function eF(a) {
        this.J = a.J;
        this.pubWin = a.pubWin;
        this.G = a.G;
        this.ha = a.ha;
        this.ca = a.ca;
        this.Za = a.Za;
        this.innerInsElement = a.innerInsElement;
        this.outerInsElement = a.outerInsElement;
        this.B = -1;
        this.j = 0;
        this.l = this.K = null;
        this.I = this.F = 0;
        this.A = [];
        this.tb = this.D = "";
        this.C = this.H = null
    };

    function fF(a, b) {
        return Kx({
            J: a,
            Sc: 3E3,
            kc: a.innerWidth > Nk ? 650 : 0,
            pa: Li,
            ud: b
        })
    };

    function gF(a) {
        var b = 0;
        try {
            b |= Pk(a), b |= Qk(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function hF(a) {
        var b = 0;
        try {
            b |= Pk(a), b |= Qk(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function iF(a, b, c) {
        var d = 0;
        try {
            d |= Pk(a), d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
        } catch (g) {
            d |= 32
        }
        var e = 0;
        try {
            e |= Qk(a, 2500);
            if (W(Ap)) {
                var f = Vk(a);
                e |= f ? 320 > f ? 2097152 : 0 : 1073741824
            }
            e |= Sk(a);
            0 < c && !gz(fz(b, c)) && (e |= 134217728)
        } catch (g) {
            e |= 32
        }
        return d | e
    };

    function jF(a, b) {
        b = void 0 === b ? null : b;
        if (!W(Dp)) return 32;
        var c = Pk(a),
            d;
        Lx(null == (d = a.navigator) ? void 0 : d.userAgent) && (c |= 1048576);
        d = a.innerWidth;
        1200 > d && (c |= 65536);
        var e = a.innerHeight;
        650 > e && (c |= 2097152);
        b && 0 === c && (kF({
            J: a,
            fe: 1,
            position: 3 === b ? "left" : "right",
            T: d,
            Z: e,
            Ka: new r.Set,
            minWidth: 120,
            minHeight: 500
        }) || (c |= 16));
        return c
    }

    function lF(a) {
        if (0 !== jF(a)) return "";
        for (var b = [], c = a.innerWidth, d = a.innerHeight, e = y(["left", "right"]), f = e.next(); !f.done; f = e.next()) {
            f = f.value;
            var g = kF({
                J: a,
                fe: 1,
                position: f,
                T: c,
                Z: d,
                Ka: new r.Set,
                minWidth: 120,
                minHeight: 500
            });
            g && b.push(g.width + "x" + g.height + "_" + String(f).charAt(0))
        }
        return b.join("|")
    }

    function mF(a, b) {
        return null !== Hg(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && b.has(c)
        })
    }

    function nF(a, b) {
        return Hg(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position
        })
    }

    function oF(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function pF(a) {
        return a.position + "-" + oF(a.T) + "x" + oF(a.Z) + "-" + oF(a.scrollY + a.ib) + "Y"
    }

    function qF(a) {
        return "f-" + pF({
            position: a.position,
            ib: a.ib,
            scrollY: 0,
            T: a.T,
            Z: a.Z
        })
    }

    function rF(a, b) {
        a = Math.min(null != a ? a : Infinity, null != b ? b : Infinity);
        return Infinity !== a ? a : 0
    }

    function sF(a, b, c) {
        var d = Mk(c.J).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.min(e.bottom + 10, c.Z),
                    g = Math.max(e.left - 10, 0),
                    h = Math.min(e.right + 10, c.T),
                    k = .3 * c.T;
                for (e = Math.max(e.top - 10, 0); e <= f; e += 10) {
                    if (0 < h && g < k) {
                        var l = qF({
                            position: "left",
                            ib: e,
                            T: c.T,
                            Z: c.Z
                        });
                        b.set(l, rF(b.get(l), g))
                    }
                    if (g < c.T && h > c.T - k) {
                        l = qF({
                            position: "right",
                            ib: e,
                            T: c.T,
                            Z: c.Z
                        });
                        var m = c.T - h;
                        b.set(l, rF(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function kF(a) {
        var b = Mk(a.J).sideRailAvailableSpace,
            c = {
                J: a.J,
                T: a.T,
                Z: a.Z,
                Ka: a.Ka
            },
            d = "f-" + oF(c.T) + "x" + oF(c.Z);
        if (!b.has(d)) {
            b.set(d, 0);
            Mk(c.J).sideRailProcessedFixedElements.clear();
            d = new r.Set([].concat(ma(t(Array, "from").call(Array, c.J.document.querySelectorAll("[data-anchor-status]"))), ma(c.Ka)));
            for (var e = c.J, f = [], g = y(e.document.querySelectorAll("*")), h = g.next(); !h.done; h = g.next()) {
                h = h.value;
                var k = e.getComputedStyle(h, null);
                "fixed" === k.position && "none" !== k.display && "hidden" !== k.visibility && f.push(h)
            }
            e =
                y(f);
            for (f = e.next(); !f.done; f = e.next()) f = f.value, mF(f, d) || sF(f, b, c)
        }
        c = [];
        e = .9 * a.Z;
        f = $k(a.J);
        g = d = (a.Z - e) / 2;
        h = e / 11;
        for (k = 0; 12 > k; k++) {
            var l = c,
                m = l.push;
            var n = g;
            var p = a.position,
                u = {
                    J: a.J,
                    T: a.T,
                    Z: a.Z,
                    Ka: a.Ka
                },
                v = qF({
                    position: p,
                    ib: n,
                    T: u.T,
                    Z: u.Z
                }),
                A = pF({
                    position: p,
                    ib: n,
                    scrollY: f,
                    T: u.T,
                    Z: u.Z
                });
            if (!b.has(A)) {
                var F = "left" === p ? 20 : u.T - 20,
                    S = F;
                p = .3 * u.T / 7 * ("left" === p ? 1 : -1);
                for (var P = 0; 8 > P; P++) {
                    var L = Rx(u.J.document, Math.round(S), Math.round(n)),
                        N = mF(L, u.Ka),
                        O = nF(L, u.J);
                    if (!N && null !== O) {
                        sF(O, b, u);
                        b.delete(A);
                        break
                    }
                    N ||
                        (N = L.offsetHeight >= .25 * u.Z, N = L.offsetWidth >= .9 * u.T && N);
                    if (N) b.set(A, Math.round(Math.abs(S - F) + 20));
                    else if (S !== F) S -= p, p /= 2;
                    else {
                        b.set(A, 0);
                        break
                    }
                    S += p
                }
            }
            n = rF(b.get(v), b.get(A));
            m.call(l, n);
            g += h
        }
        b = a.fe;
        f = a.position;
        e = Math.round(e / 12);
        d = Math.round(d);
        g = a.minWidth;
        a = a.minHeight;
        l = [];
        h = t(Array(c.length), "fill").call(Array(c.length), 0);
        for (k = 0; k < c.length; k++) {
            for (; 0 !== l.length && c[l[l.length - 1]] >= c[k];) l.pop();
            h[k] = 0 === l.length ? 0 : l[l.length - 1] + 1;
            l.push(k)
        }
        l = [];
        m = c.length - 1;
        k = t(Array(c.length), "fill").call(Array(c.length),
            0);
        for (n = m; 0 <= n; n--) {
            for (; 0 !== l.length && c[l[l.length - 1]] >= c[n];) l.pop();
            k[n] = 0 === l.length ? m : l[l.length - 1] - 1;
            l.push(n)
        }
        l = null;
        for (m = 0; m < c.length; m++)
            if (n = {
                    position: f,
                    width: Math.round(c[m]),
                    height: Math.round((k[m] - h[m] + 1) * e),
                    gk: d + h[m] * e
                }, u = n.width >= g && n.height >= a, 0 === b && u) {
                l = n;
                break
            } else 1 === b && u && (!l || n.width * n.height > l.width * l.height) && (l = n);
        return l
    };
    var tF = x(["https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]),
        uF = {},
        vF = (uF[27] = 512, uF[26] = 128, uF);

    function wF(a, b, c, d) {
        switch (c) {
            case 1:
            case 2:
                return 0 === fF(a, c);
            case 3:
            case 4:
                return 0 === jF(a, c);
            case 8:
                return b = "on" === b.google_adtest || ux(a.location, "google_ia_debug") ? -1 : 3600, 0 == iF(a, d, b);
            case 9:
                return b = !("on" === b.google_adtest || ux(a.location, "google_scr_debug")), !hz(a, b, d);
            case 30:
                return 0 == ZA(a);
            case 26:
                return 0 == hF(a);
            case 27:
                return 0 === gF(a);
            case 40:
                return !0;
            default:
                return !1
        }
    }

    function xF(a, b, c, d) {
        switch (c) {
            case 0:
            case 40:
            case 10:
            case 11:
                return 0;
            case 1:
            case 2:
                return fF(a, c);
            case 3:
            case 4:
                return jF(a, c);
            case 8:
                return iF(a, d, "on" === b.google_adtest || ux(a.location, "google_ia_debug") ? -1 : 3600);
            case 9:
                return hz(a, !("on" === b.google_adtest || ux(a.location, "google_scr_debug")), d);
            case 16:
                return Tq(b, a) ? 0 : 8388608;
            case 30:
                return ZA(a);
            case 26:
                return hF(a);
            case 27:
                return gF(a);
            default:
                return 32
        }
    }

    function yF(a, b, c) {
        var d = b.google_reactive_ad_format;
        if (!Xd(d)) return !1;
        a = Pg(a);
        if (!a || !wF(a, b, d, c)) return !1;
        b = Mk(a);
        if (Xk(b, d)) return !1;
        b.adCount[d] || (b.adCount[d] = 0);
        b.adCount[d]++;
        return !0
    }

    function zF(a) {
        var b = a.google_reactive_ad_format;
        return !a.google_reactive_ads_config && AF(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b
    }

    function BF(a) {
        if (!a.hash) return null;
        var b = null;
        Ug(qx, function(c) {
            !b && ux(a, c) && (b = sx[c])
        });
        return b
    }

    function CF(a, b) {
        var c = Mk(a).tagSpecificState[1] || null;
        null != c && null == c.debugCard && Ug(tx, function(d) {
            !c.debugCardRequested && "number" === typeof d && xx(d, a.location) && (c.debugCardRequested = !0, DF(a, b, function(e) {
                c.debugCard = e.createDebugCard(d, a)
            }))
        })
    }

    function EF(a, b, c) {
        if (!b) return null;
        var d = Mk(b),
            e = 0;
        Ug(Yd, function(f) {
            var g = vF[f];
            g && 0 === FF(a, b, f, c) && (e |= g)
        });
        d.wasPlaTagProcessed && (e |= 256);
        a.google_reactive_tag_first && (e |= 1024);
        return e ? "" + e : null
    }

    function GF(a, b, c) {
        var d = [];
        Ug(Yd, function(e) {
            if (W(Dp) || 3 !== e && 4 !== e) {
                var f = FF(b, a, e, c);
                0 !== f && d.push(e + ":" + f)
            }
        });
        return d.join(",") || null
    }

    function HF(a) {
        var b = [],
            c = {};
        Ug(a, function(d, e) {
            if ((e = Hk[e]) && !c[e]) {
                c[e] = !0;
                if (d) d = 1;
                else if (!1 === d) d = 2;
                else return;
                b.push(e + ":" + d)
            }
        });
        return b.join(",")
    }

    function IF(a) {
        a = a.overlays;
        if (!a) return "";
        a = a.bottom;
        return "boolean" === typeof a ? a ? "1" : "0" : ""
    }

    function FF(a, b, c, d) {
        if (!b) return 256;
        var e = 0,
            f = Mk(b),
            g = Xk(f, c);
        if (a.google_reactive_ad_format == c || g) e |= 64;
        var h = !1;
        Ug(f.reactiveTypeDisabledByPublisher, function(k, l) {
            String(c) === String(l) && (h = !0)
        });
        h && BF(b.location) !== c && (e |= 128);
        return e | xF(b, a, c, d)
    }

    function JF(a, b) {
        if (a) {
            var c = Mk(a),
                d = {};
            Ug(b, function(e, f) {
                (f = Hk[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
            });
            Ug(Yd, function(e) {
                d[Jk[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
            })
        }
    }

    function KF(a, b, c) {
        b = hk(b, c);
        return nu(1, window, ke(Nh(a), Aq(Po) ? {
            bust: Aq(Po)
        } : {})).then(b)
    }

    function DF(a, b, c) {
        c = hk(212, c);
        nu(3, a, Nh(b)).then(c)
    }

    function LF(a) {
        a.adsbygoogle || (a.adsbygoogle = [], Qg(a.document, Nh(R(tF))))
    }

    function MF(a, b) {
        J(a, "load", function() {
            LF(a);
            a.adsbygoogle.push(b)
        })
    }

    function NF(a) {
        a = a.google_reactive_ad_format;
        return Xd(a) ? "" + a : null
    }

    function AF(a) {
        return !!NF(a) || null != a.google_pgb_reactive
    }

    function OF(a) {
        a = NF(a);
        return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a
    };

    function PF(a) {
        return "number" === typeof a.google_reactive_sra_index
    }

    function QF(a, b, c) {
        var d = b.J || b.pubWin,
            e = b.G;
        e.google_reactive_plat = GF(d, e, c);
        var f = HF(a);
        f && (e.google_reactive_plaf = f);
        (f = IF(a)) && (e.google_reactive_fba = f);
        (f = lF(d)) && (e.google_plas = f);
        RF(a, e);
        f = BF(b.pubWin.location);
        SF(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        W(qq) && (e.easpi = W(Lp), W(Jp) && (e.easpa = !0), e.asntp = X(dq), e.asntpv = X(hq), e.asntpl = X(fq), e.asntpm = X(gq), e.asntpc = X(eq), e.asna = X($p), e.asnd = X(aq), e.asnp = X(bq), e.asns = X(cq), e.asmat = X(Yp), e.asptt = X(kq));
        W(mp) && (e.fsapi = !0);
        Ih() || Iq(b.pubWin.top);
        f = mk(b.pubWin, "rsrai", hk(429, function(g, h) {
            return TF(b, d, e.google_ad_client, a, g, h, c)
        }), hk(430, Ya(cl, b.pubWin, 431, Li)));
        b.A.push(f);
        Mk(d).wasReactiveTagRequestSent = !0;
        UF(b, a, c)
    }

    function UF(a, b, c) {
        var d = a.G,
            e = Ra(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = mk(a.pubWin, "apcnf", hk(353, function(f, g) {
            var h = a.pubWin,
                k = d.google_ad_client,
                l = Nh(a.ca.vb),
                m = Nh(a.ca.xc),
                n = Nh(a.ca.Hb);
            return qh(g.origin) ? kE(h, k, e, f.config, c, l, m, null, n) : !1
        }), hk(353, Ya(cl, a.pubWin, 353, Li)));
        a.A.push(b)
    }

    function TF(a, b, c, d, e, f, g) {
        if (!qh(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!fC(b, 1)) return !0;
        f && zk(6, [f]);
        e = e.amaConfig;
        for (var h = [], k = [], l = Mk(b), m = null, n = 0; n < f.length; n++)
            if (f[n]) {
                var p = f[n],
                    u = p.adFormat;
                l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[u] = !0);
                if (!p.noCreative) {
                    p.google_reactive_sra_index = n;
                    if (9 === u && e) {
                        p.pubVars = t(Object, "assign").call(Object, p.pubVars || {}, VF(d, p));
                        var v = new iz;
                        if (cz(v, p) && v.H(p)) {
                            m = v;
                            continue
                        }
                    }
                    h.push(p);
                    k.push(u)
                }
            }
        h.length && (ik("rasra::pm", {
            rt: k.join(","),
            c: c
        }, .1), KF(a.ca.Zd, 522, function(A) {
            WF(h, b, c, A, d, g)
        }));
        e && kE(b, c, d, e, g, Nh(a.ca.vb), Nh(a.ca.xc), m);
        return !0
    }

    function VF(a, b) {
        var c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        var e = {};
        a = a.page_level_pubvars;
        Ra(a) && t(Object, "assign").call(Object, e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        30 === c && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function WF(a, b, c, d, e, f) {
        for (var g = [], h = {}, k = 0; k < a.length; h = {
                Ib: h.Ib,
                Da: h.Da
            }, k++) {
            h.Da = a[k];
            var l = h.Da.adFormat,
                m = h.Da.adKey;
            h.Ib = d.configProcessorForAdFormat(l);
            l && h.Ib && m ? (h.Da.pubVars = VF(e, h.Da), delete h.Da.google_reactive_sra_index, g.push(l), gk(466, function(n) {
                return function() {
                    return n.Ib.verifyAndProcessConfig(b, n.Da, f)
                }
            }(h))) : ik("rasra::ivc", {
                af: l,
                ak: m,
                c: c
            }, .1)
        }
        ik("rasra::pr", {
            rt: g.join(","),
            c: c
        }, .1)
    }

    function RF(a, b) {
        var c = [],
            d = !1;
        Ug(Hk, function(e, f) {
            var g;
            if (a.hasOwnProperty(f)) {
                var h = a[f];
                Ra(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
            }
            f = Hk[f] - 1;
            c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function SF(a, b, c) {
        var d = a.page_level_pubvars;
        !c.google_adtest && ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
    };
    Ub("script");
    var XF = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function YF() {
        T.apply(this, arguments);
        this.j = null
    }
    z(YF, T);
    YF.prototype.init = function(a) {
        var b = this,
            c = hC();
        if (!jC(c, 27, !1)) {
            lC(c, 27, !0);
            this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
            var d = function() {
                return ZF(b, a)
            };
            J(a, "resize", d);
            rl(this, function() {
                zf(a, "resize", d)
            })
        }
    };

    function ZF(a, b) {
        var c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.j != c) {
            a.j = c;
            c = qC();
            a = {};
            c = y(c);
            for (var d = c.next(); !d.done; a = {
                    ya: a.ya
                }, d = c.next())
                if (a.ya = d.value, a.ya.Na.offsetWidth != a.ya.offsetWidth || a.ya.G.google_full_width_responsive_allowed) a.ya.offsetWidth = a.ya.Na.offsetWidth, gk(467, function(e) {
                    return function() {
                        var f = e.ya.Na,
                            g = e.ya.G,
                            h = $F(f, g);
                        g.google_full_width_responsive_allowed && (f.style.marginLeft = g.gfwroml || "", f.style.marginRight = g.gfwromr || "", f.style.height = g.gfwroh ? g.gfwroh + "px" : "", f.style.width =
                            g.gfwrow ? g.gfwrow + "px" : "", f.style.zIndex = g.gfwroz || "", delete g.google_full_width_responsive_allowed);
                        delete g.google_ad_format;
                        delete g.google_ad_width;
                        delete g.google_ad_height;
                        delete g.google_content_recommendation_ui_type;
                        delete g.google_content_recommendation_rows_num;
                        delete g.google_content_recommendation_columns_num;
                        b.google_spfd(f, g, b);
                        var k = $F(f, g);
                        !k && h && 1 == f.childNodes.length ? (aG(h, !1), g.google_reactive_ad_format = 16, g.google_ad_section = "responsive_resize", f.dataset.adsbygoogleStatus = "reserved",
                            f.className += " adsbygoogle-noablate", LF(b), b.adsbygoogle.push({
                                element: f,
                                params: g
                            })) : k && h ? k != h && (aG(h, !1), aG(k, !0)) : ik("auto_size_refresh", {
                            context: "showOrHideElm",
                            url: b.location.href,
                            nodes: f.childNodes.length
                        })
                    }
                }(a))
        }
    }

    function bG(a, b) {
        if (!Tq(b, a)) return function() {};
        a = cG(b, a);
        if (!a) return function() {};
        var c = qC(),
            d = {
                Na: a,
                G: $d(b),
                offsetWidth: a.offsetWidth
            };
        c.push(d);
        return function() {
            return Mb(c, d)
        }
    }

    function aG(a, b) {
        a.style.display = b ? "inline-block" : "none";
        var c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function $F(a, b) {
        for (var c = 0; c < a.childNodes.length; c++) {
            for (var d = {}, e = a.childNodes[c], f = e.style, g = ["width", "height"], h = 0; h < g.length; h++) {
                var k = "google_ad_" + g[h];
                if (!d.hasOwnProperty(k)) {
                    var l = ch(f[g[h]]);
                    l = null === l ? null : Math.round(l);
                    null != l && (d[k] = l)
                }
            }
            if (d.google_ad_width == b.google_ad_width && d.google_ad_height == b.google_ad_height) return e
        }
        return null
    }

    function cG(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !Yq.test(a.className);) a = a.parentElement;
        return a
    };

    function dG(a, b, c) {
        this.J = a;
        this.Na = b;
        this.G = c;
        this.j = null;
        this.l = this.A = 0
    }
    dG.prototype.B = function() {
        10 <= ++this.A && B.clearInterval(this.j);
        var a = Wq(this.J, this.Na);
        a = Xq(this.J, this.Na, a);
        var b = Sq(this.Na, this.J);
        null != b && 0 === b.x || B.clearInterval(this.j);
        a && (this.l++, ik("rspv:al", {
            aligns: this.l,
            attempt: this.A,
            client: this.G.google_ad_client,
            eoffs: String(null != b ? b.x : null),
            eids: ME(this.G),
            slot: this.G.google_ad_slot,
            url: this.G.google_page_url
        }, .01))
    };

    function eG(a, b) {
        var c = gD(a, Iy(b));
        c = E(c, 2, b.tcString);
        c = E(c, 4, b.addtlConsent || "");
        E(c, 7, b.internalErrorState);
        c = !Ly(b);
        E(a, 9, c);
        null != b.gdprApplies && E(a, 3, b.gdprApplies)
    }

    function fG(a) {
        var b = new Cy(a.pubWin, -1, W(Ip));
        if (!Dy(b)) return r.Promise.resolve(null);
        var c = hC(),
            d = jC(c, 24);
        if (d) return r.Promise.resolve(d);
        var e = new r.Promise(function(f) {
            f = {
                resolve: f
            };
            var g = jC(c, 25, []);
            g.push(f);
            lC(c, 25, g)
        });
        d || null === d || (lC(c, 24, null), b.addEventListener(function(f) {
            if (Hy(f)) {
                lC(c, 24, f);
                eG(a.l, f);
                for (var g = y(jC(c, 25, [])), h = g.next(); !h.done; h = g.next()) h.value.resolve(f);
                lC(c, 25, [])
            } else lC(c, 24, null)
        }));
        return e
    };

    function gG(a, b, c) {
        a -= b;
        return a >= (void 0 === c ? 1E5 : c) ? "M" : 0 <= a ? a : "-M"
    };

    function hG(a, b, c) {
        var d, e = (null == (d = b.parentElement) ? 0 : d.classList.contains("adsbygoogle")) ? b.parentElement : b;
        c.addEventListener("load", function() {
            return iG(e)
        });
        return mk(a, "adpnt", function(f, g) {
            var h;
            if (Zk(g, c.contentWindow)) {
                f = bl(f).qid;
                try {
                    c.setAttribute("data-google-query-id", f);
                    null != a.googletag || (a.googletag = {
                        cmd: []
                    });
                    var k = null != (h = a.googletag.queryIds) ? h : [];
                    k.push(f);
                    500 < k.length && k.shift();
                    a.googletag.queryIds = k
                } catch (l) {}
                e.dataset.adStatus && ik("adsense_late_fill", {
                    status: e.dataset.adStatus
                });
                e.dataset.adStatus = "filled";
                h = !0
            } else h = !1;
            return h
        })
    }

    function iG(a) {
        setTimeout(function() {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function jG(a, b, c, d) {
        T.call(this);
        var e = this;
        this.l = a;
        this.j = b;
        this.O = c;
        this.pa = d;
        this.Ha = {};
        this.ye = this.O.Fb(168, function(f, g) {
            return void kG(e, f, g)
        });
        this.Ae = this.O.Fb(169, function(f, g) {
            return cl(e.l, "ras::xsf", e.pa, f, g)
        });
        this.U = [];
        this.ea(this.Ha);
        this.U.push(lk(this.l, "sth", this.ye, this.Ae))
    }
    z(jG, T);

    function kG(a, b, c) {
        try {
            if (!qh(c.origin) || a.j && !Zk(c, a.j.contentWindow)) return
        } catch (f) {
            return
        }
        var d = b.msg_type,
            e;
        "string" === typeof d && (e = a.Ha[d]) && a.O.La(168, function() {
            e.call(a, b, c)
        })
    }
    jG.prototype.W = function() {
        for (var a = y(this.U), b = a.next(); !b.done; b = a.next()) b = b.value, b();
        this.U.length = 0;
        T.prototype.W.call(this)
    };

    function lG(a, b) {
        jG.call(this, a, void 0 === b ? null : b, fk, Li);
        this.l = a
    }
    z(lG, jG);

    function mG(a, b) {
        lG.call(this, a, b);
        this.A = function() {};
        this.j && J(this.j, "load", this.A)
    }
    z(mG, lG);
    mG.prototype.W = function() {
        this.j && zf(this.j, "load", this.A);
        lG.prototype.W.call(this);
        this.j = null
    };
    mG.prototype.ea = function(a) {
        var b = this;
        a["adsense-labs"] = function(c) {
            if (c = bl(c).settings) try {
                var d = new Mf(JSON.parse(c));
                if (null != D(d, 1)) {
                    var e = b.l,
                        f = D(d, 1) || "";
                    if (W(Ko) ? null != hD({
                            win: e,
                            Nd: DE()
                        }).j : 1) {
                        if (W(Ko)) {
                            var g = hD({
                                win: e,
                                Nd: DE()
                            });
                            if (null != g.j) {
                                GE("ok");
                                var h = FE(g.j.value)
                            } else GE(g.l.message), h = {}
                        } else h = FE(e.localStorage);
                        null !== d && (h[f] = d.toJSON());
                        try {
                            e.localStorage.setItem("google_adsense_settings", JSON.stringify(h))
                        } catch (k) {}
                    }
                }
            } catch (k) {}
        }
    };

    function nG(a, b) {
        lG.call(this, a.J, b);
        var c = this;
        this.F = a.outerInsElement.firstElementChild;
        this.B = a.outerInsElement;
        this.I = this.B.parentElement && this.B.parentElement.classList.contains("adsbygoogle") ? this.B.parentElement : this.B;
        this.A = parseInt(this.B.style.height, 10);
        this.P = null;
        this.Kb = this.Lb = !1;
        this.Ra = "";
        this.ta = this.K = this.C = 0;
        this.ze = this.A / 5;
        this.L = Uh(this.I).y;
        this.Sa = null;
        this.xe = vf(hk(651, function() {
            c.L = Uh(c.I).y;
            var d = c.K;
            c.K = $k(c.l);
            c.A < c.C ? (d = c.K - d, 0 < d && (c.ta += d, c.ta >= c.ze ? (oG(c), pG(c,
                c.C)) : (c.A = Math.min(c.C, c.A + d), pG(c, d), qG(c)))) : zf(c.l, "scroll", c.M)
        }), this);
        this.M = function() {
            var d = c.xe;
            Tf.requestAnimationFrame ? Tf.requestAnimationFrame(d) : d()
        }
    }
    z(nG, lG);
    nG.prototype.ea = function(a) {
        var b = this;
        a["expand-on-scroll"] = function(c, d) {
            c = bl(c);
            b.P = c.i_expid;
            b.Ra = c.qid;
            b.Sa = c.gen204_fraction;
            if (!b.Lb) {
                b.Lb = !0;
                c = rG(b, c);
                "0" === c && J(b.l, "scroll", b.M, wf);
                var e = {};
                e = (e.msg_type = "expand-on-scroll-result", e.eos_success = "0" === c, e);
                nk(d.source, "sth", e, "*");
                d = {
                    err: c
                };
                d = void 0 === d ? {} : d;
                b.P && (d.eid = b.P);
                d.qid = b.Ra;
                ik("eoscrl", d, Bk(String(b.Sa)))
            }
        };
        a["expand-on-scroll-force-expand"] = function() {
            b.Kb || (b.Kb = !0, oG(b), zf(b.l, "scroll", b.M))
        }
    };

    function oG(a) {
        a.A = a.C;
        a.I.style.transition = "height 500ms";
        a.B.style.transition = "height 500ms";
        a.F.style.transition = "height 500ms";
        a.j.style.transition = "height 500ms";
        qG(a)
    }

    function qG(a) {
        var b = "rect(0px, " + a.j.width + "px, " + a.A + "px, 0px)";
        a.j.style.clip = b;
        a.F.style.clip = b;
        a.j.setAttribute("height", a.A);
        a.j.style.height = a.A + "px";
        a.F.setAttribute("height", a.A);
        a.F.style.height = a.A + "px";
        a.B.style.height = a.A + "px";
        a.I.style.height = a.A + "px"
    }

    function rG(a, b) {
        b = ah(b.r_nh);
        a.C = null == b ? 0 : b;
        if (0 >= a.C) return "1";
        a.L = Uh(a.I).y;
        a.K = $k(a.l);
        if (a.L + a.A < a.K) return "2";
        if (a.L > Uk(a.l) - a.l.innerHeight) return "3";
        b = a.K;
        a.j.setAttribute("height", a.C);
        a.j.style.height = a.C + "px";
        a.F.style.overflow = "hidden";
        a.I.style.position = "relative";
        a.I.style.transition = "height 100ms";
        a.B.style.transition = "height 100ms";
        a.F.style.transition = "height 100ms";
        a.j.style.transition = "height 100ms";
        b = Math.min(b + a.l.innerHeight - a.L, a.A);
        Oh(a.B, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = "rect(0px, " + a.j.width + "px, " + b + "px, 0px)";
        Oh(a.j, {
            clip: b
        });
        Oh(a.F, {
            clip: b
        });
        return "0"
    }

    function pG(a, b) {
        var c = {};
        b = (c.msg_type = "expand-on-scroll-result", c.eos_success = !0, c.eos_amount = b, c);
        nk(a.j.contentWindow || a.j.contentWindow, "sth", b, "*")
    }
    nG.prototype.W = function() {
        this.M && zf(this.l, "scroll", this.M, wf);
        lG.prototype.W.call(this)
    };

    function sG(a, b, c) {
        T.call(this);
        var d = this;
        this.l = a;
        this.B = b;
        this.K = c;
        this.C = 0;
        this.A = tG(this);
        this.I = uf(this.F, this);
        this.j = hk(433, function() {
            var e = d.I;
            Tf.requestAnimationFrame ? Tf.requestAnimationFrame(e) : e()
        });
        J(this.l, "scroll", this.j, wf)
    }
    z(sG, T);

    function tG(a) {
        var b = a.K.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.l.innerHeight) && !c
    }
    sG.prototype.F = function() {
        var a = tG(this);
        if (a && !this.A) {
            var b = {
                    rr: "vis-bcr"
                },
                c = this.B.contentWindow;
            c && (ok(c, "ig", b, "*", 2), 10 <= ++this.C && this.j && zf(this.l, "scroll", this.j, wf))
        }
        this.A = a
    };

    function uG(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function vG(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function wG(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function xG(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.Wc + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Oh(a, "transition", b.join(","))
    }
    var yG = sf(function() {
        if (Yb) return jc("10.0");
        var a = zg(document, "DIV"),
            b = ac ? "-webkit" : $b ? "-moz" : Yb ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = Ue("div", {
            style: c
        });
        cg(a, b);
        a = a.firstChild;
        b = a.style[og("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Ph(a, "transition")] || "")
    });

    function zG(a, b) {
        this.l = ["", ""];
        this.j = a || "";
        this.A = b || ""
    }

    function AG(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function BG(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function CG(a, b) {
        0 > a.A.indexOf(b) && (a.A = b + a.A)
    }
    zG.prototype.toString = function() {
        return [this.l[0], this.l[1], this.j, this.A].join("|")
    };

    function DG(a) {
        var b = EG(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }

    function EG(a, b, c, d) {
        return "" != a.A || b ? null : "" == a.j.replace(FG, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function GG(a, b, c, d, e, f, g) {
        this.Kb = a;
        this.M = c;
        this.H = b;
        this.U = (a = this.H.ownerDocument) && (a.defaultView || a.parentWindow);
        this.C = new HG(this.H);
        this.B = g;
        this.Ra = IG(this.C, d.ed, d.height, d.ee);
        this.F = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.right - this.C.boundingClientRect.left : null : e;
        this.D = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top : null : f;
        this.A = JG(d.width);
        this.l = JG(d.height);
        this.O = this.B ? JG(d.opacity) : null;
        this.ea = d.check;
        this.I =
            "animate" == d.ed && !KG(this.C, this.l, this.Ha) && yG();
        this.Sa = !!d.pd;
        this.j = new zG;
        KG(this.C, this.l, this.Ha) && BG(this.j, "r");
        e = this.C;
        e.j && e.l >= e.A && BG(this.j, "b");
        this.L = this.K = null;
        this.P = !1;
        this.ta = !!d.Wf;
        this.Lb = !!d.be;
        this.Ha = !!d.ee
    }

    function LG(a) {
        if (a.B && !a.Ra || null == a.A && null == a.l && null == a.O && a.B) return a.j;
        var b = a.B;
        a.B = !1;
        MG(a);
        a.B = b;
        if (!b || null != a.ea && !EG(a.j, a.ea, a.A, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.F = null, a.D = null);
        if (null == a.F && null !== a.A || null == a.D && null !== a.l) a.I = !1;
        (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.A = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.A = "";
        NG(a);
        return MG(a)
    }

    function NG(a) {
        function b() {
            OG(c, h, k);
            if (l && !m && !k) {
                var n = function(p) {
                    for (var u = 0; u < p.length; u++) Oh(l, p[u], "0px")
                };
                n(PG);
                n(QG)
            }
        }
        var c = a.H;
        c.style.overflow = a.Sa ? "visible" : "hidden";
        a.I && (a.L ? (xG(c, RG), xG(a.L, RG)) : xG(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.O && (c.style.opacity = a.O);
        var d = null != a.F && null != a.A && (a.ta || a.A > a.F) ? a.A : null,
            e = null != a.D && null != a.l && (a.ta || a.l > a.D) ? a.l : null;
        if (a.M)
            for (var f = a.M.length, g =
                    0; g < f; g++) OG(a.M[g], d, e);
        var h = a.A,
            k = a.l,
            l = a.L,
            m = a.P;
        a.I ? B.setTimeout(b, 1E3) : b()
    }

    function SG(a, b) {
        var c = !1;
        "none" == b.display && (BG(a.j, "n"), a.B && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || BG(a.j, "v");
        "hidden" == b.overflow && BG(a.j, "o");
        "absolute" == b.position ? (BG(a.j, "a"), c = !0) : "fixed" == b.position && (BG(a.j, "f"), c = !0);
        return c
    }

    function MG(a) {
        var b = a.U;
        a.K = function() {};
        TG(a, a.H, b);
        var c = a.H.parentElement;
        if (!c) return a.j;
        for (var d = !0, e = null; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Sg(c, b)
            } catch (g) {
                CG(a.j, "c")
            }
            var f = UG(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.P = !0);
            if (d && !f && VG(e)) {
                BG(a.j, "l");
                a.L = c;
                break
            }
            d = d && f;
            if (e && SG(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.Kb) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Mg(b)) {
                        BG(a.j, "c");
                        break
                    }
                } catch (g) {
                    BG(a.j,
                        "c");
                    break
                }
            }
        }
        a.I && a.B && WG(a);
        return a.j
    }

    function XG(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            var d = null;
            try {
                d = Sg(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.C.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.C.boundingClientRect.left ? 2 : 0) | (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function TG(a, b, c) {
        var d = 0;
        if (!b || !b.parentElement) return !0;
        for (var e = !1, f = 0, g = b.parentElement.childNodes, h = 0; h < g.length; h++) {
            var k = g[h];
            k == b ? e = !0 : (k = XG(a, k, c), d |= k, e && (f |= k))
        }
        f & 1 && (d & 2 && AG(a.j, 0, "o"), d & 4 && AG(a.j, 1, "o"));
        return !(d & 1)
    }

    function YG(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = ah(f);
                null == f && (CG(a.j, "n"), AG(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.B)
                        if (a.I) {
                            var k = Math.max(f + h - (g || 0), 0),
                                l = a.K;
                            a.K = function(m, n) {
                                m == b && d.setAttribute(e, k - n);
                                l && l(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else AG(a.j, b, "d")
        }
    }

    function ZG(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? $G(f) : aH(f)) || (f = ch(f), null == f ? BG(a.j, "p") : null != k && BG(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? $G(h) : aH(h)) return;
                h = ch(h);
                null == h && (CG(a.j, "p"), AG(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.B)
                        if (a.I) {
                            var m = Math.max(h + l - (k || 0), 0),
                                n = a.K;
                            a.K = function(p, u) {
                                p == b && (e[g] = m - u + "px");
                                n && n(p, u)
                            }
                        } else e[g] = l + "px"
                } else AG(a.j, b, c)
        }
    }

    function UG(a, b, c, d) {
        var e = null;
        try {
            e = c.style
        } catch (A) {
            CG(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = ah(f),
            h = c.getAttribute("height"),
            k = ah(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = TG(a, c, b);
        var m = d && d.width,
            n = d && d.height,
            p = e && e.width,
            u = e && e.height,
            v = ch(m) == a.F && ch(n) == a.D;
        m = v ? m : p;
        u = v ? n : u;
        p = ch(m);
        v = ch(u);
        g = null !== a.F && (null !== p && a.F >= p || null !== g && a.F >= g);
        v = null !== a.D && (null !== v && a.D >= v || null !== k && a.D >= k);
        k = !b && VG(d);
        v = b || v || k || !(f || m || d && (!$G(String(d.minWidth)) || !aH(String(d.maxWidth))));
        l = b || g || k || l || !(h || u || d && (!$G(String(d.minHeight)) || !aH(String(d.maxHeight))));
        YG(a, 0, v, c, "width", f, a.F, a.A);
        ZG(a, 0, "d", v, e, d, "width", m, a.F, a.A);
        ZG(a, 0, "m", v, e, d, "minWidth", e && e.minWidth, a.F, a.A);
        ZG(a, 0, "M", v, e, d, "maxWidth", e && e.maxWidth, a.F, a.A);
        a.Lb ? (c = /^html|body$/i.test(c.nodeName), f = ch(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, a.B && !c && h && (e.setProperty("height", "auto", "important"), d && !$G(String(d.minHeight)) && e.setProperty("min-height",
            "0px", "important"), d && !aH(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (YG(a, 1, l, c, "height", h, a.D, a.l), ZG(a, 1, "d", l, e, d, "height", u, a.D, a.l), ZG(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.D, a.l), ZG(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.D, a.l));
        return b
    }

    function WG(a) {
        function b() {
            if (0 < c) {
                var l = Sg(e, d) || {},
                    m = ch(l.width);
                l = ch(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else B.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        var c = 31.25,
            d = a.U,
            e = a.H,
            f = a.A,
            g = a.l,
            h = a.K,
            k;
        B.setTimeout(function() {
            k = B.setInterval(b, 16)
        }, 990)
    }

    function HG(a) {
        var b = a && a.ownerDocument,
            c = b && (b.defaultView || b.parentWindow);
        c = c && Pg(c);
        this.j = !!c;
        this.boundingClientRect = null;
        if (a) try {
            this.boundingClientRect = a.getBoundingClientRect()
        } catch (k) {}
        for (var d = a, e = 0, f = this.boundingClientRect; d;) try {
            f && (e += f.top);
            var g = d.ownerDocument,
                h = g && (g.defaultView || g.parentWindow);
            (d = h && h.frameElement) && (f = d.getBoundingClientRect())
        } catch (k) {
            break
        }
        this.l = e;
        c = c || B;
        this.A = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
        b = b && uG(b);
        this.B = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
    }

    function KG(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.B) && (c ? (b = a.l + Math.min(b, JG(a.getHeight())), a = a.j && b >= a.A) : a = a.j && a.l >= a.A, d = a);
        return d
    }
    HG.prototype.isVisible = function() {
        return this.B
    };
    HG.prototype.getWidth = function() {
        return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
    };
    HG.prototype.getHeight = function() {
        return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
    };

    function IG(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return KG(a, c, d)
        }
    }

    function VG(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function bH(a, b, c, d) {
        return LG(new GG(a, b, d, c, null, null, !0))
    }
    var cH = new zG("s", ""),
        FG = RegExp("[lonvafrbpEe]", "g");

    function aH(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function $G(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function OG(a, b, c) {
        null !== b && null !== ah(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== ah(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    for (var PG = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "), QG = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" "), dH = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s", eH = PG, fH = 0; fH < eH.length; fH++) dH += ", " + eH[fH] + " .2s cubic-bezier(.4, 0, 1, 1)";
    eH = QG;
    for (var gH = 0; gH < eH.length; gH++) dH += ", " + eH[gH] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var RG = dH;

    function JG(a) {
        return "string" === typeof a ? ah(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function hH(a, b, c) {
        lG.call(this, a, b);
        this.C = String(c.google_ad_unit_key || "");
        this.B = String(c.google_ad_dom_fingerprint || "");
        this.A = String(c.google_ad_format || "")
    }
    z(hH, lG);
    hH.prototype.ea = function(a) {
        var b = this;
        a["resize-me"] = function(c, d) {
            c = bl(c);
            var e = c.r_chk;
            if (null == e || "" === e) {
                var f = ah(c.r_nw),
                    g = ah(c.r_nh),
                    h = ah(c.r_no);
                null != h || 0 !== f && 0 !== g || (h = 0);
                var k = c.r_str;
                k = k ? k : null;
                var l = h,
                    m = bh(c.r_ao),
                    n = bh(c.r_ifr),
                    p = bh(c.r_cab),
                    u = window;
                if (b.j && u)
                    if ("no_rsz" === k) c.err = "7", iH(b, c, null), f = !0;
                    else if (h = new HG(b.j), h.j) {
                    var v = h.getWidth();
                    null != v && (c.w = v);
                    v = h.getHeight();
                    null != v && (c.h = v);
                    if (IG(h, k, g, p)) {
                        var A = b.j.ownerDocument.getElementById(b.j.id + "_host");
                        v = A ? [b.j] : null;
                        A = A || b.j;
                        var F = W(lp);
                        e = bH(u, A, {
                            width: f,
                            height: g,
                            opacity: l,
                            check: e,
                            ed: k,
                            pd: m,
                            Wf: n,
                            be: F,
                            ee: p
                        }, v);
                        c.r_cui && bh(c.r_cui.toString()) && M(A, {
                            height: (null === g ? 0 : g - 48) + "px",
                            top: "24px"
                        });
                        null != f && (c.nw = f);
                        null != g && (c.nh = g);
                        c.rsz = e.toString();
                        c.abl = DG(e);
                        c.frsz = ("force" === k).toString();
                        c.err = "0";
                        iH(b, c, h);
                        f = !0
                    } else c.err = "1", iH(b, c, h), f = !1
                } else c.err = "3", iH(b, c, null), f = !1;
                else c.err = "2", iH(b, c, null), f = !1;
                nk(d.source, "sth", {
                    msg_type: "resize-result",
                    r_str: k,
                    r_status: f
                }, "*");
                b.j.dataset.googleQueryId || b.j.setAttribute("data-google-query-id",
                    c.qid)
            }
        }
    };

    function jH(a, b, c) {
        var d = {
            scrl: $k(a.l || window),
            adk: a.C,
            adf: a.B,
            fmt: a.A
        };
        b && (d.str = KG(b, ah(c.r_nh), bh(c.r_cab)), d.ad_y = b.l, d.vph = b.A);
        Ug(c, function(e, f) {
            d[f] = e
        });
        return d
    }

    function iH(a, b, c) {
        var d = Bk(String(b.gen204_fraction));
        b = jH(a, c, b);
        b.url = a.l.document.URL;
        ik("resize", b, d)
    }
    hH.prototype.W = function() {
        lG.prototype.W.call(this);
        this.j = null
    };
    var kH = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    var lH = /^blogger$/,
        mH = /^wordpress(.|\s|$)/i,
        nH = /^joomla!/i,
        oH = /^drupal/i,
        pH = /\/wp-content\//,
        qH = /\/wp-content\/plugins\/advanced-ads/,
        rH = /\/wp-content\/themes\/genesis/,
        sH = /\/wp-content\/plugins\/genesis/;

    function tH(a) {
        for (var b = a.getElementsByTagName("script"), c = b.length, d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (qH.test(e)) return 5;
                if (sH.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", rH.test(e) || sH.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (lH.test(f)) return 1;
                if (mH.test(f)) return 2;
                if (nH.test(f)) return 3;
                if (oH.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", pH.test(d))) return 2;
        return 0
    };
    var uH = navigator;

    function vH(a) {
        var b = 1,
            c;
        if (void 0 != a && "" != a)
            for (b = 0, c = a.length - 1; 0 <= c; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = 0 != d ? b ^ d >> 21 : b
            }
        return b
    }

    function wH(a, b) {
        if (!a || "none" == a) return 1;
        a = String(a);
        "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
        return vH(a.toLowerCase())
    }
    var xH = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        yH = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        zH = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");

    function AH() {
        var a = void 0 === a ? B : a;
        var b = new Mq;
        a.SVGElement && a.document.createElementNS && b.set(0);
        var c = hh();
        c["allow-top-navigation-by-user-activation"] && b.set(1);
        c["allow-popups-to-escape-sandbox"] && b.set(2);
        a.crypto && a.crypto.subtle && b.set(3);
        a.TextDecoder && a.TextEncoder && b.set(4);
        return Nq(b)
    };
    var BH = x(["https://adservice.google.com/adsid/integrator.", ""]),
        CH = x(["https://adservice.google.ad/adsid/integrator.", ""]),
        DH = x(["https://adservice.google.ae/adsid/integrator.", ""]),
        EH = x(["https://adservice.google.com.af/adsid/integrator.", ""]),
        FH = x(["https://adservice.google.com.ag/adsid/integrator.", ""]),
        GH = x(["https://adservice.google.com.ai/adsid/integrator.", ""]),
        HH = x(["https://adservice.google.al/adsid/integrator.", ""]),
        IH = x(["https://adservice.google.co.ao/adsid/integrator.", ""]),
        JH = x(["https://adservice.google.com.ar/adsid/integrator.",
            ""
        ]),
        KH = x(["https://adservice.google.as/adsid/integrator.", ""]),
        LH = x(["https://adservice.google.at/adsid/integrator.", ""]),
        MH = x(["https://adservice.google.com.au/adsid/integrator.", ""]),
        NH = x(["https://adservice.google.az/adsid/integrator.", ""]),
        OH = x(["https://adservice.google.com.bd/adsid/integrator.", ""]),
        PH = x(["https://adservice.google.be/adsid/integrator.", ""]),
        QH = x(["https://adservice.google.bf/adsid/integrator.", ""]),
        RH = x(["https://adservice.google.bg/adsid/integrator.", ""]),
        SH = x(["https://adservice.google.com.bh/adsid/integrator.",
            ""
        ]),
        TH = x(["https://adservice.google.bi/adsid/integrator.", ""]),
        UH = x(["https://adservice.google.bj/adsid/integrator.", ""]),
        VH = x(["https://adservice.google.com.bn/adsid/integrator.", ""]),
        WH = x(["https://adservice.google.com.bo/adsid/integrator.", ""]),
        XH = x(["https://adservice.google.com.br/adsid/integrator.", ""]),
        YH = x(["https://adservice.google.bs/adsid/integrator.", ""]),
        ZH = x(["https://adservice.google.bt/adsid/integrator.", ""]),
        $H = x(["https://adservice.google.co.bw/adsid/integrator.", ""]),
        aI = x(["https://adservice.google.com.bz/adsid/integrator.",
            ""
        ]),
        bI = x(["https://adservice.google.ca/adsid/integrator.", ""]),
        cI = x(["https://adservice.google.cd/adsid/integrator.", ""]),
        dI = x(["https://adservice.google.cf/adsid/integrator.", ""]),
        eI = x(["https://adservice.google.cg/adsid/integrator.", ""]),
        fI = x(["https://adservice.google.ch/adsid/integrator.", ""]),
        gI = x(["https://adservice.google.ci/adsid/integrator.", ""]),
        hI = x(["https://adservice.google.co.ck/adsid/integrator.", ""]),
        iI = x(["https://adservice.google.cl/adsid/integrator.", ""]),
        jI = x(["https://adservice.google.cm/adsid/integrator.",
            ""
        ]),
        kI = x(["https://adservice.google.com.co/adsid/integrator.", ""]),
        lI = x(["https://adservice.google.co.cr/adsid/integrator.", ""]),
        mI = x(["https://adservice.google.com.cu/adsid/integrator.", ""]),
        nI = x(["https://adservice.google.cv/adsid/integrator.", ""]),
        oI = x(["https://adservice.google.com.cy/adsid/integrator.", ""]),
        pI = x(["https://adservice.google.cz/adsid/integrator.", ""]),
        qI = x(["https://adservice.google.de/adsid/integrator.", ""]),
        rI = x(["https://adservice.google.dj/adsid/integrator.", ""]),
        sI = x(["https://adservice.google.dk/adsid/integrator.",
            ""
        ]),
        tI = x(["https://adservice.google.dm/adsid/integrator.", ""]),
        uI = x(["https://adservice.google.dz/adsid/integrator.", ""]),
        vI = x(["https://adservice.google.com.ec/adsid/integrator.", ""]),
        wI = x(["https://adservice.google.ee/adsid/integrator.", ""]),
        xI = x(["https://adservice.google.com.eg/adsid/integrator.", ""]),
        yI = x(["https://adservice.google.es/adsid/integrator.", ""]),
        zI = x(["https://adservice.google.com.et/adsid/integrator.", ""]),
        AI = x(["https://adservice.google.fi/adsid/integrator.", ""]),
        BI = x(["https://adservice.google.com.fj/adsid/integrator.",
            ""
        ]),
        CI = x(["https://adservice.google.fm/adsid/integrator.", ""]),
        DI = x(["https://adservice.google.fr/adsid/integrator.", ""]),
        EI = x(["https://adservice.google.ga/adsid/integrator.", ""]),
        FI = x(["https://adservice.google.ge/adsid/integrator.", ""]),
        GI = x(["https://adservice.google.gg/adsid/integrator.", ""]),
        HI = x(["https://adservice.google.com.gh/adsid/integrator.", ""]),
        II = x(["https://adservice.google.com.gi/adsid/integrator.", ""]),
        JI = x(["https://adservice.google.gl/adsid/integrator.", ""]),
        KI = x(["https://adservice.google.gm/adsid/integrator.",
            ""
        ]),
        LI = x(["https://adservice.google.gr/adsid/integrator.", ""]),
        MI = x(["https://adservice.google.com.gt/adsid/integrator.", ""]),
        NI = x(["https://adservice.google.gy/adsid/integrator.", ""]),
        OI = x(["https://adservice.google.com.hk/adsid/integrator.", ""]),
        PI = x(["https://adservice.google.hn/adsid/integrator.", ""]),
        QI = x(["https://adservice.google.hr/adsid/integrator.", ""]),
        RI = x(["https://adservice.google.ht/adsid/integrator.", ""]),
        SI = x(["https://adservice.google.hu/adsid/integrator.", ""]),
        TI = x(["https://adservice.google.co.id/adsid/integrator.",
            ""
        ]),
        UI = x(["https://adservice.google.ie/adsid/integrator.", ""]),
        VI = x(["https://adservice.google.co.il/adsid/integrator.", ""]),
        WI = x(["https://adservice.google.im/adsid/integrator.", ""]),
        XI = x(["https://adservice.google.co.in/adsid/integrator.", ""]),
        YI = x(["https://adservice.google.iq/adsid/integrator.", ""]),
        ZI = x(["https://adservice.google.is/adsid/integrator.", ""]),
        $I = x(["https://adservice.google.it/adsid/integrator.", ""]),
        aJ = x(["https://adservice.google.je/adsid/integrator.", ""]),
        bJ = x(["https://adservice.google.com.jm/adsid/integrator.",
            ""
        ]),
        cJ = x(["https://adservice.google.jo/adsid/integrator.", ""]),
        dJ = x(["https://adservice.google.co.jp/adsid/integrator.", ""]),
        eJ = x(["https://adservice.google.co.ke/adsid/integrator.", ""]),
        fJ = x(["https://adservice.google.com.kh/adsid/integrator.", ""]),
        gJ = x(["https://adservice.google.ki/adsid/integrator.", ""]),
        hJ = x(["https://adservice.google.kg/adsid/integrator.", ""]),
        iJ = x(["https://adservice.google.co.kr/adsid/integrator.", ""]),
        jJ = x(["https://adservice.google.com.kw/adsid/integrator.", ""]),
        kJ = x(["https://adservice.google.kz/adsid/integrator.",
            ""
        ]),
        lJ = x(["https://adservice.google.la/adsid/integrator.", ""]),
        mJ = x(["https://adservice.google.com.lb/adsid/integrator.", ""]),
        nJ = x(["https://adservice.google.li/adsid/integrator.", ""]),
        oJ = x(["https://adservice.google.lk/adsid/integrator.", ""]),
        pJ = x(["https://adservice.google.co.ls/adsid/integrator.", ""]),
        qJ = x(["https://adservice.google.lt/adsid/integrator.", ""]),
        rJ = x(["https://adservice.google.lu/adsid/integrator.", ""]),
        sJ = x(["https://adservice.google.lv/adsid/integrator.", ""]),
        tJ = x(["https://adservice.google.com.ly/adsid/integrator.",
            ""
        ]),
        uJ = x(["https://adservice.google.md/adsid/integrator.", ""]),
        vJ = x(["https://adservice.google.me/adsid/integrator.", ""]),
        wJ = x(["https://adservice.google.mg/adsid/integrator.", ""]),
        xJ = x(["https://adservice.google.mk/adsid/integrator.", ""]),
        yJ = x(["https://adservice.google.ml/adsid/integrator.", ""]),
        zJ = x(["https://adservice.google.com.mm/adsid/integrator.", ""]),
        AJ = x(["https://adservice.google.mn/adsid/integrator.", ""]),
        BJ = x(["https://adservice.google.ms/adsid/integrator.", ""]),
        CJ = x(["https://adservice.google.com.mt/adsid/integrator.",
            ""
        ]),
        DJ = x(["https://adservice.google.mu/adsid/integrator.", ""]),
        EJ = x(["https://adservice.google.mv/adsid/integrator.", ""]),
        FJ = x(["https://adservice.google.mw/adsid/integrator.", ""]),
        GJ = x(["https://adservice.google.com.mx/adsid/integrator.", ""]),
        HJ = x(["https://adservice.google.com.my/adsid/integrator.", ""]),
        IJ = x(["https://adservice.google.co.mz/adsid/integrator.", ""]),
        JJ = x(["https://adservice.google.com.na/adsid/integrator.", ""]),
        KJ = x(["https://adservice.google.com.ng/adsid/integrator.", ""]),
        LJ = x(["https://adservice.google.com.ni/adsid/integrator.",
            ""
        ]),
        MJ = x(["https://adservice.google.ne/adsid/integrator.", ""]),
        NJ = x(["https://adservice.google.nl/adsid/integrator.", ""]),
        OJ = x(["https://adservice.google.no/adsid/integrator.", ""]),
        PJ = x(["https://adservice.google.com.np/adsid/integrator.", ""]),
        QJ = x(["https://adservice.google.nr/adsid/integrator.", ""]),
        RJ = x(["https://adservice.google.nu/adsid/integrator.", ""]),
        SJ = x(["https://adservice.google.co.nz/adsid/integrator.", ""]),
        TJ = x(["https://adservice.google.com.om/adsid/integrator.", ""]),
        UJ = x(["https://adservice.google.com.pa/adsid/integrator.",
            ""
        ]),
        VJ = x(["https://adservice.google.com.pe/adsid/integrator.", ""]),
        WJ = x(["https://adservice.google.com.pg/adsid/integrator.", ""]),
        XJ = x(["https://adservice.google.com.ph/adsid/integrator.", ""]),
        YJ = x(["https://adservice.google.com.pk/adsid/integrator.", ""]),
        ZJ = x(["https://adservice.google.pl/adsid/integrator.", ""]),
        $J = x(["https://adservice.google.pn/adsid/integrator.", ""]),
        aK = x(["https://adservice.google.com.pr/adsid/integrator.", ""]),
        bK = x(["https://adservice.google.ps/adsid/integrator.", ""]),
        cK = x(["https://adservice.google.pt/adsid/integrator.",
            ""
        ]),
        dK = x(["https://adservice.google.com.py/adsid/integrator.", ""]),
        eK = x(["https://adservice.google.com.qa/adsid/integrator.", ""]),
        fK = x(["https://adservice.google.ro/adsid/integrator.", ""]),
        gK = x(["https://adservice.google.ru/adsid/integrator.", ""]),
        hK = x(["https://adservice.google.rw/adsid/integrator.", ""]),
        iK = x(["https://adservice.google.com.sa/adsid/integrator.", ""]),
        jK = x(["https://adservice.google.com.sb/adsid/integrator.", ""]),
        kK = x(["https://adservice.google.sc/adsid/integrator.", ""]),
        lK = x(["https://adservice.google.se/adsid/integrator.",
            ""
        ]),
        mK = x(["https://adservice.google.com.sg/adsid/integrator.", ""]),
        nK = x(["https://adservice.google.sh/adsid/integrator.", ""]),
        oK = x(["https://adservice.google.si/adsid/integrator.", ""]),
        pK = x(["https://adservice.google.sk/adsid/integrator.", ""]),
        qK = x(["https://adservice.google.sn/adsid/integrator.", ""]),
        rK = x(["https://adservice.google.so/adsid/integrator.", ""]),
        sK = x(["https://adservice.google.sm/adsid/integrator.", ""]),
        tK = x(["https://adservice.google.sr/adsid/integrator.", ""]),
        uK = x(["https://adservice.google.st/adsid/integrator.",
            ""
        ]),
        vK = x(["https://adservice.google.com.sv/adsid/integrator.", ""]),
        wK = x(["https://adservice.google.td/adsid/integrator.", ""]),
        xK = x(["https://adservice.google.tg/adsid/integrator.", ""]),
        yK = x(["https://adservice.google.co.th/adsid/integrator.", ""]),
        zK = x(["https://adservice.google.com.tj/adsid/integrator.", ""]),
        AK = x(["https://adservice.google.tl/adsid/integrator.", ""]),
        BK = x(["https://adservice.google.tm/adsid/integrator.", ""]),
        CK = x(["https://adservice.google.tn/adsid/integrator.", ""]),
        DK = x(["https://adservice.google.to/adsid/integrator.",
            ""
        ]),
        EK = x(["https://adservice.google.com.tr/adsid/integrator.", ""]),
        FK = x(["https://adservice.google.tt/adsid/integrator.", ""]),
        GK = x(["https://adservice.google.com.tw/adsid/integrator.", ""]),
        HK = x(["https://adservice.google.co.tz/adsid/integrator.", ""]),
        IK = x(["https://adservice.google.com.ua/adsid/integrator.", ""]),
        JK = x(["https://adservice.google.co.ug/adsid/integrator.", ""]),
        KK = x(["https://adservice.google.co.uk/adsid/integrator.", ""]),
        LK = x(["https://adservice.google.com.uy/adsid/integrator.", ""]),
        MK = x(["https://adservice.google.co.uz/adsid/integrator.", ""]),
        NK = x(["https://adservice.google.com.vc/adsid/integrator.", ""]),
        OK = x(["https://adservice.google.co.ve/adsid/integrator.", ""]),
        PK = x(["https://adservice.google.vg/adsid/integrator.", ""]),
        QK = x(["https://adservice.google.co.vi/adsid/integrator.", ""]),
        RK = x(["https://adservice.google.com.vn/adsid/integrator.", ""]),
        SK = x(["https://adservice.google.vu/adsid/integrator.", ""]),
        TK = x(["https://adservice.google.ws/adsid/integrator.", ""]),
        UK = x(["https://adservice.google.rs/adsid/integrator.",
            ""
        ]),
        VK = x(["https://adservice.google.co.za/adsid/integrator.", ""]),
        WK = x(["https://adservice.google.co.zm/adsid/integrator.", ""]),
        XK = x(["https://adservice.google.co.zw/adsid/integrator.", ""]),
        YK = x(["https://adservice.google.cat/adsid/integrator.", ""]),
        ZK = new r.Map([
            [".google.com", function(a) {
                return R(BH, a)
            }],
            [".google.ad", function(a) {
                return R(CH, a)
            }],
            [".google.ae", function(a) {
                return R(DH, a)
            }],
            [".google.com.af", function(a) {
                return R(EH, a)
            }],
            [".google.com.ag", function(a) {
                return R(FH, a)
            }],
            [".google.com.ai",
                function(a) {
                    return R(GH, a)
                }
            ],
            [".google.al", function(a) {
                return R(HH, a)
            }],
            [".google.co.ao", function(a) {
                return R(IH, a)
            }],
            [".google.com.ar", function(a) {
                return R(JH, a)
            }],
            [".google.as", function(a) {
                return R(KH, a)
            }],
            [".google.at", function(a) {
                return R(LH, a)
            }],
            [".google.com.au", function(a) {
                return R(MH, a)
            }],
            [".google.az", function(a) {
                return R(NH, a)
            }],
            [".google.com.bd", function(a) {
                return R(OH, a)
            }],
            [".google.be", function(a) {
                return R(PH, a)
            }],
            [".google.bf", function(a) {
                return R(QH, a)
            }],
            [".google.bg", function(a) {
                return R(RH,
                    a)
            }],
            [".google.com.bh", function(a) {
                return R(SH, a)
            }],
            [".google.bi", function(a) {
                return R(TH, a)
            }],
            [".google.bj", function(a) {
                return R(UH, a)
            }],
            [".google.com.bn", function(a) {
                return R(VH, a)
            }],
            [".google.com.bo", function(a) {
                return R(WH, a)
            }],
            [".google.com.br", function(a) {
                return R(XH, a)
            }],
            [".google.bs", function(a) {
                return R(YH, a)
            }],
            [".google.bt", function(a) {
                return R(ZH, a)
            }],
            [".google.co.bw", function(a) {
                return R($H, a)
            }],
            [".google.com.bz", function(a) {
                return R(aI, a)
            }],
            [".google.ca", function(a) {
                return R(bI, a)
            }],
            [".google.cd", function(a) {
                return R(cI, a)
            }],
            [".google.cf", function(a) {
                return R(dI, a)
            }],
            [".google.cg", function(a) {
                return R(eI, a)
            }],
            [".google.ch", function(a) {
                return R(fI, a)
            }],
            [".google.ci", function(a) {
                return R(gI, a)
            }],
            [".google.co.ck", function(a) {
                return R(hI, a)
            }],
            [".google.cl", function(a) {
                return R(iI, a)
            }],
            [".google.cm", function(a) {
                return R(jI, a)
            }],
            [".google.com.co", function(a) {
                return R(kI, a)
            }],
            [".google.co.cr", function(a) {
                return R(lI, a)
            }],
            [".google.com.cu", function(a) {
                return R(mI, a)
            }],
            [".google.cv",
                function(a) {
                    return R(nI, a)
                }
            ],
            [".google.com.cy", function(a) {
                return R(oI, a)
            }],
            [".google.cz", function(a) {
                return R(pI, a)
            }],
            [".google.de", function(a) {
                return R(qI, a)
            }],
            [".google.dj", function(a) {
                return R(rI, a)
            }],
            [".google.dk", function(a) {
                return R(sI, a)
            }],
            [".google.dm", function(a) {
                return R(tI, a)
            }],
            [".google.dz", function(a) {
                return R(uI, a)
            }],
            [".google.com.ec", function(a) {
                return R(vI, a)
            }],
            [".google.ee", function(a) {
                return R(wI, a)
            }],
            [".google.com.eg", function(a) {
                return R(xI, a)
            }],
            [".google.es", function(a) {
                return R(yI,
                    a)
            }],
            [".google.com.et", function(a) {
                return R(zI, a)
            }],
            [".google.fi", function(a) {
                return R(AI, a)
            }],
            [".google.com.fj", function(a) {
                return R(BI, a)
            }],
            [".google.fm", function(a) {
                return R(CI, a)
            }],
            [".google.fr", function(a) {
                return R(DI, a)
            }],
            [".google.ga", function(a) {
                return R(EI, a)
            }],
            [".google.ge", function(a) {
                return R(FI, a)
            }],
            [".google.gg", function(a) {
                return R(GI, a)
            }],
            [".google.com.gh", function(a) {
                return R(HI, a)
            }],
            [".google.com.gi", function(a) {
                return R(II, a)
            }],
            [".google.gl", function(a) {
                return R(JI, a)
            }],
            [".google.gm",
                function(a) {
                    return R(KI, a)
                }
            ],
            [".google.gr", function(a) {
                return R(LI, a)
            }],
            [".google.com.gt", function(a) {
                return R(MI, a)
            }],
            [".google.gy", function(a) {
                return R(NI, a)
            }],
            [".google.com.hk", function(a) {
                return R(OI, a)
            }],
            [".google.hn", function(a) {
                return R(PI, a)
            }],
            [".google.hr", function(a) {
                return R(QI, a)
            }],
            [".google.ht", function(a) {
                return R(RI, a)
            }],
            [".google.hu", function(a) {
                return R(SI, a)
            }],
            [".google.co.id", function(a) {
                return R(TI, a)
            }],
            [".google.ie", function(a) {
                return R(UI, a)
            }],
            [".google.co.il", function(a) {
                return R(VI,
                    a)
            }],
            [".google.im", function(a) {
                return R(WI, a)
            }],
            [".google.co.in", function(a) {
                return R(XI, a)
            }],
            [".google.iq", function(a) {
                return R(YI, a)
            }],
            [".google.is", function(a) {
                return R(ZI, a)
            }],
            [".google.it", function(a) {
                return R($I, a)
            }],
            [".google.je", function(a) {
                return R(aJ, a)
            }],
            [".google.com.jm", function(a) {
                return R(bJ, a)
            }],
            [".google.jo", function(a) {
                return R(cJ, a)
            }],
            [".google.co.jp", function(a) {
                return R(dJ, a)
            }],
            [".google.co.ke", function(a) {
                return R(eJ, a)
            }],
            [".google.com.kh", function(a) {
                return R(fJ, a)
            }],
            [".google.ki",
                function(a) {
                    return R(gJ, a)
                }
            ],
            [".google.kg", function(a) {
                return R(hJ, a)
            }],
            [".google.co.kr", function(a) {
                return R(iJ, a)
            }],
            [".google.com.kw", function(a) {
                return R(jJ, a)
            }],
            [".google.kz", function(a) {
                return R(kJ, a)
            }],
            [".google.la", function(a) {
                return R(lJ, a)
            }],
            [".google.com.lb", function(a) {
                return R(mJ, a)
            }],
            [".google.li", function(a) {
                return R(nJ, a)
            }],
            [".google.lk", function(a) {
                return R(oJ, a)
            }],
            [".google.co.ls", function(a) {
                return R(pJ, a)
            }],
            [".google.lt", function(a) {
                return R(qJ, a)
            }],
            [".google.lu", function(a) {
                return R(rJ,
                    a)
            }],
            [".google.lv", function(a) {
                return R(sJ, a)
            }],
            [".google.com.ly", function(a) {
                return R(tJ, a)
            }],
            [".google.md", function(a) {
                return R(uJ, a)
            }],
            [".google.me", function(a) {
                return R(vJ, a)
            }],
            [".google.mg", function(a) {
                return R(wJ, a)
            }],
            [".google.mk", function(a) {
                return R(xJ, a)
            }],
            [".google.ml", function(a) {
                return R(yJ, a)
            }],
            [".google.com.mm", function(a) {
                return R(zJ, a)
            }],
            [".google.mn", function(a) {
                return R(AJ, a)
            }],
            [".google.ms", function(a) {
                return R(BJ, a)
            }],
            [".google.com.mt", function(a) {
                return R(CJ, a)
            }],
            [".google.mu",
                function(a) {
                    return R(DJ, a)
                }
            ],
            [".google.mv", function(a) {
                return R(EJ, a)
            }],
            [".google.mw", function(a) {
                return R(FJ, a)
            }],
            [".google.com.mx", function(a) {
                return R(GJ, a)
            }],
            [".google.com.my", function(a) {
                return R(HJ, a)
            }],
            [".google.co.mz", function(a) {
                return R(IJ, a)
            }],
            [".google.com.na", function(a) {
                return R(JJ, a)
            }],
            [".google.com.ng", function(a) {
                return R(KJ, a)
            }],
            [".google.com.ni", function(a) {
                return R(LJ, a)
            }],
            [".google.ne", function(a) {
                return R(MJ, a)
            }],
            [".google.nl", function(a) {
                return R(NJ, a)
            }],
            [".google.no", function(a) {
                return R(OJ,
                    a)
            }],
            [".google.com.np", function(a) {
                return R(PJ, a)
            }],
            [".google.nr", function(a) {
                return R(QJ, a)
            }],
            [".google.nu", function(a) {
                return R(RJ, a)
            }],
            [".google.co.nz", function(a) {
                return R(SJ, a)
            }],
            [".google.com.om", function(a) {
                return R(TJ, a)
            }],
            [".google.com.pa", function(a) {
                return R(UJ, a)
            }],
            [".google.com.pe", function(a) {
                return R(VJ, a)
            }],
            [".google.com.pg", function(a) {
                return R(WJ, a)
            }],
            [".google.com.ph", function(a) {
                return R(XJ, a)
            }],
            [".google.com.pk", function(a) {
                return R(YJ, a)
            }],
            [".google.pl", function(a) {
                return R(ZJ,
                    a)
            }],
            [".google.pn", function(a) {
                return R($J, a)
            }],
            [".google.com.pr", function(a) {
                return R(aK, a)
            }],
            [".google.ps", function(a) {
                return R(bK, a)
            }],
            [".google.pt", function(a) {
                return R(cK, a)
            }],
            [".google.com.py", function(a) {
                return R(dK, a)
            }],
            [".google.com.qa", function(a) {
                return R(eK, a)
            }],
            [".google.ro", function(a) {
                return R(fK, a)
            }],
            [".google.ru", function(a) {
                return R(gK, a)
            }],
            [".google.rw", function(a) {
                return R(hK, a)
            }],
            [".google.com.sa", function(a) {
                return R(iK, a)
            }],
            [".google.com.sb", function(a) {
                return R(jK, a)
            }],
            [".google.sc",
                function(a) {
                    return R(kK, a)
                }
            ],
            [".google.se", function(a) {
                return R(lK, a)
            }],
            [".google.com.sg", function(a) {
                return R(mK, a)
            }],
            [".google.sh", function(a) {
                return R(nK, a)
            }],
            [".google.si", function(a) {
                return R(oK, a)
            }],
            [".google.sk", function(a) {
                return R(pK, a)
            }],
            [".google.sn", function(a) {
                return R(qK, a)
            }],
            [".google.so", function(a) {
                return R(rK, a)
            }],
            [".google.sm", function(a) {
                return R(sK, a)
            }],
            [".google.sr", function(a) {
                return R(tK, a)
            }],
            [".google.st", function(a) {
                return R(uK, a)
            }],
            [".google.com.sv", function(a) {
                return R(vK,
                    a)
            }],
            [".google.td", function(a) {
                return R(wK, a)
            }],
            [".google.tg", function(a) {
                return R(xK, a)
            }],
            [".google.co.th", function(a) {
                return R(yK, a)
            }],
            [".google.com.tj", function(a) {
                return R(zK, a)
            }],
            [".google.tl", function(a) {
                return R(AK, a)
            }],
            [".google.tm", function(a) {
                return R(BK, a)
            }],
            [".google.tn", function(a) {
                return R(CK, a)
            }],
            [".google.to", function(a) {
                return R(DK, a)
            }],
            [".google.com.tr", function(a) {
                return R(EK, a)
            }],
            [".google.tt", function(a) {
                return R(FK, a)
            }],
            [".google.com.tw", function(a) {
                return R(GK, a)
            }],
            [".google.co.tz",
                function(a) {
                    return R(HK, a)
                }
            ],
            [".google.com.ua", function(a) {
                return R(IK, a)
            }],
            [".google.co.ug", function(a) {
                return R(JK, a)
            }],
            [".google.co.uk", function(a) {
                return R(KK, a)
            }],
            [".google.com.uy", function(a) {
                return R(LK, a)
            }],
            [".google.co.uz", function(a) {
                return R(MK, a)
            }],
            [".google.com.vc", function(a) {
                return R(NK, a)
            }],
            [".google.co.ve", function(a) {
                return R(OK, a)
            }],
            [".google.vg", function(a) {
                return R(PK, a)
            }],
            [".google.co.vi", function(a) {
                return R(QK, a)
            }],
            [".google.com.vn", function(a) {
                return R(RK, a)
            }],
            [".google.vu",
                function(a) {
                    return R(SK, a)
                }
            ],
            [".google.ws", function(a) {
                return R(TK, a)
            }],
            [".google.rs", function(a) {
                return R(UK, a)
            }],
            [".google.co.za", function(a) {
                return R(VK, a)
            }],
            [".google.co.zm", function(a) {
                return R(WK, a)
            }],
            [".google.co.zw", function(a) {
                return R(XK, a)
            }],
            [".google.cat", function(a) {
                return R(YK, a)
            }]
        ].map(function(a) {
            var b = y(a);
            a = b.next().value;
            b = b.next().value;
            var c = {};
            return [a, (c.json = b("json"), c.js = b("js"), c["sync.js"] = b("sync.js"), c)]
        }));

    function $K(a, b, c) {
        var d = Rg("LINK", a);
        try {
            if (d.rel = "preload", sb("preload", "stylesheet")) {
                d.href = me(b).toString();
                var e = eg('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                e && d.setAttribute("nonce", e)
            } else {
                if (b instanceof ie) var f = me(b).toString();
                else {
                    if (b instanceof te) var g = ve(b);
                    else {
                        if (b instanceof te) var h = b;
                        else b = "object" == typeof b && b.ra ? b.ma() : String(b), xe.test(b) || (b = "about:invalid#zClosurez"), h = new te(b, ue);
                        g = ve(h)
                    }
                    f = g
                }
                d.href = f
            }
        } catch (k) {
            return
        }
        d.as =
            "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (k) {}
    };
    var aL = B;

    function bL(a) {
        var b = new r.Map([
            ["domain", B.location.hostname]
        ]);
        cL[3] >= Za() && b.set("adsid", cL[1]);
        return Lh(ZK.get(a).js, b)
    }
    var cL, dL;

    function eL() {
        aL = B;
        cL = aL.googleToken = aL.googleToken || {};
        var a = Za();
        cL[1] && cL[3] > a && 0 < cL[2] || (cL[1] = "", cL[2] = -1, cL[3] = -1, cL[4] = "", cL[6] = "");
        dL = aL.googleIMState = aL.googleIMState || {};
        ZK.has(dL[1]) || (dL[1] = ".google.com");
        Array.isArray(dL[5]) || (dL[5] = []);
        "boolean" !== typeof dL[6] && (dL[6] = !1);
        Array.isArray(dL[7]) || (dL[7] = []);
        "number" !== typeof dL[8] && (dL[8] = 0)
    }

    function fL(a) {
        eL();
        ZK.has(a) && (dL[1] = a)
    }
    var gL = {
        Nc: function() {
            return 0 < dL[8]
        },
        Tf: function() {
            dL[8]++
        },
        Uf: function() {
            0 < dL[8] && dL[8]--
        },
        Vf: function() {
            dL[8] = 0
        },
        fk: function() {
            return !1
        },
        Id: function() {
            return dL[5]
        },
        sd: function(a) {
            try {
                a()
            } catch (b) {
                B.setTimeout(function() {
                    throw b;
                }, 0)
            }
        },
        ae: function() {
            if (!gL.Nc()) {
                var a = B.document,
                    b = function(e) {
                        e = bL(e);
                        a: {
                            try {
                                var f = eg("script[nonce]");
                                break a
                            } catch (g) {}
                            f = void 0
                        }
                        $K(a, e.toString(), f);
                        f = Rg("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = function() {
                            return B.processGoogleToken({}, 2)
                        };
                        nf(f, e);
                        try {
                            (a.head ||
                                a.body || a.documentElement).appendChild(f), gL.Tf()
                        } catch (g) {}
                    },
                    c = dL[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT", b);
                B.setTimeout(function() {
                    return B.processGoogleToken(d, 1)
                }, 1E3)
            }
        }
    };

    function hL(a) {
        eL();
        var b = aL.googleToken[5] || 0;
        a && (0 != b || cL[3] >= Za() ? gL.sd(a) : (gL.Id().push(a), gL.ae()));
        cL[3] >= Za() && cL[2] >= Za() || gL.ae()
    }

    function iL(a) {
        B.processGoogleToken = B.processGoogleToken || function(b, c) {
            var d = b;
            d = void 0 === d ? {} : d;
            c = void 0 === c ? 0 : c;
            b = d.newToken || "";
            var e = "NT" == b,
                f = parseInt(d.freshLifetimeSecs || "", 10),
                g = parseInt(d.validLifetimeSecs || "", 10),
                h = d["1p_jar"] || "";
            d = d.pucrd || "";
            eL();
            1 == c ? gL.Vf() : gL.Uf();
            var k = aL.googleToken = aL.googleToken || {},
                l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
            e = e && !gL.Nc() && (!(cL[3] >= Za()) || "NT" == cL[1]);
            var m = !(cL[3] >= Za()) && 0 != c;
            if (l || e || m) e = Za(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && zi(B, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, eL();
            if (l || !gL.Nc()) {
                c = gL.Id();
                for (b = 0; b < c.length; b++) gL.sd(c[b]);
                c.length = 0
            }
        };
        hL(a)
    };
    var jL = new r.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        kL = new r.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function lL(a) {
        try {
            var b, c, d = null == (b = a.performance) ? void 0 : null == (c = b.getEntriesByType("navigation")) ? void 0 : c[0];
            if (null == d ? 0 : d.type) {
                var e;
                return null != (e = jL.get(d.type)) ? e : null
            }
        } catch (k) {}
        var f, g, h;
        return null != (h = kL.get(null == (f = a.performance) ? void 0 : null == (g = f.navigation) ? void 0 : g.type)) ? h : null
    };
    var mL = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        nL = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function oL(a, b, c) {
        T.call(this);
        var d = this;
        this.l = a;
        this.j = [];
        b && pL() && this.j.push(mL);
        c && this.j.push(nL);
        if (document.hasTrustToken && !W(tq)) {
            var e = new r.Map;
            this.j.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.l ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof r.Map ? new r.Map([].concat(ma(e), ma(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof r.Map ||
                (window.goog_tt_promise_map = new r.Map)
        }
    }
    z(oL, T);

    function pL() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function qL() {
        var a = window;
        a = void 0 === a ? window : a;
        return !a.PeriodicSyncManager
    }

    function rL(a, b, c) {
        a = a.goog_tt_state_map;
        var d, e = [];
        b && (d = null == a ? void 0 : a.get(mL.issuerOrigin)) && e.push(d);
        c && (d = null == a ? void 0 : a.get(nL.issuerOrigin)) && e.push(d);
        return e
    }

    function sL(a) {
        return W(wq) ? !0 : a.some(function(b) {
            return b.hasRedemptionRecord
        })
    }

    function tL(a, b, c) {
        return b || ".google.ch" === c || "function" === typeof a.__tcfapi
    }

    function uL(a, b) {
        a = W(wq) ? a.filter(function(c) {
            return 12 !== c.state
        }).map(function(c) {
            return c.issuerOrigin
        }) : a.filter(function(c) {
            return c.hasRedemptionRecord
        }).map(function(c) {
            return c.issuerOrigin
        });
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: W(wq) ? "omit" : "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        !W(wq) && b && 0 < t(Object, "keys").call(Object, b).length && (a.additionalSigningData = rc(JSON.stringify(b)));
        return a
    }

    function vL(a, b, c) {
        var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function wL() {
        var a = mL.issuerOrigin + mL.redemptionPath,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: mL.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        vL(mL.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            vL(mL.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? vL(mL.issuerOrigin, 6, !0) : vL(mL.issuerOrigin, 5)
        })
    }

    function xL() {
        var a = mL.issuerOrigin + mL.issuancePath;
        vL(mL.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok) throw Error(b.status + ": Network response was not ok!");
            vL(mL.issuerOrigin, 10);
            return wL()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name) return vL(mL.issuerOrigin, 10), wL();
            vL(mL.issuerOrigin, 9)
        })
    }

    function yL() {
        vL(mL.issuerOrigin, 13);
        return document.hasTrustToken(mL.issuerOrigin).then(function(a) {
            return a ? wL() : xL()
        })
    }

    function zL() {
        vL(nL.issuerOrigin, 13);
        if (r.Promise) {
            var a = document.hasTrustToken(nL.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return r.Promise.reject({
                        state: 19,
                        error: e
                    })
                }),
                b = nL.issuerOrigin + nL.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            vL(nL.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    vL(nL.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f &&
                        "NoModificationAllowedError" === f.name) vL(nL.issuerOrigin, 18, !0);
                    else {
                        if (e) return r.Promise.reject({
                            state: 17,
                            error: f
                        });
                        vL(nL.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(nL.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return r.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = nL.issuerOrigin + nL.getStatePath;
                vL(nL.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [nL.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status +
                        ": Network response was not ok!");
                    vL(nL.issuerOrigin, 22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function(g) {
                    return r.Promise.reject({
                        state: 21,
                        error: g
                    })
                })
            });
            var d = th(window);
            return a.then(function(e) {
                var f = nL.issuerOrigin + nL.issuancePath;
                return e && e.srqt && e.cs ? (vL(nL.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    vL(nL.issuerOrigin,
                        25);
                    return e
                }).catch(function(g) {
                    return r.Promise.reject({
                        state: 24,
                        error: g
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs) return vL(nL.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    vL(nL.issuerOrigin, 28, !0)
                }).catch(function(f) {
                    return r.Promise.reject({
                        state: 27,
                        error: f
                    })
                })
            }).then(function() {
                vL(nL.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        vL(nL.issuerOrigin, e.state);
                        var f = X(vq);
                        Math.random() <= f && Bi({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function AL(a) {
        if (document.hasTrustToken && !W(tq) && a.l) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof r.Map) {
                var c = [];
                if (a.j.some(function(e) {
                        return e.issuerOrigin === mL.issuerOrigin
                    })) {
                    var d = b.get(mL.issuerOrigin);
                    d || (d = yL(), b.set(mL.issuerOrigin, d));
                    c.push(d)
                }
                a.j.some(function(e) {
                    return e.issuerOrigin === nL.issuerOrigin
                }) && (a = b.get(nL.issuerOrigin), a || (a = zL(), b.set(nL.issuerOrigin, a)), c.push(a));
                if (0 < c.length && r.Promise && r.Promise.all) return r.Promise.all(c)
            }
        }
    };

    function BL(a) {
        var b;
        if (a = null == (b = a.navigator) ? void 0 : b.userActivation) {
            b = 0;
            if (null == a ? 0 : a.hasBeenActive) b |= 1;
            if (null == a ? 0 : a.isActive) b |= 2;
            return b
        }
    };
    var CL = /[+, ]/;

    function DL(a, b) {
        var c = a.G,
            d = a.pubWin,
            e = {},
            f = d.document;
        var g = yh(d);
        var h = Oq(d, c.google_ad_width, c.google_ad_height);
        var k = Qq(g).Qc;
        var l = d.top == d ? 0 : Mg(d.top) ? 1 : 2;
        var m = 4;
        h || 1 != l ? h || 2 != l ? h && 1 == l ? m = 7 : h && 2 == l && (m = 8) : m = 6 : m = 5;
        k && (m |= 16);
        k = "" + m;
        l = Rq(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        0 != l && (e.google_iframing_environment = l);
        if (!m && "ad.yieldmanager.com" == f.domain) {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < k.indexOf("%");) try {
                k = decodeURIComponent(k)
            } catch (u) {
                break
            }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && Mg(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch (u) {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        if (g == g.top) d = g.document.referrer;
        else {
            var p;
            d = (p = void 0 === p ? Gh() : p) && p.referrer || ""
        }
        e.google_referrer_url =
            d;
        Pq(e, c);
        e = c.google_page_location || c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in kH), 2 <= e.length && (d = d || e[e.length - 2] in kH), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = EL(a, b);
        d = a.G;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" ===
        d.google_ad_client && FL.test(f) && (g = "/pagead/lopri?");
        a = bi(b, "https://" + e + g + (nd(a.ha, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function GL(a) {
        var b = {};
        return encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + ci((b.adk = a.google_ad_unit_key, b.client = a.google_ad_client, b.fa = a.google_reactive_ad_format, b))
    }

    function HL(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch (e) {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                var b = xg(a);
                if (b) {
                    var c = b.frameElement;
                    if (c && Mg(b.parent)) {
                        var d = c;
                        break a
                    }
                }
            } catch (e) {}
            d = null
        }
        else d = null;
        return d
    }

    function IL(a, b) {
        b.eid = ME(a.pubWin);
        var c = a.G.google_loeid;
        "string" === typeof c && (a.j |= 4096, b.loeid = c)
    }

    function JL(a, b) {
        a = (a = Pg(a.pubWin)) && a.document ? Kq(a.document, a) : new ig(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function KL(a) {
        try {
            var b = B.top.location.hash;
            if (b) {
                var c = b.match(a);
                return c && c[1] || ""
            }
        } catch (d) {}
        return ""
    }

    function LL(a, b, c) {
        var d = a.G,
            e = a.pubWin,
            f = a.J,
            g = yh(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = Gh(e)) && Ra(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = Qq(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Qc || (b.usrc = 1));
        h = d.google_trust_token_additional_signing_data || {};
        h.url = b.url;
        d.google_trust_token_additional_signing_data = h;
        g.url != (b.loc || b.url) && (b.top =
            g.url);
        a.tb && (b.etu = a.tb);
        0 <= a.B && (b.eae = a.B);
        (c = EF(d, f, f ? cD(c, f) : null)) && (b.fc = c);
        if (!ti(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode && (h = (new rg(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    var k = h.contentWindow.document;
                    k.open();
                    k.write(Re(bf));
                    k.close();
                    g += k.documentMode
                } catch (zb) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        try {
            var l = e.screenX;
            var m = e.screenY
        } catch (zb) {}
        try {
            var n = e.outerWidth;
            var p = e.outerHeight
        } catch (zb) {}
        try {
            var u =
                e.innerWidth;
            var v = e.innerHeight
        } catch (zb) {}
        try {
            var A = e.screenLeft;
            var F = e.screenTop
        } catch (zb) {}
        try {
            u = e.innerWidth, v = e.innerHeight
        } catch (zb) {}
        try {
            var S = e.screen.availWidth;
            var P = e.screen.availTop
        } catch (zb) {}
        b.brdim = [A, F, l, m, S, P, n, p, u, v].join();
        k = 0;
        void 0 === B.postMessage && (k |= 1);
        0 < k && (b.osd = k);
        b.vis = uG(e.document);
        e = AF(d) ? cH : LG(new GG(e, a.innerInsElement, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = DG(e);
        if (!AF(d) && (e = ui(d), null != e)) {
            k = 0;
            a: {
                try {
                    var L = d.google_async_iframe_id,
                        N = window.document;
                    if (L) var O = N.getElementById(L);
                    else {
                        var Q = N.getElementsByTagName("script"),
                            K = Q[Q.length - 1];
                        O = K && K.parentNode || null
                    }
                    if (L = O) {
                        O = [];
                        N = 0;
                        for (var aa = Date.now(); 100 >= ++N && 50 > Date.now() - aa && (L = HL(L));) 1 === L.nodeType && O.push(L);
                        b: {
                            for (aa = 0; aa < O.length; aa++) {
                                c: {
                                    var da = O[aa];
                                    try {
                                        if (da.parentNode && 0 < da.offsetWidth && 0 < da.offsetHeight && da.style && "none" !== da.style.display && "hidden" !== da.style.visibility && (!da.style.opacity || 0 !== Number(da.style.opacity))) {
                                            var Ga = da.getBoundingClientRect();
                                            var hb =
                                                0 < Ga.right && 0 < Ga.bottom;
                                            break c
                                        }
                                    } catch (zb) {}
                                    hb = !1
                                }
                                if (!hb) {
                                    var $a = !1;
                                    break b
                                }
                            }
                            $a = !0
                        }
                        if ($a) {
                            b: {
                                var dc = Date.now();$a = /^html|body$/i;hb = /^fixed/i;
                                for (da = 0; da < O.length && 50 > Date.now() - dc; da++) {
                                    var ab = O[da];
                                    if (!$a.test(ab.tagName) && hb.test(ab.style.position || Sh(ab, "position"))) {
                                        var Wc = ab;
                                        break b
                                    }
                                }
                                Wc = null
                            }
                            break a
                        }
                    }
                } catch (zb) {}
                Wc = null
            }
            Wc && Wc.offsetWidth * Wc.offsetHeight <= 4 * e.width * e.height && (k = 1);
            b.pfx = k
        }
        a: {
            if (.05 > Math.random() && f) try {
                var Uf = f.document.getElementsByTagName("head")[0];
                var Vf = Uf ? tH(Uf) : 0;
                break a
            } catch (zb) {}
            Vf =
            0
        }
        f = Vf;
        0 !== f && (b.cms = f);
        d.google_lrv !== xd(a.ha, 2) && (b.alvm = d.google_lrv || "none")
    }

    function ML(a, b) {
        var c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : Ng(function() {
            c++;
            return !1
        }, !0, !0, a);
        c && (b.nhd = c)
    }

    function NL(a, b) {
        var c = jC(b, 8, {});
        b = jC(b, 9, {});
        var d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + ("," + e) : e : a && (b[d] = b[d] ? b[d] + ("," + a) : a)
    }

    function OL(a, b, c) {
        var d = a.G,
            e = a.G;
        b.dt = Ak;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        var f;
        var g = void 0 === g ? B : g;
        a: {
            try {
                var h = g.performance;
                if (h && h.timing && h.now) {
                    var k = h.timing.navigationStart + Math.round(h.now()) - h.timing.domLoading;
                    break a
                }
            } catch (Hv) {}
            k = null
        }
        var l = k;
        (f = l ? gG(l, g.Date.now() - Ak, 1E6) : null) && (b.bdt = f);
        b.idt = gG(a.I, Ak);
        var m = a.G;
        b.shv = xd(a.ha, 2);
        a.Za && (b.mjsv = a.Za);
        "sa" == m.google_loader_used ? b.ptt = 5 : "aa" == m.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(m.google_loader_used) &&
            (b.saldr = m.google_loader_used);
        var n = Gh(a.pubWin);
        if (n) {
            b.is_amp = 1;
            var p = n;
            p = void 0 === p ? Gh() : p;
            b.amp_v = p && p.mode ? +p.mode.version || null : null;
            var u = n;
            if ((u = void 0 === u ? Gh() : u) && u.container) {
                for (var v = u.container.split(","), A = [], F = 0; F < v.length; F++) A.push(Fh[v[F]] || "x");
                var S = A.join()
            } else S = null;
            var P = S;
            P && (b.act = P)
        }
        var L = a.pubWin;
        L == L.top && (b.abxe = 1);
        if ("_gfp_a_" in a.pubWin) {
            var N = a.pubWin._gfp_a_;
            if ("boolean" !== typeof N) throw Error("Illegal value of _gfp_a_: " + N);
            if (N) {
                var O = new OE(a.pubWin),
                    Q = PE(O,
                        "__gads", c);
                Q && (b.cookie = Q);
                if (W(op)) {
                    var K = PE(O, "__gpi", c);
                    K && !t(K, "includes").call(K, "&") && (b.gpic = K)
                }
                "1" === PE(O, "__gpi_opt_out", c) && (b.gpico = "1", b.pdopt = "1")
            }
        }
        var aa = hC(),
            da = jC(aa, 8, {}),
            Ga = d.google_ad_section;
        da[Ga] && (b.prev_fmts = da[Ga]);
        var hb = jC(aa, 9, {});
        hb[Ga] && (b.prev_slotnames = hb[Ga].toLowerCase());
        NL(d, aa);
        var $a = jC(aa, 15, 0);
        0 < $a && (b.nras = String($a));
        var dc = Gh(window);
        if (dc) {
            if (dc) {
                var ab = dc.pageViewId,
                    Wc = dc.clientId;
                "string" === typeof Wc && (ab += Wc.replace(/\D/g, "").substr(0, 6));
                var Uf = ab
            } else Uf =
                null;
            var Vf = +Uf
        } else {
            var zb = yh(window),
                Lm = zb.google_global_correlator;
            Lm || (zb.google_global_correlator = Lm = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
            Vf = Lm
        }
        b.correlator = jC(aa, 7, Vf);
        W(wp) && (b.rume = 1);
        if (d.google_ad_channel) {
            for (var Iv = jC(aa, 10, {}), Jv = "", Kv = d.google_ad_channel.split(CL), Mm = 0; Mm < Kv.length; Mm++) {
                var Nm = Kv[Mm];
                Iv[Nm] ? Jv += Nm + "+" : Iv[Nm] = !0
            }
            b.pv_ch = Jv
        }
        if (d.google_ad_host_channel) {
            for (var ki = jC(aa, 11, []), Lv = d.google_ad_host_channel.split("|"), li = -1, Om = [], vc = 0; vc < Lv.length; vc++) {
                var Mv = Lv[vc].split(CL);
                ki[vc] || (ki[vc] = {});
                for (var Wf = "", Pm = 0; Pm < Mv.length; Pm++) {
                    var mi = Mv[Pm];
                    "" !== mi && (ki[vc][mi] ? Wf += "+" + mi : ki[vc][mi] = !0)
                }
                Wf = Wf.slice(1);
                Om[vc] = Wf;
                "" !== Wf && (li = vc)
            }
            var Qm = "";
            if (-1 < li) {
                for (var Rm = 0; Rm < li; Rm++) Qm += Om[Rm] + "|";
                Qm += Om[li]
            }
            b.pv_h_ch = Qm
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        var Nv = d.google_ad_client;
        try {
            var Ov = yh(window),
                ni = Ov.google_prev_clients;
            ni || (ni = Ov.google_prev_clients = {});
            if (Nv in ni) var Sm = 1;
            else ni[Nv] = !0, Sm = 2
        } catch (Hv) {
            Sm = 0
        }
        b.pv = Sm;
        var Pv = a.pubWin.document,
            Qv = a.G,
            Rv = a.pubWin;
        var Sv = Pv.domain,
            Xf = (ld(c, 5) && dD(Rv) ? Rv.document.cookie : null) || "",
            oi = a.pubWin.screen,
            rN = Pv.referrer,
            sN = ei();
        if (Gh()) var Tv = window.gaGlobal || {};
        else {
            var Tm = Math.round((new Date).getTime() / 1E3),
                Um = Qv.google_analytics_domain_name,
                pi = "undefined" == typeof Um ? wH("auto", Sv) : wH(Um, Sv),
                tN = -1 < Xf.indexOf("__utma=" + pi + "."),
                uN = -1 < Xf.indexOf("__utmb=" + pi),
                Vm;
            if (!(Vm = (Jh() || window).gaGlobal)) {
                var vN = {};
                Vm = (Jh() || window).gaGlobal = vN
            }
            var va = Vm,
                Uv = !1;
            if (tN) {
                var Wm = Xf.split("__utma=" + pi + ".")[1].split(";")[0].split(".");
                uN ? va.sid = Wm[3] : va.sid || (va.sid = Tm + "");
                va.vid = Wm[0] + "." + Wm[1];
                va.from_cookie = !0
            } else {
                va.sid || (va.sid = Tm + "");
                if (!va.vid) {
                    Uv = !0;
                    var wN = Math.round(2147483647 * Math.random()),
                        Vv = sN,
                        Wv, xN = uH.appName,
                        yN = uH.version,
                        zN = uH.language ? uH.language : uH.browserLanguage,
                        AN = uH.platform,
                        BN = uH.userAgent;
                    try {
                        var Xv = uH.javaEnabled()
                    } catch (Hv) {
                        Xv = !1
                    }
                    var Dd = [xN, yN, zN, AN, BN, Xv ? 1 : 0].join("");
                    if (oi) Dd += oi.width + "x" + oi.height + oi.colorDepth;
                    else if (B.java && B.java.awt) {
                        var Yv = B.java.awt.Toolkit.getDefaultToolkit().getScreenSize();
                        Dd += Yv.screen.width + "x" + Yv.screen.height
                    }
                    Dd = Dd + Xf + (rN || "");
                    for (Wv = Dd.length; 0 < Vv;) Dd += Vv-- ^ Wv++;
                    va.vid = (wN ^ vH(Dd) & 2147483647) + "." + Tm
                }
                va.from_cookie || (va.from_cookie = !1)
            }
            if (!va.cid) {
                b: {
                    var se = Um,
                        Zv = 999;se && (se = 0 == se.indexOf(".") ? se.substr(1) : se, Zv = se.split(".").length);
                    for (var $v, aw = 999, qi = Xf.split(";"), Yf = 0; Yf < qi.length; Yf++) {
                        var ri = xH.exec(qi[Yf]) || yH.exec(qi[Yf]) || zH.exec(qi[Yf]);
                        if (ri) {
                            var Xm = ri[1] || 0;
                            if (Xm == Zv) {
                                var bw = ri[2];
                                break b
                            }
                            Xm < aw && (aw = Xm, $v = ri[2])
                        }
                    }
                    bw = $v
                }
                var Zf = bw;Uv && Zf && -1 != Zf.search(/^\d+\.\d+$/) ?
                (va.vid = Zf, va.from_cookie = !0) : Zf != va.vid && (va.cid = Zf)
            }
            va.dh = pi;
            va.hid || (va.hid = Math.round(2147483647 * Math.random()));
            Tv = va
        }
        var $f = Tv;
        b.ga_vid = $f.vid;
        b.ga_sid = $f.sid;
        b.ga_hid = $f.hid;
        b.ga_fc = $f.from_cookie;
        b.ga_cid = $f.cid;
        b.ga_wpids = Qv.google_analytics_uacct;
        ML(a.pubWin, b);
        var Ym = d.google_ad_layout;
        Ym && 0 <= XF[Ym] && (b.rplot = XF[Ym])
    }

    function PL(a, b) {
        a = a.l;
        if ((null == a ? 0 : ld(a, 6)) || pC()) b.npa = 1;
        if (a) {
            fd(a, 3) && (b.gdpr = ld(a, 3) ? "1" : "0");
            var c = D(a, 1);
            c && (b.us_privacy = c);
            (c = D(a, 2)) && (b.gdpr_consent = c);
            (c = D(a, 4)) && (b.addtl_consent = c);
            (a = D(a, 7)) && (b.tcfe = a)
        }
    }

    function QL(a, b) {
        var c = a.G;
        PL(a, b);
        Ug(sC, function(d, e) {
            b[d] = c[e]
        });
        AF(c) && (b.fa = NF(c));
        b.pi || null == c.google_ad_slot || (a = $r(c), null != a.j && (a = Hm(a.j.value), b.pi = a))
    }

    function RL(a, b) {
        var c = Ih() || Iq(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = Iq(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function SL(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = Iq(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Wg(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function TL(a, b) {
        (a = nC()[a.G.google_ad_client]) && (b.psts = a.join())
    }

    function UL(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function VL(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = rc(a))
    }

    function WL(a, b) {
        var c = W(qL() ? sq : rq),
            d = W(uq);
        (a = rL(a.pubWin, c, d)) && 0 < a.length && (b.tt_state = rc(JSON.stringify(a)))
    }

    function XL(a, b) {
        try {
            var c = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (c) {
                var d = JSON.parse(c("os-mode")),
                    e = parseInt(d["os-mode"], 10);
                0 <= e && (b.wsm = e + 1)
            }
        } catch (f) {}
    }

    function YL(a, b) {
        0 <= a.G.google_ad_public_floor && (b.pubf = a.G.google_ad_public_floor);
        0 <= a.G.google_ad_private_floor && (b.pvtf = a.G.google_ad_private_floor)
    }

    function ZL(a, b) {
        var c = Number(a.G.google_traffic_source);
        c && (ba = t(Object, "values").call(Object, eb), t(ba, "includes")).call(ba, c) && (b.trt = a.G.google_traffic_source)
    }

    function EL(a, b) {
        var c = {};
        QL(a, c);
        eL();
        c.adsid = cL[1];
        eL();
        c.pucrd = cL[6];
        VL(a, c);
        WL(a, c);
        OL(a, c, b);
        hi(c);
        c.u_sd = Jq(a.pubWin);
        var d;
        c.dmc = null == (d = a.pubWin.navigator) ? void 0 : d.deviceMemory;
        gk(889, function() {
            if (null == a.J) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = nE(a.J, a.innerInsElement);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                Lq(a.innerInsElement) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        RL(a, c);
        SL(a, c);
        JL(a, c);
        IL(a, c);
        a.F && (c.oid = a.F);
        TL(a, c);
        c.pvsid = th(a.pubWin, fk);
        UL(a, c);
        XL(a, c);
        W(Qo) && (c.uas = BL(a.pubWin));
        (d = lL(a.pubWin)) && (c.nvt = d);
        a.D && (c.scar = a.D);
        a.C && (c.topics = a.C instanceof Uint8Array ? pc(a.C, 3) : a.C);
        LL(a, c, b);
        c.fu = a.j;
        c.bc = AH();
        eL();
        c.jar = cL[4];
        nd(a.ha, 9) && (NE(c), c.creatives = KL(/\b(?:creatives)=([\d,]+)/), c.adgroups = KL(/\b(?:adgroups)=([\d,]+)/), c.adgroups && (c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0));
        xk() && (c.atl = !0);
        YL(a, c);
        ZL(a, c);
        "runAdAuction" in a.pubWin.navigator &&
            "joinAdInterestGroup" in a.pubWin.navigator && (c.td = 1);
        null == Aq(pp) || !1 !== a.G.google_video_play_muted || 10 !== a.G.google_reactive_ad_format && 11 !== a.G.google_reactive_ad_format || (c.sdkv = Aq(pp));
        return c
    }
    var FL = /YtLoPri/;

    function $L(a) {
        I.call(this, a)
    }
    z($L, I);
    var aM = [255, 255, 255];

    function bM(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error("Invalid color: " + a);
    }

    function cM(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = bM(b.backgroundColor);
        var c = dM(b);
        if (c) return c;
        a = (a = a.parentElement) ? cM(a) : aM;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function dM(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };

    function eM() {
        var a = X(mq),
            b = X(Qp);
        this.B = a;
        this.A = b;
        this.l = new fM;
        this.j = 0
    }

    function fM() {
        this.j = new r.Map;
        this.l = 0
    }
    ha.Object.defineProperties(fM.prototype, {
        A: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l
            }
        }
    });

    function gM(a) {
        M(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function hM(a, b, c, d, e) {
        a = {
            wp: e.B,
            c: e.I,
            e: X(Up),
            m: a,
            q: b,
            v: Math.round(c - d)
        };
        Mi(e.pa, "adfil-clk", a, !0, 1)
    };
    var iM = [{
        tc: "5984482117",
        uc: "1907259590",
        lc: 480,
        Ua: 220
    }, {
        tc: "1530485620",
        uc: "2837189651",
        lc: 400,
        Ua: 180
    }, {
        tc: "4440010542",
        uc: "9211025045",
        lc: 360,
        Ua: 160
    }, {
        tc: "1138882718",
        uc: "6584860439",
        lc: -Infinity,
        Ua: 150
    }];

    function jM(a) {
        return t(iM, "find").call(iM, function(b) {
            return b.lc <= a
        })
    };
    var kM = new function() {
            this.j = []
        },
        lM = !1;

    function mM(a, b, c) {
        var d = jM(a.document.body.clientWidth),
            e = b.l ? nM(a, b, c, d) : oM(a, b, c, d);
        zl(e.isVisible(), !1, function() {
            for (var f = y(kM.j), g = f.next(); !g.done; g = f.next()) g = g.value, g();
            kM.j.length = 0;
            lM = !1
        });
        e.show({
            rb: !0
        });
        lM = !0;
        pM.push(function() {
            e.collapse()
        })
    }

    function nM(a, b, c, d) {
        b = qM(a, b, c, d, a.innerWidth, "100%", "15px", "13px", "center");
        return cx(a, b, {
            Wd: .75,
            Gd: .95,
            zIndex: 100001,
            Jc: "adpub-drawer-root"
        })
    }

    function oM(a, b, c, d) {
        a: {
            var e = a.document.body.clientWidth;
            var f = .9 * e;
            for (e = 768 >= e ? 3 : 4; 1 <= e; e--) {
                var g = d.Ua * e + 42;
                if (g <= f) {
                    f = g;
                    break a
                }
            }
        }
        c = qM(a, b, c, d, f, "600px", "24px", "24px", "start");
        return pw(a, c, {
            Fd: f + "px",
            Cd: rM(b),
            wd: xd(b.A, 14),
            zIndex: 100001,
            Jc: "adpub-drawer-root"
        })
    }

    function qM(a, b, c, d, e, f, g, h, k) {
        var l = b.A,
            m = !!b.j,
            n = xd(l, 10),
            p = n.indexOf("TERM");
        var u = W(Vp) ? W(Vp) ? {
            kd: "pub-adfiliates-rockskipper",
            Cc: "ads"
        } : void 0 : m ? {
            kd: "vert-pla-adfiliates-e4-srp",
            Cc: "plas"
        } : {
            kd: "vert-pla-adfiliates-srp",
            Cc: "plas"
        };
        var v = u;
        u = X(Mp);
        e = Math.max(Math.floor((e - Math.floor(e / d.Ua) * d.Ua) / 2), 5);
        var A = b.H ? "on" : "",
            F = xd(l, 3),
            S = "" + X(Up),
            P = xd(l, 7),
            L = xd(l, 6),
            N = b.B,
            O = n.substring(0, p);
        n = n.substring(p + 4);
        d = W(Vp) ? d.uc : d.tc;
        m = !m;
        p = v.kd;
        v = v.Cc;
        var Q = !!nd(l, 13);
        c = Lu('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' +
            Pu(Y(g)) + " " + Pu(Y(h)) + "; text-align: " + Pu(Y(k)) + ';">' + (m ? '<div style="max-width: ' + Pu(Y(f)) + '">' + Ku(F) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + Ku(L) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + Pu(Y(g)) + "; text-align: " + Pu(Y(k)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">shoppingmode</span><span style="color:#80868b"> ' +
            Ku(O) + "</span>" + Ku(c) + '<span style="color:#80868b">' + Ku(n) + '</span></div></div><div id="anno-csa" style="margin:5px ' + Pu(Y(e)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');const pageOptions = {'pubId': " + Tu(Uu(p)) + ", 'styleId': " + Tu(Uu(d)) + ", 'disableCarousel': true, 'query': " + Tu(Uu(c)) + ", 'hl': " + Tu(Uu(P)) + ", 'personalizedAds': 'false', 'fexp': " + Tu(Uu(S)) + ", 'adfiliateWp': " + Tu(Uu(N)) + ", 'adtest': " +
            Tu(Uu(A)) + "}; const adBlock = {'container': 'anno-csa', 'linkTarget': '_blank', 'number': " + Tu(Uu(u)) + ", 'width': document.body.offsetWidth - 30}; _googCsa(" + Tu(Uu(v)) + ", pageOptions, adBlock);\x3c/script>" + (Q ? "<script>const el = document.getElementById('anno-csa'); el.dir = 'ltr'; el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" : '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') +
            "</div>");
        b = Ue("body", {
            dir: rM(b) ? "rtl" : "ltr",
            lang: xd(l, 7),
            style: De({
                margin: "0",
                height: "100%",
                "padding-top": "0px",
                overflow: "hidden"
            })
        }, Gu(c));
        l = a.document.createElement("IFRAME");
        M(l, {
            border: "0",
            width: "100%"
        });
        sM(a, l);
        l.srcdoc = Re(b);
        return l
    }

    function sM(a, b) {
        var c = a.requestAnimationFrame;
        W(jq) ? tM(a, b).then(function(d) {
            function e() {
                b.height = d.parentElement.offsetHeight + "px"
            }
            c(e);
            var f = new ResizeObserver(function() {
                return void c(e)
            });
            f.observe(d);
            pM.push(function() {
                f.disconnect()
            })
        }) : b.onload = function() {
            var d = b.contentDocument.body,
                e = new ResizeObserver(function() {
                    c(function() {
                        b.height = d.parentElement.offsetHeight + "px"
                    })
                });
            e.observe(d);
            pM.push(function() {
                e.disconnect()
            })
        }
    }

    function tM(a, b) {
        function c(d) {
            var e, f, g = null == (f = b.contentDocument || (null == (e = b.contentWindow) ? void 0 : e.document)) ? void 0 : f.body;
            g ? d(g) : a.setTimeout(function() {
                return void c(d)
            }, 10)
        }
        return new r.Promise(c)
    }
    var pM = [];

    function uM(a, b) {
        var c = this;
        this.A = a;
        this.j = !1;
        this.B = b;
        this.l = this.B.Fb(264, function(d) {
            c.j && (vM || (d = Date.now()), c.A(d), vM ? wM.call(B, c.l) : B.setTimeout(c.l, 17))
        })
    }
    uM.prototype.start = function() {
        this.j || (this.j = !0, vM ? wM.call(B, this.l) : this.l(0))
    };
    var wM = B.requestAnimationFrame || B.webkitRequestAnimationFrame,
        vM = !!wM && !/'iPhone'/.test(B.navigator.userAgent);

    function xM(a, b, c, d) {
        this.j = a;
        this.D = b;
        this.I = c;
        this.progress = 0;
        this.l = null;
        this.H = !1;
        this.A = [];
        this.B = null;
        this.C = new uM(Xa(this.te, this), d)
    }
    q = xM.prototype;
    q.te = function(a) {
        if (this.H) this.C.j = !1;
        else {
            null === this.l && (this.l = a);
            this.progress = (a - this.l) / this.I;
            1 <= this.progress && (this.progress = 1);
            a = this.B ? this.B(this.progress) : this.progress;
            this.A = [];
            for (var b = 0; b < this.j.length; b++) this.A.push((this.D[b] - this.j[b]) * a + this.j[b]);
            this.md();
            1 == this.progress && (this.C.j = !1, this.Sd())
        }
    };
    q.Sd = function() {};
    q.md = function() {};
    q.play = function() {
        this.H = !1;
        this.C.start()
    };
    q.reset = function(a, b, c) {
        this.l = null;
        this.j = a;
        this.D = b;
        this.I = c;
        this.progress = 0
    };

    function yM(a) {
        return a * a * a
    }

    function zM(a) {
        a = 1 - a;
        return 1 - a * a * a
    };

    function AM(a, b, c, d, e, f, g, h) {
        xM.call(this, [b], [c], d, f);
        this.K = a;
        this.L = e;
        this.F = g ? g : null;
        this.B = h || null
    }
    z(AM, xM);
    AM.prototype.md = function() {
        var a = {};
        a[this.L] = this.A[0] + "px";
        Oh(this.K, a)
    };
    AM.prototype.Sd = function() {
        this.F && this.F()
    };

    function BM(a, b, c, d, e, f) {
        this.L = a;
        this.M = b;
        this.A = c;
        this.H = d;
        this.I = e;
        this.C = f
    }
    ha.Object.defineProperties(BM.prototype, {
        j: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.L
            }
        },
        F: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.M
            }
        },
        B: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.A
            }
        },
        D: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.H
            }
        },
        K: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.I
            }
        },
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.C
            }
        }
    });

    function CM(a, b) {
        var c = a.document.createElement("SPAN");
        c.appendChild(a.document.createTextNode("shoppingmode"));
        gM(c);
        M(c, b);
        c.className = "google-material-icons";
        return c
    };

    function DM(a) {
        return a.performance.now()
    };

    function EM(a, b, c) {
        return Kx({
            J: a,
            Sc: 3E3,
            kc: a.innerWidth > Nk ? 650 : 0,
            pa: c,
            ud: b
        })
    }
    var FM = "",
        GM = "";

    function HM(a, b, c, d) {
        FM = c;
        GM = d;
        IM(a) ? a.document.getElementById("google-anno-sa-qtx").innerText = xd(b.A, 11).replace("TERM", FM) : null == Px(a, null) && (c = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/), M(a.document.body, {
            "padding-bottom": (c && c.length ? Number(c[0]) + 45 : 45) + "px"
        }), JM(a), c = document.createElement("div"), c.id = "google-anno-sa", c.dir = rM(b) ? "rtl" : "ltr", M(c, {
            background: "white",
            "border-style": "solid",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            bottom: "0",
            height: "45px",
            position: "fixed",
            "text-align": "center",
            width: "100%",
            border: "0px",
            left: "0px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            "z-index": X(Np).toString()
        }), c.appendChild(KM(a, b)), c.appendChild(LM(a, b)), c.appendChild(MM(a, b)), a.document.getElementsByTagName("body")[0].appendChild(c))
    }

    function IM(a) {
        return a.document.getElementById("google-anno-sa")
    }

    function LM(a, b) {
        var c = document.createElement("SPAN");
        gM(c);
        M(c, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: "60px",
            right: "60px",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center",
            color: "#1967D2",
            cursor: "pointer"
        });
        var d = rM(b);
        b.l || M(c, {
            "justify-content": ""
        });
        c.appendChild(CM(a, {
            "font-family": '"Google Material Icons"',
            "font-size": "18px",
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none",
            width: "15px",
            height: "15px",
            "margin-left": d ? "8px" : "",
            "margin-right": d ? "" : "8px",
            "margin-top": "11px",
            "line-height": "normal"
        }));
        d = document.createElement("SPAN");
        d.id = "google-anno-sa-qtx";
        d.appendChild(a.document.createTextNode(xd(b.A, 11).replace("TERM", FM)));
        M(d, {
            height: "40px",
            "align-items": "center",
            "line-height": "40px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        var e = DM(a);
        c.addEventListener("click", function(f) {
            hM(GM,
                FM, DM(a), e, b);
            mM(a, b, FM);
            f.preventDefault();
            return !1
        });
        c.appendChild(d);
        return c
    }

    function KM(a, b) {
        var c = document.createElement("SPAN");
        c.id = "gda";
        var d = NM(a, b);
        c.appendChild(d);
        c.addEventListener("click", function(e) {
            var f = rM(b),
                g = (b.l ? f : !f) ? a.innerWidth : -a.innerWidth;
            (new AM(IM(a), 0, g, 100, "left", b.D, function() {}, yM)).play();
            var h = OM(b);
            h.appendChild(CM(a, {
                "font-family": '"Google Material Icons"',
                "font-size": "18px",
                "font-style": "normal",
                "font-weight": "normal",
                "text-decoration": "none",
                "margin-right": "8px",
                "margin-top": "10px",
                left: "13px",
                top: "14px",
                margin: "0",
                position: "absolute",
                "line-height": "normal"
            }));
            h.addEventListener("click", function(k) {
                var l = (b.l ? f : !f) ? a.innerWidth : -a.innerWidth;
                (new AM(IM(a), l, 0, 100, "left", b.D, function() {}, zM)).play();
                a.document.body.removeChild(h);
                k.preventDefault();
                return !1
            });
            a.document.body.appendChild(h);
            e.preventDefault();
            return !1
        });
        return c
    }

    function NM(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = rM(b);
        b = b.l ? d : !d;
        M(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            left: b ? "" : "0",
            right: b ? "0" : "",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        b = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(b);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-linecap",
            "square");
        c.setAttribute("stroke-width", "2px");
        b = c.ownerDocument;
        d = b.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", "6");
        d.setAttribute("y1", "14");
        d.setAttribute("x2", "14");
        d.setAttribute("y2", "6");
        c.appendChild(d);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "6");
        b.setAttribute("y1", "6");
        b.setAttribute("x2", "14");
        b.setAttribute("y2", "14");
        c.appendChild(b);
        a.appendChild(c);
        return a
    }

    function MM(a, b) {
        var c = document.createElement("DIV");
        c.id = "google-anno-ea";
        b.l || M(c, {
            width: "60px",
            height: "45px",
            cursor: "pointer"
        });
        var d = PM(a, b);
        c.appendChild(d);
        var e = DM(a);
        c.addEventListener("click", function(f) {
            hM(GM, FM, DM(a), e, b);
            mM(a, b, FM);
            f.preventDefault();
            return !1
        });
        return c
    }

    function PM(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = rM(b);
        d = b.l ? d : !d;
        M(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            left: d ? "0" : "",
            right: d ? "" : "0",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        d = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(d);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-width",
            "2px");
        c.setAttribute("stroke-linecap", "square");
        b.l ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "6"), d.setAttribute("y1", "12"), d.setAttribute("x2", "10"), d.setAttribute("y2", "8"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "8"), b.setAttribute("x2", "14"), b.setAttribute("y2", "12"), c.appendChild(b)) : rM(b) ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"),
            d.setAttribute("x1", "6"), d.setAttribute("y1", "6"), d.setAttribute("x2", "10"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "10"), b.setAttribute("x2", "6"), b.setAttribute("y2", "14"), c.appendChild(b)) : (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "10"), d.setAttribute("y1", "6"), d.setAttribute("x2", "6"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg",
            "line"), b.setAttribute("x1", "6"), b.setAttribute("y1", "10"), b.setAttribute("x2", "10"), b.setAttribute("y2", "14"), c.appendChild(b));
        a.appendChild(c);
        return a
    }

    function OM(a) {
        var b = document.createElement("div");
        b.id = "gca";
        var c = rM(a);
        a = a.l ? c : !c;
        M(b, {
            position: "fixed",
            bottom: "0%",
            left: a ? "" : "0%",
            right: a ? "0%" : "",
            width: "45px",
            height: "45px",
            background: "white",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            color: "#1967D2",
            "z-index": X(Np).toString()
        });
        return b
    }

    function JM(a) {
        (new MutationObserver(function(b) {
            b.forEach(function(c) {
                "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && M(a.document.body, {
                    "padding-bottom": "45px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function QM(a) {
        try {
            var b, c;
            return null !== (null == (b = a.location) ? void 0 : null == (c = b.href) ? void 0 : c.match(/goog_fsa=1/))
        } catch (d) {
            return !1
        }
    };

    function RM(a, b, c) {
        this.B = a;
        this.win = b;
        this.A = c;
        this.l = [];
        this.j = !0
    }

    function SM(a) {
        if (0 < a.l.length && lM) kM.j.push(function() {
            return void SM(a)
        });
        else {
            var b = a.l.shift();
            b ? (a.j = !1, HM(a.win, a.A, b.j, b.l), a.win.setTimeout(function() {
                return void SM(a)
            }, a.B)) : a.j = !0
        }
    }

    function TM(a, b) {
        this.j = a;
        this.l = b
    };

    function UM(a) {
        this.l = a;
        this.j = new VM;
        a = y(this.l);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            b = xd(c, 1);
            c = y(H(c, tE, 2));
            for (var d = c.next(); !d.done; d = c.next()) {
                var e = this.j;
                d = xd(d.value, 1);
                var f = e.B.has(b) ? e.B.get(b) : e.C++;
                e.B.set(b, f);
                e.A.set(f, b);
                for (var g = 0, h = 0; h < d.length; h++) {
                    var k = d.charCodeAt(h);
                    e.j[g].contains(k) || (e.j.push(new WM), e.j[e.size].D = g, e.j[e.size].U = k, e.j[g].l.set(k, e.size), e.size++);
                    g = e.j[g].l.get(k)
                }
                e.j[g].C = !0;
                e.j[g].B = f;
                e.j[g].F = e.l.length;
                e.l.push(d.length)
            }
        }
        a = this.j;
        b = [];
        for (b.push(0); 0 < b.length;) {
            c = b.shift();
            e = a;
            d = e.j[c];
            if (0 === c) d.j = 0, d.A = 0;
            else if (0 === d.D) d.j = 0, d.A = d.C ? c : e.j[e.j[c].j].A;
            else {
                d = e.j[e.j[c].D].j;
                for (f = e.j[c].U;;) {
                    if (e.j[d].contains(f)) {
                        e.j[c].j = e.j[d].l.get(f);
                        break
                    }
                    if (0 === d) {
                        e.j[c].j = 0;
                        break
                    }
                    d = e.j[d].j
                }
                e.j[c].A = e.j[c].C ? c : e.j[e.j[c].j].A
            }
            c = y(a.j[c].childNodes);
            for (e = c.next(); !e.done; e = c.next()) b.push(e.value)
        }
    }
    UM.prototype.match = function(a) {
        return this.j.match(a)
    };

    function VM() {
        this.size = 1;
        this.j = [new WM];
        this.l = [];
        this.B = new r.Map;
        this.A = new r.Map;
        this.C = 0
    }
    VM.prototype.match = function(a) {
        for (var b = 0, c = [], d = 0; d < a.length; d++) {
            for (;;) {
                var e = a.charCodeAt(d),
                    f = this.j[b],
                    g = String.fromCharCode(e);
                g = g.toLowerCase() === g ? g.toUpperCase().charCodeAt(0) : g.toLowerCase().charCodeAt(0);
                if (f.contains(e)) {
                    b = f.l.get(e);
                    break
                }
                if (W(Tp) && f.contains(g)) {
                    b = f.l.get(g);
                    break
                }
                if (0 === b) break;
                b = f.j
            }
            for (e = b;;) {
                e = this.j[e].A;
                if (0 === e) break;
                c.push(new XM(d + 1 - this.l[this.j[e].F], d, this.A.get(this.j[e].B)));
                e = this.j[e].j
            }
        }
        return c
    };

    function WM() {
        this.l = new r.Map;
        this.K = !1;
        this.P = this.I = this.H = this.O = this.L = this.M = -1
    }
    WM.prototype.contains = function(a) {
        return this.l.has(a)
    };
    ha.Object.defineProperties(WM.prototype, {
        D: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.M = a
            },
            get: function() {
                return this.M
            }
        },
        U: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.L = a
            },
            get: function() {
                return this.L
            }
        },
        C: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.K = a
            },
            get: function() {
                return this.K
            }
        },
        B: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.I = a
            },
            get: function() {
                return this.I
            }
        },
        j: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.O = a
            },
            get: function() {
                return this.O
            }
        },
        A: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.H = a
            },
            get: function() {
                return this.H
            }
        },
        F: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.P = a
            },
            get: function() {
                return this.P
            }
        },
        childNodes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return t(this.l, "values").call(this.l)
            }
        }
    });

    function XM(a, b, c) {
        this.C = a;
        this.B = b;
        this.D = c
    }
    ha.Object.defineProperties(XM.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.C
            }
        },
        A: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.B
            }
        },
        j: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.D
            }
        },
        length: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.B - this.C
            }
        }
    });
    var YM = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function ZM(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || YM.test(a)
        }
    };
    var $M = x(['@font-face{font-family:"goog-matfb";size-adjust:17.16%;src:local("Times New Roman");}']),
        aN = ["block", "inline", "inline-block", "list-item", "table-cell"];

    function bN(a, b, c, d) {
        return ZM(a.charAt(b - 1), d.C) && ZM(a.charAt(c + 1), d.C)
    }

    function cN(a, b, c, d, e, f, g) {
        if (DM(a) >= c.F) return !1;
        for (var h = 0; h < b.childNodes.length; h++) {
            var k = b.childNodes[h];
            if (k.nodeType === Node.TEXT_NODE && "" !== k.textContent) {
                a: {
                    var l = a;
                    var m = c,
                        n = b,
                        p = k.textContent,
                        u = d,
                        v = e,
                        A = f,
                        F = g,
                        S = [];b: {
                        var P = p;
                        switch (m.C) {
                            case 1:
                                for (var L = Array(P.length), N = 0, O = 0; O < P.length; O++) YM.test(P[O]) || N++, L[O] = N;
                                P = L;
                                break b;
                            default:
                                L = Array(P.length);
                                for (O = N = 0; O < P.length;) {
                                    for (;
                                        /\s/.test(P[O]);) L[O] = N, O++;
                                    for (var Q = !1; O < P.length && !/\s/.test(P[O]);) Q = !0, L[O] = N, O++;
                                    Q && (N++, L[O - 1] = N)
                                }
                                P =
                                    L
                        }
                    }
                    if (t(p, "includes").call(p, "\u00bb")) v = [];
                    else {
                        L = v.match(p);
                        v = new r.Map;
                        L = y(L);
                        for (N = L.next(); !N.done; N = L.next()) N = N.value, O = N.l, v.has(O) ? (Q = v.get(O), N.length > Q.length && v.set(O, N)) : v.set(O, N);
                        v = t(Array, "from").call(Array, t(v, "values").call(v))
                    }
                    Q = -1;v = y(v);
                    for (L = v.next(); !L.done; L = v.next()) {
                        O = L.value;
                        N = O.l;
                        L = O.A;
                        var K;
                        if (K = bN(p, N, L, m)) {
                            K = A;
                            for (var aa = O.j, da = K.l, Ga = K.j + P[N] - X(Sp), hb = y(t(da.j, "keys").call(da.j)), $a = hb.next(); !$a.done; $a = hb.next()) {
                                $a = $a.value;
                                for (var dc = da.j.get($a), ab = 0; ab < dc.length &&
                                    dc[ab] < Ga;) ab++;
                                da.l -= ab;
                                0 < ab && da.j.set($a, dc.slice(ab))
                            }
                            da = K;
                            Ga = da.l;
                            K = (Ga.j.has(aa) ? Ga.j.get(aa).length : 0) < da.B && K.l.A < K.A
                        }
                        if (K) {
                            if (K = !m.j) K = l.getComputedStyle(n), aa = K.fontSize.match(/\d+/), K = !(aa && 12 <= Number(aa[0]) && 22 >= Number(aa[0]) && Lb(aN, K.display));
                            if (K) {
                                A.j += P[P.length - 1];
                                l = [];
                                break a
                            }
                            m.j && W(iq) && !(0 < u.j) && HM(l, m, O.j, p.substring(N, L + 1));
                            Q += 1;
                            Q < N && S.push(l.document.createTextNode(p.substring(Q, N)));
                            Q = S;
                            K = Q.push;
                            aa = l;
                            da = m;
                            Ga = O.j;
                            hb = p.substring(N, L + 1);
                            aa = da.j ? dN(aa, da, Ga, hb, F) : eN(aa, da, Ga, hb);
                            K.call(Q, aa);
                            Q = u;
                            K = O.j;
                            Q.j++;
                            Q.l.add(K);
                            Q = A.l;
                            O = O.j;
                            N = A.j + P[N];
                            K = [];
                            Q.j.has(O) && (K = Q.j.get(O));
                            K.push(N);
                            Q.l++;
                            Q.j.set(O, K);
                            Q = L
                        }
                    }
                    m = Q + 1;0 !== m && m < p.length && S.push(l.document.createTextNode(p.substring(m)));A.j += P[P.length - 1];l = S
                }
                if (0 < l.length && !W(lq)) {
                    p = y(l);
                    for (A = p.next(); !A.done; A = p.next()) A = A.value, b.insertBefore(A, k), fN(A);
                    b.removeChild(k);
                    h += l.length - 1
                }
            }
            else if (gN(k, c) && !cN(a, k, c, d, e, f, g)) return !1
        }
        return !0
    }

    function fN(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = dM(bM(getComputedStyle(a.parentElement).color)),
                    c = dM(bM(getComputedStyle(a).color));
                var d = cM(a);
                if (d = b && c && d ? ZD(c, d) < Math.min(ZD(b, d), 4.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    M(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) fN(a.children[b])
        }
    }

    function gN(a, b) {
        if (a.nodeType !== Node.ELEMENT_NODE) return !1;
        var c;
        if (null == (c = a.classList) ? 0 : c.contains("google-anno-skip")) return !1;
        var d, e;
        switch (null == (d = a.tagName) ? void 0 : null == (e = d.toUpperCase) ? void 0 : e.call(d)) {
            case "IFRAME":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1;
            case "A":
                return !!b.j;
            default:
                if (!(b = !!b.j)) {
                    var f, g, h, k, l, m;
                    b = !((null == (g = (f = a.className).toUpperCase) ? 0 : null == (h = g.call(f)) ? 0 : t(h, "includes").call(h, "CRUMB")) || (null == (l = (k = a.id).toUpperCase) ? 0 : null == (m = l.call(k)) ? 0 : t(m, "includes").call(m, "CRUMB")))
                }
                return b
        }
    }

    function dN(a, b, c, d, e) {
        var f = a.document.createElement("SPAN");
        f.appendChild(a.document.createTextNode(d));
        (new IntersectionObserver(function(g) {
            g.forEach(function(h) {
                h.isIntersecting && h.target.textContent && (W(oq) ? (e.l.push(new TM(c, d)), e.j && SM(e)) : HM(a, b, c, d))
            })
        }, {
            threshold: .98
        })).observe(f);
        return f
    }

    function eN(a, b, c, d) {
        var e = a.document.createElement("SPAN");
        gM(e);
        M(e, {
            "text-decoration": "underline"
        });
        M(e, {
            "text-decoration-style": "dotted"
        });
        M(e, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        });
        e.appendChild(a.document.createTextNode(d));
        var f = a.document.createElement("A");
        gM(f);
        M(f, {
            "text-decoration": "none"
        });
        gf(f);
        f.className = "google-anno";
        f.appendChild(CM(a, {
            bottom: "-1px",
            "font-family": '"Google Material Icons", "goog-matfb"',
            "font-size": "90%",
            "font-style": "normal",
            "font-weight": "normal",
            position: "relative",
            "text-decoration": "none"
        }));
        f.appendChild(a.document.createTextNode("\u00a0"));
        f.appendChild(e);
        var g = DM(a);
        f.addEventListener("click", function(h) {
            b.D.La(999, function() {
                hM(d, c, DM(a), g, b);
                mM(a, b, c)
            }, function(k) {
                k.e = "" + X(Up)
            });
            h.preventDefault();
            h.stopImmediatePropagation();
            return !1
        });
        return f
    };

    function hN() {
        this.j = 0;
        this.l = new r.Set;
        this.A = 0;
        this.B = this.C = null
    }
    hN.prototype.sendGen204 = function(a, b, c, d, e, f, g, h, k) {
        var l, m, n = X(Up);
        a = (null == (l = a.location) ? void 0 : l.hostname) || "";
        l = t(Array, "from").call(Array, null != (m = this.B) ? m : []).sort().join(",");
        m = this.C || "";
        for (var p = 0, u = y(H(d, uE, 2)), v = u.next(); !v.done; v = u.next()) p += H(v.value, tE, 2).length;
        b = {
            wp: b,
            c: c,
            e: n,
            h: a,
            ld: l,
            lx: m,
            m: p,
            n: this.j,
            o: f,
            p: H(d, uE, 2).length,
            t: this.l.size,
            w: this.A,
            x: Math.round(e)
        };
        Mi(k, "adfil-imp", t(Object, "assign").call(Object, {}, b, g ? {
            sap: Number(g.j),
            tap: Number(g.F),
            bap: Number(g.B),
            nsr: g.K,
            im: Number(g.l),
            mo: Number(g.D),
            hesa: Number(h.j)
        } : {}), !0, 1)
    };

    function iN(a, b, c) {
        this.win = a;
        this.l = b;
        this.A = c
    }
    ha.Object.defineProperties(iN.prototype, {
        window: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.win
            }
        },
        j: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l
            }
        },
        B: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.A
            }
        }
    });

    function jN(a, b) {
        this.A = a;
        this.j = b
    }
    ha.Object.defineProperties(jN.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.A
            }
        }
    });

    function kN(a) {
        ma(a)
    };

    function lN(a) {
        return a ? (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "" : ""
    }

    function mN(a) {
        return new r.Set(a.map(lN).filter(function(b) {
            return b.length
        }))
    };

    function nN(a, b, c) {
        this.j = a;
        this.l = b;
        this.B = c
    }
    ha.Object.defineProperties(nN.prototype, {
        A: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l
            }
        },
        C: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.B
            }
        }
    });

    function oN(a, b, c, d, e, f, g, h, k) {
        this.B = a;
        this.l = b;
        this.A = c;
        this.I = d;
        this.F = e;
        this.j = f;
        this.D = g;
        this.pa = h;
        this.H = void 0 === k ? !1 : k;
        this.C = Lb(pN, xd(c, 7)) ? 1 : 0
    }

    function rM(a) {
        return 2 === md(a.A, 12, 0)
    }
    var pN = ["ja", "zh_CN", "zh_TW"];
    var qN = x(["https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700&text=shoppingmode"]),
        CN = x(["https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700"]),
        DN = x(["https://www.google.com/adsense/search/ads.js"]);

    function EN(a, b, c) {
        var d = fk,
            e = Li;
        try {
            Ub(a.document)
        } catch (h) {
            return
        }
        var f = Yg() ? null : Math.floor(20 * Tg());
        if (null != f) {
            var g = [];
            d.La(898, function() {
                FN(a, b, c, new jN(!1, f), d, g, e)
            }, function(h) {
                h.e = "" + X(Up)
            })
        }
    }

    function GN(a, b, c, d, e, f, g) {
        W(Jp) && b && !b.j && (a = Px(a)) && vh(a, function() {
            FN(c.window, c.j, c.B, new jN(!0, d.j), e, f, g)
        })
    }

    function FN(a, b, c, d, e, f, g) {
        var h = b.j;
        if (h && a.performance) {
            var k = DM(a),
                l = k + X(Rp);
            !W(lq) && !W(Xp) && 0 < H(h, uE, 2).length && HN(a.document);
            var m = 488 > Rk(a);
            if (W(Jp) || QM(a)) {
                var n = H(b.j, uE, 2).length;
                n = new nN(b.B, b.A, n)
            } else n = null;
            var p = new iN(a, b, c);
            if (W(Jp) || QM(a))
                if (QM(a)) var u = new BM(!0, !1, !1, d.l, 0, m);
                else {
                    u = Kx({
                        J: a,
                        Sc: 3E3,
                        kc: X(Pp),
                        pa: g,
                        Se: !0
                    });
                    var v = EM(a, 2, g),
                        A = EM(a, 1, g);
                    u = new BM(0 < u || !n.j || 0 === n.C ? !1 : !n.A || 0 < A || m && 0 === v, 0 === v, 0 === A, d.l, u, m)
                }
            else u = null;
            v = new iE;
            A = X(Up);
            v = pd(v, 1, A, 0);
            pd(v, 2, d.j, 0);
            new kN(f);
            GN(a, u, p, d, e, f, g);
            f = new hN;
            b = new oN(c, m, h, d.j, l, u, e, g, b.l);
            if ((e = a.document.body) && IN(e)) {
                e = e.textContent || "";
                b: switch (b.C) {
                    case 1:
                        l = 0;
                        for (m = e.length - 1; 0 <= m; m--) YM.test(e[m]) || l++;
                        break b;
                    default:
                        l = e.trim(), l = "" === l ? 0 : l.split(/\s+/).length
                }
                f.A = l;
                m = lN(xd(b.A, 7));
                p = a.document.documentElement;
                p = lN(p.lang) || lN(p.getAttribute("xml:lang"));
                if ("" !== p) var F = new r.Set([p]);
                else {
                    v = a.location;
                    p = (p = v.host.match(/^[a-z]{2}\./i)) ? [p[0]] : [];
                    v = y(v.pathname.split("/"));
                    for (A = v.next(); !A.done; A = v.next()) A = A.value,
                        2 === A.length && p.push(A);
                    p = mN(p);
                    p.size || (v = a.navigator, p = mN((null == (F = v.languages) ? 0 : F.length) ? v.languages : [v.language]));
                    F = p
                }
                f.C = m;
                f.B = new r.Set(F);
                if (l < X(Zp)) b = "sw";
                else if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) b = "si";
                else if (F.has(m))
                    if (DM(a) >= b.F) b = "l";
                    else {
                        F = b.A;
                        if (0 === H(F, uE, 2).length || b.j && !b.j.j) b = !0;
                        else {
                            b.j || (l = a.document, m = l.createElement("style"), m.textContent = Oe(new Ne($M[0], Me)), l.head.appendChild(m));
                            l = new UM(H(F, uE, 2));
                            c: {
                                F = l.j;
                                for (p = m = 0; p <
                                    e.length; p++) {
                                    for (;;) {
                                        v = e.charCodeAt(p);
                                        if (F.j[m].contains(v)) {
                                            m = F.j[m].l.get(v);
                                            break
                                        }
                                        if (0 === m) break;
                                        m = F.j[m].j
                                    }
                                    for (v = m;;) {
                                        v = F.j[v].A;
                                        if (0 === v) break;
                                        F = new XM(p + 1 - F.l[F.j[v].F], p, F.A.get(F.j[v].B));
                                        break c
                                    }
                                }
                                F = void 0
                            }
                            if (F)
                                if (F = W(oq) ? new RM(X(pq), a, b) : null, b.j && W(iq) && W(oq)) {
                                    l = l.match(e);
                                    l = y(l);
                                    for (m = l.next(); !m.done; m = l.next()) m = m.value, bN(e, m.l, m.A, b) && (p = f, v = m.j, p.j++, p.l.add(v), p = F, p.l.push(new TM(m.j, e.substring(m.l, m.A))), p.j && SM(p));
                                    b = !0
                                } else e = new eM, b = !!b.j && W(iq) && W(oq) || cN(a, a.document.body,
                                    b, f, l, e, F);
                            else b = !0
                        }
                        b = b ? "a" : "p"
                    }
                else b = "sl"
            } else b = "se";
            k = DM(a) - k;
            !W(lq) && 0 < f.j && (nd(h, 13) || (e = a.document, F = e.createElement("LINK"), lf(F, R(DN), "prefetch"), F.as = "script", F.fetchPriority = "low", e.head.appendChild(F)), W(Xp) && HN(a.document));
            f.sendGen204(a, c, d.j, h, k, b, u, n, g)
        }
    }

    function IN(a) {
        try {
            Ub(new ResizeObserver(function() {}))
        } catch (b) {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    }

    function HN(a) {
        var b = a.createElement("LINK"),
            c = W(Kp) ? R(qN) : R(CN);
        lf(b, c, "stylesheet");
        a.head.appendChild(b)
    };

    function JN(a, b, c, d) {
        this.j = a;
        this.B = b;
        this.A = c;
        this.l = d
    };

    function KN(a, b, c) {
        var d = yd(b, oE, 13, yE),
            e;
        if (!(e = LN(a)))
            if (W(Lp)) {
                var f;
                e = null != (f = G(b, rE, 11)) ? f : null
            } else e = null;
        return new JN(e, MN(d), NN(a, d), c)
    }

    function LN(a) {
        try {
            var b, c, d = null == a ? void 0 : null == (b = a.location) ? void 0 : null == (c = b.hash) ? void 0 : c.match(/\bgoog_cpmi=([^&]*)/);
            if (!d) return null;
            var e = decodeURIComponent(d[1]);
            return Gd(rE, e)
        } catch (f) {
            return null
        }
    }

    function MN(a) {
        return !!((null == a ? 0 : nd(a, 5)) && (null == a ? 0 : nd(a, 8)))
    }

    function NN(a, b) {
        return !(null == b || !nd(b, 6) || !(488 > Rk(a)) && (null == b ? 0 : nd(b, 7)))
    };

    function ON(a) {
        fk.he(function(b) {
            b.shv = String(a);
            b.mjsv = "m202209060101";
            b.eid = ME(B)
        })
    };

    function PN(a) {
        var b = a.bg;
        return a.Ve || ("dev" === b ? "dev" : "")
    };
    var QN = "undefined" === typeof sttc ? void 0 : sttc;

    function RN(a) {
        var b = fk;
        try {
            return Nd(a, cj), new wE(JSON.parse(a))
        } catch (c) {
            b.na(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) {
                d.jspb = String(a)
            })
        }
        return new wE
    };

    function SN(a) {
        var b = [5, 8, 9],
            c = [3, 4],
            d = void 0,
            e = 2;
        b = void 0 === b ? TN : b;
        c = void 0 === c ? UN : c;
        d = void 0 === d ? VN : d;
        e = void 0 === e ? 0 : e;
        this.j = qg(a);
        this.B = b;
        this.C = c;
        this.A = d;
        this.l = e
    }

    function WN(a, b) {
        var c = a.j.V(),
            d = a.j.j;
        return new r.Promise(function(e, f) {
            var g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(function(k) {
                                    var l = new Vi,
                                        m = Zi(l, function() {
                                            return XN(a, k)
                                        });
                                    m && (l.j.length && (m.executionTime = Math.round(Number(l.j[0].duration))), h.disconnect(), e(m))
                                }, YN);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function XN(a, b) {
        function c(n) {
            return Lb(a.B, n.overlapType) && Lb(a.C, n.overlapDepth) && Lb(a.A, n.overlapDetectionPoint)
        }
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        var d = b.getBoundingClientRect(),
            e = vg(a.j.V() || window);
        if (0 >= d.bottom || d.bottom > e.height || 0 >= d.right || d.left >= e.width) return null;
        var f = ZN(a, b, d, a.j.j.elementsFromPoint(fg(d.left + d.width / 2, d.left, d.right - 1), fg(d.bottom - 1 - a.l, d.top, d.bottom - 1)), 1, []),
            g = ZN(a, b, d, a.j.j.elementsFromPoint(fg(d.left + d.width / 2, d.left, d.right - 1), fg(d.top + a.l, d.top, d.bottom -
                1)), 2, f.Ja),
            h = ZN(a, b, d, a.j.j.elementsFromPoint(fg(d.left + a.l, d.left, d.right - 1), fg(d.top + d.height / 2, d.top, d.bottom - 1)), 3, [].concat(ma(f.Ja), ma(g.Ja))),
            k = ZN(a, b, d, a.j.j.elementsFromPoint(fg(d.right - 1 - a.l, d.left, d.right - 1), fg(d.top + d.height / 2, d.top, d.bottom - 1)), 4, [].concat(ma(f.Ja), ma(g.Ja), ma(h.Ja))),
            l = $N(a, b, d);
        f = Hb([].concat(ma(t(f, "entries")), ma(t(g, "entries")), ma(t(h, "entries")), ma(t(k, "entries"))), c);
        g = Hb(l, c);
        l = [].concat(ma(f), ma(g));
        h = d.left < -a.l || d.right > e.width + a.l;
        h = 0 < l.length || h;
        k = wg(a.j.j);
        var m = new Ch(d.left, d.top, d.width, d.height);
        f = [].concat(ma(Ib(f, function(n) {
            return new Ch(n.elementRect.left, n.elementRect.top, n.elementRect.width, n.elementRect.height)
        })), ma(Sb(Ib(g, function(n) {
            return Eh(m, n.elementRect)
        }))), ma(Hb(Eh(m, new Ch(0, 0, e.width, e.height)), function(n) {
            return 0 <= n.top && n.top + n.height <= e.height
        })));
        return {
            entries: l,
            isOverlappingOrOutsideViewport: h,
            scrollPosition: {
                scrollX: k.x,
                scrollY: k.y
            },
            target: b,
            targetRect: d,
            viewportSize: {
                width: e.width,
                height: e.height
            },
            overlappedArea: 20 >
                f.length ? aO(m, f) : bO(d, f)
        }
    }

    function aO(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        for (var c = 0, d = 1; d < 1 << b.length; d++) {
            for (var e = a, f = 0, g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Dh(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function bO(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        for (var c = 0, d = a.left; d <= a.right; d++)
            for (var e = a.top; e <= a.bottom; e++)
                for (var f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function ZN(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            Ja: []
        };
        for (var g = [], h = [], k = 0; k < d.length; k++) {
            var l = d[k];
            if (l !== b && !Lb(f, l)) {
                h.push(l);
                var m = l.getBoundingClientRect();
                if (a.j.contains(l, b)) g.push(cO(a, c, l, m, 1, e));
                else if (a.j.contains(b, l)) g.push(cO(a, c, l, m, 2, e));
                else {
                    var n = a,
                        p = b,
                        u = n.j.hf(p, l);
                    if (u) {
                        var v = dO(n, p, u, l) || {};
                        var A = v.suspectAncestor;
                        v = v.Va;
                        p = dO(n, l, u, p) || {};
                        n = p.suspectAncestor;
                        p = p.Va;
                        A = A && v && n && p ? v <= p ? {
                                suspectAncestor: A,
                                overlapType: eO[v]
                            } : {
                                suspectAncestor: n,
                                overlapType: fO[p]
                            } :
                            A && v ? {
                                suspectAncestor: A,
                                overlapType: eO[v]
                            } : n && p ? {
                                suspectAncestor: n,
                                overlapType: fO[p]
                            } : null
                    } else A = null;
                    v = A || {};
                    A = v.suspectAncestor;
                    v = v.overlapType;
                    A && v ? g.push(cO(a, c, l, m, v, e, A)) : g.push(cO(a, c, l, m, 9, e))
                }
            }
        }
        return {
            entries: g,
            Ja: h
        }
    }

    function $N(a, b, c) {
        var d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            var e = b.getBoundingClientRect();
            if (e) {
                var f = Sg(b, a.j.V());
                f && "visible" !== f.overflow && ("auto" !== f.overflowY && "scroll" !== f.overflowY && c.bottom > e.bottom + a.l ? d.push(cO(a, c, b, e, 5, 1)) : (f = "auto" === f.overflowX || "scroll" === f.overflowX, !f && c.left < e.left - a.l ? d.push(cO(a, c, b, e, 5, 3)) : !f && c.right > e.right + a.l && d.push(cO(a, c, b, e, 5, 4))))
            }
        }
        return d
    }

    function cO(a, b, c, d, e, f, g) {
        var h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Lb(a.B, e) && Lb(a.A, f)) {
            b = new zh(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = gO(a, c)) && Bh(b, a)) c = 4;
            else {
                a = hO(c, d);
                if (Yb) {
                    e = Yh(c, "paddingLeft");
                    f = Yh(c, "paddingRight");
                    var k = Yh(c, "paddingTop"),
                        l = Yh(c, "paddingBottom");
                    e = new zh(k, f, l, e)
                } else e = Rh(c, "paddingLeft"), f = Rh(c, "paddingRight"), k = Rh(c, "paddingTop"), l = Rh(c, "paddingBottom"), e = new zh(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                Bh(b, new zh(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = hO(c, d), c = Bh(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function dO(a, b, c, d) {
        for (var e = [], f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.V();
        for (f = 0; f < e.length; f++) {
            var g = e[f],
                h = Sg(g, c);
            if (h) {
                if ("fixed" === h.position) return {
                    suspectAncestor: g,
                    Va: 1
                };
                if ("sticky" === h.position && a.j.contains(g.parentElement, d)) return {
                    suspectAncestor: g,
                    Va: 2
                };
                if ("absolute" === h.position) return {
                    suspectAncestor: g,
                    Va: 3
                };
                if ("none" !== h.cssFloat) {
                    h = g === e[0];
                    var k = iO(a, e.slice(0, f), g);
                    if (h || k) return {
                        suspectAncestor: g,
                        Va: 4
                    }
                }
            }
        }
        return (a = iO(a, e, b)) ? {
            suspectAncestor: a,
            Va: 5
        } : null
    }

    function iO(a, b, c) {
        var d = c.getBoundingClientRect();
        if (!d) return null;
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            if (a.j.contains(f, c)) {
                var g = f.getBoundingClientRect();
                if (g) {
                    var h = Sg(f, a.j.V());
                    if (h && d.bottom > g.bottom + a.l && "visible" === h.overflowY) return f
                }
            }
        }
        return null
    }

    function hO(a, b) {
        if (!Yb || 9 <= Number(mc)) {
            var c = Rh(a, "borderLeftWidth");
            d = Rh(a, "borderRightWidth");
            e = Rh(a, "borderTopWidth");
            a = Rh(a, "borderBottomWidth");
            c = new zh(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = $h(a, "borderLeft");
            var d = $h(a, "borderRight"),
                e = $h(a, "borderTop");
            a = $h(a, "borderBottom");
            c = new zh(e, d, a, c)
        }
        return new zh(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }

    function gO(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: function(d) {
                return /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new zh(a.top, a.right, a.bottom, a.left)
    }
    var jO = {},
        eO = (jO[1] = 3, jO[4] = 10, jO[3] = 12, jO[2] = 4, jO[5] = 5, jO),
        kO = {},
        fO = (kO[1] = 6, kO[4] = 11, kO[3] = 13, kO[2] = 7, kO[5] = 8, kO),
        TN = Hb(Vg({
            Wh: 1,
            Xh: 2,
            Ej: 3,
            Fj: 4,
            Hj: 5,
            Sh: 6,
            Th: 7,
            Vh: 8,
            Wi: 9,
            Gj: 10,
            Uh: 11,
            Dj: 12,
            Rh: 13
        }), function(a) {
            return !Lb([1, 2], a)
        }),
        UN = Vg({
            ih: 1,
            Xi: 2,
            wh: 3,
            Ij: 4
        }),
        VN = Vg({
            jh: 1,
            Lj: 2,
            Ki: 3,
            uj: 4
        }),
        YN = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function lO(a, b, c, d) {
        function e(v) {
            try {
                var A = "object" === typeof v.data ? v.data : JSON.parse(v.data);
                g === A.paw_id && (zf(a, "message", e), A.error ? f.reject(Error(A.error)) : f.resolve(d(A)))
            } catch (F) {}
        }
        var f = new ku,
            g = "",
            h;
        if ("function" === typeof(null == (h = a.gmaSdk) ? void 0 : h.getQueryInfo)) return J(a, "message", e), g = c(a.gmaSdk), f.promise;
        var k, l, m, n, p, u;
        return "function" === typeof(null == (k = a.webkit) ? void 0 : null == (l = k.messageHandlers) ? void 0 : null == (m = l.getGmaQueryInfo) ? void 0 : m.postMessage) || "function" === typeof(null ==
            (n = a.webkit) ? void 0 : null == (p = n.messageHandlers) ? void 0 : null == (u = p.getGmaSig) ? void 0 : u.postMessage) ? (g = String(Math.floor(2147483647 * Tg())), J(a, "message", e), b(a.webkit.messageHandlers, g), f.promise) : null
    }

    function mO(a) {
        return lO(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };

    function nO(a, b) {
        b = void 0 === b ? 500 : b;
        T.call(this);
        this.l = a;
        this.F = b;
        this.j = null;
        this.B = {};
        this.C = 0;
        this.A = null
    }
    z(nO, T);
    nO.prototype.W = function() {
        this.B = {};
        this.A && (zf(this.l, "message", this.A), delete this.A);
        delete this.B;
        delete this.l;
        delete this.j;
        T.prototype.W.call(this)
    };

    function oO(a) {
        var b;
        return "function" === typeof(null == (b = a.l) ? void 0 : b.__uspapi) || null != pO(a)
    }

    function qO(a, b) {
        var c = {};
        if (oO(a)) {
            var d = tf(function() {
                return b(c)
            });
            rO(a, function(e, f) {
                f && (c = e);
                d()
            });
            setTimeout(d, a.F)
        } else b(c)
    }

    function rO(a, b) {
        var c;
        "function" === typeof(null == (c = a.l) ? void 0 : c.__uspapi) ? (a = a.l.__uspapi, a("getUSPData", 1, b)) : pO(a) && (sO(a), c = ++a.C, a.B[c] = b, a.j && (b = {}, a.j.postMessage((b.__uspapiCall = {
            command: "getUSPData",
            version: 1,
            callId: c
        }, b), "*")))
    }

    function pO(a) {
        if (a.j) return a.j;
        a.j = jh(a.l, "__uspapiLocator");
        return a.j
    }

    function sO(a) {
        a.A || (a.A = function(b) {
            try {
                var c = {};
                "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                var d = c.__uspapiReturn;
                var e;
                null == (e = a.B) || e[d.callId](d.returnValue, d.success)
            } catch (f) {}
        }, J(a.l, "message", a.A))
    };

    function tO(a) {
        I.call(this, a)
    }
    z(tO, I);

    function uO(a) {
        T.call(this);
        this.A = a;
        this.l = this.j = null;
        this.B = {};
        this.F = 0;
        this.C = !1
    }
    z(uO, T);

    function vO(a) {
        a.C || (a.j || (a.j = jh(a.A, "googlefcPresent")), a.C = !0);
        return !!a.j
    }

    function wO(a) {
        return new r.Promise(function(b) {
            if (vO(a))
                if (a.j === a.A) {
                    var c = a.j.googlefc || (a.j.googlefc = {});
                    c.__fci = c.__fci || [];
                    c.__fci.push("loaded", function(e) {
                        b(Gd(tO, e))
                    })
                } else {
                    xO(a);
                    c = a.F++;
                    a.B[c] = b;
                    var d = {};
                    a.j.postMessage((d.__fciCall = {
                        command: "loaded",
                        callId: c
                    }, d), "*")
                }
        })
    }

    function xO(a) {
        a.l || (a.l = function(b) {
            try {
                var c = Gd(tO, b.data.__fciReturn);
                (0, a.B[D(c, 1)])(c)
            } catch (d) {}
        }, J(a.A, "message", a.l))
    };

    function yO(a, b) {
        try {
            var c = void 0 === nd(b, 6) ? !0 : nd(b, 6),
                d, e;
            a: switch (md(b, 4, 0)) {
                case 1:
                    var f = "pt";
                    break a;
                case 2:
                    f = "cr";
                    break a;
                default:
                    f = ""
            }
            var g = new Lf(Jf(md(b, 2, 0)), xd(b, 3), f),
                h = null != (e = null == (d = G(b, Hf, 5)) ? void 0 : xd(d, 1)) ? e : "";
            g.Bb = h;
            g.j = c;
            g.win = a;
            var k = g.build();
            Df(k)
        } catch (l) {}
    }

    function zO(a, b) {
        var c = void 0 === c ? yO : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : J(a, "load", function() {
            return void c(a, b)
        }))
    };

    function AO(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    }

    function BO(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function CO(a) {
        if (a === a.top || Mg(a.top)) return r.Promise.resolve({
            status: 4
        });
        var b = AO(a);
        if (!b) return r.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && BO(a.document.referrer)) return r.Promise.resolve({
            status: 3
        });
        var c = new ku;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                tb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function DO(a) {
        I.call(this, a)
    }
    z(DO, I);
    var EO = [1, 3];
    var FO = x(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        GO = R(FO);

    function HO(a) {
        var b = void 0 === b ? GO : b;
        var c = IO(a);
        return c.messageChannelSendRequestFn ? r.Promise.resolve(c.messageChannelSendRequestFn) : new r.Promise(function(d) {
            function e(k) {
                return h.j(k).then(function(l) {
                    return l.data
                })
            }
            var f = Rg("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            f.src = me(b).toString();
            var g = (new URL(b.toString())).origin,
                h = fE({
                    destination: a,
                    Ga: f,
                    origin: g,
                    Ia: "goog:gRpYw:doubleclick"
                });
            h.j("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" ===
                k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    }

    function JO(a, b, c) {
        var d = W(qp),
            e = W(up),
            f = fk,
            g = KO(c),
            h = g.Qb,
            k = g.Pb;
        b = IO(b);
        b.getTopicsPromise || (d = {
                message: "goog:topics:frame:get:topics",
                callApi: d,
                sendGen204: e
            }, e && (d.pvsid = th(window)), a = a(d).then(function(l) {
                var m = k;
                if (l instanceof Uint8Array) m || (m = !(h instanceof Uint8Array && Qb(l, h)));
                else if (ej()(l)) m || (m = l !== h);
                else return f.na(989, Error(JSON.stringify(l))), 7;
                if (m && c) try {
                    var n = new DO;
                    var p = E(n, 2, Pi());
                    l instanceof Uint8Array ? qd(p, 1, EO, Sc(l, !1)) : qd(p, 3, EO, l);
                    c.setItem("goog:cached:topics", Ed(p))
                } catch (u) {}
                return l
            }),
            b.getTopicsPromise = a);
        return h && !k ? r.Promise.resolve(h) : b.getTopicsPromise
    }

    function KO(a) {
        if (!a) return {
            Qb: null,
            Pb: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                Qb: null,
                Pb: !0
            };
            var c = Gd(DO, b),
                d = rd(c, EO);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    var f, g = 1 === rd(c, EO) ? 1 : -1,
                        h = D(c, g),
                        k = Sc(h, !0);
                    null != k && k !== h && E(c, g, k, void 0, !0);
                    var l = null == k ? Dc() : k;
                    Bc(zc);
                    var m = l.R;
                    var n = null == m || xc(m) ? m : "string" === typeof m ? uc(m) : null;
                    e = (f = null == n ? n : l.R = n) ? new Uint8Array(f) : yc || (yc = new Uint8Array(0));
                    break;
                case 3:
                    e = md(c, 3 === rd(c, EO) ? 3 : -1, 0);
                    break;
                default:
                    throw Error("unexpected value " +
                        d + "!");
            }
            return {
                Qb: e,
                Pb: md(c, 2, 0) + 6048E5 < Pi()
            }
        } catch (p) {
            return {
                Qb: null,
                Pb: !0
            }
        }
    }

    function IO(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };

    function LO(a, b) {
        if (Bb()) {
            var c = a.document.documentElement.lang;
            MO(a) ? NO(b, th(a), !0, "", c) : (new MutationObserver(function(d, e) {
                MO(a) && (NO(b, th(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function MO(a) {
        return a.document.documentElement.classList.contains("translated-rtl") || a.document.documentElement.classList.contains("translated-ltr")
    }

    function NO(a, b, c, d, e) {
        Bi({
            ptt: "" + a,
            pvsid: "" + b,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function OO(a, b) {
        var c = a.document.getElementById(String(b.google_async_iframe_id) + "_host");
        a = a.document.getElementById(String(b.google_async_iframe_id) + "_host");
        if (null == c || null == a) throw Error("no_ins_in_dom");
        return {
            innerInsElement: c,
            outerInsElement: a
        }
    }

    function PO(a) {
        var b = a.innerInsElement;
        a = a.outerInsElement;
        if (!b || !a) throw Error("no_ins_in_loader_provided_slot");
        return {
            innerInsElement: b,
            outerInsElement: a
        }
    }

    function QO(a) {
        var b = a.ha,
            c = a.ca,
            d = a.Za,
            e = a.slot,
            f, g, h, k, l, m, n, p, u, v;
        return Ja(function(A) {
            switch (A.j) {
                case 1:
                    return f = e.vars, g = Pg(e.pubWin), h = W(np) || f.google_slot_inside_iframe ? PO(e) : OO(e.pubWin, e.vars), k = h.innerInsElement, l = h.outerInsElement, m = new eF({
                        J: g,
                        pubWin: e.pubWin,
                        G: f,
                        ha: b,
                        ca: c,
                        Za: d,
                        innerInsElement: k,
                        outerInsElement: l
                    }), m.I = Date.now(), zk(1, [m.G]), gk(1032, function() {
                        if (g && W(Gp)) {
                            var F = m.G;
                            jC(hC(), 32, !1) || (lC(hC(), 32, !0), LO(g, "sa" === F.google_loader_used ? 5 : 9))
                        }
                    }), A.D = 2, za(A, RO(m), 4);
                case 4:
                    Aa(A);
                    break;
                case 2:
                    if (n = Ba(A), !jk(159, n)) throw n;
                case 3:
                    return gk(639, function() {
                        var F = m.G;
                        var S = m.J;
                        if (S && 1 === F.google_responsive_auto_format && !0 === F.google_full_width_responsive_allowed) {
                            var P;
                            (P = (P = S.document.getElementById(F.google_async_iframe_id)) ? Gg(P, "INS", "adsbygoogle") : null) ? (F = new dG(S, P, F), F.j = B.setInterval(Xa(F.B, F), 500), F.B(), F = !0) : F = !1
                        } else F = !1;
                        return F
                    }), gk(914, function() {
                        if (!g || xb() || W(qq)) {
                            if (W(Wp) && e.pubWin && !g && !xb() && W(qq)) {
                                var F = e.pubWin,
                                    S = KN(e.pubWin, b, SO(e.vars)),
                                    P = e.vars.google_ad_client;
                                jC(hC(), 29, !1) || (lC(hC(), 29, !0), EN(F, S, P))
                            }
                        } else F = KN(g, b, SO(e.vars)), S = e.vars.google_ad_client, jC(hC(), 29, !1) || (lC(hC(), 29, !0), EN(g, F, S))
                    }), lk(m.pubWin, "affa", function(F) {
                        gk(1008, function() {
                            W(qq) && f.google_ad_client && g && !xb() && TO(g, f, Gd($L, F.config))
                        })
                    }), W(qq) && f.google_ad_client && g && !xb() && (null == (p = g) ? 0 : null == (u = p.location) ? 0 : null == (v = u.hash) ? 0 : v.match(/\bgoog_cpmi=([^&]*)/)) && TO(g, f, UO()), A.return(m)
            }
        })
    }

    function TO(a, b, c) {
        if (G(c, rE, 1) || W(nq)) {
            var d = SO(b),
                e = G(c, oE, 2),
                f;
            if (!(f = LN(a)))
                if (W(Lp)) {
                    var g;
                    f = null != (g = G(c, rE, 1)) ? g : null
                } else f = null;
            c = new JN(f, MN(e), NN(a, e), d);
            b = b.google_ad_client;
            jC(hC(), 29, !1) || (lC(hC(), 29, !0), EN(a, c, b))
        }
    }

    function UO() {
        var a = new $L;
        if (W(Jp)) {
            var b = new oE;
            b = zd(b, 5, !0);
            b = zd(b, 8, !0);
            td(a, 2, b)
        }
        return a
    }

    function SO(a) {
        return "on" === a.google_adtest
    }

    function RO(a) {
        if (/_sdo/.test(a.G.google_ad_format)) return r.Promise.resolve();
        Sj(dk).j(13);
        Sj(dk).j(11);
        var b = hC(),
            c = jC(b, 23, !1);
        c || lC(b, 23, !0);
        if (!c) {
            c = a.G.google_ad_client;
            var d = a.ha;
            if (void 0 !== hd(d, oE, 13 === rd(d, yE) ? 13 : -1)) b = G(yd(d, oE, 13, yE), jD, 2);
            else {
                var e, f;
                b = Qb(null != (f = null == (e = yd(d, pE, 14, yE)) ? void 0 : jd(e, 1)) ? f : [], [c]) ? G(G(yd(d, pE, 14, yE), oE, 2), jD, 2) : new jD
            }
            e = new kD(a.pubWin, a.G.google_ad_client, b, nd(a.ha, 6));
            e.l = !0;
            f = G(e.C, Sn, 1);
            if (e.l && (b = e.j, e.B && !uy(f) ? (c = new $C, c = E(c, 1, 1)) : c = null, c)) {
                c =
                    Ed(c);
                try {
                    b.localStorage.setItem("google_auto_fc_cmp_setting", c)
                } catch (g) {}
            }
            f && wy(new vy(e.j, new My(e.j, e.A), f, new pv(e.j)))
        }
        e = !Gh() && !wb();
        return !e || e && !VO(a) ? WO(a) : r.Promise.resolve()
    }

    function XO(a, b, c) {
        c = void 0 === c ? !1 : c;
        b = nE(a.J, b);
        var d = Ih() || Iq(a.pubWin.top);
        if (!b || -12245933 === b.y || -12245933 === d.width || -12245933 === d.height || !d.height) return 0;
        var e = 0;
        try {
            var f = a.pubWin.top;
            e = Kq(f.document, f).y
        } catch (g) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function VO(a) {
        return YO(a) || ZO(a)
    }

    function YO(a) {
        var b = a.G;
        if (!b.google_pause_ad_requests) return !1;
        var c = B.setTimeout(function() {
                ik("abg:cmppar", {
                    client: a.G.google_ad_client,
                    url: a.G.google_page_url
                })
            }, 1E4),
            d = hk(450, function() {
                b.google_pause_ad_requests = !1;
                B.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                VO(a) || WO(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function ZO(a) {
        var b = a.pubWin.document,
            c = $O();
        if (0 > c.hidden && 0 > c.visible) return !1;
        var d = a.innerInsElement,
            e = vG(b);
        if (!e) return !1;
        if (!wG(b)) return aP(a, c.visible, d);
        var f = 3 === uG(b);
        if (XO(a, d) <= c.hidden && !f) return !1;
        var g = hk(332, function() {
            !wG(b) && g && (zf(b, e, g), aP(a, c.visible, d) || WO(a), g = null)
        });
        return J(b, e, g)
    }

    function $O() {
        var a = {
            hidden: 0,
            visible: 3
        };
        B.IntersectionObserver || (a.visible = -1);
        Jg() && (a.visible *= 2);
        return a
    }

    function aP(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.G;
        if (!Yk(d.google_reactive_ad_format) && (AF(d) || d.google_reactive_ads_config) || !Lq(c) || XO(a, c) <= b) return !1;
        var e = hC(),
            f = jC(e, 8, {});
        e = jC(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        var g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new r.Promise(function(h) {
            var k = new B.IntersectionObserver(function(l, m) {
                Gb(l, function(n) {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: 100 * b + "%"
            });
            a.K = k;
            k.observe(c)
        });
        e = new r.Promise(function(h) {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                function() {
                    h(void 0)
                })
        });
        t(r.Promise, "any").call(r.Promise, [f, e]).then(function() {
            gk(294, function() {
                WO(a)
            })
        });
        return !0
    }

    function WO(a) {
        var b, c;
        return Ja(function(d) {
            gk(326, function() {
                if (1 === gi(a.G)) {
                    var e = W(Hp),
                        f = e || W(Fp),
                        g = a.pubWin;
                    if (f && g === a.J) {
                        var h = new tk;
                        f = new uk;
                        h.setCorrelator(th(a.pubWin));
                        var k = ME(a.pubWin);
                        pd(h, 5, k, "");
                        Ad(h, 2);
                        h = td(f, 1, h);
                        k = new rk;
                        k = zd(k, 10, !0);
                        var l = W(yp);
                        k = zd(k, 8, l);
                        l = W(zp);
                        k = zd(k, 12, l);
                        l = W(Cp);
                        k = zd(k, 7, l);
                        l = W(Bp);
                        k = zd(k, 13, l);
                        td(h, 2, k);
                        g.google_rum_config = f.toJSON();
                        Qg(g.document, Nh(nd(a.ha, 9) && e ? a.ca.Rf : a.ca.Sf))
                    } else Wi()
                }
            });
            a.G.google_ad_channel = bP(a, a.G.google_ad_channel);
            a.G.google_tag_partner =
                cP(a, a.G.google_tag_partner);
            dP(a);
            b = a.G.google_start_time;
            "number" === typeof b && (Ak = b, a.G.google_start_time = null);
            lE(a);
            eP(a);
            oC() && mD({
                win: a.pubWin,
                webPropertyCode: a.G.google_ad_client,
                vb: Nh(a.ca.vb)
            });
            AF(a.G) && (wx() && (a.G.google_adtest = a.G.google_adtest || "on"), a.G.google_pgb_reactive = a.G.google_pgb_reactive || 3);
            fP(a.J);
            c = "function" === typeof a.pubWin.document.browsingTopics && (!W(rp) || IE(a.pubWin.document));
            if (W(sp) && c) try {
                a.H = HO(a.pubWin)
            } catch (e) {
                jk(984, e)
            }
            return d.return(gP(a))
        })
    }

    function eP(a) {
        if (a.J && (CF(a.J, a.ca.Xe), BF(a.J.location))) {
            var b = a.G.google_ad_client;
            var c = {};
            b = {
                enable_page_level_ads: (c.pltais = !0, c),
                google_ad_client: b
            };
            MF(a.J, b)
        }
    }

    function bP(a, b) {
        return (b ? [b] : []).concat(eC(a.G).ad_channels || []).join("+")
    }

    function cP(a, b) {
        return (b ? [b] : []).concat(eC(a.G).tag_partners || []).join("+")
    }

    function hP(a) {
        var b = Rg("IFRAME");
        Ug(a, function(c, d) {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function iP(a, b, c) {
        return 9 === a.G.google_reactive_ad_format && Gg(a.outerInsElement, null, "fsi_container") ? (a.innerInsElement.appendChild(b), r.Promise.resolve(b)) : KF(a.ca.Zd, 525, function(d) {
            a.innerInsElement.appendChild(b);
            d.createAdSlot(a.J, a.G, b, a.outerInsElement.parentElement, cD(c, a.pubWin));
            return b
        })
    }

    function jP(a, b, c) {
        function d(h) {
            h && a.A.push(function() {
                h.Fa()
            })
        }
        zO(a.pubWin, zd(Gf(Ad(Ad(Ff(new Ef, If(new Hf, String(th(a.pubWin)))), 4), 2), xd(a.ha, 2)), 6, !0));
        var e = a.J;
        a.G.google_acr && a.G.google_acr(b);
        J(b, "load", function() {
            b && b.setAttribute("data-load-complete", !0);
            var h = e ? eC(e).enable_overlap_observer || !1 : !1;
            (a.G.ovlp || h) && e && e === a.pubWin && kP(e, a, a.outerInsElement, b)
        });
        lP(a, b);
        mP(a, b);
        !e || AF(a.G) && !OF(a.G) || (d(new hH(e, b, a.G)), d(new nG(a, b)), d(e.IntersectionObserver ? null : new sG(e, b, a.innerInsElement)));
        e && (d(new mG(e, b, a.G)), a.A.push(bG(e, a.G)), Sj(YF).init(e), a.A.push(hG(e, a.outerInsElement, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.G.iaaso;
        if (null != c) {
            var f = a.outerInsElement,
                g = f.parentElement;
            (g && Yq.test(g.className) ? g : f).setAttribute("data-auto-ad-size", c)
        }
        c = a.outerInsElement;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        nP(a)
    }

    function lP(a, b) {
        var c = a.pubWin,
            d = a.G.google_ad_client,
            e = nC(),
            f = null,
            g = lk(c, "pvt", function(h, k) {
                "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
            });
        a.A.push(g)
    }

    function oP(a, b) {
        var c = PE(a, "__gpi_opt_out", b.l);
        c && (c = Sf(Rf(Qf(Pf(c), 2147483647), "/"), b.pubWin.location.hostname), QE(a, "__gpi_opt_out", c, b.l))
    }

    function mP(a, b) {
        var c = lk(a.pubWin, "gpi-uoo", function(d, e) {
            if (e.source === b.contentWindow) {
                e = Sf(Rf(Qf(Pf(d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new OE(a.pubWin);
                QE(f, "__gpi_opt_out", e, a.l);
                if (d.userOptOut || d.clearAdsData) RE(f, "__gads", a.l), RE(f, "__gpi", a.l)
            }
        });
        a.A.push(c)
    }

    function nP(a) {
        var b = Gh(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                var c = function(d) {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                J(a.pubWin, "message", hk(616, c));
                a.A.push(function() {
                    zf(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function kP(a, b, c, d) {
        WN(new SN(a), c).then(function(e) {
            zk(8, [e]);
            return e
        }).then(function(e) {
            var f = c.parentElement;
            (f && Yq.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(function(e) {
            var f = b.G.armr || "",
                g = e.executionTime || "",
                h = null == b.G.iaaso ? "" : Number(b.G.iaaso),
                k = Number(e.isOverlappingOrOutsideViewport),
                l = Ib(t(e, "entries"), function(F) {
                    return F.overlapType + ":" + F.overlapDepth + ":" + F.overlapDetectionPoint
                }),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                p = m * e.targetRect.width * e.targetRect.height,
                u = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                v = ii(e.target),
                A = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = e.viewportSize.width + "x" + e.viewportSize.height;
            ik("ovlp", {
                adf: b.G.google_ad_dom_fingerprint,
                armr: f,
                client: b.G.google_ad_client,
                eid: ME(b.G),
                et: g,
                fwrattr: b.G.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.G.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.G.google_responsive_auto_format,
                roa: p,
                slot: b.G.google_ad_slot,
                sp: u,
                tgt: v,
                tr: A,
                url: b.G.google_page_url,
                vp: e,
                pvc: th(a)
            }, 1)
        }).catch(function(e) {
            zk(8, ["Error:", e.message, c]);
            ik("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function pP(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function qP(a, b, c, d) {
        var e = a.G,
            f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height,
            k = PF(e),
            l = {
                id: f,
                name: f
            };
        l.style = k ? ["width:" + g + "px !IMPORTANT", "height:" + h + "px !IMPORTANT"].join(";") : "left:0;position:absolute;top:0;border:0;width:" + (g + "px;height:") + (h + "px;");
        var m = hh();
        if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
            m = b;
            if (b = "fsb=" + encodeURIComponent("1")) {
                var n = m.indexOf("#");
                0 > n && (n = m.length);
                var p = m.indexOf("?");
                if (0 > p || p > n) {
                    p = n;
                    var u = ""
                } else u =
                    m.substring(p + 1, n);
                m = [m.slice(0, p), u, m.slice(n)];
                n = m[1];
                m[1] = b ? n ? n + "&" + b : b : n;
                b = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else b = m;
            l.sandbox = gh().join(" ")
        }
        W(So) && !1 === e.google_video_play_muted && pP("autoplay", l);
        n = b;
        b = rP(b);
        p = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" : b;
        null != g && (l.width = String(g));
        null != h && (l.height = String(h));
        l.frameborder = "0";
        l.marginwidth = "0";
        l.marginheight = "0";
        l.vspace = "0";
        l.hspace = "0";
        l.allowtransparency = "true";
        l.scrolling = "no";
        m = "";
        if (c) {
            m = 10;
            for (p = ""; 0 < m--;) p += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 *
                Math.random()));
            m = p;
            b = kk(b, m);
            kk(n, m)
        } else b = p;
        e.dash && (l.srcdoc = e.dash);
        n = W(qL() ? sq : rq);
        p = W(uq);
        n = rL(a.pubWin, n, p);
        p = e.google_trust_token_additional_signing_data;
        n && sL(n) && (n = uL(n, p)) && (l.trustToken = JSON.stringify(n));
        var v;
        (null == (v = a.pubWin.document.featurePolicy) ? 0 : (ba = v.features(), t(ba, "includes")).call(ba, "attribution-reporting")) && pP("attribution-reporting", l);
        W(xp) && (v = a.pubWin, void 0 !== v.anonymouslyFramed && v.crossOriginIsolated && (l.anonymous = "true"));
        if (k) l.src = b, l = hP(l), l = iP(a, l, d);
        else {
            d =
                b;
            k = {};
            k.dtd = gG((new Date).getTime(), Ak);
            d = bi(k, d);
            l.src = d;
            d = a.pubWin;
            d = d == d.top;
            l = hP(l);
            d && a.A.push(Kh(a.pubWin, l));
            d = a.innerInsElement;
            for (d.style.visibility = "visible"; k = d.firstChild;) d.removeChild(k);
            d.appendChild(l);
            l = r.Promise.resolve(l)
        }
        c && (c = a.ca.hg, e = {
            id: f,
            url: b,
            width: g,
            height: h,
            Ia: m,
            Pf: a.pubWin,
            Ie: f,
            ck: "google_expandable_ad_slot" + gi(e),
            wf: c.toString(),
            Oc: a.pubWin
        }, e = !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.Ia || !e.Oc ? void 0 : lk(e.Oc, "ct", Ya(pk, e, c)), e && a.A.push(e));
        return l
    }

    function rP(a) {
        var b = X(C("Edge") ? ep : jp);
        var c = a;
        c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        if (c !== a) {
            b -= 8;
            var d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
            ik("trn", {
                ol: a.length,
                tr: -1 === d ? "" : a.substring(d + 1),
                url: a
            }, .01)
        }
        return c
    }

    function sP(a) {
        var b, c, d, e, f, g, h, k, l, m, n, p, u, v, A, F, S, P, L, N, O, Q;
        return Ja(function(K) {
            switch (K.j) {
                case 1:
                    b = a;
                    c = b.G;
                    d = b.pubWin;
                    e = a.l;
                    W(op) && ld(e, 5) && oP(new OE(a.pubWin), a);
                    f = cD(e, a.pubWin);
                    if (!ld(e, 5)) return K.return(r.Promise.resolve());
                    ld(e, 5) && VE(e, a.pubWin, a.G.google_ad_client);
                    if (g = a.G.google_reactive_ads_config) JF(a.J, g), h = cD(e), QF(g, a, h), k = g.page_level_pubvars, Ra(k) && be(a.G, k);
                    if (!ld(e, 5)) {
                        K.j = 2;
                        break
                    }
                    return za(K, tP(), 2);
                case 2:
                    if (!(W(vp) && a.H && uP(a))) {
                        K.j = 4;
                        break
                    }
                    l = cD(a.l, a.pubWin);
                    m = a.H.then(function(aa) {
                        return Ja(function(da) {
                            return za(da,
                                JO(aa, a.pubWin, l).then(function(Ga) {
                                    a.C = Ga
                                }), 0)
                        })
                    });
                    if (W(tp)) {
                        fk.Ma(985, m);
                        K.j = 4;
                        break
                    }
                    return za(K, m, 4);
                case 4:
                    if (tL(a.pubWin, DE(), xd(a.ha, 8))) {
                        K.j = 7;
                        break
                    }
                    n = X(yq);
                    p = d.google_trust_token_operation_promise;
                    if (!(0 < n && p)) {
                        K.j = 7;
                        break
                    }
                    return za(K, r.Promise.race([p, new r.Promise(function(aa) {
                        return void setTimeout(function() {
                            aa(void 0)
                        }, n)
                    })]), 7);
                case 7:
                    u = "";
                    PF(c) ? (v = a.ca.ig.toString(), u = v + "#" + GL(c), NL(c, hC()), vP(c)) : (5 == c.google_pgb_reactive && c.google_reactive_ads_config || !zF(c) || yF(d, c, f)) && vP(c) && (u =
                        DL(a, e));
                    zk(2, [c, u]);
                    if (!u) return K.return(r.Promise.resolve());
                    c.google_async_iframe_id || fi(d);
                    A = gi(c);
                    F = a.pubWin === a.J ? "a!" + A.toString(36) : A.toString(36) + "." + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Za()).toString(36));
                    S = 0 < XO(a, a.innerInsElement, !0);
                    P = {};
                    L = (P.ifi = A, P.uci = F, P);
                    S && (N = hC(), L.btvi = jC(N, 21, 1), mC(N, 21));
                    u = bi(L, u);
                    O = qP(a, u, 0 === a.B, e);
                    u = rP(u);
                    a.G.rpe && bH(a.pubWin, a.innerInsElement, {
                        height: a.G.google_ad_height,
                        ed: "force",
                        pd: !0,
                        be: !0,
                        Ac: a.G.google_ad_client
                    });
                    return za(K, O, 10);
                case 10:
                    Q = K.B;
                    try {
                        jP(a, Q, F)
                    } catch (aa) {
                        jk(223, aa)
                    }
                    K.j = 0
            }
        })
    }

    function tP() {
        return (Ab() ? 0 <= tb(Eb(), 11) : yb() && 0 <= tb(Eb(), 65)) ? new r.Promise(function(a) {
            iL(a.bind(null, !0))
        }) : (iL(null), r.Promise.resolve(!1))
    }

    function wP(a) {
        var b = new nO(a);
        return new r.Promise(function(c) {
            qO(b, function(d) {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function xP(a) {
        var b = void 0 === b ? B.top : b;
        b = ih(b, "googlefcPresent");
        var c = void 0 === c ? B : c;
        c.googlefc && !b && ik("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function yP(a, b) {
        var c = b.dg;
        b = b.uspString;
        c ? eG(a, c) : gD(a, !0);
        b && E(a, 1, b)
    }

    function zP(a) {
        var b = X(Oo),
            c = W(Mo);
        if (0 >= b && !c) return null;
        var d = Pi(),
            e = mO(a.pubWin);
        if (!e) return null;
        a.D = "0";
        return (c ? e : r.Promise.race([e, xh(b, "0")])).then(function(f) {
            ik("adsense_paw", {
                time: Pi() - d
            });
            (null == f ? void 0 : f.length) > X(No) ? jk(809, Error("ML:" + f.length)) : a.D = f
        }).catch(function(f) {
            jk(809, f)
        })
    }

    function AP(a) {
        var b = Pi();
        return r.Promise.race([gk(832, function() {
            return CO(a)
        }), xh(200)]).then(function(c) {
            var d, e = null != (d = null == c ? void 0 : c.status) ? d : 100;
            ik("afc_etu", {
                etus: e,
                sig: Pi() - b,
                tms: 200
            });
            return null == c ? void 0 : c.tb
        })
    }

    function BP(a) {
        var b = X(Ro);
        return r.Promise.race([hk(779, function() {
            var c = W(qL() ? sq : rq),
                d = W(uq);
            return AL(new oL(a, c, d))
        })(), xh(b)])
    }

    function CP(a) {
        var b, c, d, e, f, g, h, k;
        return Ja(function(l) {
            switch (l.j) {
                case 1:
                    return b = zP(a), c = gk(868, function() {
                        return AP(a.pubWin)
                    }), fL(xd(a.ha, 8)), UD(a.pubWin), xP(a.G.google_ad_client), d = new uO(a.pubWin), za(l, vO(d) ? wO(d) : r.Promise.resolve(null), 2);
                case 2:
                    return a.l = new fD, e = [fG(a), wP(a.pubWin)], za(l, r.Promise.all(e), 3);
                case 3:
                    f = l.B;
                    yP(a.l, {
                        dg: f[0],
                        uspString: f[1]
                    });
                    if (!tL(a.pubWin, DE(), xd(a.ha, 8))) {
                        l.j = 4;
                        break
                    }
                    g = a.l;
                    h = BP(!!ld(g, 5));
                    if (W(xq)) {
                        fk.Ma(962, h);
                        l.j = 4;
                        break
                    }
                    return za(l, h, 4);
                case 4:
                    if (W(Mo)) {
                        l.j =
                            7;
                        break
                    }
                    return za(l, b, 7);
                case 7:
                    return k = a, za(l, c, 9);
                case 9:
                    return k.tb = l.B || "", za(l, sP(a), 0)
            }
        })
    }

    function uP(a) {
        var b = a.l;
        a = a.G;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!ld(b, 5) && !ld(b, 6) && !pC() && !ld(b, 9)
    }

    function gP(a) {
        var b = a.pubWin.document,
            c = a.G,
            d = c.google_ad_width,
            e = c.google_ad_height,
            f = 0;
        try {
            !1 === c.google_allow_expandable_ads && (f |= 1);
            if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2;
            c = navigator;
            var g = c.userAgent,
                h = c.platform,
                k = c.product;
            if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(h) && /^Opera/.test(g)) var l = !1;
            else if (/Win/.test(h) && /Trident/.test(g) && 11 <= b.documentMode) l = !0;
            else {
                var m = (/WebKit\/(\d+)/.exec(g) || [0, 0])[1],
                    n = (/rv:(\d+\.\d+)/.exec(g) || [0, 0])[1];
                l = !m && "Gecko" === k && 27 <= n && !/ rv: 1\.8([^.] |\.0) /.test(g) || 536 <= m ? !0 : !1
            }
            l || (f |= 4);
            Oq(a.pubWin, d, e) && (f |= 2)
        } catch (u) {
            f |= 8
        }
        a.B = f;
        0 === a.B || (a.G.google_allow_expandable_ads = !1);
        yh(a.pubWin) !== a.pubWin && (a.j |= 4);
        3 === uG(a.pubWin.document) && (a.j |= 32);
        if (b = a.J) b = a.J, b = !(Wk(b).scrollWidth <= Rk(b));
        b && (a.j |= 1024);
        var p;
        if (null == (p = a.pubWin.Prototype) ? 0 : p.Version) a.j |= 16384;
        a.G.google_loader_features_used && (a.j |= a.G.google_loader_features_used);
        a.F = 2;
        return CP(a)
    }

    function vP(a) {
        var b = hC(),
            c = a.google_ad_section;
        AF(a) && mC(b, 15);
        if (ti(a)) {
            if (100 < mC(b, 5)) return !1
        } else if (100 < mC(b, 6) - jC(b, 15, 0) && "" === c) return !1;
        return !0
    }

    function dP(a) {
        var b = a.J;
        if (b && !eC(b).ads_density_stats_processed && !Gh(b) && (eC(b).ads_density_stats_processed = !0, W(kp) || .01 > Tg())) {
            var c = function() {
                if (b) {
                    var d = bB(dB(b), a.G.google_ad_client, b.location.hostname, ME(a.G).split(","));
                    ik("ama_stats", d, 1)
                }
            };
            wh(b, function() {
                B.setTimeout(c, 1E3)
            })
        }
    }

    function fP(a) {
        a && !eC(a).host_pinged_back && (eC(a).host_pinged_back = !0, ik("abg_host", {
            host: a.location.host
        }, .01))
    };
    (function(a, b, c) {
        gk(843, function() {
            if (!B.google_sa_impl) {
                var d = RN(a);
                ON(xd(d, 2));
                EE(nd(d, 6));
                zk(16, [3, d.toJSON()]);
                var e = PN({
                        Ve: b,
                        bg: xd(d, 2)
                    }),
                    f = c(e, d);
                B.google_sa_impl = function(h) {
                    return Ja(function(k) {
                        return k.return(QO({
                            ha: d,
                            ca: f,
                            Za: e,
                            slot: h
                        }))
                    })
                };
                KE();
                var g;
                null == (g = B.google_process_slots) || g.call(B);
                g = (B.Prototype || {}).Version;
                null != g && ik("prtpjs", {
                    version: g
                })
            }
        })
    })(QN, "m202209060101", function(a, b) {
        var c = 2012 < md(b, 1, 0) ? "_fy" + md(b, 1, 0) : "",
            d = xd(b, 3);
        b = xd(b, 2);
        return {
            Sf: R(WE, b, d, c),
            Rf: R(XE, b, d, c),
            Zd: R(YE, a, c),
            Xe: R(ZE, a, c),
            hg: R($E, b, d),
            ig: R(aF, b, d),
            Hb: R(bF, a, c),
            vb: R(cF, a, c),
            xc: R(dF, a, c)
        }
    });
}).call(this, "[2012,\"r20220907\",\"r20110914\",null,null,null,null,\".google.co.id\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759876,44759927,44759837]]");