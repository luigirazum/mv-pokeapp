// Import css styles for our project
import './styles.css';
import addLike from './modules/involapi.js';
import PokemonDisplay from './pokemonDisplay.js';

PokemonDisplay();

const test = async () => addLike(1);

console.log(addLike(1));
// API to work: https://pokeapi.co/
// Involvement API: https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270