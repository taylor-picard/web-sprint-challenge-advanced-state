import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { setQuiz, selectAnswer, fetchQuiz, postAnswer } from '../state/action-creators'

export function Quiz(props) {
  const ans0 = props.quiz ? props.quiz.answers[0] : null;
  const ans1 = props.quiz ? props.quiz.answers[1] : null;
  const disabled = props.selectedAnswer ? false : true;

    useEffect(()=>{ 
    props.fetchQuiz()}, []);

  return (
    <div id="wrapper">
      {// quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz !== null ? (
          <>
        
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className= {`answer ${props.selectedAnswer == ans0.answer_id ? `selected` : ''}`}>
                {ans0.text}
                <button onClick={()=> props.selectAnswer(ans0.answer_id)}>
                  {`${props.selectedAnswer == ans0.answer_id ? 'SELECTED' : 'Select'}`}
                </button>
              </div>
            
              <div className={`answer ${props.selectedAnswer == ans1.answer_id ? `selected` : ''}`}>
              {ans1.text}
                <button onClick={()=> props.selectAnswer(ans1.answer_id)}>
                {`${props.selectedAnswer == ans1.answer_id ? 'SELECTED' : 'Select'}`}
                </button>
              </div>
            </div>
            <button id="submitAnswerBtn" onClick={()=> props.postAnswer(props.quiz.quiz_id, props.selectedAnswer)} disabled={disabled}>Submit answer</button>

          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = state => {
  return{
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    message: state.infoMessage
  }
}

export default connect(mapStateToProps, {setQuiz, selectAnswer, fetchQuiz, postAnswer})(Quiz);


// {quiz_id: 'jiejz', question: 'An ES6 module is a...', answers: Array(2)}
// answers
// : 
// Array(2)
// 0
// : 
// {answer_id: 'uljkj', text: 'JS file'}
// 1
// : 
// {answer_id: 'tkiff', text: 'Fruit fly'}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)
// question
// : 
// "An ES6 module is a..."
// quiz_id
// : 
// "jiejz"