let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function MenuAB() {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        menu.style.display = "flex"

        iconeX.style.display = "inline"
        iconeBarras.style.display = "none"
    } else {
        menu.classList.add("menu-fechado")
        menu.style.display = "none"

        iconeX.style.display = "none"
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fehcado")
    menu.style.display = "flex"

    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}