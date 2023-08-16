// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios";

export const CLOCKWISE = 'CLOCKWISE';
export const COUNTERCLOCKWISE = 'COUNTERCLOCKWISE';
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_QUIZ = 'SET_QUIZ';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const RESET_FORM = 'RESET_FORM';

export function moveClockwise(newIndex) {
  return({type: CLOCKWISE, payload: newIndex});
 }

export function moveCounterClockwise(newIndex) {
  return({type:COUNTERCLOCKWISE, payload: newIndex});
 }

export function selectAnswer() {
  return({type:SELECT_ANSWER});
 }

export function setMessage() {
  return({type:SET_MESSAGE});
 }

export function setQuiz() {
  return({type:SET_QUIZ});
 }

export function inputChange() {
  return({type:INPUT_CHANGE});
 }

export function resetForm() { 
  return({type:RESET_FORM});
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
