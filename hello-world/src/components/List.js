import PersonFromList from "./PersonFromList";

//WITH ARRAY
function List2() {
  let arrayMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const listedMonths = arrayMonths.map((month) => <li>{month}</li>);

  return listedMonths;
}

//WITH ARRAY OF OBJECTS
function List4() {
  const variousThings = [
    { name: "Alex", age: 23, color: "blue", id: 1, country: "Mexico" },
    { name: "Jane", age: 32, color: "red", id: 2, country: "Macedonia" },
    {
      name: "George",
      age: 16,
      color: "yellow",
      id: 3,
      country: "United States",
    },
    { name: "Ludwig", age: 49, color: "green", id: 4, country: "France" },
  ];

  //WE GIVE EACH LI A UNIQUE KEY
  const personInterests = variousThings.map((person) => (
    <li key={person.id}>
      My name is {person.name}, I am {person.age} years old. I was born in{" "}
      {person.country} and my favorite color is {person.color}.
    </li>
  ));

  //   return <>{personInterests}</>;
  return personInterests;
}

//REFACTORING EACH PERSON TO ITS OWN FUNCTIONAL COMPONENT
//THE OTHER FILE IS CALLED PERSONFROMLIST.JS
function List3() {
  const variousThings = [
    { name: "Alex", age: 23, color: "blue", id: 5, country: "Mexico" },
    { name: "Jane", age: 32, color: "red", id: 6, country: "Macedonia" },
    {
      name: "George",
      age: 16,
      color: "yellow",
      id: 7,
      country: "United States",
    },
    { name: "Ludwig", age: 49, color: "green", id: 8, country: "France" },
  ];

  //WE GIVE EACH LI A UNIQUE KEY
  const eachPerson = variousThings.map((person) => (
    <PersonFromList key={person.id} person={person} />
  ));
  return <div>{eachPerson}</div>;
}

//WITH ARRAY BUT ADDING UNIQUE KEY BY USING ELEMENT'S INDEX
function List() {
  let arrayMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const listedMonths = arrayMonths.map((month, index) => (
    <li key={index}>{month}</li>
  ));

  return listedMonths;
}

export default List;
