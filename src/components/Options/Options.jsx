import { useState, useEffect } from "react";

export default function Options() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Good</button>
      <button onClick={handleClick}>Neutral</button>
      <button onClick={handleClick}>Bad</button>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}
