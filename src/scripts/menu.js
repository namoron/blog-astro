document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("expanded");
});

// ヘッダーが消えるのを修正する
// export default {
//   onMount() {
//     const header = document.querySelector(".header");
//     header.style.display = "block";
//   },
// };
