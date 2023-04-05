import React, { useState, useEffect } from "react";
import styles from "./clicker.module.scss";

const Clicker = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [stepNumber, setStepNumber] = useState(0);
  const [addNum, setAddNum] = useState("add");
  const [frequencyAutoClick, setFreqAutoclick] = useState(1);
  const [isStartedAutoClick, setStartedAutoClick] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    startAutoClick();

    return stopClick;
  });

  const stepChange = (e) => {
    const {
      target: { value },
    } = e;
    setStepNumber(+value);
  };

  const addNumber = () => {
    if (addNum === "add") {
      setCurrentNumber((oldCurrentNumber) => oldCurrentNumber + stepNumber);
    } else if (addNum === "sub") {
      setCurrentNumber((oldCurrentNumber) => oldCurrentNumber - stepNumber);
    }
  };

  const resultOperand = (e) => {
    const {
      target: { value },
    } = e;
    setAddNum(value);
  };

  const handleAutoClick = (e) => {
    const {
      target: { value },
    } = e;
    setFreqAutoclick(+value);
  };

  const startAutoClick = () => {
    if (!isStartedAutoClick) {
      setStartedAutoClick(true);
      const intervalId = setInterval(addNumber, frequencyAutoClick * 1000);
      setIntervalId(intervalId);
    }
  };

  const stopClick = () => {
    clearInterval(intervalId);
    setStartedAutoClick(false);
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
      <div className={styles.btnContainer}>
        <button className={styles.btnClick} onClick={addNumber}>
          Click
        </button>
        <p className={styles.pStep}>Now Step: {stepNumber}</p>
        <button className={styles.btnClick} onClick={startAutoClick}>
          Autoclicker
        </button>
      </div>
      <div className={styles.containerOperand}>
        <input
          type="radio"
          name="operand"
          value="add"
          onChange={resultOperand}
          defaultChecked
        />

        <label className={styles.labelOperand}>Add</label>

        <input
          type="radio"
          name="operand"
          value="sub"
          onChange={resultOperand}
        />
        <label className={styles.labelOperand}>Sub</label>
      </div>
      <div className={styles.numContainer}>
        <p>Frequency for Autoclicker</p>
        <input
          className={styles.inputAutoClicker}
          type="text"
          onChange={handleAutoClick}
        />

        <button onClick={stopClick} className={styles.stopAutoClicker}>
          Stop Auto Clicker
        </button>
      </div>
    </div>
  );
};

export default Clicker;
