const btnMais = document.querySelector('#mais');
const quant = document.querySelector('#saida');
const btnMenos = document.querySelector('#menos');


btnMais.addEventListener('click', soma);
btnMenos.addEventListener('click', subtracao);

function soma(){
    quant.value = parseInt(quant.value)+1+"x";
    btnMenos.disabled = false;
}
function subtracao(){
    quant.value = parseInt(quant.value)-1+"x";
    if(quant.textContent == "1x"){
        btnMenos.disabled = true;
    }
}
