"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");
const show = document.querySelectorAll(".show-modal");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < show.length; i++) {
  show[i].addEventListener("click", openModal);
}
const close = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btn.addEventListener("click", close);
overlay.addEventListener("click", close);

//to use KEYBOARD EVENTS we also need to take into addEventListener.
//this method hear whenever the event it's happening around the page.

document.addEventListener("keydown", function (e) {
  //we can pass the event as an argument
  //basically here, we are storaging whenever the even is being executed and also to be used whenever we need it

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    close();
  }
});
