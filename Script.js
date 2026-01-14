const message = document.getElementById("message");
const btn = document.getElementById("btn");

let isChanged = false;

btn.addEventListener("click", function () {
    if (isChanged) {
  message.textContent = "day2";
    } else {
      message.textContent = "day3 JavaScriptで変更!!";
    }
    isChanged = !isChanged;
});