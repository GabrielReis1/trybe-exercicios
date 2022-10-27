// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 10;

for (index = 1; index <= 10; index +=1) {
    fatorial *= index;
}

console.log(fatorial);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'banana';
let reverse = '';

for (index = 0; index < word.length; index += 1) {
    reverse += word[word.length - 1 - index];;
}

console.log(reverse);

// Considere o array de strings abaixo:

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array [0];
let menorPalavra = array [0];


for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length){
        menorPalavra = array[index];
    }
    
}

console.log(maiorPalavra);
console.log(menorPalavra);

a