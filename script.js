"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const navList = document.querySelectorAll("#sidebar a");
  console.log(navList);

  navList.forEach((nav) => {
    nav.addEventListener("click", (curr) => {
      navList.forEach((e) => e.classList.remove("active"));
      curr.target.classList.add("active");
    });
  });

  //  toggle sidebar
  const menuButton = document.getElementById("menu_button");
  const sidebar = document.getElementById("sidebar");
  const main = document.getElementById("main");
  const close_icon = document.getElementById("close_icon");
  const menu_icon = document.getElementById("menu_icon");
  if (screen.width <= 768) {
    sidebar.style.left = "-250px";
    menu_icon.style.display = "block";
    close_icon.style.display = "none";
  } else {
    menuButton.style.display = "none";
  }

  menuButton.addEventListener("click", () => {
    if (sidebar.style.left === "0px" || sidebar.style.left === "") {
      sidebar.style.left = "-250px";
      main.style.marginLeft = "0px";
      close_icon.style.display = "none";
      menu_icon.style.display = "block";
    } else {
      sidebar.style.left = "0px";
      main.style.marginLeft = "250px";
      close_icon.style.display = "block";
      menu_icon.style.display = "none";
    }
  });

//   sidebar closed on mobile device
  document.addEventListener("click", function (event) {
    var isClickInsideSidebar = sidebar.contains(event.target);
    var isClickMenuButton = menuButton.contains(event.target);
    if (!isClickInsideSidebar && screen.width <= 768  && !isClickMenuButton ) {
      sidebar.style.left = "-250px";
      close_icon.style.display = "none";
      menu_icon.style.display = "block";
    }
  });
});

console.log(screen.width);
