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
    const guess = parseInt(action.guess, 10);
    if (isNaN(guess)) {
      return Object.assign({}, state, {
        feedback: 'Please enter a valid number',
      });
    }

    const difference = Math.abs(guess - state.correctAnswer);
    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    return {
      ...state,
      guesses: [...state.guesses, guess],
      feedback,
    }
  } else if (action.type === UPDATE_FEEDBACK) {
    return {
      ...state, 
      feedback: action.feedback
    }
  } else if (action.type === UPDATE_AURAL_STATUS) {
    
    const { guesses, feedback } = state;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }
    return {
      ...state, 
      auralStatus
    }
  } else if (action.type === RESET_GAME) {
    return {
      ...initialState,
      correctAnswer: generateCorrectAnswer()
    };
  }
  return state;
}
