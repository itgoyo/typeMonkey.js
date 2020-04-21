"use strict";

function _defineProperty(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(),
    TypeMoneky = function () {
        function t(e) {
            var n = this;
            _classCallCheck(this, t);
            var i = {
                debug: !1,
                box: "",
                list: [],
                fontSize: 16,
                minWidthNum: 2,
                lineHeight: 1.5,
                letterSpacing: 0,
                blockIndex: 0,
                rowIndex: 0,
                conPercent: .8,
                color: "#fff",
                background: "#000",
                beforeCreate: function (t, e, n) {
                    t()
                },
                afterEnd: function () {}
            };
            this.opts = Object.assign(i, e);
            var o = this.getPrefix();
            return Object.assign(this, {
                prefix: o,
                killIe: /msie [6|7|8|9]/i.test(navigator.userAgent),
                transform: o + "transform"
            }), this.opts.debug && (e.box.addEventListener("click", function (t) {
                n.next()
            }), e.box.classList.add("tm-debug")), this
        }
        return _createClass(t, [{
            key: "init",
            value: function (t) {
                var e = this.opts,
                    n = e.box,
                    i = this.h("div", {
                        "class": "tm-wrap"
                    }),
                    o = this.h("div", {
                        "class": "tm-inner",
                        style: {
                            "font-size": e.fontSize + "px",
                            lineHeight: e.lineHeight,
                            background: e.background,
                            color: e.color
                        }
                    });
                this.opts = Object.assign(e, {
                    width: e.box.offsetWidth,
                    height: e.box.offsetHeight,
                    conWidth: e.box.offsetWidth * this.opts.conPercent,
                    index: 0,
                    blockIndex: 0,
                    rowIndex: 0
                }), n.innerHTML = "", i.appendChild(o), n.appendChild(i), Object.assign(this, {
                    $box: n,
                    $wrap: i,
                    $inner: o
                }), t && (e.list = t), e.list && this.initList()
            }
        }, {
            key: "initList",
            value: function () {
                var t = this,
                    e = this.opts;
                e.total = e.list.reduce(function (t, e, n, i) {
                    return 0 === n && t.l.push([]), "rotate" === e.type ? (t.l[t.l.length - 1].rotate = e.value, t.l.push([])) : "text" === e.type && (t.t++, t.l[t.l.length - 1].push(e)), t
                }, {
                    r: 0,
                    t: 0,
                    l: []
                });
                var n = [];
                e.total.l.forEach(function (e, i) {
                    var o = "";
                    o = "rb" === e.rotate ? "right bottom" : "left bottom";
                    var r = t.h("div", {
                        "class": "tm-block tm-block-" + (i + 1),
                        style: _defineProperty({}, t.prefix + "transform-origin", o)
                    });
                    r.rotate = e.rotate, n.length > 0 && r.appendChild(n[n.length - 1]), n.push(r)
                });
                var i = this.h("div", {
                    "class": "tm-block tm-block-last",
                    style: _defineProperty({}, this.prefix + "transform-origin", "left bottom")
                });
                i.appendChild(n[n.length - 1]), n.push(i), this.$inner.appendChild(n[n.length - 1]), this.$blocks = n, this.$blockLast = i
            }
        }, {
            key: "start",
            value: function () {
                this.opts.list && this.opts.list.length > 0 ? this.next() : alert("没有数据！")
            }
        }, {
            key: "setOptList",
            value: function (t) {
                this.opts.list = t
            }
        }, {
            key: "createRow",
            value: function (t) {
                var e = this,
                    n = this.opts,
                    i = n.list[t];
                if ("rotate" === i.type) return n.index++, n.blockIndex++, n.rowIndex = 0, void this.next();
                var o = this.$blocks[n.blockIndex],
                    r = this.$blocks[this.$blocks.length - 1],
                    s = document.createDocumentFragment();
                i.value.split("").forEach(function (t, i) {
                    var o = e.createCol(t, i, n.rowIndex);
                    s.appendChild(o)
                });
                var l = this.getTextWidth(i.value);
                l < n.fontSize * n.minWidthNum && (l = n.fontSize * n.minWidthNum), i.width = l;
                var a = n.fontSize * n.lineHeight,
                    c = n.conWidth / l,
                    h = l * c,
                    u = a * c,
                    f = this.h("div", {
                        "class": "tm-row tm-row-" + (n.rowIndex + 1),
                        style: Object.assign({
                            color: i.color,
                            height: n.fontSize * n.lineHeight + "px"
                        }, i.style)
                    });
                if (n.blockIndex > 0) {
                    var d = n.total.l[n.blockIndex - 1],
                        p = this.$blocks[n.blockIndex - 1],
                        v = n.total.l[n.blockIndex],
                        b = void 0,
                        x = 0,
                        g = void 0;
                    if ("lb" === p.rotate && (b = "-90"), "rb" === p.rotate) {
                        b = "90";
                        var m = Math.max.apply(null, d.map(function (t) {
                                return t.width
                            })),
                            y = d[d.length - 1].width;
                        g = y / m;
                        var k = v[n.rowIndex].width,
                            w = (Math.max.apply(null, v.map(function (t) {
                                return t.width
                            })), v.slice(0, n.rowIndex).findIndex(function (t) {
                                return t.width > k
                            }));
                        if (0 === n.rowIndex) x = 100 * (k - y) / k + "%";
                        else if (w === -1) x = 100 * (k - y) / k + "%";
                        else if (w >= 0) {
                            var C = v[w].width;
                            x = 100 * (C - y) / C + "%"
                        }
                    }
                    var I = _defineProperty({
                        left: x,
                        top: -u * (d.length - 1) / c + "px"
                    }, this.transform, "rotate(" + b + "deg)");
                    void 0 !== g && (I[this.prefix + "transform-origin"] = 100 * g + "% bottom"), this.setStyle(p, I)
                }
                o.scale = c, this.setStyle(o, {
                    left: (n.width - h) / 2 / c + "px",
                    top: (n.height - u * (n.rowIndex + 1) - u * n.rowIndex) / 2 / c + "px"
                }), this.setStyle(r, _defineProperty({}, this.transform, "translate3d(0,0,0) scale(" + c + ")")), f.appendChild(s), o.appendChild(f), n.index++, n.rowIndex++
            }
        }, {
            key: "createCol",
            value: function (t, e, n) {
                return this.h("span", {
                    "class": "tm-col tm-col-" + (e + 1)
                }, t)
            }
        }, {
            key: "next",
            value: function () {
                var t = this.opts;
                if (t.index === t.list.length) this.isEnd = !0, this.opts.afterEnd.call(this);
                else {
                    var e = t.index;
                    this.opts.beforeCreate(this._next.bind(this, e), e, t.list[e], t)
                }
            }
        }, {
            key: "clear",
            value: function () {
                this.opts.box.innerHTML = ""
            }
        }, {
            key: "_next",
            value: function (t) {
                this.createRow(t)
            }
        }, {
            key: "h",
            value: function (t, e, n) {
                return this._createElement(t, e, n)
            }
        }, {
            key: "_createElement",
            value: function (t, e, n) {
                var i = this,
                    o = document.createElement(t);
                return Object.keys(e).forEach(function (t) {
                    "style" === t ? i.setStyle(o, e[t]) : o.setAttribute(t, e[t])
                }), this.isType(n, "String") && (o.innerHTML = n), o
            }
        }, {
            key: "getTextWidth",
            value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "microsoft Yahei",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.opts.fontSize + "px",
                    i = this.getTextWidth;
                return void 0 === i.c && (i.c = document.createElement("canvas"), i.ctx = i.c.getContext("2d")), i.ctx.font = n + " " + e, i.ctx.measureText(t).width
            }
        }, {
            key: "getStyleStr",
            value: function () {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object.keys(e).map(function (n) {
                    return t.str2label(n) + ":" + e[n] + ";"
                }).join("")
            }
        }, {
            key: "setStyle",
            value: function (t, e) {
                var n = this;
                Object.keys(e).forEach(function (i) {
                    t.style[n.label2str(i)] = e[i]
                })
            }
        }, {
            key: "isType",
            value: function (t, e) {
                return Object.prototype.toString.call(t) === "[object " + e + "]"
            }
        }, {
            key: "str2label",
            value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-",
                    n = "";
                if (t[0].match(/[A-Z]+/)) n = t.toLowerCase();
                else {
                    var i = t.split(/[A-Z]+/);
                    i.forEach(function (o, r) {
                        if (r > 0) {
                            for (var s = 0, l = r; l > 0; l--) s += i[l - 1].length;
                            n += e + (i[r] = t.substr(s, 1) + o).toLowerCase()
                        } else n += i[r].toLowerCase()
                    })
                }
                return n
            }
        }, {
            key: "label2str",
            value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
                return t.split(e).filter(function (t) {
                    return t
                }).map(function (t, e) {
                    return 0 !== e && (t = t.substring(0, 1).toUpperCase() + t.substring(1)), t
                }).join("")
            }
        }, {
            key: "getPrefix",
            value: function () {
                return function () {
                    var t = window.getComputedStyle(document.documentElement, ""),
                        e = (Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/) || "" === t.OLink && ["", "o"])[1],
                        n = "WebKit|Moz|MS|O".match(new RegExp("(" + e + ")", "i"))[1];
                    return {
                        dom: n,
                        lowercase: e,
                        css: "-" + e + "-",
                        js: e[0].toUpperCase() + e.substr(1)
                    }.css
                }()
            }
        }]), t
    }();