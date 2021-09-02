const initialState = {
    myPokemons: [],
    isLoading: true,
    isError: false,
    error: null
};

export const myPokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CATCH_POKEMON":
            const pokemons = JSON.parse(localStorage.getItem('myPokemons'))
            let res = [...pokemons, action.payload];
            localStorage.setItem('myPokemons', JSON.stringify(res));
            return { ...state, myPokemonList: res, isLoading: false };
        case "REMOVE_POKEMON":
            let newArr = state.myPokemonList?.filter(e => e.nickname !== action.payload);
            localStorage.setItem('myPokemons', JSON.stringify(newArr));
            return { ...state, myPokemons: newArr, isLoading: false };
        default:
            return state;
    };
};