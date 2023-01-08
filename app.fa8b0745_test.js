(function (t) {
    function e(e) {
        for (var a, o, l = e[0], c = e[1], r = e[2], p = 0, d = []; p < l.length; p++) (o = l[p]), Object.prototype.hasOwnProperty.call(n, o) && n[o] && d.push(n[o][0]), (n[o] = 0);
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
        u && u(e);
        while (d.length) d.shift()();
        return s.push.apply(s, r || []), i();
    }
    function i() {
        for (var t, e = 0; e < s.length; e++) {
            for (var i = s[e], a = !0, l = 1; l < i.length; l++) {
                var c = i[l];
                0 !== n[c] && (a = !1);
            }
            a && (s.splice(e--, 1), (t = o((o.s = i[0]))));
        }
        return t;
    }
    var a = {},
        n = { app: 0 },
        s = [];
    function o(e) {
        if (a[e]) return a[e].exports;
        var i = (a[e] = { i: e, l: !1, exports: {} });
        return t[e].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
    }
    (o.m = t),
        (o.c = a),
        (o.d = function (t, e, i) {
            o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
        }),
        (o.r = function (t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (o.t = function (t, e) {
            if ((1 & e && (t = o(t)), 8 & e)) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if ((o.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var a in t)
                    o.d(
                        i,
                        a,
                        function (e) {
                            return t[e];
                        }.bind(null, a)
                    );
            return i;
        }),
        (o.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t["default"];
                      }
                    : function () {
                          return t;
                      };
            return o.d(e, "a", e), e;
        }),
        (o.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (o.p = "../../../static/account_deletion/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        c = l.push.bind(l);
    (l.push = e), (l = l.slice());
    for (var r = 0; r < l.length; r++) e(l[r]);
    var u = c;
    s.push([0, "chunk-vendors"]), i();
})({
    0: function (t, e, i) {
        t.exports = i("56d7");
    },
    "0aef": function (t, e, i) {},
    "15c8": function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAaVBMVEUAAADs7OzBwsPBw8PBwsLBwsPBw8PDw8PBw8TDw8nKysrMzMzBwsPBwsPBwsPBwcPBwsPBwsPCwsPDw8bDxcXU1NTBwsPBwsPCwsTAwsLCwsTDw8PExMTAwcLBwsLCwsTCwsLV1dXAwcKbaeT2AAAAInRSTlMABPpz5s2XWFMfFQ/q4tmyvqiMNSoK8sSEdms/PPO4ZEMG95658QAAArBJREFUeNrt2ueO2zAMAGDKeyfOusu6wfd/yLZo0MTxoCOZENvy+y/DkGQOyaCUUkoppdQ/p/hs4yiI4vazADG2H3j3sQURyha72hL82zX4rNmBb9sD9h18L2Qe4ZAoB59MjMNiAx6dcMwJ/NlXOKbagzcnRInTtcZxa/ClDHBcUIInZ5xyBk9SnJKCJyFOCcEZ/2uZy2bdXK/NenMx0ONpEffH6iGkHffQ42PLZzV21BmQ+APEO/a8wzLMNg3DdGsswmmLA1pYQJ5Ut32R5HOTT2euOObrexM8LM7m+6VUneGIDNwUb9jxVrxQ2OxrHFHvwUXZ4JOmnF8GHnHUEVyssGc1u2g2FY6qDNjLJvYF3WJccMIFrJkGBzRmZkO2wQkbsPaFg75mtq9r5KkUExyUzGz2G5zQgLUYB8Uzj0auOOEK1iIcFAGJfq0DWAtwUAA0ehG9zBa95Rn2Fo0OEAxfIo0Opwxxi0YnH4YoT+FI1XROpNGFDUMFQaPLQIZ6i0YWzRzVKY1qMXhqeRrRkPF0PjSifeXpE2lTzb4UnaMRpZRikf+KnznIcn675eUzyGGSh7LdLP70dBUF0Sp9+cEtUYM4yWP8Lc7hJSHnfURe3ZN2Di8oDthxKGA5Jra9Ow45r29S6/uqNeeV5cq6WYmIEwcnkfWTA4vzGcuHB3//bAndW0K/RKFxS2iUl5oTpVYQQustsdWpUkoppdQCyiwMs5JhuIsiCfCnICkYhlvb1XhT7xiGWypq/KMuOIa7/3WQOA5n+r80KDmGu1/uZ4zDnZpsGSexQl9L6CIK3fJCA4TUcCo0+RC5ljgbIoe7Fzb0SZp7YSPh3PGZjFPaHhFn2n0ibgD6RNyX9Im4Xer4T2ZL6N4S+iUKjVtCo/xjTpT0VvcKQs4KKqWUUkoptYwfT/5n1UxjWYEAAAAASUVORK5CYII=";
    },
    "17d4": function (t, e, i) {},
    "18dd": function (t, e, i) {
        "use strict";
        i("528c");
    },
    "21dd": function (t, e, i) {},
    "331a": function (t, e, i) {
        "use strict";
        i("44aa");
    },
    "35c3": function (t, e, i) {},
    "3f17": function (t, e, i) {
        "use strict";
        i("5677");
    },
    "44aa": function (t, e, i) {},
    "528c": function (t, e, i) {},
    "53d9": function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA1VJREFUaAXtmjtoFEEYx28lGoJGDQpK1EpRFHwgYhUbG0EFFUQUo2JhI2JnpdjYWCjBtFcpJmjnA22CjREMIkZJIYoWPlIYY0DjO9Hz9yUXmOxuuJ3Z2dmwzgd/dnfue8zv27u9250rlbz5DvgO+A74DvgO+A74DvyPHahUKo3oBOpGPYXuAYB70QCasN7CAkN4boJS2d4oJDCApxRIdfdk4YCh24BGVMrq/jDbRUUEvhMDK0Oniwi7bArYN4w3ZAU8I6vECfLuiPEZYmxXEAQ/Yl6zMpQn8IoQgXwNbQH2aWjc6mGd1Wx6yRpx/4YEsIw6gR1hm6kFWWSvfgbXk3sJEogX6CVAFbZjhs9Y7dBYEy9uRMvRQvQRPUJ9+P1lO70MiLXoGvqKwvaOgfNopTprjmeifeg2+oXibIjBi0iakL8xkTrUhkZREuvBqR1Jc9Sfk7ViB3HYnisxE2hAcnZcmTR1f27QFL/iilSp85391SbQqb6WKNpK0UMmhVPGXCJeLoTuDFi52LxFru2sO0qlEpRHXJNS75YyBaPdNG/pg0YVzYN+E3rcPHw80giYTs8ivCVtcc34Dn58vNeMibgbAZNlE8rsjiYyy/EBK09ATIGXTjGpLIcf2khuCuz6J94osIN5As+3UVwjxx/1JkMjLuJqeoY/RzJlO1DPhXKBjRKmwB9sFNfMsUrTP9bdFHggNlu2g3tspDcF7rdRXDNHK2/rOZoxEXcjYC4gr8nk+iwvpuaZCIHmgBFwtUa3Zi0b7rJKsTtNojTA99MUNoyV+cpTkgOG8aU0wF2mRVPG1RPfCfRl1KybyxiYz/FziuW5hnuY+pudAVcLlXULWvSXVYq7uvmMz3C10HW2w7pFLfmXeZfJPbKWpQKmoKwctGlVtOMsoO12Umlm4cIxG/Ujl3ZBc5p23SE96pBWHtzPs0ugmY0JBKjLEXR+D+HVvgDbjD5lDN2h1sx9H9htKO4/Gzb68IwkssQ6vYxJHUtA9wWfXnQPvUK1miR/g8jjOVqy5jK5nUhW+lT7ycFVtBVNWpfmuAnJP/D6UNhuMmDlaYfMflLhZDjJvJjkXDxbkCx6ye3kA763az6II24dvmuQxD8m5glbb74DvgO+A74DvgNF7MA/ghZh/SYH32IAAAAASUVORK5CYII=";
    },
    5677: function (t, e, i) {},
    "56d7": function (t, e, i) {
        "use strict";
        i.r(e);
        i("e260"), i("e6cf"), i("cca6"), i("a79d");
        var a = i("2b0e"),
            n = function () {
                var t = this,
                    e = t._self._c;
                return e(
                    "div",
                    { attrs: { id: "app" } },
                    [
                        t.showVerticalTip && 0 !== t.state ? e("VerticalTip") : t._e(),
                        1 === t.state ? e("router-view") : t._e(),
                        e("Comfirm", { ref: "mpayConfirm" }),
                        0 === t.state ? e("div", { staticClass: "loading-wrapper" }, [e("img", { staticClass: "loading-icon", attrs: { src: i("15c8") } })]) : t._e(),
                    ],
                    1
                );
            },
            s = [],
            o = function () {
                var t = this,
                    e = t._self._c;
                return t.isShowConfirm
                    ? e("div", { staticClass: "shape" }, [
                          e("div", { staticClass: "comfirm" }, [
                              e("div", { staticClass: "title", attrs: { "v:if": "title" } }, [t._v(t._s(t.title))]),
                              e("div", { staticClass: "content", domProps: { innerHTML: t._s(t.content) } }, [t._t("content")], 2),
                              t.cancelText ? t._e() : e("div", { staticClass: "comfirm-btn", on: { click: t.comfirm } }, [t._v(" " + t._s(t.confirmText) + " ")]),
                              t.cancelText
                                  ? e("div", { staticClass: "footer" }, [
                                        e("div", { staticClass: "cancel-btn", on: { click: t.cancel } }, [t._v(t._s(t.cancelText))]),
                                        e("div", { staticClass: "comfirm-btn", on: { click: t.comfirm } }, [t._v(t._s(t.confirmText))]),
                                    ])
                                  : t._e(),
                          ]),
                      ])
                    : t._e();
            },
            l = [],
            c =
                (i("d3b7"),
                {
                    name: "Comfirm",
                    data: function () {
                        return { title: "", confirmText: "", cancelText: "", content: "", type: "default", isShowConfirm: !1, onCancel: function () {}, onConfirm: function () {} };
                    },
                    methods: {
                        show: function (t, e) {
                            (this.content = t || ""),
                                "[object Object]" === Object.prototype.toString.call(e) &&
                                    ((this.title = e.title || ""),
                                    (this.cancelText = e.cancelText || ""),
                                    (this.confirmText = e.confirmText || this.$global.lang.confirm),
                                    (this.type = e.type || "confirm"),
                                    (this.onCancel = e.onCancel),
                                    (this.onConfirm = e.onConfirm)),
                                (this.isShowConfirm = !0);
                        },
                        hidden: function () {
                            (this.isShowConfirm = !1), (this.cancelText = ""), (this.confirmText = ""), (this.type = "confirm"), (this.outerData = null);
                        },
                        comfirm: function () {
                            this.onConfirm && this.onConfirm(), this.$emit("layerComfirm"), this.hidden();
                        },
                        cancel: function () {
                            this.$emit("layerComfirm"), this.hidden();
                        },
                    },
                }),
            r = c,
            u = (i("331a"), i("2877")),
            p = Object(u["a"])(r, o, l, !1, null, "95a31a56", null),
            d = p.exports,
            m = function () {
                var t = this,
                    e = t._self._c;
                return e("div", { staticClass: "tip" }, [
                    e("img", { staticClass: "tip-img", attrs: { src: t.rotateImg, alt: "" } }),
                    e(
                        "div",
                        { staticClass: "tip-text" },
                        [
                            t._t("text", function () {
                                return [t._v(t._s(t.lang.browing_in_portrait))];
                            }),
                        ],
                        2
                    ),
                ]);
            },
            f = [],
            g = {
                name: "VerticalTip",
                data: function () {
                    return { lang: this.$global.lang, rotateImg: i("61dc") };
                },
                methods: {
                    onCheck: function () {
                        this.$emit("check");
                    },
                },
            },
            h = g,
            v = (i("3f17"), Object(u["a"])(h, m, f, !1, null, "2c2daccc", null)),
            _ = v.exports,
            A = i("ba10"),
            C = i.n(A),
            w = new C.a(),
            b = { SHOW_COMFIRM: "show_comfirm", HIDE_COMFIRM: "hide_comfirm", ORIENTATION_CHANGE: "orientation_change", EXIT: "exit" };
        i("ac1f"), i("466d"), i("841c"), i("1276"), i("4160"), i("159b"), i("4d63"), i("c607"), i("2c3e"), i("25f0");
        function k() {
            var t = window.location.search.substr(1),
                e = {};
            if (t) {
                var i = t.split("&");
                i.forEach(function (t) {
                    var i = t.split("=");
                    e[i[0]] = decodeURIComponent(i[1]);
                });
            }
            return e;
        }
        var y = function (t, e) {
                var i = document.getElementById("app"),
                    a = document.createElement("div");
                a.setAttribute("class", "toast"),
                    (a.innerHTML = t),
                    i.appendChild(a),
                    window.setTimeout(function () {
                        i.removeChild(a);
                    }, e || 2e3);
            },
            x = function () {
                window.open("about:blank", "_self").close();
            },
            O = i("5530"),
            S = i("bc3a"),
            T = i.n(S),
            U = {
                delete_account_condition_page: [
                    "æ¸¸æˆå¸å·åˆ é™¤æ¡ä»¶",
                    "äº²çˆ±çš„ç”¨æˆ·ï¼Œæ‚¨å³å°†åˆ é™¤å¸å·ï¼Œè¯·æ‚¨æŸ¥çœ‹å¹¶ç¡®è®¤æ‚¨æ˜¯å¦æ»¡è¶³ä»¥ä¸‹æ¡ä»¶ï¼š",
                    "æ‚¨æ˜¯å¸å·çš„æ‰€æœ‰äººå¹¶ä¸”å·²éµå®ˆç”¨æˆ·åè®®ä¸­ç›¸å…³æ¡æ¬¾è§„å®š",
                    "<b>æ‚¨çš„å¸å·æ²¡æœ‰å®‰å…¨é£Žé™©</b>ï¼ŒåŒ…æ‹¬ä½†ä¸é™äºŽï¼šå¸å·æ²¡æœ‰æœªå¤„ç†å®Œçš„äº¤æ˜“æˆ–ç”¨æˆ·çº çº·ã€‚",
                    "åˆ é™¤æ‚¨çš„å¸å·ä¸ä¼šå½±å“ä»»ä½•æ­£åœ¨è¿›è¡Œçš„çº çº·æˆ–å¯èƒ½äº§ç”Ÿæ½œåœ¨çš„çº çº·ã€‚",
                    "åŠ ç²—åˆ é™¤æ‚¨çš„å¸å·ä¸ä¼šå½±å“ä»»ä½•æ­£åœ¨è¿›è¡Œçš„çº çº·æˆ–å¯èƒ½äº§ç”Ÿæ½œåœ¨çš„çº çº·ã€‚",
                    "å¦‚æ‚¨å¯¹å¸å·åˆ é™¤åŠŸèƒ½æœ‰ä»»ä½•ç–‘é—®ï¼Œå¯ä»¥æŸ¥çœ‹æˆ‘ä»¬çš„ç”¨æˆ·åè®®æˆ–è”ç³»å®¢æœã€‚",
                    "æˆ‘åŒæ„åˆ é™¤æœ¬å¸å·å¹¶ç¡®è®¤å·²æ»¡è¶³ä¸Šè¿°æ¡ä»¶",
                ],
                next_step: "ä¸‹ä¸€æ­¥=",
                think_again: "å†æƒ³æƒ³=",
                manual_review_tips: "ä¸ºä¿éšœæ‚¨çš„å¸å·å®‰å…¨ï¼Œæ‚¨æœ¬æ¬¡çš„ç”³è¯·åªèƒ½é€šè¿‡äººå·¥å®¡æ ¸è¿›è¡Œæäº¤ï¼Œè¯·é€šè¿‡ä¸‹é¢æäº¤ä¿¡æ¯è¿›è¡Œå¸å·åˆ é™¤ç”³è¯·ã€‚",
                confirm: "ç¡®å®š=",
                cancel: "å–æ¶ˆ=",
                network_error: "ç½‘ç»œå¼‚å¸¸ï¼Œè¯·ç¨åŽå†è¯•=",
                loading: "åŠ è½½ä¸­...=",
                browing_in_portrait: "è¯·è½¬ä¸ºç«–å±æµè§ˆ=",
                logout_tips: "æ‚¨å³å°†é€€å‡ºæµç¨‹ï¼Œä¸‹æ¬¡å†ç”³è¯·éœ€è¦é‡æ–°æäº¤ä¿¡æ¯ã€‚=",
                verify_email: "éªŒè¯å®‰å…¨é‚®ç®±=",
                verify_email_tips: "ä¸ºç¡®ä¿æ‚¨çš„å¸å·å®‰å…¨ï¼Œæˆ‘ä»¬éœ€è¦éªŒè¯æ‚¨çš„èº«ä»½ï¼Œè¯·å¡«å†™æ‚¨ç™»è®°çš„å®‰å…¨é‚®=",
                input_email: "è¯·è¾“å…¥å®‰å…¨é‚®ç®±=",
                input_code_tips: "æˆ‘ä»¬å·²å°†éªŒè¯ç å‘é€è‡³æ‚¨çš„å®‰å…¨é‚®ç®±ï¼Œè¯·æŸ¥æ”¶å¹¶å¡«å†™éªŒè¯ç ã€‚=",
                input_code: "è¯·è¾“å…¥éªŒè¯ç =",
                resend: "é‡æ–°å‘é€=",
                verify_success: "æ­å–œæ‚¨ï¼éªŒè¯é€šè¿‡ã€‚=",
                submit_account_deletion_tips: "æ˜¯å¦ç»§ç»­æäº¤å¸å·åˆ é™¤è¯·æ±‚ï¼Ÿ=",
                yes: "yes=",
                no: "å¦=",
                manual_review_page: [
                    "éªŒè¯å¸å·å½’å±ž",
                    "ä¸ºç¡®ä¿æ‚¨çš„å¸å·å®‰å…¨ï¼Œæˆ‘ä»¬éœ€è¦éªŒè¯æ‚¨çš„èº«ä»½ï¼Œè¯·ä¸Šä¼ æ‚¨è¿‡åŽ»ä¸‰ä¸ªæœˆçš„å……å€¼è®¢å•æˆªå›¾å¹¶ç•™ä¸‹è”ç³»é‚®ç®±ã€‚",
                    "ä¸Šä¼ è®¢å•æˆªå›¾",
                    "ç¤ºä¾‹",
                    "ä»¥ä¸Šä¿¡æ¯å°†ä»…ç”¨äºŽéªŒè¯æ‚¨çš„èº«ä»½ï¼Œåœ¨å¤„ç†å®Œæ‚¨çš„å¸å·åˆ é™¤è¯·æ±‚åŽï¼Œæˆ‘ä»¬å°†åŠæ—¶åˆ é™¤ã€‚",
                    "å¡«å†™è”ç³»é‚®ç®±",
                    "è¯·è¾“å…¥æ‚¨çš„é‚®ç®±",
                    "æˆ‘ä»¬å¯èƒ½ä¼šåœ¨åŽç»­ä¸Žæ‚¨å¡«å†™çš„é‚®ç®±è”ç³»è¿›è¡Œèµ„æ–™çš„æ ¸å®žä¸Žè¡¥è¶³ï¼Œè¯·æ­£ç¡®å¡«å†™ï¼Œå¦åˆ™å¯èƒ½ä¼šå¯¼è‡´ç”³è¯·è¢«æ‹’ç»ã€‚",
                    "æ‚¨çš„ä¿¡æ¯æäº¤åŽï¼Œå®¢æœå¯èƒ½ä¼šè”ç³»æ‚¨è¿›ä¸€æ­¥æ ¸å®žæˆ–è¡¥å……èµ„æ–™ã€‚",
                ],
                account_deletion_page: [
                    "å¸å·åˆ é™¤",
                    "æ‚¨å³å°†æäº¤å¸å·åˆ é™¤è¯·æ±‚ï¼Œè¯·äº†è§£å¹¶ç¡®è®¤ï¼Œå¸å·åˆ é™¤åŽï¼š",
                    " 1. æ‚¨æ— æ³•å†æ¢å¤å¸å·ç›¸å…³çš„æ•°æ®å’Œè®°å½•ã€‚ä¾‹å¦‚ï¼šæ¸¸æˆå¸å·åˆ é™¤åŽï¼Œå¸å·ä¸‹æ‰€æœ‰çš„è§’è‰²ä¿¡æ¯ã€æ¸¸æˆæ•°æ®å‡æ— æ³•æ¢å¤ã€‚",
                    "2. å¦‚å¸å·ä¸­æœ‰æœªä½¿ç”¨çš„å……å€¼ä½™é¢ï¼Œæ‚¨æ— æ³•ç»§ç»­ä½¿ç”¨è¯¥ä½™é¢ã€‚",
                    "3.\té™¤éžæ³•å¾‹æœ‰ç›¸åè§„å®šï¼Œæ‚¨å°†æ— æ³•åŸºäºŽæœ¬å¸å·è¡Œä½¿é€‚ç”¨æ³•å¾‹èµ‹äºˆæ‚¨çš„æ•°æ®ä¸»ä½“æƒåˆ©ã€‚",
                    "æˆ‘å·²äº†è§£å¹¶åŒæ„åˆ é™¤å¸å·",
                    "æäº¤åˆ é™¤ç”³è¯·",
                ],
                submit_success_tips: "æ‚¨å·²äºŽ {date_time}æˆåŠŸæäº¤å¸å·åˆ é™¤è¯·æ±‚ã€‚é™¤éžæ³•å¾‹æœ‰å…¶ä»–è§„å®šï¼Œæˆ‘ä»¬å°†åœ¨{days}æ—¥å†…å®Œæˆå¸å·åˆ é™¤å·¥ä½œã€‚",
                finish: "å®Œæˆ=",
                email_tip: "è¯·æ­£ç¡®å¡«å†™æ‚¨çš„è”ç³»é‚®ç®±",
                code_tip: "è¯·è¾“å…¥æ­£ç¡®çš„éªŒè¯ç =",
                upload_tip: "è¯·ä¸Šä¼ è®¢å•æˆªå›¾",
                token_invalid: "tokenå¤±æ•ˆ",
                upload_file_limit_tip: "å›¾ç‰‡ä¸èƒ½è¶…è¿‡10M",
                apple_login: "é€šè¿‡è‹¹æžœç™»å½•",
                apple_revoke_page_content: "è‹¹æžœæŽˆæƒé¡µå†…å®¹",
                apple_revoke_page_title: "æ’¤é”€Appleç™»å½•æŽˆæƒ",
            },
            M = {
                query: Object(O["a"])({}, k()),
                exampleUrl: "",
                isVertical: 180 === window.orientation || 0 === window.orientation || void 0 === window.orientation,
                lang: U,
                routeTag: 0,
                screenshotUrl: "",
                reviewDay: 0,
                securityEmail: "",
                fileUploadToken: "",
                fileUploadHost: "",
                appleLoginUrl: "",
                certifyRedirectUrl: "",
                fileUploadTarget: 0,
                fileUploadTimestamp: 0,
                needContactEmail: 0,
                fileUploadLimit: 0,
            },
            I = M,
            R = i("4328"),
            E = i.n(R);
        (T.a.defaults.timeout = 6e3), (T.a.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded");
        var V = function () {
                return T.a.get("/api/users/delete/info", { params: Object(O["a"])({}, I.query) });
            },
            L = function () {
                return T.a.get("/api/users/delete/check", { params: Object(O["a"])({}, I.query) });
            },
            F = function (t) {
                return T()({ method: "post", url: "/api/users/delete/send_code", data: E.a.stringify({ email: t }), params: Object(O["a"])({}, I.query) });
            },
            Y = function (t, e) {
                return T()({ method: "post", url: "/api/users/delete/verify_code", data: E.a.stringify({ email: t, verify_code: e }), params: Object(O["a"])({}, I.query) });
            },
            B = function (t, e) {
                return T()({ method: "post", url: "/api/users/delete/upload", data: E.a.stringify({ email: t, file_urls: e }), params: Object(O["a"])({}, I.query) });
            },
            N = function () {
                return T()({ method: "post", url: "/api/users/delete/commit", params: Object(O["a"])(Object(O["a"])({}, I.query), {}, { tz_offset: new Date(2010,1,1).getTimezoneOffset() / 60 }) });
            },
            P = {
                components: { Comfirm: d, VerticalTip: _ },
                data: function () {
                    return { showVerticalTip: !this.$global.isVertical, state: 0 };
                },
                methods: {
                    showComfirm: function (t) {
                        this.$refs.mpayConfirm.show(t.content, t);
                    },
                    hideComfirm: function () {
                        this.$refs.mpayConfirm.hidden();
                    },
                    checkOrientation: function () {
                        this.$global.isVertical ? this.showVerticalTip && (this.showVerticalTip = !1) : (this.showVerticalTip = !0);
                    },
                    exit: function () {
                        var t = this;
                        this.showComfirm({
                            cancelText: t.$global.lang.cancel,
                            confirmText: t.$global.lang.confirm,
                            content: t.$global.lang.logout_tips,
                            onConfirm: function () {
                                x();
                            },
                        });
                    },
                },
                created: function () {
                    var t = this,
                        e = this;
                    (this.state = 0),
                        V()
                            .then(function (t) {
                                console.log(t);
                                var i = t.data,
                                    a = i.code,
                                    n = i.msg,
                                    s = i.data,
                                    o = s.lang_text,
                                    l = s.file_upload_token,
                                    c = s.file_upload_host,
                                    r = s.security_email,
                                    u = s.review_days,
                                    p = s.screenshot_url,
                                    d = s.deletion_stage,
                                    m = s.account_need_revoke,
                                    f = s.revoke_redirect_url,
                                    g = s.file_upload_target,
                                    h = s.timestamp,
                                    v = s.need_contact_email,
                                    _ = s.file_upload_limit;
                                0 === a
                                    ? ((e.$global.lang = o || {}),
                                      (e.$global.fileUploadToken = l || ""),
                                      (e.$global.fileUploadHost = c || ""),
                                      (e.$global.fileUploadTarget = g || 0),
                                      (e.$global.securityEmail = r || ""),
                                      (e.$global.reviewDay = u > 1 ? u : 30),
                                      (e.$global.exampleUrl = p || ""),
                                      (e.$global.fileUploadTimestamp = h || 0),
                                      (e.$global.needContactEmail = v),
                                      (e.$global.fileUploadLimit = _),
                                      1 === d
                                          ? ((e.$global.routeTag = 1),
                                            (e.state = 1),
                                            e.$global.securityEmail
                                                ? e.$router.push("/certify-email")
                                                : (e.$router.push("/apple-login"),
                                                  w.emit(b.SHOW_COMFIRM, {
                                                      confirmText: e.$global.lang.confirm,
                                                      content: e.$global.lang.manual_review_tips,
                                                      onConfirm: function () {
                                                          e.$router.push("/certify-review");
                                                      },
                                                  })))
                                          : 2 === d
                                          ? ((e.$global.routeTag = 1), (e.state = 1), e.$global.securityEmail ? e.$router.push("/certify-email") : e.$router.push("/certify-review"))
                                          : (0 !== m && (1 === m ? (e.$global.appleLoginUrl = f) : 2 === m && (e.$global.certifyRedirectUrl = f), f || e.$toast("url error")), (e.state = 1)))
                                    : ((e.state = -1), e.$toast(n, 5e3), w.emit(b.SHOW_COMFIRM, { content: n }));
                            })
                            .catch(function (i) {
                                (t.state = -1), console.log(i), i.response && i.response.data && i.response.data.msg ? e.$toast(i.response.data.msg, 5e3) : e.$toast(i, 5e3);
                            });
                },
                mounted: function () {
                    w.on(b.SHOW_COMFIRM, this.showComfirm), w.on(b.HIDE_COMFIRM, this.hideComfirm), w.on(b.ORIENTATION_CHANGE, this.checkOrientation), w.on(b.EXIT, this.exit);
                },
            },
            j = P,
            $ = (i("e06e"), Object(u["a"])(j, n, s, !1, null, null, null)),
            H = $.exports,
            z = i("8c4f"),
            D = function () {
                var t = this,
                    e = t._self._c;
                return e("div", { staticClass: "index" }, [
                    e("div", { staticClass: "content protocol-context" }, [
                        e("div", { staticClass: "protocol-context-title", staticStyle: { "font-size": "18px" } }, [t._v(" " + t._s(t.lang.delete_account_condition_page[0]) + " ")]),
                        e("div", [t._v(t._s(t.lang.delete_account_condition_page[1]))]),
                        e("div", [e("em", [t._v(t._s(t.lang.delete_account_condition_page[2]))])]),
                        e("div", { domProps: { innerHTML: t._s(t.lang.delete_account_condition_page[3]) } }),
                        e("div", [e("em", [t._v(t._s(t.lang.delete_account_condition_page[4]))])]),
                        e("div", [e("em", [t._v(t._s(t.lang.delete_account_condition_page[5]))])]),
                        e("div", [t._v(" " + t._s(t.lang.delete_account_condition_page[6]) + " ")]),
                        e("div", { staticClass: "check" }, [e("ComfirmCheck", { attrs: { msg: t.lang.delete_account_condition_page[7], state: t.checkState }, on: { check: t.switchCheckState } })], 1),
                    ]),
                    e("div", { staticClass: "fotter" }, [
                        e("div", { staticClass: "btn", class: { active: t.checkState }, on: { click: t.onConfirm } }, [t._v(" " + t._s(t.lang.next_step) + " ")]),
                        e("div", { staticClass: "think-btn", on: { click: t.exit } }, [t._v(t._s(t.lang.think_again))]),
                    ]),
                ]);
            },
            q = [],
            J =
                (i("c975"),
                function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", { staticClass: "comfirm-check", on: { click: t.onCheck } }, [
                        e("img", { staticClass: "check-btn", attrs: { src: t.icon, alt: "" } }),
                        e(
                            "div",
                            { staticClass: "check-text" },
                            [
                                t._t("text", function () {
                                    return [t._v(t._s(t.msg))];
                                }),
                            ],
                            2
                        ),
                    ]);
                }),
            W = [],
            Z = i("a9b0"),
            Q = i.n(Z),
            K = i("b4f5"),
            X = i.n(K),
            G = {
                name: "HelloWorld",
                props: { msg: String, state: Boolean },
                computed: {
                    icon: function () {
                        return this.state ? Q.a : X.a;
                    },
                },
                data: function () {
                    return {};
                },
                methods: {
                    onCheck: function () {
                        this.$emit("check");
                    },
                },
            },
            tt = G,
            et = (i("b496"), Object(u["a"])(tt, J, W, !1, null, "173d9e92", null)),
            it = et.exports,
            at = {
                name: "Home",
                components: { ComfirmCheck: it },
                data: function () {
                    return { checkState: !1, isRequest: !1, lang: this.$global.lang };
                },
                created: function () {
                    this.$global.roloadTag && window.location.reload();
                },
                methods: {
                    switchCheckState: function () {
                        this.checkState = !this.checkState;
                    },
                    tipEvent: function (t) {
                        w.emit(b.SHOW_COMFIRM, {
                            confirmText: this.lang.confirm,
                            content: this.lang.manual_review_tips,
                            onConfirm: function () {
                                t();
                            },
                        });
                    },
                    checkNextJump: function () {
                        var t = this,
                            e = this.$global,
                            i = e.certifyRedirectUrl,
                            a = e.appleLoginUrl,
                            n = e.securityEmail;
                        if (a) return this.$router.push("/apple-login");
                        if (i) {
                            var s = -1 === i.indexOf("?") ? i + window.location.search : i;
                            n
                                ? (window.location.href = s)
                                : this.tipEvent(function () {
                                      window.location.href = s;
                                  });
                        } else
                            n
                                ? this.$router.push("/certify-email")
                                : this.tipEvent(function () {
                                      t.$router.push("/certify-review");
                                  });
                    },
                    onConfirm: function () {
                        if (this.checkState && !this.isRequest) {
                            var t = this;
                            (this.isRequest = !0),
                                L({ checkState: t.checkState })
                                    .then(function (e) {
                                        console.log(e);
                                        var i = e.data,
                                            a = i.code,
                                            n = i.msg,
                                            s = i.ticket;
                                        0 === a ? (s && (t.$global.query.ticket = s), (t.$global.routeTag = 1), t.checkNextJump()) : w.emit(b.SHOW_COMFIRM, { content: n || t.lang.network_error });
                                    })
                                    .catch(function (e) {
                                        var i = t.lang.network_error;
                                        console.log(e), e.response && e.response.data && e.response.data.msg ? w.emit(b.SHOW_COMFIRM, { content: e.response.data.msg }) : t.$toast(i);
                                    })
                                    .finally(function () {
                                        t.isRequest = !1;
                                    });
                        }
                    },
                    exit: function () {
                        w.emit(b.EXIT);
                    },
                },
            },
            nt = at,
            st = (i("6a0c"), Object(u["a"])(nt, D, q, !1, null, "33098351", null)),
            ot = st.exports,
            lt =
                (i("498a"),
                function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", { staticClass: "certify" }, [
                        e("div", { staticClass: "title" }, [t._v(t._s(t.lang.verify_email))]),
                        e("div", { staticClass: "detail" }, [t._v(" " + t._s(t.lang.verify_email_tips) + " ")]),
                        e("div", { staticClass: "input-wrapper" }, [
                            e("input", {
                                directives: [{ name: "model", rawName: "v-model.trim", value: t.email, expression: "email", modifiers: { trim: !0 } }],
                                staticClass: "input-item",
                                attrs: { type: "text", placeholder: t.lang.input_email },
                                domProps: { value: t.email },
                                on: {
                                    input: function (e) {
                                        e.target.composing || (t.email = e.target.value.trim());
                                    },
                                    blur: function (e) {
                                        return t.$forceUpdate();
                                    },
                                },
                            }),
                        ]),
                        e("div", { staticClass: "fotter" }, [
                            e("div", { staticClass: "btn", class: { active: t.checkState }, on: { click: t.onConfirm } }, [t._v(" " + t._s(t.lang.next_step) + " ")]),
                            e("div", { staticClass: "think-btn", on: { click: t.exit } }, [t._v(t._s(t.lang.think_again))]),
                        ]),
                    ]);
                }),
            ct = [],
            rt =
                (i("00b4"),
                {
                    name: "CertifyEmail",
                    data: function () {
                        return { isRequest: !1, lang: this.$global.lang, email: "" };
                    },
                    computed: {
                        checkState: function () {
                            return "" !== this.email;
                        },
                    },
                    methods: {
                        exit: function () {
                            w.emit(b.EXIT);
                        },
                        switchCheckState: function () {
                            this.checkState = !this.checkState;
                        },
                        onConfirm: function () {
                            if (this.checkState && !this.isRequest) {
                                var t = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                                if (!t.test(this.email)) return this.$toast(this.lang.email_tip);
                                var e = this;
                                (this.isRequest = !0),
                                    F(e.email)
                                        .then(function (t) {
                                            var i = t.data,
                                                a = i.code,
                                                n = i.msg;
                                            console.log(t), 0 === a ? ((e.$global.email = e.email), e.$router.push("/certify-code")) : w.emit(b.SHOW_COMFIRM, { content: n });
                                        })
                                        .catch(function (t) {
                                            var i = e.lang.network_error;
                                            console.log(t), t.response && t.response.data && t.response.data.msg ? w.emit(b.SHOW_COMFIRM, { content: t.response.data.msg }) : e.$toast(i);
                                        })
                                        .finally(function () {
                                            e.isRequest = !1;
                                        });
                            }
                        },
                    },
                }),
            ut = rt,
            pt = (i("7969"), Object(u["a"])(ut, lt, ct, !1, null, "d8c8c7f6", null)),
            dt = pt.exports,
            mt =
                (i("99af"),
                function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", { staticClass: "certify" }, [
                        e("div", { staticClass: "title" }, [t._v(t._s(t.lang.verify_email))]),
                        e("div", { staticClass: "detail" }, [t._v(" " + t._s(t.lang.input_code_tips) + " ")]),
                        e("div", { staticClass: "input-wrapper" }, [
                            e("input", {
                                directives: [{ name: "model", rawName: "v-model.trim", value: t.code, expression: "code", modifiers: { trim: !0 } }],
                                staticClass: "input-item",
                                attrs: { type: "text", maxlength: "6", placeholder: t.lang.input_code },
                                domProps: { value: t.code },
                                on: {
                                    input: function (e) {
                                        e.target.composing || (t.code = e.target.value.trim());
                                    },
                                    blur: function (e) {
                                        return t.$forceUpdate();
                                    },
                                },
                            }),
                        ]),
                        e("div", { staticClass: "resend", class: { "resend-active": t.reSendTime <= 0 }, on: { click: t.reSend } }, [
                            t._v(" " + t._s(t.reSendTime > 0 ? "".concat(t.lang.resend, "ï¼ˆ").concat(t.reSendTime >= 10 ? t.reSendTime : "0" + t.reSendTime, "sï¼‰") : t.lang.resend) + " "),
                        ]),
                        e("div", { staticClass: "fotter" }, [
                            e("div", { staticClass: "btn", class: { active: t.checkState }, on: { click: t.onConfirm } }, [t._v(" " + t._s(t.lang.next_step) + " ")]),
                            e("div", { staticClass: "think-btn", on: { click: t.exit } }, [t._v(t._s(t.lang.think_again))]),
                        ]),
                    ]);
                }),
            ft = [],
            gt = {
                name: "CertifyCode",
                data: function () {
                    return { isRequest: !1, isSend: !1, lang: this.$global.lang, code: "", reSendTime: 0, timer: null };
                },
                watch: {
                    reSendTime: function (t) {
                        var e = this;
                        60 === t &&
                            (this.timer = window.setInterval(function () {
                                e.reSendTime > 0 ? (e.reSendTime = e.reSendTime - 1) : clearInterval(e.timer);
                            }, 1e3));
                    },
                },
                beforeMount: function () {
                    this.reSendTime = 60;
                },
                beforeDestroy: function () {
                    this.timer && clearInterval(this.timer);
                },
                computed: {
                    checkState: function () {
                        return "" !== this.code;
                    },
                },
                methods: {
                    reSend: function () {
                        if (0 === this.reSendTime) {
                            var t = this;
                            (this.isSend = !0),
                                F(t.$global.email)
                                    .then(function (e) {
                                        var i = e.data,
                                            a = i.code,
                                            n = i.msg;
                                        console.log(e), 0 === a ? (t.reSendTime = 60) : w.emit(b.SHOW_COMFIRM, { content: n });
                                    })
                                    .catch(function (e) {
                                        var i = t.lang.network_error;
                                        console.log(e), e.response && e.response.data && e.response.data.msg ? w.emit(b.SHOW_COMFIRM, { content: e.response.data.msg }) : t.$toast(i);
                                    })
                                    .finally(function () {
                                        t.isSend = !1;
                                    });
                        }
                    },
                    exit: function () {
                        w.emit(b.EXIT);
                    },
                    switchCheckState: function () {
                        this.checkState = !this.checkState;
                    },
                    onConfirm: function () {
                        if (this.checkState && !this.isRequest) {
                            if (!/^\d{6}$/.test(this.code)) return this.$toast(this.lang.code_tip);
                            var t = this;
                            (this.isRequest = !0),
                                Y(this.$global.email, t.code)
                                    .then(function (e) {
                                        console.log(e);
                                        var i = e.data,
                                            a = i.code,
                                            n = i.msg,
                                            s = i.ticket;
                                        0 === a
                                            ? ((t.$global.query.ticket = s),
                                              w.emit(b.SHOW_COMFIRM, {
                                                  cancelText: t.lang.no,
                                                  confirmText: t.lang.yes,
                                                  content: t.lang.verify_success + "<br/>" + t.lang.submit_account_deletion_tips,
                                                  onConfirm: function () {
                                                      t.$router.push("/confirm");
                                                  },
                                              }))
                                            : w.emit(b.SHOW_COMFIRM, { content: n });
                                    })
                                    .catch(function (e) {
                                        var i = t.lang.network_error;
                                        console.log(e), e.response && e.response.data && e.response.data.msg ? w.emit(b.SHOW_COMFIRM, { content: e.response.data.msg }) : t.$toast(i);
                                    })
                                    .finally(function () {
                                        t.isRequest = !1;
                                    });
                        }
                    },
                },
            },
            ht = gt,
            vt = (i("bec4"), Object(u["a"])(ht, mt, ft, !1, null, "9a1ae634", null)),
            _t = vt.exports,
            At = function () {
                var t = this,
                    e = t._self._c;
                return e("div", { staticClass: "certify" }, [
                    e("div", { staticClass: "title" }, [t._v(t._s(t.lang.manual_review_page[0]))]),
                    e("div", { staticClass: "detail" }, [t._v(" " + t._s(t.lang.manual_review_page[1]) + " ")]),
                    e("div", { staticClass: "upload-tip" }, [
                        t._v(" " + t._s(t.lang.manual_review_page[2]) + " "),
                        e("a", { staticClass: "exe-tag", attrs: { href: t.exampleUrl, target: "_blank" } }, [t._v(t._s("".concat(t.lang.manual_review_page[3])))]),
                    ]),
                    0 === t.fileUploadTarget
                        ? e(
                              "div",
                              { staticClass: "upload" },
                              [
                                  t._l(t.imgList, function (i, a) {
                                      return e("div", { key: i, staticClass: "upload-item" }, [
                                          e("img", { staticClass: "upload-item-img", attrs: { src: i, alt: "" } }),
                                          e("img", {
                                              staticClass: "upload-item-remove",
                                              attrs: { src: t.removeIcon },
                                              on: {
                                                  click: function (e) {
                                                      return e.preventDefault(), t.remove(i, a);
                                                  },
                                              },
                                          }),
                                      ]);
                                  }),
                                  t.isLoading ? e("div", { staticClass: "upload-item add-item img-loading-wrapper" }, [e("img", { staticClass: "icon", attrs: { src: i("15c8"), alt: "" } })]) : t._e(),
                                  e(
                                      "file-upload",
                                      {
                                          directives: [{ name: "show", rawName: "v-show", value: !t.isLoading, expression: "!isLoading" }],
                                          ref: "upload",
                                          attrs: { accept: "image/*", thread: 1, multiple: !0, name: t.uploadParamas.fileKey, "post-action": t.uploadUrl, headers: t.uploadParamas.header, data: t.uploadParamas.body },
                                          on: { "input-file": t.inputFile, "input-filter": t.inputFilter },
                                          model: {
                                              value: t.files,
                                              callback: function (e) {
                                                  t.files = e;
                                              },
                                              expression: "files",
                                          },
                                      },
                                      [e("div", { staticClass: "upload-item add-item" })]
                                  ),
                              ],
                              2
                          )
                        : e(
                              "div",
                              { staticClass: "upload tick" },
                              [
                                  t._l(t.ticketList, function (i, a) {
                                      return e("div", { key: i, staticClass: "upload-item" }, [
                                          e("img", { staticClass: "upload-item-img", attrs: { src: t.imgList[a], alt: "" } }),
                                          e("img", {
                                              staticClass: "upload-item-remove",
                                              attrs: { src: t.removeIcon },
                                              on: {
                                                  click: function (e) {
                                                      return e.preventDefault(), t.removeTicket(a);
                                                  },
                                              },
                                          }),
                                      ]);
                                  }),
                                  t.isLoading ? e("div", { staticClass: "upload-item add-item img-loading-wrapper" }, [e("img", { staticClass: "icon", attrs: { src: i("15c8"), alt: "" } })]) : t._e(),
                                  1 === t.fileUploadTarget
                                      ? e(
                                            "div",
                                            [
                                                e(
                                                    "file-upload",
                                                    {
                                                        directives: [{ name: "show", rawName: "v-show", value: !t.isLoading, expression: "!isLoading" }],
                                                        ref: "upload",
                                                        attrs: {
                                                            accept: "image/*",
                                                            thread: 1,
                                                            multiple: !0,
                                                            name: "file",
                                                            "post-action": t.uploadUrl,
                                                            headers: t.uploadParamas.header,
                                                            data: t.uploadParamas.body,
                                                            maximum: t.fileUploadLimit,
                                                        },
                                                        on: { "input-file": t.inputFile, "input-filter": t.inputFilter },
                                                        model: {
                                                            value: t.files,
                                                            callback: function (e) {
                                                                t.files = e;
                                                            },
                                                            expression: "files",
                                                        },
                                                    },
                                                    [e("div", { staticClass: "upload-item add-item" })]
                                                ),
                                            ],
                                            1
                                        )
                                      : e(
                                            "div",
                                            [
                                                e(
                                                    "file-upload",
                                                    {
                                                        directives: [{ name: "show", rawName: "v-show", value: !t.isLoading, expression: "!isLoading" }],
                                                        ref: "upload",
                                                        attrs: { accept: "image/*", thread: 1, multiple: !0, name: "file", "post-action": t.uploadUrl, headers: t.uploadParamas.header, data: t.uploadParamas.body },
                                                        on: { "input-file": t.inputFile, "input-filter": t.inputFilter },
                                                        model: {
                                                            value: t.files,
                                                            callback: function (e) {
                                                                t.files = e;
                                                            },
                                                            expression: "files",
                                                        },
                                                    },
                                                    [e("div", { staticClass: "upload-item add-item" })]
                                                ),
                                            ],
                                            1
                                        ),
                              ],
                              2
                          ),
                    e("div", { staticClass: "tip-detail" }, [t._v(t._s(t.lang.manual_review_page[4]))]),
                    e("div", { staticClass: "email-tip" }, [t._v(" " + t._s(t.lang.manual_review_page[5]) + " ")]),
                    e("div", { staticClass: "input-wrapper" }, [
                        e("input", {
                            directives: [{ name: "model", rawName: "v-model.trim", value: t.email, expression: "email", modifiers: { trim: !0 } }],
                            staticClass: "input-item",
                            attrs: { type: "text", placeholder: t.lang.manual_review_page[6] },
                            domProps: { value: t.email },
                            on: {
                                input: function (e) {
                                    e.target.composing || (t.email = e.target.value.trim());
                                },
                                blur: function (e) {
                                    return t.$forceUpdate();
                                },
                            },
                        }),
                    ]),
                    e("div", { staticClass: "tip-detail" }, [t._v(t._s(t.lang.manual_review_page[7]))]),
                    e("div", { staticClass: "fotter" }, [
                        e("div", { staticClass: "btn", class: { active: t.checkState }, on: { click: t.onConfirm } }, [t._v(" " + t._s(t.lang.next_step) + " ")]),
                        e("div", { staticClass: "think-btn", on: { click: t.exit } }, [t._v(t._s(t.lang.think_again))]),
                    ]),
                ]);
            },
            Ct = [],
            wt = (i("a434"), i("3ca3"), i("ddb0"), i("2b3d"), i("9861"), i("a15b"), i("8019")),
            bt = i.n(wt),
            kt = i("98d4"),
            yt = i.n(kt),
            xt = {
                name: "certifyReview",
                components: { FileUpload: bt.a },
                data: function () {
                    return {
                        files: [],
                        isRequest: !1,
                        lang: this.$global.lang,
                        exampleUrl: this.$global.exampleUrl,
                        email: "",
                        isLoading: !1,
                        imgList: [],
                        ticketList: [],
                        removeIcon: yt.a,
                        uploadUrl: this.$global.fileUploadHost,
                        fileUploadTarget: this.$global.fileUploadTarget,
                        needContactEmail: this.$global.needContactEmail,
                        fileUploadLimit: this.$global.fileUploadLimit,
                    };
                },
                computed: {
                    checkState: function () {
                        return !this.needContactEmail || "" !== this.email;
                    },
                    uploadParamas: function () {
                        var t = this.$global,
                            e = t.fileUploadToken,
                            i = t.fileUploadTimestamp,
                            a = t.fileUploadTarget;
                        return 1 === a || 2 === a ? { fileKey: "file", header: { Authorization: e }, body: { timestamp: i } } : { fileKey: "fpfile", header: {}, body: { Authorization: e } };
                    },
                },
                methods: {
                    exit: function () {
                        w.emit(b.EXIT);
                    },
                    remove: function (t, e) {
                        this.$refs.upload.remove(t), this.imgList.splice(e, 1);
                    },
                    removeTicket: function (t) {
                        this.ticketList.splice(t, 1);
                    },
                    inputFile: function (t, e) {
                        if ((t && e && t.error !== e.error && console.log("error", t.error, t), t && e && !t.active && e.active && ((this.isLoading = !1), t.xhr)))
                            if (200 !== t.xhr.status) "Token Timeout" === t.response ? this.$toast(this.lang.token_invalid) : this.$toast(t.response || this.lang.network_error);
                            else if (t.response) {
                                if (
                                    (0 === this.fileUploadTarget && t.response.url && this.imgList.push(t.response.url),
                                    1 === this.fileUploadTarget && (this.ticketList.push(t.response.ticket), this.imgList.push(t.url)),
                                    2 === this.fileUploadTarget)
                                ) {
                                    var i = JSON.parse(t.response);
                                    this.ticketList.push(i.ticket), this.imgList.push(t.url);
                                }
                            } else this.$toast(t.response || this.lang.network_error);
                        (Boolean(t) === Boolean(e) && e.error === t.error) || this.$refs.upload.active || ((this.isLoading = !0), (this.$refs.upload.active = !0));
                    },
                    inputFilter: function (t, e, i) {
                        if (t && !e) {
                            if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(t.name)) return this.$toast(this.lang.upload_tip), i();
                            if (this.isLoading) return i();
                            if (t.size > 10485760) return this.$toast(this.lang.upload_file_limit_tip), i();
                            if (t && (!e || t.file !== e.file)) {
                                t.url = "";
                                var a = window.URL || window.webkitURL;
                                a && a.createObjectURL && (t.url = a.createObjectURL(t.file));
                            }
                        }
                    },
                    onConfirm: function () {
                        if (this.checkState && !this.isRequest) {
                            if (this.email) {
                                var t = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                                if (!t.test(this.email)) return this.$toast(this.lang.email_tip);
                            }
                            var e = this;
                            this.isRequest = !0;
                            var i = 0 === this.fileUploadTarget ? this.imgList.join(",") : this.ticketList.join(",");
                            B(e.email, i)
                                .then(function (t) {
                                    var i = t.data,
                                        a = i.code,
                                        n = i.msg,
                                        s = i.ticket;
                                    0 === a
                                        ? ((e.$global.query.ticket = s),
                                          e.email
                                              ? w.emit(b.SHOW_COMFIRM, {
                                                    cancelText: e.lang.no,
                                                    confirmText: e.lang.yes,
                                                    content: e.lang.manual_review_page[8] + "<br/>" + e.lang.submit_account_deletion_tips,
                                                    onConfirm: function () {
                                                        e.$router.push("/confirm");
                                                    },
                                                })
                                              : e.$router.push("/confirm"))
                                        : w.emit(b.SHOW_COMFIRM, { content: n });
                                })
                                .catch(function (t) {
                                    if ((console.log(t), t.response && "Token Timeout" === t.response.data)) e.$toast(e.lang.token_invalid);
                                    else {
                                        var i = e.lang.network_error;
                                        t.response && t.response.data && t.response.data.msg ? w.emit(b.SHOW_COMFIRM, { content: t.response.data.msg }) : e.$toast(i);
                                    }
                                })
                                .finally(function () {
                                    e.isRequest = !1;
                                });
                        }
                    },
                },
            },
            Ot = xt,
            St = (i("d028"), Object(u["a"])(Ot, At, Ct, !1, null, "1767291c", null)),
            Tt = St.exports,
            Ut = function () {
                var t = this,
                    e = t._self._c;
                return e("div", { staticClass: "confirm" }, [
                    e("div", { staticClass: "content protocol-context" }, [
                        e("div", { staticClass: "protocol-context-title", staticStyle: { "font-size": "18px" } }, [t._v(" " + t._s(t.lang.account_deletion_page[0]) + " ")]),
                        e("div", [t._v(t._s(t.lang.account_deletion_page[1]))]),
                        e("div", [t._v(" " + t._s(t.lang.account_deletion_page[2]) + " ")]),
                        e("div", { domProps: { innerHTML: t._s(t.lang.account_deletion_page[3]) } }),
                        e("div", [t._v(" " + t._s(t.lang.account_deletion_page[4]) + " ")]),
                        e("div", { staticClass: "check" }, [e("ComfirmCheck", { attrs: { msg: t.lang.account_deletion_page[5], state: t.checkState }, on: { check: t.switchCheckState } })], 1),
                    ]),
                    e("div", { staticClass: "fotter" }, [
                        e("div", { staticClass: "btn", class: { active: t.checkState }, on: { click: t.onConfirm } }, [t._v(" " + t._s(t.lang.account_deletion_page[6]) + " ")]),
                        e("div", { staticClass: "think-btn", on: { click: t.exit } }, [t._v(t._s(t.lang.think_again))]),
                    ]),
                ]);
            },
            Mt = [],
            It = {
                name: "Confirm",
                components: { ComfirmCheck: it },
                data: function () {
                    return { checkState: !1, isRequest: !1, lang: this.$global.lang };
                },
                methods: {
                    switchCheckState: function () {
                        this.checkState = !this.checkState;
                    },
                    onConfirm: function () {
                        if (this.checkState && !this.isRequest) {
                            var t = this;
                            (this.isRequest = !0),
                                N()
                                    .then(function (e) {
                                        console.log(e);
                                        var i = e.data,
                                            a = i.code,
                                            n = i.msg,
                                            s = i.commit_time;
                                        0 === a ? t.$router.push({ path: "/success?time=".concat(s) }) : w.emit(b.SHOW_COMFIRM, { content: n });
                                    })
                                    .catch(function (e) {
                                        var i = t.lang.network_error;
                                        console.log(e), e.response && e.response.data && e.response.data.msg ? w.emit(b.SHOW_COMFIRM, { content: e.response.data.msg }) : t.$toast(i);
                                    })
                                    .finally(function () {
                                        t.isRequest = !1;
                                    });
                        }
                    },
                    exit: function () {
                        w.emit(b.EXIT);
                    },
                },
            },
            Rt = It,
            Et = (i("ef48"), Object(u["a"])(Rt, Ut, Mt, !1, null, "0298bf24", null)),
            Vt = Et.exports,
            Lt = function () {
                var t = this,
                    e = t._self._c;
                return t.loading
                    ? t._e()
                    : e("div", { staticClass: "success" }, [
                          e("img", { staticClass: "succ-icon", attrs: { src: i("97d2"), alt: "" } }),
                          e("div", { staticClass: "context" }, [
                              t._v(" " + t._s(t.textArr[0]) + " "),
                              e("span", { staticClass: "light" }, [t._v(t._s(t.time))]),
                              t._v(" " + t._s(t.textArr[1]) + " "),
                              e("span", { staticClass: "light" }, [t._v(t._s(t.day))]),
                              t._v(" " + t._s(t.textArr[2]) + " "),
                          ]),
                          e("div", { staticClass: "confirm-btn", on: { click: t.onCloseWindow } }, [t._v(t._s(t.lang.finish))]),
                      ]);
            },
            Ft = [],
            Yt = i("2909"),
            Bt = {
                data: function () {
                    return { isVertical: this.$global.isVertical, day: this.$global.reviewDay, time: this.$route.query.time, textArr: [], lang: this.$global.lang, loading: !0 };
                },
                created: function () {
                    (this.$global.routeTag = 0), (this.$global.roloadTag = !0);
                    var t = this.lang.submit_success_tips.split("{date_time}"),
                        e = t.pop().split("{days}");
                    (this.textArr = [].concat(Object(Yt["a"])(t), Object(Yt["a"])(e))), (this.loading = !1);
                },
                methods: {
                    updataIsVertical: function () {
                        this.isVertical = this.$global.isVertical;
                    },
                    onCloseWindow: function () {
                        x();
                    },
                },
            },
            Nt = Bt,
            Pt = (i("7c6c"), Object(u["a"])(Nt, Lt, Ft, !1, null, "6949aca5", null)),
            jt = Pt.exports,
            $t = function () {
                var t = this,
                    e = t._self._c;
                return e("div", { staticClass: "apple-login-read" }, [
                    e("div", { staticClass: "content protocol-context" }, [
                        e("div", { staticClass: "protocol-context-title" }, [t._v(" " + t._s(t.lang.apple_revoke_page_title) + " ")]),
                        e("p", [t._v(t._s(t.lang.apple_revoke_page_content))]),
                        e("div", { staticClass: "btn", on: { click: t.onLogin } }, [e("img", { staticClass: "icon", attrs: { src: i("53d9"), alt: "", srcset: "" } }), e("div", [t._v(" " + t._s(t.lang.apple_login) + " ")])]),
                        e("div", { staticClass: "think-btn", on: { click: t.exit } }, [t._v(t._s(t.lang.think_again))]),
                    ]),
                ]);
            },
            Ht = [],
            zt = {
                name: "appleLogin",
                data: function () {
                    var t = this;
                    return { isVertical: this.$global.isVertical, lang: t.$global.lang || {} };
                },
                methods: {
                    updataIsVertical: function () {
                        this.isVertical = this.$global.isVertical;
                    },
                    onLogin: function () {
                        console.log("onLogin appleLoginUrl:" + this.$global.appleLoginUrl), (window.location.href = this.$global.appleLoginUrl);
                    },
                    exit: function () {
                        w.emit(b.EXIT);
                    },
                },
            },
            Dt = zt,
            qt = (i("18dd"), Object(u["a"])(Dt, $t, Ht, !1, null, "3122c300", null)),
            Jt = qt.exports;
        a["a"].use(z["a"]);
        var Wt = { 0: "index", 1: "certifyEmail", 2: "certifyCode", 3: "certifyReview", 4: "confirm", 5: "success", 6: "appleLogin" },
            Zt = [
                { path: "/", name: Wt[0], component: ot },
                { path: "/certify-email", name: Wt[1], component: dt },
                { path: "/certify-code", name: Wt[2], component: _t },
                { path: "/apple-login", name: Wt[6], component: Jt },
                { path: "/certify-review", name: Wt[3], component: Tt },
                { path: "/confirm", name: Wt[4], component: Vt },
                { path: "/success", name: Wt[5], component: jt },
            ],
            Qt = new z["a"]({ base: "../../../static/account_deletion/", routes: Zt }),
            Kt = Qt,
            Xt = {
                debounce: function (t, e) {
                    var i = null;
                    return function () {
                        var a = this,
                            n = arguments;
                        clearTimeout(i),
                            (i = setTimeout(function () {
                                t.apply(a, n);
                            }, e));
                    };
                },
            },
            Gt = "";
        function te() {
            var t = Gt,
                e = document.documentElement.clientWidth,
                i = 0,
                a = 0;
            if (t) {
                var n = t.split(",");
                (i = n[0]), (a = n[1]);
            } else {
                var s = window.screen.width,
                    o = window.screen.height;
                (i = s < o ? s : o), (a = s >= o ? s : o), (Gt = i + "," + a);
            }
            return e <= i ? ((I.isVertical = !0), w.emit(b.ORIENTATION_CHANGE), "portrait") : e == a || e > i ? ((I.isVertical = !1), w.emit(b.ORIENTATION_CHANGE), "landscape") : void 0;
        }
        if (
            ((window.onresize = Xt.debounce(te, 300)),
            (window.onload = function () {
                te();
            }),
            (a["a"].prototype.$global = I),
            (a["a"].prototype.$toast = y),
            (a["a"].config.productionTip = !1),
            "1" === I.query.debug)
        ) {
            var ee = i("3a34");
            a["a"].config.$vConsole = new ee();
        }
        Kt.beforeEach(function (t, e, i) {
            w.emit(b.HIDE_COMFIRM), "index" !== t.name && 0 === I.routeTag ? i({ name: "index" }) : i();
        }),
            new a["a"]({
                router: Kt,
                render: function (t) {
                    return t(H);
                },
            }).$mount("#app");
    },
    "5c33": function (t, e, i) {},
    "61dc": function (t, e, i) {
        t.exports = i.p + "img/icon_rotating_screen.e5b5d3c3.png";
    },
    "6a0c": function (t, e, i) {
        "use strict";
        i("5c33");
    },
    7969: function (t, e, i) {
        "use strict";
        i("a275");
    },
    "7c6c": function (t, e, i) {
        "use strict";
        i("35c3");
    },
    "97d2": function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAA/1BMVEUAAAAdpiodpiseqC0fpi0prTAdpisepiodpioepSodpisepisdpysdpisepysgpywuui4dqCsepiseqCwepSoepSodpiodpSodpSsdpSwepiofpiofpSsdpywgqisgpzAmqi8kqjEiqjMdpiwepSsepisdpSodpSr///8epiv4/Pgipy86sUXv+fD8/vze8uBNuFgrqzcmqTPs9+3p9urY79p+zIVkwW0zrj8urDrz+vTk9Oa04biCzYl3yX9fv2hZvWLT7dXN69DE6Me65L6b16FxxnlTul3J6cy/5cKo3K2i2qeV1ZuO0pWHz45pw3JItlJDtE5As0uw37RGtVG+HlFbAAAAJ3RSTlMA5ZsqIwz8+dy6qKSTaGA3BUzYUVT36sGtenlzbEUwIBsVD4zMy4v1tpEDAAAE30lEQVR42u3cZ3PTQBAGYMl23HElvZEC7ylyEttJnOrEkN5I4///FhggBN/5JF2TD8bPR4aZ3ESrze7q7pyRkZERk5aT5fl6aW5mZq5Uny8nl51hS1VnE5MuKO5kYraacoZjsVRwEcAtlBadeFXqiSwiyCaqFScu5eIEIpsolp0YfJiuQVBt+oNjViqRgYRMwuQbkCykISldSDpmJKc8KPCmTCxsbCUNRemVMUez9y40cN/rjfQcNMlpjP1349Bm/J2uqMpDq7yWCFvIQrPsgoYHmIF2GeUHWYQRRbVKIQ9D8hWFYM/BmJx04C+twqDVJclV1WBUTWpdY6swbFXiOVZyMC4nHvd5xCBvSb5SzF/vEBOhfL+QQUwyCwIvYRaxyY7ZFe6v8tYFllB4pcYRq/FodXQOMctF6nEQuwj90JiL2Lnhb+MKhmAltKNPYwjSYXOAKZjh97rdkzZ4pkJ+WR6MuNgmP6x3wOEF/7oKMOKe/HYLjkJgJk3DhC754wSDpYNyagIm7G6QP7Z5UZIImItmYEBzjfzlGwbL8Oer0zCgsUX+dgyOaYenBv1amyTasmrceTv0869Ivx54yjG2FUek31oLPEVOZzgB7e4I5Su4JgZ3jXVod0woOz746jElrZMN0m+rAS5e6spCs8cDOrCaCJJ1BliEZo1t0m9jF8EWHVYJerV2CKWDECXzxYN/SijnCFNwWC60uiGUIw9hXIeRglb3hPLFRzi2uqlCpwtC2dxHBFWHNguNemuk33oDUcwaTaZP62zCioRNqJPQZu+QUB4QzaTBF7H9mVC6CMV5FZehi3dNKLeIbJluEKHLLaGceYgsaaoy/Uoon9uIiq1Q56HHA6Ec7kHAvJmp1iWTsJ4hoi5YP+x3j65vdj0Ee2YS1iUEsDXEHAL1tn7VvM/Ba99kE5aYOWpZMwhysfH6TB7B539hGwpBMyLL2l9/i5Un8HhHbMISNSPyEM/Jm61n/v+iXHsQNScS8n0PZ7uBgTriCYtVEmkSD/ozUYMzLWISlri6SDrdDP+BTTphHTxBwrzIH58zutTc40yL3qz1IKMs8qf6gYSsq8UkrAtISQoVNkxztbNPTYso95CzLFQGNg6Z16yFNy+EcgM5rmDR3Nhm18WfFp36kDMp2mI8bTGNX5s7LWpBUkK4IXtcJ5SrNjUtovKthFnx9rV5MPBZfaP/+eAR0qrizT5b4pFrH3vMtOgE8lIyo5Ees66z/R1COYY8V26QdMKsiwm4OygoSI7ddjdIsBeoKMkOKS+C13XlQ8Wi9Ej3mATYbEFFVmEA3iE0/nhbJpmKZi62bWanRWqqSh9X7gmFGm/LmqiofYq6I4N0oKio+uHunLDOoaqs/JnzhnDG2wpq6h+FvRd2vK1qWsMndO+IHm+rynzQseHAP6PG26oSerZn+KfUtEhNOqVpM0v77HVVu1BX0Lf1p7P2s3JvQp2X1LhRqn3Z7TShw9S/ua1sOJvwPv2rWxYt3eBp63ZYWzcPW7rV2taN6bZu47f00IOtR0RsPVBj6/EjWw9rWXq0zdaDgD/W9REGfVz6vw6Z2nok19YDzNYe97b1cLytVwnYevGCtddU2Hqph7VXoNh6YYy11+tYexmRtVc3WXvR1U+VqoXXgll7iZrFV85ZfEHfyMjIf+07/CmTK7t+wxAAAAAASUVORK5CYII=";
    },
    "98d4": function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAS1BMVEUAAAD4+PhVVVXExMQAAADx8fHAwMCVlZVCQkI4ODgSEhIAAAAAAADT09PMzMy8vLxLS0sAAAAAAAAAAAAAAAAAAACysrIAAAD////YtBl/AAAAGHRSTlOZ+rDdAPXbx6qnnZIQ5ODYrYNuXUEv1EJZaWe8AAAAv0lEQVRIx+3TyQ6EIBREURSc56mb///SNmFRAnlJvUXvrJ3kHlkYzbt3/1nXZUf92sv9x/slOSorX7Xi+/09G/fFfVTLAAI9QL4liKQvWiPOQqAvxRyC7SHoHgI9Jyb0pEBPCPTkpgDoviwCsIoegut5ge9lSYHvBcH1EGQPQfWc6Cv0T9FIYEUfiVm+AT1EcsPwfGjrOvt/mznqzWaU27Xg1IJRC9yhBeOgBO7SAvfVAncNSuDGQwMCOfeNuucHMpgU9lQ5zqwAAAAASUVORK5CYII=";
    },
    a144: function (t, e, i) {},
    a275: function (t, e, i) {},
    a9b0: function (t, e) {
        t.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAANlBMVEUAAAA1iOb///+aw/Lw9v3h7vupzPSKuvBSmelDkOf3+v7R5PnJ3/i+2PZ1ru5qp+xious8jOYVDUN7AAAAAXRSTlMAQObYZgAAALdJREFUSMft1bsOwyAQRNHA2hgS5/X/P5tmwxQrZzQurFji1nMatuAyOr4kNvDAm5ntx5azyRjWtYBhXQsYlmJudQyrY1gdw+oYVsewOob9ha0Qu4F9tTZqI+6ruTIbMVbTk9uIl+wt1EacHldfFmojTq/Jt2sLluJUZ1/PNViKU7tlPBssw9773p8NluJe+WpYitESrIBxsmAJxslgJYyTWZIwTgYrYJzM9n90xf7rix343Hh0SB/sbQu5apk/zwAAAABJRU5ErkJggg==";
    },
    b496: function (t, e, i) {
        "use strict";
        i("f582");
    },
    b4f5: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AQMAAAAAMksxAAAABlBMVEUAAACHh4o4stB4AAAAAXRSTlMAQObYZgAAAB5JREFUKM9jIA8w/weBP1gZDSAFMqMMOjPwRQp5AACGUD3zVgQCbgAAAABJRU5ErkJggg==";
    },
    bec4: function (t, e, i) {
        "use strict";
        i("21dd");
    },
    d028: function (t, e, i) {
        "use strict";
        i("17d4");
    },
    e06e: function (t, e, i) {
        "use strict";
        i("a144");
    },
    ef48: function (t, e, i) {
        "use strict";
        i("0aef");
    },
    f582: function (t, e, i) {},
});
