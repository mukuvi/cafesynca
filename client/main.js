let id = (id) => document.getElementById("id");
let classes = (classes) => document.getElementsByClassName("classes");
let username = id("username"),
  email = id("email'"),
  password = id("password"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");
errorMsg[0].innerHTML = "hhhhhhh";
