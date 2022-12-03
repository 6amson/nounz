import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Landingpage from "./components/Landingpage";
import CreateGame from "./components/CreateGame";
import JoinGame from "./components/JoinGame";
import PlayGame from './components/PlayGame';
import ScoreGame from './components/ScoreGame'
import JoinPublicGame from './components/JoinPublicGame'
import Test from "./components/Test"
import JoinPrivateGame from "./components/JoinPrivateGame";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Homepage /> 
          </Route>
          <Route path='/landing'>
            <Landingpage />
          </Route>
          <Route path='/creategame'>
            <CreateGame />
          </Route>
          <Route path='/joingame'>
            <JoinGame />
          </Route>
          <Route path='/playgame'>
            <PlayGame />
          </Route>
          <Route path='/test'>
            <Test />
          </Route>
          <Route path='/scoregame'>
            <ScoreGame />
          </Route>
          <Route path='/joinpublicgame'>
            <JoinPublicGame />
          </Route>
          <Route path='/joinprivategame'>
            <JoinPrivateGame />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
