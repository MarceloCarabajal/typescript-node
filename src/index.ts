import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).custonName = 'Pikachu';
// console.log(charmander.savePokemonToDB(50000));

charmander.publicApi = 'https://marce-carabajal.com'
console.log(charmander);

