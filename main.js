"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Gooddd";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    'No',
    'No, no, no',
    'No, no, no, no',
    'No, no, no, no, no',
    'No, no, no, no, no, no',
    'No, no, no, no, no, no, no',
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3JsemZ0MGxhdGs4NTk2bW5ud29saWNqYWRrMnkweGk5anJ5bHgwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fxU6WfJ8eembhmZBC6/giphy.webp`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
