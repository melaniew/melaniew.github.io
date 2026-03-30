  const artifactBoxes = document.querySelectorAll(".artifact-box");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const lightboxCaption = document.querySelector(".lightbox-caption");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxBackdrop = document.querySelector(".lightbox-backdrop");

  function openLightbox(imageSrc, imageAlt, captionText) {
    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt || "";
    lightboxCaption.textContent = captionText || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    lightboxImage.alt = "";
    lightboxCaption.textContent = "";
    document.body.classList.remove("lightbox-open");
  }

  artifactBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const fullImage = box.dataset.full;
      const altText = box.dataset.alt || "";
      const caption = box.querySelector(".artifact-caption")?.textContent || "";
      openLightbox(fullImage, altText, caption);
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxBackdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
