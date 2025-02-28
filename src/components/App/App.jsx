import { useState } from "react";

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

  const [data, setData] = useState(info);

  const updateFeedback = (feedbackType) => {
    setData({
      ...data,
      [feedbackType]: data[feedbackType] + 1,
    });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options value={info} onBtnClick={updateFeedback} />
      <Feedback value={info} />
    </div>
  );
}
