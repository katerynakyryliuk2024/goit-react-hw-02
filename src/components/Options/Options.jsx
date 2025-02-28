export default function Options({ value, onBtnClick }) {
  // const [clicks1, setClicks1] = useState(value.good);
  //const [clicks2, setClicks2] = useState(value.neutral);
  //const [clicks3, setClicks3] = useState(value.bad);

  //useEffect(() => {
  //   console.log(clicks1);
  // }, [clicks1]);

  // useEffect(() => {
  //   console.log(clicks2);
  // }, [clicks2]);

  // useEffect(() => {
  //  console.log(clicks3);
  // }, [clicks3]);
  return (
    <div>
      <button onClick={() => onBtnClick(value.good)}>Good</button>
      <button onClick={() => onBtnClick(value.neutral)}>Neutral</button>
      <button onClick={() => onBtnClick(value.bad)}>Bad</button>
      <button
        onClick={() => {
          onBtnClick(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
