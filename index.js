const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});

var load = document.getElementById("loading");

function loader() {
  load.style.display = "none";
}

// gsap animation

// const timeline = gsap.timeline({ defaults: { duration: 1 } });
// timeline
//   .from(".brand", { opacity: 0 }, 1)
//   .from(".hamburger", { opacity: 0 })
//   .from(".link", { opacity: 0, stagger: 0.5 })
//   .from(".btn-top", { opacity: 0 })
//   .from("#showcase", { y: "-100vh", ease: "power2.inOut" }, 3.5);

// .from(".link", { opacity: 0, stagger: 0.5 })
// .from(".right", { x: "-100vw", ease: "power2.in" }, 1)
// .from(".left", { x: "-100%" }, "<.5")
// .to(".footer", { y: 0, ease: "elastic" });
