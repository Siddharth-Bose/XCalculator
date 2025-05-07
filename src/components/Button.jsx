import React from "react";
import styles from "./Button.module.css";

function Button({ text, handler }) {
  return (
    <button
      className={styles.button}
      onClick={(e) => handler(e)}
    >
      {text}
    </button>
  );
}

export default Button;
