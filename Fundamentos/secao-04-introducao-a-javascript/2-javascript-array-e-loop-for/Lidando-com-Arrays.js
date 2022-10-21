// Iremos utilizar esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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

console.log('a soma dos valores é: ' + soma);

// Calcule e imprima a média aritmética dos valores contidos no array;

let media = 0;

for (let index = 0 ; index < numbers.length; index += 1) {
    media += numbers[index] / numbers.length;
}

console.log('a media dos valores é: ' + media)