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
