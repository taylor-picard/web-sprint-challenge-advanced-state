// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { CLOCKWISE, COUNTERCLOCKWISE, SELECT_ANSWER, SET_MESSAGE, SET_QUIZ, RESET_FORM, INPUT_CHANGE } from './action-creators';

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case CLOCKWISE:
      return action.payload

    case COUNTERCLOCKWISE:
      return action.payload
  
    default: return(state);
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case SET_QUIZ:
      return {

      }
    default: return(state);
  }
  
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case SELECT_ANSWER:
      return{

      }
    default: return(state);
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case SET_MESSAGE:
      return{

      }
    default: return(state);
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case INPUT_CHANGE:
      return{

      }
    case RESET_FORM:
      return{

      }
    default: return(state);
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
