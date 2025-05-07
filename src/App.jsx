import React, { useState } from "react";
import Button from "./components/Button";
import styles from "./App.module.css";

function App() {
  // State to store the final evaluated result (e.g., 42)
  const [evaluatedValue, setEvaluatedValue] = useState("");

  // State to store the current expression (e.g., "5+7*2")
  const [expression, setExpression] = useState("");

  // 2D array representing calculator buttons arranged in rows
  const buttonGrid = [
    ["7", "8", "9", "+"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "*"],
    ["C", "0", "=", "/"], // C = Clear, = = Evaluate
  ];

  // Handles all button clicks
  function changeHandler(button) {
    if (button == "=") {
      // If expression is empty, show error
      if (!expression) {
        setEvaluatedValue("Error");
        return;
      }
      // Use eval to calculate the result (Note: not recommended for production)
      setEvaluatedValue(eval(expression));
    } else if (button == "C") {
      // Reset everything if Clear is clicked
      setEvaluatedValue("");
      setExpression("");
    } else {
      // Append the clicked button to the expression
      setExpression((prev) => prev + button);
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1>React Calculator</h1>
      {/* Read-only input to show current expression */}
      <input
        type="text"
        name="expression"
        id="expression"
        className={styles.expression}
        readOnly
        value={expression}
      />
      {/* Display evaluated value */}
      <h2>{evaluatedValue}</h2>

      {/* Render calculator grid */}
      <div className={styles.calculator}>
        {buttonGrid.map((row, rowIdx) => (
          <div key={rowIdx} className={styles.row}>
            {row.map((button, colIdx) => (
              <Button
                key={`${button}-${rowIdx}-${colIdx}`} // Unique key per button
                text={button}   // Button text (e.g., "7", "+", "C")
                handler={changeHandler} // Pass handler directly
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
