(function () {
  "use strict";

  /* =========================================
     1. SECURITY & ANTI-INSPECT (Fitur Lama)
     ========================================= */
  // Mencegah Klik Kanan
  document.addEventListener("contextmenu", function (n) {
    n.preventDefault();
  });

  // Mencegah Shortcut Developer Tools (F12, Ctrl+Shift+I, dll)
  document.addEventListener("keydown", function (n) {
    if (
      "F12" === n.key ||
      (n.ctrlKey &&
        n.shiftKey &&
        ("I" === n.key || "J" === n.key || "C" === n.key)) ||
      (n.ctrlKey && "u" === n.key)
    ) {
      n.preventDefault();
      return false;
    }
  });

  /* =========================================
     2. DOM LOADED EVENTS
     ========================================= */
  document.addEventListener("DOMContentLoaded", function () {
    // --- Scroll Animation (IntersectionObserver) ---
    var observerOptions = { root: null, rootMargin: "0px", threshold: 0.15 };
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    var sections = document.querySelectorAll("#about, #skills, #projects");
    if (sections.length > 0) {
      sections.forEach(function (section) {
        observer.observe(section);
      });
    }

    // --- Cookie Banner Logic ---
    var cookieBanner = document.getElementById("cookieBanner");

    // Cek apakah user sudah pernah accept cookie
    if (!localStorage.getItem("cookieAccepted")) {
      setTimeout(function () {
        if (cookieBanner) cookieBanner.classList.add("show");
      }, 1500);
    }

    // Fungsi Global untuk Cookie (biar bisa dipanggil dari HTML)
    window.acceptCookie = function () {
      localStorage.setItem("cookieAccepted", "true");
      if (cookieBanner) cookieBanner.classList.remove("show");
    };

    window.closeCookie = function () {
      if (cookieBanner) cookieBanner.classList.remove("show");
    };
  });

  /* =========================================
     3. NEW: LANGUAGE TOGGLE FEATURE
     ========================================= */
  // Kita pasang di 'window' agar bisa dipanggil onclick="toggleLanguage()" di HTML
  window.toggleLanguage = function () {
    const idElements = document.querySelectorAll(".lang-id");
    const enElements = document.querySelectorAll(".lang-en");
    const btn = document.getElementById("langToggle");

    // Pastikan tombol ada (mencegah error di halaman lain)
    if (!btn) return;

    const spans = btn.querySelectorAll("span"); // [0]=ID, [1]=/, [2]=EN

    // Cek kondisi sekarang (apakah ID sedang hidden?)
    // Kita cek elemen pertama saja sebagai acuan
    const isEnglishNow = idElements[0].style.display === "none";

    if (isEnglishNow) {
      // --- KEMBALI KE INDONESIA ---
      idElements.forEach((el) => (el.style.display = "block"));
      enElements.forEach((el) => (el.style.display = "none"));

      // Update gaya tombol (ID Bold, EN Biasa)
      spans[0].classList.add("active");
      spans[2].classList.remove("active");
    } else {
      // --- GANTI KE INGGRIS ---
      idElements.forEach((el) => (el.style.display = "none"));
      enElements.forEach((el) => (el.style.display = "block"));

      // Update gaya tombol (ID Biasa, EN Bold)
      spans[0].classList.remove("active");
      spans[2].classList.add("active");
    }
  };
})();
