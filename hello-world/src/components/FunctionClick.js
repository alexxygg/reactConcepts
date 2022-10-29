import { useState } from "react";

function FunctionClick() {
  const [] = useState();
  const clickHandler = () => {
    alert("Button clicked.");
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
