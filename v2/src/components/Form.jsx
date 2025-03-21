import { useState } from "react";

export const Form = () => {
  const [userName, setUserName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`your form has been submitted ${userName}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};
