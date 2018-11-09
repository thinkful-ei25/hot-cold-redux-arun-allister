export const ADD_GUESS = 'ADD_GUESS';
export function addGuess(guess) {
  return {
    type: ADD_GUESS,
    guess
  }
}

export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
export function updateFeedback(feedback) {
  return {
    type: UPDATE_FEEDBACK,
    feedback
  }
}

export const UPDATE_AURAL_STATUS = 'UPDATE_AURAL_STATUS';
export function updateAuralStatus(auralStatus) {
  return {
    type: UPDATE_AURAL_STATUS,
    auralStatus
  }
}

export const RESET_GAME = 'RESET_GAME';
export function resetGame() {
  return {
    type: RESET_GAME
  }
}