let custo = 100;
let venda = 300;

let custoTotal = custo + 0.2*custo;
let lucro = venda - custoTotal;

let quantidadeVendida = 1000;

if (custo == 0 || venda == 0) {
    console.log("Parâmetros errados")
} else {
    console.log(lucro*quantidadeVendida)
};