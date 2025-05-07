import React from "react";
import styles from "./Button.module.css";

// Reusable Button component
function Button({ text, handler }) {
  return (
    <button
      className={styles.button}
      // When clicked, call handler with the button text as argument
      onClick={() => handler(text)}
    >
      {text}    {/* Display button label */}
    </button>
  );
}

export default Button;
