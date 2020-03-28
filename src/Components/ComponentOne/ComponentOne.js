import React from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Actions";

const ComponentOne = props => {
  const counter = useSelector(state => state.counter);
  const text = useSelector(state => state.text.value);

  const dispatch = useDispatch();

  return (
    <div className="ComponentOne">
      <h5>Component One</h5>

      <p>Counter: {counter}</p>
      <p>Text: {text} </p>

      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch(allActions.counterActions.increment())}
      >
        Increase Counter
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => dispatch(allActions.counterActions.decrement())}
      >
        Decrease Counter
      </button>
    </div>
  );
};

export default ComponentOne;
