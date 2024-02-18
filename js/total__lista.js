function atualizaTotalDeItens(){
// Obtém todos os itens da lista HTML
const lista = document.querySelectorAll(".item__quantia");

// Cria um array para armazenar os valores como números
const valores = [];

// Itera pelos itens da lista e converte as Strings em números
lista.forEach(item => {
    valores.push(parseInt(item.textContent));
    console.log(item)
});

// Soma os valores no array
const somaQuantidadeItens = valores.reduce((total, valor) => total + valor, 0);

// Exibe o resultado na página
const resultadoElement = document.querySelector("#QuantidadeItens");
resultadoElement.textContent = `Total de itens: ${somaQuantidadeItens}`;
}

function atualizaTotalDePreco(){
// Obtém todos os itens da lista HTML
const lista = document.querySelectorAll(".item__preco");

// Cria um array para armazenar os valores como números
const valores = [];

// Itera pelos itens da lista e converte as Strings em números
lista.forEach(item => {
    valores.push(parseFloat(item.textContent));
    console.log(item)
});

// Soma os valores no array
const somaQuantidadeItens = valores.reduce((total, valor) => total + valor, 0);

// Exibe o resultado na página
const resultadoElement = document.querySelector("#valorTotal");
resultadoElement.textContent = `Valor total: ${somaQuantidadeItens}`;
}
