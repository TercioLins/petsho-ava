const moment = require('moment');
const fs = require('fs');
let bancoDados = fs.readFileSync('./bancoDados.json');

bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
    //conversão de objeto javascript para JSON
    let petsAtualizado = JSON.stringify(bancoDados);
    //atualização do arquivo bancoDados.json
    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
}

const listarPets = () => {

    bancoDados.pets.forEach((pet) => {

        console.log(`${pet.nome}, ${pet.idade} anos, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado'}`);
    
        pet.servicos.forEach((servico) => {
            console.log(`${servico.data} - ${servico.nome}`);
        })
    })
}
// const listarPets = () => {
//     for (let pet of bancoDados.pets) {
//         //template string
//         console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado'}`);

//         for (const servico of pet.servicos) {
//             console.log(`${servico.data} - ${servico.nome}`);
//         }
//     }
// }

// const listarPets = () => {
    
//     for (let pet of bancoDados.pets){
//         console.log(`${pet.nome}, ${pet.idade} ${anosDeIdade(pet)} , ${pet.tipo}, raça ${pet.raca}.`);

//         for (const servico of pet.servicos) {
//             console.log(`Serviço: ${servico.nome} | Realizado em: ${servico.data}`);
//         }
//         if (pet.vacinado ? console.log('Está vacinado!') : console.log('Não vacinado!'));
//         console.log('-----------------------------')
//     }
// }

const vacinarPet = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`);
    }
}

const campanhaVacina = () => {
    console.log("Campanha de vacina 2020");
    console.log("vacinando...");

    let petVacinadosCampanha = 0;
    for (let pet of bancoDados.pets) {
        if (!pet.vacinado) {
            vacinarPet(pet);
            petVacinadosCampanha++;
        }
    }
    console.log(`${petVacinadosCampanha} pets foram vacinados nessa campanha!`);
};

const adicionarPet = novoPet => {
        bancoDados.pets.push(novoPet);
        atualizarBanco();
        console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}

const darBanhoPet = pet => {
    pet.servicos.push({
        'nome':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = pet => {
    pet.servicos.push({
        'nome':'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = pet => {
    pet.servicos.push({
        'nome':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas aparadas!`);
};

const atenderCliente = (pet, servico) => {
    console.log(`Olá, iremos cuidar do ${pet.nome}`)
    servico;
}

const buscarPet = (nomePet) => {

    let petEncontrado = bancoDados.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
}

const filtrarTipoPet = (tipoPet) => {

    let petsEncontrados = bancoDados.pets.filter((pet) => {
        return pet.tipo == tipoPet;
    });

    return petsEncontrados;
}

const clientePremium = (pet) => {
    let nServicos = bancoDados.pets.reduce((total, pet) => {
        return total + pet.servicos.length;
    })

    if (nServicos > 5) {
        console.log(`Olá, ${pet.nome}! Você é um cliente especial e ganhou um descontão!`);
    } else {
        console.log(`Olá, ${pet.nome}! Você ainda não tem descontos disponiveis!`);
    }
}

// darBanhoPet(bancoDados.pets[0]);

// console.log("-----------")
listarPets();

// adicionarPet({
//     "nome": "Romarinho",
//     "tipo": "cachorro",
//     "idade": 3,
//     "raca": "American",
//     "peso": 28,
//     "tutor": "Bruno",
//     "contato": "(11) 99999-9999",
//     "vacinado": true,
//     "servicos": []
//});