/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "./components/Button";
import styles from "./App.module.css";

function App() {
  const [leftOperand, setLeftOperand] = useState("");
  const [rightOperand, setRightOperand] = useState("");
  const [evaluatedValue, setEvaluatedValue] = useState("");
  const [expression, setExpression] = useState("");

  const buttonGrid = [
    ["7", "8", "9", "+"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "*"],
    ["C", "0", "=", "/"],
  ];

  function changeHandler(e) {
    if (e.target.innerText == "=") {
      if (!expression) {
        setEvaluatedValue("Error");
        return;
      }
      setEvaluatedValue(eval(expression));
    } else if (e.target.innerText == "C") {
      setEvaluatedValue("");
      setExpression("");
    } else {
      setExpression((prev) => prev + e.target.innerText);
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1>React Calculator</h1>
      <input
        type="text"
        name="expression"
        id="expression"
        className={styles.expression}
        readOnly
        value={expression}
      />
      <h2>{evaluatedValue}</h2>
      <div className={styles.calculator}>
        {buttonGrid.map((row, rowIdx) => (
          <div key={rowIdx} className={styles.row}>
            {row.map((button, colIdx) => (
              <Button
                key={`${button}-${rowIdx}-${colIdx}`}
                text={button}
                handler={(e) => changeHandler(e)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
