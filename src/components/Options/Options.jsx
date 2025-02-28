import css from "./Options.module.css";

export default function Options({ onBtnClick, value, resetFeedback }) {
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
    <div className={css.container}>
      <button onClick={() => onBtnClick("good")}>Good </button>
      <button onClick={() => onBtnClick("neutral")}>Neutral</button>
      <button onClick={() => onBtnClick("bad")}>Bad</button>

      {value.good || value.neutral || value.bad !== 0 ? (
        <button onClick={resetFeedback}>Reset</button>
      ) : (
        ""
      )}
    </div>
  );
}
