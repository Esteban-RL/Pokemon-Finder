const input = document.getElementById("search-input");
const buscarP = document.getElementById("search-button");
const id = document.getElementById('pokemon-id');
const pokemon = document.getElementById('pokemon-name');
const sprite = document.getElementById('sprite-container');
const tipos = document.getElementById('types');
const altura = document.getElementById('height');
const peso = document.getElementById('weight');
const hp = document.getElementById('hp');
const ataque = document.getElementById('attack');
const defensa = document.getElementById('defense');
const ataqueEspecial = document.getElementById('special-attack');
const defensaEspecial = document.getElementById('special-defense');
const velocidad = document.getElementById('speed');


const buscarPokemon = async () => {
  try {
    const pokemonNameOrID = input.value.toLowerCase();
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrID}`);
    const data = await response.json();

    pokemon.textContent = `${data.name.toUpperCase()}`;
    id.textContent = `#${data.id}`;
    peso.textContent = `Weight: ${data.weight}`;
    altura.textContent = `Height: ${data.height}`;
    sprite.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">`;

tipos.innerHTML = data.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`);

    hp.textContent = data.stats[0].base_stat;
    ataque.textContent = data.stats[1].base_stat;
    defensa.textContent = data.stats[2].base_stat;
    ataqueEspecial.textContent = data.stats[3].base_stat;
    defensaEspecial.textContent = data.stats[4].base_stat;
    velocidad.textContent = data.stats[5].base_stat;
    
  } catch (err) {
    alert('Pokémon not found');
    console.log(`Pokémon not found: ${err}`);
  }
};

//BOTON
buscarP.addEventListener('click',()=> {
buscarPokemon();
input.value="";
});
