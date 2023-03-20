document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("expanded");
});

// ヘッダーが消えるのを修正する
window.addEventListener("load", function () {
  var header = document.querySelector(".header");
  header.style.display = "block";
});
