// file discount.js

function checkDiscount() {
  var discountInput = document.getElementById("discount-input");
  var discountMessage = document.getElementById("discount-message");

  var code = discountInput.value.trim().toUpperCase();

  if (code === "SALE10") {
    discountMessage.textContent = "Bạn đã được giảm 10%!";
    discountMessage.style.color = "green";
  } else if (code === "") {
    discountMessage.textContent = "Vui lòng nhập mã giảm giá.";
    discountMessage.style.color = "red";
  } else {
    discountMessage.textContent = "Mã giảm giá không hợp lệ.";
    discountMessage.style.color = "red";
  }
}
