import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [voteQty, setVoteQty] = useState(0);

  let arr = Object.values(points)
  let max = Math.max(...arr)

  const mostVotedAnecdote = anecdotes[arr.indexOf(max)];

  const H1 = (props) => <h1>{props.text}</h1>;
  const Votes = (props) => <p>has {props.votes} votes</p>;
  

  const nextAnecdote = () => {
    const random = Math.floor(Math.random() * 4);
    setSelected(random);
    setVoteQty(random);
  };

  const vote = () => {
    const copy = { ...points};
    copy[voteQty] = copy[voteQty] + 1;
    setPoints(copy);
  };

  return (
    <>
      <H1 text="Anecdote of the day" />
      <p>{props.anecdotes[selected]}</p>
      <Button text="vote" handleClick={vote} />
      <Button text="next anecdote" handleClick={nextAnecdote} />
      <p>has {points[voteQty]} votes</p>
      <H1 text="Anecdote with most votes" />
      <p>{mostVotedAnecdote}</p>
      <Votes votes = {max} />
      {console.log(max)}
    </>
  );
};

// const vote = () => {
//  setVote(vote + 1)

// }

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);
