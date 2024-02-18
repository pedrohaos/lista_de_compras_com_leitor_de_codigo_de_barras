const btnAddItem = document.querySelector('#botaoAddManual');
const modal = document.querySelector('#modal')
const btnRemoveItem = document.querySelector('#cancelar')


btnAddItem.addEventListener('click',()=>{
    modal.classList.add("__block");
});

btnRemoveItem.addEventListener('click', ()=>{
    fechaModalLimpaInput();
})

function fechaModalLimpaInput(){
    modal.classList.remove("__block");
    item.value = "";
    preco.value = "";
    quant.textContent = "1x"
}

const btnLeCodigoDeBarras = document.querySelector('#botaoLerCodigoDeBarras')
const modal_2 = document.querySelector('#modal_2');
const btnFecherLeitor = document.querySelector('#fechar__leitor');

btnLeCodigoDeBarras.addEventListener('click',()=>{
    modal_2.classList.add("__block");
    startScanner();
})

btnFecherLeitor.addEventListener('click',()=>{
    modal_2.classList.remove("__block");
    Quagga.stop();
})
