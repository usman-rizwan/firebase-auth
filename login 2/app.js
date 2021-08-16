// Show Password
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// console.log(firebase)

// signup
let register = () => {
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let loader = document.getElementById("loader");
  let loaderText = document.getElementById("loaderText");
  loaderText.style.display = "none";
  loader.style.display = "block";

  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((res) => {
      firebase.database().ref(`users/${res.user.uid}`).set({
        username: username.value,
        email: email.value,
        password: password.value,
      })
        .then(() => {
          let successDiv = document.getElementById("successDiv");
          successDiv.innerHTML = "Uer register successfully";
          successDiv.style.display = "block";
          errorDiv.style.display = "none";
          username.value = "";
          email.value = "";
          password.value = "";
          loaderText.style.display = "block";
          loader.style.display = "none";
          setTimeout(
            () => {
              window.location = "login.html"
            }, 1500)
        })

    })
    .catch((err) => {
      let errorDiv = document.getElementById("errorDiv");
      errorDiv.innerHTML = err.message;
      errorDiv.style.display = "block";
      loaderText.style.display = "block";
      loader.style.display = "none";
    });

}
// login
let login = () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let loader = document.getElementById("loader");
  let signupText = document.getElementById("loaderText");
  loaderText.style.display = "none";
  loader.style.display = "block";
  // console.log(email.value, password.value);
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((res) => {
      let successDiv = document.getElementById("successDiv");
      successDiv.innerHTML = "Uer login successfully";
      successDiv.style.display = "block";
      errorDiv.style.display = "none";
      email.value = "";
      password.value = "";
      loaderText.style.display = "block";
      loader.style.display = "none ";
      setTimeout(
        () => {
          window.location = "profile.html"
        }, 1500);


    })
    .catch((err) => {
      console.log("err ==== >", err.message)
      let errorDiv = document.getElementById("errorDiv");
      errorDiv.innerHTML = err.message;
      errorDiv.style.display = "block";
      loaderText.style.display = "block";
      loader.style.display = "none";
    });
}