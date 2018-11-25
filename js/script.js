window.addEventListener("DOMContentLoaded", init);

function init() {
	
const pokemons = [
		{
			name:"bulbasaur",
			type:"grass"
		},
		{
			name:"squirtle",
			type:"water"
		},
		{
			name:"charmander",
			type:"fire"
		}
	];



const pokemonnamelist    = document.getElementById("pokemonnames");
const index = 0;

index +1;

for (let listofpokemon of pokemons) {
	
 const listEl = document.createElement("ul");
 listEl.textContent = listofpokemon.name;
  pokemonnamelist.addEventListener("click", getPokemonData);
  listEl.setAttribute("id", index);
  pokemonnamelist.appendChild(listEl);
}


function getPokemonData(event){

console.log(event.target);


}


















}