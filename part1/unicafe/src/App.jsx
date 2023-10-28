import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const FEEDBACK_TYPES = {
  GOOD: "good",
  NEUTRAL: "neutral",
  BAD: "bad",
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{text === "positive" ? `${value}%` : value}</td>
  </tr>
);

const Stats = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;
  let avg = (good * 1 + bad * -1) / total;
  let positive = (good / total) * 100;

  if (total === 0) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={avg.toFixed(1)} />
        <StatisticLine text="positive" value={positive.toFixed(1)} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGoodClick = () => setGood((prevGood) => prevGood + 1);

  const onNeutralClick = () => setNeutral((prevNeutral) => prevNeutral + 1);

  const onBadClick = () => setBad((prevBad) => prevBad + 1);

  return (
    <div>
      <Header text="give geedback" />
      <Button handleClick={onGoodClick} text="good" />
      <Button handleClick={onNeutralClick} text="neutral" />
      <Button handleClick={onBadClick} text="bad" />
      <Header text="statistics" />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
