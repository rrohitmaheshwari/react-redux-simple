import React from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Actions";

const ComponentOne = props => {
  const counter = useSelector(state => state.counter);
  const text = useSelector(state => state.text.value);

  const dispatch = useDispatch();

  return (
    <div className="ComponentOne">
      <h1>Component One</h1>
      <h4>Counter: {counter}</h4> <h4>Text: {text}</h4>
      <button onClick={() => dispatch(allActions.counterActions.increment())}>
        Increase Counter
      </button>
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>
        Decrease Counter
      </button>
    </div>
  );
};

export default ComponentOne;
