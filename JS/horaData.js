function atualizando() {
    const hora = document.getElementById('hora-html');
    const datehrs = new Date();
    hora.textContent = datehrs.toLocaleTimeString('pt-BR'); //formatação da hora-BR

};
setInterval(atualizando);