'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnClosedModal = document.querySelector(`.close-modal`);
const btnsShowModal = document.querySelectorAll(`.show-modal`);
console.log(btnsShowModal);

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener(`click`, openModal);

btnClosedModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (event) {
  if (event.key === `Escape`) closeModal();
});
