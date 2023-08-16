import React from 'react';
import { useReducer } from 'react';
import { moveClockwise, moveCounterClockwise, selectAnswer } from '../state/action-creators';
import reducer from '../state/reducer';

export default function Wheel(props) {
  const initialState = {
    position: 0,
    active: true
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleClockwise = () => {
    dispatch(moveClockwise());
  }
  const handleCounterCW = () => {
    dispatch(moveCounterClockwise(state));
  }
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${state.active ? 'active': ''}`} style={{ "--i": 0 }}>{state.active ? 'B' : ''}</div>
        <div className={`cog ${state.active ? 'active': ''}`} style={{ "--i": 1 }}>{state.active ? 'B' : ''}</div>
        <div className={`cog ${state.active ? 'active': ''}`} style={{ "--i": 2 }}>{state.active ? 'B' : ''}</div>
        <div className={`cog ${state.active ? 'active': ''}`} style={{ "--i": 3 }}>{state.active ? 'B' : ''}</div>
        <div className={`cog ${state.active ? 'active': ''}`} style={{ "--i": 4 }}>{state.active ? 'B' : ''}</div>
        <div className={`cog ${state.active ? 'active': ''}`} style={{ "--i": 5 }}>{state.active ? 'B' : ''}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={()=>handleCounterCW}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={()=>handleClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
