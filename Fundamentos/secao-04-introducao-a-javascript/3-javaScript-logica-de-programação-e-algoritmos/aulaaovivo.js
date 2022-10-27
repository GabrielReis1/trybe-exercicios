// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X

let soma = 0;

for (let index = 1; index <= 50; index += 1) {
    soma += index;
}

console.log(" A soma total de 1 a 50 é:", soma);

// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let cont = 0;

for(let i = 2; i <= 150; i += 1) {
    if (i % 3 === 0){
        cont += 1
    }
}

if (cont === 50) {
    console.log("mensagem secreta")
}

// 5 - Crie um algoritmo que recebe a idade de Carolzita, Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let Carolzita = 25;
let Murilo = 18;
let Baêta = 30;

if(Carolzita < Murilo && Carolzita < Baêta) {
    console.log('Carolzita é a mais nova!');
} else if (Murilo < Carolzita && Murilo < Baêta) {
    console.log('Murilo é o mais novo');
}else if (Baêta < Carolzita && Baêta < Murilo) {
    console.log('Baêta é a mais nova!');
} else {
    console.log('Todos tem a mesma idade!')
}

a