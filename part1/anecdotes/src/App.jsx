import { useState } from "react";

const Headline = ({ text }) => <h1>{text}</h1>;

const DisplayText = ({ text }) => <p>{text}</p>;

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const MaxVote = ({ anecdote, voteArr }) => {
  let idx = voteArr.indexOf(Math.max(...voteArr));

  return (
    <div>
      <DisplayText text={anecdote[idx]} />
      <DisplayText text={`has ${voteArr[idx]} votes`} />
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [voteArr, setVoteCnt] = useState(Array(anecdotes.length).fill(0));

  const onAnecdoteClick = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  const onVoteClick = () => {
    const copy = [...voteArr];
    copy[selected] += 1;
    setVoteCnt(copy);
  };

  return (
    <div>
      <Headline text="Anecdote of the day" />
      <DisplayText text={anecdotes[selected]} />
      <DisplayText text={`has ${voteArr[selected]} votes`} />
      <Button handleClick={onVoteClick} text="vote" />
      <Button handleClick={onAnecdoteClick} text="next anecdote" />
      <Headline text="Anecdote with most votes" />
      <MaxVote anecdote={anecdotes} voteArr={voteArr} />
    </div>
  );
};

export default App;
