import myData from "../Data/myData";

export const Data = () => {
  const alldata = myData.map((data) => {
    return (
      <div key={data.name}>
        <h1>{data.name}</h1> <h1>{data.age}</h1> <h1>{data.school}</h1>
      </div>
    );
  });

  return <div>{alldata}</div>;
};
