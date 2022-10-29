import { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState(
    "Please subscribe, it would help me a lot!"
  );
  return (
    <>
      <h1>{message}</h1>
      <button
        onClick={(event) => {
          event.target.value = setMessage("Thanks for subscribing!");
        }}
      >
        Subscribe
      </button>
    </>
  );
};
export default Message;
