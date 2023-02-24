let userNumber = window.localStorage.getItem("userNumber");
let userDashboardName = document.getElementById("userNumber");
let signupLogout = document.getElementById("signupLogout");
//display user Number
if (userNumber != "") {
  userDashboardName.innerHTML = `Hello +91${userNumber}`;
  signupLogout.innerHTML = ` <a><button id=logOutButton>Log Out</button></a>
     <hr>
    `;
  logoutFunction();
}

function logoutFunction() {
  let logOutButton = document.getElementById("logOutButton");
  logOutButton.addEventListener("click", () => {
    location.reload();
    userDashboardName.innerHTML = `Hello User`;
    logOutButton.innerHTML = `<a href="./Signup.html">
                  <button>Sign Up</button></a>
                  <hr>`;
    window.localStorage.setItem("userNumber", "");
  });
}
