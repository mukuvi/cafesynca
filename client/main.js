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
    failureIcon[0].style.opacity = "1";
  } else {
    errorMsg[0].innerHTML = "";
    failureIcon[0].style.opacity = "0";
    successIcon[0].style.opacity = "1";
  }
});
