// EXECÍCIO 6

// Desafio final - integrando todos os conceitos

// Dados de alunos
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

// Média
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

// Contagem
let aprovados = 0;
let reprovados = 0;
let maiorMedia = 0;
let alunoMaiorMedia = null;
let somaMedias = 0;

console.log("Relatório de alunos:");

for (let i = 0; i < students.length; i++) {
    const aluno = students[i];
    const media = calcularMedia(aluno.grades);
    somaMedias += media;

    const status = media >= 70 ? "Aprovado" : "Reprovado";

    console.log(`- ${aluno.name}: média ${media.toFixed(2)} - ${status}`);

    if (status === "Aprovado") {
        aprovados++;
    } else {
        reprovados++;
    }

    if (media > maiorMedia) {
        maiorMedia = media;
        alunoMaiorMedia = aluno.name;
    }
}

const mediaGeral = somaMedias / students.length;

console.log("\nResumo da turma:");
console.log(`Total de alunos: ${students.length}`);
console.log(`Alunos aprovados: ${aprovados}`);
console.log(`Alunos reprovados: ${reprovados}`);
console.log(`Aluno com maior média: ${alunoMaiorMedia} (${maiorMedia.toFixed(2)})`);
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
