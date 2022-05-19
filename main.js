const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
}

function lightdark() {
    var temptheme = document.documentElement.getAttribute("data-theme");
    var elem = document.getElementById("themebutton");

    if (temptheme=="dark") {
        document.documentElement.setAttribute("data-theme","light");
        elem.value = "light";
        theme = "light"
    }
    else { 
        document.documentElement.setAttribute("data-theme", "dark");
        elem.value = "dark";
        theme = "dark"
    }

    localStorage.setItem("theme", theme);
}

function removeColor(event) {
    !event.target.classList.contains("no-hover") && event.target.classList.add("no-hover")
    event.target.addEventListener("mouseleave", () => {
        event.target.classList.remove("no-hover")
    })
}