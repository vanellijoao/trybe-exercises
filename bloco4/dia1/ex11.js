let salarioBruto = 6000;

let inss;
let ir;
let salarioBase;
let salarioLiquido;

let inssFaixa1 = 1556.94;
let inssFaixa2 = 2594.92;
let inssFaixa3 = 5189.82;


if (salarioBruto <= inssFaixa1) {
    inss = salarioBruto * 0.08;
} else if (salarioBruto > inssFaixa1 && salarioBruto <= inssFaixa2) {
    inss = salarioBruto * 0.09;
} else if (salarioBruto > inssFaixa2 && salarioBruto <= inssFaixa3) {
    inss = salarioBruto * 0.11;
} else {
    inss = 570.88;
}

salarioBase = salarioBruto - inss;

let irFaixa1 = 1903.98;
let irFaixa2 = 2826.65;
let irFaixa3 = 3751.05;
let irFaixa4 = 4664.68;

let aliquota1 = 0.075;
let aliquota2 = 0.15;
let aliquota3 = 0.225;
let aliquota4 = 0.275;

let parcela1 = 142.80;
let parcela2 = 354.80;
let parcela3 = 636.13;
let parcela4 = 869.36;

if (salarioBase <= irFaixa1) {
    ir = 0;
} else if (salarioBase > irFaixa1 && salarioBase <= irFaixa2) {
    ir = (salarioBase * aliquota1) - parcela1;
} else if (salarioBase > irFaixa2 && salarioBase <= irFaixa3) {
    ir = (salarioBase * aliquota2) - parcela2;
} else if (salarioBase > irFaixa3 && salarioBase <= irFaixa4) {
    ir = (salarioBase * aliquota3) - parcela3;
} else if (salarioBase > irFaixa4) {
    ir = (salarioBase * aliquota4) - parcela4;
}

salarioLiquido = salarioBase - ir;

console.log("Seu salário bruto é: $" + salarioBruto);
console.log("O INSS a ser pago é: $" + inss);
console.log("Seu salário base é: $" + salarioBase);
console.log("O IR a ser pago é: $" + ir);
console.log("Seu salário líquido é: $" + salarioLiquido);