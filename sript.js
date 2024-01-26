document.addEventListener("DOMContentLoaded", function () {
  var openBtn = document.querySelector(".mob-open-btn");
  var closeBtn = document.querySelector(".mob-close-btn");
  var mobMenu = document.querySelector(".mob-menu");
  var modWindow = document.querySelector(".backdrop");
  var modCloseBtn = document.querySelector(".modal-close-button");

  openBtn.addEventListener("click", function () {
    mobMenu.classList.add("is-open");
  });

  closeBtn.addEventListener("click", function () {
    mobMenu.classList.remove("is-open");
  });

  modCloseBtn.addEventListener("click", function () {
    modWindow.classList.remove("is-open");
  });
});
