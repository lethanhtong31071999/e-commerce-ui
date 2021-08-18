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
