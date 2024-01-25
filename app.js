const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", handleButtonClick);

function handleButtonClick(e) {
  e.preventDefault();

  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");

  const weight = weightInput.value;
  const height = heightInput.value;

  if (
    isInputInvalid(weight, "กรุณาป้อนน้ำหนักของคุณ") ||
    isInputInvalid(height, "กรุณาป้อนส่วนสูงของคุณ")
  ) {
    return;
  }

  calculateAndShowBMI(weight, height);
}

function isInputInvalid(value, errorMessage) {
  if (value === "" || isNaN(value)) {
    result.innerHTML = errorMessage;
    return true;
  }
  return false;
}

function calculateAndShowBMI(weight, height) {
  height = height / 100;
  const bmi = (weight / Math.pow(height, 2)).toFixed(2);

  if (bmi < 18.5) {
    showResult(bmi, "ผอมเกินไป", "blue");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    showResult(bmi, "ปกติ", "green");
  } else if (bmi >= 25 && bmi <= 29.9) {
    showResult(bmi, "อ้วน", "red");
  } else {
    showResult(bmi, "อ้วนเกินไป", "purple");
  }
}

function showResult(bmi, message, color) {
  result.style.backgroundColor = color;
  result.innerHTML = `ผลลัพธ์ = ${bmi} (${message})`;
}
