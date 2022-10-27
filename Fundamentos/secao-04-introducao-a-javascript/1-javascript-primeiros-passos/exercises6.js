// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

const pecaXadrez = 'Torre';

switch (pecaXadrez.toLowerCase()) {
    case 'rei' :
        console.log('O Rei move-se apenas uma casa em qualquer direção.');
        break;
    case 'rainha':
        console.log('A Rainha move-se na diagonal, vertical e horizontal, porém quantas casas quiser.');
        break;
    case 'torre': 
        console.log('A Torre move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
        break;
    case 'bispo' :
        console.log('O Bispo move-se na diagonal, quantas casas quiser');
        break;
    case 'cavalo' :
        console.log(' O Cavalo pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é em "L”.');
        break;
    case 'peão' : 
        console.log('O peão move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.');
    break;
};