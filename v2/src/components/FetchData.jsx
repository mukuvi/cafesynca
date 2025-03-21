import { useEffect, useState } from "react";

export const FetchData = () => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    async function userData() {
      let myUser = await fetch("https://jsonplaceholder.typicode.com/users/1");
      let data = await myUser.json();
      setResponse(data);
    }
    userData();
  }, []);
  if (!response) {
    return <p>Loading ...</p>;
  } else {
    return <p>{response.name}</p>;
  }
};
