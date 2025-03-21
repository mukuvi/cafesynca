import { Counter } from "../components/Counter";
import { Data } from "../components/Data";
import { FetchData } from "../components/FetchData";
import { Form } from "../components/Form";

export const Home = () => {
  return (
    <>
      <FetchData />
      <Form />
      {/* <Counter />
      <Data /> */}
    </>
  );
};
