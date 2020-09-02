console.log(`Working with lists.`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //Adicionando um item (Curitiba) a lista.

console.log(`Destinos: ${listaDeDestinos}`);

listaDeDestinos.splice(1,1); //Removendo item no indice 1, uma vez

console.log(`Destinos: ${listaDeDestinos}`);

console.log(`Destinos: ${listaDeDestinos[1]}`); //Exibir apenas o item no indice 1 da lista