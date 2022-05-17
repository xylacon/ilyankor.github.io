function lightdark() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var elem = document.getElementById("themebutton");
    if (elem.value=="DARK") elem.value = "LIGHT";
    else elem.value = "DARK";
}

function removeColor(event) {
    !event.target.classList.contains("no-hover") && event.target.classList.add("no-hover")
    event.target.addEventListener("mouseleave", () => {
        event.target.classList.remove("no-hover")
    })
}