const nomepetshop = 'PETSHOP AVANADE';
let pets = [{
    nome: 'Ringo',
    tipo: 'cachorro',
    idade: 5,
    raca: 'Vira-lata',
    peso: 8,
    tutor: 'joao',
    contato: '(11)98899-4545',
    vacinado: true,
    servicos: ['banho','tosa']
},{
    nome: 'Snoopy',
    tipo: 'cachorro',
    idade: 2,
    raca: 'Beagle',
    peso: 8,
    tutor: 'joao',
    contato: '(11)98899-4545',
    vacinado: true,
    servicos: ['banho','tosa']
},
{
    nome: 'Bob Marley',
    tipo: 'gato',
    idade: 1,
    raca: 'Siames',
    peso: 8,
    tutor: 'maria',
    contato: '(11)98179-4545',
    vacinado: true,
    servicos: ['banho','tosa']
}
];


const ListarPets = () => {
    for (let i=0; i < pets.length; i++){
        console.log('   ' + pets[i].nome + ' : ' + pets[i].raca);
    }
}
ListarPets();
// console.log(pets)