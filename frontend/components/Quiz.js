import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { selectAnswer, setQuiz, fetchQuiz } from '../state/action-creators'

export function Quiz(props) {

  useEffect(()=> props.fetchQuiz(), []);

  
  return (
    <div id="wrapper">
      {// quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quizState !== null ? (
          <>
          {console.log(props.quizState)}
            <h2>{props.quizState.question}</h2>

            <div id="quizAnswers">
              <div className= {`answer ${props.answerState == props.quizState.answers[0].id ? `selected` : ''}`}>
                {props.quizState.answers[0].text}
                <button>
                  {`${props.answerState == props.quizState.answers[0].id ? 'Selected' : 'Select'}`}
                </button>
              </div>

              <div className={`answer ${props.answerState == props.quizState.answers[1].id ? `selected` : ''}`}>
              {props.quizState.answers[1].text}
                <button>
                {`${props.answerState == props.quizState.answers[1].id ? 'Selected' : 'Select'}`}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = state => {
  return{
    quizState: state.quiz,
    answerState: state.selectedAnswer
  }
}

export default connect(mapStateToProps, {setQuiz, selectAnswer, fetchQuiz})(Quiz);


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