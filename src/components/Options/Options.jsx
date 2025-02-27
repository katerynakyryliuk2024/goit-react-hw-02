import { useState, useEffect } from "react";

export default function Options({ value }) {
  const [data, setData] = useState(value);

  const handleClick = (key) => {
    setData({
      ...data,
      [key]: data[key] + 1,
    });
  };

  return (
    <div>
      <button onClick={() => handleClick(value.good)}>Good</button>
      <button onClick={() => handleClick(value.neutral)}>Neutral</button>
      <button onClick={() => handleClick(value.bad)}>Bad</button>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}
