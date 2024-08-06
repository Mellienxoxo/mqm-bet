import {
  N as v,
  _ as w,
  a as u,
  b as f,
  c as b,
  d as P,
  e as k,
} from "./danmu-IyvpIHuy.js";
import {
  d as x,
  u as E,
  r as C,
  c as q,
  a as s,
  b as t,
  w as d,
  e as y,
  f as D,
  g as G,
  o as M,
  S as N,
  s as e,
} from "./index-CmNZLv0-.js";
const B = "/assets/logo-font-DjjDSUSb.png",
  S = "/assets/btn_download-BqeZ1COa.png",
  K = "/assets/top_logo-DccqGRba.png",
  V = "/assets/fontdesc-DsfUvrud.png",
  $ = "/assets/woman-D4Q6aGtK.png",
  A = "/assets/pic_banner1-BAfLrKG0.png",
  H = "/assets/pic_banner3-CMMntQiE.png",
  I = "/assets/trophy-KmRVKf10.png",
  O = "/assets/last2-BGwn4T7g.png",
  Q = "/assets/last-D7HWzqIy.png",
  R = { class: "loadingPage" },
  T = { class: "loadingPage-content" },
  U = { class: "loadingPage-download" },
  j = { class: "loadingPage-w loadingPage-download-container" },
  Y = s(
    "div",
    { class: "loadingPage-download-left" },
    [s("img", { src: B })],
    -1
  ),
  z = s("img", { src: S }, null, -1),
  L = [z],
  W = D(
    '<div class="loadingPage-title"><div class="loadingPage-title-top"><div class="loadingPage-w loadingPage-title-top-best"><div class="loadingPage-title-top-left"><img src="' +
      w +
      '"></div><div class="loadingPage-title-top-right"> THE BEST MONEY-MAKING GAME APP </div></div></div><div class="loadingPage-title-container"><img src="' +
      K +
      '"></div><div class="loadingPage-title-font loadingPage-w"><img src="' +
      V +
      '"></div></div><div class="woman"><img src="' +
      $ +
      '"></div>',
    2
  ),
  Z = { class: "banner-wrapper" },
  F = s("img", { src: u }, null, -1),
  J = [F],
  X = { class: "carousel" },
  ss = s("img", { src: A }, null, -1),
  ts = s("img", { src: H }, null, -1),
  os = s("img", { src: f }, null, -1),
  es = [os],
  ns = { class: "loadingPage-w" },
  as = { class: "btn-get-it-now-wrap1" },
  is = s("img", { src: b }, null, -1),
  ds = [is],
  cs = { class: "loadingPage-w" },
  ls = { class: "trophy-wrap" },
  _s = { class: "trophy" },
  rs = s("img", { src: I }, null, -1),
  gs = { class: "loadingPage-w" },
  ps = { class: "btn-get-it-now-wrap" },
  ms = s("img", { src: P }, null, -1),
  hs = [ms],
  vs = s("div", { class: "last2" }, [s("img", { src: O })], -1),
  ws = s("div", { class: "last" }, [s("img", { src: Q })], -1),
  us = { class: "slider" },
  fs = { href: "https://www.facebook.com/mqmbet/" },
  bs = { href: "https://youtube.com/@betMQM?si=GG2DMKOps14YoeH4" },
  Ps = { href: "https://www.instagram.com/mqmbetofficial/" },
  ks = { href: "https://t.me/mqmbetofficial" },
  xs = { href: "https://whatsapp.com/channel/0029VaVc5ig3wtb444sDS51A" },
  Es = {
    href: "https://chat.ichatlink.net/widget/standalone.html?eid=23b3e281f338614ee978f6d45644a6da&language=en",
  },
  Gs = x({
    __name: "index",
    setup(Cs) {
      const c = E().query.pkg || "GV777VIP",
        _ = `https://res.gv777.site/beta/apk/GV777VIP_1000.apk`,
        r = `${c}.apk`,
        a = () => {
          const n = document.createElement("a");
          (n.href = _), (n.download = r), n.click();
        },
        g = C({ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }),
        p = [v],
        m = () => {},
        h = () => {};
      return (n, o) => {
        const l = G("swiper-slide");
        return (
          M(),
          q("div", R, [
            s("div", T, [
              s("div", U, [
                s("div", j, [
                  Y,
                  s(
                    "div",
                    {
                      class: "loadingPage-download-right",
                      onClick: o[0] || (o[0] = (i) => a()),
                    },
                    L
                  ),
                ]),
              ]),
              W,
              s("div", Z, [
                s(
                  "div",
                  {
                    class: "banner-wrapper-leftbtn swiper-button-prev",
                    onClick: o[1] || (o[1] = (i) => m()),
                  },
                  J
                ),
                s("div", X, [
                  t(
                    y(N),
                    { modules: p, autoplay: !0, loop: !0, navigation: g.value },
                    {
                      default: d(() => [
                        t(l, null, { default: d(() => [ss]), _: 1 }),
                        t(l, null, { default: d(() => [ts]), _: 1 }),
                      ]),
                      _: 1,
                    },
                    8,
                    ["navigation"]
                  ),
                ]),
                s(
                  "div",
                  {
                    class: "banner-wrapper-righttbtn swiper-button-next",
                    onClick: h,
                  },
                  es
                ),
              ]),
              s("div", ns, [
                s("div", as, [
                  s(
                    "div",
                    {
                      class: "btn-get-it-now1",
                      onClick: o[2] || (o[2] = (i) => a()),
                    },
                    ds
                  ),
                ]),
              ]),
              s("div", cs, [
                s("div", ls, [s("div", _s, [t(k, { class: "danmu" }), rs])]),
              ]),
              s("div", gs, [
                s("div", ps, [
                  s(
                    "div",
                    {
                      class: "btn-get-it-now",
                      onClick: o[3] || (o[3] = (i) => a()),
                    },
                    hs
                  ),
                ]),
              ]),
              vs,
              ws,
            ]),
            s("div", us, [
              s("a", fs, [t(e, { name: "facebook_2504903" })]),
              s("a", bs, [t(e, { name: "youtube_2504965" })]),
              s("a", Ps, [
                t(e, {
                  name: "instagram_2504918",
                  width: "50px",
                  height: "50px",
                }),
              ]),
              s("a", ks, [t(e, { name: "telegram_2504941" })]),
              s("a", xs, [t(e, { name: "whatsapp_2504957" })]),
              s("a", Es, [
                t(e, {
                  name: "headset_8213336",
                  width: "60px",
                  height: "60px",
                }),
              ]),
            ]),
          ])
        );
      };
    },
  });
export { Gs as default };
