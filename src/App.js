import './App.css';
import GlobalStyle from './theme/globalStyle';
import PokemonList from './containers/PokemonList'
import PokemonDetail from './containers/PokemonDetail'
import MyPokemonList from './containers/MyPokemonList'
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      
       <Router>
          <GlobalStyle/>
      <Switch>
          <Route exact path="/" component={PokemonList}/>
          <Route path="/details/:name" component={PokemonDetail}/>
          <Route exact path="/mypokemons" component={MyPokemonList}/>
      </Switch>
      </Router>
  );
}

export default App;