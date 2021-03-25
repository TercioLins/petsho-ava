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
    nome: 'Sula Manca',
    tipo: 'Cachorro',
    idade: 10,
    raca: 'Manhosa',
    peso: 8,
    tutor: 'maria',
    contato: '(11)98179-4545',
    vacinado: true,
    servicos: ['banho','tosa']
}
];


const ListarPets = () => {
    for(let pet of pets){
    // for (let i=0; i < pets.length; i++){
        // console.log(`${i} - O nome do Pet é : ${pets[i].nome + ' >> ' + pets[i].raca}`);
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca} `)
    }
}
ListarPets();
// console.log(pets)