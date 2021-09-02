export function catchPokemon(pokemon) {
    return { 
        type: "CATCH_POKEMON", 
        payload: pokemon,
    };
  }
  
  export function releasePokemon(pokemon) {
    return {
      type: "REMOVE_POKEMON",
      payload: pokemon,
    };
  }
  
 