// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
    name: 'marta',
    lastName: 'Silva',
    age: 34,
    medials: {
        golden: 2,
        silver: 3
    }
}

player['fullName'] = player.name + ' ' + player.lastName;

console.log('A jogadora ' + player['fullName']+ ' tem ' + player.age + ' anos de idade,' + ' possui ' + player.medials.golden + ' medalhas de ouro e ' + player.medials.silver + ' medalhas de prata.');