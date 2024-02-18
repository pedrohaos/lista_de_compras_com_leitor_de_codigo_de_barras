const item = document.querySelector('#inputItem');
const preco = document.querySelector('#inputPreco');
const quantidade = document.querySelector('#saida');
const btnConcluido = document.querySelector('#concluido');

btnConcluido.addEventListener('click', ()=>{
    const valorItem = item.value;
    let valorPreco = preco.value;
    const valorQuantidade = quantidade.textContent;
    valorPreco = MultiplicaPrecoPorUnidaPelaQuantidade(valorPreco, valorQuantidade)
    transformaValoresEmStringsMontaUl(valorItem, valorPreco, valorQuantidade)
    fechaModalLimpaInput();
    atualizaTotalDeItens();
    atualizaTotalDePreco();
})

function montaLi(valorItem, valorPreco, valorQuantidade){
    MultiplicaPrecoPorUnidaPelaQuantidade(valorPreco,valorQuantidade)
    const li = document.createElement("li");
    li.classList.add("item");

    li.appendChild(montaDiv(valorQuantidade,"item__quantia"))
    li.appendChild(montaDiv(valorItem,"item__nome"))
    li.appendChild(montaDiv(valorPreco,"item__preco"))

    return li;
}

function montaDiv(valor, classe){
    const div = document.createElement("div");
    div.textContent = valor;
    div.classList.add(classe);
    return div;
}

$(function obrigaOpontoNoPreco() {
    $('#inputPreco').maskMoney({ decimal: '.', thousands: '', precision: 2 });
})

function MultiplicaPrecoPorUnidaPelaQuantidade(valorPreco, valorQuantidade){
    valorQuantidade = parseInt(valorQuantidade);
    valorPreco = parseFloat(valorPreco)
    valorPreco = valorPreco*valorQuantidade;
    return valorPreco.toFixed(2);
}

function transformaValoresEmStringsMontaUl(valorItem, valorPreco, valorQuantidade){
    valorQuantidade = String(valorQuantidade);
    valorPreco = String(valorPreco);
    const ul = document.querySelector("#lista");
    const li = montaLi(valorItem, valorPreco, valorQuantidade)
     ul.appendChild(li);
}
