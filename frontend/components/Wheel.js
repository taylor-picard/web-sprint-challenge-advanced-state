import React from 'react';
import { moveClockwise, moveCounterClockwise} from '../state/action-creators';
import { connect } from 'react-redux';

export function Wheel(props) {
  
  const handleClockwise = () => {
    (moveClockwise());
  }
  const handleCounterCW = () => {
   (moveCounterClockwise());
  }
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${props.index === 0 ? 'active': ''}`} style={{ "--i": 0 }}>{props.index === 0 ? 'B' : ''}</div>
        <div className={`cog ${props.index === 1 ? 'active': ''}`} style={{ "--i": 1 }}>{props.index === 1 ? 'B' : ''}</div>
        <div className={`cog ${props.index === 2 ? 'active': ''}`} style={{ "--i": 2 }}>{props.index === 2 ? 'B' : ''}</div>
        <div className={`cog ${props.index === 3 ? 'active': ''}`} style={{ "--i": 3 }}>{props.index === 3 ? 'B' : ''}</div>
        <div className={`cog ${props.index === 4 ? 'active': ''}`} style={{ "--i": 4 }}>{props.index === 4 ? 'B' : ''}</div>
        <div className={`cog ${props.index === 5 ? 'active': ''}`} style={{ "--i": 5 }}>{props.index === 5 ? 'B' : ''}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={()=>handleCounterCW}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={()=>handleClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    index: state.wheel
  }
}

export default connect(mapStateToProps)(Wheel)