let slider = document.querySelector(".slides-container");
let holding = false;
let firstClickX;
let alreadyLeftScrolled;

slider.addEventListener("mousedown", (e) => {
  holding = true;
  firstClickX = e.pageX - slider.offsetLeft;
  alreadyLeftScrolled = slider.scrollLeft;
});

slider.addEventListener("mousemove", (e) => {
  if (!holding) return;
  const x = e.pageX - slider.offsetLeft;
  const scrolled = x - firstClickX;
  slider.scrollLeft = alreadyLeftScrolled - scrolled;
});

slider.addEventListener("mouseup", () => {
  holding = false;
});
slider.addEventListener("mouseleave", () => {
  holding = false;
});
