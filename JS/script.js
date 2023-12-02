const button = document.querySelector("button"),
  toast = document.querySelector(".toast");
(closeIcon = document.querySelector(".close")),
  (progress = document.querySelector(".progress"));

let tmr1, tmr2;

button.addEventListener("click", () => {
  toast.classList.add("active");
  progress.classList.add("active");

  tmr1 = setTimeout(() => {
    toast.classList.remove("active");
    progress.classList.remove("active");
  }, 5000);
  tmr1 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(tmr1);
  clearTimeout(tmr2);
});
