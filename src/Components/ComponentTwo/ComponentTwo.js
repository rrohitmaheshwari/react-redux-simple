import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Actions";

const ComponentTwo = props => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);

  const [valueChange, setValueChange] = useState("");

  const handleSetText = () => {
    dispatch(allActions.textActions.setText(valueChange));
  };

  const handleClearText = () => {
    dispatch(allActions.textActions.clearText());
    setValueChange("");
  };

  return (
    <div className="ComponentTwo">
      <p>ComponentTwo</p>
      <input
        id="useState"
        onChange={event => setValueChange(event.target.value)}
        type="text"
        value={valueChange}
      />
      <button type="submit" onClick={handleSetText}>
        Set Redux
      </button>
      <button type="submit" onClick={handleClearText}>
        Clear Redux
      </button>

      <h4>Counter: {counter}</h4>
    </div>
  );
};

export default ComponentTwo;
