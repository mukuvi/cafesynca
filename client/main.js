let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let username = id("username"),
  email = id("email'"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value === "") {
    errorMsg[0].innerHTML = "username cannot be blank";
  } else if (email.value === "") {
    errorMsg[1].innerHTML = "email cannot be blank";
  } else if (password.value === "") {
    errorMsg[2].innerHTML = "password cannot be blank";
  } else {
    alert("done");
  }
});
