!function(e) {
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
        var t = D[e];
        if (!t) return f;
        var r = function(r) {
            return t.hot.active ? (D[r] ? 0 > D[r].parents.indexOf(e) && D[r].parents.push(e) : (S = [ e ], 
            y = r), 0 > t.children.indexOf(r) && t.children.push(r)) : (console.warn("[HMR] unexpected require(" + r + ") from disposed module " + e), 
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
                x--, "prepare" === j && (A[e] || c(e), 0 === x && 0 === k && p());
            }
            return "ready" === j && a("prepare"), x++, f.e(e).then(t, function(e) {
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
            _main: y !== e,
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
            check: u,
            apply: d,
            status: function(e) {
                if (!e) return j;
                P.push(e);
            },
            addStatusHandler: function(e) {
                P.push(e);
            },
            removeStatusHandler: function(e) {
                var t = P.indexOf(e);
                0 > t || P.splice(t, 1);
            },
            data: E[e]
        };
        return y = void 0, t;
    }
    function a(e) {
        j = e;
        for (var t = 0; P.length > t; t++) P[t].call(null, e);
    }
    function s(e) {
        return +e + "" === e ? +e : e;
    }
    function u(e) {
        if ("idle" !== j) throw Error("check() is only allowed in idle status");
        return g = e, a("check"), n(w).then(function(e) {
            if (!e) return a("idle"), null;
            R = {}, A = {}, I = e.c, v = e.h, a("prepare");
            var t = new Promise(function(e, t) {
                m = {
                    resolve: e,
                    reject: t
                };
            });
            b = {};
            return c(0), "prepare" === j && 0 === x && 0 === k && p(), t;
        });
    }
    function l(e, t) {
        if (I[e] && R[e]) {
            R[e] = !1;
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (b[r] = t[r]);
            0 == --k && 0 === x && p();
        }
    }
    function c(e) {
        I[e] ? (R[e] = !0, k++, r(e)) : A[e] = !0;
    }
    function p() {
        a("ready");
        var e = m;
        if (m = null, e) if (g) d(g).then(function(t) {
            e.resolve(t);
        }, function(t) {
            e.reject(t);
        }); else {
            var t = [];
            for (var r in b) Object.prototype.hasOwnProperty.call(b, r) && t.push(s(r));
            e.resolve(t);
        }
    }
    function d(r) {
        function n(e, t) {
            for (var r = 0; t.length > r; r++) {
                var n = t[r];
                0 > e.indexOf(n) && e.push(n);
            }
        }
        if ("ready" !== j) throw Error("apply() is only allowed in ready status");
        r = r || {};
        var i, o, u, l, c, p = {}, d = [], h = {}, y = function() {
            console.warn("[HMR] unexpected require(" + g.moduleId + ") to disposed module");
        };
        for (var m in b) if (Object.prototype.hasOwnProperty.call(b, m)) {
            c = s(m);
            var g;
            g = b[m] ? function(e) {
                for (var t = [ e ], r = {}, i = t.slice().map(function(e) {
                    return {
                        chain: [ e ],
                        id: e
                    };
                }); i.length > 0; ) {
                    var o = i.pop(), a = o.id, s = o.chain;
                    if ((l = D[a]) && !l.hot._selfAccepted) {
                        if (l.hot._selfDeclined) return {
                            type: "self-declined",
                            chain: s,
                            moduleId: a
                        };
                        if (l.hot._main) return {
                            type: "unaccepted",
                            chain: s,
                            moduleId: a
                        };
                        for (var u = 0; l.parents.length > u; u++) {
                            var c = l.parents[u], p = D[c];
                            if (p) {
                                if (p.hot._declinedDependencies[a]) return {
                                    type: "declined",
                                    chain: s.concat([ c ]),
                                    moduleId: a,
                                    parentId: c
                                };
                                0 > t.indexOf(c) && (p.hot._acceptedDependencies[a] ? (r[c] || (r[c] = []), n(r[c], [ a ])) : (delete r[c], 
                                t.push(c), i.push({
                                    chain: s.concat([ c ]),
                                    id: c
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
            }(c) : {
                type: "disposed",
                moduleId: m
            };
            var w = !1, O = !1, P = !1, k = "";
            switch (g.chain && (k = "\nUpdate propagation: " + g.chain.join(" -> ")), g.type) {
              case "self-declined":
                r.onDeclined && r.onDeclined(g), r.ignoreDeclined || (w = Error("Aborted because of self decline: " + g.moduleId + k));
                break;

              case "declined":
                r.onDeclined && r.onDeclined(g), r.ignoreDeclined || (w = Error("Aborted because of declined dependency: " + g.moduleId + " in " + g.parentId + k));
                break;

              case "unaccepted":
                r.onUnaccepted && r.onUnaccepted(g), r.ignoreUnaccepted || (w = Error("Aborted because " + c + " is not accepted" + k));
                break;

              case "accepted":
                r.onAccepted && r.onAccepted(g), O = !0;
                break;

              case "disposed":
                r.onDisposed && r.onDisposed(g), P = !0;
                break;

              default:
                throw Error("Unexception type " + g.type);
            }
            if (w) return a("abort"), Promise.reject(w);
            if (O) {
                h[c] = b[c], n(d, g.outdatedModules);
                for (c in g.outdatedDependencies) Object.prototype.hasOwnProperty.call(g.outdatedDependencies, c) && (p[c] || (p[c] = []), 
                n(p[c], g.outdatedDependencies[c]));
            }
            P && (n(d, [ g.moduleId ]), h[c] = y);
        }
        var x = [];
        for (o = 0; d.length > o; o++) c = d[o], D[c] && D[c].hot._selfAccepted && x.push({
            module: c,
            errorHandler: D[c].hot._selfAccepted
        });
        a("dispose"), Object.keys(I).forEach(function(e) {
            !1 === I[e] && t(e);
        });
        for (var A, R = d.slice(); R.length > 0; ) if (c = R.pop(), l = D[c]) {
            var M = {}, C = l.hot._disposeHandlers;
            for (u = 0; C.length > u; u++) (i = C[u])(M);
            for (E[c] = M, l.hot.active = !1, delete D[c], u = 0; l.children.length > u; u++) {
                var N = D[l.children[u]];
                N && (0 > (A = N.parents.indexOf(c)) || N.parents.splice(A, 1));
            }
        }
        var T, W;
        for (c in p) if (Object.prototype.hasOwnProperty.call(p, c) && (l = D[c])) for (W = p[c], 
        u = 0; W.length > u; u++) T = W[u], 0 > (A = l.children.indexOf(T)) || l.children.splice(A, 1);
        a("apply"), _ = v;
        for (c in h) Object.prototype.hasOwnProperty.call(h, c) && (e[c] = h[c]);
        var z = null;
        for (c in p) if (Object.prototype.hasOwnProperty.call(p, c)) {
            l = D[c], W = p[c];
            var q = [];
            for (o = 0; W.length > o; o++) T = W[o], i = l.hot._acceptedDependencies[T], 0 > q.indexOf(i) && q.push(i);
            for (o = 0; q.length > o; o++) {
                i = q[o];
                try {
                    i(W);
                } catch (e) {
                    r.onErrored && r.onErrored({
                        type: "accept-errored",
                        moduleId: c,
                        dependencyId: W[o],
                        error: e
                    }), r.ignoreErrored || z || (z = e);
                }
            }
        }
        for (o = 0; x.length > o; o++) {
            var F = x[o];
            c = F.module, S = [ c ];
            try {
                f(c);
            } catch (e) {
                if ("function" == typeof F.errorHandler) try {
                    F.errorHandler(e);
                } catch (t) {
                    r.onErrored && r.onErrored({
                        type: "self-accept-error-handler-errored",
                        moduleId: c,
                        error: t,
                        orginalError: e
                    }), r.ignoreErrored || z || (z = t), z || (z = e);
                } else r.onErrored && r.onErrored({
                    type: "self-accept-errored",
                    moduleId: c,
                    error: e
                }), r.ignoreErrored || z || (z = e);
            }
        }
        return z ? (a("fail"), Promise.reject(z)) : (a("idle"), new Promise(function(e) {
            e(d);
        }));
    }
    function f(t) {
        if (D[t]) return D[t].exports;
        var r = D[t] = {
            i: t,
            l: !1,
            exports: {},
            hot: o(t),
            parents: (O = S, S = [], O),
            children: []
        };
        return e[t].call(r.exports, r, r.exports, i(t)), r.l = !0, r.exports;
    }
    var h = this.webpackHotUpdate;
    this.webpackHotUpdate = function(e, t) {
        l(e, t), h && h(e, t);
    };
    var y, m, b, v, g = !0, _ = "4db16c08e3c66b1a369c", w = 1e4, E = {}, S = [], O = [], P = [], j = "idle", k = 0, x = 0, A = {}, R = {}, I = {}, D = {};
    f.m = e, f.c = D, f.d = function(e, t, r) {
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
    }, i(17)(f.s = 17);
}([ function(e, t) {
    e.exports = mobx - react;
}, function(e, t) {
    e.exports = mobx;
}, function(e, t, r) {
    "use strict";
    e.exports = r(20);
}, function(e, t, r) {
    "use strict";
    var n = r(10), i = n;
    e.exports = i;
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
    }(), a = r(1);
    t.default = new (function() {
        function e() {
            i(this, e), this.rSliders = a.observable.map(), this.defaultSlider = {
                name: "default",
                className: "",
                style: {},
                devMode: !1,
                media: !1,
                customAnimation: !1,
                currentStep: 5,
                itemsShow: 5,
                itemsScroll: 3,
                infinity: !0,
                draggable: !1,
                draggableSensitivity: 10,
                autoPlay: !1,
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
                return console.time("RSlider render time"), e.children && (e.children = "< JSX >"), 
                (0, a.runInAction)("🦄-SLIDER-CREATE-" + (this.rSliders.get(e.name) ? "ERROR (already exists)" : "SUCCESS") + "-" + e.name, function() {
                    t.rSliders.set(e.name, (0, a.observable)(_.extend(t.defaultSlider, e, {
                        name: e.name,
                        currentVisibleItems: t._getCurrentVisibleItems(_.extend(t.defaultSlider, e))
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
                    var r, n = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (r = this.rSliders.get(t.name), r && r.devMode && console.time("RSlider render time"), 
                            r || (0, a.runInAction)("🦄-SLIDER-UPDATE-ERROR (no such slider) " + t.name, function() {}), 
                            "disabled" === r.customAnimationStatus) {
                                e.next = 5;
                                break;
                            }
                            return e.abrupt("return", this);

                          case 5:
                            if (t.children && (t.children = "< JSX >"), !_.isUndefined(t.currentStep)) {
                                e.next = 9;
                                break;
                            }
                            return (0, a.extendObservable)(r, t), e.abrupt("return", this);

                          case 9:
                            if (t.currentStep < this.steps.all(r) || (t.currentStep = r.infinity ? 0 : this.steps.all(r) - 1), 
                            0 > t.currentStep && (t.currentStep = r.infinity ? this.steps.all(r) - 1 : 0), !this.slides.isCustomAnimationEffect(r)) {
                                e.next = 15;
                                break;
                            }
                            return (0, a.extendObservable)(r, {
                                customAnimationStatus: "started"
                            }), e.next = 15, this.delay(this.slides.customAnimationDuration(r) / 1.3);

                          case 15:
                            if ((0, a.transaction)(function() {
                                (0, a.extendObservable)(r, t), (0, a.extendObservable)(r, {
                                    leftPosition: t.leftPosition || n._getLeftPosition(r),
                                    currentVisibleItems: n._getCurrentVisibleItems(r)
                                });
                            }), !this.slides.isCustomAnimationEffect(r)) {
                                e.next = 21;
                                break;
                            }
                            return (0, a.extendObservable)(r, {
                                customAnimationStatus: "running"
                            }), e.next = 20, this.delay(this.slides.customAnimationDuration(r));

                          case 20:
                            (0, a.extendObservable)(r, {
                                customAnimationStatus: "disabled"
                            });

                          case 21:
                            return e.abrupt("return", this);

                          case 22:
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
                return -e.currentStep * e.itemsScroll * e.itemWidth + (this.steps.isLast(e) ? this.slides.difference(e) * e.itemWidth : 0);
            }
        }, {
            key: "_getCurrentVisibleItems",
            value: function(e) {
                var t = e.currentStep * e.itemsScroll - (this.steps.isLast(e) ? this.slides.difference(e) : 0);
                return _.map(Array(e.itemsShow), function(e, r) {
                    return t + r;
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
    var s, u = Object.assign || function(e) {
        for (var t = 1; arguments.length > t; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    }, l = function() {
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
    }(), c = r(1), p = (r(0), r(4)), d = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(p);
    t.default = (s = function(e) {
        function t() {
            var e, r, o, a;
            n(this, t);
            for (var s = arguments.length, l = Array(s), c = 0; s > c; c++) l[c] = arguments[c];
            return r = o = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(l))), 
            o._lastMatchedMediaName = null, o.reformatChildren = function(e) {
                return e ? e.type ? o.findRSliderChild(e, 0) : _.map(e, function(e, t) {
                    return o.findRSliderChild(e, t);
                }) : e;
            }, o.findRSliderChild = function(e, t) {
                if (!e) return null;
                if (e instanceof Array) return o.reformatChildren(e);
                if (e.props) {
                    if (e.type._name && o.elements.includes(e.type._name)) return "RSlider" === e.type._name ? e : e = React.createElement(e.type, u({}, e.props, {
                        key: e.key ? e.key : e.type._name + Math.random(),
                        name: o.slider.name
                    }));
                    if (e.props.children) {
                        var r = _.assign({}, e.props, {
                            children: o.findRSliderChild(e.props.children)
                        });
                        return React.createElement(e.type, u({}, r, {
                            key: t
                        }));
                    }
                    return e;
                }
                return e;
            }, o.onResizeSlider = function() {
                o.slider.media && o.detectMediaMatch(), o.recalculateSlider();
            }, o.recalculateSlider = function() {
                d.default.update({
                    name: o.props.name,
                    sliderWidth: o.refs.rSlider.offsetWidth,
                    itemWidth: o.refs.rSlider.offsetWidth / o.slider.itemsShow
                });
            }, o.recalculateSliderItems = function() {
                d.default.update({
                    name: o.props.name,
                    itemsCount: o.props.children.length,
                    innerWidth: o.props.children.type ? o.slider.sliderWidth : o.slider.itemWidth * o.props.children.length
                });
            }, o.detectMediaMatch = function() {
                var e = !1;
                _.forEach(Object.keys(o.slider.media), function(t) {
                    var r = t.split("*");
                    if (r[0] = "" === r[0] ? 0 : +r[0], r[1] = "" === r[1] ? 99999 : +r[1] - 1, o.documentWidth >= r[0] && r[1] >= o.documentWidth) {
                        if (e = !0, o._lastMatchedMediaName === t) return;
                        return o._lastMatchedMediaName = t, d.default.update(u({
                            name: o.slider.name
                        }, o.slider.media[t], {
                            currentStep: 0
                        })), !1;
                    }
                }), e || "default" === o._lastMatchedMediaName || (o._lastMatchedMediaName = "default", 
                d.default.update(u({
                    name: o.slider.name
                }, o.props)));
            }, a = r, i(o, a);
        }
        return o(t, e), l(t, [ {
            key: "slider",
            get: function() {
                return d.default.rSliders.get(this.props.name);
            }
        }, {
            key: "elements",
            get: function() {
                return d.default.elements;
            }
        }, {
            key: "isCustomAnimationEffect",
            get: function() {
                return d.default.slides.isCustomAnimationEffect(this.slider);
            }
        }, {
            key: "documentWidth",
            get: function() {
                return Math.max(document.documentElement.clientWidth, document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth);
            }
        } ]), t;
    }(React.Component), a(s.prototype, "slider", [ c.computed ], Object.getOwnPropertyDescriptor(s.prototype, "slider"), s.prototype), 
    a(s.prototype, "elements", [ c.computed ], Object.getOwnPropertyDescriptor(s.prototype, "elements"), s.prototype), 
    a(s.prototype, "isCustomAnimationEffect", [ c.computed ], Object.getOwnPropertyDescriptor(s.prototype, "isCustomAnimationEffect"), s.prototype), 
    s);
}, function(e, t, r) {
    "use strict";
    function n(e, t, r, n, o, a, s, u) {
        if (i(t), !e) {
            var l;
            if (void 0 === t) l = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                var c = [ r, n, o, a, s, u ], p = 0;
                l = Error(t.replace(/%s/g, function() {
                    return c[p++];
                })), l.name = "Invariant Violation";
            }
            throw l.framesToPop = 1, l;
        }
    }
    var i = function(e) {};
    e.exports = n;
}, function(e, t, r) {
    "use strict";
    function n(e) {
        return void 0 !== e.ref;
    }
    function i(e) {
        return void 0 !== e.key;
    }
    var o = r(9), a = r(14), s = (r(3), r(15), Object.prototype.hasOwnProperty), u = r(16), l = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    }, c = function(e, t, r, n, i, o, a) {
        var s = {
            $$typeof: u,
            type: e,
            key: t,
            ref: r,
            props: a,
            _owner: o
        };
        return s;
    };
    c.createElement = function(e, t, r) {
        var o, u = {}, p = null, d = null;
        if (null != t) {
            n(t) && (d = t.ref), i(t) && (p = "" + t.key), void 0 === t.__self ? null : t.__self, 
            void 0 === t.__source ? null : t.__source;
            for (o in t) s.call(t, o) && !l.hasOwnProperty(o) && (u[o] = t[o]);
        }
        var f = arguments.length - 2;
        if (1 === f) u.children = r; else if (f > 1) {
            for (var h = Array(f), y = 0; f > y; y++) h[y] = arguments[y + 2];
            u.children = h;
        }
        if (e && e.defaultProps) {
            var m = e.defaultProps;
            for (o in m) void 0 === u[o] && (u[o] = m[o]);
        }
        return c(e, p, d, 0, 0, a.current, u);
    }, c.createFactory = function(e) {
        var t = c.createElement.bind(null, e);
        return t.type = e, t;
    }, c.cloneAndReplaceKey = function(e, t) {
        return c(e.type, t, e.ref, 0, 0, e._owner, e.props);
    }, c.cloneElement = function(e, t, r) {
        var u, p = o({}, e.props), d = e.key, f = e.ref, h = e._owner;
        if (null != t) {
            n(t) && (f = t.ref, h = a.current), i(t) && (d = "" + t.key);
            var y;
            e.type && e.type.defaultProps && (y = e.type.defaultProps);
            for (u in t) s.call(t, u) && !l.hasOwnProperty(u) && (p[u] = void 0 === t[u] && void 0 !== y ? y[u] : t[u]);
        }
        var m = arguments.length - 2;
        if (1 === m) p.children = r; else if (m > 1) {
            for (var b = Array(m), v = 0; m > v; v++) b[v] = arguments[v + 2];
            p.children = b;
        }
        return c(e.type, d, f, 0, 0, h, p);
    }, c.isValidElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === u;
    }, e.exports = c;
}, function(e, t, r) {
    "use strict";
    function n(e) {
        for (var t = arguments.length - 1, r = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, n = 0; t > n; n++) r += "&args[]=" + encodeURIComponent(arguments[n + 1]);
        r += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        var i = Error(r);
        throw i.name = "Invariant Violation", i.framesToPop = 1, i;
    }
    e.exports = n;
}, function(e, t, r) {
    "use strict";
    function n(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e);
    }
    var i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, r = 0; 10 > r; r++) t["_" + String.fromCharCode(r)] = r;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                return t[e];
            }).join("")) return !1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                n[e] = e;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
        } catch (e) {
            return !1;
        }
    }() ? Object.assign : function(e, t) {
        for (var r, s, u = n(e), l = 1; arguments.length > l; l++) {
            r = Object(arguments[l]);
            for (var c in r) o.call(r, c) && (u[c] = r[c]);
            if (i) {
                s = i(r);
                for (var p = 0; s.length > p; p++) a.call(r, s[p]) && (u[s[p]] = r[s[p]]);
            }
        }
        return u;
    };
}, function(e, t, r) {
    "use strict";
    function n(e) {
        return function() {
            return e;
        };
    }
    var i = function() {};
    i.thatReturns = n, i.thatReturnsFalse = n(!1), i.thatReturnsTrue = n(!0), i.thatReturnsNull = n(null), 
    i.thatReturnsThis = function() {
        return this;
    }, i.thatReturnsArgument = function(e) {
        return e;
    }, e.exports = i;
}, function(e, t, r) {
    "use strict";
    function n(e, t, r) {
        this.props = e, this.context = t, this.refs = a, this.updater = r || o;
    }
    var i = r(8), o = r(12), a = (r(15), r(13));
    r(6), r(3);
    n.prototype.isReactComponent = {}, n.prototype.setState = function(e, t) {
        "object" != typeof e && "function" != typeof e && null != e && i("85"), this.updater.enqueueSetState(this, e), 
        t && this.updater.enqueueCallback(this, t, "setState");
    }, n.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, "forceUpdate");
    };
    e.exports = n;
}, function(e, t, r) {
    "use strict";
    r(3);
    e.exports = {
        isMounted: function(e) {
            return !1;
        },
        enqueueCallback: function(e, t) {},
        enqueueForceUpdate: function(e) {},
        enqueueReplaceState: function(e, t) {},
        enqueueSetState: function(e, t) {}
    };
}, function(e, t, r) {
    "use strict";
    var n = {};
    e.exports = n;
}, function(e, t, r) {
    "use strict";
    e.exports = {
        current: null
    };
}, function(e, t, r) {
    "use strict";
    var n = !1;
    e.exports = n;
}, function(e, t, r) {
    "use strict";
    e.exports = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
}, function(e, t, r) {
    e.exports = r(18);
}, function(e, t, r) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    e.exports = {
        RSlider: n(r(19)).default,
        RSliderItems: n(r(37)).default,
        RSliderArrowL: n(r(40)).default,
        RSliderArrowR: n(r(41)).default,
        RSliderPagination: n(r(42)).default
    };
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
    var a, s, u, l = Object.assign || function(e) {
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
    }(), p = r(2), d = requre("mobx"), f = d.reaction, h = r(0), y = h.observer, m = r(4), b = r(5);
    e.exports = y((u = s = function(e) {
        function t() {
            var e, r, o, a;
            n(this, t);
            for (var s = arguments.length, u = Array(s), l = 0; s > l; l++) u[l] = arguments[l];
            return r = o = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
            o.html = null, a = r, i(o, a);
        }
        return o(t, e), c(t, [ {
            key: "shouldComponentUpdate",
            value: function(e, t) {
                return !_.isEqual(e, this.props);
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var e = this;
                m.create(l({}, this.props, {
                    sliderWidth: this.refs.rSlider.offsetWidth,
                    itemWidth: this.refs.rSlider.offsetWidth / this.props.itemsShow
                })), this.html = this.reformatChildren(this.props.children), this.slider.media && this.detectMediaMatch(), 
                this.recalculateSlider(), window.addEventListener("resize", this.onResizeSlider), 
                this["@reaction: RSlider -> this.slider.currentStep change"] = f(function() {
                    return e.slider.currentStep;
                }, function() {
                    return e.slider.onStepChange(e.slider);
                }, {
                    name: "@reaction: RSlider -> this.slider.currentStep change"
                });
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                _.isEqual(this.props, e) || m.update(l({}, e, {
                    name: this.slider.name
                }));
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this["@reaction: RSlider -> this.slider.currentStep change"](), window.removeEventListener("resize", this.onResizeSlider);
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.slider && this.slider.devMode && console.timeEnd("RSlider render time");
            }
        }, {
            key: "render",
            value: function() {
                return p.createElement("div", {
                    style: {
                        overflow: "hidden"
                    }
                }, p.createElement("div", {
                    className: "rslider " + (this.slider ? this.slider.className : ""),
                    ref: "rSlider",
                    style: this.slider ? this.slider.style : {}
                }, this.html), this.slider && this.slider.devMode ? p.createElement("ul", {
                    style: {
                        float: "left",
                        width: "100%"
                    }
                }, _.map(this.slider, function(e, t) {
                    return p.createElement("p", {
                        key: t
                    }, t, ": ", _.isFunction(e) ? "function" : JSON.stringify(e));
                })) : null);
            }
        } ]), t;
    }(b), s.propTypes = {
        name: p.PropTypes.string.isRequired,
        className: p.PropTypes.string,
        style: p.PropTypes.object,
        devMode: p.PropTypes.bool,
        currentStep: p.PropTypes.number
    }, s.defaultProps = {
        name: "default",
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
        onStepChange: function(e) {},
        onDragEnd: function(e, t) {}
    }, a = u)) || a;
}, function(e, t, r) {
    "use strict";
    var n = r(9), i = r(21), o = r(11), a = r(26), s = r(27), u = r(29), l = r(7), c = r(30), p = r(35), d = r(36), f = (r(3), 
    l.createElement), h = l.createFactory, y = l.cloneElement, m = n, b = {
        Children: {
            map: i.map,
            forEach: i.forEach,
            count: i.count,
            toArray: i.toArray,
            only: d
        },
        Component: o,
        PureComponent: a,
        createElement: f,
        cloneElement: y,
        isValidElement: l.isValidElement,
        PropTypes: c,
        createClass: s.createClass,
        createFactory: h,
        createMixin: function(e) {
            return e;
        },
        DOM: u,
        version: p,
        __spread: m
    };
    e.exports = b;
}, function(e, t, r) {
    "use strict";
    function n(e) {
        return ("" + e).replace(_, "$&/");
    }
    function i(e, t) {
        this.func = e, this.context = t, this.count = 0;
    }
    function o(e, t, r) {
        e.func.call(e.context, t, e.count++);
    }
    function a(e, t, r) {
        if (null == e) return e;
        var n = i.getPooled(t, r);
        b(e, o, n), i.release(n);
    }
    function s(e, t, r, n) {
        this.result = e, this.keyPrefix = t, this.func = r, this.context = n, this.count = 0;
    }
    function u(e, t, r) {
        var i = e.result, o = e.keyPrefix, a = e.func, s = e.context, u = a.call(s, t, e.count++);
        Array.isArray(u) ? l(u, i, r, m.thatReturnsArgument) : null != u && (y.isValidElement(u) && (u = y.cloneAndReplaceKey(u, o + (!u.key || t && t.key === u.key ? "" : n(u.key) + "/") + r)), 
        i.push(u));
    }
    function l(e, t, r, i, o) {
        var a = "";
        null != r && (a = n(r) + "/");
        var l = s.getPooled(t, a, i, o);
        b(e, u, l), s.release(l);
    }
    function c(e, t, r) {
        if (null == e) return e;
        var n = [];
        return l(e, n, null, t, r), n;
    }
    function p(e, t, r) {
        return null;
    }
    function d(e, t) {
        return b(e, p, null);
    }
    function f(e) {
        var t = [];
        return l(e, t, null, m.thatReturnsArgument), t;
    }
    var h = r(22), y = r(7), m = r(10), b = r(23), v = h.twoArgumentPooler, g = h.fourArgumentPooler, _ = /\/+/g;
    i.prototype.destructor = function() {
        this.func = null, this.context = null, this.count = 0;
    }, h.addPoolingTo(i, v), s.prototype.destructor = function() {
        this.result = null, this.keyPrefix = null, this.func = null, this.context = null, 
        this.count = 0;
    }, h.addPoolingTo(s, g), e.exports = {
        forEach: a,
        map: c,
        mapIntoWithKeyPrefixInternal: l,
        count: d,
        toArray: f
    };
}, function(e, t, r) {
    "use strict";
    var n = r(8), i = (r(6), function(e) {
        var t = this;
        if (t.instancePool.length) {
            var r = t.instancePool.pop();
            return t.call(r, e), r;
        }
        return new t(e);
    }), o = function(e, t) {
        var r = this;
        if (r.instancePool.length) {
            var n = r.instancePool.pop();
            return r.call(n, e, t), n;
        }
        return new r(e, t);
    }, a = function(e, t, r) {
        var n = this;
        if (n.instancePool.length) {
            var i = n.instancePool.pop();
            return n.call(i, e, t, r), i;
        }
        return new n(e, t, r);
    }, s = function(e, t, r, n) {
        var i = this;
        if (i.instancePool.length) {
            var o = i.instancePool.pop();
            return i.call(o, e, t, r, n), o;
        }
        return new i(e, t, r, n);
    }, u = function(e) {
        var t = this;
        e instanceof t || n("25"), e.destructor(), t.poolSize > t.instancePool.length && t.instancePool.push(e);
    }, l = i;
    e.exports = {
        addPoolingTo: function(e, t) {
            var r = e;
            return r.instancePool = [], r.getPooled = t || l, r.poolSize || (r.poolSize = 10), 
            r.release = u, r;
        },
        oneArgumentPooler: i,
        twoArgumentPooler: o,
        threeArgumentPooler: a,
        fourArgumentPooler: s
    };
}, function(e, t, r) {
    "use strict";
    function n(e, t) {
        return e && "object" == typeof e && null != e.key ? l.escape(e.key) : t.toString(36);
    }
    function i(e, t, r, o) {
        var d = typeof e;
        if ("undefined" !== d && "boolean" !== d || (e = null), null === e || "string" === d || "number" === d || "object" === d && e.$$typeof === s) return r(o, e, "" === t ? c + n(e, 0) : t), 
        1;
        var f, h, y = 0, m = "" === t ? c : t + p;
        if (Array.isArray(e)) for (var b = 0; e.length > b; b++) f = e[b], h = m + n(f, b), 
        y += i(f, h, r, o); else {
            var v = u(e);
            if (v) {
                var g, _ = v.call(e);
                if (v !== e.entries) for (var w = 0; !(g = _.next()).done; ) f = g.value, h = m + n(f, w++), 
                y += i(f, h, r, o); else for (;!(g = _.next()).done; ) {
                    var E = g.value;
                    E && (f = E[1], h = m + l.escape(E[0]) + p + n(f, 0), y += i(f, h, r, o));
                }
            } else if ("object" === d) {
                var S = "", O = e + "";
                a("31", "[object Object]" === O ? "object with keys {" + Object.keys(e).join(", ") + "}" : O, S);
            }
        }
        return y;
    }
    function o(e, t, r) {
        return null == e ? 0 : i(e, "", t, r);
    }
    var a = r(8), s = (r(14), r(16)), u = r(24), l = (r(6), r(25)), c = (r(3), "."), p = ":";
    e.exports = o;
}, function(e, t, r) {
    "use strict";
    function n(e) {
        var t = e && (i && e[i] || e[o]);
        if ("function" == typeof t) return t;
    }
    var i = "function" == typeof Symbol && Symbol.iterator, o = "@@iterator";
    e.exports = n;
}, function(e, t, r) {
    "use strict";
    function n(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + ("" + e).replace(/[=:]/g, function(e) {
            return t[e];
        });
    }
    function i(e) {
        var t = /(=0|=2)/g, r = {
            "=0": "=",
            "=2": ":"
        };
        return ("" + e.substring("." === e[0] && "$" === e[1] ? 2 : 1)).replace(t, function(e) {
            return r[e];
        });
    }
    e.exports = {
        escape: n,
        unescape: i
    };
}, function(e, t, r) {
    "use strict";
    function n(e, t, r) {
        this.props = e, this.context = t, this.refs = u, this.updater = r || s;
    }
    function i() {}
    var o = r(9), a = r(11), s = r(12), u = r(13);
    i.prototype = a.prototype, n.prototype = new i(), n.prototype.constructor = n, o(n.prototype, a.prototype), 
    n.prototype.isPureReactComponent = !0, e.exports = n;
}, function(e, t, r) {
    "use strict";
    function n(e) {
        return e;
    }
    function i(e, t) {
        var r = _.hasOwnProperty(t) ? _[t] : null;
        E.hasOwnProperty(t) && "OVERRIDE_BASE" !== r && d("73", t), e && "DEFINE_MANY" !== r && "DEFINE_MANY_MERGED" !== r && d("74", t);
    }
    function o(e, t) {
        if (t) {
            "function" == typeof t && d("75"), y.isValidElement(t) && d("76");
            var r = e.prototype, n = r.__reactAutoBindPairs;
            t.hasOwnProperty(v) && w.mixins(e, t.mixins);
            for (var o in t) if (t.hasOwnProperty(o) && o !== v) {
                var a = t[o], s = r.hasOwnProperty(o);
                if (i(s, o), w.hasOwnProperty(o)) w[o](e, a); else {
                    var c = _.hasOwnProperty(o), p = "function" == typeof a, f = p && !c && !s && !1 !== t.autobind;
                    if (f) n.push(o, a), r[o] = a; else if (s) {
                        var h = _[o];
                        (!c || "DEFINE_MANY_MERGED" !== h && "DEFINE_MANY" !== h) && d("77", h, o), "DEFINE_MANY_MERGED" === h ? r[o] = u(r[o], a) : "DEFINE_MANY" === h && (r[o] = l(r[o], a));
                    } else r[o] = a;
                }
            }
        } else ;
    }
    function a(e, t) {
        if (t) for (var r in t) {
            var n = t[r];
            if (t.hasOwnProperty(r)) {
                var i = r in w;
                i && d("78", r);
                var o = r in e;
                o && d("79", r), e[r] = n;
            }
        }
    }
    function s(e, t) {
        e && t && "object" == typeof e && "object" == typeof t || d("80");
        for (var r in t) t.hasOwnProperty(r) && (void 0 !== e[r] && d("81", r), e[r] = t[r]);
        return e;
    }
    function u(e, t) {
        return function() {
            var r = e.apply(this, arguments), n = t.apply(this, arguments);
            if (null == r) return n;
            if (null == n) return r;
            var i = {};
            return s(i, r), s(i, n), i;
        };
    }
    function l(e, t) {
        return function() {
            e.apply(this, arguments), t.apply(this, arguments);
        };
    }
    function c(e, t) {
        var r = t.bind(e);
        return r;
    }
    function p(e) {
        for (var t = e.__reactAutoBindPairs, r = 0; t.length > r; r += 2) {
            e[t[r]] = c(e, t[r + 1]);
        }
    }
    var d = r(8), f = r(9), h = r(11), y = r(7), m = (r(28), r(12)), b = r(13), v = (r(6), 
    r(3), "mixins"), g = [], _ = {
        mixins: "DEFINE_MANY",
        statics: "DEFINE_MANY",
        propTypes: "DEFINE_MANY",
        contextTypes: "DEFINE_MANY",
        childContextTypes: "DEFINE_MANY",
        getDefaultProps: "DEFINE_MANY_MERGED",
        getInitialState: "DEFINE_MANY_MERGED",
        getChildContext: "DEFINE_MANY_MERGED",
        render: "DEFINE_ONCE",
        componentWillMount: "DEFINE_MANY",
        componentDidMount: "DEFINE_MANY",
        componentWillReceiveProps: "DEFINE_MANY",
        shouldComponentUpdate: "DEFINE_ONCE",
        componentWillUpdate: "DEFINE_MANY",
        componentDidUpdate: "DEFINE_MANY",
        componentWillUnmount: "DEFINE_MANY",
        updateComponent: "OVERRIDE_BASE"
    }, w = {
        displayName: function(e, t) {
            e.displayName = t;
        },
        mixins: function(e, t) {
            if (t) for (var r = 0; t.length > r; r++) o(e, t[r]);
        },
        childContextTypes: function(e, t) {
            e.childContextTypes = f({}, e.childContextTypes, t);
        },
        contextTypes: function(e, t) {
            e.contextTypes = f({}, e.contextTypes, t);
        },
        getDefaultProps: function(e, t) {
            e.getDefaultProps = e.getDefaultProps ? u(e.getDefaultProps, t) : t;
        },
        propTypes: function(e, t) {
            e.propTypes = f({}, e.propTypes, t);
        },
        statics: function(e, t) {
            a(e, t);
        },
        autobind: function() {}
    }, E = {
        replaceState: function(e, t) {
            this.updater.enqueueReplaceState(this, e), t && this.updater.enqueueCallback(this, t, "replaceState");
        },
        isMounted: function() {
            return this.updater.isMounted(this);
        }
    }, S = function() {};
    f(S.prototype, h.prototype, E);
    e.exports = {
        createClass: function(e) {
            var t = n(function(e, r, n) {
                this.__reactAutoBindPairs.length && p(this), this.props = e, this.context = r, this.refs = b, 
                this.updater = n || m, this.state = null;
                var i = this.getInitialState ? this.getInitialState() : null;
                ("object" != typeof i || Array.isArray(i)) && d("82", t.displayName || "ReactCompositeComponent"), 
                this.state = i;
            });
            t.prototype = new S(), t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], 
            g.forEach(o.bind(null, t)), o(t, e), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), 
            t.prototype.render || d("83");
            for (var r in _) t.prototype[r] || (t.prototype[r] = null);
            return t;
        },
        injection: {
            injectMixin: function(e) {
                g.push(e);
            }
        }
    };
}, function(e, t, r) {
    "use strict";
    var n = {};
    e.exports = n;
}, function(e, t, r) {
    "use strict";
    var n = r(7), i = n.createFactory;
    e.exports = {
        a: i("a"),
        abbr: i("abbr"),
        address: i("address"),
        area: i("area"),
        article: i("article"),
        aside: i("aside"),
        audio: i("audio"),
        b: i("b"),
        base: i("base"),
        bdi: i("bdi"),
        bdo: i("bdo"),
        big: i("big"),
        blockquote: i("blockquote"),
        body: i("body"),
        br: i("br"),
        button: i("button"),
        canvas: i("canvas"),
        caption: i("caption"),
        cite: i("cite"),
        code: i("code"),
        col: i("col"),
        colgroup: i("colgroup"),
        data: i("data"),
        datalist: i("datalist"),
        dd: i("dd"),
        del: i("del"),
        details: i("details"),
        dfn: i("dfn"),
        dialog: i("dialog"),
        div: i("div"),
        dl: i("dl"),
        dt: i("dt"),
        em: i("em"),
        embed: i("embed"),
        fieldset: i("fieldset"),
        figcaption: i("figcaption"),
        figure: i("figure"),
        footer: i("footer"),
        form: i("form"),
        h1: i("h1"),
        h2: i("h2"),
        h3: i("h3"),
        h4: i("h4"),
        h5: i("h5"),
        h6: i("h6"),
        head: i("head"),
        header: i("header"),
        hgroup: i("hgroup"),
        hr: i("hr"),
        html: i("html"),
        i: i("i"),
        iframe: i("iframe"),
        img: i("img"),
        input: i("input"),
        ins: i("ins"),
        kbd: i("kbd"),
        keygen: i("keygen"),
        label: i("label"),
        legend: i("legend"),
        li: i("li"),
        link: i("link"),
        main: i("main"),
        map: i("map"),
        mark: i("mark"),
        menu: i("menu"),
        menuitem: i("menuitem"),
        meta: i("meta"),
        meter: i("meter"),
        nav: i("nav"),
        noscript: i("noscript"),
        object: i("object"),
        ol: i("ol"),
        optgroup: i("optgroup"),
        option: i("option"),
        output: i("output"),
        p: i("p"),
        param: i("param"),
        picture: i("picture"),
        pre: i("pre"),
        progress: i("progress"),
        q: i("q"),
        rp: i("rp"),
        rt: i("rt"),
        ruby: i("ruby"),
        s: i("s"),
        samp: i("samp"),
        script: i("script"),
        section: i("section"),
        select: i("select"),
        small: i("small"),
        source: i("source"),
        span: i("span"),
        strong: i("strong"),
        style: i("style"),
        sub: i("sub"),
        summary: i("summary"),
        sup: i("sup"),
        table: i("table"),
        tbody: i("tbody"),
        td: i("td"),
        textarea: i("textarea"),
        tfoot: i("tfoot"),
        th: i("th"),
        thead: i("thead"),
        time: i("time"),
        title: i("title"),
        tr: i("tr"),
        track: i("track"),
        u: i("u"),
        ul: i("ul"),
        var: i("var"),
        video: i("video"),
        wbr: i("wbr"),
        circle: i("circle"),
        clipPath: i("clipPath"),
        defs: i("defs"),
        ellipse: i("ellipse"),
        g: i("g"),
        image: i("image"),
        line: i("line"),
        linearGradient: i("linearGradient"),
        mask: i("mask"),
        path: i("path"),
        pattern: i("pattern"),
        polygon: i("polygon"),
        polyline: i("polyline"),
        radialGradient: i("radialGradient"),
        rect: i("rect"),
        stop: i("stop"),
        svg: i("svg"),
        text: i("text"),
        tspan: i("tspan")
    };
}, function(e, t, r) {
    "use strict";
    var n = r(7), i = n.isValidElement;
    e.exports = r(31)(i);
}, function(e, t, r) {
    "use strict";
    var n = r(32);
    e.exports = function(e) {
        return n(e, !1);
    };
}, function(e, t, r) {
    "use strict";
    var n = r(10), i = r(6), o = r(3), a = r(33), s = r(34);
    e.exports = function(e, t) {
        function r(e) {
            var t = e && (O && e[O] || e[P]);
            if ("function" == typeof t) return t;
        }
        function u(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t;
        }
        function l(e) {
            this.message = e, this.stack = "";
        }
        function c(e) {
            function r(r, n, o, s, u, c, p) {
                if (s = s || j, c = c || o, p !== a) if (t) i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"); else ;
                return null == n[o] ? r ? new l(null === n[o] ? "The " + u + " `" + c + "` is marked as required in `" + s + "`, but its value is `null`." : "The " + u + " `" + c + "` is marked as required in `" + s + "`, but its value is `undefined`.") : null : e(n, o, s, u, c);
            }
            var n = r.bind(null, !1);
            return n.isRequired = r.bind(null, !0), n;
        }
        function p(e) {
            function t(t, r, n, i, o, a) {
                var s = t[r];
                if (_(s) !== e) return new l("Invalid " + i + " `" + o + "` of type `" + w(s) + "` supplied to `" + n + "`, expected `" + e + "`.");
                return null;
            }
            return c(t);
        }
        function d(e) {
            function t(t, r, n, i, o) {
                if ("function" != typeof e) return new l("Property `" + o + "` of component `" + n + "` has invalid PropType notation inside arrayOf.");
                var s = t[r];
                if (!Array.isArray(s)) {
                    return new l("Invalid " + i + " `" + o + "` of type `" + _(s) + "` supplied to `" + n + "`, expected an array.");
                }
                for (var u = 0; s.length > u; u++) {
                    var c = e(s, u, n, i, o + "[" + u + "]", a);
                    if (c instanceof Error) return c;
                }
                return null;
            }
            return c(t);
        }
        function f(e) {
            function t(t, r, n, i, o) {
                if (!(t[r] instanceof e)) {
                    var a = e.name || j;
                    return new l("Invalid " + i + " `" + o + "` of type `" + S(t[r]) + "` supplied to `" + n + "`, expected instance of `" + a + "`.");
                }
                return null;
            }
            return c(t);
        }
        function h(e) {
            function t(t, r, n, i, o) {
                for (var a = t[r], s = 0; e.length > s; s++) if (u(a, e[s])) return null;
                return new l("Invalid " + i + " `" + o + "` of value `" + a + "` supplied to `" + n + "`, expected one of " + JSON.stringify(e) + ".");
            }
            return Array.isArray(e) ? c(t) : n.thatReturnsNull;
        }
        function y(e) {
            function t(t, r, n, i, o) {
                if ("function" != typeof e) return new l("Property `" + o + "` of component `" + n + "` has invalid PropType notation inside objectOf.");
                var s = t[r], u = _(s);
                if ("object" !== u) return new l("Invalid " + i + " `" + o + "` of type `" + u + "` supplied to `" + n + "`, expected an object.");
                for (var c in s) if (s.hasOwnProperty(c)) {
                    var p = e(s, c, n, i, o + "." + c, a);
                    if (p instanceof Error) return p;
                }
                return null;
            }
            return c(t);
        }
        function m(e) {
            function t(t, r, n, i, o) {
                for (var s = 0; e.length > s; s++) {
                    if (null == (0, e[s])(t, r, n, i, o, a)) return null;
                }
                return new l("Invalid " + i + " `" + o + "` supplied to `" + n + "`.");
            }
            if (!Array.isArray(e)) return n.thatReturnsNull;
            for (var r = 0; e.length > r; r++) {
                var i = e[r];
                if ("function" != typeof i) return o(!1, "Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.", E(i), r), 
                n.thatReturnsNull;
            }
            return c(t);
        }
        function b(e) {
            function t(t, r, n, i, o) {
                var s = t[r], u = _(s);
                if ("object" !== u) return new l("Invalid " + i + " `" + o + "` of type `" + u + "` supplied to `" + n + "`, expected `object`.");
                for (var c in e) {
                    var p = e[c];
                    if (p) {
                        var d = p(s, c, n, i, o + "." + c, a);
                        if (d) return d;
                    }
                }
                return null;
            }
            return c(t);
        }
        function v(t) {
            switch (typeof t) {
              case "number":
              case "string":
              case "undefined":
                return !0;

              case "boolean":
                return !t;

              case "object":
                if (Array.isArray(t)) return t.every(v);
                if (null === t || e(t)) return !0;
                var n = r(t);
                if (!n) return !1;
                var i, o = n.call(t);
                if (n !== t.entries) {
                    for (;!(i = o.next()).done; ) if (!v(i.value)) return !1;
                } else for (;!(i = o.next()).done; ) {
                    var a = i.value;
                    if (a && !v(a[1])) return !1;
                }
                return !0;

              default:
                return !1;
            }
        }
        function g(e, t) {
            return "symbol" === e || ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol);
        }
        function _(e) {
            var t = typeof e;
            return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : g(t, e) ? "symbol" : t;
        }
        function w(e) {
            if (void 0 === e || null === e) return "" + e;
            var t = _(e);
            if ("object" === t) {
                if (e instanceof Date) return "date";
                if (e instanceof RegExp) return "regexp";
            }
            return t;
        }
        function E(e) {
            var t = w(e);
            switch (t) {
              case "array":
              case "object":
                return "an " + t;

              case "boolean":
              case "date":
              case "regexp":
                return "a " + t;

              default:
                return t;
            }
        }
        function S(e) {
            return e.constructor && e.constructor.name ? e.constructor.name : j;
        }
        var O = "function" == typeof Symbol && Symbol.iterator, P = "@@iterator", j = "<<anonymous>>", k = {
            array: p("array"),
            bool: p("boolean"),
            func: p("function"),
            number: p("number"),
            object: p("object"),
            string: p("string"),
            symbol: p("symbol"),
            any: function() {
                return c(n.thatReturnsNull);
            }(),
            arrayOf: d,
            element: function() {
                function t(t, r, n, i, o) {
                    var a = t[r];
                    if (!e(a)) {
                        return new l("Invalid " + i + " `" + o + "` of type `" + _(a) + "` supplied to `" + n + "`, expected a single ReactElement.");
                    }
                    return null;
                }
                return c(t);
            }(),
            instanceOf: f,
            node: function() {
                function e(e, t, r, n, i) {
                    return v(e[t]) ? null : new l("Invalid " + n + " `" + i + "` supplied to `" + r + "`, expected a ReactNode.");
                }
                return c(e);
            }(),
            objectOf: y,
            oneOf: h,
            oneOfType: m,
            shape: b
        };
        return l.prototype = Error.prototype, k.checkPropTypes = s, k.PropTypes = k, k;
    };
}, function(e, t, r) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, function(e, t, r) {
    "use strict";
    function n(e, t, r, n, i) {
    }
    e.exports = n;
}, function(e, t, r) {
    "use strict";
    e.exports = "15.5.4";
}, function(e, t, r) {
    "use strict";
    function n(e) {
        return o.isValidElement(e) || i("143"), e;
    }
    var i = r(8), o = r(7);
    r(6);
    e.exports = n;
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
    var s, u, l, c = function() {
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
    }(), p = r(2), d = n(p), f = (r(1), r(0)), h = r(5), y = n(h), m = r(38), b = n(m), v = r(39), g = n(v);
    t.default = (0, f.observer)((l = u = function(e) {
        function t(e) {
            i(this, t);
            var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return r.renderSliderItems = function() {
                return r.props.children.type ? r.renderSliderItem(r.props.children, 0) : _.map(r.props.children, function(e, t) {
                    return r.renderSliderItem(e, t);
                });
            }, r.renderSliderItem = function(e, t) {
                return d.default.createElement(g.default, {
                    name: r.props.name,
                    itemIndex: t,
                    key: t
                }, e);
            }, r.state = {
                currentStep: 0
            }, r;
        }
        return a(t, e), c(t, [ {
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
                return this.slider.devMode && console.log("RSliderItems render"), d.default.createElement("div", {
                    className: "rslider__list " + this.props.className,
                    style: this.props.style
                }, this.slider.draggable ? d.default.createElement(b.default, {
                    name: this.props.name
                }, this.renderSliderItems()) : this.isCustomAnimationEffect ? d.default.createElement(g.default, {
                    name: this.props.name,
                    itemIndex: this.slider.currentStep
                }, this.props.children.type ? this.props.children : this.props.children[this.slider.currentStep]) : d.default.createElement("div", {
                    className: "rslider__track",
                    style: {
                        width: this.slider.innerWidth,
                        left: this.slider.leftPosition
                    }
                }, this.renderSliderItems()));
            }
        } ]), t;
    }(y.default), u._name = "RSliderItems", u.propTypes = {
        className: d.default.PropTypes.string,
        style: d.default.PropTypes.object
    }, u.defaultProps = {
        classes: "",
        style: {}
    }, s = l)) || s;
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
    var s, u, l, c = function() {
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
    }(), p = r(2), d = n(p), f = (r(1), r(0)), h = r(4), y = n(h), m = r(5), b = n(m);
    t.default = (0, f.observer)((l = u = function(e) {
        function t() {
            var e, r, n, a;
            i(this, t);
            for (var s = arguments.length, u = Array(s), l = 0; s > l; l++) u[l] = arguments[l];
            return r = n = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
            n.draggable = {
                x: 0,
                startX: 0,
                el: null,
                isSelectedEl: !1,
                init: function(e) {
                    n.draggable.el = e, n.draggable.el.addEventListener("mousedown", n.draggable.start, !1), 
                    document.addEventListener("mousemove", n.draggable.move, !1), document.addEventListener("mouseup", n.draggable.stop, !1);
                },
                start: function() {
                    n.draggable.isSelectedEl = !0, n.draggable.startX = n.draggable.x - n.draggable.el.offsetLeft;
                },
                move: function(e) {
                    n.draggable.x = document.all ? window.event.clientX : e.pageX, n.draggable.isSelectedEl && (e.preventDefault(), 
                    n.draggable.el.className = "rslider__track rslider__track_state_selected", y.default.update({
                        name: n.slider.name,
                        leftPosition: n.draggable.x - n.draggable.startX
                    }));
                },
                stop: function() {
                    if (n.draggable.isSelectedEl) {
                        n.draggable.isSelectedEl = !1, n.draggable.el.className = "rslider__track";
                        var e = n.slider.itemWidth * n.slider.itemsScroll, t = n.draggable.startX - n.draggable.x, r = t - n.slider.currentStep * e, i = Math.round(Math.abs(100 * r / n.slider.itemWidth));
                        y.default.update({
                            name: n.slider.name,
                            currentStep: i > n.slider.draggableSensitivity ? r > 0 ? n.slider.currentStep + 1 : n.slider.currentStep - 1 : Math.round(t / e)
                        }), n.slider.onDragEnd(n.slider, n.draggable);
                    }
                },
                remove: function() {
                    n.draggable.el.removeEventListener("mousedown", n.draggable.start), document.removeEventListener("mousemove", n.draggable.move), 
                    document.removeEventListener("mouseup", n.draggable.stop);
                }
            }, a = r, o(n, a);
        }
        return a(t, e), c(t, [ {
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
                return this.slider.devMode && console.log("RSliderDraggable render"), d.default.createElement("div", {
                    className: "rslider__track",
                    ref: "rSliderDraggable",
                    style: {
                        width: this.slider.innerWidth,
                        left: this.slider.leftPosition
                    }
                }, this.props.children);
            }
        } ]), t;
    }(b.default), u._name = "RSliderArrowR", u.propTypes = {
        name: d.default.PropTypes.string.isRequired
    }, s = l)) || s;
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
    var u, l, c, p, d = function() {
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
    }(), f = r(2), h = n(f), y = r(1), m = r(0), b = r(4), v = n(b), g = r(5), _ = n(g);
    t.default = (0, m.observer)((p = c = function(e) {
        function t() {
            return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return a(t, e), d(t, [ {
            key: "componentDidMount",
            value: function() {
                var e = this;
                this.slider.autoPlay && (this["@reaction: RSliderItem -> rSliderModel.currentStep changed"] = (0, 
                y.reaction)(function() {
                    return e.slider.currentVisibleItems[0] === e.props.itemIndex;
                }, function() {
                    return e.isAutoPlay ? e.startItemAutoPlayInterval() : clearTimeout(e.timer);
                }, {
                    name: "@reaction: RSliderItem -> rSliderModel.currentStep changed",
                    fireImmediately: this.isAutoPlay
                }));
            }
        }, {
            key: "componentWilUnmount",
            value: function() {
                this["@reaction: RSliderItem -> rSliderModel.currentStep changed"]();
            }
        }, {
            key: "startItemAutoPlayInterval",
            value: function() {
                var e = this;
                this.timer = setTimeout(function() {
                    v.default.update({
                        name: e.slider.name,
                        currentStep: v.default.steps.isLast(e.slider) ? 0 : e.slider.currentStep + 1
                    });
                }, 5e3);
            }
        }, {
            key: "render",
            value: function() {
                return this.slider.devMode && console.log("RSliderItem render"), h.default.createElement("div", {
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
                return this.isCustomAnimationEffect ? v.default.slides.customAnimationDuration(this.slider) / 1e3 + "s" : "";
            }
        } ]), t;
    }(_.default), c._name = "RSliderItems", c.propTypes = {
        name: h.default.PropTypes.string.isRequired,
        itemIndex: h.default.PropTypes.number.isRequired
    }, l = p, s(l.prototype, "isAutoPlay", [ y.computed ], Object.getOwnPropertyDescriptor(l.prototype, "isAutoPlay"), l.prototype), 
    s(l.prototype, "isCurrentVisibleItem", [ y.computed ], Object.getOwnPropertyDescriptor(l.prototype, "isCurrentVisibleItem"), l.prototype), 
    s(l.prototype, "className", [ y.computed ], Object.getOwnPropertyDescriptor(l.prototype, "className"), l.prototype), 
    s(l.prototype, "animationDurationStyle", [ y.computed ], Object.getOwnPropertyDescriptor(l.prototype, "animationDurationStyle"), l.prototype), 
    u = l)) || u;
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
    var u, l, c, p, d = function() {
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
    }(), f = r(2), h = n(f), y = r(1), m = r(0), b = r(4), v = n(b), g = r(5), _ = n(g);
    t.default = (0, m.observer)((p = c = function(e) {
        function t() {
            var e, r, n, a;
            i(this, t);
            for (var s = arguments.length, u = Array(s), l = 0; s > l; l++) u[l] = arguments[l];
            return r = n = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
            n.onClick = function(e) {
                v.default.update({
                    name: n.slider.name,
                    currentStep: n.slider.currentStep - 1
                }), n.props.onClick && n.props.onClick(n.slider);
            }, a = r, o(n, a);
        }
        return a(t, e), d(t, [ {
            key: "render",
            value: function() {
                return this.slider.devMode && console.log("RSliderArrowL render"), h.default.createElement("button", {
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
    }(_.default), c._name = "RSliderArrowL", c.propTypes = {
        classes: h.default.PropTypes.string,
        style: h.default.PropTypes.object,
        onClick: h.default.PropTypes.func
    }, c.defaultProps = {
        classes: "",
        style: {},
        onClick: null
    }, l = p, s(l.prototype, "disableArrow", [ y.computed ], Object.getOwnPropertyDescriptor(l.prototype, "disableArrow"), l.prototype), 
    s(l.prototype, "arrowState", [ y.computed ], Object.getOwnPropertyDescriptor(l.prototype, "arrowState"), l.prototype), 
    s(l.prototype, "arrowClasses", [ y.computed ], Object.getOwnPropertyDescriptor(l.prototype, "arrowClasses"), l.prototype), 
    u = l)) || u;
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
    var u, l, c, p, d = function() {
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
    }(), f = r(2), h = n(f), y = r(1), m = r(0), b = r(4), v = n(b), g = r(5), _ = n(g);
    t.default = (0, m.observer)((p = c = function(e) {
        function t() {
            var e, r, n, a;
            i(this, t);
            for (var s = arguments.length, u = Array(s), l = 0; s > l; l++) u[l] = arguments[l];
            return r = n = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
            n.onClick = function(e) {
                v.default.update({
                    name: n.slider.name,
                    currentStep: n.slider.currentStep + 1
                }), n.props.onClick && n.props.onClick(n.slider);
            }, a = r, o(n, a);
        }
        return a(t, e), d(t, [ {
            key: "render",
            value: function() {
                return this.slider.devMode && console.log("RSliderArrowR render"), h.default.createElement("button", {
                    className: this.arrowClasses,
                    style: this.props.style,
                    tabIndex: "1",
                    onClick: this.onClick
                }, "next");
            }
        }, {
            key: "disableArrow",
            get: function() {
                return v.default.steps.isLast(this.slider) && !this.slider.infinity;
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
    }(_.default), c._name = "RSliderArrowR", c.propTypes = {
        classes: h.default.PropTypes.string,
        style: h.default.PropTypes.object,
        onClick: h.default.PropTypes.func
    }, c.defaultProps = {
        classes: "",
        style: {},
        onClick: null
    }, l = p, s(l.prototype, "disableArrow", [ y.computed ], Object.getOwnPropertyDescriptor(l.prototype, "disableArrow"), l.prototype), 
    s(l.prototype, "arrowState", [ y.computed ], Object.getOwnPropertyDescriptor(l.prototype, "arrowState"), l.prototype), 
    s(l.prototype, "arrowClasses", [ y.computed ], Object.getOwnPropertyDescriptor(l.prototype, "arrowClasses"), l.prototype), 
    u = l)) || u;
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
    var s, u, l, c = function() {
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
    }(), p = r(2), d = n(p), f = (r(1), r(0)), h = r(4), y = n(h), m = r(5), b = n(m);
    t.default = (0, f.observer)((l = u = function(e) {
        function t() {
            var e, r, n, a;
            i(this, t);
            for (var s = arguments.length, u = Array(s), l = 0; s > l; l++) u[l] = arguments[l];
            return r = n = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
            n.onClick = function(e) {
                y.default.update({
                    name: n.slider.name,
                    currentStep: e
                });
            }, a = r, o(n, a);
        }
        return a(t, e), c(t, [ {
            key: "render",
            value: function() {
                var e = this;
                return 2 > y.default.steps.all(this.slider) ? null : (this.slider.devMode && console.log("RSliderPagination render"), 
                d.default.createElement("ul", {
                    style: {
                        textAlign: "center"
                    }
                }, _.map(Array(y.default.steps.all(this.slider)), function(t, r) {
                    return d.default.createElement("li", {
                        key: r,
                        onClick: function() {
                            return e.onClick(r);
                        },
                        style: {
                            background: e.slider.currentStep === r ? "white" : "black",
                            display: "inline-block",
                            transition: "1s all",
                            width: 15,
                            height: 15,
                            margin: 5,
                            borderRadius: "50%",
                            cursor: "pointer"
                        }
                    });
                })));
            }
        } ]), t;
    }(b.default), u._name = "RSliderPagination", u.propTypes = {}, u.defaultProps = {}, 
    s = l)) || s;
} ]);