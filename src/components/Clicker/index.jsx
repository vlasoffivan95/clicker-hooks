import React, { useState } from "react";
import styles from "./clicker.module.scss";

const Clicker = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [stepNumber, setStepNumber] = useState(0);
  const [addNum, setAddNum] = useState(true);

  const stepChange = (e) => {
    const {
      target: { value },
    } = e;
    setStepNumber(+value);
  };

  const addNumber = () => {
    if (addNum) {
      setCurrentNumber((oldCurrentNumber) => oldCurrentNumber + stepNumber);
    }
  };

  return (
    <div className={styles.clickerContainer}>
      <div className={styles.numContainer}>
        <p className={styles.pNumber}>Current Num:</p>
        <p className={styles.currentNum}> {currentNumber}</p>
        <p className={styles.pNumber}>Step:</p>
        <input
          className={styles.inputStep}
          type="text"
          onChange={stepChange}
        ></input>
      </div>
      <button className={styles.btnClick} onClick={addNumber}>
        Click
      </button>
    </div>
  );
};

export default Clicker;
