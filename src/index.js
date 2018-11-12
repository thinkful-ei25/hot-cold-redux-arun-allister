import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {resetGame, addGuess, updateFeedback, updateAuralStatus} from './actions';
import reducer from './reducers';

import './reset.css';
import './index.css';

import Game from './components/game';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

console.log(store.getState());
store.dispatch(addGuess(5));
console.log(store.getState());
store.dispatch(updateFeedback('Winner, winner, chicken dinner!'));
console.log(store.getState());
store.dispatch(updateAuralStatus('You won!'));
console.log(store.getState());
store.dispatch(resetGame());
console.log(store.getState());
