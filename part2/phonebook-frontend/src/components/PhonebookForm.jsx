import Input from "./Input";

const Form = ({
  newName,
  newNum,
  handleNewPerson,
  handleNewName,
  handleNewNum,
}) => {
  return (
    <form>
      <Input
        value={newName}
        handleEvent={handleNewName}
        placeholder="Add name here"
        text="name: "
      />
      <Input
        value={newNum}
        handleEvent={handleNewNum}
        placeholder="Add phone number here"
        text="number: "
      />
      <div>
        <button type="submit" onClick={handleNewPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default Form;
