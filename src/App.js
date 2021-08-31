import './App.css';
import GlobalStyle from './theme/globalStyle';
import PokemonList from './containers/PokemonList'
import PokemonDetail from './containers/PokemonDetail'
import MyPokemonList from './containers/MyPokemonList'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      {/* <PokemonList/> */}
      <MyPokemonList/>
      {/* <PokemonDetail/> */}
    </div>
  );
}

export default App;
