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