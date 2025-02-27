import { useState, useEffect } from "react";

import Description from "../Description/Description";
import css from "./App.module.css";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

export default function App() {
  const info = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <div className={css.container}>
      <Description />
      <Options value={info} />
      <Feedback value={info} />
    </div>
  );
}
