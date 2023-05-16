// Navigation bar effects on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const modalCloseBtn = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
  serviceModals[modalClick].classList.add("active");
};

learnMoreBtn.forEach((learnMoreBtn, i) => {
  learnMoreBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtn.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});
