import { useState, useEffect } from "react";

export default function Options({ value }) {
  const [clicks1, setClicks1] = useState(value.good);
  const [clicks2, setClicks2] = useState(value.neutral);
  const [clicks3, setClicks3] = useState(value.bad);

  useEffect(() => {
    console.log(clicks1);
  }, [clicks1]);

  useEffect(() => {
    console.log(clicks2);
  }, [clicks2]);

  useEffect(() => {
    console.log(clicks3);
  }, [clicks3]);

  return (
    <div>
      <button onClick={() => setClicks1(clicks1 + 1)}>Good</button>

      <button onClick={() => setClicks2(clicks2 + 1)}>Neutral</button>

      <button onClick={() => setClicks3(clicks3 + 1)}>Bad</button>

      <button
        onClick={() => {
          setClicks1(0), setClicks2(0), setClicks3(0);
        }}
      >
        Reset
      </button>
    </div>
  );

  //const [data, setData] = useState(value);

  //const handleClick = (key) => {
  // setData({
  //   ...data,
  //   [key]: data[key] + 1,
  // });
  // };

  // return (
  //  <div>
  //  <button onClick={() => handleClick(value.good)}/>Good</button>
  //<button onClick={() => handleClick(value.neutral)}>Neutral</button>
  //<button onClick={() => handleClick(value.bad)}>Bad</button>
  // <button onClick={handleClick}>Reset</button>
  /// </div>
  //);
}
