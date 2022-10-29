function ChildComp(props) {
  return (
    <>
      <button onClick={props.greetHandler}>
        Greet Parent (Child Component button)
      </button>
    </>
  );
}

export default ChildComp;
