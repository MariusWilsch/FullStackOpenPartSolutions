const DisplayEntry = ({ id, name, num }) => {
  return <p key={id}>{`${name}: ${num}`}</p>;
};

const DisplayPhonebook = (props) => {
  const names = props.persons.map((person) => (
    <DisplayEntry key={person.id} name={person.name} num={person.number} />
  ));

  return <div> {names}</div>;
};

export default DisplayPhonebook;
