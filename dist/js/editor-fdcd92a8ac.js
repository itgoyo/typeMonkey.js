"use strict";
! function () {
    var e = new TypeMoneky({
        debug: !1,
        box: demo,
        list: [{
            type: "text",
            value: "看什么看，还不滚回去学习"
        }, {
            type: "text",
            value: "水手-郑智化",
            color: "#fe131a"
        }, {
            type: "rotate",
            value: "lb"
        }, {
            type: "text",
            value: "寻寻觅觅"
        }, {
            type: "text",
            value: "寻不到",
            color: "#fe131a"
        }, {
            type: "text",
            value: "活着的证据"
        }, {
            type: "text",
            value: "都市的泊油路太硬"
        }, {
            type: "text",
            value: "踩不出足迹",
            color: "#fe131a"
        }, {
            type: "rotate",
            value: "rb"
        }, {
            type: "text",
            value: "骄傲",
            color: "#fe131a"
        }, {
            type: "text",
            value: "无知的",
            color: "#fe131a"
        }, {
            type: "text",
            value: "现代人"
        }, {
            type: "text",
            value: "不知道珍惜"
        }, {
            type: "text",
            value: "那一片"
        }, {
            type: "text",
            value: "被文明践踏过滴"
        }, {
            type: "text",
            value: "海洋和天地",
            color: "#fe131a"
        }, {
            type: "rotate",
            value: "lb"
        }, {
            type: "text",
            value: "只有远离人群"
        }, {
            type: "text",
            value: "才能找回"
        }, {
            type: "text",
            value: "我自己",
            color: "#fe131a"
        }, {
            type: "text",
            value: "在带着咸味的空气中"
        }, {
            type: "text",
            value: "自由滴呼吸"
        }, {
            type: "rotate",
            value: "rb"
        }, {
            type: "text",
            value: "耳畔又传来汽笛声"
        }, {
            type: "text",
            value: "和水手的笑语"
        }, {
            type: "text",
            value: "永远在内心的"
        }, {
            type: "text",
            value: "最深处",
            color: "#fe131a"
        }, {
            type: "text",
            value: "听见水手说"
        }, {
            type: "rotate",
            value: "rb"
        }, {
            type: "text",
            value: "他说",
            color: "#fe131a"
        }, {
            type: "text",
            value: "风雨中"
        }, {
            type: "text",
            value: "这点痛"
        }, {
            type: "text",
            value: "算什么",
            color: "#fe131a"
        }, {
            type: "rotate",
            value: "lb"
        }, {
            type: "text",
            value: "擦干泪"
        }, {
            type: "text",
            value: "不要怕"
        }, {
            type: "text",
            value: "至少我们还有"
        }, {
            type: "text",
            value: "梦！！！",
            color: "#fe131a"
        }, {
            type: "rotate",
            value: "rb"
        }, {
            type: "text",
            value: "他说 风雨中"
        }, {
            type: "text",
            value: "这点痛 算什么"
        }, {
            type: "text",
            value: "擦干泪",
            color: "#fe131a"
        }, {
            type: "text",
            value: "不要问",
            color: "#fe131a"
        }, {
            type: "text",
            value: "为什么"
        }],
        lineHeight: 1.17,
        beforeCreate: function (e, t, a) {
            e()
        }
    });
    e.init();
    var t = setInterval(function () {
        return e.isEnd ? void clearInterval(t) : void e.start()
    }, 1e3)
}();