!(function () {
  "use strict";
  (document.addEventListener("contextmenu", function (n) {
    n.preventDefault();
  }),
    document.addEventListener("keydown", function (n) {
      if (
        "F12" === n.key ||
        (n.ctrlKey &&
          n.shiftKey &&
          ("I" === n.key || "J" === n.key || "C" === n.key)) ||
        (n.ctrlKey && "u" === n.key)
      )
        return (n.preventDefault(), !1);
    }),
    document.addEventListener("DOMContentLoaded", function () {
      var n = { root: null, rootMargin: "0px", threshold: 0.15 },
        e = new IntersectionObserver(function (n, e) {
          n.forEach(function (n) {
            n.isIntersecting &&
              (n.target.classList.add("scroll-visible"), e.unobserve(n.target));
          });
        }, n),
        t = document.querySelectorAll("#about, #skills, #projects");
      t.length > 0 &&
        t.forEach(function (n) {
          e.observe(n);
        });
      var o = document.getElementById("cookieBanner");
      (localStorage.getItem("cookieAccepted") ||
        setTimeout(function () {
          o && o.classList.add("show");
        }, 1500),
        (window.acceptCookie = function () {
          (localStorage.setItem("cookieAccepted", "true"),
            o && o.classList.remove("show"));
        }),
        (window.closeCookie = function () {
          o && o.classList.remove("show");
        }));
    }));
})();
