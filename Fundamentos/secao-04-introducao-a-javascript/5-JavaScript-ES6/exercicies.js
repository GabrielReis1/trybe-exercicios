// Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

// 🚀 Transforme a função numeroAleatorio em uma arrow function;

// function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

const nomeAleatorio = () => Math.random();

console.log(nomeAleatorio());

// Transforme a função hello em uma arrow function;

// function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
//   console.log(hello(nome));

const hello = (nome) => `Olá, ${nome}`;

console.log(hello('Ivan'));

// Transforme;

// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));

const nomeCompleto = (nome ,sobrenome) => `${nome} ${sobrenome}`;

console.log(nomeCompleto('Ivan', 'Pires'));

// Altere a expressão if/else utilizando ternary operator;

// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

let speed = 80;

const speedCar = (speed) => (
  speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`);

console.log(speedCar(speed));