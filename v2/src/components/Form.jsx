import { useState } from "react";

export const Form = () => {
  const [userName, setUserName] = useState("mukuvi");

  return (
    <>
      <form>
        <label>name</label>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </form>
    </>
  );
};
