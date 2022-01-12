import PropTypes from "prop-types";
import React, { useState } from "react";

const CounterApp = ({ values }) => {
  const [counter, setCounter] = useState(values);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSub = () => {
    setCounter(counter -1);
  };
  const handleRestart = () => {
    setCounter(values);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleSub}>-1</button>
      <button onClick={handleRestart}>Reset</button>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  values: PropTypes.number.isRequired,
};
CounterApp.defaultProps = {
  values: 0,
};

export default CounterApp;
