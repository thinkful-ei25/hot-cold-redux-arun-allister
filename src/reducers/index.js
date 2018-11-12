import { ADD_GUESS, UPDATE_FEEDBACK ,UPDATE_AURAL_STATUS, RESET_GAME, addGuess } from '../actions';

const initialState = {
  guesses: [],
  feedback: '',
  auralStatus: '',
  correctAnswer: generateCorrectAnswer()
}

function generateCorrectAnswer() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function reducer(state=initialState, action) {
  if (action.type === ADD_GUESS) {
    return {
      ...state,
      guesses: [...state.guesses, action.guess]
    }
  } else if (action.type === UPDATE_FEEDBACK) {
    return {
      ...state, 
      feedback: action.feedback
    }
  } else if (action.type === UPDATE_AURAL_STATUS) {
    return {
      ...state, 
      auralStatus: action.auralStatus
    }
  } else if (action.type === RESET_GAME) {
    return {
      ...initialState,
      correctAnswer: generateCorrectAnswer()
    };
  }
  return state;
}
