console.log(`\nWorking with loops.`);

const destinationsList = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const buyerAge = 15;
const buyerAccompanied = false;
let purchasedTicket = false;
const destination = "Salvador";
let existentDestination = false;

console.log(`\nDestinos: ${destinationsList}\n`);


const canBuy = buyerAge >= 18 || buyerAccompanied == true;

let cont = 0;

console.log(`Destino selecionado: ${destination}`)

while(cont<3){
    if (destinationsList[cont] == destination){
        console.log("Destino existe");
        existentDestination = true;
        break;
    } else {
        console.log("Destino não existe");
    }
    cont++;
}

 console.log("Destino existe: ", existentDestination);

 if(canBuy && existentDestination){
     console.log("Boa viagem");
 } else {
     console.log("Erro")
 }

 for(let i=0;i<3;i++){
    if (destinationsList[i] == destination){
        console.log("Destino existe");
        existentDestination = true;
        break;
    } else {
        console.log("Destino não existe");
    }
}