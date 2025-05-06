const btn = document.getElementById("actionBtn");
window.addEventListener("scroll", function () {
  
  const scrollPoint = 700; // altura (em px) onde o botão vira fixo

  if (window.scrollY > scrollPoint) {
    btn.classList.add("fixed-btn");
  } else {
    btn.classList.remove("fixed-btn");
  }
});


const toggleButton = document.querySelector('.toggle__lang');
const en = document.querySelector('.en')
const pt = document.querySelector('.pt')
function btnText(){
  if (pt.classList.contains('active')){
    console.log('ta ativo')
    btn.textContent = 'Baixar CV'
  } else {
    btn.textContent = 'Download CV'
  }
}
toggleButton.addEventListener('click', () => {
  en.classList.toggle('active')
  pt.classList.toggle('active')
  toggleButton.classList.toggle('ptbr')
  btnText()
});


