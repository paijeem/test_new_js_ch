nie.define("index", function () {
    function a(a) {
        return Array.from(new Set(a));
    }
    var n,
        e,
        i,
        t,
        o,
        s,
        r,
        l = "en",
        c = !1,
        p = "/api/v1",
        d = [],
        u = ["Austria", "Belgium", "Cyprus", "Finland", "France", "Germany", "Greece", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Netherlands", "Portugal", "Slovakia", "Slovenia", "Spain", "United Kingdom", "Switzerland"],
        g = $(document),
        h = ($(".js-platform span"), $("#AmountList")),
        f = $(".J_payment_channel"),
        m = $(".js-server-list"),
        v = $("#pop_loading"),
        y = $("#PaymentMethodTip"),
        _ = function (a, n) {
            n = void 0 === n ? location.search : n;
            var e = new RegExp("(?:&|/?)" + a + "=([^&$]+)").exec(n);
            return e ? e[1] : "";
        };
    n = _("hostid");
    var C = decodeURIComponent(_("hostname")),
        L = _("roleid"),
        w = decodeURIComponent(_("rolename")),
        x = _("platform"),
        R = _("account_id"),
        b = !1;
    C && n && L && w && x && R ? ($("#server").html(C), $(".confirm_account2").show(), (b = !0)) : $(".confirm_account1").show();
    var I = {
        init: function () {
            var a = this;
            a.bindInit(), a.languageInit(), this.getBaseInfo();
        },
        getBaseInfo: function () {
            var a = this;
            this.showLoading(),
                $.ajax({
                    url: p + "/base_info",
                    timeout: 1e4,
                    success: function (e) {
                        if (e.success) {
                            var i;
                            if (((s = e.data), e.data.region)) i = e.data.region;
                            else {
                                for (var t in e.data.pay_region_map) i || (i = t);
                                s.region = i;
                            }
                            a.setRegionList(e.data.pay_region_map, i),
                                a.changeRegion(i),
                                a.setServerList(e.data.server.mobile),
                                a.setPaymentChannel(i, e.data.pay_region_map),
                                b ? I.getUserInfo({ serverId: n, roleId: L }) : a.setGoods(e.data.goods.ad, !1, i);
                        }
                    },
                    error: function () {
                        I.alert(LanguageMap[l].NETWORK_ERROR);
                    },
                    complete: function () {
                        a.hideLoading();
                    },
                });
        },
        setRegionList: function (n, e) {
            var i = [],
                t = [];
            for (var o in n) {
                var s = o;
                "China" == o && (s = "Other");
                for (var r = 0; r < u.length; r++) o == u[r] && (s = "EU");
                t.push($.trim(s));
            }
            t = a(t.sort());
            for (var r = 0; r < t.length; r++) {
                var s = t[r];
                "Other" == t[r] && (s = "China"),
                    "EU" == t[r] && (s = $.inArray(e, u) > -1 ? e : u[16]),
                    i.push(e && s == e ? '<li class="active" data-region="' + s + '"><p>' + t[r] + "</p></li>" : '<li data-region="' + s + '"><p>' + t[r] + "</p></li>");
            }
            $("#RegionList").html(i.join(""));
        },
        hasBouns: function (a, n) {
            var e = s.extra.extra_gift[n];
            return e && e[a.pay_type] ? e[a.pay_type] : !1;
        },
        setPaymentChannel: function (a, n) {
            function e(n, e) {
                return "https://game.topupease.com/imgs/pay_method/" + n + "/" + e + "/" + a + ".png";
            }
            function i(n) {
                var i = [];
                return (
                    $.each(n, function (n, t) {
                        i.push(I.hasBouns(t, a) !== !1 ? '<li class="js-paymethod-analytics" data-type="' + t.pay_type + '">' : '<li data-type="' + t.pay_type + '">'),
                            i.push('<div class="box">'),
                            i.push('<img src="' + e(t.pay_method, t.pay_type) + '" alt="' + t.origin_name + '">'),
                            i.push('<span class="gou"></span>'),
                            I.hasBouns(t, a) !== !1 && i.push('<span class="tag">+' + 100 * I.hasBouns(t, a) + "%</span>"),
                            i.push("</div>"),
                            i.push("<p>" + t.origin_name + "</p>"),
                            i.push("</li>");
                    }),
                    i.join("")
                );
            }
            if (((o = ""), n[a])) {
                var t = [],
                    s = [];
                $.each(n[a], function (a, n) {
                    0 == n.order ? t.push(n) : s.push(n);
                }),
                    t.length ? ($("#CommonPaymentChannel").find("ul").html(i(t)).end().show(), $("#CommonPaymentChannel .J_payment_channel li").eq(0).click()) : $("#CommonPaymentChannel").hide(),
                    s.length ? ($("#OthersChannel").find("ul").html(i(s)).end().show(), t.length || $("#OthersChannel .J_payment_channel li").eq(0).click()) : $("#OthersChannel").hide();
            }
        },
        setServerList: function (a) {
            var n = [];
            $.each(a, function (a, e) {
                n.push('<li data-id="' + e.id + '">' + e.name + "</li>");
            }),
                m.html(n.join(""));
        },
        languageInit: function () {
            (_localLang = this.getLocalLanguage()),
                _localLang != l &&
                    LanguageMap[_localLang] &&
                    ((l = _localLang),
                    this.languageList(_localLang),
                    $(".language li").each(function () {
                        $(this).data("type") == _localLang && (I.setRegionAndLang(), $(this).addClass("active").siblings().removeClass("active"));
                    }));
        },
        bindInit: function () {
            var a = this;
            g
                .on("click", ".js-server-list li", function () {
                    var a = $(this);
                    a.addClass("active").siblings().removeClass("active"), (n = a.data("id")), a.closest(".js-switch-item").find(".js-platform span").html(a.html()), a.parent().hide();
                })
                .on("click", ".js-platform", function () {
                    var a = $(this);
                    a.siblings().show();
                })
                .on("click", "#AmountList li", function () {
                    var a = $(this);
                    if (a.hasClass("active")) (t = null), a.removeClass("active");
                    else {
                        if (a.data("ispoint")) return;
                        (t = a.data("goodid")), a.addClass("active").siblings().removeClass("active");
                    }
                })
                .on("click", ".J_payment_channel li", a.selectPaymentChannel)
                .on("click", "#confirmAccount", function () {
                    var a = $("#account").val().trim();
                    return n ? (a ? ((e = a), void I.getUserInfo({ serverId: n, roleId: a })) : I.alert(LanguageMap[l][3])) : I.alert(LanguageMap[l][2]);
                })
                .on("click", "#confirmNickname", function () {
                    var a = $("#nickname").val().trim();
                    return n ? (a ? void I.getUserInfo({ serverId: n, roleName: a }) : I.alert(LanguageMap[l][3])) : I.alert(LanguageMap[l][2]);
                })
                .on("click", "#Buy", this.showConfirmPop)
                .on("click", "#RegionList li", function (n) {
                    var e = $(this),
                        i = e.data("region");
                    return e.addClass("active").siblings().removeClass("active"), a.changeRegion(i), n.stopPropagation(), !1;
                })
                .on("click", "#Langs li", function () {
                    var a = $(this);
                    (l = a.data("type")), a.addClass("active").siblings().removeClass("active"), I.languageList(a.data("type") || "en"), I.setRegionAndLang(), I.twDifFun(a.data("type") || "en");
                })
                .on("click", "#switchTab span", function () {
                    var a = $(this);
                    if (!a.hasClass("on")) {
                        n = null;
                        var e = a.index();
                        a.addClass("on").siblings().removeClass("on");
                        var i = $(".js-switch-item"),
                            t = i.eq(e);
                        t.show().siblings().hide();
                        var o = t.find(".js-platform span").data("language");
                        t.find(".js-platform span").html(LanguageMap[l][o]), t.find("input").val(""), t.find(".js-server-list").hide();
                    }
                })
                .on("click", ".js-paymethod-analytics", function () {
                    var a = $(this).data("type");
                    ga("send", "event", r + "-" + a, "click");
                })
                .on("click", ".js-goods-analytics", function () {
                    var a = $(this).data("goodid"),
                        n = i && i.platform ? i.platform : "ad",
                        e = s.goods[n].find(function (n) {
                            return n.id == a;
                        });
                    e ? ga("send", "event", r + "-" + o.pay_type + "-" + e.price + e.ext.currency, "click") : ga("send", "event", r + "-" + o.pay_type + "-" + a, "click");
                }),
                $(".close,.pop,#btnBack").click(function () {
                    $(".pop").removeClass("on"), $("body").css("overflow", "visible");
                }),
                $(".pop ._inner").click(function () {
                    return !1;
                }),
                $("#howToFindId").click(function () {
                    a.popShow("#pop_id");
                }),
                $("#orderConfirm").click(this.buy),
                $("#readPrivacy").click(function () {
                    var a = $(this);
                    a.hasClass("active") ? (a.removeClass("active"), (c = !1)) : (a.addClass("active"), (c = !0));
                }),
                $("#readPrivacy").click();
        },
        changeRegion: function (a) {
            (r = a), I.setRegionAndLang(), I.setPaymentChannel(a, s.pay_region_map);
        },
        setRegionAndLang: function () {
            var a;
            (a = "China" == r ? "Other" : $.inArray(r, u) > -1 ? "EU" : r), $(".language ._select .select_p").html("<i>" + (a || "") + "-" + l.toUpperCase() + "</i>");
        },
        showConfirmPop: function () {
            if (!i || !n) return void I.alert(LanguageMap[l].CONFIRM_ACCOUNT);
            if (!o) return void I.alert(LanguageMap[l].SELECT_PAYMENT_CHANNEL);
            if (!o.is_point && !t) return void I.alert(LanguageMap[l].SELECT_ITEM);
            if (!c) return void I.alert(LanguageMap[l].READ_POLICY);
            var a,
                e = $("#confirmList"),
                r = [],
                p = LanguageMap[l];
            if (
                ((a = s.server.mobile.find(function (a) {
                    return a.id == n;
                })),
                r.push('<li><span class="t"><i>' + p.Platform + '</i> :</span><span class="c">' + LanguageMap[l][i.platform] + "</span></li>"),
                r.push('<li><span class="t"><i>' + p.Server + '</i> :</span><span class="c">' + a.name + "</span></li>"),
                r.push('<li><span class="t"><i>' + p.Character + '</i> :</span><span class="c">' + i.roleid + "</span></li>"),
                r.push('<li><span class="t"><i>' + p.Nickname + '</i> :</span><span class="c">' + i.rolename + "</span></li>"),
                t)
            ) {
                var d = s.goods[i.platform].find(function (a) {
                    return a.id == t;
                });
                d &&
                    (r.push('<li><span class="t"><i>' + p.Totalcost + '</i> :</span><span class="c">' + (d.price + d.ext.currency) + "</span></li>"),
                    r.push('<li><span class="t"><i>' + p.SelectItem + '</i> :</span><span class="c">' + d.ext.num + "</span></li>"));
            }
            $("#confirmPaymentChannel").html(o.origin_name), e.html(r.join("")), I.popShow("#pop_confirm");
        },
        buy: function () {
            I.popHide(), I.showLoading();
            var a = { roleId: i.roleid, serverId: i.hostid, payMethod: o.pay_method, payType: o.pay_type, accountId: i.account_id, region: r, platform: i.platform };
            o.is_point || (a.goodsId = t),
                $.ajax({
                    url: p + "/get_pay_url",
                    data: a,
                    timeout: 1e4,
                    success: function (a) {
                        0 == a.errorcode ? (window.location = a.data) : I.alert(a.msg);
                    },
                    error: function () {
                        I.alert(LanguageMap[l].NETWORK_ERROR);
                    },
                    complete: function () {
                        I.hideLoading();
                    },
                });
        },
        getUserInfo: function (a) {
            i = null;
            var n = this;
            I.showLoading(),
                $.ajax({
                    url: p + "/user_info",
                    data: a,
                    success: function (a) {
                        if (a.success) {
                            if ("ios" == a.data.platform) return I.alert(LanguageMap[l][30]), !1;
                            i = a.data;
                            var e = s.goods;
                            n.setUserInfo(), i.platform && e[i.platform] && I.setGoods(e[i.platform], o, r), I.scrollTo("#selectChanle");
                        } else
                            switch (a.errorcode) {
                                case 404:
                                    I.alert(LanguageMap[l].ACCOUNT_NOT_FOUND), $(".confirm_account2").hide(), $(".confirm_account1").show();
                                    break;
                                case 500:
                                    I.alert(LanguageMap[l].SERVER_ERROR);
                            }
                    },
                    error: function () {
                        I.alert(LanguageMap[l].NETWORK_ERROR);
                    },
                    complete: function () {
                        I.hideLoading();
                    },
                });
        },
        scrollTo: function (a) {
            $("html,body")
                .stop()
                .animate({ scrollTop: $(a).offset().top - 120 }, 500);
        },
        setGoods: function (a, n, e) {
            t = "";
            var i = [];
            $.each(a, function (a, n) {
                n.ext.region.length > 0 &&
                    !n.ext.is_point &&
                    $.each(n.ext.region, function (a, n) {
                        -1 == $.inArray(n, d) && d.push(n);
                    });
            }),
                $.each(a, function (a, t) {
                    if (n) {
                        if (n.is_point !== t.ext.is_point) return;
                        if (n.is_point && t.ext.is_point && (-1 == t.ext.point_pay_type.indexOf(n.pay_type) || -1 == t.ext.region.indexOf(r))) return;
                        if (t.ext.region.length > 0 && -1 == $.inArray(r, t.ext.region)) return;
                        if ($.inArray(r, d) > -1 && 0 == t.ext.region.length) return;
                    } else if (t.ext.is_point) return;
                    if (!((t.ext.region.length > 0 && -1 == $.inArray(r, t.ext.region)) || ($.inArray(r, d) > -1 && 0 == t.ext.region.length))) {
                        i.push(I.hasBouns(n, e) !== !1 ? '<li class="js-goods-analytics" data-goodid="' + t.id + '" data-ispoint="' + t.ext.is_point + '">' : '<li data-goodid="' + t.id + '" data-ispoint="' + t.ext.is_point + '">'),
                            t.ext.is_point || i.push('<span class="label"></span>');
                        var o = t.ext.price_before_tax ? t.ext.price_before_tax : t.price;
                        i.push('<span class="num">' + o + " " + t.ext.currency + "</span>");
                        var s = 0.2;
                        n && I.hasBouns(n, e) !== !1 && (s += I.hasBouns(n, e)),
                            i.push('<span class="cont">' + t.ext.num + '<i class="goods_icon"></i> +  <i class="orange">' + Math.floor(t.ext.num * s) + '</i><i class="goods_icon"></i></span>'),
                            i.push("</li>");
                    }
                }),
                h.html(i.join(""));
        },
        setUserInfo: function () {
            $("#character").html(i.roleid), $("#nickname2").html(i.rolename);
        },
        selectPaymentChannel: function (a) {
            var n = $(a.currentTarget);
            if (n.hasClass("active")) n.removeClass("active");
            else {
                f.find("li").removeClass("active"), n.addClass("active");
                var e = n.data("type");
                $.each(s.pay_region_map[r], function (a, n) {
                    n.pay_type == e && ((o = n), "mol" == o.pay_method ? y.show() : y.hide());
                }),
                    i ? I.setGoods(s.goods[i.platform], o, r) : I.setGoods(s.goods.ad, o, r);
            }
        },
        languageList: function (a) {
            var n = LanguageMap[a] || LanguageMap.en;
            $(".wrap").attr("class", "wrap " + a),
                $("[data-language]").each(function (a) {
                    var e = $(this),
                        a = e.attr("data-language");
                    void 0 !== n[a] && (e.is("input") ? e.attr("placeholder", n[a]) : e.html(n[a]));
                }),
                i && $("#confirmUsername").html(LanguageMap[l].QUERY_AGAIN);
        },
        getLocalLanguage: function () {
            var a = navigator.language || navigator.userLanguage;
            return (a = "zh-TW" == a || "zh-HK" == a ? "zhtw" : a.toLowerCase().substr(0, 2)), this.twDifFun(a), a;
        },
        twDifFun: function (a) {
            "zhtw" == a
                ? ($(".footer").hide(), $(".footer2").show(), $(".logo").addClass("hide"), $(".logo2").removeClass("hide"), $(".slogan").addClass("slogan2"), $(".slogan").removeClass("slogan1"))
                : ($(".footer2").hide(), $(".footer").show(), $(".logo2").addClass("hide"), $(".logo").removeClass("hide"), $(".slogan").addClass("slogan1"), $(".slogan").removeClass("slogan2"));
        },
        popShow: function (a) {
            $(a).addClass("on").scrollTop(0), $("body").css("overflow", "hidden");
        },
        alert: function (a) {
            $("#pop_prompt ._desc p").html(a), I.popShow("#pop_prompt");
        },
        showLoading: function () {
            v.addClass("on");
        },
        hideLoading: function () {
            v.removeClass("on");
        },
        popHide: function () {
            $(".pop").removeClass("on"), $("body").css("overflow", "visible");
        },
    };
    I.init(),
        Array.prototype.find ||
            Object.defineProperty(Array.prototype, "find", {
                value: function (a) {
                    if (null == this) throw new TypeError('"this" is null or not defined');
                    var n = Object(this),
                        e = n.length >>> 0;
                    if ("function" != typeof a) throw new TypeError("predicate must be a function");
                    for (var i = arguments[1], t = 0; e > t; ) {
                        var o = n[t];
                        if (a.call(i, o, t, n)) return o;
                        t++;
                    }
                    return void 0;
                },
            });
});
