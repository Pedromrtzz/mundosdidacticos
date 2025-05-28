window.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".fa-bars");
    const navMenu = document.querySelector(".navegacion-izquierda");

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("menu-activo");
    });
});
