// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function sum(num1, num2) {
    return num1 + num2
}

function subtraction(num1, num2) {
    return num1 - num2
}

function multiplication(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    return num1 / num2
}

function module(num1, num2) {
    return num1 % num2
}

console.log(sum(4, 6))
console.log(subtraction(13, 5))
console.log(multiplication(9, 7))
console.log(division(24, 6))
console.log(module(32, 3))

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNumero(num1, num2) {
    if (num1 > num2) {
        return num1 + ' é maor que ' + num2
    } else if (num2 > num1) {
        return num2 + ' é maior que ' + num1
    } else {
        return num1 + ' e ' + num2 + ' são iguais!'
    }
}

console.log(maiorNumero(7, 7));

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorNumeroDeTres(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1 + ' é maor que ' + num2 + ' e ' + num3
    } else if (num2 > num1 && num2 > num3) {
        return num2 + ' é maior que ' + num1 + ' e ' + num3
    } else if (num3 > num1 && num3 > num2) {
        return num3 + ' é maior que ' + num1 + ' e ' + num2
    } else {
        return ' os numeros: ' + num1 + ', ' + num2 + ' e ' + num3 + ' são iguais!'
    }
}

console.log(maiorNumeroDeTres(2, 9, 6));

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function valores(valor) {
    if (valor > 0) {
        return valor + 'positive!';
    } else if (valor < 0) {
        return 'nagative!';
    } else {
        return 'zero!';
    }
}

console.log(valores(0))

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

function calcularAngulo( num1, num2, num3) {
    let somaAgulos = num1 + num2 + num3;
    let anguloPositivo = num1 > 0 && num2 > 0 && num3 > 0;

    if (anguloPositivo) {
        if (somaAgulos === 180) {
            return true;
        } else {
            return false;
        }
    } else {
        return 'Error! Ângulo invalido!'
    }
}

console.log(calcularAngulo(-53, 100, 25));

