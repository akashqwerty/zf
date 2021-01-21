import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.scss';
import PlayerData from './Container/Player/index';
import {store}  from './store/store'
import formActionCreators from './store/CharacterList/action';

store.dispatch(formActionCreators.getPlayerList());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <PlayerData />
          </Route>
          <Route path="/selected">
            {/* <TeamList /> */}
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
