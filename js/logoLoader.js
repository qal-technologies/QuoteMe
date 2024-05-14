window.onload = () => {
  const logo = document.getElementById("logoContainer");

  logo.classList.add("fadeIn");

  const timer = setTimeout(() => {
    logo.classList.remove("fadeIn");
  }, 3000);

  clearTimeout(timer);
};
