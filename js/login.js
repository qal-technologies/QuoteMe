const eye = document.querySelector("div#see");

var clicked = true;
eye.onclick = () => {
  clicked = !clicked;

  if (clicked) {
    password.type = "password";
    eye.innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-eye-slash-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"
              />
              <path
                d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"
              />
            </svg>`;
  } else {
    password.type = "text";
    eye.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>`;
  }
};

const form = document.getElementById("login-form");

form.onsubmit = (e) => {
  e.preventDefault();

  const userName = document
    .getElementById("username")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("password").value.trim();

  const userWarn = document.getElementById("username-warning");
  const passWarn = document.getElementById("password-warning");

  const userData = JSON.parse(localStorage.getItem("userInfo"));

  if (userName === "" || password === "") {
    alert("Username or password can't be empty!");
    return false;
  }

  if (userName !== userData.username) {
    userWarn.innerText = "username doesn't match!";
    return false;
  }

  if (password !== userData.password) {
    passWarn.innerText = "password doesn't match!";
    return false;
  }

  if (userName === userData.username) {
    userWarn.innerText = "";
  }

  if (password === userData.password) {
    passWarn.innerText = "";
  }

  userData.logged = "true";

  localStorage.setItem("userInfo", JSON.stringify(userData));

  window.location.href = "../html/main.html";
  return true;
};

const userData = JSON.parse(localStorage.getItem("userInfo"));

if (userData.logged === "true") {
  alert("You're logged in already!");
  window.location.href = "../html/main.html";
}
