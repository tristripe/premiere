!function (e) {
  function t(t) {
    for (var r, i, c = t[0], l = t[1], u = t[2], p = 0, d = []; p < c.length; p++) i = c[p], Object.prototype.hasOwnProperty.call(o, i) && o[i] && d.push(o[i][0]), o[i] = 0;
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (s && s(t); d.length;) d.shift()();
    return a.push.apply(a, u || []), n()
  }

  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, c = 1; c < n.length; c++) {
        var l = n[c];
        0 !== o[l] && (r = !1)
      }
      r && (a.splice(t--, 1), e = i(i.s = n[0]))
    }
    return e
  }

  var r = {}, o = {0: 0}, a = [];

  function i(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {i: t, l: !1, exports: {}};
    return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
  }

  i.m = e, i.c = r, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) i.d(n, r, function (t) {
      return e[t]
    }.bind(null, r));
    return n
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return i.d(t, "a", t), t
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, i.p = "";
  var c = window.webpackJsonp = window.webpackJsonp || [], l = c.push.bind(c);
  c.push = t, c = c.slice();
  for (var u = 0; u < c.length; u++) t(c[u]);
  var s = l;
  a.push([3, 1]), n()
}([function (e, t, n) {
  var r = n(1), o = n(2);
  "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
  var a = {insert: "head", singleton: !1};
  r(o, a);
  e.exports = o.locals || {}
}, , function (e, t, n) {
}, function (e, t, n) {
  "use strict";
  n.r(t);
  var r = n(5), o = document.querySelector(".ampm-opening__wrapper"),
    a = document.querySelector(".ampm-advantages__inner"),
    i = (document.querySelectorAll(".ampm-tabs__container"), document.querySelector(".ampm-tabs__button-wrapper")),
    c = document.querySelectorAll(".ampm-tabs__container.ampm-tabs__container--mobile"),
    l = document.querySelectorAll(".ampm-text-slide__button");
  if (o && (o = new r.a(o, {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      320: {slidesPerView: 1, spaceBetween: 15},
      480: {slidesPerView: 2, spaceBetween: 15},
      768: {slidesPerView: 3, spaceBetween: 15},
      1280: {slidesPerView: 4}
    }
  })), a) {
    var u = document.querySelectorAll(".ampm-text-slide__button--first"),
      s = document.querySelectorAll(".ampm-text-slide__button--second"),
      p = document.querySelectorAll(".ampm-text-slide__button--three");
    a = new r.a(a, {slidesPerView: 1, spaceBetween: 30});
    for (var d = 0; d < l.length; d++) l[d].addEventListener("click", (function () {
      l.forEach((function (e) {
        return e.classList.remove("ampm-text-slide__button--active")
      }))
    }));
    var f = function (e, t) {
      e.forEach((function (n) {
        n.addEventListener("click", (function () {
          a.slideTo(t), e.forEach((function (e) {
            e.classList.add("ampm-text-slide__button--active")
          }))
        }))
      }))
    };
    f(u, 0), f(s, 1), f(p, 2)
  }
  if (i && (i = new r.a(i, {slidesPerView: 4})), c) for (var m = document.querySelectorAll(".ampm-tabs__button"), _ = function (e) {
    var t = c[e];
    t = new r.a(t, {slidesPerView: 1, spaceBetween: 50}), m[e].addEventListener("click", (function (n) {
      for (var r = 0; r < c.length; r++) {
        c[r].classList.remove("ampm-tabs__container--active")
      }
      c[e].classList.add("ampm-tabs__container--active"), t.update()
    }))
  }, b = 0; b < c.length; b++) _(b);
  n(0)
}]);
