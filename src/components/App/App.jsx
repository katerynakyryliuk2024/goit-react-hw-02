import { useState, useEffect } from "react";

import Description from "../Description/Description";
import css from "./App.module.css";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const info = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [data, setData] = useState(() => {
    const savedData = window.localStorage.getItem("saved-data");
    console.log(savedData);

    if (savedData !== null) {
      return JSON.parse(savedData);
    }

    return info;
  });

  const updateFeedback = (feedbackType) => {
    setData({
      ...data,
      [feedbackType]: data[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setData(info);
  };

  const totalFeedback = data.good + data.neutral + data.bad;

  const positive = Math.round((data.good / totalFeedback) * 100);

  useEffect(() => {
    console.log(data);
    window.localStorage.setItem("saved-data", JSON.stringify(data));
  }, [data]);

  return (
    <div className={css.container}>
      <Description />
      <Options
        value={data}
        onBtnClick={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {data.good || data.neutral || data.bad !== 0 ? (
        <Feedback value={data} total={totalFeedback} posAmount={positive} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
