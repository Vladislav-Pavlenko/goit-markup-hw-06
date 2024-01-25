document.addEventListener("DOMContentLoaded", function () {
  var openBtn = document.querySelector(".mob-open-btn");
  var closeBtn = document.querySelector(".mob-close-btn");
  var mobMenu = document.querySelector(".mob-menu");

  openBtn.addEventListener("click", function () {
    mobMenu.classList.add("is-open");
  });

  closeBtn.addEventListener("click", function () {
    mobMenu.classList.remove("is-open");
  });
});
