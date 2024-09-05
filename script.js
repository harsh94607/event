// function toggleMenu() {
//     var menu = document.getElementById("menu");
//     menu.classList.toggle("show");
// }


function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuIcon = document.getElementById("menu-icon");
    var crossIcon = document.getElementById("cross-icon");

    // Toggle the menu display
    menu.classList.toggle("show");

    // Toggle the menu and cross icons visibility
    if (menu.classList.contains("show")) {
        menuIcon.style.display = "none"; // Hide menu icon when menu is open
        crossIcon.style.display = "block"; // Show cross icon when menu is open
    } else {
        menuIcon.style.display = "block"; // Show menu icon when menu is closed
        crossIcon.style.display = "none"; // Hide cross icon when menu is closed
    }
}
