/* ============================================================
   Luca Fontaine — interactions
   ============================================================ */
(function () {
  "use strict";

  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  /* ---------- Sticky nav background ---------- */
  const onScroll = () => {
    nav.classList.toggle("is-stuck", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  const closeMenu = () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", closeMenu)
  );

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-in"));
  }

  /* ---------- Featured video (click-to-play facade) ----------
     YouTube's player needs a real http(s) origin. When the page is
     opened as a local file (file://) the embed throws "Error 153",
     so in that case we open the video on YouTube instead. */
  const facade = document.getElementById("ytFacade");
  if (facade) {
    facade.addEventListener("click", () => {
      if (location.protocol === "file:") {
        window.open(facade.dataset.watch, "_blank", "noopener");
        return;
      }
      const iframe = document.createElement("iframe");
      iframe.src = facade.dataset.embed;
      iframe.title = "Blue or Green — short film";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      facade.replaceWith(iframe);
    });
  }

  /* ---------- Current year ---------- */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Lightbox ---------- */
  const grid = document.getElementById("grid");
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbClose = document.getElementById("lbClose");
  const lbPrev = document.getElementById("lbPrev");
  const lbNext = document.getElementById("lbNext");

  const images = Array.from(grid.querySelectorAll("img"));
  let current = 0;

  const show = (i) => {
    current = (i + images.length) % images.length;
    const img = images[current];
    lbImg.src = img.src;
    lbImg.alt = img.alt;
  };

  const openLb = (i) => {
    show(i);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const closeLb = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  images.forEach((img, i) =>
    img.addEventListener("click", () => openLb(i))
  );
  lbClose.addEventListener("click", closeLb);
  lbPrev.addEventListener("click", () => show(current - 1));
  lbNext.addEventListener("click", () => show(current + 1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLb();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
})();
