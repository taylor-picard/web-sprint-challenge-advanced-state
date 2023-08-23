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

export function selectAnswer(answer) {
  return({type:SELECT_ANSWER, payload: answer});
 }

export function setMessage(message) {
  return({type:SET_MESSAGE, payload: message});
 }

export function setQuiz(quizState) {
  return({type:SET_QUIZ, payload: quizState});
 }

export function inputChange(value,id) {
  return({type:INPUT_CHANGE, payload: value,id});
 }

export function resetForm() { 
  return({type:RESET_FORM});
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz(null));
    axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      dispatch(setQuiz(res.data))
      }
    )
    .catch(err => console.log(err))
    
  }
}
export function postAnswer(quizId, answerId) {
  return function (dispatch) {
    axios.post(`http://localhost:9000/api/quiz/answer`, {quiz_id: quizId , answer_id: answerId})
      .then(res => {
        dispatch(selectAnswer(null))
        dispatch(setMessage(res.data.message))
      })
      .catch(err => console.log(err))
      .finally(dispatch(fetchQuiz()))
  }
}
export function postQuiz(questionText, rightAnswer, wrongAnswer) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', { question_text: questionText, true_answer_text: rightAnswer, false_answer_text: wrongAnswer })
      .then(res => {
        console.log(res)
        dispatch(setMessage(`Congrats: "${res.data.questionText}" is a great question!`))
        dispatch(resetForm())
      })
      .catch(err => console.log(err))
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
