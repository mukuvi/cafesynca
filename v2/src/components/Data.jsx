import myData from "../Data/myData";

export const Data = () => {
  const alldata = myData.map((data) => {
    return (
      <div key={data.name}>
        <p>{data.name} </p>
        <p>{data.age}</p>
        <p>{data.school}</p>
      </div>
    );
  });

  return <div>{alldata}</div>;
};
