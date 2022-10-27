// Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

const angle1 = 55;
const angle2 = 100;
const angle3 = 25;
let sum = angle1 + angle2 + angle3;

let anglePositives = angle1 > 0 && angle2 > 0 && angle3 > 0; 

if (anglePositives ) {
    if (sum === 180){
        console.log('true');
    }else {
        console.log('false')
    };
} else {
    console.log('Error: invalid angle!')
};   
