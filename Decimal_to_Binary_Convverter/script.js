const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

function checkUserInput() {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert(" Please provide a decimal number");
    return;
  }
  console.log(numberInput.value);
}
convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});