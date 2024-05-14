const form = document.getElementById("quote-me-form");

form.onsubmit = (e) => {
  e.preventDefault();

  var displayname = document.getElementById("display-name").value.trim();
  const username = document
    .getElementById("user-name")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (displayname === "") {
    displayname = "User";
  }

  if (username === "" || password === "") {
    alert("username or password can't be empty!");
    return false;
  }

  const verifyObj = {
    username,
    password,
    displayname,
    user: "true",
    logged: "true",
  };

  localStorage.setItem("userInfo", JSON.stringify(verifyObj));

  window.location.href = "../html/main.html";

  return true;
};

const userInfoString = localStorage.getItem("userInfo");
const userInfo = JSON.parse(userInfoString);

if ((userInfo.user === "true") && (userInfo.logged !== "true")) {
  alert(`${userInfo.username}, you already have an account!`);

  window.location.href = "../html/login.html";
} else if (userInfo.logged === "true") {
  alert("You're already logged in!");

  const timer = setTimeout(() => {
    window.location.href = "../html/main.html";
  }, 2000);
}
