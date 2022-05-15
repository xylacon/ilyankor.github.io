function lightdark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function removeColor(event) {
    !event.target.classList.contains("no-hover") && event.target.classList.add("no-hover")
    event.target.addEventListener("mouseleave", () => {
        event.target.classList.remove("no-hover")
    })
}