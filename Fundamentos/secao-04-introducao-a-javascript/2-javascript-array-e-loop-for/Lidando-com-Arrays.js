// Iremos utilizar esse array para realizar os próximos exercícios.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let index = 0 ; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado;

let soma = 0;
let espaco = " ";

for (let index = 0 ; index < numbers.length; index += 1) {
   soma += numbers[index];
}

// console.log('a soma dos valores é: ' + soma);

// Calcule e imprima a média aritmética dos valores contidos no array;

let media = 0;

for (let index = 0 ; index < numbers.length; index += 1) {
    media += numbers[index] / numbers.length;
}

console.log('a media dos valores é: ' + media)

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (media > 20) {
    console.log('valor maior que 20')
}else {
    console.log('valor menor ou igual a 20')
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorNumero = numbers[0];

for (let index = 0 ; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}

console.log('o maior numero é: ' + maiorNumero);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numeroImpar = 0;

for (let index = 0 ; index < numbers.length; index += 1) {
    if ((numbers[index] % 2) != 0) {
        numeroImpar += 1;
    } 
}

if (numeroImpar === 0) {
    console.log('nunhum valor impar encontrado');
} else {
    console.log(numeroImpar, 'numeros impares.');
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];

for (let index = 0 ; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }
}

console.log('o menor numero é: ' + menorNumero);