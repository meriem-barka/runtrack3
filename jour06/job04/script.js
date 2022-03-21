document.addEventListener("DOMContentLoaded", () => {
  let sidenav = document.getElementById("mySidenav");
  let openBtn = document.getElementById("openBtn");
  let closeBtn = document.getElementById("closeBtn");

  

  openBtn.addEventListener("click", openNav);

  function openNav() {
    sidenav.classList.add("active");
  }

  closeBtn.addEventListener("click", closeNav);

  function closeNav() {
    sidenav.classList.remove("active");
  }

});
