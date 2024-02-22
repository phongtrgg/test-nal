const input = document.querySelector(".in");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
const error = document.querySelector("#error");

function findVietnamese(input) {
  const vietnamese = {
    aw: "ă",
    aa: "â",
    dd: "đ",
    ee: "ê",
    oo: "ô",
    ow: "ơ",
    w: "ư",
  };
  let count = 0;
  for (let i = 0; i < input.length - 1; ) {
    //lặp qua các ký tự phạm vi 2 ký tự để check
    if (input.substring(i, i + 2) in vietnamese) {
      count++;
      i += 2;
    } else {
      i++;
    }
    //check ký tự đơn lẻ
    if (input[i] in vietnamese) {
      count++;
      i++;
    }
  }
  output.textContent = count;
  return count;
}

function validInput(char) {
  return char >= "a" && char <= "z";
}
/**hàm check input */
function isValidInput(input) {
  for (let i = 0; i < input.length; i++) {
    if (!validInput(input[i])) {
      console.log("false");
      return false;
    }
  }
  return true;
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (isValidInput(input.value)) {
    //tránh tình trạng người nhập chỉ nhập 1 ký tự
    if (input.value === "w") {
      output.textContent = 1;
    } else {
      findVietnamese(input.value);
    }
    error.textContent = "";
  } else {
    //người nhập đã nhập sai khi thêm ký tự đặc biệt và khoảng trắng
    output.textContent = "";
    error.textContent =
      "chỉ có thể nhập ký tự thông thường, xin hãy thử lại";
  }
});
