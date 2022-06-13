// Your code here

//ArrowLeft
//===========
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
//ArrowRight
//===========
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left >= 0 && left < 360) {
    /* >= in left allows dodger to move to the right after hitting zero */
    dodger.style.left = `${left + 1}px`;
  }
}

//eventListener implementation
//=============================
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    // const leftNumbers = dodger.style.left.replace("px", "");
    // const left = parseInt(leftNumbers, 10);

    // if (left > 0) {
    //   dodger.style.left = `${left - 3}px`;
    // }
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});

// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowRight") {
//     moveDodgerRight();
//   }
// });
