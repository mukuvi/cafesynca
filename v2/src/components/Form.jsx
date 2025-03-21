import { useState } from "react";

export const Form = () => {
  const [userName, setUserName] = useState("");

  return (
    <>
      <label htmlFor="name">Fullname</label>
      <input
        id="name"
        type="text"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
    </>
  );
};
