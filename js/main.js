$(document).ready(function () {
  $(".btnShow").click(function (e) {
    const setToggle = document
      .querySelector(".btnShow")
      .getAttribute("data-up");

    if (setToggle == "off") {
      $(".btnShow").attr("data-up", "on");
      $(".btnShow").html("Hide Form");
    } else {
      $(".btnShow").attr("data-up", "off");
      $(".btnShow").html("Show Form");
    }

    $(".card").slideToggle(800);
    $(".card-images img").slideToggle(7000);

    e.preventDefault();
  });
  $(".bars").click(function (e) {
    const setP = document.querySelector("aside").getAttribute("data-show");
    console.log(3);
    if (setP == "off") {
      $("aside").attr("data-show", "on");
      $(".bars").html(`<i class="fas fa-times fa-2x"></i>`);
    } else {
      $("aside").attr("data-show", "off");
      $(".bars").html(`<i class="fas fa-bars fa-2x"></i>`);
    }
  });
  //   console.log(Imgcontainer[1].getAttribute("src"));
});
const Imgcontainer = document.querySelectorAll(".card-images img");
const main = document.querySelector("body");
let current = 0;
function reset() {
  for (let index = 0; index < Imgcontainer.length; index++) {
    // const element = array[index];
    Imgcontainer[index].style.border = "none";
    Imgcontainer[index].style.transform = `scale(1)`;
    Imgcontainer[index].style.opacity = `0.2`;
  }
}
function next() {
  reset();
  Imgcontainer[current].style.border = `1px solid white`;
  Imgcontainer[current].style.transform = `scale(1.1)`;
  Imgcontainer[current].style.opacity = `1`;

  main.style.background = `url("${Imgcontainer[current].getAttribute(
    "src"
  )}") center center/cover`;

  if (current >= 4) {
    current = -1;
  }
  current++;
}
function startSlide() {
  reset();
  const time = setInterval(() => {
    next();
  }, 10000);
  Imgcontainer[0].style.transform = `scale(1.1)`;
}
startSlide();
