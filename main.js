function lightdark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const sidebarButton = document.getElementsByClassName('sidebar-button')[0]
const navLinks = document.getElementsByClassName('navlinks')[0]

sidebarButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})