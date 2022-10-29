export const Greet2 = (props) => {
  return (
    <h2>
      Hello {props.name}, you were born on {props.birthday}.
    </h2>
  );
};

export const Greet3 = (props) => {
  const { name, birthday } = props;
  return (
    <h2>
      Hello {name}, you were born on {birthday}.
    </h2>
  );
};

//We can also destructure props as parameters making code shorter
export const Greet = ({ name, birthday }) => {
  return (
    <h2>
      Hello {name}, you were born on {birthday}.
    </h2>
  );
};
