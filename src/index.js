!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("mobx"), require("mobx-react")) : "function" == typeof define && define.amd ? define([ "mobx", "mobx-react" ], t) : "object" == typeof exports ? exports["library.js"] = t(require("mobx"), require("mobx-react")) : e["library.js"] = t(e.mobx, e["mobx-react"]);
}(this, function(e, t) {
    return function(e) {
        function t(e) {
            delete installedChunks[e];
        }
        function r(e) {
            var t = document.getElementsByTagName("head")[0], r = document.createElement("script");
            r.type = "text/javascript", r.charset = "utf-8", r.src = f.p + "" + e + "." + _ + ".hot-update.js", 
            t.appendChild(r);
        }
        function n(e) {
            return e = e || 1e4, new Promise(function(t, r) {
                if ("undefined" == typeof XMLHttpRequest) return r(Error("No browser support"));
                try {
                    var n = new XMLHttpRequest(), i = f.p + "" + _ + ".hot-update.json";
                    n.open("GET", i, !0), n.timeout = e, n.send(null);
                } catch (e) {
                    return r(e);
                }
                n.onreadystatechange = function() {
                    if (4 === n.readyState) if (0 === n.status) r(Error("Manifest request to " + i + " timed out.")); else if (404 === n.status) t(); else if (200 !== n.status && 304 !== n.status) r(Error("Manifest request to " + i + " failed.")); else {
                        try {
                            var e = JSON.parse(n.responseText);
                        } catch (e) {
                            return void r(e);
                        }
                        t(e);
                    }
                };
            });
        }
        function i(e) {
            var t = M[e];
            if (!t) return f;
            var r = function(r) {
                return t.hot.active ? (M[r] ? 0 > M[r].parents.indexOf(e) && M[r].parents.push(e) : (S = [ e ], 
                m = r), 0 > t.children.indexOf(r) && t.children.push(r)) : (console.warn("[HMR] unexpected require(" + r + ") from disposed module " + e), 
                S = []), f(r);
            };
            for (var n in f) Object.prototype.hasOwnProperty.call(f, n) && "e" !== n && Object.defineProperty(r, n, function(e) {
                return {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return f[e];
                    },
                    set: function(t) {
                        f[e] = t;
                    }
                };
            }(n));
            return r.e = function(e) {
                function t() {
                    k--, "prepare" === j && (x[e] || u(e), 0 === k && 0 === R && d());
                }
                return "ready" === j && a("prepare"), k++, f.e(e).then(t, function(e) {
                    throw t(), e;
                });
            }, r;
        }
        function o(e) {
            var t = {
                _acceptedDependencies: {},
                _declinedDependencies: {},
                _selfAccepted: !1,
                _selfDeclined: !1,
                _disposeHandlers: [],
                _main: m !== e,
                active: !0,
                accept: function(e, r) {
                    if (void 0 === e) t._selfAccepted = !0; else if ("function" == typeof e) t._selfAccepted = e; else if ("object" == typeof e) for (var n = 0; e.length > n; n++) t._acceptedDependencies[e[n]] = r || function() {}; else t._acceptedDependencies[e] = r || function() {};
                },
                decline: function(e) {
                    if (void 0 === e) t._selfDeclined = !0; else if ("object" == typeof e) for (var r = 0; e.length > r; r++) t._declinedDependencies[e[r]] = !0; else t._declinedDependencies[e] = !0;
                },
                dispose: function(e) {
                    t._disposeHandlers.push(e);
                },
                addDisposeHandler: function(e) {
                    t._disposeHandlers.push(e);
                },
                removeDisposeHandler: function(e) {
                    var r = t._disposeHandlers.indexOf(e);
                    0 > r || t._disposeHandlers.splice(r, 1);
                },
                check: l,
                apply: p,
                status: function(e) {
                    if (!e) return j;
                    E.push(e);
                },
                addStatusHandler: function(e) {
                    E.push(e);
                },
                removeStatusHandler: function(e) {
                    var t = E.indexOf(e);
                    0 > t || E.splice(t, 1);
                },
                data: O[e]
            };
            return m = void 0, t;
        }
        function a(e) {
            j = e;
            for (var t = 0; E.length > t; t++) E[t].call(null, e);
        }
        function s(e) {
            return +e + "" === e ? +e : e;
        }
        function l(e) {
            if ("idle" !== j) throw Error("check() is only allowed in idle status");
            return g = e, a("check"), n(w).then(function(e) {
                if (!e) return a("idle"), null;
                A = {}, x = {}, I = e.c, v = e.h, a("prepare");
                var t = new Promise(function(e, t) {
                    y = {
                        resolve: e,
                        reject: t
                    };
                });
                b = {};
                return u(0), "prepare" === j && 0 === k && 0 === R && d(), t;
            });
        }
        function c(e, t) {
            if (I[e] && A[e]) {
                A[e] = !1;
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (b[r] = t[r]);
                0 == --R && 0 === k && d();
            }
        }
        function u(e) {
            I[e] ? (A[e] = !0, R++, r(e)) : x[e] = !0;
        }
        function d() {
            a("ready");
            var e = y;
            if (y = null, e) if (g) p(g).then(function(t) {
                e.resolve(t);
            }, function(t) {
                e.reject(t);
            }); else {
                var t = [];
                for (var r in b) Object.prototype.hasOwnProperty.call(b, r) && t.push(s(r));
                e.resolve(t);
            }
        }
        function p(r) {
            function n(e, t) {
                for (var r = 0; t.length > r; r++) {
                    var n = t[r];
                    0 > e.indexOf(n) && e.push(n);
                }
            }
            if ("ready" !== j) throw Error("apply() is only allowed in ready status");
            r = r || {};
            var i, o, l, c, u, d = {}, p = [], h = {}, m = function() {
                console.warn("[HMR] unexpected require(" + g.moduleId + ") to disposed module");
            };
            for (var y in b) if (Object.prototype.hasOwnProperty.call(b, y)) {
                u = s(y);
                var g;
                g = b[y] ? function(e) {
                    for (var t = [ e ], r = {}, i = t.slice().map(function(e) {
                        return {
                            chain: [ e ],
                            id: e
                        };
                    }); i.length > 0; ) {
                        var o = i.pop(), a = o.id, s = o.chain;
                        if ((c = M[a]) && !c.hot._selfAccepted) {
                            if (c.hot._selfDeclined) return {
                                type: "self-declined",
                                chain: s,
                                moduleId: a
                            };
                            if (c.hot._main) return {
                                type: "unaccepted",
                                chain: s,
                                moduleId: a
                            };
                            for (var l = 0; c.parents.length > l; l++) {
                                var u = c.parents[l], d = M[u];
                                if (d) {
                                    if (d.hot._declinedDependencies[a]) return {
                                        type: "declined",
                                        chain: s.concat([ u ]),
                                        moduleId: a,
                                        parentId: u
                                    };
                                    0 > t.indexOf(u) && (d.hot._acceptedDependencies[a] ? (r[u] || (r[u] = []), n(r[u], [ a ])) : (delete r[u], 
                                    t.push(u), i.push({
                                        chain: s.concat([ u ]),
                                        id: u
                                    })));
                                }
                            }
                        }
                    }
                    return {
                        type: "accepted",
                        moduleId: e,
                        outdatedModules: t,
                        outdatedDependencies: r
                    };
                }(u) : {
                    type: "disposed",
                    moduleId: y
                };
                var w = !1, P = !1, E = !1, R = "";
                switch (g.chain && (R = "\nUpdate propagation: " + g.chain.join(" -> ")), g.type) {
                  case "self-declined":
                    r.onDeclined && r.onDeclined(g), r.ignoreDeclined || (w = Error("Aborted because of self decline: " + g.moduleId + R));
                    break;

                  case "declined":
                    r.onDeclined && r.onDeclined(g), r.ignoreDeclined || (w = Error("Aborted because of declined dependency: " + g.moduleId + " in " + g.parentId + R));
                    break;

                  case "unaccepted":
                    r.onUnaccepted && r.onUnaccepted(g), r.ignoreUnaccepted || (w = Error("Aborted because " + u + " is not accepted" + R));
                    break;

                  case "accepted":
                    r.onAccepted && r.onAccepted(g), P = !0;
                    break;

                  case "disposed":
                    r.onDisposed && r.onDisposed(g), E = !0;
                    break;

                  default:
                    throw Error("Unexception type " + g.type);
                }
                if (w) return a("abort"), Promise.reject(w);
                if (P) {
                    h[u] = b[u], n(p, g.outdatedModules);
                    for (u in g.outdatedDependencies) Object.prototype.hasOwnProperty.call(g.outdatedDependencies, u) && (d[u] || (d[u] = []), 
                    n(d[u], g.outdatedDependencies[u]));
                }
                E && (n(p, [ g.moduleId ]), h[u] = m);
            }
            var k = [];
            for (o = 0; p.length > o; o++) u = p[o], M[u] && M[u].hot._selfAccepted && k.push({
                module: u,
                errorHandler: M[u].hot._selfAccepted
            });
            a("dispose"), Object.keys(I).forEach(function(e) {
                !1 === I[e] && t(e);
            });
            for (var x, A = p.slice(); A.length > 0; ) if (u = A.pop(), c = M[u]) {
                var C = {}, D = c.hot._disposeHandlers;
                for (l = 0; D.length > l; l++) (i = D[l])(C);
                for (O[u] = C, c.hot.active = !1, delete M[u], l = 0; c.children.length > l; l++) {
                    var T = M[c.children[l]];
                    T && (0 > (x = T.parents.indexOf(u)) || T.parents.splice(x, 1));
                }
            }
            var N, L;
            for (u in d) if (Object.prototype.hasOwnProperty.call(d, u) && (c = M[u])) for (L = d[u], 
            l = 0; L.length > l; l++) N = L[l], 0 > (x = c.children.indexOf(N)) || c.children.splice(x, 1);
            a("apply"), _ = v;
            for (u in h) Object.prototype.hasOwnProperty.call(h, u) && (e[u] = h[u]);
            var W = null;
            for (u in d) if (Object.prototype.hasOwnProperty.call(d, u)) {
                c = M[u], L = d[u];
                var z = [];
                for (o = 0; L.length > o; o++) N = L[o], i = c.hot._acceptedDependencies[N], 0 > z.indexOf(i) && z.push(i);
                for (o = 0; z.length > o; o++) {
                    i = z[o];
                    try {
                        i(L);
                    } catch (e) {
                        r.onErrored && r.onErrored({
                            type: "accept-errored",
                            moduleId: u,
                            dependencyId: L[o],
                            error: e
                        }), r.ignoreErrored || W || (W = e);
                    }
                }
            }
            for (o = 0; k.length > o; o++) {
                var q = k[o];
                u = q.module, S = [ u ];
                try {
                    f(u);
                } catch (e) {
                    if ("function" == typeof q.errorHandler) try {
                        q.errorHandler(e);
                    } catch (t) {
                        r.onErrored && r.onErrored({
                            type: "self-accept-error-handler-errored",
                            moduleId: u,
                            error: t,
                            orginalError: e
                        }), r.ignoreErrored || W || (W = t), W || (W = e);
                    } else r.onErrored && r.onErrored({
                        type: "self-accept-errored",
                        moduleId: u,
                        error: e
                    }), r.ignoreErrored || W || (W = e);
                }
            }
            return W ? (a("fail"), Promise.reject(W)) : (a("idle"), new Promise(function(e) {
                e(p);
            }));
        }
        function f(t) {
            if (M[t]) return M[t].exports;
            var r = M[t] = {
                i: t,
                l: !1,
                exports: {},
                hot: o(t),
                parents: (P = S, S = [], P),
                children: []
            };
            return e[t].call(r.exports, r, r.exports, i(t)), r.l = !0, r.exports;
        }
        var h = this.webpackHotUpdatelibrary_js;
        this.webpackHotUpdatelibrary_js = function(e, t) {
            c(e, t), h && h(e, t);
        };
        var m, y, b, v, g = !0, _ = "7ffe1b169b003714f275", w = 1e4, O = {}, S = [], P = [], E = [], j = "idle", R = 0, k = 0, x = {}, A = {}, I = {}, M = {};
        return f.m = e, f.c = M, f.d = function(e, t, r) {
            f.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, f.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return f.d(t, "a", t), t;
        }, f.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, f.p = "", f.h = function() {
            return _;
        }, i(4)(f.s = 4);
    }([ function(t, r) {
        t.exports = e;
    }, function(e, r) {
        e.exports = t;
    }, function(e, t, r) {
        "use strict";
        function n(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, r) {
                    function n(i, o) {
                        try {
                            var a = t[i](o), s = a.value;
                        } catch (e) {
                            return void r(e);
                        }
                        if (!a.done) return Promise.resolve(s).then(function(e) {
                            n("next", e);
                        }, function(e) {
                            n("throw", e);
                        });
                        e(s);
                    }
                    return n("next");
                });
            };
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var r = 0; t.length > r; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), a = r(0);
        r(1);
        t.default = new (function() {
            function e() {
                i(this, e), this.rSliders = a.observable.map(), this.defaultSlider = {
                    name: "rSlider",
                    className: "",
                    style: {},
                    devMode: !1,
                    media: !1,
                    customAnimation: !1,
                    currentStep: 0,
                    itemsShow: 1,
                    itemsScroll: 1,
                    infinity: !0,
                    draggable: !1,
                    draggableSensitivity: 10,
                    autoPlay: !1,
                    stickOut: 0,
                    onStepChange: function(e) {},
                    onDragEnd: function(e, t) {},
                    leftPosition: 0,
                    sliderWidth: 0,
                    itemWidth: 0,
                    innerWidth: 0,
                    itemsCount: 0,
                    currentVisibleItems: [],
                    customAnimationStatus: "disabled"
                }, this.elements = [ "RSliderArrowL", "RSliderArrowR", "RSliderItems", "RSliderItem", "RSliderPagination" ];
            }
            return o(e, [ {
                key: "create",
                value: function(e) {
                    var t = this;
                    return (0, a.runInAction)("🦄-SLIDER-CREATE-" + (this.rSliders.get(e.name) ? "ERROR (already exists)" : "SUCCESS") + "-" + e.name, function() {
                        t.rSliders.set(e.name, (0, a.observable)(Object.assign(t.defaultSlider, e, {
                            leftPosition: e.leftPosition || t._getLeftPosition(Object.assign(t.defaultSlider, e)),
                            currentVisibleItems: t._getCurrentVisibleItems(Object.assign(t.defaultSlider, e))
                        })));
                    }), this;
                }
            }, {
                key: "update",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments);
                    }
                    var t = n(regeneratorRuntime.mark(function e(t) {
                        var r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (r = this.rSliders.get(t.name), r || (0, a.runInAction)("🦄-SLIDER-UPDATE-ERROR (no such slider) " + t.name, function() {}), 
                                "disabled" === r.customAnimationStatus) {
                                    e.next = 4;
                                    break;
                                }
                                return e.abrupt("return", this);

                              case 4:
                                if (t.currentStep < this.steps.all(r) || (t.currentStep = r.infinity ? 0 : this.steps.all(r) - 1), 
                                0 > t.currentStep && (t.currentStep = r.infinity ? this.steps.all(r) - 1 : 0), !this.slides.isCustomAnimationEffect(r)) {
                                    e.next = 10;
                                    break;
                                }
                                return (0, a.extendObservable)(r, {
                                    customAnimationStatus: "started"
                                }), e.next = 10, this.delay(this.slides.customAnimationDuration(r) / 1.3);

                              case 10:
                                if ((0, a.extendObservable)(r, t), (0, a.extendObservable)(r, {
                                    leftPosition: t.leftPosition || this._getLeftPosition(r),
                                    currentVisibleItems: this._getCurrentVisibleItems(r)
                                }), !this.slides.isCustomAnimationEffect(r)) {
                                    e.next = 17;
                                    break;
                                }
                                return (0, a.extendObservable)(r, {
                                    customAnimationStatus: "running"
                                }), e.next = 16, this.delay(this.slides.customAnimationDuration(r));

                              case 16:
                                (0, a.extendObservable)(r, {
                                    customAnimationStatus: "disabled"
                                });

                              case 17:
                                return e.abrupt("return", this);

                              case 18:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return e;
                }()
            }, {
                key: "remove",
                value: function(e) {
                    var t = e.name;
                    return (0, a.runInAction)("🦄-SLIDER-REMOVE-" + (this.rSliders.delete(t) ? "SUCCESS" : "ERROR (no such slider)") + "-" + t, function() {}), 
                    this;
                }
            }, {
                key: "delay",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                    return new Promise(function(t, r) {
                        setTimeout(function() {
                            t();
                        }, e);
                    });
                }
            }, {
                key: "_getLeftPosition",
                value: function(e) {
                    var t = this.steps.isLast(e) ? this.slides.difference(e) * e.itemWidth : 0, r = -e.currentStep * e.itemsScroll * e.itemWidth + t;
                    return e.stickOut && this.steps.isLast(e) ? r + +e.stickOut : r;
                }
            }, {
                key: "_getCurrentVisibleItems",
                value: function(e) {
                    var t = e.currentStep * e.itemsScroll - (this.steps.isLast(e) ? this.slides.difference(e) : 0);
                    return Array(+e.itemsShow).fill(void 0).map(function(e, r) {
                        return +t + r;
                    });
                }
            }, {
                key: "slides",
                get: function() {
                    var e = this;
                    return {
                        invisible: function(e) {
                            return e.itemsCount - e.itemsShow;
                        },
                        mustBeInvisible: function(t) {
                            return e.steps.toEnd(t) * t.itemsScroll;
                        },
                        difference: function(t) {
                            return e.slides.mustBeInvisible(t) - e.slides.invisible(t);
                        },
                        isCustomAnimationEffect: function(e) {
                            return e.customAnimation && 1 === e.itemsShow && !1 === e.draggable;
                        },
                        customAnimationDuration: function(e) {
                            return e.customAnimation && e.customAnimation.split("_")[2] ? +e.customAnimation.split("_")[2] : 1e3;
                        }
                    };
                }
            }, {
                key: "steps",
                get: function() {
                    var e = this;
                    return {
                        toEnd: function(t) {
                            return Math.ceil(e.slides.invisible(t) / t.itemsScroll);
                        },
                        all: function(t) {
                            return e.steps.toEnd(t) + 1;
                        },
                        isLast: function(t) {
                            return e.steps.all(t) === t.currentStep + 1;
                        }
                    };
                }
            } ]), e;
        }())();
    }, function(e, t, r) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function a(e, t, r, n, i) {
            var o = {};
            return Object.keys(n).forEach(function(e) {
                o[e] = n[e];
            }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), 
            o = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r;
            }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, 
            o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), 
            o = null), o;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s, l = Object.assign || function(e) {
            for (var t = 1; arguments.length > t; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }, c = function() {
            function e(e, t) {
                for (var r = 0; t.length > r; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), u = r(0), d = (r(1), r(2)), p = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(d);
        t.default = (s = function(e) {
            function t() {
                var e, r, o, a;
                n(this, t);
                for (var s = arguments.length, c = Array(s), u = 0; s > u; u++) c[u] = arguments[u];
                return r = o = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(c))), 
                o._lastMatchedMediaName = null, o._timeout = {
                    recalculateSliderItems: null,
                    detectMediaMatch: null
                }, o.onResizeSlider = function() {
                    o.slider.media && o.detectMediaMatch();
                }, o.recalculateSliderItems = function() {
                    clearTimeout(o._timeout.recalculateSliderItems), o._timeout.recalculateSliderItems = setTimeout(function() {
                        var e = o.props.children.type ? 1 : o.props.children.length, t = o.slider.itemsShow >= e, r = t ? o.getElementPureWidth(o.slider.sliderEl) / e : o.getElementPureWidth(o.slider.sliderEl) / o.slider.itemsShow;
                        p.default.update({
                            name: o.sliderName,
                            itemsCount: e,
                            innerWidth: r * e,
                            itemWidth: r,
                            itemsShow: t ? e : o.slider.itemsShow,
                            infinity: !t && o.slider.infinity
                        });
                    }, 300);
                }, o.detectMediaMatch = function() {
                    clearTimeout(o._timeout.detectMediaMatch), o._timeout.detectMediaMatch = setTimeout(function() {
                        var e = !1;
                        Object.keys(o.slider.media).some(function(t) {
                            var r = t.split("*");
                            if (r[0] = "" === r[0] ? 0 : +r[0], r[1] = "" === r[1] ? 99999 : +r[1] - 1, o.documentWidth >= r[0] && r[1] >= o.documentWidth) {
                                if (e = !0, o._lastMatchedMediaName === t) return;
                                return o._lastMatchedMediaName = t, p.default.update(l({
                                    name: o.slider.name
                                }, o.slider.media[t], {
                                    currentStep: 0
                                })), !0;
                            }
                        }), L("this._lastMatchedMediaName", o._lastMatchedMediaName), e || "default" === o._lastMatchedMediaName || (o._lastMatchedMediaName = "default", 
                        p.default.update(l({
                            name: o.slider.name
                        }, o.props)));
                    }, 300);
                }, a = r, i(o, a);
            }
            return o(t, e), c(t, [ {
                key: "getElementPureWidth",
                value: function(e) {
                    var t = window.getComputedStyle(e);
                    return e.offsetWidth - (parseFloat(t.paddingLeft) + parseFloat(t.paddingRight));
                }
            }, {
                key: "sliderName",
                get: function() {
                    return this.props.name || this.context.name;
                }
            }, {
                key: "slider",
                get: function() {
                    return p.default.rSliders.get(this.sliderName);
                }
            }, {
                key: "elements",
                get: function() {
                    return p.default.elements;
                }
            }, {
                key: "isCustomAnimationEffect",
                get: function() {
                    return p.default.slides.isCustomAnimationEffect(this.slider);
                }
            }, {
                key: "documentWidth",
                get: function() {
                    return Math.max(document.documentElement.clientWidth, document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth);
                }
            }, {
                key: "isTouchDevice",
                get: function() {
                    var e = document.createElement("div");
                    return e.setAttribute("ongesturestart", "return;"), "function" == typeof e.ongesturestart;
                }
            } ]), t;
        }(React.Component), a(s.prototype, "sliderName", [ u.computed ], Object.getOwnPropertyDescriptor(s.prototype, "sliderName"), s.prototype), 
        a(s.prototype, "slider", [ u.computed ], Object.getOwnPropertyDescriptor(s.prototype, "slider"), s.prototype), 
        a(s.prototype, "elements", [ u.computed ], Object.getOwnPropertyDescriptor(s.prototype, "elements"), s.prototype), 
        a(s.prototype, "isCustomAnimationEffect", [ u.computed ], Object.getOwnPropertyDescriptor(s.prototype, "isCustomAnimationEffect"), s.prototype), 
        s);
    }, function(e, t, r) {
        e.exports = r(5);
    }, function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            RSlider: n(r(6)).default,
            RSliderItems: n(r(7)).default,
            RSliderArrowL: n(r(10)).default,
            RSliderArrowR: n(r(11)).default,
            RSliderPagination: n(r(12)).default
        };
    }, function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s, l, c, u = Object.assign || function(e) {
            for (var t = 1; arguments.length > t; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }, d = function() {
            function e(e, t) {
                for (var r = 0; t.length > r; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), p = r(0), f = r(1), h = r(2), m = n(h), y = r(3), b = n(y);
        t.default = (0, f.observer)((c = l = function(e) {
            function t() {
                return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return a(t, e), d(t, [ {
                key: "getChildContext",
                value: function() {
                    return {
                        name: this.props.name
                    };
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    m.default.create(u({}, this.props, {
                        sliderEl: this.refs.rSlider,
                        sliderWidth: this.refs.rSlider.offsetWidth,
                        itemWidth: this.getElementPureWidth(this.refs.rSlider) / this.props.itemsShow
                    })), this.slider.media && this.detectMediaMatch(), window.addEventListener("resize", this.onResizeSlider), 
                    this["RSlider | changed: this.slider.currentStep | run: this.slider.onStepChange()"] = (0, 
                    p.reaction)(function() {
                        return e.slider.currentStep;
                    }, function() {
                        return e.slider.onStepChange(e.slider);
                    }, {
                        name: "RSlider | changed: this.slider.currentStep | run: this.slider.onStepChange()"
                    });
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {}
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this["RSlider | changed: this.slider.currentStep | run: this.slider.onStepChange()"](), 
                    window.removeEventListener("resize", this.onResizeSlider), m.default.remove({
                        name: this.slider.name
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return React.createElement("div", null, React.createElement("div", {
                        className: "rslider " + (this.slider ? this.slider.className : ""),
                        ref: "rSlider",
                        style: this.slider ? u({}, this.slider.style, {
                            width: "100%",
                            boxSizing: "content-box",
                            paddingRight: this.props.stickOut + "px"
                        }) : {
                            paddingRight: this.props.stickOut + "px"
                        }
                    }, this.slider ? this.props.children : null), this.slider && this.slider.devMode ? React.createElement("ul", {
                        style: {
                            float: "left",
                            width: "100%"
                        }
                    }, Object.keys(this.slider).map(function(t) {
                        var r = e.slider[t];
                        return React.createElement("p", {
                            key: t
                        }, t, ": ", r instanceof Object || r instanceof Function || "children" === t ? "[ content ]" : JSON.stringify(e.slider[t]));
                    })) : null);
                }
            } ]), t;
        }(b.default), l.propTypes = {
            name: ReactPropTypes.string.isRequired,
            className: ReactPropTypes.string,
            style: ReactPropTypes.object,
            devMode: ReactPropTypes.bool,
            currentStep: ReactPropTypes.number
        }, l.defaultProps = {
            name: "rSlider",
            className: "",
            style: {},
            devMode: !1,
            media: !1,
            customAnimation: !1,
            currentStep: 0,
            itemsShow: 1,
            itemsScroll: 1,
            infinity: !0,
            draggable: !1,
            draggableSensitivity: 10,
            autoPlay: !1,
            stickOut: 0,
            onStepChange: function(e) {},
            onDragEnd: function(e, t) {}
        }, l.childContextTypes = {
            name: ReactPropTypes.string.isRequired
        }, s = c)) || s;
    }, function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s, l, c, u = Object.assign || function(e) {
            for (var t = 1; arguments.length > t; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }, d = function() {
            function e(e, t) {
                for (var r = 0; t.length > r; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), p = (r(0), r(1)), f = r(3), h = n(f), m = r(8), y = n(m), b = r(9), v = n(b);
        t.default = (0, p.observer)((c = l = function(e) {
            function t() {
                var e, r, n, a;
                i(this, t);
                for (var s = arguments.length, l = Array(s), c = 0; s > c; c++) l[c] = arguments[c];
                return r = n = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(l))), 
                n.renderSliderItems = function() {
                    return n.props.children.type ? n.renderSliderItem(n.props.children, 0) : n.props.children.map(function(e, t) {
                        return n.renderSliderItem(e, t);
                    });
                }, n.renderSliderItem = function(e, t) {
                    return React.createElement(v.default, {
                        itemIndex: t,
                        key: t
                    }, e);
                }, a = r, o(n, a);
            }
            return a(t, e), d(t, [ {
                key: "componentDidMount",
                value: function() {
                    this.recalculateSliderItems(), window.addEventListener("resize", this.recalculateSliderItems);
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("resize", this.recalculateSliderItems);
                }
            }, {
                key: "render",
                value: function() {
                    return this.slider.devMode && console.log("RSliderItems render"), React.createElement("div", {
                        className: "rslider__list " + this.props.className,
                        style: u({}, this.props.style, {
                            overflow: "visible"
                        })
                    }, this.slider.draggable ? React.createElement(y.default, null, this.renderSliderItems()) : this.isCustomAnimationEffect ? React.createElement(v.default, {
                        itemIndex: this.slider.currentStep
                    }, this.props.children.type ? this.props.children : this.props.children[this.slider.currentStep]) : React.createElement("div", {
                        className: "rslider__track",
                        style: {
                            width: this.slider.innerWidth,
                            left: this.slider.leftPosition
                        }
                    }, this.renderSliderItems()));
                }
            } ]), t;
        }(h.default), l._name = "RSliderItems", l.propTypes = {
            className: ReactPropTypes.string,
            style: ReactPropTypes.object
        }, l.defaultProps = {
            classes: "",
            style: {}
        }, l.contextTypes = {
            name: ReactPropTypes.string.isRequired
        }, s = c)) || s;
    }, function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s, l, c, u = function() {
            function e(e, t) {
                for (var r = 0; t.length > r; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), d = (r(0), r(1)), p = r(2), f = n(p), h = r(3), m = n(h);
        t.default = (0, d.observer)((c = l = function(e) {
            function t() {
                var e, r, n, a;
                i(this, t);
                for (var s = arguments.length, l = Array(s), c = 0; s > c; c++) l[c] = arguments[c];
                return r = n = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(l))), 
                n.draggable = {
                    x: 0,
                    startX: 0,
                    el: null,
                    isSelectedEl: !1,
                    init: function(e) {
                        n.draggable.el = e, n.isTouchDevice ? (n.draggable.el.addEventListener("touchstart", function(e) {
                            n.draggable.x = e.touches[0].pageX, n.draggable.start();
                        }, !1), n.draggable.el.addEventListener("touchmove", n.draggable.move, !1), window.addEventListener("touchend", n.draggable.stop, !1)) : (n.draggable.el.addEventListener("mousedown", n.draggable.start, !1), 
                        document.addEventListener("mousemove", n.draggable.move, !1), document.addEventListener("mouseup", n.draggable.stop, !1));
                    },
                    start: function() {
                        n.draggable.isSelectedEl = !0, n.draggable.startX = n.draggable.x - n.draggable.el.offsetLeft;
                    },
                    move: function(e) {
                        n.draggable.x = n.isTouchDevice ? e.touches[0].pageX : document.all ? window.event.clientX : e.pageX, 
                        n.draggable.isSelectedEl && (e.preventDefault(), n.draggable.el.className = "rslider__track rslider__track_state_selected", 
                        f.default.update({
                            name: n.slider.name,
                            leftPosition: n.draggable.x - n.draggable.startX
                        }));
                    },
                    stop: function() {
                        if (n.draggable.isSelectedEl) {
                            n.draggable.isSelectedEl = !1, n.draggable.el.className = "rslider__track";
                            var e = n.slider.itemWidth * n.slider.itemsScroll, t = n.draggable.startX - n.draggable.x, r = t - n.slider.currentStep * e, i = Math.round(Math.abs(100 * r / n.slider.itemWidth));
                            f.default.update({
                                name: n.slider.name,
                                currentStep: i > n.slider.draggableSensitivity ? r > 0 ? n.slider.currentStep + 1 : n.slider.currentStep - 1 : Math.round(t / e)
                            }), n.slider.onDragEnd(n.slider, n.draggable);
                        }
                    },
                    remove: function() {
                        n.isTouchDevice ? (n.draggable.el.removeEventListener("touchstart", n.draggable.start), 
                        document.removeEventListener("touchmove", n.draggable.move), window.removeEventListener("touchend", n.draggable.stop)) : (n.draggable.el.removeEventListener("mousedown", n.draggable.start), 
                        document.removeEventListener("mousemove", n.draggable.move), document.removeEventListener("mouseup", n.draggable.stop));
                    }
                }, a = r, o(n, a);
            }
            return a(t, e), u(t, [ {
                key: "componentDidMount",
                value: function() {
                    this.draggable.init(this.refs.rSliderDraggable);
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.draggable.remove();
                }
            }, {
                key: "render",
                value: function() {
                    return this.slider.devMode && console.log("RSliderDraggable render"), React.createElement("div", {
                        className: "rslider__track",
                        ref: "rSliderDraggable",
                        style: {
                            width: this.slider.innerWidth,
                            left: this.slider.leftPosition
                        }
                    }, this.props.children);
                }
            } ]), t;
        }(m.default), l._name = "RSliderArrowR", l.contextTypes = {
            name: ReactPropTypes.string.isRequired
        }, s = c)) || s;
    }, function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function s(e, t, r, n, i) {
            var o = {};
            return Object.keys(n).forEach(function(e) {
                o[e] = n[e];
            }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), 
            o = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r;
            }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, 
            o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), 
            o = null), o;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l, c, u, d, p = function() {
            function e(e, t) {
                for (var r = 0; t.length > r; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), f = r(0), h = r(1), m = r(2), y = n(m), b = r(3), v = n(b);
        t.default = (0, h.observer)((d = u = function(e) {
            function t() {
                return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return a(t, e), p(t, [ {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.slider.autoPlay && (this["RSliderItem | changed: rSliderModel.currentStep | run: this.startItemAutoPlayInterval()"] = (0, 
                    f.reaction)(function() {
                        return e.slider.currentVisibleItems[0] === e.props.itemIndex;
                    }, function() {
                        return e.isAutoPlay ? e.startItemAutoPlayInterval() : clearTimeout(e.timer);
                    }, {
                        name: "RSliderItem | changed: rSliderModel.currentStep | run: this.startItemAutoPlayInterval()",
                        fireImmediately: this.isAutoPlay
                    }));
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.slider.autoPlay && this["RSliderItem | changed: rSliderModel.currentStep | run: this.startItemAutoPlayInterval()"]();
                }
            }, {
                key: "startItemAutoPlayInterval",
                value: function() {
                    var e = this;
                    this.timer = setTimeout(function() {
                        y.default.update({
                            name: e.slider.name,
                            currentStep: y.default.steps.isLast(e.slider) ? 0 : e.slider.currentStep + 1
                        });
                    }, this.duration);
                }
            }, {
                key: "render",
                value: function() {
                    return this.slider.devMode && console.log("RSliderItem render"), React.createElement("div", {
                        className: this.className,
                        style: {
                            width: this.slider.itemWidth,
                            height: this.isCurrentVisibleItem ? "auto" : 0,
                            animationDuration: this.animationDurationStyle
                        }
                    }, this.props.children);
                }
            }, {
                key: "isAutoPlay",
                get: function() {
                    return this.slider.currentVisibleItems[0] === this.props.itemIndex && this.slider.autoPlay;
                }
            }, {
                key: "duration",
                get: function() {
                    return this.props.children.props ? this.props.children.props["data-duration"] || 5e3 : null;
                }
            }, {
                key: "isCurrentVisibleItem",
                get: function() {
                    return this.slider.currentVisibleItems.includes(this.props.itemIndex);
                }
            }, {
                key: "className",
                get: function() {
                    switch (this.slider.customAnimationStatus) {
                      case "started":
                        return "rslider__slide animated " + this.slider.customAnimation.split("_")[0];

                      case "running":
                        return "rslider__slide animated " + this.slider.customAnimation.split("_")[1];

                      case "disabled":
                        return "rslider__slide ";
                    }
                }
            }, {
                key: "animationDurationStyle",
                get: function() {
                    return this.isCustomAnimationEffect ? y.default.slides.customAnimationDuration(this.slider) / 1e3 + "s" : "";
                }
            } ]), t;
        }(v.default), u._name = "RSliderItems", u.propTypes = {
            itemIndex: React.PropTypes.number.isRequired
        }, u.contextTypes = {
            name: React.PropTypes.string.isRequired
        }, c = d, s(c.prototype, "isAutoPlay", [ f.computed ], Object.getOwnPropertyDescriptor(c.prototype, "isAutoPlay"), c.prototype), 
        s(c.prototype, "duration", [ f.computed ], Object.getOwnPropertyDescriptor(c.prototype, "duration"), c.prototype), 
        s(c.prototype, "isCurrentVisibleItem", [ f.computed ], Object.getOwnPropertyDescriptor(c.prototype, "isCurrentVisibleItem"), c.prototype), 
        s(c.prototype, "className", [ f.computed ], Object.getOwnPropertyDescriptor(c.prototype, "className"), c.prototype), 
        s(c.prototype, "animationDurationStyle", [ f.computed ], Object.getOwnPropertyDescriptor(c.prototype, "animationDurationStyle"), c.prototype), 
        l = c)) || l;
    }, function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function s(e, t, r, n, i) {
            var o = {};
            return Object.keys(n).forEach(function(e) {
                o[e] = n[e];
            }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), 
            o = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r;
            }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, 
            o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), 
            o = null), o;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l, c, u, d, p = function() {
            function e(e, t) {
                for (var r = 0; t.length > r; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), f = r(0), h = r(1), m = r(2), y = n(m), b = r(3), v = n(b);
        t.default = (0, h.observer)((d = u = function(e) {
            function t() {
                var e, r, n, a;
                i(this, t);
                for (var s = arguments.length, l = Array(s), c = 0; s > c; c++) l[c] = arguments[c];
                return r = n = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(l))), 
                n.onClick = function(e) {
                    y.default.update({
                        name: n.slider.name,
                        currentStep: n.slider.currentStep - 1
                    }), n.props.onClick && n.props.onClick(n.slider);
                }, a = r, o(n, a);
            }
            return a(t, e), p(t, [ {
                key: "render",
                value: function() {
                    return this.slider.devMode && console.log("RSliderArrowL render"), React.createElement("button", {
                        className: this.arrowClasses,
                        style: this.props.style,
                        tabIndex: "1",
                        onClick: this.onClick
                    }, "prev");
                }
            }, {
                key: "disableArrow",
                get: function() {
                    return 0 === this.slider.currentStep && !this.slider.infinity;
                }
            }, {
                key: "arrowState",
                get: function() {
                    return this.disableArrow ? "rslider__arrow_state_disabled" : "";
                }
            }, {
                key: "arrowClasses",
                get: function() {
                    return "rslider__arrow rslider__arrow_type_left " + this.arrowState + " " + this.props.classes;
                }
            } ]), t;
        }(v.default), u._name = "RSliderArrowL", u.propTypes = {
            classes: ReactPropTypes.string,
            style: ReactPropTypes.object,
            onClick: ReactPropTypes.func
        }, u.defaultProps = {
            classes: "",
            style: {},
            onClick: null
        }, u.contextTypes = {
            name: ReactPropTypes.string.isRequired
        }, c = d, s(c.prototype, "disableArrow", [ f.computed ], Object.getOwnPropertyDescriptor(c.prototype, "disableArrow"), c.prototype), 
        s(c.prototype, "arrowState", [ f.computed ], Object.getOwnPropertyDescriptor(c.prototype, "arrowState"), c.prototype), 
        s(c.prototype, "arrowClasses", [ f.computed ], Object.getOwnPropertyDescriptor(c.prototype, "arrowClasses"), c.prototype), 
        l = c)) || l;
    }, function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function s(e, t, r, n, i) {
            var o = {};
            return Object.keys(n).forEach(function(e) {
                o[e] = n[e];
            }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), 
            o = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r;
            }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, 
            o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), 
            o = null), o;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l, c, u, d, p = function() {
            function e(e, t) {
                for (var r = 0; t.length > r; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), f = r(0), h = r(1), m = r(2), y = n(m), b = r(3), v = n(b);
        t.default = (0, h.observer)((d = u = function(e) {
            function t() {
                var e, r, n, a;
                i(this, t);
                for (var s = arguments.length, l = Array(s), c = 0; s > c; c++) l[c] = arguments[c];
                return r = n = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(l))), 
                n.onClick = function(e) {
                    y.default.update({
                        name: n.slider.name,
                        currentStep: n.slider.currentStep + 1
                    }), n.props.onClick && n.props.onClick(n.slider);
                }, a = r, o(n, a);
            }
            return a(t, e), p(t, [ {
                key: "render",
                value: function() {
                    return this.slider.devMode && console.log("RSliderArrowR render"), React.createElement("div", {
                        className: this.arrowClasses,
                        style: this.props.style,
                        tabIndex: "1",
                        onClick: this.onClick
                    }, this.props.children);
                }
            }, {
                key: "disableArrow",
                get: function() {
                    return y.default.steps.isLast(this.slider) && !this.slider.infinity;
                }
            }, {
                key: "arrowState",
                get: function() {
                    return this.disableArrow ? "rslider__arrow_state_disabled" : "";
                }
            }, {
                key: "arrowClasses",
                get: function() {
                    return "rslider__arrow rslider__arrow_type_right " + this.arrowState + " " + this.props.classes;
                }
            } ]), t;
        }(v.default), u._name = "RSliderArrowR", u.propTypes = {
            classes: ReactPropTypes.string,
            style: ReactPropTypes.object,
            onClick: ReactPropTypes.func
        }, u.defaultProps = {
            classes: "",
            style: {},
            onClick: null
        }, u.contextTypes = {
            name: ReactPropTypes.string.isRequired
        }, c = d, s(c.prototype, "disableArrow", [ f.computed ], Object.getOwnPropertyDescriptor(c.prototype, "disableArrow"), c.prototype), 
        s(c.prototype, "arrowState", [ f.computed ], Object.getOwnPropertyDescriptor(c.prototype, "arrowState"), c.prototype), 
        s(c.prototype, "arrowClasses", [ f.computed ], Object.getOwnPropertyDescriptor(c.prototype, "arrowClasses"), c.prototype), 
        l = c)) || l;
    }, function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s, l, c, u = function() {
            function e(e, t) {
                for (var r = 0; t.length > r; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), d = (r(0), r(1)), p = r(2), f = n(p), h = r(3), m = n(h);
        t.default = (0, d.observer)((c = l = function(e) {
            function t() {
                var e, r, n, a;
                i(this, t);
                for (var s = arguments.length, l = Array(s), c = 0; s > c; c++) l[c] = arguments[c];
                return r = n = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(l))), 
                n.onClick = function(e) {
                    f.default.update({
                        name: n.slider.name,
                        currentStep: e
                    });
                }, a = r, o(n, a);
            }
            return a(t, e), u(t, [ {
                key: "render",
                value: function() {
                    var e = this;
                    return 2 > f.default.steps.all(this.slider) ? null : (this.slider.devMode && console.log("RSliderPagination render"), 
                    React.createElement("ul", {
                        className: "rslider__pagination " + this.props.className
                    }, Array(f.default.steps.all(this.slider)).fill(void 0).map(function(t, r) {
                        return React.createElement("li", {
                            key: r,
                            className: "rslider__pager-item " + (e.slider.currentStep === r ? "rslider__pager-item_state_active" : ""),
                            onClick: function() {
                                return e.onClick(r);
                            }
                        }, e.props.children ? e.props.children[r] || React.createElement("button", {
                            className: "rslider__pager-btn"
                        }, r) : React.createElement("button", {
                            className: "rslider__pager-btn"
                        }, r));
                    })));
                }
            } ]), t;
        }(m.default), l._name = "RSliderPagination", l.propTypes = {
            className: ReactPropTypes.string
        }, l.defaultProps = {
            className: ""
        }, l.contextTypes = {
            name: ReactPropTypes.string.isRequired
        }, s = c)) || s;
    } ]);
});