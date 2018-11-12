import { connect } from 'react-redux';
import React from 'react';

import './guess-list.css';

function GuessList(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    guesses: state.guesses,
  };
}

export default connect(mapStateToProps)(GuessList);
