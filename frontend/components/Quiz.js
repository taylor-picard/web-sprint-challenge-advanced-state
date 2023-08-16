import React from 'react'
import { connect } from 'react-redux'
import { selectAnswer, setQuiz } from '../state/action-creators'

export function Quiz(props) {
  return (
    <div id="wrapper">
      {
        props.quizState !== null
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
         ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  `${props.answerState}`
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
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
    quizState: state,
    answerState: state
  }
}

export default connect(mapStateToProps, {setQuiz, selectAnswer})(Quiz);