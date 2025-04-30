/*================== scroll reveal ========================*/
ScrollReveal({
  distance: "70px",
  duration: 3000,
  delay: 20,
});

ScrollReveal().reveal(".content-home, heading", { origin: "top" });
ScrollReveal().reveal(".pfp, .container-servicos, .contact form", {
  origin: "buttom",
});
ScrollReveal().reveal(".content-home h1, .education", { origin: "left" });
ScrollReveal().reveal(".content-home p", { origin: "right" });
ScrollReveal().reveal(".projetos", {
  origin: "top",
});
window.addEventListener("scroll", function () {
  const btn = document.getElementById("actionBtn");
  const scrollPoint = 700; // altura (em px) onde o botão vira fixo

  if (window.scrollY > scrollPoint) {
    btn.classList.add("fixed-btn");
  } else {
    btn.classList.remove("fixed-btn");
  }
});
