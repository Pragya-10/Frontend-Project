// document.querySelector("#logo").onclick = function () {
//   document.querySelector("#logo").classList.add("on");
// };

const mark = document.querySelector("#mark");
mark.addEventListener("mouseenter", (e) => {
  mark.style.border = "5px dotted orange";
});

const travel = document.querySelector(".travel");

travel.addEventListener("click", () => {
  travel.style.color = "orange";
});
