// Funções em JavaScript
// Este arquivo organiza os principais conceitos de funções em seções claras para estudo.

// 1. Conceito básico
// Funções são blocos de código reutilizáveis.
// Elas podem receber parâmetros, executar instruções e retornar valores.
// Elas também criam um escopo próprio.

// 2. Escopo
let mensagemGlobal = "Sou global";

function mostrarEscopo() {
    let mensagemLocal = "Sou local";
    console.log(mensagemGlobal);
    console.log(mensagemLocal);
}

if (true) {
    let mensagemBloco = "Sou do bloco";
    console.log(mensagemBloco);
}

// console.log(mensagemLocal); // Erro: variável local não existe fora da função
// console.log(mensagemBloco); // Erro: variável de bloco não existe fora do if

// 3. Function declaration
// Função declarada com a palavra-chave "function" e um nome.
// Pode ser chamada antes da declaração no código.

minhaFuncao();

function minhaFuncao() {
    console.log("Função declarada chamada!");
}

// 4. Function expression
// Função atribuída a uma variável.
// Não pode ser chamada antes de sua declaração.

// minhaFuncaoExpressao(); // Erro: minhaFuncaoExpressao is not a function
const minhaFuncaoExpressao = function() {
    console.log("Função expressão chamada!");
};

minhaFuncaoExpressao();

// 5. Anonymous function
// Função sem nome, normalmente usada como argumento ou valor de retorno.

setTimeout(function() {
    console.log("Função anônima chamada após 2 segundos!");
}, 2000);

// 6. IIFE (Immediately Invoked Function Expression)
// Função definida e executada imediatamente.
// Útil para criar um escopo isolado.

(function() {
    console.log("IIFE chamada!");
})();

(function(a, b) {
    let soma = a + b;
    console.log(`Soma de ${a} e ${b} é: ${soma}`);
})(2, 3);

// 7. Arrow function
// Sintaxe mais curta do ES6.
// Não possui seu próprio this e pode ter retorno implícito.

const minhaArrowFunction = () => {
    console.log("Arrow function chamada!");
};

minhaArrowFunction();

// Arrow function com parâmetros e retorno implícito
let double = (x) => x * 2;
console.log(double(4));
console.log(double(10));

// Arrow function com múltiplos parâmetros e retorno explícito
let sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 7));
console.log(sum(10, 15));

// 8. Callback function
// Função passada como argumento para outra função.

function saudacao(nome, callback) {
    console.log(`Olá, ${nome}!`);
    callback();
}

function despedida() {
    console.log("Até logo!");
}

saudacao("João", despedida);

let array = [1, 2, 3, 4, 5];
const dobroArray = array.map((n) => n * 2);
console.log(dobroArray);

// 9. Função recursiva
// Função que se chama a si mesma.
// Útil para problemas que podem ser divididos em subproblemas.

// fatorial de um número n é o produto de todos os inteiros positivos menores ou iguais a n. Por exemplo, 5! = 5 * 4 * 3 * 2 * 1 = 120.

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

console.log(fatorial(5));

// 10. Função que retorna um objeto com métodos
// closure: função que retorna um objeto com métodos que podem acessar variáveis do escopo da função externa.
 
function calc(a){
    return {
        add(b){
            return a + b;
        },
        subtract(b){
            return a - b;
        },
        multiply(b){
            return a * b;
        },
        divide(b){
            if(b !== 0) return a / b;
              
            return "Erro: Divisão por zero!"; 
        }
    }
} 

const resultado = calc(5).add(3);
console.log(resultado); // Saída: 8

const resultado2 = calc(10).subtract(3);
console.log(resultado2); // Saída: 7

const resultado3 = calc(4).multiply(3);
console.log(resultado3); // Saída: 12

const resultado4 = calc(10).divide(2);
console.log(resultado4); // Saída: 5

const resultado5 = calc(10).divide(0);
console.log(resultado5); // Saída: Erro: Divisão por zero!
