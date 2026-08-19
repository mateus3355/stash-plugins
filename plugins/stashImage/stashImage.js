// /home/mateus/WSL/PROJETOS/stash-zoom/stashApp/ui/v2.5/src/hooks/Lightbox/LightboxImage.tsx
// onImageMouseUp onImageScroll onImageScrollPanY
// https://github.com/stashapp/stash/issues/2389

// ------------------------------------------------------------
// Disable clicks on Lightbox images to prevent changing the image on small clicks
// ------------------------------------------------------------

const disableLightboxClicks = () => {
  const AlleContaienr = document.querySelectorAll('.Lightbox-carousel-image');
  const Alle = document.querySelectorAll('.Lightbox-carousel-image img');

  Alle.forEach(el => {
    el.onmouseup = e => (e.stopPropagation(), !1)
  })

  // AlleContaienr.forEach(el => {
  //   el.addEventListener('wheel', (e) => {
  //     const atTop = el.scrollTop === 0;
  //     const atBottom = el.scrollHeight - el.scrollTop === el.clientHeight;
      
  //     if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
  //       console.log("Scroll position:", el.scrollTop, "el.scrollHeight: ", el.scrollHeight, "atTop:", atTop, "atBottom:", atBottom);
  //       e.stopPropagation();
  //     }
  //   }, { passive: false });
  // })

},

observer = new MutationObserver(() => { disableLightboxClicks() });
disableLightboxClicks();
observer.observe(document.body, { childList: !0, subtree: !0 });

// ------------------------------------------------------------
// Disable clicks on lightbox container outside the image to prevent closing the carousel
// ------------------------------------------------------------

const observerLink = new MutationObserver((mutations, obs) => {
  const lightbox = document.querySelector(".Lightbox-carousel");
  const link = document.querySelector(".Lightbox-footer a");
  if (lightbox) {
    lightbox.addEventListener("click", function (event) {
      event.stopPropagation();
    });
    if (link) {
      link.setAttribute("target", "_blank");
      link.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    }
  }
});

observerLink.observe(document.body, {
  childList: true,
  subtree: true
});


