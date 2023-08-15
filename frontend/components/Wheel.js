import React from 'react';
import { useReducer } from 'react';
import { moveClockwise, moveCounterClockwise, selectAnswer } from '../state/action-creators';
import reducer from '../state/reducer';

export default function Wheel(props) {
  const initialState = {
    position: 0,
    active: false
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleClockwise = () => {
    dispatch(moveClockwise());
  }
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={{handleClockwise}}>Counter clockwise</button>
        <button id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}
