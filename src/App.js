import './App.css';
import GlobalStyle from './theme/globalStyle';
import PokemonList from './containers/PokemonList'
import PokemonDetail from './containers/PokemonDetail'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      {/* <PokemonList></PokemonList> */}
        <PokemonDetail/>
    </div>
  );
}

export default App;
