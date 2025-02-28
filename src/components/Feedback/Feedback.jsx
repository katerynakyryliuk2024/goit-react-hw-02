//import css from "./Feedback.module.css";//
export default function Feedback({ value, total, posAmount }) {
  return (
    <>
      <div>
        <p>Good: {value.good}</p>
        <p>Neutral: {value.neutral}</p>
        <p>Bad: {value.bad}</p>
        <p>Total: {total}</p>
        <p>Positive : {posAmount}%</p>
      </div>
    </>
  );
}
