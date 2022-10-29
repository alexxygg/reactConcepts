import ChildComp from "./ChildComp";

function ParentComp() {
  const sayHi = () => {
    alert("Hi parent!");
  };
  return <ChildComp greetHandler={sayHi} />;
}

export default ParentComp;
