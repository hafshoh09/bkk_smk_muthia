(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n, aa;

    function ba(a) {
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
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        p = {},
        ha = {};

    function r(a, b) {
        var c = ha[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function u(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in p ? f = p : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    u("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.h = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    u("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ia(a) {
        a = {
            next: a
        };
        a[r(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function ja(a) {
        return a.raw = a
    }

    function v(a) {
        var b = "undefined" != typeof p.Symbol && r(p.Symbol, "iterator") && a[r(p.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function ka(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    }

    function la(a) {
        return a instanceof Array ? a : ka(v(a))
    }

    function ma(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var na = fa && "function" == typeof r(Object, "assign") ? r(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ma(d, e) && (a[e] = d[e])
        }
        return a
    };
    u("Object.assign", function(a) {
        return a || na
    }, "es6");
    var oa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        pa;
    if (fa && "function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                    a: !0
                },
                sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {}
            qa = !1
        }
        pa = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ta = pa;

    function w(a, b) {
        a.prototype = oa(b.prototype);
        a.prototype.constructor = a;
        if (ta) ta(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.bc = b.prototype
    }

    function ua() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    u("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.j = void 0;
            this.i = [];
            this.B = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.h = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.i = function(g) {
            if (null == this.h) {
                this.h = [];
                var h = this;
                this.j(function() {
                    h.m()
                })
            }
            this.h.push(g)
        };
        var e = ea.setTimeout;
        c.prototype.j = function(g) {
            e(g, 0)
        };
        c.prototype.m = function() {
            for (; this.h && this.h.length;) {
                var g = this.h;
                this.h = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(g) {
            this.j(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.R),
                reject: g(this.m)
            }
        };
        b.prototype.R = function(g) {
            if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.V(g);
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
                h ? this.P(g) : this.v(g)
            }
        };
        b.prototype.P = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.m(k);
                return
            }
            "function" == typeof h ? this.ha(h, g) : this.v(g)
        };
        b.prototype.m = function(g) {
            this.D(2, g)
        };
        b.prototype.v = function(g) {
            this.D(1, g)
        };
        b.prototype.D = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.j = h;
            2 === this.h && this.T();
            this.H()
        };
        b.prototype.T = function() {
            var g = this;
            e(function() {
                if (g.J()) {
                    var h = ea.console;
                    "undefined" !== typeof h && h.error(g.j)
                }
            }, 1)
        };
        b.prototype.J =
            function() {
                if (this.B) return !1;
                var g = ea.CustomEvent,
                    h = ea.Event,
                    k = ea.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.j;
                return k(g)
            };
        b.prototype.H = function() {
            if (null != this.i) {
                for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                this.i = null
            }
        };
        var f = new c;
        b.prototype.V = function(g) {
            var h = this.l();
            g.ja(h.resolve, h.reject)
        };
        b.prototype.ha = function(g, h) {
            var k = this.l();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(t, z) {
                return "function" == typeof t ? function(L) {
                    try {
                        l(t(L))
                    } catch (C) {
                        m(C)
                    }
                } : z
            }
            var l, m, q = new b(function(t, z) {
                l = t;
                m = z
            });
            this.ja(k(g, l), k(h, m));
            return q
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.ja = function(g, h) {
            function k() {
                switch (l.h) {
                    case 1:
                        g(l.j);
                        break;
                    case 2:
                        h(l.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            null == this.i ? f.i(k) : this.i.push(k);
            this.B = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = v(g), m = l.next(); !m.done; m = l.next()) d(m.value).ja(h, k)
            })
        };
        b.all = function(g) {
            var h = v(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function q(L) {
                    return function(C) {
                        t[L] = C;
                        z--;
                        0 == z && l(t)
                    }
                }
                var t = [],
                    z = 0;
                do t.push(void 0), z++, d(k.value).ja(q(t.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    u("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    u("WeakMap", function(a) {
        function b(g) {
            this.h = (f += Math.random() + 1).toString();
            if (g) {
                g = v(g);
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
            if (!ma(g, e)) {
                var k = new c;
                ca(g, e, {
                    value: k
                })
            }
            if (!ma(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.h] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && ma(g, e) ? g[e][this.h] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && ma(g, e) && ma(g[e], this.h)
        };
        b.prototype.delete = function(g) {
            return d(g) && ma(g, e) && ma(g[e], this.h) ? delete g[e][this.h] : !1
        };
        return b
    }, "es6");
    u("Map", function(a) {
        function b() {
            var h = {};
            return h.N = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.h;
            return ia(function() {
                if (l) {
                    for (; l.head != h.h;) l = l.N;
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
            var m = h.i[l];
            if (m && ma(h.i, l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: m,
                        index: h,
                        C: q
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                C: void 0
            }
        }

        function e(h) {
            this.i = {};
            this.h = b();
            this.size = 0;
            if (h) {
                h = v(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(v([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.C ? l.C.value = k : (l.C = {
                next: this.h,
                N: this.h.N,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.C), this.h.N.next = l.C, this.h.N = l.C, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.C && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.C.N.next = h.C.next, h.C.next.N = h.C.N, h.C.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.h = this.h.N = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).C
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).C) && h.value
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
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[r(p.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function va(a, b) {
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
        e[r(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    u("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    u("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    u("Set", function(a) {
        function b(c) {
            this.h = new p.Map;
            if (c) {
                c = v(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(v([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return r(this.h, "values").call(this.h)
        };
        b.prototype.keys = r(b.prototype,
            "values");
        b.prototype[r(p.Symbol, "iterator")] = r(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");

    function wa(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    u("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = wa(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    u("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = wa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    u("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    u("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    u("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    u("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || r(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    u("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== wa(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    u("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = wa(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? r(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    u("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return p.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return p.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var x = this || self;

    function xa(a) {
        a = a.split(".");
        for (var b = x, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ya(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function za(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Aa(a) {
        return Object.prototype.hasOwnProperty.call(a, Ba) && a[Ba] || (a[Ba] = ++Ca)
    }
    var Ba = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ca = 0;

    function Da(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ea(a, b, c) {
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

    function Fa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Fa = Da : Fa = Ea;
        return Fa.apply(null, arguments)
    }

    function Ga(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ha(a, b) {
        a = a.split(".");
        var c = x;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ia(a) {
        return a
    };
    var Ja = (new Date).getTime();

    function Ka(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function La(a, b) {
        var c = 0;
        a = Ka(String(a)).split(".");
        b = Ka(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Ma(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ma(0 == f[2].length, 0 == g[2].length) || Ma(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function Ma(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Na() {
        var a = x.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function y(a) {
        return -1 != Na().indexOf(a)
    };

    function Oa() {
        return y("Trident") || y("MSIE")
    }

    function Pa() {
        return (y("Chrome") || y("CriOS")) && !y("Edge") || y("Silk")
    }

    function Qa(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[r(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    }

    function Ra() {
        var a = Na();
        if (Oa()) {
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
        a = Qa(b);
        return y("Opera") ? a(["Version", "Opera"]) :
            y("Edge") ? a(["Edge"]) : y("Edg/") ? a(["Edg"]) : y("Silk") ? a(["Silk"]) : Pa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Sa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ta(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ua(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Va(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Wa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Xa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ya(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Za(a, b) {
        return 0 <= Sa(a, b)
    }

    function $a(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function ab(a) {
        ab[" "](a);
        return a
    }
    ab[" "] = function() {};
    var bb = Oa();
    !y("Android") || Pa();
    Pa();
    !y("Safari") || Pa();
    var cb = {},
        db = null;

    function eb(a) {
        var b;
        void 0 === b && (b = 0);
        fb();
        b = cb[b];
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

    function gb(a) {
        var b = [];
        hb(a, function(c) {
            b.push(c)
        });
        return b
    }

    function hb(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = db[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        fb();
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

    function fb() {
        if (!db) {
            db = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                cb[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === db[f] && (db[f] = e)
                }
            }
        }
    };
    var ib = "undefined" !== typeof Uint8Array,
        jb = {};
    var kb;

    function lb(a) {
        if (jb !== jb) throw Error("illegal external caller");
        this.va = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    lb.prototype.isEmpty = function() {
        return null == this.va
    };
    var mb = "function" === typeof p.Symbol && "symbol" === typeof(0, p.Symbol)() ? (0, p.Symbol)(void 0) : void 0;

    function nb(a, b) {
        Object.isFrozen(a) || (mb ? a[mb] |= b : void 0 !== a.K ? a.K |= b : Object.defineProperties(a, {
            K: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function ob(a, b) {
        Object.isExtensible(a) && (mb ? a[mb] && (a[mb] &= ~b) : void 0 !== a.K && (a.K &= ~b))
    }

    function pb(a) {
        var b;
        mb ? b = a[mb] : b = a.K;
        return null == b ? 0 : b
    }

    function qb(a) {
        nb(a, 1);
        return a
    }

    function rb(a) {
        return a ? !!(pb(a) & 2) : !1
    }

    function sb(a) {
        nb(a, 16);
        return a
    }

    function tb(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        ob(a, 16)
    }

    function ub(a, b) {
        b ? nb(a, 8) : ob(a, 8)
    };
    var vb = {};

    function wb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var xb, yb = Object.freeze(qb([]));

    function zb(a) {
        if (rb(a.u)) throw Error("Cannot mutate an immutable Message");
    }
    var Ab = "undefined" != typeof p.Symbol && "undefined" != typeof p.Symbol.hasInstance;

    function Bb(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function Cb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (ib && null != a && a instanceof Uint8Array) return eb(a);
                    if (a instanceof lb) {
                        var b = a.va;
                        return null == b ? "" : "string" === typeof b ? b : a.va = eb(b)
                    }
                }
        }
        return a
    };

    function Db(a, b, c) {
        if (null != a) {
            if (Array.isArray(a)) a = Eb(a, b, c);
            else if (wb(a)) {
                var d = {},
                    e;
                for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (d[e] = Db(a[e], b, c));
                a = d
            } else a = b(a);
            return a
        }
    }

    function Eb(a, b, c) {
        var d = Array.prototype.slice.call(a);
        c(a, d);
        for (a = 0; a < d.length; a++) d[a] = Db(d[a], b, c);
        return d
    }

    function Fb(a) {
        if (a.Pa === vb) return a.toJSON();
        a = Cb(a);
        return Array.isArray(a) ? Eb(a, Fb, Gb) : a
    }

    function Gb() {};

    function Hb(a) {
        return a.h || (a.h = a.u[a.l + a.j] = {})
    }

    function A(a, b, c) {
        return -1 === b ? null : b >= a.l ? a.h ? a.h[b] : void 0 : (void 0 === c ? 0 : c) && a.h && (c = a.h[b], null != c) ? c : a.u[b + a.j]
    }

    function B(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        (void 0 === e ? 0 : e) || zb(a);
        a.m && (a.m = void 0);
        if (b >= a.l || d) return Hb(a)[b] = c, a;
        void 0 !== a.h && a.l >= a.u.length ? (d = a.u.length - 1, e = b + a.j, e >= d ? (a.u[d] = void 0, a.u[e] = c, a.u.push(a.h)) : a.u[e] = c) : a.u[b + a.j] = c;
        void 0 !== a.h && b in a.h && delete a.h[b];
        return a
    }

    function Ib(a, b, c) {
        return void 0 !== Jb(a, b, Kb(a, Lb, c))
    }

    function Mb(a, b, c, d) {
        var e = A(a, b, d);
        Array.isArray(e) ? e && pb(e) & 1 || qb(e) : e = yb;
        if (rb(a.u)) c & 1 || (nb(e, 2), Object.freeze(e));
        else if (e === yb || rb(e)) e = qb(Array.prototype.slice.call(e)), B(a, b, e, d);
        return e
    }

    function Nb(a, b, c) {
        return Mb(a, b, 0, void 0 === c ? !1 : c)
    }

    function Ob(a, b) {
        a = A(a, b);
        return null == a ? a : !!a
    }

    function D(a, b, c) {
        a = A(a, b);
        return null == a ? c : a
    }

    function E(a, b, c) {
        a = Ob(a, b);
        return null == a ? void 0 === c ? !1 : c : a
    }

    function Pb(a, b) {
        a = A(a, b);
        a = null == a ? a : +a;
        return null == a ? 0 : a
    }

    function Qb(a, b, c) {
        null == c ? c = yb : qb(c);
        return B(a, b, c)
    }

    function Rb(a, b, c) {
        zb(a);
        0 !== c ? B(a, b, c) : B(a, b, void 0, !1);
        return a
    }

    function Sb(a, b, c, d) {
        zb(a);
        (c = Tb(a, c)) && c !== b && null != d && B(a, c, void 0, !1);
        return B(a, b, d)
    }

    function Kb(a, b, c) {
        return Tb(a, b) === c ? c : -1
    }

    function Tb(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != A(a, e) && (0 !== c && B(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function Jb(a, b, c, d) {
        var e = A(a, c, d);
        var f = !1;
        var g = null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.Pa !== vb ? f ? new b(e) : void 0 : e;
        g !== e && null != g && (B(a, c, g, d, !0), nb(g.u, pb(a.u) & -33));
        return g
    }

    function F(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = Jb(a, b, c, d);
        if (null == b) return b;
        rb(b.u) && !rb(a.u) && (b = b.ua(), B(a, c, b, d));
        return b
    }

    function Ub(a, b, c, d, e) {
        e = void 0 === e ? !0 : e;
        a.i || (a.i = {});
        var f = a.i[c];
        d = Mb(a, c, 2, d);
        var g = !!(pb(a.u) & 16),
            h = rb(d);
        h = rb(a.u) || h;
        if (!f) {
            f = [];
            for (var k = h, l = 0; l < d.length; l++) {
                var m = d[l];
                k = k || rb(m);
                var q = b,
                    t = g,
                    z = !1;
                z = void 0 === z ? !1 : z;
                t = void 0 === t ? !1 : t;
                m = Array.isArray(m) ? new q(t ? sb(m) : m) : z ? new q : void 0;
                void 0 !== m && (f.push(m), h && nb(m.u, 2))
            }
            a.i[c] = f;
            ub(d, !k)
        }
        b = h || e;
        e = rb(f);
        b && !e && (Object.isFrozen(f) && (a.i[c] = f = f.slice()), nb(f, 2), Object.freeze(f));
        !b && e && (a.i[c] = f = f.slice());
        return f
    }

    function G(a, b, c) {
        var d = void 0 === d ? !1 : d;
        var e = rb(a.u);
        b = Ub(a, b, c, d, e);
        a = Nb(a, c, d);
        if (!(c = e) && (c = a)) {
            if (!a) throw Error("cannot check mutability state of non-array");
            c = !(pb(a) & 8)
        }
        if (c) {
            for (c = 0; c < b.length; c++)(d = b[c]) && rb(d.u) && !e && (b[c] = b[c].ua(), a[c] = b[c].u);
            ub(a, !0)
        }
        return b
    }

    function Vb(a, b, c) {
        zb(a);
        null == c && (c = void 0);
        return B(a, b, c)
    }

    function Wb(a, b, c, d) {
        zb(a);
        null == d && (d = void 0);
        return Sb(a, b, c, d)
    }

    function Xb(a, b, c) {
        zb(a);
        if (null != c) {
            var d = qb([]);
            for (var e = !1, f = 0; f < c.length; f++) d[f] = c[f].u, e = e || rb(d[f]);
            a.i || (a.i = {});
            a.i[b] = c;
            ub(d, !e)
        } else a.i && (a.i[b] = void 0), d = yb;
        return B(a, b, d)
    }

    function Yb(a, b) {
        return D(a, b, "")
    }

    function Zb(a, b, c) {
        return D(a, Kb(a, c, b), 0)
    }

    function $b(a, b, c, d) {
        return F(a, b, Kb(a, d, c))
    };

    function ac(a, b, c) {
        a || (a = bc);
        bc = null;
        var d = this.constructor.h || 0,
            e = 0 < d,
            f = this.constructor.messageId;
        a ? pb(a) & 16 && nb(a, 32) : (a = f ? [f] : [], nb(a, 48));
        e && 0 < a.length && wb(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.j = (f ? 0 : -1) - d;
        this.i = void 0;
        this.u = a;
        a: {
            f = this.u.length;d = f - 1;
            if (f && (f = this.u[d], wb(f))) {
                this.h = f;
                b = r(Object, "keys").call(Object, f);
                if (f = 0 < b.length) b: {
                    f = isNaN;a = b.length;
                    for (var g = "string" === typeof b ? b.split("") : b, h = 0; h < a; h++)
                        if (h in g && !f.call(void 0, g[h], h, b)) {
                            f = !1;
                            break b
                        }
                    f = !0
                }
                f ? this.l = Number.MAX_VALUE :
                    this.l = d - this.j;
                break a
            }
            void 0 !== b && -1 < b ? (this.l = Math.max(b, d + 1 - this.j), this.h = void 0) : this.l = Number.MAX_VALUE
        }
        if (!e && this.h && "g" in this.h) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = 0; e < c.length; e++) d = c[e], d < this.l ? (d += this.j, (b = this.u[d]) ? Array.isArray(b) && qb(b) : this.u[d] = yb) : (b = Hb(this), (f = b[d]) ? Array.isArray(f) && qb(f) : b[d] = yb)
    }
    ac.prototype.toJSON = function() {
        var a = this.u;
        return xb ? a : Eb(a, Fb, Gb)
    };

    function cc(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        bc = b = sb(b);
        a = new a(b);
        bc = null;
        return a
    }
    ac.prototype.Pa = vb;

    function dc(a, b) {
        return Cb(b)
    }
    var bc;

    function ec(a, b, c, d, e, f) {
        (a = a.i && a.i[c]) ? (e = f.ra ? qb(a.slice()) : a, Xb(b, c, e)) : (ib && d instanceof Uint8Array ? e = d.length ? new lb(new Uint8Array(d)) : kb || (kb = new lb(null)) : (Array.isArray(d) && (e ? nb(d, 2) : d && pb(d) & 1 && f.ra ? (e = Array.prototype.slice.call(d), f = (pb(d) | 0) & -51, mb ? e[mb] = f : void 0 !== e.K ? e.K = f : Object.defineProperties(e, {
            K: {
                value: f,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }), d = e) : tb(d)), e = d), B(b, c, e))
    };

    function fc() {
        ac.apply(this, arguments)
    }
    w(fc, ac);
    fc.prototype.ua = function() {
        return this
    };
    if (Ab) {
        var gc = {};
        Object.defineProperties(fc, (gc[p.Symbol.hasInstance] = Bb(function() {
            throw Error(void 0);
        }), gc))
    };

    function hc(a) {
        return null !== a && void 0 !== a
    }
    var ic = void 0;

    function jc(a, b) {
        var c = ic;
        ic = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function H() {
        fc.apply(this, arguments)
    }
    w(H, fc);
    H.prototype.ua = function() {
        if (rb(this.u)) {
            var a = {
                ra: !0
            };
            var b = rb(this.u);
            if (b && !a.ra) throw Error("copyRepeatedFields must be true for frozen messages");
            b || tb(this.u);
            var c = new this.constructor;
            this.v && (c.v = this.v.slice());
            for (var d = this.u, e = 0; e < d.length; e++) {
                var f = d[e];
                if (e === d.length - 1 && wb(f))
                    for (var g in f) {
                        if (Object.prototype.hasOwnProperty.call(f, g)) {
                            var h = +g;
                            r(Number, "isNaN").call(Number, h) ? Hb(c)[g] = f[g] : ec(this, c, h, f[g], b, a)
                        }
                    } else ec(this, c, e - this.j, f, b, a)
            }
            c.m = this;
            a = c
        } else a = this;
        return a
    };
    if (Ab) {
        var kc = {};
        Object.defineProperties(H, (kc[p.Symbol.hasInstance] = Bb(Object[p.Symbol.hasInstance]), kc))
    };

    function lc(a) {
        H.call(this, a, -1, mc)
    }
    w(lc, H);

    function nc(a) {
        H.call(this, a)
    }
    w(nc, H);
    var mc = [2, 3];

    function oc(a, b) {
        this.i = a === pc && b || "";
        this.h = qc
    }
    var qc = {},
        pc = {};
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function rc(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function sc(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function tc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function uc(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var vc;

    function wc() {
        if (void 0 === vc) {
            var a = null,
                b = x.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ia,
                        createScript: Ia,
                        createScriptURL: Ia
                    })
                } catch (c) {
                    x.console && x.console.error(c.message)
                }
                vc = a
            } else vc = a
        }
        return vc
    };
    var xc = {};

    function yc(a, b) {
        this.h = b === xc ? a : ""
    }
    yc.prototype.toString = function() {
        return this.h.toString()
    };

    function zc(a, b) {
        this.h = b === Ac ? a : ""
    }
    zc.prototype.toString = function() {
        return this.h + ""
    };

    function Bc(a, b) {
        a = Cc.exec(Dc(a).toString());
        var c = a[3] || "";
        return Ec(a[1] + Fc("?", a[2] || "", b) + Fc("#", c))
    }

    function Dc(a) {
        return a instanceof zc && a.constructor === zc ? a.h : "type_error:TrustedResourceUrl"
    }
    var Cc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Ac = {};

    function Ec(a) {
        var b = wc();
        a = b ? b.createScriptURL(a) : a;
        return new zc(a, Ac)
    }

    function Fc(a, b, c) {
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

    function Gc(a, b) {
        this.h = b === Hc ? a : ""
    }
    Gc.prototype.toString = function() {
        return this.h.toString()
    };
    var Hc = {};
    var Ic;
    try {
        new URL("s://g"), Ic = !0
    } catch (a) {
        Ic = !1
    }
    var Jc = Ic;
    var Kc = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function Lc(a, b, c) {
        if (b instanceof zc) a.href = Dc(b).toString();
        else {
            if (-1 === Kc.indexOf(c)) throw Error('TrustedResourceUrl href attribute required with rel="' + c + '"');
            if (b instanceof Gc) b = b instanceof Gc && b.constructor === Gc ? b.h : "type_error:SafeUrl";
            else {
                b: if (Jc) {
                    try {
                        var d = new URL(b)
                    } catch (e) {
                        d = "https:";
                        break b
                    }
                    d = d.protocol
                } else c: {
                    d = document.createElement("a");
                    try {
                        d.href = b
                    } catch (e) {
                        d = void 0;
                        break c
                    }
                    d = d.protocol;d = ":" === d || "" === d ? "https:" : d
                }
                b = "javascript:" !== d ? b : void 0
            }
            if (void 0 === b) return;
            a.href = b
        }
        a.rel =
            c
    };

    function Mc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Nc(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Oc(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Pc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Qc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };

    function Rc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Sc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ya(f) || za(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (za(f)) {
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
                Ta(g ? $a(f) : f, d)
            }
        }
    }

    function Tc(a) {
        this.h = a || x.document || document
    }
    n = Tc.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.h).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.h;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.h.createTextNode(String(a))
    };
    n.append = function(a, b) {
        Sc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Uc() {
        return !Vc() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"))
    }

    function Vc() {
        return y("iPad") || y("Android") && !y("Mobile") || y("Silk")
    };
    var Wc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Xc = /#|$/;

    function Yc(a) {
        var b = a.search(Xc),
            c;
        a: {
            for (c = 0; 0 <= (c = a.indexOf("client", c)) && c < b;) {
                var d = a.charCodeAt(c - 1);
                if (38 == d || 63 == d)
                    if (d = a.charCodeAt(c + 6), !d || 61 == d || 38 == d || 35 == d) break a;
                c += 7
            }
            c = -1
        }
        if (0 > c) return null;
        d = a.indexOf("&", c);
        if (0 > d || d > b) d = b;
        return decodeURIComponent(a.slice(c + 7, -1 !== d ? d : 0).replace(/\+/g, " "))
    };

    function Zc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    ab(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function $c(a) {
        return Zc(a.top) ? a.top : null
    }

    function ad(a, b) {
        var c = bd("SCRIPT", a);
        c.src = Dc(b);
        var d, e;
        (d = (b = null == (e = (d = (c.ownerDocument && c.ownerDocument.defaultView || window).document).querySelector) ? void 0 : e.call(d, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function cd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function dd(a, b) {
        if (!ed() && !fd()) {
            var c = Math.random();
            if (c < b) return c = id(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function id() {
        if (!p.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            p.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function jd(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function kd(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var fd = Nc(function() {
            return Wa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], ld) || 1E-4 > Math.random()
        }),
        ed = Nc(function() {
            return ld("MSIE")
        });

    function ld(a) {
        return -1 != Na().indexOf(a)
    }
    var md = /^([0-9.]+)px$/,
        nd = /^(-?[0-9.]{1,30})$/;

    function od(a) {
        if (!nd.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function J(a) {
        return (a = md.exec(a)) ? +a[1] : null
    }

    function pd(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var qd = Nc(function() {
        return Uc() ? 2 : Vc() ? 1 : 0
    });

    function rd(a, b) {
        jd(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    }
    var sd = [];

    function td() {
        var a = sd;
        sd = [];
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function ud(a, b) {
        if (a.length && b.head) {
            a = v(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = bd("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    }

    function vd(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function wd(a) {
        var b = xd;
        "complete" === b.readyState || "interactive" === b.readyState ? (sd.push(a), 1 == sd.length && (p.Promise ? p.Promise.resolve().then(td) : window.setImmediate ? setImmediate(td) : setTimeout(td, 0))) : b.addEventListener("DOMContentLoaded", a)
    }

    function bd(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var yd = null;
    var xd = document,
        K = window;
    var zd = null;

    function Ad(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        x.google_logging_queue || (c = !0, x.google_logging_queue = []);
        x.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == zd) {
                zd = !1;
                try {
                    var d = $c(x);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (zd = !0);
                    x.localStorage.getItem("google_logging") && (zd = !0)
                } catch (e) {}
            }
            a = zd
        }
        a && (d = x.document, a = new oc(pc, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = Ec(a instanceof oc && a.constructor === oc && a.h === qc ? a.i : "type_error:Const"), ad(d, a))
    };

    function Bd(a) {
        a = void 0 === a ? x : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Cd(a) {
        return (a = void 0 === a ? Bd() : a) ? Zc(a.master) ? a.master : null : null
    };

    function Dd(a) {
        var b = ua.apply(1, arguments);
        if (0 === b.length) return Ec(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Ec(c.join(""))
    };

    function Ed(a) {
        var b = void 0 === b ? 1 : b;
        a = Cd(Bd(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function Fd(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    function Gd() {
        var a = void 0 === a ? K : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function Hd(a) {
        if (!a) return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var Id = {
        Nb: 0,
        Mb: 1,
        Jb: 2,
        Eb: 3,
        Kb: 4,
        Fb: 5,
        Lb: 6,
        Hb: 7,
        Ib: 8,
        Db: 9,
        Gb: 10
    };
    var Jd = {
        Pb: 0,
        Qb: 1,
        Ob: 2
    };

    function Kd() {
        this.i = new Ld(this);
        this.h = 0
    }
    Kd.prototype.resolve = function(a) {
        Md(this);
        this.h = 1;
        this.l = a;
        Nd(this.i)
    };
    Kd.prototype.reject = function(a) {
        Md(this);
        this.h = 2;
        this.j = a;
        Nd(this.i)
    };

    function Md(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }

    function Ld(a) {
        this.h = a
    }
    Ld.prototype.then = function(a, b) {
        if (this.i) throw Error("Then functions already set.");
        this.i = a;
        this.j = b;
        Nd(this)
    };

    function Nd(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function Od() {
        this.v = this.v;
        this.B = this.B
    }
    Od.prototype.v = !1;
    Od.prototype.j = function() {
        if (this.B)
            for (; this.B.length;) this.B.shift()()
    };

    function Pd(a) {
        this.h = a.slice(0)
    }
    n = Pd.prototype;
    n.forEach = function(a) {
        var b = this;
        this.h.forEach(function(c, d) {
            return void a(c, d, b)
        })
    };
    n.filter = function(a) {
        return new Pd(Ua(this.h, a))
    };
    n.apply = function(a) {
        return new Pd(a(this.h.slice(0)))
    };
    n.sort = function(a) {
        return new Pd(this.h.slice(0).sort(a))
    };
    n.get = function(a) {
        return this.h[a]
    };
    n.add = function(a) {
        var b = this.h.slice(0);
        b.push(a);
        return new Pd(b)
    };

    function Qd(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function Rd() {
        this.h = {};
        this.i = {}
    }
    Rd.prototype.set = function(a, b) {
        var c = Sd(a);
        this.h[c] = b;
        this.i[c] = a
    };
    Rd.prototype.get = function(a, b) {
        a = Sd(a);
        return void 0 !== this.h[a] ? this.h[a] : b
    };
    Rd.prototype.clear = function() {
        this.h = {};
        this.i = {}
    };

    function Sd(a) {
        return a instanceof Object ? String(Aa(a)) : a + ""
    };

    function Td(a, b) {
        this.h = a;
        this.i = b
    }

    function Ud(a) {
        return null != a.h ? a.h.value : null
    }

    function Vd(a, b) {
        null != a.h && b(a.h.value);
        return a
    }
    Td.prototype.map = function(a) {
        return null != this.h ? (a = a(this.h.value), a instanceof Td ? a : Wd(a)) : this
    };

    function Xd(a, b) {
        null != a.h || b(a.i);
        return a
    }

    function Wd(a) {
        return new Td({
            value: a
        }, null)
    }

    function Yd(a) {
        return new Td(null, a)
    }

    function Zd(a) {
        try {
            return Wd(a())
        } catch (b) {
            return Yd(b)
        }
    };

    function $d(a) {
        this.h = new Rd;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    $d.prototype.add = function(a) {
        this.h.set(a, !0)
    };
    $d.prototype.contains = function(a) {
        return void 0 !== this.h.h[Sd(a)]
    };

    function ae() {
        this.h = new Rd
    }
    ae.prototype.set = function(a, b) {
        var c = this.h.get(a);
        c || (c = new $d, this.h.set(a, c));
        c.add(b)
    };

    function M(a) {
        H.call(this, a, -1, be)
    }
    w(M, H);
    M.prototype.getId = function() {
        return A(this, 3)
    };
    var be = [4];

    function ce(a) {
        var b = void 0 === a.Ia ? void 0 : a.Ia,
            c = void 0 === a.nb ? void 0 : a.nb,
            d = void 0 === a.Ta ? void 0 : a.Ta;
        this.h = void 0 === a.gb ? void 0 : a.gb;
        this.l = new Pd(b || []);
        this.j = d;
        this.i = c
    };

    function de(a) {
        var b = [],
            c = a.l;
        c && c.h.length && b.push({
            Y: "a",
            da: ee(c)
        });
        null != a.h && b.push({
            Y: "as",
            da: a.h
        });
        null != a.i && b.push({
            Y: "i",
            da: String(a.i)
        });
        null != a.j && b.push({
            Y: "rp",
            da: String(a.j)
        });
        b.sort(function(d, e) {
            return d.Y.localeCompare(e.Y)
        });
        b.unshift({
            Y: "t",
            da: "aa"
        });
        return b
    }

    function ee(a) {
        a = a.h.slice(0).map(fe);
        a = JSON.stringify(a);
        return kd(a)
    }

    function fe(a) {
        var b = {};
        null != A(a, 7) && (b.q = A(a, 7));
        null != A(a, 2, !1) && (b.o = A(a, 2));
        null != A(a, 5, !1) && (b.p = A(a, 5));
        return b
    };

    function ge(a) {
        H.call(this, a)
    }
    w(ge, H);
    ge.prototype.setLocation = function(a) {
        return B(this, 1, a)
    };

    function he(a, b) {
        this.Ka = a;
        this.Sa = b
    }

    function ie(a) {
        var b = [].slice.call(arguments).filter(Mc(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.Ka || []);
            d = r(Object, "assign").call(Object, d, e.Sa)
        });
        return new he(c, d)
    }

    function je(a) {
        switch (a) {
            case 1:
                return new he(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new he(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new he(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new he(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function ke(a) {
        if (null == a) a = null;
        else {
            var b = de(a);
            a = [];
            b = v(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.da);
                a.push(c.Y + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new he(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var le = {},
        me = new he(["google-auto-placed"], (le.google_reactive_ad_format = 40, le.google_tag_origin = "qs", le));

    function ne(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = bd("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests,
                        g = Sa(f, d);
                    0 <= g && Array.prototype.splice.call(f, g, 1)
                }
                Qc(d, "load", e);
                Qc(d, "error", e)
            };
            Pc(d, "load", e);
            Pc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }

    function oe(a) {
        var b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=dtt_err";
        jd(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        pe(c, b)
    }

    function pe(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : ne(c, a, void 0 === b ? !1 : b)
    };

    function qe() {
        this.j = "&";
        this.i = {};
        this.l = 0;
        this.h = []
    }

    function re(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function se(a, b, c, d, e) {
        var f = [];
        jd(a, function(g, h) {
            (g = te(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function te(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(te(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(se(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ue(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = ve(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(m, q) {
            return m - q
        });
        b = null;
        for (var e = "", f = 0; f < a.h.length; f++)
            for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = se(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }

    function ve(a) {
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function we() {
        this.h = Math.random()
    }

    function xe() {
        var a = ye,
            b = x.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function ze(a, b, c, d, e) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            if (c instanceof qe) var f = c;
            else f = new qe, jd(c, function(h, k) {
                var l = f,
                    m = l.l++;
                h = re(k, h);
                l.h.push(m);
                l.i[m] = h
            });
            var g = ue(f, "/pagead/gen_204?id=" + b + "&");
            g && ne(x, g, !1)
        } catch (h) {}
    };
    var Ae = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function Be() {
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
        this.floatingAdsStacking = new Ce;
        this.sideRailProcessedFixedElements = new p.Set;
        this.sideRailAvailableSpace = new p.Map
    }

    function De(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new p.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new p.Map)) : a.google_reactive_ads_global_state = new Be;
        return a.google_reactive_ads_global_state
    }

    function Ce() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function Ee(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function Fe(a) {
        return Ee(a).clientWidth
    };

    function Ge(a) {
        a = a.getBoundingClientRect();
        return 0 < a.width && 0 < a.height
    }

    function He(a) {
        var b = 0;
        a.forEach(function(c) {
            return b = Math.max(b, c.getBoundingClientRect().width)
        });
        return function(c) {
            return c.getBoundingClientRect().width > .5 * b
        }
    }

    function Ie(a) {
        var b = Ee(a).clientHeight || 0;
        return function(c) {
            return c.getBoundingClientRect().height >= .75 * b
        }
    }

    function Je(a, b) {
        return a.getBoundingClientRect().top - b.getBoundingClientRect().top
    };

    function Le(a) {
        H.call(this, a)
    }
    w(Le, H);

    function Me(a) {
        H.call(this, a)
    }
    w(Me, H);

    function Ne(a) {
        H.call(this, a, -1, Oe)
    }
    w(Ne, H);

    function Pe(a) {
        H.call(this, a)
    }
    w(Pe, H);
    var Oe = [1];

    function Qe(a) {
        H.call(this, a, -1, Re)
    }
    w(Qe, H);

    function Se(a) {
        H.call(this, a)
    }
    w(Se, H);
    var Re = [1];

    function Te(a) {
        H.call(this, a)
    }
    w(Te, H);

    function Ue(a) {
        H.call(this, a)
    }
    w(Ue, H);

    function Ve(a) {
        H.call(this, a, -1, We)
    }
    w(Ve, H);
    var We = [6, 7, 9, 10, 11];

    function Xe(a, b, c, d) {
        this.l = a;
        this.i = b;
        this.j = c;
        this.h = d
    }
    Xe.prototype.query = function(a) {
        var b = [];
        try {
            b = a.querySelectorAll(this.l)
        } catch (f) {}
        if (!b.length) return [];
        a = $a(b);
        a = Ye(this, a);
        "number" === typeof this.i && (b = this.i, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
        if ("number" === typeof this.j) {
            b = [];
            for (var c = 0; c < a.length; c++) {
                var d = Ze(a[c]),
                    e = this.j;
                0 > e && (e += d.length);
                0 <= e && e < d.length && b.push(d[e])
            }
            a = b
        }
        return a
    };
    Xe.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.l,
            occurrenceIndex: this.i,
            paragraphIndex: this.j,
            ignoreMode: this.h
        })
    };

    function Ye(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }

    function Ze(a) {
        var b = [];
        Qd(a.getElementsByTagName("p"), function(c) {
            100 <= $e(c) && b.push(c)
        });
        return b
    }

    function $e(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Qd(a.childNodes, function(c) {
            b += $e(c)
        });
        return b
    }

    function af(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function bf(a) {
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
    };

    function N(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function O(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? 0 : b
    }

    function cf(a, b) {
        b = void 0 === b ? [] : b;
        this.h = a;
        this.defaultValue = b
    };
    var df = new N(1084),
        ef = new N(1082, !0),
        ff = new O(62, .001),
        gf = new O(1130, 100),
        hf = new function(a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        jf = new N(316),
        kf = new N(313),
        lf = new N(369),
        mf = new N(1093),
        nf = new O(1098),
        of = new N(1129, !0),
        pf = new N(1128),
        qf = new N(1026),
        rf = new N(1090),
        sf = new N(1177),
        tf = new N(1053, !0),
        uf = new N(1100, !0),
        vf = new N(1171),
        wf = new N(1201, !0),
        xf = new O(1046),
        yf = new N(218),
        zf = new N(217),
        Af = new N(1179),
        Bf = new N(227),
        Cf = new N(1198),
        Df = new N(1206),
        Ef = new N(282),
        Ff = new N(1197, !0),
        Gf = new N(1086),
        Hf = new O(1079, 5),
        If = new cf(1934, ["A+cA2PUOfIOKAdSDJOW5CP9ZlxONy1yu+hqAq72zUtKw4rLdihqRp6Nui/jUyCyegr+BUtH+C+Elv0ufn05yBQEAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A+zsdH3aNZT/bkjT8U/o5ACzyaeNYzTvtoVmwf/KOilfv39pxY2AIsOwhQJv+YnXp98i3TqrQibIVtMWs5UHjgoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "AxceVEhIegcDEHqLXFQ2+vPKqzCppoJYsRCZ/BdfVnbM/sUUF2BXV8lwNosyYjvoxnTh2FC8cOlAnA5uULr/zAUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        Jf = new N(203),
        Kf = new N(84),
        Lf = new N(1162),
        Mf = new N(1175),
        Nf = new N(1120),
        Of = new N(1202),
        Pf = new O(1114, 1),
        Qf = new O(1110, 5),
        Rf = new O(1111, 5),
        Sf = new O(1112, 5),
        Tf = new O(1113, 5),
        Uf = new O(1104),
        Vf = new O(1108),
        Wf = new O(1106),
        Xf = new O(1107),
        Yf = new O(1105),
        Zf = new O(1115, 1),
        $f = new N(1121),
        ag = new N(1180),
        bg = new N(1144),
        cg = new N(1143),
        dg = new N(1186, !0),
        eg = new N(1928),
        fg = new N(1941),
        gg = new N(370946349),
        hg = new N(392736476),
        ig = new O(406149835),
        jg = new cf(1932),
        kg = new O(1935);

    function P(a) {
        var b = "ta";
        if (a.ta && a.hasOwnProperty(b)) return a.ta;
        b = new a;
        return a.ta = b
    };

    function lg() {
        var a = {};
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function() {}
    }

    function Q(a) {
        return P(lg).i(a.h, a.defaultValue)
    }

    function R(a) {
        return P(lg).j(a.h, a.defaultValue)
    }

    function mg() {
        return P(lg).l(hf.h, hf.defaultValue)
    };

    function ng(a, b, c) {
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
        bf(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function og(a, b, c) {
        function d(f) {
            f = pg(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = pg(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: qg(a.previousSibling, e),
                    ka: function(f) {
                        return qg(f.previousSibling, e)
                    },
                    na: 0
                };
            case 2:
                return {
                    init: qg(a.lastChild, e),
                    ka: function(f) {
                        return qg(f.previousSibling, e)
                    },
                    na: 0
                };
            case 3:
                return {
                    init: qg(a.nextSibling, d),
                    ka: function(f) {
                        return qg(f.nextSibling, d)
                    },
                    na: 3
                };
            case 1:
                return {
                    init: qg(a.firstChild, d),
                    ka: function(f) {
                        return qg(f.nextSibling, d)
                    },
                    na: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function pg(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function qg(a, b) {
        return a && b(a) ? a : null
    };
    var rg = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function sg(a) {
        return "string" === typeof a
    }

    function tg(a) {
        return void 0 === a
    };

    function ug(a) {
        H.call(this, a, -1, vg)
    }
    w(ug, H);
    var vg = [2, 8],
        wg = [3, 4, 5],
        xg = [6, 7];
    var yg;
    yg = {
        Rb: 0,
        bb: 3,
        cb: 4,
        eb: 5
    };
    var zg = yg.bb,
        Ag = yg.cb,
        Bg = yg.eb;

    function Cg(a) {
        return null != a ? !a : a
    }

    function Dg(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Eg(a, b) {
        var c = G(a, ug, 2);
        if (!c.length) return Fg(a, b);
        a = D(a, 1, 0);
        if (1 === a) return Cg(Eg(c[0], b));
        c = Va(c, function(d) {
            return function() {
                return Eg(d, b)
            }
        });
        switch (a) {
            case 2:
                return Dg(c, !1);
            case 3:
                return Dg(c, !0)
        }
    }

    function Fg(a, b) {
        var c = Tb(a, wg);
        a: {
            switch (c) {
                case zg:
                    var d = Zb(a, 3, wg);
                    break a;
                case Ag:
                    d = Zb(a, 4, wg);
                    break a;
                case Bg:
                    d = Zb(a, 5, wg);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, la(Nb(a, 8)))
            } catch (f) {
                return
            }
            b = D(a, 1, 0);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = Yb(a, Kb(a, xg, 7));
            else a: {
                switch (c) {
                    case Ag:
                        a = Pb(a, Kb(a, xg, 6));
                        break a;
                    case Bg:
                        a = Yb(a, Kb(a, xg, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === La(String(e), a);
                if (d) switch (b) {
                    case 7:
                        return e <
                            a;
                    case 8:
                        return e > a;
                    case 12:
                        return sg(a) && sg(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === La(String(e), a);
                    case 11:
                        return null != e && 1 === La(String(e), a)
                }
            }
        }
    }

    function Gg(a, b) {
        return !a || !(!b || !Eg(a, b))
    };

    function Hg(a) {
        H.call(this, a, -1, Ig)
    }
    w(Hg, H);
    var Ig = [4];

    function Jg(a) {
        H.call(this, a)
    }
    w(Jg, H);

    function Kg(a) {
        H.call(this, a, -1, Lg)
    }
    w(Kg, H);
    var Lg = [5],
        Mg = [1, 2, 3, 6, 7];

    function Ng(a) {
        H.call(this, a)
    }
    w(Ng, H);
    Ng.prototype.getWidth = function() {
        return D(this, 1, 0)
    };
    Ng.prototype.getHeight = function() {
        return D(this, 2, 0)
    };

    function Og(a) {
        H.call(this, a)
    }
    w(Og, H);

    function Pg(a) {
        H.call(this, a)
    }
    w(Pg, H);
    var Qg = [4, 5];

    function Rg(a) {
        H.call(this, a, -1, Sg)
    }
    w(Rg, H);

    function Tg(a, b) {
        return Vb(a, 1, b)
    }

    function Ug(a, b) {
        return Xb(a, 2, b)
    }

    function Vg(a, b) {
        return Qb(a, 4, b)
    }

    function Wg(a, b) {
        return Xb(a, 5, b)
    }

    function Xg(a, b) {
        return Rb(a, 6, b)
    }

    function Yg(a) {
        H.call(this, a)
    }
    w(Yg, H);
    Yg.prototype.W = function() {
        return D(this, 1, 0)
    };

    function Zg(a, b) {
        return Rb(a, 1, b)
    }

    function $g(a, b) {
        return Rb(a, 2, b)
    }

    function ah(a) {
        H.call(this, a)
    }
    w(ah, H);
    var Sg = [2, 4, 5],
        bh = [1, 2];

    function ch(a) {
        H.call(this, a, -1, dh)
    }
    w(ch, H);

    function eh(a) {
        H.call(this, a, -1, fh)
    }
    w(eh, H);
    var dh = [2, 3],
        fh = [5],
        gh = [1, 2, 3, 4];

    function hh(a) {
        H.call(this, a)
    }
    w(hh, H);
    hh.prototype.getTagSessionCorrelator = function() {
        return D(this, 2, 0)
    };

    function ih(a) {
        var b = new hh;
        return Wb(b, 4, jh, a)
    }
    var jh = [4, 5, 7];

    function kh(a) {
        a.Ua.apply(a, la(ua.apply(1, arguments).map(function(b) {
            return {
                ab: 4,
                message: b
            }
        })))
    }

    function lh(a) {
        a.Ua.apply(a, la(ua.apply(1, arguments).map(function(b) {
            return {
                ab: 7,
                message: b
            }
        })))
    };

    function mh(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.ab] = b.message.toJSON(), c)]
        })])
    };

    function nh(a, b) {
        if (p.globalThis.fetch) p.globalThis.fetch(a, {
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

    function oh(a, b, c, d) {
        this.m = a;
        this.l = b;
        this.v = c;
        this.j = d;
        this.i = [];
        this.h = null
    }

    function ph(a) {
        var b = mh(a.i);
        a.l(a.m + "?e=1", b);
        a.i = [];
        a.h = null
    }
    oh.prototype.Ua = function() {
        var a = this;
        this.i.push.apply(this.i, la(ua.apply(0, arguments)));
        this.i.length >= this.j ? (null !== this.h && clearTimeout(this.h), ph(this)) : null === this.h && (this.h = setTimeout(function() {
            ph(a)
        }, this.v))
    };

    function qh(a, b) {
        oh.call(this, "https://pagead2.googlesyndication.com/pagead/ping", nh, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b)
    }
    w(qh, oh);

    function rh(a, b, c) {
        var d = void 0 === d ? new qh(b) : d;
        this.i = a;
        this.m = c;
        this.j = d;
        this.h = [];
        this.l = 0 < this.i && id() < 1 / this.i
    }

    function sh(a, b, c, d, e, f) {
        var g = $g(Zg(new Yg, b), c);
        b = Xg(Ug(Tg(Wg(Vg(new Rg, d), e), g), a.h), f);
        b = ih(b);
        a.l && kh(a.j, th(a, b));
        if (1 === f || 3 === f || 4 === f && !a.h.some(function(h) {
                return h.W() === g.W() && D(h, 2, 0) === c
            })) a.h.push(g), 100 < a.h.length && a.h.shift()
    }

    function uh(a, b, c, d) {
        if (a.m) {
            var e = new ch;
            b = Xb(e, 2, b);
            c = Xb(b, 3, c);
            d && Rb(c, 1, d);
            d = new hh;
            d = Wb(d, 7, jh, c);
            a.l && kh(a.j, th(a, d))
        }
    }

    function th(a, b) {
        b = Rb(b, 1, Date.now());
        var c = vd(window);
        b = Rb(b, 2, c);
        return Rb(b, 6, a.i)
    };

    function vh() {
        var a = {};
        this.h = (a[zg] = {}, a[Ag] = {}, a[Bg] = {}, a)
    };
    var wh = /^true$/.test("false");

    function xh(a, b) {
        switch (b) {
            case 1:
                return Zb(a, 1, Mg);
            case 2:
                return Zb(a, 2, Mg);
            case 3:
                return Zb(a, 3, Mg);
            case 6:
                return Zb(a, 6, Mg);
            default:
                return null
        }
    }

    function yh(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return E(a, 1);
            case 7:
                return Yb(a, 3);
            case 2:
                return Pb(a, 2);
            case 3:
                return Yb(a, 3);
            case 6:
                return Nb(a, 4);
            default:
                return null
        }
    }
    var zh = Nc(function() {
        if (!wh) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function Ah(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, g;
        P(Bh).j[e] = null != (g = null == (f = P(Bh).j[e]) ? void 0 : f.add(b)) ? g : (new p.Set).add(b);
        e = zh();
        if (null != e[b]) return e[b];
        b = Ch(d)[b];
        if (!b) return c;
        b = new Kg(b);
        b = Dh(b);
        a = yh(b, a);
        return null != a ? a : c
    }

    function Dh(a) {
        var b = P(vh).h;
        if (b) {
            var c = Ya(G(a, Jg, 5), function(d) {
                return Gg(F(d, ug, 1), b)
            });
            if (c) return F(c, Hg, 2)
        }
        return F(a, Hg, 4)
    }

    function Bh() {
        this.i = {};
        this.l = [];
        this.j = {};
        this.h = new p.Map
    }

    function Eh(a, b, c) {
        return !!Ah(1, a, void 0 === b ? !1 : b, c)
    }

    function Fh(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(Ah(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Gh(a, b, c) {
        return Ah(3, a, void 0 === b ? "" : b, c)
    }

    function Hh(a, b, c) {
        b = void 0 === b ? [] : b;
        return Ah(6, a, b, c)
    }

    function Ch(a) {
        return P(Bh).i[a] || (P(Bh).i[a] = {})
    }

    function Ih(a, b) {
        var c = Ch(b);
        jd(a, function(d, e) {
            return c[e] = d
        })
    }

    function Jh(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            g = [];
        Ta(b, function(h) {
            var k = Ch(h);
            Ta(a, function(l) {
                var m = Tb(l, Mg),
                    q = xh(l, m);
                if (q) {
                    var t, z, L;
                    var C = null != (L = null == (t = P(Bh).h.get(h)) ? void 0 : null == (z = t.get(q)) ? void 0 : z.slice(0)) ? L : [];
                    a: {
                        t = new eh;
                        switch (m) {
                            case 1:
                                Sb(t, 1, gh, q);
                                break;
                            case 2:
                                Sb(t, 2, gh, q);
                                break;
                            case 3:
                                Sb(t, 3, gh, q);
                                break;
                            case 6:
                                Sb(t, 4, gh, q);
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        Qb(t, 5, C);m = t
                    }
                    if (C = m) {
                        var I;
                        C = !(null == (I = P(Bh).j[h]) || !I.has(q))
                    }
                    C && f.push(m);
                    if (I = m) {
                        var T;
                        I = !(null == (T = P(Bh).h.get(h)) ||
                            !T.has(q))
                    }
                    I && g.push(m);
                    e || (T = P(Bh), T.h.has(h) || T.h.set(h, new p.Map), T.h.get(h).has(q) || T.h.get(h).set(q, []), d && T.h.get(h).get(q).push(d));
                    k[q] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && uh(c, f, g, null != d ? d : void 0)
    }

    function Kh(a, b) {
        var c = Ch(b);
        Ta(a, function(d) {
            var e = new Kg(d),
                f = Tb(e, Mg);
            (e = xh(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function Lh() {
        return Va(r(Object, "keys").call(Object, P(Bh).i), function(a) {
            return Number(a)
        })
    }

    function Mh(a) {
        Za(P(Bh).l, a) || Ih(Ch(4), a)
    };

    function Nh(a) {
        this.methodName = a
    }
    var Oh = new Nh(1),
        Ph = new Nh(16),
        Qh = new Nh(15),
        Rh = new Nh(2),
        Sh = new Nh(3),
        Th = new Nh(4),
        Uh = new Nh(5),
        Vh = new Nh(6),
        Wh = new Nh(7),
        Xh = new Nh(8),
        Yh = new Nh(9),
        Zh = new Nh(10),
        $h = new Nh(11),
        ai = new Nh(12),
        bi = new Nh(13),
        ci = new Nh(14);

    function di(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function ei(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function fi(a) {
        di(Uh, Eh, a);
        di(Vh, Fh, a);
        di(Wh, Gh, a);
        di(Xh, Hh, a);
        di(bi, Kh, a);
        di(Qh, Mh, a)
    }

    function gi(a) {
        di(Th, function(b) {
            P(vh).h = b
        }, a);
        di(Yh, function(b, c) {
            var d = P(vh);
            d.h[zg][b] || (d.h[zg][b] = c)
        }, a);
        di(Zh, function(b, c) {
            var d = P(vh);
            d.h[Ag][b] || (d.h[Ag][b] = c)
        }, a);
        di($h, function(b, c) {
            var d = P(vh);
            d.h[Bg][b] || (d.h[Bg][b] = c)
        }, a);
        di(ci, function(b) {
            for (var c = P(vh), d = v([zg, Ag, Bg]), e = d.next(); !e.done; e = d.next()) e = e.value, r(Object, "assign").call(Object, c.h[e], b[e])
        }, a)
    }

    function hi(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function ii() {
        this.l = function() {};
        this.h = function() {};
        this.j = function() {};
        this.i = function() {
            return []
        }
    }

    function ji(a, b, c) {
        a.l = ei(Oh, b, function() {});
        a.j = function(d) {
            ei(Rh, b, function() {
                return []
            })(d, c)
        };
        a.i = function() {
            return ei(Sh, b, function() {
                return []
            })(c)
        };
        a.h = function(d) {
            ei(Ph, b, function() {})(d, c)
        }
    };

    function oi(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function pi(a) {
        return !!(a.error && a.meta && a.id)
    };
    var qi = null;

    function ri() {
        if (null === qi) {
            qi = "";
            try {
                var a = "";
                try {
                    a = x.top.location.hash
                } catch (c) {
                    a = x.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    qi = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return qi
    };

    function si() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function ti() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function ui(a, b) {
        var c = ti() || si();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0
    };
    var vi = x.performance,
        wi = !!(vi && vi.mark && vi.measure && vi.clearMarks),
        xi = Nc(function() {
            var a;
            if (a = wi) a = ri(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function yi() {
        this.i = [];
        this.j = x || x;
        var a = null;
        x && (x.google_js_reporting_queue = x.google_js_reporting_queue || [], this.i = x.google_js_reporting_queue, a = x.google_measure_js_timing);
        this.h = xi() || (null != a ? a : 1 > Math.random())
    }

    function zi(a) {
        a && vi && xi() && (vi.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), vi.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    yi.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new ui(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        vi && xi() && vi.mark(b);
        return a
    };
    yi.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            a.duration = (ti() || si()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            vi && xi() && vi.mark(b);
            !this.h || 2048 < this.i.length || this.i.push(a)
        }
    };

    function Ai(a, b) {
        do {
            var c = cd(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function Bi(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = J(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function Ci(a, b) {
        return !((nd.test(b.google_ad_width) || md.test(a.style.width)) && (nd.test(b.google_ad_height) || md.test(a.style.height)))
    }

    function Di(a, b) {
        return (a = Ei(a, b)) ? a.y : 0
    }

    function Ei(a, b) {
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

    function Fi(a) {
        var b = 0,
            c;
        for (c in rg) - 1 != a.indexOf(c) && (b |= rg[c]);
        return b
    }

    function Gi(a, b, c, d, e) {
        if (a !== a.top) return $c(a) ? 3 : 16;
        if (!(488 > Fe(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = Fe(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = Fe(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = cd(b, a)) && (e = J(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Hi(a, b, c, d) {
        var e = Gi(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || Ai(c, b) ? (b = Fe(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Ii(a, b, c) {
        a = a.style;
        "rtl" == b ? a.marginRight = c : a.marginLeft = c
    }

    function Ji(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = cd(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function Ki(a, b, c) {
        a = Ei(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Li(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = cd(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            Ii(b, c, "0px");
            b.style.width = Fe(a) + "px";
            if (0 !== Ki(a, b, c)) {
                Ii(b, c, "0px");
                var d = Ki(a, b, c);
                Ii(b, c, -1 * d + "px");
                a = Ki(a, b, c);
                0 !== a && a !== d && Ii(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };

    function Mi(a, b) {
        this.l = a;
        this.j = b
    }
    Mi.prototype.minWidth = function() {
        return this.l
    };
    Mi.prototype.height = function() {
        return this.j
    };
    Mi.prototype.h = function(a) {
        return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a))
    };
    Mi.prototype.i = function() {};

    function Ni(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = cd(a, b)) && e[c] && d(e[c]) || null
    }

    function Oi(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function Pi(a, b, c, d) {
        var e = a && Qi(c, b),
            f = Ri(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Si(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Qi(a, b) {
        return Di(a, b) < Ee(b).clientHeight - 100
    }

    function Ti(a, b) {
        var c = Ni(b, a, "height", J);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Ni(b, a, "height", J);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && J(b.style.height)) && (c = Math.min(c, d)), (d = Ni(b, a, "maxHeight", J)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Ri(a, b) {
        var c = 0 == Fd(a);
        return b && c ? Math.max(250, 2 * Ee(a).clientHeight / 3) : 250
    };
    var S = {},
        Ui = (S.google_ad_channel = !0, S.google_ad_client = !0, S.google_ad_host = !0, S.google_ad_host_channel = !0, S.google_adtest = !0, S.google_tag_for_child_directed_treatment = !0, S.google_tag_for_under_age_of_consent = !0, S.google_tag_partner = !0, S.google_restrict_data_processing = !0, S.google_page_url = !0, S.google_debug_params = !0, S.google_adbreak_test = !0, S.google_ad_frequency_hint = !0, S.google_admob_interstitial_slot = !0, S.google_admob_rewarded_slot = !0, S.google_admob_ads_only = !0, S.google_max_ad_content_rating = !0,
            S.google_traffic_source = !0, S),
        Vi = RegExp("(^| )adsbygoogle($| )");

    function Wi(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Rc(d.Yb);
            a[e] = d.value
        }
    };
    var Xi = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function Yi() {
        var a = void 0 === a ? "jserror" : a;
        var b = void 0 === b ? .01 : b;
        var c = void 0 === c ? Dd(Xi) : c;
        this.j = a;
        this.h = null;
        this.l = !1;
        this.v = Math.random();
        this.m = b;
        this.i = this.I;
        this.B = c
    }
    n = Yi.prototype;
    n.Va = function(a) {
        this.h = a
    };
    n.Xa = function(a) {
        this.l = a
    };
    n.Wa = function(a) {
        this.i = a
    };
    n.I = function(a, b, c, d, e) {
        c = void 0 === c ? this.m : c;
        e = void 0 === e ? this.j : e;
        if ((this.l ? this.v : Math.random()) > c) return !1;
        pi(b) || (b = new oi(b, {
            context: a,
            id: e
        }));
        if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
        x.google_js_errors = x.google_js_errors || [];
        x.google_js_errors.push(b);
        x.error_rep_loaded || (ad(x.document, Ec(Dc(this.B).toString())), x.error_rep_loaded = !0);
        return !1
    };
    n.oa = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.i(a, d, this.m, c, this.j)) throw d;
        }
    };
    n.Qa = function(a, b) {
        var c = this;
        return function() {
            var d = ua.apply(0, arguments);
            return c.oa(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.Ra = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.I(a, d instanceof Error ? d : Error(d))
        })
    };

    function Zi(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }

    function $i(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = ti(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && Zi(r(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (ti() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter ||
                        1
                }), f)
            }
            return l
        }
    }

    function aj(a, b) {
        return $i(a, b, function(c, d) {
            (new Yi).I(c, d)
        }, void 0, !1)
    };

    function bj(a, b, c) {
        return $i(a, b, void 0, c, !0).apply()
    }

    function cj(a) {
        if (!a) return null;
        var b = A(a, 7);
        if (A(a, 1) || a.getId() || 0 < Nb(a, 4).length) {
            b = Nb(a, 4);
            var c = A(a, 3),
                d = A(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + af(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + af(b[c]);
            a = (b = e) ? new Xe(b, A(a, 2), A(a, 5), dj(A(a, 6))) : null
        } else a = b ? new Xe(b, A(a, 2), A(a, 5), dj(A(a, 6))) : null;
        return a
    }
    var ej = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function dj(a) {
        return null == a ? a : ej[a]
    }
    var fj = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function gj(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function hj(a) {
        a = gj(a);
        return a.optimization = a.optimization || {}
    };

    function ij(a) {
        H.call(this, a)
    }
    w(ij, H);
    ij.prototype.getName = function() {
        return A(this, 4)
    };

    function jj(a) {
        H.call(this, a)
    }
    w(jj, H);

    function kj(a) {
        H.call(this, a)
    }
    w(kj, H);

    function lj(a) {
        H.call(this, a)
    }
    w(lj, H);
    var mj = [1, 2, 3];

    function nj(a) {
        H.call(this, a, -1, oj)
    }
    w(nj, H);

    function pj(a) {
        H.call(this, a)
    }
    w(pj, H);

    function qj(a) {
        H.call(this, a)
    }
    w(qj, H);
    var oj = [1, 4],
        rj = [1, 2];

    function sj(a) {
        H.call(this, a, -1, tj)
    }
    w(sj, H);

    function uj(a) {
        H.call(this, a)
    }
    w(uj, H);

    function vj(a) {
        H.call(this, a, -1, wj)
    }
    w(vj, H);

    function xj(a) {
        H.call(this, a)
    }
    w(xj, H);

    function yj(a) {
        H.call(this, a)
    }
    w(yj, H);

    function zj(a) {
        H.call(this, a)
    }
    w(zj, H);

    function Aj(a) {
        H.call(this, a)
    }
    w(Aj, H);
    var tj = [1, 2, 5, 7],
        wj = [2, 5, 6, 11];

    function Bj(a) {
        H.call(this, a)
    }
    w(Bj, H);

    function Cj(a) {
        switch (A(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = F(a, M, 1), null == b ? b = null : (a = A(a, 2), b = null == a ? null : new ce({
                    Ia: [b],
                    Ta: a
                }));
                return null != b ? Wd(b) : Yd(Error("Missing dimension when creating placement id"));
            case 3:
                return Yd(Error("Missing dimension when creating placement id"));
            default:
                return Yd(Error("Invalid type: " + A(a, 8)))
        }
    };

    function Dj(a, b) {
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

    function Ej(a, b) {
        this.i = a;
        this.h = b
    }

    function Fj(a, b) {
        var c = new ae,
            d = new $d;
        b.forEach(function(e) {
            if ($b(e, jj, 1, mj)) {
                e = $b(e, jj, 1, mj);
                if (F(e, Te, 1) && F(F(e, Te, 1), M, 1) && F(e, Te, 2) && F(F(e, Te, 2), M, 1)) {
                    var f = Gj(a, F(F(e, Te, 1), M, 1)),
                        g = Gj(a, F(F(e, Te, 2), M, 1));
                    if (f && g)
                        for (f = v(Dj({
                                anchor: f,
                                position: A(F(e, Te, 1), 2)
                            }, {
                                anchor: g,
                                position: A(F(e, Te, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Aa(g.anchor), g.position)
                }
                F(e, Te, 3) && F(F(e, Te, 3), M, 1) && (f = Gj(a, F(F(e, Te, 3), M, 1))) && c.set(Aa(f), A(F(e, Te, 3), 2))
            } else $b(e, kj, 2, mj) ? Hj(a, $b(e, kj, 2, mj), c) : $b(e,
                lj, 3, mj) && Ij(a, $b(e, lj, 3, mj), d)
        });
        return new Ej(c, d)
    }

    function Hj(a, b, c) {
        F(b, Te, 2) ? (b = F(b, Te, 2), (a = Gj(a, F(b, M, 1))) && c.set(Aa(a), A(b, 2))) : F(b, M, 1) && (a = Jj(a, F(b, M, 1))) && a.forEach(function(d) {
            d = Aa(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function Ij(a, b, c) {
        F(b, M, 1) && (a = Jj(a, F(b, M, 1))) && a.forEach(function(d) {
            c.add(Aa(d))
        })
    }

    function Gj(a, b) {
        return (a = Jj(a, b)) && 0 < a.length ? a[0] : null
    }

    function Jj(a, b) {
        return (b = cj(b)) ? b.query(a) : null
    };

    function Kj() {
        this.h = new p.Set
    }

    function Lj(a) {
        a = Mj(a);
        return a.has("all") || a.has("after")
    }

    function Nj(a) {
        a = Mj(a);
        return a.has("all") || a.has("before")
    }

    function Oj(a, b, c) {
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
            if (Pj(b)) return !0;
            if (a.h.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(function(d) {
            return a.h.add(d)
        });
        return !1
    }

    function Pj(a) {
        var b = Mj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }

    function Mj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new p.Set(a.split("|")) : new p.Set
    };

    function Qj(a, b) {
        if (!a) return !1;
        a = cd(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Rj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Sj(a) {
        return !!a.nextSibling || !!a.parentNode && Sj(a.parentNode)
    };

    function Tj(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Uj(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Uj(a) {
        var b = "";
        jd(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };

    function Vj(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };

    function Wj(a) {
        var b = Vj(a);
        return b ? Ua(Va(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    }

    function Xj(a, b) {
        return $a(a.document.querySelectorAll(b))
    }

    function Yj(a) {
        var b = [];
        a = v(a);
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

    function Zj(a, b, c, d, e) {
        this.h = a;
        this.H = b;
        this.i = c;
        this.m = e || null;
        this.v = (this.D = d) ? Fj(a.document, G(d, ij, 5)) : Fj(a.document, []);
        this.B = new Kj;
        this.j = 0;
        this.l = !1
    }

    function ak(a, b) {
        if (a.l) return !0;
        a.l = !0;
        var c = G(a.i, Ve, 1);
        a.j = 0;
        var d = bk(a.D);
        if (Tj(a.h.location, "google_audio_sense")) {
            var e = new Le;
            e = B(e, 1, 1);
            var f = new Me;
            f = B(f, 2, !0);
            e = Vb(e, 2, f);
            f = new Ne;
            var g = new Pe;
            var h = B(g, 1, 1);
            zb(f);
            g = Ub(f, Pe, 1, void 0, !1);
            h = null != h ? h : new Pe;
            var k = Mb(f, 1, 2);
            g.push(h);
            k.push(h.u);
            rb(h.u) && ub(k, !1);
            e = Vb(e, 3, f)
        } else e = F(a.i, Le, 27);
        if (f = e) {
            var l;
            e = (null == (l = F(a.i, Qe, 6)) ? void 0 : G(l, Se, 1)) || [];
            l = a.h;
            var m;
            if (1 == D(f, 1, 0) && null != (m = F(f, Me, 2)) && E(m, 2) && 0 != e.length) {
                m = [];
                e = v(e);
                for (f =
                    e.next(); !f.done; f = e.next())
                    if (f = cj(F(f.value, M, 1) || null)) f = f.query(l.document), 0 < f.length && m.push(f[0]);
                m = m.filter(Ge).filter(He(m)).filter(Ie(l));
                m.sort(Je);
                if (m = m[0] || null) e = l.document.createElement("div"), e.id = "google-auto-placed-read-aloud-player-reserved", rd(e, {
                    width: "100%",
                    height: "65px"
                }), m.insertBefore(e, m.firstChild), gj(l).audioSenseSpaceReserved = !0
            }
        }
        m = a.h;
        try {
            var q = m.localStorage.getItem("google_ama_settings");
            var t = q ? cc(Bj, q) : null
        } catch (gd) {
            t = null
        }
        l = null !== t && E(t, 2, !1);
        t = gj(m);
        l && (t.eatf = !0, Ad(7, [!0, 0, !1]));
        e = Q(pf) || Q( of );
        q = Q( of );
        if (e) {
            b: {
                f = {
                    lb: !1,
                    mb: !1
                };g = Xj(m, ".google-auto-placed");h = Xj(m, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]");k = Xj(m, "ins.adsbygoogle[data-ad-format=autorelaxed]");
                var z = (Wj(m) || Xj(m, "div[id^=div-gpt-ad]")).concat(Xj(m, "iframe[id^=google_ads_iframe]"));
                var L = Xj(m, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
                    C = Xj(m, "ins.adsbygoogle-ablated-ad-slot"),
                    I = Xj(m, "div.googlepublisherpluginad"),
                    T = Xj(m, "html > ins.adsbygoogle");e = [].concat(Xj(m, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), Xj(m, "body ins.adsbygoogle"));l = [];f = v([
                    [f.Tb, g],
                    [f.lb, h],
                    [f.Wb, k],
                    [f.Ub, z],
                    [f.Xb, L],
                    [f.Sb, C],
                    [f.Vb, I],
                    [f.mb, T]
                ]);
                for (g = f.next(); !g.done; g = f.next()) h = v(g.value),
                g = h.next().value,
                h = h.next().value,
                !1 === g ? l = l.concat(h) : e = e.concat(h);e = Yj(e);f = Yj(l);l = e.slice(0);e = v(f);
                for (f = e.next(); !f.done; f = e.next())
                    for (f = f.value, g = 0; g <
                        l.length; g++)(f.contains(l[g]) || l[g].contains(f)) && l.splice(g, 1);m = Ee(m).clientHeight;
                for (e = 0; e < l.length; e++)
                    if (f = l[e].getBoundingClientRect(), !(0 === f.height && !q || f.top > m)) {
                        m = !0;
                        break b
                    }
                m = !1
            }
            t = m ? t.eatfAbg = !0 : !1
        }
        else t = l;
        if (t) return !0;
        t = new $d([2]);
        for (m = 0; m < c.length; m++) {
            q = a;
            e = c[m];
            l = m;
            f = b;
            if (F(e, ge, 4) && t.contains(A(F(e, ge, 4), 1)) && 1 === A(e, 8) && ck(e, d)) {
                q.j++;
                if (f = dk(q, e, f, d)) g = gj(q.h), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0), F(e, M, 1) && null != A(F(e, M, 1), 5) && (g.numPostPlacementsPlaced ? g.numPostPlacementsPlaced++ :
                    g.numPostPlacementsPlaced = 1), null == g.placed && (g.placed = []), g.numAutoAdsPlaced++, g.placed.push({
                    index: l,
                    element: f.ia
                }), Ad(7, [!1, q.j, !0]);
                q = f
            } else q = null;
            if (q) return !0
        }
        Ad(7, [!1, a.j, !1]);
        return !1
    }

    function dk(a, b, c, d) {
        if (!ck(b, d) || 1 != A(b, 8)) return null;
        d = F(b, M, 1);
        if (!d) return null;
        d = cj(d);
        if (!d) return null;
        d = d.query(a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = fj[A(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = Qj(Rj(d), f);
                        break a;
                    case 3:
                        f = Qj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = Qj(g ? 1 == g.nodeType ? g : Rj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !Sj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !bf(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.v;
            f = A(b, 2);
            g = Aa(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(Aa(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(Aa(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.B;
            f = A(b, 2);
            a: switch (f) {
                case 1:
                    g = Lj(d.previousElementSibling) || Nj(d);
                    break a;
                case 4:
                    g = Lj(d) || Nj(d.nextElementSibling);
                    break a;
                case 2:
                    g = Nj(d.firstElementChild);
                    break a;
                case 3:
                    g = Lj(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + f);
            }
            c = g || Oj(c, d, f)
        }
        if (c) return null;
        c = F(b, Ue, 3);
        f = {};
        c && (f.Za = A(c, 1), f.Ja = A(c, 2), f.ib = !!Ob(c, 3));
        c = F(b, ge, 4) && A(F(b, ge, 4), 2) ? A(F(b, ge, 4), 2) : null;
        c = je(c);
        g = null != A(b, 12, !1) ? A(b, 12) : null;
        g = null == g ? null : new he(null, {
            google_ml_rank: g
        });
        b = ek(a, b);
        b = ie(a.m, c, g, b);
        c = a.h;
        a = a.H;
        var h = c.document,
            k = f.ib || !1;
        g = (new Tc(h)).createElement("DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.sb && Wi(k, f.sb);
        h = (new Tc(h)).createElement("INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor =
            "transparent";
        f.Za && (k.marginTop = f.Za);
        f.Ja && (k.marginBottom = f.Ja);
        f.fb && Wi(k, f.fb);
        g.appendChild(h);
        f = {
            sa: g,
            ia: h
        };
        f.ia.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ka) f.sa.className = h.join(" ");
        h = f.ia;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.sa;
                var q = void 0 === q ? 0 : q;
                if (Q(kf)) {
                    q = void 0 === q ? 0 : q;
                    var t = og(d, e, q);
                    if (t.init) {
                        var z = t.init;
                        for (d = z; d = t.ka(d);) z = d;
                        var L = {
                            anchor: z,
                            position: t.na
                        }
                    } else L = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = q;
                    ng(m, L.anchor, L.position)
                } else ng(m, d, e);
                b: {
                    var C = f.ia;C.dataset.adsbygoogleStatus = "reserved";C.className += " adsbygoogle-noablate";m = {
                        element: C
                    };
                    var I = b && b.Sa;
                    if (C.hasAttribute("data-pub-vars")) {
                        try {
                            I = JSON.parse(C.getAttribute("data-pub-vars"))
                        } catch (T) {
                            break b
                        }
                        C.removeAttribute("data-pub-vars")
                    }
                    I && (m.params = I);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (T) {
                (C = f.sa) && C.parentNode && (I = C.parentNode, I.removeChild(C), bf(I) && (I.style.display = I.getAttribute("data-init-display") ||
                    "none"));
                C = !1;
                break a
            }
            C = !0
        }
        return C ? f : null
    }

    function ek(a, b) {
        return Ud(Xd(Cj(b).map(ke), function(c) {
            gj(a.h).exception = c
        }))
    }

    function bk(a) {
        var b = {};
        a && Nb(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function ck(a, b) {
        return a && void 0 !== Jb(a, ge, 4, !1) && b[A(F(a, ge, 4), 2)] ? !1 : !0
    };

    function fk(a) {
        H.call(this, a)
    }
    w(fk, H);
    var gk = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function hk(a, b) {
        this.h = a;
        this.i = b
    }

    function ik(a, b, c) {
        this.url = a;
        this.A = b;
        this.Ma = !!c;
        this.depth = null
    };

    function jk() {
        var a = kk;
        this.m = ye;
        this.i = null;
        this.l = this.I;
        this.h = void 0 === a ? null : a;
        this.j = !1
    }
    n = jk.prototype;
    n.Wa = function(a) {
        this.l = a
    };
    n.Va = function(a) {
        this.i = a
    };
    n.Xa = function(a) {
        this.j = a
    };
    n.oa = function(a, b, c) {
        try {
            if (this.h && this.h.h) {
                var d = this.h.start(a.toString(), 3);
                var e = b();
                this.h.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                zi(d), b = this.l(a, new oi(h, {
                    message: lk(h)
                }), void 0, c)
            } catch (k) {
                this.I(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    n.Qa = function(a, b) {
        var c = this;
        return function() {
            var d = ua.apply(0, arguments);
            return c.oa(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.I = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new qe;
            f.h.push(1);
            f.i[1] = re("context", a);
            pi(b) || (b = new oi(b, {
                message: lk(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.h.push(2);
                f.i[2] = re("msg", g)
            }
            var h = b.meta || {};
            if (this.i) try {
                this.i(h)
            } catch (hd) {}
            if (d) try {
                d(h)
            } catch (hd) {}
            b = [h];
            f.h.push(3);
            f.i[3] = b;
            d = x;
            b = [];
            g = null;
            do {
                var k = d;
                if (Zc(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new ik(l || "", k));
                try {
                    d = k.parent
                } catch (hd) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = x;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var q = b[m];
                    q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.Ma = !0)
                }
            var t = new ik(x.location.href, x, !1);
            k = null;
            var z = b.length - 1;
            for (q = z; 0 <= q; --q) {
                var L = b[q];
                !k && gk.test(L.url) && (k = L);
                if (L.url && !L.Ma) {
                    t = L;
                    break
                }
            }
            L = null;
            var C = b.length && b[z].url;
            0 != t.depth && C && (L = b[z]);
            var I = new hk(t, L);
            if (I.i) {
                var T = I.i.url || "";
                f.h.push(4);
                f.i[4] = re("top", T)
            }
            var gd = {
                url: I.h.url || ""
            };
            if (I.h.url) {
                var Ke = I.h.url.match(Wc),
                    ki = Ke[1],
                    li = Ke[3],
                    mi = Ke[4];
                t = "";
                ki && (t += ki + ":");
                li && (t += "//", t += li, mi && (t += ":" + mi));
                var ni = t
            } else ni = "";
            gd = [gd, {
                url: ni
            }];
            f.h.push(5);
            f.i[5] = gd;
            ze(this.m, e, f, this.j, c)
        } catch (hd) {
            try {
                ze(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: lk(hd),
                    url: I && I.h.url
                }, this.j, c)
            } catch (Pq) {}
        }
        return !0
    };
    n.Ra = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.I(a, d instanceof Error ? d : Error(d))
        })
    };

    function lk(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };

    function U(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, U) : this.stack = Error().stack || ""
    }
    w(U, Error);
    var ye, mk, kk = new yi;

    function nk(a) {
        null != a && (x.google_measure_js_timing = a);
        x.google_measure_js_timing || (a = kk, a.h = !1, a.i != a.j.google_js_reporting_queue && (xi() && Ta(a.i, zi), a.i.length = 0))
    }(function(a) {
        ye = a || new we;
        "number" !== typeof x.google_srt && (x.google_srt = Math.random());
        xe();
        mk = new jk;
        mk.Xa(!0);
        "complete" == x.document.readyState ? nk() : kk.h && Pc(x, "load", function() {
            nk()
        })
    })();

    function ok(a, b, c) {
        return mk.oa(a, b, c)
    }

    function pk(a, b) {
        return mk.Qa(a, b)
    }

    function qk(a, b, c) {
        var d = P(ii).i();
        !b.eid && d.length && (b.eid = d.toString());
        ze(ye, a, b, !0, c)
    }

    function rk(a, b) {
        mk.Ra(a, b)
    }

    function sk(a, b, c, d) {
        var e;
        pi(b) ? e = b.msg || lk(b.error) : e = lk(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof oi ? b.error : b, c.pbr || (c.pbr = !0, mk.I(a, b, .1, d, "puberror")), !1) : mk.I(a, b, c, d)
    };

    function tk(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? Zd(function() {
            return cc(fk, c)
        }) : Wd(null)
    };

    function uk() {
        this.S = {}
    }

    function vk() {
        if (wk) return wk;
        var a = Cd() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? wk = b : a.google_persistent_state_async = wk = new uk
    }

    function xk(a) {
        return yk[a] || "google_ps_" + a
    }

    function zk(a, b, c) {
        b = xk(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }
    var wk = null,
        Ak = {},
        yk = (Ak[8] = "google_prev_ad_formats_by_region", Ak[9] = "google_prev_ad_slotnames_by_region", Ak);

    function Bk(a) {
        this.h = a || {
            cookie: ""
        }
    }
    Bk.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Zb;
            d = c.ac || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.qb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    Bk.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ka(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Bk.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    Bk.prototype.clear = function() {
        for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ka(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            qb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function Ck(a) {
        H.call(this, a)
    }
    w(Ck, H);

    function Dk(a) {
        var b = new Ck;
        return B(b, 5, a)
    };

    function Ek(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function Fk(a, b, c) {
        b = void 0 === b ? 500 : b;
        c = void 0 === c ? !1 : c;
        Od.call(this);
        this.h = a;
        this.i = null;
        this.m = {};
        this.J = 0;
        this.H = b;
        this.D = c;
        this.l = null
    }
    w(Fk, Od);
    Fk.prototype.j = function() {
        this.m = {};
        this.l && (Qc(this.h, "message", this.l), delete this.l);
        delete this.m;
        delete this.h;
        delete this.i;
        Od.prototype.j.call(this)
    };

    function Gk(a) {
        return "function" === typeof a.h.__tcfapi || null != Hk(a)
    }
    Fk.prototype.addEventListener = function(a) {
        function b(g, h) {
            clearTimeout(f);
            g ? (d = g, d.internalErrorState = Ek(d), d.internalBlockOnErrors = c.D, h && 0 === d.internalErrorState || (d.tcString = "tcunavailable", h || (d.internalErrorState = 3))) : (d.tcString = "tcunavailable", d.internalErrorState = 3);
            a(d)
        }
        var c = this,
            d = {
                internalBlockOnErrors: this.D
            },
            e = Oc(function() {
                return a(d)
            }),
            f = 0; - 1 !== this.H && (f = setTimeout(function() {
            d.tcString = "tcunavailable";
            d.internalErrorState = 1;
            e()
        }, this.H));
        try {
            Ik(this, "addEventListener", b)
        } catch (g) {
            d.tcString =
                "tcunavailable", d.internalErrorState = 3, f && (clearTimeout(f), f = 0), e()
        }
    };
    Fk.prototype.removeEventListener = function(a) {
        a && a.listenerId && Ik(this, "removeEventListener", null, a.listenerId)
    };

    function Ik(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
        else if (Hk(a)) {
            Jk(a);
            var e = ++a.J;
            a.m[e] = c;
            a.i && (c = {}, a.i.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function Hk(a) {
        if (a.i) return a.i;
        a.i = pd(a.h, "__tcfapiLocator");
        return a.i
    }

    function Jk(a) {
        a.l || (a.l = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.m[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Pc(a.h, "message", a.l))
    };

    function Kk(a) {
        var b = a.A,
            c = a.Ya,
            d = a.hb;
        a = Lk({
            A: b,
            ea: a.ea,
            la: void 0 === a.la ? !1 : a.la,
            ma: void 0 === a.ma ? !1 : a.ma
        });
        null != a.h || "tcunav" != a.i.message ? d(a) : Mk(b, c).then(function(e) {
            return e.map(Nk)
        }).then(function(e) {
            return e.map(function(f) {
                return Ok(b, f)
            })
        }).then(d)
    }

    function Lk(a) {
        var b = a.A,
            c = a.ea,
            d = void 0 === a.la ? !1 : a.la;
        if (a = (void 0 === a.ma ? 0 : a.ma) || !Gk(new Fk(b))) {
            if (!d) {
                if (!(c = !c))
                    if (c = tk(b), null == c.h) mk.I(806, c.i, void 0, void 0), c = !1;
                    else if ((c = c.h.value) && null != A(c, 1, !1)) b: switch (c = A(c, 1), c) {
                    case 1:
                        c = !0;
                        break b;
                    default:
                        throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                } else c = !1;
                d = c
            }
            a = d
        }
        if (a) return Ok(b, Dk(!0));
        c = vk();
        return (c = zk(c, 24)) ? Ok(b, Nk(c)) : Yd(Error("tcunav"))
    }

    function Mk(a, b) {
        return p.Promise.race([Pk(), Qk(a, b)])
    }

    function Pk() {
        return (new p.Promise(function(a) {
            var b = vk();
            a = {
                resolve: a
            };
            var c = zk(b, 25, []);
            c.push(a);
            b.S[xk(25)] = c
        })).then(Rk)
    }

    function Qk(a, b) {
        return new p.Promise(function(c) {
            a.setTimeout(c, b, Yd(Error("tcto")))
        })
    }

    function Rk(a) {
        return a ? Wd(a) : Yd(Error("tcnull"))
    }

    function Nk(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = Ek(a)), c = "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions &&
                        (b = a.publisher.restrictions["1"], void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return Dk(a)
    }

    function Ok(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (Ob(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? Wd(b) : Yd(Error("unav"))
    };

    function Sk(a) {
        H.call(this, a)
    }
    w(Sk, H);

    function Tk(a) {
        H.call(this, a, -1, Uk)
    }
    w(Tk, H);
    var Uk = [1, 2];

    function Vk(a) {
        this.exception = a
    }

    function Wk(a, b, c) {
        this.j = a;
        this.h = b;
        this.i = c
    }
    Wk.prototype.start = function() {
        this.l()
    };
    Wk.prototype.l = function() {
        try {
            switch (this.j.document.readyState) {
                case "complete":
                case "interactive":
                    ak(this.h, !0);
                    Xk(this);
                    break;
                default:
                    ak(this.h, !1) ? Xk(this) : this.j.setTimeout(Fa(this.l, this), 100)
            }
        } catch (a) {
            Xk(this, a)
        }
    };

    function Xk(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            gj(e.h);
            G(e.i, Ve, 1);
            d.call(c, new Vk(b))
        } catch (f) {
            a.i.reject(f)
        }
    };
    var Yk = "a".charCodeAt(),
        Zk = tc(Id),
        $k = tc(Jd);

    function al(a) {
        if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
        this.i = a;
        this.h = 0
    }

    function bl(a) {
        var b = cl(a, 16);
        return !0 === !!cl(a, 1) ? (a = dl(a), a.forEach(function(c) {
            if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }), a) : el(a, b)
    }

    function dl(a) {
        for (var b = cl(a, 12), c = []; b--;) {
            var d = !0 === !!cl(a, 1),
                e = cl(a, 16);
            if (d)
                for (d = cl(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }

    function el(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (cl(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }

    function cl(a, b) {
        if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        var c = a.i.substring(a.h, a.h + b);
        a.h += b;
        return parseInt(c, 2)
    };

    function fl(a, b) {
        try {
            var c = gb(a.split(".")[0]).map(function(e) {
                    return (aa = e.toString(2), r(aa, "padStart")).call(aa, 8, "0")
                }).join(""),
                d = new al(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.h += 78;
            c.cmpId = cl(d, 12);
            c.cmpVersion = cl(d, 12);
            d.h += 30;
            c.tcfPolicyVersion = cl(d, 6);
            c.isServiceSpecific = !!cl(d, 1);
            c.useNonStandardStacks = !!cl(d, 1);
            c.specialFeatureOptins = gl(el(d, 12, $k), $k);
            c.purpose = {
                consents: gl(el(d, 24, Zk), Zk),
                legitimateInterests: gl(el(d, 24, Zk), Zk)
            };
            c.purposeOneTreatment = !!cl(d, 1);
            c.publisherCC = String.fromCharCode(Yk +
                cl(d, 6)) + String.fromCharCode(Yk + cl(d, 6));
            c.vendor = {
                consents: gl(bl(d), b),
                legitimateInterests: gl(bl(d), b)
            };
            return c
        } catch (e) {
            return null
        }
    }

    function gl(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = v(b);
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
        } else
            for (a = v(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
        delete c[0];
        return c
    };

    function hl(a) {
        this.key = a;
        this.defaultValue = !1;
        this.valueType = "boolean"
    };

    function il() {
        this.h = {}
    }

    function jl(a) {
        kl || (kl = new ll);
        var b = kl.h[a.key];
        if ("proto" === a.valueType) {
            try {
                var c = JSON.parse(b);
                if (Array.isArray(c)) return c
            } catch (d) {}
            return a.defaultValue
        }
        return typeof b === typeof a.defaultValue ? b : a.defaultValue
    };

    function ml(a) {
        H.call(this, a)
    }
    w(ml, H);

    function nl(a) {
        H.call(this, a)
    }
    w(nl, H);

    function ol(a) {
        H.call(this, a)
    }
    w(ol, H);
    var pl = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25];

    function ql() {};

    function rl(a) {
        H.call(this, a, -1, sl)
    }
    w(rl, H);

    function tl(a) {
        H.call(this, a)
    }
    w(tl, H);

    function ul(a) {
        H.call(this, a)
    }
    w(ul, H);
    var sl = [7];
    var vl = new hl("45368529"),
        wl = new hl("45369554");

    function ll() {
        this.h = {};
        var a = x.__fcexpdef || "";
        try {
            var b = JSON.parse(a)[0];
            a = "";
            for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
            this.h = JSON.parse(a)
        } catch (d) {}
    }
    var kl;
    w(ll, il);

    function xl(a) {
        return (a = yl(a)) ? F(a, tl, 4) : null
    }

    function yl(a) {
        if (a = (new Bk(a)).get("FCCDCF", ""))
            if (jl(vl))
                if (r(a, "startsWith").call(a, "%")) try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    zl(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            return b ? cc(rl, b) : null
        } catch (c) {
            return zl(2), null
        }
    }

    function zl(a) {
        new ql;
        var b = new nl;
        a = B(b, 7, a);
        b = new ml;
        a = Vb(b, 1, a);
        b = new ol;
        Wb(b, 22, pl, a);
        jl(wl)
    };
    tc(Id).map(function(a) {
        return Number(a)
    });
    tc(Jd).map(function(a) {
        return Number(a)
    });

    function Al(a) {
        this.h = a;
        this.i = null
    }

    function Bl(a) {
        a.__tcfapiPostMessageReady || Cl(new Al(a))
    }

    function Cl(a) {
        a.i = function(b) {
            var c = "string" == typeof b.data;
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.h.__tcfapi(e.command, e.version, function(f, g) {
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
        a.h.addEventListener("message", a.i);
        a.h.__tcfapiPostMessageReady = !0
    };

    function Dl(a, b) {
        function c() {
            if (!a.frames[b])
                if (d.body) {
                    var e = bd("IFRAME", d);
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

    function El(a) {
        this.h = a;
        this.i = a.document;
        this.m = (a = (a = yl(this.i)) ? F(a, ul, 5) || null : null) ? A(a, 2) : null;
        this.j = (a = xl(this.i)) && null != A(a, 1) ? A(a, 1) : null;
        this.l = (a = xl(this.i)) && null != A(a, 2) ? A(a, 2) : null
    }

    function Fl() {
        var a = window,
            b = Q(vf);
        a.__uspapi || a.frames.__uspapiLocator || (a = new El(a), Gl(a), b && Hl(a))
    }

    function Gl(a) {
        !a.m || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", Dl(a.h, "__uspapiLocator"), Ha("__uspapi", function() {
            return a.B.apply(a, la(ua.apply(0, arguments)))
        }))
    }
    El.prototype.B = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.m
        }, !0)
    };

    function Hl(a) {
        !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = "fc", Dl(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || [], Ha("__tcfapi", function() {
            return a.v.apply(a, la(ua.apply(0, arguments)))
        }), Bl(a.h))
    }
    El.prototype.v = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.h.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(Il(this, d, null), !0) : c(null, !1);
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
                    c(Il(this, null, a - 1), !0);
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

    function Il(a, b, c) {
        if (!a.j) return null;
        b = fl(a.j, b);
        b.addtlConsent = null != a.l ? a.l : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };

    function Jl(a) {
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

    function Kl(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function Ll(a) {
        a = Nb(a, 2);
        if (!a) return !1;
        for (var b = 0; b < a.length; b++)
            if (1 == a[b]) return !0;
        return !1
    }

    function Ml(a, b) {
        a = Kl(Jl(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = kd(a),
            d = Nl(a);
        return r(b, "find").call(b, function(e) {
            var f = void 0 !== Jb(e, xj, 7, !1) ? A(F(e, xj, 7), 1) : A(e, 1);
            e = void 0 !== Jb(e, xj, 7, !1) ? A(F(e, xj, 7), 2) : 2;
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

    function Nl(a) {
        for (var b = {};;) {
            b[kd(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var Ol = {},
        Pl = (Ol.google_ad_channel = !0, Ol.google_ad_host = !0, Ol);

    function Ql(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        qk("ama", b, .01)
    }

    function Rl(a) {
        var b = {};
        jd(Pl, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function Sl(a) {
        a = F(a, uj, 3);
        return !a || A(a, 1) <= Date.now() ? !1 : !0
    }

    function Tl(a) {
        if (Q(jf)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? cc(sj, b) : null
        } catch (d) {
            c = null
        }
        return c
    };

    function Ul(a) {
        H.call(this, a)
    }
    w(Ul, H);

    function Vl(a) {
        H.call(this, a, -1, Wl)
    }
    w(Vl, H);
    var Wl = [1];

    function Xl(a) {
        H.call(this, a, -1, Yl)
    }
    w(Xl, H);
    Xl.prototype.getId = function() {
        return D(this, 1, 0)
    };
    Xl.prototype.W = function() {
        return D(this, 7, 0)
    };
    var Yl = [2];

    function Zl(a) {
        H.call(this, a, -1, $l)
    }
    w(Zl, H);
    Zl.prototype.W = function() {
        return D(this, 5, 0)
    };
    var $l = [2];

    function am(a) {
        H.call(this, a, -1, bm)
    }
    w(am, H);

    function cm(a) {
        H.call(this, a, -1, dm)
    }
    w(cm, H);
    cm.prototype.W = function() {
        return D(this, 1, 0)
    };

    function em(a) {
        H.call(this, a)
    }
    w(em, H);
    var bm = [1, 4, 2, 3],
        dm = [2];

    function fm(a) {
        H.call(this, a, -1, gm)
    }
    w(fm, H);

    function hm(a) {
        return $b(a, Vl, 14, Lb)
    }
    var gm = [19],
        Lb = [13, 14];
    var im = void 0;

    function jm() {
        jc(im, hc);
        return im
    }

    function km(a) {
        jc(im, tg);
        im = a
    };

    function lm(a, b, c, d) {
        c = void 0 === c ? "" : c;
        return 1 === b && mm(c, void 0 === d ? null : d) ? !0 : nm(a, c, function(e) {
            return Wa(G(e, nc, 2), function(f) {
                return A(f, 1) === b
            })
        })
    }

    function mm(a, b) {
        return b ? Ib(b, Ul, 13) ? E($b(b, Ul, 13, Lb), 1) : Ib(b, Vl, 14) && "" !== a && 1 === Nb(hm(b), 1).length && Nb(hm(b), 1)[0] === a ? E(F(hm(b), Ul, 2), 1) : !1 : !1
    }

    function om(a, b) {
        b = D(b, 18, 0); - 1 !== b && (a.tmod = b)
    }

    function pm(a) {
        var b = void 0 === b ? "" : b;
        var c = $c(K) || K;
        return qm(c, a) ? !0 : nm(K, b, function(d) {
            return Wa(Nb(d, 3), function(e) {
                return e === a
            })
        })
    }

    function rm(a) {
        return nm(x, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function qm(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Za(a.split(","), b.toString())
    }

    function nm(a, b, c) {
        a = $c(a) || a;
        var d = sm(a);
        b && (b = Hd(String(b)));
        return sc(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function sm(a) {
        a = tm(a);
        var b = {};
        jd(a, function(c, d) {
            try {
                var e = new lc(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function tm(a) {
        return Q(ef) ? (a = Lk({
            A: a,
            ea: jm()
        }), null != a.h ? (um("ok"), a = vm(a.h.value)) : (um(a.i.message), a = {}), a) : vm(a.localStorage)
    }

    function vm(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : rc(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function wm(a) {
        Q(wf) && qk("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }

    function um(a) {
        Q(df) && qk("abg_adsensesettings_lserr", {
            s: a,
            g: Q(ef),
            c: jm(),
            r: .01
        }, .01)
    };

    function V(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function xm(a) {
        a = V(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ha: !0,
            Ab: b,
            qa: a.ablation_viewport_offset
        } : null
    }

    function ym(a, b) {
        a = V(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function zm(a) {
        V(K).allow_second_reactive_tag = a
    }

    function Am() {
        var a = V(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function Bm(a) {
        var b, c, d;
        return null != (d = null == (b = V(a)) ? void 0 : null == (c = b.head_tag_slot_vars) ? void 0 : c.google_ad_host) ? d : Cm(a)
    }

    function Cm(a) {
        var b, c;
        return null != (c = null == (b = a.document.querySelector('meta[name="google-adsense-platform-account"]')) ? void 0 : b.getAttribute("content")) ? c : null
    };

    function Dm(a, b, c, d) {
        Em(new Fm(a, b, c, d))
    }

    function Fm(a, b, c, d) {
        this.A = a;
        this.i = b;
        this.j = c;
        this.h = d
    }

    function Em(a) {
        Xd(Vd(Lk({
            A: a.A,
            ea: E(a.i, 6)
        }), function(b) {
            Gm(a, b, !0)
        }), function() {
            Hm(a)
        })
    }

    function Gm(a, b, c) {
        Xd(Vd(Im(b), function(d) {
            Jm("ok");
            a.h(d)
        }), function() {
            var d = a.A;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                Ql(d, {
                    lserr: 1
                })
            }
            c ? Hm(a) : a.h(null)
        })
    }

    function Hm(a) {
        Xd(Vd(Km(a), a.h), function() {
            Lm(a)
        })
    }

    function Lm(a) {
        Kk({
            A: a.A,
            ea: E(a.i, 6),
            Ya: 50,
            hb: function(b) {
                Mm(a, b)
            }
        })
    }

    function Im(a) {
        return (a = (a = Tl(a)) ? Sl(a) ? a : null : null) ? Wd(a) : Yd(Error("invlocst"))
    }

    function Km(a) {
        if (Bm(a.A)) return Yd(Error("invtag"));
        a: {
            var b = a.A;
            var c = a.j;a = a.i;
            if (null == a ? 0 : Ib(a, Ul, 13)) {
                var d, e;
                (b = null == a ? void 0 : null == (d = $b(a, Ul, 13, Lb)) ? void 0 : null == (e = F(d, Sk, 2)) ? void 0 : F(e, Tk, 2)) && 0 < G(b, Ve, 1).length ? wm(!1) : b = null
            } else {
                if (null == a ? 0 : Ib(a, Vl, 14)) {
                    var f;
                    d = null == a ? void 0 : null == (f = hm(a)) ? void 0 : Nb(f, 1);
                    var g, h, k;
                    e = null == a ? void 0 : null == (g = hm(a)) ? void 0 : null == (h = F(g, Ul, 2)) ? void 0 : null == (k = F(h, Sk, 2)) ? void 0 : F(k, Tk, 2);
                    if (d && 1 === d.length && d[0] === c && e && 0 < G(e, Ve, 1).length && Yb(a, 17) ===
                        b.location.host) {
                        wm(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new sj, g = G(b, Ve, 1), c = Xb(c, 1, g), b = G(b, vj, 2), b = Xb(c, 7, b), b = Wd(b)) : b = Yd(Error("invtag"));
        return b
    }

    function Mm(a, b) {
        Xd(Vd(b, function(c) {
            Gm(a, c, !1)
        }), function(c) {
            Jm(c.message);
            a.h(null)
        })
    }

    function Jm(a) {
        qk("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    };

    function Nm(a, b, c, d) {
        try {
            var e = Ml(a, G(c, vj, 7));
            if (e && Ll(e)) {
                if (A(e, 4)) {
                    var f = {},
                        g = new he(null, (f.google_package = A(e, 4), f));
                    d = ie(d, g)
                }
                var h = new Zj(a, b, c, e, d);
                bj(1E3, function() {
                    var k = new Kd;
                    (new Wk(a, h, k)).start();
                    return k.i
                }, a).then(Ga(Om, a), Ga(Pm, a))
            }
        } catch (k) {
            Ql(a, {
                atf: -1
            })
        }
    }

    function Om(a) {
        Ql(a, {
            atf: 1
        })
    }

    function Pm(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        Ql(a, {
            atf: 0
        })
    };
    bb || !y("Safari") || Pa();

    function Qm() {
        var a = this;
        this.promise = new p.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function Rm() {
        var a = new Qm;
        return {
            promise: a.promise,
            resolve: a.resolve
        }
    };

    function Sm(a) {
        a = void 0 === a ? function() {} : a;
        x.google_llp || (x.google_llp = {});
        var b = x.google_llp,
            c = b[7];
        if (c) return c;
        c = Rm();
        b[7] = c;
        a();
        return c
    }

    function Tm(a) {
        return Sm(function() {
            ad(x.document, a)
        }).promise
    };

    function Um(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function Vm(a) {
        if (x.google_apltlad || x !== x.top || !a.google_ad_client) return null;
        x.google_apltlad = !0;
        var b = Um(a.google_ad_client),
            c = b.enable_page_level_ads;
        jd(a, function(d, e) {
            Ui[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        Q(dg) && (c.easpi = Q(Nf), Q(Lf) && (c.easpa = !0), c.asntp = R(Uf), c.asntpv = R(Yf), c.asntpl = R(Wf), c.asntpm = R(Xf), c.asntpc = R(Vf), c.asna = R(Qf), c.asnd = R(Rf), c.asnp = R(Sf), c.asns = R(Tf), c.asmat = R(Pf), c.asptt = R(Zf));
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section =
            a.google_ad_section || a.google_ad_region;
        return b
    }

    function Wm(a) {
        return za(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };

    function Xm(a, b) {
        V(K).ama_ran_on_page || bj(1001, function() {
            return Ym(new Zm(a, b))
        }, x)
    }

    function Zm(a, b) {
        this.h = x;
        this.i = a;
        this.j = b
    }

    function Ym(a) {
        Dm(a.h, a.j, a.i.google_ad_client || "", function(b) {
            var c = a.h,
                d = a.i;
            V(K).ama_ran_on_page || b && $m(c, d, b)
        })
    }

    function $m(a, b, c) {
        if (void 0 !== Jb(c, nj, 24, !1)) {
            var d = hj(a);
            d.availableAbg = !0;
            var e, f;
            d.ablationFromStorage = !!(null == (e = F(c, nj, 24)) ? 0 : null == (f = F(e, pj, 3)) ? 0 : $b(f, qj, 2, rj))
        }
        if (Wm(b) && (d = Ml(a, G(c, vj, 7)), !d || !Ob(d, 8))) return;
        V(K).ama_ran_on_page = !0;
        var g;
        if (null == (g = F(c, Aj, 15)) ? 0 : Ob(g, 23)) V(a).enable_overlap_observer = !0;
        if ((g = F(c, yj, 13)) && 1 === A(g, 1)) {
            var h = 0,
                k = F(g, zj, 6);
            k && A(k, 3) && (h = A(k, 3) || 0);
            ym(a, h)
        } else if (null == (h = F(c, nj, 24)) ? 0 : null == (k = F(h, pj, 3)) ? 0 : $b(k, qj, 2, rj)) hj(a).ablatingThisPageview = !0, ym(a,
            1);
        Ad(3, [c.toJSON()]);
        var l = b.google_ad_client || "";
        b = Rl(za(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        var m = ie(me, new he(null, b));
        ok(782, function() {
            Nm(a, l, c, m)
        })
    };

    function an(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function bn(a) {
        var b = K.document;
        if (b.currentScript) return an(b.currentScript, a);
        b = v(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === an(c.value, a)) return 0;
        return 1
    };

    function cn(a, b) {
        var c = {},
            d = {},
            e = {},
            f = {};
        return f[zg] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(g) {
            return lm(K, Number(g))
        }, c[24] = function(g) {
            return pm(Number(g))
        }, c[61] = function() {
            return E(b, 6)
        }, c[63] = function() {
            return E(b, 6) || ".google.ch" === Yb(b, 8)
        }, c), f[Ag] = (d[7] = function(g) {
            try {
                var h = window.localStorage
            } catch (q) {
                h = null
            }
            g = Number(g);
            g = void 0 === g ? 0 : g;
            g = 0 !== g ? "google_experiment_mod" + g : "google_experiment_mod";
            a: {
                var k = -1;
                try {
                    h && (k = parseInt(h.getItem(g), 10))
                } catch (q) {
                    k = null;
                    break a
                }
                k = 0 <= k && 1E3 >
                k ? k : null
            }
            if (null === k) {
                k = fd() ? null : Math.floor(1E3 * id());
                var l;
                if (l = null != k && h) a: {
                    var m = String(k);
                    try {
                        if (h) {
                            h.setItem(g, m);
                            l = m;
                            break a
                        }
                    } catch (q) {}
                    l = null
                }
                h = l ? k : null
            } else h = k;
            return null != h ? h : void 0
        }, d), f[Bg] = (e[6] = function() {
            return Yb(b, 15)
        }, e), f
    };

    function dn(a) {
        a = void 0 === a ? x : a;
        return a.ggeac || (a.ggeac = {})
    };

    function en() {
        var a = P(lg).h(If.h, If.defaultValue),
            b = K.document;
        b = void 0 === b ? window.document : b;
        ud(a, b)
    };

    function fn(a, b) {
        try {
            var c = a.split(".");
            a = x;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }

    function gn() {
        var a = {};
        this[zg] = (a[8] = function(b) {
            try {
                return null != xa(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = xa(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return Za(P(ii).i(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = fn(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a[60] = function(b) {
            try {
                return !!x.document.querySelector(b)
            } catch (c) {}
        }, a[69] = function(b) {
            var c =
                x.document;
            c = void 0 === c ? document : c;
            var d;
            return !(null == (d = c.featurePolicy) || !(aa = d.features(), r(aa, "includes")).call(aa, b))
        }, a[70] = function(b) {
            var c = x.document;
            c = void 0 === c ? document : c;
            var d;
            return !(null == (d = c.featurePolicy) || !(aa = d.allowedFeatures(), r(aa, "includes")).call(aa, b))
        }, a);
        a = {};
        this[Ag] = (a[3] = function() {
            return qd()
        }, a[6] = function(b) {
            b = fn(b, "number");
            return void 0 !== b ? b : void 0
        }, a[11] = function(b) {
            b = void 0 === b ? "" : b;
            var c = x;
            b = void 0 === b ? "" : b;
            c = void 0 === c ? window : c;
            b = (c = (c = c.location.href.match(Wc)[3] ||
                null) ? decodeURI(c) : c) ? kd(c + b) : null;
            return null == b ? void 0 : b % 1E3
        }, a);
        a = {};
        this[Bg] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = fn(b, "string");
            return void 0 !== b ? b : void 0
        }, a[10] = function() {
            try {
                var b = x.document;
                return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
            } catch (c) {
                return ""
            }
        }, a[11] = function() {
            try {
                var b, c, d, e, f;
                return null != (f = null == (d = null == (b = xa("google_tag_data")) ? void 0 : null == (c =
                    b.uach) ? void 0 : c.fullVersionList) ? void 0 : null == (e = r(d, "find").call(d, function(g) {
                    return "Google Chrome" === g.brand
                })) ? void 0 : e.version) ? f : ""
            } catch (g) {
                return ""
            }
        }, a)
    };
    var hn = [12, 13, 20];

    function jn() {}
    jn.prototype.init = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? {} : d;
        var f = void 0 === d.La ? !1 : d.La,
            g = void 0 === d.rb ? {} : d.rb;
        d = void 0 === d.tb ? [] : d.tb;
        this.l = a;
        this.v = {};
        this.B = f;
        this.m = g;
        a = {};
        this.i = (a[b] = [], a[4] = [], a);
        this.j = {};
        (b = ri()) && Ta(b.split(",") || [], function(h) {
            (h = parseInt(h, 10)) && (e.j[h] = !0)
        });
        Ta(d, function(h) {
            e.j[h] = !0
        });
        this.h = c;
        return this
    };

    function kn(a, b, c) {
        var d = [],
            e = ln(a.l, b),
            f;
        if (f = 9 !== b) a.v[b] ? f = !0 : (a.v[b] = !0, f = !1);
        if (f) return sh(a.h, b, c, d, [], 4), d;
        if (!e.length) return sh(a.h, b, c, d, [], 3), d;
        var g = Za(hn, b),
            h = [];
        Ta(e, function(k) {
            var l = new ah;
            if (k = mn(a, k, c, l)) 0 !== Tb(l, bh) && h.push(l), l = k.getId(), d.push(l), nn(a, l, g ? 4 : c), (k = G(k, Kg, 2)) && (g ? Jh(k, Lh(), a.h, l) : Jh(k, [c], a.h, l))
        });
        sh(a.h, b, c, d, h, 1);
        return d
    }

    function nn(a, b, c) {
        a.i[c] || (a.i[c] = []);
        a = a.i[c];
        Za(a, b) || a.push(b)
    }

    function on(a, b) {
        a.l.push.apply(a.l, la(Ua(Va(b, function(c) {
            return new cm(c)
        }), function(c) {
            return !Za(hn, c.W())
        })))
    }

    function mn(a, b, c, d) {
        var e = P(vh).h;
        if (!Gg(F(b, ug, 3), e)) return null;
        var f = G(b, Xl, 2),
            g = D(b, 6, 0);
        if (g) {
            Sb(d, 1, bh, g);
            f = e[Ag];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), Rb(d, 3, c)
            } catch (k) {}
            return (b = pn(b, c)) ? qn(a, [b], 1) : null
        }
        if (g = D(b, 10, 0)) {
            Sb(d, 2, bh, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[Ag][9];
                    break;
                case 2:
                    h = e[Ag][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === D(b, 11, 0)) return null;
            void 0 !== c && Rb(d, 3, c);
            return (b = pn(b, c)) ? qn(a, [b], 1) : null
        }
        d = e ? Ua(f, function(k) {
            return Gg(F(k,
                ug, 3), e)
        }) : f;
        if (!d.length) return null;
        c = d.length * D(b, 1, 0);
        return (b = D(b, 4, 0)) ? rn(a, b, c, d) : qn(a, d, c / 1E3)
    }

    function rn(a, b, c, d) {
        var e = null != a.m[b] ? a.m[b] : 1E3;
        if (0 >= e) return null;
        d = qn(a, d, c / e);
        a.m[b] = d ? 0 : e - c;
        return d
    }

    function qn(a, b, c) {
        var d = a.j,
            e = Xa(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.B ? null : dd(b, c)
    }

    function sn(a, b) {
        di(Oh, function(c) {
            a.j[c] = !0
        }, b);
        di(Rh, function(c, d) {
            return kn(a, c, d)
        }, b);
        di(Sh, function(c) {
            return (a.i[c] || []).concat(a.i[4])
        }, b);
        di(ai, function(c) {
            return void on(a, c)
        }, b);
        di(Ph, function(c, d) {
            return void nn(a, c, d)
        }, b)
    }

    function ln(a, b) {
        return (a = Xa(a, function(c) {
            return c.W() == b
        })) && G(a, Zl, 2) || []
    }

    function pn(a, b) {
        var c = G(a, Xl, 2),
            d = c.length,
            e = D(a, 8, 0);
        a = d * D(a, 1, 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * id());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = P(vh).h;
        return !c || e && !Gg(F(c, ug, 3), e) ? null : c
    };

    function tn() {
        this.h = function() {}
    }

    function un(a) {
        P(tn).h(a)
    };
    var vn, wn, xn, yn, zn, An;

    function Bn(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? dn() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new rh(null != (yn = null == (vn = F(a, em, 5)) ? void 0 : D(vn, 2, 0)) ? yn : 0, null != (zn = null == (wn = F(a, em, 5)) ? void 0 : D(wn, 4, 0)) ? zn : 0, null != (An = null == (xn = F(a, em, 5)) ? void 0 : E(xn, 3)) ? An : !1) : f;
        d.hasOwnProperty("init-done") ? (ei(ai, d)(Va(G(a, cm, 2), function(g) {
            return g.toJSON()
        })), ei(bi, d)(Va(G(a, Kg, 1), function(g) {
            return g.toJSON()
        }), e), b && ei(ci, d)(b), Cn(e, d)) : (sn(P(jn).init(G(a, cm, 2), e, f, c), d), fi(d), gi(d), hi(d), Cn(e, d), Jh(G(a, Kg, 1), [e], f,
            void 0, !0), wh = wh || !(!c || !c.ob), un(P(gn)), b && un(b))
    }

    function Cn(a, b) {
        var c = b = void 0 === b ? dn() : b;
        ji(P(ii), c, a);
        Dn(b, a);
        a = b;
        P(tn).h = ei(ci, a);
        P(lg).m()
    }

    function Dn(a, b) {
        var c = P(lg);
        c.i = function(d, e) {
            return ei(Uh, a, function() {
                return !1
            })(d, e, b)
        };
        c.j = function(d, e) {
            return ei(Vh, a, function() {
                return 0
            })(d, e, b)
        };
        c.l = function(d, e) {
            return ei(Wh, a, function() {
                return ""
            })(d, e, b)
        };
        c.h = function(d, e) {
            return ei(Xh, a, function() {
                return []
            })(d, e, b)
        };
        c.m = function() {
            ei(Qh, a)(b)
        }
    };

    function En(a, b, c) {
        var d = V(a);
        if (d.plle) Cn(1, dn(a));
        else {
            d.plle = !0;
            d = F(b, am, 12);
            var e = E(b, 9);
            Bn(d, cn(c, b), {
                La: e && !!a.google_disable_experiments,
                ob: e
            }, dn(a));
            if (c = Yb(b, 15)) c = Number(c), P(ii).l(c);
            b = v(Nb(b, 19));
            for (c = b.next(); !c.done; c = b.next()) c = c.value, P(ii).h(c);
            P(ii).j(12);
            P(ii).j(10);
            a = $c(a) || a;
            Tj(a.location, "google_mc_lab") && P(ii).h(44738307);
            Tj(a.location, "google_auto_storify_swipeable") && P(ii).h(44769175);
            Tj(a.location, "google_auto_storify_scrollable") && P(ii).h(44769174)
        }
    };
    var Fn = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Gn(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function W(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Mi.call(this, a, b);
        this.fa = c;
        this.pb = d
    }
    w(W, Mi);
    W.prototype.pa = function() {
        return this.fa
    };
    W.prototype.i = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function Hn(a) {
        return function(b) {
            return !!(b.fa & a)
        }
    };
    var In = {},
        Jn = (In.image_stacked = 1 / 1.91, In.image_sidebyside = 1 / 3.82, In.mobile_banner_image_sidebyside = 1 / 3.82, In.pub_control_image_stacked = 1 / 1.91, In.pub_control_image_sidebyside = 1 / 3.82, In.pub_control_image_card_stacked = 1 / 1.91, In.pub_control_image_card_sidebyside = 1 / 3.74, In.pub_control_text = 0, In.pub_control_text_card = 0, In),
        Kn = {},
        Ln = (Kn.image_stacked = 80, Kn.image_sidebyside = 0, Kn.mobile_banner_image_sidebyside = 0, Kn.pub_control_image_stacked = 80, Kn.pub_control_image_sidebyside = 0, Kn.pub_control_image_card_stacked =
            85, Kn.pub_control_image_card_sidebyside = 0, Kn.pub_control_text = 80, Kn.pub_control_text_card = 80, Kn),
        Mn = {},
        Nn = (Mn.pub_control_image_stacked = 100, Mn.pub_control_image_sidebyside = 200, Mn.pub_control_image_card_stacked = 150, Mn.pub_control_image_card_sidebyside = 250, Mn.pub_control_text = 100, Mn.pub_control_text_card = 150, Mn);

    function On(a) {
        var b = 0;
        a.U && b++;
        a.L && b++;
        a.M && b++;
        if (3 > b) return {
            O: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.U.split(",");
        var c = a.M.split(",");
        a = a.L.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            O: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            O: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (r(Number, "isNaN").call(Number, g) || 0 === g) return {
                O: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (r(Number, "isNaN").call(Number, g) || 0 === g) return {
                O: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            M: d,
            L: e,
            Oa: b
        }
    }

    function Pn(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var Qn = ab("script");

    function Rn(a, b, c, d, e, f, g, h, k, l, m, q) {
        this.v = a;
        this.V = b;
        this.fa = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.R = void 0 === e ? null : e;
        this.i = void 0 === f ? null : f;
        this.j = void 0 === g ? null : g;
        this.H = void 0 === h ? null : h;
        this.J = void 0 === k ? null : k;
        this.l = void 0 === l ? null : l;
        this.m = void 0 === m ? null : m;
        this.P = void 0 === q ? null : q;
        this.T = this.D = this.B = null
    }
    Rn.prototype.size = function() {
        return this.V
    };

    function Sn(a, b, c) {
        null != a.fa && (c.google_responsive_formats = a.fa);
        null != a.R && (c.google_safe_for_responsive_override = a.R);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.v;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.H && (c.gfwroml = a.H);
        null != a.J && (c.gfwromr = a.J);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.P && (c.gfwroz = a.P);
        null != a.B && (c.gml = a.B);
        null != a.D && (c.gmr = a.D);
        null != a.T && (c.gzi = a.T);
        b = $c(window) || window;
        Tj(b.location, "google_responsive_dummy_ad") &&
            (Za([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + Qn + ">window.top.postMessage('" + a + "', '*');\n          </" + Qn + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    var Tn = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Un(a, b) {
        Mi.call(this, a, b)
    }
    w(Un, Mi);
    Un.prototype.h = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Vn(a, b) {
        Wn(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new Rn(9, new Un(a, Math.floor(a * b.google_phwr)));
        var c = Uc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Jn.mobile_banner_image_sidebyside + Ln.mobile_banner_image_sidebyside) + 96), a = {
            ba: a,
            aa: c,
            L: 1,
            M: 12,
            U: "mobile_banner_image_sidebyside"
        }) : (a = Pn(a), a = {
            ba: a.width,
            aa: a.height,
            L: 1,
            M: 13,
            U: "image_sidebyside"
        }) : (a = Pn(a), a = {
            ba: a.width,
            aa: a.height,
            L: 4,
            M: 2,
            U: "image_stacked"
        });
        Xn(b, a);
        return new Rn(9, new Un(a.ba,
            a.aa))
    }

    function Yn(a, b) {
        Wn(a, b);
        var c = On({
            M: b.google_content_recommendation_rows_num,
            L: b.google_content_recommendation_columns_num,
            U: b.google_content_recommendation_ui_type
        });
        if (c.O) a = {
            ba: 0,
            aa: 0,
            L: 0,
            M: 0,
            U: "image_stacked",
            O: c.O
        };
        else {
            var d = 2 === c.Oa.length && 468 <= a ? 1 : 0;
            var e = c.Oa[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Nn[e];
            for (var g = c.L[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.M[d];
            d = Math.floor(((a - 8 * f - 8) / f * Jn[e] + Ln[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    yb: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    yb: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = {
                ba: a.width,
                aa: a.height,
                L: f,
                M: c,
                U: e
            }
        }
        if (a.O) throw new U(a.O);
        Xn(b, a);
        return new Rn(9, new Un(a.ba, a.aa))
    }

    function Wn(a, b) {
        if (0 >= a) throw new U("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Xn(a, b) {
        a.google_content_recommendation_ui_type = b.U;
        a.google_content_recommendation_columns_num = b.L;
        a.google_content_recommendation_rows_num = b.M
    };

    function Zn(a, b) {
        Mi.call(this, a, b)
    }
    w(Zn, Mi);
    Zn.prototype.h = function() {
        return this.minWidth()
    };
    Zn.prototype.i = function(a, b, c) {
        Li(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var $n = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function ao(a, b) {
        Mi.call(this, a, b)
    }
    w(ao, Mi);
    ao.prototype.h = function() {
        return Math.min(1200, this.minWidth())
    };

    function bo(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f) {
            var g = a;
            if ("false" == e.google_full_width_responsive) a = g;
            else if (a = Gi(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
            else if (a = Fe(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (var h = 0; 100 > h && g.parentElement; ++h) {
                            for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) {
                                var m = k[l];
                                if (m != g && Ji(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    Li(b, c)
                }
            else a = g;
            else a = g
        }
        if (250 > a) throw new U("Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new Rn(11, new Mi(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new U("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 *
                c - -725 + 10);
            if (isNaN(f)) throw new U("Invalid height: height=" + f);
            if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new U("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new Rn(11, new Mi(a, f))
        }
        d = $n[f];
        if (!d) throw new U("Invalid data-ad-layout value: " + f);
        c = Qi(c, b);
        b = Fe(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new Rn(11, "in-article" == f ? new ao(a, b) : new Mi(a, b))
    };

    function co(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function eo(a, b) {
        for (var c = fo.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var go = [new W(970, 90, 2), new W(728, 90, 2), new W(468, 60, 2), new W(336, 280, 1), new W(320, 100, 2), new W(320, 50, 2), new W(300, 600, 4), new W(300, 250, 1), new W(250, 250, 1), new W(234, 60, 2), new W(200, 200, 1), new W(180, 150, 1), new W(160, 600, 4), new W(125, 125, 1), new W(120, 600, 4), new W(120, 240, 4), new W(120, 120, 1, !0)],
        fo = [go[6], go[12], go[3], go[0], go[7], go[14], go[1], go[8], go[10], go[4], go[15], go[2], go[11], go[5], go[13], go[9], go[16]];

    function ho(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            F: a,
            G: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || io(b) || e.google_ad_resize ? (b = Hi(a, c, d, e), c = !0 !== b ? {
            F: a,
            G: b
        } : {
            F: Fe(c) || a,
            G: !0
        }) : c = {
            F: a,
            G: 2
        };
        b = c.G;
        return !0 !== b ? {
            F: a,
            G: b
        } : d.parentElement ? {
            F: c.F,
            G: b
        } : {
            F: a,
            G: b
        }
    }

    function jo(a, b, c, d, e) {
        var f = ok(247, function() {
                return ho(a, b, c, d, e)
            }),
            g = f.F;
        f = f.G;
        var h = !0 === f,
            k = J(d.style.width),
            l = J(d.style.height),
            m = ko(g, b, c, d, e, h);
        g = m.Z;
        h = m.X;
        var q = m.pa;
        m = m.Na;
        var t = lo(b, q),
            z, L = (z = Ni(d, c, "marginLeft", J)) ? z + "px" : "",
            C = (z = Ni(d, c, "marginRight", J)) ? z + "px" : "";
        z = Ni(d, c, "zIndex") || "";
        return new Rn(t, g, q, null, m, f, h, L, C, l, k, z)
    }

    function io(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function ko(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, Fe(c)) ? 4 : 3 : Fi(b);
        var g = !1,
            h = !1;
        if (488 > Fe(c)) {
            var k = Ai(d, c);
            var l = Qi(d, c);
            g = !l && k;
            h = l && k
        }
        l = [Oi(a), Hn(b)];
        l.push(Pi(488 > Fe(c), c, d, h));
        null != e.google_max_responsive_height && l.push(Si(e.google_max_responsive_height));
        var m = [function(t) {
            return !t.pb
        }];
        if (g || h) g = Ti(c, d), m.push(Si(g));
        var q = eo(co(l), co(m));
        if (!q) throw new U("No slot size for availableWidth=" + a);
        l = ok(248, function() {
            var t;
            a: if (f) {
                if (e.gfwrnh && (t = J(e.gfwrnh))) {
                    t = {
                        Z: new Zn(a, t),
                        X: !0
                    };
                    break a
                }
                t = a / 1.2;
                var z = Math;
                var L = z.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var C = Infinity;
                else {
                    C = d;
                    var I = Infinity;
                    do {
                        var T = Ni(C, c, "height", J);
                        T && (I = Math.min(I, T));
                        (T = Ni(C, c, "maxHeight", J)) && (I = Math.min(I, T))
                    } while ((C = C.parentElement) && "HTML" != C.tagName);
                    C = I
                }
                z = L.call(z, t, C);
                if (z < .5 * t || 100 > z) z = t;
                Q(Ef) && !Qi(d, c) && (z = Math.max(z, .5 * Ee(c).clientHeight));
                t = {
                    Z: new Zn(a, Math.floor(z)),
                    X: z < t ? 102 : !0
                }
            } else t = {
                Z: q,
                X: 100
            };
            return t
        });
        g = l.Z;
        l = l.X;
        return "in-article" === e.google_ad_layout &&
            mo(c) ? {
                Z: no(a, c, d, g, e),
                X: !1,
                pa: b,
                Na: k
            } : {
                Z: g,
                X: l,
                pa: b,
                Na: k
            }
    }

    function lo(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function no(a, b, c, d, e) {
        var f = e.google_ad_height || Ni(c, b, "height", J);
        b = bo(a, b, c, f, e).size();
        return b.minWidth() * b.height() > a * d.height() ? new W(b.minWidth(), b.height(), 1) : d
    }

    function mo(a) {
        return Q(Bf) || a.location && "#hffwroe2etoq" == a.location.hash
    };

    function oo(a, b, c, d, e) {
        var f;
        (f = Fe(b)) ? 488 > Fe(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Li(b, c), f = {
            F: f,
            G: !0
        }) : f = {
            F: a,
            G: 5
        } : f = {
            F: a,
            G: 4
        }: f = {
            F: a,
            G: 10
        };
        var g = f;
        f = g.F;
        g = g.G;
        if (!0 !== g || a == f) return new Rn(12, new Mi(a, d), null, null, !0, g, 100);
        a = ko(f, "auto", b, c, e, !0);
        return new Rn(1, a.Z, a.pa, 2, !0, g, a.X)
    };

    function po(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = v(Tn), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (io(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) {
            if (c = "in-article" === b.google_ad_layout) c = Q(Bf) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
            return c ? (qo(b), 1) : 8
        }
        if (27 === b.google_reactive_ad_format) return qo(b), 1
    }

    function ro(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Ni(b, d, "width", J) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = so(a, e, b, c, d)) ? f : jo(e, c.google_ad_format, d, b, c);
        f.size().i(d, c, b);
        Sn(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function so(a, b, c, d, e) {
        var f = d.google_ad_height || Ni(c, e, "height", J);
        switch (a) {
            case 5:
                return f = ok(247, function() {
                    return ho(b, d.google_ad_format, e, c, d)
                }), a = f.F, f = f.G, !0 === f && b != a && Li(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), Vn(a, d);
            case 9:
                return Yn(b, d);
            case 8:
                return bo(b, e, c, f, d);
            case 10:
                return oo(b, e, c, f, d)
        }
    }

    function qo(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function to(a, b) {
        var c = $c(b);
        if (c) {
            c = Fe(c);
            var d = cd(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var uo = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        vo = ja(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        wo = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        xo = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]),
        yo = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]);

    function zo(a) {
        mk.Va(function(b) {
            b.shv = String(a);
            b.mjsv = "m202209060101";
            var c = P(ii).i(),
                d = V(x);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    };

    function Ao(a) {
        var b = a.ub;
        return a.jb || ("dev" === b ? "dev" : "")
    };
    var Bo = {},
        Co = (Bo.google_ad_modifications = !0, Bo.google_analytics_domain_name = !0, Bo.google_analytics_uacct = !0, Bo.google_pause_ad_requests = !0, Bo.google_user_agent_client_hint = !0, Bo);

    function Do(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function Eo(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function Fo(a) {
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
    var Go = new p.WeakMap;

    function Ho() {
        function a(e) {
            e = v(e);
            e.next();
            e = ka(e);
            return c(d, e)
        }
        var b = Io;
        var c = void 0 === c ? Jo : c;
        var d = Aa(b);
        return function() {
            var e = ua.apply(0, arguments),
                f = this || x,
                g = Go.get(f);
            g || (g = {}, Go.set(f, g));
            f = g;
            g = [this].concat(la(e));
            e = a ? a(g) : g;
            if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
            else {
                var h = v(g);
                g = h.next().value;
                h = ka(h);
                g = b.apply(g, h);
                f = f[e] = g
            }
            return f
        }
    }

    function Jo(a, b) {
        a = [a];
        for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\v")
    };

    function Ko(a) {
        return Q(Af) ? Ho()(a) : Io(a)
    }

    function Io(a) {
        if (a.google_ad_client) return String(a.google_ad_client);
        var b, c, d, e, f;
        if (null != (e = null != (d = null == (b = V(a).head_tag_slot_vars) ? void 0 : b.google_ad_client) ? d : null == (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : c.getAttribute("data-ad-client"))) b = e;
        else {
            b: {
                b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) ||
                /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Gd() ? Do : Eo;
                for (c = b.length - 1; 0 <= c; c--)
                    if (d = b[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                        b = d;
                        break b
                    }
                b = null
            }
            if (b) {
                a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                for (c = {}; d = a.exec(b);) c[d[1]] = Fo(d[2]);
                b = c.google_ad_client ? c.google_ad_client : ""
            } else b = ""
        }
        return null != (f = b) ? f : ""
    };
    var Lo = "undefined" === typeof sttc ? void 0 : sttc;

    function Mo(a) {
        var b = mk;
        try {
            return jc(a, sg), new fm(JSON.parse(a))
        } catch (c) {
            b.I(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) {
                d.jspb = String(a)
            })
        }
        return new fm
    };

    function No(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Oo(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Po() {
        var a = new p.Set,
            b = Vj();
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = v(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Qo(a) {
        a = a.id;
        return null != a && (Po().has(a) || r(a, "startsWith").call(a, "google_ads_iframe_") || r(a, "startsWith").call(a, "aswift"))
    }

    function Ro(a, b, c) {
        if (!a.sources) return !1;
        switch (So(a)) {
            case 2:
                var d = To(a);
                if (d) return c.some(function(f) {
                    return Uo(d, f)
                });
            case 1:
                var e = Vo(a);
                if (e) return b.some(function(f) {
                    return Uo(e, f)
                })
        }
        return !1
    }

    function So(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Vo(a) {
        return Wo(a, function(b) {
            return b.currentRect
        })
    }

    function To(a) {
        return Wo(a, function(b) {
            return b.previousRect
        })
    }

    function Wo(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Xo() {
        Od.call(this);
        this.i = this.h = this.R = this.P = this.H = 0;
        this.Da = this.Aa = Number.NEGATIVE_INFINITY;
        this.wa = this.ya = this.za = this.Ba = this.Ga = this.m = this.Fa = this.V = 0;
        this.xa = !1;
        this.T = this.J = this.D = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.Ea = a ? a.getAttribute("data-google-query-id") : null;
        this.l = null;
        this.Ca = !1;
        this.ha = function() {}
    }
    w(Xo, Od);

    function Yo() {
        var a = new Xo;
        if (Q(Jf)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = v(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                for (var c = b.next(); !c.done; c = b.next()) c = c.value, Zo(a).observe({
                    type: c,
                    buffered: !0
                });
                $o(a)
            }
        }
    }

    function Zo(a) {
        a.l || (a.l = new PerformanceObserver(aj(640, function(b) {
            var c = ap !== window.scrollX || bp !== window.scrollY ? [] : cp,
                d = dp();
            b = v(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput) {
                        f.H += Number(e.value);
                        Number(e.value) > f.P && (f.P = Number(e.value));
                        f.R += 1;
                        var g = Ro(e, c, d);
                        g && (f.m += e.value, f.Ba++);
                        if (5E3 < e.startTime - f.Aa || 1E3 < e.startTime - f.Da) f.Aa = e.startTime, f.h = 0, f.i = 0;
                        f.Da = e.startTime;
                        f.h += e.value;
                        g && (f.i += e.value);
                        f.h > f.V && (f.V = f.h, f.Ga = f.i, f.Fa = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.za = Math.floor(e.renderTime || e.loadTime);
                    a.ya = e.size;
                    break;
                case "first-input":
                    a.wa = Number((e.processingStart - e.startTime).toFixed(3));
                    a.xa = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.D += e, a.J = Math.max(a.J, e), a.T += 1
            }
        })));
        return a.l
    }

    function $o(a) {
        var b = aj(641, function() {
                var d = document;
                2 == (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && ep(a)
            }),
            c = aj(641, function() {
                return void ep(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        a.ha = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            Zo(a).disconnect()
        }
    }
    Xo.prototype.j = function() {
        Od.prototype.j.call(this);
        this.ha()
    };

    function ep(a) {
        if (!a.Ca) {
            a.Ca = !0;
            Zo(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Oo("cls", a.H), b += Oo("mls", a.P), b += No("nls", a.R), window.LayoutShiftAttribution && (b += Oo("cas", a.m), b += No("nas", a.Ba)), b += Oo("wls", a.V), b += Oo("tls", a.Fa), window.LayoutShiftAttribution && (b += Oo("was", a.Ga)));
            window.LargestContentfulPaint && (b += No("lcp", a.za), b += No("lcps", a.ya));
            window.PerformanceEventTiming && a.xa && (b += No("fid", a.wa));
            window.PerformanceLongTaskTiming &&
                (b += No("cbt", a.D), b += No("mbt", a.J), b += No("nlt", a.T));
            for (var c = 0, d = v(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Qo(e.value) && c++;
            b += No("nif", c);
            b += No("ifi", Fd(window));
            c = P(ii).i();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (x === x.top ? 1 : 0);
            b += a.Ea ? "&qqid=" + encodeURIComponent(a.Ea) : No("pvsid", vd(x));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.v || (a.v = !0, a.j())
        }
    }

    function Uo(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function dp() {
        var a = [].concat(la(document.getElementsByTagName("iframe"))).filter(Qo),
            b = [].concat(la(Po())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        ap = window.scrollX;
        bp = window.scrollY;
        return cp = [].concat(la(a), la(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var ap = void 0,
        bp = void 0,
        cp = [];
    var X = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function fp(a, b, c) {
        Od.call(this);
        var d = this;
        this.i = a;
        this.h = [];
        b && gp() && this.h.push(X);
        c && this.h.push(Y);
        if (document.hasTrustToken && !Q(gg)) {
            var e = new p.Map;
            this.h.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.i ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof p.Map ? new p.Map([].concat(la(e), la(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof p.Map || (window.goog_tt_promise_map =
                new p.Map)
        }
    }
    w(fp, Od);

    function gp() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function hp() {
        var a = void 0 === a ? window.document : a;
        var b = P(lg).h(jg.h, jg.defaultValue);
        ud(b, a)
    }

    function ip(a, b) {
        return a || ".google.ch" === b || "function" === typeof K.__tcfapi
    }

    function Z(a, b, c) {
        var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function jp() {
        var a = X.issuerOrigin + X.redemptionPath,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: X.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(X.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5)
        })
    }

    function kp() {
        var a = X.issuerOrigin + X.issuancePath;
        Z(X.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok) throw Error(b.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 10);
            return jp()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name) return Z(X.issuerOrigin, 10), jp();
            Z(X.issuerOrigin, 9)
        })
    }

    function lp() {
        Z(X.issuerOrigin, 13);
        return document.hasTrustToken(X.issuerOrigin).then(function(a) {
            return a ? jp() : kp()
        })
    }

    function mp() {
        Z(Y.issuerOrigin, 13);
        if (p.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                }),
                b = Y.issuerOrigin + Y.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f && "NoModificationAllowedError" ===
                        f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e) return p.Promise.reject({
                            state: 17,
                            error: f
                        });
                        Z(Y.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 21,
                        error: g
                    })
                })
            });
            var d = vd(window);
            return a.then(function(e) {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 24,
                        error: g
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs) return Z(Y.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(function(f) {
                    return p.Promise.reject({
                        state: 27,
                        error: f
                    })
                })
            }).then(function() {
                Z(Y.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" ===
                        typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        var f = R(ig);
                        Math.random() <= f && oe({
                            state: e.state,
                            err: e.error.toString()
                        })
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function np(a) {
        if (document.hasTrustToken && !Q(gg) && a.i) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof p.Map) {
                var c = [];
                if (a.h.some(function(e) {
                        return e.issuerOrigin === X.issuerOrigin
                    })) {
                    var d = b.get(X.issuerOrigin);
                    d || (d = lp(), b.set(X.issuerOrigin, d));
                    c.push(d)
                }
                a.h.some(function(e) {
                    return e.issuerOrigin === Y.issuerOrigin
                }) && (a = b.get(Y.issuerOrigin), a || (a = mp(), b.set(Y.issuerOrigin, a)), c.push(a));
                if (0 < c.length && p.Promise && p.Promise.all) return p.Promise.all(c)
            }
        }
    };

    function op(a) {
        H.call(this, a, -1, pp)
    }
    w(op, H);

    function qp(a, b) {
        return B(a, 2, b)
    }

    function rp(a, b) {
        return B(a, 3, b)
    }

    function sp(a, b) {
        return B(a, 4, b)
    }

    function tp(a, b) {
        return B(a, 5, b)
    }

    function up(a, b) {
        return B(a, 9, b)
    }

    function vp(a, b) {
        return Xb(a, 10, b)
    }

    function wp(a, b) {
        return B(a, 11, b)
    }

    function xp(a, b) {
        return B(a, 1, b)
    }

    function yp(a, b) {
        return B(a, 7, b)
    }

    function zp(a) {
        H.call(this, a)
    }
    w(zp, H);
    zp.prototype.getVersion = function() {
        return Yb(this, 2)
    };
    var pp = [10, 6];
    var Ap = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Bp() {
        var a;
        return null != (a = K.google_tag_data) ? a : K.google_tag_data = {}
    }

    function Cp() {
        var a, b;
        if ("function" !== typeof(null == (a = K.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)) return null;
        var c = Bp();
        if (c.uach_promise) return c.uach_promise;
        a = K.navigator.userAgentData.getHighEntropyValues(Ap).then(function(d) {
            null != c.uach || (c.uach = d);
            return d
        });
        return c.uach_promise = a
    }

    function Dp(a) {
        var b;
        return wp(vp(tp(qp(xp(sp(yp(up(rp(new op, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new zp;
            d = B(d, 1, c.brand);
            return B(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function Ep() {
        var a, b;
        return null != (b = null == (a = Cp()) ? void 0 : a.then(function(c) {
            return Dp(c)
        })) ? b : null
    };

    function Fp(a, b) {
        b.google_ad_host || (a = Cm(a)) && (b.google_ad_host = a)
    }

    function Gp(a, b, c) {
        c = void 0 === c ? "" : c;
        K.google_sa_impl && !K.document.getElementById("google_shimpl") && (delete K.google_sa_queue, delete K.google_sa_impl);
        K.google_sa_queue || (K.google_sa_queue = [], K.google_process_slots = pk(215, function() {
            return Hp(K.google_sa_queue)
        }), a = Ip(c, a, b), ad(K.document, a).id = "google_shimpl")
    }

    function Hp(a) {
        var b = a.shift();
        "function" === typeof b && ok(216, b);
        a.length && x.setTimeout(pk(215, function() {
            return Hp(a)
        }), 0)
    }

    function Jp(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function Ip(a, b, c) {
        var d = Math.random() < R(xf) ? Ec(Dc(b.wb).toString()) : null;
        b = E(c, 4) ? b.vb : b.xb;
        d = d ? d : Ec(Dc(b).toString());
        b = {};
        a: {
            if (E(c, 4)) {
                if (c = a || Ko(K)) {
                    var e = {};
                    c = (e.client = c, e.plah = K.location.host, e);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            c = {}
        }
        Kp(c, b);
        a: {
            if ((!Q(dg) || Q(Of) && K !== K.top) && (Q(Nf) || Q(cg)) && (a = a || Ko(K), c = Bm(K), a)) {
                e = {};
                a = (e.client = a, e.plah = K.location.host, e.ama_t = "adsense", e.asntp = R(Uf), e.asntpv = R(Yf), e.asntpl = R(Wf), e.asntpm = R(Xf), e.asntpc = R(Vf), e.asna = R(Qf), e.asnd = R(Rf),
                    e.asnp = R(Sf), e.asns = R(Tf), e.asmat = R(Pf), e.asptt = R(Zf), e.easpi = Q(Nf), e.asro = Q($f), e.host = c, e.easai = Q(Lf), e);
                break a
            }
            a = {}
        }
        Kp(a, b);
        Kp(mg() ? {
            bust: mg()
        } : {}, b);
        return Bc(d, b)
    }

    function Kp(a, b) {
        jd(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function Lp(a) {
        a: {
            var b = void 0 === b ? !1 : b;
            for (var c = [x.top], d = [], e = 0, f; f = c[e++];) {
                b && !Zc(f) || d.push(f);
                try {
                    if (f.frames)
                        for (var g = 0; g < f.frames.length && 1024 > c.length; ++g) c.push(f.frames[g])
                } catch (k) {}
            }
            for (b = 0; b < d.length; b++) try {
                var h = d[b].frames.google_esf;
                if (h) {
                    yd = h;
                    break a
                }
            } catch (k) {}
            yd = null
        }
        if (yd) return null;d = bd("IFRAME");d.id = "google_esf";d.name = "google_esf";d.src = Dc(a.Cb).toString();d.style.display = "none";
        return d
    }

    function Mp(a, b, c, d) {
        Np(a, b, c, d, function(e, f) {
            e = e.document;
            for (var g = void 0, h = 0; !g || e.getElementById(g + "_host");) g = "aswift_" + h++;
            e = g;
            g = Number(f.google_ad_width || 0);
            f = Number(f.google_ad_height || 0);
            h = bd("DIV");
            h.id = e + "_host";
            var k = h.style;
            k.border = "none";
            k.height = f + "px";
            k.width = g + "px";
            k.margin = "0px";
            k.padding = "0px";
            k.position = "relative";
            k.visibility = "visible";
            k.backgroundColor = "transparent";
            h.style.display = "inline-block";
            c.appendChild(h);
            return {
                kb: e,
                outerInsElement: h,
                innerInsElement: h
            }
        })
    }

    function Np(a, b, c, d, e) {
        var f = e(a, b);
        e = f.kb;
        Op(a, c, b);
        c = Ja;
        var g = (new Date).getTime();
        b.google_lrv = Yb(d, 2);
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        d = a.document.getElementById(e + "_host") ? function(h) {
            return h()
        } : function(h) {
            return window.setTimeout(h, 0)
        };
        Jp(a, function() {
            if (Q(Ff) || b.google_slot_inside_iframe) {
                var h = f.outerInsElement;
                var k = f.innerInsElement;
                if (!(h && k && h.isConnected && k.isConnected) && (k = a.document.getElementById(String(b.google_async_iframe_id) +
                        "_host"), h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), null == k || null == h)) throw Error("no_ins");
                h = {
                    pubWin: a,
                    vars: b,
                    outerInsElement: h,
                    innerInsElement: k
                }
            } else h = {
                pubWin: a,
                vars: b
            };
            (h = a.google_sa_impl(h)) && h.catch && rk(911, h)
        }, d)
    }

    function Op(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Fn[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = kd(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var q = k[m];
                            if (q.nodeName && q.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === q) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var t = a.parent;
                for (e = 0; t && t !== a && 25 > e; ++e) {
                    var z = t.frames;
                    for (d = 0; d < z.length; ++d)
                        if (a === z[d]) {
                            b.push(d);
                            break
                        }
                    a = t;
                    t = a.parent
                }
            } catch (L) {}
            c.google_ad_dom_fingerprint = kd(h + b.join()).toString()
        }
    }

    function Pp() {
        var a = $c(x);
        a && (a = De(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Qp(a) {
        hp();
        ip(jm(), Yb(a, 8)) || pk(779, function() {
            var b = window;
            b = void 0 === b ? window : b;
            b = Q(b.PeriodicSyncManager ? eg : fg);
            var c = Q(hg);
            b = new fp(!0, b, c);
            0 < R(kg) ? K.google_trust_token_operation_promise = np(b) : np(b)
        })();
        a = Ep();
        null != a && a.then(function(b) {
            a: {
                xb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), dc);
                    break a
                } finally {
                    xb = !1
                }
                c = void 0
            }
            K.google_user_agent_client_hint = c
        });
        en()
    };

    function Rp(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function Sp(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "";
            (c = Yc(c)) && (b.google_ad_client = Rp("google_ad_client", c))
        }
        a = a.attributes;
        c = a.length;
        for (var d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = Ka(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Rp(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function Tp(a) {
        if (a = Bd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Up(a, b, c, d) {
        Sp(a, b);
        if (c.document && c.document.body && !po(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = to(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Fn[e + "x" + g];
                var h = f;
                if (e) {
                    var k = Gn(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new U("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = jo(f, "auto", c, a, b);
                h = f;
                g.size().i(c, b,
                    a);
                Sn(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.minWidth() > f && !e && (b.google_ad_width = g.minWidth(), a.style.width = g.minWidth() + "px")
            }
        }
        e = a.offsetWidth || Ni(a, c, "width", J) || b.google_ad_width || 0;
        f = Ga(jo, e, "auto", c, a, b, !1, !0);
        if (!Q(rf) && 488 > Fe(c)) {
            g = $c(c) || c;
            h = b.google_ad_client;
            d = g.location && "#ftptohbh" === g.location.hash ? 2 : Tj(g.location, "google_responsive_slot_preview") || Q(zf) ? 1 : Q(yf) ? 2 : lm(g, 1, h, d) ? 1 : 0;
            if (g = 0 !== d) b: if (b.google_reactive_ad_format || Q(sf) && b.google_ad_resize || po(c, b) || Ci(a, b)) g = !1;
                else {
                    for (g = a; g; g = g.parentElement) {
                        h = cd(g, c);
                        if (!h) {
                            b.gfwrnwer = 18;
                            g = !1;
                            break b
                        }
                        if (!Za(["static", "relative"], h.position)) {
                            b.gfwrnwer = 17;
                            g = !1;
                            break b
                        }
                    }
                    g = Gi(c, a, e, .3, b);
                    !0 !== g ? (b.gfwrnwer = g, g = !1) : g = c === c.top ? !0 : !1
                }
            g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === d ? (d = {}, Sn(f(), e, d), b.google_resizing_width = d.google_ad_width, b.google_resizing_height = d.google_ad_height, b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1
        } else d = !1;
        if (e = po(c, b)) ro(e, a, b, c, d);
        else {
            if (Ci(a, b)) {
                if (d = cd(a, c)) a.style.width =
                    d.width, a.style.height = d.height, Bi(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Tp(c)
            } else Bi(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? ro(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = Hi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Vp(a) {
        this.j = new p.Set;
        this.A = Cd() || window;
        this.h = R(gf);
        var b = 0 < this.h && id() < 1 / this.h;
        this.v = (this.i = !!zk(vk(), 30, b)) ? vd(this.A) : 0;
        this.m = this.i ? Ko(this.A) : "";
        this.l = null != a ? a : new qh(100)
    }

    function Wp() {
        var a = P(Vp);
        var b = new Ng;
        b = B(b, 1, Ee(a.A).scrollWidth);
        b = B(b, 2, Ee(a.A).scrollHeight);
        var c = new Ng;
        c = B(c, 1, Fe(a.A));
        c = B(c, 2, Ee(a.A).clientHeight);
        var d = new Pg;
        d = B(d, 1, a.v);
        d = B(d, 2, a.m);
        d = B(d, 3, a.h);
        var e = new Og;
        b = Vb(e, 2, b);
        b = Vb(b, 1, c);
        b = Wb(d, 4, Qg, b);
        a.i && !a.j.has(1) && (a.j.add(1), lh(a.l, b))
    };
    var Xp = ja(["(a=0)=>{let b;const c=class{};}"]);

    function Yp() {
        var a = Xp[0];
        var b = wc();
        a = b ? b.createScript(a) : a;
        a = new yc(a, xc);
        try {
            b = window;
            var c = a instanceof yc && a.constructor === yc ? a.h : "type_error:SafeScript";
            b.eval(c) === c && b.eval(c.toString());
            return [!0, ""]
        } catch (d) {
            return [!1, String(d)]
        }
    };

    function Zp(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        Pc(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };

    function $p(a, b) {
        b = void 0 === b ? 500 : b;
        Od.call(this);
        this.i = a;
        this.Ya = b;
        this.h = null;
        this.m = {};
        this.l = null
    }
    w($p, Od);
    $p.prototype.j = function() {
        this.m = {};
        this.l && (Qc(this.i, "message", this.l), delete this.l);
        delete this.m;
        delete this.i;
        delete this.h;
        Od.prototype.j.call(this)
    };

    function aq(a) {
        Od.call(this);
        this.l = a;
        this.h = null;
        this.i = !1
    }
    w(aq, Od);
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var bq = ja(["https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700&text=shoppingmode"]),
        cq = ja(["https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700"]),
        dq = ja(["https://fonts.googleapis.com"]),
        eq = ja(["https://fonts.gstatic.com"]);
    var fq = null,
        gq = [],
        hq = new p.Map,
        iq = -1;

    function jq(a) {
        return Vi.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }

    function kq(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        lq(a, b, c)
    }

    function lq(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Up);
        var e = b.google_reactive_ads_config;
        e || Up(a, b, d, c);
        Fp(d, b);
        if (!mq(a, b, d)) {
            e || (d.google_lpabyc = Di(a, d) + Ni(a, d, "height", J));
            if (e) {
                e = e.page_level_pubvars || {};
                if (V(K).page_contains_reactive_tag && !V(K).allow_second_reactive_tag) {
                    if (e.pltais) {
                        zm(!1);
                        return
                    }
                    throw new U("Only one 'enable_page_level_ads' allowed per page.");
                }
                V(K).page_contains_reactive_tag = !0;
                zm(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = Ed(d);
            jd(Co, function(f, g) {
                b[g] = b[g] ||
                    d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (V(K).first_tag_on_page || 0);
            ok(164, function() {
                Mp(d, b, a, c)
            })
        }
    }

    function mq(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = xm(c);
        if (f && f.Ha && "on" !== b.google_adtest && !e) {
            e = Di(a, c);
            var g = Ee(c).clientHeight;
            if (!f.qa || f.qa && ((0 == g ? null : e / g) || 0) >= f.qa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Aa(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.Ab && (null !== od(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== od(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = cd(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (x.console && x.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function nq(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (jq(e) && "reserved" !== e.dataset.adsbygoogleStatus && (!a || d.id === a)) return d
        }
        return null
    }

    function oq(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    pq(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function qq() {
        var a = bd("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        rd(a, {
            display: "none"
        });
        return a
    }

    function rq(a, b) {
        var c = {};
        jd(Ae, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        za(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = qq();
        xd.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!V(K).pause_ad_requests;
        kq(d, e, b)
    }

    function sq(a, b) {
        function c() {
            return rq(a, b)
        }
        De(x).wasPlaTagProcessed = !0;
        var d = x.document;
        if (d.body || "complete" === d.readyState || "interactive" === d.readyState) c();
        else {
            var e = Oc(pk(191, c));
            Pc(d, "DOMContentLoaded", e);
            (new x.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function pq(a, b, c) {
        var d = {};
        ok(165, function() {
            return tq(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function uq(a) {
        delete a.google_checked_head;
        jd(a, function(b, c) {
            Ui[c] || (delete a[c], x.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function vq(a, b) {
        var c = K.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || K.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = V(window);
            if (d.head_tag_slot_vars) wq(c);
            else {
                var e = {};
                Sp(c, e);
                uq(e);
                var f = uc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                K.adsbygoogle || (K.adsbygoogle = []);
                d = K.adsbygoogle;
                d.loaded ? d.push(c) : d.splice(0, 0, c);
                var g;
                e.google_adbreak_test || (null == (g = $b(b, Ul, 13, Lb)) ? 0 : E(g, 3)) && Q(Gf) ? xq(f, a) : Zp(function() {
                    xq(f, a)
                })
            }
        }
    }

    function wq(a) {
        var b = V(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Yc(c) || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new U("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function yq(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function tq(a, b, c, d) {
        if (null == a) throw new U("push() called with no parameters.");
        Ib(d, Vl, 14) && zq(a, Nb(hm(d), 1), Yb(d, 2));
        var e = yq(a);
        if (0 !== e) Q(uf) && (d = Am(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = Ja)), null == fq ? (Aq(a), gq.push(a)) : 3 === e ? ok(787, function() {
            fq.handleAdConfig(a)
        }) : rk(730, fq.handleAdBreak(a));
        else {
            Ja = (new Date).getTime();
            Gp(c, d, Bq(a));
            Cq();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new U("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) Dq(a, d);
            else if ((e = a.params) && jd(e, function(g, h) {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = Eq(a.element);
                Sp(e, b);
                c = V(x).head_tag_slot_vars || {};
                jd(c, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (e.hasAttribute("data-require-head") && !V(x).head_tag_slot_vars) throw new U("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new U("Ad client is missing from the slot.");
                Q(Df) || (b.google_apsail = rm(b.google_ad_client));
                var f = (c = 0 === (V(K).first_tag_on_page || 0) && Vm(b)) && Wm(c);
                c && (f || (Dq(c, d), V(K).skip_next_reactive_tag = !0), Q(Cf) && f && Fq(c));
                0 === (V(K).first_tag_on_page || 0) && (V(K).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!V(K).pause_ad_requests;
                kq(e, b, d);
                !Q(Cf) && c && f && Fq(c)
            }
        }
    }
    var Gq = !1;

    function zq(a, b, c) {
        Q(tf) && !Gq && (Gq = !0, (a = Bq(a)) || (a = Ko(K)), qk("predictive_abg", {
            a_c: a,
            p_c: b,
            b_v: c
        }, .01))
    }

    function Bq(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Cq() {
        if (Q(lf)) {
            var a = xm(K);
            if (!(a = a && a.Ha)) {
                try {
                    var b = K.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? Tl(b) : null;
                a = !(b && Sl(b) && b)
            }
            a || ym(K, 1)
        }
    }

    function Fq(a) {
        wd(function() {
            De(x).wasPlaTagProcessed || x.adsbygoogle && x.adsbygoogle.push(a)
        })
    }

    function Dq(a, b) {
        if (V(K).skip_next_reactive_tag) V(K).skip_next_reactive_tag = !1;
        else {
            0 === (V(K).first_tag_on_page || 0) && (V(K).first_tag_on_page = 1);
            if (a.tag_partner) {
                var c = a.tag_partner,
                    d = V(x);
                d.tag_partners = d.tag_partners || [];
                d.tag_partners.push(c)
            }
            Xm(a, b);
            sq(a, b)
        }
    }

    function Eq(a) {
        if (a) {
            if (!jq(a) && (a.id ? a = nq(a.id) : a = null, !a)) throw new U("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new U("'element' is not a good DOM element.");
        } else if (a = nq(), !a) throw new U("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Hq() {
        var a = new Fk(K),
            b = new $p(K),
            c = new aq(K),
            d = K.__cmp ? 1 : 0;
        a = Gk(a) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null == (e = b.i) ? void 0 : e.__uspapi)) || (b.h ? b = b.h : (b.h = pd(b.i, "__uspapiLocator"), b = b.h), f = null != b);
        b = f ? 1 : 0;
        c.i || (c.h || (c.h = pd(c.l, "googlefcPresent")), c.i = !0);
        qk("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: b,
            fc: c.h ? 1 : 0,
            ptt: 9
        }, R(ff))
    }

    function Iq(a) {
        a = {
            value: E(a, 16)
        };
        var b = .01;
        R(nf) && (a.eid = R(nf), b = 1);
        a.frequency = b;
        qk("new_abg_tag", a, b)
    }

    function Jq(a) {
        vk().S[xk(26)] = !!Number(a)
    }

    function Kq(a) {
        Number(a) ? V(K).pause_ad_requests = !0 : (V(K).pause_ad_requests = !1, a = function() {
            if (!V(K).pause_ad_requests) {
                var b = void 0 === b ? {} : b;
                if ("function" === typeof window.CustomEvent) var c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b);
                else c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail);
                K.dispatchEvent(c)
            }
        }, x.setTimeout(a, 0), x.setTimeout(a, 1E3))
    }

    function Lq(a) {
        qk("adsenseGfpKnob", {
            value: a,
            ptt: 9
        }, .1);
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        K._gfp_a_ = a
    }

    function Mq(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function xq(a, b) {
        b = Tm(Bc(Ec(Dc(b.zb).toString()), mg() ? {
            bust: mg()
        } : {})).then(function(c) {
            null == fq && (c.init(a), fq = c, Nq())
        });
        rk(723, b);
        r(b, "finally").call(b, function() {
            gq.length = 0;
            qk("slotcar", {
                event: "api_ld",
                time: Date.now() - Ja,
                time_pr: Date.now() - iq
            })
        })
    }

    function Nq() {
        for (var a = v(r(hq, "keys").call(hq)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = hq.get(b); - 1 !== c && (x.clearTimeout(c), hq.delete(b))
        }
        a = {};
        for (b = 0; b < gq.length; a = {
                ga: a.ga,
                ca: a.ca
            }, b++) hq.has(b) || (a.ca = gq[b], a.ga = yq(a.ca), ok(723, function(d) {
            return function() {
                3 === d.ga ? fq.handleAdConfig(d.ca) : 2 === d.ga && rk(730, fq.handleAdBreakBeforeReady(d.ca))
            }
        }(a)))
    }

    function Aq(a) {
        var b = gq.length;
        if (2 === yq(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === iq && (iq = Date.now());
            var c = x.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), hq.set(b, -1), qk("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * R(Hf));
            hq.set(b, c)
        }
    }

    function Oq() {
        if (Q(Nf) && !Q($f)) {
            if (Q(bg)) {
                var a = K.document,
                    b = a.createElement("LINK"),
                    c = Q(Mf) ? Dd(bq) : Dd(cq);
                Lc(b, c, "stylesheet");
                a.head.appendChild(b)
            }
            if (Q(ag))
                for (a = K.document, b = v([Dd(dq), Dd(eq)]), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = a.createElement("LINK");
                    d.crossOrigin = "";
                    Lc(d, c, "preconnect");
                    a.head.appendChild(d)
                }
        }
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        mk.Wa(sk);
        ok(166, function() {
            var e = Mo(b);
            zo(Yb(e, 2));
            km(E(e, 6));
            d();
            Ad(16, [1, e.toJSON()]);
            var f = Cd(Bd(K)) || K,
                g = c(Ao({
                    jb: a,
                    ub: Yb(e, 2)
                }), e);
            om(f, e);
            En(f, e, null === K.document.currentScript ? 1 : bn(g.Bb));
            Wp();
            if ((!Oa() || 0 <= La(Ra(), 11)) && (null == (K.Prototype || {}).Version || !Q(qf))) {
                nk(Q(Kf));
                Qp(e);
                Fl();
                try {
                    Yo()
                } catch (q) {}
                Pp();
                vq(g, e);
                f = window;
                var h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    if (Q(mf) && !E(e, 16)) try {
                        if (K.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]')) return
                    } catch (q) {}
                    Oq();
                    Iq(e);
                    R(ff) && Hq();
                    var k = {
                        push: function(q) {
                            pq(q, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(k, "requestNonPersonalizedAds", {
                            set: Jq
                        }), Object.defineProperty(k, "pauseAdRequests", {
                            set: Kq
                        }), Object.defineProperty(k, "cookieOptions", {
                            set: Lq
                        }), Object.defineProperty(k, "onload", {
                            set: Mq
                        })
                    } catch (q) {}
                    if (h)
                        for (var l = v(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !== h[m] && (k[m] = h[m]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    oq(h, g, e);
                    f.adsbygoogle = k;
                    h &&
                        (k.onload = h.onload);
                    (f = Lp(g)) && document.documentElement.appendChild(f);
                    f = Yp();
                    qk("modern_js", {
                        fy: D(e, 1, 0),
                        supports: f[0],
                        c: 2012,
                        e: f[1]
                    }, .01)
                }
            }
        })
    })("m202209060101", Lo, function(a, b) {
        var c = 2012 < D(b, 1, 0) ? "_fy" + D(b, 1, 0) : "",
            d = Yb(b, 3),
            e = Yb(b, 2);
        b = Dd(uo, a, c);
        d = Dd(vo, e, d);
        return {
            zb: b,
            xb: Dd(wo, a, c),
            vb: Dd(xo, a, c),
            wb: Dd(yo, a, c),
            Cb: d,
            Bb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2012,\"r20220907\",\"r20190131\",null,null,null,null,\".google.co.id\",null,null,null,[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[null,1130,null,[null,100]],[null,1126,null,[null,10000]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1131,null,null,[1]],[null,1159,null,[null,500]],[1122,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1087,null,null,[1]],[1204,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[1177,null,null,[1]],[null,1169,null,[null,61440]],[1053,null,null,[1]],[1100,null,null,[1]],[1201,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1036,null,null,[1]],[1184,null,null,[1]],[1141,null,null,[1]],[1197,null,null,[1]],[1190,null,null,[1]],[380254521,null,null,[],[[[1,[[4,null,63]]],[1]]]],[381914117,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1034,null,[]],[null,1080,null,[null,5]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[1033,null,null,[1]],[null,null,null,[null,null,null,[\"A+cA2PUOfIOKAdSDJOW5CP9ZlxONy1yu+hqAq72zUtKw4rLdihqRp6Nui\/jUyCyegr+BUtH+C+Elv0ufn05yBQEAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A+zsdH3aNZT\/bkjT8U\/o5ACzyaeNYzTvtoVmwf\/KOilfv39pxY2AIsOwhQJv+YnXp98i3TqrQibIVtMWs5UHjgoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"AxceVEhIegcDEHqLXFQ2+vPKqzCppoJYsRCZ\/BdfVnbM\/sUUF2BXV8lwNosyYjvoxnTh2FC8cOlAnA5uULr\/zAUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1934],[1947,null,null,[1]],[null,1972,null,[]],[null,1142,null,[null,8]],[null,1165,null,[null,1000]],[null,1195,null,[null,1]],[null,1119,null,[null,300]],[null,1193,null,[null,100]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1115,null,[null,-1]],[null,1194,null,[null,1]],[null,469675170,null,[null,30000]],[1186,null,null,[1]],[392736476,null,null,[]],[null,null,null,[],null,1932],[432938498,null,null,[]]],[[10,[[10,[[31069507],[31069508,[[1196,null,null,[1]]]],[31069509,[[1206,null,null,[1]]]],[31069510,[[1205,null,null,[1]]]],[31069511,[[1196,null,null,[1]],[1205,null,null,[1]],[1206,null,null,[1]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[100,[[42531705],[42531706]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[20,[[44760911],[44760912,[[1160,null,null,[1]]]],[44768832,[[1160,null,null,[1]]]]]],[10,[[44767166],[44767167]]],[10,[[44769305],[44769306,[[313,null,null,[1]]]]]],[null,[[44755592],[44755593,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755594,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755653,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[1,[[44770147],[44770148,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[null,[[44771607],[44771608,[[1200,null,null,[1]]]]],null,51],[10,[[44773613],[44773614,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[10,[[21066428],[21066429]]],[10,[[31069003,[[null,1103,null,[null,31069003]]]],[31069004,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31069004]],[1192,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,300]],[null,1194,null,[null,2]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[1,[[31069093,[[null,1103,null,[null,31069093]]]],[31069094,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31069094]],[1192,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,300]],[1203,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[50,[[31069177],[31069178,[[1198,null,null,[1]]]]]],[1,[[31069185,[[null,1103,null,[null,31069185]],[1121,null,null,[1]]]],[31069186,[[1120,null,null,[1]],[null,1103,null,[null,31069186]],[null,1114,null,[null,0.4]],[null,1108,null,[null,300]],[1121,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[500,[[31069187,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31069187]],[1192,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,300]],[null,1194,null,[null,2]]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]],49],[1000,[[31069437,[[null,null,14,[null,null,\"31069437\"]]],[6,null,null,null,6,null,\"31069437\"]],[31069438,[[null,null,14,[null,null,\"31069438\"]]],[6,null,null,null,6,null,\"31069438\"]]],[4,null,55],63],[1000,[[31069447,[[null,null,14,[null,null,\"31069447\"]]],[6,null,null,null,6,null,\"31069447\"]],[31069448,[[null,null,14,[null,null,\"31069448\"]]],[6,null,null,null,6,null,\"31069448\"]]],[4,null,55],63],[10,[[44770765],[44770766,[[1134,null,null,[1]]]]]],[50,[[44770880],[44770881,[[1171,null,null,[1]]]]]],[50,[[44771547],[44771548,[[1147,null,null,[1]]]]],null,54],[null,[[44772035,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44772035]],[null,1114,null,[null,0.9]],[null,1108,null,[null,300]],[null,1194,null,[null,2]]]],[44772036,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44772036]],[null,1114,null,[null,0.9]],[null,1108,null,[null,300]],[1180,null,null,[1]],[null,1194,null,[null,2]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[1,[[44772268],[44772269,[[1185,null,null,[1]]]]]],[20,[[44772486,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44772486]],[1192,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,300]],[null,1194,null,[null,2]]]],[44772487,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44772487]],[1192,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[null,1194,null,[null,2]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[10,[[44772488,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44772488]],[1192,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,300]],[1186,null,null,[1]]]],[44772489,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44772489]],[1192,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1186,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[20,[[44772915,[[null,1103,null,[null,44772915]]]],[44772916,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44772916]],[1192,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,300]],[null,1194,null,[null,2]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[1,[[44772918,[[null,1103,null,[null,44772918]]]],[44772919,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44772919]],[1192,null,null,[1]],[1202,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,300]],[null,1194,null,[null,2]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[10,[[44772922,[[null,1103,null,[null,44772922]]]],[44772923,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44772923]],[1192,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,300]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[50,[[44772927],[44772928,[[63669,null,null,[1]]]]],null,51],[300,[[44773164,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44773164]],[1192,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,300]],[1203,null,null,[1]],[469675169,null,null,[1]]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]],49],[10,[[44773165,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44773165]],[1192,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,300]]]],[44773166,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44773166]],[1192,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,300]],[1203,null,null,[1]]]],[44773167,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44773167]],[1192,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,300]],[1203,null,null,[1]],[469675169,null,null,[1]]]],[44773168,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44773168]],[1192,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,300]],[469675169,null,null,[1]]]]],[4,null,55],49],[10,[[44773260],[44773261,[[1177,null,null,[]]]]]],[1,[[44773410,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44773410]],[1192,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,300]],[1203,null,null,[1]]]],[44773411,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44773411]],[1192,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,300]],[1203,null,null,[1]],[471002731,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[50,[[31061761],[31067422],[31067423,[[null,1032,null,[]]]],[31067605],[31068455],[31068456],[44772209]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]]]]],[17,[[5,[[44769173],[44769174],[44769175]],null,null,null,null,31,null,null,113],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]],[100,[[31069098],[31069099,[[447540098,null,null,[1]],[447540096,null,null,[1]]]],[31069100,[[447540098,null,null,[1]],[447540097,null,null,[1]],[447540096,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],null,null,null,null,null,null,112]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102],[50,[[31068919],[31068920],[31068921]],null,null,null,null,null,401,null,102],[1000,[[31065981,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/(9[23456789]|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]]]],[1000,[[31069417,null,[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31069418,null,[4,null,8,null,null,null,null,[\"anonymouslyFramed\"]]]]]]],[11,[[1,[[31069034],[31069035,[[447540098,null,null,[1]],[447540096,null,null,[1]]]],[31069036,[[447540098,null,null,[1]],[447540097,null,null,[1]],[447540096,null,null,[1]]]]],null,55]]],[12,[[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[50,[[31067825],[31067826,[[1971,null,null,[1]]]]]],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1,[[31064018],[31064019,[[1961,null,null,[1]]]]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,69,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,[\"sharedStorage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[10,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],null,null,[0.001,\"1000\",1,\"1000\"]],[null,[]],null,null,null,null,1825408267,[44759876,44759927,44759842]]");