
var query_wuxing_temps = [];
var query_wuxing_details = [];
var kangxidict = [];

!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 3)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.debugMode = !1,
    t.defaultBook = "shijing",
    t.defaultFamilyName = "胡",
    t.nameAmount = 6
}
, function(e, t, n) {
    var r;
    /*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
    /*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
    !function(t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return n(e)
        }
        : n(t)
    }("undefined" != typeof window ? window : this, function(n, o) {
        "use strict";
        var i = []
          , a = Object.getPrototypeOf
          , s = i.slice
          , u = i.flat ? function(e) {
            return i.flat.call(e)
        }
        : function(e) {
            return i.concat.apply([], e)
        }
          , l = i.push
          , c = i.indexOf
          , f = {}
          , p = f.toString
          , d = f.hasOwnProperty
          , h = d.toString
          , g = h.call(Object)
          , v = {}
          , m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }
          , y = function(e) {
            return null != e && e === e.window
        }
          , x = n.document
          , b = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        function w(e, t, n) {
            var r, o, i = (n = n || x).createElement("script");
            if (i.text = e,
            t)
                for (r in b)
                    (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i)
        }
        function T(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e
        }
        var C = function(e, t) {
            return new C.fn.init(e,t)
        };
        function k(e) {
            var t = !!e && "length"in e && e.length
              , n = T(e);
            return !m(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: "3.5.1",
            constructor: C,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = C.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(e) {
                return this.pushStack(C.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(C.grep(this, function(e, t) {
                    return (t + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(C.grep(this, function(e, t) {
                    return t % 2
                }))
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: i.sort,
            splice: i.splice
        },
        C.extend = C.fn.extend = function() {
            var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a,
            a = arguments[s] || {},
            s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && (a = this,
            s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        r = e[t],
                        "__proto__" !== t && a !== r && (l && r && (C.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t],
                        i = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {},
                        o = !1,
                        a[t] = C.extend(l, i, r)) : void 0 !== r && (a[t] = r));
            return a
        }
        ,
        C.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = a(e)) || "function" == typeof (n = d.call(t, "constructor") && t.constructor) && h.call(n) === g)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                w(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, r = 0;
                if (k(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (k(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : c.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                    e[o++] = t[r];
                return e.length = o,
                e
            },
            grep: function(e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                    !t(e[o], o) !== a && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var r, o, i = 0, a = [];
                if (k(e))
                    for (r = e.length; i < r; i++)
                        null != (o = t(e[i], i, n)) && a.push(o);
                else
                    for (i in e)
                        null != (o = t(e[i], i, n)) && a.push(o);
                return u(a)
            },
            guid: 1,
            support: v
        }),
        "function" == typeof Symbol && (C.fn[Symbol.iterator] = i[Symbol.iterator]),
        C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        });
        var E = /*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
        function(e) {
            var t, n, r, o, i, a, s, u, l, c, f, p, d, h, g, v, m, y, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, k = ue(), E = ue(), S = ue(), A = ue(), j = function(e, t) {
                return e === t && (f = !0),
                0
            }, N = {}.hasOwnProperty, D = [], q = D.pop, L = D.push, H = D.push, O = D.slice, P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", B = "\\[" + R + "*(" + I + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + R + "*\\]", W = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)", F = new RegExp(R + "+","g"), _ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), $ = new RegExp("^" + R + "*," + R + "*"), z = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), U = new RegExp(R + "|>"), X = new RegExp(W), V = new RegExp("^" + I + "$"), G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
                bool: new RegExp("^(?:" + M + ")$","i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
            }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, ie = function() {
                p()
            }, ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                H.apply(D = O.call(w.childNodes), w.childNodes),
                D[w.childNodes.length].nodeType
            } catch (e) {
                H = {
                    apply: D.length ? function(e, t) {
                        L.apply(e, O.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            function se(e, t, r, o) {
                var i, s, l, c, f, h, m, y = t && t.ownerDocument, w = t ? t.nodeType : 9;
                if (r = r || [],
                "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                    return r;
                if (!o && (p(t),
                t = t || d,
                g)) {
                    if (11 !== w && (f = Z.exec(e)))
                        if (i = f[1]) {
                            if (9 === w) {
                                if (!(l = t.getElementById(i)))
                                    return r;
                                if (l.id === i)
                                    return r.push(l),
                                    r
                            } else if (y && (l = y.getElementById(i)) && x(t, l) && l.id === i)
                                return r.push(l),
                                r
                        } else {
                            if (f[2])
                                return H.apply(r, t.getElementsByTagName(e)),
                                r;
                            if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                return H.apply(r, t.getElementsByClassName(i)),
                                r
                        }
                    if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                        if (m = e,
                        y = t,
                        1 === w && (U.test(e) || z.test(e))) {
                            for ((y = ee.test(e) && me(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, oe) : t.setAttribute("id", c = b)),
                            s = (h = a(e)).length; s--; )
                                h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                            m = h.join(",")
                        }
                        try {
                            return H.apply(r, y.querySelectorAll(m)),
                            r
                        } catch (t) {
                            A(e, !0)
                        } finally {
                            c === b && t.removeAttribute("id")
                        }
                    }
                }
                return u(e.replace(_, "$1"), t, r, o)
            }
            function ue() {
                var e = [];
                return function t(n, o) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                    t[n + " "] = o
                }
            }
            function le(e) {
                return e[b] = !0,
                e
            }
            function ce(e) {
                var t = d.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function fe(e, t) {
                for (var n = e.split("|"), o = n.length; o--; )
                    r.attrHandle[n[o]] = t
            }
            function pe(e, t) {
                var n = t && e
                  , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r)
                    return r;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function de(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }
            function he(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function ge(e) {
                return function(t) {
                    return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
                }
            }
            function ve(e) {
                return le(function(t) {
                    return t = +t,
                    le(function(n, r) {
                        for (var o, i = e([], n.length, t), a = i.length; a--; )
                            n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                    })
                })
            }
            function me(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = se.support = {},
            i = se.isXML = function(e) {
                var t = e.namespaceURI
                  , n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }
            ,
            p = se.setDocument = function(e) {
                var t, o, a = e ? e.ownerDocument || e : w;
                return a != d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement,
                g = !i(d),
                w != d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)),
                n.scope = ce(function(e) {
                    return h.appendChild(e).appendChild(d.createElement("div")),
                    void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }),
                n.attributes = ce(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }),
                n.getElementsByTagName = ce(function(e) {
                    return e.appendChild(d.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                n.getElementsByClassName = K.test(d.getElementsByClassName),
                n.getById = ce(function(e) {
                    return h.appendChild(e).id = b,
                    !d.getElementsByName || !d.getElementsByName(b).length
                }),
                n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                , r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ) : (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                , r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, o, i = t.getElementById(e);
                        if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                                return [i];
                            for (o = t.getElementsByName(e),
                            r = 0; i = o[r++]; )
                                if ((n = i.getAttributeNode("id")) && n.value === e)
                                    return [i]
                        }
                        return []
                    }
                }
                ), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, r = [], o = 0, i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = i[o++]; )
                            1 === n.nodeType && r.push(n);
                        return r
                    }
                    return i
                }
                , r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e)
                }
                ,
                m = [],
                v = [],
                (n.qsa = K.test(d.querySelectorAll)) && (ce(function(e) {
                    var t;
                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + M + ")"),
                    e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="),
                    (t = d.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length || v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                    e.querySelectorAll(":checked").length || v.push(":checked"),
                    e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    v.push("[\\r\\n\\f]")
                }),
                ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                    h.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    v.push(",.*:")
                })),
                (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
                    n.disconnectedMatch = y.call(e, "*"),
                    y.call(e, "[s!='']:x"),
                    m.push("!=", W)
                }),
                v = v.length && new RegExp(v.join("|")),
                m = m.length && new RegExp(m.join("|")),
                t = K.test(h.compareDocumentPosition),
                x = t || K.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                j = t ? function(e, t) {
                    if (e === t)
                        return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && x(w, e) ? -1 : t == d || t.ownerDocument == w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return f = !0, 0;
                    var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], s = [t];
                    if (!o || !i)
                        return e == d ? -1 : t == d ? 1 : o ? -1 : i ? 1 : c ? P(c, e) - P(c, t) : 0;
                    if (o === i)
                        return pe(e, t);
                    for (n = e; n = n.parentNode; )
                        a.unshift(n);
                    for (n = t; n = n.parentNode; )
                        s.unshift(n);
                    for (; a[r] === s[r]; )
                        r++;
                    return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                }
                ,
                d) : d
            }
            ,
            se.matches = function(e, t) {
                return se(e, null, null, t)
            }
            ,
            se.matchesSelector = function(e, t) {
                if (p(e),
                n.matchesSelector && g && !A[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t)))
                    try {
                        var r = y.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (e) {
                        A(t, !0)
                    }
                return se(t, d, null, [e]).length > 0
            }
            ,
            se.contains = function(e, t) {
                return (e.ownerDocument || e) != d && p(e),
                x(e, t)
            }
            ,
            se.attr = function(e, t) {
                (e.ownerDocument || e) != d && p(e);
                var o = r.attrHandle[t.toLowerCase()]
                  , i = o && N.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }
            ,
            se.escape = function(e) {
                return (e + "").replace(re, oe)
            }
            ,
            se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            se.uniqueSort = function(e) {
                var t, r = [], o = 0, i = 0;
                if (f = !n.detectDuplicates,
                c = !n.sortStable && e.slice(0),
                e.sort(j),
                f) {
                    for (; t = e[i++]; )
                        t === e[i] && (o = r.push(i));
                    for (; o--; )
                        e.splice(r[o], 1)
                }
                return c = null,
                e
            }
            ,
            o = se.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += o(t);
                return n
            }
            ,
            (r = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = k[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && k(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var o = se.attr(r, e);
                            return null == o ? "!=" === t : !t || (o += "",
                            "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, o) {
                        var i = "nth" !== e.slice(0, 3)
                          , a = "last" !== e.slice(-4)
                          , s = "of-type" === t;
                        return 1 === r && 0 === o ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, u) {
                            var l, c, f, p, d, h, g = i !== a ? "nextSibling" : "previousSibling", v = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                            if (v) {
                                if (i) {
                                    for (; g; ) {
                                        for (p = t; p = p[g]; )
                                            if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)
                                                return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? v.firstChild : v.lastChild],
                                a && y) {
                                    for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                    p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop(); )
                                        if (1 === p.nodeType && ++x && p === t) {
                                            c[e] = [T, d, x];
                                            break
                                        }
                                } else if (y && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                                !1 === x)
                                    for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                                    p !== t)); )
                                        ;
                                return (x -= o) === r || x % r == 0 && x / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t],
                        r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
                            for (var r, i = o(e, t), a = i.length; a--; )
                                e[r = P(e, i[a])] = !(n[r] = i[a])
                        }) : function(e) {
                            return o(e, 0, n)
                        }
                        ) : o
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var t = []
                          , n = []
                          , r = s(e.replace(_, "$1"));
                        return r[b] ? le(function(e, t, n, o) {
                            for (var i, a = r(e, null, o, []), s = e.length; s--; )
                                (i = a[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, o, i) {
                            return t[0] = e,
                            r(t, null, i, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: le(function(e) {
                        return function(t) {
                            return se(e, t).length > 0
                        }
                    }),
                    contains: le(function(e) {
                        return e = e.replace(te, ne),
                        function(t) {
                            return (t.textContent || o(t)).indexOf(e) > -1
                        }
                    }),
                    lang: le(function(e) {
                        return V.test(e || "") || se.error("unsupported lang: " + e),
                        e = e.replace(te, ne).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                            e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                r.pseudos[t] = de(t);
            for (t in {
                submit: !0,
                reset: !0
            })
                r.pseudos[t] = he(t);
            function ye() {}
            function xe(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++)
                    r += e[t].value;
                return r
            }
            function be(e, t, n) {
                var r = t.dir
                  , o = t.next
                  , i = o || r
                  , a = n && "parentNode" === i
                  , s = C++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            return e(t, n, o);
                    return !1
                }
                : function(t, n, u) {
                    var l, c, f, p = [T, s];
                    if (u) {
                        for (; t = t[r]; )
                            if ((1 === t.nodeType || a) && e(t, n, u))
                                return !0
                    } else
                        for (; t = t[r]; )
                            if (1 === t.nodeType || a)
                                if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                                o && o === t.nodeName.toLowerCase())
                                    t = t[r] || t;
                                else {
                                    if ((l = c[i]) && l[0] === T && l[1] === s)
                                        return p[2] = l[2];
                                    if (c[i] = p,
                                    p[2] = e(t, n, u))
                                        return !0
                                }
                    return !1
                }
            }
            function we(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var o = e.length; o--; )
                        if (!e[o](t, n, r))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function Te(e, t, n, r, o) {
                for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                    (i = e[s]) && (n && !n(i, r, o) || (a.push(i),
                    l && t.push(s)));
                return a
            }
            function Ce(e, t, n, r, o, i) {
                return r && !r[b] && (r = Ce(r)),
                o && !o[b] && (o = Ce(o, i)),
                le(function(i, a, s, u) {
                    var l, c, f, p = [], d = [], h = a.length, g = i || function(e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++)
                            se(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []), v = !e || !i && t ? g : Te(g, p, e, s, u), m = n ? o || (i ? e : h || r) ? [] : a : v;
                    if (n && n(v, m, s, u),
                    r)
                        for (l = Te(m, d),
                        r(l, [], s, u),
                        c = l.length; c--; )
                            (f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [],
                                c = m.length; c--; )
                                    (f = m[c]) && l.push(v[c] = f);
                                o(null, m = [], l, u)
                            }
                            for (c = m.length; c--; )
                                (f = m[c]) && (l = o ? P(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                        }
                    } else
                        m = Te(m === a ? m.splice(h, m.length) : m),
                        o ? o(null, a, m, u) : H.apply(a, m)
                })
            }
            function ke(e) {
                for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function(e) {
                    return e === t
                }, s, !0), f = be(function(e) {
                    return P(t, e) > -1
                }, s, !0), p = [function(e, n, r) {
                    var o = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null,
                    o
                }
                ]; u < i; u++)
                    if (n = r.relative[e[u].type])
                        p = [be(we(p), n)];
                    else {
                        if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                            for (o = ++u; o < i && !r.relative[e[o].type]; o++)
                                ;
                            return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace(_, "$1"), n, u < o && ke(e.slice(u, o)), o < i && ke(e = e.slice(o)), o < i && xe(e))
                        }
                        p.push(n)
                    }
                return we(p)
            }
            return ye.prototype = r.filters = r.pseudos,
            r.setFilters = new ye,
            a = se.tokenize = function(e, t) {
                var n, o, i, a, s, u, l, c = E[e + " "];
                if (c)
                    return t ? 0 : c.slice(0);
                for (s = e,
                u = [],
                l = r.preFilter; s; ) {
                    for (a in n && !(o = $.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                    u.push(i = [])),
                    n = !1,
                    (o = z.exec(s)) && (n = o.shift(),
                    i.push({
                        value: n,
                        type: o[0].replace(_, " ")
                    }),
                    s = s.slice(n.length)),
                    r.filter)
                        !(o = G[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(),
                        i.push({
                            value: n,
                            type: a,
                            matches: o
                        }),
                        s = s.slice(n.length));
                    if (!n)
                        break
                }
                return t ? s.length : s ? se.error(e) : E(e, u).slice(0)
            }
            ,
            s = se.compile = function(e, t) {
                var n, o = [], i = [], s = S[e + " "];
                if (!s) {
                    for (t || (t = a(e)),
                    n = t.length; n--; )
                        (s = ke(t[n]))[b] ? o.push(s) : i.push(s);
                    (s = S(e, function(e, t) {
                        var n = t.length > 0
                          , o = e.length > 0
                          , i = function(i, a, s, u, c) {
                            var f, h, v, m = 0, y = "0", x = i && [], b = [], w = l, C = i || o && r.find.TAG("*", c), k = T += null == w ? 1 : Math.random() || .1, E = C.length;
                            for (c && (l = a == d || a || c); y !== E && null != (f = C[y]); y++) {
                                if (o && f) {
                                    for (h = 0,             a || f.ownerDocument == d || (p(f),
                                    s = !g); v = e[h++]; )
                                        if (v(f, a || d, s)) {
                                            u.push(f);
                                            break
                                        }
                                    c && (T = k)
                                }
                                n && ((f = !v && f) && m--,
                                i && x.push(f))
                            }
                            if (m += y,
                            n && y !== m) {
                                for (h = 0; v = t[h++]; )
                                    v(x, b, a, s);
                                if (i) {
                                    if (m > 0)
                                        for (; y--; )
                                            x[y] || b[y] || (b[y] = q.call(u));
                                    b = Te(b)
                                }
                                H.apply(u, b),
                                c && !i && b.length > 0 && m + t.length > 1 && se.uniqueSort(u)
                            }
                            return c && (T = k,
                            l = w),
                            x
                        };
                        return n ? le(i) : i
                    }(i, o))).selector = e
                }
                return s
            }
            ,
            u = se.select = function(e, t, n, o) {
                var i, u, l, c, f, p = "function" == typeof e && e, d = !o && a(e = p.selector || e);
                if (n = n || [],
                1 === d.length) {
                    if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0]))
                            return n;
                        p && (t = t.parentNode),
                        e = e.slice(u.shift().value.length)
                    }
                    for (i = G.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i],
                    !r.relative[c = l.type]); )
                        if ((f = r.find[c]) && (o = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && me(t.parentNode) || t))) {
                            if (u.splice(i, 1),
                            !(e = o.length && xe(u)))
                                return H.apply(n, o),
                                n;
                            break
                        }
                }
                return (p || s(e, d))(o, t, !g, n, !t || ee.test(e) && me(t.parentNode) || t),
                n
            }
            ,
            n.sortStable = b.split("").sort(j).join("") === b,
            n.detectDuplicates = !!f,
            p(),
            n.sortDetached = ce(function(e) {
                return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
            }),
            ce(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || fe("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            n.attributes && ce(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || fe("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            ce(function(e) {
                return null == e.getAttribute("disabled")
            }) || fe(M, function(e, t, n) {
                var r;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }),
            se
        }(n);
        C.find = E,
        C.expr = E.selectors,
        C.expr[":"] = C.expr.pseudos,
        C.uniqueSort = C.unique = E.uniqueSort,
        C.text = E.getText,
        C.isXMLDoc = E.isXML,
        C.contains = E.contains,
        C.escapeSelector = E.escape;
        var S = function(e, t, n) {
            for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (o && C(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        }
          , A = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , j = C.expr.match.needsContext;
        function N(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function q(e, t, n) {
            return m(t) ? C.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? C.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? C.grep(e, function(e) {
                return c.call(t, e) > -1 !== n
            }) : C.filter(t, e, n)
        }
        C.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        C.fn.extend({
            find: function(e) {
                var t, n, r = this.length, o = this;
                if ("string" != typeof e)
                    return this.pushStack(C(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (C.contains(o[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                t = 0; t < r; t++)
                    C.find(e, o[t], n);
                return r > 1 ? C.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(q(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(q(this, e || [], !0))
            },
            is: function(e) {
                return !!q(this, "string" == typeof e && j.test(e) ? C(e) : e || [], !1).length
            }
        });
        var L, H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(e, t, n) {
            var r, o;
            if (!e)
                return this;
            if (n = n || L,
            "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : H.exec(e)) || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof C ? t[0] : t,
                    C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : x, !0)),
                    D.test(r[1]) && C.isPlainObject(t))
                        for (r in t)
                            m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (o = x.getElementById(r[2])) && (this[0] = o,
                this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
        }
        ).prototype = C.fn,
        L = C(x);
        var O = /^(?:parents|prev(?:Until|All))/
          , P = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function M(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        C.fn.extend({
            has: function(e) {
                var t = C(e, this)
                  , n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (C.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0, o = this.length, i = [], a = "string" != typeof e && C(e);
                if (!j.test(e))
                    for (; r < o; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            }
                return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? c.call(C(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        C.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return S(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return S(e, "parentNode", n)
            },
            next: function(e) {
                return M(e, "nextSibling")
            },
            prev: function(e) {
                return M(e, "previousSibling")
            },
            nextAll: function(e) {
                return S(e, "nextSibling")
            },
            prevAll: function(e) {
                return S(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return S(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return S(e, "previousSibling", n)
            },
            siblings: function(e) {
                return A((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return A(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (N(e, "template") && (e = e.content || e),
                C.merge([], e.childNodes))
            }
        }, function(e, t) {
            C.fn[e] = function(n, r) {
                var o = C.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (o = C.filter(r, o)),
                this.length > 1 && (P[e] || C.uniqueSort(o),
                O.test(e) && o.reverse()),
                this.pushStack(o)
            }
        });
        var R = /[^\x20\t\r\n\f]+/g;
        function I(e) {
            return e
        }
        function B(e) {
            throw e
        }
        function W(e, t, n, r) {
            var o;
            try {
                e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        C.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return C.each(e.match(R) || [], function(e, n) {
                    t[n] = !0
                }),
                t
            }(e) : C.extend({}, e);
            var t, n, r, o, i = [], a = [], s = -1, u = function() {
                for (o = o || e.once,
                r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < i.length; )
                        !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length,
                        n = !1);
                e.memory || (n = !1),
                t = !1,
                o && (i = n ? [] : "")
            }, l = {
                add: function() {
                    return i && (n && !t && (s = i.length - 1,
                    a.push(n)),
                    function t(n) {
                        C.each(n, function(n, r) {
                            m(r) ? e.unique && l.has(r) || i.push(r) : r && r.length && "string" !== T(r) && t(r)
                        })
                    }(arguments),
                    n && !t && u()),
                    this
                },
                remove: function() {
                    return C.each(arguments, function(e, t) {
                        for (var n; (n = C.inArray(t, i, n)) > -1; )
                            i.splice(n, 1),
                            n <= s && s--
                    }),
                    this
                },
                has: function(e) {
                    return e ? C.inArray(e, i) > -1 : i.length > 0
                },
                empty: function() {
                    return i && (i = []),
                    this
                },
                disable: function() {
                    return o = a = [],
                    i = n = "",
                    this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return o = a = [],
                    n || t || (i = n = ""),
                    this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                    a.push(n),
                    t || u()),
                    this
                },
                fire: function() {
                    return l.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!r
                }
            };
            return l
        }
        ,
        C.extend({
            Deferred: function(e) {
                var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
                  , r = "pending"
                  , o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return C.Deferred(function(n) {
                            C.each(t, function(t, r) {
                                var o = m(e[r[4]]) && e[r[4]];
                                i[r[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    then: function(e, r, o) {
                        var i = 0;
                        function a(e, t, r, o) {
                            return function() {
                                var s = this
                                  , u = arguments
                                  , l = function() {
                                    var n, l;
                                    if (!(e < i)) {
                                        if ((n = r.apply(s, u)) === t.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        l = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        m(l) ? o ? l.call(n, a(i, t, I, o), a(i, t, B, o)) : (i++,
                                        l.call(n, a(i, t, I, o), a(i, t, B, o), a(i, t, I, t.notifyWith))) : (r !== I && (s = void 0,                 u = [n]),
                                        (o || t.resolveWith)(s, u))
                                    }
                                }
                                  , c = o ? l : function() {
                                    try {
                                        l()
                                    } catch (n) {
                                        C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace),
                                        e + 1 >= i && (r !== B && (s = void 0,                 u = [n]),
                                        t.rejectWith(s, u))
                                    }
                                }
                                ;
                                e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()),
                                n.setTimeout(c))
                            }
                        }
                        return C.Deferred(function(n) {
                            t[0][3].add(a(0, n, m(o) ? o : I, n.notifyWith)),
                            t[1][3].add(a(0, n, m(e) ? e : I)),
                            t[2][3].add(a(0, n, m(r) ? r : B))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? C.extend(e, o) : o
                    }
                }
                  , i = {};
                return C.each(t, function(e, n) {
                    var a = n[2]
                      , s = n[5];
                    o[n[1]] = a.add,
                    s && a.add(function() {
                        r = s
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                    a.add(n[3].fire),
                    i[n[0]] = function() {
                        return i[n[0] + "With"](this === i ? void 0 : this, arguments),
                        this
                    }
                    ,
                    i[n[0] + "With"] = a.fireWith
                }),
                o.promise(i),
                e && e.call(i, i),
                i
            },
            when: function(e) {
                var t = arguments.length
                  , n = t
                  , r = Array(n)
                  , o = s.call(arguments)
                  , i = C.Deferred()
                  , a = function(e) {
                    return function(n) {
                        r[e] = this,
                        o[e] = arguments.length > 1 ? s.call(arguments) : n,
                        --t || i.resolveWith(r, o)
                    }
                };
                if (t <= 1 && (W(e, i.done(a(n)).resolve, i.reject, !t),
                "pending" === i.state() || m(o[n] && o[n].then)))
                    return i.then();
                for (; n--; )
                    W(o[n], a(n), i.reject);
                return i.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }
        ,
        C.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        }
        ;
        var _ = C.Deferred();
        function $() {
            x.removeEventListener("DOMContentLoaded", $),
            n.removeEventListener("load", $),
            C.ready()
        }
        C.fn.ready = function(e) {
            return _.then(e).catch(function(e) {
                C.readyException(e)
            }),
            this
        }
        ,
        C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0,
                !0 !== e && --C.readyWait > 0 || _.resolveWith(x, [C]))
            }
        }),
        C.ready.then = _.then,
        "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? n.setTimeout(C.ready) : (x.addEventListener("DOMContentLoaded", $),
        n.addEventListener("load", $));
        var z = function(e, t, n, r, o, i, a) {
            var s = 0
              , u = e.length
              , l = null == n;
            if ("object" === T(n))
                for (s in o = !0,
                n)
                    z(e, t, s, n[s], !0, i, a);
            else if (void 0 !== r && (o = !0,
            m(r) || (a = !0),
            l && (a ? (t.call(e, r),
            t = null) : (l = t,
            t = function(e, t, n) {
                return l.call(C(e), n)
            }
            )),
            t))
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
        }
          , U = /^-ms-/
          , X = /-([a-z])/g;
        function V(e, t) {
            return t.toUpperCase()
        }
        function G(e) {
            return e.replace(U, "ms-").replace(X, V)
        }
        var Y = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        function Q() {
            this.expando = C.expando + Q.uid++
        }
        Q.uid = 1,
        Q.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var r, o = this.cache(e);
                if ("string" == typeof t)
                    o[G(t)] = n;
                else
                    for (r in t)
                        o[G(r)] = t[r];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(G) : (t = G(t))in r ? [t] : t.match(R) || []).length;
                        for (; n--; )
                            delete r[t[n]]
                    }
                    (void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t)
            }
        };
        var J = new Q
          , K = new Q
          , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , ee = /[A-Z]/g;
        function te(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(ee, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    K.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        C.extend({
            hasData: function(e) {
                return K.hasData(e) || J.hasData(e)
            },
            data: function(e, t, n) {
                return K.access(e, t, n)
            },
            removeData: function(e, t) {
                K.remove(e, t)
            },
            _data: function(e, t, n) {
                return J.access(e, t, n)
            },
            _removeData: function(e, t) {
                J.remove(e, t)
            }
        }),
        C.fn.extend({
            data: function(e, t) {
                var n, r, o, i = this[0], a = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (o = K.get(i),
                    1 === i.nodeType && !J.get(i, "hasDataAttrs"))) {
                        for (n = a.length; n--; )
                            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)),
                            te(i, r, o[r]));
                        J.set(i, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    K.set(this, e)
                }) : z(this, function(t) {
                    var n;
                    if (i && void 0 === t)
                        return void 0 !== (n = K.get(i, e)) ? n : void 0 !== (n = te(i, e)) ? n : void 0;
                    this.each(function() {
                        K.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    K.remove(this, e)
                })
            }
        }),
        C.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                    r = J.get(e, t),
                    n && (!r || Array.isArray(n) ? r = J.access(e, t, C.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = C.queue(e, t)
                  , r = n.length
                  , o = n.shift()
                  , i = C._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(),
                r--),
                o && ("fx" === t && n.unshift("inprogress"),
                delete i.stop,
                o.call(e, function() {
                    C.dequeue(e, t)
                }, i)),
                !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return J.get(e, n) || J.access(e, n, {
                    empty: C.Callbacks("once memory").add(function() {
                        J.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        C.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                n--),
                arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    C.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, o = C.Deferred(), i = this, a = this.length, s = function() {
                    --r || o.resolveWith(i, [i])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; a--; )
                    (n = J.get(i[a], e + "queueHooks")) && n.empty && (r++,
                    n.empty.add(s));
                return s(),
                o.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$","i")
          , oe = ["Top", "Right", "Bottom", "Left"]
          , ie = x.documentElement
          , ae = function(e) {
            return C.contains(e.ownerDocument, e)
        }
          , se = {
            composed: !0
        };
        ie.getRootNode && (ae = function(e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
        }
        );
        var ue = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === C.css(e, "display")
        };
        function le(e, t, n, r) {
            var o, i, a = 20, s = r ? function() {
                return r.cur()
            }
            : function() {
                return C.css(e, t, "")
            }
            , u = s(), l = n && n[3] || (C.cssNumber[t] ? "" : "px"), c = e.nodeType && (C.cssNumber[t] || "px" !== l && +u) && re.exec(C.css(e, t));
            if (c && c[3] !== l) {
                for (u /= 2,
                l = l || c[3],
                c = +u || 1; a--; )
                    C.style(e, t, c + l),
                    (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0),
                    c /= i;
                c *= 2,
                C.style(e, t, c + l),
                n = n || []
            }
            return n && (c = +c || +u || 0,
            o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            r && (r.unit = l,
            r.start = c,
            r.end = o)),
            o
        }
        var ce = {};
        function fe(e) {
            var t, n = e.ownerDocument, r = e.nodeName, o = ce[r];
            return o || (t = n.body.appendChild(n.createElement(r)),
            o = C.css(t, "display"),
            t.parentNode.removeChild(t),
            "none" === o && (o = "block"),
            ce[r] = o,
            o)
        }
        function pe(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
                (r = e[i]).style && (n = r.style.display,
                t ? ("none" === n && (o[i] = J.get(r, "display") || null,
                o[i] || (r.style.display = "")),
                "" === r.style.display && ue(r) && (o[i] = fe(r))) : "none" !== n && (o[i] = "none",
                J.set(r, "display", n)));
            for (i = 0; i < a; i++)
                null != o[i] && (e[i].style.display = o[i]);
            return e
        }
        C.fn.extend({
            show: function() {
                return pe(this, !0)
            },
            hide: function() {
                return pe(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ue(this) ? C(this).show() : C(this).hide()
                })
            }
        });
        var de = /^(?:checkbox|radio)$/i
          , he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
          , ge = /^$|^module$|\/(?:java|ecma)script/i;
        !function() {
            var e = x.createDocumentFragment().appendChild(x.createElement("div"))
              , t = x.createElement("input");
            t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
            e.innerHTML = "<textarea>x</textarea>",
            v.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
            e.innerHTML = "<option></option>",
            v.option = !!e.lastChild
        }();
        var ve = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function me(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && N(e, t) ? C.merge([e], n) : n
        }
        function ye(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
        }
        ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead,
        ve.th = ve.td,
        v.option || (ve.optgroup = ve.option = [1, "<select multiple='multiple'>", "</select>"]);
        var xe = /<|&#?\w+;/;
        function be(e, t, n, r, o) {
            for (var i, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                if ((i = e[d]) || 0 === i)
                    if ("object" === T(i))
                        C.merge(p, i.nodeType ? [i] : i);
                    else if (xe.test(i)) {
                        for (a = a || f.appendChild(t.createElement("div")),
                        s = (he.exec(i) || ["", ""])[1].toLowerCase(),
                        u = ve[s] || ve._default,
                        a.innerHTML = u[1] + C.htmlPrefilter(i) + u[2],
                        c = u[0]; c--; )
                            a = a.lastChild;
                        C.merge(p, a.childNodes),
                        (a = f.firstChild).textContent = ""
                    } else
                        p.push(t.createTextNode(i));
            for (f.textContent = "",
            d = 0; i = p[d++]; )
                if (r && C.inArray(i, r) > -1)
                    o && o.push(i);
                else if (l = ae(i),
                a = me(f.appendChild(i), "script"),
                l && ye(a),
                n)
                    for (c = 0; i = a[c++]; )
                        ge.test(i.type || "") && n.push(i);
            return f
        }
        var we = /^key/
          , Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , Ce = /^([^.]*)(?:\.(.+)|)/;
        function ke() {
            return !0
        }
        function Ee() {
            return !1
        }
        function Se(e, t) {
            return e === function() {
                try {
                    return x.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }
        function Ae(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n,
                n = void 0),
                t)
                    Ae(e, s, n, r, t[s], i);
                return e
            }
            if (null == r && null == o ? (o = n,
            r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
            r = void 0) : (o = r,
            r = n,
            n = void 0)),
            !1 === o)
                o = Ee;
            else if (!o)
                return e;
            return 1 === i && (a = o,
            (o = function(e) {
                return C().off(e),
                a.apply(this, arguments)
            }
            ).guid = a.guid || (a.guid = C.guid++)),
            e.each(function() {
                C.event.add(this, t, o, r, n)
            })
        }
        function je(e, t, n) {
            n ? (J.set(e, t, !1),
            C.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var r, o, i = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (i.length)
                            (C.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (i = s.call(arguments),
                        J.set(this, t, i),
                        r = n(this, t),
                        this[t](),
                        i !== (o = J.get(this, t)) || r ? J.set(this, t, !1) : o = {},
                        i !== o)
                            return e.stopImmediatePropagation(),
                            e.preventDefault(),
                            o.value
                    } else
                        i.length && (J.set(this, t, {
                            value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
                        }),
                        e.stopImmediatePropagation())
                }
            })) : void 0 === J.get(e, t) && C.event.add(e, t, ke)
        }
        C.event = {
            global: {},
            add: function(e, t, n, r, o) {
                var i, a, s, u, l, c, f, p, d, h, g, v = J.get(e);
                if (Y(e))
                    for (n.handler && (n = (i = n).handler,
                    o = i.selector),
                    o && C.find.matchesSelector(ie, o),
                    n.guid || (n.guid = C.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) || (a = v.handle = function(t) {
                        return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    l = (t = (t || "").match(R) || [""]).length; l--; )
                        d = g = (s = Ce.exec(t[l]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        d && (f = C.event.special[d] || {},
                        d = (o ? f.delegateType : f.bindType) || d,
                        f = C.event.special[d] || {},
                        c = C.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && C.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, i),
                        (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                        f.add && (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                        o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        C.event.global[d] = !0)
            },
            remove: function(e, t, n, r, o) {
                var i, a, s, u, l, c, f, p, d, h, g, v = J.hasData(e) && J.get(e);
                if (v && (u = v.events)) {
                    for (l = (t = (t || "").match(R) || [""]).length; l--; )
                        if (d = g = (s = Ce.exec(t[l]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        d) {
                            for (f = C.event.special[d] || {},
                            p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            a = i = p.length; i--; )
                                c = p[i],
                                !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1),
                                c.selector && p.delegateCount--,
                                f.remove && f.remove.call(e, c));
                            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || C.removeEvent(e, d, v.handle),
                            delete u[d])
                        } else
                            for (d in u)
                                C.event.remove(e, d + t[l], n, r, !0);
                    C.isEmptyObject(u) && J.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, o, i, a, s = new Array(arguments.length), u = C.event.fix(e), l = (J.get(this, "events") || Object.create(null))[u.type] || [], c = C.event.special[u.type] || {};
                for (s[0] = u,
                t = 1; t < arguments.length; t++)
                    s[t] = arguments[t];
                if (u.delegateTarget = this,
                !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                    for (a = C.event.handlers.call(this, u, l),
                    t = 0; (o = a[t++]) && !u.isPropagationStopped(); )
                        for (u.currentTarget = o.elem,
                        n = 0; (i = o.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                            u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i,
                            u.data = i.data,
                            void 0 !== (r = ((C.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                            u.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, u),
                    u.result
                }
            },
            handlers: function(e, t) {
                var n, r, o, i, a, s = [], u = t.delegateCount, l = e.target;
                if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (i = [],
                            a = {},
                            n = 0; n < u; n++)
                                void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? C(o, this).index(l) > -1 : C.find(o, this, null, [l]).length),
                                a[o] && i.push(r);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return l = this,
                u < t.length && s.push({
                    elem: l,
                    handlers: t.slice(u)
                }),
                s
            },
            addProp: function(e, t) {
                Object.defineProperty(C.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: m(t) ? function() {
                        if (this.originalEvent)
                            return t(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    }
                    ,
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,     configurable: !0,     writable: !0,     value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[C.expando] ? e : new C.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return de.test(t.type) && t.click && N(t, "input") && je(t, "click", ke),
                        !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return de.test(t.type) && t.click && N(t, "input") && je(t, "click"),
                        !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return de.test(t.type) && t.click && N(t, "input") && J.get(t, "click") || N(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        C.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        C.Event = function(e, t) {
            if (!(this instanceof C.Event))
                return new C.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Ee,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && C.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            this[C.expando] = !0
        }
        ,
        C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = ke,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = ke,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ke,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, C.event.addProp),
        C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            C.event.special[e] = {
                setup: function() {
                    return je(this, e, Se),
                    !1
                },
                trigger: function() {
                    return je(this, e),
                    !0
                },
                delegateType: t
            }
        }),
        C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            C.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = e.relatedTarget, o = e.handleObj;
                    return r && (r === this || C.contains(this, r)) || (e.type = o.origType,
                    n = o.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }),
        C.fn.extend({
            on: function(e, t, n, r) {
                return Ae(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Ae(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                    C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                    this;
                if ("object" == typeof e) {
                    for (o in e)
                        this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = Ee),
                this.each(function() {
                    C.event.remove(this, e, n, t)
                })
            }
        });
        var Ne = /<script|<style|<link/i
          , De = /checked\s*(?:[^=]|=\s*.checked.)/i
          , qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Le(e, t) {
            return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }
        function He(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function Oe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
        }
        function Pe(e, t) {
            var n, r, o, i, a, s;
            if (1 === t.nodeType) {
                if (J.hasData(e) && (s = J.get(e).events))
                    for (o in J.remove(t, "handle events"),
                    s)
                        for (n = 0, r = s[o].length; n < r; n++)
                            C.event.add(t, o, s[o][n]);
                K.hasData(e) && (i = K.access(e),
                a = C.extend({}, i),
                K.set(t, a))
            }
        }
        function Me(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && de.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
        function Re(e, t, n, r) {
            t = u(t);
            var o, i, a, s, l, c, f = 0, p = e.length, d = p - 1, h = t[0], g = m(h);
            if (g || p > 1 && "string" == typeof h && !v.checkClone && De.test(h))
                return e.each(function(o) {
                    var i = e.eq(o);
                    g && (t[0] = h.call(this, o, i.html())),
                    Re(i, t, n, r)
                });
            if (p && (i = (o = be(t, e[0].ownerDocument, !1, e, r)).firstChild,
            1 === o.childNodes.length && (o = i),
            i || r)) {
                for (s = (a = C.map(me(o, "script"), He)).length; f < p; f++)
                    l = o,
                    f !== d && (l = C.clone(l, !0, !0),
                    s && C.merge(a, me(l, "script"))),
                    n.call(e[f], l, f);
                if (s)
                    for (c = a[a.length - 1].ownerDocument,
                    C.map(a, Oe),
                    f = 0; f < s; f++)
                        l = a[f],
                        ge.test(l.type || "") && !J.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                            nonce: l.nonce || l.getAttribute("nonce")
                        }, c) : w(l.textContent.replace(qe, ""), l, c))
            }
            return e
        }
        function Ie(e, t, n) {
            for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
                n || 1 !== r.nodeType || C.cleanData(me(r)), r.parentNode && (n && ae(r) && ye(me(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        C.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var r, o, i, a, s = e.cloneNode(!0), u = ae(e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                    for (a = me(s),
                    r = 0,
                    o = (i = me(e)).length; r < o; r++)
                        Me(i[r], a[r]);
                if (t)
                    if (n)
                        for (i = i || me(e),
                        a = a || me(s),
                        r = 0, o = i.length; r < o; r++)
                            Pe(i[r], a[r]);
                    else
                        Pe(e, s);
                return (a = me(s, "script")).length > 0 && ye(a, !u && me(e, "script")),
                s
            },
            cleanData: function(e) {
                for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++)
                    if (Y(n)) {
                        if (t = n[J.expando]) {
                            if (t.events)
                                for (r in t.events)
                                    o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                            n[J.expando] = void 0
                        }
                        n[K.expando] && (n[K.expando] = void 0)
                    }
            }
        }),
        C.fn.extend({
            detach: function(e) {
                return Ie(this, e, !0)
            },
            remove: function(e) {
                return Ie(this, e)
            },
            text: function(e) {
                return z(this, function(e) {
                    return void 0 === e ? C.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Re(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Re(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Re(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Re(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (C.cleanData(me(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return C.clone(this, e, t)
                })
            },
            html: function(e) {
                return z(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !Ne.test(e) && !ve[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (C.cleanData(me(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Re(this, arguments, function(t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 && (C.cleanData(me(this)),
                    n && n.replaceChild(t, this))
                }, e)
            }
        }),
        C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            C.fn[e] = function(e) {
                for (var n, r = [], o = C(e), i = o.length - 1, a = 0; a <= i; a++)
                    n = a === i ? this : this.clone(!0),
                    C(o[a])[t](n),
                    l.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Be = new RegExp("^(" + ne + ")(?!px)[a-z%]+$","i")
          , We = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        }
          , Fe = function(e, t, n) {
            var r, o, i = {};
            for (o in t)
                i[o] = e.style[o],
                e.style[o] = t[o];
            for (o in r = n.call(e),
            t)
                e.style[o] = i[o];
            return r
        }
          , _e = new RegExp(oe.join("|"),"i");
        function $e(e, t, n) {
            var r, o, i, a, s = e.style;
            return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = C.style(e, t)),
            !v.pixelBoxStyles() && Be.test(a) && _e.test(t) && (r = s.width,
            o = s.minWidth,
            i = s.maxWidth,
            s.minWidth = s.maxWidth = s.width = a,
            a = n.width,
            s.width = r,
            s.minWidth = o,
            s.maxWidth = i)),
            void 0 !== a ? a + "" : a
        }
        function ze(e, t) {
            return {
                get: function() {
                    if (!e())
                        return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function e() {
                if (c) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    ie.appendChild(l).appendChild(c);
                    var e = n.getComputedStyle(c);
                    r = "1%" !== e.top,
                    u = 12 === t(e.marginLeft),
                    c.style.right = "60%",
                    a = 36 === t(e.right),
                    o = 36 === t(e.width),
                    c.style.position = "absolute",
                    i = 12 === t(c.offsetWidth / 3),
                    ie.removeChild(l),
                    c = null
                }
            }
            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, o, i, a, s, u, l = x.createElement("div"), c = x.createElement("div");
            c.style && (c.style.backgroundClip = "content-box",
            c.cloneNode(!0).style.backgroundClip = "",
            v.clearCloneStyle = "content-box" === c.style.backgroundClip,
            C.extend(v, {
                boxSizingReliable: function() {
                    return e(),
                    o
                },
                pixelBoxStyles: function() {
                    return e(),
                    a
                },
                pixelPosition: function() {
                    return e(),
                    r
                },
                reliableMarginLeft: function() {
                    return e(),
                    u
                },
                scrollboxSize: function() {
                    return e(),
                    i
                },
                reliableTrDimensions: function() {
                    var e, t, r, o;
                    return null == s && (e = x.createElement("table"),
                    t = x.createElement("tr"),
                    r = x.createElement("div"),
                    e.style.cssText = "position:absolute;left:-11111px",
                    t.style.height = "1px",
                    r.style.height = "9px",
                    ie.appendChild(e).appendChild(t).appendChild(r),
                    o = n.getComputedStyle(t),
                    s = parseInt(o.height) > 3,
                    ie.removeChild(e)),
                    s
                }
            }))
        }();
        var Ue = ["Webkit", "Moz", "ms"]
          , Xe = x.createElement("div").style
          , Ve = {};
        function Ge(e) {
            var t = C.cssProps[e] || Ve[e];
            return t || (e in Xe ? e : Ve[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; )
                    if ((e = Ue[n] + t)in Xe)
                        return e
            }(e) || e)
        }
        var Ye = /^(none|table(?!-c[ea]).+)/
          , Qe = /^--/
          , Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function Ze(e, t, n) {
            var r = re.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }
        function et(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0
              , s = 0
              , u = 0;
            if (n === (r ? "border" : "content"))
                return 0;
            for (; a < 4; a += 2)
                "margin" === n && (u += C.css(e, n + oe[a], !0, o)),
                r ? ("content" === n && (u -= C.css(e, "padding" + oe[a], !0, o)),
                "margin" !== n && (u -= C.css(e, "border" + oe[a] + "Width", !0, o))) : (u += C.css(e, "padding" + oe[a], !0, o),
                "padding" !== n ? u += C.css(e, "border" + oe[a] + "Width", !0, o) : s += C.css(e, "border" + oe[a] + "Width", !0, o));
            return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0),
            u
        }
        function tt(e, t, n) {
            var r = We(e)
              , o = (!v.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r)
              , i = o
              , a = $e(e, t, r)
              , s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Be.test(a)) {
                if (!n)
                    return a;
                a = "auto"
            }
            return (!v.boxSizingReliable() && o || !v.reliableTrDimensions() && N(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, r),
            (i = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + et(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
        }
        function nt(e, t, n, r, o) {
            return new nt.prototype.init(e,t,n,r,o)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = $e(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, i, a, s = G(t), u = Qe.test(t), l = e.style;
                    if (u || (t = Ge(s)),
                    a = C.cssHooks[t] || C.cssHooks[s],
                    void 0 === n)
                        return a && "get"in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                    "string" === (i = typeof n) && (o = re.exec(n)) && o[1] && (n = le(e, t, o),
                    i = "number"),
                    null != n && n == n && ("number" !== i || u || (n += o && o[3] || (C.cssNumber[s] ? "" : "px")),
                    v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                    a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var o, i, a, s = G(t);
                return Qe.test(t) || (t = Ge(s)),
                (a = C.cssHooks[t] || C.cssHooks[s]) && "get"in a && (o = a.get(e, !0, n)),
                void 0 === o && (o = $e(e, t, r)),
                "normal" === o && t in Ke && (o = Ke[t]),
                "" === n || n ? (i = parseFloat(o),
                !0 === n || isFinite(i) ? i || 0 : o) : o
            }
        }),
        C.each(["height", "width"], function(e, t) {
            C.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n)
                        return !Ye.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : Fe(e, Je, function() {
                            return tt(e, t, r)
                        })
                },
                set: function(e, n, r) {
                    var o, i = We(e), a = !v.scrollboxSize() && "absolute" === i.position, s = (a || r) && "border-box" === C.css(e, "boxSizing", !1, i), u = r ? et(e, t, r, s, i) : 0;
                    return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - et(e, t, "border", !1, i) - .5)),
                    u && (o = re.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                    n = C.css(e, t)),
                    Ze(0, n, u)
                }
            }
        }),
        C.cssHooks.marginLeft = ze(v.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            C.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                        o[e + oe[r] + t] = i[r] || i[r - 2] || i[0];
                    return o
                }
            },
            "margin" !== e && (C.cssHooks[e + t].set = Ze)
        }),
        C.fn.extend({
            css: function(e, t) {
                return z(this, function(e, t, n) {
                    var r, o, i = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (r = We(e),
                        o = t.length; a < o; a++)
                            i[t[a]] = C.css(e, t[a], !1, r);
                        return i
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }),
        C.Tween = nt,
        nt.prototype = {
            constructor: nt,
            init: function(e, t, n, r, o, i) {
                this.elem = e,
                this.prop = n,
                this.easing = o || C.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = i || (C.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = nt.propHooks[this.prop];
                return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = nt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                this
            }
        },
        nt.prototype.init.prototype = nt.prototype,
        nt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        C.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        C.fx = nt.prototype.init,
        C.fx.step = {};
        var rt, ot, it = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
        function st() {
            ot && (!1 === x.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(st) : n.setTimeout(st, C.fx.interval),
            C.fx.tick())
        }
        function ut() {
            return n.setTimeout(function() {
                rt = void 0
            }),
            rt = Date.now()
        }
        function lt(e, t) {
            var n, r = 0, o = {
                height: e
            };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
                o["margin" + (n = oe[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e),
            o
        }
        function ct(e, t, n) {
            for (var r, o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                if (r = o[i].call(n, t, e))
                    return r
        }
        function ft(e, t, n) {
            var r, o, i = 0, a = ft.prefilters.length, s = C.Deferred().always(function() {
                delete u.elem
            }), u = function() {
                if (o)
                    return !1;
                for (var t = rt || ut(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++)
                    l.tweens[i].run(r);
                return s.notifyWith(e, [l, r, n]),
                r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
                s.resolveWith(e, [l]),
                !1)
            }, l = s.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(!0, {
                    specialEasing: {},
                    easing: C.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ut(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = C.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r),
                    r
                },
                stop: function(t) {
                    var n = 0
                      , r = t ? l.tweens.length : 0;
                    if (o)
                        return this;
                    for (o = !0; n < r; n++)
                        l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]),
                    s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                    this
                }
            }), c = l.props;
            for (!function(e, t) {
                var n, r, o, i, a;
                for (n in e)
                    if (o = t[r = G(n)],
                    i = e[n],
                    Array.isArray(i) && (o = i[1],
                    i = e[n] = i[0]),
                    n !== r && (e[r] = i,
                    delete e[n]),
                    (a = C.cssHooks[r]) && "expand"in a)
                        for (n in i = a.expand(i),
                        delete e[r],
                        i)
                            n in e || (e[n] = i[n],
                            t[n] = o);
                    else
                        t[r] = o
            }(c, l.opts.specialEasing); i < a; i++)
                if (r = ft.prefilters[i].call(l, e, c, l.opts))
                    return m(r.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                    r;
            return C.map(c, ct, l),
            m(l.opts.start) && l.opts.start.call(e, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            C.fx.timer(C.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })),
            l
        }
        C.Animation = C.extend(ft, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return le(n.elem, e, re.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                m(e) ? (t = e,
                e = ["*"]) : e = e.match(R);
                for (var n, r = 0, o = e.length; r < o; r++)
                    n = e[r],
                    ft.tweeners[n] = ft.tweeners[n] || [],
                    ft.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, o, i, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ue(e), v = J.get(e, "fxshow");
                for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || s()
                }
                ),
                a.unqueued++,
                p.always(function() {
                    p.always(function() {
                        a.unqueued--,
                        C.queue(e, "fx").length || a.empty.fire()
                    })
                })),
                t)
                    if (o = t[r],
                    it.test(o)) {
                        if (delete t[r],
                        i = i || "toggle" === o,
                        o === (g ? "hide" : "show")) {
                            if ("show" !== o || !v || void 0 === v[r])
                                continue;
                            g = !0
                        }
                        d[r] = v && v[r] || C.style(e, r)
                    }
                if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(d))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                    null == (l = v && v.display) && (l = J.get(e, "display")),
                    "none" === (c = C.css(e, "display")) && (l ? c = l : (pe([e], !0),
                    l = e.style.display || l,
                    c = C.css(e, "display"),
                    pe([e]))),
                    ("inline" === c || "inline-block" === c && null != l) && "none" === C.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }),
                    null == l && (c = h.display,
                    l = "none" === c ? "" : c)),
                    h.display = "inline-block")),
                    n.overflow && (h.overflow = "hidden",
                    p.always(function() {
                        h.overflow = n.overflow[0],
                        h.overflowX = n.overflow[1],
                        h.overflowY = n.overflow[2]
                    })),
                    u = !1,
                    d)
                        u || (v ? "hidden"in v && (g = v.hidden) : v = J.access(e, "fxshow", {
                            display: l
                        }),
                        i && (v.hidden = !g),
                        g && pe([e], !0),
                        p.done(function() {
                            for (r in g || pe([e]),
                            J.remove(e, "fxshow"),
                            d)
                                C.style(e, r, d[r])
                        })),
                        u = ct(g ? v[r] : 0, r, p),
                        r in v || (v[r] = u.start,
                        g && (u.end = u.start,
                        u.start = 0))
            }
            ],
            prefilter: function(e, t) {
                t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
            }
        }),
        C.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? C.extend({}, e) : {
                complete: n || !n && t || m(e) && e,
                duration: e,
                easing: n && t || t && !m(t) && t
            };
            return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default),
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                m(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
            }
            ,
            r
        }
        ,
        C.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ue).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var o = C.isEmptyObject(e)
                  , i = C.speed(t, n, r)
                  , a = function() {
                    var t = ft(this, C.extend({}, e), i);
                    (o || J.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a,
                o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t,
                t = e,
                e = void 0),
                t && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0
                      , o = null != e && e + "queueHooks"
                      , i = C.timers
                      , a = J.get(this);
                    if (o)
                        a[o] && a[o].stop && r(a[o]);
                    else
                        for (o in a)
                            a[o] && a[o].stop && at.test(o) && r(a[o]);
                    for (o = i.length; o--; )
                        i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n),
                        t = !1,
                        i.splice(o, 1));
                    !t && n || C.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"),
                this.each(function() {
                    var t, n = J.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = C.timers, a = r ? r.length : 0;
                    for (n.finish = !0,
                    C.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = i.length; t--; )
                        i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                        i.splice(t, 1));
                    for (t = 0; t < a; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        C.each(["toggle", "show", "hide"], function(e, t) {
            var n = C.fn[t];
            C.fn[t] = function(e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, o)
            }
        }),
        C.each({
            slideDown: lt("show"),
            slideUp: lt("hide"),
            slideToggle: lt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            C.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        C.timers = [],
        C.fx.tick = function() {
            var e, t = 0, n = C.timers;
            for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || C.fx.stop(),
            rt = void 0
        }
        ,
        C.fx.timer = function(e) {
            C.timers.push(e),
            C.fx.start()
        }
        ,
        C.fx.interval = 13,
        C.fx.start = function() {
            ot || (ot = !0,
            st())
        }
        ,
        C.fx.stop = function() {
            ot = null
        }
        ,
        C.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        C.fn.delay = function(e, t) {
            return e = C.fx && C.fx.speeds[e] || e,
            t = t || "fx",
            this.queue(t, function(t, r) {
                var o = n.setTimeout(t, e);
                r.stop = function() {
                    n.clearTimeout(o)
                }
            })
        }
        ,
        function() {
            var e = x.createElement("input")
              , t = x.createElement("select").appendChild(x.createElement("option"));
            e.type = "checkbox",
            v.checkOn = "" !== e.value,
            v.optSelected = t.selected,
            (e = x.createElement("input")).value = "t",
            e.type = "radio",
            v.radioValue = "t" === e.value
        }();
        var pt, dt = C.expr.attrHandle;
        C.fn.extend({
            attr: function(e, t) {
                return z(this, C.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    C.removeAttr(this, e)
                })
            }
        }),
        C.extend({
            attr: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === i && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? pt : void 0)),
                    void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                    n) : o && "get"in o && null !== (r = o.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!v.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, o = t && t.match(R);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++]; )
                        e.removeAttribute(n)
            }
        }),
        pt = {
            set: function(e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = dt[t] || C.find.attr;
            dt[t] = function(e, t, r) {
                var o, i, a = t.toLowerCase();
                return r || (i = dt[a],
                dt[a] = o,
                o = null != n(e, t, r) ? a : null,
                dt[a] = i),
                o
            }
        });
        var ht = /^(?:input|select|textarea|button)$/i
          , gt = /^(?:a|area)$/i;
        function vt(e) {
            return (e.match(R) || []).join(" ")
        }
        function mt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function yt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
        }
        C.fn.extend({
            prop: function(e, t) {
                return z(this, C.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[C.propFix[e] || e]
                })
            }
        }),
        C.extend({
            prop: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return 1 === i && C.isXMLDoc(e) || (t = C.propFix[t] || t,
                    o = C.propHooks[t]),
                    void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        v.optSelected || (C.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            C.propFix[this.toLowerCase()] = this
        }),
        C.fn.extend({
            addClass: function(e) {
                var t, n, r, o, i, a, s, u = 0;
                if (m(e))
                    return this.each(function(t) {
                        C(this).addClass(e.call(this, t, mt(this)))
                    });
                if ((t = yt(e)).length)
                    for (; n = this[u++]; )
                        if (o = mt(n),
                        r = 1 === n.nodeType && " " + vt(o) + " ") {
                            for (a = 0; i = t[a++]; )
                                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            o !== (s = vt(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, o, i, a, s, u = 0;
                if (m(e))
                    return this.each(function(t) {
                        C(this).removeClass(e.call(this, t, mt(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((t = yt(e)).length)
                    for (; n = this[u++]; )
                        if (o = mt(n),
                        r = 1 === n.nodeType && " " + vt(o) + " ") {
                            for (a = 0; i = t[a++]; )
                                for (; r.indexOf(" " + i + " ") > -1; )
                                    r = r.replace(" " + i + " ", " ");
                            o !== (s = vt(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e
                  , r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function(n) {
                    C(this).toggleClass(e.call(this, n, mt(this), t), t)
                }) : this.each(function() {
                    var t, o, i, a;
                    if (r)
                        for (o = 0, i = C(this),
                        a = yt(e); t = a[o++]; )
                            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else
                        void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++]; )
                    if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
        var xt = /\r/g;
        C.fn.extend({
            val: function(e) {
                var t, n, r, o = this[0];
                return arguments.length ? (r = m(e),
                this.each(function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = r ? e.call(this, n, C(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = C.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
            }
        }),
        C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : vt(C.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, o = e.options, i = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? i + 1 : o.length;
                        for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                            if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                if (t = C(n).val(),
                                a)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, i = C.makeArray(t), a = o.length; a--; )
                            ((r = o[a]).selected = C.inArray(C.valHooks.option.get(r), i) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        i
                    }
                }
            }
        }),
        C.each(["radio", "checkbox"], function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = C.inArray(C(e).val(), t) > -1
                }
            },
            v.checkOn || (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        }),
        v.focusin = "onfocusin"in n;
        var bt = /^(?:focusinfocus|focusoutblur)$/
          , wt = function(e) {
            e.stopPropagation()
        };
        C.extend(C.event, {
            trigger: function(e, t, r, o) {
                var i, a, s, u, l, c, f, p, h = [r || x], g = d.call(e, "type") ? e.type : e, v = d.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = p = s = r = r || x,
                3 !== r.nodeType && 8 !== r.nodeType && !bt.test(g + C.event.triggered) && (g.indexOf(".") > -1 && (g = (v = g.split(".")).shift(),
                v.sort()),
                l = g.indexOf(":") < 0 && "on" + g,
                (e = e[C.expando] ? e : new C.Event(g,"object" == typeof e && e)).isTrigger = o ? 2 : 3,
                e.namespace = v.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = r),
                t = null == t ? [e] : C.makeArray(t, [e]),
                f = C.event.special[g] || {},
                o || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                    if (!o && !f.noBubble && !y(r)) {
                        for (u = f.delegateType || g,
                        bt.test(u + g) || (a = a.parentNode); a; a = a.parentNode)
                            h.push(a),
                            s = a;
                        s === (r.ownerDocument || x) && h.push(s.defaultView || s.parentWindow || n)
                    }
                    for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
                        p = a,
                        e.type = i > 1 ? u : f.bindType || g,
                        (c = (J.get(a, "events") || Object.create(null))[e.type] && J.get(a, "handle")) && c.apply(a, t),
                        (c = l && a[l]) && c.apply && Y(a) && (e.result = c.apply(a, t),
                        !1 === e.result && e.preventDefault());
                    return e.type = g,
                    o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !Y(r) || l && m(r[g]) && !y(r) && ((s = r[l]) && (r[l] = null),
                    C.event.triggered = g,
                    e.isPropagationStopped() && p.addEventListener(g, wt),
                    r[g](),
                    e.isPropagationStopped() && p.removeEventListener(g, wt),
                    C.event.triggered = void 0,
                    s && (r[l] = s)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var r = C.extend(new C.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                C.event.trigger(r, null, t)
            }
        }),
        C.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    C.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return C.event.trigger(e, t, n, !0)
            }
        }),
        v.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                C.event.simulate(t, e.target, C.event.fix(e))
            };
            C.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this.document || this
                      , o = J.access(r, t);
                    o || r.addEventListener(e, n, !0),
                    J.access(r, t, (o || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this.document || this
                      , o = J.access(r, t) - 1;
                    o ? J.access(r, t, o) : (r.removeEventListener(e, n, !0),
                    J.remove(r, t))
                }
            }
        });
        var Tt = n.location
          , Ct = {
            guid: Date.now()
        }
          , kt = /\?/;
        C.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e),
            t
        }
        ;
        var Et = /\[\]$/
          , St = /\r?\n/g
          , At = /^(?:submit|button|image|reset|file)$/i
          , jt = /^(?:input|select|textarea|keygen)/i;
        function Nt(e, t, n, r) {
            var o;
            if (Array.isArray(t))
                C.each(t, function(t, o) {
                    n || Et.test(e) ? r(e, o) : Nt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
                });
            else if (n || "object" !== T(t))
                r(e, t);
            else
                for (o in t)
                    Nt(e + "[" + o + "]", t[o], n, r)
        }
        C.param = function(e, t) {
            var n, r = [], o = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == e)
                return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e))
                C.each(e, function() {
                    o(this.name, this.value)
                });
            else
                for (n in e)
                    Nt(n, e[n], t, o);
            return r.join("&")
        }
        ,
        C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && jt.test(this.nodeName) && !At.test(e) && (this.checked || !de.test(e))
                }).map(function(e, t) {
                    var n = C(this).val();
                    return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(St, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(St, "\r\n")
                    }
                }).get()
            }
        });
        var Dt = /%20/g
          , qt = /#.*$/
          , Lt = /([?&])_=[^&]*/
          , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Ot = /^(?:GET|HEAD)$/
          , Pt = /^\/\//
          , Mt = {}
          , Rt = {}
          , It = "*/".concat("*")
          , Bt = x.createElement("a");
        function Wt(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var r, o = 0, i = t.toLowerCase().match(R) || [];
                if (m(n))
                    for (; r = i[o++]; )
                        "+" === r[0] ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function Ft(e, t, n, r) {
            var o = {}
              , i = e === Rt;
            function a(s) {
                var u;
                return o[s] = !0,
                C.each(e[s] || [], function(e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                    a(l),
                    !1)
                }),
                u
            }
            return a(t.dataTypes[0]) || !o["*"] && a("*")
        }
        function _t(e, t) {
            var n, r, o = C.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && C.extend(!0, e, r),
            e
        }
        Bt.href = Tt.href,
        C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": It,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? _t(_t(e, C.ajaxSettings), t) : _t(C.ajaxSettings, e)
            },
            ajaxPrefilter: Wt(Mt),
            ajaxTransport: Wt(Rt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var r, o, i, a, s, u, l, c, f, p, d = C.ajaxSetup({}, t), h = d.context || d, g = d.context && (h.nodeType || h.jquery) ? C(h) : C.event, v = C.Deferred(), m = C.Callbacks("once memory"), y = d.statusCode || {}, b = {}, w = {}, T = "canceled", k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!a)
                                for (a = {}; t = Ht.exec(i); )
                                    a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return l ? i : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                        b[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == l && (d.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (l)
                                k.always(e[k.status]);
                            else
                                for (t in e)
                                    y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return r && r.abort(t),
                        E(0, t),
                        this
                    }
                };
                if (v.promise(k),
                d.url = ((e || d.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
                d.type = t.method || t.type || d.method || d.type,
                d.dataTypes = (d.dataType || "*").toLowerCase().match(R) || [""],
                null == d.crossDomain) {
                    u = x.createElement("a");
                    try {
                        u.href = d.url,
                        u.href = u.href,
                        d.crossDomain = Bt.protocol + "//" + Bt.host != u.protocol + "//" + u.host
                    } catch (e) {
                        d.crossDomain = !0
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = C.param(d.data, d.traditional)),
                Ft(Mt, d, t, k),
                l)
                    return k;
                for (f in (c = C.event && d.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
                d.type = d.type.toUpperCase(),
                d.hasContent = !Ot.test(d.type),
                o = d.url.replace(qt, ""),
                d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Dt, "+")) : (p = d.url.slice(o.length),
                d.data && (d.processData || "string" == typeof d.data) && (o += (kt.test(o) ? "&" : "?") + d.data,
                delete d.data),
                !1 === d.cache && (o = o.replace(Lt, "$1"),
                p = (kt.test(o) ? "&" : "?") + "_=" + Ct.guid++ + p),
                d.url = o + p),
                d.ifModified && (C.lastModified[o] && k.setRequestHeader("If-Modified-Since", C.lastModified[o]),
                C.etag[o] && k.setRequestHeader("If-None-Match", C.etag[o])),
                (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && k.setRequestHeader("Content-Type", d.contentType),
                k.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + It + "; q=0.01" : "") : d.accepts["*"]),
                d.headers)
                    k.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (!1 === d.beforeSend.call(h, k, d) || l))
                    return k.abort();
                if (T = "abort",
                m.add(d.complete),
                k.done(d.success),
                k.fail(d.error),
                r = Ft(Rt, d, t, k)) {
                    if (k.readyState = 1,
                    c && g.trigger("ajaxSend", [k, d]),
                    l)
                        return k;
                    d.async && d.timeout > 0 && (s = n.setTimeout(function() {
                        k.abort("timeout")
                    }, d.timeout));
                    try {
                        l = !1,
                        r.send(b, E)
                    } catch (e) {
                        if (l)
                            throw e;
                        E(-1, e)
                    }
                } else
                    E(-1, "No Transport");
                function E(e, t, a, u) {
                    var f, p, x, b, w, T = t;
                    l || (l = !0,
                    s && n.clearTimeout(s),
                    r = void 0,
                    i = u || "",
                    k.readyState = e > 0 ? 4 : 0,
                    f = e >= 200 && e < 300 || 304 === e,
                    a && (b = function(e, t, n) {
                        for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                            u.shift(),
                            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (o in s)
                                if (s[o] && s[o].test(r)) {
                                    u.unshift(o);
                                    break
                                }
                        if (u[0]in n)
                            i = u[0];
                        else {
                            for (o in n) {
                                if (!u[0] || e.converters[o + " " + u[0]]) {
                                    i = o;
                                    break
                                }
                                a || (a = o)
                            }
                            i = i || a
                        }
                        if (i)
                            return i !== u[0] && u.unshift(i),
                            n[i]
                    }(d, k, a)),
                    !f && C.inArray("script", d.dataTypes) > -1 && (d.converters["text script"] = function() {}
                    ),
                    b = function(e, t, n, r) {
                        var o, i, a, s, u, l = {}, c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters)
                                l[a.toLowerCase()] = e.converters[a];
                        for (i = c.shift(); i; )
                            if (e.responseFields[i] && (n[e.responseFields[i]] = t),
                            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            u = i,
                            i = c.shift())
                                if ("*" === i)
                                    i = u;
                                else if ("*" !== u && u !== i) {
                                    if (!(a = l[u + " " + i] || l["* " + i]))
                                        for (o in l)
                                            if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0],
                                                c.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a)
                                        if (a && e.throws)
                                            t = a(t);
                                        else
                                            try {
                                                t = a(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? e : "No conversion from " + u + " to " + i
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(d, b, k, f),
                    f ? (d.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (C.lastModified[o] = w),
                    (w = k.getResponseHeader("etag")) && (C.etag[o] = w)),
                    204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state,
                    p = b.data,
                    f = !(x = b.error))) : (x = T,
                    !e && T || (T = "error",
                    e < 0 && (e = 0))),
                    k.status = e,
                    k.statusText = (t || T) + "",
                    f ? v.resolveWith(h, [p, T, k]) : v.rejectWith(h, [k, T, x]),
                    k.statusCode(y),
                    y = void 0,
                    c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [k, d, f ? p : x]),
                    m.fireWith(h, [k, T]),
                    c && (g.trigger("ajaxComplete", [k, d]),
                    --C.active || C.event.trigger("ajaxStop")))
                }
                return k
            },
            getJSON: function(e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return C.get(e, void 0, t, "script")
            }
        }),
        C.each(["get", "post"], function(e, t) {
            C[t] = function(e, n, r, o) {
                return m(n) && (o = o || r,
                r = n,
                n = void 0),
                C.ajax(C.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: r
                }, C.isPlainObject(e) && e))
            }
        }),
        C.ajaxPrefilter(function(e) {
            var t;
            for (t in e.headers)
                "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }),
        C._evalUrl = function(e, t, n) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    C.globalEval(e, t, n)
                }
            })
        }
        ,
        C.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (m(e) && (e = e.call(this[0])),
                t = C(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }).append(this)),
                this
            },
            wrapInner: function(e) {
                return m(e) ? this.each(function(t) {
                    C(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = C(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = m(e);
                return this.each(function(n) {
                    C(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    C(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        C.expr.pseudos.hidden = function(e) {
            return !C.expr.pseudos.visible(e)
        }
        ,
        C.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        C.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var $t = {
            0: 200,
            1223: 204
        }
          , zt = C.ajaxSettings.xhr();
        v.cors = !!zt && "withCredentials"in zt,
        v.ajax = zt = !!zt,
        C.ajaxTransport(function(e) {
            var t, r;
            if (v.cors || zt && !e.crossDomain)
                return {
                    send: function(o, i) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (a in e.xhrFields)
                                s[a] = e.xhrFields[a];
                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                        e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                        o)
                            s.setRequestHeader(a, o[a]);
                        t = function(e) {
                            return function() {
                                t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                                "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }
                        ,
                        s.onload = t(),
                        r = s.onerror = s.ontimeout = t("error"),
                        void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && n.setTimeout(function() {
                                t && r()
                            })
                        }
                        ,
                        t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t)
                                throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
        }),
        C.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return C.globalEval(e),
                    e
                }
            }
        }),
        C.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        C.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
                return {
                    send: function(r, o) {
                        t = C("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && o("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        x.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
        });
        var Ut = []
          , Xt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ut.pop() || C.expando + "_" + Ct.guid++;
                return this[e] = !0,
                e
            }
        }),
        C.ajaxPrefilter("json jsonp", function(e, t, r) {
            var o, i, a, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
                return o = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                s ? e[s] = e[s].replace(Xt, "$1" + o) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                e.converters["script json"] = function() {
                    return a || C.error(o + " was not called"),
                    a[0]
                }
                ,
                e.dataTypes[0] = "json",
                i = n[o],
                n[o] = function() {
                    a = arguments
                }, r.always(function() {
                    void 0 === i ? C(n).removeProp(o) : n[o] = i,
                    e[o] && (e.jsonpCallback = t.jsonpCallback,
                    Ut.push(o)),
                    a && m(i) && i(a[0]),
                    a = i = void 0
                }),
                "script"
        }),
        v.createHTMLDocument = function() {
            var e = x.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>",
            2 === e.childNodes.length
        }(),
        C.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
            t = !1),
            t || (v.createHTMLDocument ? ((r = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href,
            t.head.appendChild(r)) : t = x),
            o = D.exec(e),
            i = !n && [],
            o ? [t.createElement(o[1])] : (o = be([e], t, i),
            i && i.length && C(i).remove(),
            C.merge([], o.childNodes)));
            var r, o, i
        }
        ,
        C.fn.load = function(e, t, n) {
            var r, o, i, a = this, s = e.indexOf(" ");
            return s > -1 && (r = vt(e.slice(s)),
            e = e.slice(0, s)),
            m(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (o = "POST"),
            a.length > 0 && C.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                i = arguments,
                a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, i || [e.responseText, t, e])
                })
            }
            ),
            this
        }
        ,
        C.expr.pseudos.animated = function(e) {
            return C.grep(C.timers, function(t) {
                return e === t.elem
            }).length
        }
        ,
        C.offset = {
            setOffset: function(e, t, n) {
                var r, o, i, a, s, u, l = C.css(e, "position"), c = C(e), f = {};
                "static" === l && (e.style.position = "relative"),
                s = c.offset(),
                i = C.css(e, "top"),
                u = C.css(e, "left"),
                ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1 ? (a = (r = c.position()).top,
                o = r.left) : (a = parseFloat(i) || 0,
                o = parseFloat(u) || 0),
                m(t) && (t = t.call(e, n, C.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + o),
                "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
                "number" == typeof f.left && (f.left += "px"),
                c.css(f))
            }
        },
        C.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        C.offset.setOffset(this, e, t)
                    });
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                n = r.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0], o = {
                        top: 0, left: 0
                    };
                    if ("fixed" === C.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); )
                            e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0),
                        o.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - C.css(r, "marginTop", !0),
                        left: t.left - o.left - C.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position"); )
                        e = e.offsetParent;
                    return e || ie
                })
            }
        }),
        C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function(r) {
                return z(this, function(e, r, o) {
                    var i;
                    if (y(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                    void 0 === o)
                        return i ? i[t] : e[r];
                    i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                }, e, r, arguments.length)
            }
        }),
        C.each(["top", "left"], function(e, t) {
            C.cssHooks[t] = ze(v.pixelPosition, function(e, n) {
                if (n)
                    return n = $e(e, t),
                    Be.test(n) ? C(e).position()[t] + "px" : n
            })
        }),
        C.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            C.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                C.fn[r] = function(o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o)
                      , s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return z(this, function(t, n, o) {
                        var i;
                        return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                        Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? C.css(t, n, s) : C.style(t, n, o, s)
                    }, t, a ? o : void 0, a)
                }
            })
        }),
        C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        C.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            C.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        });
        var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        C.proxy = function(e, t) {
            var n, r, o;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            m(e))
                return r = s.call(arguments, 2),
                (o = function() {
                    return e.apply(t || this, r.concat(s.call(arguments)))
                }
                ).guid = e.guid = e.guid || C.guid++,
                o
        }
        ,
        C.holdReady = function(e) {
            e ? C.readyWait++ : C.ready(!0)
        }
        ,
        C.isArray = Array.isArray,
        C.parseJSON = JSON.parse,
        C.nodeName = N,
        C.isFunction = m,
        C.isWindow = y,
        C.camelCase = G,
        C.type = T,
        C.now = Date.now,
        C.isNumeric = function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        C.trim = function(e) {
            return null == e ? "" : (e + "").replace(Vt, "")
        }
        ,
        void 0 === (r = function() {
            return C
        }
        .apply(t, [])) || (e.exports = r);
        var Gt = n.jQuery
          , Yt = n.$;
        return C.noConflict = function(e) {
            return n.$ === C && (n.$ = Yt),
            e && n.jQuery === C && (n.jQuery = Gt),
            C
        }
        ,
        void 0 === o && (n.jQuery = n.$ = C),
        C
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.log = void 0;
    var r = n(0);
    t.log = r.debugMode ? console.log.bind(console) : function() {}
}
, function(e, t, n) {
    e.exports = n(4)
}
, function(e, t, n) {
    "use strict";
    var r = s(n(1));
    n(5),
    n(6),
    n(7);
    var o = s(n(8))
      , i = n(2)
      , a = n(0);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = function(e) {
        return document.querySelector(e)
    }
      , l = null;
    function c(e) {
        if(!e) return null;
        var t = e.name
          , n = e.sentence
          , o = e.title
          , i = e.author
          , a = e.book
          , s = e.dynasty;
        var name = (0, r.default)('input[name="family-name"]').val() + t;
        var wxs = query_wuxing(name);
        return "<li class='name-box'><h3>" + name +
        "</h3><center style='font-size: 1rem;font-weight: lighter;color: white;'>(" + wxs.wx + ")</center><p class='sentence'><span>「</span> " +
        n.replace(new RegExp("[" + t + "]","ig"), function(e) {
            return "<i>" + e + "</i>"
        }) + " <span>」</span> </p> <div class='source-row' > <div class='book'>" + a +
        "&nbsp;•&nbsp;" + o + "</div> <div class='author'>[" + s + "]&nbsp;" + (i || "佚名") + "</div></div>\n</li>"
    }
    // 从中查询字的属性
    function query_wuxing(name) {
        var wx = "";
        var wx_detail_arr = [];
        // console.log("query_wuxing");
        for (var k = 0; k < name.length; k++) {
            var name_k = name[k];
            // 先从缓存里面找
            var find_index = query_wuxing_temps.indexOf(name_k);
            if(find_index > -1) {
                var wx_d = query_wuxing_details[find_index];
                // console.log(query_wuxing_details, find_index, wx_d);
                if(wx_d.length < 4) {
                    wx += "无";
                } else {
                    wx += wx_d[3];
                }
                wx_detail_arr.push(wx_d);
                // console.log("query_wuxing query_wuxing_details found:", name_k);
                continue;
            }
            // 再从整体里面找
            var find_res = kangxidict.find(function(value, index, arr) {return value[0] == name_k;});
            if(!find_res) {
                console.log("query_wuxing not found:", name_k);
                wx += "无";
                find_res = [name_k];
                wx_detail_arr.push(find_res);
                // continue; // 没有找到也要存入缓存，所以注释本行
            } else {
                wx += find_res[3];
                wx_detail_arr.push(find_res);
            }
            // 缓存已经查询过的字
            // if(query_wuxing_temps.length < 100 && query_wuxing_temps.indexOf(name[k]) < 0) {
            if(query_wuxing_temps.length < 100) {
                query_wuxing_temps.push(name[k]);
                query_wuxing_details.push(find_res);
            }
        }
        // console.log("query_wuxing_temps:", query_wuxing_temps, query_wuxing_details);
        return {
            wx,
            wx_detail_arr
        };
    }
    // 将字的属性数组转换为 HTML 显示
    function wx_arr2html(wx_detail_arr) {
        var res = "";
        for(var k = 0; k < wx_detail_arr.length; k++) {
            var wx_detail_k = wx_detail_arr[k];
            console.log("wx_arr2html", wx_detail_k);
            res += "<div style='margin: 5px;'>";
            res += "<span style='font-weight: bold'>" + wx_detail_k[0] + " </span>";
            if(wx_detail_k.length > 2) {
                res += "<span> | 拼音：" + wx_detail_k[1] + " </span>";
                res += "<span> | 笔画：" + wx_detail_k[2] + " </span>";
                res += "<span> | 五行：" + wx_detail_k[3] + " </span>";
                res += "<span> | 吉凶：" + ((wx_detail_k[4] == '')?"无":wx_detail_k[4]) + " </span>";
                var xm = wx_detail_k[5];
                var xms = xm.split(",");
                var xm_str = "";
                if(xms[0] == "Y") {
                    xm_str += "为姓氏"
                } else {
                    xm_str += "非姓氏"
                }
                if(!!xms[1]) {
                    xm_str += (xms[1] == "m")?"，通常男用":"，通常女用";
                }
                res += "<span> | 姓名学：" + xm_str + " </span>";
                res += "<span> | 常用：" + ((wx_detail_k[5] == "Y")? "是":"否") + " </span>";
            } else {
                res += " 当前词典中无此字信息";
            }
            res += "</div>";
        }
        return res;
    }
    function f() {
        l = setTimeout(function() {
            (0, r.default)(".loader").css({
                display: "block"
            })
        }, 300)
    }
    function p() {
        clearTimeout(l),
        (0, r.default)(".loader").css({
            display: "none"
        })
    }
    function d(e) {
        var t = (0, r.default)("input[name='book']:checked").val();
        f(),
        e.loadBook(t, function() {
            p()
        })
    }
    (0, r.default)(document).ready(function() {
        var e = new o.default;
        !function() {
            var e = [{
                value: "shijing",
                name: "诗经",
                checked: !0
            }, {
                value: "chuci",
                name: "楚辞"
            }, {
                value: "tangshi",
                name: "唐诗"
            }, {
                value: "songci",
                name: "宋词"
            }, {
                value: "yuefu",
                name: "乐府诗集"
            }, {
                value: "gushi",
                name: "古诗三百首"
            }, {
                value: "cifu",
                name: "著名辞赋"
            }];
            a.debugMode && e.push({
                value: "test",
                name: "测试",
                checked: !0
            }),
            u(".book-selector").innerHTML = function(e) {
                return e.map(function(e) {
                    return '<div class="inputGroup"><input id="' + e.value + '" name="book" type="radio" value="' + e.value + '" ' + (e.checked ? "checked" : "") + '  /><label for="' + e.value + '">' + e.name + "</label>\n</div>"
                }).join("")
            }(e)
        }(),
        d(e),
        e.load_kxdict(),
        function(e) {
            (0, r.default)("input[name='book']").change(function(t) {
                d(e)
            }),
            u(".btn-go").addEventListener("click", function() {
                f();
                for (var t = a.nameAmount, n = [], o = 0; o < t; o++) {
                    var i = e.genName();
                    n.push(c(i))
                }
                (0, r.default)(".result-container").html(n.join("")),
                p()
                // console.log("btn-go", kangxidict);
            }, !1);
            u(".btn-wx-test").addEventListener("click", function() {
                var name = (0, r.default)('input[name="full-name"]').val();
                // console.log("五行查询", name);
                var name_wx = query_wuxing(name);
                // console.log("name_wx: ", name_wx);
                var wx_str = "<h4>" + name_wx.wx + "</h4>";
                (0, r.default)(".wx-test-result").html("<center>" + wx_str + wx_arr2html(name_wx.wx_detail_arr) + "</center>");
            }, !1);
            u(".result-container").addEventListener("click", function(e) {
                // console.log("result-container", e, e.target);
                var target = (0, r.default)(e.target);
                var h3 = target.parents(".name-box").children("h3");
                if(target.hasClass('name-box')) {
                    h3 = target.children("h3");
                }
                if(h3.length < 1) {
                    console.log("result-container h3 null", e, e.target);
                    return ;
                }
                var name = h3[0].innerHTML;
                // console.log("result-container", h3, name);

                (0, r.default)('input[name="full-name"]').val(name);
                u(".btn-wx-test").click();
                u("#details_full_name").open = true;
            }, !1);
        }(e)
    }),
    a.debugMode && function() {
        var e = function(e) {
            (0,
            i.log)("'" + e + "'")
        }
          , t = new o.default
          , n = ["<p>习习谷风，以阴以雨。黾勉同心，不宜有怒。采葑采菲，无以下体？德音莫违，及尔同死。</p>", " 记得年时临上马看人眼泪汪汪", "惜诵　　惜诵以致愍兮，发愤以抒情。　　所作忠而言之兮，指苍天以为正。　　令五帝使折中兮，戒六神与向服…望大河之洲渚兮，悲申徒之抗迹。　　骤谏君而不听兮，重任石之何益？　　心絓结而不解兮，思蹇产而不释。  "];
        (0,
        i.log)(t.splitSentence(n[0])),
        e(t.formatStr(n[0])),
        e(t.formatStr(n[1]))
    }()
}
, function(e, t) {}
, function(e, t) {}
, function(e, t) {}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = s(n(1))
      , i = n(2)
      , a = s(n(9));
    n(0);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.loading = !1,
            this.book = null
        }
        return r(e, [{
            key: "formatStr",
            value: function(e) {
                var t = e.replace(/(\s|　|”|“){1,}|<br>|<p>|<\/p>/g, "");
                return t = t.replace(/\(.+\)/g, "")
            }
        }, {
            key: "splitSentence",
            value: function(e) {
                if (!e)
                    return [];
                var t = this.formatStr(e)
                  , n = (t = (t = t.replace(/！|。|？|；/g, function(e) {
                    return e + "|"
                })).replace(/\|$/g, "")).split("|");
                return n = n.filter(function(e) {
                    return e.length >= 2
                })
            }
        }, {
            key: "cleanPunctuation",
            value: function(e) {
                return e.replace(/[<>《》！*\(\^\)\$%~!@#…&%￥—\+=、。，？；‘’“”：·`]/g, "")
            }
        }, {
            key: "cleanBadChar",
            value: function(e) {
                var t = "胸鬼懒禽鸟鸡我邪罪凶丑仇鼠蟋蟀淫秽妹狐鸡鸭蝇悔鱼肉苦犬吠窥血丧饥女搔父母昏狗蟊疾病痛死潦哀痒害蛇牲妇狸鹅穴畜烂兽靡爪氓劫鬣螽毛婚姻匪婆羞辱".split("");
                return e.split("").filter(function(e) {
                    return -1 === t.indexOf(e)
                }).join("")
            }
        }, {
            key: "genName",
            value: function() {
                if (!this.book)
                    return null;
                try {
                    var e = a.default.choose(this.book)
                      , t = e.content
                      , n = e.title
                      , r = e.author
                      , o = e.book
                      , s = e.dynasty;
                    if (!t)
                        return null;
                    var u = this.splitSentence(t);
                    if (!(Array.isArray(u) && u.length > 0))
                        return null;
                    var l = a.default.choose(u)
                      , c = this.cleanBadChar(this.cleanPunctuation(l));
                    return c.length <= 2 ? null : {
                        name: this.getTwoChar(c.split("")),
                        sentence: l,
                        content: t,
                        title: n,
                        author: r,
                        book: o,
                        dynasty: s
                    }
                } catch (e) {
                    (0,
                    i.log)(e)
                }
            }
        }, {
            key: "getTwoChar",
            value: function(e) {
                for (var t = e.length, n = a.default.between(0, t), r = a.default.between(0, t), o = 0; r === n && (r = a.default.between(0, t),
                !(++o > 100)); );
                return n <= r ? "" + e[n] + e[r] : "" + e[r] + e[n]
            }
        }, {
            key: "loadBook",
            value: function(e, t) {
                var n = this
                  , r = "./json/" + e + ".json";
                // console.log("loadBook", n);
                this.loading = !0,
                o.default.ajax({
                    url: r,
                    success: function(r) {
                        (0, i.log)(e + " loaded"),
                        n.loading = !1,
                        // n.book = typeof r === 'string' ? JSON.parse(r) : r,
                        n.book = r instanceof Array ? r : JSON.parse(r),
                        "function" == typeof t && t(r)
                    },
                    fail: function(e) {
                        return (0, i.log)(e)
                    }
                })
            }
        }, {
            key: "load_kxdict",
            value: function() {
                var r = "./json/kangxidict_min.json";
                console.log("load_kxdict: ", r);
                this.loading = !0,
                o.default.ajax({
                    url: r,
                    success: function(r) {
                        (0, i.log)("kangxidict_min loaded"),
                        console.log("load_kxdict: ", "kangxidict_min.json loaded");
                        kangxidict = r instanceof Array ? r : JSON.parse(r);
                    },
                    fail: function(e) {
                        return (0, i.log)(e)
                    }
                })
            }
        }]),
        e
    }();
    t.default = u
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e, t) {
        return e + Math.floor(Math.random() * (t - e))
    };
    t.default = {
        choose: function(e) {
            return e[r(0, e.length)]
        },
        between: r
    }
}
]);
