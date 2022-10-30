import { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [children, setChildren] = useState("");
  const [password, setPassword] = useState("");
  const [textarea, setTextarea] = useState("");

  const eventHandler = (e) => {
    e.preventDefault();
    alert(`${username} ${children} ${password} ${textarea}`);
    setUsername("");
    setChildren("");
    setPassword("");
    setTextarea("");
  };

  return (
    <form onSubmit={eventHandler}>
      <div>
        <label>Username</label> <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Children</label> <br />
        <select
          value={children}
          defaultValue="--"
          onChange={(e) => setChildren(e.target.value)}
        >
          <option>--</option>
          <option>0</option>
          <option>1</option>
          <option>2 or More</option>
        </select>
      </div>

      <div>
        <label>Password</label> <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label> <br />
        <textarea
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
