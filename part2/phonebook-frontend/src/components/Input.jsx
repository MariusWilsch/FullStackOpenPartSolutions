const Input = (props) => {
  return (
    <div>
      {props.text}
      <input
        value={props.value}
        onChange={props.handleEvent}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
