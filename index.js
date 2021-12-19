const hamburger = document.getElementById("hamburger")
const navUL = document.getElementById("nav-ul")

hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show")
})

var load = document.getElementById("loading");

    function loader(){
      load.style.display = "none"
    }
