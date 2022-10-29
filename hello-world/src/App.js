import "./App.css";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import { Greet } from "./components/Greet";
import Message from "./components/Message";
import ParentComp from "./components/ParentComp";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Greet name="A" birthday="July 4th, 1978" />
      <Greet name="B" birthday="March 12th, 1999" />
      <Greet name="C" birthday="January 27th, 2005" />
      <Greet name="D" birthday="December 20th, 1956" />
      <Message />
      <Counter />
      <FunctionClick />
      <ParentComp />
      <p>-</p>
      <UserGreeting />
    </div>
  );
}

export default App;
