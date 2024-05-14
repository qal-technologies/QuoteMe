window.onload = () => {
  const logo = document.getElementById("logoContainer");
  const regBtn = document.getElementById("register");
  const logBtn = document.getElementById("login");
  const footer = document.getElementById("footer");

  logo.classList.add("fadeIn");
  footer.classList.add("fadeIn");
  regBtn.classList.add("leftIntro");
  logBtn.classList.add("rightIntro");

  const timer = setTimeout(() => {
    logo.classList.remove("fadeIn");
    footer.classList.remove("fadeIn");
    regBtn.classList.remove("leftIntro");
    logBtn.classList.remove("rightIntro");
  }, 3000);

  clearTimeout(timer);

  regBtn.onclick = () => {
    window.location.href = "./reg.html";
  };

  logBtn.onclick = () => {
    window.location.href = "./login.html";
  };
};
