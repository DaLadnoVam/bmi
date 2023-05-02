const height = document.getElementById("height");
let heightValue = height.value;
let heightText = document.querySelector(".height-text");

const weight = document.querySelector(".weight-text");
const decrementBtn = document.querySelector(".decrement");
const incrementBtn = document.querySelector(".increment");

let userHeight = 150;
let userWeignt = Number(weight.textContent);

const resultContent = document.querySelector(".main-view__result");
const bntHide = document.querySelector(".btn-close");

const showHeight = function () {
  heightValue = this.value;
  userHeight = this.value;
  heightText.textContent = heightValue;
};

height.addEventListener("change", showHeight);
height.addEventListener("mousemove", showHeight);

decrementBtn.addEventListener("click", function () {
  if (userWeignt > 40) {
    weight.textContent = userWeignt -= 1;
    console.log(userWeignt);
  }
});

incrementBtn.addEventListener("click", function () {
  if (userWeignt < 150) {
    weight.textContent = userWeignt += 1;
    console.log(userWeignt);
  }
});

const btnCalc = document.querySelector(".btn-calculate");
const resultBmi = document.querySelector(".title-result");
const textResult = document.querySelector(".text-result");
let bmi;

btnCalc.addEventListener("click", function () {
  resultContent.classList.add("show");

  bmi = (userWeignt / (userHeight / 100) ** 2).toFixed(2);
  resultBmi.textContent = bmi;
  if (bmi < 18.5) {
    textResult.textContent = "Underweight";
  } else if (bmi > 18.5 && bmi < 24.9) {
    textResult.textContent = "Normal";
  } else if (bmi > 25 && bmi < 29.9) {
    textResult.textContent = "Overweight";
  } else {
    textResult.textContent = "Obesity";
  }
});

bntHide.addEventListener("click", function () {
  resultContent.classList.remove("show");
  result.textContent = "";
});
