let continueButton = document.querySelector(".button");
let numberInput = document.querySelector(
  "#signUpContent>div:nth-child(2)>input"
);
let inputDiv = document.getElementById("inputDiv");
let buttonDiv = document.getElementById("buttonDiv");
let heading = document.querySelector("h3");
let changeNumberButton = document.querySelector("h4");

//Change Number
changeNumberButton.addEventListener("click", () => {
  location.reload();
  window.localStorage.setItem("userNumber", "")
  changeNumberButton.classList.remove("visibility");
  heading.innerHTML = `Sign Up to view your profile`;
  inputDiv.innerHTML = `<input type="text" id="numberIp" placeholder="Phone Number" />`;
  buttonDiv.innerHTML = `<button class="button">Continue</button>`;
});

// Catching phone number
continueButton.addEventListener("click", (e) => {
  if (numberInput.value.length === 10) {
    inputDiv.innerHTML = `
          <input type="text" id="ist" class="otpIp" maxlength = "1" onkeyup="clickEvent(this,'sec')">
          <input type="text" id="sec" class="otpIp" maxlength = "1" onkeyup="clickEvent(this,'third')">
          <input type="text" id="third" class="otpIp" maxlength = "1" onkeyup="clickEvent(this,'fourth')">
          <input type="text" id="fourth" class="otpIp" maxlength = "1" onkeyup="clickEvent(this,'fifth')">
          <input type="text" id="fifth" class="otpIp" maxlength = "1" onkeyup="clickEvent(this,'sixth')">
          <input type="text" id="sixth" class="otpIp" maxlength = "1" onkeyup="">
          `;
    changeNumberButton.classList.add("visibility");
    heading.classList.remove("addRed");
    window.localStorage.setItem("userNumber", numberInput.value);
    buttonDiv.innerHTML = `<button class="button2">Verify</button>`;
    heading.innerHTML = `Enter OTP sent To ${numberInput.value}`;
    add();
  } else {
    changeNumberButton.classList.remove("visibility");
    heading.classList.add("addRed");
    heading.innerHTML = `Wrong number please try again`;
  }
});

///otpFunction
function clickEvent(first, last) {
  if (first.value.length) {
    document.getElementById(last).focus();
  }
}
//Catching OTP value
function add() {
  let verifyButton = document.querySelector(".button2");
  let otpVal1 = document.getElementById("ist");
  let otpVal2 = document.getElementById("sec");
  let otpVal3 = document.getElementById("third");
  let otpVal4 = document.getElementById("fourth");
  let otpVal5 = document.getElementById("fifth");
  let otpVal6 = document.getElementById("sixth");
  verifyButton.addEventListener("click", () => {
    let OTP =
      otpVal1.value +
      otpVal2.value +
      otpVal3.value +
      otpVal4.value +
      otpVal5.value +
      otpVal6.value;

    if (OTP != "" && OTP.length === 6) {
      heading.classList.remove("addRed");
      heading.classList.add("addGreen");
      heading.innerHTML = `OTP verification successful`;
      setTimeout(() => {
        location.replace("index.html");
      }, 1500);
    } else {
      heading.classList.remove("addGreed");
      heading.classList.add("addRed");
      heading.innerHTML = `Incorrect OTP please try again`;
    }
  });
}
