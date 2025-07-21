// EXERCÍCIO 4

// Exercícios com estruturas condicionais

// Verificação de idade
const age = 17;

if (age >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}

// Verificação com múltiplas condições
const hour = 14;

if (hour < 12) {
    console.log("Bom dia!");
} else if (hour < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Operadores lógicos
const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Não precisa trabalhar hoje!");
} else {
    console.log("Dia de trabalho!");
}

// Operador ternário
const status = age >= 18 ? "Adulto" : "Menor";
console.log("Status:", status);

// DESAFIO

// 1. Crie um sistema de classificação de notas:
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const nota = 85;
let conceito;

if (nota >= 90 && nota <= 100) {
    conceito = 'A';
} else if (nota >= 80 && nota <= 89) {
    conceito = 'B';
} else if (nota >= 70 && nota <= 79) {
    conceito = 'C';
} else if (nota >= 60 && nota <= 69) {
    conceito = 'D';
} else if (nota >= 0 && nota <= 59) {
    conceito = 'F';
} else {
    conceito = 'Nota inválida';
}

console.log(`Nota: ${nota} - Conceito: ${conceito}`);

// 2. Verifique se um número é par ou ímpar
const numero = 27;

if (numero % 2 === 0) {
    console.log(`${numero} é par`);
} else {
    console.log(`${numero} é ímpar`);
}

// 3. Crie uma verificação que diga se uma pessoa pode dirigir (precisa ser maior de idade E ter habilitação)
const temHabilitacao = true;
const podeDirigir = age >= 18 && temHabilitacao;

if (podeDirigir) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}
