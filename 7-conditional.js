console.log(`Working with conditional.`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const buyerAge = 15;
const buyerAccompanied = true;
const purchasedTicket = true;

console.log(`Destinos: ${listaDeDestinos}`);

// if (buyerAge >= 18) {
//     console.log(`Comprador maior de idade`);
//     listaDeDestinos.splice(1, 1); //Removendo item no indice 1, uma vez
//     console.log(`Destino reservado`);
// } else if (buyerAccompanied) {
//     console.log(`O comprador é menor de idade porém está acompanhado`);
//     listaDeDestinos.splice(1, 1); //Removendo item no indice 1, uma vez
//     console.log(`Destino reservado`);
// } else {
//     console.log(`Destino não reservado`);
//     console.log(`O comprador não é maior de idade...`);
// }

if (buyerAge >= 18 || buyerAccompanied) {
    console.log(`Comprador maior de idade ou está acompanhado`);
    listaDeDestinos.splice(1, 1); //Removendo item no indice 1, uma vez
    console.log(`Destino reservado`);
} else {
    console.log(`Destino não reservado`);
    console.log(`O comprador não é maior de idade e não está acompanhado...`);
}

console.log("\n\nEmbarque: \n");
if(purchasedTicket && (buyerAge >= 18 || buyerAccompanied)){
    console.log(`Boa viajem`)
} else {
    console.log(`Você não pode embarcar...`);
}

console.log(`Destinos: ${listaDeDestinos}`);