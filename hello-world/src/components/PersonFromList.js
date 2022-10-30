function PersonFromList({ person }) {
  return (
    <div>
      <li>
        My name is {person.name}, I am {person.age} years old. I was born in{" "}
        {person.country} and my favorite color is {person.color}.
      </li>
    </div>
  );
}

export default PersonFromList;
