const menu = document.getElementById("menu");
const info = document.getElementById("info");

function mostrarInfo(botao) {
  
  const botoes = menu.querySelectorAll('button');
  botoes.forEach(b => b.classList.remove('ativo'));

  
  botao.classList.add('ativo');

  info.textContent = botao.dataset.info;
}

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    mostrarInfo(e.target); 
  }
});

const botaoGabriel = document.getElementById("botaoGabriel");
mostrarInfo(botaoGabriel); 


