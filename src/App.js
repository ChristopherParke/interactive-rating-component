import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Rating from "./features/rating/Rating";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.componentContainer}>
      <Rating />
    </div>
  );
}

export default App;
