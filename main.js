const menuElement = document.querySelector("#menu");
const navToggle = document.querySelector("header .header-2 .navbar");
const header2Element = document.querySelector("header .header-2-wrapper");

menuElement.addEventListener("click", toggleMenu);
window.addEventListener("scroll", handleWindowScroll);
window.addEventListener("scroll", handleHeaderFixed);

function handleHeaderFixed() {
  if (window.scrollY > 60) {
    header2Element.classList.add("header--active");
  } else {
    header2Element.classList.remove("header--active");
  }
}

function handleWindowScroll() {
  menuElement.classList.remove("fa-times");
  navToggle.classList.remove("show");
}

function toggleMenu() {
  menuElement.classList.add("fa-times");
  navToggle.classList.add("show");
}

// Watch other watch models
const smallImgs = document.querySelectorAll(
  ".feature .feature-wrapper .feature-body .image-container .small-image img"
);

for (const img of smallImgs) {
  img.onclick = () => {
    smallImgs.forEach((childImg) => {
      childImg.classList.remove("image--active");
    });
    img.classList.add("image--active");

    // change big Image
    const bigImageElement = document.querySelector(
      ".feature .feature-wrapper .feature-body .image-container .big-image img"
    );
    bigImageElement.setAttribute("src", img.getAttribute("src").toString());
  };
}

// Product Gallery
const controlsChildrenElements = document.querySelector(
  ".gallery .gallery-wrapper .controls"
).children;
const imageChildrenContainerElements = document.querySelector(
  ".gallery .gallery-wrapper .image-container"
).children;

for (const element of controlsChildrenElements) {
  element.addEventListener("click", handleNavGallery);
}

function handleNavGallery(e) {
  for (const element of controlsChildrenElements) {
    element.classList.remove("btn--active");
  }
  this.classList.add("btn--active");
  const filter = this.getAttribute("data-filter");
  handleFillterGallery(filter);
}

function handleFillterGallery(filter) {
  for (const boxParent of imageChildrenContainerElements) {
    const boxGalleryElement = boxParent.firstElementChild;
    boxParent.style.display = "block";
    if (filter === "all") continue;
    const check = boxGalleryElement.classList.contains(filter);
    if (!check) {
      boxParent.style.display = "none";
    }
  }
}
