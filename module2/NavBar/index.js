document.addEventListener(function () {
  const navbarToggle = document.getElementById("navbarToddle");
  const navbarMenu = document.getElementById("navbarMenu");
  navbarToggle.addEventListener(function () {
    navbarMenu.classList.toggle("active");
  });
});
