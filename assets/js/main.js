const offset = 0;
const limit= 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&imit=${limit}`

//fetch -- por padrao usa o get -->esto retorna una promise para lidiar con o procesamento asincronismo(executado mas o resultado nao e inmediato) e uma promesa de un resultado
//cuando venga la respuesta de servidor ahi el va a dar la response, si tuviera algo despues saldria el resulado antes


function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
    <span class="numero">#001</span>
    <span class="nome">${pokemon.name}</span>
    <div class="detail">
        <ol class="tipos">
            <li class="tipo">grass</li>
            
            <li class="tipo">poison</li>
        </ol>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
         alt="${pokemon.name}" >
    
    </div>
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList')


fetch(url)
.then( (response) => response.json())//transforma en json

.then ((jsonBody) => jsonBody.results)
.then ((pokemons) =>{
    //debugger
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        
        pokemonList.insertAdjacentHTML('beforeend', convertPokemonToLi(pokemon))
        //este metdo e melhor pois ele e mas eficiente ao nao recriar todos os elementos existentes
 
    }
} )
.catch((error) => console.log(error)
)

