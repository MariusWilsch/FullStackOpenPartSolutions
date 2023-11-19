const DisplayEntry = ({ id, name, num }) => {
  return <p key={id}>{`${name}: ${num}`}</p>;
};

const DisplayPhonebook = (props) => {
  const names = props.persons.map((person) => (
    <div
      key={person.id}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <button
        style={{ marginRight: "10px" }}
        onClick={props.handleDelete(person.id)}
      >
        delete
      </button>
      <DisplayEntry name={person.name} num={person.number} />
    </div>
  ));

  return <>{names}</>;
};

export default DisplayPhonebook;
