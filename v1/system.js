const password = "0000";

let data = [
  {
    name: "james",
    age: 21,
    course: "computer science",
  },
  {
    name: "julia",

    age: 19,
    course: "Banking and finance",
  },
];
const myData = () => {
  let checkPass = password === "000" ? password == true : password == false;

  if (!checkPass) {
    console.log(data);
    console.log("continue");
  } else if (checkPass) {
    console.log("Password wrong");
  } else {
    console.log("stop");
  }
};

myData();
