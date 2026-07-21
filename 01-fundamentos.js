// 1. Variáveis e tipos de dados
// 2. Operadores
// 3. Estruturas de controle
// 4. Funções
// 5. Objetos

// 1. Variáveis e tipos de dados
const nome = "Alexandre"; // String
let idade = 30; // Number
let altura = 1.75; // Number
var isEstudante = true; // Boolean
let hobbies = ["ler", "escrever", "viajar"]; // Array
let endereco = { rua: "Rua A", numero: 123 }; // Object

// var - O escopo da variável é global ou local à função em que é declarada, e pode ser redeclarada e atualizada. 

// let - O escopo da variável é limitado ao bloco, instrução ou expressão em que é usada, e pode ser atualizada, mas não redeclarada.

// const - O escopo da variável é limitado ao bloco, instrução ou expressão em que é usada, e não pode ser atualizada ou redeclarada.

function testeEscopo() {
    if(true){
        var varGlobal = "Sou uma variável var global";
        let letLocal = "Sou uma variável let local";
        const constLocal = "Sou uma variável const local";
    }

    console.log(varGlobal); // Saída: Sou uma variável var global
    // console.log(letLocal); // Erro: letLocal is not defined
    // console.log(constLocal); // Erro: constLocal is not defined
}

testeEscopo();


function exemploVar() {
    var variavelVar = "Sou uma variável var dentro da função";
    console.log(variavelVar); // Saída: Sou uma variável var dentro da função
}

exemploVar();

var variavelVar = "Sou uma variável var";
console.log(variavelVar); // Saída: Sou uma variável var


function exemploLet() {
    let variavelLet = "Sou uma variável let dentro da função";
    console.log(variavelLet); // Saída: Sou uma variável let dentro da função
}

exemploLet();

let variavelLet = "Sou uma variável let";
console.log(variavelLet); // Saída: Sou uma variável let

function exemploConst() {
    const variavelConst = "Sou uma variável const dentro da função";
    console.log(variavelConst); // Saída: Sou uma variável const dentro da função
}

exemploConst();

// console.log(variavelConst); // Erro: variavelConst is not defined


// 2. Operadores
// Aritméticos
let soma = 10 + 5; // 15
let subtracao = 10 - 5; // 5
let multiplicacao = 10 * 5; // 50
let divisao = 10 / 5; // 2
let resto = 10 % 3; // 1

// Comparação
let igual = (10 == "10"); // true
let estritamenteIgual = (10 === "10"); // false
let diferente = (10 != "5"); // true
let estritamenteDiferente = (10 !== "10"); // true
let maiorQue = (10 > 5); // true
let menorQue = (10 < 5); // false
// Obs:. retorna um valor booleano (true ou false)

// Lógicos
let e = (true && false); // false
let ou = (true || false); // true
let nao = !true; // false
//Obs:. retorna um valor booleano (true ou false)

//3. Estruturas de controle

// Condicional if
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Condicional switch
let dia = 3;
switch (dia) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    default:
        console.log("Outro dia");
}

// Loop for
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}

// Loop while
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

// 4. Funções
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Alexandre"));

// Função anônima
const somaNumeros = function(a, b) {
    return a + b;
};

console.log(somaNumeros(5, 10));

// Arrow function
const multiplicar = (a, b) => a * b;

console.log(multiplicar(5, 10));

// 5. Objetos
let pessoa = {
    nome: "Alexandre",
    idade: 30,
    altura: 1.75,
    saudacao: function() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
};

console.log(pessoa.saudacao());

// objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. O valor de uma propriedade pode ser uma função, nesse caso, a propriedade é conhecida como método.
// pode ser criado usando a notação literal de objeto, como no exemplo acima, ou usando a função construtora Object().
//pode ser acessado usando a notação de ponto (objeto.propriedade) ou a notação de colchetes (objeto["propriedade"]).