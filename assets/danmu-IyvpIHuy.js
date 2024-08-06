import {
  h as ke,
  i as _e,
  m as k,
  d as ie,
  j as De,
  t as Le,
  r as m,
  k as ee,
  l as we,
  n as Ne,
  o as oe,
  c as Se,
  a as L,
  p as Ie,
  q as Oe,
  v as Re,
  x as te,
  y as ae,
  z as Qe,
  A as He,
  w as Ue,
  B as ne,
  C as se,
  e as le,
  D as We,
  E as Me,
  _ as Ve,
} from "./index-CmNZLv0-.js";
const Pe = "/assets/pic_icon-Dx87HR_D.png",
  Xe = "/assets/leftbtn-B5gZxhYI.png",
  $e = "/assets/rightbtn-B5PnNIMs.png",
  et = "/assets/btn_get-it-now-CyEioEin.png",
  tt = "/assets/btn_TOWIN-D_JL8-5K.png";
function qe(h, e, d, g) {
  return (
    h.params.createElements &&
      Object.keys(g).forEach((c) => {
        if (!d[c] && d.auto === !0) {
          let A = ke(h.el, `.${g[c]}`)[0];
          A || ((A = _e("div", g[c])), (A.className = g[c]), h.el.append(A)),
            (d[c] = A),
            (e[c] = A);
        }
      }),
    d
  );
}
function at(h) {
  let { swiper: e, extendParams: d, on: g, emit: c } = h;
  d({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  function A(n) {
    let l;
    return n &&
      typeof n == "string" &&
      e.isElement &&
      ((l = e.el.querySelector(n)), l)
      ? l
      : (n &&
          (typeof n == "string" && (l = [...document.querySelectorAll(n)]),
          e.params.uniqueNavElements &&
            typeof n == "string" &&
            l.length > 1 &&
            e.el.querySelectorAll(n).length === 1 &&
            (l = e.el.querySelector(n))),
        n && !l ? n : l);
  }
  function x(n, l) {
    const i = e.params.navigation;
    (n = k(n)),
      n.forEach((u) => {
        u &&
          (u.classList[l ? "add" : "remove"](...i.disabledClass.split(" ")),
          u.tagName === "BUTTON" && (u.disabled = l),
          e.params.watchOverflow &&
            e.enabled &&
            u.classList[e.isLocked ? "add" : "remove"](i.lockClass));
      });
  }
  function E() {
    const { nextEl: n, prevEl: l } = e.navigation;
    if (e.params.loop) {
      x(l, !1), x(n, !1);
      return;
    }
    x(l, e.isBeginning && !e.params.rewind), x(n, e.isEnd && !e.params.rewind);
  }
  function w(n) {
    n.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), c("navigationPrev"));
  }
  function N(n) {
    n.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), c("navigationNext"));
  }
  function O() {
    const n = e.params.navigation;
    if (
      ((e.params.navigation = qe(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(n.nextEl || n.prevEl))
    )
      return;
    let l = A(n.nextEl),
      i = A(n.prevEl);
    Object.assign(e.navigation, { nextEl: l, prevEl: i }),
      (l = k(l)),
      (i = k(i));
    const u = (p, B) => {
      p && p.addEventListener("click", B === "next" ? N : w),
        !e.enabled && p && p.classList.add(...n.lockClass.split(" "));
    };
    l.forEach((p) => u(p, "next")), i.forEach((p) => u(p, "prev"));
  }
  function S() {
    let { nextEl: n, prevEl: l } = e.navigation;
    (n = k(n)), (l = k(l));
    const i = (u, p) => {
      u.removeEventListener("click", p === "next" ? N : w),
        u.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    n.forEach((u) => i(u, "next")), l.forEach((u) => i(u, "prev"));
  }
  g("init", () => {
    e.params.navigation.enabled === !1 ? R() : (O(), E());
  }),
    g("toEdge fromEdge lock unlock", () => {
      E();
    }),
    g("destroy", () => {
      S();
    }),
    g("enable disable", () => {
      let { nextEl: n, prevEl: l } = e.navigation;
      if (((n = k(n)), (l = k(l)), e.enabled)) {
        E();
        return;
      }
      [...n, ...l]
        .filter((i) => !!i)
        .forEach((i) => i.classList.add(e.params.navigation.lockClass));
    }),
    g("click", (n, l) => {
      let { nextEl: i, prevEl: u } = e.navigation;
      (i = k(i)), (u = k(u));
      const p = l.target;
      if (e.params.navigation.hideOnClick && !u.includes(p) && !i.includes(p)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === p || e.pagination.el.contains(p))
        )
          return;
        let B;
        i.length
          ? (B = i[0].classList.contains(e.params.navigation.hiddenClass))
          : u.length &&
            (B = u[0].classList.contains(e.params.navigation.hiddenClass)),
          c(B === !0 ? "navigationShow" : "navigationHide"),
          [...i, ...u]
            .filter((f) => !!f)
            .forEach((f) =>
              f.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const Z = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        O(),
        E();
    },
    R = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        S();
    };
  Object.assign(e.navigation, {
    enable: Z,
    disable: R,
    update: E,
    init: O,
    destroy: S,
  });
}
const Te =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEUAAAADAAAAAAADAAADAAAEAAAEAAADAAADAADtjFqXAAAACHRSTlMAnyC/30CAYEPAE5sAAANvSURBVHja7dvPTxNBFMDx1+n+4Gi1kR5rKUmPYD3sUQ2aORoR6BEikj0CGuVoaSnvz9YmhBckO2/jm/fCYb43EsKH3Z3Z2Z20kEqlUqnUk8oBlJ9BuVeQe3wOuu3CBHEBquVzGCDiOWiWzQH/9gw0q+dOHXFogHQtkJkF4g2QLhogtQHi0ACZWCCVAVKgATIzQBwaIBMDxFUGyBbqI64yQLZQH3GVAbKF+kiOBkhtgHRRH3GVATJDfaSD+kjuDZAK9ZEr1Ef2UQ8hQw8hQx/5jvrID1RHygrVkQuP2kg5QFRGjvqIukhOJyoO4o4uu9N1L38djEaj7aOfPRLiIGUfcbWBTDLkAlEd2Uc9hAx9pIMGSGWA0GOnHpKjATKxQCoDpIsGSG2AOJQiH78NOaQjRhAXl+zYkiO4ZJQqBoKLIXtJ5Ai+DyFFJGQZOpQNOcIfyiQWsuKnohzBITO4xAgz8TEacs2PYDlya4Es+FVRjiwbkVKMUCbI0OB0od014UfXQgeBCAh/8/LRkJtmZBANecvv+8iR42Yki4Us+edHOXITQMpYyDEE8nGQBYSqxQh/IJBFQW4gWBEDWQGTlyObwDWWIq+Br/CE6L0z1hZIYYHAwAIpvAECXywQVxkgkHtNhBRFhJRTRYQ6nO4t75Bp7+ys15vuRUQo50br6OeDkzcREL7trz4y4uCu0eiALhcxUZBOb92LvX/eBPJ+TCRvet3Y9wIksEx+eshX8ZCqCaFTJkdqvO8cHub6sZDZY4TqR0Ky0DaG68dBuiEE3CAKUuB9O81LghDJwwh0vAR5PFF+N63UcqTitpYGEZArDim9HJmx72djOZLxm2QDMdLhkUKMlPQXoKlTKQItkNxLEd/ifXYsReoWWwy5FyI0hpkndAmStdkXz70M6dD6yxyKACkDSyNVyBDwbRCoZUhFS2OgrgypadUK5UXIrB0yFiEZLY2hChFS0Kql9+H9vOUeVkaIYAzfcu+yEqSme32wWoLMWiKZBMloQWHOF4/ww2uo+MUj1xYZCxCo6A4ZrJgDsyXMP0Xy/+I78AzCX/kdYDqBGnEp++DxNTAV61/9IPtM+y3wHW7Cf+ZpNup1RbNRr4we77SiJxZQzWsfCd2IV6BaQfNEL+fp3qXXmOaiYhe7m5BKpVKpVCqVSqWeaH8A6noTw5o4FiQAAAAASUVORK5CYII=",
  Ze = "1.0.0",
  T = ie({
    __name: "Danmaku",
    props: {
      danmus: {},
      channels: { default: 0 },
      autoplay: { type: Boolean, default: !0 },
      loop: { type: Boolean, default: !1 },
      useSlot: { type: Boolean, default: !1 },
      useSuspendSlot: { type: Boolean, default: !1 },
      debounce: { default: 100 },
      speeds: { default: 100 },
      randomChannel: { type: Boolean, default: !1 },
      fontSize: { default: 18 },
      top: { default: 10 },
      right: { default: 10 },
      isSuspend: { type: Boolean, default: !1 },
      extraStyle: { default: "" },
    },
    emits: ["list-end", "play-end", "dm-click", "update:danmus"],
    setup(h, { expose: e, emit: d }) {
      const g = h,
        c = De(),
        {
          danmus: A,
          channels: x,
          autoplay: E,
          loop: w,
          useSlot: N,
          debounce: O,
          speeds: S,
          randomChannel: Z,
          fontSize: R,
          top: n,
          right: l,
          isSuspend: i,
          extraStyle: u,
          useSuspendSlot: p,
        } = Le(g),
        B = m(),
        f = m(),
        _ = m(0),
        F = m(0);
      let U = null;
      const G = m(0),
        Q = m(0),
        C = m(0),
        H = m(0),
        W = m(!1),
        D = m(!1),
        I = m({}),
        b = m([]),
        z = m(10),
        y = ee({
          get: () => A.value,
          set: (s) => {
            d("update:danmus", s);
          },
        }),
        K = ee(() => x.value || G.value);
      function j() {
        J(), i.value && !N.value && fe(), E.value && M();
      }
      function J() {
        (_.value = B.value.offsetWidth), (F.value = B.value.offsetHeight);
      }
      function M() {
        (D.value = !1),
          !U && y.value.length && (U = setInterval(() => ue(), O.value));
      }
      function ue() {
        if (!D.value && y.value.length)
          if (C.value > y.value.length - 1 + H.value) {
            const s = f.value.children.length;
            w.value
              ? (C.value >= y.value.length && (d("list-end"), (C.value = 0)),
                Y())
              : s < C.value && P();
          } else Y();
      }
      const V = m([]);
      function Y(s) {
        s && V.value.push(s);
        const o = w.value ? C.value % y.value.length : C.value - H.value;
        let a = s || y.value[o],
          r = !1;
        V.value.length > H.value && ((a = V.value[H.value]), (r = !0));
        let t = document.createElement("div"),
          v = document.createElement("div");
        N.value
          ? (t = ce(a, o))
          : ((t.innerHTML = a),
            t.setAttribute("style", u.value),
            (t.style.fontSize = `${R.value}px`),
            (t.style.lineHeight = `${R.value}px`)),
          (t.style.opacity = "0"),
          t.classList.add("dm"),
          i.value &&
            p.value &&
            ((v = ve(a, o).childNodes[1]),
            v.classList.add("dm-suspend"),
            (v.style.background = "transparent"),
            (v.style.display = "none"),
            N.value
              ? v && t.childNodes[1] && t.childNodes[1].appendChild(v)
              : v && t.appendChild(v)),
          f.value && f.value.appendChild(t),
          Re(() => {
            Q.value || (Q.value = t.offsetHeight),
              x.value || (G.value = Math.floor(F.value / (Q.value + n.value))),
              (z.value = v.offsetWidth + 10 + l.value);
            let q = re(t);
            if (q >= 0) {
              const $ = t.offsetWidth,
                be = Q.value;
              t.classList.add("move"),
                (t.dataset.index = `${o}`),
                (t.style.top = q * (be + n.value) + "px"),
                (t.style.width = $ + "px"),
                (t.style.opacity = "1"),
                t.style.setProperty(
                  "--dm-scroll-width",
                  `-${_.value + $ * 2}px`
                ),
                (t.style.left = `${_.value}px`),
                (t.style.animationDuration = `${_.value / S.value}s`),
                t.addEventListener(
                  "animationend",
                  () => {
                    Number(t.dataset.index) === y.value.length - 1 &&
                      !w.value &&
                      d("play-end", Number(t.dataset.index)),
                      f.value && f.value.removeChild(t);
                  },
                  { once: !0 }
                ),
                C.value++,
                (s || r) && ((D.value = !1), H.value++);
            } else f.value.removeChild(t);
          });
      }
      function re(s) {
        let o = [...Array(K.value).keys()];
        Z.value && (o = o.sort(() => 0.5 - Math.random()));
        for (const a of o) {
          const r = I.value[a];
          if (r && r.length)
            for (let t = 0; t < r.length; t++) {
              const v = de(r[t]) - z.value;
              if (v <= (s.offsetWidth - r[t].offsetWidth) * 0.88 || v <= 0)
                break;
              if (t === r.length - 1)
                return (
                  I.value[a].push(s),
                  s.addEventListener(
                    "animationend",
                    () => I.value[a].splice(0, 1),
                    { once: !0 }
                  ),
                  a % K.value
                );
            }
          else
            return (
              (I.value[a] = [s]),
              s.addEventListener(
                "animationend",
                () => I.value[a].splice(0, 1),
                { once: !0 }
              ),
              a % K.value
            );
        }
        return -1;
      }
      function de(s) {
        const o = s.offsetWidth || parseInt(s.style.width),
          a =
            s.getBoundingClientRect().right ||
            f.value.getBoundingClientRect().right + o;
        return f.value.getBoundingClientRect().right - a;
      }
      function ce(s, o) {
        const a = m(document.createElement("div"));
        return (
          te(
            ae(
              "div",
              {
                onClick: () => {
                  d("dm-click", s, o);
                },
                onmouseover: (r) => {
                  if (!i.value) return;
                  const t = r.target.closest(".dm");
                  if (!t) return;
                  const v = t.getElementsByClassName("dm-suspend")[0];
                  i.value && v && (v.style.display = "flex"),
                    t.classList.add("pause"),
                    b.value.includes(t) || (b.value.push(t), pe());
                },
                onmouseout: (r) => {
                  if (!i.value) return;
                  const t = r.target.closest(".dm");
                  if (!t) return;
                  const v = t.getElementsByClassName("dm-suspend")[0];
                  if (
                    (i.value && v && (v.style.display = "none"),
                    t.classList.remove("pause"),
                    b.value.includes(t))
                  ) {
                    const q = b.value.indexOf(t);
                    b.value.splice(q, 1);
                  }
                },
              },
              [c.dm && c.dm({ danmu: s, index: o })]
            ),
            a.value
          ),
          a.value.childNodes[0]
        );
      }
      function ve(s, o) {
        const a = m(document.createElement("div"));
        return (
          te(
            ae("div", {}, [c.suspend && c.suspend({ danmu: s, index: o })]),
            a.value
          ),
          a.value.childNodes[0]
        );
      }
      function pe() {
        document.body.addEventListener(
          "mouseout",
          (s) => {
            s.stopImmediatePropagation(),
              b.value.length &&
                (b.value.map((o) => {
                  o.classList.remove("pause");
                }),
                (b.value = []));
          },
          { once: !0 }
        );
      }
      function fe() {
        let s = [];
        f.value.addEventListener("mousemove", (o) => {
          let a = o.target;
          if (
            (a.className.includes("dm") || (a = a.closest(".dm") || a),
            !a.className.includes("dm"))
          )
            return;
          const r = a.getElementsByClassName("dm-suspend")[0];
          i.value && r && (r.style.display = "flex"),
            a.classList.add("pause"),
            s.push(a);
        }),
          f.value.addEventListener("mouseout", (o) => {
            let a = o.target;
            if (
              (a.className.includes("dm") || (a = a.closest(".dm") || a),
              !a.className.includes("dm"))
            )
              return;
            const r = a.getElementsByClassName("dm-suspend")[0];
            i.value && r && (r.style.display = "none"),
              a.classList.remove("pause"),
              s.forEach((t) => {
                t.classList.remove("pause");
              }),
              (s = []);
          });
      }
      function P() {
        clearInterval(U), (U = null);
      }
      function me() {
        (Q.value = 0), j();
      }
      function X() {
        (I.value = {}),
          (f.value.innerHTML = ""),
          (D.value = !0),
          (W.value = !1),
          P(),
          (C.value = 0),
          (b.value = []);
      }
      function ge() {
        D.value = !0;
      }
      function he() {
        W.value = !1;
      }
      function ye() {
        W.value = !0;
      }
      function Ae(s) {
        if (C.value >= y.value.length - 1)
          return y.value.push(s), M(), y.value.length - 1;
        {
          const o = C.value % y.value.length;
          return y.value.splice(o, 0, s), M(), o - 1;
        }
      }
      function Ee(s) {
        return y.value.push(s), y.value.length - 1;
      }
      function xe() {
        J();
        const s = f.value.getElementsByClassName("dm");
        for (let o = 0; o < s.length; o++) {
          const a = s[o];
          a.style.setProperty(
            "--dm-scroll-width",
            `-${_.value + a.offsetWidth * 2}px`
          ),
            (a.style.left = `${_.value}px`),
            (a.style.animationDuration = `${_.value / S.value}s`);
        }
      }
      function Ce() {
        return !D.value;
      }
      function Be() {
        return V.value;
      }
      return (
        we(() => {
          console.log(
            `%c danmaku-vue %c V${Ze} `,
            "padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;",
            "padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;"
          ),
            j();
        }),
        Ne(() => {
          X();
        }),
        e({
          add: Ae,
          push: Ee,
          insert: Y,
          play: M,
          pause: ge,
          reset: me,
          resize: xe,
          show: he,
          hide: ye,
          clear: X,
          getPlayState: Ce,
          getInsertList: Be,
        }),
        (s, o) => (
          oe(),
          Se(
            "div",
            { ref_key: "container", ref: B, class: "danmaku-container" },
            [
              L(
                "div",
                {
                  ref_key: "dmContainer",
                  ref: f,
                  class: Oe([
                    "danmus",
                    { show: !W.value },
                    { paused: D.value },
                  ]),
                },
                [Ie(s.$slots, "default")],
                2
              ),
            ],
            512
          )
        )
      );
    },
  });
T.install = (h) => {
  h.component(T.__name, T);
};
const Ke = (h) => (We("data-v-09c3a9bc"), (h = h()), Me(), h),
  Ye = { class: "danmu-wrapper" },
  Fe = Ke(() => L("div", { class: "icon" }, [L("img", { src: Te })], -1)),
  Ge = { class: "font" },
  ze = { style: { color: "red" } },
  je = ie({
    __name: "danmu",
    setup(h) {
      const e = () =>
          `****${((x, E) =>
            (Math.floor(Math.random() * (E - x + 1)) + x)
              .toString()
              .padStart(4, "0"))(1e3, 9999)}`,
        d = () => Math.floor(Math.random() * 30 + 1) * 1e3;
      let g = m([
        { name: e(), money: d() },
        { name: e(), money: d() },
        { name: e(), money: d() },
      ]);
      const c = setInterval(() => {
        g.value = [
          { name: e(), money: d() },
          { name: e(), money: d() },
          { name: e(), money: d() },
        ];
      }, 11e3);
      return (
        Qe(() => {
          clearInterval(c);
        }),
        (A, x) => (
          oe(),
          He(
            le(T),
            {
              danmus: le(g),
              channels: 1,
              loop: !0,
              isSuspend: !0,
              debounce: 200,
              speeds: 10,
              useSlot: !0,
            },
            {
              dm: Ue((E) => [
                L("div", Ye, [
                  Fe,
                  L("div", Ge, [
                    ne(" Congratulations to "),
                    L("span", ze, se(E.danmu.name), 1),
                    ne(" for win the cash "),
                    L("span", null, "₹" + se(E.danmu.money), 1),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["danmus"]
          )
        )
      );
    },
  }),
  nt = Ve(je, [["__scopeId", "data-v-09c3a9bc"]]);
export { at as N, Pe as _, Xe as a, $e as b, et as c, tt as d, nt as e };
