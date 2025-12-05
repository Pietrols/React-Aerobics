import { useState } from "react";
import React from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-gray-800 rounded - xl shadow-2xl text-center">
      <h1 className="text-3xl font-bold mb-4 text-white">
        Simple React Counter
      </h1>
      <p className="text-gray-400 mb-6">Current count value:</p>
      <div className="text-6xl font-extrabold mb-8 text-white">{count}</div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={decrement}
          className="px-6 py-3 bg-blue-200 font-bold rounded-lg shadow-md hover:bg-blue-300 transform transition duration-150 hover:scale-105"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="px-6 py-3 bg-blue-200 font-bold rounded-lg shadow-md hover:bg-blue-300 transform transition duration-150 hover:scale-105"
        >
          Increment
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-200 font-bold rounded-lg shadow-md hover:bg-blue-300 transform transition duration-150 hover:scale-105"
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
