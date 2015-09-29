/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-inlinesvg-svg-svgclippaths-touch-shiv-mq-cssclasses-teststyles-prefixes-ie8compat-load
 */

// <editor-fold desc="Extends">
function base64_decode(e) {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        n, r, i, s, o, u, a, f, l = 0,
        c = 0,
        h = "",
        p = [];
    if (!e) return e;
    e += "";
    do s = t.indexOf(e.charAt(l++)), o = t.indexOf(e.charAt(l++)), u = t.indexOf(e.charAt(l++)), a = t.indexOf(e.charAt(l++)), f = s << 18 | o << 12 | u << 6 | a, n = f >> 16 & 255, r = f >> 8 & 255, i = f & 255, u == 64 ? p[c++] = String.fromCharCode(n) : a == 64 ? p[c++] = String.fromCharCode(n, r) : p[c++] = String.fromCharCode(n, r, i); while (l < e.length);
    return h = p.join(""), h
}
window.Modernizr = function (e, t, n) {
        function r(e) {
            d.cssText = e
        }

        function i(e, t) {
            return r(g.join(e + ";") + (t || ""))
        }

        function s(e, t) {
            return typeof e === t
        }

        function o(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function u(e, t, r) {
            for (var i in e) {
                var o = t[e[i]];
                if (o !== n) return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
            }
            return !1
        }
        var a = "2.6.2",
            f = {},
            l = !0,
            c = t.documentElement,
            h = "modernizr",
            p = t.createElement(h),
            d = p.style,
            v, m = {}.toString,
            g = " -webkit- -moz- -o- -ms- ".split(" "),
            y = {
                svg: "http://www.w3.org/2000/svg"
            },
            b = {},
            w = {},
            E = {},
            S = [],
            x = S.slice,
            T, N = function (e, n, r, i) {
                var s, o, u, a, f = t.createElement("div"),
                    l = t.body,
                    p = l || t.createElement("body");
                if (parseInt(r, 10))
                    while (r--) u = t.createElement("div"), u.id = i ? i[r] : h + (r + 1), f.appendChild(u);
                return s = ["&#173;", '<style id="s', h, '">', e, "</style>"].join(""), f.id = h, (l ? f : p).innerHTML += s, p.appendChild(f), l || (p.style.background = "", p.style.overflow = "hidden", a = c.style.overflow, c.style.overflow = "hidden", c.appendChild(p)), o = n(f, e), l ? f.parentNode.removeChild(f) : (p.parentNode.removeChild(p), c.style.overflow = a), !!o
            },
            C = function (t) {
                var n = e.matchMedia || e.msMatchMedia;
                if (n) return n(t).matches;
                var r;
                return N("@media " + t + " { #" + h + " { position: absolute; } }", function (t) {
                    r = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"] == "absolute"
                }), r
            },
            k = {}.hasOwnProperty,
            L;
        !s(k, "undefined") && !s(k.call, "undefined") ? L = function (e, t) {
            return k.call(e, t)
        } : L = function (e, t) {
            return t in e && s(e.constructor.prototype[t], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function (e) {
            var t = this;
            if (typeof t != "function") throw new TypeError;
            var n = x.call(arguments, 1),
                r = function () {
                    if (this instanceof r) {
                        var i = function () {};
                        i.prototype = t.prototype;
                        var s = new i,
                            o = t.apply(s, n.concat(x.call(arguments)));
                        return Object(o) === o ? o : s
                    }
                    return t.apply(e, n.concat(x.call(arguments)))
                };
            return r
        }), b.touch = function () {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : N(["@media (", g.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
                n = e.offsetTop === 9
            }), n
        }, b.svg = function () {
            return !!t.createElementNS && !!t.createElementNS(y.svg, "svg").createSVGRect
        }, b.inlinesvg = function () {
            var e = t.createElement("div");
            return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == y.svg
        }, b.svgclippaths = function () {
            return !!t.createElementNS && /SVGClipPath/.test(m.call(t.createElementNS(y.svg, "clipPath")))
        };
        for (var A in b) L(b, A) && (T = A.toLowerCase(), f[T] = b[A](), S.push((f[T] ? "" : "no-") + T));
        return f.addTest = function (e, t) {
                if (typeof e == "object")
                    for (var r in e) L(e, r) && f.addTest(r, e[r]);
                else {
                    e = e.toLowerCase();
                    if (f[e] !== n) return f;
                    t = typeof t == "function" ? t() : t, typeof l != "undefined" && l && (c.className += " " + (t ? "" : "no-") + e), f[e] = t
                }
                return f
            }, r(""), p = v = null,
            function (e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function r() {
                    var e = g.elements;
                    return typeof e == "string" ? e.split(" ") : e
                }

                function i(e) {
                    var t = v[e[p]];
                    return t || (t = {}, d++, e[p] = d, v[d] = t), t
                }

                function s(e, n, r) {
                    n || (n = t);
                    if (m) return n.createElement(e);
                    r || (r = i(n));
                    var s;
                    return r.cache[e] ? s = r.cache[e].cloneNode() : c.test(e) ? s = (r.cache[e] = r.createElem(e)).cloneNode() : s = r.createElem(e), s.canHaveChildren && !l.test(e) ? r.frag.appendChild(s) : s
                }

                function o(e, n) {
                    e || (e = t);
                    if (m) return e.createDocumentFragment();
                    n = n || i(e);
                    var s = n.frag.cloneNode(),
                        o = 0,
                        u = r(),
                        a = u.length;
                    for (; o < a; o++) s.createElement(u[o]);
                    return s
                }

                function u(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                        return g.shivMethods ? s(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function (e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(g, t.frag)
                }

                function a(e) {
                    e || (e = t);
                    var r = i(e);
                    return g.shivCSS && !h && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), m || u(e, r), e
                }
                var f = e.html5 || {},
                    l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    h, p = "_html5shiv",
                    d = 0,
                    v = {},
                    m;
                (function () {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", h = "hidden" in e, m = e.childNodes.length == 1 || function () {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                        }()
                    } catch (n) {
                        h = !0, m = !0
                    }
                })();
                var g = {
                    elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time  video",
                    shivCSS: f.shivCSS !== !1,
                    supportsUnknownElements: m,
                    shivMethods: f.shivMethods !== !1,
                    type: "default",
                    shivDocument: a,
                    createElement: s,
                    createDocumentFragment: o
                };
                e.html5 = g, a(t)
            }(this, t), f._version = a, f._prefixes = g, f.mq = C, f.testStyles = N, c.className = c.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (l ? " js " + S.join(" ") : ""), f
    }(this, this.document),
    function (e, t, n) {
        function r(e) {
            return "[object Function]" == d.call(e)
        }

        function i(e) {
            return "string" == typeof e
        }

        function s() {}

        function o(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function u() {
            var e = v.shift();
            m = 1, e ? e.t ? h(function () {
                ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), u()) : m = 0
        }

        function a(e, n, r, i, s, a, f) {
            function l(t) {
                if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
                    "img" != e && h(function () {
                        b.removeChild(c)
                    }, 50);
                    for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
                }
            }
            var f = f || k.errorTimeout,
                c = t.createElement(e),
                d = 0,
                g = 0,
                w = {
                    t: r,
                    s: n,
                    e: s,
                    a: a,
                    x: f
                };
            1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function () {
                l.call(this, g)
            }, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
        }

        function f(e, t, n, r, s) {
            return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
        }

        function l() {
            var e = k;
            return e.loader = {
                load: f,
                i: 0
            }, e
        }
        var c = t.documentElement,
            h = e.setTimeout,
            p = t.getElementsByTagName("script")[0],
            d = {}.toString,
            v = [],
            m = 0,
            g = "MozAppearance" in c.style,
            y = g && !!t.createRange().compareNode,
            b = y ? c : p.parentNode,
            c = e.opera && "[object Opera]" == d.call(e.opera),
            c = !!t.attachEvent && !c,
            w = g ? "object" : c ? "script" : "img",
            E = c ? "script" : w,
            S = Array.isArray || function (e) {
                return "[object Array]" == d.call(e)
            },
            x = [],
            T = {},
            N = {
                timeout: function (e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            },
            C, k;
        k = function (e) {
            function t(e) {
                var e = e.split("!"),
                    t = x.length,
                    n = e.pop(),
                    r = e.length,
                    n = {
                        url: n,
                        origUrl: n,
                        prefixes: e
                    },
                    i, s, o;
                for (s = 0; s < r; s++) o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
                for (s = 0; s < t; s++) n = x[s](n);
                return n
            }

            function o(e, i, s, o, u) {
                var a = t(e),
                    f = a.autoCallback;
                a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function () {
                    l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
                })))
            }

            function u(e, t) {
                function n(e, n) {
                    if (e) {
                        if (i(e)) n || (f = function () {
                            var e = [].slice.call(arguments);
                            l.apply(this, e), c()
                        }), o(e, f, t, 0, u);
                        else if (Object(e) === e)
                            for (p in h = function () {
                                    var t = 0,
                                        n;
                                    for (n in e) e.hasOwnProperty(n) && t++;
                                    return t
                                }(), e) e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function () {
                                var e = [].slice.call(arguments);
                                l.apply(this, e), c()
                            } : f[p] = function (e) {
                                return function () {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), c()
                                }
                            }(l[p])), o(e[p], f, t, p, u))
                    } else !n && c()
                }
                var u = !!e.test,
                    a = e.load || e.both,
                    f = e.callback || s,
                    l = f,
                    c = e.complete || s,
                    h, p;
                n(u ? e.yep : e.nope, !!a), a && n(a)
            }
            var a, f, c = this.yepnope.loader;
            if (i(e)) o(e, 0, c, 0);
            else if (S(e))
                for (a = 0; a < e.length; a++) f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
            else Object(e) === e && u(e, c)
        }, k.addPrefix = function (e, t) {
            N[e] = t
        }, k.addFilter = function (e) {
            x.push(e)
        }, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function () {
            t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
        }, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function (e, n, r, i, a, f) {
            var l = t.createElement("script"),
                c, d, i = i || k.errorTimeout;
            l.src = e;
            for (d in r) l.setAttribute(d, r[d]);
            n = f ? u : n || s, l.onreadystatechange = l.onload = function () {
                !c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
            }, h(function () {
                c || (c = 1, n(1))
            }, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
        }, e.yepnope.injectCss = function (e, n, r, i, o, a) {
            var i = t.createElement("link"),
                f, n = a ? u : n || s;
            i.href = e, i.rel = "stylesheet", i.type = "text/css";
            for (f in r) i.setAttribute(f, r[f]);
            o || (p.parentNode.insertBefore(i, p), h(n, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, Modernizr.addTest("ie8compat", function () {
        return !window.addEventListener && document.documentMode && document.documentMode === 7
    }),
    function (e, t) {
        "use strict";

        function n(e) {
            var t = e.length,
                n = ut.type(e);
            return ut.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
        }

        function r(e) {
            var t = Et[e] = {};
            return ut.each(e.match(ft) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function i(e, n, r, i) {
            if (!ut.acceptData(e)) return;
            var s, o, u = ut.expando,
                a = typeof n == "string",
                f = e.nodeType,
                l = f ? ut.cache : e,
                c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
            c || (f ? e[u] = c = Y.pop() || ut.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = ut.noop));
            if (typeof n == "object" || typeof n == "function") i ? l[c] = ut.extend(l[c], n) : l[c].data = ut.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[ut.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[ut.camelCase(n)])) : o = s, o
        }

        function s(e, t, n) {
            if (!ut.acceptData(e)) return;
            var r, i, s, o = e.nodeType,
                a = o ? ut.cache : e,
                f = o ? e[ut.expando] : ut.expando;
            if (!a[f]) return;
            if (t) {
                r = n ? a[f] : a[f].data;
                if (r) {
                    ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in r ? t = [t] : (t = ut.camelCase(t), t in r ? t = [t] : t = t.split(" "));
                    for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if (!(n ? u : ut.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete a[f].data;
                if (!u(a[f])) return
            }
            o ? ut.cleanData([e], !0) : ut.support.deleteExpando || a != a.window ? delete a[f] : a[f] = null
        }

        function o(e, n, r) {
            if (r === t && e.nodeType === 1) {
                var i = "data-" + n.replace(xt, "-$1").toLowerCase();
                r = e.getAttribute(i);
                if (typeof r == "string") {
                    try {
                        r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : St.test(r) ? ut.parseJSON(r) : r
                    } catch (s) {}
                    ut.data(e, n, r)
                } else r = t
            }
            return r
        }

        function u(e) {
            var t;
            for (t in e) {
                if (t === "data" && ut.isEmptyObject(e[t])) continue;
                if (t !== "toJSON") return !1
            }
            return !0
        }

        function a() {
            return !0
        }

        function f() {
            return !1
        }

        function l(e, t) {
            do e = e[t]; while (e && e.nodeType !== 1);
            return e
        }

        function c(e, t, n) {
            t = t || 0;
            if (ut.isFunction(t)) return ut.grep(e, function (e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            });
            if (t.nodeType) return ut.grep(e, function (e) {
                return e === t === n
            });
            if (typeof t == "string") {
                var r = ut.grep(e, function (e) {
                    return e.nodeType === 1
                });
                if (Rt.test(t)) return ut.filter(t, r, !n);
                t = ut.filter(t, r)
            }
            return ut.grep(e, function (e) {
                return ut.inArray(e, t) >= 0 === n
            })
        }

        function h(e) {
            var t = Wt.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                while (t.length) n.createElement(t.pop());
            return n
        }

        function p(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }

        function d(e) {
            var t = e.getAttributeNode("type");
            return e.type = (t && t.specified) + "/" + e.type, e
        }

        function v(e) {
            var t = nn.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function m(e, t) {
            var n, r = 0;
            for (;
                (n = e[r]) != null; r++) ut._data(n, "globalEval", !t || ut._data(t[r], "globalEval"))
        }

        function g(e, t) {
            if (t.nodeType !== 1 || !ut.hasData(e)) return;
            var n, r, i, s = ut._data(e),
                o = ut._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; r < i; r++) ut.event.add(t, n, u[n][r])
            }
            o.data && (o.data = ut.extend({}, o.data))
        }

        function y(e, t) {
            var n, r, i;
            if (t.nodeType !== 1) return;
            n = t.nodeName.toLowerCase();
            if (!ut.support.noCloneEvent && t[ut.expando]) {
                r = ut._data(t);
                for (i in r.events) ut.removeEvent(t, i, r.handle);
                t.removeAttribute(ut.expando)
            }
            if (n === "script" && t.text !== e.text) d(t).text = e.text, v(t);
            else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
            else if (n === "input" && Zt.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
            else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
            else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
        }

        function b(e, n) {
            var r, i, s = 0,
                o = typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll(n || "*") : t;
            if (!o)
                for (o = [], r = e.childNodes || e;
                    (i = r[s]) != null; s++) !n || ut.nodeName(i, n) ? o.push(i) : ut.merge(o, b(i, n));
            return n === t || n && ut.nodeName(e, n) ? ut.merge([e], o) : o
        }

        function w(e) {
            Zt.test(e.type) && (e.defaultChecked = e.checked)
        }

        function E(e, t) {
            if (t in e) return t;
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                r = t,
                i = xn.length;
            while (i--) {
                t = xn[i] + n;
                if (t in e) return t
            }
            return r
        }

        function S(e, t) {
            return e = t || e, ut.css(e, "display") === "none" || !ut.contains(e.ownerDocument, e)
        }

        function x(e, t) {
            var n, r = [],
                i = 0,
                s = e.length;
            for (; i < s; i++) {
                n = e[i];
                if (!n.style) continue;
                r[i] = ut._data(n, "olddisplay"), t ? (!r[i] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && S(n) && (r[i] = ut._data(n, "olddisplay", k(n.nodeName)))) : !r[i] && !S(n) && ut._data(n, "olddisplay", ut.css(n, "display"))
            }
            for (i = 0; i < s; i++) {
                n = e[i];
                if (!n.style) continue;
                if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? r[i] || "" : "none"
            }
            return e
        }

        function T(e, t, n) {
            var r = mn.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function N(e, t, n, r, i) {
            var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
                o = 0;
            for (; s < 4; s += 2) n === "margin" && (o += ut.css(e, n + Sn[s], !0, i)), r ? (n === "content" && (o -= ut.css(e, "padding" + Sn[s], !0, i)), n !== "margin" && (o -= ut.css(e, "border" + Sn[s] + "Width", !0, i))) : (o += ut.css(e, "padding" + Sn[s], !0, i), n !== "padding" && (o += ut.css(e, "border" + Sn[s] + "Width", !0, i)));
            return o
        }

        function C(e, t, n) {
            var r = !0,
                i = t === "width" ? e.offsetWidth : e.offsetHeight,
                s = fn(e),
                o = ut.support.boxSizing && ut.css(e, "boxSizing", !1, s) === "border-box";
            if (i <= 0 || i == null) {
                i = an(e, t, s);
                if (i < 0 || i == null) i = e.style[t];
                if (gn.test(i)) return i;
                r = o && (ut.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + N(e, t, n || (o ? "border" : "content"), r, s) + "px"
        }

        function k(e) {
            var t = $,
                n = bn[e];
            if (!n) {
                n = L(e, t);
                if (n === "none" || !n) ln = (ln || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ln[0].contentWindow || ln[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = L(e, t), ln.detach();
                bn[e] = n
            }
            return n
        }

        function L(e, t) {
            var n = ut(t.createElement(e)).appendTo(t.body),
                r = ut.css(n[0], "display");
            return n.remove(), r
        }

        function A(e, t, n, r) {
            var i;
            if (ut.isArray(t)) ut.each(t, function (t, i) {
                n || Nn.test(e) ? r(e, i) : A(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
            });
            else if (!n && ut.type(t) === "object")
                for (i in t) A(e + "[" + i + "]", t[i], n, r);
            else r(e, t)
        }

        function O(e) {
            return function (t, n) {
                typeof t != "string" && (n = t, t = "*");
                var r, i = 0,
                    s = t.toLowerCase().match(ft) || [];
                if (ut.isFunction(n))
                    while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function M(e, t, n, r) {
            function i(u) {
                var a;
                return s[u] = !0, ut.each(e[u] || [], function (e, u) {
                    var f = u(t, n, r);
                    if (typeof f == "string" && !o && !s[f]) return t.dataTypes.unshift(f), i(f), !1;
                    if (o) return !(a = f)
                }), a
            }
            var s = {},
                o = e === Un;
            return i(t.dataTypes[0]) || !s["*"] && i("*")
        }

        function _(e, n) {
            var r, i, s = ut.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
            return i && ut.extend(!0, e, i), e
        }

        function D(e, n, r) {
            var i, s, o, u, a = e.contents,
                f = e.dataTypes,
                l = e.responseFields;
            for (s in l) s in r && (n[l[s]] = r[s]);
            while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
            if (i)
                for (s in a)
                    if (a[s] && a[s].test(i)) {
                        f.unshift(s);
                        break
                    }
            if (f[0] in r) o = f[0];
            else {
                for (s in r) {
                    if (!f[0] || e.converters[s + " " + f[0]]) {
                        o = s;
                        break
                    }
                    u || (u = s)
                }
                o = o || u
            }
            if (o) return o !== f[0] && f.unshift(o), r[o]
        }

        function P(e, t) {
            var n, r, i, s, o = {},
                u = 0,
                a = e.dataTypes.slice(),
                f = a[0];
            e.dataFilter && (t = e.dataFilter(t, e.dataType));
            if (a[1])
                for (n in e.converters) o[n.toLowerCase()] = e.converters[n];
            for (; i = a[++u];)
                if (i !== "*") {
                    if (f !== "*" && f !== i) {
                        n = o[f + " " + i] || o["* " + i];
                        if (!n)
                            for (r in o) {
                                s = r.split(" ");
                                if (s[1] === i) {
                                    n = o[f + " " + s[0]] || o["* " + s[0]];
                                    if (n) {
                                        n === !0 ? n = o[r] : o[r] !== !0 && (i = s[0], a.splice(u--, 0, i));
                                        break
                                    }
                                }
                            }
                        if (n !== !0)
                            if (n && e["throws"]) t = n(t);
                            else try {
                                t = n(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: n ? l : "No conversion from " + f + " to " + i
                                }
                            }
                    }
                    f = i
                }
            return {
                state: "success",
                data: t
            }
        }

        function H() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function B() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function j() {
            return setTimeout(function () {
                Gn = t
            }), Gn = ut.now()
        }

        function F(e, t) {
            ut.each(t, function (t, n) {
                var r = (rr[t] || []).concat(rr["*"]),
                    i = 0,
                    s = r.length;
                for (; i < s; i++)
                    if (r[i].call(e, t, n)) return
            })
        }

        function I(e, t, n) {
            var r, i, s = 0,
                o = nr.length,
                u = ut.Deferred().always(function () {
                    delete a.elem
                }),
                a = function () {
                    if (i) return !1;
                    var t = Gn || j(),
                        n = Math.max(0, f.startTime + f.duration - t),
                        r = n / f.duration || 0,
                        s = 1 - r,
                        o = 0,
                        a = f.tweens.length;
                    for (; o < a; o++) f.tweens[o].run(s);
                    return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
                },
                f = u.promise({
                    elem: e,
                    props: ut.extend({}, t),
                    opts: ut.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Gn || j(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = ut.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                        return f.tweens.push(r), r
                    },
                    stop: function (t) {
                        var n = 0,
                            r = t ? f.tweens.length : 0;
                        if (i) return this;
                        i = !0;
                        for (; n < r; n++) f.tweens[n].run(1);
                        return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                    }
                }),
                l = f.props;
            q(l, f.opts.specialEasing);
            for (; s < o; s++) {
                r = nr[s].call(f, e, l, f.opts);
                if (r) return r
            }
            return F(f, l), ut.isFunction(f.opts.start) && f.opts.start.call(e, f), ut.fx.timer(ut.extend(a, {
                elem: e,
                anim: f,
                queue: f.opts.queue
            })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
        }

        function q(e, t) {
            var n, r, i, s, o;
            for (n in e) {
                r = ut.camelCase(n), i = t[r], s = e[n], ut.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = ut.cssHooks[r];
                if (o && "expand" in o) {
                    s = o.expand(s), delete e[r];
                    for (n in s) n in e || (e[n] = s[n], t[n] = i)
                } else t[r] = i
            }
        }

        function R(e, t, n) {
            var r, i, s, o, u, a, f, l, c, h = this,
                p = e.style,
                d = {},
                v = [],
                m = e.nodeType && S(e);
            n.queue || (l = ut._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
                l.unqueued || c()
            }), l.unqueued++, h.always(function () {
                h.always(function () {
                    l.unqueued--, ut.queue(e, "fx").length || l.empty.fire()
                })
            })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], ut.css(e, "display") === "inline" && ut.css(e, "float") === "none" && (!ut.support.inlineBlockNeedsLayout || k(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", ut.support.shrinkWrapBlocks || h.done(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (r in t) {
                s = t[r];
                if (Zn.exec(s)) {
                    delete t[r], a = a || s === "toggle";
                    if (s === (m ? "hide" : "show")) continue;
                    v.push(r)
                }
            }
            o = v.length;
            if (o) {
                u = ut._data(e, "fxshow") || ut._data(e, "fxshow", {}), "hidden" in u && (m = u.hidden), a && (u.hidden = !m), m ? ut(e).show() : h.done(function () {
                    ut(e).hide()
                }), h.done(function () {
                    var t;
                    ut._removeData(e, "fxshow");
                    for (t in d) ut.style(e, t, d[t])
                });
                for (r = 0; r < o; r++) i = v[r], f = h.createTween(i, m ? u[i] : 0), d[i] = u[i] || ut.style(e, i), i in u || (u[i] = f.start, m && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
            }
        }

        function U(e, t, n, r, i) {
            return new U.prototype.init(e, t, n, r, i)
        }

        function z(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            t = t ? 1 : 0;
            for (; i < 4; i += 2 - t) n = Sn[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function W(e) {
            return ut.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
        }
        var X, V, $ = e.document,
            J = e.location,
            K = e.jQuery,
            Q = e.$,
            G = {},
            Y = [],
            Z = "1.9.0",
            et = Y.concat,
            tt = Y.push,
            nt = Y.slice,
            rt = Y.indexOf,
            it = G.toString,
            st = G.hasOwnProperty,
            ot = Z.trim,
            ut = function (e, t) {
                return new ut.fn.init(e, t, X)
            },
            at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ft = /\S+/g,
            lt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ct = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            pt = /^[\],:{}\s]*$/,
            dt = /(?:^|:|,)(?:\s*\[)+/g,
            vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            mt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            gt = /^-ms-/,
            yt = /-([\da-z])/gi,
            bt = function (e, t) {
                return t.toUpperCase()
            },
            wt = function () {
                $.addEventListener ? ($.removeEventListener("DOMContentLoaded", wt, !1), ut.ready()) : $.readyState === "complete" && ($.detachEvent("onreadystatechange", wt), ut.ready())
            };
        ut.fn = ut.prototype = {
            jquery: Z,
            constructor: ut,
            init: function (e, n, r) {
                var i, s;
                if (!e) return this;
                if (typeof e == "string") {
                    e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = ct.exec(e);
                    if (i && (i[1] || !n)) {
                        if (i[1]) {
                            n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : $, !0));
                            if (ht.test(i[1]) && ut.isPlainObject(n))
                                for (i in n) ut.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                            return this
                        }
                        s = $.getElementById(i[2]);
                        if (s && s.parentNode) {
                            if (s.id !== i[2]) return r.find(e);
                            this.length = 1, this[0] = s
                        }
                        return this.context = $, this.selector = e, this
                    }
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
            },
            selector: "",
            length: 0,
            size: function () {
                return this.length
            },
            toArray: function () {
                return nt.call(this)
            },
            get: function (e) {
                return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            },
            pushStack: function (e) {
                var t = ut.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function (e, t) {
                return ut.each(this, e, t)
            },
            ready: function (e) {
                return ut.ready.promise().done(e), this
            },
            slice: function () {
                return this.pushStack(nt.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            map: function (e) {
                return this.pushStack(ut.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: tt,
            sort: [].sort,
            splice: [].splice
        }, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function () {
            var e, n, r, i, s, o, u = arguments[0] || {},
                a = 1,
                f = arguments.length,
                l = !1;
            typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !ut.isFunction(u) && (u = {}), f === a && (u = this, --a);
            for (; a < f; a++)
                if ((e = arguments[a]) != null)
                    for (n in e) {
                        r = u[n], i = e[n];
                        if (u === i) continue;
                        l && i && (ut.isPlainObject(i) || (s = ut.isArray(i))) ? (s ? (s = !1, o = r && ut.isArray(r) ? r : []) : o = r && ut.isPlainObject(r) ? r : {}, u[n] = ut.extend(l, o, i)) : i !== t && (u[n] = i)
                    }
            return u
        }, ut.extend({
            noConflict: function (t) {
                return e.$ === ut && (e.$ = Q), t && e.jQuery === ut && (e.jQuery = K), ut
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? ut.readyWait++ : ut.ready(!0)
            },
            ready: function (e) {
                if (e === !0 ? --ut.readyWait : ut.isReady) return;
                if (!$.body) return setTimeout(ut.ready);
                ut.isReady = !0;
                if (e !== !0 && --ut.readyWait > 0) return;
                V.resolveWith($, [ut]), ut.fn.trigger && ut($).trigger("ready").off("ready")
            },
            isFunction: function (e) {
                return ut.type(e) === "function"
            },
            isArray: Array.isArray || function (e) {
                return ut.type(e) === "array"
            },
            isWindow: function (e) {
                return e != null && e == e.window
            },
            isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function (e) {
                return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? G[it.call(e)] || "object" : typeof e
            },
            isPlainObject: function (e) {
                if (!e || ut.type(e) !== "object" || e.nodeType || ut.isWindow(e)) return !1;
                try {
                    if (e.constructor && !st.call(e, "constructor") && !st.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                var r;
                for (r in e);
                return r === t || st.call(e, r)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function (e) {
                throw new Error(e)
            },
            parseHTML: function (e, t, n) {
                if (!e || typeof e != "string") return null;
                typeof t == "boolean" && (n = t, t = !1), t = t || $;
                var r = ht.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = ut.buildFragment([e], t, i), i && ut(i).remove(), ut.merge([], r.childNodes))
            },
            parseJSON: function (t) {
                if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
                if (t === null) return t;
                if (typeof t == "string") {
                    t = ut.trim(t);
                    if (t && pt.test(t.replace(vt, "@").replace(mt, "]").replace(dt, ""))) return (new Function("return " + t))()
                }
                ut.error("Invalid JSON: " + t)
            },
            parseXML: function (n) {
                var r, i;
                if (!n || typeof n != "string") return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (s) {
                    r = t
                }
                return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && ut.error("Invalid XML: " + n), r
            },
            noop: function () {},
            globalEval: function (t) {
                t && ut.trim(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function (e) {
                return e.replace(gt, "ms-").replace(yt, bt)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t, r) {
                var i, s = 0,
                    o = e.length,
                    u = n(e);
                if (r)
                    if (u)
                        for (; s < o; s++) {
                            i = t.apply(e[s], r);
                            if (i === !1) break
                        } else
                            for (s in e) {
                                i = t.apply(e[s], r);
                                if (i === !1) break
                            } else if (u)
                                for (; s < o; s++) {
                                    i = t.call(e[s], s, e[s]);
                                    if (i === !1) break
                                } else
                                    for (s in e) {
                                        i = t.call(e[s], s, e[s]);
                                        if (i === !1) break
                                    }
                return e
            },
            trim: ot && !ot.call("﻿ ") ? function (e) {
                return e == null ? "" : ot.call(e)
            } : function (e) {
                return e == null ? "" : (e + "").replace(lt, "")
            },
            makeArray: function (e, t) {
                var r = t || [];
                return e != null && (n(Object(e)) ? ut.merge(r, typeof e == "string" ? [e] : e) : tt.call(r, e)), r
            },
            inArray: function (e, t, n) {
                var r;
                if (t) {
                    if (rt) return rt.call(t, e, n);
                    r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                    for (; n < r; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function (e, n) {
                var r = n.length,
                    i = e.length,
                    s = 0;
                if (typeof r == "number")
                    for (; s < r; s++) e[i++] = n[s];
                else
                    while (n[s] !== t) e[i++] = n[s++];
                return e.length = i, e
            },
            grep: function (e, t, n) {
                var r, i = [],
                    s = 0,
                    o = e.length;
                n = !!n;
                for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
                return i
            },
            map: function (e, t, r) {
                var i, s = 0,
                    o = e.length,
                    u = n(e),
                    a = [];
                if (u)
                    for (; s < o; s++) i = t(e[s], s, r), i != null && (a[a.length] = i);
                else
                    for (s in e) i = t(e[s], s, r), i != null && (a[a.length] = i);
                return et.apply([], a)
            },
            guid: 1,
            proxy: function (e, n) {
                var r, i, s;
                return typeof n == "string" && (r = e[n], n = e, e = r), ut.isFunction(e) ? (i = nt.call(arguments, 2), s = function () {
                    return e.apply(n || this, i.concat(nt.call(arguments)))
                }, s.guid = e.guid = e.guid || ut.guid++, s) : t
            },
            access: function (e, n, r, i, s, o, u) {
                var a = 0,
                    f = e.length,
                    l = r == null;
                if (ut.type(r) === "object") {
                    s = !0;
                    for (a in r) ut.access(e, n, a, r[a], !0, o, u)
                } else if (i !== t) {
                    s = !0, ut.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function (e, t, n) {
                        return l.call(ut(e), n)
                    }));
                    if (n)
                        for (; a < f; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
                }
                return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
            },
            now: function () {
                return (new Date).getTime()
            }
        }), ut.ready.promise = function (t) {
            if (!V) {
                V = ut.Deferred();
                if ($.readyState === "complete") setTimeout(ut.ready);
                else if ($.addEventListener) $.addEventListener("DOMContentLoaded", wt, !1), e.addEventListener("load", ut.ready, !1);
                else {
                    $.attachEvent("onreadystatechange", wt), e.attachEvent("onload", ut.ready);
                    var n = !1;
                    try {
                        n = e.frameElement == null && $.documentElement
                    } catch (r) {}
                    n && n.doScroll && function i() {
                        if (!ut.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(i, 50)
                            }
                            ut.ready()
                        }
                    }()
                }
            }
            return V.promise(t)
        }, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            G["[object " + t + "]"] = t.toLowerCase()
        }), X = ut($);
        var Et = {};
        ut.Callbacks = function (e) {
            e = typeof e == "string" ? Et[e] || r(e) : ut.extend({}, e);
            var n, i, s, o, u, a, f = [],
                l = !e.once && [],
                c = function (t) {
                    n = e.memory && t, i = !0, a = o || 0, o = 0, u = f.length, s = !0;
                    for (; f && a < u; a++)
                        if (f[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    s = !1, f && (l ? l.length && c(l.shift()) : n ? f = [] : h.disable())
                },
                h = {
                    add: function () {
                        if (f) {
                            var t = f.length;
                            (function r(t) {
                                ut.each(t, function (t, n) {
                                    var i = ut.type(n);
                                    i === "function" ? (!e.unique || !h.has(n)) && f.push(n) : n && n.length && i !== "string" && r(n)
                                })
                            })(arguments), s ? u = f.length : n && (o = t, c(n))
                        }
                        return this
                    },
                    remove: function () {
                        return f && ut.each(arguments, function (e, t) {
                            var n;
                            while ((n = ut.inArray(t, f, n)) > -1) f.splice(n, 1), s && (n <= u && u--, n <= a && a--)
                        }), this
                    },
                    has: function (e) {
                        return ut.inArray(e, f) > -1
                    },
                    empty: function () {
                        return f = [], this
                    },
                    disable: function () {
                        return f = l = n = t, this
                    },
                    disabled: function () {
                        return !f
                    },
                    lock: function () {
                        return l = t, n || h.disable(), this
                    },
                    locked: function () {
                        return !l
                    },
                    fireWith: function (e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], f && (!i || l) && (s ? l.push(t) : c(t)), this
                    },
                    fire: function () {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return h
        }, ut.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", ut.Callbacks("once memory"), "resolved"], ["reject", "fail", ut.Callbacks("once memory"), "rejected"], ["notify", "progress", ut.Callbacks("memory")]],
                    n = "pending",
                    r = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var e = arguments;
                            return ut.Deferred(function (n) {
                                ut.each(t, function (t, s) {
                                    var o = s[0],
                                        u = ut.isFunction(e[t]) && e[t];
                                    i[s[1]](function () {
                                        var e = u && u.apply(this, arguments);
                                        e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function (e) {
                            return e != null ? ut.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, ut.each(t, function (e, s) {
                    var o = s[2],
                        u = s[3];
                    r[s[1]] = o.add, u && o.add(function () {
                        n = u
                    }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function () {
                        return i[s[0] + "With"](this === i ? r : this, arguments), this
                    }, i[s[0] + "With"] = o.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function (e) {
                var t = 0,
                    n = nt.call(arguments),
                    r = n.length,
                    i = r !== 1 || e && ut.isFunction(e.promise) ? r : 0,
                    s = i === 1 ? e : ut.Deferred(),
                    o = function (e, t, n) {
                        return function (r) {
                            t[e] = this, n[e] = arguments.length > 1 ? nt.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                        }
                    },
                    u, a, f;
                if (r > 1) {
                    u = new Array(r), a = new Array(r), f = new Array(r);
                    for (; t < r; t++) n[t] && ut.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
                }
                return i || s.resolveWith(f, n), s.promise()
            }
        }), ut.support = function () {
            var t, n, r, i, s, o, u, a, f, l, c = $.createElement("div");
            c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = c.getElementsByTagName("*"), r = c.getElementsByTagName("a")[0];
            if (!n || !r || !n.length) return {};
            i = $.createElement("select"), s = i.appendChild($.createElement("option")), o = c.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
                getSetAttribute: c.className !== "t",
                leadingWhitespace: c.firstChild.nodeType === 3,
                tbody: !c.getElementsByTagName("tbody").length,
                htmlSerialize: !!c.getElementsByTagName("link").length,
                style: /top/.test(r.getAttribute("style")),
                hrefNormalized: r.getAttribute("href") === "/a",
                opacity: /^0.5/.test(r.style.opacity),
                cssFloat: !!r.style.cssFloat,
                checkOn: !!o.value,
                optSelected: s.selected,
                enctype: !!$.createElement("form").enctype,
                html5Clone: $.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                boxModel: $.compatMode === "CSS1Compat",
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled;
            try {
                delete c.test
            } catch (h) {
                t.deleteExpando = !1
            }
            o = $.createElement("input"), o.setAttribute("value", ""), t.input = o.getAttribute("value") === "", o.value = "t", o.setAttribute("type", "radio"), t.radioValue = o.value === "t", o.setAttribute("checked", "t"), o.setAttribute("name", "t"), u = $.createDocumentFragment(), u.appendChild(o), t.appendChecked = o.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, c.attachEvent && (c.attachEvent("onclick", function () {
                t.noCloneEvent = !1
            }), c.cloneNode(!0).click());
            for (l in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) c.setAttribute(a = "on" + l, "t"), t[l + "Bubbles"] = a in e || c.attributes[a].expando === !1;
            return c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = c.style.backgroundClip === "content-box", ut(function () {
                var n, r, i, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    o = $.getElementsByTagName("body")[0];
                if (!o) return;
                n = $.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(n).appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = c.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", f = i[0].offsetHeight === 0, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = f && i[0].offsetHeight === 0, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = c.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = o.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(c, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(c, null) || {
                    width: "4px"
                }).width === "4px", r = c.appendChild($.createElement("div")), r.style.cssText = c.style.cssText = s, r.style.marginRight = r.style.width = "0", c.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof c.style.zoom != "undefined" && (c.innerHTML = "", c.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = c.offsetWidth === 3, c.style.display = "block", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", t.shrinkWrapBlocks = c.offsetWidth !== 3, o.style.zoom = 1), o.removeChild(n), n = c = i = r = null
            }), n = i = u = s = r = o = null, t
        }();
        var St = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            xt = /([A-Z])/g;
        ut.extend({
            cache: {},
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function (e) {
                return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando], !!e && !u(e)
            },
            data: function (e, t, n) {
                return i(e, t, n, !1)
            },
            removeData: function (e, t) {
                return s(e, t, !1)
            },
            _data: function (e, t, n) {
                return i(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return s(e, t, !0)
            },
            acceptData: function (e) {
                var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), ut.fn.extend({
            data: function (e, n) {
                var r, i, s = this[0],
                    u = 0,
                    a = null;
                if (e === t) {
                    if (this.length) {
                        a = ut.data(s);
                        if (s.nodeType === 1 && !ut._data(s, "parsedAttrs")) {
                            r = s.attributes;
                            for (; u < r.length; u++) i = r[u].name, i.indexOf("data-") || (i = ut.camelCase(i.substring(5)), o(s, i, a[i]));
                            ut._data(s, "parsedAttrs", !0)
                        }
                    }
                    return a
                }
                return typeof e == "object" ? this.each(function () {
                    ut.data(this, e)
                }) : ut.access(this, function (n) {
                    if (n === t) return s ? o(s, e, ut.data(s, e)) : null;
                    this.each(function () {
                        ut.data(this, e, n)
                    })
                }, null, n, arguments.length > 1, null, !0)
            },
            removeData: function (e) {
                return this.each(function () {
                    ut.removeData(this, e)
                })
            }
        }), ut.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = ut._data(e, t), n && (!r || ut.isArray(n) ? r = ut._data(e, t, ut.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = ut.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    s = ut._queueHooks(e, t),
                    o = function () {
                        ut.dequeue(e, t)
                    };
                i === "inprogress" && (i = n.shift(), r--), s.cur = i, i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return ut._data(e, n) || ut._data(e, n, {
                    empty: ut.Callbacks("once memory").add(function () {
                        ut._removeData(e, t + "queue"), ut._removeData(e, n)
                    })
                })
            }
        }), ut.fn.extend({
            queue: function (e, n) {
                var r = 2;
                return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? ut.queue(this[0], e) : n === t ? this : this.each(function () {
                    var t = ut.queue(this, e, n);
                    ut._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && ut.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    ut.dequeue(this, e)
                })
            },
            delay: function (e, t) {
                return e = ut.fx ? ut.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, n) {
                var r, i = 1,
                    s = ut.Deferred(),
                    o = this,
                    u = this.length,
                    a = function () {
                        --i || s.resolveWith(o, [o])
                    };
                typeof e != "string" && (n = e, e = t), e = e || "fx";
                while (u--) r = ut._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
                return a(), s.promise(n)
            }
        });
        var Tt, Nt, Ct = /[\t\r\n]/g,
            kt = /\r/g,
            Lt = /^(?:input|select|textarea|button|object)$/i,
            At = /^(?:a|area)$/i,
            Ot = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            Mt = /^(?:checked|selected)$/i,
            _t = ut.support.getSetAttribute,
            Dt = ut.support.input;
        ut.fn.extend({
            attr: function (e, t) {
                return ut.access(this, ut.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    ut.removeAttr(this, e)
                })
            },
            prop: function (e, t) {
                return ut.access(this, ut.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return e = ut.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function (e) {
                var t, n, r, i, s, o = 0,
                    u = this.length,
                    a = typeof e == "string" && e;
                if (ut.isFunction(e)) return this.each(function (t) {
                    ut(this).addClass(e.call(this, t, this.className))
                });
                if (a) {
                    t = (e || "").match(ft) || [];
                    for (; o < u; o++) {
                        n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Ct, " ") : " ");
                        if (r) {
                            s = 0;
                            while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            n.className = ut.trim(r)
                        }
                    }
                }
                return this
            },
            removeClass: function (e) {
                var t, n, r, i, s, o = 0,
                    u = this.length,
                    a = arguments.length === 0 || typeof e == "string" && e;
                if (ut.isFunction(e)) return this.each(function (t) {
                    ut(this).removeClass(e.call(this, t, this.className))
                });
                if (a) {
                    t = (e || "").match(ft) || [];
                    for (; o < u; o++) {
                        n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Ct, " ") : "");
                        if (r) {
                            s = 0;
                            while (i = t[s++])
                                while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                            n.className = e ? ut.trim(r) : ""
                        }
                    }
                }
                return this
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    r = typeof t == "boolean";
                return ut.isFunction(e) ? this.each(function (n) {
                    ut(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function () {
                    if (n === "string") {
                        var i, s = 0,
                            o = ut(this),
                            u = t,
                            a = e.match(ft) || [];
                        while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                    } else if (n === "undefined" || n === "boolean") this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ut._data(this, "__className__") || ""
                })
            },
            hasClass: function (e) {
                var t = " " + e + " ",
                    n = 0,
                    r = this.length;
                for (; n < r; n++)
                    if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(Ct, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function (e) {
                var n, r, i, s = this[0];
                if (!arguments.length) {
                    if (s) return n = ut.valHooks[s.type] || ut.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(kt, "") : r == null ? "" : r);
                    return
                }
                return i = ut.isFunction(e), this.each(function (r) {
                    var s, o = ut(this);
                    if (this.nodeType !== 1) return;
                    i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : ut.isArray(s) && (s = ut.map(s, function (e) {
                        return e == null ? "" : e + ""
                    })), n = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()];
                    if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
                })
            }
        }), ut.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function (e) {
                        var t, n, r = e.options,
                            i = e.selectedIndex,
                            s = e.type === "select-one" || i < 0,
                            o = s ? null : [],
                            u = s ? i + 1 : r.length,
                            a = i < 0 ? u : s ? i : 0;
                        for (; a < u; a++) {
                            n = r[a];
                            if ((n.selected || a === i) && (ut.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !ut.nodeName(n.parentNode, "optgroup"))) {
                                t = ut(n).val();
                                if (s) return t;
                                o.push(t)
                            }
                        }
                        return o
                    },
                    set: function (e, t) {
                        var n = ut.makeArray(t);
                        return ut(e).find("option").each(function () {
                            this.selected = ut.inArray(ut(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attr: function (e, n, r) {
                var i, s, o, u = e.nodeType;
                if (!e || u === 3 || u === 8 || u === 2) return;
                if (typeof e.getAttribute == "undefined") return ut.prop(e, n, r);
                o = u !== 1 || !ut.isXMLDoc(e), o && (n = n.toLowerCase(), s = ut.attrHooks[n] || (Ot.test(n) ? Nt : Tt));
                if (r === t) return s && o && "get" in s && (i = s.get(e, n)) !== null ? i : (typeof e.getAttribute != "undefined" && (i = e.getAttribute(n)), i == null ? t : i);
                if (r !== null) return s && o && "set" in s && (i = s.set(e, r, n)) !== t ? i : (e.setAttribute(n, r + ""), r);
                ut.removeAttr(e, n)
            },
            removeAttr: function (e, t) {
                var n, r, i = 0,
                    s = t && t.match(ft);
                if (s && e.nodeType === 1)
                    while (n = s[i++]) r = ut.propFix[n] || n, Ot.test(n) ? !_t && Mt.test(n) ? e[ut.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : ut.attr(e, n, ""), e.removeAttribute(_t ? n : r)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!ut.support.radioValue && t === "radio" && ut.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function (e, n, r) {
                var i, s, o, u = e.nodeType;
                if (!e || u === 3 || u === 8 || u === 2) return;
                return o = u !== 1 || !ut.isXMLDoc(e), o && (n = ut.propFix[n] || n, s = ut.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : Lt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }), Nt = {
            get: function (e, n) {
                var r = ut.prop(e, n),
                    i = typeof r == "boolean" && e.getAttribute(n),
                    s = typeof r == "boolean" ? Dt && _t ? i != null : Mt.test(n) ? e[ut.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
                return s && s.value !== !1 ? n.toLowerCase() : t
            },
            set: function (e, t, n) {
                return t === !1 ? ut.removeAttr(e, n) : Dt && _t || !Mt.test(n) ? e.setAttribute(!_t && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0, n
            }
        };
        if (!Dt || !_t) ut.attrHooks.value = {
            get: function (e, n) {
                var r = e.getAttributeNode(n);
                return ut.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
            },
            set: function (e, t, n) {
                if (!ut.nodeName(e, "input")) return Tt && Tt.set(e, t, n);
                e.defaultValue = t
            }
        };
        _t || (Tt = ut.valHooks.button = {
            get: function (e, n) {
                var r = e.getAttributeNode(n);
                return r && (n === "id" || n === "name" || n === "coords" ? r.value !== "" : r.specified) ? r.value : t
            },
            set: function (e, n, r) {
                var i = e.getAttributeNode(r);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
            }
        }, ut.attrHooks.contenteditable = {
            get: Tt.get,
            set: function (e, t, n) {
                Tt.set(e, t === "" ? !1 : t, n)
            }
        }, ut.each(["width", "height"], function (e, t) {
            ut.attrHooks[t] = ut.extend(ut.attrHooks[t], {
                set: function (e, n) {
                    if (n === "") return e.setAttribute(t, "auto"), n
                }
            })
        })), ut.support.hrefNormalized || (ut.each(["href", "src", "width", "height"], function (e, n) {
            ut.attrHooks[n] = ut.extend(ut.attrHooks[n], {
                get: function (e) {
                    var r = e.getAttribute(n, 2);
                    return r == null ? t : r
                }
            })
        }), ut.each(["href", "src"], function (e, t) {
            ut.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        })), ut.support.style || (ut.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || t
            },
            set: function (e, t) {
                return e.style.cssText = t + ""
            }
        }), ut.support.optSelected || (ut.propHooks.selected = ut.extend(ut.propHooks.selected, {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.support.checkOn || ut.each(["radio", "checkbox"], function () {
            ut.valHooks[this] = {
                get: function (e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        }), ut.each(["radio", "checkbox"], function () {
            ut.valHooks[this] = ut.extend(ut.valHooks[this], {
                set: function (e, t) {
                    if (ut.isArray(t)) return e.checked = ut.inArray(ut(e).val(), t) >= 0
                }
            })
        });
        var Pt = /^(?:input|select|textarea)$/i,
            Ht = /^key/,
            Bt = /^(?:mouse|contextmenu)|click/,
            jt = /^(?:focusinfocus|focusoutblur)$/,
            Ft = /^([^.]*)(?:\.(.+)|)$/;
        ut.event = {
                global: {},
                add: function (e, n, r, i, s) {
                    var o, u, a, f, l, c, h, p, d, v, m, g = e.nodeType !== 3 && e.nodeType !== 8 && ut._data(e);
                    if (!g) return;
                    r.handler && (o = r, r = o.handler, s = o.selector), r.guid || (r.guid = ut.guid++), (f = g.events) || (f = g.events = {}), (u = g.handle) || (u = g.handle = function (e) {
                        return typeof ut == "undefined" || !!e && ut.event.triggered === e.type ? t : ut.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = e), n = (n || "").match(ft) || [""], l = n.length;
                    while (l--) {
                        a = Ft.exec(n[l]) || [], d = m = a[1], v = (a[2] || "").split(".").sort(), h = ut.event.special[d] || {}, d = (s ? h.delegateType : h.bindType) || d, h = ut.event.special[d] || {}, c = ut.extend({
                            type: d,
                            origType: m,
                            data: i,
                            handler: r,
                            guid: r.guid,
                            selector: s,
                            needsContext: s && ut.expr.match.needsContext.test(s),
                            namespace: v.join(".")
                        }, o);
                        if (!(p = f[d])) {
                            p = f[d] = [], p.delegateCount = 0;
                            if (!h.setup || h.setup.call(e, i, v, u) === !1) e.addEventListener ? e.addEventListener(d, u, !1) : e.attachEvent && e.attachEvent("on" + d, u)
                        }
                        h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = r.guid)), s ? p.splice(p.delegateCount++, 0, c) : p.push(c), ut.event.global[d] = !0
                    }
                    e = null
                },
                remove: function (e, t, n, r, i) {
                    var s, o, u, a, f, l, c, h, p, d, v, m = ut.hasData(e) && ut._data(e);
                    if (!m || !(a = m.events)) return;
                    t = (t || "").match(ft) || [""], f = t.length;
                    while (f--) {
                        u = Ft.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                        if (!p) {
                            for (p in a) ut.event.remove(e, p + t[f], n, r, !0);
                            continue
                        }
                        c = ut.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = a[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length;
                        while (s--) l = h[s], (i || v === l.origType) && (!n || n.guid === l.guid) && (!u || u.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector) && (h.splice(s, 1), l.selector && h.delegateCount--, c.remove && c.remove.call(e, l));
                        o && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && ut.removeEvent(e, p, m.handle), delete a[p])
                    }
                    ut.isEmptyObject(a) && (delete m.handle, ut._removeData(e, "events"))
                },
                trigger: function (n, r, i, s) {
                    var o, u, a, f, l, c, h, p = [i || $],
                        d = n.type || n,
                        v = n.namespace ? n.namespace.split(".") : [];
                    u = a = i = i || $;
                    if (i.nodeType === 3 || i.nodeType === 8) return;
                    if (jt.test(d + ut.event.triggered)) return;
                    d.indexOf(".") >= 0 && (v = d.split("."), d = v.shift(), v.sort()), l = d.indexOf(":") < 0 && "on" + d, n = n[ut.expando] ? n : new ut.Event(d, typeof n == "object" && n), n.isTrigger = !0, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = r == null ? [n] : ut.makeArray(r, [n]), h = ut.event.special[d] || {};
                    if (!s && h.trigger && h.trigger.apply(i, r) === !1) return;
                    if (!s && !h.noBubble && !ut.isWindow(i)) {
                        f = h.delegateType || d, jt.test(f + d) || (u = u.parentNode);
                        for (; u; u = u.parentNode) p.push(u), a = u;
                        a === (i.ownerDocument || $) && p.push(a.defaultView || a.parentWindow || e)
                    }
                    o = 0;
                    while ((u = p[o++]) && !n.isPropagationStopped()) n.type = o > 1 ? f : h.bindType || d, c = (ut._data(u, "events") || {})[n.type] && ut._data(u, "handle"), c && c.apply(u, r), c = l && u[l], c && ut.acceptData(u) && c.apply && c.apply(u, r) === !1 && n.preventDefault();
                    n.type = d;
                    if (!s && !n.isDefaultPrevented() && (!h._default || h._default.apply(i.ownerDocument, r) === !1) && (d !== "click" || !ut.nodeName(i, "a")) && ut.acceptData(i) && l && i[d] && !ut.isWindow(i)) {
                        a = i[l], a && (i[l] = null), ut.event.triggered = d;
                        try {
                            i[d]()
                        } catch (m) {}
                        ut.event.triggered = t, a && (i[l] = a)
                    }
                    return n.result
                },
                dispatch: function (e) {
                    e = ut.event.fix(e);
                    var n, r, i, s, o, u = [],
                        a = nt.call(arguments),
                        f = (ut._data(this, "events") || {})[e.type] || [],
                        l = ut.event.special[e.type] || {};
                    a[0] = e, e.delegateTarget = this;
                    if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
                    u = ut.event.handlers.call(this, e, f), n = 0;
                    while ((s = u[n++]) && !e.isPropagationStopped()) {
                        e.currentTarget = s.elem, r = 0;
                        while ((o = s.handlers[r++]) && !e.isImmediatePropagationStopped())
                            if (!e.namespace_re || e.namespace_re.test(o.namespace)) e.handleObj = o, e.data = o.data, i = ((ut.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation())
                    }
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                },
                handlers: function (e, n) {
                    var r, i, s, o, u = [],
                        a = n.delegateCount,
                        f = e.target;
                    if (a && f.nodeType && (!e.button || e.type !== "click"))
                        for (; f != this; f = f.parentNode || this)
                            if (f.disabled !== !0 || e.type !== "click") {
                                i = [];
                                for (r = 0; r < a; r++) o = n[r], s = o.selector + " ", i[s] === t && (i[s] = o.needsContext ? ut(s, this).index(f) >= 0 : ut.find(s, this, null, [f]).length), i[s] && i.push(o);
                                i.length && u.push({
                                    elem: f,
                                    handlers: i
                                })
                            }
                    return a < n.length && u.push({
                        elem: this,
                        handlers: n.slice(a)
                    }), u
                },
                fix: function (e) {
                    if (e[ut.expando]) return e;
                    var t, n, r = e,
                        i = ut.event.fixHooks[e.type] || {},
                        s = i.props ? this.props.concat(i.props) : this.props;
                    e = new ut.Event(r), t = s.length;
                    while (t--) n = s[t], e[n] = r[n];
                    return e.target || (e.target = r.srcElement || $), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function (e, t) {
                        return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, n) {
                        var r, i, s, o = n.button,
                            u = n.fromElement;
                        return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || $, i = r.documentElement, s = r.body, e.pageX = n.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), !e.which && o !== t && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        trigger: function () {
                            if (ut.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                        }
                    },
                    focus: {
                        trigger: function () {
                            if (this !== $.activeElement && this.focus) try {
                                return this.focus(), !1
                            } catch (e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            if (this === $.activeElement && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            e.result !== t && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function (e, t, n, r) {
                    var i = ut.extend(new ut.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? ut.event.trigger(i, null, t) : ut.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, ut.removeEvent = $.removeEventListener ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function (e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
            }, ut.Event = function (e, t) {
                if (!(this instanceof ut.Event)) return new ut.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : f) : this.type = e, t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0
            }, ut.Event.prototype = {
                isDefaultPrevented: f,
                isPropagationStopped: f,
                isImmediatePropagationStopped: f,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = a;
                    if (!e) return;
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = a;
                    if (!e) return;
                    e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
                },
                stopImmediatePropagation: function () {
                    this.isImmediatePropagationStopped = a, this.stopPropagation()
                }
            }, ut.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function (e, t) {
                ut.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            s = e.handleObj;
                        if (!i || i !== r && !ut.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                        return n
                    }
                }
            }), ut.support.submitBubbles || (ut.event.special.submit = {
                setup: function () {
                    if (ut.nodeName(this, "form")) return !1;
                    ut.event.add(this, "click._submit keypress._submit", function (e) {
                        var n = e.target,
                            r = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form : t;
                        r && !ut._data(r, "submitBubbles") && (ut.event.add(r, "submit._submit", function (e) {
                            e._submit_bubble = !0
                        }), ut._data(r, "submitBubbles", !0))
                    })
                },
                postDispatch: function (e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function () {
                    if (ut.nodeName(this, "form")) return !1;
                    ut.event.remove(this, "._submit")
                }
            }), ut.support.changeBubbles || (ut.event.special.change = {
                setup: function () {
                    if (Pt.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio") ut.event.add(this, "propertychange._change", function (e) {
                            e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                        }), ut.event.add(this, "click._change", function (e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0)
                        });
                        return !1
                    }
                    ut.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        Pt.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function (e) {
                            this.parentNode && !e.isSimulated && !e.isTrigger && ut.event.simulate("change", this.parentNode, e, !0)
                        }), ut._data(t, "changeBubbles", !0))
                    })
                },
                handle: function (e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
                },
                teardown: function () {
                    return ut.event.remove(this, "._change"), !Pt.test(this.nodeName)
                }
            }), ut.support.focusinBubbles || ut.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var n = 0,
                    r = function (e) {
                        ut.event.simulate(t, e.target, ut.event.fix(e), !0)
                    };
                ut.event.special[t] = {
                    setup: function () {
                        n++ === 0 && $.addEventListener(e, r, !0)
                    },
                    teardown: function () {
                        --n === 0 && $.removeEventListener(e, r, !0)
                    }
                }
            }), ut.fn.extend({
                on: function (e, n, r, i, s) {
                    var o, u;
                    if (typeof e == "object") {
                        typeof n != "string" && (r = r || n, n = t);
                        for (u in e) this.on(u, n, r, e[u], s);
                        return this
                    }
                    r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                    if (i === !1) i = f;
                    else if (!i) return this;
                    return s === 1 && (o = i, i = function (e) {
                        return ut().off(e), o.apply(this, arguments)
                    }, i.guid = o.guid || (o.guid = ut.guid++)), this.each(function () {
                        ut.event.add(this, e, i, r, n)
                    })
                },
                one: function (e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function (e, n, r) {
                    var i, s;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ut(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if (typeof e == "object") {
                        for (s in e) this.off(s, n, e[s]);
                        return this
                    }
                    if (n === !1 || typeof n == "function") r = n, n = t;
                    return r === !1 && (r = f), this.each(function () {
                        ut.event.remove(this, e, r, n)
                    })
                },
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function (e, t, n) {
                    return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                trigger: function (e, t) {
                    return this.each(function () {
                        ut.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return ut.event.trigger(e, t, n, !0)
                },
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                ut.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }, Ht.test(t) && (ut.event.fixHooks[t] = ut.event.keyHooks), Bt.test(t) && (ut.event.fixHooks[t] = ut.event.mouseHooks)
            }),
            function (e, t) {
                function n(e) {
                    return dt.test(e + "")
                }

                function r() {
                    var e, t = [];
                    return e = function (n, r) {
                        return t.push(n += " ") > T.cacheLength && delete e[t.shift()], e[n] = r
                    }
                }

                function i(e) {
                    return e[I] = !0, e
                }

                function s(e) {
                    var t = M.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                }

                function o(e, t, n, r) {
                    var i, s, o, u, a, f, l, p, d, v;
                    (t ? t.ownerDocument || t : q) !== M && O(t), t = t || M, n = n || [];
                    if (!e || typeof e != "string") return n;
                    if ((u = t.nodeType) !== 1 && u !== 9) return [];
                    if (!D && !r) {
                        if (i = vt.exec(e))
                            if (o = i[1]) {
                                if (u === 9) {
                                    s = t.getElementById(o);
                                    if (!s || !s.parentNode) return n;
                                    if (s.id === o) return n.push(s), n
                                } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && j(t, s) && s.id === o) return n.push(s), n
                            } else {
                                if (i[2]) return G.apply(n, Y.call(t.getElementsByTagName(e), 0)), n;
                                if ((o = i[3]) && R.getByClassName && t.getElementsByClassName) return G.apply(n, Y.call(t.getElementsByClassName(o), 0)), n
                            }
                        if (R.qsa && !P.test(e)) {
                            l = !0, p = I, d = t, v = u === 9 && e;
                            if (u === 1 && t.nodeName.toLowerCase() !== "object") {
                                f = c(e), (l = t.getAttribute("id")) ? p = l.replace(yt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", a = f.length;
                                while (a--) f[a] = p + h(f[a]);
                                d = pt.test(e) && t.parentNode || t, v = f.join(",")
                            }
                            if (v) try {
                                return G.apply(n, Y.call(d.querySelectorAll(v), 0)), n
                            } catch (m) {} finally {
                                l || t.removeAttribute("id")
                            }
                        }
                    }
                    return w(e.replace(ot, "$1"), t, n, r)
                }

                function u(e, t) {
                    var n = e && t && e.nextSibling;
                    for (; n; n = n.nextSibling)
                        if (n === t) return -1;
                    return e ? 1 : -1
                }

                function a(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return n === "input" && t.type === e
                    }
                }

                function f(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return (n === "input" || n === "button") && t.type === e
                    }
                }

                function l(e) {
                    return i(function (t) {
                        return t = +t, i(function (n, r) {
                            var i, s = e([], n.length, t),
                                o = s.length;
                            while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function c(e, t) {
                    var n, r, i, s, u, a, f, l = X[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    u = e, a = [], f = T.preFilter;
                    while (u) {
                        if (!n || (r = at.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(i = []);
                        n = !1;
                        if (r = ft.exec(u)) n = r.shift(), i.push({
                            value: n,
                            type: r[0].replace(ot, " ")
                        }), u = u.slice(n.length);
                        for (s in T.filter)(r = ht[s].exec(u)) && (!f[s] || (r = f[s](r))) && (n = r.shift(), i.push({
                            value: n,
                            type: s,
                            matches: r
                        }), u = u.slice(n.length));
                        if (!n) break
                    }
                    return t ? u.length : u ? o.error(e) : X(e, a).slice(0)
                }

                function h(e) {
                    var t = 0,
                        n = e.length,
                        r = "";
                    for (; t < n; t++) r += e[t].value;
                    return r
                }

                function p(e, t, n) {
                    var r = t.dir,
                        i = n && t.dir === "parentNode",
                        s = z++;
                    return t.first ? function (t, n, s) {
                        while (t = t[r])
                            if (t.nodeType === 1 || i) return e(t, n, s)
                    } : function (t, n, o) {
                        var u, a, f, l = U + " " + s;
                        if (o) {
                            while (t = t[r])
                                if (t.nodeType === 1 || i)
                                    if (e(t, n, o)) return !0
                        } else
                            while (t = t[r])
                                if (t.nodeType === 1 || i) {
                                    f = t[I] || (t[I] = {});
                                    if ((a = f[r]) && a[0] === l) {
                                        if ((u = a[1]) === !0 || u === x) return u === !0
                                    } else {
                                        a = f[r] = [l], a[1] = e(t, n, o) || x;
                                        if (a[1] === !0) return !0
                                    }
                                }
                    }
                }

                function d(e) {
                    return e.length > 1 ? function (t, n, r) {
                        var i = e.length;
                        while (i--)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function v(e, t, n, r, i) {
                    var s, o = [],
                        u = 0,
                        a = e.length,
                        f = t != null;
                    for (; u < a; u++)
                        if (s = e[u])
                            if (!n || n(s, r, i)) o.push(s), f && t.push(u);
                    return o
                }

                function m(e, t, n, r, s, o) {
                    return r && !r[I] && (r = m(r)), s && !s[I] && (s = m(s, o)), i(function (i, o, u, a) {
                        var f, l, c, h = [],
                            p = [],
                            d = o.length,
                            m = i || b(t || "*", u.nodeType ? [u] : u, []),
                            g = e && (i || !t) ? v(m, h, e, u, a) : m,
                            y = n ? s || (i ? e : d || r) ? [] : o : g;
                        n && n(g, y, u, a);
                        if (r) {
                            f = v(y, p), r(f, [], u, a), l = f.length;
                            while (l--)
                                if (c = f[l]) y[p[l]] = !(g[p[l]] = c)
                        }
                        if (i) {
                            if (s || e) {
                                if (s) {
                                    f = [], l = y.length;
                                    while (l--)(c = y[l]) && f.push(g[l] = c);
                                    s(null, y = [], f, a)
                                }
                                l = y.length;
                                while (l--)(c = y[l]) && (f = s ? Z.call(i, c) : h[l]) > -1 && (i[f] = !(o[f] = c))
                            }
                        } else y = v(y === o ? y.splice(d, y.length) : y), s ? s(null, o, y, a) : G.apply(o, y)
                    })
                }

                function g(e) {
                    var t, n, r, i = e.length,
                        s = T.relative[e[0].type],
                        o = s || T.relative[" "],
                        u = s ? 1 : 0,
                        a = p(function (e) {
                            return e === t
                        }, o, !0),
                        f = p(function (e) {
                            return Z.call(t, e) > -1
                        }, o, !0),
                        l = [function (e, n, r) {
                            return !s && (r || n !== A) || ((t = n).nodeType ? a(e, n, r) : f(e, n, r))
                        }];
                    for (; u < i; u++)
                        if (n = T.relative[e[u].type]) l = [p(d(l), n)];
                        else {
                            n = T.filter[e[u].type].apply(null, e[u].matches);
                            if (n[I]) {
                                r = ++u;
                                for (; r < i; r++)
                                    if (T.relative[e[r].type]) break;
                                return m(u > 1 && d(l), u > 1 && h(e.slice(0, u - 1)).replace(ot, "$1"), n, u < r && g(e.slice(u, r)), r < i && g(e = e.slice(r)), r < i && h(e))
                            }
                            l.push(n)
                        }
                    return d(l)
                }

                function y(e, t) {
                    var n = 0,
                        r = t.length > 0,
                        s = e.length > 0,
                        u = function (i, u, a, f, l) {
                            var c, h, p, d = [],
                                m = 0,
                                g = "0",
                                y = i && [],
                                b = l != null,
                                w = A,
                                E = i || s && T.find.TAG("*", l && u.parentNode || u),
                                S = U += w == null ? 1 : Math.E;
                            b && (A = u !== M && u, x = n);
                            for (;
                                (c = E[g]) != null; g++) {
                                if (s && c) {
                                    for (h = 0; p = e[h]; h++)
                                        if (p(c, u, a)) {
                                            f.push(c);
                                            break
                                        }
                                    b && (U = S, x = ++n)
                                }
                                r && ((c = !p && c) && m--, i && y.push(c))
                            }
                            m += g;
                            if (r && g !== m) {
                                for (h = 0; p = t[h]; h++) p(y, d, u, a);
                                if (i) {
                                    if (m > 0)
                                        while (g--) !y[g] && !d[g] && (d[g] = Q.call(f));
                                    d = v(d)
                                }
                                G.apply(f, d), b && !i && d.length > 0 && m + t.length > 1 && o.uniqueSort(f)
                            }
                            return b && (U = S, A = w), y
                        };
                    return r ? i(u) : u
                }

                function b(e, t, n) {
                    var r = 0,
                        i = t.length;
                    for (; r < i; r++) o(e, t[r], n);
                    return n
                }

                function w(e, t, n, r) {
                    var i, s, o, u, a, f = c(e);
                    if (!r && f.length === 1) {
                        s = f[0] = f[0].slice(0);
                        if (s.length > 2 && (o = s[0]).type === "ID" && t.nodeType === 9 && !D && T.relative[s[1].type]) {
                            t = T.find.ID(o.matches[0].replace(wt, Et), t)[0];
                            if (!t) return n;
                            e = e.slice(s.shift().value.length)
                        }
                        for (i = ht.needsContext.test(e) ? -1 : s.length - 1; i >= 0; i--) {
                            o = s[i];
                            if (T.relative[u = o.type]) break;
                            if (a = T.find[u])
                                if (r = a(o.matches[0].replace(wt, Et), pt.test(s[0].type) && t.parentNode || t)) {
                                    s.splice(i, 1), e = r.length && h(s);
                                    if (!e) return G.apply(n, Y.call(r, 0)), n;
                                    break
                                }
                        }
                    }
                    return k(e, f)(r, t, D, n, pt.test(e)), n
                }

                function E() {}
                var S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I = "sizzle" + -(new Date),
                    q = e.document,
                    R = {},
                    U = 0,
                    z = 0,
                    W = r(),
                    X = r(),
                    V = r(),
                    $ = typeof t,
                    J = 1 << 31,
                    K = [],
                    Q = K.pop,
                    G = K.push,
                    Y = K.slice,
                    Z = K.indexOf || function (e) {
                        var t = 0,
                            n = this.length;
                        for (; t < n; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    et = "[\\x20\\t\\r\\n\\f]",
                    tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    nt = tt.replace("w", "w#"),
                    rt = "([*^$|!~]?=)",
                    it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]",
                    st = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)",
                    ot = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
                    at = new RegExp("^" + et + "*," + et + "*"),
                    ft = new RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"),
                    lt = new RegExp(st),
                    ct = new RegExp("^" + nt + "$"),
                    ht = {
                        ID: new RegExp("^#(" + tt + ")"),
                        CLASS: new RegExp("^\\.(" + tt + ")"),
                        NAME: new RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
                        TAG: new RegExp("^(" + tt.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + it),
                        PSEUDO: new RegExp("^" + st),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
                        needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
                    },
                    pt = /[\x20\t\r\n\f]*[+~]/,
                    dt = /\{\s*\[native code\]\s*\}/,
                    vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    mt = /^(?:input|select|textarea|button)$/i,
                    gt = /^h\d$/i,
                    yt = /'|\\/g,
                    bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    wt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    Et = function (e, t) {
                        var n = "0x" + t - 65536;
                        return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
                    };
                try {
                    Y.call(_.childNodes, 0)[0].nodeType
                } catch (St) {
                    Y = function (e) {
                        var t, n = [];
                        for (; t = this[e]; e++) n.push(t);
                        return n
                    }
                }
                C = o.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? t.nodeName !== "HTML" : !1
                }, O = o.setDocument = function (e) {
                    var r = e ? e.ownerDocument || e : q;
                    if (r === M || r.nodeType !== 9 || !r.documentElement) return M;
                    M = r, _ = r.documentElement, D = C(r), R.tagNameNoComments = s(function (e) {
                        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                    }), R.attributes = s(function (e) {
                        e.innerHTML = "<select></select>";
                        var t = typeof e.lastChild.getAttribute("multiple");
                        return t !== "boolean" && t !== "string"
                    }), R.getByClassName = s(function (e) {
                        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
                    }), R.getByName = s(function (e) {
                        e.id = I + 0, e.innerHTML = "<a name='" + I + "'></a><div name='" + I + "'></div>", _.insertBefore(e, _.firstChild);
                        var t = r.getElementsByName && r.getElementsByName(I).length === 2 + r.getElementsByName(I + 0).length;
                        return R.getIdNotName = !r.getElementById(I), _.removeChild(e), t
                    }), T.attrHandle = s(function (e) {
                        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== $ && e.firstChild.getAttribute("href") === "#"
                    }) ? {} : {
                        href: function (e) {
                            return e.getAttribute("href", 2)
                        },
                        type: function (e) {
                            return e.getAttribute("type")
                        }
                    }, R.getIdNotName ? (T.find.ID = function (e, t) {
                        if (typeof t.getElementById !== $ && !D) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, T.filter.ID = function (e) {
                        var t = e.replace(wt, Et);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (T.find.ID = function (e, n) {
                        if (typeof n.getElementById !== $ && !D) {
                            var r = n.getElementById(e);
                            return r ? r.id === e || typeof r.getAttributeNode !== $ && r.getAttributeNode("id").value === e ? [r] : t : []
                        }
                    }, T.filter.ID = function (e) {
                        var t = e.replace(wt, Et);
                        return function (e) {
                            var n = typeof e.getAttributeNode !== $ && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), T.find.TAG = R.tagNameNoComments ? function (e, t) {
                        if (typeof t.getElementsByTagName !== $) return t.getElementsByTagName(e)
                    } : function (e, t) {
                        var n, r = [],
                            i = 0,
                            s = t.getElementsByTagName(e);
                        if (e === "*") {
                            for (; n = s[i]; i++) n.nodeType === 1 && r.push(n);
                            return r
                        }
                        return s
                    }, T.find.NAME = R.getByName && function (e, t) {
                        if (typeof t.getElementsByName !== $) return t.getElementsByName(name)
                    }, T.find.CLASS = R.getByClassName && function (e, t) {
                        if (typeof t.getElementsByClassName !== $ && !D) return t.getElementsByClassName(e)
                    }, H = [], P = [":focus"];
                    if (R.qsa = n(r.querySelectorAll)) s(function (e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || P.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || P.push(":checked")
                    }), s(function (e) {
                        e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && P.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
                    });
                    return (R.matchesSelector = n(B = _.matchesSelector || _.mozMatchesSelector || _.webkitMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && s(function (e) {
                        R.disconnectedMatch = B.call(e, "div"), B.call(e, "[s!='']:x"), H.push("!=", st)
                    }), P = new RegExp(P.join("|")), H = new RegExp(H.join("|")), j = n(_.contains) || _.compareDocumentPosition ? function (e, t) {
                        var n = e.nodeType === 9 ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
                    } : function (e, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === e) return !0;
                        return !1
                    }, F = _.compareDocumentPosition ? function (
                        e, t) {
                        var n;
                        return e === t ? (L = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? n & 1 || e.parentNode && e.parentNode.nodeType === 11 ? e === r || j(q, e) ? -1 : t === r || j(q, t) ? 1 : 0 : n & 4 ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function (e, t) {
                        var n, i = 0,
                            s = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            f = [t];
                        if (e === t) return L = !0, 0;
                        if (e.sourceIndex && t.sourceIndex) return (~t.sourceIndex || J) - (j(q, e) && ~e.sourceIndex || J);
                        if (!s || !o) return e === r ? -1 : t === r ? 1 : s ? -1 : o ? 1 : 0;
                        if (s === o) return u(e, t);
                        n = e;
                        while (n = n.parentNode) a.unshift(n);
                        n = t;
                        while (n = n.parentNode) f.unshift(n);
                        while (a[i] === f[i]) i++;
                        return i ? u(a[i], f[i]) : a[i] === q ? -1 : f[i] === q ? 1 : 0
                    }, L = !1, [0, 0].sort(F), R.detectDuplicates = L, M
                }, o.matches = function (e, t) {
                    return o(e, null, null, t)
                }, o.matchesSelector = function (e, t) {
                    (e.ownerDocument || e) !== M && O(e), t = t.replace(bt, "='$1']");
                    if (R.matchesSelector && !D && (!H || !H.test(t)) && !P.test(t)) try {
                        var n = B.call(e, t);
                        if (n || R.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
                    } catch (r) {}
                    return o(t, M, null, [e]).length > 0
                }, o.contains = function (e, t) {
                    return (e.ownerDocument || e) !== M && O(e), j(e, t)
                }, o.attr = function (e, t) {
                    var n;
                    return (e.ownerDocument || e) !== M && O(e), D || (t = t.toLowerCase()), (n = T.attrHandle[t]) ? n(e) : D || R.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
                }, o.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, o.uniqueSort = function (e) {
                    var t, n = [],
                        r = 1,
                        i = 0;
                    L = !R.detectDuplicates, e.sort(F);
                    if (L) {
                        for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                        while (i--) e.splice(n[i], 1)
                    }
                    return e
                }, N = o.getText = function (e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (!i)
                        for (; t = e[r]; r++) n += N(t);
                    else if (i === 1 || i === 9 || i === 11) {
                        if (typeof e.textContent == "string") return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += N(e)
                    } else if (i === 3 || i === 4) return e.nodeValue;
                    return n
                }, T = o.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: ht,
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
                        ATTR: function (e) {
                            return e[1] = e[1].replace(wt, Et), e[3] = (e[4] || e[5] || "").replace(wt, Et), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || o.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && o.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var t, n = !e[5] && e[2];
                            return ht.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && lt.test(n) && (t = c(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            return e === "*" ? function () {
                                return !0
                            } : (e = e.replace(wt, Et).toLowerCase(), function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            })
                        },
                        CLASS: function (e) {
                            var t = W[e + " "];
                            return t || (t = new RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && W(e, function (e) {
                                return t.test(e.className || typeof e.getAttribute !== $ && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (e, t, n) {
                            return function (r) {
                                var i = o.attr(r, e);
                                return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.substr(i.length - n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.substr(0, n.length + 1) === n + "-" : !1) : !0
                            }
                        },
                        CHILD: function (e, t, n, r, i) {
                            var s = e.slice(0, 3) !== "nth",
                                o = e.slice(-4) !== "last",
                                u = t === "of-type";
                            return r === 1 && i === 0 ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, a) {
                                var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    g = u && t.nodeName.toLowerCase(),
                                    y = !a && !u;
                                if (m) {
                                    if (s) {
                                        while (v) {
                                            c = t;
                                            while (c = c[v])
                                                if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                            d = v = e === "only" && !d && "nextSibling"
                                        }
                                        return !0
                                    }
                                    d = [o ? m.firstChild : m.lastChild];
                                    if (o && y) {
                                        l = m[I] || (m[I] = {}), f = l[e] || [], p = f[0] === U && f[1], h = f[0] === U && f[2], c = p && m.childNodes[p];
                                        while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                            if (c.nodeType === 1 && ++h && c === t) {
                                                l[e] = [U, p, h];
                                                break
                                            }
                                    } else if (y && (f = (t[I] || (t[I] = {}))[e]) && f[0] === U) h = f[1];
                                    else
                                        while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                            if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                                y && ((c[I] || (c[I] = {}))[e] = [U, h]);
                                                if (c === t) break
                                            } return h -= i, h === r || h % r === 0 && h / r >= 0
                                }
                            }
                        },
                        PSEUDO: function (e, t) {
                            var n, r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e);
                            return r[I] ? r(t) : r.length > 1 ? (n = [e, e, "", t], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                                var i, s = r(e, t),
                                    o = s.length;
                                while (o--) i = Z.call(e, s[o]), e[i] = !(n[i] = s[o])
                            }) : function (e) {
                                return r(e, 0, n)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: i(function (e) {
                            var t = [],
                                n = [],
                                r = k(e.replace(ot, "$1"));
                            return r[I] ? i(function (e, t, n, i) {
                                var s, o = r(e, null, i, []),
                                    u = e.length;
                                while (u--)
                                    if (s = o[u]) e[u] = !(t[u] = s)
                            }) : function (e, i, s) {
                                return t[0] = e, r(t, null, s, n), !n.pop()
                            }
                        }),
                        has: i(function (e) {
                            return function (t) {
                                return o(e, t).length > 0
                            }
                        }),
                        contains: i(function (e) {
                            return function (t) {
                                return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
                            }
                        }),
                        lang: i(function (e) {
                            return ct.test(e || "") || o.error("unsupported lang: " + e), e = e.replace(wt, Et).toLowerCase(),
                                function (t) {
                                    var n;
                                    do
                                        if (n = D ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                                    while ((t = t.parentNode) && t.nodeType === 1);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function (e) {
                            return e === _
                        },
                        focus: function (e) {
                            return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function (e) {
                            return e.disabled === !1
                        },
                        disabled: function (e) {
                            return e.disabled === !0
                        },
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && !!e.checked || t === "option" && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
                            return !0
                        },
                        parent: function (e) {
                            return !T.pseudos.empty(e)
                        },
                        header: function (e) {
                            return gt.test(e.nodeName)
                        },
                        input: function (e) {
                            return mt.test(e.nodeName)
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && e.type === "button" || t === "button"
                        },
                        text: function (e) {
                            var t;
                            return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                        },
                        first: l(function () {
                            return [0]
                        }),
                        last: l(function (e, t) {
                            return [t - 1]
                        }),
                        eq: l(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: l(function (e, t) {
                            var n = 0;
                            for (; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: l(function (e, t) {
                            var n = 1;
                            for (; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: l(function (e, t, n) {
                            var r = n < 0 ? n + t : n;
                            for (; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: l(function (e, t, n) {
                            var r = n < 0 ? n + t : n;
                            for (; ++r < t;) e.push(r);
                            return e
                        })
                    }
                };
                for (S in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) T.pseudos[S] = a(S);
                for (S in {
                        submit: !0,
                        reset: !0
                    }) T.pseudos[S] = f(S);
                k = o.compile = function (e, t) {
                    var n, r = [],
                        i = [],
                        s = V[e + " "];
                    if (!s) {
                        t || (t = c(e)), n = t.length;
                        while (n--) s = g(t[n]), s[I] ? r.push(s) : i.push(s);
                        s = V(e, y(i, r))
                    }
                    return s
                }, T.pseudos.nth = T.pseudos.eq, T.filters = E.prototype = T.pseudos, T.setFilters = new E, O(), o.attr = ut.attr, ut.find = o, ut.expr = o.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = o.uniqueSort, ut.text = o.getText, ut.isXMLDoc = o.isXML, ut.contains = o.contains
            }(e);
        var It = /Until$/,
            qt = /^(?:parents|prev(?:Until|All))/,
            Rt = /^.[^:#\[\.,]*$/,
            Ut = ut.expr.match.needsContext,
            zt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ut.fn.extend({
            find: function (e) {
                var t, n, r;
                if (typeof e != "string") return r = this, this.pushStack(ut(e).filter(function () {
                    for (t = 0; t < r.length; t++)
                        if (ut.contains(r[t], this)) return !0
                }));
                n = [];
                for (t = 0; t < this.length; t++) ut.find(e, this[t], n);
                return n = this.pushStack(ut.unique(n)), n.selector = (this.selector ? this.selector + " " : "") + e, n
            },
            has: function (e) {
                var t, n = ut(e, this),
                    r = n.length;
                return this.filter(function () {
                    for (t = 0; t < r; t++)
                        if (ut.contains(this, n[t])) return !0
                })
            },
            not: function (e) {
                return this.pushStack(c(this, e, !1))
            },
            filter: function (e) {
                return this.pushStack(c(this, e, !0))
            },
            is: function (e) {
                return !!e && (typeof e == "string" ? Ut.test(e) ? ut(e, this.context).index(this[0]) >= 0 : ut.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function (e, t) {
                var n, r = 0,
                    i = this.length,
                    s = [],
                    o = Ut.test(e) || typeof e != "string" ? ut(e, t || this.context) : 0;
                for (; r < i; r++) {
                    n = this[r];
                    while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                        if (o ? o.index(n) > -1 : ut.find.matchesSelector(n, e)) {
                            s.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                }
                return this.pushStack(s.length > 1 ? ut.unique(s) : s)
            },
            index: function (e) {
                return e ? typeof e == "string" ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                var n = typeof e == "string" ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e),
                    r = ut.merge(this.get(), n);
                return this.pushStack(ut.unique(r))
            },
            addBack: function (e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        }), ut.fn.andSelf = ut.fn.addBack, ut.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function (e) {
                return ut.dir(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return ut.dir(e, "parentNode", n)
            },
            next: function (e) {
                return l(e, "nextSibling")
            },
            prev: function (e) {
                return l(e, "previousSibling")
            },
            nextAll: function (e) {
                return ut.dir(e, "nextSibling")
            },
            prevAll: function (e) {
                return ut.dir(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return ut.dir(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return ut.dir(e, "previousSibling", n)
            },
            siblings: function (e) {
                return ut.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return ut.sibling(e.firstChild)
            },
            contents: function (e) {
                return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ut.merge([], e.childNodes)
            }
        }, function (e, t) {
            ut.fn[e] = function (n, r) {
                var i = ut.map(this, t, n);
                return It.test(e) || (r = n), r && typeof r == "string" && (i = ut.filter(r, i)), i = this.length > 1 && !zt[e] ? ut.unique(i) : i, this.length > 1 && qt.test(e) && (i = i.reverse()), this.pushStack(i)
            }
        }), ut.extend({
            filter: function (e, t, n) {
                return n && (e = ":not(" + e + ")"), t.length === 1 ? ut.find.matchesSelector(t[0], e) ? [t[0]] : [] : ut.find.matches(e, t)
            },
            dir: function (e, n, r) {
                var i = [],
                    s = e[n];
                while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !ut(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
                return i
            },
            sibling: function (e, t) {
                var n = [];
                for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                return n
            }
        });
        var Wt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Xt = / jQuery\d+="(?:null|\d+)"/g,
            Vt = new RegExp("<(?:" + Wt + ")[\\s/>]", "i"),
            $t = /^\s+/,
            Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Kt = /<([\w:]+)/,
            Qt = /<tbody/i,
            Gt = /<|&#?\w+;/,
            Yt = /<(?:script|style|link)/i,
            Zt = /^(?:checkbox|radio)$/i,
            en = /checked\s*(?:[^=]|=\s*.checked.)/i,
            tn = /^$|\/(?:java|ecma)script/i,
            nn = /^true\/(.*)/,
            rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            sn = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            on = h($),
            un = on.appendChild($.createElement("div"));
        sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ut.fn.extend({
            text: function (e) {
                return ut.access(this, function (e) {
                    return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || $).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function (e) {
                if (ut.isFunction(e)) return this.each(function (t) {
                    ut(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        var e = this;
                        while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                return ut.isFunction(e) ? this.each(function (t) {
                    ut(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = ut(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = ut.isFunction(e);
                return this.each(function (n) {
                    ut(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function () {
                return this.domManip(arguments, !0, function (e) {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e)
                })
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (e) {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function () {
                return this.domManip(arguments, !1, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return this.domManip(arguments, !1, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function (e, t) {
                var n, r = 0;
                for (;
                    (n = this[r]) != null; r++)
                    if (!e || ut.filter(e, [n]).length > 0) !t && n.nodeType === 1 && ut.cleanData(b(n)), n.parentNode && (t && ut.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function () {
                var e, t = 0;
                for (;
                    (e = this[t]) != null; t++) {
                    e.nodeType === 1 && ut.cleanData(b(e, !1));
                    while (e.firstChild) e.removeChild(e.firstChild);
                    e.options && ut.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function (e, t) {
                return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                    return ut.clone(this, e, t)
                })
            },
            html: function (e) {
                return ut.access(this, function (e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(Xt, "") : t;
                    if (typeof e == "string" && !Yt.test(e) && (ut.support.htmlSerialize || !Vt.test(e)) && (ut.support.leadingWhitespace || !$t.test(e)) && !sn[(Kt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Jt, "<$1></$2>");
                        try {
                            for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (ut.cleanData(b(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (s) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function (e) {
                var t = ut.isFunction(e);
                return !t && typeof e != "string" && (e = ut(e).not(this).detach()), this.domManip([e], !0, function (e) {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    if (n && this.nodeType === 1 || this.nodeType === 11) ut(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e)
                })
            },
            detach: function (e) {
                return this.remove(e, !0)
            },
            domManip: function (e, n, r) {
                e = et.apply([], e);
                var i, s, o, u, a, f, l = 0,
                    c = this.length,
                    h = this,
                    m = c - 1,
                    g = e[0],
                    y = ut.isFunction(g);
                if (y || !(c <= 1 || typeof g != "string" || ut.support.checkClone || !en.test(g))) return this.each(function (i) {
                    var s = h.eq(i);
                    y && (e[0] = g.call(this, i, n ? s.html() : t)), s.domManip(e, n, r)
                });
                if (c) {
                    i = ut.buildFragment(e, this[0].ownerDocument, !1, this), s = i.firstChild, i.childNodes.length === 1 && (i = s);
                    if (s) {
                        n = n && ut.nodeName(s, "tr"), o = ut.map(b(i, "script"), d), u = o.length;
                        for (; l < c; l++) a = i, l !== m && (a = ut.clone(a, !0, !0), u && ut.merge(o, b(a, "script"))), r.call(n && ut.nodeName(this[l], "table") ? p(this[l], "tbody") : this[l], a, l);
                        if (u) {
                            f = o[o.length - 1].ownerDocument, ut.map(o, v);
                            for (l = 0; l < u; l++) a = o[l], tn.test(a.type || "") && !ut._data(a, "globalEval") && ut.contains(f, a) && (a.src ? ut.ajax({
                                url: a.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : ut.globalEval((a.text || a.textContent || a.innerHTML || "").replace(rn, "")))
                        }
                        i = s = null
                    }
                }
                return this
            }
        }), ut.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            ut.fn[e] = function (e) {
                var n, r = 0,
                    i = [],
                    s = ut(e),
                    o = s.length - 1;
                for (; r <= o; r++) n = r === o ? this : this.clone(!0), ut(s[r])[t](n), tt.apply(i, n.get());
                return this.pushStack(i)
            }
        }), ut.extend({
            clone: function (e, t, n) {
                var r, i, s, o, u, a = ut.contains(e.ownerDocument, e);
                ut.support.html5Clone || ut.isXMLDoc(e) || !Vt.test("<" + e.nodeName + ">") ? u = e.cloneNode(!0) : (un.innerHTML = e.outerHTML, un.removeChild(u = un.firstChild));
                if ((!ut.support.noCloneEvent || !ut.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !ut.isXMLDoc(e)) {
                    r = b(u), i = b(e);
                    for (o = 0;
                        (s = i[o]) != null; ++o) r[o] && y(s, r[o])
                }
                if (t)
                    if (n) {
                        i = i || b(e), r = r || b(u);
                        for (o = 0;
                            (s = i[o]) != null; o++) g(s, r[o])
                    } else g(e, u);
                return r = b(u, "script"), r.length > 0 && m(r, !a && b(e, "script")), r = i = s = null, u
            },
            buildFragment: function (e, t, n, r) {
                var i, s, o, u, a, f, l, c = e.length,
                    p = h(t),
                    d = [],
                    v = 0;
                for (; v < c; v++) {
                    s = e[v];
                    if (s || s === 0)
                        if (ut.type(s) === "object") ut.merge(d, s.nodeType ? [s] : s);
                        else if (!Gt.test(s)) d.push(t.createTextNode(s));
                    else {
                        u = u || p.appendChild(t.createElement("div")), o = (Kt.exec(s) || ["", ""])[1].toLowerCase(), a = sn[o] || sn._default, u.innerHTML = a[1] + s.replace(Jt, "<$1></$2>") + a[2], l = a[0];
                        while (l--) u = u.lastChild;
                        !ut.support.leadingWhitespace && $t.test(s) && d.push(t.createTextNode($t.exec(s)[0]));
                        if (!ut.support.tbody) {
                            s = o === "table" && !Qt.test(s) ? u.firstChild : a[1] === "<table>" && !Qt.test(s) ? u : 0, l = s && s.childNodes.length;
                            while (l--) ut.nodeName(f = s.childNodes[l], "tbody") && !f.childNodes.length && s.removeChild(f)
                        }
                        ut.merge(d, u.childNodes), u.textContent = "";
                        while (u.firstChild) u.removeChild(u.firstChild);
                        u = p.lastChild
                    }
                }
                u && p.removeChild(u), ut.support.appendChecked || ut.grep(b(d, "input"), w), v = 0;
                while (s = d[v++]) {
                    if (r && ut.inArray(s, r) !== -1) continue;
                    i = ut.contains(s.ownerDocument, s), u = b(p.appendChild(s), "script"), i && m(u);
                    if (n) {
                        l = 0;
                        while (s = u[l++]) tn.test(s.type || "") && n.push(s)
                    }
                }
                return u = null, p
            },
            cleanData: function (e, t) {
                var n, r, i, s, o = 0,
                    u = ut.expando,
                    a = ut.cache,
                    f = ut.support.deleteExpando,
                    l = ut.event.special;
                for (;
                    (i = e[o]) != null; o++)
                    if (t || ut.acceptData(i)) {
                        r = i[u], n = r && a[r];
                        if (n) {
                            if (n.events)
                                for (s in n.events) l[s] ? ut.event.remove(i, s) : ut.removeEvent(i, s, n.handle);
                            a[r] && (delete a[r], f ? delete i[u] : typeof i.removeAttribute != "undefined" ? i.removeAttribute(u) : i[u] = null, Y.push(r))
                        }
                    }
            }
        });
        var an, fn, ln, cn = /alpha\([^)]*\)/i,
            hn = /opacity\s*=\s*([^)]*)/,
            pn = /^(top|right|bottom|left)$/,
            dn = /^(none|table(?!-c[ea]).+)/,
            vn = /^margin/,
            mn = new RegExp("^(" + at + ")(.*)$", "i"),
            gn = new RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"),
            yn = new RegExp("^([+-])=(" + at + ")", "i"),
            bn = {
                BODY: "block"
            },
            wn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            En = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Sn = ["Top", "Right", "Bottom", "Left"],
            xn = ["Webkit", "O", "Moz", "ms"];
        ut.fn.extend({
            css: function (e, n) {
                return ut.access(this, function (e, n, r) {
                    var i, s, o = {},
                        u = 0;
                    if (ut.isArray(n)) {
                        i = fn(e), s = n.length;
                        for (; u < s; u++) o[n[u]] = ut.css(e, n[u], !1, i);
                        return o
                    }
                    return r !== t ? ut.style(e, n, r) : ut.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function () {
                return x(this, !0)
            },
            hide: function () {
                return x(this)
            },
            toggle: function (e) {
                var t = typeof e == "boolean";
                return this.each(function () {
                    (t ? e : S(this)) ? ut(this).show(): ut(this).hide()
                })
            }
        }), ut.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = an(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ut.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (e, n, r, i) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
                var s, o, u, a = ut.camelCase(n),
                    f = e.style;
                n = ut.cssProps[a] || (ut.cssProps[a] = E(f, a)), u = ut.cssHooks[n] || ut.cssHooks[a];
                if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
                o = typeof r, o === "string" && (s = yn.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(ut.css(e, n)), o = "number");
                if (r == null || o === "number" && isNaN(r)) return;
                o === "number" && !ut.cssNumber[a] && (r += "px"), !ut.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
                if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                    f[n] = r
                } catch (l) {}
            },
            css: function (e, n, r, i) {
                var s, o, u, a = ut.camelCase(n);
                return n = ut.cssProps[a] || (ut.cssProps[a] = E(e.style, a)), u = ut.cssHooks[n] || ut.cssHooks[a], u && "get" in u && (s = u.get(e, !0, r)), s === t && (s = an(e, n, i)), s === "normal" && n in En && (s = En[n]), r ? (o = parseFloat(s), r === !0 || ut.isNumeric(o) ? o || 0 : s) : s
            },
            swap: function (e, t, n, r) {
                var i, s, o = {};
                for (s in t) o[s] = e.style[s], e.style[s] = t[s];
                i = n.apply(e, r || []);
                for (s in t) e.style[s] = o[s];
                return i
            }
        }), e.getComputedStyle ? (fn = function (t) {
            return e.getComputedStyle(t, null)
        }, an = function (e, n, r) {
            var i, s, o, u = r || fn(e),
                a = u ? u.getPropertyValue(n) || u[n] : t,
                f = e.style;
            return u && (a === "" && !ut.contains(e.ownerDocument, e) && (a = ut.style(e, n)), gn.test(a) && vn.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
        }) : $.documentElement.currentStyle && (fn = function (e) {
            return e.currentStyle
        }, an = function (e, n, r) {
            var i, s, o, u = r || fn(e),
                a = u ? u[n] : t,
                f = e.style;
            return a == null && f && f[n] && (a = f[n]), gn.test(a) && !pn.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
        }), ut.each(["height", "width"], function (e, t) {
            ut.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n) return e.offsetWidth === 0 && dn.test(ut.css(e, "display")) ? ut.swap(e, wn, function () {
                        return C(e, t, r)
                    }) : C(e, t, r)
                },
                set: function (e, n, r) {
                    var i = r && fn(e);
                    return T(e, n, r ? N(e, t, r, ut.support.boxSizing && ut.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
                }
            }
        }), ut.support.opacity || (ut.cssHooks.opacity = {
            get: function (e, t) {
                return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function (e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = ut.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                    s = r && r.filter || n.filter || "";
                n.zoom = 1;
                if ((t >= 1 || t === "") && ut.trim(s.replace(cn, "")) === "" && n.removeAttribute) {
                    n.removeAttribute("filter");
                    if (t === "" || r && !r.filter) return
                }
                n.filter = cn.test(s) ? s.replace(cn, i) : s + " " + i
            }
        }), ut(function () {
            ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
                get: function (e, t) {
                    if (t) return ut.swap(e, {
                        display: "inline-block"
                    }, an, [e, "marginRight"])
                }
            }), !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"], function (e, t) {
                ut.cssHooks[t] = {
                    get: function (e, n) {
                        if (n) return n = an(e, t), gn.test(n) ? ut(e).position()[t] + "px" : n
                    }
                }
            })
        }), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function (e) {
            return e.offsetWidth === 0 && e.offsetHeight === 0 || !ut.support.reliableHiddenOffsets && (e.style && e.style.display || ut.css(e, "display")) === "none"
        }, ut.expr.filters.visible = function (e) {
            return !ut.expr.filters.hidden(e)
        }), ut.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            ut.cssHooks[e + t] = {
                expand: function (n) {
                    var r = 0,
                        i = {},
                        s = typeof n == "string" ? n.split(" ") : [n];
                    for (; r < 4; r++) i[e + Sn[r] + t] = s[r] || s[r - 2] || s[0];
                    return i
                }
            }, vn.test(e) || (ut.cssHooks[e + t].set = T)
        });
        var Tn = /%20/g,
            Nn = /\[\]$/,
            Cn = /\r?\n/g,
            kn = /^(?:submit|button|image|reset)$/i,
            Ln = /^(?:input|select|textarea|keygen)/i;
        ut.fn.extend({
            serialize: function () {
                return ut.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = ut.prop(this, "elements");
                    return e ? ut.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !ut(this).is(":disabled") && Ln.test(this.nodeName) && !kn.test(e) && (this.checked || !Zt.test(e))
                }).map(function (e, t) {
                    var n = ut(this).val();
                    return n == null ? null : ut.isArray(n) ? ut.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(Cn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Cn, "\r\n")
                    }
                }).get()
            }
        }), ut.param = function (e, n) {
            var r, i = [],
                s = function (e, t) {
                    t = ut.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional);
            if (ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e, function () {
                s(this.name, this.value)
            });
            else
                for (r in e) A(r, e[r], n, s);
            return i.join("&").replace(Tn, "+")
        };
        var An, On, Mn = ut.now(),
            _n = /\?/,
            Dn = /#.*$/,
            Pn = /([?&])_=[^&]*/,
            Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            jn = /^(?:GET|HEAD)$/,
            Fn = /^\/\//,
            In = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            qn = ut.fn.load,
            Rn = {},
            Un = {},
            zn = "*/".concat("*");
        try {
            On = J.href
        } catch (Wn) {
            On = $.createElement("a"), On.href = "", On = On.href
        }
        An = In.exec(On.toLowerCase()) || [], ut.fn.load = function (e, n, r) {
            if (typeof e != "string" && qn) return qn.apply(this, arguments);
            var i, s, o, u = this,
                a = e.indexOf(" ");
            return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), ut.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), u.length > 0 && ut.ajax({
                url: e,
                type: s,
                dataType: "html",
                data: n
            }).done(function (e) {
                o = arguments, u.html(i ? ut("<div>").append(ut.parseHTML(e)).find(i) : e)
            }).complete(r && function (e, t) {
                u.each(r, o || [e.responseText, t, e])
            }), this
        }, ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            ut.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), ut.each(["get", "post"], function (e, n) {
            ut[n] = function (e, r, i, s) {
                return ut.isFunction(r) && (s = s || i, i = r, r = t), ut.ajax({
                    url: e,
                    type: n,
                    dataType: s,
                    data: r,
                    success: i
                })
            }
        }), ut.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: On,
                type: "GET",
                isLocal: Bn.test(An[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": zn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": ut.parseJSON,
                    "text xml": ut.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? _(_(e, ut.ajaxSettings), t) : _(ut.ajaxSettings, e)
            },
            ajaxPrefilter: O(Rn),
            ajaxTransport: O(Un),
            ajax: function (e, n) {
                function r(e, n, r, u) {
                    var f, c, y, b, E, x = n;
                    if (w === 2) return;
                    w = 2, a && clearTimeout(a), i = t, o = u || "", S.readyState = e > 0 ? 4 : 0, r && (b = D(h, S, r));
                    if (e >= 200 && e < 300 || e === 304) h.ifModified && (E = S.getResponseHeader("Last-Modified"), E && (ut.lastModified[s] = E), E = S.getResponseHeader("etag"), E && (ut.etag[s] = E)), e === 304 ? (f = !0, x = "notmodified") : (f = P(h, b), x = f.state, c = f.data, y = f.error, f = !y);
                    else {
                        y = x;
                        if (e || !x) x = "error", e < 0 && (e = 0)
                    }
                    S.status = e, S.statusText = (n || x) + "", f ? v.resolveWith(p, [c, x, S]) : v.rejectWith(p, [S, x, y]), S.statusCode(g), g = t, l && d.trigger(f ? "ajaxSuccess" : "ajaxError", [S, h, f ? c : y]), m.fireWith(p, [S, x]), l && (d.trigger("ajaxComplete", [S, h]), --ut.active || ut.event.trigger("ajaxStop"))
                }
                typeof e == "object" && (n = e, e = t), n = n || {};
                var i, s, o, u, a, f, l, c, h = ut.ajaxSetup({}, n),
                    p = h.context || h,
                    d = h.context && (p.nodeType || p.jquery) ? ut(p) : ut.event,
                    v = ut.Deferred(),
                    m = ut.Callbacks("once memory"),
                    g = h.statusCode || {},
                    y = {},
                    b = {},
                    w = 0,
                    E = "canceled",
                    S = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (w === 2) {
                                if (!u) {
                                    u = {};
                                    while (t = Hn.exec(o)) u[t[1].toLowerCase()] = t[2]
                                }
                                t = u[e.toLowerCase()]
                            }
                            return t == null ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return w === 2 ? o : null
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return w || (e = b[n] = b[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return w || (h.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (w < 2)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else S.always(e[S.status]);
                            return this
                        },
                        abort: function (e) {
                            var t = e || E;
                            return i && i.abort(t), r(0, t), this
                        }
                    };
                v.promise(S).complete = m.add, S.success = S.done, S.error = S.fail, h.url = ((e || h.url || On) + "").replace(Dn, "").replace(Fn, An[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ut.trim(h.dataType || "*").toLowerCase().match(ft) || [""], h.crossDomain == null && (f = In.exec(h.url.toLowerCase()), h.crossDomain = !(!f || f[1] === An[1] && f[2] === An[2] && (f[3] || (f[1] === "http:" ? 80 : 443)) == (An[3] || (An[1] === "http:" ? 80 : 443)))), h.data && h.processData && typeof h.data != "string" && (h.data = ut.param(h.data, h.traditional)), M(Rn, h, n, S);
                if (w === 2) return S;
                l = h.global, l && ut.active++ === 0 && ut.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !jn.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (_n.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Pn.test(s) ? s.replace(Pn, "$1_=" + Mn++) : s + (_n.test(s) ? "&" : "?") + "_=" + Mn++)), h.ifModified && (ut.lastModified[s] && S.setRequestHeader("If-Modified-Since", ut.lastModified[s]), ut.etag[s] && S.setRequestHeader("If-None-Match", ut.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + (h.dataTypes[0] !== "*" ? ", " + zn + "; q=0.01" : "") : h.accepts["*"]);
                for (c in h.headers) S.setRequestHeader(c, h.headers[c]);
                if (!h.beforeSend || h.beforeSend.call(p, S, h) !== !1 && w !== 2) {
                    E = "abort";
                    for (c in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) S[c](h[c]);
                    i = M(Un, h, n, S);
                    if (!i) r(-1, "No Transport");
                    else {
                        S.readyState = 1, l && d.trigger("ajaxSend", [S, h]), h.async && h.timeout > 0 && (a = setTimeout(function () {
                            S.abort("timeout")
                        }, h.timeout));
                        try {
                            w = 1, i.send(y, r)
                        } catch (x) {
                            if (!(w < 2)) throw x;
                            r(-1, x)
                        }
                    }
                    return S
                }
                return S.abort()
            },
            getScript: function (e, n) {
                return ut.get(e, t, n, "script")
            },
            getJSON: function (e, t, n) {
                return ut.get(e, t, n, "json")
            }
        }), ut.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (e) {
                    return ut.globalEval(e), e
                }
            }
        }), ut.ajaxPrefilter("script", function (e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ut.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var n, r = $.head || ut("head")[0] || $.documentElement;
                return {
                    send: function (t, i) {
                        n = $.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                            if (t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")
                        }, r.insertBefore(n, r.firstChild)
                    },
                    abort: function () {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var Xn = [],
            Vn = /(=)\?(?=&|$)|\?\?/;
        ut.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Xn.pop() || ut.expando + "_" + Mn++;
                return this[e] = !0, e
            }
        }), ut.ajaxPrefilter("json jsonp", function (n, r, i) {
            var s, o, u, a = n.jsonp !== !1 && (Vn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vn.test(n.data) && "data");
            if (a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Vn, "$1" + s) : n.jsonp !== !1 && (n.url += (_n.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
                return u || ut.error(s + " was not called"), u[0]
            }, n.dataTypes[0] = "json", o = e[s], e[s] = function () {
                u = arguments
            }, i.always(function () {
                e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Xn.push(s)), u && ut.isFunction(o) && o(u[0]), u = o = t
            }), "script"
        });
        var $n, Jn, Kn = 0,
            Qn = e.ActiveXObject && function () {
                var e;
                for (e in $n) $n[e](t, !0)
            };
        ut.ajaxSettings.xhr = e.ActiveXObject ? function () {
            return !this.isLocal && H() || B()
        } : H, Jn = ut.ajaxSettings.xhr(), ut.support.cors = !!Jn && "withCredentials" in Jn, Jn = ut.support.ajax = !!Jn, Jn && ut.ajaxTransport(function (n) {
            if (!n.crossDomain || ut.support.cors) {
                var r;
                return {
                    send: function (i, s) {
                        var o, u, a = n.xhr();
                        n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                        if (n.xhrFields)
                            for (u in n.xhrFields) a[u] = n.xhrFields[u];
                        n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (u in i) a.setRequestHeader(u, i[u])
                        } catch (f) {}
                        a.send(n.hasContent && n.data || null), r = function (e, i) {
                            var u, f, l, c, h;
                            try {
                                if (r && (i || a.readyState === 4)) {
                                    r = t, o && (a.onreadystatechange = ut.noop, Qn && delete $n[o]);
                                    if (i) a.readyState !== 4 && a.abort();
                                    else {
                                        c = {}, u = a.status, h = a.responseXML, l = a.getAllResponseHeaders(), h && h.documentElement && (c.xml = h), typeof a.responseText == "string" && (c.text = a.responseText);
                                        try {
                                            f = a.statusText
                                        } catch (p) {
                                            f = ""
                                        }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                    }
                                }
                            } catch (d) {
                                i || s(-1, d)
                            }
                            c && s(u, f, c, l)
                        }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Kn, Qn && ($n || ($n = {}, ut(e).unload(Qn)), $n[o] = r), a.onreadystatechange = r) : r()
                    },
                    abort: function () {
                        r && r(t, !0)
                    }
                }
            }
        });
        var Gn, Yn, Zn = /^(?:toggle|show|hide)$/,
            er = new RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
            tr = /queueHooks$/,
            nr = [R],
            rr = {
                "*": [function (e, t) {
                    var n, r, i = this.createTween(e, t),
                        s = er.exec(t),
                        o = i.cur(),
                        u = +o || 0,
                        a = 1,
                        f = 20;
                    if (s) {
                        n = +s[2], r = s[3] || (ut.cssNumber[e] ? "" : "px");
                        if (r !== "px" && u) {
                            u = ut.css(i.elem, e, !0) || n || 1;
                            do a = a || ".5", u /= a, ut.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                        }
                        i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                    }
                    return i
                }]
            };
        ut.Animation = ut.extend(I, {
            tweener: function (e, t) {
                ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                var n, r = 0,
                    i = e.length;
                for (; r < i; r++) n = e[r], rr[n] = rr[n] || [], rr[n].unshift(t)
            },
            prefilter: function (e, t) {
                t ? nr.unshift(e) : nr.push(e)
            }
        }), ut.Tween = U, U.prototype = {
            constructor: U,
            init: function (e, t, n, r, i, s) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (ut.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = U.propHooks[this.prop];
                return e && e.get ? e.get(this) : U.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = U.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : U.propHooks._default.set(this), this
            }
        }, U.prototype.init.prototype = U.prototype, U.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = ut.css(e.elem, e.prop, "auto"), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
                },
                set: function (e) {
                    ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (e.elem.style[ut.cssProps[e.prop]] != null || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, U.propHooks.scrollTop = U.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ut.each(["toggle", "show", "hide"], function (e, t) {
            var n = ut.fn[t];
            ut.fn[t] = function (e, r, i) {
                return e ==
                    null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(z(t, !0), e, r, i)
            }
        }), ut.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(S).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = ut.isEmptyObject(e),
                    s = ut.speed(t, n, r),
                    o = function () {
                        var t = I(this, ut.extend({}, e), s);
                        o.finish = function () {
                            t.stop(!0)
                        }, (i || ut._data(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function (e, n, r) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
                return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        n = e != null && e + "queueHooks",
                        s = ut.timers,
                        o = ut._data(this);
                    if (n) o[n] && o[n].stop && i(o[n]);
                    else
                        for (n in o) o[n] && o[n].stop && tr.test(n) && i(o[n]);
                    for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                    (t || !r) && ut.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ut._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        s = ut.timers,
                        o = r ? r.length : 0;
                    n.finish = !0, ut.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this);
                    for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ut.each({
            slideDown: z("show"),
            slideUp: z("hide"),
            slideToggle: z("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            ut.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ut.speed = function (e, t, n) {
            var r = e && typeof e == "object" ? ut.extend({}, e) : {
                complete: n || !n && t || ut.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ut.isFunction(t) && t
            };
            r.duration = ut.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in ut.fx.speeds ? ut.fx.speeds[r.duration] : ut.fx.speeds._default;
            if (r.queue == null || r.queue === !0) r.queue = "fx";
            return r.old = r.complete, r.complete = function () {
                ut.isFunction(r.old) && r.old.call(this), r.queue && ut.dequeue(this, r.queue)
            }, r
        }, ut.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ut.timers = [], ut.fx = U.prototype.init, ut.fx.tick = function () {
            var e, n = ut.timers,
                r = 0;
            Gn = ut.now();
            for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
            n.length || ut.fx.stop(), Gn = t
        }, ut.fx.timer = function (e) {
            e() && ut.timers.push(e) && ut.fx.start()
        }, ut.fx.interval = 13, ut.fx.start = function () {
            Yn || (Yn = setInterval(ut.fx.tick, ut.fx.interval))
        }, ut.fx.stop = function () {
            clearInterval(Yn), Yn = null
        }, ut.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function (e) {
            return ut.grep(ut.timers, function (t) {
                return e === t.elem
            }).length
        }), ut.fn.offset = function (e) {
            if (arguments.length) return e === t ? this : this.each(function (t) {
                ut.offset.setOffset(this, e, t)
            });
            var n, r, i = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                o = s && s.ownerDocument;
            if (!o) return;
            return n = o.documentElement, ut.contains(n, s) ? (typeof s.getBoundingClientRect != "undefined" && (i = s.getBoundingClientRect()), r = W(o), {
                top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : i
        }, ut.offset = {
            setOffset: function (e, t, n) {
                var r = ut.css(e, "position");
                r === "static" && (e.style.position = "relative");
                var i = ut(e),
                    s = i.offset(),
                    o = ut.css(e, "top"),
                    u = ut.css(e, "left"),
                    a = (r === "absolute" || r === "fixed") && ut.inArray("auto", [o, u]) > -1,
                    f = {},
                    l = {},
                    c, h;
                a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), ut.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
            }
        }, ut.fn.extend({
            position: function () {
                if (!this[0]) return;
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return ut.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), n.left += ut.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ut.css(r, "marginTop", !0),
                    left: t.left - n.left - ut.css(r, "marginLeft", !0)
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent || $.documentElement;
                    while (e && !ut.nodeName(e, "html") && ut.css(e, "position") === "static") e = e.offsetParent;
                    return e || $.documentElement
                })
            }
        }), ut.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, n) {
            var r = /Y/.test(n);
            ut.fn[e] = function (i) {
                return ut.access(this, function (e, i, s) {
                    var o = W(e);
                    if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                    o ? o.scrollTo(r ? ut(o).scrollLeft() : s, r ? s : ut(o).scrollTop()) : e[i] = s
                }, e, i, arguments.length, null)
            }
        }), ut.each({
            Height: "height",
            Width: "width"
        }, function (e, n) {
            ut.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function (r, i) {
                ut.fn[i] = function (i, s) {
                    var o = arguments.length && (r || typeof i != "boolean"),
                        u = r || (i === !0 || s === !0 ? "margin" : "border");
                    return ut.access(this, function (n, r, i) {
                        var s;
                        return ut.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? ut.css(n, r, u) : ut.style(n, r, i, u)
                    }, n, o ? i : t, o, null)
                }
            })
        }), e.jQuery = e.$ = ut, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
            return ut
        })
    }(window),
    function (e, t, n) {
        "use strict";
        e.fn.foundationMediaQueryViewer = function (t) {
            var n = e.extend(t, {
                    toggleKey: 77
                }),
                r = e(document);
            r.on("keyup.mediaQueryViewer", ":input", function (e) {
                e.which === n.toggleKey && e.stopPropagation()
            }), r.on("keyup.mediaQueryViewer", function (t) {
                var r = e("#fqv");
                t.which === n.toggleKey && (r.length > 0 ? r.remove() : e("body").prepend('<div id="fqv" style="position:fixed;top:4px;left:4px;z-index:999;color:#fff;"><p style="font-size:12px;background:rgba(0,0,0,0.75);padding:5px;margin-bottom:1px;line-height:1.2;"><span class="left">Media:</span> <span style="font-weight:bold;" class="show-for-xlarge">Extra Large</span><span style="font-weight:bold;" class="show-for-large">Large</span><span style="font-weight:bold;" class="show-for-medium">Medium</span><span style="font-weight:bold;" class="show-for-small">Small</span><span style="font-weight:bold;" class="show-for-landscape">Landscape</span><span style="font-weight:bold;" class="show-for-portrait">Portrait</span><span style="font-weight:bold;" class="show-for-touch">Touch</span></p></div>'))
            })
        }
    }(jQuery, this),
    function (e) {
        var t = function () {
            return {
                tmp: [],
                hidden: null,
                adjust: function (t) {
                    var n = this;
                    n.hidden = t.parents().andSelf().filter(":hidden"), n.hidden.each(function () {
                        var t = e(this);
                        n.tmp.push(t.attr("style")), t.css({
                            visibility: "hidden",
                            display: "block"
                        })
                    })
                },
                reset: function () {
                    var t = this;
                    t.hidden.each(function (n) {
                        var r = e(this),
                            i = t.tmp[n];
                        i === undefined ? r.removeAttr("style") : r.attr("style", i)
                    }), t.tmp = [], t.hidden = null
                }
            }
        };
        jQuery.foundation = jQuery.foundation || {}, jQuery.foundation.customForms = jQuery.foundation.customForms || {}, e.foundation.customForms.appendCustomMarkup = function (n) {
            function r(t, n) {
                var r = e(n).hide(),
                    i = r.attr("type"),
                    s = r.next("span.custom." + i);
                s.length === 0 && (s = e('<span class="custom ' + i + '"></span>').insertAfter(r)), s.toggleClass("checked", r.is(":checked")), s.toggleClass("disabled", r.is(":disabled"))
            }

            function i(r, i) {
                var s = t(),
                    o = e(i),
                    u = o.next("div.custom.dropdown"),
                    a = u.find("ul"),
                    f = u.find(".current"),
                    l = u.find(".selector"),
                    c = o.find("option"),
                    h = c.filter(":selected"),
                    p = 0,
                    d = "",
                    v, m = !1;
                if (o.hasClass(n.disable_class)) return;
                if (u.length === 0) {
                    var g = o.hasClass("small") ? "small" : o.hasClass("medium") ? "medium" : o.hasClass("large") ? "large" : o.hasClass("expand") ? "expand" : "";
                    u = e('<div class="' + ["custom", "dropdown", g].join(" ") + '"><a href="#" class="selector"></a><ul /></div>'), l = u.find(".selector"), a = u.find("ul"), d = c.map(function () {
                        return "<li>" + e(this).html() + "</li>"
                    }).get().join(""), a.append(d), m = u.prepend('<a href="#" class="current">' + h.html() + "</a>").find(".current"), o.after(u).hide()
                } else d = c.map(function () {
                    return "<li>" + e(this).html() + "</li>"
                }).get().join(""), a.html("").append(d);
                u.toggleClass("disabled", o.is(":disabled")), v = a.find("li"), c.each(function (t) {
                    this.selected && (v.eq(t).addClass("selected"), m && m.html(e(this).html()))
                }), a.css("width", "auto"), u.css("width", "auto"), u.is(".small, .medium, .large, .expand") || (u.addClass("open"), s.adjust(a), p = v.outerWidth() > p ? v.outerWidth() : p, s.reset(), u.removeClass("open"), u.width(p + 18), a.width(p + 16))
            }
            var s = {
                disable_class: "no-custom"
            };
            n = e.extend(s, n), e("form.custom input:radio[data-customforms!=disabled]").each(r), e("form.custom input:checkbox[data-customforms!=disabled]").each(r), e("form.custom select[data-customforms!=disabled]").each(i)
        };
        var n = function (t) {
                var n = 0,
                    r = t.next();
                $options = t.find("option"), r.find("ul").html(""), $options.each(function () {
                    $li = e("<li>" + e(this).html() + "</li>"), r.find("ul").append($li)
                }), $options.each(function (t) {
                    this.selected && (r.find("li").eq(t).addClass("selected"), r.find(".current").html(e(this).html()))
                }), r.removeAttr("style").find("ul").removeAttr("style"), r.find("li").each(function () {
                    r.addClass("open"), e(this).outerWidth() > n && (n = e(this).outerWidth()), r.removeClass("open")
                }), r.css("width", n + 18 + "px"), r.find("ul").css("width", n + 16 + "px")
            },
            r = function (e) {
                var t = e.prev(),
                    n = t[0];
                !1 === t.is(":disabled") && (n.checked = n.checked ? !1 : !0, e.toggleClass("checked"), t.trigger("change"))
            },
            i = function (e) {
                var t = e.prev(),
                    n = t.closest("form.custom"),
                    r = t[0];
                !1 === t.is(":disabled") && (n.find('input:radio[name="' + t.attr("name") + '"]').next().not(e).removeClass("checked"), e.hasClass("checked") || e.toggleClass("checked"), r.checked = e.hasClass("checked"), t.trigger("change"))
            };
        e(document).on("click", "form.custom span.custom.checkbox", function (t) {
            t.preventDefault(), t.stopPropagation(), r(e(this))
        }), e(document).on("click", "form.custom span.custom.radio", function (t) {
            t.preventDefault(), t.stopPropagation(), i(e(this))
        }), e(document).on("change", "form.custom select[data-customforms!=disabled]", function (t) {
            n(e(this))
        }), e(document).on("click", "form.custom label", function (t) {
            var n = e("#" + e(this).attr("for") + "[data-customforms!=disabled]"),
                s, o;
            n.length !== 0 && (n.attr("type") === "checkbox" ? (t.preventDefault(), s = e(this).find("span.custom.checkbox"), s.length == 0 && (s = e(this).next("span.custom.checkbox")), s.length == 0 && (s = e(this).prev("span.custom.checkbox")), r(s)) : n.attr("type") === "radio" && (t.preventDefault(), o = e(this).find("span.custom.radio"), o.length == 0 && (o = e(this).next("span.custom.radio")), o.length == 0 && (o = e(this).prev("span.custom.radio")), i(o)))
        }), e(document).on("click", "form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector", function (t) {
            var n = e(this),
                r = n.closest("div.custom.dropdown"),
                i = r.prev();
            t.preventDefault(), e("div.dropdown").removeClass("open");
            if (!1 === i.is(":disabled")) return r.toggleClass("open"), r.hasClass("open") ? e(document).bind("click.customdropdown", function (t) {
                r.removeClass("open"), e(document).unbind(".customdropdown")
            }) : e(document).unbind(".customdropdown"), !1
        }), e(document).on("click", "form.custom div.custom.dropdown li", function (t) {
            var n = e(this),
                r = n.closest("div.custom.dropdown"),
                i = r.prev(),
                s = 0;
            t.preventDefault(), t.stopPropagation(), e("div.dropdown").removeClass("open"), n.closest("ul").find("li").removeClass("selected"), n.addClass("selected"), r.removeClass("open").find("a.current").html(n.html()), n.closest("ul").find("li").each(function (e) {
                n[0] == this && (s = e)
            }), i[0].selectedIndex = s, i.trigger("change")
        }), e.fn.foundationCustomForms = e.foundation.customForms.appendCustomMarkup
    }(jQuery),
    function (e) {
        typeof define == "function" && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function (e, t) {
        function n(e) {
            function t(e) {
                r ? (n(), F(t), i = !0, r = !1) : i = !1
            }
            var n = e,
                r = !1,
                i = !1;
            this.kick = function (e) {
                r = !0, i || t()
            }, this.end = function (e) {
                var t = n;
                if (!e) return;
                i ? (n = r ? function () {
                    t(), e()
                } : e, r = !0) : e()
            }
        }

        function r() {
            return !0
        }

        function i() {
            return !1
        }

        function s(e) {
            e.preventDefault()
        }

        function o(e) {
            if (I[e.target.tagName.toLowerCase()]) return;
            e.preventDefault()
        }

        function u(e) {
            return e.which === 1 && !e.ctrlKey && !e.altKey
        }

        function a(e, t) {
            var n, r;
            if (e.identifiedTouch) return e.identifiedTouch(t);
            n = -1, r = e.length;
            while (++n < r)
                if (e[n].identifier === t) return e[n]
        }

        function f(e, t) {
            var n = a(e.changedTouches, t.identifier);
            if (!n) return;
            if (n.pageX === t.pageX && n.pageY === t.pageY) return;
            return n
        }

        function l(e) {
            var t;
            if (!u(e)) return;
            t = {
                target: e.target,
                startX: e.pageX,
                startY: e.pageY,
                timeStamp: e.timeStamp
            }, H(document, q.move, c, t), H(document, q.cancel, h, t)
        }

        function c(e) {
            var t = e.data;
            y(e, t, e, p)
        }

        function h(e) {
            p()
        }

        function p() {
            B(document, q.move, c), B(document, q.cancel, p)
        }

        function d(e) {
            var t, n;
            if (I[e.target.tagName.toLowerCase()]) return;
            t = e.changedTouches[0], n = {
                target: t.target,
                startX: t.pageX,
                startY: t.pageY,
                timeStamp: e.timeStamp,
                identifier: t.identifier
            }, H(document, R.move + "." + t.identifier, v, n), H(document, R.cancel + "." + t.identifier, m, n)
        }

        function v(e) {
            var t = e.data,
                n = f(e, t);
            if (!n) return;
            y(e, t, n, g)
        }

        function m(e) {
            var t = e.data,
                n = a(e.changedTouches, t.identifier);
            if (!n) return;
            g(t.identifier)
        }

        function g(e) {
            B(document, "." + e, v), B(document, "." + e, m)
        }

        function y(e, t, n, r) {
            var i = n.pageX - t.startX,
                s = n.pageY - t.startY;
            if (i * i + s * s < P * P) return;
            E(e, t, n, i, s, r)
        }

        function b() {
            return this._handled = r, !1
        }

        function w(e) {
            e._handled()
        }

        function E(e, t, n, r, i, s) {
            var o = t.target,
                u, a;
            u = e.targetTouches, a = e.timeStamp - t.timeStamp, t.type = "movestart", t.distX = r, t.distY = i, t.deltaX = r, t.deltaY = i, t.pageX = n.pageX, t.pageY = n.pageY, t.velocityX = r / a, t.velocityY = i / a, t.targetTouches = u, t.finger = u ? u.length : 1, t._handled = b, t._preventTouchmoveDefault = function () {
                e.preventDefault()
            }, j(t.target, t), s(t.identifier)
        }

        function S(e) {
            var t = e.data.event,
                n = e.data.timer;
            L(t, e, e.timeStamp, n)
        }

        function x(e) {
            var t = e.data.event,
                n = e.data.timer;
            T(), A(t, n, function () {
                setTimeout(function () {
                    B(t.target, "click", i)
                }, 0)
            })
        }

        function T(e) {
            B(document, q.move, S), B(document, q.end, x)
        }

        function N(e) {
            var t = e.data.event,
                n = e.data.timer,
                r = f(e, t);
            if (!r) return;
            e.preventDefault(), t.targetTouches = e.targetTouches, L(t, r, e.timeStamp, n)
        }

        function C(e) {
            var t = e.data.event,
                n = e.data.timer,
                r = a(e.changedTouches, t.identifier);
            if (!r) return;
            k(t), A(t, n)
        }

        function k(e) {
            B(document, "." + e.identifier, N), B(document, "." + e.identifier, C)
        }

        function L(e, t, n, r) {
            var i = n - e.timeStamp;
            e.type = "move", e.distX = t.pageX - e.startX, e.distY = t.pageY - e.startY, e.deltaX = t.pageX - e.pageX, e.deltaY = t.pageY - e.pageY, e.velocityX = .3 * e.velocityX + .7 * e.deltaX / i, e.velocityY = .3 * e.velocityY + .7 * e.deltaY / i, e.pageX = t.pageX, e.pageY = t.pageY, r.kick()
        }

        function A(e, t, n) {
            t.end(function () {
                return e.type = "moveend", j(e.target, e), n && n()
            })
        }

        function O(e, t, n) {
            return H(this, "movestart.move", w), !0
        }

        function M(e) {
            return B(this, "dragstart drag", s), B(this, "mousedown touchstart", o), B(this, "movestart", w), !0
        }

        function _(e) {
            if (e.namespace === "move" || e.namespace === "moveend") return;
            H(this, "dragstart." + e.guid + " drag." + e.guid, s, t, e.selector), H(this, "mousedown." + e.guid, o, t, e.selector)
        }

        function D(e) {
            if (e.namespace === "move" || e.namespace === "moveend") return;
            B(this, "dragstart." + e.guid + " drag." + e.guid), B(this, "mousedown." + e.guid)
        }
        var P = 6,
            H = e.event.add,
            B = e.event.remove,
            j = function (t, n, r) {
                e.event.trigger(n, r, t)
            },
            F = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
                    return window.setTimeout(function () {
                        e()
                    }, 25)
                }
            }(),
            I = {
                textarea: !0,
                input: !0,
                select: !0,
                button: !0
            },
            q = {
                move: "mousemove",
                cancel: "mouseup dragstart",
                end: "mouseup"
            },
            R = {
                move: "touchmove",
                cancel: "touchend",
                end: "touchend"
            };
        e.event.special.movestart = {
            setup: O,
            teardown: M,
            add: _,
            remove: D,
            _default: function (e) {
                var r, s;
                if (!e._handled()) return;
                r = {
                    target: e.target,
                    startX: e.startX,
                    startY: e.startY,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    distX: e.distX,
                    distY: e.distY,
                    deltaX: e.deltaX,
                    deltaY: e.deltaY,
                    velocityX: e.velocityX,
                    velocityY: e.velocityY,
                    timeStamp: e.timeStamp,
                    identifier: e.identifier,
                    targetTouches: e.targetTouches,
                    finger: e.finger
                }, s = {
                    event: r,
                    timer: new n(function (t) {
                        j(e.target, r)
                    })
                }, e.identifier === t ? (H(e.target, "click", i), H(document, q.move, S, s), H(document, q.end, x, s)) : (e._preventTouchmoveDefault(), H(document, R.move + "." + e.identifier, N, s), H(document, R.end + "." + e.identifier, C, s))
            }
        }, e.event.special.move = {
            setup: function () {
                H(this, "movestart.move", e.noop)
            },
            teardown: function () {
                B(this, "movestart.move", e.noop)
            }
        }, e.event.special.moveend = {
            setup: function () {
                H(this, "movestart.moveend", e.noop)
            },
            teardown: function () {
                B(this, "movestart.moveend", e.noop)
            }
        }, H(document, "mousedown.move", l), H(document, "touchstart.move", d), typeof Array.prototype.indexOf == "function" && function (e, t) {
            var n = ["changedTouches", "targetTouches"],
                r = n.length;
            while (r--) e.event.props.indexOf(n[r]) === -1 && e.event.props.push(n[r])
        }(e)
    }),
    function (e) {
        typeof define == "function" && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function (e, t) {
        function n(e) {
            var t, n, r;
            t = e.target.offsetWidth, n = e.target.offsetHeight, r = {
                distX: e.distX,
                distY: e.distY,
                velocityX: e.velocityX,
                velocityY: e.velocityY,
                finger: e.finger
            };
            if (e.distX > e.distY) {
                if (e.distX > -e.distY) {
                    if (e.distX / t > u.threshold || e.velocityX * e.distX / t * u.sensitivity > 1) r.type = "swiperight", o(e.currentTarget, r)
                } else if (-e.distY / n > u.threshold || e.velocityY * e.distY / t * u.sensitivity > 1) r.type = "swipeup", o(e.currentTarget, r)
            } else if (e.distX > -e.distY) {
                if (e.distY / n > u.threshold || e.velocityY * e.distY / t * u.sensitivity > 1) r.type = "swipedown", o(e.currentTarget, r)
            } else if (-e.distX / t > u.threshold || e.velocityX * e.distX / t * u.sensitivity > 1) r.type = "swipeleft", o(e.currentTarget, r)
        }

        function r(t) {
            var n = e.data(t, "event_swipe");
            return n || (n = {
                count: 0
            }, e.data(t, "event_swipe", n)), n
        }
        var i = e.event.add,
            s = e.event.remove,
            o = function (t, n, r) {
                e.event.trigger(n, r, t)
            },
            u = {
                threshold: .4,
                sensitivity: 6
            };
        e.event.special.swipe = e.event.special.swipeleft = e.event.special.swiperight = e.event.special.swipeup = e.event.special.swipedown = {
            setup: function (e, t, s) {
                var e = r(this);
                if (e.count++ > 0) return;
                return i(this, "moveend", n), !0
            },
            teardown: function () {
                var e = r(this);
                if (--e.count > 0) return;
                return s(this, "moveend", n), !0
            },
            settings: u
        }
    }),
    function (e) {
        "use strict";
        var t = !1;
        e(document).on("click", "a[data-reveal-id]", function (t) {
            t.preventDefault();
            var n = e(this).attr("data-reveal-id");
            e("#" + n).reveal(e(this).data())
        }), e.fn.reveal = function (n) {
            var r = e(document),
                i = {
                    animation: "fadeAndPop",
                    animationSpeed: 300,
                    closeOnBackgroundClick: !0,
                    dismissModalClass: "close-reveal-modal",
                    open: e.noop,
                    opened: e.noop,
                    close: e.noop,
                    closed: e.noop
                };
            return n = e.extend({}, i, n), this.not(".reveal-modal.open").each(function () {
                function i() {
                    v = !1
                }

                function s() {
                    v = !0
                }

                function o() {
                    var n = e(".reveal-modal.open");
                    n.length === 1 && (t = !0, n.trigger("reveal:close"))
                }

                function u() {
                    v || (s(), o(), h.addClass("open"), n.animation === "fadeAndPop" && (g.open.top = r.scrollTop() - d, g.open.opacity = 0, h.css(g.open), m.fadeIn(n.animationSpeed / 2), h.delay(n.animationSpeed / 2).animate({
                        top: r.scrollTop() + p + "px",
                        opacity: 1
                    }, n.animationSpeed, function () {
                        h.trigger("reveal:opened")
                    })), n.animation === "fade" && (g.open.top = r.scrollTop() + p, g.open.opacity = 0, h.css(g.open), m.fadeIn(n.animationSpeed / 2), h.delay(n.animationSpeed / 2).animate({
                        opacity: 1
                    }, n.animationSpeed, function () {
                        h.trigger("reveal:opened")
                    })), n.animation === "none" && (g.open.top = r.scrollTop() + p, g.open.opacity = 1, h.css(g.open), m.css({
                        display: "block"
                    }), h.trigger("reveal:opened")))
                }

                function a() {
                    var e = h.find(".flex-video"),
                        t = e.find("iframe");
                    t.length > 0 && (t.attr("src", t.data("src")), e.fadeIn(100))
                }

                function f() {
                    v || (s(), h.removeClass("open"), n.animation === "fadeAndPop" && (h.animate({
                        top: r.scrollTop() - d + "px",
                        opacity: 0
                    }, n.animationSpeed / 2, function () {
                        h.css(g.close)
                    }), t ? h.trigger("reveal:closed") : m.delay(n.animationSpeed).fadeOut(n.animationSpeed, function () {
                        h.trigger("reveal:closed")
                    })), n.animation === "fade" && (h.animate({
                        opacity: 0
                    }, n.animationSpeed, function () {
                        h.css(g.close)
                    }), t ? h.trigger("reveal:closed") : m.delay(n.animationSpeed).fadeOut(n.animationSpeed, function () {
                        h.trigger("reveal:closed")
                    })), n.animation === "none" && (h.css(g.close), t || m.css({
                        display: "none"
                    }), h.trigger("reveal:closed")), t = !1)
                }

                function l() {
                    h.unbind(".reveal"), m.unbind(".reveal"), y.unbind(".reveal"), e("body").unbind(".reveal")
                }

                function c() {
                    var e = h.find(".flex-video"),
                        t = e.find("iframe");
                    t.length > 0 && (t.data("src", t.attr("src")), t.attr("src", ""), e.fadeOut(100))
                }
                var h = e(this),
                    p = parseInt(h.css("top"), 10),
                    d = h.height() + p,
                    v = !1,
                    m = e(".reveal-modal-bg"),
                    g = {
                        open: {
                            top: 0,
                            opacity: 0,
                            visibility: "visible",
                            display: "block"
                        },
                        close: {
                            top: p,
                            opacity: 1,
                            visibility: "hidden",
                            display: "none"
                        }
                    },
                    y;
                m.length === 0 && (m = e("<div />", {
                    "class": "reveal-modal-bg"
                }).insertAfter(h), m.fadeTo("fast", .8)), h.bind("reveal:open.reveal", u), h.bind("reveal:open.reveal", a), h.bind("reveal:close.reveal", f), h.bind("reveal:closed.reveal", c), h.bind("reveal:opened.reveal reveal:closed.reveal", i), h.bind("reveal:closed.reveal", l), h.bind("reveal:open.reveal", n.open), h.bind("reveal:opened.reveal", n.opened), h.bind("reveal:close.reveal", n.close), h.bind("reveal:closed.reveal", n.closed), h.trigger("reveal:open"), y = e("." + n.dismissModalClass).bind("click.reveal", function () {
                    h.trigger("reveal:close")
                }), n.closeOnBackgroundClick && (m.css({
                    cursor: "pointer"
                }), m.bind("click.reveal", function () {
                    h.trigger("reveal:close")
                })), e("body").bind("keyup.reveal", function (e) {
                    e.which === 27 && h.trigger("reveal:close")
                })
            })
        }
    }(jQuery),
    function (e) {
        "use strict";
        e.fn.findFirstImage = function () {
            return this.first().find("img").andSelf().filter("img").first()
        };
        var t = {
            defaults: {
                animation: "horizontal-push",
                animationSpeed: 600,
                timer: !0,
                advanceSpeed: 4e3,
                pauseOnHover: !1,
                startClockOnMouseOut: !1,
                startClockOnMouseOutAfter: 1e3,
                directionalNav: !0,
                directionalNavRightText: "Right",
                directionalNavLeftText: "Left",
                captions: !0,
                captionAnimation: "fade",
                captionAnimationSpeed: 600,
                resetTimerOnClick: !1,
                bullets: !1,
                bulletThumbs: !1,
                bulletThumbLocation: "",
                bulletThumbsHideOnSmall: !0,
                afterSlideChange: e.noop,
                afterLoadComplete: e.noop,
                fluid: !0,
                centerBullets: !0,
                singleCycle: !1,
                slideNumber: !1,
                stackOnSmall: !1
            },
            activeSlide: 0,
            numberSlides: 0,
            orbitWidth: null,
            orbitHeight: null,
            locked: null,
            timerRunning: null,
            degrees: 0,
            wrapperHTML: '<div class="orbit-wrapper" />',
            timerHTML: '<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>',
            captionHTML: '<div class="orbit-caption"></div>',
            directionalNavHTML: '<div class="slider-nav hide-for-small"><span class="right"></span><span class="left"></span></div>',
            bulletHTML: '<ul class="orbit-bullets"></ul>',
            slideNumberHTML: '<span class="orbit-slide-counter"></span>',
            init: function (t, n) {
                var r, i = 0,
                    s = this;
                this.clickTimer = e.proxy(this.clickTimer, this), this.addBullet = e.proxy(this.addBullet, this), this.resetAndUnlock = e.proxy(this.resetAndUnlock, this), this.stopClock = e.proxy(this.stopClock, this), this.startTimerAfterMouseLeave = e.proxy(this.startTimerAfterMouseLeave, this), this.clearClockMouseLeaveTimer = e.proxy(this.clearClockMouseLeaveTimer, this), this.rotateTimer = e.proxy(this.rotateTimer, this), this.options = e.extend({}, this.defaults, n), this.options.timer === "false" && (this.options.timer = !1), this.options.captions === "false" && (this.options.captions = !1), this.options.directionalNav === "false" && (this.options.directionalNav = !1), this.$element = e(t), this.$wrapper = this.$element.wrap(this.wrapperHTML).parent(), this.$slides = this.$element.children("img, a, div, figure, li"), this.$element.on("movestart", function (e) {
                    (e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && e.preventDefault()
                }), this.$element.bind("orbit.next", function () {
                    s.shift("next")
                }), this.$element.bind("orbit.prev", function () {
                    s.shift("prev")
                }), this.$element.bind("swipeleft", function () {
                    e(this).trigger("orbit.next")
                }), this.$element.bind("swiperight", function () {
                    e(this).trigger("orbit.prev")
                }), this.$element.bind("orbit.goto", function (e, t) {
                    s.shift(t)
                }), this.$element.bind("orbit.start", function (e, t) {
                    s.startClock()
                }), this.$element.bind("orbit.stop", function (e, t) {
                    s.stopClock()
                }), r = this.$slides.filter("img"), r.length === 0 ? this.loaded() : r.bind("imageready", function () {
                    i += 1, i === r.length && s.loaded()
                })
            },
            loaded: function () {
                this.$element.addClass("orbit").css({
                    width: "1px",
                    height: "1px"
                }), this.options.stackOnSmall && this.$element.addClass("orbit-stack-on-small"), this.$slides.addClass("orbit-slide").css({
                    opacity: 0
                }), this.setDimentionsFromLargestSlide(), this.updateOptionsIfOnlyOneSlide(), this.setupFirstSlide(), this.notifySlideChange(), this.options.timer && (this.setupTimer(), this.startClock()), this.options.captions && this.setupCaptions(), this.options.directionalNav && this.setupDirectionalNav(), this.options.bullets && (this.setupBulletNav(), this.setActiveBullet()), this.options.afterLoadComplete.call(this), Holder.run()
            },
            currentSlide: function () {
                return this.$slides.eq(this.activeSlide)
            },
            notifySlideChange: function () {
                if (this.options.slideNumber) {
                    var t = this.activeSlide + 1 + " of " + this.$slides.length;
                    this.$element.trigger("orbit.change", {
                        slideIndex: this.activeSlide,
                        slideCount: this.$slides.length
                    });
                    if (this.$counter === undefined) {
                        var n = e(this.slideNumberHTML).html(t);
                        this.$counter = n, this.$wrapper.append(this.$counter)
                    } else this.$counter.html(t)
                }
            },
            setDimentionsFromLargestSlide: function () {
                var t = this,
                    n;
                t.$element.add(t.$wrapper).width(this.$slides.first().outerWidth()), t.$element.add(t.$wrapper).height(this.$slides.first().height()), t.orbitWidth = this.$slides.first().outerWidth(), t.orbitHeight = this.$slides.first().height(), n = this.$slides.first().findFirstImage().clone(), this.$slides.each(function () {
                    var r = e(this),
                        i = r.outerWidth(),
                        s = r.height();
                    i > t.$element.outerWidth() && (t.$element.add(t.$wrapper).width(i), t.orbitWidth = t.$element.outerWidth()), s > t.$element.height() && (t.$element.add(t.$wrapper).height(s), t.orbitHeight = t.$element.height(), n = e(this).findFirstImage().clone()), t.numberSlides += 1
                }), this.options.fluid && (typeof this.options.fluid == "string" && (n = e("<img>").attr("data-src", "holder.js/" + this.options.fluid)), t.$element.prepend(n), n.addClass("fluid-placeholder"), t.$element.add(t.$wrapper).css({
                    width: "inherit"
                }), t.$element.add(t.$wrapper).css({
                    height: "inherit"
                }), e(window).bind("resize", function () {
                    t.orbitWidth = t.$element.outerWidth(), t.orbitHeight = t.$element.height()
                }))
            },
            lock: function () {
                this.locked = !0
            },
            unlock: function () {
                this.locked = !1
            },
            updateOptionsIfOnlyOneSlide: function () {
                this.$slides.length === 1 && (this.options.directionalNav = !1, this.options.timer = !1, this.options.bullets = !1)
            },
            setupFirstSlide: function () {
                var e = this;
                this.$slides.first().css({
                    "z-index": 3,
                    opacity: 1
                }).fadeIn(function () {
                    e.$slides.css({
                        display: "block"
                    })
                })
            },
            startClock: function () {
                var e = this;
                if (!this.options.timer) return !1;
                this.$timer.is(":hidden") ? this.clock = setInterval(function () {
                    e.$element.trigger("orbit.next")
                }, this.options.advanceSpeed) : (this.timerRunning = !0, this.$pause.removeClass("active"), this.clock = setInterval(this.rotateTimer, this.options.advanceSpeed / 180, !1))
            },
            rotateTimer: function (e) {
                var t = "rotate(" + this.degrees + "deg)";
                this.degrees += 2, this.$rotator.css({
                    "-webkit-transform": t,
                    "-moz-transform": t,
                    "-o-transform": t,
                    "-ms-transform": t
                }), e && (this.degrees = 0, this.$rotator.removeClass("move"), this.$mask.removeClass("move")), this.degrees > 180 && (this.$rotator.addClass("move"), this.$mask.addClass("move")), this.degrees > 360 && (this.$rotator.removeClass("move"), this.$mask.removeClass("move"), this.degrees = 0, this.$element.trigger("orbit.next"))
            },
            stopClock: function () {
                if (!this.options.timer) return !1;
                this.timerRunning = !1, clearInterval(this.clock), this.$pause.addClass("active")
            },
            setupTimer: function () {
                this.$timer = e(this.timerHTML), this.$wrapper.append(this.$timer), this.$rotator = this.$timer.find(".rotator"), this.$mask = this.$timer.find(".mask"), this.$pause = this.$timer.find(".pause"), this.$timer.click(this.clickTimer), this.options.startClockOnMouseOut && (this.$wrapper.mouseleave(this.startTimerAfterMouseLeave), this.$wrapper.mouseenter(this.clearClockMouseLeaveTimer)), this.options.pauseOnHover && this.$wrapper.mouseenter(this.stopClock)
            },
            startTimerAfterMouseLeave: function () {
                var e = this;
                this.outTimer = setTimeout(function () {
                    e.timerRunning || e.startClock()
                }, this.options.startClockOnMouseOutAfter)
            },
            clearClockMouseLeaveTimer: function () {
                clearTimeout(this.outTimer)
            },
            clickTimer: function () {
                this.timerRunning ? this.stopClock() : this.startClock()
            },
            setupCaptions: function () {
                this.$caption = e(this.captionHTML), this.$wrapper.append(this.$caption), this.setCaption()
            },
            setCaption: function () {
                var t = this.currentSlide().attr("data-caption"),
                    n;
                if (!this.options.captions) return !1;
                if (t) {
                    if (e.trim(e(t).text()).length < 1) return !1;
                    t.charAt(0) == "#" && (t = t.substring(1, t.length)), n = e("#" + t).html(), this.$caption.attr("id", t).html(n);
                    switch (this.options.captionAnimation) {
                    case "none":
                        this.$caption.show();
                        break;
                    case "fade":
                        this.$caption.fadeIn(this.options.captionAnimationSpeed);
                        break;
                    case "slideOpen":
                        this.$caption.slideDown(this.options.captionAnimationSpeed)
                    }
                } else switch (this.options.captionAnimation) {
                case "none":
                    this.$caption.hide();
                    break;
                case "fade":
                    this.$caption.fadeOut(this.options.captionAnimationSpeed);
                    break;
                case "slideOpen":
                    this.$caption.slideUp(this.options.captionAnimationSpeed)
                }
            },
            setupDirectionalNav: function () {
                var t = this,
                    n = e(this.directionalNavHTML);
                n.find(".right").html(this.options.directionalNavRightText), n.find(".left").html(this.options.directionalNavLeftText), this.$wrapper.append(n), this.$wrapper.find(".left").click(function () {
                    t.stopClock(), t.options.resetTimerOnClick && (t.rotateTimer(!0), t.startClock()), t.$element.trigger("orbit.prev")
                }), this.$wrapper.find(".right").click(function () {
                    t.stopClock(), t.options.resetTimerOnClick && (t.rotateTimer(!0), t.startClock()), t.$element.trigger("orbit.next")
                })
            },
            setupBulletNav: function () {
                this.$bullets = e(this.bulletHTML), this.$wrapper.append(this.$bullets), this.$slides.each(this.addBullet), this.$element.addClass("with-bullets"), this.options.centerBullets && this.$bullets.css("margin-left", -this.$bullets.outerWidth() / 2), this.options.bulletThumbsHideOnSmall && this.$bullets.addClass("hide-for-small")
            },
            addBullet: function (t, n) {
                var r = t + 1,
                    i = e("<li>" + r + "</li>"),
                    s, o = this;
                this.options.bulletThumbs && (s = e(n).attr("data-thumb"), s && i.addClass("has-thumb").css({
                    background: "url(" + this.options.bulletThumbLocation + s + ") no-repeat"
                })), this.$bullets.append(i), i.data("index", t), i.click(function () {
                    o.stopClock(), o.options.resetTimerOnClick && (o.rotateTimer(!0), o.startClock()), o.$element.trigger("orbit.goto", [i.data("index")])
                })
            },
            setActiveBullet: function () {
                if (!this.options.bullets) return !1;
                this.$bullets.find("li").removeClass("active").eq(this.activeSlide).addClass("active")
            },
            resetAndUnlock: function () {
                this.$slides.eq(this.prevActiveSlide).css({
                    "z-index": 1
                }), this.unlock(), this.options.afterSlideChange.call(this, this.$slides.eq(this.prevActiveSlide), this.$slides.eq(this.activeSlide))
            },
            shift: function (t) {
                var n = t;
                this.prevActiveSlide = this.activeSlide;
                if (this.prevActiveSlide == n) return !1;
                if (this.$slides.length == "1") return !1;
                this.locked || (this.lock(), t == "next" ? (this.activeSlide++, this.activeSlide == this.numberSlides && (this.activeSlide = 0)) : t == "prev" ? (this.activeSlide--, this.activeSlide < 0 && (this.activeSlide = this.numberSlides - 1)) : (this.activeSlide = t, this.prevActiveSlide < this.activeSlide ? n = "next" : this.prevActiveSlide > this.activeSlide && (n = "prev")), this.setActiveBullet(), this.notifySlideChange(), this.$slides.eq(this.prevActiveSlide).css({
                    "z-index": 2
                }), this.options.animation == "fade" && (this.$slides.eq(this.activeSlide).css({
                    opacity: 0,
                    "z-index": 3
                }).animate({
                    opacity: 1
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).animate({
                    opacity: 0
                }, this.options.animationSpeed)), this.options.animation == "horizontal-slide" && (n == "next" && this.$slides.eq(this.activeSlide).css({
                    left: this.orbitWidth,
                    "z-index": 3
                }).css("opacity", 1).animate({
                    left: 0
                }, this.options.animationSpeed, this.resetAndUnlock), n == "prev" && this.$slides.eq(this.activeSlide).css({
                    left: -this.orbitWidth,
                    "z-index": 3
                }).css("opacity", 1).animate({
                    left: 0
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0)), this.options.animation == "vertical-slide" && (n == "prev" && (this.$slides.eq(this.activeSlide).css({
                    top: this.orbitHeight,
                    "z-index": 3
                }).css("opacity", 1).animate({
                    top: 0
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0)), n == "next" && this.$slides.eq(this.activeSlide).css({
                    top: -this.orbitHeight,
                    "z-index": 3
                }).css("opacity", 1).animate({
                    top: 0
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0)), this.options.animation == "horizontal-push" && (n == "next" && (this.$slides.eq(this.activeSlide).css({
                    left: this.orbitWidth,
                    "z-index": 3
                }).animate({
                    left: 0,
                    opacity: 1
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).animate({
                    left: -this.orbitWidth
                }, this.options.animationSpeed, "", function () {
                    e(this).css({
                        opacity: 0
                    })
                })), n == "prev" && (this.$slides.eq(this.activeSlide).css({
                    left: -this.orbitWidth,
                    "z-index": 3
                }).animate({
                    left: 0,
                    opacity: 1
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).animate({
                    left: this.orbitWidth
                }, this.options.animationSpeed, "", function () {
                    e(this).css({
                        opacity: 0
                    })
                }))), this.options.animation == "vertical-push" && (n == "next" && (this.$slides.eq(this.activeSlide).css({
                    top: -this.orbitHeight,
                    "z-index": 3
                }).css("opacity", 1).animate({
                    top: 0,
                    opacity: 1
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0).animate({
                    top: this.orbitHeight
                }, this.options.animationSpeed, "")), n == "prev" && (this.$slides.eq(this.activeSlide).css({
                    top: this.orbitHeight,
                    "z-index": 3
                }).css("opacity", 1).animate({
                    top: 0
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0).animate({
                    top: -this.orbitHeight
                }, this.options.animationSpeed))), this.setCaption()), this.activeSlide === this.$slides.length - 1 && this.options.singleCycle && this.stopClock()
            }
        };
        e.fn.orbit = function (n) {
            return this.each(function () {
                var r = e.extend({}, t);
                r.init(this, n)
            })
        }
    }(jQuery),
    function (e) {
        function t(t, n) {
            var r = e(t);
            r.bind("load.imageready", function () {
                n.apply(t, arguments), r.unbind("load.imageready")
            })
        }
        var n = {};
        e.event.special.imageready = {
            setup: function (e, t, r) {
                n = e || n
            },
            add: function (r) {
                var i = e(this),
                    s;
                this.nodeType === 1 && this.tagName.toLowerCase() === "img" && this.src !== "" && (n.forceLoad ? (s = i.attr("src"), i.attr("src", ""), t(this, r.handler), i.attr("src", s)) : this.complete || this.readyState === 4 ? r.handler.apply(this, arguments) : t(this, r.handler))
            },
            teardown: function (t) {
                e(this).unbind(".imageready")
            }
        }
    }(jQuery);
var Holder = Holder || {};
(function (e, t) {
    function n(e, t) {
        var n = "complete",
            r = "readystatechange",
            i = !1,
            s = i,
            o = !0,
            u = e.document,
            a = u.documentElement,
            f = u.addEventListener ? "addEventListener" : "attachEvent",
            l = u.addEventListener ? "removeEventListener" : "detachEvent",
            c = u.addEventListener ? "" : "on",
            h = function (o) {
                (o.type != r || u.readyState == n) && ((o.type == "load" ? e : u)[l](c + o.type, h, i), !s && (s = !0) && t.call(e, null))
            },
            p = function () {
                try {
                    a.doScroll("left")
                } catch (e) {
                    setTimeout(p, 50);
                    return
                }
                h("poll")
            };
        if (u.readyState == n) t.call(e, "lazy");
        else {
            if (u.createEventObject && a.doScroll) {
                try {
                    o = !e.frameElement
                } catch (d) {}
                o && p()
            }
            u[f](c + "DOMContentLoaded", h, i), u[f](c + r, h, i), e[f](c + "load", h, i)
        }
    }

    function r(e) {
        e = e.match(/^(\W)?(.*)/);
        var t = document["getElement" + (e[1] ? e[1] == "#" ? "ById" : "sByClassName" : "sByTagName")](e[2]),
            n = [];
        return t != null && (t.length ? n = t : t.length == 0 ? n = t : n = [t]), n
    }

    function i(e, t) {
        var n = {};
        for (var r in e) n[r] = e[r];
        for (var i in t) n[i] = t[i];
        return n
    }

    function s(e, t, n) {
        var r = [t.height, t.width].sort(),
            i = Math.round(r[1] / 16),
            s = Math.round(r[0] / 16),
            o = Math.max(n.size, i);
        a.width = t.width, a.height = t.height, e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = n.background, e.fillRect(0, 0, t.width, t.height), e.fillStyle = n.foreground, e.font = "bold " + o + "px sans-serif";
        var u = n.text ? n.text : t.width + "x" + t.height;
        return Math.round(e.measureText(u).width) / t.width > 1 && (o = Math.max(s, n.size)), e.font = "bold " + o + "px sans-serif", e.fillText(u, t.width / 2, t.height / 2, t.width), a.toDataURL("image/png")
    }
    var o = !1,
        u = !1,
        a = document.createElement("canvas");
    if (!a.getContext) u = !0;
    else if (a.toDataURL("image/png").indexOf("data:image/png") < 0) u = !0;
    else var f = a.getContext("2d");
    var l = {
        domain: "holder.js",
        images: "img",
        themes: {
            gray: {
                background: "#eee",
                foreground: "#aaa",
                size: 12
            },
            social: {
                background: "#3a5a97",
                foreground: "#fff",
                size: 12
            },
            industrial: {
                background: "#434A52",
                foreground: "#C2F200",
                size: 12
            }
        }
    };
    e.flags = {
        dimensions: {
            regex: /([0-9]+)x([0-9]+)/,
            output: function (e) {
                var t = this.regex.exec(e);
                return {
                    width: +t[1],
                    height: +t[2]
                }
            }
        },
        colors: {
            regex: /#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,
            output: function (e) {
                var t = this.regex.exec(e);
                return {
                    size: l.themes.gray.size,
                    foreground: "#" + t[2],
                    background: "#" + t[1]
                }
            }
        },
        text: {
            regex: /text\:(.*)/,
            output: function (e) {
                return this.regex.exec(e)[1]
            }
        }
    };
    for (var c in e.flags) e.flags[c].match = function (e) {
        return e.match(this.regex)
    };
    e.add_theme = function (t, n) {
        return t != null && n != null && (l.themes[t] = n), e
    }, e.add_image = function (t, n) {
        var i = r(n);
        if (i.length)
            for (var s = 0, o = i.length; s < o; s++) {
                var u = document.createElement("img");
                u.setAttribute("data-src", t), i[s].appendChild(u)
            }
        return e
    }, e.run = function (t) {
        var n = i(l, t),
            o = r(n.images),
            a = !0;
        for (var c = o.length, h = 0; h < c; h++) {
            var p = l.themes.gray,
                d = o[h].getAttribute("data-src") || o[h].getAttribute("src");
            if (d && !!~d.indexOf(n.domain)) {
                var v = !1,
                    m = null,
                    g = null,
                    y = d.substr(d.indexOf(n.domain) + n.domain.length + 1).split("/");
                for (sl = y.length, j = 0; j < sl; j++) e.flags.dimensions.match(y[j]) ? (v = !0, m = e.flags.dimensions.output(y[j])) : e.flags.colors.match(y[j]) ? p = e.flags.colors.output(y[j]) : n.themes[y[j]] ? p = n.themes[y[j]] : e.flags.text.match(y[j]) && (g = e.flags.text.output(y[j]));
                if (v) {
                    o[h].setAttribute("data-src", d);
                    var b = m.width + "x" + m.height;
                    o[h].setAttribute("alt", g ? g : p.text ? p.text + " [" + b + "]" : b), o[h].style.backgroundColor = p.background;
                    var p = g ? i(p, {
                        text: g
                    }) : p;
                    u || o[h].setAttribute("src", s(f, m, p))
                }
            }
        }
        return e
    }, n(t, function () {
        o || e.run()
    })
})(Holder, window),
function (e, t, n) {
    "use strict";
    e.fn.foundationNavigation = function (t) {
        var n = !1;
        Modernizr.touch || navigator.userAgent.match(/Windows Phone/i) ? (e(document).on("click.fndtn touchstart.fndtn", ".nav-bar a.flyout-toggle", function (t) {
            t.preventDefault();
            var r = e(this).siblings(".flyout").first();
            n === !1 && (e(".nav-bar .flyout").not(r).slideUp(500), r.slideToggle(500, function () {
                n = !1
            })), n = !0
        }), e(".nav-bar>li.has-flyout", this).addClass("is-touch")) : e(".nav-bar>li.has-flyout", this).on("mouseenter mouseleave", function (t) {
            t.type == "mouseenter" && (e(".nav-bar").find(".flyout").hide(), e(this).children(".flyout").show());
            if (t.type == "mouseleave") {
                var n = e(this).children(".flyout"),
                    r = n.find("input"),
                    i = function (t) {
                        var n;
                        return t.length > 0 ? (t.each(function () {
                            e(this).is(":focus") && (n = !0)
                        }), n) : !1
                    };
                i(r) || e(this).children(".flyout").hide()
            }
        })
    }
}(jQuery, this),
function (e, t, n) {
    "use strict";
    e.fn.foundationButtons = function (t) {
        var r = e(document),
            i = e.extend({
                dropdownAsToggle: !1,
                activeClass: "active"
            }, t),
            s = function (t) {
                e(".button.dropdown").find("ul").not(t).removeClass("show-dropdown")
            },
            o = function (t) {
                var n = e(".button.dropdown").not(t);
                n.add(e("> span." + i.activeClass, n)).removeClass(i.activeClass)
            };
        r.on("click.fndtn", ".button.disabled", function (e) {
            e.preventDefault()
        }), e(".button.dropdown > ul", this).addClass("no-hover"), r.on("click.fndtn", ".button.dropdown:not(.split), .button.dropdown.split span", function (t) {
            var n = e(this),
                r = n.closest(".button.dropdown"),
                u = e("> ul", r);
            e.inArray(t.target.nodeName, ["A", "BUTTON"]) && t.preventDefault(), setTimeout(function () {
                s(i.dropdownAsToggle ? "" : u), u.toggleClass("show-dropdown"), i.dropdownAsToggle && (o(r), n.toggleClass(i.activeClass))
            }, 0)
        }), r.on("click.fndtn", "body, html", function (t) {
            if (n == t.originalEvent) return;
            e(t.originalEvent.target).is(".button.dropdown:not(.split), .button.dropdown.split span") || (s(), i.dropdownAsToggle && o())
        });
        var u = e(".button.dropdown:not(.large):not(.small):not(.tiny):visible", this).outerHeight() - 1,
            a = e(".button.large.dropdown:visible", this).outerHeight() - 1,
            f = e(".button.small.dropdown:visible", this).outerHeight() - 1,
            l = e(".button.tiny.dropdown:visible", this).outerHeight() - 1;
        e(".button.dropdown:not(.large):not(.small):not(.tiny) > ul", this).css("top", u), e(".button.dropdown.large > ul", this).css("top", a), e(".button.dropdown.small > ul", this).css("top", f), e(".button.dropdown.tiny > ul", this).css("top", l), e(".button.dropdown.up:not(.large):not(.small):not(.tiny) > ul", this).css("top", "auto").css("bottom", u - 2), e(".button.dropdown.up.large > ul", this).css("top", "auto").css("bottom", a - 2), e(".button.dropdown.up.small > ul", this).css("top", "auto").css("bottom", f - 2), e(".button.dropdown.up.tiny > ul", this).css("top", "auto").css("bottom", l - 2)
    }
}(jQuery, this),
function (e, t, n, r) {
    "use strict";
    var i = {
            callback: e.noop,
            deep_linking: !0,
            init: !1
        },
        s = {
            init: function (t) {
                return i = e.extend({}, i, t), this.each(function () {
                    i.init || s.events(), i.deep_linking && s.from_hash()
                })
            },
            events: function () {
                e(n).on("click.fndtn", ".tabs a", function (t) {
                    s.set_tab(e(this).parent("dd, li"), t)
                }), i.init = !0
            },
            set_tab: function (t, n) {
                var r = t.closest("dl, ul").find(".active"),
                    s = t.children("a").attr("href"),
                    o = /^#/.test(s),
                    u = e(s + "Tab");
                o && u.length > 0 && (n && !i.deep_linking && n.preventDefault(), u.closest(".tabs-content").children("li").removeClass("active").hide(), u.css("display", "block").addClass("active")), r.removeClass("active"), t.addClass("active"), i.callback()
            },
            from_hash: function () {
                var n = t.location.hash,
                    r = e('a[href="' + n + '"]');
                r.trigger("click.fndtn")
            }
        };
    e.fn.foundationTabs = function (t) {
        if (s[t]) return s[t].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof t == "object" || !t) return s.init.apply(this, arguments);
        e.error("Method " + t + " does not exist on jQuery.foundationTabs")
    }
}(jQuery, this, this.document),
function (e, t, n) {
    "use strict";
    var r = {
            bodyHeight: 0,
            selector: ".has-tip",
            additionalInheritableClasses: [],
            tooltipClass: ".tooltip",
            tipTemplate: function (e, t) {
                return '<span data-selector="' + e + '" class="' + r.tooltipClass.substring(1) + '">' + t + '<span class="nub"></span></span>'
            }
        },
        i = {
            init: function (t) {
                return r = e.extend(r, t), r.selector = r.targetClass ? r.targetClass : r.selector, this.each(function () {
                    var t = e("body");
                    Modernizr.touch ? (t.on("click.tooltip touchstart.tooltip touchend.tooltip", r.selector, function (t) {
                        t.preventDefault(), e(r.tooltipClass).hide(), i.showOrCreateTip(e(this))
                    }), t.on("click.tooltip touchstart.tooltip touchend.tooltip", r.tooltipClass, function (t) {
                        t.preventDefault(), e(this).fadeOut(150)
                    })) : t.on("mouseenter.tooltip mouseleave.tooltip", r.selector, function (t) {
                        var n = e(this);
                        t.type === "mouseenter" ? i.showOrCreateTip(n) : t.type === "mouseleave" && i.hide(n)
                    }), e(this).data("tooltips", !0)
                })
            },
            showOrCreateTip: function (e, t) {
                var n = i.getTip(e);
                n && n.length > 0 ? i.show(e) : i.create(e, t)
            },
            getTip: function (t) {
                var n = i.selector(t),
                    s = null;
                return n && (s = e("span[data-selector=" + n + "]" + r.tooltipClass)), s.length > 0 ? s : !1
            },
            selector: function (e) {
                var t = e.attr("id"),
                    r = e.data("selector");
                return t === n && r === n && (r = "tooltip" + Math.random().toString(36).substring(7), e.attr("data-selector", r)), t ? t : r
            },
            create: function (t, n) {
                var s = e(r.tipTemplate(i.selector(t), e("<div>").html(n ? n : t.attr("title")).html())),
                    o = i.inheritable_classes(t);
                s.addClass(o).appendTo("body"), Modernizr.touch && s.append('<span class="tap-to-close">tap to close </span>'), t.removeAttr("title"), i.show(t)
            },
            reposition: function (n, r, i) {
                var s, o, u, a, f, l;
                r.css("visibility", "hidden").show(), s = n.data("width"), o = r.children(".nub"), u = o.outerHeight(), a = o.outerWidth(), l = function (e, t, n, r, i, s) {
                    return e.css({
                        top: t,
                        bottom: r,
                        left: i,
                        right: n,
                        "max-width": s ? s : "auto"
                    }).end()
                }, l(r, n.offset().top + n.outerHeight() + 10, "auto", "auto", n.offset().left, s), l(o, -u, "auto", "auto", 10);
                if (e(t).width() < 767) {
                    if (n.data("mobile-width")) r.width(n.data("mobile-width")).css("left", 15).addClass("tip-override");
                    else {
                        f = n.closest(".columns"), f.length < 0 && (f = e("body"));
                        if (f.outerWidth()) r.width(f.outerWidth() - 25).css("left", 15).addClass("tip-override");
                        else {
                            var c = Math.ceil(e(t).width() * .9);
                            r.width(c).css("left", 15).addClass("tip-override")
                        }
                    }
                    l(o, -u, "auto", "auto", n.offset().left)
                } else i && i.indexOf("tip-top") > -1 ? (l(r, n.offset().top - r.outerHeight() - u, "auto", "auto", n.offset().left, s).removeClass("tip-override"), l(o, "auto", "auto", -u, "auto")) : i && i.indexOf("tip-left") > -1 ? (l(r, n.offset().top + n.outerHeight() / 2 - u, "auto", "auto", n.offset().left - r.outerWidth() - 10, s).removeClass("tip-override"), l(o, r.outerHeight() / 2 - u / 2, -u, "auto", "auto")) : i && i.indexOf("tip-right") > -1 ? (l(r, n.offset().top + n.outerHeight() / 2 - u, "auto", "auto", n.offset().left + n.outerWidth() + 10, s).removeClass("tip-override"), l(o, r.outerHeight() / 2 - u / 2, "auto", "auto", -u)) : i && i.indexOf("tip-centered-top") > -1 ? (l(r, n.offset().top - r.outerHeight() - u, "auto", "auto", n.offset().left + (n.outerWidth() - r.outerWidth()) / 2, s).removeClass("tip-override"), l(o, "auto", r.outerWidth() / 2 - u / 2, -u, "auto")) : i && i.indexOf("tip-centered-bottom") > -1 && (l(r, n.offset().top + n.outerHeight() + 10, "auto", "auto", n.offset().left + (n.outerWidth() - r.outerWidth()) / 2, s).removeClass("tip-override"), l(o, -u, r.outerWidth() / 2 - u / 2, "auto", "auto"));
                r.css("visibility", "visible").hide()
            },
            inheritable_classes: function (t) {
                var n = ["tip-top", "tip-left", "tip-bottom", "tip-right", "tip-centered-top", "tip-centered-bottom", "noradius"].concat(r.additionalInheritableClasses),
                    i = t.attr("class"),
                    s = i ? e.map(i.split(" "), function (t, r) {
                        if (e.inArray(t, n) !== -1) return t
                    }).join(" ") : "";
                return e.trim(s)
            },
            show: function (e) {
                var t = i.getTip(e);
                i.reposition(e, t, e.attr("class")), t.fadeIn(150)
            },
            hide: function (e) {
                var t = i.getTip(e);
                t.fadeOut(150)
            },
            reload: function () {
                var t = e(this);
                return t.data("tooltips") ? t.foundationTooltips("destroy").foundationTooltips("init") : t.foundationTooltips("init")
            },
            destroy: function () {
                return this.each(function () {
                    e(t).off(".tooltip"), e(r.selector).off(".tooltip"), e(r.tooltipClass).each(function (t) {
                        e(e(r.selector).get(t)).attr("title", e(this).text())
                    }).remove()
                })
            }
        };
    e.fn.foundationTooltips = function (t) {
        if (i[t]) return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof t == "object" || !t) return i.init.apply(this, arguments);
        e.error("Method " + t + " does not exist on jQuery.foundationTooltips")
    }
}(jQuery, this),
function (e, t, n) {
    "use strict";
    e.fn.foundationAccordion = function (t) {
        var n = function (e) {
            return e.hasClass("hover") && !Modernizr.touch
        };
        e(document).on("mouseenter", ".accordion li", function () {
            var t = e(this).parent();
            if (n(t)) {
                var r = e(this).children(".content").first();
                e(".content", t).not(r).hide().parent("li").removeClass("active"), r.show(0, function () {
                    r.parent("li").addClass("active")
                })
            }
        }), e(document).on("click.fndtn", ".accordion li .title", function () {
            var t = e(this).closest("li"),
                r = t.parent();
            if (!n(r)) {
                var i = t.children(".content").first();
                t.hasClass("active") ? r.find("li").removeClass("active").end().find(".content").hide() : (e(".content", r).not(i).hide().parent("li").removeClass("active"), i.show(0, function () {
                    i.parent("li").addClass("active")
                }))
            }
        })
    }
}(jQuery, this),
function (e, t, n) {
    function r(e) {
        var t = {},
            r = /^jQuery\d+$/;
        return n.each(e.attributes, function (e, n) {
            n.specified && !r.test(n.name) && (t[n.name] = n.value)
        }), t
    }

    function i(e, r) {
        var i = this,
            s = n(i);
        if (i.value == s.attr("placeholder") && s.hasClass("placeholder"))
            if (s.data("placeholder-password")) {
                s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id"));
                if (e === !0) return s[0].value = r;
                s.focus()
            } else i.value = "", s.removeClass("placeholder"), i == t.activeElement && i.select()
    }

    function s() {
        var e, t = this,
            s = n(t),
            o = s,
            u = this.id;
        if (t.value == "") {
            if (t.type == "password") {
                if (!s.data("placeholder-textinput")) {
                    try {
                        e = s.clone().attr({
                            type: "text"
                        })
                    } catch (a) {
                        e = n("<input>").attr(n.extend(r(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": !0,
                        "placeholder-id": u
                    }).bind("focus.placeholder", i), s.data({
                        "placeholder-textinput": e,
                        "placeholder-id": u
                    }).before(e)
                }
                s = s.removeAttr("id").hide().prev().attr("id", u).show()
            }
            s.addClass("placeholder"), s[0].value = s.attr("placeholder")
        } else s.removeClass("placeholder")
    }
    var o = "placeholder" in t.createElement("input"),
        u = "placeholder" in t.createElement("textarea"),
        a = n.fn,
        f = n.valHooks,
        l, c;
    o && u ? (c = a.placeholder = function () {
        return this
    }, c.input = c.textarea = !0) : (c = a.placeholder = function () {
        var e = this;
        return e.filter((o ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": i,
            "blur.placeholder": s
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
    }, c.input = o, c.textarea = u, l = {
        get: function (e) {
            var t = n(e);
            return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
        },
        set: function (e, r) {
            var o = n(e);
            return o.data("placeholder-enabled") ? (r == "" ? (e.value = r, e != t.activeElement && s.call(e)) : o.hasClass("placeholder") ? i.call(e, !0, r) || (e.value = r) : e.value = r, o) : e.value = r
        }
    }, o || (f.input = l), u || (f.textarea = l), n(function () {
        n(t).delegate("form", "submit.placeholder", function () {
            var e = n(".placeholder", this).each(i);
            setTimeout(function () {
                e.each(s)
            }, 10)
        })
    }), n(e).bind("beforeunload.placeholder", function () {
        n(".placeholder").each(function () {
            this.value = ""
        })
    }))
}(this, document, jQuery),
function (e, t, n) {
    "use strict";
    e.fn.foundationAlerts = function (t) {
        var n = e.extend({
            callback: e.noop
        }, t);
        e(document).on("click", ".alert-box a.close", function (t) {
            t.preventDefault(), e(this).closest(".alert-box").fadeOut(function () {
                e(this).remove(), n.callback()
            })
        })
    }
}(jQuery, this),
function (e, t, n) {
    "use strict";
    var r = {
            index: 0,
            initialized: !1
        },
        i = {
            init: function (n) {
                return this.each(function () {
                    r = e.extend(r, n), r.$w = e(t), r.$topbar = e("nav.top-bar"), r.$section = r.$topbar.find("section"), r.$titlebar = r.$topbar.children("ul:first");
                    var s = e("<div class='top-bar-js-breakpoint'/>").appendTo("body");
                    r.breakPoint = s.width(), s.remove(), r.initialized || (i.assemble(), r.initialized = !0), r.height || i.largestUL(), r.$topbar.parent().hasClass("fixed") && e("body").css("padding-top", r.$topbar.outerHeight()), e(".top-bar .toggle-topbar").off("click.fndtn").on("click.fndtn", function (e) {
                        e.preventDefault(), i.breakpoint() && (r.$topbar.toggleClass("expanded"), r.$topbar.css("min-height", "")), r.$topbar.hasClass("expanded") || (r.$section.css({
                            left: "0%"
                        }), r.$section.find(">.name").css({
                            left: "100%"
                        }), r.$section.find("li.moved").removeClass("moved"), r.index = 0)
                    }), e(".top-bar .has-dropdown>a").off("click.fndtn").on("click.fndtn", function (t) {
                        (Modernizr.touch || i.breakpoint()) && t.preventDefault();
                        if (i.breakpoint()) {
                            var n = e(this),
                                s = n.closest("li");
                            r.index += 1, s.addClass("moved"), r.$section.css({
                                left: -(100 * r.index) + "%"
                            }), r.$section.find(">.name").css({
                                left: 100 * r.index + "%"
                            }), n.siblings("ul").height(r.height + r.$titlebar.outerHeight(!0)), r.$topbar.css("min-height", r.height + r.$titlebar.outerHeight(!0) * 2)
                        }
                    }), e(t).on("resize.fndtn.topbar", function () {
                        i.breakpoint() || r.$topbar.css("min-height", "")
                    }), e(".top-bar .has-dropdown .back").off("click.fndtn").on("click.fndtn", function (t) {
                        t.preventDefault();
                        var n = e(this),
                            i = n.closest("li.moved"),
                            s = i.parent();
                        r.index -= 1, r.$section.css({
                            left: -(100 * r.index) + "%"
                        }), r.$section.find(">.name").css({
                            left: 100 * r.index + "%"
                        }), r.index === 0 && r.$topbar.css("min-height", 0), setTimeout(function () {
                            i.removeClass("moved")
                        }, 300)
                    })
                })
            },
            breakpoint: function () {
                return r.$w.width() < r.breakPoint
            },
            assemble: function () {
                r.$section.detach(), r.$section.find(".has-dropdown>a").each(function () {
                    var t = e(this),
                        n = t.siblings(".dropdown"),
                        r = e('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');
                    r.find("h5>a").html(t.html()), n.prepend(r)
                }), r.$section.appendTo(r.$topbar)
            },
            largestUL: function () {
                var t = r.$topbar.find("section ul ul"),
                    n = t.first(),
                    i = 0;
                t.each(function () {
                    e(this).children("li").length > n.children("li").length && (n = e(this))
                }), n.children("li").each(function () {
                    i += e(this).outerHeight(!0)
                }), r.height = i
            }
        };
    e.fn.foundationTopBar = function (t) {
        if (i[t]) return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof t == "object" || !t) return i.init.apply(this, arguments);
        e.error("Method " + t + " does not exist on jQuery.foundationTopBar")
    };
    if (e(".sticky").length > 0) {
        var s = e(".sticky").length ? e(".sticky").offset().top : 0,
            o = e(t);
        o.scroll(function () {
            o.scrollTop() >= s ? e(".sticky").addClass("fixed") : o.scrollTop() < s && e(".sticky").removeClass("fixed")
        })
    }
}(jQuery, this),
function (e, t, n) {
    "use strict";
    var r = {
            version: "2.0.3",
            tipLocation: "bottom",
            nubPosition: "auto",
            scrollSpeed: 300,
            timer: 0,
            startTimerOnClick: !0,
            startOffset: 0,
            nextButton: !0,
            tipAnimation: "fade",
            pauseAfter: [],
            tipAnimationFadeSpeed: 300,
            cookieMonster: !1,
            cookieName: "joyride",
            cookieDomain: !1,
            tipContainer: "body",
            postRideCallback: e.noop,
            postStepCallback: e.noop,
            template: {
                link: '<a href="#close" class="joyride-close-tip">X</a>',
                timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                wrapper: '<div class="joyride-content-wrapper"></div>',
                button: '<a href="#" class="small button joyride-next-tip"></a>'
            }
        },
        i = i || !1,
        s = {},
        o = {
            init: function (n) {
                return this.each(function () {
                    if (e.isEmptyObject(s)) {
                        s = e.extend(!0, r, n), s.document = t.document, s.$document = e(s.document), s.$window = e(t), s.$content_el = e(this), s.body_offset = e(s.tipContainer).position(), s.$tip_content = e("> li", s.$content_el), s.paused = !1, s.attempts = 0, s.tipLocationPatterns = {
                            top: ["bottom"],
                            bottom: [],
                            left: ["right", "top", "bottom"],
                            right: ["left", "top", "bottom"]
                        }, o.jquery_check(), e.isFunction(e.cookie) || (s.cookieMonster = !1);
                        if (!s.cookieMonster || !e.cookie(s.cookieName)) s.$tip_content.each(function (t) {
                            o.create({
                                $li: e(this),
                                index: t
                            })
                        }), !s.startTimerOnClick && s.timer > 0 ? (o.show("init"), o.startTimer()) : o.show("init");
                        s.$document.on("click.joyride", ".joyride-next-tip, .joyride-modal-bg", function (e) {
                            e.preventDefault(), s.$li.next().length < 1 ? o.end() : s.timer > 0 ? (clearTimeout(s.automate), o.hide(), o.show(), o.startTimer()) : (o.hide(), o.show())
                        }), s.$document.on("click.joyride", ".joyride-close-tip", function (e) {
                            e.preventDefault(), o.end()
                        }), s.$window.bind("resize.joyride", function (e) {
                            o.is_phone() ? o.pos_phone() : o.pos_default()
                        })
                    } else o.restart()
                })
            },
            resume: function () {
                o.set_li(), o.show()
            },
            tip_template: function (t) {
                var n, r;
                return t.tip_class = t.tip_class || "", n = e(s.template.tip).addClass(t.tip_class), r = e.trim(e(t.li).html()) + o.button_text(t.button_text) + s.template.link + o.timer_instance(t.index), n.append(e(s.template.wrapper)), n.first().attr("data-index", t.index), e(".joyride-content-wrapper", n).append(r), n[0]
            },
            timer_instance: function (t) {
                var n;
                return t === 0 && s.startTimerOnClick && s.timer > 0 || s.timer === 0 ? n = "" : n = o.outerHTML(e(s.template.timer)[0]), n
            },
            button_text: function (t) {
                return s.nextButton ? (t = e.trim(t) || "Next", t = o.outerHTML(e(s.template.button).append(t)[0])) : t = "", t
            },
            create: function (t) {
                var n = t.$li.attr("data-button") || t.$li.attr("data-text"),
                    r = t.$li.attr("class"),
                    i = e(o.tip_template({
                        tip_class: r,
                        index: t.index,
                        button_text: n,
                        li: t.$li
                    }));
                e(s.tipContainer).append(i)
            },
            show: function (t) {
                var r = {},
                    i, u = [],
                    a = 0,
                    f, l = null;
                if (s.$li === n || e.inArray(s.$li.index(), s.pauseAfter) === -1) {
                    s.paused ? s.paused = !1 : o.set_li(t), s.attempts = 0;
                    if (s.$li.length && s.$target.length > 0) {
                        u = (s.$li.data("options") || ":").split(";"), a = u.length;
                        for (i = a - 1; i >= 0; i--) f = u[i].split(":"), f.length === 2 && (r[e.trim(f[0])] = e.trim(f[1]));
                        s.tipSettings = e.extend({}, s, r), s.tipSettings.tipLocationPattern = s.tipLocationPatterns[s.tipSettings.tipLocation], /body/i.test(s.$target.selector) || o.scroll_to(), o.is_phone() ? o.pos_phone(!0) : o.pos_default(!0), l = e(".joyride-timer-indicator", s.$next_tip), /pop/i.test(s.tipAnimation) ? (l.outerWidth(0), s.timer > 0 ? (s.$next_tip.show(), l.animate({
                            width: e(".joyride-timer-indicator-wrap", s.$next_tip).outerWidth()
                        }, s.timer)) : s.$next_tip.show()) : /fade/i.test(s.tipAnimation) && (l.outerWidth(0), s.timer > 0 ? (s.$next_tip.fadeIn(s.tipAnimationFadeSpeed), s.$next_tip.show(), l.animate({
                            width: e(".joyride-timer-indicator-wrap", s.$next_tip).outerWidth()
                        }, s.timer)) : s.$next_tip.fadeIn(s.tipAnimationFadeSpeed)), s.$current_tip = s.$next_tip
                    } else s.$li && s.$target.length < 1 ? o.show() : o.end()
                } else s.paused = !0
            },
            is_phone: function () {
                return i ? i.mq("only screen and (max-width: 767px)") : s.$window.width() < 767 ? !0 : !1
            },
            hide: function () {
                s.postStepCallback(s.$li.index(), s.$current_tip), e(".joyride-modal-bg").hide(), s.$current_tip.hide()
            },
            set_li: function (e) {
                e ? (s.$li = s.$tip_content.eq(s.startOffset), o.set_next_tip(), s.$current_tip = s.$next_tip) : (s.$li = s.$li.next(), o.set_next_tip()), o.set_target()
            },
            set_next_tip: function () {
                s.$next_tip = e(".joyride-tip-guide[data-index=" + s.$li.index() + "]")
            },
            set_target: function () {
                var t = s.$li.attr("data-class"),
                    n = s.$li.attr("data-id"),
                    r = function () {
                        return n ? e(s.document.getElementById(n)) : t ? e("." + t).first() : e("body")
                    };
                s.$target = r()
            },
            scroll_to: function () {
                var t, n;
                t = s.$window.height() / 2, n = Math.ceil(s.$target.offset().top - t + s.$next_tip.outerHeight()), e("html, body").stop().animate({
                    scrollTop: n
                }, s.scrollSpeed)
            },
            paused: function () {
                return e.inArray(s.$li.index() + 1, s.pauseAfter) === -1 ? !0 : !1
            },
            destroy: function () {
                s.$document.off(".joyride"), e(t).off(".joyride"), e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), e(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(s.automate), s = {}
            },
            restart: function () {
                o.hide(), s.$li = n, o.show("init")
            },
            pos_default: function (t) {
                var n = Math.ceil(s.$window.height() / 2),
                    r = s.$next_tip.offset(),
                    i = e(".joyride-nub", s.$next_tip),
                    u = Math.ceil(i.outerHeight() / 2),
                    a = t || !1;
                a && (s.$next_tip.css("visibility", "hidden"), s.$next_tip.show()), /body/i.test(s.$target.selector) ? s.$li.length && o.pos_modal(i) : (o.bottom() ? (s.$next_tip.css({
                    top: s.$target.offset().top + u + s.$target.outerHeight(),
                    left: s.$target.offset().left
                }), o.nub_position(i, s.tipSettings.nubPosition, "top")) : o.top() ? (s.$next_tip.css({
                    top: s.$target.offset().top - s.$next_tip.outerHeight() - u,
                    left: s.$target.offset().left
                }), o.nub_position(i, s.tipSettings.nubPosition, "bottom")) : o.right() ? (s.$next_tip.css({
                    top: s.$target.offset().top,
                    left: s.$target.outerWidth() + s.$target.offset().left
                }), o.nub_position(i, s.tipSettings.nubPosition, "left")) : o.left() && (s.$next_tip.css({
                    top: s.$target.offset().top,
                    left: s.$target.offset().left - s.$next_tip.outerWidth() - u
                }), o.nub_position(i, s.tipSettings.nubPosition, "right")), !o.visible(o.corners(s.$next_tip)) && s.attempts < s.tipSettings.tipLocationPattern.length && (i.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), s.tipSettings.tipLocation = s.tipSettings.tipLocationPattern[s.attempts], s.attempts++, o.pos_default(!0))), a && (s.$next_tip.hide(), s.$next_tip.css("visibility", "visible"))
            },
            pos_phone: function (t) {
                var n = s.$next_tip.outerHeight(),
                    r = s.$next_tip.offset(),
                    i = s.$target.outerHeight(),
                    u = e(".joyride-nub", s.$next_tip),
                    a = Math.ceil(u.outerHeight() / 2),
                    f = t || !1;
                u.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), f && (s.$next_tip.css("visibility", "hidden"), s.$next_tip.show()), /body/i.test(s.$target.selector) ? s.$li.length && o.pos_modal(u) : o.top() ? (s.$next_tip.offset({
                    top: s.$target.offset().top - n - a
                }), u.addClass("bottom")) : (s.$next_tip.offset({
                    top: s.$target.offset().top + i + a
                }), u.addClass("top")), f && (s.$next_tip.hide(), s.$next_tip.css("visibility", "visible"))
            },
            pos_modal: function (t) {
                o.center(), t.hide(), e(".joyride-modal-bg").length < 1 && e("body").append('<div class="joyride-modal-bg">').show(), /pop/i.test(s.tipAnimation) ? e(".joyride-modal-bg").show() : e(".joyride-modal-bg").fadeIn(s.tipAnimationFadeSpeed)
            },
            center: function () {
                var e = s.$window;
                return s.$next_tip.css({
                    top: (e.height() - s.$next_tip.outerHeight()) / 2 + e.scrollTop(),
                    left: (e.width() - s.$next_tip.outerWidth()) / 2 + e.scrollLeft()
                }), !0
            },
            bottom: function () {
                return /bottom/i.test(s.tipSettings.tipLocation)
            },
            top: function () {
                return /top/i.test(s.tipSettings.tipLocation)
            },
            right: function () {
                return /right/i.test(s.tipSettings.tipLocation)
            },
            left: function () {
                return /left/i.test(s.tipSettings.tipLocation)
            },
            corners: function (e) {
                var t = s.$window,
                    n = t.width() + t.scrollLeft(),
                    r = t.width() + t.scrollTop();
                return [e.offset().top <= t.scrollTop(), n <= e.offset().left + e.outerWidth(), r <= e.offset().top + e.outerHeight(), t.scrollLeft() >= e.offset().left]
            },
            visible: function (e) {
                var t = e.length;
                while (t--)
                    if (e[t]) return !1;
                return !0
            },
            nub_position: function (e, t, n) {
                t === "auto" ? e.addClass(n) : e.addClass(t)
            },
            startTimer: function () {
                s.$li.length ? s.automate = setTimeout(function () {
                    o.hide(), o.show(), o.startTimer()
                }, s.timer) : clearTimeout(s.automate)
            },
            end: function () {
                s.cookieMonster && e.cookie(s.cookieName, "ridden", {
                    expires: 365,
                    domain: s.cookieDomain
                }), s.timer > 0 && clearTimeout(s.automate), e(".joyride-modal-bg").hide(), s.$current_tip.hide(), s.postStepCallback(s.$li.index(), s.$current_tip), s.postRideCallback(s.$li.index(), s.$current_tip)
            },
            jquery_check: function () {
                return e.isFunction(e.fn.on) ? !0 : (e.fn.on = function (e, t, n) {
                    return this.delegate(t, e, n)
                }, e.fn.off = function (e, t, n) {
                    return this.undelegate(t, e, n)
                }, !1)
            },
            outerHTML: function (e) {
                return e.outerHTML || (new XMLSerializer).serializeToString(e)
            },
            version: function () {
                return s.version
            }
        };
    e.fn.joyride = function (t) {
        if (o[t]) return o[t].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof t == "object" || !t) return o.init.apply(this, arguments);
        e.error("Method " + t + " does not exist on jQuery.joyride")
    }
}(jQuery, this),
function (e, t, n, r) {
    "use strict";
    var i = {
            templates: {
                viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><img src="#"><p class="clearing-caption"></p><a href="#" class="clearing-main-left"></a><a href="#" class="clearing-main-right"></a></div>'
            },
            close_selectors: "a.clearing-close",
            initialized: !1,
            locked: !1
        },
        s = {
            init: function (t, r) {
                return this.find("ul[data-clearing]").each(function () {
                    var t = e(n),
                        r = e(this),
                        o = o || {},
                        u = u || {},
                        a = r.data("fndtn.clearing.settings");
                    a || (o.$parent = r.parent(), r.data("fndtn.clearing.settings", e.extend({}, i, o)), s.assemble(r.find("li")), i.initialized || (s.events(r), Modernizr.touch && s.swipe_events()))
                })
            },
            events: function (r) {
                var o = r.data("fndtn.clearing.settings");
                e(n).on("click.fndtn.clearing", "ul[data-clearing] li", function (t, n, r) {
                    var n = n || e(this),
                        r = r || n,
                        i = n.parent().data("fndtn.clearing.settings");
                    t.preventDefault(), i || n.parent().foundationClearing(), s.open(e(t.target), n, r), s.update_paddles(r)
                }).on("click.fndtn.clearing", ".clearing-main-right", function (e) {
                    s.nav(e, "next")
                }).on("click.fndtn.clearing", ".clearing-main-left", function (e) {
                    s.nav(e, "prev")
                }).on("click.fndtn.clearing", o.close_selectors, this.close).on("keydown.fndtn.clearing", this.keydown), e(t).on("resize.fndtn.clearing", this.resize), i.initialized = !0
            },
            swipe_events: function () {
                e(n).bind("swipeleft", "ul[data-clearing]", function (e) {
                    s.nav(e, "next")
                }).bind("swiperight", "ul[data-clearing]", function (e) {
                    s.nav(e, "prev")
                }).bind("movestart", "ul[data-clearing]", function (e) {
                    (e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && e.preventDefault()
                })
            },
            assemble: function (e) {
                var t = e.parent(),
                    n = t.data("fndtn.clearing.settings"),
                    r = t.detach(),
                    i = {
                        grid: '<div class="carousel">' + this.outerHTML(r[0]) + "</div>",
                        viewing: n.templates.viewing
                    },
                    s = '<div class="clearing-assembled"><div>' + i.viewing + i.grid + "</div></div>";
                return n.$parent.append(s)
            },
            open: function (e, t, n) {
                var r = n.closest(".clearing-assembled"),
                    i = r.find("div:first"),
                    o = i.find(".visible-img"),
                    u = o.find("img").not(e);
                s.locked() || (u.attr("src", this.load(e)), u.loaded(function () {
                    r.addClass("clearing-blackout"), i.addClass("clearing-container"), this.caption(o.find(".clearing-caption"), e), o.show(), this.fix_height(n), this.center(u), this.shift(t, n, function () {
                        n.siblings().removeClass("visible"), n.addClass("visible")
                    })
                }.bind(this)))
            },
            close: function (t) {
                t.preventDefault();
                var n = function (e) {
                        return /blackout/.test(e.selector) ? e : e.closest(".clearing-blackout")
                    }(e(this)),
                    r, s;
                return this === t.target && n && (r = n.find("div:first"), s = r.find(".visible-img"), i.prev_index = 0, n.find("ul[data-clearing]").attr("style", ""), n.removeClass("clearing-blackout"), r.removeClass("clearing-container"), s.hide()), !1
            },
            keydown: function (t) {
                var n = e(".clearing-blackout").find("ul[data-clearing]");
                t.which === 39 && s.go(n, "next"), t.which === 37 && s.go(n, "prev"), t.which === 27 && e("a.clearing-close").trigger("click")
            },
            nav: function (t, n) {
                var r = e(".clearing-blackout").find("ul[data-clearing]");
                t.preventDefault(), this.go(r, n)
            },
            resize: function () {
                var t = e(".clearing-blackout .visible-img").find("img");
                t.length > 0 && s.center(t)
            },
            fix_height: function (t) {
                var n = t.siblings();
                n.each(function () {
                    var t = e(this),
                        n = t.find("img");
                    t.height() > n.outerHeight() && t.addClass("fix-height")
                }).closest("ul").width(n.length * 100 + "%")
            },
            update_paddles: function (e) {
                var t = e.closest(".carousel").siblings(".visible-img");
                e.next().length > 0 ? t.find(".clearing-main-right").removeClass("disabled") : t.find(".clearing-main-right").addClass("disabled"), e.prev().length > 0 ? t.find(".clearing-main-left").removeClass("disabled") : t.find(".clearing-main-left").addClass("disabled")
            },
            load: function (e) {
                var t = e.parent().attr("href");
                return this.preload(e), t ? t : e.attr("src")
            },
            preload: function (e) {
                this.img(e.closest("li").next()), this.img(e.closest("li").prev())
            },
            img: function (e) {
                if (e.length > 0) {
                    var t = new Image,
                        n = e.find("a");
                    n.length > 0 ? t.src = n.attr("href") : t.src = e.find("img").attr("src")
                }
            },
            caption: function (e, t) {
                var n = t.data("caption");
                n ? e.text(n).show() : e.text("").hide()
            },
            go: function (e, t) {
                var n = e.find(".visible"),
                    r = n[t]();
                r.length > 0 && r.find("img").trigger("click", [n, r])
            },
            shift: function (e, t, n) {
                var r = t.parent(),
                    s = i.prev_index,
                    o = this.direction(r, e, t),
                    u = parseInt(r.css("left"), 10),
                    a = t.outerWidth(),
                    f;
                t.index() !== s && !/skip/.test(o) ? /left/.test(o) ? (this.lock(), r.animate({
                    left: u + a
                }, 300, this.unlock)) : /right/.test(o) && (this.lock(), r.animate({
                    left: u - a
                }, 300, this.unlock)) : /skip/.test(o) && (f = t.index() - i.up_count, this.lock(), f > 0 ? r.animate({
                    left: -(f * a)
                }, 300, this.unlock) : r.animate({
                    left: 0
                }, 300, this.unlock)), n()
            },
            lock: function () {
                i.locked = !0
            },
            unlock: function () {
                i.locked = !1
            },
            locked: function () {
                return i.locked
            },
            direction: function (t, n, r) {
                var s = t.find("li"),
                    o = s.outerWidth() + s.outerWidth() / 4,
                    u = Math.floor(e(".clearing-container").outerWidth() / o) - 1,
                    a = s.index(r),
                    f;
                return i.up_count = u, this.adjacent(i.prev_index, a) ? a > u && a > i.prev_index ? f = "right" : a > u - 1 && a <= i.prev_index ? f = "left" : f = !1 : f = "skip", i.prev_index = a, f
            },
            adjacent: function (e, t) {
                for (var n = t + 1; n >= t - 1; n--)
                    if (n === e) return !0;
                return !1
            },
            center: function (e) {
                e.css({
                    marginLeft: -(e.outerWidth() / 2),
                    marginTop: -(e.outerHeight() / 2)
                })
            },
            outerHTML: function (e) {
                return e.outerHTML || (new XMLSerializer).serializeToString(e)
            }
        };
    e.fn.foundationClearing = function (t) {
            if (s[t]) return s[t].apply(this, Array.prototype.slice.call(arguments, 1));
            if (typeof t == "object" || !t) return s.init.apply(this, arguments);
            e.error("Method " + t + " does not exist on jQuery.foundationClearing")
        },
        function (e) {
            e.fn.loaded = function (t, n) {
                function r() {
                    u -= 1, !u && t()
                }

                function i() {
                    this.one("load", r);
                    if (e.browser.msie) {
                        var t = this.attr("src"),
                            n = t.match(/\?/) ? "&" : "?";
                        n += s.cachePrefix + "=" + (new Date).getTime(), this.attr("src", t + n)
                    }
                }
                var s = e.extend({}, e.fn.loaded.defaults, n),
                    o = this.find("img").add(this.filter("img")),
                    u = o.length;
                return o.each(function () {
                    var t = e(this);
                    if (!t.attr("src")) {
                        r();
                        return
                    }
                    this.complete ||
                        this.readyState === 4 ? r() : i.call(t)
                })
            }, e.fn.loaded.defaults = {
                cachePrefix: "random"
            }
        }(jQuery)
}(jQuery, this, this.document),
function (e, t, n) {
    "use strict";
    e.fn.foundationMagellan = function (n) {
        var r = e(t),
            i = e(document),
            s = e("[data-magellan-expedition=fixed]"),
            o = {
                threshold: s.length ? s.outerHeight(!0) : 0,
                activeClass: "active"
            },
            n = e.extend({}, o, n);
        i.on("magellan.arrival", "[data-magellan-arrival]", function (t) {
            var r = e(this),
                i = r.closest("[data-magellan-expedition]"),
                s = i.attr("data-magellan-active-class") || n.activeClass;
            r.closest("[data-magellan-expedition]").find("[data-magellan-arrival]").not(this).removeClass(s), r.addClass(s)
        });
        var u = e("[data-magellan-expedition]");
        u.find("[data-magellan-arrival]:first").addClass(u.attr("data-magellan-active-class") || n.activeClass), s.on("magellan.update-position", function () {
            var t = e(this);
            t.data("magellan-fixed-position", ""), t.data("magellan-top-offset", "")
        }).trigger("magellan.update-position"), r.on("resize.magellan", function () {
            s.trigger("magellan.update-position")
        }), r.on("scroll.magellan", function () {
            var t = r.scrollTop();
            s.each(function () {
                var r = e(this);
                r.data("magellan-top-offset") === "" && r.data("magellan-top-offset", r.offset().top);
                var i = t + n.threshold > r.data("magellan-top-offset");
                r.data("magellan-fixed-position") != i && (r.data("magellan-fixed-position", i), i ? r.css({
                    position: "fixed",
                    top: 0
                }) : r.css({
                    position: "",
                    top: ""
                }))
            })
        });
        var a = e("[data-magellan-destination]:last");
        a.length > 0 && r.on("scroll.magellan", function (t) {
            var s = r.scrollTop(),
                o = s + r.outerHeight(!0),
                u = Math.ceil(a.offset().top);
            e("[data-magellan-destination]").each(function () {
                var t = e(this),
                    r = t.attr("data-magellan-destination"),
                    a = t.offset().top - s;
                a <= n.threshold && e("[data-magellan-arrival=" + r + "]").trigger("magellan.arrival"), o >= i.outerHeight(!0) && u > s && u < o && e("[data-magellan-arrival]:last").trigger("magellan.arrival")
            })
        })
    }
}(jQuery, this),
function (e, t) {
    var n = function () {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function (e) {
            return e.namespace === "rails"
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var r;
    e.rails = r = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (n) {
            var i, s, o, u, a, f, l, c;
            if (r.fire(n, "ajax:before")) {
                u = n.data("cross-domain"), a = u === t ? null : u, f = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
                if (n.is("form")) {
                    i = n.attr("method"), s = n.attr("action"), o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h), n.data("ujs:submit-button", null))
                } else n.is(r.inputChangeSelector) ? (i = n.data("method"), s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (i = n.data("method"), s = r.href(n), o = n.data("params") || null);
                c = {
                    type: i || "GET",
                    data: o,
                    dataType: l,
                    beforeSend: function (e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), r.fire(n, "ajax:beforeSend", [e, i])
                    },
                    success: function (e, t, r) {
                        n.trigger("ajax:success", [e, t, r])
                    },
                    complete: function (e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, r) {
                        n.trigger("ajax:error", [e, t, r])
                    },
                    crossDomain: a
                }, f && (c.xhrFields = {
                    withCredentials: f
                }), s && (c.url = s);
                var p = r.ajax(c);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function (n) {
            var i = r.href(n),
                s = n.data("method"),
                o = n.attr("target"),
                u = e("meta[name=csrf-token]").attr("content"),
                a = e("meta[name=csrf-param]").attr("content"),
                f = e('<form method="post" action="' + i + '"></form>'),
                l = '<input name="_method" value="' + s + '" type="hidden" />';
            a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'), o && f.attr("target", o), f.hide().append(l).appendTo("body"), f.submit()
        },
        disableFormElements: function (t) {
            t.find(r.disableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function (t) {
            t.find(r.enableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function (e) {
            var t = e.data("confirm"),
                n = !1,
                i;
            return t ? (r.fire(e, "confirm") && (n = r.confirm(t), i = r.fire(e, "confirm:complete", [n])), n && i) : !0
        },
        blankInputs: function (t, n, r) {
            var i = e(),
                s, o, u = n || "input,textarea",
                a = t.find(u);
            return a.each(function () {
                s = e(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val();
                if (!o == !r) {
                    if (s.is("input[type=radio]") && a.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                    i = i.add(s)
                }
            }), i.length ? i : !1
        },
        nonBlankInputs: function (e, t) {
            return r.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function (n, r) {
            var i = n.data("events"),
                s = !0;
            return i !== t && i.submit !== t && e.each(i.submit, function (e, t) {
                if (typeof t.handler == "function") return s = t.handler(r)
            }), s
        },
        disableElement: function (e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                return r.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, r.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || r.CSRFProtection(n)
    }), e(document).delegate(r.linkDisableSelector, "ajax:complete", function () {
        r.enableElement(e(this))
    }), e(document).delegate(r.linkClickSelector, "click.rails", function (n) {
        var i = e(this),
            s = i.data("method"),
            o = i.data("params");
        if (!r.allowAction(i)) return r.stopEverything(n);
        i.is(r.linkDisableSelector) && r.disableElement(i);
        if (i.data("remote") !== t) {
            if ((n.metaKey || n.ctrlKey) && (!s || s === "GET") && !o) return !0;
            var u = r.handleRemote(i);
            return u === !1 ? r.enableElement(i) : u.error(function () {
                r.enableElement(i)
            }), !1
        }
        if (i.data("method")) return r.handleMethod(i), !1
    }), e(document).delegate(r.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return r.allowAction(n) ? (r.handleRemote(n), !1) : r.stopEverything(t)
    }), e(document).delegate(r.formSubmitSelector, "submit.rails", function (n) {
        var i = e(this),
            s = i.data("remote") !== t,
            o = r.blankInputs(i, r.requiredInputSelector),
            u = r.nonBlankInputs(i, r.fileInputSelector);
        if (!r.allowAction(i)) return r.stopEverything(n);
        if (o && i.attr("novalidate") == t && r.fire(i, "ajax:aborted:required", [o])) return r.stopEverything(n);
        if (s) {
            if (u) {
                setTimeout(function () {
                    r.disableFormElements(i)
                }, 13);
                var a = r.fire(i, "ajax:aborted:file", [u]);
                return a || setTimeout(function () {
                    r.enableFormElements(i)
                }, 13), a
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && r.callFormSubmitBindings(i, n) === !1 ? r.stopEverything(n) : (r.handleRemote(i), !1)
        }
        setTimeout(function () {
            r.disableFormElements(i)
        }, 13)
    }), e(document).delegate(r.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!r.allowAction(n)) return r.stopEverything(t);
        var i = n.attr("name"),
            s = i ? {
                name: i,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", s)
    }), e(document).delegate(r.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && r.disableFormElements(e(this))
    }), e(document).delegate(r.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && r.enableFormElements(e(this))
    }), e(function () {
        var t = e("meta[name=csrf-token]").attr("content"),
            n = e("meta[name=csrf-param]").attr("content");
        e('form input[name="' + n + '"]').val(t)
    }))
}(jQuery), ! function (e) {
    function t(t, r) {
        var i = this,
            r = r || {},
            s = r.query || "> :even";
        e.extend(i, {
                $el: t,
                options: r,
                sections: [],
                isAccordion: r.accordion || !1,
                db: r.persist ? new jQueryCollapseStorage(t[0].id) : !1
            }), i.states = i.db ? i.db.read() : [], i.$el.find(s).each(function () {
                var t = new n(e(this), i);
                i.sections.push(t), i.states[t._index()] || t.$summary.hasClass("open") ? t.open(!0) : t.close(!0)
            }),
            function (t) {
                i.$el.on("click", "[data-collapse-summary]", e.proxy(i.handleClick, t))
            }(i)
    }

    function n(t, n) {
        e.extend(this, {
            isOpen: !1,
            $summary: t.attr("data-collapse-summary", "").wrapInner('<a href="#"/>'),
            $details: t.next(),
            options: n.options,
            parent: n
        })
    }
    t.prototype = {
        handleClick: function (t) {
            t.preventDefault();
            var n = this.sections,
                r = e(t.target).parent(),
                i = n.length;
            while (i--)
                if (n[i].$summary.find("a").is(t.target)) {
                    n[i].toggle();
                    break
                }
        },
        open: function (t) {
            if (isFinite(t)) return this.sections[t].open();
            e.each(this.sections, function () {
                this.open()
            })
        },
        close: function (t) {
            if (isFinite(t)) return this.sections[t].close();
            e.each(this.sections, function () {
                this.close()
            })
        }
    }, n.prototype = {
        toggle: function () {
            this.isOpen ? this.close() : this.open()
        },
        close: function (e) {
            this._changeState("close", e)
        },
        open: function (t) {
            var n = this;
            n.options.accordion && !t && e.each(n.parent.sections, function () {
                this.close()
            }), n._changeState("open", t)
        },
        _index: function () {
            return e.inArray(this, this.parent.sections)
        },
        _changeState: function (t, n) {
            var r = this;
            r.isOpen = t == "open", e.isFunction(r.options[t]) && !n ? r.options[t].apply(r.$details) : r.isOpen ? r.$details.show() : r.$details.hide(), r.$summary.removeClass("open close").addClass(t), r.$details.attr("aria-hidden", t == "close"), r.parent.$el.trigger(t, r), r.parent.db && r.parent.db.write(r._index(), r.isOpen)
        }
    }, e.fn.extend({
        collapse: function (t, n) {
            var r = n ? e("body").find("[data-collapse]") : e(this);
            return r.each(function () {
                var r = n ? {} : t,
                    i = e(this).attr("data-collapse") || "";
                e.each(i.split(" "), function (e, t) {
                    t && (r[t] = !0)
                }), (new jQueryCollapse(e(this), r)).$el
            })
        }
    }), e(function () {
        e.fn.collapse(!1, !0)
    }), jQueryCollapse = t
}(window.jQuery),
function (e) {
    "use strict";
    var t = !1;
    e(document).on("click", "a[data-reveal-id]", function (t) {
        t.preventDefault();
        var n = e(this).attr("data-reveal-id");
        e("#" + n).reveal(e(this).data())
    }), e.fn.reveal = function (n) {
        var r = e(document),
            i = {
                animation: "fadeAndPop",
                animationSpeed: 300,
                closeOnBackgroundClick: !0,
                dismissModalClass: "close-reveal-modal",
                open: e.noop,
                opened: e.noop,
                close: e.noop,
                closed: e.noop
            };
        return n = e.extend({}, i, n), this.not(".reveal-modal.open").each(function () {
            function c() {
                u = !1
            }

            function h() {
                u = !0
            }

            function p() {
                var n = e(".reveal-modal.open");
                n.length === 1 && (t = !0, n.trigger("reveal:close"))
            }

            function d() {
                u || (h(), p(), i.addClass("open"), n.animation === "fadeAndPop" && (f.open.top = r.scrollTop() - o, f.open.opacity = 0, i.css(f.open), a.fadeIn(n.animationSpeed / 2), i.delay(n.animationSpeed / 2).animate({
                    top: r.scrollTop() + s + "px",
                    opacity: 1
                }, n.animationSpeed, function () {
                    i.trigger("reveal:opened")
                })), n.animation === "fade" && (f.open.top = r.scrollTop() + s, f.open.opacity = 0, i.css(f.open), a.fadeIn(n.animationSpeed / 2), i.delay(n.animationSpeed / 2).animate({
                    opacity: 1
                }, n.animationSpeed, function () {
                    i.trigger("reveal:opened")
                })), n.animation === "none" && (f.open.top = r.scrollTop() + s, f.open.opacity = 1, i.css(f.open), a.css({
                    display: "block"
                }), i.trigger("reveal:opened")))
            }

            function v() {
                var e = i.find(".flex-video"),
                    t = e.find("iframe");
                t.length > 0 && (t.attr("src", t.data("src")), e.fadeIn(100))
            }

            function m() {
                u || (h(), i.removeClass("open"), n.animation === "fadeAndPop" && (i.animate({
                    top: r.scrollTop() - o + "px",
                    opacity: 0
                }, n.animationSpeed / 2, function () {
                    i.css(f.close)
                }), t ? i.trigger("reveal:closed") : a.delay(n.animationSpeed).fadeOut(n.animationSpeed, function () {
                    i.trigger("reveal:closed")
                })), n.animation === "fade" && (i.animate({
                    opacity: 0
                }, n.animationSpeed, function () {
                    i.css(f.close)
                }), t ? i.trigger("reveal:closed") : a.delay(n.animationSpeed).fadeOut(n.animationSpeed, function () {
                    i.trigger("reveal:closed")
                })), n.animation === "none" && (i.css(f.close), t || a.css({
                    display: "none"
                }), i.trigger("reveal:closed")), t = !1)
            }

            function g() {
                i.unbind(".reveal"), a.unbind(".reveal"), l.unbind(".reveal"), e("body").unbind(".reveal")
            }

            function y() {
                var e = i.find(".flex-video"),
                    t = e.find("iframe");
                t.length > 0 && (t.data("src", t.attr("src")), t.attr("src", ""), e.fadeOut(100))
            }
            var i = e(this),
                s = parseInt(i.css("top"), 10),
                o = i.height() + s,
                u = !1,
                a = e(".reveal-modal-bg"),
                f = {
                    open: {
                        top: 0,
                        opacity: 0,
                        visibility: "visible",
                        display: "block"
                    },
                    close: {
                        top: s,
                        opacity: 1,
                        visibility: "hidden",
                        display: "none"
                    }
                },
                l;
            a.length === 0 && (a = e("<div />", {
                "class": "reveal-modal-bg"
            }).insertAfter(i), a.fadeTo("fast", .8)), i.bind("reveal:open.reveal", d), i.bind("reveal:open.reveal", v), i.bind("reveal:close.reveal", m), i.bind("reveal:closed.reveal", y), i.bind("reveal:opened.reveal reveal:closed.reveal", c), i.bind("reveal:closed.reveal", g), i.bind("reveal:open.reveal", n.open), i.bind("reveal:opened.reveal", n.opened), i.bind("reveal:close.reveal", n.close), i.bind("reveal:closed.reveal", n.closed), i.trigger("reveal:open"), l = e("." + n.dismissModalClass).bind("click.reveal", function () {
                i.trigger("reveal:close")
            }), n.closeOnBackgroundClick && (a.css({
                cursor: "pointer"
            }), a.bind("click.reveal", function () {
                i.trigger("reveal:close")
            })), e("body").bind("keyup.reveal", function (e) {
                e.which === 27 && i.trigger("reveal:close")
            })
        })
    }
}(jQuery),
function ($) {
    $.extend({
        tablesorter: new function () {
            function benchmark(e, t) {
                log(e + "," + ((new Date).getTime() - t.getTime()) + "ms")
            }

            function log(e) {
                typeof console != "undefined" && typeof console.debug != "undefined" ? console.log(e) : alert(e)
            }

            function buildParserCache(e, t) {
                if (e.config.debug) var n = "";
                if (e.tBodies.length == 0) return;
                var r = e.tBodies[0].rows;
                if (r[0]) {
                    var i = [],
                        s = r[0].cells,
                        o = s.length;
                    for (var u = 0; u < o; u++) {
                        var a = !1;
                        $.metadata && $(t[u]).metadata() && $(t[u]).metadata().sorter ? a = getParserById($(t[u]).metadata().sorter) : e.config.headers[u] && e.config.headers[u].sorter && (a = getParserById(e.config.headers[u].sorter)), a || (a = detectParserForColumn(e, r, -1, u)), e.config.debug && (n += "column:" + u + " parser:" + a.id + "\n"), i.push(a)
                    }
                }
                return e.config.debug && log(n), i
            }

            function detectParserForColumn(e, t, n, r) {
                var i = parsers.length,
                    s = !1,
                    o = !1,
                    u = !0;
                while (o == "" && u) n++, t[n] ? (s = getNodeFromRowAndCellIndex(t, n, r), o = trimAndGetNodeText(e.config, s), e.config.debug && log("Checking if value was empty on row:" + n)) : u = !1;
                for (var a = 1; a < i; a++)
                    if (parsers[a].is(o, e, s)) return parsers[a];
                return parsers[0]
            }

            function getNodeFromRowAndCellIndex(e, t, n) {
                return e[t].cells[n]
            }

            function trimAndGetNodeText(e, t) {
                return $.trim(getElementText(e, t))
            }

            function getParserById(e) {
                var t = parsers.length;
                for (var n = 0; n < t; n++)
                    if (parsers[n].id.toLowerCase() == e.toLowerCase()) return parsers[n];
                return !1
            }

            function buildCache(e) {
                if (e.config.debug) var t = new Date;
                var n = e.tBodies[0] && e.tBodies[0].rows.length || 0,
                    r = e.tBodies[0].rows[0] && e.tBodies[0].rows[0].cells.length || 0,
                    i = e.config.parsers,
                    s = {
                        row: [],
                        normalized: []
                    };
                for (var o = 0; o < n; ++o) {
                    var u = $(e.tBodies[0].rows[o]),
                        a = [];
                    if (u.hasClass(e.config.cssChildRow)) {
                        s.row[s.row.length - 1] = s.row[s.row.length - 1].add(u);
                        continue
                    }
                    s.row.push(u);
                    for (var f = 0; f < r; ++f) a.push(i[f].format(getElementText(e.config, u[0].cells[f]), e, u[0].cells[f]));
                    a.push(s.normalized.length), s.normalized.push(a), a = null
                }
                return e.config.debug && benchmark("Building cache for " + n + " rows:", t), s
            }

            function getElementText(e, t) {
                var n = "";
                return t ? (e.supportsTextContent || (e.supportsTextContent = t.textContent || !1), e.textExtraction == "simple" ? e.supportsTextContent ? n = t.textContent : t.childNodes[0] && t.childNodes[0].hasChildNodes() ? n = t.childNodes[0].innerHTML : n = t.innerHTML : typeof e.textExtraction == "function" ? n = e.textExtraction(t) : n = $(t).text(), n) : ""
            }

            function appendToTable(e, t) {
                if (e.config.debug) var n = new Date;
                var r = t,
                    i = r.row,
                    s = r.normalized,
                    o = s.length,
                    u = s[0].length - 1,
                    a = $(e.tBodies[0]),
                    f = [];
                for (var l = 0; l < o; l++) {
                    var c = s[l][u];
                    f.push(i[c]);
                    if (!e.config.appender) {
                        var h = i[c].length;
                        for (var p = 0; p < h; p++) a[0].appendChild(i[c][p])
                    }
                }
                e.config.appender && e.config.appender(e, f), f = null, e.config.debug && benchmark("Rebuilt table:", n), applyWidget(e), setTimeout(function () {
                    $(e).trigger("sortEnd")
                }, 0)
            }

            function buildHeaders(e) {
                if (e.config.debug) var t = new Date;
                var n = $.metadata ? !0 : !1,
                    r = computeTableHeaderCellIndexes(e);
                return $tableHeaders = $(e.config.selectorHeaders, e).each(function (t) {
                    this.column = r[this.parentNode.rowIndex + "-" + this.cellIndex], this.order = formatSortingOrder(e.config.sortInitialOrder), this.count = this.order;
                    if (checkHeaderMetadata(this) || checkHeaderOptions(e, t)) this.sortDisabled = !0;
                    checkHeaderOptionsSortingLocked(e, t) && (this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(e, t));
                    if (!this.sortDisabled) {
                        var n = $(this).addClass(e.config.cssHeader);
                        e.config.onRenderHeader && e.config.onRenderHeader.apply(n)
                    }
                    e.config.headerList[t] = this
                }), e.config.debug && (benchmark("Built headers:", t), log($tableHeaders)), $tableHeaders
            }

            function computeTableHeaderCellIndexes(e) {
                var t = [],
                    n = {},
                    r = e.getElementsByTagName("THEAD")[0],
                    i = r.getElementsByTagName("TR");
                for (var s = 0; s < i.length; s++) {
                    var o = i[s].cells;
                    for (var u = 0; u < o.length; u++) {
                        var a = o[u],
                            f = a.parentNode.rowIndex,
                            l = f + "-" + a.cellIndex,
                            c = a.rowSpan || 1,
                            h = a.colSpan || 1,
                            p;
                        typeof t[f] == "undefined" && (t[f] = []);
                        for (var d = 0; d < t[f].length + 1; d++)
                            if (typeof t[f][d] == "undefined") {
                                p = d;
                                break
                            }
                        n[l] = p;
                        for (var d = f; d < f + c; d++) {
                            typeof t[d] == "undefined" && (t[d] = []);
                            var v = t[d];
                            for (var m = p; m < p + h; m++) v[m] = "x"
                        }
                    }
                }
                return n
            }

            function checkCellColSpan(e, t, n) {
                var r = [],
                    i = e.tHead.rows,
                    s = i[n].cells;
                for (var o = 0; o < s.length; o++) {
                    var u = s[o];
                    u.colSpan > 1 ? r = r.concat(checkCellColSpan(e, headerArr, n++)) : (e.tHead.length == 1 || u.rowSpan > 1 || !i[n + 1]) && r.push(u)
                }
                return r
            }

            function checkHeaderMetadata(e) {
                return $.metadata && $(e).metadata().sorter === !1 ? !0 : !1
            }

            function checkHeaderOptions(e, t) {
                return e.config.headers[t] && e.config.headers[t].sorter === !1 ? !0 : !1
            }

            function checkHeaderOptionsSortingLocked(e, t) {
                return e.config.headers[t] && e.config.headers[t].lockedOrder ? e.config.headers[t].lockedOrder : !1
            }

            function applyWidget(e) {
                var t = e.config.widgets,
                    n = t.length;
                for (var r = 0; r < n; r++) getWidgetById(t[r]).format(e)
            }

            function getWidgetById(e) {
                var t = widgets.length;
                for (var n = 0; n < t; n++)
                    if (widgets[n].id.toLowerCase() == e.toLowerCase()) return widgets[n]
            }

            function formatSortingOrder(e) {
                return typeof e != "Number" ? e.toLowerCase() == "desc" ? 1 : 0 : e == 1 ? 1 : 0
            }

            function isValueInArray(e, t) {
                var n = t.length;
                for (var r = 0; r < n; r++)
                    if (t[r][0] == e) return !0;
                return !1
            }

            function setHeadersCss(e, t, n, r) {
                t.removeClass(r[0]).removeClass(r[1]);
                var i = [];
                t.each(function (e) {
                    this.sortDisabled || (i[this.column] = $(this))
                });
                var s = n.length;
                for (var o = 0; o < s; o++) i[n[o][0]].addClass(r[n[o][1]])
            }

            function fixColumnWidth(e, t) {
                var n = e.config;
                if (n.widthFixed) {
                    var r = $("<colgroup>");
                    $("tr:first td", e.tBodies[0]).each(function () {
                        r.append($("<col>").css("width", $(this).width()))
                    }), $(e).prepend(r)
                }
            }

            function updateHeaderSortCount(e, t) {
                var n = e.config,
                    r = t.length;
                for (var i = 0; i < r; i++) {
                    var s = t[i],
                        o = n.headerList[s[0]];
                    o.count = s[1], o.count++
                }
            }

            function multisort(table, sortList, cache) {
                if (table.config.debug) var sortTime = new Date;
                var dynamicExp = "var sortWrapper = function(a,b) {",
                    l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var c = sortList[i][0],
                        order = sortList[i][1],
                        s = table.config.parsers[c].type == "text" ? order == 0 ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c) : order == 0 ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c),
                        e = "e" + i;
                    dynamicExp += "var " + e + " = " + s, dynamicExp += "if(" + e + ") { return " + e + "; } ", dynamicExp += "else { "
                }
                var orgOrderCol = cache.normalized[0].length - 1;
                dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
                for (var i = 0; i < l; i++) dynamicExp += "}; ";
                return dynamicExp += "return 0; ", dynamicExp += "}; ", table.config.debug && benchmark("Evaling expression:" + dynamicExp, new Date), eval(dynamicExp), cache.normalized.sort(sortWrapper), table.config.debug && benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime), cache
            }

            function makeSortFunction(e, t, n) {
                var r = "a[" + n + "]",
                    i = "b[" + n + "]";
                if (e == "text" && t == "asc") return "(" + r + " == " + i + " ? 0 : (" + r + " === null ? Number.POSITIVE_INFINITY : (" + i + " === null ? Number.NEGATIVE_INFINITY : (" + r + " < " + i + ") ? -1 : 1 )));";
                if (e == "text" && t == "desc") return "(" + r + " == " + i + " ? 0 : (" + r + " === null ? Number.POSITIVE_INFINITY : (" + i + " === null ? Number.NEGATIVE_INFINITY : (" + i + " < " + r + ") ? -1 : 1 )));";
                if (e == "numeric" && t == "asc") return "(" + r + " === null && " + i + " === null) ? 0 :(" + r + " === null ? Number.POSITIVE_INFINITY : (" + i + " === null ? Number.NEGATIVE_INFINITY : " + r + " - " + i + "));";
                if (e == "numeric" && t == "desc") return "(" + r + " === null && " + i + " === null) ? 0 :(" + r + " === null ? Number.POSITIVE_INFINITY : (" + i + " === null ? Number.NEGATIVE_INFINITY : " + i + " - " + r + "));"
            }

            function makeSortText(e) {
                return "((a[" + e + "] < b[" + e + "]) ? -1 : ((a[" + e + "] > b[" + e + "]) ? 1 : 0));"
            }

            function makeSortTextDesc(e) {
                return "((b[" + e + "] < a[" + e + "]) ? -1 : ((b[" + e + "] > a[" + e + "]) ? 1 : 0));"
            }

            function makeSortNumeric(e) {
                return "a[" + e + "]-b[" + e + "];"
            }

            function makeSortNumericDesc(e) {
                return "b[" + e + "]-a[" + e + "];"
            }

            function sortText(e, t) {
                return table.config.sortLocaleCompare ? e.localeCompare(t) : e < t ? -1 : e > t ? 1 : 0
            }

            function sortTextDesc(e, t) {
                return table.config.sortLocaleCompare ? t.localeCompare(e) : t < e ? -1 : t > e ? 1 : 0
            }

            function sortNumeric(e, t) {
                return e - t
            }

            function sortNumericDesc(e, t) {
                return t - e
            }

            function getCachedSortType(e, t) {
                return e[t].type
            }
            var parsers = [],
                widgets = [];
            this.defaults = {
                cssHeader: "header",
                cssAsc: "headerSortUp",
                cssDesc: "headerSortDown",
                cssChildRow: "expand-child",
                sortInitialOrder: "asc",
                sortMultiSortKey: "shiftKey",
                sortForce: null,
                sortAppend: null,
                sortLocaleCompare: !0,
                textExtraction: "simple",
                parsers: {},
                widgets: [],
                widgetZebra: {
                    css: ["even", "odd"]
                },
                headers: {},
                widthFixed: !1,
                cancelSelection: !0,
                sortList: [],
                headerList: [],
                dateFormat: "us",
                decimal: "/.|,/g",
                onRenderHeader: null,
                selectorHeaders: "thead th",
                debug: !1
            }, this.benchmark = benchmark, this.construct = function (e) {
                return this.each(function () {
                    if (!this.tHead || !this.tBodies) return;
                    var t, n, r, i, s, o = 0,
                        u;
                    this.config = {}, s = $.extend(this.config, $.tablesorter.defaults, e), t = $(this), $.data(this, "tablesorter", s), r = buildHeaders(this), this.config.parsers = buildParserCache(this, r), i = buildCache(this);
                    var a = [s.cssDesc, s.cssAsc];
                    fixColumnWidth(this), r.click(function (e) {
                        var n = t[0].tBodies[0] && t[0].tBodies[0].rows.length || 0;
                        if (!this.sortDisabled && n > 0) {
                            t.trigger("sortStart");
                            var o = $(this),
                                u = this.column;
                            this.order = this.count++ % 2, this.lockedOrder && (this.order = this.lockedOrder);
                            if (!e[s.sortMultiSortKey]) {
                                s.sortList = [];
                                if (s.sortForce != null) {
                                    var f = s.sortForce;
                                    for (var l = 0; l < f.length; l++) f[l][0] != u && s.sortList.push(f[l])
                                }
                                s.sortList.push([u, this.order])
                            } else if (isValueInArray(u, s.sortList))
                                for (var l = 0; l < s.sortList.length; l++) {
                                    var c = s.sortList[l],
                                        h = s.headerList[c[0]];
                                    c[0] == u && (h.count = c[1], h.count++, c[1] = h.count % 2)
                                } else s.sortList.push([u, this.order]);
                            return setTimeout(function () {
                                setHeadersCss(t[0], r, s.sortList, a), appendToTable(t[0], multisort(t[0], s.sortList, i))
                            }, 1), !1
                        }
                    }).mousedown(function () {
                        if (s.cancelSelection) return this.onselectstart = function () {
                            return !1
                        }, !1
                    }), t.bind("update", function () {
                        var e = this;
                        setTimeout(function () {
                            e.config.parsers = buildParserCache(e, r), i = buildCache(e)
                        }, 1)
                    }).bind("updateCell", function (e, t) {
                        var n = this.config,
                            r = [t.parentNode.rowIndex - 1, t.cellIndex];
                        i.normalized[r[0]][r[1]] = n.parsers[r[1]].format(getElementText(n, t), t)
                    }).bind("sorton", function (e, t) {
                        $(this).trigger("sortStart"), s.sortList = t;
                        var n = s.sortList;
                        updateHeaderSortCount(this, n), setHeadersCss(this, r, n, a), appendToTable(this, multisort(this, n, i))
                    }).bind("appendCache", function () {
                        appendToTable(this, i)
                    }).bind("applyWidgetId", function (e, t) {
                        getWidgetById(t).format(this)
                    }).bind("applyWidgets", function () {
                        applyWidget(this)
                    }), $.metadata && $(this).metadata() && $(this).metadata().sortlist && (s.sortList = $(this).metadata().sortlist), s.sortList.length > 0 && t.trigger("sorton", [s.sortList]), applyWidget(this)
                })
            }, this.addParser = function (e) {
                var t = parsers.length,
                    n = !0;
                for (var r = 0; r < t; r++) parsers[r].id.toLowerCase() == e.id.toLowerCase() && (n = !1);
                n && parsers.push(e)
            }, this.addWidget = function (e) {
                widgets.push(e)
            }, this.formatFloat = function (e) {
                var t = parseFloat(e);
                return isNaN(t) ? 0 : t
            }, this.formatInt = function (e) {
                var t = parseInt(e);
                return isNaN(t) ? 0 : t
            }, this.isDigit = function (e, t) {
                return /^[-+]?\d*$/.test($.trim(e.replace(/[,.']/g, "")))
            }, this.clearTableBody = function (e) {
                if ($.browser.msie) {
                    function t() {
                        while (this.firstChild) this.removeChild(this.firstChild)
                    }
                    t.apply(e.tBodies[0])
                } else e.tBodies[0].innerHTML = ""
            }
        }
    }), $.fn.extend({
        tablesorter: $.tablesorter.construct
    });
    var ts = $.tablesorter;
    ts.addParser({
        id: "text",
        is: function (e) {
            return !0
        },
        format: function (e) {
            return $.trim(e.toLocaleLowerCase())
        },
        type: "text"
    }), ts.addParser({
        id: "digit",
        is: function (e, t) {
            var n = t.config;
            return $.tablesorter.isDigit(e, n)
        },
        format: function (e) {
            return $.tablesorter.formatFloat(e)
        },
        type: "numeric"
    }), ts.addParser({
        id: "currency",
        is: function (e) {
            return /^[£$€?.]/.test(e)
        },
        format: function (e) {
            return $.tablesorter.formatFloat(e.replace(new RegExp(/[£$€]/g), ""))
        },
        type: "numeric"
    }), ts.addParser({
        id: "ipAddress",
        is: function (e) {
            return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(e)
        },
        format: function (e) {
            var t = e.split("."),
                n = "",
                r = t.length;
            for (var i = 0; i < r; i++) {
                var s = t[i];
                s.length == 2 ? n += "0" + s : n += s
            }
            return $.tablesorter.formatFloat(n)
        },
        type: "numeric"
    }), ts.addParser({
        id: "url",
        is: function (e) {
            return /^(https?|ftp|file):\/\/$/.test(e)
        },
        format: function (e) {
            return jQuery.trim(e.replace(new RegExp(/(https?|ftp|file):\/\//), ""))
        },
        type: "text"
    }), ts.addParser({
        id: "isoDate",
        is: function (e) {
            return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(e)
        },
        format: function (e) {
            return $.tablesorter.formatFloat(e != "" ? (new Date(e.replace(new RegExp(/-/g), "/"))).getTime() : "0")
        },
        type: "numeric"
    }), ts.addParser({
        id: "percent",
        is: function (e) {
            return /\%$/.test($.trim(e))
        },
        format: function (e) {
            return $.tablesorter.formatFloat(e.replace(new RegExp(/%/g), ""))
        },
        type: "numeric"
    }), ts.addParser({
        id: "usLongDate",
        is: function (e) {
            return e.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))
        },
        format: function (e) {
            return $.tablesorter.formatFloat((new Date(e)).getTime())
        },
        type: "numeric"
    }), ts.addParser({
        id: "shortDate",
        is: function (e) {
            return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(e)
        },
        format: function (e, t) {
            var n = t.config;
            e = e.replace(/\-/g, "/");
            if (n.dateFormat == "us") e = e.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2");
            else if (n.dateFormat == "uk") e = e.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
            else if (n.dateFormat == "dd/mm/yy" || n.dateFormat == "dd-mm-yy") e = e.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3");
            return $.tablesorter.formatFloat((new Date(e)).getTime())
        },
        type: "numeric"
    }), ts.addParser({
        id: "time",
        is: function (e) {
            return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(e)
        },
        format: function (e) {
            return $.tablesorter.formatFloat((new Date("2000/01/01 " + e)).getTime())
        },
        type: "numeric"
    }), ts.addParser({
        id: "metadata",
        is: function (e) {
            return !1
        },
        format: function (e, t, n) {
            var r = t.config,
                i = r.parserMetadataName ? r.parserMetadataName : "sortValue";
            return $(n).metadata()[i]
        },
        type: "numeric"
    }), ts.addWidget({
        id: "zebra",
        format: function (e) {
            if (e.config.debug) var t = new Date;
            var n, r = -1,
                i;
            $("tr:visible", e.tBodies[0]).each(function (t) {
                n = $(this), n.hasClass(e.config.cssChildRow) || r++, i = r % 2 == 0, n.removeClass(e.config.widgetZebra.css[i ? 0 : 1]).addClass(e.config.widgetZebra.css[i ? 1 : 0])
            }), e.config.debug && $.tablesorter.benchmark("Applying Zebra widget", t)
        }
    })
}(jQuery),
function (e, t, n) {
    function i(e) {
        return e
    }

    function s(e) {
        return o(decodeURIComponent(e.replace(r, " ")))
    }

    function o(e) {
        return e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e
    }

    function u(e) {
        return a.json ? JSON.parse(e) : e
    }
    var r = /\+/g,
        a = e.cookie = function (r, o, f) {
            if (o !== n) {
                f = e.extend({}, a.defaults, f), o === null && (f.expires = -1);
                if (typeof f.expires == "number") {
                    var l = f.expires,
                        c = f.expires = new Date;
                    c.setDate(c.getDate() + l)
                }
                return o = a.json ? JSON.stringify(o) : String(o), t.cookie = [encodeURIComponent(r), "=", a.raw ? o : encodeURIComponent(o), f.expires ? "; expires=" + f.expires.toUTCString() : "", f.path ? "; path=" + f.path : "", f.domain ? "; domain=" + f.domain : "", f.secure ? "; secure" : ""].join("")
            }
            var h = a.raw ? i : s,
                p = t.cookie.split("; "),
                d = r ? null : {};
            for (var v = 0, m = p.length; v < m; v++) {
                var g = p[v].split("="),
                    y = h(g.shift()),
                    b = h(g.join("="));
                if (r && r === y) {
                    d = u(b);
                    break
                }
                r || (d[y] = u(b))
            }
            return d
        };
    a.defaults = {}, e.removeCookie = function (t, n) {
        return e.cookie(t) !== null ? (e.cookie(t, null, n), !0) : !1
    }
}(jQuery, document);
var msBeautify = msBeautify || {};
(function ($) {
    function dd(element, settings) {
        var settings = $.extend(!0, {
                byJson: {
                    data: null,
                    selectedIndex: 0,
                    name: null,
                    size: 0,
                    multiple: !1,
                    width: 250
                },
                mainCSS: "dd",
                height: 120,
                visibleRows: 7,
                rowHeight: 0,
                showIcon: !0,
                zIndex: 9999,
                useSprite: !1,
                animStyle: "slideDown",
                event: "click",
                openDirection: "auto",
                jsonTitle: !0,
                style: "",
                disabledOpacity: .7,
                disabledOptionEvents: !0,
                childWidth: 0,
                enableCheckbox: !1,
                checkboxNameSuffix: "_mscheck",
                append: "",
                prepend: "",
                reverseMode: !0,
                roundedCorner: !0,
                enableAutoFilter: !0,
                on: {
                    create: null,
                    open: null,
                    close: null,
                    add: null,
                    remove: null,
                    change: null,
                    blur: null,
                    click: null,
                    dblclick: null,
                    mousemove: null,
                    mouseover: null,
                    mouseout: null,
                    focus: null,
                    mousedown: null,
                    mouseup: null
                }
            }, settings),
            $this = this,
            holderId = {
                postElementHolder: "_msddHolder",
                postID: "_msdd",
                postTitleID: "_title",
                postTitleTextID: "_titleText",
                postChildID: "_child"
            },
            css = {
                dd: settings.mainCSS,
                ddTitle: "ddTitle",
                arrow: "ddArrow arrowoff",
                ddChild: "ddChild",
                ddTitleText: "ddTitleText",
                disabled: "disabled",
                enabled: "enabled",
                ddOutOfVision: "ddOutOfVision",
                borderTop: "borderTop",
                noBorderTop: "noBorderTop",
                selected: "selected",
                divider: "divider",
                optgroup: "optgroup",
                optgroupTitle: "optgroupTitle",
                description: "description",
                label: "ddlabel",
                hover: "hover",
                disabledAll: "disabledAll"
            },
            css_i = {
                li: "_msddli_",
                borderRadiusTp: "borderRadiusTp",
                ddChildMore: "border shadow",
                fnone: "fnone"
            },
            isList = !1,
            isMultiple = !1,
            isDisabled = !1,
            cacheElement = {},
            element, orginial = {},
            isOpen = !1,
            DOWN_ARROW = 40,
            UP_ARROW = 38,
            LEFT_ARROW = 37,
            RIGHT_ARROW = 39,
            ESCAPE = 27,
            ENTER = 13,
            ALPHABETS_START = 47,
            SHIFT = 16,
            CONTROL = 17,
            BACKSPACE = 8,
            DELETE = 46,
            shiftHolded = !1,
            controlHolded = !1,
            lastTarget = null,
            forcedTrigger = !1,
            oldSelected, isCreated = !1,
            doc = document,
            ua = window.navigator.userAgent,
            isIE = ua.match(/msie/i);
        settings.reverseMode = settings.reverseMode.toString(), settings.roundedCorner = settings.roundedCorner.toString();
        var isArray = function (e) {
                return Object.prototype.toString.call(e) == "[object Array]" ? !0 : !1
            },
            msieversion = function () {
                var e = ua.indexOf("MSIE");
                return e > 0 ? parseInt(ua.substring(e + 5, ua.indexOf(".", e))) : 0
            },
            checkDataSetting = function () {
                settings.mainCSS = $("#" + element).data("maincss") || settings.mainCSS, settings.visibleRows = $("#" + element).data("visiblerows") || settings.visibleRows, $("#" + element).data("showicon") == 0 && (settings.showIcon = $("#" + element).data("showicon")), settings.useSprite = $("#" + element).data("usesprite") || settings.useSprite, settings.animStyle = $("#" + element).data("animstyle") || settings.animStyle, settings.event = $("#" + element).data("event") || settings.event, settings.openDirection = $("#" + element).data("opendirection") || settings.openDirection, settings.jsonTitle = $("#" + element).data("jsontitle") || settings.jsonTitle, settings.disabledOpacity = $("#" + element).data("disabledopacity") || settings.disabledOpacity, settings.childWidth = $("#" + element).data("childwidth") || settings.childWidth, settings.enableCheckbox = $("#" + element).data("enablecheckbox") || settings.enableCheckbox, settings.checkboxNameSuffix = $("#" + element).data("checkboxnamesuffix") || settings.checkboxNameSuffix, settings.append = $("#" + element).data("append") || settings.append, settings.prepend = $("#" + element).data("prepend") || settings.prepend, settings.reverseMode = $("#" + element).data("reversemode") || settings.reverseMode, settings.roundedCorner = $("#" + element).data("roundedcorner") || settings.roundedCorner, settings.enableAutoFilter = $("#" + element).data("enableautofilter") || settings.enableAutoFilter, settings.reverseMode = settings.reverseMode.toString(), settings.roundedCorner = settings.roundedCorner.toString(), settings.enableAutoFilter = settings.enableAutoFilter.toString()
            },
            getElement = function (e) {
                return cacheElement[e] === undefined && (cacheElement[e] = doc.getElementById(e)), cacheElement[e]
            },
            getIndex = function (e) {
                var t = getPostID("postChildID");
                return $("#" + t + " li." + css_i.li).index(e)
            },
            createByJson = function () {
                if (settings.byJson.data) {
                    var validData = ["description", "image", "title"];
                    try {
                        element.id || (element.id = "dropdown" + msBeautify.counter), settings.byJson.data = eval(settings.byJson.data);
                        var id = "msdropdown" + msBeautify.counter++,
                            obj = {};
                        obj.id = id, obj.name = settings.byJson.name || element.id, settings.byJson.size > 0 && (obj.size = settings.byJson.size), obj.multiple = settings.byJson.multiple;
                        var oSelect = createElement("select", obj);
                        for (var i = 0; i < settings.byJson.data.length; i++) {
                            var current = settings.byJson.data[i],
                                opt = new Option(current.text, current.value);
                            for (var p in current)
                                if (p.toLowerCase() != "text") {
                                    var key = $.inArray(p.toLowerCase(), validData) != -1 ? "data-" : "";
                                    opt.setAttribute(key + p, current[p])
                                }
                            oSelect
                                .options[i] = opt
                        }
                        getElement(element.id).appendChild(oSelect), oSelect.selectedIndex = settings.byJson.selectedIndex, $(oSelect).css({
                            width: settings.byJson.width + "px"
                        }), element = oSelect
                    } catch (e) {
                        throw "There is an error in json data."
                    }
                }
            },
            init = function () {
                createByJson(), element.id || (element.id = "msdrpdd" + msBeautify.counter++), element = element.id, $this.element = element, checkDataSetting(), isDisabled = getElement(element).disabled;
                var e = settings.enableCheckbox;
                e.toString() === "true" && (getElement(element).multiple = !0, settings.enableCheckbox = !0), isList = getElement(element).size > 1 || getElement(element).multiple == 1 ? !0 : !1, isList && (isMultiple = getElement(element).multiple), mergeAllProp(), createLayout(), updateProp("uiData", getDataAndUI()), updateProp("selectedOptions", $("#" + element + " option:selected"));
                var t = getPostID("postChildID");
                oldSelected = $("#" + t + " li." + css.selected), settings.reverseMode === "true" && $("#" + element).on("change", function () {
                    setValue(this.selectedIndex)
                }), getElement(element).refresh = function (e) {
                    $("#" + element).msDropdown().data("dd").refresh()
                }
            },
            getPostID = function (e) {
                return element + holderId[e]
            },
            getInternalStyle = function (e) {
                var t = e.style === undefined ? "" : e.style.cssText;
                return t
            },
            parseOption = function (opt) {
                var imagePath = "",
                    title = "",
                    description = "",
                    value = -1,
                    text = "",
                    className = "",
                    imagecss = "",
                    index;
                if (opt !== undefined) {
                    var attrTitle = opt.title || "";
                    if (attrTitle != "") {
                        var reg = /^\{.*\}$/,
                            isJson = reg.test(attrTitle);
                        if (isJson && settings.jsonTitle) var obj = eval("[" + attrTitle + "]");
                        title = isJson && settings.jsonTitle ? obj[0].title : title, description = isJson && settings.jsonTitle ? obj[0].description : description, imagePath = isJson && settings.jsonTitle ? obj[0].image : attrTitle, imagecss = isJson && settings.jsonTitle ? obj[0].imagecss : imagecss, index = opt.index
                    }
                    text = opt.text || "", value = opt.value || "", className = opt.className || "", title = $(opt).prop("data-title") || $(opt).data("title") || title || "", description = $(opt).prop("data-description") || $(opt).data("description") || description || "", imagePath = $(opt).prop("data-image") || $(opt).data("image") || imagePath || "", imagecss = $(opt).prop("data-imagecss") || $(opt).data("imagecss") || imagecss || "", index = $(opt).index()
                }
                var o = {
                    image: imagePath,
                    title: title,
                    description: description,
                    value: value,
                    text: text,
                    className: className,
                    imagecss: imagecss,
                    index: index
                };
                return o
            },
            createElement = function (e, t, n) {
                var r = doc.createElement(e);
                if (t)
                    for (var i in t) switch (i) {
                    case "style":
                        r.style.cssText = t[i];
                        break;
                    default:
                        r[i] = t[i]
                    }
                return n && (r.innerHTML = n), r
            },
            hideOriginal = function () {
                var e = getPostID("postElementHolder");
                if ($("#" + e).length == 0) {
                    var t = {
                        style: "height: 0px;overflow: hidden;position: absolute;",
                        className: css.ddOutOfVision
                    };
                    t.id = e;
                    var n = createElement("div", t);
                    $("#" + element).after(n), $("#" + element).appendTo($("#" + e))
                } else $("#" + e).css({
                    height: 0,
                    overflow: "hidden",
                    position: "absolute"
                });
                getElement(element).tabIndex = -1
            },
            createWrapper = function () {
                var e = settings.roundedCorner == "true" ? " borderRadius" : "",
                    t = {
                        className: css.dd + " ddcommon" + e
                    },
                    n = getInternalStyle(getElement(element)),
                    r = $("#" + element).outerWidth();
                t.style = "width: " + r + "px;", n.length > 0 && (t.style = t.style + "" + n), t.id = getPostID("postID"), t.tabIndex = getElement(element).tabIndex;
                var i = createElement("div", t);
                return i
            },
            createTitle = function () {
                var e;
                getElement(element).selectedIndex >= 0 ? e = getElement(element).options[getElement(element).selectedIndex] : e = {
                    value: "",
                    text: ""
                };
                var t = "",
                    n = "",
                    r = $("#" + element).data("usesprite");
                r && (settings.useSprite = r), settings.useSprite != 0 && (t = " " + settings.useSprite, n = " " + e.className);
                var i = settings.roundedCorner == "true" ? " " + css_i.borderRadiusTp : "",
                    s = createElement("div", {
                        className: css.ddTitle + t + i
                    }),
                    o = createElement("span", {
                        className: css.divider
                    }),
                    u = createElement("span", {
                        className: css.arrow
                    }),
                    a = getPostID("postTitleID"),
                    f = createElement("span", {
                        className: css.ddTitleText + n,
                        id: a
                    }),
                    l = parseOption(e),
                    c = l.image,
                    h = l.text || "";
                if (c != "" && settings.showIcon) {
                    var p = createElement("img");
                    p.src = c, l.imagecss != "" && (p.className = l.imagecss + " ")
                }
                var d = createElement("span", {
                    className: css.label
                }, h);
                s.appendChild(o), s.appendChild(u), p && f.appendChild(p), f.appendChild(d), s.appendChild(f);
                var v = createElement("span", {
                    className: css.description
                }, l.description);
                return f.appendChild(v), s
            },
            createFilterBox = function () {
                var e = getPostID("postTitleTextID"),
                    t = settings.roundedCorner == "true" ? "borderRadius" : "",
                    n = createElement("input", {
                        id: e,
                        type: "text",
                        value: "",
                        autocomplete: "off",
                        className: "text shadow " + t,
                        style: "display: none"
                    });
                return n
            },
            createChild = function (e) {
                var t = {},
                    n = getInternalStyle(e);
                n.length > 0 && (t.style = n);
                var r = e.disabled ? css.disabled : css.enabled;
                r = e.selected ? r + " " + css.selected : r, r = r + " " + css_i.li, t.className = r, settings.useSprite != 0 && (t.className = r + " " + e.className);
                var i = createElement("li", t),
                    s = parseOption(e);
                s.title != "" && (i.title = s.title);
                var o = s.image;
                if (o != "" && settings.showIcon) {
                    var u = createElement("img");
                    u.src = o, s.imagecss != "" && (u.className = s.imagecss + " ")
                }
                if (s.description != "") var a = createElement("span", {
                    className: css.description
                }, s.description);
                var f = e.text || "",
                    l = createElement("span", {
                        className: css.label
                    }, f);
                if (settings.enableCheckbox === !0) {
                    var c = createElement("input", {
                        type: "checkbox",
                        name: element + settings.checkboxNameSuffix + "[]",
                        value: e.value || "",
                        className: "checkbox"
                    });
                    i.appendChild(c), settings.enableCheckbox === !0 && (c.checked = e.selected ? !0 : !1)
                }
                u && i.appendChild(u), i.appendChild(l), a ? i.appendChild(a) : u && (u.className = u.className + css_i.fnone);
                var h = createElement("div", {
                    className: "clear"
                });
                return i.appendChild(h), i
            },
            createChildren = function () {
                var e = getPostID("postChildID"),
                    t = {
                        className: css.ddChild + " ddchild_ " + css_i.ddChildMore,
                        id: e
                    };
                isList == 0 ? t.style = "z-index: " + settings.zIndex : t.style = "z-index:1";
                var n = $("#" + element).data("childwidth") || settings.childWidth;
                n && (t.style = (t.style || "") + ";width:" + n);
                var r = createElement("div", t),
                    i = createElement("ul");
                settings.useSprite != 0 && (i.className = settings.useSprite);
                var s = getElement(element).children;
                for (var o = 0; o < s.length; o++) {
                    var u = s[o],
                        a;
                    if (u.nodeName.toLowerCase() == "optgroup") {
                        a = createElement("li", {
                            className: css.optgroup
                        });
                        var f = createElement("span", {
                            className: css.optgroupTitle
                        }, u.label);
                        a.appendChild(f);
                        var l = u.children,
                            c = createElement("ul");
                        for (var h = 0; h < l.length; h++) {
                            var p = createChild(l[h]);
                            c.appendChild(p)
                        }
                        a.appendChild(c)
                    } else a = createChild(u);
                    i.appendChild(a)
                }
                return r.appendChild(i), r
            },
            childHeight = function (e) {
                var t = getPostID("postChildID");
                if (e) return e == -1 ? $("#" + t).css({
                    height: "auto",
                    overflow: "auto"
                }) : $("#" + t).css("height", e + "px"), !1;
                var n, r = getElement(element).options.length;
                if (r > settings.visibleRows || settings.visibleRows) {
                    var i = $("#" + t + " li:first"),
                        s = parseInt(i.css("padding-bottom")) + parseInt(i.css("padding-top"));
                    settings.rowHeight === 0 && ($("#" + t).css({
                        visibility: "hidden",
                        display: "block"
                    }), settings.rowHeight = Math.ceil(i.height()), $("#" + t).css({
                        visibility: "visible"
                    }), (!isList || settings.enableCheckbox === !0) && $("#" + t).css({
                        display: "none"
                    })), n = (settings.rowHeight + s) * Math.min(settings.visibleRows, r) + 3
                } else isList && (n = $("#" + element).height());
                return n
            },
            applyChildEvents = function () {
                var e = getPostID("postChildID");
                $("#" + e).on("click", function (e) {
                    if (isDisabled === !0) return !1;
                    e.preventDefault(), e.stopPropagation(), isList && bind_on_events()
                }), $("#" + e + " li." + css.enabled).on("click", function (e) {
                    e.target.nodeName.toLowerCase() !== "input" && close(this)
                }), $("#" + e + " li." + css.enabled).on("mousedown", function (t) {
                    if (isDisabled === !0) return !1;
                    oldSelected = $("#" + e + " li." + css.selected), lastTarget = this, t.preventDefault(), t.stopPropagation(), settings.enableCheckbox === !0 && t.target.nodeName.toLowerCase() === "input" && (controlHolded = !0);
                    if (isList === !0)
                        if (isMultiple)
                            if (shiftHolded === !0) {
                                $(this).addClass(css.selected);
                                var n = $("#" + e + " li." + css.selected),
                                    r = getIndex(this);
                                if (n.length > 1) {
                                    var i = $("#" + e + " li." + css_i.li),
                                        s = getIndex(n[0]),
                                        o = getIndex(n[1]);
                                    r > o && (s = r, o += 1);
                                    for (var u = Math.min(s, o); u <= Math.max(s, o); u++) {
                                        var a = i[u];
                                        $(a).hasClass(css.enabled) && $(a).addClass(css.selected)
                                    }
                                }
                            } else if (controlHolded === !0) {
                        $(this).toggleClass(css.selected);
                        if (settings.enableCheckbox === !0) {
                            var f = this.childNodes[0];
                            f.checked = !f.checked
                        }
                    } else $("#" + e + " li." + css.selected).removeClass(css.selected), $("#" + e + " input:checkbox").prop("checked", !1), $(this).addClass(css.selected), settings.enableCheckbox === !0 && (this.childNodes[0].checked = !0);
                    else $("#" + e + " li." + css.selected).removeClass(css.selected), $(this).addClass(css.selected);
                    else $("#" + e + " li." + css.selected).removeClass(css.selected), $(this).addClass(css.selected)
                }), $("#" + e + " li." + css.enabled).on("mouseenter", function (e) {
                    if (isDisabled === !0) return !1;
                    e.preventDefault(), e.stopPropagation(), lastTarget != null && isMultiple && ($(this).addClass(css.selected), settings.enableCheckbox === !0 && (this.childNodes[0].checked = !0))
                }), $("#" + e + " li." + css.enabled).on("mouseover", function (e) {
                    if (isDisabled === !0) return !1;
                    $(this).addClass(css.hover)
                }), $("#" + e + " li." + css.enabled).on("mouseout", function (t) {
                    if (isDisabled === !0) return !1;
                    $("#" + e + " li." + css.hover).removeClass(css.hover)
                }), $("#" + e + " li." + css.enabled).on("mouseup", function (t) {
                    if (isDisabled === !0) return !1;
                    t.preventDefault(), t.stopPropagation(), settings.enableCheckbox === !0 && (controlHolded = !1);
                    var n = $("#" + e + " li." + css.selected).length;
                    forcedTrigger = oldSelected.length != n || n == 0 ? !0 : !1, fireAfterItemClicked(), unbind_on_events(), bind_on_events(), lastTarget = null
                }), settings.disabledOptionEvents == 0 && ($("#" + e + " li." + css_i.li).on("click", function (e) {
                    if (isDisabled === !0) return !1;
                    fireOptionEventIfExist(this, "click")
                }), $("#" + e + " li." + css_i.li).on("mouseenter", function (e) {
                    if (isDisabled === !0) return !1;
                    fireOptionEventIfExist(this, "mouseenter")
                }), $("#" + e + " li." + css_i.li).on("mouseover", function (e) {
                    if (isDisabled === !0) return !1;
                    fireOptionEventIfExist(this, "mouseover")
                }), $("#" + e + " li." + css_i.li).on("mouseout", function (e) {
                    if (isDisabled === !0) return !1;
                    fireOptionEventIfExist(this, "mouseout")
                }), $("#" + e + " li." + css_i.li).on("mousedown", function (e) {
                    if (isDisabled === !0) return !1;
                    fireOptionEventIfExist(this, "mousedown")
                }), $("#" + e + " li." + css_i.li).on("mouseup", function (e) {
                    if (isDisabled === !0) return !1;
                    fireOptionEventIfExist(this, "mouseup")
                }))
            },
            removeChildEvents = function () {
                var e = getPostID("postChildID");
                $("#" + e).off("click"), $("#" + e + " li." + css.enabled).off("mouseenter"), $("#" + e + " li." + css.enabled).off("click"), $("#" + e + " li." + css.enabled).off("mouseover"), $("#" + e + " li." + css.enabled).off("mouseout"), $("#" + e + " li." + css.enabled).off("mousedown"), $("#" + e + " li." + css.enabled).off("mouseup")
            },
            triggerBypassingHandler = function (e, t, n) {
                $("#" + e).off(t, n), $("#" + e).trigger(t), $("#" + e).on(t, n)
            },
            applyEvents = function () {
                var e = getPostID("postID"),
                    t = getPostID("postTitleTextID"),
                    n = getPostID("postChildID");
                $("#" + e).on(settings.event, function (e) {
                    if (isDisabled === !0) return !1;
                    fireEventIfExist(settings.event), e.preventDefault(), e.stopPropagation(), open(e)
                }), $("#" + e).on("keydown", function (e) {
                    var t = e.which;
                    !isOpen && (t == ENTER || t == UP_ARROW || t == DOWN_ARROW || t == LEFT_ARROW || t == RIGHT_ARROW || t >= ALPHABETS_START && !isList) && (open(e), t >= ALPHABETS_START ? showFilterBox() : (e.preventDefault(), e.stopImmediatePropagation()))
                }), $("#" + e).on("focus", wrapperFocusHandler), $("#" + e).on("blur", wrapperBlurHandler), $("#" + t).on("blur", function (t) {
                    triggerBypassingHandler(e, "focus", wrapperFocusHandler)
                }), applyChildEvents(), $("#" + e).on("dblclick", on_dblclick), $("#" + e).on("mousemove", on_mousemove), $("#" + e).on("mouseenter", on_mouseover), $("#" + e).on("mouseleave", on_mouseout), $("#" + e).on("mousedown", on_mousedown), $("#" + e).on("mouseup", on_mouseup)
            },
            wrapperFocusHandler = function (e) {
                fireEventIfExist("focus")
            },
            wrapperBlurHandler = function (e) {
                fireEventIfExist("blur")
            },
            fixedForList = function () {
                var e = getPostID("postID"),
                    t = getPostID("postChildID");
                if (isList === !0 && settings.enableCheckbox === !1) $("#" + e + " ." + css.ddTitle).hide(), $("#" + t).css({
                    display: "block",
                    position: "relative"
                });
                else {
                    settings.enableCheckbox === !1 && (isMultiple = !1), $("#" + e + " ." + css.ddTitle).show(), $("#" + t).css({
                        display: "none",
                        position: "absolute"
                    });
                    var n = $("#" + t + " li." + css.selected)[0];
                    $("#" + t + " li." + css.selected).removeClass(css.selected);
                    var r = getIndex($(n).addClass(css.selected));
                    setValue(r)
                }
                childHeight(childHeight())
            },
            fixedForDisabled = function () {
                var e = getPostID("postID"),
                    t = isDisabled == 1 ? settings.disabledOpacity : 1;
                isDisabled === !0 ? $("#" + e).addClass(css.disabledAll) : $("#" + e).removeClass(css.disabledAll)
            },
            fixedSomeUI = function () {
                var e = getPostID("postTitleTextID");
                settings.enableAutoFilter == "true" && $("#" + e).on("keyup", applyFilters), fixedForList(), fixedForDisabled()
            },
            createLayout = function () {
                var e = createWrapper(),
                    t = createTitle();
                e.appendChild(t);
                var n = createFilterBox();
                e.appendChild(n);
                var r = createChildren();
                e.appendChild(r), $("#" + element).after(e), hideOriginal(), fixedSomeUI(), applyEvents();
                var i = getPostID("postChildID");
                settings.append != "" && $("#" + i).append(settings.append), settings.prepend != "" && $("#" + i).prepend(settings.prepend), typeof settings.on.create == "function" && settings.on.create.apply($this, arguments)
            },
            selectUI_LI = function (e) {
                function r(e) {
                    $($("#" + t + " li." + css_i.li)[e]).addClass(css.selected), settings.enableCheckbox === !0 && $($("#" + t + " li." + css_i.li)[e]).find("input.checkbox").prop("checked", "checked")
                }
                var t = getPostID("postChildID");
                $("#" + t + " li." + css_i.li).removeClass(css.selected), settings.enableCheckbox === !0 && $("#" + t + " li." + css_i.li + " input.checkbox").prop("checked", !1);
                if (isArray(e) === !0)
                    for (var n = 0; n < e.length; n++) r(e[n]);
                else r(e)
            },
            selectMutipleOptions = function (e, t) {
                var n = getPostID("postChildID"),
                    r = e || $("#" + n + " li." + css.selected);
                for (var i = 0; i < r.length; i++) {
                    var s = t === !0 ? r[i] : getIndex(r[i]);
                    getElement(element).options[s].selected = "selected"
                }
                setValue(r)
            },
            fireAfterItemClicked = function () {
                var e = getPostID("postChildID"),
                    t = $("#" + e + " li." + css.selected);
                getElement(element).selectedIndex = -1;
                var n;
                t.length == 0 ? n = -1 : t.length > 1 ? selectMutipleOptions(t) : n = getIndex($("#" + e + " li." + css.selected));
                if ((getElement(element).selectedIndex != n || forcedTrigger) && t.length <= 1) {
                    forcedTrigger = !1;
                    var r = has_handler("change");
                    getElement(element).selectedIndex = n, setValue(n);
                    if (typeof settings.on.change == "function") {
                        var i = getDataAndUI();
                        settings.on.change(i.data, i.ui)
                    }
                    $("#" + element).trigger("change")
                }
            },
            setValue = function (e, t) {
                if (e !== undefined) {
                    var n, r, i;
                    if (e == -1) n = -1, r = "", i = "", updateTitleUI(-1);
                    else if (typeof e != "object") {
                        var s = getElement(element).options[e];
                        getElement(element).selectedIndex = e, n = e, r = parseOption(s), i = e >= 0 ? getElement(element).options[e].text : "", updateTitleUI(undefined, r), r = r.value
                    } else n = t && t.index || getElement(element).selectedIndex, r = t && t.value || getElement(element).value, i = t && t.text || getElement(element).options[getElement(element).selectedIndex].text || "", updateTitleUI(n);
                    updateProp("selectedIndex", n), updateProp("value", r), updateProp("selectedText", i), updateProp("children", getElement(element).children), updateProp("uiData", getDataAndUI()), updateProp("selectedOptions", $("#" + element + " option:selected"))
                }
            },
            has_handler = function (e) {
                var t = {
                        byElement: !1,
                        byJQuery: !1,
                        hasEvent: !1
                    },
                    n = $("#" + element);
                try {
                    n.prop("on" + e) !== null && (t.hasEvent = !0, t.byElement = !0)
                } catch (r) {}
                var i;
                return typeof $._data == "function" ? i = $._data(n[0], "events") : i = n.data("events"), i && i[e] && (t.hasEvent = !0, t.byJQuery = !0), t
            },
            bind_on_events = function () {
                unbind_on_events(), $("body").on("click", close), $(document).on("keydown", on_keydown), $(document).on("keyup", on_keyup)
            },
            unbind_on_events = function () {
                $("body").off("click", close), $(document).off("keydown", on_keydown), $(document).off("keyup", on_keyup)
            },
            applyFilters = function (e) {
                if (e.keyCode < ALPHABETS_START && e.keyCode != BACKSPACE && e.keyCode != DELETE) return !1;
                var t = getPostID("postChildID"),
                    n = getPostID("postTitleTextID"),
                    r = getElement(n).value;
                if (r.length == 0) $("#" + t + " li:hidden").show(), childHeight(childHeight());
                else {
                    $("#" + t + " li").hide();
                    var i = $("#" + t + " li:Contains('" + r + "')").show();
                    $("#" + t + " li:visible").length <= settings.visibleRows && childHeight(-1);
                    if (i.length > 0 && !isList || !isMultiple) $("#" + t + " ." + css.selected).removeClass(css.selected), $(i[0]).addClass(css.selected)
                }
                isList || adjustOpen()
            },
            showFilterBox = function () {
                if (settings.enableAutoFilter == "true") {
                    var e = getPostID("postID"),
                        t = getPostID("postTitleTextID");
                    $("#" + t + ":hidden").length > 0 && controlHolded == 0 && ($("#" + t + ":hidden").show().val(""), triggerBypassingHandler(e, "blur", wrapperBlurHandler), getElement(t).focus())
                }
            },
            hideFilterBox = function () {
                var e = getPostID("postTitleTextID");
                $("#" + e + ":visible").length > 0 && ($("#" + e + ":visible").hide(), getElement(e).blur())
            },
            on_keydown = function (e) {
                var t = getPostID("postTitleTextID"),
                    n = getPostID("postChildID");
                switch (e.keyCode) {
                case DOWN_ARROW:
                case RIGHT_ARROW:
                    e.preventDefault(), e.stopPropagation(), next();
                    break;
                case UP_ARROW:
                case LEFT_ARROW:
                    e.preventDefault(), e.stopPropagation(), previous();
                    break;
                case ESCAPE:
                case ENTER:
                    e.preventDefault(), e.stopPropagation(), close();
                    var r = $("#" + n + " li." + css.selected).length;
                    forcedTrigger = oldSelected.length != r || r == 0 ? !0 : !1, fireAfterItemClicked(), unbind_on_events(), lastTarget = null;
                    break;
                case SHIFT:
                    shiftHolded = !0;
                    break;
                case CONTROL:
                    controlHolded = !0;
                    break;
                default:
                    e.keyCode >= ALPHABETS_START && isList === !1 && showFilterBox()
                }
                if (isDisabled === !0) return !1;
                fireEventIfExist("keydown")
            },
            on_keyup = function (e) {
                switch (e.keyCode) {
                case SHIFT:
                    shiftHolded = !1;
                    break;
                case CONTROL:
                    controlHolded = !1
                }
                if (isDisabled === !0) return !1;
                fireEventIfExist("keyup")
            },
            on_dblclick = function (e) {
                if (isDisabled === !0) return !1;
                fireEventIfExist("dblclick")
            },
            on_mousemove = function (e) {
                if (isDisabled === !0) return !1;
                fireEventIfExist("mousemove")
            },
            on_mouseover = function (e) {
                if (isDisabled === !0) return !1;
                e.preventDefault(), fireEventIfExist("mouseover")
            },
            on_mouseout = function (e) {
                if (isDisabled === !0) return !1;
                e.preventDefault(), fireEventIfExist("mouseout")
            },
            on_mousedown = function (e) {
                if (isDisabled === !0) return !1;
                fireEventIfExist("mousedown")
            },
            on_mouseup = function (e) {
                if (isDisabled === !0) return !1;
                fireEventIfExist("mouseup")
            },
            option_has_handler = function (e, t) {
                var n = {
                    byElement: !1,
                    byJQuery: !1,
                    hasEvent: !1
                };
                $(e).prop("on" + t) != undefined && (n.hasEvent = !0, n.byElement = !0);
                var r = $(e).data("events");
                return r && r[t] && (n.hasEvent = !0, n.byJQuery = !0), n
            },
            fireOptionEventIfExist = function (e, t) {
                if (settings.disabledOptionEvents == 0) {
                    var n = getElement(element).options[getIndex(e)];
                    if (option_has_handler(n, t).hasEvent === !0) {
                        option_has_handler(n, t).byElement === !0 && n["on" + t]();
                        if (option_has_handler(n, t).byJQuery === !0) switch (t) {
                        case "keydown":
                        case "keyup":
                            break;
                        default:
                            $(n).trigger(t)
                        }
                        return !1
                    }
                }
            },
            fireEventIfExist = function (e) {
                typeof settings.on[e] == "function" && settings.on[e].apply(this, arguments);
                if (has_handler(e).hasEvent === !0) {
                    if (has_handler(e).byElement === !0) getElement(element)["on" + e]();
                    else if (has_handler(e).byJQuery === !0) switch (e) {
                    case "keydown":
                    case "keyup":
                        break;
                    default:
                        $("#" + element).triggerHandler(e)
                    }
                    return !1
                }
            },
            scrollToIfNeeded = function (e) {
                var t = getPostID("postChildID");
                e = e !== undefined ? e : $("#" + t + " li." + css.selected);
                if (e.length > 0) {
                    var n = parseInt($(e).position().top),
                        r = parseInt($("#" + t).height());
                    if (n > r) {
                        var i = n + $("#" + t).scrollTop() - r / 2;
                        $("#" + t).animate({
                            scrollTop: i
                        }, 500)
                    }
                }
            },
            next = function () {
                function i(e) {
                    return e += 1, e > t.length ? e : $(t[e]).hasClass(css.enabled) === !0 ? e : e = i(e)
                }
                var e = getPostID("postChildID"),
                    t = $("#" + e + " li:visible." + css_i.li),
                    n = $("#" + e + " li:visible." + css.selected);
                n = n.length == 0 ? t[0] : n;
                var r = $("#" + e + " li:visible." + css_i.li).index(n);
                r < t.length - 1 && (r = i(r), r < t.length && ((!shiftHolded || !isList || !isMultiple) && $("#" + e + " ." + css.selected).removeClass(css.selected), $(t[r]).addClass(css.selected), updateTitleUI(r), isList == 1 && fireAfterItemClicked(), scrollToIfNeeded($(t[r]))), isList || adjustOpen())
            },
            previous = function () {
                function s(e) {
                    return e -= 1, e < 0 ? e : $(n[e]).hasClass(css.enabled) === !0 ? e : e = s(e)
                }
                var e = getPostID("postChildID"),
                    t = $("#" + e + " li:visible." + css.selected),
                    n = $("#" + e + " li:visible." + css_i.li),
                    r = $("#" + e + " li:visible." + css_i.li).index(t[0]);
                if (r >= 0) {
                    r = s(r);
                    if (r >= 0) {
                        (!shiftHolded || !isList || !isMultiple) && $("#" + e + " ." + css.selected).removeClass(css.selected), $(n[r]).addClass(css.selected), updateTitleUI(r), isList == 1 && fireAfterItemClicked();
                        if (parseInt($(n[r]).position().top + $(n[r]).height()) <= 0) {
                            var i = $("#" + e).scrollTop() - $("#" + e).height() - $(n[r]).height();
                            $("#" + e).animate({
                                scrollTop: i
                            }, 500)
                        }
                    }
                    isList || adjustOpen()
                }
            },
            adjustOpen = function () {
                var e = getPostID("postID"),
                    t = getPostID("postChildID"),
                    n = $("#" + e).offset(),
                    r = $("#" + e).height(),
                    i = $(window).height(),
                    s = $(window).scrollTop(),
                    o = $("#" + t).height(),
                    u = $("#" + e).height(),
                    a = settings.openDirection.toLowerCase();
                if ((i + s < Math.floor(o + r + n.top) || a == "alwaysup") && a != "alwaysdown") {
                    u = o, $("#" + t).css({
                        top: "-" + u + "px",
                        display: "block",
                        zIndex: settings.zIndex
                    }), settings.roundedCorner == "true" && $("#" + e).removeClass("borderRadius borderRadiusTp").addClass("borderRadiusBtm");
                    var u = $("#" + t).offset().top;
                    u < -10 && ($("#" + t).css({
                        top: parseInt($("#" + t).css("top")) - u + 20 + s + "px",
                        zIndex: settings.zIndex
                    }), settings.roundedCorner == "true" && $("#" + e).removeClass("borderRadiusBtm borderRadiusTp").addClass("borderRadius"))
                } else $("#" + t).css({
                    top: u + "px",
                    zIndex: settings.zIndex
                }), settings.roundedCorner == "true" && $("#" + e).removeClass("borderRadius borderRadiusBtm").addClass("borderRadiusTp");
                isIE && msieversion() <= 7 && ($("div.ddcommon").css("zIndex", settings.zIndex - 10), $("#" + e).css("zIndex", settings.zIndex + 5))
            },
            open = function (e) {
                if (isDisabled === !0) return !1;
                var t = getPostID("postID"),
                    n = getPostID("postChildID");
                if (!isOpen) {
                    isOpen = !0, msBeautify.oldDiv != "" && $("#" + msBeautify.oldDiv).css({
                        display: "none"
                    }), msBeautify.oldDiv = n, $("#" + n + " li:hidden").show(), adjustOpen();
                    var r = settings.animStyle;
                    if (r == "" || r == "none") {
                        $("#" + n).css({
                            display: "block"
                        }), scrollToIfNeeded();
                        if (typeof settings.on.open == "function") {
                            var i = getDataAndUI();
                            settings.on.open(i.data, i.ui)
                        }
                    } else $("#" + n)[r]("fast", function () {
                        scrollToIfNeeded();
                        if (typeof settings.on.open == "function") {
                            var e = getDataAndUI();
                            settings.on.open(e.data, e.ui)
                        }
                    });
                    bind_on_events()
                } else settings.event !== "mouseover" && close()
            },
            close = function (e) {
                isOpen = !1;
                var t = getPostID("postID"),
                    n = getPostID("postChildID");
                if (isList === !1 || settings.enableCheckbox === !0) $("#" + n).css({
                    display: "none"
                }), settings.roundedCorner == "true" && $("#" + t).removeClass("borderRadiusTp borderRadiusBtm").addClass("borderRadius");
                unbind_on_events();
                if (typeof settings.on.close == "function") {
                    var r = getDataAndUI();
                    settings.on.close(r.data, r.ui)
                }
                hideFilterBox(), childHeight(childHeight()), $("#" + n).css({
                    zIndex: 1
                }), updateTitleUI(getElement(element).selectedIndex)
            },
            mergeAllProp = function () {
                try {
                    orginial = $.extend(!0, {}, getElement(element));
                    for (var e in orginial) typeof orginial[e] != "function" && ($this[e] = orginial[e])
                } catch (t) {}
                $this.selectedText = getElement(element).selectedIndex >= 0 ? getElement(element).options[getElement(element).selectedIndex].text : "", $this.version = msBeautify.version.msDropdown, $this.author = msBeautify.author
            },
            getDataAndUIByOption = function (e) {
                if (e != null && typeof e != "undefined") {
                    var t = getPostID("postChildID"),
                        n = parseOption(e),
                        r = $("#" + t + " li." + css_i.li + ":eq(" + e.index + ")");
                    return {
                        data: n,
                        ui: r,
                        option: e,
                        index: e.index
                    }
                }
                return null
            },
            getDataAndUI = function () {
                var e = getPostID("postChildID"),
                    t = getElement(element),
                    n, r, i, s;
                if (t.selectedIndex == -1) n = null, r = null, i = null, s = -1;
                else {
                    r = $("#" + e + " li." + css.selected);
                    if (r.length > 1) {
                        var o = [],
                            u = [],
                            a = [];
                        for (var f = 0; f < r.length; f++) {
                            var l = getIndex(r[f]);
                            o.push(l), u.push(t.options[l])
                        }
                        n = o, i = u, s = o
                    } else i = t.options[t.selectedIndex], n = parseOption(i), s = t.selectedIndex
                }
                return {
                    data: n,
                    ui: r,
                    index: s,
                    option: i
                }
            },
            updateTitleUI = function (e, t) {
                var n = getPostID("postTitleID"),
                    r = {};
                if (e == -1) r.text = "&nbsp;", r.className = "", r.description = "", r.image = "";
                else if (typeof e != "undefined") {
                    var i = getElement(element).options[e];
                    r = parseOption(i)
                } else r = t;
                $("#" + n).find("." + css.label).html(r.text), getElement(n).className = css.ddTitleText + " " + r.className, r.description != "" ? $("#" + n).find("." + css.description).html(r.description).show() : $("#" + n).find("." + css.description).html("").hide();
                var s = $("#" + n).find("img");
                s.length > 0 && $(s).remove(), r.image != "" && settings.showIcon && (s = createElement("img", {
                    src: r.image
                }), $("#" + n).prepend(s), r.imagecss != "" && (s.className = r.imagecss + " "), r.description == "" && (s.className = s.className + css_i.fnone))
            },
            updateProp = function (e, t) {
                $this[e] = t
            },
            updateUI = function (e, t, n) {
                var r = getPostID("postChildID"),
                    i = !1;
                switch (e) {
                case "add":
                    var s = createChild(t || getElement(element).options[n]),
                        o;
                    arguments.length == 3 ? o = n : o = $("#" + r + " li." + css_i.li).length - 1;
                    if (o < 0 || !o) $("#" + r + " ul").append(s);
                    else {
                        var u = $("#" + r + " li." + css_i.li)[o];
                        $(u).before(s)
                    }
                    removeChildEvents(), applyChildEvents(), settings.on.add != null && settings.on.add.apply(this, arguments);
                    break;
                case "remove":
                    i = $($("#" + r + " li." + css_i.li)[n]).hasClass(css.selected), $("#" + r + " li." + css_i.li + ":eq(" + n + ")").remove();
                    var a = $("#" + r + " li." + css.enabled);
                    if (i == 1 && a.length > 0) {
                        $(a[0]).addClass(css.selected);
                        var f = $("#" + r + " li." + css_i.li).index(a[0]);
                        setValue(f)
                    }
                    a.length == 0 && setValue(-1), $("#" + r + " li." + css_i.li).length < settings.visibleRows && !isList && childHeight(-1), settings.on.remove != null && settings.on.remove.apply(this, arguments)
                }
            };
        this.act = function () {
            var e = arguments[0];
            Array.prototype.shift.call(arguments);
            switch (e) {
            case "add":
                $this.add.apply(this, arguments);
                break;
            case "remove":
                $this.remove.apply(this, arguments);
                break;
            default:
                try {
                    getElement(element)[e].apply(getElement(element), arguments)
                } catch (t) {}
            }
        }, this.add = function () {
            var e, t, n, r, i, s = arguments[0];
            typeof s == "string" ? (e = s, t = e, opt = new Option(e, t)) : (e = s.text || "", t = s.value || e, n = s.title || "", r = s.image || "", i = s.description || "", opt = new Option(e, t), $(opt).data("description", i), $(opt).data("image", r), $(opt).data("title", n)), arguments[0] = opt, getElement(element).add.apply(getElement(element), arguments), updateProp("children", getElement(element).children), updateProp("length", getElement(element).length), updateUI("add", opt, arguments[1])
        }, this.remove = function (e) {
            getElement(element).remove(e), updateProp("children", getElement(element).children), updateProp("length", getElement(element).length), updateUI("remove", undefined, e)
        }, this.set = function (e, t) {
            if (typeof e == "undefined" || typeof t == "undefined") return !1;
            e = e.toString();
            try {
                updateProp(e, t)
            } catch (n) {}
            switch (e) {
            case "size":
                getElement(element)[e] = t, t == 0 && (getElement(element).multiple = !1), isList = getElement(element).size > 1 || getElement(element).multiple == 1 ? !0 : !1, fixedForList();
                break;
            case "multiple":
                getElement(element)[e] = t, isList = getElement(element).size > 1 || getElement(element).multiple == 1 ? !0 : !1, isMultiple = getElement(element).multiple, fixedForList(), updateProp(e, t);
                break;
            case "disabled":
                getElement(element)[e] = t, isDisabled = t, fixedForDisabled();
                break;
            case "selectedIndex":
            case "value":
                e == "selectedIndex" && isArray(t) === !0 ? ($("#" + element + " option").prop("selected", !1), selectMutipleOptions(t, !0), selectUI_LI(t)) : (getElement(element)[e] = t, selectUI_LI(getElement(element).selectedIndex), setValue(getElement(element).selectedIndex));
                break;
            case "length":
                var r = getPostID("postChildID");
                t < getElement(element).length && (getElement(element)[e] = t, t == 0 ? ($("#" + r + " li." + css_i.li).remove(), setValue(-1)) : ($("#" + r + " li." + css_i.li + ":gt(" + (t - 1) + ")").remove(), $("#" + r + " li." + css.selected).length == 0 && $("#" + r + " li." + css.enabled + ":eq(0)").addClass(css.selected)), updateProp(e, t), updateProp("children", getElement(element).children));
                break;
            case "id":
                break;
            default:
                try {
                    getElement(element)[e] = t, updateProp(e, t)
                } catch (n) {}
            }
        }, this.get = function (e) {
            return $this[e] || getElement(element)[e]
        }, this.visible = function (e) {
            var t = getPostID("postID");
            if (e === !0) $("#" + t).show();
            else {
                if (e !== !1) return $("#" + t).css("display") == "none" ? !1 : !0;
                $("#" + t).hide()
            }
        }, this.debug = function (e) {
            msBeautify.debug(e)
        }, this.close = function () {
            close()
        }, this.open = function () {
            open()
        }, this.showRows = function (e) {
            if (typeof e == "undefined" || e == 0) return !1;
            settings.visibleRows = e, childHeight(childHeight())
        }, this.visibleRows = this.showRows, this.on = function (e, t) {
            $("#" + element).on(e, t)
        }, this.off = function (e, t) {
            $("#" + element).off(e, t)
        }, this.addMyEvent = this.on, this.getData = function () {
            return getDataAndUI()
        }, this.namedItem = function () {
            var e = getElement(element).namedItem.apply(getElement(element), arguments);
            return getDataAndUIByOption(e)
        }, this.item = function () {
            var e = getElement(element).item.apply(getElement(element), arguments);
            return getDataAndUIByOption(e)
        }, this.setIndexByValue = function (e) {
            this.set("value", e)
        }, this.destroy = function () {
            var e = getPostID("postElementHolder"),
                t = getPostID("postID");
            $("#" + t + ", #" + t + " *").off(), getElement(element).tabIndex = getElement(t).tabIndex, $("#" + t).remove(), $("#" + element).parent().replaceWith($("#" + element)), $("#" + element).data("dd", null)
        }, this.refresh = function () {
            setValue(getElement(element).selectedIndex)
        }, init()
    }
    msBeautify = {
        version: {
            msDropdown: "3.5.2"
        },
        author: "Marghoob Suleman",
        counter: 20,
        debug: function (e) {
            e !== !1 ? $(".ddOutOfVision").css({
                height: "auto",
                position: "relative"
            }) : $(".ddOutOfVision").css({
                height: "0px",
                position: "absolute"
            })
        },
        oldDiv: "",
        create: function (e, t, n) {
            n = n || "dropdown";
            var r;
            switch (n.toLowerCase()) {
            case "dropdown":
            case "select":
                r = $(e).msDropdown(t).data("dd")
            }
            return r
        }
    }, $.msDropDown = {}, $.msDropdown = {}, $.extend(!0, $.msDropDown, msBeautify), $.extend(!0, $.msDropdown, msBeautify), $.fn.prop === undefined && ($.fn.prop = $.fn.attr), $.fn.on === undefined && ($.fn.on = $.fn.bind, $.fn.off = $.fn.unbind), typeof $.expr.createPseudo == "function" ? $.expr[":"].Contains = $.expr.createPseudo(function (e) {
        return function (t) {
            return $(t).text().toUpperCase().indexOf(e.toUpperCase()) >= 0
        }
    }) : $.expr[":"].Contains = function (e, t, n) {
        return $(e).text().toUpperCase().indexOf(n[3].toUpperCase()) >= 0
    }, $.fn.extend({
        msDropDown: function (e) {
            return this.each(function () {
                if (!$(this).data("dd")) {
                    var t = new dd(this, e);
                    $(this).data("dd", t)
                }
            })
        }
    }), $.fn.msDropdown = $.fn.msDropDown
})(jQuery),
function (e) {
    var t = "0.4.2",
        n = "hasOwnProperty",
        r = /[\.\/]/,
        i = "*",
        s = function () {},
        o = function (e, t) {
            return e - t
        },
        u, a, f = {
            n: {}
        },
        l = function (e, t) {
            e = String(e);
            var n = f,
                r = a,
                i = Array.prototype.slice.call(arguments, 2),
                s = l.listeners(e),
                c = 0,
                h = !1,
                p, d = [],
                v = {},
                m = [],
                g = u,
                y = [];
            u = e, a = 0;
            for (var b = 0, w = s.length; b < w; b++) "zIndex" in s[b] && (d.push(s[b].zIndex), s[b].zIndex < 0 && (v[s[b].zIndex] = s[b]));
            d.sort(o);
            while (d[c] < 0) {
                p = v[d[c++]], m.push(p.apply(t, i));
                if (a) return a = r, m
            }
            for (b = 0; b < w; b++) {
                p = s[b];
                if ("zIndex" in p)
                    if (p.zIndex == d[c]) {
                        m.push(p.apply(t, i));
                        if (a) break;
                        do {
                            c++, p = v[d[c]], p && m.push(p.apply(t, i));
                            if (a) break
                        } while (p)
                    } else v[p.zIndex] = p;
                else {
                    m.push(p.apply(t, i));
                    if (a) break
                }
            }
            return a = r, u = g, m.length ? m : null
        };
    l._events = f, l.listeners = function (e) {
        var t = e.split(r),
            n = f,
            s, o, u, a, l, c, h, p, d = [n],
            v = [];
        for (a = 0, l = t.length; a < l; a++) {
            p = [];
            for (c = 0, h = d.length; c < h; c++) {
                n = d[c].n, o = [n[t[a]], n[i]], u = 2;
                while (u--) s = o[u], s && (p.push(s), v = v.concat(s.f || []))
            }
            d = p
        }
        return v
    }, l.on = function (e, t) {
        e = String(e);
        if (typeof t != "function") return function () {};
        var n = e.split(r),
            i = f;
        for (var o = 0, u = n.length; o < u; o++) i = i.n, i = i.hasOwnProperty(n[o]) && i[n[o]] || (i[n[o]] = {
            n: {}
        });
        i.f = i.f || [];
        for (o = 0, u = i.f.length; o < u; o++)
            if (i.f[o] == t) return s;
        return i.f.push(t),
            function (e) {
                +e == +e && (t.zIndex = +e)
            }
    }, l.f = function (e) {
        var t = [].slice.call(arguments, 1);
        return function () {
            l.apply(null, [e, null].concat(t).concat([].slice.call(arguments, 0)))
        }
    }, l.stop = function () {
        a = 1
    }, l.nt = function (e) {
        return e ? (new RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)")).test(u) : u
    }, l.nts = function () {
        return u.split(r)
    }, l.off = l.unbind = function (e, t) {
        if (!e) {
            l._events = f = {
                n: {}
            };
            return
        }
        var s = e.split(r),
            o, u, a, c, h, p, d, v = [f];
        for (c = 0, h = s.length; c < h; c++)
            for (p = 0; p < v.length; p += a.length - 2) {
                a = [p, 1], o = v[p].n;
                if (s[c] != i) o[s[c]] && a.push(o[s[c]]);
                else
                    for (u in o) o[n](u) && a.push(o[u]);
                v.splice.apply(v, a)
            }
        for (c = 0, h = v.length; c < h; c++) {
            o = v[c];
            while (o.n) {
                if (t) {
                    if (o.f) {
                        for (p = 0, d = o.f.length; p < d; p++)
                            if (o.f[p] == t) {
                                o.f.splice(p, 1);
                                break
                            }!o.f.length && delete o.f
                    }
                    for (u in o.n)
                        if (o.n[n](u) && o.n[u].f) {
                            var m = o.n[u].f;
                            for (p = 0, d = m.length; p < d; p++)
                                if (m[p] == t) {
                                    m.splice(p, 1);
                                    break
                                }!m.length && delete o.n[u].f
                        }
                } else {
                    delete o.f;
                    for (u in o.n) o.n[n](u) && o.n[u].f && delete o.n[u].f
                }
                o = o.n
            }
        }
    }, l.once = function (e, t) {
        var n = function () {
            return l.unbind(e, n), t.apply(this, arguments)
        };
        return l.on(e, n)
    }, l.version = t, l.toString = function () {
        return "You are running Eve " + t
    }, typeof module != "undefined" && module.exports ? module.exports = l : typeof define != "undefined" ? define("eve", [], function () {
        return l
    }) : e.eve = l
}(this),
function () {
    function e(n) {
        if (e.is(n, "function")) return t ? n() : eve.on("raphael.DOMload", n);
        if (e.is(n, O)) return e._engine.create[h](e, n.splice(0, 3 + e.is(n[0], L))).add(n);
        var r = Array.prototype.slice.call(arguments, 0);
        if (e.is(r[r.length - 1], "function")) {
            var i = r.pop();
            return t ? i.call(e._engine.create[h](e, r)) : eve.on("raphael.DOMload", function () {
                i.call(e._engine.create[h](e, r))
            })
        }
        return e._engine.create[h](e, arguments)
    }

    function ht(e) {
        if (Object(e) !== e) return e;
        var t = new e.constructor;
        for (var n in e) e[o](n) && (t[n] = ht(e[n]));
        return t
    }

    function wt(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return e.push(e.splice(n, 1)[0])
    }

    function Et(e, t, n) {
        function r() {
            var i = Array.prototype.slice.call(arguments, 0),
                s = i.join("␀"),
                u = r.cache = r.cache || {},
                a = r.count = r.count || [];
            return u[o](s) ? (wt(a, s), n ? n(u[s]) : u[s]) : (a.length >= 1e3 && delete u[a.shift()], a.push(s), u[s] = e[h](t, i), n ? n(u[s]) : u[s])
        }
        return r
    }

    function xt() {
        return this.hex
    }

    function Tt(e, t) {
        var n = [];
        for (var r = 0, i = e.length; i - 2 * !t > r; r += 2) {
            var s = [{
                x: +e[r - 2],
                y: +e[r - 1]
            }, {
                x: +e[r],
                y: +e[r + 1]
            }, {
                x: +e[r + 2],
                y: +e[r + 3]
            }, {
                x: +e[r + 4],
                y: +e[r + 5]
            }];
            t ? r ? i - 4 == r ? s[3] = {
                    x: +e[0],
                    y: +e[1]
                } : i - 2 == r && (s[2] = {
                    x: +e[0],
                    y: +e[1]
                }, s[3] = {
                    x: +e[2],
                    y: +e[3]
                }) : s[0] = {
                    x: +e[i - 2],
                    y: +e[i - 1]
                } : i - 4 == r ? s[3] =
                s[2] : r || (s[0] = {
                    x: +e[r],
                    y: +e[r + 1]
                }), n.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
        }
        return n
    }

    function Ct(e, t, n, r, i) {
        var s = -3 * t + 9 * n - 9 * r + 3 * i,
            o = e * s + 6 * t - 12 * n + 6 * r;
        return e * o - 3 * t + 3 * n
    }

    function kt(e, t, n, r, i, s, o, u, a) {
        a == null && (a = 1), a = a > 1 ? 1 : a < 0 ? 0 : a;
        var f = a / 2,
            l = 12,
            c = [-0.1252, .1252, -0.3678, .3678, -0.5873, .5873, -0.7699, .7699, -0.9041, .9041, -0.9816, .9816],
            h = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472],
            p = 0;
        for (var d = 0; d < l; d++) {
            var v = f * c[d] + f,
                m = Ct(v, e, n, i, o),
                g = Ct(v, t, r, s, u),
                y = m * m + g * g;
            p += h[d] * S.sqrt(y)
        }
        return f * p
    }

    function Lt(e, t, n, r, i, s, o, u, a) {
        if (a < 0 || kt(e, t, n, r, i, s, o, u) < a) return;
        var f = 1,
            l = f / 2,
            c = f - l,
            h, p = .01;
        h = kt(e, t, n, r, i, s, o, u, c);
        while (N(h - a) > p) l /= 2, c += (h < a ? 1 : -1) * l, h = kt(e, t, n, r, i, s, o, u, c);
        return c
    }

    function At(e, t, n, r, i, s, o, u) {
        if (x(e, n) < T(i, o) || T(e, n) > x(i, o) || x(t, r) < T(s, u) || T(t, r) > x(s, u)) return;
        var a = (e * r - t * n) * (i - o) - (e - n) * (i * u - s * o),
            f = (e * r - t * n) * (s - u) - (t - r) * (i * u - s * o),
            l = (e - n) * (s - u) - (t - r) * (i - o);
        if (!l) return;
        var c = a / l,
            h = f / l,
            p = +c.toFixed(2),
            d = +h.toFixed(2);
        if (p < +T(e, n).toFixed(2) || p > +x(e, n).toFixed(2) || p < +T(i, o).toFixed(2) || p > +x(i, o).toFixed(2) || d < +T(t, r).toFixed(2) || d > +x(t, r).toFixed(2) || d < +T(s, u).toFixed(2) || d > +x(s, u).toFixed(2)) return;
        return {
            x: c,
            y: h
        }
    }

    function Ot(e, t) {
        return _t(e, t)
    }

    function Mt(e, t) {
        return _t(e, t, 1)
    }

    function _t(t, n, r) {
        var i = e.bezierBBox(t),
            s = e.bezierBBox(n);
        if (!e.isBBoxIntersect(i, s)) return r ? 0 : [];
        var o = kt.apply(0, t),
            u = kt.apply(0, n),
            a = ~~(o / 5),
            f = ~~(u / 5),
            l = [],
            c = [],
            h = {},
            p = r ? 0 : [];
        for (var d = 0; d < a + 1; d++) {
            var v = e.findDotsAtSegment.apply(e, t.concat(d / a));
            l.push({
                x: v.x,
                y: v.y,
                t: d / a
            })
        }
        for (d = 0; d < f + 1; d++) v = e.findDotsAtSegment.apply(e, n.concat(d / f)), c.push({
            x: v.x,
            y: v.y,
            t: d / f
        });
        for (d = 0; d < a; d++)
            for (var m = 0; m < f; m++) {
                var g = l[d],
                    y = l[d + 1],
                    b = c[m],
                    w = c[m + 1],
                    E = N(y.x - g.x) < .001 ? "y" : "x",
                    S = N(w.x - b.x) < .001 ? "y" : "x",
                    x = At(g.x, g.y, y.x, y.y, b.x, b.y, w.x, w.y);
                if (x) {
                    if (h[x.x.toFixed(4)] == x.y.toFixed(4)) continue;
                    h[x.x.toFixed(4)] = x.y.toFixed(4);
                    var T = g.t + N((x[E] - g[E]) / (y[E] - g[E])) * (y.t - g.t),
                        C = b.t + N((x[S] - b[S]) / (w[S] - b[S])) * (w.t - b.t);
                    T >= 0 && T <= 1 && C >= 0 && C <= 1 && (r ? p++ : p.push({
                        x: x.x,
                        y: x.y,
                        t1: T,
                        t2: C
                    }))
                }
            }
        return p
    }

    function Dt(t, n, r) {
        t = e._path2curve(t), n = e._path2curve(n);
        var i, s, o, u, a, f, l, c, h, p, d = r ? 0 : [];
        for (var v = 0, m = t.length; v < m; v++) {
            var g = t[v];
            if (g[0] == "M") i = a = g[1], s = f = g[2];
            else {
                g[0] == "C" ? (h = [i, s].concat(g.slice(1)), i = h[6], s = h[7]) : (h = [i, s, i, s, a, f, a, f], i = a, s = f);
                for (var y = 0, b = n.length; y < b; y++) {
                    var w = n[y];
                    if (w[0] == "M") o = l = w[1], u = c = w[2];
                    else {
                        w[0] == "C" ? (p = [o, u].concat(w.slice(1)), o = p[6], u = p[7]) : (p = [o, u, o, u, l, c, l, c], o = l, u = c);
                        var E = _t(h, p, r);
                        if (r) d += E;
                        else {
                            for (var S = 0, x = E.length; S < x; S++) E[S].segment1 = v, E[S].segment2 = y, E[S].bez1 = h, E[S].bez2 = p;
                            d = d.concat(E)
                        }
                    }
                }
            }
        }
        return d
    }

    function tn(e, t, n, r, i, s) {
        e != null ? (this.a = +e, this.b = +t, this.c = +n, this.d = +r, this.e = +i, this.f = +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }

    function mn() {
        return this.x + m + this.y
    }

    function gn() {
        return this.x + m + this.y + m + this.width + " × " + this.height
    }

    function An(e, t, n, r, i, s) {
        function h(e) {
            return ((a * e + u) * e + o) * e
        }

        function p(e, t) {
            var n = d(e, t);
            return ((c * n + l) * n + f) * n
        }

        function d(e, t) {
            var n, r, i, s, f, l;
            for (i = e, l = 0; l < 8; l++) {
                s = h(i) - e;
                if (N(s) < t) return i;
                f = (3 * a * i + 2 * u) * i + o;
                if (N(f) < 1e-6) break;
                i -= s / f
            }
            n = 0, r = 1, i = e;
            if (i < n) return n;
            if (i > r) return r;
            while (n < r) {
                s = h(i);
                if (N(s - e) < t) return i;
                e > s ? n = i : r = i, i = (r - n) / 2 + n
            }
            return i
        }
        var o = 3 * t,
            u = 3 * (r - t) - o,
            a = 1 - o - u,
            f = 3 * n,
            l = 3 * (i - n) - f,
            c = 1 - f - l;
        return p(e, 1 / (200 * s))
    }

    function On(e, t) {
        var n = [],
            r = {};
        this.ms = t, this.times = 1;
        if (e) {
            for (var i in e) e[o](i) && (r[U(i)] = e[i], n.push(U(i)));
            n.sort(rt)
        }
        this.anim = r, this.top = n[n.length - 1], this.percents = n
    }

    function Mn(t, r, i, s, u, a) {
        i = U(i);
        var f, l, c, h = [],
            d, v, m, b = t.ms,
            w = {},
            E = {},
            S = {};
        if (s)
            for (T = 0, N = Nn.length; T < N; T++) {
                var x = Nn[T];
                if (x.el.id == r.id && x.anim == t) {
                    x.percent != i ? (Nn.splice(T, 1), c = 1) : l = x, r.attr(x.totalOrigin);
                    break
                }
            } else s = +E;
        for (var T = 0, N = t.percents.length; T < N; T++) {
            if (t.percents[T] == i || t.percents[T] > s * t.top) {
                i = t.percents[T], v = t.percents[T - 1] || 0, b = b / t.top * (i - v), d = t.percents[T + 1], f = t.anim[i];
                break
            }
            s && r.attr(t.anim[t.percents[T]])
        }
        if (!f) return;
        if (!l) {
            for (var C in f)
                if (f[o](C))
                    if (V[o](C) || r.paper.customAttributes[o](C)) {
                        w[C] = r.attr(C), w[C] == null && (w[C] = X[C]), E[C] = f[C];
                        switch (V[C]) {
                        case L:
                            S[C] = (E[C] - w[C]) / b;
                            break;
                        case "colour":
                            w[C] = e.getRGB(w[C]);
                            var k = e.getRGB(E[C]);
                            S[C] = {
                                r: (k.r - w[C].r) / b,
                                g: (k.g - w[C].g) / b,
                                b: (k.b - w[C].b) / b
                            };
                            break;
                        case "path":
                            var A = zt(w[C], E[C]),
                                O = A[1];
                            w[C] = A[0], S[C] = [];
                            for (T = 0, N = w[C].length; T < N; T++) {
                                S[C][T] = [0];
                                for (var M = 1, _ = w[C][T].length; M < _; M++) S[C][T][M] = (O[T][M] - w[C][T][M]) / b
                            }
                            break;
                        case "transform":
                            var D = r._,
                                P = en(D[C], E[C]);
                            if (P) {
                                w[C] = P.from, E[C] = P.to, S[C] = [], S[C].real = !0;
                                for (T = 0, N = w[C].length; T < N; T++) {
                                    S[C][T] = [w[C][T][0]];
                                    for (M = 1, _ = w[C][T].length; M < _; M++) S[C][T][M] = (E[C][T][M] - w[C][T][M]) / b
                                }
                            } else {
                                var H = r.matrix || new tn,
                                    B = {
                                        _: {
                                            transform: D.transform
                                        },
                                        getBBox: function () {
                                            return r.getBBox(1)
                                        }
                                    };
                                w[C] = [H.a, H.b, H.c, H.d, H.e, H.f], Yt(B, E[C]), E[C] = B._.transform, S[C] = [(B.matrix.a - H.a) / b, (B.matrix.b - H.b) / b, (B.matrix.c - H.c) / b, (B.matrix.d - H.d) / b, (B.matrix.e - H.e) / b, (B.matrix.f - H.f) / b]
                            }
                            break;
                        case "csv":
                            var j = g(f[C])[y](n),
                                F = g(w[C])[y](n);
                            if (C == "clip-rect") {
                                w[C] = F, S[C] = [], T = F.length;
                                while (T--) S[C][T] = (j[T] - w[C][T]) / b
                            }
                            E[C] = j;
                            break;
                        default:
                            j = [][p](f[C]), F = [][p](w[C]), S[C] = [], T = r.paper.customAttributes[C].length;
                            while (T--) S[C][T] = ((j[T] || 0) - (F[T] || 0)) / b
                        }
                    }
            var q = f.easing,
                R = e.easing_formulas[q];
            if (!R) {
                R = g(q).match(I);
                if (R && R.length == 5) {
                    var z = R;
                    R = function (e) {
                        return An(e, +z[1], +z[2], +z[3], +z[4], b)
                    }
                } else R = st
            }
            m = f.start || t.start || +(new Date), x = {
                anim: t,
                percent: i,
                timestamp: m,
                start: m + (t.del || 0),
                status: 0,
                initstatus: s || 0,
                stop: !1,
                ms: b,
                easing: R,
                from: w,
                diff: S,
                to: E,
                el: r,
                callback: f.callback,
                prev: v,
                next: d,
                repeat: a || t.times,
                origin: r.attr(),
                totalOrigin: u
            }, Nn.push(x);
            if (s && !l && !c) {
                x.stop = !0, x.start = new Date - b * s;
                if (Nn.length == 1) return kn()
            }
            c && (x.start = new Date - x.ms * s), Nn.length == 1 && Cn(kn)
        } else l.initstatus = s, l.start = new Date - l.ms * s;
        eve("raphael.anim.start." + r.id, r, t)
    }

    function _n(e) {
        for (var t = 0; t < Nn.length; t++) Nn[t].el.paper == e && Nn.splice(t--, 1)
    }
    e.version = "2.1.0", e.eve = eve;
    var t, n = /[, ]+/,
        r = {
            circle: 1,
            rect: 1,
            path: 1,
            ellipse: 1,
            text: 1,
            image: 1
        },
        i = /\{(\d+)\}/g,
        s = "prototype",
        o = "hasOwnProperty",
        u = {
            doc: document,
            win: window
        },
        a = {
            was: Object.prototype[o].call(u.win, "Raphael"),
            is: u.win.Raphael
        },
        f = function () {
            this.ca = this.customAttributes = {}
        },
        l, c = "appendChild",
        h = "apply",
        p = "concat",
        d = "createTouch" in u.doc,
        v = "",
        m = " ",
        g = String,
        y = "split",
        b = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [y](m),
        w = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        },
        E = g.prototype.toLowerCase,
        S = Math,
        x = S.max,
        T = S.min,
        N = S.abs,
        C = S.pow,
        k = S.PI,
        L = "number",
        A = "string",
        O = "array",
        M = "toString",
        _ = "fill",
        D = Object.prototype.toString,
        P = {},
        H = "push",
        B = e._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
        j = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
        F = {
            NaN: 1,
            Infinity: 1,
            "-Infinity": 1
        },
        I = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        q = S.round,
        R = "setAttribute",
        U = parseFloat,
        z = parseInt,
        W = g.prototype.toUpperCase,
        X = e._availableAttrs = {
            "arrow-end": "none",
            "arrow-start": "none",
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": "normal",
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            "letter-spacing": 0,
            opacity: 1,
            path: "M0,0",
            r: 0,
            rx: 0,
            ry: 0,
            src: "",
            stroke: "#000",
            "stroke-dasharray": "",
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            title: "Raphael",
            transform: "",
            width: 0,
            x: 0,
            y: 0
        },
        V = e._availableAnimAttrs = {
            blur: L,
            "clip-rect": "csv",
            cx: L,
            cy: L,
            fill: "colour",
            "fill-opacity": L,
            "font-size": L,
            height: L,
            opacity: L,
            path: "path",
            r: L,
            rx: L,
            ry: L,
            stroke: "colour",
            "stroke-opacity": L,
            "stroke-width": L,
            transform: "transform",
            width: L,
            x: L,
            y: L
        },
        $ = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,
        J = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        K = {
            hs: 1,
            rg: 1
        },
        Q = /,?([achlmqrstvxz]),?/gi,
        G = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
        Y = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
        Z = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,
        et = e._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
        tt = {},
        nt = function (e, t) {
            return e.key - t.key
        },
        rt = function (e, t) {
            return U(e) - U(t)
        },
        it = function () {},
        st = function (e) {
            return e
        },
        ot = e._rectPath = function (e, t, n, r, i) {
            return i ? [["M", e + i, t], ["l", n - i * 2, 0], ["a", i, i, 0, 0, 1, i, i], ["l", 0, r - i * 2], ["a", i, i, 0, 0, 1, -i, i], ["l", i * 2 - n, 0], ["a", i, i, 0, 0, 1, -i, -i], ["l", 0, i * 2 - r], ["a", i, i, 0, 0, 1, i, -i], ["z"]] : [["M", e, t], ["l", n, 0], ["l", 0, r], ["l", -n, 0], ["z"]]
        },
        ut = function (e, t, n, r) {
            return r == null && (r = n), [["M", e, t], ["m", 0, -r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]]
        },
        at = e._getPath = {
            path: function (e) {
                return e.attr("path")
            },
            circle: function (e) {
                var t = e.attrs;
                return ut(t.cx, t.cy, t.r)
            },
            ellipse: function (e) {
                var t = e.attrs;
                return ut(t.cx, t.cy, t.rx, t.ry)
            },
            rect: function (e) {
                var t = e.attrs;
                return ot(t.x, t.y, t.width, t.height, t.r)
            },
            image: function (e) {
                var t = e.attrs;
                return ot(t.x, t.y, t.width, t.height)
            },
            text: function (e) {
                var t = e._getBBox();
                return ot(t.x, t.y, t.width, t.height)
            },
            set: function (e) {
                var t = e._getBBox();
                return ot(t.x, t.y, t.width, t.height)
            }
        },
        ft = e.mapPath = function (e, t) {
            if (!t) return e;
            var n, r, i, s, o, u, a;
            e = zt(e);
            for (i = 0, o = e.length; i < o; i++) {
                a = e[i];
                for (s = 1, u = a.length; s < u; s += 2) n = t.x(a[s], a[s + 1]), r = t.y(a[s], a[s + 1]), a[s] = n, a[s + 1] = r
            }
            return e
        };
    e._g = u, e.type = u.win.SVGAngle || u.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
    if (e.type == "VML") {
        var lt = u.doc.createElement("div"),
            ct;
        lt.innerHTML = '<v:shape adj="1"/>', ct = lt.firstChild, ct.style.behavior = "url(#default#VML)";
        if (!ct || typeof ct.adj != "object") return e.type = v;
        lt = null
    }
    e.svg = !(e.vml = e.type == "VML"), e._Paper = f, e.fn = l = f.prototype = e.prototype, e._id = 0, e._oid = 0, e.is = function (e, t) {
        return t = E.call(t), t == "finite" ? !F[o](+e) : t == "array" ? e instanceof Array : t == "null" && e === null || t == typeof e && e !== null || t == "object" && e === Object(e) || t == "array" && Array.isArray && Array.isArray(e) || D.call(e).slice(8, -1).toLowerCase() == t
    }, e.angle = function (t, n, r, i, s, o) {
        if (s == null) {
            var u = t - r,
                a = n - i;
            return !u && !a ? 0 : (180 + S.atan2(-a, -u) * 180 / k + 360) % 360
        }
        return e.angle(t, n, s, o) - e.angle(r, i, s, o)
    }, e.rad = function (e) {
        return e % 360 * k / 180
    }, e.deg = function (e) {
        return e * 180 / k % 360
    }, e.snapTo = function (t, n, r) {
        r = e.is(r, "finite") ? r : 10;
        if (e.is(t, O)) {
            var i = t.length;
            while (i--)
                if (N(t[i] - n) <= r) return t[i]
        } else {
            t = +t;
            var s = n % t;
            if (s < r) return n - s;
            if (s > t - r) return n - s + t
        }
        return n
    };
    var pt = e.createUUID = function (e, t) {
        return function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(e, t).toUpperCase()
        }
    }(/[xy]/g, function (e) {
        var t = S.random() * 16 | 0,
            n = e == "x" ? t : t & 3 | 8;
        return n.toString(16)
    });
    e.setWindow = function (t) {
        eve("raphael.setWindow", e, u.win, t), u.win = t, u.doc = u.win.document, e._engine.initWin && e._engine.initWin(u.win)
    };
    var dt = function (t) {
            if (e.vml) {
                var n = /^\s+|\s+$/g,
                    r;
                try {
                    var i = new ActiveXObject("htmlfile");
                    i.write("<body>"), i.close(), r = i.body
                } catch (s) {
                    r = createPopup().document.body
                }
                var o = r.createTextRange();
                dt = Et(function (e) {
                    try {
                        r.style.color = g(e).replace(n, v);
                        var t = o.queryCommandValue("ForeColor");
                        return t = (t & 255) << 16 | t & 65280 | (t & 16711680) >>> 16, "#" + ("000000" + t.toString(16)).slice(-6)
                    } catch (i) {
                        return "none"
                    }
                })
            } else {
                var a = u.doc.createElement("i");
                a.title = "Raphaël Colour Picker", a.style.display = "none", u.doc.body.appendChild(a), dt = Et(function (e) {
                    return a.style.color = e, u.doc.defaultView.getComputedStyle(a, v).getPropertyValue("color")
                })
            }
            return dt(t)
        },
        vt = function () {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        },
        mt = function () {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        },
        gt = function () {
            return this.hex
        },
        yt = function (t, n, r) {
            n == null && e.is(t, "object") && "r" in t && "g" in t && "b" in t && (r = t.b, n = t.g, t = t.r);
            if (n == null && e.is(t, A)) {
                var i = e.getRGB(t);
                t = i.r, n = i.g, r = i.b
            }
            if (t > 1 || n > 1 || r > 1) t /= 255, n /= 255, r /= 255;
            return [t, n, r]
        },
        bt = function (t, n, r, i) {
            t *= 255, n *= 255, r *= 255;
            var s = {
                r: t,
                g: n,
                b: r,
                hex: e.rgb(t, n, r),
                toString: gt
            };
            return e.is(i, "finite") && (s.opacity = i), s
        };
    e.color = function (t) {
        var n;
        return e.is(t, "object") && "h" in t && "s" in t && "b" in t ? (n = e.hsb2rgb(t), t.r = n.r, t.g = n.g, t.b = n.b, t.hex = n.hex) : e.is(t, "object") && "h" in t && "s" in t && "l" in t ? (n = e.hsl2rgb(t), t.r = n.r, t.g = n.g, t.b = n.b, t.hex = n.hex) : (e.is(t, "string") && (t = e.getRGB(t)), e.is(t, "object") && "r" in t && "g" in t && "b" in t ? (n = e.rgb2hsl(t), t.h = n.h, t.s = n.s, t.l = n.l, n = e.rgb2hsb(t), t.v = n.b) : (t = {
            hex: "none"
        }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = gt, t
    }, e.hsb2rgb = function (e, t, n, r) {
        this.is(e, "object") && "h" in e && "s" in e && "b" in e && (n = e.b, t = e.s, e = e.h, r = e.o), e *= 360;
        var i, s, o, u, a;
        return e = e % 360 / 60, a = n * t, u = a * (1 - N(e % 2 - 1)), i = s = o = n - a, e = ~~e, i += [a, u, 0, 0, u, a][e], s += [u, a, a, u, 0, 0][e], o += [0, 0, u, a, a, u][e], bt(i, s, o, r)
    }, e.hsl2rgb = function (e, t, n, r) {
        this.is(e, "object") && "h" in e && "s" in e && "l" in e && (n = e.l, t = e.s, e = e.h);
        if (e > 1 || t > 1 || n > 1) e /= 360, t /= 100, n /= 100;
        e *= 360;
        var i, s, o, u, a;
        return e = e % 360 / 60, a = 2 * t * (n < .5 ? n : 1 - n), u = a * (1 - N(e % 2 - 1)), i = s = o = n - a / 2, e = ~~e, i += [a, u, 0, 0, u, a][e], s += [u, a, a, u, 0, 0][e], o += [0, 0, u, a, a, u][e], bt(i, s, o, r)
    }, e.rgb2hsb = function (e, t, n) {
        n = yt(e, t, n), e = n[0], t = n[1], n = n[2];
        var r, i, s, o;
        return s = x(e, t, n), o = s - T(e, t, n), r = o == 0 ? null : s == e ? (t - n) / o : s == t ? (n - e) / o + 2 : (e - t) / o + 4, r = (r + 360) % 6 * 60 / 360, i = o == 0 ? 0 : o / s, {
            h: r,
            s: i,
            b: s,
            toString: vt
        }
    }, e.rgb2hsl = function (e, t, n) {
        n = yt(e, t, n), e = n[0], t = n[1], n = n[2];
        var r, i, s, o, u, a;
        return o = x(e, t, n), u = T(e, t, n), a = o - u, r = a == 0 ? null : o == e ? (t - n) / a : o == t ? (n - e) / a + 2 : (e - t) / a + 4, r = (r + 360) % 6 * 60 / 360, s = (o + u) / 2, i = a == 0 ? 0 : s < .5 ? a / (2 * s) : a / (2 - 2 * s), {
            h: r,
            s: i,
            l: s,
            toString: mt
        }
    }, e._path2string = function () {
        return this.join(",").replace(Q, "$1")
    };
    var St = e._preload = function (e, t) {
        var n = u.doc.createElement("img");
        n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function () {
            t.call(this), this.onload = null, u.doc.body.removeChild(this)
        }, n.onerror = function () {
            u.doc.body.removeChild(this)
        }, u.doc.body.appendChild(n), n.src = e
    };
    e.getRGB = Et(function (t) {
        if (!t || !!((t = g(t)).indexOf("-") + 1)) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: xt
        };
        if (t == "none") return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            toString: xt
        };
        !K[o](t.toLowerCase().substring(0, 2)) && t.charAt() != "#" && (t = dt(t));
        var n, r, i, s, u, a, f, l = t.match(j);
        return l ? (l[2] && (s = z(l[2].substring(5), 16), i = z(l[2].substring(3, 5), 16), r = z(l[2].substring(1, 3), 16)), l[3] && (s = z((a = l[3].charAt(3)) + a, 16), i = z((a = l[3].charAt(2)) + a, 16), r = z((a = l[3].charAt(1)) + a, 16)), l[4] && (f = l[4][y](J), r = U(f[0]), f[0].slice(-1) == "%" && (r *= 2.55), i = U(f[1]), f[1].slice(-1) == "%" && (i *= 2.55), s = U(f[2]), f[2].slice(-1) == "%" && (s *= 2.55), l[1].toLowerCase().slice(0, 4) == "rgba" && (u = U(f[3])), f[3] && f[3].slice(-1) == "%" && (u /= 100)), l[5] ? (f = l[5][y](J), r = U(f[0]), f[0].slice(-1) == "%" && (r *= 2.55), i = U(f[1]), f[1].slice(-1) == "%" && (i *= 2.55), s = U(f[2]), f[2].slice(-1) == "%" && (s *= 2.55), (f[0].slice(-3) == "deg" || f[0].slice(-1) == "°") && (r /= 360), l[1].toLowerCase().slice(0, 4) == "hsba" && (u = U(f[3])), f[3] && f[3].slice(-1) == "%" && (u /= 100), e.hsb2rgb(r, i, s, u)) : l[6] ? (f = l[6][y](J), r = U(f[0]), f[0].slice(-1) == "%" && (r *= 2.55), i = U(f[1]), f[1].slice(-1) == "%" && (i *= 2.55), s = U(f[2]), f[2].slice(-1) == "%" && (s *= 2.55), (f[0].slice(-3) == "deg" || f[0].slice(-1) == "°") && (r /= 360), l[1].toLowerCase().slice(0, 4) == "hsla" && (u = U(f[3])), f[3] && f[3].slice(-1) == "%" && (u /= 100), e.hsl2rgb(r, i, s, u)) : (l = {
            r: r,
            g: i,
            b: s,
            toString: xt
        }, l.hex = "#" + (16777216 | s | i << 8 | r << 16).toString(16).slice(1), e.is(u, "finite") && (l.opacity = u), l)) : {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: xt
        }
    }, e), e.hsb = Et(function (t, n, r) {
        return e.hsb2rgb(t, n, r).hex
    }), e.hsl = Et(function (t, n, r) {
        return e.hsl2rgb(t, n, r).hex
    }), e.rgb = Et(function (e, t, n) {
        return "#" + (16777216 | n | t << 8 | e << 16).toString(16).slice(1)
    }), e.getColor = function (e) {
        var t = this.getColor.start = this.getColor.start || {
                h: 0,
                s: 1,
                b: e || .75
            },
            n = this.hsb2rgb(t.h, t.s, t.b);
        return t.h += .075, t.h > 1 && (t.h = 0, t.s -= .2, t.s <= 0 && (this.getColor.start = {
            h: 0,
            s: 1,
            b: t.b
        })), n.hex
    }, e.getColor.reset = function () {
        delete this.start
    }, e.parsePathString = function (t) {
        if (!t) return null;
        var n = Nt(t);
        if (n.arr) return Ht(n.arr);
        var r = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            i = [];
        return e.is(t, O) && e.is(t[0], O) && (i = Ht(t)), i.length || g(t).replace(G, function (e, t, n) {
            var s = [],
                o = t.toLowerCase();
            n.replace(Z, function (e, t) {
                t && s.push(+t)
            }), o == "m" && s.length > 2 && (i.push([t][p](s.splice(0, 2))), o = "l", t = t == "m" ? "l" : "L");
            if (o == "r") i.push([t][p](s));
            else
                while (s.length >= r[o]) {
                    i.push([t][p](s.splice(0, r[o])));
                    if (!r[o]) break
                }
        }), i.toString = e._path2string, n.arr = Ht(i), i
    }, e.parseTransformString = Et(function (t) {
        if (!t) return null;
        var n = {
                r: 3,
                s: 4,
                t: 2,
                m: 6
            },
            r = [];
        return e.is(t, O) && e.is(t[0], O) && (r = Ht(t)), r.length || g(t).replace(Y, function (e, t, n) {
            var i = [],
                s = E.call(t);
            n.replace(Z, function (e, t) {
                t && i.push(+t)
            }), r.push([t][p](i))
        }), r.toString = e._path2string, r
    });
    var Nt = function (e) {
        var t = Nt.ps = Nt.ps || {};
        return t[e] ? t[e].sleep = 100 : t[e] = {
            sleep: 100
        }, setTimeout(function () {
            for (var n in t) t[o](n) && n != e && (t[n].sleep--, !t[n].sleep && delete t[n])
        }), t[e]
    };
    e.findDotsAtSegment = function (e, t, n, r, i, s, o, u, a) {
        var f = 1 - a,
            l = C(f, 3),
            c = C(f, 2),
            h = a * a,
            p = h * a,
            d = l * e + c * 3 * a * n + f * 3 * a * a * i + p * o,
            v = l * t + c * 3 * a * r + f * 3 * a * a * s + p * u,
            m = e + 2 * a * (n - e) + h * (i - 2 * n + e),
            g = t + 2 * a * (r - t) + h * (s - 2 * r + t),
            y = n + 2 * a * (i - n) + h * (o - 2 * i + n),
            b = r + 2 * a * (s - r) + h * (u - 2 * s + r),
            w = f * e + a * n,
            E = f * t + a * r,
            x = f * i + a * o,
            T = f * s + a * u,
            N = 90 - S.atan2(m - y, g - b) * 180 / k;
        return (m > y || g < b) && (N += 180), {
            x: d,
            y: v,
            m: {
                x: m,
                y: g
            },
            n: {
                x: y,
                y: b
            },
            start: {
                x: w,
                y: E
            },
            end: {
                x: x,
                y: T
            },
            alpha: N
        }
    }, e.bezierBBox = function (t, n, r, i, s, o, u, a) {
        e.is(t, "array") || (t = [t, n, r, i, s, o, u, a]);
        var f = Ut.apply(null, t);
        return {
            x: f.min.x,
            y: f.min.y,
            x2: f.max.x,
            y2: f.max.y,
            width: f.max.x - f.min.x,
            height: f.max.y - f.min.y
        }
    }, e.isPointInsideBBox = function (e, t, n) {
        return t >= e.x && t <= e.x2 && n >= e.y && n <= e.y2
    }, e.isBBoxIntersect = function (t, n) {
        var r = e.isPointInsideBBox;
        return r(n, t.x, t.y) || r(n, t.x2, t.y) || r(n, t.x, t.y2) || r(n, t.x2, t.y2) || r(t, n.x, n.y) || r(t, n.x2, n.y) || r(t, n.x, n.y2) || r(t, n.x2, n.y2) || (t.x < n.x2 && t.x > n.x || n.x < t.x2 && n.x > t.x) && (t.y < n.y2 && t.y > n.y || n.y < t.y2 && n.y > t.y)
    }, e.pathIntersection = function (e, t) {
        return Dt(e, t)
    }, e.pathIntersectionNumber = function (e, t) {
        return Dt(e, t, 1)
    }, e.isPointInsidePath = function (t, n, r) {
        var i = e.pathBBox(t);
        return e.isPointInsideBBox(i, n, r) && Dt(t, [["M", n, r], ["H", i.x2 + 10]], 1) % 2 == 1
    }, e._removedFactory = function (e) {
        return function () {
            eve("raphael.log", null, "Raphaël: you are calling to method “" + e + "” of removed object", e)
        }
    };
    var Pt = e.pathBBox = function (e) {
            var t = Nt(e);
            if (t.bbox) return ht(t.bbox);
            if (!e) return {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                x2: 0,
                y2: 0
            };
            e = zt(e);
            var n = 0,
                r = 0,
                i = [],
                s = [],
                o;
            for (var u = 0, a = e.length; u < a; u++) {
                o = e[u];
                if (o[0] == "M") n = o[1], r = o[2], i.push(n), s.push(r);
                else {
                    var f = Ut(n, r, o[1], o[2], o[3], o[4], o[5], o[6]);
                    i = i[p](f.min.x, f.max.x), s = s[p](f.min.y, f.max.y), n = o[5], r = o[6]
                }
            }
            var l = T[h](0, i),
                c = T[h](0, s),
                d = x[h](0, i),
                v = x[h](0, s),
                m = {
                    x: l,
                    y: c,
                    x2: d,
                    y2: v,
                    width: d - l,
                    height: v - c
                };
            return t.bbox = ht(m), m
        },
        Ht = function (t) {
            var n = ht(t);
            return n.toString = e._path2string, n
        },
        Bt = e._pathToRelative = function (t) {
            var n = Nt(t);
            if (n.rel) return Ht(n.rel);
            if (!e.is(t, O) || !e.is(t && t[0], O)) t = e.parsePathString(t);
            var r = [],
                i = 0,
                s = 0,
                o = 0,
                u = 0,
                a = 0;
            t[0][0] == "M" && (i = t[0][1], s = t[0][2], o = i, u = s, a++, r.push(["M", i, s]));
            for (var f = a, l = t.length; f < l; f++) {
                var c = r[f] = [],
                    h = t[f];
                if (h[0] != E.call(h[0])) {
                    c[0] = E.call(h[0]);
                    switch (c[0]) {
                    case "a":
                        c[1] = h[1], c[2] = h[2], c[3] = h[3], c[4] = h[4], c[5] = h[5], c[6] = +(h[6] - i).toFixed(3), c[7] = +(h[7] - s).toFixed(3);
                        break;
                    case "v":
                        c[1] = +(h[1] - s).toFixed(3);
                        break;
                    case "m":
                        o = h[1], u = h[2];
                    default:
                        for (var p = 1, d = h.length; p < d; p++) c[p] = +(h[p] - (p % 2 ? i : s)).toFixed(3)
                    }
                } else {
                    c = r[f] = [], h[0] == "m" && (o = h[1] + i, u = h[2] + s);
                    for (var v = 0, m = h.length; v < m; v++) r[f][v] = h[v]
                }
                var g = r[f].length;
                switch (r[f][0]) {
                case "z":
                    i = o, s = u;
                    break;
                case "h":
                    i += +r[f][g - 1];
                    break;
                case "v":
                    s += +r[f][g - 1];
                    break;
                default:
                    i += +r[f][g - 2], s += +r[f][g - 1]
                }
            }
            return r.toString = e._path2string, n.rel = Ht(r), r
        },
        jt = e._pathToAbsolute = function (t) {
            var n = Nt(t);
            if (n.abs) return Ht(n.abs);
            if (!e.is(t, O) || !e.is(t && t[0], O)) t = e.parsePathString(t);
            if (!t || !t.length) return [["M", 0, 0]];
            var r = [],
                i = 0,
                s = 0,
                o = 0,
                u = 0,
                a = 0;
            t[0][0] == "M" && (i = +t[0][1], s = +t[0][2], o = i, u = s, a++, r[0] = ["M", i, s]);
            var f = t.length == 3 && t[0][0] == "M" && t[1][0].toUpperCase() == "R" && t[2][0].toUpperCase() == "Z";
            for (var l, c, h = a, d = t.length; h < d; h++) {
                r.push(l = []), c = t[h];
                if (c[0] != W.call(c[0])) {
                    l[0] = W.call(c[0]);
                    switch (l[0]) {
                    case "A":
                        l[1] = c[1], l[2] = c[2], l[3] = c[3], l[4] = c[4], l[5] = c[5], l[6] = +(c[6] + i), l[7] = +(c[7] + s);
                        break;
                    case "V":
                        l[1] = +c[1] + s;
                        break;
                    case "H":
                        l[1] = +c[1] + i;
                        break;
                    case "R":
                        var v = [i, s][p](c.slice(1));
                        for (var m = 2, g = v.length; m < g; m++) v[m] = +v[m] + i, v[++m] = +v[m] + s;
                        r.pop(), r = r[p](Tt(v, f));
                        break;
                    case "M":
                        o = +c[1] + i, u = +c[2] + s;
                    default:
                        for (m = 1, g = c.length; m < g; m++) l[m] = +c[m] + (m % 2 ? i : s)
                    }
                } else if (c[0] == "R") v = [i, s][p](c.slice(1)), r.pop(), r = r[p](Tt(v, f)), l = ["R"][p](c.slice(-2));
                else
                    for (var y = 0, b = c.length; y < b; y++) l[y] = c[y];
                switch (l[0]) {
                case "Z":
                    i = o, s = u;
                    break;
                case "H":
                    i = l[1];
                    break;
                case "V":
                    s = l[1];
                    break;
                case "M":
                    o = l[l.length - 2], u = l[l.length - 1];
                default:
                    i = l[l.length - 2], s = l[l.length - 1]
                }
            }
            return r.toString = e._path2string, n.abs = Ht(r), r
        },
        Ft = function (e, t, n, r) {
            return [e, t, n, r, n, r]
        },
        It = function (e, t, n, r, i, s) {
            var o = 1 / 3,
                u = 2 / 3;
            return [o * e + u * n, o * t + u * r, o * i + u * n, o * s + u * r, i, s]
        },
        qt = function (e, t, n, r, i, s, o, u, a, f) {
            var l = k * 120 / 180,
                c = k / 180 * (+i || 0),
                h = [],
                d, v = Et(function (e, t, n) {
                    var r = e * S.cos(n) - t * S.sin(n),
                        i = e * S.sin(n) + t * S.cos(n);
                    return {
                        x: r,
                        y: i
                    }
                });
            if (!f) {
                d = v(e, t, -c), e = d.x, t = d.y, d = v(u, a, -c), u = d.x, a = d.y;
                var m = S.cos(k / 180 * i),
                    g = S.sin(k / 180 * i),
                    b = (e - u) / 2,
                    w = (t - a) / 2,
                    E = b * b / (n * n) + w * w / (r * r);
                E > 1 && (E = S.sqrt(E), n = E * n, r = E * r);
                var x = n * n,
                    T = r * r,
                    C = (s == o ? -1 : 1) * S.sqrt(N((x * T - x * w * w - T * b * b) / (x * w * w + T * b * b))),
                    L = C * n * w / r + (e + u) / 2,
                    A = C * -r * b / n + (t + a) / 2,
                    O = S.asin(((t - A) / r).toFixed(9)),
                    M = S.asin(((a - A) / r).toFixed(9));
                O = e < L ? k - O : O, M = u < L ? k - M : M, O < 0 && (O = k * 2 + O), M < 0 && (M = k * 2 + M), o && O > M && (O -= k * 2), !o && M > O && (M -= k * 2)
            } else O = f[0], M = f[1], L = f[2], A = f[3];
            var _ = M - O;
            if (N(_) > l) {
                var D = M,
                    P = u,
                    H = a;
                M = O + l * (o && M > O ? 1 : -1), u = L + n * S.cos(M), a = A + r * S.sin(M), h = qt(u, a, n, r, i, 0, o, P, H, [M, D, L, A])
            }
            _ = M - O;
            var B = S.cos(O),
                j = S.sin(O),
                F = S.cos(M),
                I = S.sin(M),
                q = S.tan(_ / 4),
                R = 4 / 3 * n * q,
                U = 4 / 3 * r * q,
                z = [e, t],
                W = [e + R * j, t - U * B],
                X = [u + R * I, a - U * F],
                V = [u, a];
            W[0] = 2 * z[0] - W[0], W[1] = 2 * z[1] - W[1];
            if (f) return [W, X, V][p](h);
            h = [W, X, V][p](h).join()[y](",");
            var $ = [];
            for (var J = 0, K = h.length; J < K; J++) $[J] = J % 2 ? v(h[J - 1], h[J], c).y : v(h[J], h[J + 1], c).x;
            return $
        },
        Rt = function (e, t, n, r, i, s, o, u, a) {
            var f = 1 - a;
            return {
                x: C(f, 3) * e + C(f, 2) * 3 * a * n + f * 3 * a * a * i + C(a, 3) * o,
                y: C(f, 3) * t + C(f, 2) * 3 * a * r + f * 3 * a * a * s + C(a, 3) * u
            }
        },
        Ut = Et(function (e, t, n, r, i, s, o, u) {
            var a = i - 2 * n + e - (o - 2 * i + n),
                f = 2 * (n - e) - 2 * (i - n),
                l = e - n,
                c = (-f + S.sqrt(f * f - 4 * a * l)) / 2 / a,
                p = (-f - S.sqrt(f * f - 4 * a * l)) / 2 / a,
                d = [t, u],
                v = [e, o],
                m;
            return N(c) > "1e12" && (c = .5), N(p) > "1e12" && (p = .5), c > 0 && c < 1 && (m = Rt(e, t, n, r, i, s, o, u, c), v.push(m.x), d.push(m.y)), p > 0 && p < 1 && (m = Rt(e, t, n, r, i, s, o, u, p), v.push(m.x), d.push(m.y)), a = s - 2 * r + t - (u - 2 * s + r), f = 2 * (r - t) - 2 * (s - r), l = t - r, c = (-f + S.sqrt(f * f - 4 * a * l)) / 2 / a, p = (-f - S.sqrt(f * f - 4 * a * l)) / 2 / a, N(c) > "1e12" && (c = .5), N(p) > "1e12" && (p = .5), c > 0 && c < 1 && (m = Rt(e, t, n, r, i, s, o, u, c), v.push(m.x), d.push(m.y)), p > 0 && p < 1 && (m = Rt(e, t, n, r, i, s, o, u, p), v.push(m.x), d.push(m.y)), {
                min: {
                    x: T[h](0, v),
                    y: T[h](0, d)
                },
                max: {
                    x: x[h](0, v),
                    y: x[h](0, d)
                }
            }
        }),
        zt = e._path2curve = Et(function (e, t) {
            var n = !t && Nt(e);
            if (!t && n.curve) return Ht(n.curve);
            var r = jt(e),
                i = t && jt(t),
                s = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                },
                o = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                },
                u = function (e, t) {
                    var n, r;
                    if (!e) return ["C", t.x, t.y, t.x, t.y, t.x, t.y];
                    !(e[0] in {
                        T: 1,
                        Q: 1
                    }) && (t.qx = t.qy = null);
                    switch (e[0]) {
                    case "M":
                        t.X = e[1], t.Y = e[2];
                        break;
                    case "A":
                        e = ["C"][p](qt[h](0, [t.x, t.y][p](e.slice(1))));
                        break;
                    case "S":
                        n = t.x + (t.x - (t.bx || t.x)), r = t.y + (t.y - (t.by || t.y)), e = ["C", n, r][p](e.slice(1));
                        break;
                    case "T":
                        t.qx = t.x + (t.x - (t.qx || t.x)), t.qy = t.y + (t.y - (t.qy || t.y)), e = ["C"][p](It(t.x, t.y, t.qx, t.qy, e[1], e[2]));
                        break;
                    case "Q":
                        t.qx = e[1], t.qy = e[2], e = ["C"][p](It(t.x, t.y, e[1], e[2], e[3], e[4]));
                        break;
                    case "L":
                        e = ["C"][p](Ft(t.x, t.y, e[1], e[2]));
                        break;
                    case "H":
                        e = ["C"][p](Ft(t.x, t.y, e[1], t.y));
                        break;
                    case "V":
                        e = ["C"][p](Ft(t.x, t.y, t.x, e[1]));
                        break;
                    case "Z":
                        e = ["C"][p](Ft(t.x, t.y, t.X, t.Y))
                    }
                    return e
                },
                a = function (e, t) {
                    if (e[t].length > 7) {
                        e[t].shift();
                        var n = e[t];
                        while (n.length) e.splice(t++, 0, ["C"][p](n.splice(0, 6)));
                        e.splice(t, 1), c = x(r.length, i && i.length || 0)
                    }
                },
                f = function (e, t, n, s, o) {
                    e && t && e[o][0] == "M" && t[o][0] != "M" && (t.splice(o, 0, ["M", s.x, s.y]), n.bx = 0, n.by = 0, n.x = e[o][1], n.y = e[o][2], c = x(r.length, i && i.length || 0))
                };
            for (var l = 0, c = x(r.length, i && i.length || 0); l < c; l++) {
                r[l] = u(r[l], s), a(r, l), i && (i[l] = u(i[l], o)), i && a(i, l), f(r, i, s, o, l), f(i, r, o, s, l);
                var d = r[l],
                    v = i && i[l],
                    m = d.length,
                    g = i && v.length;
                s.x = d[m - 2], s.y = d[m - 1], s.bx = U(d[m - 4]) || s.x, s.by = U(d[m - 3]) || s.y, o.bx = i && (U(v[g - 4]) || o.x), o.by = i && (U(v[g - 3]) || o.y), o.x = i && v[g - 2], o.y = i && v[g - 1]
            }
            return i || (n.curve = Ht(r)), i ? [r, i] : r
        }, null, Ht),
        Wt = e._parseDots = Et(function (t) {
            var n = [];
            for (var r = 0, i = t.length; r < i; r++) {
                var s = {},
                    o = t[r].match(/^([^:]*):?([\d\.]*)/);
                s.color = e.getRGB(o[1]);
                if (s.color.error) return null;
                s.color = s.color.hex, o[2] && (s.offset = o[2] + "%"), n.push(s)
            }
            for (r = 1, i = n.length - 1; r < i; r++)
                if (!n[r].offset) {
                    var u = U(n[r - 1].offset || 0),
                        a = 0;
                    for (var f = r + 1; f < i; f++)
                        if (n[f].offset) {
                            a = n[f].offset;
                            break
                        }
                    a || (a = 100, f = i), a = U(a);
                    var l = (a - u) / (f - r + 1);
                    for (; r < f; r++) u += l, n[r].offset = u + "%"
                }
            return n
        }),
        Xt = e._tear = function (e, t) {
            e == t.top && (t.top = e.prev), e == t.bottom && (t.bottom = e.next), e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next)
        },
        Vt = e._tofront = function (e, t) {
            if (t.top === e) return;
            Xt(e, t), e.next = null, e.prev = t.top, t.top.next = e, t.top = e
        },
        $t = e._toback = function (e, t) {
            if (t.bottom === e) return;
            Xt(e, t), e.next = t.bottom, e.prev = null, t.bottom.prev = e, t.bottom = e
        },
        Jt = e._insertafter = function (e, t, n) {
            Xt(e, n), t == n.top && (n.top = e), t.next && (t.next.prev = e), e.next = t.next, e.prev = t, t.next = e
        },
        Kt = e._insertbefore = function (e, t, n) {
            Xt(e, n), t == n.bottom && (n.bottom = e), t.prev && (t.prev.next = e), e.prev = t.prev, t.prev = e, e.next = t
        },
        Qt = e.toMatrix = function (e, t) {
            var n = Pt(e),
                r = {
                    _: {
                        transform: v
                    },
                    getBBox: function () {
                        return n
                    }
                };
            return Yt(r, t), r.matrix
        },
        Gt = e.transformPath = function (e, t) {
            return ft(e, Qt(e, t))
        },
        Yt = e._extractTransform = function (t, n) {
            if (n == null) return t._.transform;
            n = g(n).replace(/\.{3}|\u2026/g, t._.transform || v);
            var r = e.parseTransformString(n),
                i = 0,
                s = 0,
                o = 0,
                u = 1,
                a = 1,
                f = t._,
                l = new tn;
            f.transform = r || [];
            if (r)
                for (var c = 0, h = r.length; c < h; c++) {
                    var p = r[c],
                        d = p.length,
                        m = g(p[0]).toLowerCase(),
                        y = p[0] != m,
                        b = y ? l.invert() : 0,
                        w, E, S, x, T;
                    m == "t" && d == 3 ? y ? (w = b.x(0, 0), E = b.y(0, 0), S = b.x(p[1], p[2]), x = b.y(p[1], p[2]), l.translate(S - w, x - E)) : l.translate(p[1], p[2]) : m == "r" ? d == 2 ? (T = T || t.getBBox(1), l.rotate(p[1], T.x + T.width / 2, T.y + T.height / 2), i += p[1]) : d == 4 && (y ? (S = b.x(p[2], p[3]), x = b.y(p[2], p[3]), l.rotate(p[1], S, x)) : l.rotate(p[1], p[2], p[3]), i += p[1]) : m == "s" ? d == 2 || d == 3 ? (T = T || t.getBBox(1), l.scale(p[1], p[d - 1], T.x + T.width / 2, T.y + T.height / 2), u *= p[1], a *= p[d - 1]) : d == 5 && (y ? (S = b.x(p[3], p[4]), x = b.y(p[3], p[4]), l.scale(p[1], p[2], S, x)) : l.scale(p[1], p[2], p[3], p[4]), u *= p[1], a *= p[2]) : m == "m" && d == 7 && l.add(p[1], p[2], p[3], p[4], p[5], p[6]), f.dirtyT = 1, t.matrix = l
                }
            t.matrix = l, f.sx = u, f.sy = a, f.deg = i, f.dx = s = l.e, f.dy = o = l.f, u == 1 && a == 1 && !i && f.bbox ? (f.bbox.x += +s, f.bbox.y += +o) : f.dirtyT = 1
        },
        Zt = function (e) {
            var t = e[0];
            switch (t.toLowerCase()) {
            case "t":
                return [t, 0, 0];
            case "m":
                return [t, 1, 0, 0, 1, 0, 0];
            case "r":
                return e.length == 4 ? [t, 0, e[2], e[3]] : [t, 0];
            case "s":
                return e.length == 5 ? [t, 1, 1, e[3], e[4]] : e.length == 3 ? [t, 1, 1] : [t, 1]
            }
        },
        en = e._equaliseTransform = function (t, n) {
            n = g(n).replace(/\.{3}|\u2026/g, t), t = e.parseTransformString(t) || [], n = e.parseTransformString(n) || [];
            var r = x(t.length, n.length),
                i = [],
                s = [],
                o = 0,
                u, a, f, l;
            for (; o < r; o++) {
                f = t[o] || Zt(n[o]), l = n[o] || Zt(f);
                if (f[0] != l[0] || f[0].toLowerCase() == "r" && (f[2] != l[2] || f[3] != l[3]) || f[0].toLowerCase() == "s" && (f[3] != l[3] || f[4] != l[4])) return;
                i[o] = [], s[o] = [];
                for (u = 0, a = x(f.length, l.length); u < a; u++) u in f && (i[o][u] = f[u]), u in l && (s[o][u] = l[u])
            }
            return {
                from: i,
                to: s
            }
        };
    e._getContainer = function (t, n, r, i) {
            var s;
            s = i == null && !e.is(t, "object") ? u.doc.getElementById(t) : t;
            if (s == null) return;
            return s.tagName ? n == null ? {
                container: s,
                width: s.style.pixelWidth || s.offsetWidth,
                height: s.style.pixelHeight || s.offsetHeight
            } : {
                container: s,
                width: n,
                height: r
            } : {
                container: 1,
                x: t,
                y: n,
                width: r,
                height: i
            }
        }, e.pathToRelative = Bt, e._engine = {}, e.path2curve = zt, e.matrix = function (e, t, n, r, i, s) {
            return new tn(e, t, n, r, i, s)
        },
        function (t) {
            function n(e) {
                return e[0] * e[0] + e[1] * e[1]
            }

            function r(e) {
                var t = S.sqrt(n(e));
                e[0] && (e[0] /= t), e[1] && (e[1] /= t)
            }
            t.add = function (e, t, n, r, i, s) {
                var o = [[], [], []],
                    u = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                    a = [[e, n, i], [t, r, s], [0, 0, 1]],
                    f, l, c, h;
                e && e instanceof tn && (a = [[e.a, e.c, e.e], [e.b, e.d, e.f], [0, 0, 1]]);
                for (f = 0; f < 3; f++)
                    for (l = 0; l < 3; l++) {
                        h = 0;
                        for (c = 0; c < 3; c++) h += u[f][c] * a[c][l];
                        o[f][l] = h
                    }
                this.a = o[0][0], this.b = o[1][0], this.c = o[0][1], this.d = o[1][1], this.e = o[0][2], this.f = o[1][2]
            }, t.invert = function () {
                var e = this,
                    t = e.a * e.d - e.b * e.c;
                return new tn(e.d / t, -e.b / t, -e.c / t, e.a / t, (e.c * e.f - e.d * e.e) / t, (e.b * e.e - e.a * e.f) / t)
            }, t.clone = function () {
                return new tn(this.a, this.b, this.c, this.d, this.e, this.f)
            }, t.translate = function (e, t) {
                this.add(1, 0, 0, 1, e, t)
            }, t.scale = function (e, t, n, r) {
                t == null && (t = e), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(e, 0, 0, t, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r)
            }, t.rotate = function (t, n, r) {
                t = e.rad(t), n = n || 0, r = r || 0;
                var i = +S.cos(t).toFixed(9),
                    s = +S.sin(t).toFixed(9);
                this.add(i, s, -s, i, n, r), this.add(1, 0, 0, 1, -n, -r)
            }, t.x = function (e, t) {
                return e * this.a + t * this.c + this.e
            }, t.y = function (e, t) {
                return e * this.b + t * this.d + this.f
            }, t.get = function (e) {
                return +this[g.fromCharCode(97 + e)].toFixed(4)
            }, t.toString = function () {
                return e.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
            }, t.toFilter = function () {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
            }, t.offset = function () {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, t.split = function () {
                var t = {};
                t.dx = this.e, t.dy = this.f;
                var i = [[this.a, this.c], [this.b, this.d]];
                t.scalex = S.sqrt(n(i[0])), r(i[0]), t.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1], i[1] = [i[1][0] - i[0][0] * t.shear, i[1][1] - i[0][1] * t.shear], t.scaley = S.sqrt(n(i[1])), r(i[1]), t.shear /= t.scaley;
                var s = -i[0][1],
                    o = i[1][1];
                return o < 0 ? (t.rotate = e.deg(S.acos(o)), s < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = e.deg(S.asin(s)), t.isSimple = !+t.shear.toFixed(9) && (t.scalex.toFixed(9) == t.scaley.toFixed(9) || !t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
            }, t.toTransformString = function (e) {
                var t = e || this[y]();
                return t.isSimple ? (t.scalex = +t.scalex.toFixed(4), t.scaley = +t.scaley.toFixed(4), t.rotate = +t.rotate.toFixed(4), (t.dx || t.dy ? "t" + [t.dx, t.dy] : v) + (t.scalex != 1 || t.scaley != 1 ? "s" + [t.scalex, t.scaley, 0, 0] : v) + (t.rotate ? "r" + [t.rotate, 0, 0] : v)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
            }
        }(tn.prototype);
    var nn = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    navigator.vendor == "Apple Computer, Inc." && (nn && nn[1] < 4 || navigator.platform.slice(0, 2) == "iP") || navigator.vendor == "Google Inc." && nn && nn[1] < 8 ? l.safari = function () {
        var e = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function () {
            e.remove()
        })
    } : l.safari = it;
    var rn = function () {
            this.returnValue = !1
        },
        sn = function () {
            return this.originalEvent.preventDefault()
        },
        on = function () {
            this.cancelBubble = !0
        },
        un = function () {
            return this.originalEvent.stopPropagation()
        },
        an = function () {
            if (u.doc.addEventListener) return function (e, t, n, r) {
                var i = d && w[t] ? w[t] : t,
                    s = function (i) {
                        var s = u.doc.documentElement.scrollTop || u.doc.body.scrollTop,
                            a = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft,
                            f = i.clientX + a,
                            l = i.clientY + s;
                        if (d && w[o](t))
                            for (var c = 0, h = i.targetTouches && i.targetTouches.length; c < h; c++)
                                if (i.targetTouches[c].target == e) {
                                    var p = i;
                                    i = i.targetTouches[c], i.originalEvent = p, i.preventDefault = sn, i.stopPropagation = un;
                                    break
                                }
                        return n.call(r, i, f, l)
                    };
                return e.addEventListener(i, s, !1),
                    function () {
                        return e.removeEventListener(i, s, !1), !0
                    }
            };
            if (u.doc.attachEvent) return function (e, t, n, r) {
                var i = function (e) {
                    e = e || u.win.event;
                    var t = u.doc.documentElement.scrollTop || u.doc.body.scrollTop,
                        i = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft,
                        s = e.clientX + i,
                        o = e.clientY + t;
                    return e.preventDefault = e.preventDefault || rn, e.stopPropagation = e.stopPropagation || on, n.call(r, e, s, o)
                };
                e.attachEvent("on" + t, i);
                var s = function () {
                    return e.detachEvent("on" + t, i), !0
                };
                return s
            }
        }(),
        fn = [],
        ln = function (e) {
            var t = e.clientX,
                n = e.clientY,
                r = u.doc.documentElement.scrollTop || u.doc.body.scrollTop,
                i = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft,
                s, o = fn.length;
            while (o--) {
                s = fn[o];
                if (d) {
                    var a = e.touches.length,
                        f;
                    while (a--) {
                        f = e.touches[a];
                        if (f.identifier == s.el._drag.id) {
                            t = f.clientX, n = f.clientY, (e.originalEvent ? e.originalEvent : e).preventDefault();
                            break
                        }
                    }
                } else e.preventDefault();
                var l = s.el.node,
                    c, h = l.nextSibling,
                    p = l.parentNode,
                    v = l.style.display;
                u.win.opera && p.removeChild(l), l.style.display = "none", c = s.el.paper.getElementByPoint(t, n), l.style.display = v, u.win.opera && (h ? p.insertBefore(l, h) : p.appendChild(l)), c && eve("raphael.drag.over." + s.el.id, s.el, c), t += i, n += r, eve("raphael.drag.move." + s.el.id, s.move_scope || s.el, t - s.el._drag.x, n - s.el._drag.y, t, n, e)
            }
        },
        cn = function (t) {
            e.unmousemove(ln).unmouseup(cn);
            var n = fn.length,
                r;
            while (n--) r = fn[n], r.el._drag = {}, eve("raphael.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, t);
            fn = []
        },
        hn = e.el = {};
    for (var pn = b.length; pn--;)(function (t) {
        e[t] = hn[t] = function (n, r) {
            return e.is(n, "function") && (this.events = this.events || [], this.events.push({
                name: t,
                f: n,
                unbind: an(this.shape || this.node || u.doc, t, n, r || this)
            })), this
        }, e["un" + t] = hn["un" + t] = function (e) {
            var n = this.events || [],
                r = n.length;
            while (r--)
                if (n[r].name == t && n[r].f == e) return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
            return this
        }
    })(b[pn]);
    hn.data = function (t, n) {
        var r = tt[this.id] = tt[this.id] || {};
        if (arguments.length == 1) {
            if (e.is(t, "object")) {
                for (var i in t) t[o](i) && this.data(i, t[i]);
                return this
            }
            return eve("raphael.data.get." + this.id, this, r[t], t), r[t]
        }
        return r[t] = n, eve("raphael.data.set." + this.id, this, n, t), this
    }, hn.removeData = function (e) {
        return e == null ? tt[this.id] = {} : tt[this.id] && delete tt[this.id][e], this
    }, hn.getData = function () {
        return tt[this.id] || {}
    }, hn.hover = function (e, t, n, r) {
        return this.mouseover(e, n).mouseout(t, r || n)
    }, hn.unhover = function (e, t) {
        return this.unmouseover(e).unmouseout(t)
    };
    var dn = [];
    hn.drag = function (t, n, r, i, s, o) {
        function a(a) {
            (a.originalEvent || a).preventDefault();
            var f = u.doc.documentElement.scrollTop || u.doc.body.scrollTop,
                l = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft;
            this._drag.x = a.clientX + l, this._drag.y = a.clientY + f, this._drag.id = a.identifier, !fn.length && e.mousemove(ln).mouseup(cn), fn.push({
                el: this,
                move_scope: i,
                start_scope: s,
                end_scope: o
            }), n && eve.on("raphael.drag.start." + this.id, n), t && eve.on("raphael.drag.move." + this.id, t), r && eve.on("raphael.drag.end." + this.id, r), eve("raphael.drag.start." + this.id, s || i || this, a.clientX + l, a.clientY + f, a)
        }
        return this._drag = {}, dn.push({
            el: this,
            start: a
        }), this.mousedown(a), this
    }, hn.onDragOver = function (e) {
        e ? eve.on("raphael.drag.over." + this.id, e) : eve.unbind("raphael.drag.over." + this.id)
    }, hn.undrag = function () {
        var t = dn.length;
        while (t--) dn[t].el == this && (this.unmousedown(dn[t].start), dn.splice(t, 1), eve.unbind("raphael.drag.*." + this.id));
        !dn.length && e.unmousemove(ln).unmouseup(cn), fn = []
    }, l.circle = function (t, n, r) {
        var i = e._engine.circle(this, t || 0, n || 0, r || 0);
        return this.__set__ && this.__set__.push(i), i
    }, l.rect = function (t, n, r, i, s) {
        var o = e._engine.rect(this, t || 0, n || 0, r || 0, i || 0, s || 0);
        return this.__set__ && this.__set__.push(o), o
    }, l.ellipse = function (t, n, r, i) {
        var s = e._engine.ellipse(this, t || 0, n || 0, r || 0, i || 0);
        return this.__set__ && this.__set__.push(s), s
    }, l.path = function (t) {
        t && !e.is(t, A) && !e.is(t[0], O) && (t += v);
        var n = e._engine.path(e.format[h](e, arguments), this);
        return this.__set__ && this.__set__.push(n), n
    }, l.image = function (t, n, r, i, s) {
        var o = e._engine.image(this, t || "about:blank", n || 0, r || 0, i || 0, s || 0);
        return this.__set__ && this.__set__.push(o), o
    }, l.text = function (t, n, r) {
        var i = e._engine.text(this, t || 0, n || 0, g(r));
        return this.__set__ && this.__set__.push(i), i
    }, l.set = function (t) {
        !e.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
        var n = new Dn(t);
        return this.__set__ && this.__set__.push(n), n.paper = this, n.type = "set", n
    }, l.setStart = function (e) {
        this.__set__ = e || this.set()
    }, l.setFinish = function (e) {
        var t = this.__set__;
        return delete this.__set__, t
    }, l.setSize = function (t, n) {
        return e._engine.setSize.call(this, t, n)
    }, l.setViewBox = function (t, n, r, i, s) {
        return e._engine.setViewBox.call(this, t, n, r, i, s)
    }, l.top = l.bottom = null, l.raphael = e;
    var vn = function (e) {
        var t = e.getBoundingClientRect(),
            n = e.ownerDocument,
            r = n.body,
            i = n.documentElement,
            s = i.clientTop || r.clientTop || 0,
            o = i.clientLeft || r.clientLeft || 0,
            a = t.top + (u.win.pageYOffset || i.scrollTop || r.scrollTop) - s,
            f = t.left + (u.win.pageXOffset || i.scrollLeft || r.scrollLeft) - o;
        return {
            y: a,
            x: f
        }
    };
    l.getElementByPoint = function (e, t) {
        var n = this,
            r = n.canvas,
            i = u.doc.elementFromPoint(e, t);
        if (u.win.opera && i.tagName == "svg") {
            var s = vn(r),
                o = r.createSVGRect();
            o.x = e - s.x, o.y = t - s.y, o.width = o.height = 1;
            var a = r.getIntersectionList(o, null);
            a.length && (i = a[a.length - 1])
        }
        if (!i) return null;
        while (i.parentNode && i != r.parentNode && !i.raphael) i = i.parentNode;
        return i == n.canvas.parentNode && (i = r), i = i && i.raphael ? n.getById(i.raphaelid) : null, i
    }, l.getElementsByBBox = function (e) {
        var t = this.set();
        return this.forEach(function (n) {
            Raphael.isBBoxIntersect(n.getBBox(), e) && t.push(n)
        }), t
    }, l.getById = function (e) {
        var t = this.bottom;
        while (t) {
            if (t.id == e) return t;
            t = t.next
        }
        return null
    }, l.forEach = function (e, t) {
        var n = this.bottom;
        while (n) {
            if (e.call(t, n) === !1) return this;
            n = n.next
        }
        return this
    }, l.getElementsByPoint = function (e, t) {
        var n = this.set();
        return this.forEach(function (r) {
            r.isPointInside(e, t) && n.push(r)
        }), n
    }, hn.isPointInside = function (t, n) {
        var r = this.realPath = this.realPath || at[this.type](this);
        return e.isPointInsidePath(r, t, n)
    }, hn.getBBox = function (e) {
        if (this.removed) return {};
        var t = this._;
        if (e) {
            if (t.dirty || !t.bboxwt) this.realPath = at[this.type](this), t.bboxwt = Pt(this.realPath), t.bboxwt.toString = gn, t.dirty = 0;
            return t.bboxwt
        }
        if (t.dirty || t.dirtyT || !t.bbox) {
            if (t.dirty || !this.realPath) t.bboxwt = 0, this.realPath = at[this.type](this);
            t.bbox = Pt(ft(this.realPath, this.matrix)), t.bbox.toString = gn, t.dirty = t.dirtyT = 0
        }
        return t.bbox
    }, hn.clone = function () {
        if (this.removed) return null;
        var e = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(e), e
    }, hn.glow = function (e) {
        if (this.type == "text") return null;
        e = e || {};
        var t = {
                width: (e.width || 10) + (+this.attr("stroke-width") || 1),
                fill: e.fill || !1,
                opacity: e.opacity || .5,
                offsetx: e.offsetx || 0,
                offsety: e.offsety || 0,
                color: e.color || "#000"
            },
            n = t.width / 2,
            r = this.paper,
            i = r.set(),
            s = this.realPath || at[this.type](this);
        s = this.matrix ? ft(s, this.matrix) : s;
        for (var o = 1; o < n + 1; o++) i.push(r.path(s).attr({
            stroke: t.color,
            fill: t.fill ? t.color : "none",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": +(t.width / n * o).toFixed(3),
            opacity: +(t.opacity / n).toFixed(3)
        }));
        return i.insertBefore(this).translate(t.offsetx, t.offsety)
    };
    var yn = {},
        bn = function (t, n, r, i, s, o, u, a, f) {
            return f == null ? kt(t, n, r, i, s, o, u, a) : e.findDotsAtSegment(t, n, r, i, s, o, u, a, Lt(t, n, r, i, s, o, u, a, f))
        },
        wn = function (t, n) {
            return function (r, i, s) {
                r = zt(r);
                var o, u, a, f, l = "",
                    c = {},
                    h, p = 0;
                for (var d = 0, v = r.length; d < v; d++) {
                    a = r[d];
                    if (a[0] == "M") o = +a[1], u = +a[2];
                    else {
                        f = bn(o, u, a[1], a[2], a[3], a[4], a[5], a[6]);
                        if (p + f > i) {
                            if (n && !c.start) {
                                h = bn(o, u, a[1], a[2], a[3], a[4], a[5], a[6], i - p), l += ["C" + h.start.x, h.start.y, h.m.x, h.m.y, h.x, h.y];
                                if (s) return l;
                                c.start = l, l = ["M" + h.x, h.y + "C" + h.n.x, h.n.y, h.end.x, h.end.y, a[5], a[6]].join(), p += f, o = +a[5], u = +a[6];
                                continue
                            }
                            if (!t && !n) return h = bn(o, u, a[1], a[2], a[3], a[4], a[5], a[6], i - p), {
                                x: h.x,
                                y: h.y,
                                alpha: h.alpha
                            }
                        }
                        p += f, o = +a[5], u = +a[6]
                    }
                    l += a.shift() + a
                }
                return c.end = l, h = t ? p : n ? c : e.findDotsAtSegment(o, u, a[0], a[1], a[2], a[3], a[4], a[5], 1), h.alpha && (h = {
                    x: h.x,
                    y: h.y,
                    alpha: h.alpha
                }), h
            }
        },
        En = wn(1),
        Sn = wn(),
        xn = wn(0, 1);
    e.getTotalLength = En, e.getPointAtLength = Sn, e.getSubpath = function (e, t, n) {
        if (this.getTotalLength(e) - n < 1e-6) return xn(e, t).end;
        var r = xn(e, n, 1);
        return t ? xn(r, t).end : r
    }, hn.getTotalLength = function () {
        if (this.type != "path") return;
        return this.node.getTotalLength ? this.node.getTotalLength() : En(this.attrs.path)
    }, hn.getPointAtLength = function (e) {
        if (this.type != "path") return;
        return Sn(this.attrs.path, e)
    }, hn.getSubpath = function (t, n) {
        if (this.type != "path") return;
        return e.getSubpath(this.attrs.path, t, n)
    };
    var Tn = e.easing_formulas = {
        linear: function (e) {
            return e
        },
        "<": function (e) {
            return C(e, 1.7)
        },
        ">": function (e) {
            return C(e, .48)
        },
        "<>": function (e) {
            var t = .48 - e / 1.04,
                n = S.sqrt(.1734 + t * t),
                r = n - t,
                i = C(N(r), 1 / 3) * (r < 0 ? -1 : 1),
                s = -n - t,
                o = C(N(s), 1 / 3) * (s < 0 ? -1 : 1),
                u = i + o + .5;
            return (1 - u) * 3 * u * u + u * u * u
        },
        backIn: function (e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
        },
        backOut: function (e) {
            e -= 1;
            var t = 1.70158;
            return e * e * ((t + 1) * e + t) + 1
        },
        elastic: function (e) {
            return e == !!e ? e : C(2, -10 * e) * S.sin((e - .075) * 2 * k / .3) + 1
        },
        bounce: function (e) {
            var t = 7.5625,
                n = 2.75,
                r;
            return e < 1 / n ? r = t * e * e : e < 2 / n ? (e -= 1.5 / n, r = t * e * e + .75) : e < 2.5 / n ? (e -= 2.25 / n, r = t * e * e + .9375) : (e -= 2.625 / n, r = t * e * e + .984375), r
        }
    };
    Tn.easeIn = Tn["ease-in"] = Tn["<"], Tn.easeOut = Tn["ease-out"] = Tn[">"], Tn.easeInOut = Tn["ease-in-out"] = Tn["<>"], Tn["back-in"] = Tn.backIn, Tn["back-out"] = Tn.backOut;
    var Nn = [],
        Cn = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
            setTimeout(e, 16)
        },
        kn = function () {
            var t = +(new Date),
                n = 0;
            for (; n < Nn.length; n++) {
                var r = Nn[n];
                if (r.el.removed || r.paused) continue;
                var i = t - r.start,
                    s = r.ms,
                    u = r.easing,
                    a = r.from,
                    f = r.diff,
                    l = r.to,
                    c = r.t,
                    h = r.el,
                    d = {},
                    v, g = {},
                    y;
                r.initstatus ? (i = (r.initstatus * r.anim.top - r.prev) / (r.percent - r.prev) * s, r.status = r.initstatus, delete r.initstatus, r.stop && Nn.splice(n--, 1)) : r.status = (r.prev + (r.percent - r.prev) * (i / s)) / r.anim.top;
                if (i < 0) continue;
                if (i < s) {
                    var b = u(i / s);
                    for (var w in a)
                        if (a[o](w)) {
                            switch (V[w]) {
                            case L:
                                v = +a[w] + b * s * f[w];
                                break;
                            case "colour":
                                v = "rgb(" + [Ln(q(a[w].r + b * s * f[w].r)), Ln(q(a[w].g + b * s * f[w].g)), Ln(q(a[w].b + b * s * f[w].b))].join(",") + ")";
                                break;
                            case "path":
                                v = [];
                                for (var E = 0, S = a[w].length; E < S; E++) {
                                    v[E] = [a[w][E][0]];
                                    for (var x = 1, T = a[w][E].length; x < T; x++) v[E][x] = +a[w][E][x] + b * s * f[w][E][x];
                                    v[E] = v[E].join(m)
                                }
                                v = v.join(m);
                                break;
                            case "transform":
                                if (f[w].real) {
                                    v = [];
                                    for (E = 0, S = a[w].length; E < S; E++) {
                                        v[E] = [a[w][E][0]];
                                        for (x = 1, T = a[w][E].length; x < T; x++) v[E][x] = a[w][E][x] + b * s * f[w][E][x]
                                    }
                                } else {
                                    var N = function (e) {
                                        return +a[w][e] + b * s * f[w][e]
                                    };
                                    v = [["m", N(0), N(1), N(2), N(3), N(4), N(5)]]
                                }
                                break;
                            case "csv":
                                if (w == "clip-rect") {
                                    v = [], E = 4;
                                    while (E--) v[E] = +a[w][E] + b * s * f[w][E]
                                }
                                break;
                            default:
                                var C = [][p](a[w]);
                                v = [], E = h.paper.customAttributes[w].length;
                                while (E--) v[E] = +C[E] + b * s * f[w][E]
                            }
                            d[w] = v
                        }
                    h.attr(d),
                        function (e, t, n) {
                            setTimeout(function () {
                                eve("raphael.anim.frame." + e, t, n)
                            })
                        }(h.id, h, r.anim)
                } else {
                    (function (t, n, r) {
                        setTimeout(function () {
                            eve("raphael.anim.frame." + n.id, n, r), eve("raphael.anim.finish." + n.id, n, r), e.is(t, "function") && t.call(n)
                        })
                    })(r.callback, h, r.anim), h.attr(l), Nn.splice(n--, 1);
                    if (r.repeat > 1 && !r.next) {
                        for (y in l) l[o](y) && (g[y] = r.totalOrigin[y]);
                        r.el.attr(g), Mn(r.anim, r.el, r.anim.percents[0], null, r.totalOrigin, r.repeat - 1)
                    }
                    r.next && !r.stop && Mn(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat)
                }
            }
            e.svg && h && h.paper && h.paper.safari(), Nn.length && Cn(kn)
        },
        Ln = function (e) {
            return e > 255 ? 255 : e < 0 ? 0 : e
        };
    hn.animateWith = function (t, n, r, i, s, o) {
        var u = this;
        if (u.removed) return o && o.call(u), u;
        var a = r instanceof On ? r : e.animation(r, i, s, o),
            f, l;
        Mn(a, u, a.percents[0], null, u.attr());
        for (var c = 0, h = Nn.length; c < h; c++)
            if (Nn[c].anim == n && Nn[c].el == t) {
                Nn[h - 1].start = Nn[c].start;
                break
            }
        return u
    }, hn.onAnimation = function (e) {
        return e ? eve.on("raphael.anim.frame." + this.id, e) : eve.unbind("raphael.anim.frame." + this.id), this
    }, On.prototype.delay = function (e) {
        var t = new On(this.anim, this.ms);
        return t.times = this.times, t.del = +e || 0, t
    }, On.prototype.repeat = function (e) {
        var t = new On(this.anim, this.ms);
        return t.del = this.del, t.times = S.floor(x(e, 0)) || 1, t
    }, e.animation = function (t, n, r, i) {
        if (t instanceof On) return t;
        if (e.is(r, "function") || !r) i = i || r || null, r = null;
        t = Object(t), n = +n || 0;
        var s = {},
            u, a;
        for (a in t) t[o](a) && U(a) != a && U(a) + "%" != a && (u = !0, s[a] = t[a]);
        return u ? (r && (s.easing = r), i && (s.callback = i), new On({
            100: s
        }, n)) : new On(t, n)
    }, hn.animate = function (t, n, r, i) {
        var s = this;
        if (s.removed) return i && i.call(s), s;
        var o = t instanceof On ? t : e.animation(t, n, r, i);
        return Mn(o, s, o.percents[0], null, s.attr()), s
    }, hn.setTime = function (e, t) {
        return e && t != null && this.status(e, T(t, e.ms) / e.ms), this
    }, hn.status = function (e, t) {
        var n = [],
            r = 0,
            i, s;
        if (t != null) return Mn(e, this, -1, T(t, 1)), this;
        i = Nn.length;
        for (; r < i; r++) {
            s = Nn[r];
            if (s.el.id == this.id && (!e || s.anim == e)) {
                if (e) return s.status;
                n.push({
                    anim: s.anim,
                    status: s.status
                })
            }
        }
        return e ? 0 : n
    }, hn.pause = function (e) {
        for (var t = 0; t < Nn.length; t++) Nn[t].el.id == this.id && (!e || Nn[t].anim == e) && eve("raphael.anim.pause." + this.id, this, Nn[t].anim) !== !1 && (Nn[t].paused = !0);
        return this
    }, hn.resume = function (e) {
        for (var t = 0; t < Nn.length; t++)
            if (Nn[t].el.id == this.id && (!e || Nn[t].anim == e)) {
                var n = Nn[t];
                eve("raphael.anim.resume." + this.id, this, n.anim) !== !1 && (delete n.paused, this.status(n.anim, n.status))
            }
        return this
    }, hn.stop = function (e) {
        for (var t = 0; t < Nn.length; t++) Nn[t].el.id == this.id && (!e || Nn[t].anim == e) && eve("raphael.anim.stop." + this.id, this, Nn[t].anim) !== !1 && Nn.splice(t--, 1);
        return this
    }, eve.on("raphael.remove", _n), eve.on("raphael.clear", _n), hn.toString = function () {
        return "Raphaël’s object"
    };
    var Dn = function (e) {
            this.items = [], this.length = 0, this.type = "set";
            if (e)
                for (var t = 0, n = e.length; t < n; t++) e[t] && (e[t].constructor == hn.constructor || e[t].constructor == Dn) && (this[this.items.length] = this.items[this.items.length] = e[t], this.length++)
        },
        Pn = Dn.prototype;
    Pn.push = function () {
        var e, t;
        for (var n = 0, r = arguments.length; n < r; n++) e = arguments[n], e && (e.constructor == hn.constructor || e.constructor == Dn) && (t = this.items.length, this[t] = this.items[t] = e, this.length++);
        return this
    }, Pn.pop = function () {
        return this.length && delete this[this.length--], this.items.pop()
    }, Pn.forEach = function (e, t) {
        for (var n = 0, r = this.items.length; n < r; n++)
            if (e.call(t, this.items[n], n) === !1) return this;
        return this
    };
    for (var Hn in hn) hn[o](Hn) && (Pn[Hn] = function (e) {
        return function () {
            var t = arguments;
            return this.forEach(function (n) {
                n[e][h](n, t)
            })
        }
    }(Hn));
    Pn.attr = function (t, n) {
            if (t && e.is(t, O) && e.is(t[0], "object"))
                for (var r = 0, i = t.length; r < i; r++) this.items[r].attr(t[r]);
            else
                for (var s = 0, o = this.items.length; s < o; s++) this.items[s].attr(t, n);
            return this
        }, Pn.clear = function () {
            while (this.length) this.pop()
        }, Pn.splice = function (e, t, n) {
            e = e < 0 ? x(this.length + e, 0) : e, t = x(0, T(this.length - e, t));
            var r = [],
                i = [],
                s = [],
                o;
            for (o = 2; o < arguments.length; o++) s.push(arguments[o]);
            for (o = 0; o < t; o++) i.push(this[e + o]);
            for (; o < this.length - e; o++) r.push(this[e + o]);
            var u = s.length;
            for (o = 0; o < u + r.length; o++) this.items[e + o] = this[e + o] = o < u ? s[o] : r[o - u];
            o = this.items.length = this.length -= t - u;
            while (this[o]) delete this[o++];
            return new Dn(i)
        }, Pn.exclude = function (e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] == e) return this.splice(t, 1), !0
        }, Pn.animate = function (t, n, r, i) {
            (e.is(r, "function") || !r) && (i = r || null);
            var s = this.items.length,
                o = s,
                u, a = this,
                f;
            if (!s) return this;
            i && (f = function () {
                !--s && i.call(a)
            }), r = e.is(r, A) ? r : f;
            var l = e.animation(t, n, r, f);
            u = this.items[--o].animate(l);
            while (o--) this.items[o] && !this.items[o].removed && this.items[o].animateWith(u, l, l);
            return this
        }, Pn.insertAfter = function (e) {
            var t = this.items.length;
            while (t--) this.items[t].insertAfter(e);
            return this
        }, Pn.getBBox = function () {
            var e = [],
                t = [],
                n = [],
                r = [];
            for (var i = this.items.length; i--;)
                if (!this.items[i].removed) {
                    var s = this.items[i].getBBox();
                    e.push(s.x), t.push(s.y), n.push(s.x + s.width), r.push(s.y + s.height)
                }
            return e = T[h](0, e), t = T[h](0, t), n = x[h](0, n), r = x[h](0, r), {
                x: e,
                y: t,
                x2: n,
                y2: r,
                width: n - e,
                height: r - t
            }
        }, Pn.clone = function (e) {
            e = this.paper.set();
            for (var t = 0, n = this.items.length; t < n; t++) e.push(this.items[t].clone());
            return e
        }, Pn.toString = function () {
            return "Raphaël‘s set"
        }, Pn.glow = function (e) {
            var t = this.paper.set();
            return this.forEach(function (n, r) {
                var i = n.glow(e);
                i != null && i.forEach(function (e, n) {
                    t.push(e)
                })
            }), t
        }, e.registerFont = function (e) {
            if (!e.face) return e;
            this.fonts = this.fonts || {};
            var t = {
                    w: e.w,
                    face: {},
                    glyphs: {}
                },
                n = e.face["font-family"];
            for (var r in e.face) e.face[o](r) && (t.face[r] = e.face[r]);
            this.fonts[n] ? this.fonts[n].push(t) : this.fonts[n] = [t];
            if (!e.svg) {
                t.face["units-per-em"] = z(e.face["units-per-em"], 10);
                for (var i in e.glyphs)
                    if (e.glyphs[o](i)) {
                        var s = e.glyphs[i];
                        t.glyphs[i] = {
                            w: s.w,
                            k: {},
                            d: s.d && "M" + s.d.replace(/[mlcxtrv]/g, function (e) {
                                return {
                                    l: "L",
                                    c: "C",
                                    x: "z",
                                    t: "m",
                                    r: "l",
                                    v: "c"
                                }[e] || "M"
                            }) + "z"
                        };
                        if (s.k)
                            for (var u in s.k) s[o](u) && (t.glyphs[i].k[u] = s.k[u])
                    }
            }
            return e
        }, l.getFont = function (t, n, r, i) {
            i = i || "normal", r = r || "normal", n = +n || {
                normal: 400,
                bold: 700,
                lighter: 300,
                bolder: 800
            }[n] || 400;
            if (!e.fonts) return;
            var s = e.fonts[t];
            if (!s) {
                var u = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, v) + "(\\s|$)", "i");
                for (var a in e.fonts)
                    if (e.fonts[o](a) && u.test(a)) {
                        s = e.fonts[a];
                        break
                    }
            }
            var f;
            if (s)
                for (var l = 0, c = s.length; l < c; l++) {
                    f = s[l];
                    if (f.face["font-weight"] == n && (f.face["font-style"] == r || !f.face["font-style"]) && f.face["font-stretch"] == i) break
                }
            return f
        }, l.print = function (t, r, i, s, o, u, a) {
            u = u || "middle", a = x(T(a || 0, 1), -1);
            var f = g(i)[y](v),
                l = 0,
                c = 0,
                h = v,
                p;
            e.is(s, i) && (s = this.getFont(s));
            if (s) {
                p = (o || 16) / s.face["units-per-em"];
                var d = s.face.bbox[y](n),
                    m = +d[0],
                    b = d[3] - d[1],
                    w = 0,
                    E = +d[1] + (u == "baseline" ? b + +s.face.descent : b / 2);
                for (var S = 0, N = f.length; S < N; S++) {
                    if (f[S] == "\n") l = 0, k = 0, c = 0, w += b;
                    else {
                        var C = c && s.glyphs[f[S - 1]] || {},
                            k = s.glyphs[f[S]];
                        l += c ? (C.w || s.w) + (C.k && C.k[f[S]] || 0) + s.w * a : 0, c = 1
                    }
                    k && k.d && (h += e.transformPath(k.d, ["t", l * p, w * p, "s", p, p, m, E, "t", (t - m) / p, (r - E) / p]))
                }
            }
            return this.path(h).attr({
                fill: "#000",
                stroke: "none"
            })
        }, l.add = function (t) {
            if (e.is(t, "array")) {
                var n = this.set(),
                    i = 0,
                    s = t.length,
                    u;
                for (; i < s; i++) u = t[i] || {}, r[o](u.type) && n.push(this[u.type]().attr(u))
            }
            return n
        }, e.format = function (t, n) {
            var r = e.is(n, O) ? [0][p](n) : arguments;
            return t && e.is(t, A) && r.length - 1 && (t = t.replace(i, function (e, t) {
                return r[++t] == null ? v : r[t]
            })), t || v
        }, e.fullfill = function () {
            var e = /\{([^\}]+)\}/g,
                t = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                n = function (e, n, r) {
                    var i = r;
                    return n.replace(t, function (e, t, n, r, s) {
                        t = t || r, i && (t in i && (i = i[t]), typeof i == "function" && s && (i = i()))
                    }), i = (i == null || i == r ? e : i) + "", i
                };
            return function (t, r) {
                return String(t).replace(e, function (e, t) {
                    return n(e, t, r)
                })
            }
        }(), e.ninja = function () {
            return a.was ? u.win.Raphael = a.is : delete Raphael, e
        }, e.st = Pn,
        function (t, n, r) {
            function i() {
                /in/.test(t.readyState) ? setTimeout(i, 9) : e.eve("raphael.DOMload")
            }
            t.readyState == null && t.addEventListener && (t.addEventListener(n, r = function () {
                t.removeEventListener(n, r, !1), t.readyState = "complete"
            }, !1), t.readyState = "loading"), i()
        }(document, "DOMContentLoaded"), a.was ? u.win.Raphael = e : Raphael = e, eve.on("raphael.DOMload", function () {
            t = !0
        })
}(), window.Raphael && window.Raphael.svg && function (e) {
        var t = "hasOwnProperty",
            n = String,
            r = parseFloat,
            i = parseInt,
            s = Math,
            o = s.max,
            u = s.abs,
            a = s.pow,
            f = /[, ]+/,
            l = e.eve,
            c = "",
            h = " ",
            p = "http://www.w3.org/1999/xlink",
            d = {
                block: "M5,0 0,2.5 5,5z",
                classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                open: "M6,1 1,3.5 6,6",
                oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
            },
            v = {};
        e.toString = function () {
            return "Your browser supports SVG.\nYou are running Raphaël " + this.version
        };
        var m = function (r, i) {
                if (i) {
                    typeof r == "string" && (r = m(r));
                    for (var s in i) i[t](s) && (s.substring(0, 6) == "xlink:" ? r.setAttributeNS(p, s.substring(6), n(i[s])) : r.setAttribute(s, n(i[s])))
                } else r = e._g.doc.createElementNS("http://www.w3.org/2000/svg", r), r.style && (r.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                return r
            },
            g = function (t, i) {
                var f = "linear",
                    l = t.id + i,
                    h = .5,
                    p = .5,
                    d = t.node,
                    v = t.paper,
                    g = d.style,
                    y = e._g.doc.getElementById(l);
                if (!y) {
                    i = n(i).replace(e._radial_gradient, function (e, t, n) {
                        f = "radial";
                        if (t && n) {
                            h = r(t), p = r(n);
                            var i = (p > .5) * 2 - 1;
                            a(h - .5, 2) + a(p - .5, 2) > .25 && (p = s.sqrt(.25 - a(h - .5, 2)) * i + .5) && p != .5 && (p = p.toFixed(5) - 1e-5 * i)
                        }
                        return c
                    }), i = i.split(/\s*\-\s*/);
                    if (f == "linear") {
                        var b = i.shift();
                        b = -r(b);
                        if (isNaN(b)) return null;
                        var w = [0, 0, s.cos(e.rad(b)), s.sin(e.rad(b))],
                            E = 1 / (o(u(w[2]), u(w[3])) || 1);
                        w[2] *= E, w[3] *= E, w[2] < 0 && (w[0] = -w[2], w[2] = 0), w[3] < 0 && (w[1] = -w[3], w[3] = 0)
                    }
                    var S = e._parseDots(i);
                    if (!S) return null;
                    l = l.replace(/[\(\)\s,\xb0#]/g, "_"), t.gradient && l != t.gradient.id && (v.defs.removeChild(t.gradient), delete t.gradient);
                    if (!t.gradient) {
                        y = m(f + "Gradient", {
                            id: l
                        }), t.gradient = y, m(y, f == "radial" ? {
                            fx: h,
                            fy: p
                        } : {
                            x1: w[0],
                            y1: w[1],
                            x2: w[2],
                            y2: w[3],
                            gradientTransform: t.matrix.invert()
                        }), v.defs.appendChild(y);
                        for (var x = 0, T = S.length; x < T; x++) y.appendChild(m("stop", {
                            offset: S[x].offset ? S[x].offset : x ? "100%" : "0%",
                            "stop-color": S[x].color || "#fff"
                        }))
                    }
                }
                return m(d, {
                    fill: "url(#" + l + ")",
                    opacity: 1,
                    "fill-opacity": 1
                }), g.fill = c, g.opacity = 1, g.fillOpacity = 1, 1
            },
            y = function (e) {
                var t = e.getBBox(1);
                m(e.pattern, {
                    patternTransform: e.matrix.invert() + " translate(" + t.x + "," + t.y + ")"
                })
            },
            b = function (r, i, s) {
                if (r.type == "path") {
                    var o = n(i).toLowerCase().split("-"),
                        u = r.paper,
                        a = s ? "end" : "start",
                        f = r.node,
                        l = r.attrs,
                        h = l["stroke-width"],
                        p = o.length,
                        g = "classic",
                        y, b, w, E, S, x = 3,
                        T = 3,
                        N = 5;
                    while (p--) switch (o[p]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                        g = o[p];
                        break;
                    case "wide":
                        T = 5;
                        break;
                    case "narrow":
                        T = 2;
                        break;
                    case "long":
                        x = 5;
                        break;
                    case "short":
                        x = 2
                    }
                    g == "open" ? (x += 2, T += 2, N += 2, w = 1, E = s ? 4 : 1, S = {
                        fill: "none",
                        stroke: l.stroke
                    }) : (E = w = x / 2, S = {
                        fill: l.stroke,
                        stroke: "none"
                    }), r._.arrows ? s ? (r._.arrows.endPath && v[r._.arrows.endPath]--, r._.arrows.endMarker && v[r._.arrows.endMarker]--) : (r._.arrows.startPath && v[r._.arrows.startPath]--, r._.arrows.startMarker && v[r._.arrows.startMarker]--) : r._.arrows = {};
                    if (g != "none") {
                        var C = "raphael-marker-" + g,
                            k = "raphael-marker-" + a + g + x + T;
                        e._g.doc.getElementById(C) ? v[C]++ : (u.defs.appendChild(m(m("path"), {
                            "stroke-linecap": "round",
                            d: d[g],
                            id: C
                        })), v[C] = 1);
                        var L = e._g.doc.getElementById(k),
                            A;
                        L ? (v[k]++, A = L.getElementsByTagName("use")[0]) : (L = m(m("marker"), {
                            id: k,
                            markerHeight: T,
                            markerWidth: x,
                            orient: "auto",
                            refX: E,
                            refY: T / 2
                        }), A = m(m("use"), {
                            "xlink:href": "#" + C,
                            transform: (s ? "rotate(180 " + x / 2 + " " + T / 2 + ") " : c) + "scale(" + x / N + "," + T / N + ")",
                            "stroke-width": (1 / ((x / N + T / N) / 2)).toFixed(4)
                        }), L.appendChild(A), u.defs.appendChild(L), v[k] = 1), m(A, S);
                        var O = w * (g != "diamond" && g != "oval");
                        s ? (y = r._.arrows.startdx * h || 0, b = e.getTotalLength(l.path) - O * h) : (y = O * h, b = e.getTotalLength(l.path) - (r._.arrows.enddx * h || 0)), S = {}, S["marker-" + a] = "url(#" + k + ")";
                        if (b || y) S.d = Raphael.getSubpath(l.path, y, b);
                        m(f, S), r._.arrows[a + "Path"] = C, r._.arrows[a + "Marker"] = k, r._.arrows[a + "dx"] = O, r._.arrows[a + "Type"] = g, r._.arrows[a + "String"] = i
                    } else s ? (y = r._.arrows.startdx * h || 0, b = e.getTotalLength(l.path) - y) : (y = 0, b = e.getTotalLength(l.path) - (r._.arrows.enddx * h || 0)), r._.arrows[a + "Path"] && m(f, {
                        d: Raphael.getSubpath(l.path, y, b)
                    }), delete r._.arrows[a + "Path"], delete r._.arrows[a + "Marker"], delete r._.arrows[a + "dx"], delete r._.arrows[a + "Type"], delete r._.arrows[a + "String"];
                    for (S in v)
                        if (v[t](S) && !v[S]) {
                            var M = e._g.doc.getElementById(S);
                            M && M.parentNode.removeChild(M)
                        }
                }
            },
            w = {
                "": [0],
                none: [0],
                "-": [3, 1],
                ".": [1, 1],
                "-.": [3, 1, 1, 1],
                "-..": [3, 1, 1, 1, 1, 1],
                ". ": [1, 3],
                "- ": [4, 3],
                "--": [8, 3],
                "- .": [4, 3, 1, 3],
                "--.": [8, 3, 1, 3],
                "--..": [8, 3, 1, 3, 1, 3]
            },
            E = function (e, t, r) {
                t = w[n(t).toLowerCase()];
                if (t) {
                    var i = e.attrs["stroke-width"] || "1",
                        s = {
                            round: i,
                            square: i,
                            butt: 0
                        }[e.attrs["stroke-linecap"] || r["stroke-linecap"]] || 0,
                        o = [],
                        u = t.length;
                    while (u--) o[u] = t[u] * i + (u % 2 ? 1 : -1) * s;
                    m(e.node, {
                        "stroke-dasharray": o.join(",")
                    })
                }
            },
            S = function (r, s) {
                var a = r.node,
                    l = r.attrs,
                    h = a.style.visibility;
                a.style.visibility = "hidden";
                for (var d in s)
                    if (s[t](d)) {
                        if (!e._availableAttrs[t](d)) continue;
                        var v = s[d];
                        l[d] = v;
                        switch (d) {
                        case "blur":
                            r.blur(v);
                            break;
                        case "href":
                        case "title":
                        case "target":
                            var w = a.parentNode;
                            if (w.tagName.toLowerCase() != "a") {
                                var S = m("a");
                                w.insertBefore(S, a), S.appendChild(a), w = S
                            }
                            d == "target" ? w.setAttributeNS(p, "show", v == "blank" ? "new" : v) : w.setAttributeNS(p, d, v);
                            break;
                        case "cursor":
                            a.style.cursor = v;
                            break;
                        case "transform":
                            r.transform(v);
                            break;
                        case "arrow-start":
                            b(r, v);
                            break;
                        case "arrow-end":
                            b(r, v, 1);
                            break;
                        case "clip-rect":
                            var x = n(v).split(f);
                            if (x.length == 4) {
                                r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);
                                var N = m("clipPath"),
                                    C = m("rect");
                                N.id = e.createUUID(), m(C, {
                                    x: x[0],
                                    y: x[1],
                                    width: x[2],
                                    height: x[3]
                                }), N.appendChild(C), r.paper.defs.appendChild(N), m(a, {
                                    "clip-path": "url(#" + N.id + ")"
                                }), r.clip = C
                            }
                            if (!v) {
                                var k = a.getAttribute("clip-path");
                                if (k) {
                                    var L = e._g.doc.getElementById(k.replace(/(^url\(#|\)$)/g, c));
                                    L && L.parentNode.removeChild(L), m(a, {
                                        "clip-path": c
                                    }), delete r.clip
                                }
                            }
                            break;
                        case "path":
                            r.type == "path" && (m(a, {
                                d: v ? l.path = e._pathToAbsolute(v) : "M0,0"
                            }), r._.dirty = 1, r._.arrows && ("startString" in r._.arrows && b(r, r._.arrows.startString), "endString" in r._.arrows && b(r, r._.arrows.endString, 1)));
                            break;
                        case "width":
                            a.setAttribute(d, v), r._.dirty = 1;
                            if (!l.fx) break;
                            d = "x", v = l.x;
                        case "x":
                            l.fx && (v = -l.x - (l.width || 0));
                        case "rx":
                            if (d == "rx" && r.type == "rect") break;
                        case "cx":
                            a.setAttribute(d, v), r.pattern && y(r), r._.dirty = 1;
                            break;
                        case "height":
                            a.setAttribute(d, v), r._.dirty = 1;
                            if (!l.fy) break;
                            d = "y", v = l.y;
                        case "y":
                            l.fy && (v = -l.y - (l.height || 0));
                        case "ry":
                            if (d == "ry" && r.type == "rect") break;
                        case "cy":
                            a.setAttribute(d, v), r.pattern && y(r), r._.dirty = 1;
                            break;
                        case "r":
                            r.type == "rect" ? m(a, {
                                rx: v,
                                ry: v
                            }) : a.setAttribute(d, v), r._.dirty = 1;
                            break;
                        case "src":
                            r.type == "image" && a.setAttributeNS(p, "href", v);
                            break;
                        case "stroke-width":
                            if (r._.sx != 1 || r._.sy != 1) v /= o(u(r._.sx), u(r._.sy)) || 1;
                            r.paper._vbSize && (v *= r.paper._vbSize), a.setAttribute(d, v), l["stroke-dasharray"] && E(r, l["stroke-dasharray"], s), r._.arrows && ("startString" in r._.arrows && b(r, r._.arrows.startString), "endString" in r._.arrows && b(r, r._.arrows.endString, 1));
                            break;
                        case "stroke-dasharray":
                            E(r, v, s);
                            break;
                        case "fill":
                            var A = n(v).match(e._ISURL);
                            if (A) {
                                N = m("pattern");
                                var O = m("image");
                                N.id = e.createUUID(), m(N, {
                                        x: 0,
                                        y: 0,
                                        patternUnits: "userSpaceOnUse",
                                        height: 1,
                                        width: 1
                                    }), m(O, {
                                        x: 0,
                                        y: 0,
                                        "xlink:href": A[1]
                                    }), N.appendChild(O),
                                    function (t) {
                                        e._preload(A[1], function () {
                                            var e = this.offsetWidth,
                                                n = this.offsetHeight;
                                            m(t, {
                                                width: e,
                                                height: n
                                            }), m(O, {
                                                width: e,
                                                height: n
                                            }), r.paper.safari()
                                        })
                                    }(N), r.paper.defs.appendChild(N), m(a, {
                                        fill: "url(#" + N.id + ")"
                                    }), r.pattern = N, r.pattern && y(r);
                                break
                            }
                            var M = e.getRGB(v);
                            if (!M.error) delete s.gradient, delete l.gradient, !e.is(l.opacity, "undefined") && e.is(s.opacity, "undefined") && m(a, {
                                opacity: l.opacity
                            }), !e.is(l["fill-opacity"], "undefined") && e.is(s["fill-opacity"], "undefined") && m(a, {
                                "fill-opacity": l["fill-opacity"]
                            });
                            else if ((r.type == "circle" || r.type == "ellipse" || n(v).charAt() != "r") && g(r, v)) {
                                if ("opacity" in l || "fill-opacity" in l) {
                                    var _ = e._g.doc.getElementById(a.getAttribute("fill").replace(/^url\(#|\)$/g, c));
                                    if (_) {
                                        var D = _.getElementsByTagName("stop");
                                        m(D[D.length - 1], {
                                            "stop-opacity": ("opacity" in l ? l.opacity : 1) * ("fill-opacity" in l ? l["fill-opacity"] : 1)
                                        })
                                    }
                                }
                                l.gradient = v, l.fill = "none";
                                break
                            }
                            M[t]("opacity") && m(a, {
                                "fill-opacity": M.opacity > 1 ? M.opacity / 100 : M.opacity
                            });
                        case "stroke":
                            M = e.getRGB(v), a.setAttribute(d, M.hex), d == "stroke" && M[t]("opacity") && m(a, {
                                "stroke-opacity": M.opacity > 1 ? M.opacity / 100 : M.opacity
                            }), d == "stroke" && r._.arrows && ("startString" in r._.arrows && b(r, r._.arrows.startString), "endString" in r._.arrows && b(r, r._.arrows.endString, 1));
                            break;
                        case "gradient":
                            (r.type == "circle" || r.type == "ellipse" || n(v).charAt() != "r") && g(r, v);
                            break;
                        case "opacity":
                            l.gradient && !l[t]("stroke-opacity") && m(a, {
                                "stroke-opacity": v > 1 ? v / 100 : v
                            });
                        case "fill-opacity":
                            if (l.gradient) {
                                _ = e._g.doc.getElementById(a.getAttribute("fill").replace(/^url\(#|\)$/g, c)), _ && (D = _.getElementsByTagName("stop"), m(D[D.length - 1], {
                                    "stop-opacity": v
                                }));
                                break
                            };
                        default:
                            d == "font-size" && (v = i(v, 10) + "px");
                            var P = d.replace(/(\-.)/g, function (e) {
                                return e.substring(1).toUpperCase()
                            });
                            a.style[P] = v, r._.dirty = 1, a.setAttribute(d, v)
                        }
                    }
                T(r, s), a.style.visibility = h
            },
            x = 1.2,
            T = function (r, s) {
                if (r.type != "text" || !(s[t]("text") || s[t]("font") || s[t]("font-size") || s[t]("x") || s[t]("y"))) return;
                var o = r.attrs,
                    u = r.node,
                    a = u.firstChild ? i(e._g.doc.defaultView.getComputedStyle(u.firstChild, c).getPropertyValue("font-size"), 10) : 10;
                if (s[t]("text")) {
                    o.text = s.text;
                    while (u.firstChild) u.removeChild(u.firstChild);
                    var f = n(s.text).split("\n"),
                        l = [],
                        h;
                    for (var p = 0, d = f.length; p < d; p++) h = m("tspan"), p && m(h, {
                        dy: a * x,
                        x: o.x
                    }), h.appendChild(e._g.doc.createTextNode(f[p])), u.appendChild(h), l[p] = h
                } else {
                    l = u.getElementsByTagName("tspan");
                    for (p = 0, d = l.length; p < d; p++) p ? m(l[p], {
                        dy: a * x,
                        x: o.x
                    }) : m(l[0], {
                        dy: 0
                    })
                }
                m(u, {
                    x: o.x,
                    y: o.y
                }), r._.dirty = 1;
                var v = r._getBBox(),
                    g = o.y - (v.y + v.height / 2);
                g && e.is(g, "finite") && m(l[0], {
                    dy: g
                })
            },
            N = function (t, n) {
                var r = 0,
                    i = 0;
                this[0] = this.node = t, t.raphael = !0, this.id = e._oid++, t.raphaelid = this.id, this.matrix = e.matrix(), this.realPath = null, this.paper = n, this.attrs = this.attrs || {}, this._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    deg: 0,
                    dx: 0,
                    dy: 0,
                    dirty: 1
                }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null
            },
            C = e.el;
        N.prototype = C, C.constructor = N, e._engine.path = function (e, t) {
            var n = m("path");
            t.canvas && t.canvas.appendChild(n);
            var r = new N(n, t);
            return r.type = "path", S(r, {
                fill: "none",
                stroke: "#000",
                path: e
            }), r
        }, C.rotate = function (e, t, i) {
            if (this.removed) return this;
            e = n(e).split(f), e.length - 1 && (t = r(e[1]), i = r(e[2])), e = r(e[0]), i == null && (t = i);
            if (t == null || i == null) {
                var s = this.getBBox(1);
                t = s.x + s.width / 2, i = s.y + s.height / 2
            }
            return this.transform(this._.transform.concat([["r", e, t, i]])), this
        }, C.scale = function (e, t, i, s) {
            if (this.removed) return this;
            e = n(e).split(f), e.length - 1 && (t = r(e[1]), i = r(e[2]), s = r(e[3])), e = r(e[0]), t == null && (t = e), s == null && (i = s);
            if (i == null || s == null) var o = this.getBBox(1);
            return i = i == null ? o.x + o.width / 2 : i, s = s == null ? o.y + o.height / 2 : s, this.transform(this._.transform.concat([["s", e, t, i, s]])), this
        }, C.translate = function (e, t) {
            return this.removed ? this : (e = n(e).split(f), e.length - 1 && (t = r(e[1])), e = r(e[0]) || 0, t = +t || 0, this.transform(this._.transform.concat([["t", e, t]])), this)
        }, C.transform = function (n) {
            var r = this._;
            if (n == null) return r.transform;
            e._extractTransform(this, n), this.clip && m(this.clip, {
                transform: this.matrix.invert()
            }), this.pattern && y(this), this.node && m(this.node, {
                transform: this.matrix
            });
            if (r.sx != 1 || r.sy != 1) {
                var i = this.attrs[t]("stroke-width") ? this.attrs["stroke-width"] : 1;
                this.attr({
                    "stroke-width": i
                })
            }
            return this
        }, C.hide = function () {
            return !this.removed && this.paper.safari(this.node.style.display = "none"), this
        }, C.show = function () {
            return !this.removed && this.paper.safari(this.node.style.display = ""), this
        }, C.remove = function () {
            if (this.removed || !this.node.parentNode) return;
            var t = this.paper;
            t.__set__ && t.__set__.exclude(this), l.unbind("raphael.*.*." + this.id), this.gradient && t.defs.removeChild(this.gradient), e._tear(this, t), this.node.parentNode.tagName.toLowerCase() == "a" ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
            for (var n in this) this[n] = typeof this[n] == "function" ? e._removedFactory(n) : null;
            this.removed = !0
        }, C._getBBox = function () {
            if (this.node.style.display == "none") {
                this.show();
                var e = !0
            }
            var t = {};
            try {
                t = this.node.getBBox()
            } catch (n) {} finally {
                t = t || {}
            }
            return e && this.hide(), t
        }, C.attr = function (n, r) {
            if (this.removed) return this;
            if (n == null) {
                var i = {};
                for (var s in this.attrs) this.attrs[t](s) && (i[s] = this.attrs[s]);
                return i.gradient && i.fill == "none" && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
            }
            if (r == null && e.is(n, "string")) {
                if (n == "fill" && this.attrs.fill == "none" && this.attrs.gradient) return this.attrs.gradient;
                if (n == "transform") return this._.transform;
                var o = n.split(f),
                    u = {};
                for (var a = 0, c = o.length; a < c; a++) n = o[a], n in this.attrs ? u[n] = this.attrs[n] : e.is(this.paper.customAttributes[n], "function") ? u[n] = this.paper.customAttributes[n].def : u[n] = e._availableAttrs[n];
                return c - 1 ? u : u[o[0]]
            }
            if (r == null && e.is(n, "array")) {
                u = {};
                for (a = 0, c = n.length; a < c; a++) u[n[a]] = this.attr(n[a]);
                return u
            }
            if (r != null) {
                var h = {};
                h[n] = r
            } else n != null && e.is(n, "object") && (h = n);
            for (var p in h) l("raphael.attr." + p + "." + this.id, this, h[p]);
            for (p in this.paper.customAttributes)
                if (this.paper.customAttributes[t](p) && h[t](p) && e.is(this.paper.customAttributes[p], "function")) {
                    var d = this.paper.customAttributes[p].apply(this, [].concat(h[p]));
                    this.attrs[p] = h[p];
                    for (var v in d) d[t](v) && (h[v] = d[v])
                }
            return S(this, h), this
        }, C.toFront = function () {
            if (this.removed) return this;
            this.node.parentNode.tagName.toLowerCase() == "a" ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
            var t = this.paper;
            return t.top != this && e._tofront(this, t), this
        }, C.toBack = function () {
            if (this.removed) return this;
            var t = this.node.parentNode;
            t.tagName.toLowerCase() == "a" ? t.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : t.firstChild != this.node && t.insertBefore(this.node, this.node.parentNode.firstChild), e._toback(this, this.paper);
            var n = this.paper;
            return this
        }, C.insertAfter = function (t) {
            if (this.removed) return this;
            var n = t.node || t[t.length - 1].node;
            return n.nextSibling ? n.parentNode.insertBefore(this.node, n.nextSibling) : n.parentNode.appendChild(this.node), e._insertafter(this, t, this.paper), this
        }, C.insertBefore = function (t) {
            if (this.removed) return this;
            var n = t.node || t[0].node;
            return n.parentNode.insertBefore(this.node, n), e._insertbefore(this, t, this.paper), this
        }, C.blur = function (t) {
            var n = this;
            if (+t !== 0) {
                var r = m("filter"),
                    i = m("feGaussianBlur");
                n.attrs.blur = t, r.id = e.createUUID(), m(i, {
                    stdDeviation: +t || 1.5
                }), r.appendChild(i), n.paper.defs.appendChild(r), n._blur = r, m(n.node, {
                    filter: "url(#" + r.id + ")"
                })
            } else n._blur && (n._blur.parentNode.removeChild(n._blur), delete n._blur, delete n.attrs.blur), n.node.removeAttribute("filter")
        }, e._engine.circle = function (e, t, n, r) {
            var i = m("circle");
            e.canvas && e.canvas.appendChild(i);
            var s = new N(i, e);
            return s.attrs = {
                cx: t,
                cy: n,
                r: r,
                fill: "none",
                stroke: "#000"
            }, s.type = "circle", m(i, s.attrs), s
        }, e._engine.rect = function (e, t, n, r, i, s) {
            var o = m("rect");
            e.canvas && e.canvas.appendChild(o);
            var u = new N(o, e);
            return u.attrs = {
                x: t,
                y: n,
                width: r,
                height: i,
                r: s || 0,
                rx: s || 0,
                ry: s || 0,
                fill: "none",
                stroke: "#000"
            }, u.type = "rect", m(o, u.attrs), u
        }, e._engine.ellipse = function (e, t, n, r, i) {
            var s = m("ellipse");
            e.canvas && e.canvas.appendChild(s);
            var o = new N(s, e);
            return o.attrs = {
                cx: t,
                cy: n,
                rx: r,
                ry: i,
                fill: "none",
                stroke: "#000"
            }, o.type = "ellipse", m(s, o.attrs), o
        }, e._engine.image = function (e, t, n, r, i, s) {
            var o = m("image");
            m(o, {
                x: n,
                y: r,
                width: i,
                height: s,
                preserveAspectRatio: "none"
            }), o.setAttributeNS(p, "href", t), e.canvas && e.canvas.appendChild(o);
            var u = new N(o, e);
            return u.attrs = {
                x: n,
                y: r,
                width: i,
                height: s,
                src: t
            }, u.type = "image", u
        }, e._engine.text = function (t, n, r, i) {
            var s = m("text");
            t.canvas && t.canvas.appendChild(s);
            var o = new N(s, t);
            return o.attrs = {
                x: n,
                y: r,
                "text-anchor": "middle",
                text: i,
                font: e._availableAttrs.font,
                stroke: "none",
                fill: "#000"
            }, o.type = "text", S(o, o.attrs), o
        }, e._engine.setSize = function (e, t) {
            return this.width = e || this.width, this.height = t || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
        }, e._engine.create = function () {
            var t = e._getContainer.apply(0, arguments),
                n = t && t.container,
                r = t.x,
                i = t.y,
                s = t.width,
                o = t.height;
            if (!n) throw new Error("SVG container not found.");
            var u = m("svg"),
                a = "overflow:hidden;",
                f;
            return r = r || 0, i = i || 0, s = s || 512, o = o || 342, m(u, {
                height: o,
                version: 1.1,
                width: s,
                xmlns: "http://www.w3.org/2000/svg"
            }), n == 1 ? (u.style.cssText = a + "position:absolute;left:" + r + "px;top:" + i + "px", e._g.doc.body.appendChild(u), f = 1) : (u.style.cssText = a + "position:relative", n.firstChild ? n.insertBefore(u, n.firstChild) : n.appendChild(u)), n = new e._Paper, n.width = s, n.height = o, n.canvas = u, n.clear(), n._left = n._top = 0, f && (n.renderfix = function () {}), n.renderfix(), n
        }, e._engine.setViewBox = function (e, t, n, r, i) {
            l("raphael.setViewBox", this, this._viewBox, [e, t, n, r, i]);
            var s = o(n / this.width, r / this.height),
                u = this.top,
                a = i ? "meet" : "xMinYMin",
                f, c;
            e == null ? (this._vbSize && (s = 1), delete this._vbSize, f = "0 0 " + this.width + h + this.height) : (this._vbSize = s, f = e + h + t + h + n + h + r), m(this.canvas, {
                viewBox: f,
                preserveAspectRatio: a
            });
            while (s && u) c = "stroke-width" in u.attrs ? u.attrs["stroke-width"] : 1, u.attr({
                "stroke-width": c
            }), u._.dirty = 1, u._.dirtyT = 1, u = u.prev;
            return this._viewBox = [e, t, n, r, !!i], this
        }, e.prototype.renderfix = function () {
            var e = this.canvas,
                t = e.style,
                n;
            try {
                n = e.getScreenCTM() || e.createSVGMatrix()
            } catch (r) {
                n = e.createSVGMatrix()
            }
            var i = -n.e % 1,
                s = -n.f % 1;
            if (i || s) i && (this._left = (this._left + i) % 1, t.left = this._left + "px"), s && (this._top = (this._top + s) % 1, t.top = this._top + "px")
        }, e.prototype.clear = function () {
            e.eve("raphael.clear", this);
            var t = this.canvas;
            while (t.firstChild) t.removeChild(t.firstChild);
            this.bottom = this.top = null, (this.desc = m("desc")).appendChild(e._g.doc.createTextNode("Created with Raphaël " + e.version)), t.appendChild(this.desc), t.appendChild(this.defs = m("defs"))
        }, e.prototype.remove = function () {
            l("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
            for (var t in this) this[t] = typeof this[t] == "function" ? e._removedFactory(t) : null
        };
        var k = e.st;
        for (var L in C) C[t](L) && !k[t](L) && (k[L] = function (e) {
            return function () {
                var t = arguments;
                return this.forEach(function (n) {
                    n[e].apply(n, t)
                })
            }
        }(L))
    }(window.Raphael), window.Raphael && window.Raphael.vml && function (e) {
        var t = "hasOwnProperty",
            n = String,
            r = parseFloat,
            i = Math,
            s = i.round,
            o = i.max,
            u = i.min,
            a = i.abs,
            f = "fill",
            l = /[, ]+/,
            c = e.eve,
            h = " progid:DXImageTransform.Microsoft",
            p = " ",
            d = "",
            v = {
                M: "m",
                L: "l",
                C: "c",
                Z: "x",
                m: "t",
                l: "r",
                c: "v",
                z: "x"
            },
            m = /([clmz]),?([^clmz]*)/gi,
            g = / progid:\S+Blur\([^\)]+\)/g,
            y = /-?[^,\s-]+/g,
            b = "position:absolute;left:0;top:0;width:1px;height:1px",
            w = 21600,
            E = {
                path: 1,
                rect: 1,
                image: 1
            },
            S = {
                circle: 1,
                ellipse: 1
            },
            x = function (t) {
                var r = /[ahqstv]/ig,
                    i = e._pathToAbsolute;
                n(t).match(r) && (i = e._path2curve), r = /[clmz]/g;
                if (i == e._pathToAbsolute && !n(t).match(r)) {
                    var o = n(t).replace(m, function (e, t, n) {
                        var r = [],
                            i = t.toLowerCase() == "m",
                            o = v[t];
                        return n.replace(y, function (e) {
                            i && r.length == 2 && (o += r + v[t == "m" ? "l" : "L"], r = []), r.push(s(e * w))
                        }), o + r
                    });
                    return o
                }
                var u = i(t),
                    a, f;
                o = [];
                for (var l = 0, c = u.length; l < c; l++) {
                    a = u[l], f = u[l][0].toLowerCase(), f == "z" && (f = "x");
                    for (var h = 1, g = a.length; h < g; h++) f += s(a[h] * w) + (h != g - 1 ? "," : d);
                    o.push(f)
                }
                return o.join(p)
            },
            T = function (t, n, r) {
                var i = e.matrix();
                return i.rotate(-t, .5, .5), {
                    dx: i.x(n, r),
                    dy: i.y(n, r)
                }
            },
            N = function (e, t, n, r, i, s) {
                var o = e._,
                    u = e.matrix,
                    l = o.fillpos,
                    c = e.node,
                    h = c.style,
                    d = 1,
                    v = "",
                    m, g = w / t,
                    y = w / n;
                h.visibility = "hidden";
                if (!t || !n) return;
                c.coordsize = a(g) + p + a(y), h.rotation = s * (t * n < 0 ? -1 : 1);
                if (s) {
                    var b = T(s, r, i);
                    r = b.dx, i = b.dy
                }
                t < 0 && (v += "x"), n < 0 && (v += " y") && (d = -1), h.flip = v, c.coordorigin = r * -g + p + i * -y;
                if (l || o.fillsize) {
                    var E = c.getElementsByTagName(f);
                    E = E && E[0], c.removeChild(E), l && (b = T(s, u.x(l[0], l[1]), u.y(l[0], l[1])), E.position = b.dx * d + p + b.dy * d), o.fillsize && (E.size = o.fillsize[0] * a(t) + p + o.fillsize[1] * a(n)), c.appendChild(E)
                }
                h.visibility = "visible"
            };
        e.toString = function () {
            return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
        };
        var C = function (e, t, r) {
                var i = n(t).toLowerCase().split("-"),
                    s = r ? "end" : "start",
                    o = i.length,
                    u = "classic",
                    a = "medium",
                    f = "medium";
                while (o--) switch (i[o]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                    u = i[o];
                    break;
                case "wide":
                case "narrow":
                    f = i[o];
                    break;
                case "long":
                case "short":
                    a = i[o]
                }
                var l = e.node.getElementsByTagName("stroke")[0];
                l[s + "arrow"] = u, l[s + "arrowlength"] = a, l[s + "arrowwidth"] = f
            },
            k = function (i, a) {
                i.attrs = i.attrs || {};
                var c = i.node,
                    h = i.attrs,
                    v = c.style,
                    m, g = E[i.type] && (a.x != h.x || a.y != h.y || a.width != h.width || a.height != h.height || a.cx != h.cx || a.cy != h.cy || a.rx != h.rx || a.ry != h.ry || a.r != h.r),
                    y = S[i.type] && (h.cx != a.cx || h.cy != a.cy || h.r != a.r || h.rx != a.rx || h.ry != a.ry),
                    b = i;
                for (var T in a) a[t](T) && (h[T] = a[T]);
                g && (h.path = e._getPath[i.type](i), i._.dirty = 1), a.href && (c.href = a.href), a.title && (c.title = a.title), a.target && (c.target = a.target), a.cursor && (v.cursor = a.cursor), "blur" in a && i.blur(a.blur);
                if (a.path && i.type == "path" || g) c.path = x(~n(h.path).toLowerCase().indexOf("r") ? e._pathToAbsolute(h.path) : h.path), i.type == "image" && (i._.fillpos = [h.x, h.y], i._.fillsize = [h.width, h.height], N(i, 1, 1, 0, 0, 0));
                "transform" in a && i.transform(a.transform);
                if (y) {
                    var k = +h.cx,
                        A = +h.cy,
                        O = +h.rx || +h.r || 0,
                        _ = +h.ry || +h.r || 0;
                    c.path = e.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", s((k - O) * w), s((A - _) * w), s((k + O) * w), s((A + _) * w), s(k * w))
                }
                if ("clip-rect" in a) {
                    var D = n(a["clip-rect"]).split(l);
                    if (D.length == 4) {
                        D[2] = +D[2] + +D[0], D[3] = +D[3] + +D[1];
                        var P = c.clipRect || e._g.doc.createElement("div"),
                            H = P.style;
                        H.clip = e.format("rect({1}px {2}px {3}px {0}px)", D), c.clipRect || (H.position = "absolute", H.top = 0, H.left = 0, H.width = i.paper.width + "px", H.height = i.paper.height + "px", c.parentNode.insertBefore(P, c), P.appendChild(c), c.clipRect = P)
                    }
                    a["clip-rect"] || c.clipRect && (c.clipRect.style.clip = "auto")
                }
                if (i.textpath) {
                    var B = i.textpath.style;
                    a.font && (B.font = a.font), a["font-family"] && (B.fontFamily = '"' + a["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, d) + '"'), a["font-size"] && (B.fontSize = a["font-size"]), a["font-weight"] && (B.fontWeight = a["font-weight"]), a["font-style"] && (B.fontStyle = a["font-style"])
                }
                "arrow-start" in a && C(b, a["arrow-start"]), "arrow-end" in a && C(b, a["arrow-end"], 1);
                if (a.opacity != null || a["stroke-width"] != null || a.fill != null || a.src != null || a.stroke != null || a["stroke-width"] != null || a["stroke-opacity"] != null || a["fill-opacity"] != null || a["stroke-dasharray"] != null || a["stroke-miterlimit"] != null || a["stroke-linejoin"] != null || a["stroke-linecap"] != null) {
                    var j = c.getElementsByTagName(f),
                        F = !1;
                    j = j && j[0], !j && (F = j = M(f)), i.type == "image" && a.src && (j.src = a.src), a.fill && (j.on = !0);
                    if (j.on == null || a.fill == "none" || a.fill === null) j.on = !1;
                    if (j.on && a.fill) {
                        var I = n(a.fill).match(e._ISURL);
                        if (I) {
                            j.parentNode == c && c.removeChild(j), j.rotate = !0, j.src = I[1], j.type = "tile";
                            var q = i.getBBox(1);
                            j.position = q.x + p + q.y, i._.fillpos = [q.x, q.y], e._preload(I[1], function () {
                                i._.fillsize = [this.offsetWidth, this.offsetHeight]
                            })
                        } else j.color = e.getRGB(a.fill).hex, j.src = d, j.type = "solid", e.getRGB(a.fill).error && (b.type in {
                            circle: 1,
                            ellipse: 1
                        } || n(a.fill).charAt() != "r") && L(b, a.fill, j) && (h.fill = "none", h.gradient = a.fill, j.rotate = !1)
                    }
                    if ("fill-opacity" in a || "opacity" in a) {
                        var U = ((+h["fill-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+e.getRGB(a.fill).o + 1 || 2) - 1);
                        U = u(o(U, 0), 1), j.opacity = U, j.src && (j.color = "none")
                    }
                    c.appendChild(j);
                    var z = c.getElementsByTagName("stroke") && c.getElementsByTagName("stroke")[0],
                        W = !1;
                    !z && (W = z = M("stroke"));
                    if (a.stroke && a.stroke != "none" || a["stroke-width"] || a["stroke-opacity"] != null || a["stroke-dasharray"] || a["stroke-miterlimit"] || a["stroke-linejoin"] || a["stroke-linecap"]) z.on = !0;
                    (a.stroke == "none" || a.stroke === null || z.on == null || a.stroke == 0 || a["stroke-width"] == 0) && (z.on = !1);
                    var X = e.getRGB(a.stroke);
                    z.on && a.stroke && (z.color = X.hex), U = ((+h["stroke-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+X.o + 1 || 2) - 1);
                    var V = (r(a["stroke-width"]) || 1) * .75;
                    U = u(o(U, 0), 1), a["stroke-width"] == null && (V = h["stroke-width"]), a["stroke-width"] && (z.weight = V), V && V < 1 && (U *= V) && (z.weight = 1), z.opacity = U, a["stroke-linejoin"] && (z.joinstyle = a["stroke-linejoin"] || "miter"), z.miterlimit = a["stroke-miterlimit"] || 8, a["stroke-linecap"] && (z.endcap = a["stroke-linecap"] == "butt" ? "flat" : a["stroke-linecap"] == "square" ? "square" : "round");
                    if (a["stroke-dasharray"]) {
                        var $ = {
                            "-": "shortdash",
                            ".": "shortdot",
                            "-.": "shortdashdot",
                            "-..": "shortdashdotdot",
                            ". ": "dot",
                            "- ": "dash",
                            "--": "longdash",
                            "- .": "dashdot",
                            "--.": "longdashdot",
                            "--..": "longdashdotdot"
                        };
                        z.dashstyle = $[t](a["stroke-dasharray"]) ? $[a["stroke-dasharray"]] : d
                    }
                    W && c.appendChild(z)
                }
                if (b.type == "text") {
                    b.paper.canvas.style.display = d;
                    var J = b.paper.span,
                        K = 100,
                        Q = h.font && h.font.match(/\d+(?:\.\d*)?(?=px)/);
                    v = J.style, h.font && (v.font = h.font), h["font-family"] && (v.fontFamily = h["font-family"]), h["font-weight"] && (v.fontWeight = h["font-weight"]), h["font-style"] && (v.fontStyle = h["font-style"]), Q = r(h["font-size"] || Q && Q[0]) || 10, v.fontSize = Q * K + "px", b.textpath.string && (J.innerHTML = n(b.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                    var G = J.getBoundingClientRect();
                    b.W = h.w = (G.right - G.left) / K, b.H = h.h = (G.bottom - G.top) / K, b.X = h.x, b.Y = h.y + b.H / 2, ("x" in a || "y" in a) && (b.path.v = e.format("m{0},{1}l{2},{1}", s(h.x * w), s(h.y * w), s(h.x * w) + 1));
                    var Y = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
                    for (var Z = 0, et = Y.length; Z < et; Z++)
                        if (Y[Z] in a) {
                            b._.dirty = 1;
                            break
                        }
                    switch (h["text-anchor"]) {
                    case "start":
                        b.textpath.style["v-text-align"] = "left", b.bbx = b.W / 2;
                        break;
                    case "end":
                        b.textpath.style["v-text-align"] = "right", b.bbx = -b.W / 2;
                        break;
                    default:
                        b.textpath.style["v-text-align"] = "center", b.bbx = 0
                    }
                    b.textpath.style["v-text-kern"] = !0
                }
            },
            L = function (t, s, o) {
                t.attrs = t.attrs || {};
                var u = t.attrs,
                    a = Math.pow,
                    f, l, c = "linear",
                    h = ".5 .5";
                t.attrs.gradient = s, s = n(s).replace(e._radial_gradient, function (e, t, n) {
                    return c = "radial", t && n && (t = r(t), n = r(n), a(t - .5, 2) + a(n - .5, 2) > .25 && (n = i.sqrt(.25 - a(t - .5, 2)) * ((n > .5) * 2 - 1) + .5), h = t + p + n), d
                }), s = s.split(/\s*\-\s*/);
                if (c == "linear") {
                    var v = s.shift();
                    v = -r(v);
                    if (isNaN(v)) return null
                }
                var m = e._parseDots(s);
                if (!m) return null;
                t = t.shape || t.node;
                if (m.length) {
                    t.removeChild(o), o.on = !0, o.method = "none", o.color = m[0].color, o.color2 = m[m.length - 1].color;
                    var g = [];
                    for (var y = 0, b = m.length; y < b; y++) m[y].offset && g.push(m[y].offset + p + m[y].color);
                    o.colors = g.length ? g.join() : "0% " + o.color, c == "radial" ? (o.type = "gradientTitle", o.focus = "100%", o.focussize = "0 0", o.focusposition = h, o.angle = 0) : (o.type = "gradient", o.angle = (270 - v) % 360), t.appendChild(o)
                }
                return 1
            },
            A = function (t, n) {
                this[0] = this.node = t, t.raphael = !0, this.id = e._oid++, t.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = n, this.matrix = e.matrix(), this._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    dx: 0,
                    dy: 0,
                    deg: 0,
                    dirty: 1,
                    dirtyT: 1
                }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null
            },
            O = e.el;
        A.prototype = O, O.constructor = A, O.transform = function (t) {
            if (t == null) return this._.transform;
            var r = this.paper._viewBoxShift,
                i = r ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy] : d,
                s;
            r && (s = t = n(t).replace(/\.{3}|\u2026/g, this._.transform || d)), e._extractTransform(this, i + t);
            var o = this.matrix.clone(),
                u = this.skew,
                a = this.node,
                f, l = ~n(this.attrs.fill).indexOf("-"),
                c = !n(this.attrs.fill).indexOf("url(");
            o.translate(-0.5, -0.5);
            if (c || l || this.type == "image") {
                u.matrix = "1 0 0 1", u.offset = "0 0", f = o.split();
                if (l && f.noRotation || !f.isSimple) {
                    a.style.filter = o.toFilter();
                    var h = this.getBBox(),
                        v = this.getBBox(1),
                        m = h.x - v.x,
                        g = h.y - v.y;
                    a.coordorigin = m * -w + p + g * -w, N(this, 1, 1, m, g, 0)
                } else a.style.filter = d, N(this, f.scalex, f.scaley, f.dx, f.dy, f.rotate)
            } else a.style.filter = d, u.matrix = n(o), u.offset = o.offset();
            return s && (this._.transform = s), this
        }, O.rotate = function (e, t, i) {
            if (this.removed) return this;
            if (e == null) return;
            e = n(e).split(l), e.length - 1 && (t = r(e[1]), i = r(e[2])), e = r(e[0]), i == null && (t = i);
            if (t == null || i == null) {
                var s = this.getBBox(1);
                t = s.x + s.width / 2, i = s.y + s.height / 2
            }
            return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", e, t, i]])), this
        }, O.translate = function (e, t) {
            return this.removed ? this : (e = n(e).split(l), e.length - 1 && (t = r(e[1])), e = r(e[0]) || 0, t = +t || 0, this._.bbox && (this._.bbox.x += e, this._.bbox.y += t), this.transform(this._.transform.concat([["t", e, t]])), this)
        }, O.scale = function (e, t, i, s) {
            if (this.removed) return this;
            e = n(e).split(l), e.length - 1 && (t = r(e[1]), i = r(e[2]), s = r(e[3]), isNaN(i) && (i = null), isNaN(s) && (s = null)), e = r(e[0]), t == null && (t = e), s == null && (i = s);
            if (i == null || s == null) var o = this.getBBox(1);
            return i = i == null ? o.x + o.width / 2 : i, s = s == null ? o.y + o.height / 2 : s, this.transform(this._.transform.concat([["s", e, t, i, s]])), this._.dirtyT = 1, this
        }, O.hide = function () {
            return !this.removed && (this.node.style.display = "none"), this
        }, O.show = function () {
            return !this.removed && (this.node.style.display = d), this
        }, O._getBBox = function () {
            return this.removed ? {} : {
                x: this.X + (this.bbx || 0) - this.W / 2,
                y: this.Y - this.H,
                width: this.W,
                height: this.H
            }
        }, O.remove = function () {
            if (this.removed || !this.node.parentNode) return;
            this.paper.__set__ && this.paper.__set__.exclude(this), e.eve.unbind("raphael.*.*." + this.id), e._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var t in this) this[t] = typeof this[t] == "function" ? e._removedFactory(t) : null;
            this.removed = !0
        }, O.attr = function (n, r) {
            if (this.removed) return this;
            if (n == null) {
                var i = {};
                for (var s in this.attrs) this.attrs[t](s) && (i[s] = this.attrs[s]);
                return i.gradient && i.fill == "none" && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
            }
            if (r == null && e.is(n, "string")) {
                if (n == f && this.attrs.fill == "none" && this.attrs.gradient) return this.attrs.gradient;
                var o = n.split(l),
                    u = {};
                for (var a = 0, h = o.length; a < h; a++) n = o[a], n in this.attrs ? u[n] = this.attrs[n] : e.is(this.paper.customAttributes[n], "function") ? u[n] = this.paper.customAttributes[n].def : u[n] = e._availableAttrs[n];
                return h - 1 ? u : u[o[0]]
            }
            if (this.attrs && r == null && e.is(n, "array")) {
                u = {};
                for (a = 0, h = n.length; a < h; a++) u[n[a]] = this.attr(n[a]);
                return u
            }
            var p;
            r != null && (p = {}, p[n] = r), r == null && e.is(n, "object") && (p = n);
            for (var d in p) c("raphael.attr." + d + "." + this.id, this, p[d]);
            if (p) {
                for (d in this.paper.customAttributes)
                    if (this.paper.customAttributes[t](d) && p[t](d) && e.is(this.paper.customAttributes[d], "function")) {
                        var v = this.paper.customAttributes[d].apply(this, [].concat(p[d]));
                        this.attrs[d] = p[d];
                        for (var m in v) v[t](m) && (p[m] = v[m])
                    }
                p.text && this.type == "text" && (this.textpath.string = p.text), k(this, p)
            }
            return this
        }, O.toFront = function () {
            return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && e._tofront(this, this.paper), this
        }, O.toBack = function () {
            return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), e._toback(this, this.paper)), this)
        }, O.insertAfter = function (t) {
            return this.removed ? this : (t.constructor == e.st.constructor && (t = t[t.length - 1]), t.node.nextSibling ? t.node.parentNode.insertBefore(this.node, t.node.nextSibling) : t.node.parentNode.appendChild(this.node), e._insertafter(this, t, this.paper), this)
        }, O.insertBefore = function (t) {
            return this.removed ? this : (t.constructor == e.st.constructor && (t = t[0]), t.node.parentNode.insertBefore(this.node, t.node), e._insertbefore(this, t, this.paper), this)
        }, O.blur = function (t) {
            var n = this.node.runtimeStyle,
                r = n.filter;
            r = r.replace(g, d), +t !== 0 ? (this.attrs.blur = t, n.filter = r + p + h + ".Blur(pixelradius=" + (+t || 1.5) + ")", n.margin = e.format("-{0}px 0 0 -{0}px", s(+t || 1.5))) : (n.filter = r, n.margin = 0, delete this.attrs.blur)
        }, e._engine.path = function (e, t) {
            var n = M("shape");
            n.style.cssText = b, n.coordsize = w + p + w, n.coordorigin = t.coordorigin;
            var r = new A(n, t),
                i = {
                    fill: "none",
                    stroke: "#000"
                };
            e && (i.path = e), r.type = "path", r.path = [], r.Path = d, k(r, i), t.canvas.appendChild(n);
            var s = M("skew");
            return s.on = !0, n.appendChild(s), r.skew = s, r.transform(d), r
        }, e._engine.rect = function (t, n, r, i, s, o) {
            var u = e._rectPath(n, r, i, s, o),
                a = t.path(u),
                f = a.attrs;
            return a.X = f.x = n, a.Y = f.y = r, a.W = f.width = i, a.H = f.height = s, f.r = o, f.path = u, a.type = "rect", a
        }, e._engine.ellipse = function (e, t, n, r, i) {
            var s = e.path(),
                o = s.attrs;
            return s.X = t - r, s.Y = n - i, s.W = r * 2, s.H = i * 2, s.type = "ellipse", k(s, {
                cx: t,
                cy: n,
                rx: r,
                ry: i
            }), s
        }, e._engine.circle = function (e, t, n, r) {
            var i = e.path(),
                s = i.attrs;
            return i.X = t - r, i.Y = n - r, i.W = i.H = r * 2, i.type = "circle", k(i, {
                cx: t,
                cy: n,
                r: r
            }), i
        }, e._engine.image = function (t, n, r, i, s, o) {
            var u = e._rectPath(r, i, s, o),
                a = t.path(u).attr({
                    stroke: "none"
                }),
                l = a.attrs,
                c = a.node,
                h = c.getElementsByTagName(f)[0];
            return l.src = n, a.X = l.x = r, a.Y = l.y = i, a.W = l.width = s, a.H = l.height = o, l.path = u, a.type = "image", h.parentNode == c && c.removeChild(h), h.rotate = !0, h.src = n, h.type = "tile", a._.fillpos = [r, i], a._.fillsize = [s, o], c.appendChild(h), N(a, 1, 1, 0, 0, 0), a
        }, e._engine.text = function (t, r, i, o) {
            var u = M("shape"),
                a = M("path"),
                f = M("textpath");
            r = r || 0, i = i || 0, o = o || "", a.v = e.format("m{0},{1}l{2},{1}", s(r * w), s(i * w), s(r * w) + 1), a.textpathok = !0, f.string = n(o), f.on = !0, u.style.cssText = b, u.coordsize = w + p + w, u.coordorigin = "0 0";
            var l = new A(u, t),
                c = {
                    fill: "#000",
                    stroke: "none",
                    font: e._availableAttrs.font,
                    text: o
                };
            l.shape = u, l.path = a, l.textpath = f, l.type = "text", l.attrs.text = n(o), l.attrs.x = r, l.attrs.y = i, l.attrs.w = 1, l.attrs.h = 1, k(l, c), u.appendChild(f), u.appendChild(a), t.canvas.appendChild(u);
            var h = M("skew");
            return h.on = !0, u.appendChild(h), l.skew = h, l.transform(d), l
        }, e._engine.setSize = function (t, n) {
            var r = this.canvas.style;
            return this.width = t, this.height = n, t == +t && (t += "px"), n == +n && (n += "px"), r.width = t, r.height = n, r.clip = "rect(0 " + t + " " + n + " 0)", this._viewBox && e._engine.setViewBox.apply(this, this._viewBox), this
        }, e._engine.setViewBox = function (t, n, r, i, s) {
            e.eve("raphael.setViewBox", this, this._viewBox, [t, n, r, i, s]);
            var u = this.width,
                a = this.height,
                f = 1 / o(r / u, i / a),
                l, c;
            return s && (l = a / i, c = u / r, r * l < u && (t -= (u - r * l) / 2 / l), i * c < a && (n -= (a - i * c) / 2 / c)), this._viewBox = [t, n, r, i, !!s], this._viewBoxShift = {
                dx: -t,
                dy: -n,
                scale: f
            }, this.forEach(function (e) {
                e.transform("...")
            }), this
        };
        var M;
        e._engine.initWin = function (e) {
            var t = e.document;
            t.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
            try {
                !t.namespaces.rvml && t.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), M = function (e) {
                    return t.createElement("<rvml:" + e + ' class="rvml">')
                }
            } catch (n) {
                M = function (e) {
                    return t.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                }
            }
        }, e._engine.initWin(e._g.win), e._engine.create = function () {
            var t = e._getContainer.apply(0, arguments),
                n = t.container,
                r = t.height,
                i, s = t.width,
                o = t.x,
                u = t.y;
            if (!n) throw new Error("VML container not found.");
            var a = new e._Paper,
                f = a.canvas = e._g.doc.createElement("div"),
                l = f.style;
            return o = o || 0, u = u || 0, s = s || 512, r = r || 342, a.width = s, a.height = r, s == +s && (s += "px"), r == +r && (r += "px"), a.coordsize = w * 1e3 + p + w * 1e3, a.coordorigin = "0 0", a.span = e._g.doc.createElement("span"), a.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", f.appendChild(a.span), l.cssText = e.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", s, r), n == 1 ? (e._g.doc.body.appendChild(f), l.left = o + "px", l.top = u + "px", l.position = "absolute") : n.firstChild ? n.insertBefore(f, n.firstChild) : n.appendChild(f), a.renderfix = function () {}, a
        }, e.prototype.clear = function () {
            e.eve("raphael.clear", this), this.canvas.innerHTML = d, this.span = e._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
        }, e.prototype.remove = function () {
            e.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
            for (var t in this) this[t] = typeof this[t] == "function" ? e._removedFactory(t) : null;
            return !0
        };
        var _ = e.st;
        for (var D in O) O[t](D) && !_[t](D) && (_[D] = function (e) {
            return function () {
                var t = arguments;
                return this.forEach(function (n) {
                    n[e].apply(n, t)
                })
            }
        }(D))
    }(window.Raphael),
    function () {
        var e, t, n, r, i = [].slice,
            s = {}.hasOwnProperty,
            o = function (e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) s.call(t, n) && (e[n] = t[n]);
                return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
            },
            u = function (e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            },
            a = [].indexOf || function (e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        t = window.Morris = {}, e = jQuery, t.EventEmitter = function () {
            function e() {}
            return e.prototype.on = function (e, t) {
                return this.handlers == null && (this.handlers = {}), this.handlers[e] == null && (this.handlers[e] = []), this.handlers[e].push(t)
            }, e.prototype.fire = function () {
                var e, t, n, r, s, o, u;
                n = arguments[0], e = 2 <= arguments.length ? i.call(arguments, 1) : [];
                if (this.handlers != null && this.handlers[n] != null) {
                    o = this.handlers[n], u = [];
                    for (r = 0, s = o.length; r < s; r++) t = o[r], u.push(t.apply(null, e));
                    return u
                }
            }, e
        }(), t.commas = function (e) {
            var t, n, r, i;
            return e != null ? (r = e < 0 ? "-" : "", t = Math.abs(e), n = Math.floor(t).toFixed(0), r += n.replace(/(?=(?:\d{3})+$)(?!^)/g, ","), i = t.toString(), i.length > n.length && (r += i.slice(n.length)), r) : "-"
        }, t.pad2 = function (e) {
            return (e < 10 ? "0" : "") + e
        }, t.Grid = function (n) {
            function r(t) {
                var n = this;
                typeof t.element == "string" ? this.el = e(document.getElementById(t.element)) : this.el = e(t.element);
                if (this.el == null || this.el.length === 0) throw new Error("Graph container element not found");
                this.el.css("position") === "static" && this.el.css("position", "relative"), this.options = e.extend({}, this.gridDefaults, this.defaults || {}, t), typeof this.options.units == "string" && (this.options.postUnits = t.units), this.raphael = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, this.dirty = !1, this.init && this.init(), this.setData(this.options.data), this.el.bind("mousemove", function (e) {
                    var t;
                    return t = n.el.offset(), n.fire("hovermove", e.pageX - t.left, e.pageY - t.top)
                }), this.el.bind("mouseout", function (e) {
                    return n.fire("hoverout")
                }), this.el.bind("touchstart touchmove touchend", function (e) {
                    var t, r;
                    return r = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], t = n.el.offset(), n.fire("hover", r.pageX - t.left, r.pageY - t.top), r
                }), this.postInit && this.postInit()
            }
            return o(r, n), r.prototype.gridDefaults = {
                dateFormat: null,
                axes: !0,
                grid: !0,
                gridLineColor: "#aaa",
                gridStrokeWidth: .5,
                gridTextColor: "#888",
                gridTextSize: 12,
                hideHover: !1,
                yLabelFormat: null,
                numLines: 5,
                padding: 25,
                parseTime: !0,
                postUnits: "",
                preUnits: "",
                ymax: "auto",
                ymin: "auto 0",
                goals: [],
                goalStrokeWidth: 1,
                goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"],
                events: [],
                eventStrokeWidth: 1,
                eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"]
            }, r.prototype.setData = function (e, n) {
                var r, i, s, o, u, a, f, l, c, h, p, d;
                n == null && (n = !0);
                if (e == null || e.length === 0) {
                    this.data = [], this.raphael.clear(), this.hover != null && this.hover.hide();
                    return
                }
                h = this.cumulative ? 0 : null, p = this.cumulative ? 0 : null, this.options.goals.length > 0 && (u = Math.min.apply(null, this.options.goals), o = Math.max.apply(null, this.options.goals), p = p != null ? Math.min(p, u) : u, h = h != null ? Math.max(h, o) : o), this.data = function () {
                    var n, r, o;
                    o = [];
                    for (s = n = 0, r = e.length; n < r; s = ++n) f = e[s], a = {}, a.label = f[this.options.xkey], this.options.parseTime ? (a.x = t.parseDate(a.label), this.options.dateFormat ? a.label = this.options.dateFormat(a.x) : typeof a.label == "number" && (a.label = (new Date(a.label)).toString())) : a.x = s, l = 0, a.y = function () {
                        var e, t, n, r;
                        n = this.options.ykeys, r = [];
                        for (i = e = 0, t = n.length; e < t; i = ++e) c = n[i], d = f[c], typeof d == "string" && (d = parseFloat(d)), d != null && typeof d != "number" && (d = null), d != null && (this.cumulative ? l += d : h != null ? (h = Math.max(d, h), p = Math.min(d, p)) : h = p = d), this.cumulative && l != null && (h = Math.max(l, h), p = Math.min(l, p)), r.push(d);
                        return r
                    }.call(this), o.push(a);
                    return o
                }.call(this), this.options.parseTime && (this.data = this.data.sort(function (e, t) {
                    return (e.x > t.x) - (t.x > e.x)
                })), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, this.events = [], this.options.parseTime && this.options.events.length > 0 && (this.events = function () {
                    var e, n, i, s;
                    i = this.options.events, s = [];
                    for (e = 0, n = i.length; e < n; e++) r = i[e], s.push(t.parseDate(r));
                    return s
                }.call(this), this.xmax = Math.max(this.xmax, Math.max.apply(null, this.events)), this.xmin = Math.min(this.xmin, Math.min.apply(null, this.events))), this.xmin === this.xmax && (this.xmin -= 1, this.xmax += 1), this.ymin = this.yboundary("min", p), this.ymax = this.yboundary("max", h), this.ymin === this.ymax && (p && (this.ymin -= 1), this.ymax += 1), this.yInterval = (this.ymax - this.ymin) / (this.options.numLines - 1), this.yInterval > 0 && this.yInterval < 1 ? this.precision = -Math.floor(Math.log(this.yInterval) / Math.log(10)) : this.precision = 0, this.dirty = !0;
                if (n) return this.redraw()
            }, r.prototype.yboundary = function (e, t) {
                var n, r;
                return n = this.options["y" + e], typeof n == "string" ? n.slice(0, 4) === "auto" ? n.length > 5 ? (r = parseInt(n.slice(5), 10), t == null ? r : Math[e](t, r)) : t != null ? t : 0 : parseInt(n, 10) : n
            }, r.prototype._calc = function () {
                var e, t, n;
                n = this.el.width(), e = this.el.height();
                if (this.elementWidth !== n || this.elementHeight !== e || this.dirty) {
                    this.elementWidth = n, this.elementHeight = e, this.dirty = !1, this.left = this.options.padding, this.right = this.elementWidth - this.options.padding, this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding, this.options.axes && (t = Math.max(this.measureText(this.yAxisFormat(this.ymin), this.options.gridTextSize).width, this.measureText(this.yAxisFormat(this.ymax), this.options.gridTextSize).width), this.left += t, this.bottom -= 1.5 * this.options.gridTextSize), this.width = this.right - this.left, this.height = this.bottom - this.top, this.dx = this.width / (this.xmax - this.xmin), this.dy = this.height / (this.ymax - this.ymin);
                    if (this.calc) return this.calc()
                }
            }, r.prototype.transY = function (e) {
                return this.bottom - (e - this.ymin) * this.dy
            }, r.prototype.transX = function (e) {
                return this.data.length === 1 ? (this.left + this.right) / 2 : this.left + (e - this.xmin) * this.dx
            }, r.prototype.redraw = function () {
                this.raphael.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents();
                if (this.draw) return this.draw()
            }, r.prototype.measureText = function (e, t) {
                var n, r;
                return t == null && (t = 12), r = this.raphael.text(100, 100, e).attr("font-size", t), n = r.getBBox(), r.remove(), n
            }, r.prototype.yAxisFormat = function (e) {
                return this.yLabelFormat(e)
            }, r.prototype.yLabelFormat = function (e) {
                return typeof this.options.yLabelFormat == "function" ? this.options.yLabelFormat(e) : "" + this.options.preUnits + t.commas(e) + this.options.postUnits
            }, r.prototype.updateHover = function (e, t) {
                var n, r;
                n = this.hitTest(e, t);
                if (n != null) return (r = this.hover).update.apply(r, n)
            }, r.prototype.drawGrid = function () {
                var e, t, n, r, i, s, o, u;
                if (this.options.grid === !1 && this.options.axes === !1) return;
                e = this.ymin, t = this.ymax, u = [];
                for (n = s = e, o = this.yInterval; e <= t ? s <= t : s >= t; n = s += o) r = parseFloat(n.toFixed(this.precision)), i = this.transY(r), this.options.axes && this.drawYAxisLabel(this.left - this.options.padding / 2, i, this.yAxisFormat(r)), this.options.grid ? u.push(this.drawGridLine("M" + this.left + "," + i + "H" + (this.left + this.width))) : u.push(void 0);
                return u
            }, r.prototype.drawGoals = function () {
                var e, t, n, r, i, s, o;
                s = this.options.goals, o = [];
                for (n = r = 0, i = s.length; r < i; n = ++r) t = s[n], e = this.options.goalLineColors[n % this.options.goalLineColors.length], o.push(this.drawGoal(t, e));
                return o
            }, r.prototype.drawEvents = function () {
                var e, t, n, r, i, s, o;
                s = this.events, o = [];
                for (n = r = 0, i = s.length; r < i; n = ++r) t = s[n], e = this.options.eventLineColors[n % this.options.eventLineColors.length], o.push(this.drawEvent(t, e));
                return o
            }, r.prototype.drawGoal = function (e, t) {
                return this.raphael.path("M" + this.left + "," + this.transY(e) + "H" + this.right).attr("stroke", t).attr("stroke-width", this.options.goalStrokeWidth)
            }, r.prototype.drawEvent = function (e, t) {
                return this.raphael.path("M" + this.transX(e) + "," + this.bottom + "V" + this.top).attr("stroke", t).attr("stroke-width", this.options.eventStrokeWidth)
            }, r.prototype.drawYAxisLabel = function (e, t, n) {
                return this.raphael.text(e, t, n).attr("font-size", this.options.gridTextSize).attr("fill", this.options.gridTextColor).attr("text-anchor", "end")
            }, r.prototype.drawGridLine = function (e) {
                return this.raphael.path(e).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth)
            }, r
        }(t.EventEmitter), t.parseDate = function (e) {
            var t, n, r, i, s, o, u, a, f, l, c;
            return typeof e == "number" ? e : (n = e.match(/^(\d+) Q(\d)$/), i = e.match(/^(\d+)-(\d+)$/), s = e.match(/^(\d+)-(\d+)-(\d+)$/), u = e.match(/^(\d+) W(\d+)$/), a = e.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), f = e.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), n ? (new Date(parseInt(n[1], 10), parseInt(n[2], 10) * 3 - 1, 1)).getTime() : i ? (new Date(parseInt(i[1], 10), parseInt(i[2], 10) - 1, 1)).getTime() : s ? (new Date(parseInt(s[1], 10), parseInt(s[2], 10) - 1, parseInt(s[3], 10))).getTime() : u ? (l = new Date(parseInt(u[1], 10), 0, 1), l.getDay() !== 4 && l.setMonth(0, 1 + (4 - l.getDay() + 7) % 7), l.getTime() + parseInt(u[2], 10) * 6048e5) : a ? a[6] ? (o = 0, a[6] !== "Z" && (o = parseInt(a[8], 10) * 60 + parseInt(a[9], 10), a[7] === "+" && (o = 0 - o)), Date.UTC(parseInt(a[1], 10), parseInt(a[2], 10) - 1, parseInt(a[3], 10), parseInt(a[4], 10), parseInt(a[5], 10) + o)) : (new Date(parseInt(a[1], 10), parseInt(a[2], 10) - 1, parseInt(a[3], 10), parseInt(a[4], 10), parseInt(a[5], 10))).getTime() : f ? (c = parseFloat(f[6]), t = Math.floor(c), r = Math.round((c - t) * 1e3), f[8] ? (o = 0, f[8] !== "Z" && (o = parseInt(f[10], 10) * 60 + parseInt(f[11], 10), f[9] === "+" && (o = 0 - o)), Date.UTC(parseInt(f[1], 10), parseInt(f[2], 10) - 1, parseInt(f[3], 10), parseInt(f[4], 10), parseInt(f[5], 10) + o, t, r)) : (new Date(parseInt(f[1], 10), parseInt(f[2], 10) - 1, parseInt(f[3], 10), parseInt(f[4], 10), parseInt(f[5], 10), t, r)).getTime()) : (new Date(parseInt(e, 10), 0, 1)).getTime())
        }, t.Hover = function () {
            function n(n) {
                n == null && (n = {}), this.options = e.extend({}, t.Hover.defaults, n), this.el = e("<div class='" + this.options["class"] + "'></div>"), this.el.hide(), this.options.parent.append(this.el)
            }
            return n.defaults = {
                "class": "morris-hover morris-default-style"
            }, n.prototype.update = function (e, t, n) {
                return this.html(e), this.show(), this.moveTo(t, n)
            }, n.prototype.html = function (e) {
                return this.el.html(e)
            }, n.prototype.moveTo = function (e, t) {
                var n, r, i, s, o, u;
                return o = this.options.parent.innerWidth(), s = this.options.parent.innerHeight(), r = this.el.outerWidth(), n = this.el.outerHeight(), i = Math.min(Math.max(0, e - r / 2), o - r), t != null ? (u = t - n - 10, u < 0 && (u = t + 10, u + n > s && (u = s / 2 - n / 2))) : u = s / 2 - n / 2, this.el.css({
                    left: i + "px",
                    top: u + "px"
                })
            }, n.prototype.show = function () {
                return this.el.show()
            }, n.prototype.hide = function () {
                return this.el.hide()
            }, n
        }(), t.Line = function (e) {
            function n(e) {
                this.hilight = u(this.hilight, this), this.onHoverOut = u(this.onHoverOut, this), this.onHoverMove = u(this.onHoverMove, this);
                if (!(this instanceof t.Line)) return new t.Line(e);
                n.__super__.constructor.call(this, e)
            }
            return o(n, e), n.prototype.init = function () {
                this.pointGrow = Raphael.animation({
                    r: this.options.pointSize + 3
                }, 25, "linear"), this.pointShrink = Raphael.animation({
                    r: this.options.pointSize
                }, 25, "linear");
                if (this.options.hideHover !== "always") return this.hover = new t.Hover({
                    parent: this.el
                }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut)
            }, n.prototype.defaults = {
                lineWidth: 3,
                pointSize: 4,
                lineColors: ["#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                pointWidths: [1],
                pointStrokeColors: ["#ffffff"],
                pointFillColors: [],
                smooth: !0,
                xLabels: "auto",
                xLabelFormat: null,
                xLabelMargin: 50,
                continuousLine: !0,
                hideHover: !1
            }, n.prototype.calc = function () {
                return this.calcPoints(), this.generatePaths()
            }, n.prototype.calcPoints = function () {
                var e, t, n, r, i, s;
                i = this.data, s = [];
                for (n = 0, r = i.length; n < r; n++) e = i[n], e._x = this.transX(e.x), e._y = function () {
                    var n, r, i, s;
                    i = e.y, s = [];
                    for (n = 0, r = i.length; n < r; n++) t = i[n], t != null ? s.push(this.transY(t)) : s.push(t);
                    return s
                }.call(this), s.push(e._ymax = Math.min.apply(null, [this.bottom].concat(function () {
                    var n, r, i, s;
                    i = e._y, s = [];
                    for (n = 0, r = i.length; n < r; n++) t = i[n], t != null && s.push(t);
                    return s
                }())));
                return s
            }, n.prototype.hitTest = function (e, t) {
                var n, r, i, s, o;
                if (this.data.length === 0) return null;
                o = this.data.slice(1);
                for (n = i = 0, s = o.length; i < s; n = ++i) {
                    r = o[n];
                    if (e < (r._x + this.data[n]._x) / 2) break
                }
                return n
            }, n.prototype.onHoverMove = function (e, t) {
                var n;
                return n = this.hitTest(e, t), this.displayHoverForRow(n)
            }, n.prototype.onHoverOut = function () {
                if (
                    this.options.hideHover === "auto") return this.displayHoverForRow(null)
            }, n.prototype.displayHoverForRow = function (e) {
                var t;
                return e != null ? ((t = this.hover).update.apply(t, this.hoverContentForRow(e)), this.hilight(e)) : (this.hover.hide(), this.hilight())
            }, n.prototype.hoverContentForRow = function (e) {
                var t, n, r, i, s, o, u;
                r = this.data[e];
                if (typeof this.options.hoverCallback == "function") t = this.options.hoverCallback(e, this.options);
                else {
                    t = "<div class='morris-hover-row-label'>" + r.label + "</div>", u = r.y;
                    for (n = s = 0, o = u.length; s < o; n = ++s) i = u[n], t += "<div class='morris-hover-point' style='color: " + this.colorFor(r, n, "label") + "'>\n  " + this.options.labels[n] + ":\n  " + this.yLabelFormat(i) + "\n</div>"
                }
                return [t, r._x, r._ymax]
            }, n.prototype.generatePaths = function () {
                var e, n, r, i, s;
                return this.paths = function () {
                    var o, u, f, l;
                    l = [];
                    for (r = o = 0, u = this.options.ykeys.length; 0 <= u ? o < u : o > u; r = 0 <= u ? ++o : --o) s = this.options.smooth === !0 || (f = this.options.ykeys[r], a.call(this.options.smooth, f) >= 0), n = function () {
                        var e, t, n, s;
                        n = this.data, s = [];
                        for (e = 0, t = n.length; e < t; e++) i = n[e], i._y[r] !== void 0 && s.push({
                            x: i._x,
                            y: i._y[r]
                        });
                        return s
                    }.call(this), this.options.continuousLine && (n = function () {
                        var t, r, i;
                        i = [];
                        for (t = 0, r = n.length; t < r; t++) e = n[t], e.y !== null && i.push(e);
                        return i
                    }()), n.length > 1 ? l.push(t.Line.createPath(n, s, this.bottom)) : l.push(null);
                    return l
                }.call(this)
            }, n.prototype.draw = function () {
                this.options.axes && this.drawXAxis(), this.drawSeries();
                if (this.options.hideHover === !1) return this.displayHoverForRow(this.data.length - 1)
            }, n.prototype.drawXAxis = function () {
                var e, n, r, i, s, o, u, a, f, l = this;
                o = this.bottom + this.options.gridTextSize * 1.25, i = null, e = function (e, t) {
                    var n, r;
                    return n = l.drawXAxisLabel(l.transX(t), o, e), r = n.getBBox(), (i == null || i >= r.x + r.width) && r.x >= 0 && r.x + r.width < l.el.width() ? i = r.x - l.options.xLabelMargin : n.remove()
                }, this.options.parseTime ? this.data.length === 1 && this.options.xLabels === "auto" ? r = [[this.data[0].label, this.data[0].x]] : r = t.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : r = function () {
                    var e, t, n, r;
                    n = this.data, r = [];
                    for (e = 0, t = n.length; e < t; e++) s = n[e], r.push([s.label, s.x]);
                    return r
                }.call(this), r.reverse(), f = [];
                for (u = 0, a = r.length; u < a; u++) n = r[u], f.push(e(n[0], n[1]));
                return f
            }, n.prototype.drawSeries = function () {
                var e, t, n, r, i, s, o, u, a;
                for (t = i = o = this.options.ykeys.length - 1; o <= 0 ? i <= 0 : i >= 0; t = o <= 0 ? ++i : --i) n = this.paths[t], n !== null && this.drawLinePath(n, this.colorFor(r, t, "line"));
                this.seriesPoints = function () {
                    var e, n, r;
                    r = [];
                    for (t = e = 0, n = this.options.ykeys.length; 0 <= n ? e < n : e > n; t = 0 <= n ? ++e : --e) r.push([]);
                    return r
                }.call(this), a = [];
                for (t = s = u = this.options.ykeys.length - 1; u <= 0 ? s <= 0 : s >= 0; t = u <= 0 ? ++s : --s) a.push(function () {
                    var n, i, s, o;
                    s = this.data, o = [];
                    for (n = 0, i = s.length; n < i; n++) r = s[n], r._y[t] != null ? e = this.drawLinePoint(r._x, r._y[t], this.options.pointSize, this.colorFor(r, t, "point"), t) : e = null, o.push(this.seriesPoints[t].push(e));
                    return o
                }.call(this));
                return a
            }, n.createPath = function (e, n, r) {
                var i, s, o, u, a, f, l, c, h, p, d, v, m, g;
                l = "", n && (o = t.Line.gradients(e)), c = {
                    y: null
                };
                for (u = m = 0, g = e.length; m < g; u = ++m) {
                    i = e[u];
                    if (i.y != null)
                        if (c.y != null) n ? (s = o[u], f = o[u - 1], a = (i.x - c.x) / 4, h = c.x + a, d = Math.min(r, c.y + a * f), p = i.x - a, v = Math.min(r, i.y - a * s), l += "C" + h + "," + d + "," + p + "," + v + "," + i.x + "," + i.y) : l += "L" + i.x + "," + i.y;
                        else if (!n || o[u] != null) l += "M" + i.x + "," + i.y;
                    c = i
                }
                return l
            }, n.gradients = function (e) {
                var t, n, r, i, s, o, u, a;
                n = function (e, t) {
                    return (e.y - t.y) / (e.x - t.x)
                }, a = [];
                for (r = o = 0, u = e.length; o < u; r = ++o) t = e[r], t.y != null ? (i = e[r + 1] || {
                    y: null
                }, s = e[r - 1] || {
                    y: null
                }, s.y != null && i.y != null ? a.push(n(s, i)) : s.y != null ? a.push(n(s, t)) : i.y != null ? a.push(n(t, i)) : a.push(null)) : a.push(null);
                return a
            }, n.prototype.hilight = function (e) {
                var t, n, r, i, s;
                if (this.prevHilight !== null && this.prevHilight !== e)
                    for (t = n = 0, i = this.seriesPoints.length - 1; 0 <= i ? n <= i : n >= i; t = 0 <= i ? ++n : --n) this.seriesPoints[t][this.prevHilight] && this.seriesPoints[t][this.prevHilight].animate(this.pointShrink);
                if (e !== null && this.prevHilight !== e)
                    for (t = r = 0, s = this.seriesPoints.length - 1; 0 <= s ? r <= s : r >= s; t = 0 <= s ? ++r : --r) this.seriesPoints[t][e] && this.seriesPoints[t][e].animate(this.pointGrow);
                return this.prevHilight = e
            }, n.prototype.colorFor = function (e, t, n) {
                return typeof this.options.lineColors == "function" ? this.options.lineColors.call(this, e, t, n) : n === "point" ? this.options.pointFillColors[t % this.options.pointFillColors.length] || this.options.lineColors[t % this.options.lineColors.length] : this.options.lineColors[t % this.options.lineColors.length]
            }, n.prototype.drawXAxisLabel = function (e, t, n) {
                return this.raphael.text(e, t, n).attr("font-size", this.options.gridTextSize).attr("fill", this.options.gridTextColor)
            }, n.prototype.drawLinePath = function (e, t) {
                return this.raphael.path(e).attr("stroke", t).attr("stroke-width", this.options.lineWidth)
            }, n.prototype.drawLinePoint = function (e, t, n, r, i) {
                return this.raphael.circle(e, t, n).attr("fill", r).attr("stroke-width", this.strokeWidthForSeries(i)).attr("stroke", this.strokeForSeries(i))
            }, n.prototype.strokeWidthForSeries = function (e) {
                return this.options.pointWidths[e % this.options.pointWidths.length]
            }, n.prototype.strokeForSeries = function (e) {
                return this.options.pointStrokeColors[e % this.options.pointStrokeColors.length]
            }, n
        }(t.Grid), t.labelSeries = function (n, r, i, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g;
            f = 200 * (r - n) / i, a = new Date(n), p = t.LABEL_SPECS[s];
            if (p === void 0) {
                g = t.AUTO_LABEL_ORDER;
                for (v = 0, m = g.length; v < m; v++) {
                    l = g[v], h = t.LABEL_SPECS[l];
                    if (f >= h.span) {
                        p = h;
                        break
                    }
                }
            }
            p === void 0 && (p = t.LABEL_SPECS.second), o && (p = e.extend({}, p, {
                fmt: o
            })), u = p.start(a), c = [];
            while ((d = u.getTime()) <= r) d >= n && c.push([p.fmt(u), d]), p.incr(u);
            return c
        }, n = function (e) {
            return {
                span: e * 60 * 1e3,
                start: function (e) {
                    return new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours())
                },
                fmt: function (e) {
                    return "" + t.pad2(e.getHours()) + ":" + t.pad2(e.getMinutes())
                },
                incr: function (t) {
                    return t.setMinutes(t.getMinutes() + e)
                }
            }
        }, r = function (e) {
            return {
                span: e * 1e3,
                start: function (e) {
                    return new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes())
                },
                fmt: function (e) {
                    return "" + t.pad2(e.getHours()) + ":" + t.pad2(e.getMinutes()) + ":" + t.pad2(e.getSeconds())
                },
                incr: function (t) {
                    return t.setSeconds(t.getSeconds() + e)
                }
            }
        }, t.LABEL_SPECS = {
            decade: {
                span: 1728e8,
                start: function (e) {
                    return new Date(e.getFullYear() - e.getFullYear() % 10, 0, 1)
                },
                fmt: function (e) {
                    return "" + e.getFullYear()
                },
                incr: function (e) {
                    return e.setFullYear(e.getFullYear() + 10)
                }
            },
            year: {
                span: 1728e7,
                start: function (e) {
                    return new Date(e.getFullYear(), 0, 1)
                },
                fmt: function (e) {
                    return "" + e.getFullYear()
                },
                incr: function (e) {
                    return e.setFullYear(e.getFullYear() + 1)
                }
            },
            month: {
                span: 24192e5,
                start: function (e) {
                    return new Date(e.getFullYear(), e.getMonth(), 1)
                },
                fmt: function (e) {
                    return "" + e.getFullYear() + "-" + t.pad2(e.getMonth() + 1)
                },
                incr: function (e) {
                    return e.setMonth(e.getMonth() + 1)
                }
            },
            day: {
                span: 864e5,
                start: function (e) {
                    return new Date(e.getFullYear(), e.getMonth(), e.getDate())
                },
                fmt: function (e) {
                    return "" + e.getFullYear() + "-" + t.pad2(e.getMonth() + 1) + "-" + t.pad2(e.getDate())
                },
                incr: function (e) {
                    return e.setDate(e.getDate() + 1)
                }
            },
            hour: n(60),
            "30min": n(30),
            "15min": n(15),
            "10min": n(10),
            "5min": n(5),
            minute: n(1),
            "30sec": r(30),
            "15sec": r(15),
            "10sec": r(10),
            "5sec": r(5),
            second: r(1)
        }, t.AUTO_LABEL_ORDER = ["decade", "year", "month", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"], t.Area = function (e) {
            function n(e) {
                if (!(this instanceof t.Area)) return new t.Area(e);
                this.cumulative = !0, n.__super__.constructor.call(this, e)
            }
            return o(n, e), n.prototype.calcPoints = function () {
                var e, t, n, r, i, s, o;
                s = this.data, o = [];
                for (r = 0, i = s.length; r < i; r++) e = s[r], e._x = this.transX(e.x), t = 0, e._y = function () {
                    var r, i, s, o;
                    s = e.y, o = [];
                    for (r = 0, i = s.length; r < i; r++) n = s[r], t += n || 0, o.push(this.transY(t));
                    return o
                }.call(this), o.push(e._ymax = e._y[e._y.length - 1]);
                return o
            }, n.prototype.drawSeries = function () {
                var e, t, r, i;
                for (e = r = i = this.options.ykeys.length - 1; i <= 0 ? r <= 0 : r >= 0; e = i <= 0 ? ++r : --r) t = this.paths[e], t !== null && (t += "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", this.drawFilledPath(t, this.fillForSeries(e)));
                return n.__super__.drawSeries.call(this)
            }, n.prototype.fillForSeries = function (e) {
                var t;
                return t = Raphael.rgb2hsl(this.colorFor(this.data[e], e, "line")), Raphael.hsl(t.h, Math.min(255, t.s * .75), Math.min(255, t.l * 1.25))
            }, n.prototype.drawFilledPath = function (e, t) {
                return this.raphael.path(e).attr("fill", t).attr("stroke-width", 0)
            }, n
        }(t.Line), t.Bar = function (n) {
            function r(n) {
                this.onHoverOut = u(this.onHoverOut, this), this.onHoverMove = u(this.onHoverMove, this);
                if (!(this instanceof t.Bar)) return new t.Bar(n);
                r.__super__.constructor.call(this, e.extend({}, n, {
                    parseTime: !1
                }))
            }
            return o(r, n), r.prototype.init = function () {
                this.cumulative = this.options.stacked;
                if (this.options.hideHover !== "always") return this.hover = new t.Hover({
                    parent: this.el
                }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut)
            }, r.prototype.defaults = {
                barSizeRatio: .75,
                barGap: 3,
                barColors: ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                xLabelMargin: 50
            }, r.prototype.calc = function () {
                var e;
                this.calcBars();
                if (this.options.hideHover === !1) return (e = this.hover).update.apply(e, this.hoverContentForRow(this.data.length - 1))
            }, r.prototype.calcBars = function () {
                var e, t, n, r, i, s, o;
                s = this.data, o = [];
                for (e = r = 0, i = s.length; r < i; e = ++r) t = s[e], t._x = this.left + this.width * (e + .5) / this.data.length, o.push(t._y = function () {
                    var e, r, i, s;
                    i = t.y, s = [];
                    for (e = 0, r = i.length; e < r; e++) n = i[e], n != null ? s.push(this.transY(n)) : s.push(null);
                    return s
                }.call(this));
                return o
            }, r.prototype.draw = function () {
                return this.options.axes && this.drawXAxis(), this.drawSeries()
            }, r.prototype.drawXAxis = function () {
                var e, t, n, r, i, s, o, u, a;
                s = this.bottom + this.options.gridTextSize * 1.25, r = null, a = [];
                for (e = o = 0, u = this.data.length; 0 <= u ? o < u : o > u; e = 0 <= u ? ++o : --o) i = this.data[this.data.length - 1 - e], t = this.drawXAxisLabel(i._x, s, i.label), n = t.getBBox(), (r == null || r >= n.x + n.width) && n.x >= 0 && n.x + n.width < this.el.width() ? a.push(r = n.x - this.options.xLabelMargin) : a.push(t.remove());
                return a
            }, r.prototype.drawSeries = function () {
                var e, t, n, r, i, s, o, u, a, f, l, c, h, p;
                return n = this.width / this.options.data.length, u = this.options.stacked != null ? 1 : this.options.ykeys.length, e = (n * this.options.barSizeRatio - this.options.barGap * (u - 1)) / u, o = n * (1 - this.options.barSizeRatio) / 2, p = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null, this.bars = function () {
                    var u, d, v, m;
                    v = this.data, m = [];
                    for (r = u = 0, d = v.length; u < d; r = ++u) a = v[r], i = 0, m.push(function () {
                        var u, d, v, m;
                        v = a._y, m = [];
                        for (f = u = 0, d = v.length; u < d; f = ++u) h = v[f], h !== null ? (p ? (c = Math.min(h, p), t = Math.max(h, p)) : (c = h, t = this.bottom), s = this.left + r * n + o, this.options.stacked || (s += f * (e + this.options.barGap)), l = t - c, this.options.stacked && (c -= i), this.drawBar(s, c, e, l, this.colorFor(a, f, "bar")), m.push(i += l)) : m.push(null);
                        return m
                    }.call(this));
                    return m
                }.call(this)
            }, r.prototype.colorFor = function (e, t, n) {
                var r, i;
                return typeof this.options.barColors == "function" ? (r = {
                    x: e.x,
                    y: e.y[t],
                    label: e.label
                }, i = {
                    index: t,
                    key: this.options.ykeys[t],
                    label: this.options.labels[t]
                }, this.options.barColors.call(this, r, i, n)) : this.options.barColors[t % this.options.barColors.length]
            }, r.prototype.hitTest = function (e, t) {
                return this.data.length === 0 ? null : (e = Math.max(Math.min(e, this.right), this.left), Math.min(this.data.length - 1, Math.floor((e - this.left) / (this.width / this.data.length))))
            }, r.prototype.onHoverMove = function (e, t) {
                var n, r;
                return n = this.hitTest(e, t), (r = this.hover).update.apply(r, this.hoverContentForRow(n))
            }, r.prototype.onHoverOut = function () {
                if (this.options.hideHover === "auto") return this.hover.hide()
            }, r.prototype.hoverContentForRow = function (e) {
                var t, n, r, i, s, o, u, a;
                if (typeof this.options.hoverCallback == "function") t = this.options.hoverCallback(e, this.options);
                else {
                    r = this.data[e], t = "<div class='morris-hover-row-label'>" + r.label + "</div>", a = r.y;
                    for (n = o = 0, u = a.length; o < u; n = ++o) s = a[n], t += "<div class='morris-hover-point' style='color: " + this.colorFor(r, n, "label") + "'>\n  " + this.options.labels[n] + ":\n  " + this.yLabelFormat(s) + "\n</div>"
                }
                return i = this.left + (e + .5) * this.width / this.data.length, [t, i]
            }, r.prototype.drawXAxisLabel = function (e, t, n) {
                var r;
                return r = this.raphael.text(e, t, n).attr("font-size", this.options.gridTextSize).attr("fill", this.options.gridTextColor)
            }, r.prototype.drawBar = function (e, t, n, r, i) {
                return this.raphael.rect(e, t, n, r).attr("fill", i).attr("stroke-width", 0)
            }, r
        }(t.Grid), t.Donut = function () {
            function n(n) {
                this.select = u(this.select, this);
                if (!(this instanceof t.Donut)) return new t.Donut(n);
                typeof n.element == "string" ? this.el = e(document.getElementById(n.element)) : this.el = e(n.element), this.options = e.extend({}, this.defaults, n);
                if (this.el === null || this.el.length === 0) throw new Error("Graph placeholder not found.");
                if (n.data === void 0 || n.data.length === 0) return;
                this.data = n.data, this.redraw()
            }
            return n.prototype.defaults = {
                colors: ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"],
                backgroundColor: "#FFFFFF",
                labelColor: "#000000",
                formatter: t.commas
            }, n.prototype.redraw = function () {
                var e, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x;
                this.el.empty(), this.raphael = new Raphael(this.el[0]), n = this.el.width() / 2, r = this.el.height() / 2, h = (Math.min(n, r) - 10) / 3, c = 0, w = this.data;
                for (d = 0, g = w.length; d < g; d++) p = w[d], c += p.value;
                a = 5 / (2 * h), e = 1.9999 * Math.PI - a * this.data.length, o = 0, s = 0, this.segments = [], E = this.data;
                for (v = 0, y = E.length; v < y; v++) i = E[v], f = o + a + e * (i.value / c), l = new t.DonutSegment(n, r, h * 2, h, o, f, this.options.colors[s % this.options.colors.length], this.options.backgroundColor, i, this.raphael), l.render(), this.segments.push(l), l.on("hover", this.select), o = f, s += 1;
                this.text1 = this.drawEmptyDonutLabel(n, r - 10, this.options.labelColor, 15, 800), this.text2 = this.drawEmptyDonutLabel(n, r + 10, this.options.labelColor, 14), u = Math.max.apply(null, function () {
                    var e, t, n, r;
                    n = this.data, r = [];
                    for (e = 0, t = n.length; e < t; e++) i = n[e], r.push(i.value);
                    return r
                }.call(this)), s = 0, S = this.data, x = [];
                for (m = 0, b = S.length; m < b; m++) {
                    i = S[m];
                    if (i.value === u) {
                        this.select(s);
                        break
                    }
                    x.push(s += 1)
                }
                return x
            }, n.prototype.select = function (e) {
                var t, n, r, i, s;
                s = this.segments;
                for (r = 0, i = s.length; r < i; r++) t = s[r], t.deselect();
                return typeof e == "number" ? n = this.segments[e] : n = e, n.select(), this.setLabels(n.data.label, this.options.formatter(n.data.value, n.data))
            }, n.prototype.setLabels = function (e, t) {
                var n, r, i, s, o, u, a, f;
                return n = (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) * 2 / 3, s = 1.8 * n, i = n / 2, r = n / 3, this.text1.attr({
                    text: e,
                    transform: ""
                }), o = this.text1.getBBox(), u = Math.min(s / o.width, i / o.height), this.text1.attr({
                    transform: "S" + u + "," + u + "," + (o.x + o.width / 2) + "," + (o.y + o.height)
                }), this.text2.attr({
                    text: t,
                    transform: ""
                }), a = this.text2.getBBox(), f = Math.min(s / a.width, r / a.height), this.text2.attr({
                    transform: "S" + f + "," + f + "," + (a.x + a.width / 2) + "," + a.y
                })
            }, n.prototype.drawEmptyDonutLabel = function (e, t, n, r, i) {
                var s;
                return s = this.raphael.text(e, t, "").attr("font-size", r).attr("fill", n), i != null && s.attr("font-weight", i), s
            }, n
        }(), t.DonutSegment = function (e) {
            function t(e, t, n, r, i, s, o, a, f, l) {
                this.cx = e, this.cy = t, this.inner = n, this.outer = r, this.color = o, this.backgroundColor = a, this.data = f, this.raphael = l, this.deselect = u(this.deselect, this), this.select = u(this.select, this), this.sin_p0 = Math.sin(i), this.cos_p0 = Math.cos(i), this.sin_p1 = Math.sin(s), this.cos_p1 = Math.cos(s), this.is_long = s - i > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner)
            }
            return o(t, e), t.prototype.calcArcPoints = function (e) {
                return [this.cx + e * this.sin_p0, this.cy + e * this.cos_p0, this.cx + e * this.sin_p1, this.cy + e * this.cos_p1]
            }, t.prototype.calcSegment = function (e, t) {
                var n, r, i, s, o, u, a, f, l, c;
                return l = this.calcArcPoints(e), n = l[0], i = l[1], r = l[2], s = l[3], c = this.calcArcPoints(t), o = c[0], a = c[1], u = c[2], f = c[3], "M" + n + "," + i + ("A" + e + "," + e + ",0," + this.is_long + ",0," + r + "," + s) + ("L" + u + "," + f) + ("A" + t + "," + t + ",0," + this.is_long + ",1," + o + "," + a) + "Z"
            }, t.prototype.calcArc = function (e) {
                var t, n, r, i, s;
                return s = this.calcArcPoints(e), t = s[0], r = s[1], n = s[2], i = s[3], "M" + t + "," + r + ("A" + e + "," + e + ",0," + this.is_long + ",0," + n + "," + i)
            }, t.prototype.render = function () {
                var e = this;
                return this.arc = this.drawDonutArc(this.hilight, this.color), this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function () {
                    return e.fire("hover", e)
                })
            }, t.prototype.drawDonutArc = function (e, t) {
                return this.raphael.path(e).attr({
                    stroke: t,
                    "stroke-width": 2,
                    opacity: 0
                })
            }, t.prototype.drawDonutSegment = function (e, t, n, r) {
                return this.raphael.path(e).attr({
                    fill: t,
                    stroke: n,
                    "stroke-width": 3
                }).hover(r)
            }, t.prototype.select = function () {
                if (!this.selected) return this.seg.animate({
                    path: this.selectedPath
                }, 150, "<>"), this.arc.animate({
                    opacity: 1
                }, 150, "<>"), this.selected = !0
            }, t.prototype.deselect = function () {
                if (this.selected) return this.seg.animate({
                    path: this.path
                }, 150, "<>"), this.arc.animate({
                    opacity: 0
                }, 150, "<>"), this.selected = !1
            }, t
        }(t.EventEmitter)
    }.call(this);

// </editor-fold>

// <editor-fold desc="Game">
var KenKenGame = function () {
    function normalizeData(e) {
        var str = e.data;
        var newline = '\r\n';
        var arr = str.split(newline);
        var arrLength = arr.length - 2; // without /r/n/r/n
        var keys = ['A', 'T', 'S', 'V', 'H'];
        var keysLength = keys.length;
        var obj = {};
        var arrOfArr;
        var item;
        var key;

        for (var i = 0; i < arrLength; i++) {
            item = arr[i].replace(/ /g, '');

            if (keys.indexOf(item) !== -1) {
                key = item;
                continue;
            }

            arrOfArr = obj[key];

            if (!arrOfArr) {
                arrOfArr = [];
                obj[key] = arrOfArr;
            }

            arrOfArr.push(item.split(''));
        }

        e.dataObj = obj;

        //console.log('normalizeData');
        //console.log(e);

        return e;
    }

    this.loadPuzzleState = function (state) {
        console.log('KenKen.loadPuzzleState');
        console.log(state);
    };

    this.sendPuzzleData = function (puzzleData) {
        var e = JSON.parse(puzzleData);
        var data = normalizeData(e);
        var dataObj = data.dataObj;

        console.log('KenKenGame.sendPuzzleData');
        console.log(data.dataObj);
    };

    this.sendWidgetAdBeforeGame = function (puzzleData) {
        console.log('KenKenGame.sendWidgetAdBeforeGame');
        console.log(puzzleData);
    };


};

// </editor-fold>

var _KenKen = new KenKenGame();
KenKen = _KenKen;

var kenken = kenken || {};
// <editor-fold desc="kenken.limitAvaialbleDifficulties">
kenken.limitAvaialbleDifficulties = function () {
        $("a.size").click(function () {
            $("a.level").removeClass("notAvailable");
            switch ($(this).data("value")) {
            case 3:
                $("a.level.easy").addClass("notAvailable"), $("a.level.medium").addClass("notAvailable"), $("a.level.hard").addClass("notAvailable"), $("a.level.expert-premium").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable");
                break;
            case 5:
                $("a.op.selected").data("value") == "dm" && $("a.level.expert").addClass("notAvailable");
                break;
            case 8:
                $("a.op.selected").data("value") == "dm" && ($("a.level.hard").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable"));
                break;
            case 9:
                $("a.op.selected").data("value") == "dm" && ($("a.level.hard").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable"))
            }
        }), $("a.op").click(function () {
            $("a.level").removeClass("notAvailable"), $("a.size.selected").data("value") == 3 && ($("a.level.easy").addClass("notAvailable"), $("a.level.medium").addClass("notAvailable"), $("a.level.hard").addClass("notAvailable"), $("a.level.expert-premium").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable"));
            if ($(this).data("value") == "dm") switch ($("a.size.selected").data("value")) {
            case 8:
            case 9:
                $("a.level.hard").addClass("notAvailable");
            case 5:
            case 7:
                $("a.level.expert").addClass("notAvailable")
            }
            $("a.size.selected").data("value") == 8 && ($(this).data("value") == "dm" ? $("a.level.hard").addClass("notAvailable") : $("a.level.hard").removeClass("notAvailable"))
        }), $("a.level").click(function () {
            $(this).hasClass("notAvailable") == 1 && ($(this).hasClass("hard") == 1 ? $("#no-hard-puzzle-modal").reveal({
                animation: "fadeAndPop",
                animationspeed: 300,
                closeonbackgroundclick: !0,
                dismissmodalclass: "close-reveal-modal"
            }) : $(this).hasClass("expert") == 1 && $("#no-expert-puzzle-modal").reveal({
                animation: "fadeAndPop",
                animationspeed: 300,
                closeonbackgroundclick: !0,
                dismissmodalclass: "close-reveal-modal"
            }))
        }), $(document).ready(function () {
            switch ($("a.size.selected").data("value")) {
            case 3:
                $("a.level.easy").addClass("notAvailable"), $("a.level.medium").addClass("notAvailable"), $("a.level.hard").addClass("notAvailable"), $("a.level.expert-premium").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable");
                break;
            case 5:
                $("a.op.selected").data("value") == "dm" && $("a.level.expert").addClass("notAvailable");
                break;
            case 8:
                $("a.op.selected").data("value") == "dm" && ($("a.level.hard").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable"));
                break;
            case 9:
                $("a.op.selected").data("value") == "dm" && ($("a.level.hard").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable"))
            }
        })
    }, kenken.validatePuzzleSelection = function () {
        $("#play_now").click(function (e) {
            $("a.size.selected").data("value") == 8 && $("a.level.selected").data("value") == "hard" && $("a.op.selected").data("value") == "dm" ? ($("#no-hard-puzzle-modal").reveal({
                animation: "fadeAndPop",
                animationspeed: 300,
                closeonbackgroundclick: !0,
                dismissmodalclass: "close-reveal-modal"
            }), e.preventDefault()) : $("a.size.selected").data("value") == 9 && $("a.level.selected").data("value") == "hard" && $("a.op.selected").data("value") == "dm" ? ($("#no-hard-puzzle-modal").reveal({
                animation: "fadeAndPop",
                animationspeed: 300,
                closeonbackgroundclick: !0,
                dismissmodalclass: "close-reveal-modal"
            }), e.preventDefault()) : $("a.level.selected").data("value") == "expert" && $("a.op.selected").data("value") == "dm" && ($("a.size.selected").data("value") == 3 || $("a.size.selected").data("value") == 5 || $("a.size.selected").data("value") == 7 || $("a.size.selected").data("value") == 8 || $("a.size.selected").data("value") == 9) && ($("#no-expert-puzzle-modal").reveal({
                animation: "fadeAndPop",
                animationspeed: 300,
                closeonbackgroundclick: !0,
                dismissmodalclass: "close-reveal-modal"
            }), e.preventDefault())
        })
    },
    // </editor-fold>

    // <editor-fold desc="kenken.play">
    kenken.play = function (e, t) {
        function s() {
            c().click(function (e) {
                var t = $(e.target);
                if (t.hasClass("disabled")) return;
                var r = t.attr("kk_key"),
                    i = t.attr("kk_value");
                n[r] = n[r] == i ? null : i, n.size == 3 && (n.level = "easiest"), a()
            }), $(document).ready(function () {
                a()
            }), $("#club_advanced_button").click(function (e) {
                u()
            }), $("div[free_daily_size]").click(function (e) {
                var t = $(e.target);
                $("div[free_daily_size]").removeClass("selected"), t.addClass("selected"), i = t.attr("free_daily_size"), $("#free_daily_play").attr("href", "/free_daily?size=" + i), $("#free_daily_play").html("Play Now!")
            }), u(!1), o()
        }

        function o() {
            u(n.level != null || n.operations != null)
        }

        function u(e) {
            e == undefined ? r = !r : r = e, r ? ($("#club_advanced_button").html("hide"), $("#club_advanced_container").addClass("advanced")) : ($("#club_advanced_button").html("advanced options"), $("#club_advanced_container").removeClass("advanced"))
        }

        function a() {
            g(), f(), m(), p(), d()
        }

        function f() {
            for (var e in n) l(e, n[e]).removeClass("disabled").addClass("selected")
        }

        function l(e, t) {
            return $("div[kk_key=" + e + "][kk_value=" + t + "]")
        }

        function c() {
            return $("div[kk_key]")
        }

        function h() {
            return n.size != null
        }

        function p() {
            var e = h();
            $("#btn_submit").prop("disabled", !e).addClass("disabled"), e && $("#btn_submit").removeClass("disabled"), e ? $("#btn_submit").attr("value", "Play Now!") : $("#btn_submit").attr("value", "Select size above")
        }

        function d() {
            $.each(n, function (e, t) {
                $("input[name=" + e + "]").val(t)
            })
        }

        function v(t) {
            return $(e.paths).is(function (e, n) {
                return !!t.size && t.size != n.size || !!t.operations && t.operations != n.operations || !!t.level && t.level != n.level ? !1 : !0
            })
        }

        function m(e) {
            c().each(function (e, t) {
                t = $(t);
                var r = t.attr("kk_key"),
                    i = t.attr("kk_value"),
                    s = {
                        level: n.level,
                        size: n.size,
                        operations: n.operations
                    };
                s[r] = i, v(s) && t.removeClass("disabled")
            })
        }

        function g() {
            c().addClass("disabled").removeClass("selected"), l("size", "3").removeClass("disabled")
        }

        function y(e) {
            $.each(e, function (e, t) {
                l(e, t).removeClass("disabled")
            })
        }

        function b() {
            var e = function () {
                typeof socialFlex.socialFlex == "function" ? socialFlex.socialFlex() : setTimeout(e, 100)
            };
            setTimeout(e, 100)
        }

        function w() {
            $("a.size").click(function () {
                $("a.level").removeClass("notAvailable");
                switch ($(this).data("value")) {
                case 3:
                    $("a.level.easy").addClass("notAvailable"), $("a.level.medium").addClass("notAvailable"), $("a.level.hard").addClass("notAvailable"), $("a.level.expert-premium").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable");
                    break;
                case 4:
                    $("a.level.medium").addClass("notAvailable"), $("a.level.hard").addClass("notAvailable"), $("a.level.expert-premium").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable")
                }
            })
        }
        var n = e.selection,
            r = !1,
            i = null;
        s()
    };
// </editor-fold>

var kenken = kenken || {};
// <editor-fold desc="kenken.Game">
kenken.Game = function (e, t, n) {

    function i() {
        //var e = navigator.appName.indexOf("Microsoft") != -1;
        var _kenken = window.KenKen || document.KenKen || _KenKen;

        //return e ? window.KenKen : document.KenKen
        return _kenken;
    }

    function s() { //***
        i().sendPuzzleData(JSON.stringify(e))
            //i().sendPuzzleData(e)
    }

    function o(e) {
        i().sendWidgetAdBeforeGame(JSON.stringify(e))
    }

    function u(e) {
        i().sendWidgetAdBeforePrint(JSON.stringify(e))
    }

    function a(e) {
        i().sendWidgetAdBeforePause(JSON.stringify(e))
    }

    function f(e) {
        i().sendWidgetAdBeforeSolution(JSON.stringify(e))
    }

    function l(e) {
        i().sendWidgetAdOnKengratulations(JSON.stringify(e))
    }

    function c() {
        i().loadPuzzleState(JSON.stringify(e.state))
    }

    function h() {
        r = !1, window.onbeforeunload = null
    }

    function p() {
        if (r) return;
        window.onbeforeunload = function () {
            return t
        }, r = !0
    }

    function d(t) {
        var n = jQuery.parseJSON(t);
        e = n.puzzle, s(!1), n.show_ad && socialFlex.socialFlex()
    }

    function v(e) {
        var t = jQuery.parseJSON(e);
        t && (socialFlex.socialFlex(), _gaq.push(["_trackEvent", "MediaBrix", "GamePage", "CallVideoAd", 1, !0]))
    }

    function m() {
        console.log('m()');
        console.log('i()', i());
        typeof i().sendPuzzleData == "function" && typeof i().sendWidgetAdBeforeGame == "function" ? s() : setTimeout(m, 100)
    }

    function g() {
        typeof i().sendPuzzleData == "function" && typeof socialFlex.socialFlex == "function" ? s() : setTimeout(g, 100)
    }
    var r = !1;
    this.chooseAnother = function () {
            document.location.href = document.location.protocol + "//" + document.location.host + "/play_now"
        },

        this.getPuzzle = function () {
            s()
        },

        this.resetPuzzle = function () {
            s(), $.get("/request_check", {
                id: e.id
            })
        },

        this.solveAnother = function () {
            window.document.location = "/game?solve_another=true"
        },

        this.widgetAdBeforeGame = function () {
            $.get("/game/widget_ad_before_game", null, o)
        },

        this.widgetAdBeforePause = function () {
            $.get("/game/widget_ad_before_pause", null, a)
        },

        this.widgetAdBeforePrint = function () {
            $.get("/game/widget_ad_before_print", null, u)
        },

        this.widgetAdBeforeSolution = function () {
            $.get("/game/widget_ad_before_solution", null, f)
        },

        this.widgetAdOnKengratulations = function () {
            $.get("/game/widget_ad_on_kengratulations", null, l)
        },

        this.puzzleSolved = function () {}, this.autoSave = function (t) {
            $.post("/save_state", {
                id: e.id,
                state: t,
                autosave: 1
            }), e.state = t
        },

        this.saveState = function (t) {
            $.get("/request_check", {
                    id: e.id
                }),

                $.post("/save_state", {
                    id: e.id,
                    state: t
                }, function (e, t, n) {
                    e == "ok" && $("#save-ok").fadeIn(150).delay(5e3).fadeOut(150)
                }),

                e.state = t
        },

        this.readState = function (t) {
            $.get("/read_state", {
                id: e.id
            }, function (t) {
                e.state = t, c()
            })
        },

        this.callMbrix = function () {
            socialFlex.socialFlex(), _gaq.push(["_trackEvent", "MediaBrix", "GamePage", "CallVideoAd", 1, !0])
        },

        this.onReveal = function () {
            $.get("/request_reveal", {
                id: e.id
            })
        },

        this.onCheck = function () {
            $.get("/request_check", {
                id: e.id
            })
        },

        this.onPrint = function () {
            $.get("/show_ad_on_print", {}, v), $.get("/request_check", {
                id: e.id
            })
        },

        this.onPause = function () {
            $.get("/show_ad_on_pause", {}, v), $.get("/request_check", {
                id: e.id
            })
        },

        this.onSolution = function () {
            $.get("/show_ad_on_solution", {}, v), $.get("/request_check", {
                id: e.id
            })
        },

        this.puzzleStarted = function () {
            $.get("/puzzle_started", {
                id: e.id
            })
        },

        this.puzzleReset = function () {
            $.get("/puzzle_started", {
                id: e.id,
                reset: !0
            })
        },

        this.puzzleFinished = function (t) {
            $.get("/puzzle_finished", {
                id: e.id,
                time: t
            }), e.solved = !0, h()
        },

        setTimeout(m, 500)
};

// </editor-fold>

var kenken = kenken || {};
// <editor-fold desc="kenken.recentlyTableClick">
kenken.recentlyTableClick = function () {
    $("tr[puzzle_id]").click(function (e) {
        var t = $(e.target.parentElement),
            n = t.attr("puzzle_id"),
            r = t.attr("state_id"),
            i = "/game/" + n;
        r != "" && (i += "/" + r), window.location = i
    })
};
// </editor-fold>

var kenken = kenken || {};
// <editor-fold desc="kenken.mobile_redirect">
kenken.mobile_redirect = function () {
    if (document.cookie.indexOf("saw_redirect=true") == -1 && (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i))) {
        var e = window.location.href,
            t = "";
        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) t = "iphone";
        navigator.userAgent.match(/iPad/i) && (t = "ipad"), navigator.userAgent.match(/Android/i) && (t = "android");
        if (t != "") {
            var n = window.location.protocol + "//" + window.location.host + "/mobile_redirect/" + t + "?dest=" + e;
            window.location.assign(n)
        }
    }
}, $(document).ready(function () {
    $("form").submit(function () {
        return $("#update-payment-button").attr("disabled", !0), !0
    }), $("#update-payment-button").click(function (e) {
        $("#credit_card_number").val().substring(0, 5) == "XXXX-" && (e.preventDefault(), $("#credit_card_number").addClass("missing"), alert("Please enter your credit card number to continue."))
    }), $(".one-click-form").bind("submit", function (e) {
        $(this).find('input[type="submit"]').attr("disabled", "disabled"), $(this).find('input[type="submit"]').attr("value", "Sending..."), $(this).find('input[type="submit"]').animate({
            opacity: .5
        }), $(this).find("input#update-payment-button").attr("value", "Sending..."), $(this).find("input#update-payment-button").animate({
            opacity: .5
        })
    })
});
// </editor-fold>

var kenken = kenken || {};
// <editor-fold desc="kenken...">
kenken.showHideTeacherAttributes = function () {
        $("#user_is_teacher").click(function () {
            $("#user_is_teacher").attr("checked") ? $("#teacher_attributes").show() : $("#teacher_attributes").hide()
        })
    }, kenken.updateBundleId = function () {
        $("input[name=bundle_id]").click(function (e) {
            var t = $(e.target).attr("value");
            $("input[id=payment_data_bundle_id]").each(function (e, n) {
                $(n).attr("value", t)
            })
        })
    }, kenken.togglePaymentForms = function () {
        $("#renew_form").toggle(), $("#new_form").toggle()
    }, kenken.categoryViewAll = function (e, t) {
        $("#" + e).toggleClass("grid");
        var n = $("#" + e).hasClass("grid") ? "View Less" : "View All";
        $("#" + t).html(n)
    }, kenken.adWatched = function () {
        $.post("/ad_watched", {})
    }, kenken.load_email_form = function () {
        document.cookie.indexOf("saw_gift_form=true") == -1 && ($("#myModal").reveal({
            animation: "fade",
            animationspeed: 500,
            closeonbackgroundclick: !1,
            dismissmodalclass: "close-reveal-modal"
        }), $("#dismiss-email-modal-short").click(function () {
            if (document.cookie.indexOf("saw_gift_form=true") == -1) {
                var e = 6048e5,
                    t = new Date((new Date).getTime() + e);
                document.cookie = "saw_gift_form=true; expires=" + t.toGMTString()
            }
        }), $("#dismiss-email-modal-long").click(function () {
            if (document.cookie.indexOf("saw_gift_form=true") == -1) {
                var e = 31536e7,
                    t = new Date((new Date).getTime() + e);
                document.cookie = "saw_gift_form=true; expires=" + t.toGMTString()
            }
        }))
    }, // </editor-fold>
    function (e, t, n) {
        "use strict";
        var r = e(document),
            i = t.Modernizr;
        e(document).ready(function () {
            e.fn.foundationAlerts ? r.foundationAlerts() : null, e.fn.foundationButtons ? r.foundationButtons() : null, e.fn.foundationAccordion ? r.foundationAccordion() : null, e.fn.foundationNavigation ? r.foundationNavigation() : null, e.fn.foundationTopBar ? r.foundationTopBar() : null, e.fn.foundationCustomForms ? r.foundationCustomForms() : null, e.fn.foundationMediaQueryViewer ? r.foundationMediaQueryViewer() : null, e.fn.foundationTabs ? r.foundationTabs({
                callback: e.foundation.customForms.appendCustomMarkup
            }) : null, e.fn.foundationTooltips ? r.foundationTooltips() : null, e.fn.foundationMagellan ? r.foundationMagellan() : null, e.fn.foundationClearing ? r.foundationClearing() : null, e.fn.placeholder ? e("input, textarea").placeholder() : null, e(document).on("click", ".close_box", function () {
                e(this).parent().remove()
            }), e("#gift_banner").slideDown(2e3)
        }), i.touch && !t.location.hash && e(t).load(function () {
            setTimeout(function () {
                t.scrollTo(0, 1)
            }, 0)
        })
    }(jQuery, this);