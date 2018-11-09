import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {resetGame, addGuess, updateFeedback, updateAuralStatus} from './actions';
import reducer from './reducers';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

const store = createStore(reducer);
console.log(store.getState());
store.dispatch(addGuess(5));
console.log(store.getState());
store.dispatch(updateFeedback('Winner, winner, chicken dinner!'));
console.log(store.getState());
store.dispatch(updateAuralStatus('You won!'));
console.log(store.getState());
store.dispatch(resetGame());
console.log(store.getState());